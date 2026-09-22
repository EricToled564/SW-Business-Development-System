# Capítulo 9 · Datos de contacto y consentimiento

La Experiencia Ideal se construye con lo que la persona contesta.

Para enviársela por correo, registrar al prospecto, permitir que el club continúe la atención y, cuando corresponda, gestionar una visita, hacen falta además sus datos de contacto.

Esos datos se piden una sola vez dentro del recorrido, después del cuestionario y mientras el sistema calcula la recomendación.

La arquitectura distingue **cuatro cosas que no deben confundirse**:

* `web_session_id` identifica únicamente la navegación temporal en el navegador;
* `session_uuid` identifica una sesión registrada y permite que su escritura sea idempotente;
* la **llave de reconocimiento** permite reconocer a una persona cuando vuelve al sistema;
* `sw_person_id` es el identificador interno que queda asociado a esa persona en la base de datos y en el CRM, y permite unir después las distintas etapas del funnel.

**`sw_person_id` no sustituye la llave de reconocimiento.**

La persona no conoce ese identificador ni debe introducirlo cuando vuelve. El sistema debe reconocerla mediante los datos que sí vuelve a proporcionar y, una vez encontrada la coincidencia, recuperar su `sw_person_id`.

Todo lo que aquí se especifica corresponde a la ruta completa. Quien llega a la captura de contacto ya confirmó en G0 que tiene 18 años o más.

**La ruta reducida del capítulo 6 no debe llegar a esta captura, no debe identificar a la persona y no debe escribir información en el CRM ni en la base de prospectos.**

---

## 9.1 Cuándo se piden y cuáles son

Los datos de contacto deben pedirse al terminar el cuestionario, en la fase 3 del recorrido, mientras el sistema calcula la recomendación.

El capítulo 8 especifica la secuencia.

El motivo que debe comunicarse a la persona es el uso real: **enviarle su Experiencia Ideal por correo.**

La espera del cálculo se utiliza para realizar la captura.

| Dato | De dónde sale |
|---|---|
| **Nombre** | De **Q1**, que ya se contestó |
| **Apellido** | De la captura de contacto |
| **Teléfono** | De la captura de contacto, normalizado en formato E.164 |
| **Correo** | De la captura de contacto |

Por canal cambia únicamente el origen del teléfono.

| Canal | Qué se pide en la captura |
|---|---|
| **Sitio web** | Apellido, teléfono y correo |
| **WhatsApp** | Apellido y correo. El teléfono viene del canal |
| **Consola** | Apellido, teléfono y correo, capturados con el prospecto presente |

Los campos deben cumplir las validaciones establecidas en CEI-01 y en el contrato de datos del capítulo 14.

---

### 9.1.1 Si entrega los datos

Los datos deben permanecer dentro del estado de la sesión hasta que esta cierre.

**Al cierre:**

* debe crearse o actualizarse el registro del prospecto;
* debe resolverse su reconocimiento contra los registros existentes;
* debe recuperarse o asignarse su `sw_person_id`;
* debe escribirse el estado final de la sesión;
* debe enviarse la Experiencia Ideal por correo;
* debe generarse el brief correspondiente;
* y, cuando existan citas, deben persistirse también.

---

### 9.1.2 Si no entrega los datos

La persona debe poder ver la misma Experiencia Ideal completa en pantalla. **La recomendación no debe degradarse por haber omitido el contacto.**

Pero sin esos datos:

* no debe crearse un registro de prospecto;
* no debe enviarse la Experiencia Ideal por correo;
* no debe generarse un brief para el club;
* no debe producirse una llamada directa;
* y no debe poder agendar una visita.

**Sin datos de contacto no debe existir seguimiento comercial.**

Al terminar la sesión, las respuestas y la Experiencia Ideal deben terminar con ella.

---

### 9.1.3 Los datos pertenecen a quien contesta

Los datos de contacto deben ser siempre de la persona que está contestando.

Cuando alguien declara interés en actividades para menores de 3 meses a 13 años, el sistema debe recoger únicamente ese interés por un servicio del club.

**No debe pedir:**

* nombre;
* edad;
* teléfono;
* correo;
* ni ningún otro dato identificable de esas terceras personas menores de edad.

El apartado 6.6 fija esa regla.

---

## 9.2 El envío de la Experiencia Ideal por correo

