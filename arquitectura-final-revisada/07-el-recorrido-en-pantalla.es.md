# Capítulo 7 · El recorrido en pantalla

## 7.1 La puerta de entrada: agendar una visita

**Agendar una visita es el objetivo final del sitio completo y de la atención por WhatsApp.** No es una acción más entre otras: es la que todo lo demás sirve.

De ahí se sigue una regla que gobierna las 148 páginas:

> **La opción de agendar una visita se le presenta a la persona en todo momento**, en cualquier página del sitio y en cualquier punto de la conversación por WhatsApp.

No existe una pantalla desde la que no se pueda agendar. Y **ese botón es la puerta de entrada a la experiencia ideal**: al tocarlo empieza el recorrido que este capítulo especifica.

La página desde la que lo tocó no se pierde: es lo que alimenta el bloque de precarga del capítulo 5.

## 7.2 Una sola dirección de internet

La experiencia ideal ocurre en una sola dirección. La persona nunca cambia de página durante el recorrido: lo que cambia es la pantalla que se le muestra.

Esa decisión tiene consecuencias que el sistema aprovecha:

- **Nadie llega al resultado sin haber contestado.** No existe una dirección que lleve directo a la recomendación.
- **Nadie puede guardar ni compartir un estado a medias.** No hay nada que marcar como favorito.
- **Al brief no se llega saltándose la captura de contacto ni la agenda.**

En cada momento se muestra una sola pantalla. La anterior se retira por completo; no quedan dos superpuestas.

## 7.3 Las seis fases

| № | Fase | Qué ocurre |
|---|---|---|
| **1** | **Invitación** | El texto que explica por qué se le va a preguntar, y la compuerta de mayoría de edad |
| **2** | **Cuestionario** | El bloque de precarga y los reactivos, **uno por pantalla** |
| **3** | **Cálculo y contacto** | El sistema resuelve la recomendación **mientras** le pide su apellido, su teléfono y su correo |
| **4** | **Resultado** | Su experiencia ideal, en las dos páginas del capítulo 3 |
| **5** | **Agenda** | Se le pregunta **una sola vez** si desea agendar. Si acepta, elige fecha y hora |
| **6** | **Confirmación y brief** | Fase terminal, en las dos páginas del capítulo 3 |
| **—** | **Error** | Fase auxiliar. Nunca es un callejón sin salida |

### 7.3.1 La fase 1 · La invitación

Una sola pantalla, con el texto de invitación arriba y **la compuerta de mayoría de edad debajo**. Nada se le pregunta antes que la compuerta.

El texto tiene **dos versiones**, y lo único que cambia entre ellas es a qué se refiere la visita:

**Cuando no viene de la página de un club en particular:**

> Con el fin de proporcionarte la mejor experiencia durante tu visita a nuestros clubes, permítenos hacerte unas preguntas. Solo toma un minuto de tu tiempo.

**Cuando tocó el botón dentro de la página de un club:**

> Con el fin de proporcionarte la mejor experiencia durante tu visita a Sports World Polanco, permítenos hacerte unas preguntas. Solo toma un minuto de tu tiempo.

El nombre del club se toma de la página desde la que tocó el botón. La promesa del minuto es literal y el capítulo 5 la sostiene: entre 16 y 19 preguntas, una por pantalla.

### 7.3.2 La fase 2 · Cuando hay precarga y cuando no

Confirmada la mayoría de edad, sigue el bloque de precarga, y después los reactivos.

**Casi siempre hay bloque de precarga.** Solo hay un caso en que no: **cuando la persona entró por la página de inicio y tocó ahí mismo el botón de agendar**, sin haber visto ninguna otra página. Ahí no hay contexto previo que confirmar, y el recorrido pasa directo al primer reactivo.

En cualquier otro caso —una página de club, una de clase, un hub de amenidad, un hub de objetivo— el contexto existe, y confirmarlo es lo que evita preguntarle dos veces lo mismo.

### 7.3.3 La fase 3 hace dos cosas a la vez

Es el cambio de fondo respecto del recorrido anterior, donde el contacto se pedía mucho después.

**Ahora se pide al terminar el cuestionario, mientras el sistema calcula**, y con un motivo que la persona entiende: **enviarle su experiencia ideal por correo.** El tiempo de espera deja de ser tiempo muerto.

| Si entrega los datos | Si no los entrega |
|---|---|
| Se crea de inmediato una copia de su registro del lado del servidor, y el sistema le envía su experiencia por correo | Ve su experiencia en pantalla igual, completa |
| El registro se escribirá al sistema de clientes una sola vez, en la fase 5 | **No se abre ningún registro.** Al cerrar la sesión se pierden la experiencia y el contacto |

En WhatsApp se le piden apellido y correo: el teléfono viene del canal.

### 7.3.4 La fase 5 pregunta una vez

Entregados los datos, se le pregunta **una sola vez** si desea agendar una visita presencial a su club.

| Respuesta | Qué se escribe |
|---|---|
| **Sí** | Se agenda y el registro se escribe en el sistema de clientes con la fecha y la hora elegidas |
| **No**, o cierra la sesión | El registro se escribe igual, con la bandera **«no quiso agendar visita»** |

**Nunca hay dos escrituras para un mismo contacto.** La bandera es una marca de estado, no una instrucción de no volver a contactarla.

Cuando elige fecha y hora, el sistema **no verifica disponibilidad ni reserva nada**: registra lo que la persona pidió. El club confirma y coordina, y responde con su acuse. El capítulo 15 especifica ese traspaso.

### 7.3.5 La ruta reducida tiene su propia secuencia

