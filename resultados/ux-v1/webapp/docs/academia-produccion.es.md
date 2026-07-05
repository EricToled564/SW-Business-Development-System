# Academia SW · Producción del curso
## Estructura del módulo, mecánicas de interactividad y producción 100% con IA

> **Proyecto C (Academia).** Este documento responde tres preguntas concretas sobre la Fase 1 (**[Fases del programa](#academia-fases)**): qué forma tiene un módulo, cómo se logra que sea interactivo —no un video pasivo—, y cómo se produce **100% con inteligencia artificial** sin que el costo escale con cada módulo nuevo.

## La anatomía de un módulo (8–12 minutos)

Cada módulo de la Fase 1 sigue **la misma estructura de seis bloques**, sin importar el componente que enseñe. Esto no es una limitación: es lo que hace posible producir los 7 módulos base (Niveles 1–4, **[Fases del programa](#academia-fases)**) más las variantes de segmentación por club (**[Contenido y taxonomía · Segmentación](#academia-contenido)**) — alrededor de 13 piezas en total — sin rediseñar cada una desde cero.

| Bloque | Duración | Qué hace | Por qué |
|---|---|---|---|
| **1. Gancho de campo** | 30–45 s | Una escena breve narrada con una situación real de venta (basada en las citas de las entrevistas de campo), sin resolver — plantea el problema. | Ancla el módulo en un caso reconocible, no en teoría abstracta. |
| **2. Concepto** | 2–3 min | El presentador de IA explica el componente (por ejemplo, la taxonomía de objetivos) con apoyo visual generado — no un video de cámara fija con texto. | Es el único bloque puramente expositivo; se mantiene corto a propósito (principio de microaprendizaje, **[Fases del programa](#academia-fases)**). |
| **3. Comprobación en vivo** | 1–2 min | Ejercicio interactivo embebido — clasificar frases reales de cliente en la categoría correcta, o resolver una pregunta de opción múltiple — con retroalimentación inmediata. | El asesor **aplica**, no solo escucha, antes de seguir; es la primera dosis de práctica deliberada dentro del propio módulo. |
| **4. Así lo hace un asesor top** | 1–2 min | Clip narrado con una práctica real observada en campo (por ejemplo, el patrón de hospitalidad consultiva). | Reduce la sensación de "teoría corporativa": lo que se enseña ya lo hace alguien del equipo. |
| **5. Rama de decisión** | 1–2 min | Mini escenario de una sola bifurcación: el asesor elige cómo responder a una objeción en texto; el módulo muestra la consecuencia de esa elección (el cliente cede o se resiste más) antes de explicar la respuesta óptima. | Introduce consecuencia y riesgo simulado sin necesitar todavía el agente de voz — puente hacia la Fase 2. |
| **6. Acreditación** | 2–3 min | 3 a 5 preguntas de opción múltiple o clasificación sobre el módulo completo. | Es el *gate* de progresión ya descrito en **[Fases del programa](#academia-fases)**. |

## Cómo se logra la interactividad sin desarrollo a la medida por módulo

La interactividad **no se programa módulo por módulo**: se construye **una sola vez** un motor de reproducción ("player") con cuatro tipos de interacción reutilizables, y cada módulo nuevo solo aporta el **contenido** (guion, preguntas, ramas) que ese motor reproduce.

| Tipo de interacción | Se usa en | Costo marginal por módulo nuevo |
|---|---|---|
| **Clasificación** (arrastrar o tocar para ordenar) | Bloque 3 — clasificar frases de cliente en la taxonomía | Solo el texto de las frases y su categoría correcta |
| **Opción múltiple con retroalimentación** | Bloques 3 y 6 | Solo la pregunta y las opciones |
| **Rama de decisión (bifurcación simple)** | Bloque 5 | Solo el guion de las dos ramas y su consecuencia |
| **Video/audio narrado con puntos de pausa** | Bloques 1, 2 y 4 | Solo el guion — el "actor" y el estilo visual son los mismos en todos los módulos (ver abajo) |

Construir estos cuatro tipos de interacción es una **inversión única** al inicio del proyecto; producir cada módulo adicional después es, en esencia, **escribir el guion y cargarlo**, no desarrollar una experiencia nueva.

## Impacto visual con producción 100% IA, con costo marginal mínimo por módulo

El requisito de **mantener impacto visual sin disparar el costo** se resuelve con el mismo principio que la interactividad: **invertir una vez en los activos reutilizables, no en cada módulo.**

- **Un presentador sintético único.** Se genera **una sola vez** un avatar de IA (tipo HeyGen/Synthesia) que aparece en todos los módulos como el "instructor" de la Academia. El costo de crear el avatar y su voz es de configuración inicial; narrar un módulo nuevo es generar el audio/video con el mismo avatar, no contratar actor, estudio ni edición.
- **La misma voz sintética que ya paga el proyecto.** El motor de síntesis de voz (TTS) del presentador reutiliza el **mismo proveedor y la misma voz natural en español de México** ya construidos para BES y el agente de role-play (**[Estrategia Técnica de la Academia · §3](#academia-tecnica)**; **[Estrategia Técnica del sitio · §5](#technical:5-bes-el-agente-de-voz-y-texto)**) — consistencia de marca sin pagar una voz adicional.
- **Un sistema visual fijo (brand kit), no diseño custom por módulo.** Paleta, tipografía, plantillas de motion graphics e ilustraciones de apoyo se definen **una vez** al inicio (mismo principio que el sistema de diseño del sitio, **[Plan de Ejecución · §1](#execution:1-qu-se-est-construyendo-en-paralelo)**). Cada módulo nuevo hereda esas plantillas; no se diseña desde cero.
- **Imágenes y gráficos generados por IA, reutilizables por nivel.** Las ilustraciones de apoyo (por ejemplo, para representar cada objetivo del cliente o cada segmento de club) se generan con IA y se **reutilizan entre los módulos del mismo nivel**, en vez de encargar una ilustración distinta por módulo.
- **Actualización barata cuando cambia el contenido.** Si cambia una política, un precio de referencia o aparece un competidor nuevo en una plaza, se regenera **solo el guion y el audio/video de ese módulo** con el mismo avatar — no se vuelve a grabar nada, porque nunca hubo una grabación física que reproducir.

## Qué sí requiere inversión real (y por qué vale la pena)

Para que el costo se mantenga bajo en el tiempo, la inversión inicial se concentra en **tres activos reutilizables**, no en contenido:

1. El **motor de reproducción** con los cuatro tipos de interacción (sección anterior).
2. El **avatar y la voz sintética** del presentador.
3. El **sistema visual (brand kit)** de plantillas, paleta y estilo de motion graphics.

Una vez construidos estos tres activos, el costo de cada módulo adicional —incluidas las variantes de segmentación por club (**[Contenido y taxonomía](#academia-contenido)**) y cualquier actualización futura— se reduce a **contenido (guion) más el procesamiento de generación**, no a producción audiovisual tradicional. Esto es lo que hace viable escalar de los módulos base a las variantes por segmento y a futuras actualizaciones sin que el costo crezca en la misma proporción.
