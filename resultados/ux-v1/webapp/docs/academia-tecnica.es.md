# Academia SW · Estrategia Técnica
## Cómo se construye la plataforma de módulos y el agente de voz de role-play

> **Proyecto C (Academia).** Describe la arquitectura técnica de las dos fases: la plataforma de módulos interactivos y el agente de voz que interpreta al cliente en el role-play. Alcance y costo aparte (Contrato · Cláusula Primera Bis; **[Addendum](#academia-anexo)**).

## Principio de reutilización

La Academia **no construye un motor conversacional nuevo**: reutiliza la arquitectura ya definida para BES en el Proyecto A.

- **Motor conversacional (ASR + razonamiento + TTS + orquestación)** — **[Estrategia Técnica del sitio · §5](#technical:5-bes-el-agente-de-voz-y-texto)**.
- **Motor de cuestionario** (base del principio de "dos momentos de discovery") — **[Arquitectura de Experiencia · §2](#experience:2-el-cuestionario-como-nica-fuente-de-personalizacin)**.

Lo nuevo de la Academia son las cuatro piezas siguientes.

## 1 · Plataforma de módulos interactivos (Fase 1)

- Contenido e-learning por los cuatro niveles descritos en **[Fases del programa](#academia-fases)**: video/texto, ejemplos de campo y evaluación de acreditación por módulo.
- **Progresión con gate:** el asesor no accede al siguiente nivel sin acreditar el anterior (mínimo aprobatorio a definir con Sports World).
- **Capa de adaptación por club:** el Nivel 4 sirve una variante de contenido según el segmento del club del asesor (**[Contenido y taxonomía · Segmentación](#academia-contenido)**), sin duplicar el resto del contenido base.
- Registra el avance de cada asesor (módulos completados, calificación de acreditación, fecha) para alimentar el dashboard de readiness.

## 2 · Agente de voz de role-play (Fase 2)

- Es el **mismo stack de BES** —reconocimiento de voz, modelo de razonamiento y síntesis de voz natural en español de México—, reconfigurado para **interpretar al cliente simulado** en vez de atender al prospecto real.
- **Guion por escenario:** cada sesión carga un perfil de cliente (objetivo del cliente, dimensión de decisión dominante, objeción de precio, y variante de club cuando aplica) sobre la misma base de conocimiento (RAG) de clubes, clases y precios que ya usa BES, para que las objeciones que plantea el agente sean consistentes con la realidad operativa del club del asesor.
- **Capa de evaluación:** el modelo de razonamiento, tras cada sesión, califica la conversación del asesor contra la rúbrica de los siete componentes del programa (**[Contenido y taxonomía](#academia-contenido)**), identifica el momento exacto de la conversación donde perdió el hilo, y produce retroalimentación específica y un puntaje de readiness.
- **Objetivo de latencia conversacional:** el mismo estándar ya definido para BES, por debajo de ~900 ms, para que la práctica se sienta como una conversación real (**[Estrategia Técnica del sitio · §5](#technical:5-bes-el-agente-de-voz-y-texto)**).
- Corre en las **plataformas gestionadas de sus proveedores** (no en el servidor del sitio), igual que BES.

## 3 · Motor de selección adaptativa de escenarios

- Es la pieza que convierte la Fase 2 de una batería de exámenes fija en **práctica deliberada personalizada** (principio de diseño en **[Fases del programa](#academia-fases)**).
- Antes de cada sesión, el motor consulta el **historial de readiness** del asesor —qué componentes domina, en cuáles falla con mayor frecuencia, qué tipo de objeción le cuesta más— y selecciona el perfil de cliente y la combinación de objeciones que ese asesor específico necesita practicar, en vez de un guion idéntico para los 200 asesores.
- Ajusta la **dificultad de partida y el ritmo de avance** por asesor: quien domina rápido un componente avanza a escenarios combinados antes; quien necesita más repetición recibe variantes del mismo tipo de objeción hasta demostrar dominio.
- Programa el **calendario de refuerzo espaciado** posterior a la certificación (día 7, día 30, día 90 — **[Fases del programa](#academia-fases)**), disparando automáticamente la micro-sesión correspondiente por asesor.

## 4 · Dashboard de readiness

- Consolida, por asesor y por club, el avance de la Fase 1 (módulos acreditados) y el desempeño de la Fase 2 (sesiones de role-play completadas y puntaje de readiness), para los 200 asesores.
- Sirve como insumo a los líderes regionales para dar seguimiento individual, reemplazando el criterio informal actual por evidencia consistente y comparable entre clubes.
- Detalle de métricas en **[Medición](#academia-medicion)**.

## Seguridad y datos

- Mismos principios del Proyecto A: HTTPS, credenciales por canal seguro, minimización de datos personales (**[Seguridad del sitio](#seguridad)**). Las sesiones de práctica no involucran datos de prospectos ni clientes reales — el "cliente" del role-play es siempre un perfil simulado.
- Los datos de avance y desempeño de cada asesor (readiness) se almacenan como información de recursos humanos / desempeño interno, no como datos de prospecto o cliente.

## Dependencias a cargo de Sports World

- Validación de la taxonomía maestra, los siete componentes y la segmentación por club, antes de la producción de contenido (**[Contenido y taxonomía](#academia-contenido)**).
- Mínimo aprobatorio de acreditación por módulo (Fase 1).
- Acceso a las métricas del CRM por asesor, para calibrar la línea base antes de comprometer KPIs (**[Medición](#academia-medicion)**).
- Colaboración del equipo de marketing para el módulo de inteligencia competitiva por club (componente 3).
