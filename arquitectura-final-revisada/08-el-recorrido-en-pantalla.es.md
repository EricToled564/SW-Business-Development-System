# Capítulo 8 · El recorrido en pantalla

## 8.1 La puerta de entrada: agendar una visita

**Agendar una visita es el objetivo final del sitio completo y de la atención por WhatsApp.**

De ahí se sigue una regla que gobierna las 148 páginas:

> **La opción de agendar una visita se le presenta a la persona en todo momento**, en cualquier página del sitio y en cualquier punto de la conversación por WhatsApp.

**Ese botón es la puerta de entrada a la Experiencia Ideal**: al tocarlo empieza el recorrido. Cuando la persona ya tiene cita, el botón sigue ahí y se comporta como especifica el apartado 8.3.5.

La página desde la que lo tocó se conserva, y es lo que alimenta el bloque de precarga del capítulo 5.

## 8.2 Una sola dirección de internet

La Experiencia Ideal ocurre en una sola dirección. La persona permanece en esa dirección durante todo el recorrido, y lo que cambia es la pantalla que se le muestra.

Esa decisión tiene tres consecuencias que el sistema aprovecha:

- **Al resultado se llega contestando.** La recomendación vive dentro de esa única dirección.
- **El estado del recorrido vive en la sesión.** La dirección que la persona puede guardar o compartir es la de la entrada.
- **El brief se produce después de la captura de contacto y de la agenda.**

En cada momento se muestra una sola pantalla, y la anterior se retira por completo.

## 8.3 Las seis fases

| № | Fase | Qué ocurre |
|---|---|---|
| **1** | **Invitación** | El texto que explica por qué se le va a preguntar, y la compuerta de mayoría de edad |
| **2** | **Cuestionario** | El bloque de precarga y los reactivos, **uno por pantalla** |
| **3** | **Cálculo y contacto** | El sistema resuelve la recomendación **mientras** le pide su apellido, su teléfono y su correo |
| **4** | **Resultado** | Su Experiencia Ideal, en las dos páginas del capítulo 4 |
| **5** | **Agenda** | Se le pregunta **una sola vez** si desea agendar. Si acepta, elige fecha y hora |
| **6** | **Confirmación y brief** | Fase terminal, en las dos páginas del capítulo 4 |
| **—** | **Error** | Fase auxiliar. Siempre ofrece una salida hacia adelante |

### 8.3.1 La fase 1 · La invitación

Una sola pantalla, con el texto de invitación arriba y **la compuerta de mayoría de edad debajo**. **La compuerta es la primera pregunta del recorrido.**

El texto tiene **dos versiones**, y lo único que cambia entre ellas es a qué se refiere la visita:

**Cuando no viene de la página de un club en particular:**

> Con el fin de proporcionarte la mejor experiencia durante tu visita a nuestros clubes, permítenos hacerte unas preguntas. Solo toma un minuto de tu tiempo.

**Cuando tocó el botón dentro de la página de un club:**

> Con el fin de proporcionarte la mejor experiencia durante tu visita a Sports World Polanco, permítenos hacerte unas preguntas. Solo toma un minuto de tu tiempo.

El nombre del club se toma de la página desde la que tocó el botón. La promesa del minuto es literal y el capítulo 5 la sostiene: entre 16 y 19 preguntas, una por pantalla.

### 8.3.2 La fase 2 · Cuándo hay precarga

Confirmada la mayoría de edad, sigue el bloque de precarga, y después los reactivos.

**Casi siempre hay bloque de precarga.** Solo hay un caso en que no: **cuando la persona entró por la página de inicio y tocó ahí mismo el botón de agendar**, sin haber visto ninguna otra página. Ahí el único contexto es la página de inicio, y el recorrido pasa directo al primer reactivo.

En cualquier otro caso —una página de club, una de clase, un hub de amenidad, un hub de objetivo— el contexto existe, y confirmarlo es lo que evita preguntarle dos veces lo mismo.

### 8.3.3 La fase 3 hace dos cosas a la vez