La Experiencia Ideal debe enviarse al cerrar la sesión, utilizando el estado final alcanzado durante esa sesión.

Eso significa que el correo debe reflejar los cambios que la persona haya realizado antes del cierre.

| | |
|---|---|
| **Qué contiene** | La Experiencia Ideal completa correspondiente a esa versión: club, bloques, clases y demás contenido definido en el capítulo 4 |
| **Cuándo sale** | Al cerrar la sesión, por salida comunicada o por diez minutos sin actividad |
| **A quién llega** | Al correo entregado por la persona |
| **Qué recibe el club** | El brief correspondiente, no la Experiencia Ideal de la persona |

**Cuántos correos se envían.** Debe enviarse uno por cada Experiencia Ideal vigente que corresponda al estado final de la sesión.

| Caso | Qué debe ocurrir |
|---|---|
| **Sin cita** | Debe existir la Experiencia Ideal correspondiente al club resuelto. Esa versión debe enviarse a la persona |
| **Con una cita** | Debe persistir y enviarse la Experiencia Ideal correspondiente al club de esa cita |
| **Con citas en distintos clubes** | Cada cita debe conservar su propia Experiencia Ideal. La persona debe recibir cada una de las versiones vigentes correspondientes |

Dos clubes pueden producir clases, combinaciones y argumentos distintos; por eso esas experiencias no deben tratarse como si fueran el mismo documento.

---

### 9.2.1 Lo que recibe el club

El club recibe el brief.

| Caso | Qué debe ocurrir |
|---|---|
| **Con cita** | Debe existir un brief por cita y debe enviarse al club de esa cita |
| **Sin cita** | Debe existir un brief para el club resuelto y debe enviarse marcado como **«llamada directa»** |

Por tanto: **la existencia de una cita no debe ser condición para generar ni enviar el brief.**

---

### 9.2.2 Recordatorios

Cada cita persistida debe producir dos recordatorios por WhatsApp: 24 horas antes, 2 horas antes.

El apartado 8.5.6 especifica ese mecanismo.

---

## 9.3 Una sola escritura al cerrar la sesión

La escritura definitiva debe ocurrir una sola vez, al cerrar la sesión.

Mientras la sesión permanezca abierta, la persona puede cambiar de club, cambiar de clases, agendar, modificar una cita, agendar en otro club, y continuar navegando. Todo eso debe permanecer como estado de trabajo hasta el cierre.

**El sistema no debe crear una nueva escritura comercial definitiva por cada modificación.**

Al cerrar la sesión debe persistir el estado final.

La misma operación debe ser utilizada por sitio web, BES en web, BES en WhatsApp, y consola. Todos deben desembocar en el mismo pipeline y en el mismo contrato de datos.

---

## 9.4 Las cuatro piezas de identificación

La arquitectura utiliza cuatro mecanismos distintos.

| Elemento | Qué identifica | Para qué sirve |
|---|---|---|
| **`web_session_id`** | La navegación temporal del navegador | Mantener el estado de navegación y las ventanas de contexto |
| **`session_uuid`** | Una sesión registrada | Idempotencia y trazabilidad de esa ejecución |
| **Llave de reconocimiento** | Una persona que vuelve al sistema | Encontrar el registro existente utilizando datos que la persona vuelve a proporcionar |
| **`sw_person_id`** | La identidad interna de esa persona | Unir sus registros y las etapas posteriores del funnel dentro de los sistemas de Sports World |

**Ninguno debe utilizarse como sustituto de otro.**

---

### 9.4.1 `web_session_id`

`web_session_id` debe identificar únicamente la navegación de una sesión en el navegador.

**Debe:**

* ser propio y aleatorio;
* no contener datos de la persona;
* permanecer del lado de la persona;
* no llegar nunca al registro del prospecto;
* no utilizarse para reconocer a una persona que regresa;
* y terminar con la sesión de navegación.

Dentro de la sesión puede sostener las páginas visitadas, las ventanas de contexto del capítulo 8, y los estados **Sin cuestionario**, **Con experiencia** y **Con visita**.

Cuando la persona vuelve otro día, comienza con un nuevo `web_session_id`.

---

### 9.4.2 `session_uuid`

`session_uuid` debe identificar una sesión registrada del proceso comercial.

