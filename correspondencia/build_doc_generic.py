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


def extraer_leyendas(md_text: str):
    """Quita las líneas '<!--CAPTION:texto-->' que preceden a una tabla y
    devuelve (markdown_limpio, {índice_de_tabla: texto}). El índice es el
    orden de aparición de la tabla en el documento (0-based; cada bloque de
    líneas consecutivas que empiezan con "|" cuenta como una tabla).

    Existe porque un párrafo suelto justo antes de una tabla no se garantiza
    pegado a ella en todos los lectores de .doc (LibreOffice sí lo respeta,
    Word no siempre): se fusiona el texto como primera fila de la propia
    tabla, que es la única unidad de paginación que todos los lectores
    respetan sin ambigüedad.
    """
    leyendas = {}
    limpio = []
    indice_tabla = -1
    dentro_tabla = False
    pendiente = None
    for ln in md_text.split("\n"):
        m = re.match(r"^<!--CAPTION:(.*)-->$", ln.strip())
        if m:
            pendiente = m.group(1)
            continue
        es_tabla = ln.startswith("|")
        if es_tabla and not dentro_tabla:
            indice_tabla += 1
            if pendiente is not None:
                leyendas[indice_tabla] = pendiente
                pendiente = None
        dentro_tabla = es_tabla
        limpio.append(ln)
    return "\n".join(limpio), leyendas


def extraer_anchos(md_text: str):
    """Lee, por tabla, los anchos relativos de columna a partir de la línea
    separadora del markdown (`|-----|--|--|`): cada columna pesa tantas
    unidades como guiones tenga. Devuelve {índice_de_tabla: [pesos]} sólo
    para las tablas cuyos pesos no son todos iguales; las demás conservan
    el reparto uniforme que pandoc asigna por omisión, así que los
    documentos que ya existen no cambian. Las tablas dentro de una cita
    (`> | ... |`) también cuentan, porque pandoc las produce igual.

    Existe porque pandoc, al leer HTML sin anchos, reparte las columnas en
    partes iguales: una columna de texto largo junto a tres de cifras
    ocupa una cuarta parte del ancho y multiplica las páginas."""
    anchos = {}
    indice_tabla = -1
    dentro_tabla = False
    filas = []
    def cerrar():
        if len(filas) >= 2:
            m = re.fullmatch(r"\|(?:\s*:?-+:?\s*\|)+", filas[1].strip())
            if m:
                pesos = [len(c.strip().strip(":").strip()) for c in filas[1].strip().strip("|").split("|")]
                if len(set(pesos)) > 1:
                    anchos[indice_tabla] = pesos
    for ln in md_text.split("\n"):
        ln = re.sub(r"^(>\s?)+", "", ln)
        es_tabla = ln.startswith("|")
        if es_tabla and not dentro_tabla:
            indice_tabla += 1
            filas = []
        if es_tabla:
            filas.append(ln)
        elif dentro_tabla:
            cerrar()
        dentro_tabla = es_tabla
    if dentro_tabla:
        cerrar()
    return anchos


def aplicar_anchos(content_xml: str, anchos: dict) -> str:
    """Escribe style:rel-column-width en los estilos de columna de las
    tablas indicadas. pandoc nombra las tablas Table1, Table2… en orden de
    aparición y sus columnas Table1.A, Table1.B…, con el estilo de columna
    vacío; aquí se rellena."""
    if not anchos:
        return content_xml
    # Ancho útil de la página carta con márgenes de 1 pulgada (styles.xml de
    # pandoc): 8.5 − 2 = 6.5 in. Los anchos relativos solos no bastan: Writer
    # y el filtro de Word 97 necesitan un ancho absoluto por columna.
    ancho_total = 6.5
    nombres = re.findall(r'<table:table\s[^>]*table:name="([^"]+)"', content_xml)
    for i, pesos in anchos.items():
        if i >= len(nombres):
            continue
        content_xml = re.sub(
            rf'(<style:style style:name="{re.escape(nombres[i])}" style:family="table">\s*'
            r'<style:table-properties\b)([^>]*?)/?>',
            lambda m: f'{m.group(1)} style:width="{ancho_total}in" table:align="left"'
                      + re.sub(r'\s*table:align="[^"]*"', "", m.group(2)).rstrip("/").rstrip() + "/>",
            content_xml, count=1,
        )
        content_xml = re.sub(
            rf'(<style:style style:name="{re.escape(nombres[i])}\.[A-Z]+" style:family="table-column")\s*/>',
            r"\1></style:style>", content_xml)
        suma = sum(pesos)
        for j, peso in enumerate(pesos):
            letra = chr(ord("A") + j)
            ancho = round(ancho_total * peso / suma, 3)
            content_xml = content_xml.replace(
                f'<style:style style:name="{nombres[i]}.{letra}" style:family="table-column"></style:style>',
                f'<style:style style:name="{nombres[i]}.{letra}" style:family="table-column">'
                f'<style:table-column-properties style:column-width="{ancho}in"/></style:style>',
                1,
            )
    return content_xml


