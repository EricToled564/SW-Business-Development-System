# Checklist de cumplimiento — El sistema de ventas (Proyectos A + B)
## Requisitos, entregables, criterios de aceptación y calendario, para seguimiento conjunto con Sports World

**Qué cubre.** El Proyecto A (Rediseño Web) y el Proyecto B (Business Development System) forman un solo sistema de captación y conversión con todos los canales integrados. Este documento los reúne para dar seguimiento semana por semana.

---

## 0 · Los dos proyectos, en una tabla

| | Proyecto A · Rediseño Web | Proyecto B · BDS |
|---|---|---|
| **Qué es** | Sitio (148 páginas), agente **BES** en el canal web (Servicio II), integración al CRM, CMS sin código, consola de captación, tablero del funnel, migración | Captación multicanal en tiempo real: landing de campañas, **WhatsApp Business API**, BES por WhatsApp (texto), **consola de operadores**, enrutamiento en tiempo real |
| **Plazo** | 8 semanas (desde entrega del 100% de Bloques 0 y A del Anexo Uno) | 8 semanas propias (desde firma del Addendum), **en paralelo a A** |
| **Pago Único** | USD $81,000 (MXN $1,441,800) + IVA | USD $4,850 (MXN $86,330) + IVA |
| **Exhibiciones** | 2 × USD $40,500 (con IVA MXN $836,244) | 2 × USD $2,425 (con IVA MXN $50,071.40) |
| **Iguala** | Mensual (Cláusula Octava) tras estabilización | Sin iguala propia (incluida en la de A) |

**Regla de pago común (Cláusula Novena).** Sin anticipos. La **1.ª exhibición** se factura al iniciar y es exigible al aprobarse **el 50% de los entregables** (en A, la Aprobación de la Semana 4); la **2.ª** es exigible al aprobarse **la totalidad**. Cada exhibición se paga en **10 días naturales**; mora 2% mensual. **Aceptación tácita:** si SW no observa por escrito en 5 días hábiles, se tiene por aceptado, incluida la exigibilidad del pago (Cláusula Décima).

---

## 1 · Proyecto A — calendario por semana

Cada semana cierra con un criterio de salida verificable. Las cuatro aprobaciones son del Anexo Dos I.4; su **valor de etapa** rige el costo de cambios sobre lo ya aprobado (Cláusula Décima: 50% del valor de la etapa).

### Semana 1 — Cimientos
- **EL PRESTADOR:** proyecto, framework, tokens de marca, plantillas base, **CMS instalado**, controles de calidad (CI), esquema de eventos del funnel. Inicio de verificación de Google Business (camino largo).
- **SW aporta (Anexo Uno, Bloques 0 y A):** documentación del API del CRM, ambiente de pruebas, responsable único, accesos. *El plazo de 8 semanas corre desde la entrega del 100%.*
- **En servidor de SW:** nada. Todo en el ambiente de staging de EL PRESTADOR.

### Semana 2 — Pilares · 🚦 Aprobación 1 (valor de etapa: 15%)
- **EL PRESTADOR:** patrón pilar (**home + 1 club + 1 hub de amenidad**), modelo de contenido del CMS, primera conversación de BES.
- **SW aprueba (48 h):** el **diseño** y el patrón pilar (look, contenido, imágenes) + 1.ª conversación de BES. Quedan aprobadas las **plantillas de home, club y hub de amenidad**.
- **En servidor de SW:** nada. Revisión por **enlace de vista previa**.

### Semanas 3–4 — Escalar · 🚦 Aprobación 2 (valor 35%) — **gatilla la 1.ª exhibición**
- **EL PRESTADOR:** replicar a **49 páginas de club** y **10 hubs de amenidad**; integrar API del CRM (captación) y datos de club/clase; instrumentar eventos del funnel; edición sin código operativa; producir las **plantillas restantes** (ver §3).
- **SW aprueba (48 h):** **~50% del sitio**. Aprobar las **plantillas de clase (premium e individual), perfil de usuario, FitKidz y membresías**. Validar las **matrices** (ver §4).
- **SW aporta:** credenciales productivas del CRM, punto de creación de prospecto e idempotencia (Anexo Uno B.1–B.3, D.4).
- **En servidor de SW:** nada en producción. Lead-capture se prueba contra el **CRM real** desde staging.
- **Pago:** con la Aprobación 2 (o aceptación tácita), la **1.ª exhibición es exigible**; SW paga en 10 días. Se factura la 2.ª.

