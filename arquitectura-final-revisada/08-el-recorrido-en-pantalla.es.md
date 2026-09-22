# Capítulo 8 · El recorrido en pantalla

## 8.1 La puerta de entrada: agendar una visita

Agendar una visita es el objetivo final del sitio completo y de la atención por WhatsApp **para la ruta completa**.

De ahí se sigue una regla que gobierna las 148 páginas:

> **La opción de agendar una visita debe presentarse a la persona en todo momento**, en cualquier página del sitio y en cualquier punto de la conversación por WhatsApp, mientras permanezca dentro de la ruta completa.

Cualquier botón que lleve a agendar una visita puede abrir el recorrido de la Experiencia Ideal.

Cuando la persona todavía no ha contestado el cuestionario, tocar uno de esos botones debe iniciar el recorrido.

Cuando ya tiene una cita, el botón debe seguir disponible y comportarse conforme al apartado 8.3.5.

---

### El contexto no es la última página: es el recorrido previo

Antes de abrir por primera vez el cuestionario, el sistema debe conservar como contexto **todas las páginas que la persona haya visitado durante esa sesión** hasta el momento en que toca cualquier botón que abre el cuestionario.

**No debe utilizar únicamente:**

* la página de aterrizaje;
* la última página visitada;
* ni la página desde la que finalmente tocó el botón.

Debe considerar todo el recorrido previo de navegación de esa ventana de contexto.

Ese recorrido alimenta **P0 · Precarga**, conforme al capítulo 5.

Por ejemplo, si antes de abrir el cuestionario la persona visitó:

* una página de club;
* una página de yoga;
* una página de alberca;
* y una página de bajar de peso;

los cuatro elementos pueden convertirse en candidatos para P0, sujetos a sus reglas de validación, disponibilidad y consolidación.

Si varias páginas visitadas representan el mismo elemento o pertenecen a una misma familia, deben consolidarse conforme al apartado 5.2.3.

**La navegación aporta contexto; CEI-01 determina qué parte de ese contexto puede confirmarse y utilizarse.**

---

### La ruta reducida es la excepción

Cuando G0 determina que corresponde esa ruta:

* no debe utilizarse P0;
* no debe utilizarse la navegación previa para prellenar respuestas;
* no debe ofrecerse agenda;
* no debe solicitarse contacto;
* no debe generarse un brief;
* y el recorrido debe terminar después de recomendar un club y explicar brevemente por qué.

---

## 8.2 Una sola dirección de internet

La Experiencia Ideal debe ocurrir en una sola dirección.

La persona permanece en esa dirección durante todo el recorrido y lo que cambia es la pantalla que se le muestra.

Esta decisión tiene tres consecuencias:

1. **Al resultado se llega contestando.** La recomendación vive dentro de esa única dirección.
2. **El estado del recorrido vive en la sesión.** La dirección que la persona puede guardar o compartir es la de entrada.
3. **Las entregas definitivas se escriben y distribuyen al cerrar la sesión**, conforme al apartado 8.5.2.

En cada momento debe mostrarse una sola pantalla y la anterior debe retirarse por completo.

---

## 8.3 Las seis fases

La ruta completa tiene seis fases.

| № | Fase | Qué ocurre |
|---|---|---|
| **1** | **Invitación** | El texto que explica por qué se harán las preguntas y la compuerta de mayoría de edad |
| **2** | **Cuestionario** | P0, cuando aplica, y los reactivos de CEI-01, uno por pantalla |
| **3** | **Cálculo y contacto** | El sistema calcula la recomendación mientras solicita apellido, teléfono y correo |
| **4** | **Resultado** | La persona recibe su Experiencia Ideal en las dos páginas del capítulo 4 |
| **5** | **Agenda** | Se le pregunta una sola vez si desea agendar. Si acepta, elige fecha y hora |
| **6** | **Cierre** | Con cita, se presenta su confirmación. Sin cita, conserva su Experiencia Ideal y termina el recorrido |
| **—** | **Error** | Fase auxiliar que siempre debe ofrecer una salida hacia adelante |

**El brief no es una pantalla para la persona.**

Debe generarse a partir del estado final de la sesión y enviarse conforme al apartado 8.5.2:

* con cita, uno por cita y para el club de esa cita;
* sin cita, uno para el club resuelto, marcado como **llamada directa**.

