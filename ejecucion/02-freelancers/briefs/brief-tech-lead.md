# Brief de sección · Tech Lead (UX Developer Sr)

> Documento individual. Los términos comerciales están en tu contrato, no aquí.

## 1 · El proyecto completo (mapa para ubicarte)

Sports World (49 clubes de fitness en México) contrató tres proyectos:

- **Proyecto A — Rediseño web (8 semanas, el central):** sitio nuevo de ~148 páginas (49 fichas
  de club, 54 páginas de clase, hubs de categoría, perfiles y membresías), con un **cuestionario
  inteligente** que genera por IA una "experiencia ideal" personalizada para cada prospecto y un
  **brief automático para el asesor** de ventas; **BES**, el agente conversacional del sitio
  (texto y voz); y un **middleware** que escribe cada lead en el CRM de Sports World.
- **Proyecto B — BDS por WhatsApp (8 semanas, en paralelo, condicional):** el mismo motor de BES
  atendiendo por texto los leads de campañas de redes sociales, con consola para operadores.
- **Proyecto C — Academia (10 semanas, condicional):** capacitación de 200 asesores con módulos
  interactivos + role-play de voz con IA, montado sobre el motor de BES.

**Cómo se produce:** Claude Code genera los lotes de páginas, código y contenido a partir de
plantillas aprobadas; los humanos definen specs, curan el resultado y **firman los gates**.
Estándar no negociable: Lighthouse ≥ 95, Core Web Vitals en verde, WCAG 2.2 AA, schema válido,
0 enlaces rotos (`ejecucion/00-modelo/gates-de-calidad.md`).

**El plan:** S1 setup + sistema visual → S2 **gate Pilar** (home + 1 ficha + 1 hub aprobados) →
S3–S4 lotes masivos y **gate 50%** → S5–S6 clases, BES y **gate Completitud** → S7 QA final y
**Visto Bueno** → S8 **go-live**.

**Tablero:** https://erictoled564.github.io/SW-Business-Development-System/consola/

## 2 · Tu sección

Eres el **dueño técnico del Proyecto A completo** y el único rol cercano a tiempo completo.
No hay project manager técnico por encima de ti: tú eres la autoridad técnica y el orquestador
del pipeline de IA; la coordinación general la lleva la dirección del proyecto.

- Montas y operas el repositorio, el CI y el **presupuesto de calidad** que bloquea cualquier
  PR en rojo.
- Diriges las sesiones de Claude Code: plantillas, skills, lotes (49 fichas, hubs, perfiles).
  La IA produce; tú especificas, revisas y decides qué se acepta.
- Extraes y estructuras la **knowledge base** (catálogo de clubes/clases del Anexo Uno).
- Diriges al Developer Jr (le asignas componentes, revisas sus PRs).
- **Firmas los gates técnicos y de QA:** gate 50%, gate Completitud, QA final y Visto Bueno
  (las filas con rol "QA" del tablero las firmas tú, apoyado en el QA automático y en la
  revisión adversarial de la IA), y ejecutas el go-live con redirects 301 y monitoreo.

## 3 · Lo que recibes (inputs)

| Input | De quién | Cuándo | Dónde |
|---|---|---|---|
| Checklist Anexo Uno firmado (catálogo, accesos, fotos) | Cliente (vía dirección) | S1 | Tablero `anexo-uno` |
| Sistema visual + plantillas v1 | Art Director IA | S1 | Tablero `visual` |
| Estrategia de keywords por tipo de página | SEO Sr | S2 | Tablero `keywords` |
| Credenciales y API del CRM productivas | Cliente | S2 | Tablero `api-crm` |
| Middleware CRM funcionando | Dev BES/Integraciones | S3 | Tablero `middleware` |
| Revisión editorial por lote (≥20% muestreo) | SEO Sr | continuo | PRs |

## 4 · Lo que entregas (outputs)

| Entregable (id del tablero) | Semana | Quién lo usa después |
|---|---|---|
| `setup` — repo + CI + presupuesto de calidad activo | S1 | Todo el equipo |
| `kb` — knowledge base extraída | S1 | Lotes de páginas, BES, cuestionario |
| `fichas` — lote de 49 fichas de club | S4 | Gate 50% |
| `hubs` — hubs + perfiles + membresías | S4 | Gate 50% |
| `completitud` — 148 páginas + flujo completo | S6 | QA final |
| Firma de `gate50`, `qa-final` y `vobo` | S4 / S7 | Desbloquean clases y go-live |
| `golive` — lanzamiento + redirects + training | S8 | Cliente |

## 5 · Tus interacciones

- **Con el Art Director:** recibes el sistema visual; le regresas hallazgos de implementación
  (qué no escala a 148 páginas) antes del gate Pilar.
- **Con SEO:** le entregas páginas generadas para su muestreo editorial; incorporas su
  estrategia de keywords en las plantillas antes de generar lotes.
- **Con el Dev BES/Integraciones:** le entregas la knowledge base y el contrato de datos del
  cuestionario; recibes el middleware y validan juntos el flujo lead → CRM de punta a punta.
- **Con el Dev Jr:** asignación diaria de componentes y revisión de PRs.
- **Rituales:** daily async de 10 min; gate review de los viernes (45 min, única junta).

## 6 · Fuera de tu alcance

Estrategia de contenido/keywords (SEO), dirección de arte y curación de imágenes (Art
Director), construcción del middleware/BES/consola (Dev Integraciones), Proyecto B y
Proyecto C, y cualquier término comercial de otros miembros del equipo.

## 7 · Herramientas

Tablero de la consola (arriba) para estados y entregas; repo GitHub para PRs (nunca commits
directos a main); reglas del orquestador en `ejecucion/CLAUDE.md`; presupuesto de calidad en
`ejecucion/00-modelo/gates-de-calidad.md`.
