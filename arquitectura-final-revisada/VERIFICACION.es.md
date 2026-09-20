# Verificación de integridad

Hash SHA-256 de cada archivo de esta carpeta, al 20 de septiembre de 2026.

Para comprobar que un archivo no cambió: `sha256sum <archivo>` y comparar contra esta tabla. Si no coincide, el archivo se modificó después de esta fecha, y el commit correspondiente dice por qué.

Este archivo no se lista a sí mismo: su propio hash no puede contenerse. Lo que lo respalda es el historial del repositorio.

| Archivo | Palabras | SHA-256 |
|---|---|---|
| `00-estructura.es.md` | 1,277 | `481ba80d9e13f9aca96766f86746d57126a182da0a11a3c3c0a4fc6666d456bf` |
| `01-por-que-existe-la-experiencia-ideal.es.md` | 1,512 | `a6fc42fa59b5069db8f060d24ad716532af40483d8609feb4d28053ea11e95e6` |
| `02-el-sitio-como-llega-y-como-se-le-guia.es.md` | 5,630 | `5667b3c0d9b3287105202109b946fd50b3bc23f335a9724fe5b59b97ce01bed8` |
| `03-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | 1,643 | `e0dc61c7f6e3154cbd7e71012cd31c36eaedc937c6f86a0fe19b29772440d80a` |
| `04-quien-puede-recorrer-la-experiencia.es.md` | 944 | `d41006aeac5dfd216266c42b6b87275c3849f8c2f6dcb1a06ec3bb02bda49878` |
| `05-el-cuestionario.es.md` | 3,226 | `38fa1d020edcb946e0b0c2aa3d98407152748225b5f8a66e7a815b3ea0767ba0` |
| `06-los-objetivos-de-la-persona.es.md` | 942 | `d9cec15eddbfb85067814c18b6c53f2d98da521d2ae2b95eebbd533af617916c` |
| `07-el-recorrido-en-pantalla.es.md` | 2,425 | `98b8c9cdc8ee3df8590e0dd120dcdc4cd1a4a6931b9e7141f3c3076b69ad79a9` |
| `CEI-01-v1.2.es.html` | — | `5b94abaf1b6c1183f859abf7cefe4e9490bd60764b13fd0f7b424d856942757f` |
| `CEI-01-v1.2.pdf` | — | `b5b814c9c209e9df4ba1c502d7c4be3859c66c78c328fe024b6fe563565942c0` |
| `README.es.md` | 355 | `4a6b10d7e10a5bcd6080491ac2772fc303ccdb23da6a226d71abc07f929a5ed4` |
| `decisiones.es.md` | 7,146 | `1bf255b56b2ce906325a495e7bc5ab6e7e90a2150c1138a3305cbd8f28ee7096` |
| `insumo-entrenamiento-acuatico.es.md` | 1,950 | `872fce246a33f992c7a2004ffaa7b1b74cb4ce21ac5ab6a8c56402010a57b9b4` |

## Estado de aprobación

| Capítulo | Aprobado por Eric | Modificado después de aprobarse | Quién ordenó el cambio |
|---|---|---|---|
| 1 | Sí | Se agregó el apartado 1.3.4, qué es BES. Después, remisiones cruzadas por la renumeración | Eric |
| 2 | **Estructura sí, texto no** | Reescrito completo sobre las decisiones D-65 a D-79, dictadas una por una el 20 de septiembre. Se sube sin aprobación del texto, a la espera de la revisión de Eric | — |
| 3 | Sí | Las leyendas dejan de ser cuatro fijas; se quitó la cifra de requisitos. Después, renumeración y el nombre del servicio para menores. **El 20 de septiembre: un cálculo por cita (D-68) y el alcance de la regla de no nombrar carencias (D-72)** | Eric |
| 4 | Sí | La precarga se muestra en la ruta reducida. Después, renumeración y el nombre del servicio para menores | Eric |
| 5 | Sí | La clase aceptada sin club se vuelve requisito, en 5.2.3 y 5.2.4. Después, renumeración | Eric |
| 6 | Sí | Sin cambios de fondo desde su aprobación; solo renumeración. **El 20 de septiembre: los seis objetivos tienen página propia (D-70)** | Eric |
| 7 | **No** | Escrito. **El 20 de septiembre: la escritura única al cerrar la sesión (D-69), agendar en un segundo club (D-67) y la experiencia por cita (D-68)** | — |

## Qué cambió en esta entrega

| Pieza | Qué cambió |
|---|---|
| `decisiones.es.md` | **Entran D-65 a D-79**, las doce decisiones del menú contextual tomadas una por una, más las notas de sustitución en D-55, D-56, D-60, D-62, D-63 y D-64, que quedan corregidas por ellas |
| **La ranura del club** | **D-65.** Deja de depender del tipo de página: «Encuentra tu club ideal» sin cuestionario, «Conoce otros clubes Sports World» con él, y la jerarquía dentro del botón. **Un solo radio: 5 km**, medido siempre desde el club ideal. Se retiran la regla por tamaño de ciudad y el radio de 10 km |
| **El orden de los botones** | **D-66.** Club, experiencia y visita, de izquierda a derecha; después los propios de la página |
| **La segunda cita** | **D-67 y D-68.** El encabezado ofrece agendar en otro club y recalcula la experiencia con las respuestas que ya dio. Cada cita lleva su propia experiencia y su propio brief; al alta prevalece la del club elegido. Corrige D-56 |
| **Cuándo se escribe** | **D-69.** Nada se escribe ni se envía hasta que la sesión cierra, por salida o por diez minutos sin actividad. Corrige el capítulo 7, que escribía al agendar |
| **Las páginas de objetivo** | **D-70.** Son los seis objetivos del cuestionario, con sus nombres. Desaparecen primeros pasos, salud y bienestar, ganar fuerza y rehabilitación como nombres de página |
| **Nunca una lista suelta** | **D-71.** El club muestra objetivos con sus clases dentro; la clase no lleva horarios; los horarios viven solo en la página del club |
| **La leyenda** | **D-72.** «Disponible en tu club» o «No disponible en tu club» en las listas de clases por objetivo, única excepción a la regla de no nombrar carencias |
| **La ranura del objetivo** | **D-73.** Nombra el objetivo: «Conoce las clases ideales para [nombre]». Con dos objetivos, dos botones |
| **Los botones propios** | **D-74.** Otras clases similares · Otros artículos similares · Tu rutina individual, esta para todas las personas. **Se retira «Artículos o información útil»**: los artículos se enlazan dentro del contenido |
| **Membresías y el blog** | **D-75.** Membresías es el único tipo sin ranura del objetivo; el blog las lleva todas |
| **Actividades para menores** | **D-76.** La página se llama por el nombre del servicio y se parte en dos secciones. Se retiran sus tres botones propios |
| **Entrenamiento individual** | **D-77.** Las tres modalidades se comportan como páginas de objetivo, con «Conoce los programas de [modalidad]» |
| **El entrenamiento en alberca** | **D-78 y D-79.** Se prescribe por esfuerzo percibido, porque en el agua el pulso es de 8 a 12 latidos más bajo al mismo esfuerzo. El sistema nunca propone apnea ni hiperventilación. Entra `insumo-entrenamiento-acuatico.es.md` con los seis programas y su fundamento documentado |

Desde el capítulo 5, cada capítulo se sube en el momento de su aprobación y todo cambio posterior queda como commit propio.

## Nota sobre el historial

El commit `2aa2ed7`, «Renumeracion · los capitulos 2 a 6 corren un lugar», incluye además un cambio que su mensaje no menciona: el nombre del servicio para menores en los capítulos 3 y 4, que pasó de «actividades para menores» a «actividades para niños». **Ese cambio quedó revertido** en `d945199`, por decisión de Eric: el nombre definitivo es «actividades para menores de 3 meses a 13 años».

El mensaje del commit no se reescribió porque el entorno de esta sesión bloquea la reescritura de historial y las notas de git. Queda declarado aquí, que es donde se audita esta carpeta.
