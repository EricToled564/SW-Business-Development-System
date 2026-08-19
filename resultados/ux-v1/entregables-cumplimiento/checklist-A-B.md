# Checklist de cumplimiento — El sistema de ventas (Proyectos A + B)
## Entregables, aprobaciones y hospedaje, semana por semana

## 1 · Proyecto A — Rediseño Web (incluye el agente BES)

Cada semana cierra con un criterio de salida verificable. Las cuatro aprobaciones y sus valores de etapa son del Anexo Dos I.4; el valor de etapa rige el costo de un cambio sobre lo ya aprobado (Cláusula Décima).

| Semana | Entrega EL PRESTADOR | Aprueba SW | En su servidor (qué y cuándo) |
|---|---|---|---|
| **S1 · Cimientos** | Proyecto, framework, tokens de marca, plantillas base, CMS instalado, controles de calidad (CI), esquema de eventos del funnel. Inicio de verificación de Google Business. | — | Nada. Corre en **staging de EL PRESTADOR**, con acceso de Sistemas por login. |
| **S2 · Pilares** | Patrón pilar: home + 1 club + 1 hub de amenidad; modelo de contenido del CMS; primera conversación de BES. | **Aprobación 1** (48 h, valor 15%): el **diseño** / patrón pilar y la 1.ª conversación de BES. Quedan aprobadas las **plantillas de home, club y hub de amenidad**. | Nada. Revisión por staging. |
| **S3–4 · Escalar** | Replicar a **49 páginas de club** y **10 hubs de amenidad**; integrar API del CRM (captación) y datos de club/clase; instrumentar eventos del funnel; edición sin código operativa; producir las plantillas restantes (§4). | **Aprobación 2** (48 h, valor 35%): **~50% del sitio**. Aprobar las **plantillas de clase (premium e individual), perfil de usuario, FitKidz y membresías**. Validar las **matrices** (§5). | Nada en producción. El **lead-capture** de extremo a extremo se prueba contra el **CRM real** desde staging. |
| **S5–6 · Integrar** | Páginas restantes; flujo de experiencia ideal completo; construir el **tablero del funnel** y conectar fuentes de Google; plantillas YMYL (bajar de peso), personal training y blog; rendimiento y accesibilidad; BES con cobertura completa. | Validar el hub **"Bajar de Peso"** con la **firma del médico designado por SW** (cédula visible). | Nada en producción. Revisión por staging. |
| **S7 · Congelar** | Pase de calidad; plan de 301 (136 enlaces) y de DNS; prueba de carga; verificación del tablero; ensayo del CMS con SW. | **Aprobación 3** (48 h, valor 35%): sitio **congelado**, checklist de aceptación en verde. | Se **aprovisiona y prueba** el servidor de SW (Anexo Uno, Bloque F), **sin sitio en vivo todavía**. |
| **S8 · Lanzar** | **Cutover**: despliegue a producción, apuntado de DNS, 301 activo, correo/MX intacto; tablero en vivo; **handover del CMS**; monitoreo activo 48 h. | **Aprobación 4** (mismo día): lanzamiento en firme. | **El sitio corre en el servidor de SW por primera vez.** El cutover está **condicionado a que la primera exhibición esté pagada** (§7). |

## 2 · Proyecto B — BDS (canal WhatsApp y consola de operadores)

Plazo propio de 8 semanas desde la firma del Addendum, en paralelo a A. Reutiliza el cuestionario, el middleware/CRM y la consola de A (operativos entre las Semanas 3 y 6 de A). Dos hitos de aprobación (Cláusula Décima).

| Fase | Entrega EL PRESTADOR | Aprueba SW | En su servidor (qué y cuándo) |
|---|---|---|---|
| **Preparación** | Cierre del listado de requerimientos. | Provee **número oficial de WhatsApp Business** verificado en Meta y **plantillas de mensaje aprobadas**; plantilla de operadores, horarios y lista de personal autorizado. | Nada. Staging. |
| **Integración** | WhatsApp Business API (mensajería, plantillas, multiagente); rol de operador en la consola; BES por WhatsApp (texto, respaldo 24/7); capa de enrutamiento (human-first → BES → escalación). | — | Nada. Staging. |
| **Validación** | Pruebas de extremo a extremo por los tres caminos (operador, BES, walk-in) contra el CRM real, sin duplicados; Canal 2 y *speed-to-lead* en el tablero. | **Aprobación hito 1** (50%). | Nada en producción. |
| **Lanzamiento** | BDS en operación; ajuste de reglas de enrutamiento con datos reales. | **Aprobación hito 2** (total). | Opera junto al sitio, en el servidor de SW, tras el cutover. |

