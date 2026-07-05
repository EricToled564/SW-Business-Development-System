# Brief de sección · Art Director IA

> Documento individual. Los términos comerciales están en tu contrato, no aquí.

## 1 · El proyecto completo (mapa para ubicarte)

Sports World (49 clubes de fitness en México) contrató tres proyectos:

- **Proyecto A — Rediseño web (8 semanas, el central):** sitio nuevo de ~148 páginas (49 fichas
  de club, 54 páginas de clase, hubs de categoría, perfiles y membresías), con un **cuestionario
  inteligente** que genera por IA una "experiencia ideal" personalizada para cada prospecto y un
  **brief automático para el asesor** de ventas; **BES**, el agente conversacional del sitio; y
  un **middleware** que escribe cada lead en el CRM de Sports World.
- **Proyecto B — BDS por WhatsApp (paralelo, condicional)** y **Proyecto C — Academia
  (condicional):** ambos reutilizan el motor conversacional; no tienen carga visual propia
  relevante para tu sección.

**Objetivo declarado del cliente: la mejor página de fitness de México.** La vara visual se
mide cada mes contra 3 referentes internacionales; el gate no cierra si no ganamos 3 de 4
dimensiones comparadas.

**Cómo se produce:** Claude Code genera lotes desde plantillas aprobadas; los humanos definen
specs, curan y firman gates. **El plan:** S1 sistema visual → S2 **gate Pilar** → S3–S4
**gate 50%** → S5–S6 **gate Completitud** → S7 **Visto Bueno** → S8 **go-live**.

**Tablero:** (pendiente: se publicará desde el repositorio interno separado)

## 2 · Tu sección

Eres el **dueño de la identidad visual del sitio y del pipeline de imagen por IA**.

- Defines el **sistema visual completo** (S1): tokens, tipografía, paleta, grid, componentes,
  arte de las plantillas de home, ficha de club, hub, clase y membresías.
- Diseñas y operas el **pipeline de imagen IA**: a partir de fotografías reales de referencia
  del cliente (Anexo Uno) se generan variantes con IA, se les aplica estilo y upscale con
  **Topaz / DaVinci Resolve (API)**, y tú **curas pieza por pieza** lo que se publica. Ninguna
  imagen entra al sitio sin tu aprobación.
- **Firmas el gate Pilar (S2)** junto con SEO: home + 1 ficha + 1 hub aprobados es TU firma de
  que la plantilla escala a 148 páginas sin degradarse.
- Auditas visualmente cada lote (fichas S4, hubs S4, clases S5) por muestreo.

## 3 · Lo que recibes (inputs)

| Input | De quién | Cuándo |
|---|---|---|
| Brand book de Sports World + fotografías de referencia por club | Cliente (vía dirección) | S1 (`anexo-uno`) |
| Spec de página (estructura y contenidos por plantilla) | `ejecucion/04-plantillas/spec-de-pagina.md` | S1 |
| Hallazgos de implementación (qué no escala) | Tech Lead / Dev Jr | S1–S2 |
| Lotes generados para auditoría visual por muestreo | Tech Lead | S3–S6 |

## 4 · Lo que entregas (outputs)

| Entregable (id del tablero) | Semana | Quién lo usa después |
|---|---|---|
| `visual` — sistema visual + plantillas v1 | S1 | Dev Jr implementa; Tech Lead genera lotes |
| Firma del `pilar` — gate Pilar | S2 | Desbloquea toda la producción masiva |
| Biblioteca de imágenes curadas por lote (referencia → IA → estilo → upscale) | S3–S6 | Fichas, hubs, clases |
| Visto bueno visual por gate (50%, Completitud) | S4, S6 | Cierre de gates |

## 5 · Tus interacciones

- **Dev Jr:** implementa tu sistema; le resuelves dudas de intención de diseño directamente.
- **Tech Lead:** te canaliza los lotes para auditoría y te regresa restricciones técnicas
  (peso de imagen, formatos, CWV — una imagen que rompe Core Web Vitals no entra, por bella
  que sea).
- **SEO:** co-firman el gate Pilar; alineación de jerarquía visual con jerarquía de contenido.
- **Rituales:** daily async de 10 min; gate review de los viernes.

## 6 · Fuera de tu alcance

Código e implementación (Tech Lead/Dev Jr), contenido y keywords (SEO), middleware/BES/consola
(Dev Integraciones), Proyectos B y C, y términos comerciales de otros miembros del equipo.

## 7 · Herramientas

Tablero de la consola (arriba) para estados y entregas; las imágenes finales se entregan como
lote versionado en el repo (el Tech Lead te da la ruta y el flujo de subida); presupuesto de
calidad en `ejecucion/00-modelo/gates-de-calidad.md`.
