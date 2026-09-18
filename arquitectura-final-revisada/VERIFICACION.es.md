# Verificación de integridad

Hash SHA-256 de cada archivo de esta carpeta, al 18 de septiembre de 2026.

Para comprobar que un archivo no cambió: `sha256sum <archivo>` y comparar contra esta tabla. Si no coincide, el archivo se modificó después de esta fecha, y el commit correspondiente dice por qué.

Este archivo no se lista a sí mismo: su propio hash no puede contenerse. Lo que lo respalda es el historial del repositorio.

| Archivo | Palabras | SHA-256 |
|---|---|---|
| `00-estructura.es.md` | 1,103 | `b53c3d9cba678ee076ab23bebe19620d8c71ee6a25bb992e9c67cd3ecdedd060` |
| `01-por-que-existe-la-experiencia-ideal.es.md` | 1,512 | `a6fc42fa59b5069db8f060d24ad716532af40483d8609feb4d28053ea11e95e6` |
| `02-el-sitio-como-llega-y-como-se-le-guia.es.md` | 2,613 | `1ec9aff21eb6f2c6110cbff56e4148dae89cc469202311d23873f7d2859be610` |
| `03-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | 1,457 | `a2bfea38908d746687c79e0131cf7bd68a980592c97db2eee07f5f7636669c37` |
| `04-quien-puede-recorrer-la-experiencia.es.md` | 944 | `d41006aeac5dfd216266c42b6b87275c3849f8c2f6dcb1a06ec3bb02bda49878` |
| `05-el-cuestionario.es.md` | 2,244 | `0a8e1160da6286eecc2e9d7899ae170188bb07573745d6db457c6a762ff1c920` |
| `06-los-objetivos-de-la-persona.es.md` | 851 | `40a94d5e73e711c2fa585c1dfe838fb53939c8aa025f98aa544a43de58d338c6` |
| `07-el-recorrido-en-pantalla.es.md` | 1,948 | `083f0b9f8b31dc4bda808031ef02cbaf1fa0f87a2c85d6d8f4cf18f7590b197a` |
| `CEI-01-v1.2.es.html` | — | `5b94abaf1b6c1183f859abf7cefe4e9490bd60764b13fd0f7b424d856942757f` |
| `CEI-01-v1.2.pdf` | — | `b5b814c9c209e9df4ba1c502d7c4be3859c66c78c328fe024b6fe563565942c0` |
| `README.es.md` | 333 | `44ef438b32b36013ba4129586ce3d963861eb0cbbbae9d62cc9225f0a8733733` |
| `decisiones.es.md` | 2,387 | `bf3cda5cc9e1829de23313d87c937e3bcaef2711c94203549cfc144f5904b0af` |

## Estado de aprobación

| Capítulo | Aprobado por Eric | Modificado después de aprobarse | Quién ordenó el cambio |
|---|---|---|---|
| 1 | Sí | Se agregó el apartado 1.3.4, qué es BES. Después, remisiones cruzadas por la renumeración | Eric |
| 2 | **No** | Escrito y corregido en los apartados 2.3 y 2.6.4. Se sube por instrucción expresa de Eric, a la espera de su revisión | — |
| 3 | Sí | Las leyendas dejan de ser cuatro fijas; se quitó la cifra de requisitos. Después, renumeración y el nombre del servicio para menores | Eric |
| 4 | Sí | La precarga se muestra en la ruta reducida. Después, renumeración y el nombre del servicio para menores | Eric |
| 5 | Sí | La clase aceptada sin club se vuelve requisito, en 5.2.3 y 5.2.4. Después, renumeración | Eric |
| 6 | Sí | Sin cambios de fondo desde su aprobación; solo renumeración | Eric |
| 7 | **No** | Escrito. Se sube por instrucción expresa de Eric, a la espera de su revisión | — |

## Qué cambió en esta entrega

| Pieza | Qué cambió |
|---|---|
| `CEI-01` | Pasa a **versión 1.2**. Restituye la concordancia con la forma de trato para lo que se refiere a quien contesta, y fija la regla de terceros: «Con una amistad», «Con mi pareja», «Con mis hijos», «Actividades para menores de 3 meses a 13 años» |
| Capítulo 2 | Nuevo. El sitio como capa de captación, con los menús contextuales y los menús dinámicos. El apartado 2.1.1 fija que la intención de búsqueda es el objetivo de cada página y no un dato que el sistema reciba: lo único que conoce es la página de aterrizaje |
| Capítulos 3 a 7 | Renumerados. Las remisiones cruzadas de los seis capítulos se actualizaron en el mismo movimiento |
| El servicio para menores | Se llama **«actividades para menores de 3 meses a 13 años»** en los seis archivos. Desaparecen «actividades para niños» y «actividades infantiles» |
| `decisiones.es.md` | D-33 reescrita; se agregan D-51 a D-54; todas las remisiones pasan a la numeración vigente |
| `00-estructura.es.md` | Nuevo. El índice completo deja de vivir solo en la conversación |

Desde el capítulo 5, cada capítulo se sube en el momento de su aprobación y todo cambio posterior queda como commit propio.

## Nota sobre el historial

El commit `2aa2ed7`, «Renumeracion · los capitulos 2 a 6 corren un lugar», incluye además un cambio que su mensaje no menciona: el nombre del servicio para menores en los capítulos 3 y 4, que pasó de «actividades para menores» a «actividades para niños». **Ese cambio quedó revertido** en `d945199`, por decisión de Eric: el nombre definitivo es «actividades para menores de 3 meses a 13 años».

El mensaje del commit no se reescribió porque el entorno de esta sesión bloquea la reescritura de historial y las notas de git. Queda declarado aquí, que es donde se audita esta carpeta.
