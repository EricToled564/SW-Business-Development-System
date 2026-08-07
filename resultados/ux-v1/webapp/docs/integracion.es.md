# Sports World México · Integración de Datos
## Campos exactos del CRM, escritura del prospecto y base de datos del funnel

Este documento define, campo por campo, la integración de datos entre los sistemas de Sports World y las plataformas del proyecto: **qué se lee del CRM y del sistema de ventas**, **qué se escribe de vuelta**, y **cómo se construye la base de datos del funnel** que liga el tráfico digital con las membresías compradas y canceladas. Es la especificación operativa de lo que el Contrato establece en la Estrategia Técnica (§2 y §10) y en el Anexo Uno (catálogo de datos y Bloques A, B y D).

---

## 1 · Principio rector: se extrae una sola vez y se comparte

Ningún componente del proyecto le pega directamente al CRM por su cuenta. La **capa de middleware de EL PRESTADOR** extrae cada dato **una sola vez por ciclo de sincronización**, lo guarda en una **base de datos compartida** (alojada en el servidor de Sports World, Anexo Uno Bloque F), y de esa base leen todos los consumidores: el sitio web, el agente "BES", la consola interna de captación y el dashboard del funnel.

Esto tiene tres consecuencias prácticas:

- **Una sola carga sobre el CRM.** El CRM recibe un flujo de consultas predecible y acotado (el del middleware), no el tráfico del sitio. Los límites de tasa del CRM (Anexo Uno B.6) se respetan por diseño.
- **Consistencia total.** El sitio, BES y la consola nunca se contradicen: leen exactamente los mismos datos, de la misma base, sincronizados en el mismo momento.
- **Resiliencia.** Si el CRM tiene una intermitencia, los consumidores siguen operando con el último dato sincronizado; el middleware reintenta con espera incremental hasta restablecer el flujo.

**Frecuencias de sincronización** (Anexo Uno, catálogo de datos):

| Datos | Frecuencia |
|---|---|
| Tarifas, descuentos y promociones | Tiempo real (caché corto) |
| Clases por club: días, horarios y fechas | Tiempo real (caché corto) |
| Estatus del club, horarios de atención, amenidades | 1 vez al día |
| Coordenadas de clubes | Semilla en código, editable sin código en el CMS |
| Estado de visita y membresías (funnel) | 1 vez al día (o según el corte pactado, §5) |

## 2 · Alcance de canales: dónde opera BES

"BES" atiende **únicamente la entrada digital**: usuarios que hacen click en un anuncio en redes sociales (que dirige a WhatsApp) o que llegan a la página web (voz y texto integrados al sitio). **BES no contesta el teléfono de los clubes** ni se integra al conmutador para llamadas entrantes; la telefonía aparece en el proyecto solo en el sentido inverso — cuando BES **escala un prospecto a un operador humano** (transferencia por SIP a un número o cola, derivación a un operador de WhatsApp, o devolución de llamada agendada; Anexo Uno D.7).

**No se solicita a Sports World un punto de acceso de consulta de socios.** Los datos de socios actuales no se leen en la operación de captación. Si un socio actual escribe por los canales de captación (le ocurre a cualquier marca: el número de WhatsApp del anuncio es el número visible), BES responde con la base de conocimiento general y no le agenda visita; cualquier caso residual que llegara a entrar al funnel se depura en el cruce con la base de membresías (§6).

## 3 · Lecturas: campos exactos que se extraen del CRM

### 3.1 Tabla `clubes` — sincronización diaria

| Campo | Contenido |
|---|---|
| `club_id` | Identificador del club en el CRM |
| `nombre_club` | Nombre comercial del club |
| `estatus` | `activo` · `cerrado_temporal` · `cerrado_definitivo` |
| `latitud`, `longitud` | Coordenadas geográficas (semilla en código; el CRM es fuente válida para actualizarla) |
| `direccion` | Calle y número |
| `ciudad` | Ciudad / plaza |
| `codigo_postal` | Código postal |
| `telefono_club` | Teléfono del club |
| `correo_club` | Correo del club (destino del requerimiento de visita, §4) |
| `horarios_atencion` | Por día de la semana: hora de apertura y hora de cierre |
| `amenidades[]` | Lista de amenidades del club: alberca, sauna, pádel, FitKidz, spa, etcétera |

### 3.2 Tabla `clases` — tiempo real

