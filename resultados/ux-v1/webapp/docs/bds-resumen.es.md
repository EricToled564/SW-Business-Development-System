# Business Development System (BDS) · Resumen Ejecutivo
## Captación y conversión de leads multicanal en tiempo real

> **Proyecto B · la capa de canales en tiempo real** del sistema de ventas (**[Resumen Ejecutivo](#resumen)**). Lleva la experiencia ideal al canal donde hoy nace la mayoría de los leads —las campañas en redes— y la hace operar en tiempo real. No construye un motor nuevo: extiende el del Proyecto A a WhatsApp, a operadores humanos y al tiempo real.

## El problema: los leads se enfrían

Hoy la mayor fuente de leads de Sports World son las **campañas en redes sociales**. El recorrido actual es:

1. El usuario ve un anuncio y da clic.
2. Aterriza en un **formulario** (nombre, teléfono, correo y su pregunta).
3. La solicitud se envía **al club que el usuario indica como más cercano**.
4. Un **asesor decide cuándo llamar** — y con frecuencia pasan **varias horas o más de un día** hasta el primer contacto.

El resultado es una **tasa de conversión muy baja**. La causa raíz no es la calidad del lead: es el **tiempo al primer contacto** (*speed-to-lead*). Un lead que expresó interés hace cinco minutos y otro contactado al día siguiente no son el mismo lead: el segundo ya perdió el impulso, comparó opciones o simplemente se olvidó.

## La solución: atender en tiempo real, en el canal del usuario

El **BDS** reemplaza el "formulario + llamada tardía" por un **engagement inmediato**, en el canal donde el usuario ya está (**WhatsApp**), aplicando **el mismo cuestionario** de experiencia ideal que ya desarrollamos, bajo un modelo **human-first con IA de respaldo**, y **agendando la visita en el momento**:

- El anuncio lleva a una **landing con el cuestionario**, no a un formulario pasivo.
- El lead se enruta **primero a un operador humano por WhatsApp** (atención en tiempo real).
- Si **no hay operador disponible** o es **fuera de horario**, **"BES" por WhatsApp (solo texto)** atiende, aplica el cuestionario y agenda.
- Los **asesores de club** atienden a los leads "de la calle" (walk-in) con la **misma consola interna** ya definida en el proyecto del sitio (**[Estrategia Técnica · §11](#technical:11-captacin-unificada-de-leads-sitio-bes-y-consola-interna)**).

En los cuatro caminos, el común denominador es el mismo: **el mismo cuestionario, la misma experiencia ideal y una sola escritura idempotente al CRM**. El BDS **no crea un flujo nuevo**: extiende el que ya existe a **WhatsApp, operadores humanos y tiempo real**.

El BDS se apoya en tres piezas, ninguna nueva: **aplicar el cuestionario**, **construir la experiencia ideal** del prospecto y, con ese mismo resultado, **entregar al asesor un documento personalizado del comprador potencial** —su perfil, sus intereses y objetivos, con sugerencias concretas de cómo conducir la venta en la visita—. Es el mismo **brief del asesor** ya definido en **[Arquitectura de Experiencia · §1.2, fase `briefing`](#experience:12-las-siete-fases)**: el BDS lo entrega sin importar si el cuestionario lo aplicó un operador humano, "BES" por WhatsApp o el asesor mismo en la consola.

## Por qué funciona

- **Velocidad:** el contacto ocurre en **segundos/minutos**, no en horas ni días — el factor que más mueve la conversión.
- **Canal correcto:** WhatsApp tiene tasas de apertura y respuesta muy superiores a la llamada.
- **Consistencia:** operadores, "BES" y asesores usan **el mismo cuestionario y la misma lógica**, así que el lead llega al CRM **idéntico** sin importar quién lo atendió.
- **Cobertura 24/7:** cuando no hay humano, "BES" sostiene la conversación y agenda, sin dejar caer al lead.

## Qué mide el proyecto

El BDS no define un funnel propio: opera sobre la **espina de conversión única** del **[Mapa del Funnel](#funnel)**, documento canónico de medición. Lo que aporta es la puerta de entrada del **Canal 2** —el anuncio que lleva a WhatsApp— y el eje transversal que existe para mover: el **tiempo al primer contacto**.

Es además el único canal donde el recorrido individual se puede seguir completo desde el clic, porque el prospecto escribe desde su propio teléfono. El detalle está en **[Medición del BDS](#bds-medicion)**.

## Documentos de este módulo

| Documento | Contenido |
|---|---|
| [**Flujo de conversión**](#bds-flujo) | El proceso end-to-end y el árbol de enrutamiento |
| [**Canales, enrutamiento y SLA**](#bds-canales) | Reglas human-first, respaldo con "BES", horarios y el SLA de contacto |
| [**Estrategia Técnica · BDS**](#bds-tecnica) | WhatsApp Business API, "BES" por WhatsApp, consola de operadores, reutilización del cuestionario y el middleware/CRM |
| [**Medición · Funnel del BDS**](#bds-medicion) | Speed-to-lead por canal y operador, hasta membresía |
| [**Addendum del BDS**](#bds-anexo) | Alcance, entregables y contraprestación adicional |
