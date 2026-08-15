# Plan de corrección del depósito · Sports World

Lista maestra de todo lo que debe corregirse, derivada de la auditoría completa (29 documentos al 100%, contrato al 81%). **Este archivo se actualiza conforme cada punto se completa.**

**Estado:** ✅ hecho · 🔄 en curso · ⬜ pendiente · ⚖️ materia de Legal

---

## Bloque 1 · Contradicciones de hecho

Errores factuales: dos documentos vivos afirman cosas distintas. Prioridad máxima — son visibles para el cliente.

| # | Documento · línea | Qué corregir | Estado |
|---|---|---|---|
| 1.1 | `technical:28` | Dice "en tiempo real se leen los precios y las clases". Alinear al corte diario 06:00 | ✅ |
| 1.2 | `experience:678-690` (§5.2 completa) | Sección "Tiempo real vs periódico": estado de club y horario de clases marcados como tiempo real | ✅ |
| 1.3 | `technical:127-139` | Funnel de 4 etapas. Alinear al mapa canónico | ✅ |
| 1.4 | `execution:12` | Funnel de 4 etapas | ✅ |
| 1.5 | `bds-medicion:6-17` | Tercera definición de funnel (6 etapas distintas) | ✅ |
| 1.6 | `bds-medicion:41` | Llave de conciliación por código postal | ✅ |
| 1.7 | `execution §4` · `integracion §8` | **Resuelto.** Una sola especificación en `execution §4`: recomendada 8 vCPU/16 GB + mínimo viable 4 vCPU/8 GB con pregeneración de imágenes, más ancho de banda, transferencia, staging y umbrales de monitoreo. La duplicada de `integracion §8` se eliminó | ✅ |
| 1.8 | `experience:899-906` | Cinco nombres de plan congelados como URLs, cuando los planes vienen del CRM | ✅ |
| 1.9 | `experience:701-708` (§5.4) | Declara abiertas dependencias que ya quedaron definidas en `integracion` | ✅ |

## Bloque 2 · Secciones faltantes o incompletas

| # | Documento | Qué falta | Estado |
|---|---|---|---|
| 2.1 | `funnel.es.md` | Mapa del funnel: canales, etapas, fuentes, accesos y responsables | ✅ |
| 2.2 | `glosario.es.md` | No define **experiencia ideal**, **cuestionario dinámico**, **sistema de ventas** ni **las tres capas** | ✅ |
| 2.3 | `seguridad.es.md` | Alcance limitado al sitio: no cubre WhatsApp, consola ni la base de datos del funnel | ✅ |
| 2.4 | `workshop-discovery:39` · `entrevistas-campo:41` | Cierran en "Proyectos A y B" y omiten la Academia, que nació de ese mismo workshop | ✅ |
| 2.5 | `seguimiento-2026-06-22` | Tablero vivo: puntos 1, 2, 6 y 12 no reflejan lo ya resuelto | ✅ |
| 2.6 | `integracion §5` vs `funnel` | Revisar duplicación: qué queda en cada documento y cómo se referencian | ✅ |

## Bloque 3 · Propuesta de valor (reencuadre)

Subir cada documento del nivel de funcionalidad al nivel del sistema de tres capas.

| # | Documento | Qué hacer | Estado |
|---|---|---|---|
| 3.1 | `resumen.es.md` | Tesis en la apertura y en el cuerpo completo | ✅ |
| 3.2 | `indice.es.md` | Tesis y tablas espejo de la nueva agrupación | ✅ |
| 3.3 | `deck.html` | Láminas 8 y 11 (de catálogo a experiencia ideal; tres capas) | ✅ |
| 3.4 | `experience.es.md` §0.0, §0.1, §0.2 | Subir la tesis; corregir la línea 16 que llama "esta página" al producto del sistema | ✅ |
| 3.5 | `technical.es.md` | Apertura: la maquinaria del sistema, no un fin en sí | ✅ |
| 3.6 | `bds-resumen.es.md` | Posicionar como la capa de canales en tiempo real | ✅ |
| 3.7 | `academia-resumen.es.md` | Posicionar como la capa de capacidad humana | ✅ |
| 3.8 | 9 documentos de BDS y Academia | Cita de posicionamiento (línea 4 de cada uno) | ✅ |
| 3.9 | `execution.es.md` | Lenguaje de capas + línea 199 | ✅ |
| 3.10 | `auditoria.es.md` | Conectar el diagnóstico con la tesis (la infraestructura existe; para Google, no) | ✅ |
| 3.11 | `integracion.es.md` | Conectar con el nivel "la prueba" del sistema | ✅ |

