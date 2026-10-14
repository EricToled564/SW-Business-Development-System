"""Convierte el PDF de la Arquitectura (ReportLab) en una fuente Markdown editable.

Uso: python3 extraer.py entrada.pdf salida.md
La salida conserva títulos, párrafos, listas, tablas (con anchos), código,
negritas, cursivas y enlaces internos. El índice detallado no se extrae: el
generador lo vuelve a construir.
"""
import sys, re, json
import pymupdf

WHITE = 16777215
LINK = 2120570
TOP, BOTTOM = 40, 745          # encabezado y pie de página quedan fuera
LEFT = 51.8


def norm(t):
    return t.replace(" ", " ")


def span_md(spans):
    """Spans de una línea -> texto con **negritas** y *cursivas*."""
    out = []
    for s in spans:
        t = norm(s["text"])
        if not t:
            continue
        bold = "Bold" in s["font"]
        ital = "Italic" in s["font"] or "Oblique" in s["font"]
        code = "Consolas" in s["font"]
        out.append((t, bold, ital, s["color"] == LINK, s["bbox"], code))
    return out


def runs_to_md(runs):
    """Une runs contiguos con el mismo estilo y aplica marcas."""
    res, cur = [], None
    for t, b, i, l, _, c in runs:
        key = (b, i, l, c)
        if cur and cur[0] == key:
            cur[1] += t
        else:
            if cur:
                res.append(cur)
            cur = [key, t]
    if cur:
        res.append(cur)
    out = ""
    for (b, i, l, c), t in res:
        core = t.strip()
        if not core:
            out += t
            continue
        lead = t[: len(t) - len(t.lstrip())]
        trail = t[len(t.rstrip()):]
        if c:
            core = "`" + core + "`"
        else:
            core = core.replace("*", "\\*")
        if l:
            core = "[" + core + "](#LINK)"
        if b:
            core = "**" + core + "**"
        if i:
            core = "*" + core + "*"
        out += lead + core + trail
    return out


def page_lines(page, rects=None):
    """Líneas visuales (agrupadas por línea base) con sus spans.
    Con rects, sólo se funden fragmentos que caen en el mismo rectángulo."""
    raw = []
    for b in page.get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            sp = [s for s in l["spans"] if s["text"]]
            if not sp:
                continue
            raw.append({"y": round(sp[0]["origin"][1], 1), "x0": l["bbox"][0], "x1": l["bbox"][2],
                        "top": l["bbox"][1], "bot": l["bbox"][3], "spans": sp})
    raw.sort(key=lambda r: (r["y"], r["x0"]))
    merged = []
    for r in raw:
        same_cell = True
        if rects is not None and merged:
            ca = [i for i, q in enumerate(rects) if q.x0 - 1 <= merged[-1]["x0"] + 2 <= q.x1 and q.y0 - 1 <= (merged[-1]["top"] + merged[-1]["bot"]) / 2 <= q.y1 + 1]
            cb = [i for i, q in enumerate(rects) if q.x0 - 1 <= r["x0"] + 2 <= q.x1 and q.y0 - 1 <= (r["top"] + r["bot"]) / 2 <= q.y1 + 1]
            same_cell = ca == cb
        if merged and same_cell and abs(merged[-1]["y"] - r["y"]) < 1.5 and r["x0"] >= merged[-1]["x1"] - 2:
            m = merged[-1]
            gap = r["x0"] - m["x1"]
            if gap > 1.0 and not m["spans"][-1]["text"].endswith(" "):
                m["spans"].append({**r["spans"][0], "text": " ", "font": r["spans"][0]["font"]})
            m["spans"].extend(r["spans"])
            m["x1"] = r["x1"]; m["bot"] = max(m["bot"], r["bot"])
        else:
            merged.append(r)
    return merged


