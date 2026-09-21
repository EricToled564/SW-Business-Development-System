# Capítulo 7 · El recorrido en pantalla

## 7.1 La puerta de entrada: agendar una visita

**Agendar una visita es el objetivo final del sitio completo y de la atención por WhatsApp.**

De ahí se sigue una regla que gobierna las 148 páginas:

> **La opción de agendar una visita se le presenta a la persona en todo momento**, en cualquier página del sitio y en cualquier punto de la conversación por WhatsApp.

No existe una pantalla desde la que no se pueda agendar. Y **ese botón es la puerta de entrada a la experiencia ideal**: al tocarlo empieza el recorrido que este capítulo especifica. Cuando la persona ya tiene cita, el botón sigue ahí y se comporta como especifica el apartado 7.3.5.

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
| Su contacto queda en la sesión, y al cerrarse la sesión se escribe su registro y se le envía su experiencia por correo, como especifica el apartado 7.5 | Ve su experiencia en pantalla igual, completa |
| **Nada se escribe todavía.** Lo que la persona cambie después —de club, de clases, de cita— cambia lo que se va a escribir | **No se abre ningún registro.** Al cerrar la sesión se pierden la experiencia y el contacto |

En WhatsApp se le piden apellido y correo: el teléfono viene del canal.

### 7.3.4 La fase 5 pregunta una vez

Entregados los datos, se le pregunta **una sola vez** si desea agendar una visita presencial a su club.

| Respuesta | Qué queda registrado al cerrar la sesión |
|---|---|
| **Sí** | Su registro, con la fecha y la hora que eligió |
| **No**, o cierra la sesión | Su registro igual, con la bandera **«no quiso agendar visita»** |

La bandera es una marca de estado, no una instrucción de no volver a contactarla.

**La fecha y la hora se eligen dentro del calendario de atención del club.** Los días en que ese club abre y las horas en que atiende vienen del corte de las 06:00, son los mismos que publica la página de ese club, y **son los únicos que la agenda ofrece**. Dentro de ese calendario, el sistema **registra lo que la persona pidió**: la disponibilidad la confirma el club, que coordina la visita y responde con su acuse. El capítulo 15 especifica ese traspaso.

### 7.3.5 Agendar en un segundo club

Ya con cita, el botón **«Agenda tu visita» del encabezado** no desaparece ni cambia de etiqueta: cambia lo que hace. Antes de llevarla a ningún lado, **le pregunta si desea agendar una visita en otro club.**

| Respuesta | Qué ocurre |
|---|---|
| **No** | La lleva a su visita agendada, para verla, cambiarla o cancelarla |
| **Sí** | Le pide el club, **recalcula su experiencia ideal para ese club con las respuestas que ya dio** —no se le vuelve a preguntar nada— y la lleva a elegir fecha y hora en ese club |

**La primera cita se conserva.** Una persona puede tener visitas agendadas en dos clubes, y **cada una lleva su propia experiencia ideal y su propio brief**, porque dos clubes distintos resuelven clases distintas. El apartado 7.5.2 especifica qué se escribe de cada una, y el capítulo 8, qué ocurre cuando la persona se da de alta.

### 7.3.6 La ruta reducida tiene su propia secuencia

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

El trato con la persona es simple: contesta, y recibe una recomendación. Reabrir las respuestas convierte la recomendación en algo que se puede ajustar hasta que dé el resultado que se quería, y con eso pierde su autoridad.

**Cambiar de club o de clases es distinto y sí está permitido siempre.** Eso no reabre el cuestionario: recompone el plan contra el catálogo del club que quedó, como especifica el capítulo 10.

## 7.5 Qué persiste y qué no

El recorrido no pide iniciar sesión. No hay cuenta, no hay contraseña y no se identifica a la persona.

### 7.5.1 En su navegador

**Nada de lo que la persona responde vive en su navegador.** Ni las respuestas del cuestionario, ni los bloques calculados, ni el texto redactado, ni el brief, ni la cita.

Lo único que el sitio guarda de su lado es **un identificador de sesión propio, aleatorio y vacío** —`web_session_id` en el Mapa del Funnel—, cuyo trabajo es atar entre sí las páginas que visita. No lleva ningún dato suyo y **nunca llega a su registro.**

