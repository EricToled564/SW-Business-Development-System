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
| `00-estructura.es.md` | 1,770 | `fe6abacfe683569c26257970a0c8ad6e41eedaa87962deaaca503e4cc7126bde` |
| `00-paginas-iniciales.es.md` | 2,571 | `112b5679aba47551b9adeeff70782b2f9726fdbb325d9b1b7e9fd2547573b84f` |
| `01-vamos-a-crear-el-mejor-sistema.es.md` | 1,352 | `bd8c4384b5e06e7389e320ac8c35466bafc3888e21ee3ce6d06571fb4b96ccd3` |
| `02-como-se-pierde-hoy.es.md` | 1,211 | `82ac54ecb2870dd50e4ad8fd4efcf7fe01c31ccc826e78b5d2ed1a56e96bf9b0` |
| `03-el-sitio-como-llega-y-como-se-le-guia.es.md` | 6,919 | `a2aa840d5750739648444ee4661c38b3d6618c200fc013478399b26715f1c6ff` |
| `04-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | 2,700 | `17e6182df11a783fdafbd426f6711d817c44c39510515d03efc99f5f1ed4ecf2` |
| `05-el-cuestionario.es.md` | 4,164 | `106ecd3cb8e498be1c4ca55b9481e52129fd9b06ea5df704d7ae5be2fdda3041` |
| `06-quien-puede-recorrer-la-experiencia.es.md` | 941 | `20074348d11dc90a1a044896670f4aaa6bcb6f2b6ec43f07cd8eca44f162c884` |
| `07-los-objetivos-de-la-persona.es.md` | 827 | `1f928c0a6ff5565aef60233b76d4f50a195d7515abb234d8abccc233d0ecde75` |
| `08-el-recorrido-en-pantalla.es.md` | 2,760 | `0c3a0a462a90d0b1d8352c8ac733ac97d8ce5acef1ece1790a59a19bff73bbae` |
| `09-datos-de-contacto-y-consentimiento.es.md` | 1,571 | `ff166b32b38e35bfa0cbeefcaa414fcf60bb024855bf289222747751056788c8` |
| `CEI-01-v1.3.es.html` | — | `1fa9b23939122ecd8ce6c858488c5290787d6441f57ade4acd8ec7577f061394` |
| `CEI-01-v1.3.pdf` | — | `5a8b3e8d89477036970cca5645a3f8c8bc98b5372b4ee2df78f94054ded6a315` |
| `NORMA-DE-REDACCION.es.md` | 3,542 | `bec25e8f9aaab7d9ce9f874e6b392a3eefce21eb4cf675f52139da25fcde1a60` |
| `README.es.md` | 392 | `6e0c10829d6d0a588b013f701eb25f3852101b7392dc626940ed124fde12cd9b` |
| `decisiones.es.md` | 13,193 | `da4fb93c1c9b2db02a1ba4ec613f811aaac1f1d3069d00bc19e423c484015a67` |
| `insumo-entrenamiento-acuatico.es.md` | 1,950 | `ff81fdc7bcc25ae7c9477f4b670f1e633ec3262fda0df237b41b0d92daa1d471` |

## Estado de aprobación

**La tabla va en la numeración vigente**, la de veinte capítulos que fija D-98. Hasta el 21 de septiembre seguía en la numeración anterior, corrida un lugar, y le faltaban los capítulos 1 y 9.

| Cap. | Aprobado por Eric | Quién escribió el texto vigente | Qué cambió después |
|---|---|---|---|
| **1** | Sí | **Eric.** Instalado carácter por carácter | Nada |
| **2** | Sí | **Eric.** Instalado carácter por carácter | Nada |
| **3** | Sí | **Eric.** Instalado carácter por carácter, apartados 3.1 a 3.10 | Sus 12 correcciones a los apartados 3.5 a 3.10, del 21 de septiembre. Las cinco frases que marcaba el verificador quedaron autorizadas y anotadas en `tools/registro-permitidas.txt`. **Un solo cambio de notación:** «su reactivo 4» pasa a «**Q4**», la clave de CEI-01 |
| **4** | Sí | **Eric.** Tercera versión, instalada carácter por carácter | **Cierra el punto abierto que dejó la segunda:** «La existencia de una cita no debe ser condición para generar ni entregar el brief». Sin cita, el brief corresponde al club resuelto y va marcado como **llamada directa**, que es lo que D-100 y el apartado 8.5.2 establecen. El brief pasa a dirigirse al **club que continúa la atención**, y 4.4.1 y 4.4.2 cubren los dos casos, con cita y sin ella |
| **5** | Sí | **Eric.** Instalado carácter por carácter | Conserva las claves **Q1 a Q16**, 5.4.1 y 5.4.2 de la reescritura del día. Suma: que rechazar un punto de P0 devuelve la pregunta al cuestionario con su redacción original, que P0 no agrega pregunta al conteo, y la separación entre personalización y señal operativa. El punto que abrió quedó cerrado el mismo día: **CEI-01 pasa a la versión 1.3** y recoge la regla (D-104) |
| **6** | **No** | Reescrito el 21 de septiembre | Entra al registro de los capítulos 1 a 3. Los reactivos pasan a las claves **Q6, Q13, Q14, Q15, Q15b y Q16**. La compuerta se identifica como **G0**. Once frases del verificador, resueltas |
| **7** | **No** | Corregido el 21 de septiembre | Los dos ejes pasan a **Q3** y **Q4**, y la modalidad a **Q6**. Tres frases del verificador, resueltas. Se corrige «A la persona no se le informa de la postergación», que nombraba algo que este capítulo no define |
| **8** | **No** | Corregido el 21 de septiembre | **La tabla de las seis fases iba de 1 a 7 y saltaba el 2**; las seis quedan numeradas de 1 a 6, como ya las nombraban los apartados 8.3.1 a 8.3.4. Diecisiete frases del verificador: dieciséis resueltas y una, la regla del navegador, a resolución de Eric |
| **9** | **No** | Versión anterior | La conciliación con la llave canónica y el reencuentro (D-56). El 21 de septiembre: el nombre viene de **Q1** |

**Los capítulos 10 a 20 están pendientes de escritura.** `00-estructura.es.md` fija sus subcapítulos previstos.

## Qué cambió en la entrega del 21 de septiembre

| Pieza | Qué cambió |
|---|---|
| `decisiones.es.md` | **Entran D-89 a D-96.** Dos alinean la Arquitectura con el Mapa del Funnel (D-89 y D-90); dos registran lo dictado en sesión y ya aplicado (D-91 y D-92); cuatro son las precisiones que Eric dictó el 21 de septiembre (D-93 a D-96) |
| **Los tres estados del menú** | **D-89.** Pasan a llamarse **Sin cuestionario · Con experiencia · Con visita**. Los códigos `E##` quedan en el Mapa del Funnel, que el Contrato designa documento único de medición. Ninguna regla cambia |
| **Los dos identificadores** | **D-90.** `web_session_id`, que muere con la sesión y nunca llega al registro del prospecto, y `session_uuid`, la llave de idempotencia que sí es campo de ese registro. D-48 queda intacta |
| **El orden del capítulo 3** | **D-91.** Primero los once tipos por el porqué existen y el problema que resuelven, después lo que el sitio produce, después cómo el contenido y los menús llevan ahí |
| **La redacción** | **D-92.** Describir el sistema por lo que no hace queda prohibido. El barrido de lo ya escrito entra párrafo por párrafo, con aprobación de Eric en cada uno: `tools/registro.js` los lista y **no borra** |
| **Las clases premium** | **D-93.** Son las siete disciplinas que Sports World decide priorizar, y lo único propio de sus páginas es la redacción editorial. Se retira la distinción entre clases con marca y sin marca. **Cuáles son las siete es punto abierto**, a decidir por Sports World en el arranque |
| **La agenda** | **D-94.** La fecha y la hora se eligen dentro del calendario de atención del club: los días en que ese club abre y las horas en que atiende, del mismo corte de las 06:00 que publica su página |
| **Los recordatorios de la visita** | **D-95.** Los 2 mensajes por WhatsApp —24 horas y 2 horas antes— son de la persona; el club recibe el brief por correo. Entra el apartado 8.5.3 |
| **Kilómetros y minutos** | **D-96.** Los kilómetros acotan qué clubes entran —10 km para resolver el club ideal, 5 km para explorar—; los minutos miden el trayecto y son la medida que se le muestra. La unidad queda explícita en 2.6.2, 3.2.1 y el capítulo 6 |
| **La tabla de integridad** | La columna de palabras declara el comando exacto que la reproduce |
| **El capítulo 4** | Reescrito en el registro de los capítulos 1 a 3. Entran 4.1.1 y 4.1.2. El apartado 4.2.5 pasa de describir lo que la persona no ve a dos reglas normativas. La remisión del alcance del instrumento apunta a 5.8, donde decía capítulo 6 |
| **El capítulo 5** | Reescrito. Los reactivos van con las claves **Q1 a Q16** de CEI-01 v1.2, que es el instrumento que rige. Entran 5.4.1, los cuatro requisitos que el cuestionario fija, y 5.4.2, el entrenamiento personal que se propone sin preguntarse |
| **La numeración de los reactivos** | La tabla de 5.4 estaba corrida desde su tercer renglón: llamaba 3 a la forma de trato, que es **Q2**, y 17 al código postal, que es **Q16**. La prosa del capítulo ya usaba la numeración de CEI-01, así que las remisiones eran correctas y la tabla las contradecía. Las cuatro remisiones a reactivos de los capítulos 3, 6, 7 y 9 se verificaron una por una contra CEI-01: las cuatro correctas |
| **El apartado 5.9** | La tabla de señales estaba partida en dos por tres párrafos, y sus últimos cuatro renglones quedaban fuera de toda tabla. Queda una sola tabla de nueve renglones |
| **D-103** | La prueba de D-101 gana un tercer renglón: la frase cuyo sujeto es un estado que el documento declara se queda en negativo, porque la ausencia es lo que distingue ese estado de los otros |
| **`tools/registro.js`** | La línea de resumen contaba archivos revisados y decía «en 10 capítulos» con ocho archivos con hallazgo. Ahora dice «en 8 de los 10 archivos revisados» |
| **La norma de redacción** | Su índice por sección estaba en la numeración anterior a D-98: 54 renglones renumerados. La regla 1 pasa a tener tres salidas |
| **Las fronteras de las tres partes** | `00-estructura.es.md` dejaba los capítulos 17 y 20 fuera de toda parte. Quedan Parte II de 3 a 17 y Parte III de 18 a 20 |
| **El capítulo 6** | Reescrito en el registro de los capítulos 1 a 3. La compuerta se identifica como **G0** y los reactivos de la ruta reducida con sus claves. Las once frases del verificador, resueltas: cuatro pasan a prohibiciones normativas —la ruta no debe pedir datos personales, ni abrir registro, ni contratar en línea a personas menores de edad, ni recoger datos de terceros— y siete a forma afirmativa |
| **El capítulo 7** | Los dos ejes pasan a **Q3** y **Q4**, la modalidad a **Q6**, y las tres frases del verificador quedan resueltas |
| **Las seis fases del capítulo 8** | La tabla las numeraba **1, 3, 4, 5, 6 y 7**: seis fases con siete números y el 2 ausente. Los apartados 8.3.1 a 8.3.4 ya las llamaban por la numeración correcta, igual que la tabla de retroceso de 8.4, que las nombra sin número. La tabla quedaba sola contra el resto del capítulo. Es el mismo defecto que tenía la tabla de reactivos del capítulo 5 |
| **Las claves Q## en todo el documento** | Ninguna remisión a un reactivo va ya por número suelto. Las cuatro que quedaban en los capítulos 3, 6, 7 y 9 usan la clave de CEI-01 |
| **El índice deja de citar la bitácora** | `tools/indice.py` retira las claves **D-##** al generar el apartado 0.3. La trazabilidad de cada decisión sigue en `00-estructura.es.md` y en la bitácora; el índice nombra subcapítulos |
| **El capítulo 4, en la versión de Eric** | Sustituye la reescritura del mismo día. Corrige dos hechos: la primera Experiencia Ideal existe **antes de que haya cita** —lo que sostiene la llamada directa del asesor a quien contesta y no agenda—, y las dos entregas llevan **dos páginas cada una**, cuatro en total, donde la versión anterior se leía como dos en total. Suma el caso de cambiar una clase dentro del mismo club y acota la señal de 4.4.4 a cuando existe otro club que sí cumple |
| **El capítulo 4, tercera versión** | El brief deja de depender de la cita: se genera al terminar el cuestionario, con cita uno por cita y sin cita uno al club resuelto, marcado como **llamada directa**. Cierra el choque con D-100 que dejaba la segunda versión |
| **CEI-01 versión 1.3** | El instrumento se actualiza con los **tres ajustes** que arrastraba, en una sola versión, HTML y PDF. **Entra P0**, el bloque de precarga, entre la compuerta y Q1 y en los identificadores vigentes, con sus cuatro categorías, su composición contra la instantánea del día y el efecto de aceptar y de rechazar; venía pendiente desde D-56. **Q6 exige la alberca también con «Ambas»** y cuando el sistema resuelve en agua (D-104), y el renglón Clubes del control de lógica lo recoge. Se corrige además el pie, que declaraba «versión 1.1» en un documento 1.2. El PDF se produce con el mismo pipeline del anterior: Chromium imprimiendo el HTML, `Skia/PDF m141`. Trece páginas. **La versión 1.2 sale de la carpeta y permanece en el historial del repositorio**, porque el instrumento que rige es uno solo y `tools/instrumento.py` falla si hay dos |
| **D-104 y `tools/instrumento.py`** | Eric confirma que con la modalidad **Ambas** la alberca se exige, y que el sistema resuelve la modalidad únicamente cuando la persona pide que se le recomiende. Con eso, la regla del capítulo corrige a CEI-01, y la corrección pertenece al instrumento. `tools/instrumento.py` enumera los **tres ajustes** que CEI-01 debe incorporar en su versión 1.3, coteja cada uno contra el archivo y **falla mientras alguno siga pendiente**. Sustituye el renglón de pendientes, que dependía de que alguien se acordara. Comprueba además que la versión que el capítulo 5 declara vigente sea la del archivo |
| **El capítulo 5, en la versión de Eric** | Conserva las claves Q y los dos apartados nuevos. Suma que rechazar un punto de P0 devuelve la pregunta con su redacción original de CEI-01, que P0 no agrega pregunta al conteo, y la separación entre personalización y señal operativa. **Abre un punto:** la alberca como requisito excluyente con la modalidad **Ambas**, que CEI-01 v1.2 hoy contradice |
| **El barrido de párrafos** | De **73 frases a 7**. Cinco son texto de Eric, en los capítulos 1 y 2. Una es un renglón de la tabla de jerarquía documental. Una es la regla del navegador del apartado 8.5.1, prohibición normativa del mismo tipo que las cuatro ya autorizadas |

