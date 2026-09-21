# Capítulo 8 · Datos de contacto y consentimiento

La experiencia ideal se construye con lo que la persona contesta. Para entregársela por correo, para que el club la espere y para que el asesor la llame, hacen falta además tres datos de contacto. Se piden en un solo momento, se escriben una sola vez, viven en un solo lugar y se entregan bajo un aviso.

Todo lo que aquí se especifica ocurre después de la compuerta de mayoría de edad del capítulo 5: **quien llega a la captura de contacto confirmó ser mayor de edad.**

## 8.1 Cuándo se piden y cuáles son

Los datos de contacto se piden **al terminar el cuestionario, en la fase 3 del recorrido**, mientras el sistema calcula la recomendación. El capítulo 7 especifica la secuencia.

**El motivo que se le da a la persona es el uso real:** enviarle su experiencia ideal por correo. La espera del cálculo se ocupa con la captura, y la captura se justifica con algo que ella recibe.

| Dato | De dónde sale |
|---|---|
| **Nombre** | Del reactivo 1, que ya se contestó |
| **Apellido** | De la captura de contacto |
| **Teléfono** | De la captura de contacto, en formato E.164 |
| **Correo** | De la captura de contacto |

**Por canal cambia solo el origen del teléfono:**

| Canal | Qué se pide en la captura |
|---|---|
| **Sitio web** | Apellido, teléfono y correo |
| **WhatsApp** | Apellido y correo. El teléfono viene del canal, ya validado por él |
| **Consola** | Apellido, teléfono y correo, capturados por la persona asesora con el prospecto presente |

**Quien entrega los datos y quien los omite reciben la misma experiencia.** La diferencia está en lo que ocurre después:

| | Qué pasa |
|---|---|
| **Entrega los datos** | Su contacto vive en la sesión. Al cerrarse la sesión se escribe su registro y se le envía su experiencia por correo |
| **Omite los datos** | Ve su experiencia completa en pantalla, con la misma información. Esa experiencia vive en la sesión y termina con ella |

**Los datos de contacto son de quien contesta.** Cuando la persona declara que entrenará con sus hijos, lo que se recoge es el interés en las actividades para menores de 3 meses a 13 años, que es un servicio del club. El apartado 5.6 fija esa regla.

## 8.2 El envío de la experiencia por correo

El correo sale **al cerrar la sesión, una sola vez, con la versión final de la experiencia**: la que resultó de todos los cambios que la persona hizo mientras navegaba.

| | |
|---|---|
| **Qué contiene** | La experiencia ideal completa, la misma que vio en pantalla: su club, su plan y sus clases. El capítulo 3 especifica su contenido |
| **Cuándo sale** | Al cerrar la sesión, por salida o por diez minutos sin actividad |
| **Cuántos salen** | Uno por cada experiencia vigente. Con dos citas en dos clubes salen dos, porque cada una resuelve clases distintas |
| **Qué recibe el club** | El brief de esa persona, por correo, según el capítulo 15. La persona recibe su experiencia; el club recibe el brief |

**Los dos recordatorios de la visita viajan por WhatsApp y son de la persona**, 24 horas y 2 horas antes de su cita. El apartado 7.5.3 los especifica.

## 8.3 Una sola escritura

**La escritura ocurre una sola vez, al cerrar la sesión.** Mientras la sesión vive, la persona cambia de club, cambia de clases, agenda y vuelve a agendar, y todo eso vive en la sesión. El apartado 7.5.2 fija la regla; aquí se especifica qué se escribe.

**La operación de escritura es una sola y la comparten los tres canales** —el sitio, BES y la consola—, de modo que todo prospecto entra al mismo pipeline con el mismo formato.

### Qué lleva el registro del prospecto

| Campo | Contenido |
|---|---|
| `session_uuid` | Llave de idempotencia de la sesión |
| `nombre` · `apellido` | Separados en dos campos |
| `telefono` | En formato E.164 |
| `correo` | Correo electrónico |
| `club_id` | El club que resolvió el sistema o el que la persona eligió |
| `fecha_visita` · `horario_visita` | El día y la hora que pidió, dentro del calendario de atención de ese club |
| `perfil[]` | Sus respuestas del cuestionario |
| `canal_origen` | `web` · `bes_whatsapp` · `consola` |
| `utm_source` · `utm_medium` · `utm_campaign` | Atribución de campaña, cuando viene de una |
| `timestamp` | Fecha y hora de creación o de última actualización |