Hace dos cosas, una antes del cuestionario y otra después:

| Cuándo | Para qué sirve |
|---|---|
| **Antes del cuestionario** | Alimenta el bloque de precarga del capítulo 5: las páginas que visitó son lo que el sistema ya sabe de ella |
| **Después de entregada la experiencia** | Sostiene los estados «con experiencia» y «con visita» del capítulo 2: mientras navega, el sitio sigue reconociéndola como alguien que ya tiene su experiencia, haya agendado o no |

**Vive toda la sesión y muere cuando la sesión cierra.** Al volver empieza de cero: es, para el sitio, alguien sin cuestionario.

Ningún pixel de analítica se dispara antes de la fase 3.

### 7.5.2 Del lado del servidor: una sola escritura, al cerrar la sesión

**Mientras la sesión está viva, nada se escribe y nada se envía.** La persona puede cambiar de club, cambiar de clases, agendar y agendar en un segundo club las veces que quiera; todo eso vive en la sesión.

**La sesión cierra por lo que ocurra primero:** la persona sale y el navegador alcanza a avisarlo, o pasan **diez minutos sin actividad**. Las dos condiciones hacen falta: cerrar la pestaña, perder la señal o bloquear el teléfono no siempre avisan al servidor, así que la salida por sí sola no basta.

Al cerrar, y **una sola vez**, se escribe el estado final:

| Qué | A dónde |
|---|---|
| Las experiencias ideales, **una por cita** | A su base propia |
| El registro del prospecto y sus citas | Al sistema de clientes |
| Su experiencia ideal, en su versión final | Por correo a la persona |
| El brief de cada cita | Por correo al club de esa cita |

**La escritura es idempotente.** El registro del prospecto lleva la **llave de la sesión** —`session_uuid` en el Mapa del Funnel—: si la persona vuelve y reconfirma, se actualiza ese mismo registro y nunca se duplica. Es una llave distinta del identificador de sesión del navegador: esta sí forma parte del registro, y es la que une la etapa de cuestionario iniciado con la de visita agendada en la medición del funnel.

**Lo que no está en la tabla, no persiste.** Antes de que la persona entregue sus datos de contacto no hay nada que escribir, y cerrar la pestaña descarta todo.

De la regla se sigue algo que evita un problema entero: **no salen correos de cancelación por lo que la persona cambió dentro de la sesión**, porque nada había salido mientras cambiaba. Los avisos de cambio o cancelación al club solo ocurren cuando vuelve otro día y mueve una cita que ya se había enviado.

**La experiencia ideal no vive en el sistema de clientes.** Vive en una base propia, ligada al registro del prospecto por su identificador, y **puede haber más de una: una por cita agendada.** Al rehacer el cuestionario otro día, la experiencia nueva **sustituye a la anterior solo si resuelve el mismo club**; si resuelve otro, se suma. Al confirmarse el alta de la membresía se verifica en qué club ocurrió: **la experiencia de ese club prevalece y las demás se eliminan.**

El registro del prospecto, en cambio, sigue siendo uno solo, conciliado con la llave canónica. El capítulo 8 especifica la conciliación y el capítulo 13 el contrato de esa base.

### 7.5.3 Los dos recordatorios de la visita

Escrita la cita, la persona recibe **dos recordatorios por WhatsApp**: uno **24 horas antes** de su visita y otro **2 horas antes**.

| | |
|---|---|
| **De quién son** | De la persona. Le recuerdan su visita agendada: su club, el día y la hora |
| **Por dónde llegan** | Por WhatsApp, al teléfono que entregó en la fase 3, y los envía BES |
| **Qué recibe el club** | El brief de esa cita, por correo, como especifica la tabla del apartado 7.5.2. Son dos destinatarios distintos y dos canales distintos: la persona por WhatsApp, el club por correo |
| **Con dos citas** | Cada cita lleva sus dos recordatorios, porque cada una tiene su club, su día y su hora |

**Aterrizan en el Contrato**, Cláusula Tercera, apartado II: dos mensajes recordatorios por WhatsApp, 24 horas y 2 horas antes de la visita solicitada.

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
