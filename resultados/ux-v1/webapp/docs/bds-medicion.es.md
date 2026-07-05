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

## Atribución de origen: del anuncio a la membresía

El dashboard atribuye cada resultado a su **origen**, de extremo a extremo:

**Clic en anuncio (Meta o TikTok, con su referencia de campaña) o tráfico web → conversación de WhatsApp o landing → cuestionario → visita agendada → visita realizada (CRM) → membresía nueva (CRM en tiempo real o importación periódica).**

- **Cómo se captura el origen.** Los anuncios de **clic-a-WhatsApp de Meta** entregan, junto con el primer mensaje del prospecto, la **referencia del anuncio y la campaña de origen** — por eso **un solo número oficial basta** para la atribución por campaña (**[Addendum del BDS · §4](#bds-anexo:4-aportaciones-a-cargo-de-el-cliente)**). En el sitio y las landings, el origen se captura con los parámetros de campaña y la instrumentación de eventos (GA4/GTM). Las métricas de las campañas (visualizaciones, alcance, clics) se leen del **Meta Business Manager** de EL CLIENTE y, cuando haya campañas en esa plataforma, de **TikTok Ads** con acceso de lectura (**[Contrato · Anexo Uno, Bloque E](#contrato:bloque-e-aportaciones-de-marketing-y-marca-a-cargo-del-cliente)**).
- **Membresías nuevas sin dato en el CRM (vía alternativa).** Si el dato de membresías nuevas no reside en el CRM, EL CLIENTE entrega periódicamente (semanal o mensualmente, según disponibilidad) la base de membresías nuevas y el cruce se realiza **dentro de la infraestructura de EL CLIENTE** (el servidor del Anexo Uno, Bloque F), conciliando por **nombre y apellido** con el **código postal** como verificación; el dashboard presenta **únicamente resultados agregados**, en congruencia con la cláusula de seguridad y minimización (Contrato, Cláusula Décima Octava) — los datos personales no residen en sistemas de EL PRESTADOR.

**Qué muestra el dashboard por origen:** las **visualizaciones** y el **CTR** de las campañas; el **clic a experiencia ideal** en la web; las **landings con menor rebote**; las **conversiones a visita**; las **visitas realizadas**; y las **membresías nuevas**.

## Cómo se conecta con lo ya existente

- Las etapas **tráfico → visita agendada** y las métricas on-page (tiempo en página, punto de salida) se miden con **Google (GA4, Search Console)** — recursos ya enumerados en el **[Contrato · Anexo Uno E.4](#contrato:bloque-e-aportaciones-de-marketing-y-marca-a-cargo-del-cliente)**.
- Las etapas **visita agendada → proporcionada → nueva membresía** las provee el **CRM (vía middleware)**.
- El BDS **añade** la etapa de **primer contacto** y el eje de **tiempo**, que son propios de la captación en tiempo real.

Así, la dirección ve en un solo tablero el **impacto real** del sistema: no solo cuántos leads entran, sino **qué tan rápido se atienden y cuántos terminan en membresía**.