def extraer_saltos(md_text: str):
    """Quita las líneas '<!--PAGEBREAK-->' y devuelve (markdown_limpio,
    [texto_del_encabezado_que_debe_arrancar_página]). El marcador debe ir en
    su propia línea, justo antes del encabezado ('#'..'######') que tiene
    que empezar página nueva."""
    textos = []
    limpio = []
    pendiente = False
    for ln in md_text.split("\n"):
        if ln.strip() == "<!--PAGEBREAK-->":
            pendiente = True
            continue
        if pendiente and ln.strip().startswith("#"):
            textos.append(ln.strip().lstrip("#").strip())
            pendiente = False
        limpio.append(ln)
    return "\n".join(limpio), textos


def marcar_saltos_de_pagina(content_xml: str, textos: list) -> str:
    """A los encabezados indicados (por su texto exacto) se les fuerza
    fo:break-before="page": arrancan página nueva sin importar cuánto
    espacio quede en la anterior. Se clona el estilo de encabezado que ya
    trae el elemento (Heading_20_1/2, definido en styles.xml) en un estilo
    automático nuevo que hereda de él y le agrega solo el salto."""
    # pandoc envuelve el texto del encabezado en <text:bookmark-start/>...
    # <text:bookmark-end/>, así que no se puede exigir que el texto siga
    # inmediatamente a la etiqueta de apertura. Se toma cada bloque
    # <text:h>...</text:h> completo (no anidan, así que ".*?" no cruza a
    # otro encabezado) y se busca el texto exacto dentro de él.
    s = content_xml
    for i, texto in enumerate(textos):
        esc = texto.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        for m in re.finditer(r"<text:h\b.*?</text:h>", s, re.DOTALL):
            bloque = m.group(0)
            if esc not in bloque:
                continue
            m_estilo = re.search(r'text:style-name="([^"]+)"', bloque)
            if not m_estilo:
                break
            estilo_base = m_estilo.group(1)
            nuevo_estilo = f"PageBreak{i}"
            bloque_nuevo = bloque.replace(f'text:style-name="{estilo_base}"', f'text:style-name="{nuevo_estilo}"', 1)
            s = s[:m.start()] + bloque_nuevo + s[m.end():]
            definicion = (f'<style:style style:name="{nuevo_estilo}" style:family="paragraph" '
                          f'style:parent-style-name="{estilo_base}">'
                          f'<style:paragraph-properties fo:break-before="page"/></style:style>')
            s = s.replace("<office:automatic-styles>", "<office:automatic-styles>" + definicion, 1)
            break
    return s


def inyectar_leyendas(content_xml: str, leyendas: dict) -> str:
    """Antepone una fila fusionada (colspan) como primera fila de las tablas
    indicadas, con el texto de su leyenda. Devuelve también, vía atributo en
    la función, los table:style-name que quedaron marcados para no dividirse
    entre páginas (se resuelve aparte, en marcar_tablas_atomicas)."""
    if not leyendas:
        return content_xml, []
    # "<table:table\b" también coincide con <table:table-row, <table:table-cell
    # y <table:table-column (el guion cuenta como límite de palabra). Se exige
    # que a "table:table" le siga espacio o ">", que solo ocurre en la
    # etiqueta real de apertura de la tabla.
    partes = re.split(r"(<table:table(?=[\s>]))", content_xml)
    salida = [partes[0]]
    tabla_i = -1
    estilos_atomicos = []
    j = 1
    while j < len(partes):
        salida.append(partes[j])  # "<table:table"
        resto = partes[j + 1]
        tabla_i += 1
        if tabla_i in leyendas:
            m_estilo = re.search(r'table:style-name="([^"]+)"', resto)
            if m_estilo:
                estilos_atomicos.append(m_estilo.group(1))
            texto = leyendas[tabla_i].replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            m_cols = re.search(r'(?:<table:table-column\b[^>]*/>\s*){1,}', resto)
            n_cols = len(re.findall(r"<table:table-column\b", m_cols.group(0))) if m_cols else 2
            fin_cols = m_cols.end() if m_cols else 0
            cubiertas = "<table:covered-table-cell/>" * (n_cols - 1)
            fila = (
                '<table:table-row table:style-name="RowKeep">'
                f'<table:table-cell table:style-name="CellH" table:number-columns-spanned="{n_cols}">'
                f'<text:p text:style-name="Table_20_Heading">{texto}</text:p>'
                '</table:table-cell>' + cubiertas +
                '</table:table-row>'
            )
            resto = resto[:fin_cols] + fila + resto[fin_cols:]
        salida.append(resto)
        j += 2
    return "".join(salida), estilos_atomicos


