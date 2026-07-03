# BDS · Medición y funnel
## Cómo se mide el resultado del sistema de captación

> **Proyecto B (BDS).** Extiende el **[funnel de resultados y dashboard](#technical:10-funnel-de-resultados-y-dashboard-de-medicin)** del Proyecto A, agregando las etapas y métricas propias de la captación multicanal en tiempo real. El indicador rector es el **tiempo al primer contacto** (*speed-to-lead*).

## El funnel del BDS (de extremo a extremo)

**Lead generado → primer contacto → cuestionario aplicado → visita agendada → visita proporcionada → nueva membresía.**

| Etapa | Qué mide | Fuente |
|---|---|---|
| **Lead generado** | Volumen por origen (campaña, WhatsApp entrante, walk-in, sitio) | Landing / WhatsApp / consola |
| **Primer contacto** | Que el lead **fue atendido** (humano o "BES") y **cuánto tardó** | Capa de enrutamiento |
| **Cuestionario aplicado** | Que se completó el cuestionario de experiencia ideal | Motor de cuestionario |
| **Visita agendada** | Que se agendó la visita guiada | Escritura al CRM |
| **Visita proporcionada** | Que el prospecto **asistió** a la visita | CRM (vía middleware) |
| **Nueva membresía** | Que la visita se convirtió en alta | CRM (vía middleware) |

## El KPI rector: tiempo al primer contacto

Es la métrica que el BDS existe para mover. Se reporta:

- **Distribución del tiempo al primer contacto** (p. ej. mediana y percentiles), comparando el **antes** (formulario + llamada tardía) con el **después** (engagement en tiempo real).
- **Por canal:** operador humano vs. "BES".
- **Por horario:** dentro de horario (human-first) vs. fuera de horario ("BES").

## Otras vistas del dashboard

- **Por operador:** volumen atendido, tiempo de respuesta, conversión a visita agendada.
- **Por "BES":** conversaciones atendidas, agendas logradas, escalaciones a humano.
- **Por canal y por campaña:** de qué anuncio/origen vienen los leads que más convierten.
- **Cobertura:** % de leads con **primer contacto inmediato** (el objetivo es ~100%: cero lead sin atender).

## Cómo se conecta con lo ya existente

- Las etapas **tráfico → visita agendada** y las métricas on-page (tiempo en página, punto de salida) se miden con **Google (GA4, Search Console)** — recursos ya enumerados en el **[Contrato · Anexo Uno E.4](#contrato:bloque-e-aportaciones-de-marketing-y-marca-a-cargo-del-cliente)**.
- Las etapas **visita agendada → proporcionada → nueva membresía** las provee el **CRM (vía middleware)**.
- El BDS **añade** la etapa de **primer contacto** y el eje de **tiempo**, que son propios de la captación en tiempo real.

Así, la dirección ve en un solo tablero el **impacto real** del sistema: no solo cuántos leads entran, sino **qué tan rápido se atienden y cuántos terminan en membresía**.