Quien no confirma la mayoría de edad recorre tres fases, no seis: la invitación, los reactivos que alimentan la elección de club, y la entrega del club con su dirección y su tiempo de traslado. Sin cálculo de experiencia, sin contacto, sin agenda y sin brief. El capítulo 4 la especifica.

## 7.4 Avance y retroceso

Avanzar siempre se puede: cada fase tiene una acción que lleva a la siguiente. **Retroceder es selectivo**, y estas son todas las reglas:

| Desde | Retroceso |
|---|---|
| Invitación | No aplica: es la entrada |
| Cuestionario | Vuelve al reactivo anterior. Si ese reactivo era condicional y la respuesta nueva ya no lo dispara, se salta y aterriza en el que sí aplica |
| Cálculo y contacto | Sin retroceso: el cálculo no se interrumpe |
| Resultado | **Sin retroceso al cuestionario.** Lo único disponible es reiniciar por completo |
| Agenda | Vuelve al resultado |
| Confirmación y brief | Vuelve a la agenda, para cambiar fecha u hora |

### 7.4.1 Por qué no se puede volver a contestar el cuestionario

No es una limitación técnica: es una decisión, y tiene dos razones.

**La primera.** El texto que la persona lee se redacta una sola vez. Reabrir las respuestas después de haber visto la recomendación obligaría a volver a redactarlo, o a dejar en pantalla un texto que ya no corresponde a lo que contestó.

**La segunda, que pesa más.** El trato con la persona es simple: contesta, y recibe una recomendación. Reabrir las respuestas convierte la recomendación en algo que se puede ajustar hasta que dé el resultado que se quería, y con eso pierde su autoridad.

**Cambiar de club o de clases es distinto y sí está permitido siempre.** Eso no reabre el cuestionario: recompone el plan contra el catálogo del club que quedó, como especifica el capítulo 10.

## 7.5 Qué persiste y qué no

El recorrido no pide iniciar sesión. No hay cuenta, no hay contraseña y no se identifica a la persona.

### 7.5.1 En su navegador

**Nada de lo que la persona responde vive en su navegador.** Ni las respuestas del cuestionario, ni los bloques calculados, ni el texto redactado, ni el brief, ni la cita.

Lo único que el sitio guarda de su lado es **un identificador de sesión propio, aleatorio y vacío**, cuyo único trabajo es atar entre sí las páginas que visita, para el bloque de precarga del capítulo 5. No lleva ningún dato suyo, **se descarta en cuanto el cuestionario abre** y nunca llega a su registro.

Ningún pixel de analítica se dispara antes de la fase 3.

### 7.5.2 Del lado del servidor

| Momento | Qué persiste |
|---|---|
| Antes de entregar sus datos de contacto | **Nada.** Cerrar la pestaña descarta todo, y hay que empezar de nuevo |
| Al entregar sus datos | Se crea la copia de seguridad del registro, en la base ligada al sistema de clientes por número de identificación |
| A partir de ahí | Cerrar la sesión ya no pierde el registro: dispara su escritura con la bandera «no quiso agendar visita» |

### 7.5.3 Por qué está escrito así

El documento anterior sostenía un principio de «sin persistencia» que hoy tiene dos excepciones: la copia del lado del servidor y el identificador de sesión. Sostener el principio y las excepciones al mismo tiempo deja al lector sin saber cuál manda.

Por eso este apartado no enuncia un principio: **enumera qué persiste, dónde y desde cuándo.** Lo que no está en la tabla, no persiste.

## 7.6 El paso a BES, en cualquier momento

La persona puede llamar a BES en cualquier pantalla del recorrido. No hay un punto donde deje de estar disponible.

### 7.6.1 Durante el cuestionario

**BES toma el control desde el reactivo exacto en el que va.** No reinicia, no vuelve a la primera pregunta y no repite nada de lo contestado.

| | |
|---|---|
| **Qué recibe** | Las respuestas que ya dio, el reactivo en curso y lo que se precargó al abrir |
| **Con qué sigue** | El mismo instrumento: los mismos reactivos, las mismas opciones, las mismas validaciones y las mismas ramificaciones |
| **Qué no puede hacer** | Saltarse un reactivo, agregar uno, cambiar una opción o alterar una validación |

El paso de vuelta al recorrido autónomo también es libre, desde donde vaya, sin reiniciar.

### 7.6.2 Después de entregada la experiencia

BES queda disponible para resolver dudas sobre el plan: por qué ese club, qué es cada bloque, qué ocurre en la visita.

Ahí **puede hacer exactamente lo que la pantalla permite: cambiar de club y cambiar de clases.** Cuando lo hace, dispara la misma recomposición del plan que haría la pantalla. Nada más: no arma bloques distintos, no recomienda fuera del catálogo del club y no habla de precio ni de promoción.

### 7.6.3 Si BES falla

La persona sigue en el recorrido autónomo, **desde donde iba**. El paso a BES nunca deja a nadie detenido.

## 7.7 La fase de error

Se dispara cuando falla la redacción automática del texto. Muestra un botón de reintentar y un enlace de reinicio.

| Qué ocurre | Qué ve la persona |
|---|---|
| El reintento funciona | Vuelve al resultado, con su experiencia completa |
| **Al segundo reintento fallido** | El botón se sustituye por **«Ver mi recomendación»**, que la lleva al resultado con todo lo que el sistema calcula por su cuenta: bloques, club, clases y sección de seguridad |

En ese segundo caso, las secciones que redacta el modelo de lenguaje simplemente no aparecen. **No se muestra ningún mensaje de error**, ni se le dice que algo falló. El capítulo 12 especifica qué secciones se omiten.

La fase de error nunca es un callejón sin salida: siempre hay una salida hacia adelante.
