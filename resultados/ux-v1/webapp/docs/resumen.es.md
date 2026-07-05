# Sports World México · Resumen Ejecutivo · V1.0
## Un cuestionario, una experiencia ideal: la captación digital de Sports World en todo canal

El eje de **todo** el proyecto —Proyecto A, Proyecto B y Proyecto C— es uno solo: **un cuestionario y una experiencia ideal**, aplicados de la misma forma sin importar el canal por el que llegue el prospecto, y enseñados de la misma forma a quien los aplica. Este documento da la visión de conjunto de los tres proyectos y desarrolla, además, el **Rediseño Web** con mayor detalle: su implementación insignia. Ocho semanas para convertir sportsworld.com.mx en la plataforma de captación digital que la marca requiere: rastreable por Google, centrada en el usuario que busca y operada con inteligencia artificial al servicio del socio. Cada afirmación se desarrolla a detalle en los documentos que lo acompañan: Arquitectura de Experiencia (incluido el Mapa del Sitio), Estrategia Técnica, Plan de Ejecución, Auditoría inicial, el Contrato y los módulos BDS y Academia.

| Ficha | |
|---|---|
| **Cliente** | Grupo Sports World |
| **Agencia** | Final Upgrade AI |
| **Timeline** | 8 semanas el Proyecto A (kickoff → go-live) · 8 semanas el Proyecto B (en paralelo al A) · 10 semanas el Proyecto C |
| **Estabilización posterior** | 2 a 4 semanas |
| **Documento** | Resumen Ejecutivo · Junio 2026 · Confidencial |

## El sistema completo: un cuestionario, una experiencia ideal, todo canal

Sports World necesita atender al prospecto en **cualquier canal** donde muestre interés, y necesita que quien lo atiende —sitio, WhatsApp o asesor en el club— lo haga con el mismo criterio. Lo que hace a esto un solo sistema —y no tres sistemas paralelos— es que **el cuestionario y la experiencia ideal son únicos**: se aplican una sola vez, se definen una sola vez, se enseñan una sola vez, y cada proyecto solo cambia **quién** los aplica, **por dónde** llegan o **cómo se practican**:

