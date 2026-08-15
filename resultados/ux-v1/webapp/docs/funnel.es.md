# Sports World México · Mapa del Funnel
## De dónde se obtiene cada dato, quién otorga el acceso y cuándo cuenta cada etapa

Este documento fija el **funnel único** del proyecto: sus canales de entrada, sus etapas, la definición operativa de cada una, la fuente exacta de la que se obtiene el dato y el responsable de otorgar el acceso correspondiente. Es la referencia canónica de medición para los tres proyectos y para el tablero ejecutivo.

> **Documento canónico.** La documentación del proyecto contiene hoy tres definiciones distintas de funnel —la Estrategia Técnica (§10), la Medición del BDS y la Integración de Datos (§5)—. **Este mapa las sustituye.** Los documentos citados se alinean a esta definición en la revisión correspondiente.

---

## 1 · Principio: tres puertas, una espina

El mapa separa dos cosas que conviene no mezclar: el **canal de entrada** y la **etapa de venta**. Cada canal tiene su propia puerta y su propia forma de medirse; a partir del cuestionario, todos los prospectos recorren la misma espina de conversión.

**Tres puertas de entrada reales:** el sitio web, el WhatsApp oficial y la consola del asesor.
**Una espina común:** cuestionario iniciado → cuestionario completado → visita agendada → visita realizada → membresía comprada → membresía cancelada.
**Dos ejes transversales:** el tiempo al primer contacto y la atribución de origen.

## 2 · Los canales de entrada

Los tres canales difieren en algo que determina qué se puede medir en cada uno: **el momento en que la persona deja de ser anónima.**

| | **Canal 1 · Sitio web** | **Canal 2 · Anuncio → WhatsApp** | **Canal 3 · Consola del asesor** |
|---|---|---|---|
| **Origen** | Búsqueda orgánica en Google, las 49 fichas de Google Business y, por separado, el tráfico de pago que aterriza en el sitio | Anuncios de Meta y TikTok con clic-a-WhatsApp | Walk-in en club y llamada telefónica |
| **La persona se identifica** | Al completar el cuestionario | **Desde el primer mensaje** (el teléfono es suyo) | **Desde el inicio** (lo captura el asesor) |
| **Llave** | `web_session_id` (anónimo) → `session_uuid` | Teléfono en E.164 + referencia del anuncio | Operador + club + `session_uuid` |
| **Recorrido individual** | De E2 en adelante | **Completo, desde el clic** | Completo |
| **Solo como tasa** | El tramo C1 → E2 | — | — |

**El Canal 2 es el único que permite seguir a una persona del clic en el anuncio hasta la cancelación de su membresía, sin cortes.** En el Canal 1, el tramo de tráfico a cuestionario se mide como tasa, porque la analítica web no expone personas; esto es una propiedad de la medición web, no una limitación del proyecto, y el tablero debe presentarlo como tal.

### Cortes de reporte del Canal 1

El Canal 1 se reporta en tres cortes que **no deben mezclarse**, porque miden cosas distintas y uno de ellos es un KPI contractual:

- **1a · Orgánico** — el desempeño de la estrategia de posicionamiento. Es el corte que sustenta el KPI de cobertura de keywords unbranded (31.1% → 55–65%).
- **1b · Pago a sitio** — los anuncios que llevan a una landing con el cuestionario en lugar de a WhatsApp. Se separa del orgánico para que la inversión en pauta no contamine la lectura del resultado de SEO.
- **1c · Fichas de Google Business** — las 49 fichas son un entregable del proyecto y Google reporta sus métricas por separado (vistas, llamadas y solicitudes de indicaciones). Es la medición que demuestra el valor de haberlas creado.

## 3 · El mapa completo

Para cada etapa: qué mide, **cuándo cuenta exactamente**, de dónde se obtiene el dato y quién otorga el acceso.

### Entradas

