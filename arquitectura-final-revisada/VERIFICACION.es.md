# Verificación de integridad

Hash SHA-256 de cada archivo de esta carpeta, al 21 de septiembre de 2026.

Para comprobar que un archivo no cambió: `sha256sum <archivo>` y comparar contra esta tabla. Si no coincide, el archivo se modificó después de esta fecha, y el commit correspondiente dice por qué.

**La columna de palabras se reproduce con un solo comando**, sobre el archivo tal cual, marcas de Markdown incluidas:

```
python3 -c "import sys; print(len(open(sys.argv[1]).read().split()))" <archivo>
```

Es el mismo criterio con el que se contaron las entregas anteriores, y difiere de `wc -w` porque separa también por los espacios duros de las tablas.

Este archivo no se lista a sí mismo: su propio hash no puede contenerse. Lo que lo respalda es el historial del repositorio.

| Archivo | Palabras | SHA-256 |
|---|---|---|
| `00-paginas-iniciales.es.md` | 2,906 | `da51f3353093be48bfe9400d880daf92c7ff1872a85deaaf9e280eaf07a09211` |
| `00-estructura.es.md` | 1,795 | `a8076eeeaf734850972afdb65447e02bb49575b9ecb25b36803de8688f75458c` |
| `01-por-que-existe-la-experiencia-ideal.es.md` | 1,505 | `064c361746f29d343a21734af3d67053af7caae06d767a21b6244b97543314bb` |
| `02-el-sitio-como-llega-y-como-se-le-guia.es.md` | 6,267 | `2a8fccf19f95af9208baaf75212bcbe1d6fa8bb507d96d7ed60c5da5895a4361` |
| `03-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | 1,626 | `1ddabcd4c28910ff64dcbab90e0156529ad4dd46340b9f9bc6096e7a366f427c` |
| `04-quien-puede-recorrer-la-experiencia.es.md` | 930 | `7aace847f4d5c130d4eef3e727f4f965b89d05587d286744ec4ad7a1c7ea8262` |
| `05-el-cuestionario.es.md` | 3,227 | `962fa5a318f05366495ce603eaf05e3edfe0f7eed012e53e92bb74050a4563c2` |
| `06-los-objetivos-de-la-persona.es.md` | 841 | `62b4fd650f0712408acd4041f7577e409f1cb993886423167350cf7390200e58` |
| `07-el-recorrido-en-pantalla.es.md` | 2,739 | `0cfdd5b472f560cc5bab2b3ed54cd7d0eb4fe70b6228f2a6cf8f1ec98af9aca2` |
| `08-datos-de-contacto-y-consentimiento.es.md` | 1,572 | `03c203bcca7eb5fa9d878d1fae1ea288f57cc0d21695a85f661c7018cb053bd1` |
| `CEI-01-v1.2.es.html` | — | `5b94abaf1b6c1183f859abf7cefe4e9490bd60764b13fd0f7b424d856942757f` |
| `CEI-01-v1.2.pdf` | — | `b5b814c9c209e9df4ba1c502d7c4be3859c66c78c328fe024b6fe563565942c0` |
| `NORMA-DE-REDACCION.es.md` | 3,029 | `9e575b7d5437772b6127c9cf8baadf9fa66cc8f4bf61f3e8d0e4500a1d8eba73` |
| `README.es.md` | 355 | `693ba01c6a4d850b39685e7d1868e45b95241fa70097c6346405d401bdb5a439` |
| `decisiones.es.md` | 12,168 | `b9df5ee866b15b236dde308441a79d9b0888d75c3220052fd2147c7b5f49c515` |
| `insumo-entrenamiento-acuatico.es.md` | 1,950 | `872fce246a33f992c7a2004ffaa7b1b74cb4ce21ac5ab6a8c56402010a57b9b4` |

## Estado de aprobación

| Capítulo | Aprobado por Eric | Modificado después de aprobarse | Quién ordenó el cambio |
|---|---|---|---|
| 1 | Sí | Se agregó el apartado 1.3.4, qué es BES. Después, remisiones cruzadas por la renumeración | Eric |
| 2 | **Estructura sí, texto no** | Reescrito completo sobre las decisiones D-65 a D-79, D-82, D-83 y D-85, dictadas una por una el 20 de septiembre, y cotejado contra los dictados literales de ese día. Se sube sin aprobación del texto, a la espera de la revisión de Eric. **El 21 de septiembre: reordenado por resultado (D-91), los tres estados por su nombre (D-89), las clases premium (D-93) y la unidad del traslado (D-96)** | — |
| 3 | Sí | Las leyendas dejan de ser cuatro fijas; se quitó la cifra de requisitos. Después, renumeración y el nombre del servicio para menores. **El 20 de septiembre: un cálculo por cita (D-68) y el alcance de la regla de no nombrar carencias (D-72). El 21: el tiempo de traslado se declara en minutos (D-96)** | Eric |
| 4 | Sí | La precarga se muestra en la ruta reducida. Después, renumeración y el nombre del servicio para menores. **El 21 de septiembre: el tiempo de traslado se declara en minutos (D-96)** | Eric |
| 5 | Sí | La clase aceptada sin club se vuelve requisito, en 5.2.3 y 5.2.4. Después, renumeración | Eric |
| 6 | Sí | Sin cambios de fondo desde su aprobación; solo renumeración. **El 20 de septiembre: los seis objetivos tienen página propia (D-70)** | Eric |
| 7 | **No** | Escrito. **El 20 de septiembre: la escritura única al cerrar la sesión (D-69), agendar en un segundo club (D-67) y la experiencia por cita (D-68). El 21: los tres estados por su nombre (D-89), la llave de la sesión (D-90), el calendario de atención del club (D-94) y el apartado 7.5.3 de los recordatorios (D-95)** | — |

## Qué cambió en la entrega del 21 de septiembre

| Pieza | Qué cambió |
|---|---|
| `decisiones.es.md` | **Entran D-89 a D-96.** Dos alinean la Arquitectura con el Mapa del Funnel (D-89 y D-90); dos registran lo dictado en sesión y ya aplicado (D-91 y D-92); cuatro son las precisiones que Eric dictó el 21 de septiembre (D-93 a D-96) |
| **Los tres estados del menú** | **D-89.** Pasan a llamarse **Sin cuestionario · Con experiencia · Con visita**. Los códigos `E##` quedan en el Mapa del Funnel, que el Contrato designa documento único de medición. Ninguna regla cambia |
| **Los dos identificadores** | **D-90.** `web_session_id`, que muere con la sesión y nunca llega al registro del prospecto, y `session_uuid`, la llave de idempotencia que sí es campo de ese registro. D-48 queda intacta |
| **El orden del capítulo 2** | **D-91.** Primero los once tipos por el porqué existen y el problema que resuelven, después lo que el sitio produce, después cómo el contenido y los menús llevan ahí |
| **La redacción** | **D-92.** Describir el sistema por lo que no hace queda prohibido. El barrido de lo ya escrito entra párrafo por párrafo, con aprobación de Eric en cada uno: `tools/registro.js` los lista y **no borra** |
| **Las clases premium** | **D-93.** Son las siete disciplinas que Sports World decide priorizar, y lo único propio de sus páginas es la redacción editorial. Se retira la distinción entre clases con marca y sin marca. **Cuáles son las siete es punto abierto**, a decidir por Sports World en el arranque |
| **La agenda** | **D-94.** La fecha y la hora se eligen dentro del calendario de atención del club: los días en que ese club abre y las horas en que atiende, del mismo corte de las 06:00 que publica su página |
| **Los recordatorios de la visita** | **D-95.** Los 2 mensajes por WhatsApp —24 horas y 2 horas antes— son de la persona; el club recibe el brief por correo. Entra el apartado 7.5.3 |
| **Kilómetros y minutos** | **D-96.** Los kilómetros acotan qué clubes entran —10 km para resolver el club ideal, 5 km para explorar—; los minutos miden el trayecto y son la medida que se le muestra. La unidad queda explícita en 2.6.2, 3.2.1 y el capítulo 4 |
| **La tabla de integridad** | La columna de palabras declara el comando exacto que la reproduce |

