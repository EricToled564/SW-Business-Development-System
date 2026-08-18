// Contenido bilingüe de la licitación del Equipo 1.
// Autocontenido: no depende del diccionario del sitio de la agencia ni del
// depósito documental del cliente.
import type { Locale } from '@/lib/i18n';

export interface Fila { k: string; v: string }

export interface LicContent {
  meta: { title: string; desc: string };
  nav: { brief: string; postular: string; evaluar: string };
  hero: { badge: string; title: string; sub: string; frase: string };
  intro: { independiente: string; metodo: string };
  s1: { h: string; p: string; equipos: Fila[]; ancla: string };
  s2: { h: string; p: string; raci: Fila[] };
  s3: { h: string; p: string; entregables: Fila[]; frontera: string };
  s4: { h: string; p: string; semanas: Fila[] };
  s5: { h: string; p: string; recibe: Fila[]; entrega: Fila[] };
  s6: { h: string; p: string; claude: string; codex: string; ciclo: string[]; cierre: string };
  s7: { h: string; stack: string[]; kpis: Fila[] };
  s8: { h: string; p: string; rubros: Fila[]; rubrica: Fila[]; comoPostular: string };
  postular: {
    h: string; sub: string; aislamiento: string;
    sinToken: string; identificacion: string; obligatorios: string;
    experiencia: string; equipo: string; precio: string; adjuntos: string;
    enviar: string; enviando: string; ok: string; faltan: string;
  };
  evaluar: {
    h: string; sub: string; login: string; entrar: string; malPass: string;
    cargar: string; ninguna: string; ajuste: string; comparar: string;
    ganador: string; descal: string; total: string;
    invitarH: string; invRazon: string; invEmail: string; invBtn: string;
    invGenerado: string; invCopiar: string; copiado: string; invFaltan: string;
  };
}

