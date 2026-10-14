# Arquitectura de la Experiencia · fuente única de la verdad

Por instrucción de Eric (14 de octubre de 2026, decisión **D-120**), la Arquitectura de la Experiencia, en español y en inglés, es la **fuente única de la verdad** del proyecto. Toda pieza derivada —sitio, cuestionario, brief, demo y documentos del portal— se corrige contra ella, nunca al revés.

| Archivo | Qué es |
|---|---|
| `fuente/arquitectura.es.md` | Texto fuente en español. **Es lo que se edita.** |
| `fuente/arquitectura.en.md` | Texto fuente en inglés. Se edita junto con el español. |
| `manifiesto.json` | Huella SHA-256 de cada fuente y de cada PDF publicado. Lo escribe `publicar.py`. |
| `herramientas/publicar.py` | Genera los dos PDF del portal y el manifiesto. |
| `herramientas/generar.py` | Fuente Markdown → PDF (ReportLab), con la composición de la edición del 6 de octubre. Salida reproducible: misma fuente, mismos bytes. |
| `herramientas/comparar.py` · `clasificar.py` | Comparan palabra por palabra dos PDF y clasifican cada diferencia. |
| `herramientas/extraer.py` · `ensamblar.py` | Conversión inicial PDF → fuente editable. Solo documentan la procedencia; no se vuelven a usar. |
| `herramientas/d-120/` | Las ediciones de D-120, tal como se aplicaron sobre la fuente del 6 de octubre. |

## Procedencia

La fuente nace de los dos PDF que Eric publicó en la release **Documentation** (tag `Docs`) de este repositorio: `Arquitectura-de-la-Experiencia-Sports-World.pdf` (239 págs., SHA-256 `b77dcf43…f760`) y `Sports-World-Experience-Architecture.pdf` (283 págs., `4eaf9615…7761`), edición integrada del 6 de octubre de 2026 (D-119, CEI-01 v1.6).

La conversión se verificó con ida y vuelta: PDF original → fuente → PDF regenerado, comparados palabra por palabra sin cabecera, pie ni índice.

| Idioma | Palabras del original | Diferencias de contenido | Diferencias de forma |
|---|---|---|---|
| Español | 90 024 | **0** | 85: 51 cabeceras de tabla repetidas en otro salto de página y 34 rutas largas partidas dentro de su celda |
| Inglés | 87 595 | **0** | 53: cabeceras de tabla repetidas en otro salto de página |

El primer commit de esta carpeta contiene esa fuente sin cambios; el segundo aplica D-120. El diff entre ambos es exactamente el cambio de contenido.

## Cómo se cambia

1. Editar `fuente/arquitectura.es.md` y `fuente/arquitectura.en.md`, y la fecha de `<!-- fecha-edicion: … -->` si cambia la edición.
2. Registrar la decisión en la bitácora del propio documento (D-121 en adelante), con fecha e instrucción de Eric.
3. Desde la raíz: `python3 arquitectura/herramientas/publicar.py` (requiere `reportlab` y la fuente Liberation Sans; `pymupdf` para comparar).
4. Verificar: `cd resultados/ux-v1 && node tools/consistencia.js && node tools/audit-docs.js`. R24 falla si una fuente y su PDF no corresponden, y si la fuente vuelve a mencionar lo que D-120 retiró.

## Sintaxis de la fuente

Markdown con cuatro convenciones propias, en comentarios HTML: `<!-- portada -->…<!-- /portada -->`, `<!-- parte -->` antes del título de una parte, `<!-- tabla anchos=… letra=… -->` antes de cada tabla (anchos de columna en puntos y cuerpo de letra), `<!-- indice: … -->` donde va el índice detallado (se regenera) y `<!-- salto -->` para un salto de página. Cada título lleva su ancla: `## 10.2 Los tres requisitos {#10-2-los-tres-requisitos}`; los enlaces internos apuntan a esas anclas.