Debe utilizarse como llave de idempotencia. Si la operación de escritura correspondiente a esa misma sesión se ejecuta más de una vez, debe actualizar o confirmar el mismo estado y no crear un duplicado.

**Una misma persona puede tener múltiples `session_uuid` a lo largo del tiempo.**

Por tanto: **`session_uuid` identifica una sesión; no identifica permanentemente a una persona.**

---

### 9.4.3 La llave de reconocimiento

Cuando una persona vuelve otro día, el sistema no dispone de su `web_session_id` anterior. Tampoco debe preguntarle su `sw_person_id`.

Para determinar si ya existe debe utilizar la llave de reconocimiento del proyecto, construida con los datos que la persona proporciona nuevamente.

| Dato | Papel |
|---|---|
| **Teléfono**, normalizado en formato E.164 | Elemento principal de reconocimiento |
| **Nombre** | Ayuda a validar la coincidencia |
| **Apellido** | Ayuda a validar la coincidencia |
| **Club** | Ayuda a resolver casos de homonimia o ambigüedad dentro del proceso |

La combinación de estos datos debe utilizarse para buscar el registro existente, evitar duplicados, resolver coincidencias, y recuperar el `sw_person_id` previamente asignado.

**La llave de reconocimiento es lo que permite encontrar a la persona. `sw_person_id` es lo que permite mantener su continuidad interna después de encontrarla.**

---

### 9.4.4 `sw_person_id`

`sw_person_id` debe ser un identificador interno asignado por el sistema.

**Debe escribirse en:** la base de datos correspondiente, el CRM, y los registros posteriores que necesiten mantener continuidad dentro del funnel.

**La persona:**

* no debe introducirlo;
* no necesita conocerlo;
* y no debe conservarlo para poder volver a utilizar el sistema.

Cuando una persona nueva entrega sus datos y no existe una coincidencia válida, el sistema debe crear el registro correspondiente y asignarle un nuevo `sw_person_id`.

Cuando la persona vuelve y la llave de reconocimiento encuentra un registro existente, el sistema debe recuperar el `sw_person_id` ya asociado a ese registro.

Ese identificador puede utilizarse después para vincular, entre otras etapas: lead, cita, visita realizada, alta, membresía, cancelación, y renovación.

**La secuencia correcta es:**

> la persona entrega sus datos → la llave de reconocimiento busca una coincidencia → el sistema recupera o crea `sw_person_id` → la nueva actividad queda asociada a ese identificador interno.

---

## 9.5 Qué se escribe

La persona, la sesión, las citas y las Experiencias Ideales representan cosas distintas. El modelo de datos debe conservar esa separación.

---

### 9.5.1 Registro del prospecto

Dentro del alcance del proyecto, el registro debe poder contener o relacionarse con:

| Campo | Contenido |
|---|---|
| `sw_person_id` | Identificador interno de la persona |
| `nombre` | Nombre declarado en Q1 |
| `apellido` | Apellido capturado |
| `telefono` | Teléfono normalizado en E.164 |
| `correo` | Correo electrónico |
| `club_id` | Club resuelto o club correspondiente al estado comercial vigente |
| `perfil[]` | Respuestas aplicables del cuestionario |
| `canal_origen` | `web` · `bes_whatsapp` · `consola` |
| `utm_source` · `utm_medium` · `utm_campaign` | Atribución de campaña, cuando exista |
| `timestamp` | Fecha y hora de creación o actualización |

El contrato campo por campo vive en el capítulo 14 y en el anexo E.

---

### 9.5.2 Registro de la sesión

Cada sesión registrada debe conservar:

| Campo | Contenido |
|---|---|
| `session_uuid` | Identificador de esa sesión |
| `sw_person_id` | Persona con la que quedó conciliada |
| **Estado final** | Resultado alcanzado dentro de esa sesión |
| **Canal** | Canal por el que ocurrió |
| **Atribución** | Datos de campaña que correspondan |
| `timestamp` | Fecha y hora de la sesión |

**`web_session_id` no debe escribirse en este registro.**

---

### 9.5.3 Las citas

Cada cita debe conservar su propia información. Como mínimo: `sw_person_id`, `session_uuid` que la produjo, club, fecha, hora, estado, y referencia a la Experiencia Ideal correspondiente.