**La existencia de una cita no debe ser condición para generar un brief.**

---

### 8.3.1 La fase 1 · La invitación

Debe utilizar una sola pantalla, con el texto de invitación arriba y G0 debajo.

**G0 debe ser la primera pregunta del recorrido.**

El texto tiene dos versiones.

**Cuando no viene de la página de un club en particular:**

> Con el fin de proporcionarte la mejor experiencia durante tu visita a nuestros clubes, permítenos hacerte unas preguntas. Solo toma un minuto de tu tiempo.

**Cuando abre el recorrido desde la página de un club:**

> Con el fin de proporcionarte la mejor experiencia durante tu visita a Sports World Polanco, permítenos hacerte unas preguntas. Solo toma un minuto de tu tiempo.

En esta segunda versión, el nombre del club debe corresponder a la página desde la que la persona abrió el cuestionario.

Esto afecta únicamente el texto de invitación.

**No limita el contexto de P0 a esa página:** P0 debe utilizar todo el recorrido previo de la ventana de contexto conforme al apartado 8.1.

Después de G0 existen dos rutas:

| Respuesta | Qué ocurre |
|---|---|
| **Sí** | Continúa la ruta completa |
| **No** | La ruta completa termina y comienza la ruta reducida del capítulo 6 |

---

### 8.3.2 La fase 2 · Cuándo hay precarga

P0 pertenece exclusivamente a la ruta completa.

Confirmada la mayoría de edad, el sistema debe revisar todas las páginas visitadas dentro de la ventana de contexto vigente antes de abrir el cuestionario.

Para la primera entrada al cuestionario, esa ventana comienza con el inicio de la sesión y termina cuando la persona toca cualquier botón que abre el cuestionario.

**El sistema no debe limitarse a:**

* la página de aterrizaje;
* la última página;
* ni la página desde la que se abrió el cuestionario.

Debe utilizar todos los elementos válidos revelados por el recorrido.

Las páginas visitadas pueden producir contexto de:

* club;
* amenidad;
* clase;
* objetivo.

P0 debe componerse aplicando las reglas del capítulo 5. Esto incluye:

* validar cada candidato contra la instantánea vigente;
* descartar lo que el sistema no puede entregar;
* consolidar varias páginas que representan el mismo elemento;
* y mostrar cada elemento únicamente una vez.

Por ejemplo, si la persona visitó sucesivamente Sports World Polanco, yoga, entrenamiento acuático y bajar de peso, los cuatro elementos pueden alimentar P0 si cumplen las reglas correspondientes. Si visitó tres páginas distintas relacionadas con yoga, deben consolidarse en un solo punto: yoga.

**P0 debe omitirse cuando ninguna de las páginas de la ventana de contexto vigente produce un elemento utilizable de club, amenidad, clase u objetivo.** Por ejemplo, si la persona entra al Inicio y abre directamente el cuestionario sin haber visitado ninguna página que produzca uno de esos cuatro tipos de contexto, el recorrido debe pasar directamente a Q1.

**La ruta reducida no debe utilizar P0 ni ningún dato de la navegación previa.**

---

### 8.3.3 La fase 3 hace dos cosas a la vez

La fase 3 comienza al terminar el cuestionario de la ruta completa.

Mientras el sistema calcula la Experiencia Ideal, debe pedir los datos de contacto. El motivo comunicado a la persona es enviarle su Experiencia Ideal por correo.

| Si entrega los datos | Si no los entrega |
|---|---|
| Los datos permanecen en la sesión hasta su cierre | Debe poder ver su Experiencia Ideal completa en pantalla |
| Puede continuar a la agenda | No debe crearse un registro de prospecto |
| Al cerrar la sesión debe escribirse el estado final y enviarse su experiencia conforme al apartado 8.5.2 | No debe enviarse información al club |
| Los cambios que haga antes del cierre deben modificar lo que finalmente se escribe | Al terminar la sesión, la experiencia y las respuestas terminan con ella |

En WhatsApp deben solicitarse apellido y correo, porque el teléfono proviene del canal.

**La ruta reducida no debe entrar en esta fase.** No debe pedir nombre, apellido, teléfono, correo ni ningún otro dato de contacto.

---

### 8.3.4 La fase 5 pregunta una vez

Después de entregar los datos de contacto, debe preguntarse una sola vez si la persona desea agendar una visita presencial.

