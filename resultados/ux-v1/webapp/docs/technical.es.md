# Sports World México · Estrategia Técnica · V2.0
## Stack, integraciones, SEO técnico, contenido visual, el agente BES, la migración del sitio y los controles de calidad

Documento fundacional. Explica, en términos claros y con las herramientas específicas nombradas, **qué** tecnología construye la experiencia, **cómo** se construye —el método de trabajo y los controles de calidad—, **cómo se conecta** con los sistemas de Sports World y **cómo se migra** del sitio actual al nuevo sin interrumpir el correo ni perder posicionamiento. Está redactado para que la dirección, el equipo de sistemas/TI y cualquier proveedor externo lo comprendan sin ambigüedades; donde una decisión es relevante para Sports World, se expone la razón. Cada entregable técnico aquí descrito corresponde, uno a uno, con el alcance contractual del **[Contrato · Anexo Dos, Sección I](#contrato:seccin-i-entregables-del-servicio-i-rediseo-web-con-enfoque-en-posicionamiento-o)**, y cada dependencia que se pide a Sports World está catalogada en el **[Contrato · Anexo Uno](#contrato:anexo-uno-aportaciones-de-sports-world-requerimientos-a-cargo-del-cliente)**.

Un único supuesto sustenta la integración: **Sports World expone una API para su sistema de clientes (CRM).** Todo lo demás que el proyecto requiere lo aporta el equipo de entrega.

## 1 · El sitio web — stack y por qué

El sitio se construye sobre la generación actual del framework profesional más utilizado para sitios orientados a contenido y optimizados para búsqueda. El contrato fija el stack (**Next.js, React, TypeScript y Tailwind, con SSR e ISR y CMS desacoplado**); aquí se nombran las versiones y la razón de cada una:

- **Next.js 16** (App Router), con **renderizado del lado del servidor (SSR)** y **Regeneración Estática Incremental (ISR)**. El renderizado en servidor es el requisito técnico más importante del proyecto: corrige de raíz el problema del sitio anterior, cuyas páginas de club Google no podía leer (diagnóstico en **[Auditoría inicial](#auditoria:el-gigante-invisible-diagnstico-de-captura-de-demanda-digital)**). ISR permite que el contenido se actualice sin reconstruir todo el sitio.
- **React 19** con el **React Compiler** habilitado (memoización automática, sin ajustes manuales), para mantener el sitio rápido sin trabajo manual de optimización.
- **TypeScript** en modo estricto en todo el código, lo que detecta una amplia clase de errores antes de producción.
- **Tailwind CSS v4** sobre un conjunto reducido de **tokens de diseño de marca** (color, tipografía, espaciado), de modo que cada página sea consistente y fiel a la marca por construcción. Estos tokens nacen del brand book que aporta Sports World (Anexo Uno E.1).
- **Fuentes web variables, autoalojadas** (`next/font`), para una tipografía rápida y fiel a la marca, sin llamadas a terceros.
- **Node.js 20.9 o posterior** como runtime (requerido por Next.js 16). La especificación dimensionada del servidor está en **[Plan de Ejecución · §4](#execution:4-el-servidor-donde-corre-el-sitio)**.
- **Caché agresivo** (`'use cache'`, `cacheLife`, `cacheTag`) para servir la mayoría de las vistas desde caché y reservar el cómputo para el trabajo dinámico y los picos de tráfico.
- **CMS desacoplado (headless) autoalojado** en el servidor de Sports World —por ejemplo Payload o Strapi, sobre Node.js junto al sitio—, de modo que el panel de edición no-code viva en la infraestructura de Sports World, sin dependencia de un servicio externo. Al guardar un cambio, la página se revalida con `cacheTag` e ISR. La elección final se confirma al inicio (detalle en **[Mapa del Sitio · CMS](#site:el-panel-de-actualizacin-sin-cdigo-cms)**).
- **Alojamiento en el servidor propio de Sports World**, no en una plataforma de terceros, para que el sitio permanezca por completo bajo el control y la propiedad de Sports World.

El estándar de calidad es concreto y medible —**Core Web Vitals** (LCP < 2.5 s, INP < 200 ms, CLS < 0.1), optimización de imágenes (**AVIF/WebP** responsivas) y accesibilidad **WCAG 2.2 AA**— y se verifica automáticamente en cada cambio (§8).

## 2 · Los cuatro datos y las integraciones con Sports World

La experiencia personalizada cruza lo que el usuario quiere con los datos operativos de Sports World y escribe de vuelta el lead cualificado en el CRM. El contrato exige la **integración en vivo de los datos por API** más una escritura.

**Lecturas (los cuatro datos operativos).** Clubes (nombres, direcciones, amenidades, geolocalización), clases (catálogo, niveles, horarios), membresías (catálogo con precios y términos) y **horarios de atención** de cada club. Las porciones **volátiles** (si un club está abierto, si una clase sigue impartiéndose y a qué hora) se leen en vivo; las porciones **estables** (direcciones, lista de disciplinas) se sincronizan de forma programada. Corresponde a los puntos de acceso D.1–D.3 y a la base de conocimiento (D.6) del Anexo Uno.

**Escritura (la operación en tiempo real).** Creación del **lead cualificado** —nombre, teléfono, correo, perfil completo, club elegido y el **día y horario de visita solicitados**— en el CRM, en el momento en que el prospecto confirma, vía **webhook** hacia el CRM. La operación es **idempotente por sesión** (llave de idempotencia / UUID): si el prospecto modifica y reconfirma, se actualiza el mismo registro en vez de duplicarlo (Anexo Uno B.3 y D.4). **La visita guiada no se reserva ni se verifica disponibilidad**: el día y horario elegidos —dentro del horario de atención del club— se registran en el prospecto y se envían por correo al club como requerimiento; no existe integración con sistema de reservas alguno.

**Lo que esto exige de Sports World (catalogado en el Anexo Uno).** Una especificación **OpenAPI** y un sandbox del CRM (Bloque A); credenciales productivas con un esquema de **autenticación** (OAuth 2.1 con credenciales de cliente, mTLS, o llave de acceso con alcance y rotación), webhook firmado y límites de tasa (Bloque B); y, de manera explícita, un **SLA de latencia de la API de Sports World**: percentil 95 **< 500 ms** para las lecturas (D.1–D.3) y **< 800 ms** para la creación de prospecto (D.4) (Anexo Uno D.5). Estas cifras son el SLA de la API del cliente; **no deben confundirse con el objetivo conversacional de BES** (§6).

La arquitectura está construida para que la lógica de recomendación no dependa de si el dato llegó en vivo o de una sincronización reciente —lo que significa que la integración puede comenzar simple y robustecerse después sin reescribir el núcleo. Las necesidades de actualización propias del flujo se especifican en **[Arquitectura de Experiencia · §5](#experience:5-integracin-de-datos-y-fuentes-de-verdad)**.

## 3 · SEO técnico y datos estructurados

El objetivo de negocio (llevar la cobertura unbranded del 31.1% al 55–65%) se sostiene en una capa técnica concreta:

- **Datos estructurados (schema markup) en JSON-LD**, generados en el render de cada página y validables contra los **Rich Results** de Google, por tipo de página: **HealthClub** y **LocalBusiness** para las páginas de club —con coordenadas GPS verificadas, horarios y teléfono—, **Course** para las páginas de clase, **FAQPage** para las secciones de preguntas frecuentes y **BreadcrumbList** para la navegación. Esto es lo que le confirma a Google que Sports World efectivamente ofrece cada servicio en cada ubicación.
- **Arquitectura y enlazado** de las 148 páginas con jerarquía, rutas limpias y enlazado interno (el inventario completo está en **[Mapa del Sitio](#site)**), más los **hubs semánticos** por amenidad y por ubicación que el sitio anterior no tenía.
- **Producción de contenido a escala con control editorial.** **Seis plantillas maestras** para contenido asistido por IA en español de México; las 148 páginas con contenido único; revisión humana por especialistas de SEO antes de publicar, de modo que el volumen no se logre a costa de la precisión ni de la voz de marca.
- **Estándar reforzado YMYL para salud.** La matriz de beneficios de las **54 clases para adultos cruzada con los 5 perfiles** se valida contra literatura médica, y el hub **"Bajar de Peso"** se publica con la firma del médico designado por Sports World (cédula vigente visible). El modelo de lenguaje que asiste el contenido opera bajo restricciones YMYL y saneamiento (ver **[Arquitectura de Experiencia · §4.15](#experience:415-restricciones-ymyl-del-llm-y-saneamiento)**).
- **Las 49 fichas de Google Business** se crean y optimizan mediante la herramienta oficial (**Google Business Profile API, con OAuth 2.0**, el esquema que esa API de Google requiere). Para las más de 10 ubicaciones se usa la verificación masiva por hoja de cálculo que Google ofrece a las cadenas. **Restricción honesta**, documentada en el plan: la API gestiona y optimiza fichas existentes, pero **no crea nuevas**; una ficha nueva requiere la verificación propia de Google —que Google controla y que toma tiempo— más la aprobación del acceso a la API, que Google otorga a lo largo de semanas. Por eso el proceso inicia en la Semana 1 (**[Aportaciones de Sports World · Titularidad en Google](#aportaciones:titularidad-en-google-para-las-49-fichas)**).
- **Medición.** Configuración de Google Search Console y GA4 desde el inicio, y reporte ejecutivo semanal.

## 4 · Contenido visual a escala

El contenido visual combina tres fuentes, no una sola, conforme al alcance contractual (Anexo Dos I.3):

- **Tratamiento de ~650 fotografías del banco de Sports World** —normalización de estilo, recorte, resolución y formato— para que el material existente conviva con una sola identidad visual.
- **~150 imágenes nuevas producidas por IA** mediante una **aplicación a la medida** construida para este proyecto, que aplica automáticamente un **estilo artístico consistente** en todo el resultado y la **resolución correcta** para cada uso (hero, cards, thumbnails), de modo que las imágenes resulten nítidas donde se requiere y ligeras donde prima la velocidad.
- **12 animaciones de 10 segundos** y **1 video institucional de 45–60 segundos** para el hub "Bajar de Peso".

Todo el material se entrega en **AVIF/WebP responsivos**. Este pipeline automatizado y supervisado es lo que hace viable producir el contenido visual de 49 clubes y cientos de páginas en el tiempo disponible: sustituye miles de ediciones manuales sin sacrificar consistencia. El motor interno de la aplicación se confirma al inicio del proyecto; aquí se describe por su función.

Además del contenido de cara al público, el proyecto entrega un **tablero ejecutivo en tiempo real** para Sports World —tráfico, captura de leads y avance del proyecto— de modo que la dirección vea el desempeño sin depender de reportes manuales.

## 5 · BES, el agente de voz y texto

BES es un agente conversacional de IA **de voz y texto, integrado al sitio web**: su operación se limita al **canal web** del sitio, con voz sintética natural en español de México e interacción bidireccional por voz y texto. Atiende a los prospectos en lenguaje natural dentro del sitio, resuelve preguntas comunes, los guía hacia el club correcto y la visita guiada, y captura leads cualificados —el mismo resultado que produce el formulario del sitio, pero a través de la conversación—. Además, envía **2 recordatorios automatizados por WhatsApp** (24 h y 2 h antes de la visita) y el **resumen del prospecto por correo al club**. **No opera por teléfono ni como chat conversacional de WhatsApp** (ese alcance está excluido en el Contrato, Cláusula Primera II).

**Flujo conversacional.** La responsabilidad de BES es **aplicar el cuestionario y entregar la experiencia ideal** al prospecto que así lo desee, o bien **asistirle con la solicitud de una visita guiada** en un club que el usuario ya tenga elegido. En ambos casos, BES informa al prospecto que requiere **un minuto de su tiempo** para completar el cuestionario y le ofrece dos modalidades:

1. **Pregunta por pregunta.** BES plantea cada pregunta y le presenta al usuario las opciones de respuesta.
2. **Cuestionario pre-llenado para confirmar.** BES presenta el cuestionario con las respuestas que ya pudieron **inferirse** —por declaraciones del propio usuario o por la página desde la que llega— mostradas pre-cargadas, y le pide al usuario que las **confirme**; si no confirma alguna, BES le ofrece las opciones de respuesta normales.

Al concluir, BES **reconfirma el club ideal** y procede a solicitar la **fecha y hora de la visita** y los **datos de contacto** necesarios (apellido, celular y correo). **Solo una vez confirmada la visita**, BES informa al prospecto que su **experiencia ideal se le ha enviado por correo** y que sus **preferencias se han comunicado al asesor** que lo atenderá durante la visita guiada. Por último, BES pregunta si hay algo más en lo que pueda ayudar: de ser así, continúa; en caso contrario, concluye la conversación.

Por debajo, el agente se ensambla a partir de cuatro capas, todas operando dentro del sitio:

- **Reconocimiento de voz (ASR):** convierte el habla del usuario en el sitio en texto en tiempo real (por ejemplo, Deepgram). Solo modo voz.
- **Razonamiento (un modelo de lenguaje):** entiende lo que el prospecto quiere, decide cómo responder y usa la **misma lógica de clubes, clases y leads que impulsa el sitio** (por ejemplo, Claude o un modelo equivalente de frontera), de modo que la respuesta sea consistente con la del sitio. Es la capa compartida entre el modo voz y el modo texto.
- **Síntesis de voz (TTS):** convierte la respuesta en voz natural en español-México, con una calidad que evita el efecto robótico (por ejemplo, ElevenLabs). Solo modo voz.
- **Capa de orquestación (en el sitio):** integra el agente al sitio web, gestiona el flujo de cada conversación de voz y texto, dispara los 2 recordatorios automatizados por WhatsApp y el resumen por correo al club, y ejecuta el traspaso a un humano cuando se requiere (por ejemplo, Vapi o Retell para la orquestación conversacional).

**Base de conocimiento (RAG).** BES no inventa sus respuestas: además de leer los datos operativos en vivo, consulta una base de conocimiento —catálogo de membresías con precios y términos, clases con descripciones, políticas de cancelación y congelamiento, e información operativa por club— que Sports World mantiene con actualización semanal mínima durante el proyecto (Anexo Uno D.6). Escribe los leads en el mismo CRM y por la misma API que el sitio (D.4), de modo que BES y el sitio nunca se contradigan y un lead capturado por BES llegue al pipeline exactamente igual que uno del sitio.

**Escalación a humano.** Cuando el prospecto lo necesita, BES traspasa de forma limpia mediante la estrategia que defina Sports World: transferencia por **SIP** a un número/cola, derivación a un operador de WhatsApp, o devolución de llamada agendada en el CRM (Anexo Uno D.7).

**Dos métricas de latencia, que no deben confundirse.** (1) El **objetivo conversacional de BES** —el tiempo total para que la conversación se sienta humana— es **por debajo de ~900 ms** (estándar reconocido de la industria). (2) Ese objetivo solo es alcanzable si las **APIs de Sports World** cumplen su propio SLA: p95 **< 500 ms** en lecturas y **< 800 ms** en la escritura de prospecto (Anexo Uno D.5). La primera es responsabilidad del agente; la segunda, de las APIs del cliente. Los componentes exactos se eligen al inicio frente a tres requisitos: voz natural en español-México, esa latencia conversacional, y el traspaso limpio a un asesor humano.

**Dónde corre BES.** BES **no reside en el servidor del sitio**: se ejecuta en las **plataformas gestionadas de sus proveedores** —la voz en **ElevenLabs**, además del reconocimiento de voz, el modelo de razonamiento y la capa de orquestación—. Por eso el dimensionamiento del servidor del sitio (Plan de Ejecución §4) no incluye a BES, y los **costos de operación de BES los cubre directamente Sports World** a esos proveedores (Contrato, Cláusula Sexta Bis).

## 6 · La migración del sitio actual al nuevo (sin interrumpir el correo ni perder posicionamiento)

La migración es un entregable técnico de primer orden (Anexo Dos I.2 e I.3) y la fase de mayor riesgo del proyecto, porque el DNS no solo apunta al sitio: también enruta el **correo corporativo (registros MX)** y, potencialmente, otros servicios. El método protege todo eso de forma explícita. La vista de entregable está en **[Entregables · §2](#deliverables:2-migrar-el-sitio-actual-al-nuevo-protegiendo-el-correo-y-el-dns)**; el método técnico es el siguiente:

- **Inventario de DNS previo.** Antes de tocar nada se levanta un inventario completo de los registros DNS actuales, separando los del sitio web de los de correo (MX) y otros servicios. **Solo se migran los registros del sitio**; los de correo no se modifican.
- **Mapa de redirecciones 301.** Se construye un mapa que cubre los **136 enlaces rotos** detectados en la auditoría —**116 redirecciones 301** de direcciones antiguas a las nuevas y la corrección de las **20 URLs con backslash**—, de modo que no se pierda el posicionamiento ganado ni ningún visitante llegue a una página inexistente.
- **Crawlabilidad desde el día uno.** El nuevo sitio nace con SSR y schema, que es justo lo que el sitio anterior no tenía; al publicar se envían el **sitemap** y las páginas a Google vía Search Console para acelerar el re-rastreo de las 49+ páginas de club que antes eran invisibles.
- **Cutover de bajo riesgo.** El **TTL** de los registros del sitio se reduce **24 horas antes** del cambio, para que la transición sea rápida y reversible. El cambio se ejecuta en una ventana coordinada con Sports World (Anexo Uno C.7), e inmediatamente después se confirma que el correo corporativo y los demás servicios siguen operando sin interrupción.
- **Monitoreo activo 48 horas y rollback.** Tras el lanzamiento, el sitio se vigila de forma activa durante **48 horas**; como el TTL quedó bajo, cualquier anomalía permite revertir con rapidez. Después comienza la **etapa de estabilización de 2 a 4 semanas** con atención reforzada, sin consumir la bolsa de horas de mejora.

## 7 · Cómo se construye: desarrollo asistido por IA con supervisión humana

El proyecto se construye con agentes de IA de programación bajo supervisión humana continua. Este es el método que permite un cronograma comprimido de ocho semanas sin sacrificar la calidad. No se trata de que "la IA escriba el sitio sin supervisión": un ingeniero senior define cada objetivo, los agentes ejecutan el grueso del trabajo y un responsable humano revisa y aprueba cada resultado antes de que salga a producción.

Se usan dos agentes complementarios. **Claude Code** para la implementación —escribir y modificar el código, ejecutar pruebas y corregir fallos, en el propio entorno del proyecto bajo el control directo del ingeniero—. **Codex** como revisor independiente —un segundo agente, distinto, que revisa el plan y la implementación en busca de vacíos, errores y debilidades que el agente que implementa podría pasar por alto—. Emplear dos agentes distintos es una decisión deliberada: quien escribe el código no es quien lo evalúa, de forma análoga a un segundo ingeniero que revisa el trabajo de un colega, pero a velocidad de IA.

Cada pieza de trabajo significativa sigue el mismo ciclo de cinco pasos, con un humano en los puntos de decisión: **investigar y planear** (el plan se escribe antes de cualquier código, y el humano lo aprueba), **implementar** (Claude Code escribe el código en piezas pequeñas y revisables), **revisar** (Codex revisa de forma independiente contra el plan y los requisitos), **verificar con evidencia** (el trabajo debe mostrar prueba de que funciona —la salida de las pruebas, el resultado renderizado, una puntuación de rendimiento medida— no una mera afirmación) y **publicar** (solo tras la aprobación humana, a través de los controles de calidad automatizados). La supervisión nunca es opcional, y es más estricta para todo lo que toca datos de usuario, captura de leads o contenido relacionado con la salud.

## 8 · Controles de calidad en cada cambio

La calidad se aplica de forma automática; no queda librada a la memoria. Cada cambio al sitio pasa por un conjunto de controles antes de poder salir a producción:

- **Pruebas automatizadas** que confirman que la funcionalidad existente sigue operando.
- **Verificaciones de rendimiento** (Core Web Vitals) en cada cambio, contra los umbrales del §1.
- **Verificaciones de accesibilidad** (axe-core), conforme a WCAG 2.2 AA.
- **Verificaciones de preparación para búsqueda** que confirman que los datos estructurados y la estructura de página siguen siendo correctos.
- **Enlaces de vista previa** para que cualquier revisor —incluido Sports World— vea exactamente cómo luce un cambio antes de publicarse (es el mecanismo de las aprobaciones del **[Contrato · Anexo Dos I.4](#contrato:i4-cronograma-de-8-semanas-y-aprobaciones-a-cargo-de-el-cliente)**).

Si algún control falla, el cambio no se publica hasta corregirse. Este mecanismo evita que un ritmo de ocho semanas acumule defectos ocultos.

## 9 · Entornos, entrega continua y seguridad

- **Entornos:** local, **staging** y **producción**, con feature flags donde aplique; cada cambio se ve primero en una vista previa.
- **Entrega continua (CI/CD):** cada cambio atraviesa los controles del §8 antes de publicarse; nada llega a producción saltándose la compuerta.
- **Seguridad de integración:** las integraciones entrantes se protegen con **verificación de firma (HMAC en webhooks)**, **HTTPS con HSTS** y **rotación de secretos**. Las credenciales se entregan por un canal seguro (un gestor de contraseñas), **nunca por correo en texto plano** (Anexo Uno B y C).
- **Protección de datos personales:** el sitio aplica **minimización y no retención** —los datos del prospecto viven brevemente y no se respaldan en el entorno del sitio una vez copiados al CRM—. El detalle y el marco legal (LFPDPPP) están en **[Seguridad del sitio](#seguridad)**.
- **Propiedad:** todo el código, el contenido y los activos quedan en propiedad de Sports World, operando en su propia infraestructura.