Es el cambio de fondo respecto del recorrido anterior, donde el contacto se pedía mucho después.

**Ahora se pide al terminar el cuestionario, mientras el sistema calcula**, y con un motivo que la persona entiende: **enviarle su Experiencia Ideal por correo.** El tiempo de espera deja de ser tiempo muerto.

| Si entrega los datos | Si no los entrega |
|---|---|
| Su contacto queda en la sesión, y al cerrarse la sesión se escribe su registro y se le envía su experiencia por correo, como especifica el apartado 8.5 | Ve su experiencia en pantalla igual, completa |
| **La escritura ocurre al cerrar la sesión.** Lo que la persona cambie antes —de club, de clases, de cita— cambia lo que se va a escribir | **La sesión termina sin registro.** Al cerrar, la experiencia y el contacto terminan con ella |

En WhatsApp se le piden apellido y correo: el teléfono viene del canal.

### 8.3.4 La fase 5 pregunta una vez

Entregados los datos, se le pregunta **una sola vez** si desea agendar una visita presencial a su club.

| Respuesta | Qué queda registrado al cerrar la sesión |
|---|---|
| **Sí** | Su registro, con la fecha y la hora que eligió |
| **No**, o cierra la sesión | Su registro igual, con la bandera **«no quiso agendar visita»** |

La bandera es una marca de estado, no una instrucción de no volver a contactarla.

**La fecha y la hora se eligen dentro del calendario de atención del club.** Los días en que ese club abre y las horas en que atiende vienen del corte de las 06:00, son los mismos que publica la página de ese club, y **son los únicos que la agenda ofrece**. Dentro de ese calendario, el sistema **registra lo que la persona pidió**: la disponibilidad la confirma el club, que coordina la visita y responde con su acuse. El capítulo 16 especifica ese traspaso.

### 8.3.5 Agendar en un segundo club

Ya con cita, el botón **«Agenda tu visita» del encabezado** no desaparece ni cambia de etiqueta: cambia lo que hace. Antes de llevarla a ningún lado, **le pregunta si desea agendar una visita en otro club.**

| Respuesta | Qué ocurre |
|---|---|
| **No** | La lleva a su visita agendada, para verla, cambiarla o cancelarla |
| **Sí** | Le pide el club, **recalcula su Experiencia Ideal para ese club con las respuestas que ya dio**, y la lleva a elegir fecha y hora en ese club |

**La primera cita se conserva.** Una persona puede tener visitas agendadas en dos clubes, y **cada una lleva su propia Experiencia Ideal y su propio brief**, porque dos clubes distintos resuelven clases distintas. El apartado 8.5.2 especifica qué se escribe de cada una, y el capítulo 9, qué ocurre cuando la persona se da de alta.

### 8.3.6 La ruta reducida tiene su propia secuencia

Quien no confirma la mayoría de edad recorre tres fases, no seis: la invitación, los reactivos que alimentan la elección de club, y la entrega del club con su dirección y su tiempo de traslado. El cálculo de la experiencia, el contacto, la agenda y el brief pertenecen a la ruta completa. El capítulo 6 especifica la reducida.

## 8.4 Avance y retroceso

Avanzar siempre se puede: cada fase tiene una acción que lleva a la siguiente. **Retroceder es selectivo**, y estas son todas las reglas:

| Desde | Retroceso |
|---|---|
| Invitación | No aplica: es la entrada |
| Cuestionario | Vuelve al reactivo anterior. Si ese reactivo era condicional y la respuesta nueva ya no lo dispara, se salta y aterriza en el que sí aplica |
| Cálculo y contacto | Sin retroceso: el cálculo no se interrumpe |
| Resultado | **Sin retroceso al cuestionario.** Lo único disponible es reiniciar por completo |
| Agenda | Vuelve al resultado |
| Confirmación y brief | Vuelve a la agenda, para cambiar fecha u hora |

### 8.4.1 Por qué el cuestionario se contesta una sola vez

El trato con la persona es simple: contesta, y recibe una recomendación. Reabrir las respuestas convierte la recomendación en algo que se puede ajustar hasta que dé el resultado que se quería, y con eso pierde su autoridad.