**Una misma persona puede tener más de una cita.** Por eso fecha, hora y club de cita no deben modelarse como si solo pudiera existir una visita para esa persona.

---

### 9.5.4 Las Experiencias Ideales

La Experiencia Ideal debe vivir en una base propia del proyecto, dentro de la infraestructura de Sports World.

Cada versión persistida debe poder relacionarse con `sw_person_id`, `session_uuid`, club, y, cuando exista, la cita correspondiente.

| Caso | Qué debe persistir |
|---|---|
| **Sin cita** | Debe persistir la experiencia del club resuelto |
| **Con cita** | Debe persistir una Experiencia Ideal por cita |
| **Con citas en clubes distintos** | Las distintas versiones deben coexistir mientras correspondan a citas vigentes |

---

## 9.6 Cuándo cuenta la visita agendada

La etapa **Visita agendada** del Mapa del Funnel debe contar cuando el sistema de clientes confirma la escritura de la cita.

**No debe contar simplemente cuando la persona** abre la agenda, selecciona provisionalmente una fecha, o toca un botón.

El Mapa del Funnel debe regir como documento único para la definición de métricas y eventos.

---

## 9.7 Dónde viven los datos y por cuánto tiempo

| Lugar | Regla |
|---|---|
| **Entorno del sitio** | Los datos personales pueden residir de forma transitoria durante la sesión, el tiempo necesario para completar el recorrido y transferir el estado final |
| **CRM / sistema de clientes** | Debe vivir el registro del prospecto, su `sw_person_id` y sus citas |
| **Base de Experiencias Ideales** | Deben vivir las versiones persistidas de la experiencia, relacionadas mediante los identificadores correspondientes |
| **Bitácoras técnicas** | Deben quedar los eventos técnicos, sin datos personales |
| **En tránsito** | Las comunicaciones deben viajar cifradas mediante HTTPS/TLS y los accesos deben operar bajo mínimo privilegio |

Una vez transferida la información al destino persistente correspondiente, el entorno transitorio del sitio no debe mantener copias adicionales fuera de las reglas de retención definidas para el proyecto.

Estas reglas deben implementarse conforme al Contrato y al contrato técnico del capítulo 14.

---

## 9.8 La conciliación y el reencuentro

Una misma persona puede volver otro día para realizar otra Experiencia Ideal, completar nuevamente el cuestionario, agendar otra visita, o iniciar un nuevo recorrido.

**Al volver:**

* tendrá un nuevo `web_session_id`;
* la nueva ejecución registrada tendrá un nuevo `session_uuid`;
* pero el sistema debe intentar recuperar el mismo `sw_person_id`.

Para hacerlo no debe pedir ese ID. Debe utilizar nuevamente la llave de reconocimiento.

---

### 9.8.1 Cómo se reconoce a quien vuelve

**La secuencia debe ser:**

1. La persona completa nuevamente el recorrido y entrega sus datos de contacto.
2. El sistema normaliza esos datos.
3. Utiliza teléfono + nombre + apellido + club conforme a las reglas de reconocimiento del proyecto.
4. Busca una coincidencia con los prospectos existentes.
5. Si encuentra una coincidencia válida, recupera el `sw_person_id` existente.
6. La nueva sesión conserva su propio `session_uuid`.
7. La nueva experiencia, cita y eventos deben quedar asociados a ese mismo `sw_person_id`.
8. Si no existe una coincidencia válida, debe crearse un nuevo registro y asignarse un nuevo `sw_person_id`.

Por tanto: **la llave reconoce a la persona; `sw_person_id` mantiene su continuidad interna después del reconocimiento.**

---

### 9.8.2 Qué ocurre en el reencuentro

| Qué | Qué pasa |
|---|---|
| **Reconocimiento** | Se realiza nuevamente con teléfono, nombre, apellido y club |
| **`sw_person_id`** | Si existe coincidencia, se recupera el que ya tenía |
| **`web_session_id`** | Es nuevo porque pertenece a la nueva navegación |
| **`session_uuid`** | Es nuevo porque se trata de una nueva sesión registrada |
| **Registro del prospecto** | Se actualiza el existente cuando la conciliación determina que es la misma persona |
| **Marca «no quiso agendar visita»** | Se actualiza según el nuevo estado; no es una característica permanente |
| **Citas** | Las nuevas citas se agregan a la misma persona |
| **Experiencia sin cita** | La nueva versión puede sustituir la anterior del mismo club conforme a las reglas del proyecto |
| **Experiencias con cita** | Cada cita vigente mantiene su propia versión |
| **Experiencia en otro club** | Puede coexistir con las demás |
| **Alta de membresía** | Se identifica el club del alta; la experiencia correspondiente prevalece y las demás se eliminan conforme a las reglas definidas |