- **Proyecto A · Rediseño Web.** El canal donde nace y se implementa el cuestionario: el sitio de 148 páginas rastreable por Google, el agente BES por voz y texto, la integración con el CRM vía middleware y el funnel/dashboard de medición. Se desarrolla más adelante en este mismo documento.
- **Proyecto B · Business Development System (alcance y costo aparte).** Extiende el **mismo** cuestionario y la **misma** experiencia ideal a **WhatsApp**: leads de campañas atendidos por **operadores humanos** en tiempo real, con **BES por WhatsApp (solo texto)** de respaldo 24/7, más el **rol de operador sobre la consola interna del Proyecto A** para asesores y walk-ins. Ver **[BDS · Resumen Ejecutivo](#bds-resumen)**.
- **Proyecto C · Academia Sports World (alcance y costo aparte).** Enseña y **entrena la práctica** de ese mismo cuestionario y esa misma experiencia ideal a los 200 asesores, en dos fases: módulos interactivos y role-play con agente de voz. Ver **[Academia · Resumen Ejecutivo](#academia-resumen)**.

A continuación, el desarrollo del **Rediseño Web (Proyecto A)** — su implementación insignia.

## Rediseño Web (Proyecto A)

### 1 · El punto de partida

Sports World es una marca sólida que hoy resulta **invisible donde el cliente la busca**. La auditoría inicial (Semrush, marzo 2026; 6,900 keywords unbranded analizadas) lo resume así: el sitio destaca en los términos de marca —posiciones 2–6— y desaparece en todo lo demás. Estos son los números que el nuevo sitio debe revertir desde el día uno.

| Dato actual | Qué significa |
|---|---|
| **0 de 49+** | Páginas de club rastreables por Google hoy. Ninguna. |
| **−28.18%** | Caída anual del tráfico orgánico no-branded. |
| **~1.23M** | Búsquedas mensuales de alta intención que el sitio no captura. |
| **136** | Enlaces rotos y URLs malformadas (116 enlaces internos rotos + 20 URLs con backslash). |
| **31.1%** | Cobertura de keywords unbranded (2,148 de 6,900). |
| **95.23%** | Proporción del tráfico concentrada en apenas 2 URLs (home + /clubes). |

### 2 · Los objetivos del rediseño

Cinco metas que el nuevo sitio debe cumplir desde el día uno.

- **Indexación total.** Cada club, cada amenidad, cada clase y cada objetivo con su propia página rastreable en Google. Pasar de cero páginas de club indexables a 49+ más todos sus perfiles.
- **Aterrizaje local directo.** Quien busca "gimnasio cerca de mí" aterriza en la ficha del club más cercano, no en la página de inicio.
- **Captura de las verticales de mayor demanda.** Hubs semánticos por amenidad y por objetivo de usuario, para establecer presencia en las búsquedas de alta intención que hoy se pierden.
- **Agendamiento digital sin fricción.** De la búsqueda a la solicitud de visita enviada al club en pocos pasos, con BES como asistente que califica, agenda y prepara al asesor.
- **Control del negocio.** Un panel de contenido no-code que permite a Sports World actualizar horarios, precios, amenidades y contenido sin depender de la agencia ni tocar código.

### 3 · La nueva arquitectura

148 páginas organizadas en once niveles jerárquicos, con enfoque mobile-first. Cada cifra representa páginas que hoy no existen o presentan deficiencias, y su ejecución solo es viable con producción asistida por inteligencia artificial sobre plantillas previamente aprobadas.

| Cantidad | Tipo | Para qué |
|---|---|---|
| 1 | Home | Punto de entrada y distribución. |
| 49 | Fichas de club | Una por club: dirección, horarios, amenidades, clases, teléfono y agendado, rastreable localmente. |
| 10 | Hubs de amenidad | Alberca, INTENZ, ring de box, padel, squash, muro de escalada, etc. — captura por amenidad. |
| 54 | Páginas de clase | 7 landings de clases premium (Les Mills) + 47 clases individuales. |
| 1 | Hub Fit Kidz | La oferta para familias, agrupada. |
| 5 | Perfiles de objetivo | Primeros pasos, salud y bienestar, tonificación, fuerza y rehabilitación. |
| 1 | Hub de pérdida de peso | La vertical de mayor demanda no capturada. |
| 1 | Hub de entrenamiento personal | — |
| 6 | Membresías | Hub + 5 planes. |
| 20 | Blog inicial | Contenido de apoyo para captura semántica. |
| **148** | **Total** | |

### 4 · Cómo lo vive el usuario

La arquitectura está diseñada para que cada recorrido termine en cita agendada, no en abandono. Un prospecto que busca una solución concreta aterriza en la página correcta, responde un cuestionario breve que personaliza su recorrido, recibe una recomendación con el club y las clases más adecuadas para su perfil, y agenda su visita, todo en una sola sesión: **bienvenida → cuestionario → resultado → captura de contacto → agendado → briefing para el asesor**.

Este recorrido resuelve tres obstáculos concretos del sitio actual:

- **La vertical de pérdida de peso, desatendida** pese a ser la de mayor demanda.
- **Las amenidades y disciplinas sin cobertura**, invisibles para quien busca por actividad.
- **La latencia geográfica**: cada clic adicional para localizar el club cercano cuesta entre 20% y 40% de retención.

### 5 · BES · el asistente digital

BES no vende: **agenda, califica e informa**. Resuelve preguntas frecuentes sobre horarios, precios, ubicaciones y amenidades con los datos reales del sistema —los mismos que muestra el sitio—, opera **por voz y texto**: en el **sitio (Proyecto A)** por el **canal web (voz y texto)** y, como parte del **Business Development System (Proyecto B, Addendum aparte)**, también por **WhatsApp (solo texto)**. Envía **2 recordatorios automatizados por WhatsApp** (24 h y 2 h antes de la visita), transfiere a un agente humano cuando el usuario lo solicita, y siempre entrega al asesor del club un brief del prospecto por correo antes de la cita. No opera por telefonía ni por voz en WhatsApp. Calidad objetivo: voz natural en español de México y tiempo de respuesta por debajo de los 900 ms para mantener una conversación fluida.

### 6 · Lo que cambia para el negocio

La calidad técnica importa porque se traduce en resultados comerciales. Cuatro vectores medibles:

- **Carga de página inmediata.** Home y fichas de club con Core Web Vitals en verde en móvil. En una industria donde el usuario abandona en segundos, esto recupera una parte significativa de las visitas que hoy se pierden.
- **Google confía en lo que lee.** Cada ficha declara su identidad con datos estructurados (schema JSON-LD): ubicación, horarios, amenidades. Google lo presenta en resultados enriquecidos: mapa, FAQ y horarios en el propio resultado.
- **Inclusión sin fricción.** El sitio cumple los estándares internacionales de accesibilidad WCAG 2.2 AA, lo que amplía el mercado potencial y protege legalmente la plataforma.
- **El equipo de Sports World mantiene el control.** El panel no-code permite actualizar contenido sin tocar código ni depender de la agencia.

### 7 · Las ocho semanas

Del kickoff al go-live en ocho semanas, con cuatro equipos trabajando en paralelo —web, SEO/contenido, contenido visual a escala y el agente BES— y puntos de control firmados por Sports World. No se avanza sin cerrar previamente cada gate.

| Semana | Foco | Entregables y gate |
|---|---|---|
| **S1** | Cimientos | Kickoff y firma del checklist; setup de stack y repositorios; extracción del knowledge base; sistema visual y plantillas. Se inician de inmediato las dependencias largas (verificación de Google Business, confirmación de APIs). |
| **S2** | Páginas pilar | Home, primera ficha de club y primer hub aprobados; pipelines de contenido activos. **Gate: pilar.** |
| **S3–S4** | Escalamiento | 49 fichas de club, hubs y perfiles; integración de la API de captura de leads. **Gate: 50%.** |
| **S5–S6** | Producción e integración | Todas las páginas, flujo de experiencia completo y BES con cobertura total. **Gate: completitud.** |
| **S7** | Auditoría y congelamiento | QA final, accesibilidad WCAG, Core Web Vitals, migración de URLs. **Gate: visto bueno.** |
| **S8** | Lanzamiento | Go-live con redirects activos, training del equipo SW, monitoreo y soporte de primera semana. |

La verificación de Google Business es el único elemento de ruta crítica y se inicia en la Semana 1 precisamente porque depende de tiempos de Google; ningún otro trabajo queda bloqueado por ella.

### 8 · KPIs de corrección del Rediseño Web

Nos comprometemos con los **KPIs verificables del Contrato › Anexo Dos, Sección IV**: 49 de 49 páginas de club rastreables (de 0), 116 enlaces rotos → 0, 20 URLs con backslash → 0, schema JSON-LD en los 49 clubes, 11 páginas sin H1 → 0, Core Web Vitals en umbral y la **cobertura de keywords unbranded 31.1% → 55–65%** (benchmark David Lloyd Clubs: 31% → 74%). Adicionalmente, el **Contrato · Anexo Cuatro** recoge los **targets comerciales post-lanzamiento** —aspiracionales, no vinculantes—: tráfico mensual 80,000 → 120,000–160,000, cuestionarios y visitas agendadas por mes, con el compromiso del proveedor de acompañar su consecución dentro de la iguala, dado que dependen también de la inversión en pauta y del embudo interno de Sports World. El detalle vive en el Contrato › Anexo Dos, Sección IV; la **calculadora de ROI** interactiva, en su documento propio (**[Calculadora de ROI](#roi)**).

### Lo comercial (Proyecto A)

Contraprestación única de **USD $81,000 sin IVA** (MXN $1,441,800; $1,672,488 con IVA) en **dos exhibiciones de 50%**: la factura de cada mitad se entrega al iniciar sus trabajos y el pago es exigible contra la entrega aprobada del 50% de los entregables (Semana 4) y contra la entrega total, respectivamente. Los servicios recurrentes se prestan mediante la **iguala mensual de la Opción A elegida: $43,000 MXN/mes (USD $2,415.73); $49,880 MXN con IVA**, con bolsa de mejora de 8 horas mensuales y plazo mínimo de 6 meses; incluye el mantenimiento del BDS una vez activado, el hospedaje corre en la infraestructura que proporciona Sports World, se causa por mes vencido, se factura al cierre de cada mes y se paga a 30 días naturales de entregada la factura. Detalle en el **[Contrato · Cláusulas Segunda y Tercera](#contrato)**.

## Business Development System (Proyecto B)

> **Alcance y costo aparte** del Rediseño Web (Contrato · Cláusula Primera Bis; detalle en el **[Addendum del BDS](#bds-anexo)**).

### 9 · El problema: los leads se enfrían

Hoy la mayor fuente de leads de Sports World son las **campañas en redes sociales**. El recorrido actual es: el usuario ve un anuncio, llena un **formulario**, la solicitud se enruta al club que indicó como más cercano, y **un asesor decide cuándo llamar** — con frecuencia, horas o más de un día después. El resultado es una **conversión muy baja**. La causa raíz no es la calidad del lead: es el **tiempo al primer contacto** (*speed-to-lead*). Un lead contactado en minutos y otro contactado al día siguiente no son el mismo lead: el segundo ya perdió el impulso, comparó opciones o se olvidó.

### 10 · La solución: atender en tiempo real, en el canal del usuario

El BDS reemplaza el "formulario + llamada tardía" por un **engagement inmediato en WhatsApp**, aplicando **el mismo cuestionario** de experiencia ideal, bajo un modelo **human-first con IA de respaldo**:

- El anuncio lleva a una **landing con el cuestionario**, no a un formulario pasivo.
- El lead se enruta **primero a un operador humano por WhatsApp**, en tiempo real.
- Si **no hay operador disponible** o es **fuera de horario**, **"BES" por WhatsApp (solo texto)** atiende, aplica el cuestionario y agenda.
- Los **asesores de club** atienden a los leads "de la calle" (walk-in) con la **misma consola interna** del Proyecto A.

En los cuatro caminos, el común denominador es el mismo: **un cuestionario → una experiencia ideal → una escritura idempotente al CRM**. El BDS no crea un flujo nuevo: extiende el que ya existe a **WhatsApp, operadores humanos y tiempo real**. Al aplicarse el cuestionario, el mismo motor que arma la experiencia ideal genera también el **brief del asesor** —perfil del comprador potencial, sus intereses y sugerencias concretas de cómo conducir la venta— sin importar quién lo atendió. Detalle completo en **[BDS · Resumen Ejecutivo](#bds-resumen)** y **[BDS · Flujo de conversión](#bds-flujo)**.

### 11 · Qué mide el BDS

El indicador rector es el **tiempo al primer contacto**. El BDS extiende el mismo funnel/dashboard del Proyecto A con sus propias etapas: **lead generado → primer contacto → cuestionario aplicado → visita agendada → visita proporcionada → nueva membresía**, medido por canal (operador humano vs. "BES") y por horario. Detalle en **[BDS · Medición y funnel](#bds-medicion)**.

### 12 · Lo comercial

El BDS es un **alcance independiente**: su contratación no modifica el Proyecto A ni su precio. La contraprestación adicional es de **USD $4,850.00 más IVA (MXN $86,330.00 al tipo de cambio contractual de $17.80)**, en dos exhibiciones de 50% (USD $2,425.00 cada una), **sin iguala propia** —su mantenimiento está incluido en la iguala del Proyecto A—, con un **plazo de desarrollo y entrega de 8 semanas** desde la firma del **[Addendum del BDS](#bds-anexo)**, ejecutado **en paralelo al Proyecto A**. En tanto no se suscriba dicho Addendum, el Proyecto B no genera obligación ni costo para ninguna de las Partes.

## Academia Sports World (Proyecto C)

> **Alcance y costo aparte** de los Proyectos A y B (Contrato · Cláusula Primera Bis; detalle en el **[Addendum de la Academia](#academia-anexo)**).

### 13 · El problema: la habilitación del asesor no está estandarizada

Quince entrevistas de campo con líderes regionales y asesores (13 clubes, cinco regiones, mayo 2026) confirman que **no existe un sistema único y formal de incorporación**: cada líder capacita según su propia experiencia y estilo, sin visibilidad comparable entre clubes. El síntoma es una **variabilidad de hasta 40 veces** entre las tasas de conversión reportadas por los propios asesores — evidencia de que las mejores prácticas ya existen dentro de la organización, solo no están sistematizadas.

### 14 · La solución: un sistema formal de habilitación en dos fases

La Academia sustituye la capacitación informal por un **programa único y replicable** para los 200 asesores, construido con rigor de diseño instruccional —microaprendizaje, práctica deliberada, evaluación en cuatro niveles y refuerzo espaciado—, en dos fases:

- **Fase 1 · Módulos interactivos.** Contenido e-learning por niveles sobre la misma taxonomía de objetivos del cliente que usa el cuestionario (Proyecto A) y los siete componentes del programa, validados en campo. El asesor no avanza de nivel sin acreditar el anterior.
- **Fase 2 · Role-play con agente de voz.** El asesor practica la conversación de venta completa contra un agente de IA que simula al cliente, con dificultad que se adapta a su historial, y certifica con refuerzo espaciado a 7, 30 y 90 días. Reutiliza el mismo motor conversacional de BES (Estrategia Técnica del sitio, §5), en un rol distinto.

Detalle completo en **[Academia · Resumen Ejecutivo](#academia-resumen)**, **[Contenido y taxonomía](#academia-contenido)** y **[Fases del programa](#academia-fases)**.

### 15 · Qué mide la Academia

El **dashboard de readiness** consolida, para los 200 asesores, el avance de módulos (Fase 1) y el desempeño de role-play (Fase 2). El programa se evalúa en cuatro niveles —reacción, aprendizaje, comportamiento real y resultado comercial—, calibrando la línea base con las métricas reales del CRM antes de comprometer KPIs de conversión. El ejercicio de campo también identificó cuatro **habilitadores operativos** a cargo de Sports World; tres de ellos —canal de WhatsApp estable, cualificación de leads al origen y velocidad de respuesta al lead digital— son precisamente el objeto del **Proyecto B (BDS)**: contratado el BDS, quedan resueltos por diseño. Detalle en **[Academia · Medición](#academia-medicion)**.

### 16 · Lo comercial

La Academia es un **alcance independiente**: su contratación no modifica el Proyecto A ni el Proyecto B. La contraprestación adicional es de **$850,000.00 MXN más IVA (USD $47,752.81 al tipo de cambio contractual de $17.80)**, en dos exhibiciones de 50% ($425,000.00 MXN más IVA cada una), más una **iguala opcional de mantenimiento de $18,500 MXN más IVA** que Sports World decide contratar o no al firmar el Addendum, con un **plazo de desarrollo y entrega de 10 semanas** a partir de la firma del **[Addendum de la Academia](#academia-anexo)** y del cierre de la validación de la taxonomía y los requerimientos. En tanto no se suscriba dicho Addendum, el Proyecto C no genera obligación ni costo para ninguna de las Partes.

## Inversión: los tres proyectos en una tabla

Todas las equivalencias entre dólares y pesos se calculan al **tipo de cambio contractual fijo de $17.80 MXN por USD** (Contrato, Cláusula Segunda).

| Proyecto | Inversión (pago único) | Recurrente | Plazo | Exigible |
|---|---|---|---|---|
| **A · Rediseño Web** | USD $81,000 sin IVA (MXN $1,441,800; $1,672,488 con IVA), en dos exhibiciones de 50% | Iguala mensual Opción A: $43,000 MXN (USD $2,415.73); $49,880 MXN con IVA — mínimo 6 meses, incluye mantenimiento del BDS | 8 semanas | Desde la firma del Contrato |
| **B · Business Development System** | USD $4,850.00 más IVA (MXN $86,330.00), en dos exhibiciones de 50% | Sin iguala propia: mantenimiento incluido en la iguala del Proyecto A | 8 semanas, en paralelo al A | Desde la firma de su Addendum |
| **C · Academia Sports World** | $850,000.00 MXN más IVA (USD $47,752.81); $986,000.00 MXN con IVA, en dos exhibiciones de 50% | Iguala de mantenimiento **opcional**: $18,500 MXN más IVA ($21,460 con IVA) — se decide al firmar el Addendum | 10 semanas | Desde la firma de su Addendum |

**Los precios de B y C asumen su aprobación simultánea al Proyecto A**; de diferirse alguno, su precio se recalcula antes de firmar el Addendum (Contrato, Cláusula Segunda). Los **costos de operación** de las plataformas de IA, voz y mensajería corren por cuenta de Sports World directamente con los proveedores, con monitoreo y reporte mensual (Contrato, Cláusula Sexta Bis). La estimación mensual completa, en tres escenarios de tráfico e interacciones, está en **[Gastos Operativos Variables](#gastos-operativos)**.

## El Plan de Ejecución, en resumen

Un solo modelo de gobierno para los tres proyectos, con un líder general y seis equipos:

- **Proyecto A (8 semanas, comprometido).** Cuatro equipos en paralelo —web, SEO/contenido, contenido visual y BES— con gates firmados por Sports World en cada etapa (pilar → 50% → completitud → visto bueno → lanzamiento) y estabilización posterior de 2 a 4 semanas.
- **Proyecto B (8 semanas, en paralelo al A).** El Equipo 5 integra WhatsApp Business API, BES por WhatsApp y el rol de operador de la consola sobre los componentes del sitio, que quedan operativos desde las Semanas 3–6 — no espera al lanzamiento.
- **Proyecto C (10 semanas).** El Equipo 6 valida la taxonomía con Sports World, produce las lecciones de la Fase 1 desde la firma y activa el role-play de la Fase 2 cuando el motor de BES está disponible.

Detalle completo en el **[Plan de Ejecución](#execution)**: §§1–9 el Proyecto A, §10 el B, §11 el C.

## Próximo paso

**Proyecto A:** aprobar esta propuesta, cerrar el kickoff con la firma del checklist de dependencias y arrancar las ocho semanas. A partir de ahí, el calendario corre.
**Proyecto B (BDS):** cerrar el alcance y el listado de requerimientos y suscribir el Addendum; a partir de la firma corren sus **8 semanas** de desarrollo y entrega, en paralelo al Proyecto A, con el Equipo 5 (BDS) según lo descrito en el **[Plan de Ejecución · §10](#execution:10-proyecto-b-bds-marco-de-ejecucin)**.
**Proyecto C (Academia):** validar con Sports World el mapeo de la taxonomía del cuestionario a los siete componentes y la segmentación por club; cerrar el listado de requerimientos y suscribir el Addendum. A partir de la firma corren las **10 semanas** de desarrollo y entrega, con el marco de arranque del **[Plan de Ejecución · §11](#execution:11-proyecto-c-academia-marco-de-ejecucin)**.

**Escenario recomendado si los tres se firman en el kickoff:** el Proyecto A corre sus 8 semanas; el Equipo 5 (BDS) integra sobre los componentes del sitio desde que están operativos (Semanas 3–6) y lanza junto con él; la Academia valida su taxonomía en paralelo, produce la Fase 1 desde la firma y activa la Fase 2 cuando el motor de BES está disponible — el sistema completo queda en operación en un horizonte del orden de **12 semanas**, no de 26.