**Cambiar de club o de clases está permitido siempre.** Ese cambio recompone el plan contra el catálogo del club que quedó, como especifica el capítulo 11, y el cuestionario permanece cerrado.

## 8.5 Qué guarda el navegador y qué guarda el servidor

**El recorrido corre de forma anónima hasta la fase 3**, donde la persona entrega sus datos de contacto. Hasta ahí avanza sin cuenta y sin contraseña.

### 8.5.1 En su navegador

**El navegador no debe guardar nada de lo que la persona responde**: ni las respuestas del cuestionario, ni los bloques calculados, ni el texto redactado, ni el brief, ni la cita.

Lo único que el sitio guarda de su lado es **un identificador de sesión propio y aleatorio** —`web_session_id` en el Mapa del Funnel—, cuyo trabajo es atar entre sí las páginas que visita.

**No lleva ningún dato de la persona, permanece del lado de la persona y nunca llega al registro del prospecto.**

Hace dos cosas, una antes del cuestionario y otra después:

| Cuándo | Para qué sirve |
|---|---|
| **Antes del cuestionario** | Alimenta el bloque de precarga del capítulo 5: las páginas que visitó son lo que el sistema ya sabe de ella |
| **Después de entregada la experiencia** | Sostiene los estados «con experiencia» y «con visita» del capítulo 3: mientras navega, el sitio sigue reconociéndola como alguien que ya tiene su experiencia, haya agendado o no |

**Vive toda la sesión y termina con ella.** Al volver empieza de cero: es, para el sitio, alguien en el estado **Sin cuestionario**.

Los pixeles de analítica se disparan a partir de la fase 3.

### 8.5.2 Del lado del servidor: una sola escritura, al cerrar la sesión

**La escritura y el envío ocurren al cerrar la sesión, y solo entonces.** Mientras la sesión sigue viva, la persona puede cambiar de club, cambiar de clases, agendar y agendar en un segundo club las veces que quiera; todo eso vive en la sesión.

**La sesión cierra por lo que ocurra primero:** la persona sale y el navegador alcanza a avisarlo, o pasan **diez minutos sin actividad**. Las dos condiciones hacen falta: cerrar la pestaña, perder la señal o bloquear el teléfono no siempre avisan al servidor, así que la salida por sí sola no basta.

Al cerrar, y **una sola vez**, se escribe el estado final:

| Qué | A dónde |
|---|---|
| Las Experiencias Ideales | A su base propia. Con cita, **una por cita**. Sin cita, la del club que se le resolvió |
| El registro del prospecto y sus citas | Al sistema de clientes |
| Su Experiencia Ideal, en su versión final | Por correo a la persona |
| El brief | Por correo al club. Con cita, uno por cita, al club de esa cita. Sin cita, uno al club que se le resolvió, marcado como **llamada directa** |

**Quien contesta y no agenda pasa a llamada directa del asesor.** Su registro lleva la marca «no quiso agendar visita», y con esa marca el brief llega al asesor del club que se le resolvió, para que la llame. **El asesor llama con la misma Experiencia Ideal que la persona recibió por correo.** El registro y el brief se producen con los datos de contacto, que son los que dicen a quién llamar (apartado 8.3.3).

**La escritura es idempotente.** El registro del prospecto lleva la **llave de la sesión** —`session_uuid` en el Mapa del Funnel—: si la persona vuelve y reconfirma, se actualiza ese mismo registro, siempre el mismo.

`session_uuid` y `web_session_id` son dos llaves distintas. `session_uuid` forma parte del registro del prospecto y une la etapa de cuestionario iniciado con la de visita agendada en la medición del funnel. `web_session_id` permanece del lado de la persona, conforme al apartado 3.8.

**La tabla anterior es la lista completa de lo que persiste.** La escritura empieza con los datos de contacto: antes de eso, cerrar la pestaña termina la sesión y lo que contenía.