## Qué cambió en la entrega del 20 de septiembre

| Pieza | Qué cambió |
|---|---|
| `decisiones.es.md` | **Entran D-65 a D-88.** Las quince del menú contextual, las citas, la escritura única y el entrenamiento en alberca (D-65 a D-79), tomadas una por una, y las ocho que fijan qué cubre el documento y qué no (D-80 a D-87); más las notas de sustitución en D-55, D-56, D-60, D-62, D-63, D-64 y D-78. **Cuatro precisiones al cotejar contra los dictados literales:** D-73, en una página de objetivo la ranura nombra el objetivo de la página, y la página de una clase no la lleva con el cuestionario contestado; D-74 y D-75, lo mismo visto desde «Otras clases similares» y desde membresías; D-77, al tocar un programa se ven los clubes donde está y, con cuestionario, la leyenda. **Cerrados con Eric los tres puntos que quedaban:** D-73, con dos objetivos un solo botón con el principal; D-76, la leyenda en las clases para niños; D-78, la cifra alineada con el insumo. **Después:** D-73 corregida con «Explora» y las clases ideales solo en las páginas de objetivo; entra D-88, la página estática y la capa personal, con el máximo de botones por menú |
| **La ranura del club** | **D-65.** Deja de depender del tipo de página: «Encuentra tu club ideal» sin cuestionario, «Conoce otros clubes Sports World» con él, y la jerarquía dentro del botón. **Un solo radio: 5 km**, medido siempre desde el club ideal. Se retiran la regla por tamaño de ciudad y el radio de 10 km |
| **El orden de los botones** | **D-66.** Club, experiencia y visita, de izquierda a derecha; después los propios de la página |
| **La segunda cita** | **D-67 y D-68.** El encabezado ofrece agendar en otro club y recalcula la experiencia con las respuestas que ya dio. Cada cita lleva su propia experiencia y su propio brief; al alta prevalece la del club elegido. Corrige D-56 |
| **Cuándo se escribe** | **D-69.** Nada se escribe ni se envía hasta que la sesión cierra, por salida o por diez minutos sin actividad. Corrige el capítulo 7, que escribía al agendar |
| **Las páginas de objetivo** | **D-70.** Son los seis objetivos del cuestionario, con sus nombres. Desaparecen primeros pasos, salud y bienestar, ganar fuerza y rehabilitación como nombres de página |
| **Nunca una lista suelta** | **D-71.** El club muestra objetivos con sus clases dentro; la clase no lleva horarios; los horarios viven solo en la página del club |
| **La leyenda** | **D-72.** «Disponible en tu club» o «No disponible en tu club» en las listas de clases por objetivo, única excepción a la regla de no nombrar carencias |
| **La ranura del objetivo** | **D-73.** «¿Cuál es tu objetivo?» antes del cuestionario; las clases ideales solo en las seis páginas de objetivo, nombrando el objetivo de la página; con dos objetivos elegidos, «Explora…» en la página de cada uno con el otro. El menú se evalúa sobre cinco variables |
| **Los botones propios** | **D-74.** Otras clases similares · Otros artículos similares · Tu rutina individual, esta para todas las personas. **Se retira «Artículos o información útil»**: los artículos se enlazan dentro del contenido |
| **Membresías y el blog** | **D-75.** Membresías es el único tipo que no lleva la ranura del objetivo en ningún estado; la página de una clase la lleva solo antes del cuestionario; el blog las lleva todas |
| **Actividades para menores** | **D-76.** La página se llama por el nombre del servicio y se parte en dos secciones. Se retiran sus tres botones propios |
| **Entrenamiento individual** | **D-77.** Las tres modalidades se comportan como páginas de objetivo, con «Conoce los programas de [modalidad]» |
| **El entrenamiento en alberca** | **D-78 y D-79.** Se prescribe por esfuerzo percibido, nunca por pulsaciones trasladadas del piso. El sistema nunca propone apnea ni hiperventilación. Entra `insumo-entrenamiento-acuatico.es.md`: la regla de prescripción, el método de derivación indirecta y el contrato de la fuente; los seis programas son estado preliminar, porque el dato vive en la matriz de entrenamiento individual (D-83) |
| **El capítulo 2** | Reescrito completo sobre esas decisiones, en siete apartados: los once niveles, el contenido de cada página, el menú superior, las tres ranuras y los botones propios, la tabla de los treinta y tres escenarios, la precarga y el blog. Cotejado contra los dictados literales del 20 de septiembre: 41 comprobaciones, 41 cumplidas. Después, «Explora» y el apartado 2.4.9, la página estática y la capa personal (D-88). **Reescrito en registro ejecutivo a petición de Eric:** cada término se presenta en su primer uso, sin metáforas ni giros conversacionales; tablas, reglas y estructura sin cambios, 43 comprobaciones cumplidas |
| **La página y la capa personal** | **D-88.** Las 148 páginas se sirven estáticas e idénticas; la capa personal se resuelve con el identificador de sesión; el menú se diseña para su máximo de botones y reserva ese espacio; la condición del script escrita completa |

Desde el capítulo 5, cada capítulo se sube en el momento de su aprobación y todo cambio posterior queda como commit propio.

## Nota sobre el historial

El commit `2aa2ed7`, «Renumeracion · los capitulos 2 a 6 corren un lugar», incluye además un cambio que su mensaje no menciona: el nombre del servicio para menores en los capítulos 3 y 4, que pasó de «actividades para menores» a «actividades para niños». **Ese cambio quedó revertido** en `d945199`, por decisión de Eric: el nombre definitivo es «actividades para menores de 3 meses a 13 años».

El mensaje del commit no se reescribió porque el entorno de esta sesión bloquea la reescritura de historial y las notas de git. Queda declarado aquí, que es donde se audita esta carpeta.