| Campo | Contenido |
|---|---|
| `clase_id` | Identificador de la clase en el CRM |
| `club_id` | Club donde se imparte |
| `nombre_clase` | Nombre de la clase |
| `descripcion` | Descripción de la clase |
| `dia_semana` | Día de la semana en que se imparte (lunes a domingo); si la clase se repite varios días, una fila por día |
| `hora_inicio` | Hora de inicio (HH:MM) |
| `hora_fin` | Hora de término (HH:MM) |
| `fechas` | Fechas concretas de la semana visible — el Anexo Uno pacta **visibilidad de una semana**, con periodicidad mínima semanal de las clases |
| `instructor` | Instructor, si el CRM lo registra |
| `salon` | Salón o área, si el CRM lo registra |

### 3.3 Tabla `tarifas` — tiempo real

| Campo | Contenido |
|---|---|
| `plan_id` | Identificador del plan |
| `nombre_plan` | Individual, Multiclub, FitKidz, entrenamiento personal y otros servicios |
| `nivel_precio` | Nivel al que el CRM define el precio: `club` · `ciudad` · `nacional` — el motor de precios del sitio resuelve y replica por club según la regla pactada |
| `club_id` | Club, cuando el precio varía por club |
| `precio` | Precio de lista (MXN) |
| `inscripcion` | Cuota de inscripción, si aplica |
| `vigencia_desde`, `vigencia_hasta` | Ventana de validez del precio |
| `promocion_id` | Identificador de la promoción, si aplica |
| `descripcion_promo` | Texto de la promoción |
| `descuento` | Monto o porcentaje del descuento |
| `vigencia_promo` | Ventana de validez de la promoción |

> Las tarifas, los descuentos y las promociones **se extraen automáticamente del CRM y no se capturan ni editan en el CMS** (Anexo Uno, nota de tarifas).

## 4 · Escritura: el prospecto en el CRM

Existe **una sola operación de escritura**, compartida por los tres canales de captación — el sitio web, BES (WhatsApp y web) y la consola interna del personal autorizado —, de modo que todo lead llega al pipeline con formato idéntico.

### Registro `prospecto` — creación/actualización idempotente

| Campo | Contenido |
|---|---|
| `session_uuid` | **Llave de idempotencia** de la sesión: si el prospecto modifica y reconfirma, se actualiza el mismo registro — nunca se duplica (Anexo Uno B.3 / D.4) |
| `nombre` | Nombre(s) — campo separado del apellido |
| `apellido` | Apellido(s) |
| `telefono` | Teléfono en formato E.164 (+52…) — llave de conciliación del funnel (§6) |
| `correo` | Correo electrónico |
| `club_id` | Club elegido |
| `fecha_visita` | Día solicitado para la visita guiada |
| `horario_visita` | Horario solicitado, dentro del horario de atención del club |
| `perfil[]` | Respuestas del cuestionario: objetivo, experiencia, horario preferido, acompañantes, amenidades de interés |
| `canal_origen` | `web` · `bes_whatsapp` · `consola` |
| `utm_source`, `utm_medium`, `utm_campaign` | Atribución de campaña, cuando el lead proviene de una |
| `timestamp` | Fecha y hora de creación o de última actualización |

**La visita guiada no se reserva ni se verifica disponibilidad**: el día y horario elegidos se registran en el prospecto y se envían **por correo al club** como requerimiento (al `correo_club` de §3.1). No existe integración con sistema de reservas alguno.

## 5 · Base de datos del funnel

El funnel completo vive en una base de datos **dentro de la infraestructura de Sports World** (el servidor del Bloque F), de modo que los datos personales nunca residen en sistemas de EL PRESTADOR (Cláusula Décima Octava). Extiende las cuatro etapas del funnel contractual (tráfico → visita agendada → visita proporcionada → nueva membresía, Anexo Dos) con dos etapas adicionales de operación: el **click al WhatsApp de BES** al inicio y las **membresías canceladas** al cierre.

| # | Etapa | Fuente | Campos |
|---|---|---|---|
| 1 | **Tráfico a la página** | GA4 (agregado, sin datos personales) | `fecha` · `pagina` · `sesiones` · `tiempo_en_pagina` · `punto_salida` · `utm` |
| 2 | **Click en el link de WhatsApp (BES)** | Evento de instrumentación (GTM/GA4) | `timestamp` · `pagina_origen` · `web_session_id` · `utm` |
| 3 | **Visita agendada** | Nuestra propia escritura (§4) — no requiere lectura adicional | `lead_id` (= `session_uuid`) · `nombre` · `apellido` · `telefono` · `correo` · `club_id` · `fecha_visita` · `horario_visita` · `canal_origen` · `utm` |
| 4 | **Visita realizada** | Lectura del CRM: estado de la visita del prospecto (agendada → realizada) | llave de conciliación (§6) · `fecha_realizada` |
| 5 | **Membresía comprada** | CRM o, en su defecto, base periódica de membresías nuevas (corte semanal o mensual, según la operación del cliente — Anexo Uno, vía alternativa) | `nombre` · `apellido` · `telefono` · `club` · **`numero_membresia`** · `tipo_plan` · `fecha_activacion` |
| 6 | **Membresía cancelada** | CRM o base periódica de cancelaciones | **`numero_membresia`** · `fecha_cancelacion` · `motivo` (si el CRM lo registra) · `club` · `tipo_plan` |