## Qué cambió en la entrega del 20 de septiembre

| Pieza | Qué cambió |
|---|---|
| `decisiones.es.md` | **Entran D-65 a D-88.** Las quince del menú contextual, las citas, la escritura única y el entrenamiento en alberca (D-65 a D-79), tomadas una por una, y las ocho que fijan qué cubre el documento y qué no (D-80 a D-87); más las notas de sustitución en D-55, D-56, D-60, D-62, D-63, D-64 y D-78. **Cuatro precisiones al cotejar contra los dictados literales:** D-73, en una página de objetivo la ranura nombra el objetivo de la página, y la página de una clase no la lleva con el cuestionario contestado; D-74 y D-75, lo mismo visto desde «Otras clases similares» y desde membresías; D-77, al tocar un programa se ven los clubes donde está y, con cuestionario, la leyenda. **Cerrados con Eric los tres puntos que quedaban:** D-73, con dos objetivos un solo botón con el principal; D-76, la leyenda en las clases para niños; D-78, la cifra alineada con el insumo. **Después:** D-73 corregida con «Explora» y las clases ideales solo en las páginas de objetivo; entra D-88, la página estática y la capa personal, con el máximo de botones por menú |
| **La ranura del club** | **D-65.** Deja de depender del tipo de página: «Encuentra tu club ideal» sin cuestionario, «Conoce otros clubes Sports World» con él, y la jerarquía dentro del botón. **Un solo radio: 5 km**, medido siempre desde el club ideal. Se retiran la regla por tamaño de ciudad y el radio de 10 km |
| **El orden de los botones** | **D-66.** Club, experiencia y visita, de izquierda a derecha; después los propios de la página |
| **La segunda cita** | **D-67 y D-68.** El encabezado ofrece agendar en otro club y recalcula la experiencia con las respuestas que ya dio. Cada cita lleva su propia experiencia y su propio brief; al alta prevalece la del club elegido. Corrige D-56 |
| **Cuándo se escribe** | **D-69.** Nada se escribe ni se envía hasta que la sesión cierra, por salida o por diez minutos sin actividad. Corrige el capítulo 8, que escribía al agendar |
| **Las páginas de objetivo** | **D-70.** Son los seis objetivos del cuestionario, con sus nombres. Desaparecen primeros pasos, salud y bienestar, ganar fuerza y rehabilitación como nombres de página |
| **Nunca una lista suelta** | **D-71.** El club muestra objetivos con sus clases dentro; la clase no lleva horarios; los horarios viven solo en la página del club |
| **La leyenda** | **D-72.** «Disponible en tu club» o «No disponible en tu club» en las listas de clases por objetivo, única excepción a la regla de no nombrar carencias |
| **La ranura del objetivo** | **D-73.** «¿Cuál es tu objetivo?» antes del cuestionario; las clases ideales solo en las seis páginas de objetivo, nombrando el objetivo de la página; con dos objetivos elegidos, «Explora…» en la página de cada uno con el otro. El menú se evalúa sobre cinco variables |
| **Los botones propios** | **D-74.** Otras clases similares · Otros artículos similares · Tu rutina individual, esta para todas las personas. **Se retira «Artículos o información útil»**: los artículos se enlazan dentro del contenido |
| **Membresías y el blog** | **D-75.** Membresías es el único tipo que no lleva la ranura del objetivo en ningún estado; la página de una clase la lleva solo antes del cuestionario; el blog las lleva todas |
| **Actividades para menores** | **D-76.** La página se llama por el nombre del servicio y se parte en dos secciones. Se retiran sus tres botones propios |
| **Entrenamiento individual** | **D-77.** Las tres modalidades se comportan como páginas de objetivo, con «Conoce los programas de [modalidad]» |
| **El entrenamiento en alberca** | **D-78 y D-79.** Se prescribe por esfuerzo percibido, nunca por pulsaciones trasladadas del piso. El sistema nunca propone apnea ni hiperventilación. Entra `insumo-entrenamiento-acuatico.es.md`: la regla de prescripción, el método de derivación indirecta y el contrato de la fuente; los seis programas son estado preliminar, porque el dato vive en la matriz de entrenamiento individual (D-83) |
| **El capítulo 3** | Reescrito completo sobre esas decisiones, en siete apartados: los once niveles, el contenido de cada página, el menú superior, las tres ranuras y los botones propios, la tabla de los treinta y tres escenarios, la precarga y el blog. Cotejado contra los dictados literales del 20 de septiembre: 41 comprobaciones, 41 cumplidas. Después, «Explora» y el apartado 3.4.9, la página estática y la capa personal (D-88). **Reescrito en registro ejecutivo a petición de Eric:** cada término se presenta en su primer uso, sin metáforas ni giros conversacionales; tablas, reglas y estructura sin cambios, 43 comprobaciones cumplidas |
| **La página y la capa personal** | **D-88.** Las 148 páginas se sirven estáticas e idénticas; la capa personal se resuelve con el identificador de sesión; el menú se diseña para su máximo de botones y reserva ese espacio; la condición del script escrita completa |

Desde el capítulo 5, cada capítulo se sube en el momento de su aprobación y todo cambio posterior queda como commit propio.

## Nota sobre el historial

El commit `2aa2ed7`, «Renumeracion · los capitulos 2 a 6 corren un lugar», incluye además un cambio que su mensaje no menciona: el nombre del servicio para menores en los capítulos 4 y 5, que pasó de «actividades para menores» a «actividades para niños». **Ese cambio quedó revertido** en `d945199`, por decisión de Eric: el nombre definitivo es «actividades para menores de 3 meses a 13 años».

El mensaje del commit no se reescribió porque el entorno de esta sesión bloquea la reescritura de historial y las notas de git. Queda declarado aquí, que es donde se audita esta carpeta.