const es: LicContent = {
  meta: { title: 'Licitación · Equipo 1 (Web) · Sports World', desc: 'Convocatoria a proveedores para construir el Equipo 1 — Web del sistema de ventas de Sports World.' },
  nav: { brief: 'Brief del proyecto', postular: 'Postular', evaluar: 'Evaluar' },
  hero: {
    badge: 'Licitación',
    title: 'Equipo 1 — Web · Convocatoria a proveedores',
    sub: 'Sitio, integración con el CRM, panel sin código, consola de captación y tablero del funnel · Proyecto A · 8 semanas',
    frase: 'Se busca al proveedor que convierta la infraestructura de Sports World —49 clubes— en un sitio legible para el buscador y para el cliente, con captación integrada al CRM y medida de punta a punta.',
  },
  intro: {
    independiente: 'Esta convocatoria es autocontenida: reúne todo lo necesario para presentar una propuesta sin acceder al depósito documental del cliente.',
    metodo: 'El proyecto se construye con desarrollo asistido por IA bajo supervisión humana continua. Por eso la experiencia demostrable con Claude Code y Codex es requisito de admisión.',
  },
  s1: {
    h: '1 · El proyecto como un todo',
    p: 'Cinco equipos coordinados por un líder general, punto único de contacto con la dirección del cliente. Tres pertenecen al Proyecto A (8 semanas); dos se activan con sus addenda.',
    equipos: [
      { k: 'Equipo 1 — Web (este encargo)', v: 'Sitio, experiencia ideal, middleware/CRM, motor de precios, CMS sin código, consola de captación, tablero del funnel, migración y cutover' },
      { k: 'Equipo 2 — SEO y contenido', v: 'Keywords, contenido de 148 páginas, datos estructurados, 49 fichas de Google Business' },
      { k: 'Equipo 3 — Contenido visual', v: '~650 fotos, ~150 imágenes IA, 12 animaciones, 1 video' },
      { k: 'Equipo 4 — BES', v: 'Agente de voz y texto en el canal web; recordatorios por WhatsApp' },
      { k: 'Equipo 5 — BDS (con su Addendum)', v: 'WhatsApp Business API, consola de operadores, enrutamiento en tiempo real' },
    ],
    ancla: 'El Equipo 1 es el frente ancla: el cuestionario, el middleware/CRM, la escritura idempotente y la consola que construye son reutilizados por los equipos 4 y 5. Un retraso suyo propaga a los demás.',
  },
  s2: {
    h: '2 · Responsabilidades del Equipo 1',
    p: 'El Equipo 1 es ejecutor (R) de estos entregables; el líder general rinde cuentas (A) y Sports World aprueba o provee accesos.',
    raci: [
      { k: 'Plantillas y sistema de diseño', v: 'R' },
      { k: '148 páginas (build)', v: 'R · con E2' },
      { k: 'Integración CRM vía middleware', v: 'R · SW provee API y datos' },
      { k: 'Panel sin código (CMS) y modelo de contenido', v: 'R · SW administra tras handover' },
      { k: 'Funnel, dashboard y consola interna', v: 'R · SW da accesos Google y CRM' },
      { k: 'Migración y cutover', v: 'R · SW da accesos' },
    ],
  },
  s3: {
    h: '3 · Entregables y criterios de aceptación',
    p: 'Cada entregable se da por cumplido contra un criterio verificable.',
    entregables: [
      { k: 'Sistema de diseño y plantillas', v: 'Tokens de marca por construcción; patrón pilar aprobado.' },
      { k: '148 páginas (SSR + ISR)', v: '148 publicadas y crawleables; 49/49 clubes en servidor; 0 páginas sin H1.' },
      { k: 'Flujo de experiencia ideal', v: 'Cuestionario, resolver de club y ranker de clases de extremo a extremo; brief del asesor.' },
      { k: 'Middleware de integración al CRM', v: 'Lecturas con corte 06:00; escritura idempotente del lead, sin duplicados.' },
      { k: 'Motor de precios', v: 'Por club / ciudad / nacional, extraído del CRM.' },
      { k: 'Panel sin código (CMS headless)', v: 'Edición de contenido, imágenes y coordenadas; handover con guía.' },
      { k: 'Consola interna de captación', v: 'Personal autorizado registra leads por la misma vía idempotente.' },
      { k: 'Instrumentación y tablero del funnel', v: 'Eventos E2–E4 en la base del funnel; fuentes de Google conectadas.' },
      { k: 'Migración y cutover', v: '301 de 136 enlaces; DNS; correo/MX intacto; monitoreo 48 h.' },
      { k: 'Controles de calidad (CI)', v: 'Pruebas, Core Web Vitals y WCAG 2.2 AA en cada cambio.' },
    ],
    frontera: 'Frontera de alcance: el Equipo 1 construye el tablero completo. Las etapas de cierre (visita realizada, membresía, cancelación) dependen de datos del CRM que provee Sistemas; su ausencia deja el tablero midiendo hasta visita agendada, sin bloquear el lanzamiento.',
  },
  s4: {
    h: '4 · Cronograma de ocho semanas',
    p: 'Cada semana cierra con un criterio de salida. El proveedor mapea su plan a esta rejilla.',
    semanas: [
      { k: 'S1 · Cimientos', v: 'Proyecto, framework, tokens, plantillas, CMS instalado, CI; esquema de eventos del funnel.' },
      { k: 'S2 · Pilares', v: 'Home + 1 club + 1 hub; modelo de contenido del CMS. Aprobación 1.' },
      { k: 'S3–4 · Escalar', v: '49 clubes y hubs; API del CRM; instrumentar E2–E4; edición sin código. Aprobación 2 (50%).' },
      { k: 'S5–6 · Integrar', v: 'Páginas restantes; construir el tablero y conectar fuentes de Google; rendimiento y accesibilidad.' },
      { k: 'S7 · Congelar', v: 'Pase de calidad; plan de 301 y DNS; prueba de carga; ensayo del CMS. Aprobación 3.' },
      { k: 'S8 · Lanzar', v: 'Cutover; tablero en vivo; handover del CMS; monitoreo 48 h. Aprobación 4.' },
    ],
  },
  s5: {
    h: '5 · Interacciones con los otros equipos',
    p: 'Lista exhaustiva de lo que el Equipo 1 recibe y entrega. La propuesta debe demostrar que el proveedor la entiende.',
    recibe: [
      { k: 'SW Sistemas', v: 'API del CRM y credenciales; catálogo de datos; datos de cierre E5/E6/E7; servidor; WhatsApp Business.' },
      { k: 'SW Marketing', v: 'Tag Manager; accesos GA4, Search Console y las 49 fichas de Google Business.' },
      { k: 'SW Operación', v: 'Lista de personal autorizado, plantilla de operadores y horarios.' },
      { k: 'Equipo 2 — SEO', v: 'URLs y keywords por página; requisitos de schema; mapa de 301; metadatos.' },
      { k: 'Equipo 3 — Visual', v: '~650 fotos y ~150 imágenes IA en AVIF/WebP; animaciones y video; estilo visual.' },
      { k: 'Equipo 4 — BES', v: 'Requisitos del agente y de su base de conocimiento; contrato de eventos para escribir leads.' },
    ],
    entrega: [
      { k: 'Equipo 2 — SEO', v: 'Páginas SSR crawleables con schema renderizado; ISR; enlaces de vista previa.' },
      { k: 'Equipo 3 — Visual', v: 'Layouts con slots de imagen y especificaciones; pipeline AVIF/WebP.' },
      { k: 'Equipo 4 — BES', v: 'La lógica de club/clase/lead (middleware) y la escritura idempotente; el sitio donde BES se integra.' },
      { k: 'Equipo 5 — BDS (futuro)', v: 'Cuestionario, experiencia ideal, middleware/CRM, consola con rol de operador; base del tablero del Canal 2.' },
      { k: 'Sports World', v: 'Sitio, CMS sin código, tablero del funnel, migración/cutover; handover con guía.' },
    ],
  },
  s6: {
    h: '6 · Método obligatorio: desarrollo asistido por IA',
    p: 'El cronograma de ocho semanas se sostiene en un método específico, y el proveedor debe operarlo. Un ingeniero senior define cada objetivo; los agentes ejecutan; un humano aprueba cada resultado antes de producción.',
    claude: 'Claude Code — implementa: escribe y modifica el código, ejecuta pruebas y corrige fallos, bajo control del ingeniero.',
    codex: 'Codex — revisa: segundo agente independiente que revisa plan e implementación en busca de vacíos y errores.',
    ciclo: ['1 · Investigar y planear', '2 · Implementar (Claude Code)', '3 · Revisar (Codex)', '4 · Verificar con evidencia', '5 · Publicar tras aprobación humana'],
    cierre: 'La propuesta debe demostrar experiencia real con ambos agentes: proyectos concretos, el rol de cada uno y cómo se aplica este ciclo. Es requisito de admisión.',
  },
  s7: {
    h: '7 · Stack y KPIs',
    stack: [
      'Next.js 16 (App Router) con SSR + ISR — el render en servidor es el requisito más importante para el posicionamiento.',
      'React 19 con React Compiler; TypeScript estricto; Tailwind CSS v4 sobre tokens de marca.',
      'Node.js 20.9+; el sitio corre en el servidor que provee Sports World.',
      'CMS headless autoalojado (p. ej. Payload o Strapi) con panel sin código.',
      'Middleware a cargo del proveedor que consume el API RESTful del CRM: idempotencia, caché, reintentos, precios y geolocalización.',
      'Seguridad: HMAC en webhooks, HTTPS con HSTS, rotación de secretos; minimización de datos personales (LFPDPPP).',
      'Propiedad: todo el código y los activos quedan en propiedad de Sports World.',
    ],
    kpis: [
      { k: 'Páginas de club crawleables (SSR)', v: '0 → 49 de 49 · Search Console' },
      { k: 'Enlaces rotos', v: '136 → 0 · Semrush' },
      { k: 'Schema JSON-LD por club', v: '0 → 49 · Rich Results Test' },
      { k: 'Páginas sin H1', v: '11 → 0 · Semrush' },
      { k: 'Core Web Vitals', v: 'LCP<2.5 s · INP<200 ms · CLS<0.1' },
      { k: 'Accesibilidad', v: 'WCAG 2.2 AA · axe-core' },
    ],
  },
  s8: {
    h: '8 · Qué debe contener la propuesta',
    p: 'Los rubros obligatorios son requisitos de admisión: si falta cualquiera, la propuesta queda descalificada. Los recomendados suman en la evaluación.',
    rubros: [
      { k: 'Portafolio de diseño UX', v: 'obligatorio' },
      { k: 'Propuesta técnica', v: 'obligatorio' },
      { k: 'Experiencia con Claude Code y Codex', v: 'obligatorio' },
      { k: 'Equipo propuesto (roles, seniority, CVs)', v: 'obligatorio' },
      { k: 'Cronograma propio mapeado a 8 semanas', v: 'recomendado' },
      { k: 'Estructura de precio', v: 'recomendado' },
      { k: 'Plan de QA y CI', v: 'recomendado' },
      { k: 'Seguridad y datos personales (LFPDPPP)', v: 'recomendado' },
      { k: 'Plan de migración y cutover', v: 'recomendado' },
      { k: 'Entendimiento de las interacciones', v: 'recomendado' },
      { k: 'Referencias y disposición a NDA', v: 'recomendado' },
    ],
    rubrica: [
      { k: 'Propuesta técnica', v: '25%' },
      { k: 'Experiencia con Claude Code y Codex', v: '20%' },
      { k: 'Portafolio de diseño UX', v: '20%' },
      { k: 'Equipo', v: '15%' },
      { k: 'Cronograma y factibilidad en 8 semanas', v: '10%' },
      { k: 'Precio', v: '10%' },
    ],
    comoPostular: 'Para postular necesitas el enlace único que te envía el convocante. La comparación y la propuesta de ganador ocurren en la vista Evaluar, de uso exclusivo del convocante.',
  },
  postular: {
    h: 'Postular al Equipo 1', sub: 'Completa los campos y adjunta tus documentos. Se envían de forma segura al convocante.',
    aislamiento: 'Aislamiento garantizado por el servidor: cada propuesta se guarda bajo tu enlace único y ningún otro proveedor puede verla.',
    sinToken: 'Necesitas el enlace único que te envió el convocante (contiene tu token). Sin él no puedes enviar una propuesta.',
    identificacion: 'Identificación del proveedor', obligatorios: 'Rubros obligatorios',
    experiencia: 'Experiencia con los agentes de IA', equipo: 'Equipo y factibilidad', precio: 'Precio', adjuntos: 'Adjuntos',
    enviar: 'Enviar propuesta', enviando: 'Enviando…', ok: 'Propuesta enviada. Folio: ', faltan: 'Faltan rubros obligatorios: ',
  },
  evaluar: {
    h: 'Evaluar propuestas', sub: 'Carga las propuestas recibidas; el sistema descalifica las incompletas, puntúa contra la rúbrica y propone un ganador.',
    login: 'Contraseña del convocante', entrar: 'Entrar', malPass: 'Contraseña incorrecta',
    cargar: 'Cargar propuestas', ninguna: 'Sin propuestas cargadas.', ajuste: 'Ajuste cualitativo',
    comparar: 'Comparar y proponer ganador', ganador: 'Ganador propuesto', descal: 'descalificado', total: 'Total',
    invitarH: 'Invitar a un proveedor', invRazon: 'Razón social', invEmail: 'Correo de contacto',
    invBtn: 'Generar enlace único', invGenerado: 'Enlace para este proveedor (envíaselo; solo abre su propia propuesta):',
    invCopiar: 'Copiar', copiado: 'Copiado', invFaltan: 'Completa razón social y correo.',
  },
};

