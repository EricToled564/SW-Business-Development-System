"""D-120 sobre la fuente en español (14 oct 2026). Cada sustitución debe encontrar su texto exactamente una vez.

Uso: python3 editar_es.py arquitectura.es.md arquitectura.es.md
Registro de cómo se aplicó D-120 sobre la edición del 6 de octubre; no se vuelve a ejecutar.
"""
import re, sys

src, dst = sys.argv[1], sys.argv[2]
t = open(src, encoding="utf-8").read()


def rep(old, new, n=1):
    global t
    c = t.count(old)
    if c != n:
        sys.exit(f"esperaba {n} y hay {c}: {old[:90]!r}")
    t = t.replace(old, new)


def cut(start, end):
    """Elimina desde start (incluido) hasta end (excluido); ambos deben ser únicos."""
    global t
    for m in (start, end):
        if t.count(m) != 1:
            sys.exit(f"marcador no único ({t.count(m)}): {m[:90]!r}")
    a, b = t.index(start), t.index(end)
    assert a < b
    t = t[:a] + t[b:]


# ── Portada y páginas iniciales
rep("<!-- fecha-edicion: 2026-10-06 -->", "<!-- fecha-edicion: 2026-10-14 -->")
rep("Edición integrada del 6 de octubre de 2026", "Edición canónica del 14 de octubre de 2026")
rep("Base vigente D-119 y CEI-01 versión 1.6", "Base vigente D-120 y CEI-01 versión 1.7")
rep("Versión para revisión\nEl recorrido", "Fuente única de la verdad\nEl recorrido")
rep("| Fecha | 5 de octubre de 2026 |", "| Fecha | 14 de octubre de 2026 |")
rep("| Versión | Cierre de redacción para revisión · D-119 |", "| Versión | Fuente única de la verdad · D-120 |")
rep("| Instrumento | CEI-01 versión 1.6 |", "| Instrumento | CEI-01 versión 1.7 |")
rep("La base de capítulos es el conjunto consolidado con D-119 del 5 de octubre. CEI-01 v1.6 conserva su papel como instrumento único.",
    "La base de capítulos es el conjunto consolidado con D-119 del 5 de octubre y la decisión D-120 del 14 de octubre. CEI-01 v1.7 conserva su papel como instrumento único. **Desde D-120, este documento, en español y en inglés, es la fuente única de la verdad de la Arquitectura de la Experiencia.**")
rep("| Decisiones D-33 a D-119 y sustituciones |", "| Decisiones D-33 a D-120 y sustituciones |")
rep("[CEI-01 v1.6](#cuestionario-de-experiencia-ideal-cei-01)", "[CEI-01 v1.7](#cuestionario-de-experiencia-ideal-cei-01)")
rep("| CEI-01 | El Cuestionario de Experiencia Ideal, versión 1.6.", "| CEI-01 | El Cuestionario de Experiencia Ideal, versión 1.7.")
rep("| REQ-# | REQ-1–REQ-4 | Requisitos; clase P0 como requisito condicional |", "| REQ-# | REQ-1–REQ-3 | Requisitos; clase P0 como requisito condicional |")

# ── Capítulo 4
rep("-  **No tiene actividades para menores de 13 años**;\n-  **No tiene clases adecuadas para periodos prenatal o posparto**;\n",
    "-  **No tiene actividades para menores de 13 años**;\n")

# ── Capítulo 5
rep("La versión vigente es la **1.6**", "La versión vigente es la **1.7**")
rep("Ese segundo caso agrega **un quinto requisito** a los cuatro que fija el cuestionario.",
    "Ese segundo caso agrega **un cuarto requisito** a los tres que fija el cuestionario.")
rep(" Habilita además la opción prenatal de Q14.", "")
rep("### 5.4.1 Los cuatro requisitos que fija el cuestionario {#5-4-1-los-cuatro-requisitos-que-fija-el-cuestionario}",
    "### 5.4.1 Los tres requisitos que fija el cuestionario {#5-4-1-los-tres-requisitos-que-fija-el-cuestionario}")
rep("(#5-4-1-los-cuatro-requisitos-que-fija-el-cuestionario)", "(#5-4-1-los-tres-requisitos-que-fija-el-cuestionario)",
    t.count("(#5-4-1-los-cuatro-requisitos-que-fija-el-cuestionario)"))
rep("| Programas prenatales o de posparto | Clases adecuadas para esos periodos, para cada uno de los objetivos de la persona |\n", "")
rep("El cuarto requisito es **la alberca**.", "El tercer requisito es **la alberca**.")
rep("Las preferencias de clases prenatales o de posparto y de bajo impacto deben activar además la matriz de contraindicaciones.",
    "La preferencia de clases de bajo impacto debe activar además la matriz de contraindicaciones.")
