# Sports World · Gastos Operativos Variables · V1.0
## Estimación mensual de las plataformas a cargo de Sports World — tres escenarios de tráfico e interacciones

> **Documento general (los tres proyectos).** Consolida en un solo lugar los **costos de operación variables** que Sports World cubre directamente a los proveedores de IA, voz y mensajería (Contrato, Cláusula Sexta Bis), estimados bajo tres escenarios de tráfico e interacciones. Tarifas verificadas en **julio de 2026** contra las fuentes indicadas al final; todas las equivalencias al **tipo de cambio contractual fijo de $17.80 MXN por USD**.

## Qué cubre este documento (y qué no)

- **Cubre (variable, a cargo de Sports World):** la plataforma de voz de BES (web) y del agente de role-play de la Academia, el modelo de razonamiento (LLM) de los tres proyectos, las cuotas de mensajería de WhatsApp Business API (recordatorios del Proyecto A y conversaciones del BDS), el hospedaje de la lógica de los agentes y el servidor propio de la plataforma de la Academia.
- **No cubre (fijo, ya pactado):** la **iguala mensual** de $35,000 MXN (USD $1,966.29); $40,600 MXN con IVA — que incluye el hospedaje del sitio, mantenimiento y soporte — se suma al final para mostrar el pago mensual total.
- **No cubre (fuera de este cálculo):** la nómina de los operadores humanos del BDS (personal propio de Sports World), el presupuesto de pauta publicitaria, las licencias del CRM y las sesiones de certificación inicial de la Academia (se estiman aparte al definir el calendario de despliegue por región — [Estrategia Técnica de la Academia · §8](#academia-tecnica)).

## Tarifas de referencia verificadas (julio 2026)

| Plataforma | Tarifa vigente | Verificación |
|---|---|---|
| **Plataforma de voz conversacional** (tipo ElevenLabs, plan Business) | $990 USD/mes con 12,375 minutos incluidos (~$0.08 USD/min efectivo; $1.42 MXN); excedente $0.08 USD/min. Alternativas (Vapi, Retell): $0.10 – $0.15 USD/min todo incluido | Página oficial de pricing, corroborada en 4 fuentes 2026 |
| **Modelo de razonamiento (LLM)** — gama económica (Claude Haiku 4.5) | $1.00 USD entrada / $5.00 USD salida por millón de tokens → ~$0.002 – $0.01 USD por conversación típica | **Documento oficial de pricing de Anthropic (verificado directo)** |
| **Reconocimiento de voz (ASR)** streaming (Deepgram Nova-3) | $0.0058 – $0.0077 USD por minuto | Página oficial, corroborada en 2 fuentes 2026 |
| **WhatsApp Business API — México** (Meta, cobro **por mensaje** desde julio 2025) | Respuestas dentro de la ventana de 24 h: **gratis** · plantilla *utility*: $0.0080 USD · *marketing*: $0.0305 USD · *authentication*: $0.0207 USD · margen del proveedor intermediario (BSP): +$0.003 – $0.010 por mensaje | Modelo confirmado (Twilio/Meta); tarifas México cruzadas en 3 fuentes 2026 |
| **Hospedaje de la lógica de los agentes** | $50 – $150 USD/mes ($890 – $2,670 MXN) según volumen | Cláusula Sexta Bis (rango vigente) |
| **Servidor propio de la Academia** (aportación de Sports World) | $24 – $90 USD/mes ($427 – $1,602 MXN) — VPS de 2–4 vCPU / 4–8 GB (DigitalOcean, Fly.io o equivalente) | Comparativas de proveedores 2026 |

**Consistencia con el Contrato:** la banda de referencia contractual de $0.10 – $0.20 USD por minuto de voz (Sexta Bis) sigue siendo válida como **cota superior**; las tarifas verificadas en 2026 sitúan el costo efectivo en la parte baja de esa banda (~$0.08 – $0.13 USD/min).

## Los motores de volumen: supuestos por escenario

| Variable de volumen (mensual) | Conservador | Realista | Optimista |
|---|---|---|---|
| Tráfico del sitio (visitas) | 80,000 (actual) | 120,000 | 160,000 (meta del Proyecto A) |
| Conversaciones con BES web (voz y texto) | ~600 | ~1,000 | ~1,500 |
| Visitas agendadas (2 recordatorios WhatsApp c/u) | ~300 | ~600 | ~1,000 |
| Leads del BDS por campañas | ~1,000 | ~2,500 | ~5,000 |
| Plantillas *utility* fuera de ventana (BDS, ~2 por lead) | ~2,000 | ~5,000 | ~10,000 |
| Plantillas *marketing* (reactivación de bases) | 0 | ~1,000 | ~2,000 |
| Adherencia a la práctica semanal de la Academia | ~50% | ~75% | ~100% |

Los volúmenes de BES web y de la Academia son los mismos de los escenarios ya pactados (Contrato, Sexta Bis; [Estrategia Técnica de la Academia · §8](#academia-tecnica)); los del BDS y los recordatorios son supuestos de diseño **a calibrar con datos reales** en los primeros 60–90 días de operación.

## Estimación mensual por componente (USD, sin IVA)

| Componente | Conservador | Realista | Optimista |
|---|---|---|---|
| BES web — voz + LLM (Sexta Bis) | $200 – $500 | $350 – $800 | $550 – $1,200 |
| Hospedaje de la lógica de los agentes | $50 – $150 | $50 – $150 | $50 – $150 |
| Recordatorios WhatsApp del Proyecto A (*utility*) | ~$5 | ~$10 | ~$16 |
| BDS — WhatsApp (*utility* + *marketing* + margen BSP) + LLM de "BES" texto | $30 – $50 | $105 – $140 | $210 – $270 |
| Academia — role-play de voz ([§8](#academia-tecnica)) | $360 – $770 | $515 – $1,090 | $670 – $1,400 |
| Servidor propio de la Academia | $24 – $90 | $24 – $90 | $24 – $90 |
| **Total variable (USD)** | **$670 – $1,565** | **$1,055 – $2,280** | **$1,520 – $3,125** |
| **Total variable (MXN al 17.80)** | **$11,930 – $27,860** | **$18,780 – $40,580** | **$27,060 – $55,625** |

## Pago mensual total de Sports World por escenario

Sumando la **iguala fija** de los servicios recurrentes del Proyecto A ($40,600 MXN con IVA) a los variables anteriores:

| Escenario | Variables (MXN) | Iguala con IVA (MXN) | **Pago mensual total (MXN)** | Equivalente (USD) |
|---|---|---|---|---|
| **Conservador** | $11,930 – $27,860 | $40,600 | **$52,530 – $68,460** | $2,951 – $3,846 |
| **Realista** | $18,780 – $40,580 | $40,600 | **$59,380 – $81,180** | $3,336 – $4,561 |
| **Optimista** | $27,060 – $55,625 | $40,600 | **$67,660 – $96,225** | $3,801 – $5,406 |

**Lectura ejecutiva:** aun en el escenario optimista —el sitio duplicando su tráfico, 5,000 leads mensuales del BDS y los 200 asesores practicando cada semana—, el gasto operativo variable total se mantiene por debajo de **$56,000 MXN al mes**, y el desembolso mensual completo de Sports World (variables + iguala) queda en un rango de **$68,000 – $96,000 MXN**. El costo variable crece de forma aproximadamente lineal con el uso: más gasto variable significa, por construcción, más tráfico, más leads atendidos y más asesores entrenados.

## Notas

- Los variables se pagan **directamente a los proveedores**, en su mayoría facturados en USD y **sin IVA mexicano** (proveedores extranjeros); la iguala se muestra con IVA. Los totales son órdenes de magnitud para presupuestación, no cotizaciones cerradas.
- EL PRESTADOR entrega **monitoreo de consumo y reporte mensual** de todos estos conceptos (Contrato, Sexta Bis; [BDS · Estrategia Técnica](#bds-tecnica); [Estrategia Técnica de la Academia · §8](#academia-tecnica)).
- Los supuestos de volumen del BDS y los recordatorios se **recalibran con datos reales** a los 60–90 días, junto con la cadencia de la Academia.

## Fuentes de las tarifas (julio 2026)

- **Anthropic (LLM):** documento oficial de pricing de la API de Claude — verificado directo.
- **ElevenLabs (voz):** página oficial de pricing de la Agents Platform, corroborada por 4 análisis independientes de 2026 (Flexprice, Cekura, CostBench, centro de ayuda de ElevenLabs).
- **Meta / WhatsApp Business API:** modelo por mensaje vigente desde el 1 de julio de 2025 (confirmado por el aviso oficial de Twilio) y tarifas para México cruzadas en 3 fuentes de 2026 (Simla, Chat2desk MX, Grow Flow).
- **Deepgram (ASR):** página oficial de pricing, corroborada por 2 comparativas de 2026.
- **Hosting (VPS):** precios publicados de DigitalOcean, Fly.io, Render y Railway (comparativas 2026).
