"""Genera el PDF de la Arquitectura de la Experiencia desde su fuente Markdown.

Uso: python3 generar.py fuente.md salida.pdf [es|en]
Reproduce la composición de la edición integrada del 6 de octubre de 2026:
carta, Arial (Liberation Sans, métricamente equivalente), cabecera y pie,
títulos en tres niveles, tablas con cabecera oscura y filas alternas,
índice detallado regenerado, marcadores y enlaces internos.
"""
import re, sys, html, os, calendar
from reportlab import rl_config
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, PageBreak,
                                Table, TableStyle, KeepTogether, CondPageBreak, NextPageTemplate)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfgen import canvas as rl_canvas

F = "/usr/share/fonts/truetype/liberation/"
pdfmetrics.registerFont(TTFont("Arial", F + "LiberationSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", F + "LiberationSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", F + "LiberationSans-Italic.ttf"))
pdfmetrics.registerFont(TTFont("Arial-BoldItalic", F + "LiberationSans-BoldItalic.ttf"))
pdfmetrics.registerFont(TTFont("Mono", F + "LiberationMono-Regular.ttf"))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="Arial-Bold", italic="Arial-Italic", boldItalic="Arial-BoldItalic")

LANG = sys.argv[3] if len(sys.argv) > 3 else "es"
TXT = {
    "es": {"head": "SPORTS WORLD MÉXICO    /    ARQUITECTURA DE LA EXPERIENCIA", "page": "Página {n} de {t}",
           "title": "Arquitectura de la Experiencia Sports World México", "author": "Sports World México"},
    "en": {"head": "SPORTS WORLD MEXICO    /    EXPERIENCE ARCHITECTURE", "page": "Page {n} of {t}",
           "title": "Sports World Experience Architecture - English Edition", "author": "Sports World Mexico"},
}[LANG]

W, H = letter
M = 51.84
LINKC = "#205B7A"
HEAD_BG = colors.HexColor("#303B42")
ALT_BG = colors.HexColor("#F4F6F7")
GRID = colors.HexColor("#D9D9D9")

body = ParagraphStyle("body", fontName="Arial", fontSize=10.2, leading=13, spaceAfter=5.5, alignment=TA_LEFT)
indent = ParagraphStyle("indent", parent=body, leftIndent=14)
h1 = ParagraphStyle("h1", fontName="Arial-Bold", fontSize=17, leading=21, spaceBefore=0, spaceAfter=10)
h2 = ParagraphStyle("h2", fontName="Arial-Bold", fontSize=12.5, leading=15.5, spaceBefore=12, spaceAfter=7)
h3 = ParagraphStyle("h3", fontName="Arial-Bold", fontSize=10.8, leading=13.5, spaceBefore=8, spaceAfter=5)
part = ParagraphStyle("part", fontName="Arial-Bold", fontSize=26, leading=31)
li = ParagraphStyle("li", parent=body, leftIndent=14, bulletIndent=0, bulletFontName="Helvetica", spaceAfter=2.5)
cell = ParagraphStyle("cell", fontName="Arial", fontSize=8.5, leading=10.6)
cellh = ParagraphStyle("cellh", parent=cell, fontName="Arial-Bold", textColor=colors.white)
toc1 = ParagraphStyle("toc1", fontName="Arial-Bold", fontSize=9.1, leading=12, spaceBefore=4)
toc2 = ParagraphStyle("toc2", fontName="Arial", fontSize=8.7, leading=11, leftIndent=12)


def inline(t):
    """Markdown en línea -> mini-HTML de ReportLab."""
    codes = []
    t = re.sub(r"`([^`]+)`", lambda m: codes.append(m.group(1)) or f"\x00{len(codes)-1}\x00", t)
    t = t.replace("\\*", "\x01").replace("\\|", "|")
    t = html.escape(t, quote=False)
    t = t.replace("&lt;br&gt;", "<br/>")
    t = re.sub(r"\[([^\]]+)\]\(#([A-Za-z0-9-]+)\)", rf'<a href="#\2" color="{LINKC}">\1</a>', t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"\*(?!\s)(.+?)(?<!\s)\*", r"<i>\1</i>", t)
    t = t.replace("\x01", "*")
    t = re.sub(r"\x00(\d+)\x00", lambda m: '<font face="Mono" size="8">' + html.escape(codes[int(m.group(1))], quote=False) + "</font>", t)
    return t