| Respuesta | Qué debe quedar en el estado final |
|---|---|
| **Sí** | La cita solicitada, con club, fecha y hora |
| **No** | La marca **«no quiso agendar visita»** |
| **Cierra antes de terminar la agenda** | El registro persiste conforme al estado alcanzado, sin cita confirmada dentro del recorrido |

La marca «no quiso agendar visita» es una marca de estado. **No debe interpretarse como una instrucción de no contactar.**

**La fecha y la hora deben elegirse únicamente dentro del calendario de atención vigente del club.** Los días y horarios ofrecidos deben provenir de la sincronización operativa definida para los clubes y coincidir con los publicados en la página correspondiente. Dentro de ese calendario, el sistema debe registrar la fecha y la hora solicitadas por la persona.

La coordinación operativa posterior corresponde al club conforme al capítulo 16.

---

### 8.3.5 Agendar otra visita: una nueva ventana de contexto

Cuando una persona agenda una visita, **la ventana de contexto que produjo esa acción debe cerrarse en ese momento.**

A partir de ahí debe comenzar una nueva ventana de contexto.

**La nueva ventana debe contener** todas las páginas que la persona visite después de haber agendado esa cita y antes de volver a tocar cualquier botón de «Agenda tu visita».

Por tanto, cuando la persona ya tiene una cita y vuelve a tocar el botón, el sistema **no debe utilizar:**

* todo el historial desde que inició la sesión;
* la navegación que produjo la cita anterior;
* únicamente la última página visitada;
* ni exclusivamente la página desde la que vuelve a tocar el botón.

Debe utilizar todo lo que visitó desde que quedó agendada la cita anterior hasta ese nuevo toque. Ese recorrido representa una nueva intención de agenda.

**Ejemplo.** Dentro de una misma sesión:

> Inicio → páginas A, B y C → cuestionario → Experiencia Ideal → cita 1 → páginas D, E, F y G → vuelve a tocar Agenda tu visita

Para la primera Experiencia Ideal, el contexto es A + B + C. Una vez agendada la cita 1, ese contexto queda cerrado. Para la siguiente intención de agenda, el contexto pasa a ser D + E + F + G. Las páginas A, B y C no deben volver a formar parte de esa segunda ventana.

---

#### 8.3.5.1 Qué ocurre al volver a tocar Agenda tu visita

Cuando la persona ya tiene una cita y vuelve a tocar Agenda tu visita, el botón no debe desaparecer ni cambiar de etiqueta.

Debe preguntar primero: **«¿Quieres agendar una visita en otro club?»**

| Respuesta | Qué ocurre |
|---|---|
| **No** | La lleva a la visita ya agendada para verla, modificarla o cancelarla |
| **Sí** | Utiliza el contexto acumulado desde la cita anterior para orientar la nueva elección de club, y después recalcula la Experiencia Ideal completa para el club seleccionado utilizando las respuestas originales de CEI-01 |

La nueva navegación puede mostrar que la persona está explorando otro club, una clase determinada, una amenidad, un objetivo, o una combinación de ellos. Todos esos elementos deben considerarse dentro de la nueva ventana de contexto aplicando las reglas de validación y consolidación correspondientes.

**El cuestionario no debe volver a abrirse. Las respuestas originales de CEI-01 permanecen fijas.**

La nueva navegación:

* puede orientar qué club quiere explorar;
* puede aportar contexto a la nueva intención;
* y puede ayudar a determinar qué alternativa está evaluando;

pero **no debe sobrescribir ni modificar retroactivamente las respuestas del cuestionario.**

Si el nuevo club es distinto, el sistema debe recalcular la Experiencia Ideal completa contra el catálogo de ese club.

**La primera cita debe conservarse.** Cada nueva cita debe tener su propio club, su propia Experiencia Ideal y su propio brief.

---

#### 8.3.5.2 La ventana vuelve a cerrarse con cada nueva cita

Cuando la segunda cita queda agendada, la segunda ventana de contexto debe cerrarse. A partir de ese momento debe comenzar una tercera.

La misma lógica debe repetirse si la persona continúa navegando y posteriormente vuelve a tocar Agenda tu visita.

**La regla general es:** cada cita agendada cierra la ventana de navegación que la produjo. Todo lo que la persona visite después pertenece a la siguiente intención de agenda.