| Etapa | Cuenta cuando… | Fuente del dato | Acceso requerido | Responsable |
|---|---|---|---|---|
| **E0 · Alcance de campaña** | El anuncio se muestra | Meta Business Manager · TikTok Ads | Lectura de las cuentas publicitarias | **SW Marketing** con líder IT (Anexo Uno E.8, E.9) |
| **C1a · Tráfico orgánico** | Se inicia una sesión desde búsqueda no pagada | GA4 (Data API) + Search Console API | Propiedad GA4 con administración y Data API habilitada; propiedad GSC verificada | **SW Marketing** (Anexo Uno E.4) |
| **C1b · Tráfico de pago al sitio** | Se inicia una sesión con parámetros de campaña | GA4 + parámetros `utm` | El mismo acceso GA4, más el contenedor de Tag Manager | **SW Marketing** (Anexo Uno E.4) |
| **C1c · Fichas de Google Business** | Google registra vista, llamada o solicitud de indicaciones | Google Business Profile API | Titularidad o administración de las 49 fichas | **SW Marketing** (Anexo Uno E.4) |
| **C2 · Clic de anuncio a WhatsApp** | Entra el primer mensaje del prospecto | WhatsApp Business API — el mensaje llega con la referencia del anuncio y de la campaña | Número oficial de WhatsApp Business, verificación del negocio en Meta y plantillas aprobadas | **SW Marketing y Sistemas** (Addendum BDS §4) |
| **C3 · Captura en consola** | El asesor u operador abre un cuestionario nuevo | La propia consola (entregable del proyecto) | Lista de personal autorizado, plantilla de operadores y horarios | **SW Operación** |

### Espina de conversión

| Etapa | Cuenta cuando… | Fuente del dato | Acceso requerido | Responsable |
|---|---|---|---|---|
| **E2 · Cuestionario iniciado** | Se responde la **primera** pregunta — no al ver la pantalla | Evento de instrumentación del proyecto | Contenedor de Tag Manager | **EL PRESTADOR** construye · **SW Marketing** provee el contenedor |
| **E3 · Cuestionario completado** | Se genera la experiencia ideal (la respuesta del modelo se recibe) | Evento propio del middleware | Ninguno externo | **EL PRESTADOR** |
| **E4 · Visita agendada** | **La escritura al CRM se confirma** — no cuando el usuario da clic | Respuesta del API del CRM a la creación de prospecto | Credenciales productivas, punto de acceso de creación de prospecto e idempotencia | **SW Sistemas** (Anexo Uno B.1, B.2, B.3, D.4) |
| **E5 · Visita realizada** | El CRM marca la asistencia del prospecto | CRM, vía middleware — webhook firmado o consulta diaria | Que el API exponga el estado de la visita (agendada → proporcionada) | **SW Sistemas** (Anexo Uno, catálogo de datos y B.4) |
| **E6 · Membresía comprada** | El CRM registra la activación | CRM o, en su defecto, base periódica de membresías nuevas | El dato de activación **con número de membresía y teléfono** | **SW Sistemas** — *requiere ajuste del Anexo Uno, §6* |
| **E7 · Membresía cancelada** | El CRM registra la baja | CRM o base periódica de cancelaciones | El dato de cancelación **por número de membresía** | **SW Sistemas** — *no previsto hoy en el Anexo Uno, §6* |

### Ejes transversales

| Eje | Qué mide | Fuente | Responsable |
|---|---|---|---|
| **Tiempo al primer contacto** | Del clic en el anuncio al primer mensaje del operador o de BES. **Solo aplica al Canal 2**; es el KPI rector del Proyecto B | Capa de enrutamiento del BDS | **EL PRESTADOR** |
| **Atribución de origen** | Conserva canal, campaña y página de entrada de cada prospecto **hasta E7** | Se sella en la entrada y viaja con el `session_uuid` | **EL PRESTADOR** |

## 4 · Dónde vive el dato

La base de datos del funnel reside **en el servidor que proporciona Sports World** (Anexo Uno, Bloque F). Los datos personales no residen en sistemas de EL PRESTADOR y el tablero presenta únicamente resultados agregados, conforme a la Cláusula Décima Octava.

