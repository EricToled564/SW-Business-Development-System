#!/usr/bin/env python3
# Pure-Python PDF generator (no deps). Parses the KB HTML into blocks and paginates.
import re, html, sys

SRC = "/home/user/Final-Upgrade-Webpage/resultados/ux-v1/kb/voice-agent-knowledge-base.html"
OUT = "/home/user/Final-Upgrade-Webpage/resultados/ux-v1/kb/voice-agent-knowledge-base.pdf"

raw = open(SRC, encoding="utf-8").read()
body = re.search(r"<body>(.*)</body>", raw, re.S).group(1)

def text_of(s):
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    s = s.replace("→", "->")
    s = re.sub(r"\s+", " ", s).strip()
    return s

blocks = []  # (kind, payload)
for m in re.finditer(r"<(h1|h2|h3|p|ul|table|div)([^>]*)>(.*?)</\1>", body, re.S):
    tag, _attrs, inner = m.group(1), m.group(2), m.group(3)
    if tag in ("h1", "h2", "h3", "p"):
        blocks.append((tag, text_of(inner)))
    elif tag == "div":
        blocks.append(("note", text_of(inner)))
    elif tag == "ul":
        for li in re.finditer(r"<li>(.*?)</li>", inner, re.S):
            blocks.append(("li", text_of(li.group(1))))
    elif tag == "table":
        for row in re.findall(r"<tr>(.*?)</tr>", row_src := inner, re.S):
            cells = [text_of(c) for c in re.findall(r"<t[hd][^>]*>(.*?)</t[hd]>", row, re.S)]
            blocks.append(("trh" if "<th" in row else "tr", cells))

# ---- layout ----
PW, PH = 612.0, 792.0
ML, MR, MT, MB = 54.0, 54.0, 56.0, 60.0
UW = PW - ML - MR
FONT = {"reg": "F1", "bold": "F2", "obl": "F3"}

STYLE = {
    "h1":  ("bold", 18, 0.56, 18, 6),
    "h2":  ("bold", 14, 0.56, 16, 5),
    "h3":  ("bold", 11.5, 0.55, 10, 3),
    "p":   ("reg", 10.5, 0.50, 3, 3),
    "li":  ("reg", 10.5, 0.50, 1, 1),
    "note":("obl", 10, 0.51, 8, 6),
    "tr":  ("reg", 9.5, 0.50, 1, 1),
    "trh": ("bold", 9.5, 0.53, 4, 1),
}

def wrap(t, size, factor, indent=0):
    maxc = max(8, int((UW - indent) / (size * factor)))
    out, line = [], ""
    for w in t.split(" "):
        while len(w) > maxc:
            if line:
                out.append(line); line = ""
            out.append(w[:maxc]); w = w[maxc:]
        if not line:
            line = w
        elif len(line) + 1 + len(w) <= maxc:
            line += " " + w
        else:
            out.append(line); line = w
    if line:
        out.append(line)
    return out or [""]

pages, ops, y = [], [], PH - MT
def newpage():
    global ops, y
    if ops:
        pages.append(ops)
    ops, y = [], PH - MT

for kind, payload in blocks:
    fontkey, size, factor, sb, sa = STYLE[kind]
    indent = 12 if kind == "li" else 0
    if kind in ("tr", "trh"):
        text = "   ".join(c for c in payload if c)
    elif kind == "li":
        text = "•  " + payload
    else:
        text = payload
    lines = wrap(text, size, factor, indent)
    y -= sb
    lh = size * 1.32
    for ln in lines:
        if y - lh < MB:
            newpage()
        ops.append((ML + indent, y - size, fontkey, size, ln))
        y -= lh
    y -= sa
newpage()

# ---- PDF assembly ----
def esc(s):
    b = s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
    return b.encode("cp1252", "replace")

objs = []
def add(b):
    objs.append(b); return len(objs)

# fonts
f1 = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
f2 = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
f3 = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>")
fontmap = {"F1": f1, "F2": f2, "F3": f3}

pages_obj_id = len(objs) + 1  # placeholder; will be created after pages
# We must know /Pages id before page objects reference it. Reserve it.
objs.append(None)  # reserve slot for Pages (id = pages_obj_id)

page_ids = []
content_ids = []
for pg in pages:
    parts = [b"BT"]
    for (x, yy, fk, size, txt) in pg:
        parts.append(b"/%s %s Tf" % (FONT_NONE := fk.encode(), (b"%.2f" % size)))
        parts.append(b"%.2f %.2f Td (%s) Tj" % (x, yy, esc(txt)))
        parts.append(b"0 0 Td")  # reset relative origin baseline (Td is relative; re-set each line absolutely)
    # Because Td is relative, easier: rebuild with absolute positioning per line via Tm
    parts = [b"BT"]
    for (x, yy, fk, size, txt) in pg:
        parts.append(b"/%s %.2f Tf" % (fk.encode(), size))
        parts.append(b"1 0 0 1 %.2f %.2f Tm (%s) Tj" % (x, yy, esc(txt)))
    parts.append(b"ET")
    stream = b"\n".join(parts)
    cid = add(b"<< /Length %d >>\nstream\n%s\nendstream" % (len(stream), stream))
    content_ids.append(cid)

for cid in content_ids:
    res = b"<< /Font << /F1 %d 0 R /F2 %d 0 R /F3 %d 0 R >> >>" % (f1, f2, f3)
    pid = add(b"<< /Type /Page /Parent %d 0 R /MediaBox [0 0 %.0f %.0f] /Resources %s /Contents %d 0 R >>"
              % (pages_obj_id, PW, PH, res, cid))
    page_ids.append(pid)

kids = b" ".join(b"%d 0 R" % p for p in page_ids)
objs[pages_obj_id - 1] = b"<< /Type /Pages /Count %d /Kids [%s] >>" % (len(page_ids), kids)

info = add(b"<< /Title (Sports World UX - Base de Conocimiento para Agente de Voz \\(TI\\)) "
           b"/Author (Final Upgrade AI) /Subject (Localizador de la documentacion UX para agente de voz ElevenLabs) "
           b"/Keywords (Sports World, UX, TI, CRM, servidor, BES, soporte, entregables, documentacion) >>")
catalog = add(b"<< /Type /Catalog /Pages %d 0 R >>" % pages_obj_id)

# write file with xref
buf = b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"
offsets = [0] * (len(objs) + 1)
for i, o in enumerate(objs, start=1):
    offsets[i] = len(buf)
    buf += b"%d 0 obj\n%s\nendobj\n" % (i, o)
xref_pos = len(buf)
buf += b"xref\n0 %d\n" % (len(objs) + 1)
buf += b"0000000000 65535 f \n"
for i in range(1, len(objs) + 1):
    buf += b"%010d 00000 n \n" % offsets[i]
buf += b"trailer\n<< /Size %d /Root %d 0 R /Info %d 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (
    len(objs) + 1, catalog, info, xref_pos)

open(OUT, "wb").write(buf)
print("PDF written:", OUT, "pages:", len(pages), "bytes:", len(buf))
