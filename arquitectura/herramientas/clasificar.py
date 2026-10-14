import sys, re, json
from comparar import words, opcodes
orig, new, md = sys.argv[1], sys.argv[2], sys.argv[3]
a, b = words(orig), words(new)
ops = opcodes(a, b)
heads = set()
for ln in open(md):
    pass
txt = open(md).read()
for m in re.finditer(r"<!-- tabla[^\n]*\n\|([^\n]*)\|\n\|(?:---\|)+", txt):
    cells = [re.sub(r"[*`\[\]]|\(#[^)]*\)", "", c).strip() for c in m.group(1).split(" | ")]
    heads.add(" ".join(" ".join(cells).split()))
cnt = {"corte de palabra": 0, "cabecera de tabla repetida": 0, "otra": 0}
otras = []
# las cabeceras pueden moverse: compensar inserciones con borrados del mismo texto
ins, dele = {}, {}
for tag, i1, i2, j1, j2 in ops:
    A, B = " ".join(a[i1:i2]), " ".join(b[j1:j2])
    if A.replace(" ", "") == B.replace(" ", ""):
        cnt["corte de palabra"] += 1; continue
    if (not A and B in heads) or (not B and A in heads):
        cnt["cabecera de tabla repetida"] += 1; continue
    # cabecera + otro contenido igual
    rest = B
    for h in sorted(heads, key=len, reverse=True):
        if h and h in rest and not A:
            rest = rest.replace(h, "").strip()
    if not A and not rest:
        cnt["cabecera de tabla repetida"] += 1; continue
    cnt["otra"] += 1; otras.append((A[:200], B[:200]))
print(len(ops), cnt)
for o in otras[:200]: print("  ", o)
