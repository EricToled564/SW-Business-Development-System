"""Compara palabra por palabra dos PDF de la Arquitectura (sin cabecera, pie ni índice).

Uso: python3 comparar.py original.pdf nuevo.pdf [--max N]
Imprime el número de palabras de cada uno, el de diferencias y las primeras.
"""
import sys, re, difflib
import pymupdf

HEAD = re.compile(r"^(SPORTS WORLD M[ÉE]XICO\s+/\s+.*|P[áa]gina \d+ de \d+|Page \d+ of \d+)$")


def words(pdf):
    d = pymupdf.open(pdf)
    out = []
    in_toc = False
    for p in d:
        for b in p.get_text("dict")["blocks"]:
            for l in b.get("lines", []):
                txt = "".join(sp["text"] for sp in l["spans"]).strip()
                size = max((sp["size"] for sp in l["spans"] if sp["text"].strip()), default=0)
                if not txt or HEAD.match(txt):
                    continue
                if re.match(r"^0\.3 ", txt) and size > 12:
                    in_toc = True
                    continue
                if in_toc:
                    if size > 12:
                        in_toc = False
                    else:
                        continue
                if txt == "•":
                    continue
                out.extend(txt.replace("•", " ").split())
    return out


def opcodes(a, b):
    import subprocess, tempfile, os
    fa = tempfile.NamedTemporaryFile("w", delete=False); fa.write("\n".join(a) + "\n"); fa.close()
    fb = tempfile.NamedTemporaryFile("w", delete=False); fb.write("\n".join(b) + "\n"); fb.close()
    r = subprocess.run(["diff", fa.name, fb.name], capture_output=True, text=True).stdout
    os.unlink(fa.name); os.unlink(fb.name)
    ops = []
    for m in re.finditer(r"^(\d+)(?:,(\d+))?([acd])(\d+)(?:,(\d+))?$", r, re.M):
        i1, i2, k, j1, j2 = int(m[1]), int(m[2] or m[1]), m[3], int(m[4]), int(m[5] or m[4])
        if k == "a":
            ops.append(("insert", i1, i1, j1 - 1, j2))
        elif k == "d":
            ops.append(("delete", i1 - 1, i2, j1, j1))
        else:
            ops.append(("replace", i1 - 1, i2, j1 - 1, j2))
    return ops


if __name__ == "__main__":
    a, b = words(sys.argv[1]), words(sys.argv[2])
    mx = int(sys.argv[sys.argv.index("--max") + 1]) if "--max" in sys.argv else 40
    ops = opcodes(a, b)
    print(f"original {len(a)} palabras · nuevo {len(b)} palabras · {len(ops)} diferencias")
    for tag, i1, i2, j1, j2 in ops[:mx]:
        ctx = " ".join(a[max(0, i1 - 6):i1])
        print(f"- {tag}: «{' '.join(a[i1:i2])[:160]}» → «{' '.join(b[j1:j2])[:160]}»   (tras: …{ctx[-70:]})")
