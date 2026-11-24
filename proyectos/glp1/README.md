# Proyecto independiente · Sports World frente a los GLP-1

Proyecto **independiente** del rediseño web y de cualquier otro proyecto del depósito. Insumo de partida: el white paper «De la pérdida de peso a la composición corporal» (octubre de 2026). Del depósito solo se usa el catálogo de clases (`investigacion/00-catalogo-clases.md`), verificado contra el sitio público; todo lo demás proviene de fuentes públicas verificables.

| Carpeta | Contenido |
|---|---|
| `investigacion/` | Notas por frente (00 a 07), con la fuente y la etiqueta de verificación de cada cifra |
| `modelo/` | `riesgo.py`: modelo reproducible de membresías canceladas y ventas no realizadas (2027-2029). `python3 riesgo.py` regenera `resultado.json` |
| `white-paper/` | `fuente.html` (texto fuente), `graficas.py` (genera `graficas/*.svg` desde el modelo), `construir.js` (genera `fuerza-y-peso.html` y `fuerza-y-peso.pdf`) |

Para regenerar: `python3 modelo/riesgo.py`, luego `python3 white-paper/graficas.py` y `node white-paper/construir.js`. Antes de entregar, verificar que las cifras del documento coinciden con `modelo/resultado.json`.