rep("| **Programas prenatales o de posparto** | Cuando Q2 es “Femenino” |\n", "")
rep("Las condiciones médicas, el embarazo y el posparto como estados clínicos, los tratamientos,",
    "Las condiciones médicas, los tratamientos,")
rep("-  programas de bajo impacto;\n-  programas prenatales o de posparto;\n-  actividades para menores.",
    "-  programas de bajo impacto;\n-  actividades para menores.")
rep("No debe inferir de ella una lesión, embarazo, posparto, enfermedad ni cualquier otra condición de salud.",
    "No debe inferir de ella una lesión, una enfermedad ni cualquier otra condición de salud.")

# ── Capítulo 10
rep("-  programas de bajo impacto;\n-  programas prenatales o posparto;\n-  actividades para menores;",
    "-  programas de bajo impacto;\n-  actividades para menores;")
rep("## 10.2 Los cuatro requisitos {#10-2-los-cuatro-requisitos}", "## 10.2 Los tres requisitos {#10-2-los-tres-requisitos}")
rep("(#10-2-los-cuatro-requisitos)", "(#10-2-los-tres-requisitos)", t.count("(#10-2-los-cuatro-requisitos)"))
rep("| **REQ-3** | Clases adecuadas para periodos prenatal o posparto para cada objetivo declarado | Q14, cuando declara **Programas prenatales o de** **posparto** |\n", "")
rep("| **REQ-4** | Actividades verificadas para menores de 13 años |", "| **REQ-3** | Actividades verificadas para menores de 13 años |")
rep("Estos cuatro requisitos deben utilizarse", "Estos tres requisitos deben utilizarse")
cut("### 10.2.3 REQ-3 · Prenatal o posparto", "### 10.2.4 REQ-4 · Actividades para menores")
rep("### 10.2.4 REQ-4 · Actividades para menores {#10-2-4-req-4-actividades-para-menores}",
    "### 10.2.3 REQ-3 · Actividades para menores {#10-2-3-req-3-actividades-para-menores}")
rep("(#10-2-4-req-4-actividades-para-menores)", "(#10-2-3-req-3-actividades-para-menores)", t.count("(#10-2-4-req-4-actividades-para-menores)"))
rep("## 10.3 El quinto requisito condicional {#10-3-el-quinto-requisito-condicional}",
    "## 10.3 El cuarto requisito condicional {#10-3-el-cuarto-requisito-condicional}")
rep("(#10-3-el-quinto-requisito-condicional)", "(#10-3-el-cuarto-requisito-condicional)", t.count("(#10-3-el-quinto-requisito-condicional)"))
rep("Existe un quinto requisito que no pertenece a la familia fija REQ-#.", "Existe un cuarto requisito que no pertenece a la familia fija REQ-#.")
rep("-  REQ-3 determina que debe existir una solución prenatal o posparto;\n-  REQ-4 determina que debe existir el servicio correspondiente para menores;",
    "-  REQ-3 determina que debe existir el servicio correspondiente para menores;")
rep("El quinto requisito de P0 debe contar también cuando esté activo.", "El cuarto requisito de P0 debe contar también cuando esté activo.")
rep("| REQ-3 · Prenatal o posparto | «No tiene clases adecuadas para periodos prenatal o posparto» |\n", "")
rep("| REQ-4 · Actividades para menores | «No tiene actividades para menores de 13 años» |",
    "| REQ-3 · Actividades para menores | «No tiene actividades para menores de 13 años» |")
cut("### 10.10.3 Ejemplo · Prenatal o posparto", "### 10.10.4 Ejemplo · Actividades para menores")
rep("### 10.10.4 Ejemplo · Actividades para menores {#10-10-4-ejemplo-actividades-para-menores}",
    "### 10.10.3 Ejemplo · Actividades para menores {#10-10-3-ejemplo-actividades-para-menores}")
rep("(#10-10-4-ejemplo-actividades-para-menores)", "(#10-10-3-ejemplo-actividades-para-menores)", t.count("(#10-10-4-ejemplo-actividades-para-menores)"))
rep("### 10.10.5 Ejemplo · Clase confirmada en P0 {#10-10-5-ejemplo-clase-confirmada-en-p0}",
    "### 10.10.4 Ejemplo · Clase confirmada en P0 {#10-10-4-ejemplo-clase-confirmada-en-p0}")