El contrato campo por campo de esta y de las demás fuentes vive en el capítulo 13 y en el anexo E.

### La escritura es idempotente

El registro lleva la **llave de la sesión**, `session_uuid`. Si la persona vuelve dentro de la misma sesión y reconfirma, se actualiza ese mismo registro. **Una sesión produce un registro.**

Esa llave es distinta del identificador del navegador, `web_session_id`, que ata entre sí las páginas que la persona visita y muere con la sesión. El identificador del navegador permanece del lado de la persona; la llave de la sesión es campo del registro.

### Cuándo cuenta la visita agendada

La etapa **visita agendada** del Mapa del Funnel cuenta **cuando el sistema de clientes confirma la escritura**, no cuando la persona toca el botón. El Mapa del Funnel rige como documento único de medición.

### Dónde viven los datos y por cuánto tiempo

| | Regla |
|---|---|
| **En el entorno del sitio** | Los datos personales residen de forma transitoria, el tiempo necesario para completar la captura y transferirlos al sistema de clientes. Copiados ahí, el entorno del sitio los suelta |
| **En el sistema de clientes** | Vive el registro del prospecto, con sus citas |
| **En la base de experiencias ideales** | Vive la experiencia, ligada al registro por su identificador. Es una base propia del proyecto, dentro de la infraestructura de Sports World |
| **En las bitácoras** | Quedan los eventos técnicos, con los datos personales fuera de ellas |
| **En tránsito** | Todas las comunicaciones viajan cifradas por HTTPS/TLS, y el acceso corre bajo mínimo privilegio |

Estas cinco reglas vienen del Contrato, Cláusula Décima Octava, apartados II y III.

## 8.4 La conciliación con la llave canónica y el reencuentro

Una misma persona puede volver otro día, rehacer el cuestionario y agendar. Para que siga siendo un solo prospecto, el sistema la reconoce con la **llave canónica del proyecto**:

| Dato | Papel en la llave |
|---|---|
| **Teléfono**, en formato E.164 | **Llave principal** |
| **Nombre**, **apellido** y **club** | Resuelven los casos de homonimia |

Esa misma llave une la visita agendada con la visita realizada y con la membresía nueva. La cancelación se une por número de membresía.

### Qué ocurre en el reencuentro

| Qué | Qué pasa |
|---|---|
| **El registro del prospecto** | Se actualiza contra el que ya existía. **Una persona, un registro** |
| **La marca «no quiso agendar visita»** | La sustituye el resultado nuevo. Es una marca de estado |
| **La experiencia ideal** | Vive en su base propia. La nueva sustituye a la anterior cuando resuelve el mismo club; cuando resuelve otro, se suma. Hay **una experiencia vigente por cita** |
| **La cita** | Queda contra el registro que ya existía |
| **Al alta de la membresía** | Se verifica en qué club ocurrió: prevalece la experiencia de ese club y las demás se eliminan |

**La medición conserva todo lo ocurrido.** Las etapas de la espina del funnel cuentan eventos en el momento en que suceden: cuestionario iniciado cuenta al responderse la primera pregunta, y cuestionario completado cuenta al generarse la experiencia ideal. Rehacer el cuestionario produce un evento nuevo de cada uno, y los dos quedan registrados aunque la experiencia anterior se sustituya.

**Quien contesta el cuestionario y elige no agendar** entra a las llamadas directas del asesor, con su brief. El capítulo 15 lo especifica.

## 8.5 El aviso simplificado y el aviso integral

La captura de contacto es el momento en que la persona entrega sus datos, y es donde se le dice para qué se usan.

| Aviso | Dónde aparece | Qué dice |
|---|---|---|
| **Simplificado** | En la pantalla de captura de contacto, junto a los campos | Para qué se usan sus datos y con quién se comparten |
| **Integral** | Enlazado desde esa misma pantalla y desde el pie de las 148 páginas | El aviso completo del responsable, con la finalidad, el tratamiento, la transferencia y el ejercicio de derechos |

**Quién es quién ante la ley.** El tratamiento corre conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. **Sports World es el responsable** de los datos; quien opera el sistema actúa como **encargado**, por cuenta suya y bajo sus instrucciones.

**Los derechos de acceso, rectificación, cancelación y oposición los ejerce la persona ante Sports World**, que es el responsable. Quien opera el sistema le da acompañamiento para atender cada solicitud.

**El texto exacto de los dos avisos corresponde a Legal de Sports World**, igual que la decisión de si procede pedir consentimiento previo.