Dentro de una misma sesión puede existir, por ejemplo:

> inicio de sesión → ventana 1 → cuestionario → cita 1 → ventana 2 → cita 2 → ventana 3 → posible cita 3

Cada nueva acción de agenda debe utilizar exclusivamente la ventana de contexto abierta desde la cita inmediatamente anterior.

---

### 8.3.6 La ruta reducida tiene su propia secuencia

Quien no confirma tener 18 años no debe recorrer las seis fases. Debe recorrer únicamente tres:

| Fase | Qué ocurre |
|---|---|
| **1 · Entrada** | G0 determina que corresponde la ruta reducida |
| **2 · Cuestionario reducido** | Se muestran únicamente los reactivos definidos en el capítulo 6 para resolver el club |
| **3 · Resultado** | Se muestra un solo club recomendado, su dirección, el tiempo de traslado y una explicación breve de por qué corresponde |

La ruta reducida:

* no debe utilizar P0;
* no debe utilizar contexto de navegación;
* no debe pedir nombre, apellido, teléfono ni correo;
* no debe abrir captura de contacto;
* no debe generar una Experiencia Ideal digital;
* no debe generar brief;
* no debe agendar;
* no debe enviar información al club;
* y no debe crear un registro de prospecto.

Al final debe recomendarse que la persona acuda al club acompañada de su tutor para continuar. Ahí debe terminar el recorrido digital.

---

## 8.4 Avance y retroceso

En la ruta completa, cada fase debe ofrecer una acción que permita avanzar. El retroceso es selectivo.

| Desde | Retroceso |
|---|---|
| **Invitación** | No aplica: es la entrada |
| **Cuestionario** | Vuelve al reactivo anterior que corresponda |
| **Cálculo y contacto** | No debe permitirse retroceso mientras se ejecuta el cálculo |
| **Resultado** | No debe permitir volver al cuestionario. Puede ofrecer reiniciar el recorrido completo |
| **Agenda** | Vuelve al resultado |
| **Cierre** | Cuando existe cita, puede volver a la agenda para modificarla |

Cuando la persona retrocede dentro del cuestionario y modifica una respuesta que controlaba un reactivo condicional, deben aplicarse las reglas de reposo y reactivación del capítulo 5.

---

### 8.4.1 Por qué el cuestionario se contesta una sola vez

La lógica es simple: la persona contesta y el sistema recomienda.

Una vez calculada la Experiencia Ideal, el cuestionario debe cerrarse. **No debe permitirse modificar las respuestas después de recibir el resultado** para intentar provocar una recomendación diferente.

**Cambiar de club o cambiar de clases sí debe estar permitido.** Esos cambios no deben reabrir CEI-01. Deben recomponer el plan utilizando las respuestas originales, el club que corresponda, su catálogo vigente, y las reglas del capítulo 11.

La navegación posterior tampoco modifica las respuestas originales. El contexto puede cambiar lo que la persona quiere explorar; no cambia lo que ya declaró en el cuestionario.

---

## 8.5 Qué guarda el navegador y qué guarda el servidor

En la ruta completa, el recorrido debe permanecer anónimo hasta la fase 3. Hasta entonces la persona avanza sin cuenta, sin contraseña y sin registro de prospecto.

**La ruta reducida debe permanecer anónima durante todo el recorrido.**

---

### 8.5.1 En su navegador

**El navegador no debe persistir como datos personales las respuestas de la persona.** No debe guardar de forma persistente las respuestas del cuestionario, los bloques calculados, el texto generado, el brief, ni las citas.

El sitio utiliza un identificador propio y aleatorio de navegación: **`web_session_id`**. Su trabajo es mantener unido aquello que pertenece a la misma sesión de navegador.

**`web_session_id` no debe contener ningún dato de la persona, debe permanecer del lado de la persona y no debe llegar nunca al registro del prospecto.** No debe utilizarse como llave para vincular posteriormente la navegación con el registro de una persona.

Dentro de la sesión puede sostener la secuencia de páginas visitadas, las ventanas de contexto, y los estados **Sin cuestionario**, **Con experiencia** y **Con visita**.

| Momento | Función |
|---|---|
| **Antes del primer cuestionario** | Acumular las páginas de la primera ventana para P0 |
| **Después de la primera Experiencia Ideal** | Mantener el estado de la sesión |
| **Después de una cita** | Cerrar la ventana que produjo esa cita y comenzar una nueva |
| **Antes de otra acción de agenda** | Acumular todo lo visitado desde la cita inmediatamente anterior |