rep("(#10-10-5-ejemplo-clase-confirmada-en-p0)", "(#10-10-4-ejemplo-clase-confirmada-en-p0)", t.count("(#10-10-5-ejemplo-clase-confirmada-en-p0)"))
rep("conforme al apartado 10.10.5.", "conforme al apartado 10.10.4.")

# ── Capítulo 12
rep("-  si es apta para programas de bajo impacto;\n-  si es apta para periodos prenatal o posparto;\n",
    "-  si es apta para programas de bajo impacto;\n")
rep("Q14, cuando declara bajo impacto o prenatal/posparto, conforme al apartado 12.4", "Q14, cuando declara bajo impacto, conforme al apartado 12.4")
rep("**Cuando Q14 declara bajo impacto o prenatal/posparto, se aplica la matriz", "**Cuando Q14 declara bajo impacto, se aplica la matriz")
rep("la calificación de aptitud para bajo impacto y para prenatal o posparto es uno de los campos",
    "la calificación de aptitud para bajo impacto es uno de los campos")
rep("**Los requisitos REQ-2 y REQ-3 del capítulo 10 dependen de esta regla.** Un club cumple «programas de bajo impacto» o «programas prenatales o de posparto» cuando",
    "**El requisito REQ-2 del capítulo 10 depende de esta regla.** Un club cumple «programas de bajo impacto» cuando")
rep("para validar requisitos del club, como REQ-2 o REQ-3.", "para validar requisitos del club, como REQ-2.")

# ── Capítulo 13
rep("**El modelo no debe convertir una preferencia por programas de bajo impacto o prenatales en un diagnóstico, una lesión o una afirmación de embarazo.**",
    "**El modelo no debe convertir una preferencia por programas de bajo impacto en un diagnóstico o una lesión.**")

# ── Capítulo 14 y Anexo E
rep("La aptitud para bajo impacto y para periodos prenatal o posparto debe formar parte de esa misma matriz.",
    "La aptitud para bajo impacto debe formar parte de esa misma matriz.")
rep("| **Prenatal o posparto** | Aptitud de la clase para esa preferencia |\n", "")
rep("La evaluación de bajo impacto y prenatal o posparto debe cruzar", "La evaluación de bajo impacto debe cruzar")
rep("El cálculo debe evaluar bajo impacto y prenatal o posparto mediante", "El cálculo debe evaluar bajo impacto mediante")
rep("| CEI-01 v1.6 vigente |", "| CEI-01 v1.7 vigente |")

# ── Bitácora
rep("Registra de D-33 a D-119.", "Registra de D-33 a D-120.")
rep("**La numeración vigente es la de D-119 y del índice de veintiún capítulos.**", "**La numeración vigente es la de D-120 y del índice de veintiún capítulos.**")
D120 = """### D-120 · Q14 conserva tres opciones y el documento se canoniza {#d-120-q14-conserva-tres-opciones-y-el-documento-se-canoniza}

**Instrucción de Eric · 14 de octubre de 2026:** «una vez eliminado canonizalo como la fuente unica de la verdad».

**Q14 queda con tres opciones:** **Programas de bajo impacto**, **Actividades para menores de 3 meses a 13 años** —condicional a Q13— y **Ninguna de las anteriores**. Se retira la otra opción condicional, junto con su requisito de club, su flag, su ejemplo de confirmación y su campo en la matriz de clases. **Q2 gobierna únicamente la concordancia** y deja de condicionar opciones de Q14.

Los requisitos que fija el cuestionario son tres: **REQ-1** alberca, **REQ-2** bajo impacto y **REQ-3** actividades para menores. La clase confirmada en P0 es el **cuarto requisito**, condicional. Los apartados 10.2.3, 10.10.3 y 10.10.4 se renumeran en consecuencia. **CEI-01 pasa a la versión 1.7.**

**Este documento, en español y en inglés, es la fuente única de la verdad de la Arquitectura de la Experiencia.** Su texto fuente vive en el repositorio y los PDF se generan desde él. Toda pieza derivada —sitio, cuestionario, brief, demo y documentos del portal— se corrige contra este documento, no al revés.

**Aterriza en:** páginas iniciales y capítulos 4, 5, 10, 12, 13 y 14; Anexos D y E; CEI-01. **Sustituye** en D-114 la mención de Q2 como condición de las opciones de Q14 en la ruta reducida. **Conserva D-119.**

"""
anchor = "**Aterriza en:** índice, norma de redacción, capítulos 3, 8, 9, 14, 15, 16, 17 y 18 y las remisiones a los pendientes 19 a 21.\n\n"
rep(anchor, anchor + D120)