## 3 · Secciones de la web (Anexo Dos I.1)

Las 148 páginas por nivel: home (1), club (49), hub de amenidad (10), clase premium (7), clase individual (47), FitKidz (1), perfil de usuario (5), bajar de peso (1), personal training (1), membresías (6), blog SEO (20).

## 4 · Plantillas — qué aprueba SW y cuándo

| Plantilla | Aplica a | Aprobación |
|---|---|---|
| Home | 1 | S2 |
| Club | 49 | S2 |
| Hub de amenidad | 10 | S2 |
| Clase premium (Les Mills) | 7 | S3–4 |
| Clase individual | 47 | S3–4 |
| Hub de perfil de usuario | 5 | S3–4 |
| FitKidz | 1 | S3–4 |
| Membresías (data del CRM) | 6 | S3–4 |
| Bajar de peso (YMYL, firma médica) | 1 | S5–6 |
| Personal training | 1 | S5–6 |
| Blog SEO | 20 | S5–6 |

## 5 · Matrices que SW valida

| Matriz | Para qué | Cuándo |
|---|---|---|
| Amenidades × club | Qué amenidad ofrece cada club | S2–3 |
| Clases × club | Qué clase se imparte en cada club | S2–3 |
| Beneficios: 54 clases × 5 perfiles | Contenido de perfiles y de "bajar de peso"; validada contra literatura médica (YMYL) | S3–5 |
| Contraindicaciones (Q12) | Filtro médico del cuestionario | S3 |
| Planes CRM → 6 páginas de membresía | Asignación por criterio estable | S3 |

## 6 · SEO técnico e implementaciones (Anexo Dos I.2)

- **SSR** de las 148 páginas (49 de club crawleables).
- **Schema JSON-LD** por tipo: `HealthClub` + `LocalBusiness` (club, con GPS/horarios/teléfono), `Course` (clase), `FAQPage`, `BreadcrumbList`.
- Arquitectura y **enlazado interno** de 148 páginas; hubs semánticos por amenidad y ubicación; rutas limpias.
- **Redirecciones 301** cubriendo los **136 enlaces rotos**.
- **6 plantillas maestras** de contenido asistido por IA en es-MX, con revisión humana editorial.
- **YMYL reforzado** para el hub de bajar de peso (firma médica de cédula vigente).
- **49 fichas de Google Business** (Google Business Profile API, OAuth 2.0). *Google controla la verificación y toma semanas; por eso arranca en S1.*
- **Medición:** Google Search Console y GA4 desde el inicio; instrumentación de eventos; reporte ejecutivo semanal.

### KPIs comprometidos (Anexo Dos IV)

| KPI | Base → Meta | Verificación |
|---|---|---|
| Páginas de club crawleables (SSR) | 0 → 49 de 49 | Search Console |
| Enlaces rotos | 136 → 0 | Semrush |
| Schema JSON-LD por club | 0 → 49 | Rich Results Test |
| Páginas sin H1 | 11 → 0 | Semrush |
| Cobertura keywords *unbranded* | 31.1% → 55–65% | Semrush |
| Core Web Vitals | LCP<2.5 s · INP<200 ms · CLS<0.1 | PageSpeed Insights |
| Accesibilidad | WCAG 2.2 AA | axe-core |

No se garantizan posiciones específicas ni volúmenes de tráfico (factores externos); sí la base técnica que los habilita.

## 7 · Dónde vive el código, cómo se revisa y cuándo pasa a SW

**Durante la construcción (S1–S7): en infraestructura de EL PRESTADOR.** El sitio corre en un **ambiente de staging** con **acceso para el área de Sistemas de SW por login restringido** —revisan cuando quieran, con bitácora de acceso—. Lo que el navegador muestra es el sitio ya renderizado; **el código fuente, el código de servidor, el middleware, la base de datos y los secretos no se envían al navegador y no son descargables** desde staging (source maps apagados). El repositorio permanece privado en EL PRESTADOR.

**El cutover (S8): al servidor de SW.** El sitio se despliega en el servidor de SW (Bloque F) y se apunta el DNS. **Precondición: la primera exhibición —exigible en la Aprobación de la Semana 4— debe estar pagada.** La falta de pago de una exhibición ya exigible faculta la **suspensión de entregas** (Cláusula Novena III): no hay cutover hasta regularizar.

**La entrega final: contra liquidación total.** El **código fuente, los repositorios con historial y la transferencia de titularidad** se entregan **al liquidarse el pago total del proyecto** (Cláusula Novena III y Décima Sexta). Hasta entonces, en garantía; lo puesto en producción sigue operando, pero SW no puede redeployar ni modificar de forma independiente sin los repositorios.