### Semanas 5–6 — Integrar
- **EL PRESTADOR:** páginas restantes; flujo de experiencia ideal completo; **construir el tablero del funnel** y conectar fuentes de Google (GA4, Search Console, fichas); plantillas **YMYL (bajar de peso)**, personal training y blog; endurecer rendimiento y accesibilidad; BES con cobertura conversacional completa.
- **SW valida:** el hub **"Bajar de Peso"** con la **firma del médico designado por SW (cédula visible)** — requisito YMYL.
- **En servidor de SW:** nada en producción todavía.

### Semana 7 — Congelar · 🚦 Aprobación 3 (valor 35%)
- **EL PRESTADOR:** pase de calidad completo; plan de 301 (136 enlaces) y de DNS; **prueba de carga** del servidor; verificación del tablero; ensayo del CMS con SW.
- **SW aprueba (48 h):** sitio **congelado**, checklist de aceptación en verde en staging.
- **En servidor de SW:** se **aprovisiona y prueba** el servidor (Anexo Uno, Bloque F), sin sitio en vivo.

### Semana 8 — Lanzar · 🚦 Aprobación 4 (valor 15%) — **gatilla la 2.ª exhibición**
- **EL PRESTADOR:** **cutover** al servidor de SW, apuntado de DNS, 301 activo, correo/MX intacto; tablero en vivo; **handover del CMS** (alta de usuarios + guía); monitoreo activo 48 h.
- **SW aprueba:** lanzamiento en firme (mismo día hábil).
- **En servidor de SW:** **aquí, por primera vez, el sitio corre en el servidor de SW.** Condicionado a que la 1.ª exhibición esté pagada.
- **Pago:** con la Aprobación 4 (o aceptación tácita), la **2.ª exhibición es exigible**. **El código fuente y los repositorios finales se entregan al liquidarse el pago total** (Cláusula Novena III + Décima Sexta).

> Tras el lanzamiento: **estabilización de 2 a 4 semanas** con atención reforzada sin consumir bolsa de horas; luego inicia la iguala mensual.

---

## 2 · Proyecto B (BDS) — en paralelo, por fases

Plazo propio de 8 semanas desde la firma del Addendum. **No reescribe** el motor de captación: reutiliza el cuestionario, el middleware/CRM, la escritura idempotente y la consola interna de A, que quedan operativos entre las Semanas 3 y 6 de A. Aprobación por Cláusula Décima (dos hitos: 50% y total).

| Fase | EL PRESTADOR entrega | SW aporta / aprueba |
|---|---|---|
| **1 · Preparación** | Cierre del listado de requerimientos | **Número oficial de WhatsApp Business** verificado en Meta + **plantillas de mensaje aprobadas**; plantilla de operadores, horarios y lista de personal autorizado |
| **2 · Integración** | WhatsApp Business API (mensajería, plantillas, multiagente); rol de operador en la consola; BES por WhatsApp (texto, respaldo 24/7); capa de enrutamiento (human-first → BES → escalación) | Acceso al API del CRM (ya cubierto por el middleware de A) |
| **3 · Validación** | Pruebas de extremo a extremo por los tres caminos (operador, BES, walk-in) contra el CRM real, sin duplicados; Canal 2 y *speed-to-lead* visibles en el tablero | Aprobación 50% (hito 1) |
| **4 · Lanzamiento** | BDS en operación; ajuste de reglas de enrutamiento con datos reales | Aprobación total (hito 2) → 2.ª exhibición exigible |

**Exclusiones de B:** telefonía y voz por WhatsApp (B opera por texto); los costos de operación (modelo, mensajería WhatsApp) los cubre SW directamente a los proveedores (Cláusula Décima Cuarta).

---

## 3 · Plantillas (aprobación escalonada) — Anexo Dos I.1

| Plantilla | Aplica a | Aprobación |
|---|---|---|
| Home | 1 | S2 |
| Club | 49 | S2 (pilar) |
| Hub de amenidad | 10 | S2 (pilar) |
| Clase premium (Les Mills) | 7 | S3–4 |
| Clase individual | 47 | S3–4 |
| Hub de perfil de usuario | 5 | S3–4 |
| FitKidz | 1 | S3–4 |
| Membresías (data del CRM) | 6 | S3–4 |
| Bajar de peso (YMYL, firma médica) | 1 | S5–6 |
| Personal training | 1 | S5–6 |
| Blog SEO | 20 | S5–6 |
| **Total** | **148** | |

