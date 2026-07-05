# Coordinación: calendario, handoffs y rituales

**Calendario (el comprometido en el Plan de Ejecución §3; aquí, quién firma cada gate):**

| Semana | Gate | Producción IA (lotes) | Firma |
|---|---|---|---|
| S1 | Kickoff + checklist | Setup repo/CI, extracción knowledge base, sistema visual v1 | Tech Lead |
| S2 | **Pilar** | Home + 1 ficha + 1 hub sobre plantillas; pipelines listos | Diseñador + Editor |
| S3–S4 | **50%** | Lotes: 49 fichas + hubs + perfiles; API captura de leads | Tech Lead + QA |
| S5–S6 | **Completitud** | Todas las páginas; flujo completo; BES cobertura total | Integraciones + Editor |
| S7 | **Visto bueno** | QA final, WCAG, CWV, migración de URLs | QA (firma dura) |
| S8 | **Lanzamiento** | Go-live, redirects, training, monitoreo | Tech Lead |

**Tablero de handoffs** (mismo patrón de semáforo del tablero de aportaciones): cada dependencia
entre roles se registra con entregable, de quién → a quién, fecha y estado
(🔴 vencido / 🟡 por vencer / 🟢 en tiempo). Los bloqueos del cliente (Anexo Uno) se espejan aquí.

**Rituales (async-first, mínimo costo de coordinación):**
- **Daily async (10 min):** cada rol publica ayer/hoy/bloqueos en el canal; el Tech Lead convierte
  bloqueos en filas del tablero. Sin junta.
- **Gate review (viernes, 45 min, única junta semanal):** demo de lo producido, presupuesto de
  calidad en pantalla, comparación contra referentes, y firma o lista de brechas.
- **Retro de plantilla (15 min post-gate):** qué corregir en plantillas/skills para que el
  siguiente lote salga limpio — el retrabajo se paga una vez, en el generador.