La etapa 6 habilita además el **análisis de retención**: al ligar cada cancelación con el perfil de origen del funnel (objetivo, club, canal, campaña), el dashboard puede mostrar qué segmentos cancelan más y alimentar decisiones de retención.

## 6 · Llaves de conciliación entre etapas

| Tramo | Llave | Nota |
|---|---|---|
| **1 → 2 → 3** (tráfico → click → lead) | `web_session_id` y `utm` cuando existen; **a nivel de tasas de conversión** cuando el tráfico es anónimo | GA4 no expone personas; la conversión sesiones → clicks → leads se mide como tasa. Cuando el lead entra por WhatsApp, su teléfono **es** el teléfono del canal: liga directa. |
| **3 → 4 → 5** (lead → visita realizada → membresía) | **`nombre` + `apellido` + `telefono` + `club`** | El teléfono en E.164 es la llave fuerte; nombre, apellido y club desempatan homónimos. |
| **5 → 6** (membresía → cancelación) | **`numero_membresia`** | Única llave estable tras la compra. |

> **Requisito crítico para Sports World:** la base o lectura de **membresías nuevas (etapa 5) debe incluir el `numero_membresia` y el `telefono`** del nuevo socio. Sin el número de membresía, las cancelaciones no pueden ligarse de vuelta al funnel; sin el teléfono, la compra no puede ligarse con el lead que la originó.

> **Ajuste al Anexo Uno.** El Anexo Uno describe la conciliación de membresías nuevas por *nombre y apellido, con el código postal como verificación*. Esta especificación la sustituye por **nombre + apellido + teléfono + club**, que es más confiable; el ajuste se reflejará en la próxima revisión del Anexo. El principio se mantiene intacto: la conciliación ocurre **dentro del servidor de Sports World** y el dashboard presenta **únicamente resultados agregados**.

## 7 · Requerimientos técnicos al CRM para esta integración

Los que ya constan en el Anexo Uno, aterrizados a esta especificación:

1. **Documentación OpenAPI/Swagger o Postman** de los servicios de clubes, clases, tarifas y prospecto, con esquemas, errores y ejemplos (A.1), y **esquemas JSON reales** de 3 clubes y 5 clases (A.3).
2. **Sandbox** con credenciales vía bóveda compartida (A.2) y **credenciales productivas** en cuenta de servicio dedicada, limitadas a estos puntos de acceso (B.1).
3. **Autenticación**: Bearer Token, OAuth 2.0/2.1, JWT, mTLS o llave equivalente, con alcance y rotación (B.2).
4. **Idempotencia** en la creación de prospecto — o, si el CRM no la soporta, se resuelve en el middleware (B.3).
5. **Notificación de eventos** (visita realizada, membresía activada): webhook firmado (HMAC-SHA256) con identificador de evento, marca de tiempo y reintentos — o polling acordado (B.4). Para las etapas 5 y 6 del funnel, en su defecto, la **entrega periódica** de las bases de membresías nuevas y cancelaciones con corte semanal o mensual.
6. **SLA de latencia**: percentil 95 **< 500 ms** en lecturas y **< 800 ms** en la creación de prospecto (B.5 / D.5), alcanzable con la caché del middleware.
7. **Política de límites de tasa** documentada: peticiones por minuto/hora, ráfagas y cabecera `Retry-After` (B.6).

## 8 · Seguridad y minimización

Conforme a la Cláusula Décima Octava y al documento de Seguridad del sitio: **cifrado en tránsito (HTTPS/TLS)** en toda la integración; **mínimo privilegio** en credenciales (solo los puntos de acceso listados); **llaves de desarrollo separadas de las productivas**, con titularidad de Sports World; **bitácoras sin datos personales**; y **no retención** — los datos personales del funnel viven en el servidor de Sports World (Bloque F), el dashboard consume únicamente agregados, y los sistemas de EL PRESTADOR no conservan copia.