Las ventanas de contexto pertenecen a la navegación de la sesión, no al registro del prospecto.

**Cuando la sesión termina, `web_session_id` debe terminar con ella.** Una nueva sesión debe comenzar con un nuevo identificador de navegación.

**La ruta reducida no debe utilizar las páginas acumuladas para precargar respuestas.**

---

### 8.5.2 Del lado del servidor: una sola escritura al cerrar la sesión

Cuando una persona entregó sus datos de contacto, la escritura definitiva debe ocurrir al cerrar la sesión.

Mientras la sesión permanezca abierta, puede cambiar de club, cambiar de clases, agendar, modificar una cita, agendar en un segundo club, o continuar navegando entre una cita y la siguiente. Todo eso debe permanecer como estado de la sesión hasta su cierre.

**La sesión debe considerarse cerrada cuando ocurra primero:** una salida que el navegador consiga comunicar al servidor, o diez minutos sin actividad. El *timeout* es necesario porque cerrar una pestaña, perder conectividad o bloquear un dispositivo no garantiza que el navegador pueda notificar la salida.

**Cuando la sesión cierra —si el navegador avisa, o si pasan 10 minutos o más de inactividad— el sistema debe escribir y enviar lo siguiente, de una sola vez:**

* Debe escribir la Experiencia Ideal en su base propia. Con cita, una por cita. Sin cita, la correspondiente al club resuelto.
* Debe escribir el registro del prospecto y sus citas en el sistema de clientes.
* Debe escribir la Experiencia Ideal final y mandarla por correo a la persona.
* Debe mandar la confirmación de la visita por WhatsApp a la persona.
* Debe escribir el brief y enviarlo por correo al club. Con cita, uno por cita y dirigido al club de esa cita. Sin cita, uno dirigido al club resuelto y marcado como **llamada directa**.

**La existencia de una cita no debe ser condición para generar ni enviar el brief.**

Cuando la persona entregó sus datos pero no agendó: debe conservarse la Experiencia Ideal del club resuelto, debe generarse un brief para ese mismo club, el brief debe marcarse como **llamada directa**, y el asesor debe recibir la misma base de recomendación que recibió la persona.

Si la persona respondió expresamente que no quería agendar, el registro debe conservar además la marca «no quiso agendar visita». **Esa marca no impide el contacto posterior.**

---

### 8.5.3 Las dos llaves de sesión no son lo mismo

`web_session_id` y `session_uuid` deben cumplir funciones distintas.

**`web_session_id`**

* identifica exclusivamente la navegación temporal en el navegador;
* no contiene datos personales;
* no llega al registro del prospecto;
* sostiene las ventanas de contexto y los estados de navegación;
* termina con la sesión.

**`session_uuid`**

* identifica la sesión registrada dentro del sistema;
* forma parte del registro que sí persiste cuando hubo captura de contacto;
* permite mantener juntas las operaciones que pertenecen a esa sesión registrada.

**`session_uuid` no debe utilizarse como sustituto de `web_session_id`. `web_session_id` no debe utilizarse como mecanismo de conciliación de una persona con un registro.**

La conciliación entre distintas sesiones y un prospecto ya existente debe resolverse mediante la llave de reconocimiento y las reglas del capítulo 9.

---

### 8.5.4 Versiones de la Experiencia Ideal

La Experiencia Ideal debe vivir en una base propia vinculada con el registro correspondiente.

**Sin cita**, debe conservarse la versión del club resuelto. **Con una o más citas**, debe conservarse una versión para cada cita y para el club correspondiente.

Dos clubes pueden producir bloques distintos, clases distintas, argumentos distintos, y por tanto Experiencias Ideales distintas.

Cuando la persona agenda otra visita dentro de la misma sesión, el sistema debe utilizar las respuestas originales del cuestionario y recalcular el plan contra el nuevo club.

**Al confirmarse posteriormente el alta de la membresía**, debe prevalecer la Experiencia Ideal correspondiente al club donde ocurrió el alta y las demás deben eliminarse conforme al capítulo 9.

---

### 8.5.5 Los avisos de cambios posteriores

Mientras los cambios ocurran dentro de una misma sesión todavía abierta, el club debe recibir únicamente el estado final cuando esa sesión cierre.

