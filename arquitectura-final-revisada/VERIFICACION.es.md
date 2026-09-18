# Verificación de integridad

Hash SHA-256 de cada archivo de esta carpeta, al 18 de septiembre de 2026.

Para comprobar que un archivo no cambió: `sha256sum <archivo>` y comparar contra esta tabla. Si no coincide, el archivo se modificó después de esta fecha, y el commit correspondiente dice por qué.

Este archivo no se lista a sí mismo: su propio hash no puede contenerse. Lo que lo respalda es el historial del repositorio.

| Archivo | Palabras | SHA-256 |
|---|---|---|
| `00-estructura.es.md` | 1,103 | `b53c3d9cba678ee076ab23bebe19620d8c71ee6a25bb992e9c67cd3ecdedd060` |
| `01-por-que-existe-la-experiencia-ideal.es.md` | 1,512 | `a6fc42fa59b5069db8f060d24ad716532af40483d8609feb4d28053ea11e95e6` |
| `02-el-sitio-como-llega-y-como-se-le-guia.es.md` | 2,404 | `cd7e5f7d25b4e074ec873c443cfb90066c23ba201f3854b94c84364b991ea4df` |
| `03-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | 1,458 | `553c7e9e668fa21feef1b2cc2a0fdc79c088eab5cc52878de3e83aeec5c9f753` |
| `04-quien-puede-recorrer-la-experiencia.es.md` | 944 | `37614ffa5a762d540c2cb0d91e808fecfdf1acfcb9e0e02fa9d4cbf85a892836` |
| `05-el-cuestionario.es.md` | 2,243 | `de8dc91494c158b81afc3cb59f0546d037d7f82cdc8a4afc4f4b1d2852fa4874` |
| `06-los-objetivos-de-la-persona.es.md` | 851 | `40a94d5e73e711c2fa585c1dfe838fb53939c8aa025f98aa544a43de58d338c6` |
| `07-el-recorrido-en-pantalla.es.md` | 1,948 | `083f0b9f8b31dc4bda808031ef02cbaf1fa0f87a2c85d6d8f4cf18f7590b197a` |
| `CEI-01-v1.2.es.html` | — | `554c737382432d791b38ecd9a2fb50ee57d2c4f44f18aa271f06127e5370f74a` |
| `CEI-01-v1.2.pdf` | — | `f6d3bc2563c30706be728e445dc1de9576cd1bff5c749a83c588d4c5eb72e219` |
| `README.es.md` | 333 | `44ef438b32b36013ba4129586ce3d963861eb0cbbbae9d62cc9225f0a8733733` |
| `decisiones.es.md` | 2,387 | `325ba980f768c845d0450ddc8e0afb867c585192f93f34d803d86df061d46128` |

## Estado de aprobación

| Capítulo | Aprobado por Eric | Modificado después de aprobarse | Quién ordenó el cambio |
|---|---|---|---|
| 1 | Sí | Se agregó el apartado 1.3.4, qué es BES. Después, remisiones cruzadas por la renumeración | Eric |
| 2 | **No** | Escrito y corregido en los apartados 2.3 y 2.6.4. Se sube por instrucción expresa de Eric, a la espera de su revisión | — |
| 3 | Sí | Las leyendas dejan de ser cuatro fijas; se quitó la cifra de requisitos. Después, renumeración y el nombre del servicio infantil | Eric |
| 4 | Sí | La precarga se muestra en la ruta reducida. Después, renumeración y el nombre del servicio infantil | Eric |
| 5 | Sí | La clase aceptada sin club se vuelve requisito, en 5.2.3 y 5.2.4. Después, renumeración | Eric |
| 6 | Sí | Sin cambios de fondo desde su aprobación; solo renumeración | Eric |
| 7 | **No** | Escrito. Se sube por instrucción expresa de Eric, a la espera de su revisión | — |

## Qué cambió en esta entrega

| Pieza | Qué cambió |
|---|---|
| `CEI-01` | Pasa a **versión 1.2**. Restituye la concordancia con la forma de trato para lo que se refiere a quien contesta, y fija la regla de terceros: «Con una amistad», «Con mi pareja», «Con mis hijos», «Actividades para niños de 3 meses a 13 años» |
| Capítulo 2 | Nuevo. El sitio como capa de captación, con los menús contextuales y los menús dinámicos |
| Capítulos 3 a 7 | Renumerados. Las remisiones cruzadas de los seis capítulos se actualizaron en el mismo movimiento |
| `decisiones.es.md` | D-33 reescrita; se agregan D-51 a D-54; todas las remisiones pasan a la numeración vigente |
| `00-estructura.es.md` | Nuevo. El índice completo deja de vivir solo en la conversación |

Desde el capítulo 5, cada capítulo se sube en el momento de su aprobación y todo cambio posterior queda como commit propio.