class Heading(Paragraph):
    def __init__(self, text, style, level, key, plain):
        super().__init__(f'<a name="{key}"/>' + inline(text), style)
        self.level, self.key, self.plain = level, key, plain


class Doc(BaseDocTemplate):
    def __init__(self, fn, **kw):
        super().__init__(fn, pagesize=letter, leftMargin=M, rightMargin=M, topMargin=58, bottomMargin=50, **kw)
        fr = Frame(M, 50, W - 2 * M, H - 58 - 50, id="f", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
        self.addPageTemplates([PageTemplate("cover", [fr], onPage=lambda c, d: None),
                               PageTemplate("main", [fr], onPage=self.decor)])

    def decor(self, c, d):
        c.saveState()
        c.setFont("Arial", 8)
        c.drawString(M, H - 27.5, TXT["head"])
        c.restoreState()

    def afterFlowable(self, f):
        if isinstance(f, Heading) and f.level <= 2:
            self.notify("TOCEntry", (min(f.level, 2) if f.level else 0, f.plain, self.page, f.key))
            self.canv.bookmarkPage(f.key)
            self.canv.addOutlineEntry(f.plain, f.key, level=max(f.level - 1, 0) if f.level else 0, closed=True)


def numbered_canvas(fmt):
    class NC(rl_canvas.Canvas):
        def __init__(self, *a, **k):
            super().__init__(*a, **k)
            self._st = []

        def showPage(self):
            self._st.append(dict(self.__dict__))
            self._startPage()

        def save(self):
            n = len(self._st)
            for st in self._st:
                self.__dict__.update(st)
                if self._pageNumber > 1:
                    self.setFont("Arial", 8)
                    self.drawRightString(W - M, H - 765.8, fmt.format(n=self._pageNumber, t=n))
                super().showPage()
            super().save()
    return NC


def table_flow(rows, widths, header, size):
    total = sum(widths)
    scale = (W - 2 * M) / total
    cw = [w * scale for w in widths]
    cs = ParagraphStyle("c", parent=cell, fontSize=size or 8.5, leading=(size or 8.5) * 1.25)
    chs = ParagraphStyle("ch", parent=cs, fontName="Arial-Bold", textColor=colors.white)
    data = []
    for i, r in enumerate(rows):
        st = chs if (i == 0 and header) else cs
        data.append([Paragraph(inline(c.replace("**", "") if (i == 0 and header) else c), st) for c in r])
    t = Table(data, colWidths=cw, repeatRows=1 if header else 0, hAlign="LEFT")
    ts = [("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 4.3),
          ("RIGHTPADDING", (0, 0), (-1, -1), 4.3), ("TOPPADDING", (0, 0), (-1, -1), 3.3),
          ("BOTTOMPADDING", (0, 0), (-1, -1), 3.6),
          ("LINEBELOW", (0, 0), (-1, -1), 0.35, GRID)]
    start = 1 if header else 0
    if header:
        ts.append(("BACKGROUND", (0, 0), (-1, 0), HEAD_BG))
    ts.append(("ROWBACKGROUNDS", (0, start), (-1, -1), [colors.white, ALT_BG]))
    t.setStyle(TableStyle(ts))
    t.spaceBefore, t.spaceAfter = 4, 9
    return t


def parse(md):
    lines = md.split("\n")
    story = [NextPageTemplate("main")]
    i = 0
    pending = None   # comentario que modifica el siguiente bloque
    first_h1 = True
    while i < len(lines):
        ln = lines[i]
        if ln.strip() == "<!-- portada -->":
            j = lines.index("<!-- /portada -->", i)
            story = cover(lines[i + 1:j]) + story
            i = j + 1
            continue
        m = re.match(r"<!-- indice: (.+) -->", ln)
        if m:
            story.append(Heading(m.group(1), h2, 2, "indice-detallado", m.group(1)))
            toc = TableOfContents()
            toc.levelStyles = [toc1, toc1, toc2]
            toc.dotsMinLevel = 0
            story.append(toc)
            i += 1
            continue
        if ln.strip() == "<!-- salto -->":
            story.append(PageBreak())
            i += 1
            continue
        if ln.startswith("<!-- tabla") or ln.strip() in ("<!-- parte -->", "<!-- sangria -->"):
            pending = ln.strip()
            i += 1
            if not ln.startswith("<!-- tabla"):
                continue
            mt = re.search(r"anchos=([\d.,]+) letra=([\d.]+|None)( sin-encabezado)?", ln)
            widths = [float(x) for x in mt.group(1).split(",")]
            size = None if mt.group(2) == "None" else float(mt.group(2))
            header = not mt.group(3)
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                if re.fullmatch(r"\|(---\|)+", lines[i].strip()):
                    i += 1
                    continue
                rows.append(split_row(lines[i], len(widths)))
                i += 1
            story.append(table_flow(rows, widths, header, size))
            pending = None
            continue
        mh = re.match(r"^(#{1,3}) (.+?) \{#([a-z0-9-]+)\}\s*$", ln)
        if mh:
            lvl = len(mh.group(1))
            text, key = mh.group(2), mh.group(3)
            plain = re.sub(r"[*`]", "", text)
            if pending == "<!-- parte -->":
                story += [PageBreak(), Spacer(1, 196), Heading(text, part, 0, key, plain), PageBreak()]
            elif lvl == 1:
                if not first_h1 and not isinstance(story[-1], PageBreak):
                    story.append(PageBreak())
                story.append(Heading(text, h1, 1, key, plain))
                first_h1 = False
            else:
                story.append(CondPageBreak(60))
                story.append(Heading(text, h2 if lvl == 2 else h3, lvl, key, plain))
            pending = None
            i += 1
            continue
        ml = re.match(r"^(- |(\d+)\. )(.*)$", ln)
        if ml:
            bullet = "•" if ml.group(1) == "- " else ml.group(2) + "."
            story.append(Paragraph(inline(ml.group(3)), li, bulletText=bullet))
            i += 1
            continue
        if ln.strip() == "" or re.fullmatch(r"<!--.*-->", ln.strip()):
            i += 1
            continue
        story.append(Paragraph(inline(ln), indent if pending == "<!-- sangria -->" else body))
        pending = None
        i += 1
    return story


def split_row(ln, n):
    s = ln.strip()[1:-1]
    cells = re.split(r"(?<!\\) \| ", " " + s + " ")
    cells = [c.strip() for c in cells]
    return (cells + [""] * n)[:n]


def cover(ls):
    s15 = ParagraphStyle("c15", fontName="Arial-Bold", fontSize=15, leading=18)
    s30 = ParagraphStyle("c30", fontName="Arial-Bold", fontSize=30, leading=36, spaceBefore=12)
    s14 = ParagraphStyle("c14", fontName="Arial", fontSize=14, leading=17, spaceBefore=6, spaceAfter=8)
    s10 = ParagraphStyle("c10", fontName="Arial", fontSize=10.2, leading=18.5)
    out = [Spacer(1, 95), Paragraph(inline(ls[0]), s15), Paragraph(inline(ls[1]), s30), Paragraph(inline(ls[2]), s14)]
    rest = ls[3:]
    para = [x for x in rest[5:]]
    for x in rest[:5]:
        out.append(Paragraph(inline(x), s10))
    out.append(Spacer(1, 22))
    out.append(Paragraph(inline(" ".join(para)), body))
    out.append(NextPageTemplate("main"))
    out.append(PageBreak())
    return out


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    md = open(src, encoding="utf-8").read()
    # Salida reproducible: mismos bytes para la misma fuente. La fecha del PDF es
    # la fecha de edición que declara la fuente.
    m = re.search(r"<!-- fecha-edicion: (\d{4})-(\d{2})-(\d{2}) -->", md)
    if not m:
        sys.exit("la fuente debe declarar <!-- fecha-edicion: AAAA-MM-DD -->")
    os.environ["SOURCE_DATE_EPOCH"] = str(calendar.timegm((int(m[1]), int(m[2]), int(m[3]), 12, 0, 0)))
    rl_config.invariant = 1
    story = parse(md)
    doc = Doc(dst, title=TXT["title"], author=TXT["author"])
    doc.multiBuild(story, canvasmaker=numbered_canvas(TXT["page"]))
    print("ok", dst)