const en: LicContent = {
  meta: { title: 'RFP · Team 1 (Web) · Sports World', desc: 'Call for providers to build Team 1 — Web of the Sports World sales system.' },
  nav: { brief: 'Project brief', postular: 'Submit', evaluar: 'Evaluate' },
  hero: {
    badge: 'RFP',
    title: 'Team 1 — Web · Call for providers',
    sub: 'Site, CRM integration, no-code panel, capture console and funnel dashboard · Project A · 8 weeks',
    frase: 'We seek the provider that turns Sports World’s infrastructure —49 clubs— into a site legible to search engines and to the customer, with capture integrated to the CRM and measured end to end.',
  },
  intro: {
    independiente: 'This call is self-contained: it holds everything needed to submit a proposal without access to the client’s document repository.',
    metodo: 'The project is built with AI-assisted development under continuous human supervision. Demonstrable experience with Claude Code and Codex is therefore an admission requirement.',
  },
  s1: {
    h: '1 · The project as a whole',
    p: 'Five teams coordinated by a general lead, the single point of contact with the client. Three belong to Project A (8 weeks); two activate with their addenda.',
    equipos: [
      { k: 'Team 1 — Web (this engagement)', v: 'Site, ideal experience, CRM middleware, price engine, no-code CMS, capture console, funnel dashboard, migration and cutover' },
      { k: 'Team 2 — SEO and content', v: 'Keywords, content for 148 pages, structured data, 49 Google Business profiles' },
      { k: 'Team 3 — Visual content', v: '~650 photos, ~150 AI images, 12 animations, 1 video' },
      { k: 'Team 4 — BES', v: 'Voice and text agent on the web channel; WhatsApp reminders' },
      { k: 'Team 5 — BDS (with its Addendum)', v: 'WhatsApp Business API, operator console, real-time routing' },
    ],
    ancla: 'Team 1 is the anchor: the questionnaire, CRM middleware, idempotent write and console it builds are reused by teams 4 and 5. A delay here propagates to the others.',
  },
  s2: {
    h: '2 · Team 1 responsibilities',
    p: 'Team 1 executes (R) these deliverables; the general lead is accountable (A) and Sports World approves or provides access.',
    raci: [
      { k: 'Design system and templates', v: 'R' },
      { k: '148 pages (build)', v: 'R · with T2' },
      { k: 'CRM integration via middleware', v: 'R · SW provides API and data' },
      { k: 'No-code panel (CMS) and content model', v: 'R · SW administers after handover' },
      { k: 'Funnel, dashboard and internal console', v: 'R · SW grants Google and CRM access' },
      { k: 'Migration and cutover', v: 'R · SW grants access' },
    ],
  },
  s3: {
    h: '3 · Deliverables and acceptance criteria',
    p: 'Each deliverable is deemed done against a verifiable criterion.',
    entregables: [
      { k: 'Design system and templates', v: 'Brand tokens by construction; pillar pattern approved.' },
      { k: '148 pages (SSR + ISR)', v: '148 published and crawlable; 49/49 clubs server-rendered; 0 pages without H1.' },
      { k: 'Ideal experience flow', v: 'Questionnaire, club resolver and class ranker end to end; advisor brief.' },
      { k: 'CRM integration middleware', v: 'Reads with 06:00 cutoff; idempotent lead write, no duplicates.' },
      { k: 'Price engine', v: 'Per club / city / national, pulled from the CRM.' },
      { k: 'No-code panel (headless CMS)', v: 'Edit content, images and coordinates; handover with guide.' },
      { k: 'Internal capture console', v: 'Authorized staff log leads through the same idempotent path.' },
      { k: 'Funnel instrumentation and dashboard', v: 'Events E2–E4 in the funnel database; Google sources connected.' },
      { k: 'Migration and cutover', v: '301 map for 136 links; DNS; email/MX intact; 48 h monitoring.' },
      { k: 'Quality controls (CI)', v: 'Tests, Core Web Vitals and WCAG 2.2 AA on every change.' },
    ],
    frontera: 'Scope boundary: Team 1 builds the full dashboard. Closing stages (visit made, membership, cancellation) depend on CRM data provided by Systems; without it the dashboard measures up to scheduled visit, without blocking launch.',
  },
  s4: {
    h: '4 · Eight-week schedule',
    p: 'Each week closes with an exit criterion. The provider maps its plan to this grid.',
    semanas: [
      { k: 'W1 · Foundations', v: 'Project, framework, tokens, templates, CMS installed, CI; funnel event schema.' },
      { k: 'W2 · Pillars', v: 'Home + 1 club + 1 hub; CMS content model. Approval 1.' },
      { k: 'W3–4 · Scale', v: '49 clubs and hubs; CRM API; instrument E2–E4; no-code editing. Approval 2 (50%).' },
      { k: 'W5–6 · Integrate', v: 'Remaining pages; build the dashboard and connect Google sources; performance and accessibility.' },
      { k: 'W7 · Freeze', v: 'Quality pass; 301 and DNS plan; load test; CMS rehearsal. Approval 3.' },
      { k: 'W8 · Launch', v: 'Cutover; dashboard live; CMS handover; 48 h monitoring. Approval 4.' },
    ],
  },
  s5: {
    h: '5 · Interactions with the other teams',
    p: 'Exhaustive list of what Team 1 receives and delivers. The proposal must show the provider understands it.',
    recibe: [
      { k: 'SW Systems', v: 'CRM API and credentials; data catalog; closing data E5/E6/E7; server; WhatsApp Business.' },
      { k: 'SW Marketing', v: 'Tag Manager; GA4, Search Console and the 49 Google Business profiles.' },
      { k: 'SW Operations', v: 'Authorized-staff list, operator roster and hours.' },
      { k: 'Team 2 — SEO', v: 'URLs and keywords per page; schema requirements; 301 map; metadata.' },
      { k: 'Team 3 — Visual', v: '~650 photos and ~150 AI images in AVIF/WebP; animations and video; visual style.' },
      { k: 'Team 4 — BES', v: 'Agent and knowledge-base requirements; event contract to write leads.' },
    ],
    entrega: [
      { k: 'Team 2 — SEO', v: 'Crawlable SSR pages with rendered schema; ISR; preview links.' },
      { k: 'Team 3 — Visual', v: 'Layouts with image slots and specs; AVIF/WebP pipeline.' },
      { k: 'Team 4 — BES', v: 'The club/class/lead logic (middleware) and idempotent write; the site where BES integrates.' },
      { k: 'Team 5 — BDS (future)', v: 'Questionnaire, ideal experience, CRM middleware, console with operator role; Channel 2 dashboard base.' },
      { k: 'Sports World', v: 'Site, no-code CMS, funnel dashboard, migration/cutover; handover with guide.' },
    ],
  },
  s6: {
    h: '6 · Mandatory method: AI-assisted development',
    p: 'The eight-week schedule rests on a specific method, and the provider must operate it. A senior engineer defines each objective; the agents execute; a human approves every result before production.',
    claude: 'Claude Code — implements: writes and modifies code, runs tests and fixes issues, under the engineer’s control.',
    codex: 'Codex — reviews: a second independent agent that reviews plan and implementation for gaps and errors.',
    ciclo: ['1 · Research and plan', '2 · Implement (Claude Code)', '3 · Review (Codex)', '4 · Verify with evidence', '5 · Publish after human approval'],
    cierre: 'The proposal must show real experience with both agents: concrete projects, each agent’s role and how this cycle is applied. It is an admission requirement.',
  },
  s7: {
    h: '7 · Stack and KPIs',
    stack: [
      'Next.js 16 (App Router) with SSR + ISR — server rendering is the most important requirement for ranking.',
      'React 19 with React Compiler; strict TypeScript; Tailwind CSS v4 over brand tokens.',
      'Node.js 20.9+; the site runs on the server Sports World provides.',
      'Self-hosted headless CMS (e.g. Payload or Strapi) with a no-code panel.',
      'Provider-owned middleware consuming the CRM REST API: idempotency, cache, retries, pricing and geolocation.',
      'Security: HMAC on webhooks, HTTPS with HSTS, secret rotation; personal-data minimization (LFPDPPP).',
      'Ownership: all code and assets remain the property of Sports World.',
    ],
    kpis: [
      { k: 'Crawlable club pages (SSR)', v: '0 → 49 of 49 · Search Console' },
      { k: 'Broken links', v: '136 → 0 · Semrush' },
      { k: 'JSON-LD schema per club', v: '0 → 49 · Rich Results Test' },
      { k: 'Pages without H1', v: '11 → 0 · Semrush' },
      { k: 'Core Web Vitals', v: 'LCP<2.5 s · INP<200 ms · CLS<0.1' },
      { k: 'Accessibility', v: 'WCAG 2.2 AA · axe-core' },
    ],
  },
  s8: {
    h: '8 · What the proposal must contain',
    p: 'Mandatory items are admission requirements: if any is missing, the proposal is disqualified. Recommended items add to the score.',
    rubros: [
      { k: 'UX design portfolio', v: 'mandatory' },
      { k: 'Technical proposal', v: 'mandatory' },
      { k: 'Experience with Claude Code and Codex', v: 'mandatory' },
      { k: 'Proposed team (roles, seniority, CVs)', v: 'mandatory' },
      { k: 'Own schedule mapped to 8 weeks', v: 'recommended' },
      { k: 'Pricing structure', v: 'recommended' },
      { k: 'QA and CI plan', v: 'recommended' },
      { k: 'Security and personal data (LFPDPPP)', v: 'recommended' },
      { k: 'Migration and cutover plan', v: 'recommended' },
      { k: 'Understanding of the interactions', v: 'recommended' },
      { k: 'References and NDA willingness', v: 'recommended' },
    ],
    rubrica: [
      { k: 'Technical proposal', v: '25%' },
      { k: 'Experience with Claude Code and Codex', v: '20%' },
      { k: 'UX design portfolio', v: '20%' },
      { k: 'Team', v: '15%' },
      { k: 'Schedule and 8-week feasibility', v: '10%' },
      { k: 'Price', v: '10%' },
    ],
    comoPostular: 'To submit you need the unique link the convener sends you. Comparison and the winner proposal happen in the Evaluate view, for the convener only.',
  },
  postular: {
    h: 'Submit to Team 1', sub: 'Fill in the fields and attach your documents. They are sent securely to the convener.',
    aislamiento: 'Isolation enforced by the server: each proposal is stored under your unique link and no other provider can see it.',
    sinToken: 'You need the unique link the convener sent you (it holds your token). Without it you cannot submit.',
    identificacion: 'Provider identification', obligatorios: 'Mandatory items',
    experiencia: 'Experience with the AI agents', equipo: 'Team and feasibility', precio: 'Price', adjuntos: 'Attachments',
    enviar: 'Send proposal', enviando: 'Sending…', ok: 'Proposal sent. Folio: ', faltan: 'Missing mandatory items: ',
  },
  evaluar: {
    h: 'Evaluate proposals', sub: 'Load the received proposals; the system disqualifies incomplete ones, scores against the rubric and proposes a winner.',
    login: 'Convener password', entrar: 'Enter', malPass: 'Wrong password',
    cargar: 'Load proposals', ninguna: 'No proposals loaded.', ajuste: 'Qualitative adjustment',
    comparar: 'Compare and propose winner', ganador: 'Proposed winner', descal: 'disqualified', total: 'Total',
    invitarH: 'Invite a provider', invRazon: 'Company name', invEmail: 'Contact email',
    invBtn: 'Generate unique link', invGenerado: 'Link for this provider (send it; it only opens their own proposal):',
    invCopiar: 'Copy', copiado: 'Copied', invFaltan: 'Fill in company name and email.',
  },
};

export function getLic(locale: Locale): LicContent {
  return locale === 'en' ? en : es;
}