## 4 · Matrices que SW debe validar

| Matriz | Para qué | Cuándo |
|---|---|---|
| Amenidades × club | Qué amenidad ofrece cada club | S2–3 |
| Clases × club | Qué clase se imparte en cada club | S2–3 |
| **Beneficios: 54 clases × 5 perfiles** | Contenido de perfiles y de "bajar de peso"; **validada contra literatura médica** (YMYL, Anexo Dos I.2) | S3–5 |
| Contraindicaciones (Q12) | Filtro médico del cuestionario | S3 |
| Planes CRM → 6 páginas de membresía | Asignación por criterio estable | S3 |

## 5 · SEO técnico (Anexo Dos I.2)

- **SSR** de las 148 páginas (49 de club crawleables — KPI titular).
- **Schema JSON-LD** por tipo: `HealthClub` + `LocalBusiness` (club, con GPS/horarios/teléfono), `Course` (clase), `FAQPage`, `BreadcrumbList`.
- Arquitectura y **enlazado interno** de 148 páginas; hubs semánticos por amenidad y ubicación; rutas limpias.
- **Redirecciones 301** cubriendo los **136 enlaces rotos**.
- **6 plantillas maestras** de contenido asistido por IA en es-MX, con **revisión humana editorial** antes de publicar.
- **YMYL reforzado** para salud (hub bajar de peso con firma médica de cédula vigente).
- **49 fichas de Google Business** (Google Business Profile API, OAuth 2.0). *Restricción honesta: Google controla la verificación y toma semanas; por eso arranca en S1.*
- **Medición:** GSC + GA4 desde el inicio; instrumentación de eventos; reporte ejecutivo semanal.

## 6 · KPIs comprometidos (Anexo Dos IV) — compuerta de aceptación

| KPI | Base → Meta | Verificación |
|---|---|---|
| Páginas de club crawleables (SSR) | 0 → 49 de 49 | Search Console |
| Enlaces rotos | 136 → 0 | Semrush |
| Schema JSON-LD por club | 0 → 49 | Rich Results Test |
| Páginas sin H1 | 11 → 0 | Semrush |
| Cobertura keywords *unbranded* | 31.1% → 55–65% | Semrush |
| Core Web Vitals | LCP<2.5 s · INP<200 ms · CLS<0.1 | PageSpeed Insights |
| Accesibilidad | WCAG 2.2 AA | axe-core |

*No se garantizan posiciones específicas ni volúmenes de tráfico (factores externos); sí la base técnica que los habilita.*

---

## 7 · Dónde vive el código y cuándo (definición técnica de la entrega y la garantía)

Traducción técnica de los candados que ya trae el contrato (Cláusula Novena III y Décima Sexta). Tres ambientes, tres momentos:

1. **Construcción (S1–S7) — infraestructura de EL PRESTADOR.** Repositorios privados en la organización de EL PRESTADOR; despliegues a un **staging/preview** protegido; base de datos y assets en nuestra infra. SW revisa y aprueba por **enlaces de vista previa**. **Nada corre en el servidor de SW.**

2. **Cutover (S8) — despliegue al servidor de SW, condicionado al pago.** Se aprovisiona el servidor (Bloque F), se despliega el build de producción y se apunta el DNS. **Precondición: la 1.ª exhibición (exigible en S4) debe estar pagada.** Si está vencida, opera la **suspensión de entregas** de la Cláusula Novena III — no hay cutover.

3. **Liberación final — repos + titularidad, contra liquidación total.** El **código fuente, los repositorios con historial y la transferencia de titularidad** se entregan **solo al liquidarse el Pago Único total** (Novena III + Décima Sexta). Hasta entonces, en garantía. Lo puesto en producción sigue operando; SW no puede redeployar ni modificar de forma independiente sin los repos.

**Palancas contractuales de cobro:** stand-by por retraso de SW (USD $350/día, hasta 25% del Pago Único, Cláusula Décima Quinta); interés moratorio 2% mensual; suspensión de entregas ante falta de pago exigible; rescisión de pleno derecho tras 5 días hábiles sin subsanar.