def main_font(spans):
    tot = {}
    only_code = all("Consolas" in s["font"] or s["font"].startswith("Helvetica") or not s["text"].strip() for s in spans)
    for s in spans:
        if s["font"].startswith("Helvetica"):
            continue
        if "Consolas" in s["font"] and not only_code:
            continue
        k = (s["font"], round(s["size"], 1))
        tot[k] = tot.get(k, 0) + len(s["text"].strip())
    if not tot:
        s = spans[0]
        return (s["font"], round(s["size"], 1))
    return max(tot, key=tot.get)


def classify(line):
    font, size = main_font(line["spans"])
    first = line["spans"][0]
    txt = "".join(s["text"] for s in line["spans"])
    if size >= 25:
        return "title"
    if size >= 16.5:
        return "h1"
    if 12 <= size < 13:
        return "h2"
    if 10.6 <= size < 11:
        return "h3"
    if 13.5 <= size < 14.5:
        return "subtitle"
    if "Consolas" in font:
        return "p"
    if first["font"].startswith("Helvetica") and re.match(r"^\s*(•|\d+\.)\s*$", first["text"]):
        return "li"
    if re.match(r"^•\s", txt):
        return "li"
    return "p"


def extract(pdf):
    doc = pymupdf.open(pdf)
    # anclas: página -> primer título de esa página (para resolver enlaces)
    toc = doc.get_toc()
    elements = []          # lista de dicts
    link_targets = []      # (página_origen, rect, página_destino)
    toc_mode = False
    for pno in range(doc.page_count):
        page = doc[pno]
        links = [(l["from"], l.get("page")) for l in page.get_links() if l["kind"] == 1]
        tabs = page.find_tables().tables
        tab_rects = [pymupdf.Rect(t.bbox) for t in tabs]
        lines = [l for l in page_lines(page) if TOP < l["y"] < BOTTOM]
        if pno == 0:
            cover = [ "".join(s["text"] for s in l["spans"]).strip() for l in lines]
            elements.append({"t": "cover", "lines": cover})
            continue
        items = []
        for t, r in zip(tabs, tab_rects):
            items.append(("table", r.y0, t))
        for l in lines:
            cy = (l["top"] + l["bot"]) / 2
            if any(r.x0 - 1 <= (l["x0"] + 2) <= r.x1 + 1 and r.y0 - 1 <= cy <= r.y1 + 1 for r in tab_rects):
                continue
            items.append(("line", l["top"], l))
        items.sort(key=lambda it: it[1])
        first_on_page = True
        for kind, _, obj in items:
            if kind == "table":
                elements.append(table_el(obj, page, links, pno, first_on_page))
                first_on_page = False
                continue
            l = obj
            c = classify(l)
            txt = "".join(s["text"] for s in l["spans"]).strip()
            if c in ("h1", "h2") and re.match(r"^0\.3 ", txt):
                toc_mode = True
                elements.append({"t": "toc", "level": 2 if c == "h2" else 1, "text": txt})
                continue
            if toc_mode:
                if c in ("h1", "h2") and not re.match(r"^0\.3 ", txt):
                    toc_mode = False
                else:
                    continue
            runs = span_md([s for s in l["spans"] if not (s["font"].startswith("Helvetica") and re.match(r"^\s*(•|\d+\.)\s*$", s["text"]))])
            # enlaces: marcar destino por rect
            md = runs_to_md(runs)
            md = attach_links(md, runs, links)
            el = {"t": c, "md": md, "x": round(l["x0"], 1), "y": l["y"], "top": l["top"], "bot": l["bot"],
                  "x1": l["x1"], "page": pno + 1, "first": first_on_page,
                  "size": main_font(l["spans"])[1], "font": main_font(l["spans"])[0]}
            if c == "li":
                f = l["spans"][0]["text"].strip()
                m = re.match(r"^(•|\d+\.)", f)
                el["marker"] = m.group(1) if m else "•"
                el["mx"] = round(l["spans"][0]["bbox"][0], 1)
                if el["marker"] == "•" and el["md"].startswith("•"):
                    el["md"] = el["md"][1:].lstrip()
            if c == "code":
                el["raw"] = "".join(s["text"] for s in l["spans"])
                el["indent"] = round(l["x0"], 1)
            elements.append(el)
            first_on_page = False
        elements.append({"t": "pageend", "page": pno + 1})
    return elements, toc


