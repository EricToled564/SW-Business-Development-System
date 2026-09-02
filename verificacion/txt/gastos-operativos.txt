# Sports World · Gastos Operativos Variables · V1.2
## Estimación mensual de las plataformas a cargo de Sports World — desglose por componente y tres escenarios

> **Documento general (los tres proyectos) · Anexo Tres del Contrato, de carácter informativo.** El Contrato asigna estos gastos a Sports World (Cláusula Décima Cuarta) y pacta como contraprestación recurrente únicamente las igualas; este Anexo presenta los **valores aproximados** para planeación: no modifican la contraprestación ni generan obligación de pago al proveedor, y su recalibración no requiere convenio modificatorio. Este documento consolida los **costos de operación variables** que Sports World cubre directamente a los proveedores de IA, voz y mensajería, con el **desglose completo de cómo se llega a cada cifra**. Tarifas verificadas en **julio de 2026** contra las fuentes indicadas al final; todas las equivalencias al **tipo de cambio contractual fijo de $17.80 MXN por USD**.

## Qué cubre este documento (y qué no)

- **Cubre (variable, a cargo de Sports World):** la generación de la experiencia ideal y del brief del asesor con la API de Claude, la plataforma de voz de BES (canal web) y del agente de role-play de la Academia, el modelo de razonamiento (LLM) conversacional de BES en todos los canales, y las cuotas de mensajería de WhatsApp Business API.
- **Hospedaje: sin costo de proveedor externo.** Toda la infraestructura de hospedaje —el servidor del sitio, la lógica de los agentes y la plataforma de la Academia— **la proporciona Sports World en infraestructura propia**, por lo que no aparece en este cálculo.
- **Fijo (se suma al final):** la **iguala mensual del Proyecto A** de $43,000 MXN (USD $2,415.73); $49,880 MXN con IVA — mantenimiento del sitio y de BES (incluido el BDS una vez activado), soporte 24/7 y bolsa de mejora de 8 horas (desglose en el Contrato, Cláusula Octava). Si Sports World contrata la **iguala opcional de mantenimiento de la Academia** ($18,500 MXN más IVA; $21,460 MXN con IVA), se suma a los totales.
- **Fuera de este cálculo:** la nómina de los operadores humanos del BDS, el presupuesto de pauta, las licencias del CRM y las sesiones de certificación inicial de la Academia (**[Estrategia Técnica de la Academia · §8](#academia-tecnica)**).

## Tarifas de referencia verificadas (julio 2026)

| Plataforma | Tarifa vigente | Verificación |
|---|---|---|
| **Claude API (Anthropic)** — gama económica (Claude Haiku 4.5) | $1.00 USD entrada / $5.00 USD salida por millón de tokens | **Documento oficial de pricing de Anthropic (verificado directo)** |
| **ElevenLabs** — plataforma de voz conversacional (plan Business) | ~$0.08 USD/min efectivo ($1.42 MXN); excedente $0.08 USD/min; alternativas (Vapi, Retell) $0.10 – $0.13 USD/min todo incluido | Página oficial de pricing, corroborada en 4 fuentes 2026 |
| **WhatsApp Business API — México** (Meta, cobro **por mensaje** desde julio 2025) | Respuestas en ventana de 24 h: **gratis** · plantilla *utility*: $0.0080 USD · *marketing*: $0.0305 USD · margen del intermediario (BSP): +$0.003 – $0.010 por mensaje | Modelo confirmado (Twilio/Meta); tarifas México cruzadas en 3 fuentes 2026 |
| **Google Maps Platform** (Places Autocomplete para direcciones + Routes API para distancias por ruta real) | Nivel Essentials: **10,000 llamadas gratis al mes por SKU**; excedente ~$2 – $40 USD por 1,000 según SKU y volumen | Página oficial de pricing de Google, corroborada en fuentes 2026 |

**Bandas de planeación:** para la voz se usa $0.08 – $0.13 USD/min (tarifas verificadas 2026); como margen prudente de presupuestación puede tomarse una cota superior de $0.20 USD/min.

## Los motores de volumen: supuestos por escenario

| Variable de volumen (mensual) | Conservador | Realista | Optimista |
|---|---|---|---|
| Tráfico del sitio (visitas) | 80,000 (actual) | 120,000 | 160,000 (meta) |
| Conversaciones con BES web | ~600 | ~1,000 | ~1,500 |
| — de las cuales **por voz (30%)** | ~180 | ~300 | ~450 |
| — de las cuales **por texto (70%)** | ~420 | ~700 | ~1,050 |
| Cuestionarios completados en el sitio (experiencia ideal generada) | ~900 | ~1,800 | ~3,200 |
| Leads del BDS por campañas de redes sociales (**100% texto**) | ~1,000 | ~2,500 | ~5,000 |
| — con cuestionario aplicado (experiencia ideal + brief) | ~500 | ~1,250 | ~2,500 |
| — atendidos por "BES" texto como respaldo (~60%) | ~600 | ~1,500 | ~3,000 |
| Visitas agendadas (2 recordatorios *utility* c/u) | ~300 | ~600 | ~1,000 |
| Plantillas *marketing* (reactivación de bases) | 0 | ~1,000 | ~2,000 |
| Adherencia a la práctica semanal de la Academia | ~50% | ~75% | ~100% |

Los volúmenes de BES web y de la Academia provienen de los escenarios ya pactados (Cláusula Décima Cuarta; **[Academia · §8](#academia-tecnica)**); los del BDS y los recordatorios son supuestos de diseño **a calibrar con datos reales** en los primeros 60–90 días.

## El desglose: cómo se calcula cada componente

**1 · Claude API — experiencia ideal + brief del asesor.** Cada cuestionario completado dispara dos generaciones: la experiencia ideal para el prospecto y el brief para el asesor. Con Claude Haiku 4.5, cada par consume ~8,000–12,000 tokens de entrada (contexto RAG + respuestas) y ~2,500–3,500 de salida → **$0.02 – $0.04 USD por prospecto**. Volumen = cuestionarios del sitio + leads BDS con cuestionario aplicado.

**2 · ElevenLabs — voz de BES web (solo el 30% de las interacciones).** Solo las conversaciones por voz pagan plataforma de voz; las de texto no. Duración media supuesta: **4 minutos** por conversación de voz → minutos = conversaciones de voz × 4, a **$0.08 – $0.13 USD/min** (incluye reconocimiento y síntesis de voz de la plataforma).

**3 · Claude API — LLM conversacional de BES (todos los canales).** Todas las conversaciones de BES usan el LLM, sean de voz o de texto: las del canal web (600/1,000/1,500) y las del BDS por WhatsApp (**100% texto**, ~60% de los leads). Conversación típica multi-turno con contexto RAG → **$0.01 – $0.03 USD por conversación**.

**4 · WhatsApp Business API.** Recordatorios del Proyecto A: 2 plantillas *utility* por visita agendada × $0.0080. BDS: ~2 plantillas *utility* fuera de ventana por lead × $0.0080 (las respuestas dentro de la ventana de 24 h son gratis) + plantillas *marketing* de reactivación × $0.0305 + margen del BSP.

**5 · Academia — role-play de voz.** Se toman sin cambio los escenarios ya publicados en la **[Estrategia Técnica de la Academia · §8](#academia-tecnica)** (voz + LLM, según adherencia del 50/75/100%).

## Estimación mensual por componente (USD, sin IVA)

| # | Componente | Conservador | Realista | Optimista |
|---|---|---|---|---|
| 1 | Claude API — experiencia ideal + brief (1,400 / 3,050 / 5,700 prospectos × $0.02–0.04) | $28 – $56 | $61 – $122 | $114 – $228 |
| 2 | ElevenLabs — voz BES web (720 / 1,200 / 1,800 min × $0.08–0.13) | $58 – $94 | $96 – $156 | $144 – $234 |
| 3 | Claude API — LLM de BES web, voz y texto (600 / 1,000 / 1,500 conv. × $0.01–0.03) | $6 – $18 | $10 – $30 | $15 – $45 |
| 4 | Claude API — LLM de "BES" texto en BDS (600 / 1,500 / 3,000 conv. × $0.01–0.03) | $6 – $18 | $15 – $45 | $30 – $90 |
| 5 | WhatsApp — recordatorios A + *utility* y *marketing* BDS + margen BSP | $26 – $36 | $90 – $105 | $177 – $197 |
| 6 | Academia — role-play de voz (**[§8](#academia-tecnica)**) | $360 – $770 | $515 – $1,090 | $670 – $1,400 |
| | **Total variable (USD)** | **$485 – $990** | **$785 – $1,550** | **$1,150 – $2,195** |
| | **Total variable (MXN al 17.80)** | **$8,635 – $17,620** | **$13,975 – $27,590** | **$20,470 – $39,070** |

Nótese que la Academia es el componente dominante del gasto variable (~70% del total): es el único donde **toda** la interacción es por voz y con 200 usuarios recurrentes.

**Google Maps Platform** (autocompletado de direcciones y distancias por ruta con tráfico, decisión de producción del sitio): con los volúmenes de estos escenarios (~900 – 3,200 cuestionarios/mes) opera **dentro del tramo gratuito de 10,000 llamadas mensuales por SKU** o apenas por encima; se monitorea junto con el resto de los conceptos y no altera los totales de la tabla.

## Pago mensual total de Sports World por escenario

Sumando la **iguala fija del Proyecto A** ($49,880 MXN con IVA; USD $2,802.25) a los variables anteriores (si se contrata la iguala opcional de la Academia, agregar $21,460 MXN con IVA a cada total):

| Escenario | Variables (MXN) | Iguala con IVA (MXN) | **Pago mensual total (MXN)** | Equivalente (USD) |
|---|---|---|---|---|
| **Conservador** | $8,635 – $17,620 | $49,880 | **$58,515 – $67,500** | $3,287 – $3,792 |
| **Realista** | $13,975 – $27,590 | $49,880 | **$63,855 – $77,470** | $3,587 – $4,352 |
| **Optimista** | $20,470 – $39,070 | $49,880 | **$70,350 – $88,950** | $3,952 – $4,997 |

**Lectura ejecutiva:** con el hospedaje en infraestructura propia y solo el 30% de las interacciones de BES web por voz, el gasto variable baja de forma importante respecto a un modelo todo-voz: aun en el escenario optimista se mantiene por debajo de **$40,000 MXN al mes**, y el desembolso mensual completo (variables + iguala) queda entre **$70,000 y $89,000 MXN**. El costo crece de forma aproximadamente lineal con el uso: más gasto variable significa más tráfico, más leads atendidos y más asesores entrenados.

## Notas

- Los variables se pagan **directamente a los proveedores**, en su mayoría facturados en USD y sin IVA mexicano (proveedores extranjeros); la iguala se muestra con IVA. Los totales son órdenes de magnitud para presupuestación, no cotizaciones cerradas.
- El Contrato (Cláusula Décima Cuarta) **asigna** estos gastos a Sports World e incluye el compromiso de **monitoreo de consumo y reporte mensual**; las cifras de este documento son estimaciones de planeación y pueden actualizarse sin modificar el Contrato.
- Los supuestos de volumen del BDS, el % de voz y la duración media de conversación se **recalibran con datos reales** a los 60–90 días.

## Fuentes de las tarifas (julio 2026)

- **Anthropic (LLM):** documento oficial de pricing de la API de Claude — verificado directo.
- **ElevenLabs (voz):** página oficial de pricing de la Agents Platform, corroborada por 4 análisis independientes de 2026 (Flexprice, Cekura, CostBench, centro de ayuda de ElevenLabs).
- **Meta / WhatsApp Business API:** modelo por mensaje vigente desde el 1 de julio de 2025 (confirmado por el aviso oficial de Twilio) y tarifas para México cruzadas en 3 fuentes de 2026 (Simla, Chat2desk MX, Grow Flow).
