# Brief de sección · Developer Sr BES / Integraciones / WhatsApp

> Documento individual. Los términos comerciales están en tu contrato, no aquí.

## 1 · El proyecto completo (mapa para ubicarte)

Sports World (49 clubes de fitness en México) contrató tres proyectos:

- **Proyecto A — Rediseño web (8 semanas, el central):** sitio nuevo de ~148 páginas, con un
  **cuestionario inteligente** que genera por IA una "experiencia ideal" personalizada para
  cada prospecto y un **brief automático para el asesor** de ventas; **BES**, el agente
  conversacional del sitio (texto y voz); y un **middleware** que escribe cada lead en el CRM
  de Sports World.
- **Proyecto B — BDS por WhatsApp (8 semanas, en paralelo, condicional):** el mismo motor de
  BES atendiendo **100% por texto** los leads de campañas de redes sociales, con **consola de
  interacción para operadores humanos** que toman la conversación cuando hace falta.
- **Proyecto C — Academia (condicional):** role-play de voz para 200 asesores **sobre el mismo
  motor de BES** (persona cards sobre un solo motor, no 15 agentes distintos).

Tu sección es la columna vertebral de los tres: **el motor conversacional y el flujo de datos
lead → CRM se construyen una vez, en el Proyecto A, y se reutilizan en B y C.**

**Cómo se produce:** Claude Code genera el boilerplate de integración y la documentación; tú
diseñas la arquitectura, las pruebas e2e y decides qué se acepta. **El plan:** S2 credenciales
CRM del cliente → S3 middleware → S4 **gate 50%** (captura de leads viva) → S6 BES con
cobertura total + consola → **gate Completitud** → S7 **Visto Bueno** → S8 **go-live**.

**Tablero:** https://erictoled564.github.io/SW-Business-Development-System/consola/

## 2 · Tu sección

Eres el **dueño de todo lo que conversa y de todo lo que se integra**:

- **Middleware CRM (S3):** escritura **idempotente** de leads al CRM de Sports World (un lead
  duplicado jamás crea dos registros), con reintentos, cola y monitoreo. Es la pieza que
  desbloquea el gate 50%.
- **BES web (S6):** agente conversacional con cobertura total del catálogo (RAG sobre la
  knowledge base), texto y voz (plataforma de voz tipo ElevenLabs), con handoff a humano.
- **Consola interna (S6):** interfaz para asesores/walk-ins donde se ve el brief del lead
  generado por IA y el historial de conversación del BES.
- **Proyecto B (condicional):** integración del motor BES a **WhatsApp Business API** (ventana
  de 24 h, plantillas utility/marketing) y consola de operadores.
- Regla de privacidad de la Academia (te toca custodiarla técnicamente): el sistema de
  role-play **nunca accede a conversaciones reales asesor–cliente** y nada conversacional se
  integra al CRM — al CRM solo van métricas de resultado.

## 3 · Lo que recibes (inputs)

| Input | De quién | Cuándo |
|---|---|---|
| Credenciales y API del CRM productivas | Cliente (vía dirección) | S2 (`api-crm`) |
| Knowledge base (catálogo clubes/clases) | Tech Lead | S1 (`kb`) |
| Contrato de datos del cuestionario (campos, taxonomía Q3/Q4) | Tech Lead | S2 |
| Guiones y tono de BES aprobados | SEO (tono) + dirección | S4–S5 |

## 4 · Lo que entregas (outputs)

| Entregable (id del tablero) | Semana | Quién lo usa después |
|---|---|---|
| `middleware` — escritura idempotente al CRM | S3 | Gate 50% (captura de leads viva) |
| `bes` — BES web con cobertura total | S6 | Gate Completitud |
| `consola` — consola interna de asesores | S6 | Gate Completitud |
| Firma del gate Completitud (junto con SEO) | S6 | Desbloquea QA final |
| (Condicional B) BES-WhatsApp + consola de operadores | según addendum | Operación del BDS |

## 5 · Tus interacciones

- **Tech Lead:** contraparte diaria; validan juntos el flujo completo cuestionario →
  experiencia ideal → middleware → CRM → brief del asesor, de punta a punta.
- **Cliente (vía dirección):** pruebas contra el CRM real en sandbox y producción; tú nunca
  gestionas la relación comercial, solo la técnica programada.
- **SEO:** tono y guiones de BES en es-MX.
- **Rituales:** daily async de 10 min; gate review de los viernes.

## 6 · Fuera de tu alcance

Páginas y frontend del sitio (Tech Lead/Dev Jr), dirección de arte, estrategia SEO, contenido
del curso de la Academia (equipo del Proyecto C), y términos comerciales de otros miembros
del equipo. Las llaves de producción de IA son del cliente; las de desarrollo, del proyecto —
nunca se mezclan.

## 7 · Herramientas

Tablero de la consola (arriba); repo GitHub (PRs, nunca commits directos a main); presupuesto
de calidad en `ejecucion/00-modelo/gates-de-calidad.md`; reglas del orquestador en
`ejecucion/CLAUDE.md`.
