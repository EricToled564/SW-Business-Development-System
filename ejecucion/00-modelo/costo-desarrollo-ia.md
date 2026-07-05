# Costo de IA del desarrollo (bolsa interna de FUPAI)
## Estimado a tarifas publicadas por Anthropic (verificadas julio 2026) · TC contractual $17.80

**Separación de bolsas — quién absorbe qué:**
- **Sports World (operación, sitio ya vivo):** la generación de la experiencia ideal y del dossier
  por lead, BES, WhatsApp — documentado en *Gastos Operativos Variables* (repo del cliente).
- **FUPAI (desarrollo, semanas 1–8):** todo el consumo de Claude para diseñar, producir y verificar
  el sitio. **Este documento.** No se traslada al cliente: está dentro de la contraprestación.

## Tarifas publicadas de Anthropic (documento oficial de pricing, julio 2026)

| Modelo | Entrada /MTok | Salida /MTok | Uso en este proyecto |
|---|---|---|---|
| Claude Haiku 4.5 | $1.00 | $5.00 | QA masivo, validaciones, agentes mecánicos |
| Claude Sonnet 5 | $2.00 / $10.00 (intro **hasta 31-ago-2026**; después $3/$15) | — | Producción por lotes (148 páginas), integraciones |
| Claude Opus 4.8 | $5.00 | $25.00 | Revisión adversarial de arquitectura (puntual) |
| Claude Fable 5 | según página oficial al abrir la cuenta | — | Orquestación interactiva (cubierto por asiento de suscripción, no por API) |

Palancas de costo publicadas: **Batch API −50%**, **prompt caching** (lecturas a 0.1× — las 49
fichas comparten plantilla y catálogo: el contexto se cachea una vez por lote). Ojo con el
calendario: el precio introductorio de Sonnet 5 vence el **31 de agosto de 2026** — los lotes
pesados conviene correrlos antes.

## Modelo de consumo (8 semanas)

1. **Orquestación interactiva** (Tech Lead dirigiendo sesiones de Claude Code con Fable 5):
   se paga por **suscripción** (asiento Max 20x, $200 USD/mes), no por token — es la forma más
   barata de uso interactivo intensivo.
2. **Producción programática por lotes** (workflows: generar + verificar 148 páginas, 2–3 pasadas
   completas + agentes de QA): ~40–60 M tokens de entrada / 8–12 M de salida en Sonnet 5 y Haiku
   4.5, con caching y Batch API → **$300 – $1,000 USD** según iteraciones.

## Escenarios (total de las 8 semanas)

| Escenario | Asientos Max 20x (2 meses) | API por lotes | **Total USD** | **Total MXN** | % de la contraprestación (USD $81,000) |
|---|---|---|---|---|---|
| Ajustado | 1 × $400 | $300 | **$700** | **$12,460** | 0.9% |
| Base (recomendado) | 2 × $400 = $800 | $500 | **$1,300** | **$23,140** | 1.6% |
| Holgado (retrabajo alto) | 3 × $400 = $1,200 | $1,000 | **$2,200** | **$39,160** | 2.7% |

**Lectura:** aun en el escenario holgado, la IA de desarrollo cuesta menos del 3% de la
contraprestación del proyecto — el costo dominante del desarrollo son los honorarios de los 5
freelancers, no los tokens. La palanca real de margen es el modelo operativo (retrabajo en
plantilla, no en páginas), no ahorrar tokens.

## La mejor forma de pagarlo (recomendación)

1. **Asientos de suscripción Max 20x** para quien orqueste interactivamente (Tech Lead; segundo
   asiento desde la S1 en el escenario base). Cubre el uso de Claude Code sin sorpresas de token.
2. **Una API key organizacional de pago por uso** exclusiva para los workflows por lotes, con:
   Batch API (−50%), prompt caching agresivo, **Sonnet 5 como caballo de batalla y Haiku 4.5 para
   QA** — Fable/Opus solo en revisiones puntuales de arquitectura.
3. **Presupuesto y alarma en la consola de Anthropic:** tope mensual (p. ej. $600 USD/mes en el
   escenario base) con alerta al 70% — el consumo se revisa en el gate review semanal junto con
   el presupuesto de calidad.
4. **Separación contable estricta:** esta API key de desarrollo NUNCA se usa en producción; la key
   de producción (experiencia ideal + dossier) es de Sports World y se factura a su cuenta.