def attach_links(md, runs, links):
    """Sustituye cada (#LINK) por (#p<destino>), con la misma agrupación de runs_to_md."""
    groups, cur = [], None
    for t, b, i, l, bbox, c in runs:
        key = (b, i, l, c)
        if cur is not None and cur[0] == key:
            cur[1].append(bbox)
        else:
            cur = [key, [bbox]]
            groups.append(cur)
    for key, boxes in groups:
        if not key[2]:
            continue
        dest = None
        for bb in boxes:
            r = pymupdf.Rect(bb)
            for fr, pg in links:
                if fr.intersects(r):
                    dest = pg
                    break
            if dest is not None:
                break
        md = md.replace("(#LINK)", f"(#p{(dest + 1) if dest is not None else 0})", 1)
    return md


def table_el(t, page, links, pno, first):
    rows = t.rows
    xs = sorted({round(c[0], 1) for r in rows for c in r.cells if c} | {round(t.bbox[2], 1)})
    cols = [c for c in rows[0].cells]
    bounds = [(c[0], c[2]) for c in cols if c]
    cell_rects = [pymupdf.Rect(c) for r in rows for c in r.cells if c]
    lines = page_lines(page, cell_rects)
    grid = []
    header = False
    for ri, r in enumerate(rows):
        row = []
        for c in r.cells:
            if c is None:
                row.append(None)
                continue
            rect = pymupdf.Rect(c)
            cl = [l for l in lines if rect.x0 - 1 <= l["x0"] + 2 <= rect.x1 and rect.y0 - 1 <= (l["top"] + l["bot"]) / 2 <= rect.y1 + 1]
            parts = []
            white = False
            for l in cl:
                sp = [s for s in l["spans"] if not (s["font"].startswith("Helvetica") and re.match(r"^\s*(•|\d+\.)\s*$", s["text"]))]
                bullet = len(sp) != len(l["spans"]) or "".join(s["text"] for s in l["spans"]).lstrip().startswith("•")
                if any(s["color"] == WHITE for s in sp):
                    white = True
                runs = span_md(sp)
                md = attach_links(runs_to_md(runs), runs, links)
                if bullet:
                    md = "• " + md.lstrip("• ").lstrip()
                parts.append({"md": md, "x": l["x0"], "bullet": bullet, "code": "Consolas" in main_font(l["spans"])[0]})
            # unir líneas de una celda: las viñetas abren línea nueva
            text = ""
            for i, p in enumerate(parts):
                if i == 0:
                    text = p["md"]
                elif p["bullet"] or p["code"]:
                    text += "<br>" + p["md"]
                else:
                    text += " " + p["md"]
            if ri == 0 and white:
                header = True
            row.append(text.strip())
        grid.append(row)
    widths = [round(b[1] - b[0], 1) for b in bounds]
    size = None
    for l in lines:
        if pymupdf.Rect(t.bbox).contains(pymupdf.Point(l["x0"] + 2, (l["top"] + l["bot"]) / 2)):
            size = main_font(l["spans"])[1]
            if not any(s["color"] == WHITE for s in l["spans"]):
                break
    return {"t": "table", "rows": grid, "header": header, "widths": widths, "x0": round(t.bbox[0], 1),
            "y0": round(t.bbox[1], 1), "y1": round(t.bbox[3], 1), "page": pno + 1, "first": first, "size": size}


if __name__ == "__main__":
    els, toc = extract(sys.argv[1])
    json.dump({"elements": els, "toc": toc}, open(sys.argv[2], "w"), ensure_ascii=False, indent=0)
    from collections import Counter
    print(Counter(e["t"] for e in els))
