# Brief de sección · Especialista SEO Sr (México)

> Documento individual. Los términos comerciales están en tu contrato, no aquí.

## 1 · El proyecto completo (mapa para ubicarte)

Sports World (49 clubes de fitness en México) contrató tres proyectos:

- **Proyecto A — Rediseño web (8 semanas, el central):** sitio nuevo de ~148 páginas (49 fichas
  de club, 54 páginas de clase, hubs de categoría, perfiles y membresías), con un **cuestionario
  inteligente** que genera por IA una "experiencia ideal" personalizada para cada prospecto y un
  **brief automático para el asesor** de ventas; **BES**, el agente conversacional del sitio; y
  un **middleware** que escribe cada lead en el CRM de Sports World.
- **Proyecto B — BDS por WhatsApp (paralelo, condicional)** y **Proyecto C — Academia
  (condicional):** reutilizan el motor conversacional; no generan páginas indexables.

**Cómo se produce:** Claude Code redacta los borradores y los meta tags en masa desde
plantillas aprobadas; los humanos definen la estrategia, curan por muestreo y firman gates.
Estándar no negociable: Lighthouse ≥ 95 (incluido SEO), CWV en verde, schema válido, 0 enlaces
rotos. **El plan:** S1 setup → S2 **gate Pilar** → S3–S4 **gate 50%** → S5–S6 clases/blog y
**gate Completitud** → S7 QA final + migración de URLs → S8 **go-live**.

**Tablero:** https://erictoled564.github.io/SW-Business-Development-System/consola/

## 2 · Tu sección

Eres el **dueño de la estrategia de contenido orgánico y del estándar editorial es-MX**.
La IA redacta; tú decides QUÉ se redacta, PARA QUÉ búsqueda, y si el resultado tiene la
calidad y el tono para publicarse.

- Defines la **estrategia de keywords por tipo de página** (S2): intención de búsqueda y
  estructura objetivo para fichas de club (local SEO), clases, hubs, membresías y blog.
- **Co-firmas el gate Pilar (S2):** tu firma valida que la plantilla editorial (jerarquía H,
  bloques de contenido, schema, interlinking) escala a todo el sitio.
- **Revisión editorial por muestreo (≥20% de cada lote):** fichas (S4), hubs (S4) y sobre todo
  el lote de **54 páginas de clase + blog (S5)**, que es tu entregable mayor del tablero.
- Diseñas el **mapa de redirects 301** de las URLs actuales y lo validas en el QA final (S7).
- Vigila el tono: español de México, voz de marca, cero contenido inventado (todo dato sale
  del catálogo del cliente).

## 3 · Lo que recibes (inputs)

| Input | De quién | Cuándo |
|---|---|---|
| Knowledge base (catálogo real de clubes/clases) | Tech Lead | S1 (`kb`) |
| Plantillas y sistema visual (jerarquía de bloques) | Art Director / Tech Lead | S1–S2 |
| Lotes generados para muestreo editorial | Tech Lead | S3–S6 |
| Inventario de URLs actuales del sitio | Cliente (vía dirección) | S1 (`anexo-uno`) |

## 4 · Lo que entregas (outputs)

| Entregable (id del tablero) | Semana | Quién lo usa después |
|---|---|---|
| `keywords` — estrategia de keywords por tipo de página | S2 | Tech Lead la integra a las plantillas antes de generar lotes |
| Firma editorial del `pilar` | S2 | Desbloquea producción masiva |
| Visto bueno editorial del gate 50% y Completitud | S4, S6 | Cierre de gates |
| `clases` — lote 54 páginas de clase + blog (curado) | S5 | Gate Completitud |
| Mapa de redirects 301 validado | S7 | QA final y go-live |

## 5 · Tus interacciones

- **Tech Lead:** tu contraparte diaria — le entregas estrategia y curaduría, te entrega lotes
  y métricas del presupuesto de calidad.
- **Art Director:** co-firma del Pilar; jerarquía visual vs. jerarquía de contenido.
- **Medición del funnel:** el dashboard de analítica lo construye el Tech Lead; tú defines qué
  consultas orgánicas y qué conversiones de contenido deben verse en él, no lo construyes.
- **Rituales:** daily async de 10 min; gate review de los viernes.

## 6 · Fuera de tu alcance

Implementación técnica y dashboards (Tech Lead), dirección de arte (Art Director),
middleware/BES/consola (Dev Integraciones), Proyectos B y C, y términos comerciales de otros
miembros del equipo.

## 7 · Herramientas

Tablero de la consola (arriba) para estados y entregas; la curaduría editorial se hace sobre
PRs en GitHub (el Tech Lead te enseña el flujo en 15 minutos: ver la página, comentar, aprobar);
presupuesto de calidad en `ejecucion/00-modelo/gates-de-calidad.md`.
