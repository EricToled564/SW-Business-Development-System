# Genera un .doc (MS Word 97) a partir de un markdown arbitrario, reutilizando
# el mismo pipeline y las mismas reglas de build_doc.py (bordes, encabezado
# repetido por página, filas que no se parten).
#
# Uso: python3 correspondencia/build_doc_generic.py <entrada.md> <salida.doc>

import pathlib, re, shutil, subprocess, sys, zipfile, tempfile
import markdown

BORDE = "0.5pt solid #6b7785"

CSS = """
body { font-family:'Liberation Sans','Arial',sans-serif; font-size:10pt; }
h1 { font-size:17pt; margin:0 0 4pt 0; }
h2 { font-size:12.5pt; margin:16pt 0 6pt 0; page-break-after:avoid; }
h3 { font-size:11pt; margin:2pt 0 10pt 0; font-weight:normal; font-style:italic; color:#444; }
table { border-collapse:collapse; width:100%; margin:4pt 0 8pt 0; }
th, td { padding:4pt 5pt; font-size:9pt; vertical-align:top; }
tr { page-break-inside:avoid; }
li { margin:0 0 3pt 0; }
"""


def parchar_odt(odt: pathlib.Path) -> None:
    tmp = pathlib.Path(tempfile.mkdtemp())
    with zipfile.ZipFile(odt) as z:
        z.extractall(tmp)

    xml = tmp / "content.xml"
    s = xml.read_text(encoding="utf-8")
    estilos_xml = tmp / "styles.xml"
    es = estilos_xml.read_text(encoding="utf-8")

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
    s = s.replace("<office:automatic-styles>", "<office:automatic-styles>" + estilos, 1)
    s = s.replace("<table:table-row>", '<table:table-row table:style-name="RowKeep">')
    s = s.replace('table:style-name="TableHeaderRowCell"', 'table:style-name="CellH"')
    s = s.replace('table:style-name="TableRowCell"', 'table:style-name="CellB"')

    # Regla de paginación: un encabezado nunca queda huérfano al pie de página —
    # arrastra consigo el bloque que le sigue (párrafo o primera fila de tabla).
    # El estilo de encabezado vive en styles.xml (no en content.xml) y no trae
    # <style:paragraph-properties>; se inserta el elemento completo.
    es = re.sub(
        r'(style:name="(?:Heading_20_1|Heading_20_2)"[^>]*>)(\s*<style:text-properties)',
        r'\1<style:paragraph-properties fo:keep-with-next="always"/>\2',
        es)

    # Regla de paginación: un párrafo nunca se corta entre dos páginas — el único
    # corte legítimo es después de un punto y aparte, es decir, entre párrafos.
    # "Text_20_body" (párrafo base) ya trae <style:paragraph-properties>: se le
    # añade fo:keep-together. Los estilos de lista (P1..P6) heredan de él por
    # style:parent-style-name, así que no hace falta tocarlos aparte.
    def _inyectar_keep_together(m: re.Match) -> str:
        cabeza, atributos = m.group(1), m.group(2).rstrip("/").rstrip()
        return f'{cabeza}{atributos} fo:keep-together="always"/>'

    es = re.sub(
        r'(style:name="Text_20_body"[^>]*>\s*<style:paragraph-properties\b)([^>]*)/?>',
        _inyectar_keep_together,
        es, count=1)

    xml.write_text(s, encoding="utf-8")
    estilos_xml.write_text(es, encoding="utf-8")

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


def main(entrada: pathlib.Path, salida: pathlib.Path) -> None:
    trabajo = pathlib.Path(tempfile.mkdtemp())
    html = trabajo / "doc.html"
    cuerpo = markdown.markdown(entrada.read_text(encoding="utf-8"),
                                extensions=["tables", "sane_lists"])
    html.write_text(f'<!DOCTYPE html><html><head><meta charset="utf-8">'
                    f"<style>{CSS}</style></head><body>{cuerpo}</body></html>", encoding="utf-8")

    odt = trabajo / "doc.odt"
    subprocess.run(["pandoc", str(html), "-f", "html", "-t", "odt", "-o", str(odt)], check=True)
    parchar_odt(odt)

    soffice("doc:MS Word 97", odt, trabajo)
    shutil.copy(trabajo / "doc.doc", salida)
    print("OK ·", salida.name)


if __name__ == "__main__":
    main(pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2]))