De la regla se sigue algo que evita un problema entero: **los avisos de cambio o cancelación al club se producen únicamente cuando la persona vuelve otro día y mueve una cita que ya se había enviado.** Lo que cambió dentro de una misma sesión llega al club en una sola versión, la final.

**La Experiencia Ideal vive en una base propia**, ligada al registro del prospecto por su identificador, y **puede haber más de una: una por cita agendada.** Al rehacer el cuestionario otro día, la experiencia nueva **sustituye a la anterior solo si resuelve el mismo club**; si resuelve otro, se suma. Al confirmarse el alta de la membresía se verifica en qué club ocurrió: **la experiencia de ese club prevalece y las demás se eliminan.**

El registro del prospecto sigue siendo uno solo, conciliado con la llave canónica. El capítulo 9 especifica la conciliación y el capítulo 14 el contrato de esa base.

### 8.5.3 Los dos recordatorios de la visita

Escrita la cita, la persona recibe **dos recordatorios por WhatsApp**: uno **24 horas antes** de su visita y otro **2 horas antes**.

| | |
|---|---|
| **De quién son** | De la persona. Le recuerdan su visita agendada: su club, el día y la hora |
| **Por dónde llegan** | Por WhatsApp, al teléfono que entregó en la fase 3, y los envía BES |
| **Qué recibe el club** | El brief de esa cita, por correo, como especifica la tabla del apartado 8.5.2. Son dos destinatarios distintos y dos canales distintos: la persona por WhatsApp, el club por correo |
| **Con dos citas** | Cada cita lleva sus dos recordatorios, porque cada una tiene su club, su día y su hora |

**Aterrizan en el Contrato**, Cláusula Tercera, apartado II: dos mensajes recordatorios por WhatsApp, 24 horas y 2 horas antes de la visita solicitada.

## 8.6 El paso a BES, en cualquier momento

La persona puede llamar a BES en cualquier pantalla del recorrido: de la fase 1 a la fase 6, y también en la fase de error.

### 8.6.1 Durante el cuestionario

**BES toma el control desde el reactivo exacto en el que va**, y continúa desde ahí con todo lo que la persona ya contestó.

| | |
|---|---|
| **Qué recibe** | Las respuestas que ya dio, el reactivo en curso y lo que se precargó al abrir |
| **Con qué sigue** | El mismo instrumento: los mismos reactivos, las mismas opciones, las mismas validaciones y las mismas ramificaciones |
| **Qué no debe hacer** | Saltarse un reactivo, agregar uno, cambiar una opción o alterar una validación |

El paso de vuelta al recorrido autónomo también es libre, desde donde vaya, sin reiniciar.

### 8.6.2 Después de entregada la experiencia

BES queda disponible para resolver dudas sobre el plan: por qué ese club, qué es cada bloque, qué ocurre en la visita.

Ahí **puede hacer exactamente lo que la pantalla permite: cambiar de club y cambiar de clases.** Cuando lo hace, dispara la misma recomposición del plan que haría la pantalla.

**BES no debe armar bloques distintos, recomendar fuera del catálogo del club, ni hablar de precio o de promoción.**

### 8.6.3 Si BES falla

La persona sigue en el recorrido autónomo, **desde donde iba**. El paso a BES devuelve siempre a la persona al punto en el que estaba.

## 8.7 La fase de error

Se dispara cuando falla la redacción automática del texto. Muestra un botón de reintentar y un enlace de reinicio.

| Qué ocurre | Qué ve la persona |
|---|---|
| El reintento funciona | Vuelve al resultado, con su experiencia completa |
| **Al segundo reintento fallido** | El botón se sustituye por **«Ver mi recomendación»**, que la lleva al resultado con todo lo que el sistema calcula por su cuenta: bloques, club, clases y sección de seguridad |

En ese segundo caso, la persona recibe su recomendación con todo lo que el sistema calcula por su cuenta, y el capítulo 13 especifica qué secciones redacta el modelo de lenguaje.

**La pantalla no debe mostrar un mensaje de error ni informar de la falla.**

La fase de error siempre ofrece una salida hacia adelante.
