# Guía de orquestación con Claude Code (Fable 5)

**Estructura de trabajo:**
- El repo de desarrollo del sitio lleva su propio `CLAUDE.md` (heredado de `ejecucion/CLAUDE.md`)
  con las reglas del proyecto, y las skills de `01-orquestacion/skills/` instaladas en `.claude/skills/`.
- **Una sesión por lote de trabajo** (p. ej. "fichas de club, lote 1: 10 clubes"), no sesiones eternas:
  el contexto corto mantiene la calidad. La sesión termina en un PR.
- **Workflows para los lotes grandes:** las 49 fichas y 54 páginas de clase se producen con
  workflows de agentes en paralelo (un agente por página, con la plantilla y los datos del club),
  seguidos de una pasada de verificación adversarial que intenta ENCONTRAR errores, no confirmarlos.
- **PR = unidad de aprobación humana.** El freelancer responsable revisa el PR con el reporte de QA
  automático ya en verde; aprueba, pide cambios, o corrige la plantilla y regenera.

**Cadencia diaria:** el Tech Lead abre el tablero de handoffs, asigna los lotes del día a sesiones
de Claude Code, y al cierre revisa PRs en verde. Los humanos no escriben código de producción salvo
excepciones que ellos mismos documenten en el PR (para que la plantilla/skill se corrija después).

**Costo de orquestación:** el consumo de Claude (sesiones + API) es parte del costo interno de
producción de FUPAI — no es un gasto de Sports World; se monitorea por semana contra el presupuesto
del proyecto.
