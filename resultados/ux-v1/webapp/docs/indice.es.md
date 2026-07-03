# Sports World México · Índice de documentos
## Mapa y localizador de toda la documentación del proyecto

Punto de entrada al conjunto documental. Cada documento es **autónomo** (puede leerse de forma independiente); este índice indica qué contiene cada uno, a quién está dirigido y dónde consultar cada tema.

La documentación se organiza en **dos proyectos**, cada uno con su propio grupo de documentos: **Proyecto A · Rediseño Web** (la plataforma central: sitio, cuestionario, BES, CRM, funnel) y **Proyecto B · Business Development System** (extiende la captación a WhatsApp — alcance y costo aparte).

## Proyecto A · Rediseño Web

| # | Documento | Propósito | Audiencia |
|---|---|---|---|
| 1 | [**Resumen Ejecutivo**](#resumen) | Visión del sistema completo (sitio + BDS), con capítulo central dedicado al rediseño web: problema, objetivos, arquitectura, BES, negocio, las 8 semanas y KPIs. | Dirección, negocio |
| 2 | [**Arquitectura de Experiencia (UX)**](#experience) | El flujo de experiencia ideal y el **mapa del sitio** (las 148 páginas): navegación, fases, cuestionario, menús dinámicos, reglas de negocio, datos y arquitectura de información. | Producto, UX, desarrollo, SEO |
| 3 | [**Estrategia Técnica**](#technical) | Stack, agente BES, **integración por middleware** y datos del CRM, migración, seguridad, método y calidad, **funnel de resultados y dashboard (§10)**, **captación unificada de leads (§11)** y los **estándares del API del cliente (§12)**. | Sistemas / TI |
| 4 | [**Plan de Ejecución**](#execution) | Estructura del equipo, gobierno, cronograma de 8 semanas con criterios de salida, KPIs técnicos, riesgos y control de cambios. | Dirección, TI, PMO |
| 5 | [**Seguridad del sitio**](#seguridad) | Protección de datos personales: minimización y no retención (los datos viven brevemente; sin respaldo tras copiarse al CRM). | TI, Legal, negocio |
| 6 | [**Glosario**](#glosario) | Definiciones únicas de términos técnicos y de negocio usados en todo el conjunto. | Todos |
| 7 | [**Contrato**](#contrato) | Marco mercantil: objeto, contraprestación, forma de pago, propiedad intelectual y datos personales. | Dirección, Legal |
| 7a | [**Anexo Uno · Aportaciones de SW**](#contrato:anexo-uno-aportaciones-de-sports-world-requerimientos-a-cargo-del-cliente) | Requerimientos a cargo del cliente (sistemas y marketing), exhaustivo, por bloques y con responsables. | Dirección, TI, Legal |
| 7b | [**Anexo Dos · Entregables, soporte y operación**](#contrato:anexo-dos-entregables-especficos-de-los-servicios) | Entregables específicos, migración, soporte recurrente, cronograma de 8 semanas y KPIs comprometidos. | Dirección, TI, Legal |
| 8 | [**Minuta · 22 de junio de 2026**](#minuta-2026-06-22) | Registro de la reunión inicial de requerimientos técnicos y contractuales. | Todos |
| 9 | [**Seguimiento · 22 de junio de 2026**](#seguimiento-2026-06-22) | Cada duda/punto abierto de la reunión → cómo se resolvió y dónde quedó en la documentación. | Todos |
| 10 | [**Status de Entregables Sports World**](#aportaciones) | Tablero de seguimiento de lo que aporta SW (sistemas y marketing): responsable, fecha límite, status y semáforo. El detalle contractual vive en el Anexo Uno. | TI, Marketing, PMO |
| 11 | [**Auditoría inicial del sitio**](#auditoria) | "El Gigante Invisible": diagnóstico SEO y de captación de demanda (datos Semrush). | Negocio, SEO, TI |
| 12 | [**Calculadora de ROI**](#roi) | Estimación interactiva del retorno de la inversión en captación digital. | Dirección, negocio |
| 13 | [**Demo Cuestionario Inteligente**](#demo) | Demostración interactiva del flujo de experiencia ideal. | Negocio, dirección |

## Proyecto B · Business Development System (BDS — alcance y costo aparte)

| # | Documento | Propósito | Audiencia |
|---|---|---|---|
| B1 | [**BDS · Resumen Ejecutivo**](#bds-resumen) | El problema (speed-to-lead) y la solución de captación multicanal en tiempo real. | Dirección, Sistemas |
| B2 | [**BDS · Flujo de conversión**](#bds-flujo) | Recorrido end-to-end y árbol de enrutamiento (operador → BES → asesor). | Sistemas, Operación |
| B3 | [**BDS · Canales y enrutamiento**](#bds-canales) | Reglas human-first, respaldo con BES, horarios y SLA de contacto. | Operación, Sistemas |
| B4 | [**BDS · Estrategia Técnica**](#bds-tecnica) | WhatsApp Business API, BES por WhatsApp (texto), consola de operadores. | Sistemas / TI |
| B5 | [**BDS · Medición y funnel**](#bds-medicion) | Speed-to-lead por canal y operador, hasta nueva membresía. | Dirección, Sistemas |
| B6 | [**BDS · Addendum contractual**](#bds-anexo) | Alcance, entregables y contraprestación adicional del Proyecto B. | Dirección, Legal |

## Localizador rápido (¿dónde está cada tema?)

Cada ubicación es un enlace directo: abre el documento y salta a la sección exacta.

| Tema | Documento · ubicación |
|---|---|
| Las 148 páginas y su desglose | [Arquitectura de Experiencia · Mapa del sitio](#experience:6-mapa-del-sitio) · [Contrato · Anexo Dos I.1](#contrato:i1-arquitectura-del-sitio-148-pginas) |
| Cuestionario y flujo del prospecto | [Arquitectura de Experiencia · §2 Cuestionario](#experience:2-el-cuestionario-como-nica-fuente-de-personalizacin) |
| Agente BES (web; voz/texto, recordatorios WhatsApp) | [Estrategia Técnica · §5 BES](#technical:5-bes-el-agente-de-voz-y-texto) · [Contrato · Cláusulas](#contrato:clusulas) · [Anexo Dos Sección II](#contrato:seccin-ii-entregables-del-servicio-ii-agente-bes) |
| Integración con CRM (middleware sobre el API estándar) | [Estrategia Técnica · §2](#technical:2-los-cuatro-datos-y-las-integraciones-con-sports-world) · [Contrato · Anexo Uno Bloque A](#contrato:bloque-a-documentacin-ambiente-de-pruebas-y-responsable-nico-da-1) · [Bloque B](#contrato:bloque-b-credenciales-productivas-e-integraciones-fin-de-la-semana-2) · [Bloque D](#contrato:bloque-d-puntos-de-acceso-para-el-agente-bes-en-paralelo-a-a-b-y-c) |
| **Estándares del API del cliente** (referencia íntegra) | [Estrategia Técnica · §12](#technical:12-estndares-del-api-http-restful-de-sports-world) |
| Datos del CRM y **precios** (por club / ciudad / nacional) | [Estrategia Técnica · §2](#technical:2-los-cuatro-datos-y-las-integraciones-con-sports-world) · [Contrato · Anexo Uno](#contrato:anexo-uno-aportaciones-de-sports-world-requerimientos-a-cargo-del-cliente) · [Anexo Dos I.3](#contrato:i3-componente-diseo-contenido-visual-y-desarrollo) |
| **Funnel de resultados y dashboard** | [Estrategia Técnica · §10](#technical:10-funnel-de-resultados-y-dashboard-de-medicin) · [Contrato · Anexo Dos I.3](#contrato:i3-componente-diseo-contenido-visual-y-desarrollo) |
| **Captación de leads** (sitio, BES y consola interna) | [Estrategia Técnica · §11](#technical:11-captacin-unificada-de-leads-sitio-bes-y-consola-interna) |
| Recursos de **Google** a conectar (GA4, GSC, GBP, GTM, Ads) | [Contrato · Anexo Uno E.4](#contrato:bloque-e-aportaciones-de-marketing-y-marca-a-cargo-del-cliente) |
| Cronograma de 8 semanas y gates | [Plan de Ejecución · §3 Cronograma](#execution:3-el-cronograma-de-ocho-semanas) · [Contrato · Anexo Dos I.4](#contrato:i4-cronograma-de-8-semanas-y-aprobaciones-a-cargo-de-el-cliente) |
| Precio, forma de pago y stand-by | [Contrato · Cláusulas (Segunda, Tercera y Novena)](#contrato:clusulas) |
| Soporte, SLA, bolsa de 8 horas y estabilización | [Contrato · Anexo Dos Sección III](#contrato:seccin-iii-entregables-del-servicio-iii-servicios-recurrentes) |
| Aportaciones de SW (sistemas y marketing) | [Status de Entregables Sports World](#aportaciones) · [Contrato · Anexo Uno](#contrato:anexo-uno-aportaciones-de-sports-world-requerimientos-a-cargo-del-cliente) |
| KPIs comprometidos | [Contrato · Anexo Dos Sección IV](#contrato:seccin-iv-kpis-comprometidos-estrategia-comercial) |
| Calculadora de ROI | [Calculadora de ROI](#roi) |
| Datos personales y seguridad | [Seguridad del sitio](#seguridad:proteccin-de-los-datos-personales-minimizacin-y-no-retencin) · [Contrato · Cláusulas (Sexta Ter y Décima Primera)](#contrato:clusulas) |
| Diagnóstico SEO y línea base | [Auditoría inicial · El Gigante Invisible](#auditoria:el-gigante-invisible-diagnstico-de-captura-de-demanda-digital) |
| **BDS · captación multicanal en tiempo real** (Proyecto B) | [BDS · Resumen](#bds-resumen) · [Flujo](#bds-flujo) · [Canales y SLA](#bds-canales) · [Técnica](#bds-tecnica) |
| **Brief del asesor** (documento personalizado del comprador potencial, con sugerencias de venta) | [Arquitectura de Experiencia · §1.2, fase `briefing`](#experience:12-las-siete-fases) · [BDS · Resumen](#bds-resumen) · [BDS · Flujo](#bds-flujo) |
| **Speed-to-lead / tiempo al primer contacto** | [BDS · Medición y funnel](#bds-medicion) |
| **BES por WhatsApp (solo texto)** | [BDS · Estrategia Técnica](#bds-tecnica) · [Estrategia Técnica · §5](#technical:5-bes-el-agente-de-voz-y-texto) |
| **Separación de proyectos A/B y costo adicional** | [Contrato · Cláusula Primera Bis](#contrato:clusulas) · [BDS · Addendum](#bds-anexo) |
| Definición de términos | [Glosario](#glosario) |