## Bloque 4 · Redacción del Resumen Ejecutivo

Errores concretos localizados al revisar el documento:

| # | Línea | Error | Estado |
|---|---|---|---|
| 4.1 | `resumen:4` | Párrafo de apertura de ~180 palabras que mezcla tesis, tres proyectos, detalle del Rediseño Web y lista de documentos. Partir en tres | ✅ |
| 4.2 | `resumen:4` | *"Ocho semanas para convertir sportsworld.com.mx…"* — oración sin verbo principal, y **reduce el proyecto al sitio web**, contradiciendo la tesis del mismo párrafo | ✅ |
| 4.3 | `resumen:4` | *"se desarrolla a detalle"* → "en detalle" | ✅ |
| 4.4 | `resumen:16` | *"el club cerca de ella"* — rompe la regla de lenguaje neutro | ✅ |
| 4.5 | `resumen:16` | *"una disponibilidad de clases grupales que, combinada y estructurada para su objetivo, ninguna otra marca del mercado ofrece"* — el relativo queda huérfano del verbo; ilegible | ✅ |
| 4.6 | `resumen:28` | *"Lo que hace a esto un solo sistema"* → "lo que hace **de** esto" | ✅ |
| 4.7 | `resumen:32` | *"Proyecto A · Rediseño Web. El canal donde nace…"* — residuo del marco anterior: A es una capa, no un canal | ✅ |
| 4.8 | `resumen:18` | La tabla de cinco niveles tiene un renglón llamado "El sistema" dentro de "el sistema opera en cinco niveles": el sistema no es un nivel de sí mismo | ✅ |
| 4.9 | `resumen:14` | ~~El encabezado anuncia dos estructuras~~ — **descartado**: al releer, la sección sí desarrolla ambas (tabla de niveles + subsección de capas). No era un defecto | ✅ |
| 4.10 | `resumen` · `indice` · `funnel` | Pasada completa de ortografía y gramática a los documentos ya modificados | ✅ |

## Bloque 5 · Materia de Legal (no se corrige editorialmente)

Cinco ajustes que tocan el Contrato y requieren decisión de Legal. **No se editan desde la documentación.**

| # | Dónde | Qué ajustar | Estado |
|---|---|---|---|
| 5.1 | Anexo Uno · vía alternativa | Exigir **número de membresía y teléfono** en el registro de membresía nueva | ⚖️ |
| 5.2 | Anexo Uno | Agregar el **dato de cancelación** — hoy no existe en ningún punto | ⚖️ |
| 5.3 | Anexo Uno · nota de conciliación | Sustituir código postal por **teléfono + club** | ⚖️ |
| 5.4 | Anexo Uno · nota de frecuencia | Sustituir lectura en tiempo real por **corte diario 06:00** | ⚖️ |
| 5.5 | Anexo Dos | Funnel de 4 etapas: decidir si se amplía o permanece como titular contractual | ⚖️ |
| 5.6 | Anexo Uno · F.6 | Sustituir "capacidad y ancho de banda razonables" por remisión expresa a la especificación del Plan de Ejecución §4 | ⚖️ |

---

## Resumen de avance

| Bloque | Total | Hechos | Pendientes |
|---|---|---|---|
| 1 · Contradicciones | 9 | **9** | 0 |
| 2 · Secciones faltantes | 6 | **6** | 0 |
| 3 · Propuesta de valor | 11 | **11** | 0 |
| 4 · Redacción | 10 | **10** | 0 |
| 5 · Legal | 6 | — | 6 (decisión del cliente) |
| **Total editable** | **36** | **36** | **0** |

## Orden de ejecución propuesto

1. **Bloque 4** — Resumen Ejecutivo, primero: es el documento insignia y ya tiene errores detectados.
2. **Bloque 1** — contradicciones, en orden de documento (`technical` → `experience` → `execution` → `bds-medicion`), un commit por documento.
3. **Bloque 3** — reencuadre, aprovechando que ya se está dentro de cada documento.
4. **Bloque 2** — secciones faltantes; el glosario al final, cuando los términos estén fijos.
5. **Bloque 5** — paquete único para Legal, por separado.

Los bloques 1 y 3 tocan los mismos documentos: conviene resolverlos **en la misma pasada por documento** para no reescribirlos dos veces.
