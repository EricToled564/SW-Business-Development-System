# Genera el .doc (MS Word 97) de la tabla de requerimientos del área comercial.
#
# Pipeline: markdown -> HTML -> pandoc -> ODT -> parche XML -> LibreOffice -> .doc
#
# El parche XML existe porque pandoc no traslada el CSS de celda al ODT. Se inyectan
# a mano las tres propiedades que el documento necesita:
#   · borde en todas las celdas y sombreado en la fila de encabezado;
#   · fo:keep-together en cada fila — ninguna fila se parte entre páginas;
#   · anchos de columna proporcionales.
# El encabezado se repite por página gracias al <thead> del HTML, que pandoc mapea
# a <table:table-header-rows>.
#
# Uso:  python3 correspondencia/build_doc.py

import pathlib, re, shutil, subprocess, zipfile, tempfile
import markdown

RAIZ = pathlib.Path(__file__).resolve().parent
FUENTE = RAIZ / "informacion-area-comercial-academia.es.md"
SALIDA = RAIZ / "Requerimientos del area comercial - Academia.doc"
TITULO = "Proyecto C · Academia Sports World — Información requerida del área comercial"

NBSP = " "
BORDE = "0.5pt solid #6b7785"
ANCHOS = [750, 1900, 3050, 1900, 2400]   # #, Información, Para qué, Tipo, ¿La tienen?

CSS = """
body { font-family:'Liberation Sans','Arial',sans-serif; font-size:9.5pt; }
h1 { font-size:15pt; margin:0 0 10pt 0; }
h2 { font-size:11.5pt; margin:14pt 0 5pt 0; page-break-after:avoid; }
table { border-collapse:collapse; width:100%; margin:0 0 6pt 0; }
th, td { padding:4pt 5pt; font-size:9pt; vertical-align:top; }
tr { page-break-inside:avoid; }
"""


def fuente_markdown() -> str:
    """Solo el título y las seis tablas de requerimientos: sin prosa."""
    src = FUENTE.read_text(encoding="utf-8")
    cuerpo = src[src.index("## 1 · Desempeño"): src.index("## 7 · Propuesta")].rstrip()
    lineas = [l for l in cuerpo.split("\n") if l.startswith("#") or l.startswith("|") or not l.strip()]
    md = "# " + TITULO + "\n\n" + "\n".join(lineas) + "\n"
    # el cuadro de respuesta nunca se separa de su palabra al saltar de renglón
    return md.replace("☐ ", "☐" + NBSP)


def parchar_odt(odt: pathlib.Path) -> None:
    tmp = pathlib.Path(tempfile.mkdtemp())
    with zipfile.ZipFile(odt) as z:
        z.extractall(tmp)

    xml = tmp / "content.xml"
    s = xml.read_text(encoding="utf-8")

    pad = ('fo:padding-top="0.06cm" fo:padding-bottom="0.06cm" '
           'fo:padding-left="0.12cm" fo:padding-right="0.12cm"')
    estilos = (
        '<style:style style:name="RowKeep" style:family="table-row">'
        '<style:table-row-properties fo:keep-together="always"/></style:style>'
        '<style:style style:name="CellB" style:family="table-cell">'
        f'<style:table-cell-properties fo:border="{BORDE}" {pad}/></style:style>'
        '<style:style style:name="CellH" style:family="table-cell">'
        f'<style:table-cell-properties fo:border="{BORDE}" fo:background-color="#e8ecf0" {pad}/></style:style>'
    )
    for i, a in enumerate(ANCHOS, 1):
        estilos += (f'<style:style style:name="Col{i}" style:family="table-column">'
                    f'<style:table-column-properties style:rel-column-width="{a}*"/></style:style>')

    s = s.replace("<office:automatic-styles>", "<office:automatic-styles>" + estilos, 1)
    s = s.replace("<table:table-row>", '<table:table-row table:style-name="RowKeep">')
    s = s.replace('table:style-name="TableHeaderRowCell"', 'table:style-name="CellH"')
    s = s.replace('table:style-name="TableRowCell"', 'table:style-name="CellB"')
    columnas = "".join(f'<table:table-column table:style-name="Col{i}"/>' for i in range(1, len(ANCHOS) + 1))
    s = re.sub(r"(<table:table-column[^>]*/>\s*){2,}", lambda m: columnas, s)

    xml.write_text(s, encoding="utf-8")

    odt.unlink()
    with zipfile.ZipFile(odt, "w") as z:
        z.write(tmp / "mimetype", "mimetype", compress_type=zipfile.ZIP_STORED)
        for f in sorted(tmp.rglob("*")):
            if f.is_file() and f.name != "mimetype":
                z.write(f, str(f.relative_to(tmp)), compress_type=zipfile.ZIP_DEFLATED)
    shutil.rmtree(tmp)


def soffice(destino: str, archivo: pathlib.Path, salida: pathlib.Path) -> None:
    subprocess.run(
        ["soffice", "-env:UserInstallation=file:///root/lo-doc", "--headless",
         "--convert-to", destino, str(archivo), "--outdir", str(salida)],
        check=True, capture_output=True, env={"HOME": "/root", "PATH": "/usr/bin:/bin"})


def main() -> None:
    trabajo = pathlib.Path(tempfile.mkdtemp())
    html = trabajo / "req.html"
    cuerpo = markdown.markdown(fuente_markdown(), extensions=["tables"])
    html.write_text(f'<!DOCTYPE html><html><head><meta charset="utf-8">'
                    f"<style>{CSS}</style></head><body>{cuerpo}</body></html>", encoding="utf-8")

    odt = trabajo / "req.odt"
    subprocess.run(["pandoc", str(html), "-f", "html", "-t", "odt", "-o", str(odt)], check=True)
    parchar_odt(odt)

    soffice("doc:MS Word 97", odt, trabajo)
    shutil.copy(trabajo / "req.doc", SALIDA)
    print("OK ·", SALIDA.name)


if __name__ == "__main__":
    main()