# ── CEI-01
rep("| **Versión** | **1.6 · copia corregida del 5 de octubre de 2026** |", "| **Versión** | **1.7 · 14 de octubre de 2026** |")
rep("| Sustituye a | Versión 1.5 |", "| Sustituye a | Versión 1.6 |")
rep("| Qué cambió | Q8 recoge días posibles y Q17 duración por sesión. Se alinean precarga, clases aceptadas, salida para menores y entrega al cierre con el alcance autónomo del sitio. |",
    "| Qué cambió | D-120: Q14 conserva tres opciones —Programas de bajo impacto, Actividades para menores de 3 meses a 13 años y Ninguna de las anteriores—. Q2 gobierna únicamente la concordancia. |")
rep("diagnósticos, lesiones, embarazo, tratamientos, medicamentos,", "diagnósticos, lesiones, tratamientos, medicamentos,")
rep("**Uso autorizado.** Concordancia gramatical y condición de la opción prenatal/posparto de Q14. Nunca se usa",
    "**Uso autorizado.** Concordancia gramatical. Nunca se usa")
rep("-  Programas prenatales o de posparto *(condicional)*\n", "")
rep("**No se infieren diagnósticos, embarazo ni datos de menores.**", "**No se infieren diagnósticos ni datos de menores.**")
rep("-  «Programas prenatales o de posparto» se muestra **solo si Q2 es «Femenino»**.\n", "")
rep("**Ruta reducida.** Como Q2 y Q13 no se preguntan, Q14 debe mostrar", "**Ruta reducida.** Como Q13 no se pregunta, Q14 debe mostrar")
rep("Muestra solo Bajo impacto y Ninguna de las anteriores, porque Q2 y Q13 no existen en esta ruta",
    "Muestra solo Bajo impacto y Ninguna de las anteriores, porque Q13 no existe en esta ruta")
rep("Ruta completa: siempre bajo impacto o ninguna; prenatal/posparto solo con Q2 femenino; actividades para menores",
    "Ruta completa: siempre bajo impacto o ninguna; actividades para menores")
rep("| 1.6 · copia corregida | 5 de octubre de 2026:",
    "| 1.7 | 14 de octubre de 2026 · D-120: Q14 conserva tres opciones —Programas de bajo impacto, Actividades para menores de 3 meses a 13 años y Ninguna de las anteriores—. Q2 gobierna únicamente la concordancia. |\n| 1.6 · copia corregida | 5 de octubre de 2026:")
rep("| **REQ-#** | `REQ-1` … `REQ-4` |", "| **REQ-#** | `REQ-1` … `REQ-3` |")

# ── Estructura del documento y Anexo D
rep("**D-119** integra el funnel y el dashboard como capítulo **18**, al final de la Parte II. La Parte III pasa a los capítulos **19 a 21**. D-117 y D-118 conservan las reglas vigentes de club ideal único y continuidad de la medición después del traspaso.",
    "**D-119** integra el funnel y el dashboard como capítulo **18**, al final de la Parte II. La Parte III pasa a los capítulos **19 a 21**. D-117 y D-118 conservan las reglas vigentes de club ideal único y continuidad de la medición después del traspaso. **D-120** deja Q14 con tres opciones y canoniza este documento como fuente única de la verdad.")
rep("**CEI-01 versión 1.6**, que vive en esta misma carpeta como `CEI-01-v1.6.es.html`.",
    "**CEI-01 versión 1.7**, contenido en este mismo documento.")
rep("El principio · Los cuatro requisitos y el quinto condicional ·", "El principio · Los tres requisitos y el cuarto condicional ·")
rep("| Cierre de redacción | Instrucción de Eric de completar lo pendiente · 5 de octubre | Capítulos 19–21 y complementos para revisión |",
    "| Cierre de redacción | Instrucción de Eric de completar lo pendiente · 5 de octubre | Capítulos 19–21 y complementos para revisión |\n| Fuente única de la verdad | D-120 · 14 de octubre | Q14 con tres opciones; texto fuente en el repositorio y PDF generados desde él |")

open(dst, "w", encoding="utf-8").write(t)
left = re.findall(r"(?i)[^\n]{0,60}(prenatal|posparto|postparto|embaraz|gestaci|lactan)[^\n]{0,60}", t)
print("menciones restantes:", len(left))
for x in re.finditer(r"(?i)[^\n]{0,70}(prenatal|posparto|postparto|embaraz|gestaci|lactan)[^\n]{0,70}", t):
    print("  ", x.group(0))