**Frecuencia.** Las etapas E0 a E4 se registran en el momento en que ocurren. Las etapas E5, E6 y E7 se obtienen del CRM con la **sincronización diaria de corte 06:00** o con la periodicidad de la entrega pactada cuando el dato no reside en el CRM.

## 5 · Llaves de unión entre etapas

| Tramo | Llave | Nota |
|---|---|---|
| **C1 → E2** | `web_session_id` y `utm` | Tráfico anónimo: se mide como **tasa de conversión**, no como recorrido individual |
| **C2 → E2** | Teléfono en E.164 | El prospecto escribe desde su propio número: vinculación directa y validada por el canal |
| **E2 → E4** | `session_uuid` | Llave de idempotencia de la sesión; una sola escritura por prospecto |
| **E4 → E5 → E6** | **nombre + apellido + teléfono + club** | El teléfono es la llave principal; nombre, apellido y club resuelven homonimia |
| **E6 → E7** | **número de membresía** | Única llave estable posterior a la compra |

## 6 · Los tres datos de cierre

La mitad baja del funnel —visita realizada, membresía comprada y membresía cancelada— se alimenta de tres datos que provienen del CRM y constan en el Anexo Uno:

1. **Número de membresía** en el registro de membresía nueva (E6). Es la única llave estable posterior a la compra: sin ella, la cancelación no puede vincularse con la membresía que la originó.
2. **Teléfono del nuevo socio** en ese mismo registro (E6), en formato E.164. Es lo que permite vincular la compra con el lead que la originó y, con ello, atribuir el resultado al canal.
3. **Registro de cancelación** (E7): número de membresía, fecha y —cuando el CRM lo registre— motivo. Habilita la medición de retención y la lectura de qué segmento cancela.

Los tres se entregan por API o por entrega periódica, bajo el mismo régimen y las mismas salvaguardas. La conciliación ocurre **dentro de la infraestructura de Sports World** y el dashboard presenta **únicamente resultados agregados**: los datos personales no residen en sistemas de EL PRESTADOR.

## 7 · Qué se puede medir desde el día uno

| Disponible sin depender de terceros | Depende de accesos de Sports World |
|---|---|
| E2, E3, E4 · los dos ejes transversales · el funnel completo del Canal 3 | E0, C1a, C1b, C1c (accesos de Marketing) · C2 (número oficial de WhatsApp) · **E5, E6 y E7 (Sistemas)** |

**La mitad baja del funnel —visita realizada, membresía comprada y membresía cancelada— es un requerimiento a cargo de Sports World, no un entregable de EL PRESTADOR.** El proyecto construye la instrumentación y el tablero; el dato de cierre lo aporta el CRM. Conviene que esto quede explícito en la conversación con Sistemas: sin esos tres accesos, el funnel se mide hasta la visita agendada.

## 8 · Relación con el Contrato

El Contrato compromete **cuatro etapas** (Anexo Dos): tráfico → visita guiada agendada → visita guiada proporcionada → nueva membresía. Este mapa **las contiene**: corresponden a C1a, E4, E5 y E6. Las demás etapas son extensión de la medición, no ampliación del alcance.

En consecuencia, el tablero ejecutivo presenta **las cuatro etapas contractuales como titular** y las restantes como detalle operativo — sin que ello modifique el Contrato ni sus KPIs comprometidos.

## 9 · Tasas de conversión que se derivan

| Tasa | Qué revela |
|---|---|
| Tráfico → cuestionario iniciado | **Interés**: si la página convence de participar |
| Iniciado → completado | **Fricción**: si el cuestionario es demasiado largo o pide algo incómodo |
| Completado → visita agendada | **Intención**: si la experiencia ideal convence de visitar |
| Agendada → realizada | **Asistencia**: la efectividad del recordatorio y de la confirmación |
| Realizada → comprada | **Cierre**: el desempeño del asesor — el indicador que la Academia mueve |
| Comprada → cancelada (30/90/180 días) | **Retención**, leída por cohorte, no como porcentaje suelto |
| Tráfico → membresía | El resultado de punta a punta del sistema |
