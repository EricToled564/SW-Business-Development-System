"""Ensambla los elementos extraídos (líneas) en bloques y escribe Markdown.

Uso: python3 ensamblar.py entrada.raw.json salida.md
"""
import sys, json, re

FULL = 515          # una línea que llega aquí está "llena": el párrafo continúa
PARA_GAP = 15.5     # separación vertical entre líneas base que abre párrafo nuevo


def esc_cell(t):
    return t.replace("|", "\\|")


def main(src, dst):
    data = json.load(open(src))
    els = data["elements"]
    toc = data["toc"]
    # destino de enlaces: página -> ancla del primer título que empieza en ella
    blocks = []
    prev = None          # última línea de texto vista (para continuidad)
    pending_break = False
    page_last_bottom = {}
    for e in els:
        if e["t"] in ("p", "li", "h1", "h2", "h3", "title"):
            page_last_bottom[e["page"]] = e["bot"]
        elif e["t"] == "table":
            page_last_bottom[e["page"]] = e["y1"]
    last_page_seen = 1
    for e in els:
        t = e["t"]
        if t == "cover":
            blocks.append({"k": "cover", "lines": e["lines"]})
            continue
        if t == "toc":
            blocks.append({"k": "toc", "level": e["level"], "text": e["text"]})
            prev = None
            continue
        if t == "pageend":
            continue
        page = e["page"]
        newpage = e.get("first") and page != last_page_seen
        last_page_seen = page
        # salto de página explícito: un título que abre página cuando la anterior quedó corta
        if newpage and t in ("h1", "h2", "h3", "title") and page_last_bottom.get(page - 1, 999) < 640:
            blocks.append({"k": "pagebreak"})
        if t == "table":
            last = blocks[-1] if blocks else None
            if (newpage and last and last["k"] == "table" and len(last["widths"]) == len(e["widths"])
                    and all(abs(a - b) < 2 for a, b in zip(last["widths"], e["widths"]))):
                rows = e["rows"]
                if e["header"] and rows and rows[0] == last["rows"][0]:
                    rows = rows[1:]
                last["rows"].extend(rows)
            else:
                blocks.append({"k": "table", "rows": e["rows"], "header": e["header"], "widths": e["widths"],
                               "size": e["size"]})
            prev = None
            continue
        if t in ("h1", "h2", "h3", "title"):
            level = {"title": 0, "h1": 1, "h2": 2, "h3": 3}[t]
            last = blocks[-1] if blocks else None
            if prev and prev["t"] == t and last and last["k"] == "h" and last["level"] == level and not newpage \
                    and e["y"] - prev["y"] < 26:
                last["md"] += " " + e["md"]
            else:
                blocks.append({"k": "h", "level": level, "md": e["md"], "page": page})
            prev = e
            continue
        if t == "li":
            blocks.append({"k": "li", "marker": e["marker"], "md": e["md"], "x": e["x"]})
            prev = e
            continue
        # párrafo
        last = blocks[-1] if blocks else None
        cont = False
        if prev and last and last["k"] in ("p", "li"):
            if newpage:
                cont = prev["x1"] > FULL and (
                    (last["k"] == "p" and abs(e["x"] - prev["x"]) < 3) or (last["k"] == "li" and e["x"] > 60))
            else:
                gap = e["y"] - prev["y"]
                if last["k"] == "li":
                    cont = e["x"] > 60 and gap < PARA_GAP
                else:
                    cont = gap < PARA_GAP and abs(e["x"] - prev["x"]) < 3
        if cont:
            last["md"] = join(last["md"], e["md"])
        else:
            blocks.append({"k": "p", "md": e["md"], "x": e["x"]})
        prev = e
    write(blocks, toc, dst)


def join(a, b):
    a = a.rstrip()
    # fusiona marcas adyacentes: "**x**" + "**y**" -> "**x y**"
    for m in ("**", "`"):
        if a.endswith(m) and b.startswith(m) and not a.endswith(m * 2 if m == "`" else "***"):
            return a[: -len(m)] + " " + b[len(m):]
    return a + " " + b


def slugify(t, used):
    import unicodedata
    t = re.sub(r"[*`\[\]()#]", "", t)
    t = unicodedata.normalize("NFKD", t).encode("ascii", "ignore").decode().lower()
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")[:60] or "s"
    base, n = t, 1
    while t in used:
        n += 1; t = f"{base}-{n}"
    used.add(t)
    return t


def write(blocks, toc, dst):
    # anclas de título y mapa página -> ancla (para los enlaces internos)
    used, heads = set(), []
    for b in blocks:
        if b["k"] == "h":
            b["id"] = slugify(strip_bold(b["md"]), used)
            heads.append((b["page"], b["id"]))
    def anchor_for(pg):
        same = [h for p, h in heads if p == pg]
        if same:
            return same[0]
        before = [h for p, h in heads if p < pg]
        return before[-1] if before else heads[0][1]
    def fix_links(t):
        return re.sub(r"\(#p(\d+)\)", lambda m: "(#" + anchor_for(int(m.group(1))) + ")", t)
    for b in blocks:
        if "md" in b:
            b["md"] = fix_links(b["md"])
        if b["k"] == "table":
            b["rows"] = [[fix_links(c) if c else c for c in r] for r in b["rows"]]
    out = []
    for b in blocks:
        k = b["k"]
        if k == "cover":
            out.append("<!-- portada -->")
            out.extend(b["lines"])
            out.append("<!-- /portada -->\n")
        elif k == "toc":
            out.append("<!-- indice: " + b["text"] + " -->\n")
        elif k == "pagebreak":
            out.append("<!-- salto -->\n")
        elif k == "h":
            if b["level"] == 0:
                out.append("<!-- parte -->")
                out.append("# " + strip_bold(b["md"]) + " {#" + b["id"] + "}\n")
            else:
                out.append("#" * b["level"] + " " + strip_bold(b["md"]) + " {#" + b["id"] + "}\n")
        elif k == "p":
            ind = " indent" if b.get("x", 51.8) > 60 else ""
            if ind:
                out.append("<!-- sangria -->")
            out.append(b["md"] + "\n")
        elif k == "li":
            mk = "-" if b["marker"] == "•" else b["marker"]
            out.append(mk + " " + b["md"])
            out.append("")
        elif k == "table":
            out.append("<!-- tabla anchos=" + ",".join(str(w) for w in b["widths"]) +
                       f" letra={b['size']}" + ("" if b["header"] else " sin-encabezado") + " -->")
            rows = b["rows"]
            ncol = len(b["widths"])
            for i, r in enumerate(rows):
                cells = [esc_cell(c) if c is not None else "" for c in r] + [""] * (ncol - len(r))
                out.append("| " + " | ".join(cells[:ncol]) + " |")
                if i == 0:
                    out.append("|" + "---|" * ncol)
            out.append("")
    # listas: quitar líneas en blanco entre viñetas consecutivas
    txt = "\n".join(out)
    txt = re.sub(r"\n(- |\d+\. )([^\n]*)\n\n(?=(- |\d+\. ))", r"\n\1\2\n", txt)
    txt = re.sub(r"\n(- |\d+\. )([^\n]*)\n\n(?=(- |\d+\. ))", r"\n\1\2\n", txt)
    open(dst, "w").write(txt.rstrip() + "\n")


def strip_bold(md):
    m = re.fullmatch(r"\*\*(.*)\*\*", md.strip())
    return m.group(1) if m else md.strip()


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