def marcar_tablas_atomicas(styles_or_content: str, nombres_estilo: list) -> str:
    """A las tablas con leyenda fusionada se les prohíbe partirse entre
    filas (may-break-between-rows="false"): deben moverse como un bloque
    único a la siguiente página si no caben, nunca dejar la leyenda o el
    encabezado varados. El estilo de la tabla vive en la misma content.xml
    que pandoc genera (automatic-styles), no en styles.xml."""
    s = styles_or_content
    for nombre in nombres_estilo:
        s = re.sub(
            rf'(style:name="{re.escape(nombre)}" style:family="table">\s*<style:table-properties\b)([^>]*)/?>',
            lambda m: f'{m.group(1)}{m.group(2).rstrip("/").rstrip()} style:may-break-between-rows="false"/>',
            s, count=1,
        )
    return s


def parchar_odt(odt: pathlib.Path, leyendas: dict | None = None, saltos: list | None = None,
                anchos: dict | None = None) -> None:
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

    # "First_20_paragraph" (el párrafo que sigue a una lista o a un encabezado)
    # declara style:parent-style-name="Text_20_body" pero SIN <style:paragraph-
    # -properties> propio — y LibreOffice no siempre resuelve fo:keep-with-next
    # ni fo:keep-together por esa herencia. Se le agrega el elemento explícito
    # con las dos reglas, igual que a Text_20_body.
    es = re.sub(
        r'(<style:style style:name="First_20_paragraph"[^>]*?)(/?>)',
        lambda m: m.group(1) + '>' +
                  '<style:paragraph-properties fo:keep-with-next="always" fo:keep-together="always"/>' +
                  '</style:style>' if m.group(2) == "/>" else m.group(0),
        es, count=1)

    # Regla de paginación: ninguna tabla se parte dejando el encabezado (o
    # unas pocas filas) huérfano y el resto de la página en blanco. Se aplica
    # may-break-between-rows="false" a TODAS las tablas del documento, no
    # solo a las que llevan leyenda fusionada: si la tabla cabe completa en
    # el espacio restante, se queda; si no, se mueve entera a la siguiente
    # página. Si la tabla es más alta que una página completa, el renderizador
    # la parte de todos modos (no hay forma de evitarlo), así que esto no
    # afecta a las tablas largas de varias páginas (§3, §8, §18).
    s, _ = inyectar_leyendas(s, leyendas or {})
    todas_las_tablas = sorted(set(re.findall(r'<table:table\s[^>]*table:style-name="([^"]+)"', s)))
    s = marcar_tablas_atomicas(s, todas_las_tablas)
    s = marcar_saltos_de_pagina(s, saltos or [])
    s = aplicar_anchos(s, anchos or {})

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
    md_sin_saltos, saltos = extraer_saltos(entrada.read_text(encoding="utf-8"))
    md_limpio, leyendas = extraer_leyendas(md_sin_saltos)
    anchos = extraer_anchos(md_limpio)
    cuerpo = markdown.markdown(md_limpio, extensions=["tables", "sane_lists"])
    html.write_text(f'<!DOCTYPE html><html><head><meta charset="utf-8">'
                    f"<style>{CSS}</style></head><body>{cuerpo}</body></html>", encoding="utf-8")

    odt = trabajo / "doc.odt"
    subprocess.run(["pandoc", str(html), "-f", "html", "-t", "odt", "-o", str(odt)], check=True)
    parchar_odt(odt, leyendas, saltos, anchos)

    soffice("doc:MS Word 97", odt, trabajo)
    shutil.copy(trabajo / "doc.doc", salida)
    print("OK ·", salida.name)


if __name__ == "__main__":
    main(pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2]))
