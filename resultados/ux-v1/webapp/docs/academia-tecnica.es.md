# Academia SW · Estrategia Técnica
## Cómo se construye la plataforma de módulos y el agente de voz de role-play

> **Proyecto C (Academia).** Describe la arquitectura técnica de las dos fases: la plataforma de módulos interactivos y el agente de voz que interpreta al cliente en el role-play.

## Principio de reutilización

La Academia **no construye un motor conversacional nuevo**: reutiliza la arquitectura ya definida para BES en el Proyecto A.

- **Motor conversacional (ASR + razonamiento + TTS + orquestación)** — **[Estrategia Técnica del sitio · §5](#technical:5-bes-el-agente-de-voz-y-texto)**.
- **Motor de cuestionario** (base del principio de los "dos momentos para descubrir el objetivo del cliente") — **[Arquitectura de Experiencia · §2](#experience:2-el-cuestionario-como-nica-fuente-de-personalizacin)**.

Lo nuevo de la Academia son las piezas descritas a continuación.

## 1 · Separación total de la plataforma de la Academia y el sitio web

La Academia es una **aplicación completamente separada** del sitio público del Proyecto A: no comparte código, ni despliegue, ni el servidor dimensionado en el **[Plan de Ejecución · §4](#execution:4-el-servidor-donde-corre-el-sitio)** (que está dimensionado solo para el tráfico del sitio). Concretamente:

- La **plataforma de módulos interactivos y el dashboard de readiness** (Fase 1 y consolidación de resultados) corren en un **servidor propio de Sports World**, en una aplicación interna independiente del sitio público, con su propio dimensionamiento (ver **[Dependencias a cargo de Sports World](#academia-tecnica:dependencias-a-cargo-de-sports-world)** más abajo).
- El **agente de voz de role-play** (Fase 2) corre, igual que BES, en las **plataformas gestionadas de sus proveedores** (reconocimiento de voz, modelo de razonamiento, síntesis de voz y orquestación) — no en el servidor del sitio ni en el servidor de la Academia. Esta parte no cambia respecto al principio ya establecido para BES.

En síntesis: el **contenido y los datos de la Academia viven en infraestructura de Sports World**, separados del sitio; el **motor conversacional de IA** vive en las plataformas de sus proveedores, igual que BES.

## 2 · Plataforma de módulos interactivos (Fase 1)

- Contenido e-learning por los cuatro niveles descritos en **[Fases del programa](#academia-fases)**: video/texto, ejemplos de campo y evaluación de acreditación por módulo.
- **Progresión con gate:** el asesor no accede al siguiente nivel sin acreditar el anterior (mínimo aprobatorio a definir con Sports World).
- **Capa de adaptación por club:** el Nivel 4 sirve una variante de contenido según el segmento del club del asesor (**[Contenido y taxonomía · Segmentación](#academia-contenido)**), sin duplicar el resto del contenido base.
- Registra el avance de cada asesor (módulos completados, calificación de acreditación, fecha) para alimentar el dashboard de readiness, e incluye una **encuesta breve de reacción** al cierre de cada nivel (Nivel 1 de la evaluación, **[Medición](#academia-medicion)**).

## 3 · Agente de voz de role-play (Fase 2)

- Es el **mismo stack de BES** —reconocimiento de voz, modelo de razonamiento y síntesis de voz natural en español de México—, reconfigurado para **interpretar al cliente simulado** en vez de atender al prospecto real.
- **Asignación aleatoria de personaje, acotada a las áreas de oportunidad del asesor.** Al iniciar cada sesión, el sistema no elige un guion fijo ni idéntico para todos: selecciona **al azar** un perfil de cliente (personaje) dentro del **subconjunto de escenarios que corresponden a las áreas de oportunidad de ese asesor** —el componente en el que muestra menor dominio según su historial de readiness—. Esto combina dos cosas a la vez: **imprevisibilidad realista** (el asesor no memoriza un guion) y **enfoque en su debilidad real** (no practica al azar entre los siete componentes por igual).
- **Guion por escenario:** cada sesión carga el perfil de cliente (objetivo del cliente, dimensión de decisión dominante, objeción de precio, y variante de club cuando aplica) sobre la misma base de conocimiento (RAG) de clubes, clases y precios que ya usa BES, para que las objeciones que plantea el agente sean consistentes con la realidad operativa del club del asesor.
- **Dos entregables al finalizar la sesión, no uno:**
  1. **Retroalimentación en tiempo real** — en cuanto termina la conversación, el asesor ve de inmediato en qué momento exacto perdió el hilo (por ejemplo: clasificó mal el objetivo, no articuló el comparativo competitivo local, omitió la hospitalidad consultiva) y qué debió decir en su lugar.
  2. **Reporte de la sesión** — un documento de desempeño, por sesión y acumulado, que consolida el puntaje de readiness, la evolución respecto a sesiones anteriores y las áreas de oportunidad vigentes; alimenta el dashboard de readiness, cuya vista por asesor sirve al líder regional como guía de coaching. La sesión cierra con una **valoración breve de utilidad** por parte del asesor (Nivel 1 de la evaluación, **[Medición](#academia-medicion)**).
- **Objetivo de latencia conversacional:** el mismo estándar ya definido para BES, por debajo de ~900 ms, para que la práctica se sienta como una conversación real (**[Estrategia Técnica del sitio · §5](#technical:5-bes-el-agente-de-voz-y-texto)**).
- Corre en las **plataformas gestionadas de sus proveedores** (no en el servidor del sitio ni en el de la Academia), igual que BES.

## 4 · Motor de selección adaptativa de escenarios

- Es la pieza que convierte la Fase 2 de una batería de exámenes fija en **práctica deliberada personalizada** (principio de diseño en **[Fases del programa](#academia-fases)**).
- Antes de cada sesión, el motor consulta el **historial de readiness** del asesor —qué componentes domina, en cuáles falla con mayor frecuencia, qué tipo de objeción le cuesta más— y acota el universo de personajes candidatos a esas áreas de oportunidad, de donde la sesión escoge uno **al azar** (§3).
- Ajusta la **dificultad de partida y el ritmo de avance** por asesor: quien domina rápido un componente avanza a escenarios combinados antes; quien necesita más repetición recibe variantes del mismo tipo de objeción hasta demostrar dominio.
- Programa el **calendario de refuerzo y la cadencia continua de práctica** (§6), disparando automáticamente la sesión correspondiente por asesor.

## 5 · Motor de aprendizaje continuo

El sistema **no se queda estático** una vez lanzado: evoluciona con el uso. **Qué ve y qué no ve el sistema:** el sistema **nunca accede a las conversaciones reales entre asesores y clientes** — esas conversaciones no se graban, no pasan por ninguna plataforma del proyecto y **no se integran al CRM en ningún momento**; el CRM registra datos de etapa (lead, cita, visita, membresía), no conversaciones. Las únicas fuentes de aprendizaje son:

- **Las sesiones de práctica (internas al sistema).** El historial de role-play —asesor contra cliente simulado, agregado y sin datos de prospectos reales (§3, §7)— muestra dónde falla cada asesor, qué escenarios resultan demasiado fáciles o difíciles y qué componente rebota más en el equipo.
- **Las métricas de resultado del CRM (números, no conversaciones).** Si un patrón de desempeño en la práctica se asocia consistentemente con mejores resultados de conversión por asesor (Nivel 3 de evaluación, **[Medición](#academia-medicion)**), la rúbrica se ajusta para reconocerlo con mayor peso. Es una correlación entre puntajes de práctica y cifras de etapa del CRM — no requiere ni utiliza contenido de conversación alguno.
- **El reporte humano del campo.** Las objeciones nuevas del mercado (un competidor nuevo en una plaza, una promoción rival) **no las detecta el sistema por sí solo**, porque no escucha el campo: entran por un **canal formal de reporte** de líderes regionales y asesores, y se convierten en candidatas a nuevos escenarios.
- **Gobernanza del cambio.** Todo escenario o ajuste de rúbrica —incluidos los propuestos por reporte de campo— pasa por revisión con Sports World y por la misma certificación que los escenarios iniciales antes de entrar en producción: el sistema y el campo **proponen**, Sports World y EL PRESTADOR **validan**. Esto evita que el sistema derive hacia patrones no deseados sin supervisión.

## 6 · Frecuencia de práctica y duración estimada

Sin una cadencia definida, la práctica se abandona igual que la capacitación informal actual. Se proponen los siguientes parámetros como **estimación inicial de diseño**, a calibrar con los datos reales de uso y con Sports World, en el mismo espíritu que la especificación del servidor del sitio es una estimación de ingeniería ajustable (**[Plan de Ejecución · §4](#execution:4-el-servidor-donde-corre-el-sitio)**):

| Momento | Cadencia propuesta | Duración aproximada por sesión |
|---|---|---|
| **Certificación inicial (Fase 2)** | Sesiones repetidas hasta acreditar cada componente — sin límite fijo de intentos, a ritmo del asesor | 10–12 minutos por sesión |
| **Refuerzo post-certificación** | Días 7, 30 y 90 (**[Fases del programa](#academia-fases)**) | 5–8 minutos por sesión |
| **Práctica de mantenimiento continua** | 1 sesión por semana, por asesor, una vez certificado | 5–8 minutos por sesión |

Esta cadencia es la que alimenta la estimación de costo de la sección 8. Se recomienda revisarla a los 60–90 días de operación con datos reales de duración y de adherencia por asesor.

## 7 · Dashboard de readiness

- Consolida, por asesor, el avance de la Fase 1 (módulos acreditados) y el desempeño de la Fase 2 (sesiones completadas, puntaje de readiness y su tendencia), para los 200 asesores.
- **Se agrega en tres niveles**, no solo por asesor: **por club**, y a partir de ahí **por ciudad** y **a nivel nacional**, para que Sports World compare el nivel de habilitación entre clubes de la misma ciudad y entre regiones del país, no solo entre asesores individuales.
- Sirve como insumo a los líderes regionales para dar seguimiento individual, y a la dirección comercial para decisiones a nivel ciudad o nacional (por ejemplo, priorizar refuerzo en una ciudad completa si su readiness promedio es menor).
- Detalle de métricas en **[Medición](#academia-medicion)**.

## 8 · Costo de las plataformas de IA para Sports World

Igual que BES (**[Estrategia Técnica del sitio · §5](#technical:5-bes-el-agente-de-voz-y-texto)**; Contrato, Cláusula Décima Cuarta), el agente de voz de role-play **no tiene costo de operación incluido en la contraprestación del Addendum**: los costos de la plataforma de voz, el modelo de razonamiento y el hospedaje de la lógica del agente los cubre **EL CLIENTE directamente a los proveedores**. Con las tarifas de referencia del documento **[Gastos Operativos Variables](#gastos-operativos)** (tipo de cambio contractual $17.80) y la cadencia propuesta en la sección 6, para **200 asesores**:

| Concepto | Estimado |
|---|---|
| Plataforma de voz (tipo ElevenLabs) | $0.10 – $0.20 USD por minuto de conversación ($1.78 – $3.56 MXN) |
| Modelo de razonamiento (LLM) | $0.001 – $0.003 USD por interacción ($0.02 – $0.05 MXN) |
| Hospedaje de la lógica del agente | En la infraestructura que proporciona EL CLIENTE (servidor propio, §1) — sin costo de proveedor externo |

*Escenarios mensuales, según el porcentaje de asesores que cumple la práctica semanal de mantenimiento (§6):*

| Escenario | Adherencia | Sesiones/mes (aprox.) | Minutos/mes (aprox.) | Costo mensual (USD) | Costo mensual (MXN) |
|---|---|---|---|---|---|
| Conservador | ~50% | ~430 | ~3,000 | $360 – $770 | $6,410 – $13,710 |
| Medio | ~75% | ~650 | ~4,550 | $515 – $1,090 | $9,170 – $19,400 |
| Optimista | ~100% | ~865 | ~6,060 | $670 – $1,400 | $11,930 – $24,920 |

Estos escenarios cubren la práctica semanal de mantenimiento; los tres repasos de los días 7, 30 y 90 añaden, por asesor certificado, un volumen marginal (~3 sesiones de 5–8 minutos repartidas en 90 días) ya absorbido por los rangos de la tabla. Los escenarios **no incluyen** las sesiones de certificación inicial (§6), que se concentran en las primeras semanas de cada cohorte de asesores certificándose y se estiman aparte una vez definido el calendario de despliegue por región. EL PRESTADOR entregará a EL CLIENTE, igual que para BES, **monitoreo de consumo y un reporte mensual**.

## Seguridad y datos

- Mismos principios del Proyecto A: HTTPS, credenciales por canal seguro, minimización de datos personales (**[Seguridad del sitio](#seguridad)**). Las sesiones de práctica no involucran datos de prospectos ni clientes reales — el "cliente" del role-play es siempre un perfil simulado.
- Los datos de avance y desempeño de cada asesor (readiness) se almacenan como información de recursos humanos / desempeño interno, no como datos de prospecto o cliente, en el servidor propio de la Academia (§1).

## Dependencias a cargo de Sports World

- Validación de la taxonomía maestra, los siete componentes y la segmentación por club, antes de la producción de contenido (**[Contenido y taxonomía](#academia-contenido)**).
- Mínimo aprobatorio de acreditación por módulo (Fase 1).
- **Servidor propio para la plataforma de la Academia** (módulos, dashboard, historial de readiness), independiente del servidor del sitio (§1).
- Acceso a las métricas del CRM por asesor, para calibrar la línea base antes de comprometer KPIs (**[Medición](#academia-medicion)**).
- Colaboración del equipo de marketing para el módulo de inteligencia competitiva por club (componente 3).
- Validación periódica de los ajustes propuestos por el motor de aprendizaje continuo (§5).