**No deben enviarse correos sucesivos al club** por cada cambio de clase, cambio de club, ajuste de cita, o nueva exploración.

Los avisos independientes de modificación o cancelación deben producirse únicamente cuando una cita que ya había sido persistida y enviada al club sea modificada posteriormente.

---

### 8.5.6 Los dos recordatorios de la visita

Una vez persistida una cita, la persona debe recibir dos recordatorios por WhatsApp: uno 24 horas antes, otro 2 horas antes.

| | |
|---|---|
| **De quién son** | De la persona. Le recuerdan su club, día y hora |
| **Por dónde llegan** | Por WhatsApp al teléfono disponible en su registro, enviados por BES |
| **Qué recibe el club** | El brief correspondiente a esa cita, por correo |
| **Con dos citas** | Cada cita debe producir sus propios dos recordatorios |

La persona y el club son destinatarios distintos: la persona recibe los recordatorios por WhatsApp; el club recibe el brief por correo.

**Esta regla corresponde a la Cláusula Tercera, apartado II del Contrato:** dos mensajes recordatorios, 24 horas y 2 horas antes de la visita solicitada.

---

## 8.6 El paso a BES

BES debe estar disponible durante la ruta completa. **La ruta reducida del capítulo 6 queda fuera de este mecanismo.**

---

### 8.6.1 Durante el cuestionario

Cuando la persona llama a BES durante el cuestionario, **BES debe tomar el control desde el reactivo exacto en el que se encuentra**. Debe recibir las respuestas ya contestadas, el reactivo actual, y la información confirmada mediante P0. Debe continuar con el mismo CEI-01.

| | |
|---|---|
| **Qué recibe** | Respuestas existentes, reactivo en curso y contexto confirmado mediante P0 |
| **Con qué sigue** | Los mismos reactivos, opciones, validaciones y ramificaciones |
| **Qué no debe hacer** | Saltar reactivos, agregar preguntas, cambiar opciones o modificar validaciones |

La persona debe poder volver al recorrido autónomo desde el mismo punto, sin reiniciar.

---

### 8.6.2 Después de entregada la experiencia

Después del resultado, BES puede ayudar a explicar por qué se recomendó ese club, qué significa cada bloque, qué ocurrirá durante la visita.

También puede ejecutar las mismas acciones permitidas por la pantalla: cambiar de club, cambiar de clases. Cuando una de esas acciones modifique el plan, debe aplicar exactamente las mismas reglas de recomposición de los capítulos 4 y 11.

**Cambiar mediante BES y cambiar mediante la interfaz deben producir el mismo resultado.**

La navegación posterior y las nuevas ventanas de contexto deben seguir acumulándose independientemente de que la persona utilice BES o la interfaz autónoma.

**BES no debe:**

* modificar las respuestas originales del cuestionario;
* construir bloques fuera de las reglas;
* recomendar clases que el club no pueda entregar;
* ni utilizar precio o promoción como argumento fuera de las excepciones expresamente autorizadas.

---

### 8.6.3 Si BES falla

Si BES deja de estar disponible o falla durante la interacción, la persona debe permanecer dentro del recorrido autónomo. Debe volver al mismo punto en el que estaba.

**El fallo de BES no debe:**

* reiniciar el cuestionario;
* borrar respuestas;
* borrar la ventana de contexto vigente;
* modificar el resultado;
* ni impedir el avance.

---

## 8.7 La fase de error

La fase de error debe utilizarse cuando falla la generación automática de una parte del texto de la Experiencia Ideal.

Debe ofrecer un botón para reintentar y un enlace para reiniciar.

| Qué ocurre | Qué ve la persona |
|---|---|
| **El reintento funciona** | Regresa al resultado con su experiencia completa |
| **El segundo reintento falla** | El botón se sustituye por **«Ver mi recomendación»** |

Al tocar «Ver mi recomendación», la persona debe recibir todo aquello que el sistema puede calcular sin depender de la redacción automática: club, bloques, clases, sección de seguridad, y demás elementos determinísticos de la recomendación.

El capítulo 13 especifica cuáles secciones dependen del modelo de lenguaje.

**La pantalla no debe informar a la persona de una falla técnica ni mostrar un mensaje de error.**

**La fase de error debe ofrecer siempre una salida hacia adelante.**
