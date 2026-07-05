# Brief de sección · Developer Jr (frontend / diseño)

> Documento individual. Los términos comerciales están en tu contrato, no aquí.

## 1 · El proyecto completo (mapa para ubicarte)

Sports World (49 clubes de fitness en México) contrató tres proyectos:

- **Proyecto A — Rediseño web (8 semanas, el central):** sitio nuevo de ~148 páginas (49 fichas
  de club, 54 páginas de clase, hubs de categoría, perfiles y membresías), con un **cuestionario
  inteligente** que genera por IA una "experiencia ideal" personalizada para cada prospecto y un
  **brief automático para el asesor** de ventas; **BES**, el agente conversacional del sitio
  (texto y voz); y un **middleware** que escribe cada lead en el CRM de Sports World.
- **Proyecto B — BDS por WhatsApp (paralelo, condicional):** el motor de BES atendiendo por
  texto los leads de campañas de redes sociales.
- **Proyecto C — Academia (condicional):** capacitación de 200 asesores con role-play de voz IA.

**Cómo se produce:** Claude Code genera los lotes de páginas y componentes a partir de
plantillas aprobadas; los humanos definen specs, curan y firman gates. Estándar no negociable:
Lighthouse ≥ 95, Core Web Vitals en verde, WCAG 2.2 AA, 0 enlaces rotos.

**El plan:** S1 setup + sistema visual → S2 **gate Pilar** → S3–S4 lotes y **gate 50%** →
S5–S6 **gate Completitud** → S7 **Visto Bueno** → S8 **go-live**.

**Tablero:** https://erictoled564.github.io/SW-Business-Development-System/consola/

## 2 · Tu sección

Eres las **manos de implementación frontend** del sistema visual, reportando al Tech Lead.
Tu diferenciador no es volumen de código (eso lo hace la IA): es **ojo de diseño** — que lo
implementado se vea exactamente como lo aprobó el Art Director, en todos los breakpoints.

- Implementas y pules los componentes y plantillas del sistema visual (tokens, tipografía,
  espaciado, estados hover/focus, animaciones).
- Ajustas los lotes generados por IA cuando el resultado se desvía del diseño aprobado.
- Resuelves los hallazgos visuales y de accesibilidad que salgan del QA de cada gate.
- Preparas variantes responsivas y verificas el pixel-perfect contra las plantillas.

## 3 · Lo que recibes (inputs)

| Input | De quién | Cuándo |
|---|---|---|
| Sistema visual + plantillas v1 (tokens, componentes, referencias) | Art Director IA | S1 |
| Asignaciones de componentes/páginas y revisión de tus PRs | Tech Lead | diario |
| Assets visuales curados (imágenes finales por lote) | Art Director IA | por lote |
| Hallazgos de QA a corregir | Tech Lead (gates) | S2, S4, S6, S7 |

## 4 · Lo que entregas (outputs)

| Entregable | A quién | Cuándo |
|---|---|---|
| Componentes/plantillas implementados (PRs) | Tech Lead (revisa y mergea) | S1–S2, hacia el gate Pilar |
| Correcciones visuales sobre lotes (fichas, hubs, clases) | Tech Lead | S3–S6 |
| Fixes de QA visual/accesibilidad | Tech Lead | S7 |

Tú no firmas gates; tu trabajo entra al sitio únicamente vía PRs aprobados por el Tech Lead.

## 5 · Tus interacciones

- **Tech Lead:** tu único canal de asignación y revisión; daily async de 10 min.
- **Art Director IA:** dudas de intención de diseño se resuelven directo con él/ella,
  con el Tech Lead en copia.
- **Gate review de los viernes:** presente para ver qué se aprueba y qué regresa.

## 6 · Fuera de tu alcance

Decisiones de arquitectura técnica (Tech Lead), dirección de arte y generación de imágenes
(Art Director), contenido y SEO, middleware/CRM/BES, Proyectos B y C, y términos comerciales
de otros miembros del equipo.

## 7 · Herramientas

Tablero de la consola (arriba); repo GitHub (PRs, nunca commits directos a main); presupuesto
de calidad en `ejecucion/00-modelo/gates-de-calidad.md` — un PR en rojo no se mergea.