---

### 9.8.3 La medición conserva el historial

Reconocer a una persona como la misma y reutilizar su `sw_person_id` no debe borrar los eventos anteriores del funnel.

**Las etapas deben contar cuando suceden.** Por ejemplo:

* Cuestionario iniciado cuenta cuando ocurre el evento correspondiente.
* Cuestionario completado cuenta cuando se genera la recomendación.
* Visita agendada cuenta cuando se confirma la escritura correspondiente.

Si una misma persona vuelve y realiza otro recorrido, ese recorrido debe producir sus propios eventos.

Por tanto: **una persona puede tener un solo `sw_person_id` y, al mismo tiempo, múltiples sesiones, experiencias, citas y eventos históricos.**

---

### 9.8.4 Uso posterior de `sw_person_id` en el funnel

Una vez asignado, `sw_person_id` debe viajar en los sistemas que participan en las etapas posteriores del funnel cuando técnicamente corresponda.

Su función es permitir que Sports World relacione los distintos eventos con la misma persona después de que esta ya fue identificada.

Debe permitir mantener continuidad entre prospecto, visitas, alta, membresía, cancelación, y renovaciones.

El reconocimiento de una persona que vuelve al sistema sigue realizándose con la llave definida en este capítulo. `sw_person_id` permite unir posteriormente los registros una vez que la identidad ya fue conciliada.

---

## 9.9 Quien no agenda también entra al proceso comercial

Una persona que completó el cuestionario, entregó sus datos de contacto, recibió su Experiencia Ideal, y no agendó una visita, **sigue siendo un prospecto válido.**

**Al cerrar la sesión:**

* debe persistirse su registro;
* debe resolverse o asignarse su `sw_person_id`;
* debe conservarse la Experiencia Ideal del club resuelto;
* debe enviarse esa experiencia por correo;
* debe generarse un brief para ese club;
* y el brief debe marcarse como **llamada directa**.

Si respondió expresamente que no quería agendar, el registro debe llevar además la marca **«no quiso agendar visita»**.

**Esa marca es un estado. No debe interpretarse como una instrucción de no contactar.**

El asesor debe recibir el brief para continuar la atención conforme al capítulo 16.

---

## 9.10 El aviso simplificado y el aviso integral

La captura de contacto es el momento en que la persona entrega los datos que permiten identificarla y contactarla. Ahí debe presentarse la información de privacidad correspondiente.

| Aviso | Dónde aparece | Qué debe cubrir |
|---|---|---|
| **Simplificado** | En la pantalla de captura de contacto, junto a los campos | Para qué se utilizarán los datos y acceso al aviso integral |
| **Integral** | Enlazado desde esa pantalla y desde el pie de las 148 páginas | La información completa aplicable al tratamiento, las finalidades y el ejercicio de derechos |

**Sports World debe actuar como responsable de los datos** dentro de la arquitectura definida para el proyecto.

Quien opere el sistema por cuenta de Sports World debe hacerlo como **encargado**, conforme a las instrucciones y condiciones contractuales aplicables.

Los derechos de acceso, rectificación, cancelación y oposición deben ejercerse ante Sports World conforme al procedimiento establecido en su aviso de privacidad. Quien opere técnicamente el sistema debe prestar el soporte correspondiente para que Sports World pueda atender esas solicitudes dentro del alcance contratado.

**El texto exacto del aviso simplificado, del aviso integral y de cualquier mecanismo de consentimiento debe ser el aprobado por Legal de Sports World.** El sistema debe implementar esa versión sin modificar su contenido.

---

**La arquitectura queda así, sin mezclar funciones:**

* `web_session_id` = navegación temporal
* `session_uuid` = sesión registrada e idempotencia
* teléfono + nombre + apellido + club = reconocimiento de quien vuelve
* `sw_person_id` = identificador interno recuperado o creado después del reconocimiento, utilizado para unir posteriormente el funnel
