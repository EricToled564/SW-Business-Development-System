# Verificación de integridad

Hash SHA-256 de cada archivo de esta carpeta, al 18 de septiembre de 2026.

Para comprobar que un archivo no cambió: `sha256sum <archivo>` y comparar contra esta tabla. Si no coincide, el archivo se modificó después de esta fecha, y el commit correspondiente dice por qué.

Este archivo no se lista a sí mismo: su propio hash no puede contenerse. Lo que lo respalda es el historial del repositorio.

| Archivo | Palabras | SHA-256 |
|---|---|---|
| `00-estructura.es.md` | 1,157 | `e847ae9a850f348cd9f261098b1a206743a004aa754cb2edbfa85c9c66e8bad5` |
| `01-por-que-existe-la-experiencia-ideal.es.md` | 1,512 | `a6fc42fa59b5069db8f060d24ad716532af40483d8609feb4d28053ea11e95e6` |
| `02-el-sitio-como-llega-y-como-se-le-guia.es.md` | 4,537 | `3103b9810ea431cae92776f92fc1ea7b86b309583e79da6b0f758d4fd7b2bee8` |
| `03-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | 1,457 | `a2bfea38908d746687c79e0131cf7bd68a980592c97db2eee07f5f7636669c37` |
| `04-quien-puede-recorrer-la-experiencia.es.md` | 944 | `d41006aeac5dfd216266c42b6b87275c3849f8c2f6dcb1a06ec3bb02bda49878` |
| `05-el-cuestionario.es.md` | 3,226 | `38fa1d020edcb946e0b0c2aa3d98407152748225b5f8a66e7a815b3ea0767ba0` |
| `06-los-objetivos-de-la-persona.es.md` | 851 | `40a94d5e73e711c2fa585c1dfe838fb53939c8aa025f98aa544a43de58d338c6` |
| `07-el-recorrido-en-pantalla.es.md` | 2,056 | `ad956c49733c82a45c2463c1fef34d7d9fabd039eb01d3542aa39401f78d44dd` |
| `CEI-01-v1.2.es.html` | — | `5b94abaf1b6c1183f859abf7cefe4e9490bd60764b13fd0f7b424d856942757f` |
| `CEI-01-v1.2.pdf` | — | `b5b814c9c209e9df4ba1c502d7c4be3859c66c78c328fe024b6fe563565942c0` |
| `README.es.md` | 333 | `bc7c852d59aaf2ba00e8f01db436bfe68cb4e521815693864cb0bcef81e6fa70` |
| `decisiones.es.md` | 4,080 | `dee731979058cabdf9b42f4a9480a1be4955aa27149840f68fd8542904f75b6e` |

## Estado de aprobación

| Capítulo | Aprobado por Eric | Modificado después de aprobarse | Quién ordenó el cambio |
|---|---|---|---|
| 1 | Sí | Se agregó el apartado 1.3.4, qué es BES. Después, remisiones cruzadas por la renumeración | Eric |
| 2 | **Estructura sí, texto no** | Reescrito sobre la estructura aprobada de seis apartados, con el contenido mínimo por tipo de página como fuente de 2.2 y 2.3. Se sube sin aprobación del texto, a la espera de la revisión de Eric | — |
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
| Los menús | **D-60, D-61 y D-62.** Dos menús: el superior, fijo en las 148 páginas, y el contextual, con cuatro ranuras que se reetiquetan según el estado. Los tres botones que abren el cuestionario empiezan por la pregunta de contexto de la página. La ranura del objetivo pregunta en E1 y entrega las clases del objetivo en E2 y E3 |
| El menú contextual | Los tres estados pasan a ser **sin cuestionario · completo sin agendar · completo y agendado**, y dejan de depender de por qué puerta entró la persona. El apartado 2.4.3 lleva la matriz completa de los trece tipos de página contra los tres estados, leída de `ux-spec` §6.4 y §6.6 a §6.14 y de la sección 5 del contenido mínimo |
| La contingencia | **D-59.** Nunca se le hace difícil la vida a la persona: ante la disyuntiva entre pedirle algo más y continuar el proceso sin mentirle avisando al asesor, se elige siempre lo segundo. Primera aplicación: cuando el CRM no responde, la página sigue con el último dato guardado y la bandera viaja al brief |
| Capítulo 2 | **Reescrito completo** sobre la estructura aprobada: por qué existe cada página · qué encuentra la persona al llegar · por qué ese contenido la mueve a construir su experiencia · cómo se le lleva · qué se lleva al cuestionario · el blog. Los once niveles suman 148, verificado |
| Capítulo 2 y capítulo 5 | **D-57.** El texto del capítulo 2 se retiró y su material correcto pasó al capítulo 5: los menús dinámicos del cuestionario al nuevo apartado **5.7**, y lo que el sistema sabe de la navegación al **5.2.1**. El archivo del capítulo 2 conserva la estructura aprobada y dice a dónde fue cada cosa |
| Las notas de edición | **D-58.** Se retiró el apartado 7.5.3, «Por qué está escrito así», y las notas que justificaban la redacción de la regla de concordancia y de la regla del «Siguiente». Las reglas del sistema se conservaron |
| La duración del estado | **D-48 corregida, D-55 y D-56.** El identificador de sesión vive toda la sesión y muere al salir; los tres estados del menú contextual son de sesión; al reencontrarse, el prospecto se concilia con la llave canónica y se actualiza, y su experiencia ideal anterior se elimina por completo de su base y se reemplaza por la última |

Desde el capítulo 5, cada capítulo se sube en el momento de su aprobación y todo cambio posterior queda como commit propio.

## Nota sobre el historial

El commit `2aa2ed7`, «Renumeracion · los capitulos 2 a 6 corren un lugar», incluye además un cambio que su mensaje no menciona: el nombre del servicio para menores en los capítulos 3 y 4, que pasó de «actividades para menores» a «actividades para niños». **Ese cambio quedó revertido** en `d945199`, por decisión de Eric: el nombre definitivo es «actividades para menores de 3 meses a 13 años».

El mensaje del commit no se reescribió porque el entorno de esta sesión bloquea la reescritura de historial y las notas de git. Queda declarado aquí, que es donde se audita esta carpeta.
