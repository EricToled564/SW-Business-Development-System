# Agente de leads por WhatsApp (BDS) · Especificación de construcción
## ElevenLabs Agents Platform + WhatsApp Business + middleware propio

## 1 · Arquitectura

```
Anuncio Meta (clic-a-WhatsApp, por club) ──► WhatsApp del lead (mensaje pre-escrito: nombre + club)
        │ referral del anuncio (campaña/anuncio)          │
        ▼                                                  ▼
Número WhatsApp Business (verificado Meta) ══ conectado por OAuth ══► Agente ElevenLabs (texto)
                                                                          │ herramientas (webhooks)
                                                                          ▼
                                    Middleware (Vercel/servidor): resolver_club · guardar_lead ·
                                    agendar_cita · enviar_experiencia · enviar_brief_club ·
                                    programar_recordatorios · consultar_catalogo
                                                                          │
                                          correo al lead (experiencia ideal) · correo al club (brief)
                                          · recordatorios WhatsApp (plantillas utility 24 h y 2 h)
```

- **Un solo número** de WhatsApp basta: los anuncios de clic-a-WhatsApp entregan la referencia de campaña/anuncio con el primer mensaje (atribución automática).
- El **mensaje pre-escrito** del anuncio se configura por creatividad: "Hola, soy {nombre}, me interesa el club {club}" — cada anuncio de club lleva su club en el texto.
- El agente **capta**: teléfono (remitente), nombre y club (parseo del primer mensaje; si falta alguno, lo pregunta).
- ElevenLabs Agents se conecta a WhatsApp Business por flujo de autorización nativo y ejecuta **server tools** (webhooks JSON) contra nuestro middleware; el envío de plantillas salientes usa la herramienta nativa *Send Message* de la integración de WhatsApp.

## 2 · Flujo conversacional (estados)

| # | Estado | Qué hace el agente |
|---|---|---|
| 0 | Apertura | Saluda por nombre: "Entendimos que tu club de preferencia es **{club}**. ¿Estás seguro, o te gustaría asesoría para identificar tu club ideal?" |
| 1a | Seguro | Pasa directo al estado 2 con `{club}` como club destino tentativo. |
| 1b | Asesoría | Pregunta **ciudad**; luego ofrece dar **código postal o colonia** → tool `resolver_club` (mismo motor del demo: ciudad primero; si su ciudad no tiene club, el más cercano + aviso de distancia). |
| 2 | Encuadre | "Vamos a tomar **1 minuto y medio** de tu tiempo para aplicarte el cuestionario de tu experiencia ideal." |
| 3 | Cuestionario | Aplica las preguntas del cuestionario de experiencia ideal (misma taxonomía del sitio: objetivo emocional, objetivos funcionales —máx. 2—, acompañamiento, horario, amenidades). **Tras cada respuesta anuncia el avance**: "Vamos en el 40%…" (avance = preguntas contestadas / total). |
| 4 | Resultado | Anuncia el **club ideal** (del estado 1 o recalculado con `resolver_club` si la asesoría cambió datos) con 1–2 razones ligadas a sus respuestas. |
| 5 | Email | Pide su **correo electrónico** (valida formato). |
| 6 | Cita | Pregunta **día y hora** para su visita (dentro del horario de atención del club, vía `consultar_catalogo`); tool `agendar_cita`. |
| 7 | Cierre | Confirma: "Tu visita quedó agendada el {día} a las {hora} en {club}. **Tu experiencia ideal va en camino a tu correo.**" → tools `enviar_experiencia` (correo al lead) y `enviar_brief_club` (correo al club con el brief del asesor) + `programar_recordatorios`. |
| 8 | Recordatorios | **24 h antes** y **2 h antes** de la cita: plantillas *utility* pre-aprobadas por WhatsApp. |

**Reglas transversales:** es-MX, tono cálido y breve (mensajes de 1–3 líneas); nunca inventa precios/horarios/amenidades (todo por `consultar_catalogo`); si el lead pide hablar con una persona, handoff al operador; si abandona a media conversación, un (1) solo mensaje de retome dentro de la ventana de 24 h.

## 3 · Herramientas (webhooks del middleware)

| Tool | Entrada | Salida / efecto |
|---|---|---|
| `resolver_club` | ciudad, cp?, colonia? | club ideal + distancia + alternativas de la misma ciudad (lógica del demo: solo clubes de su ciudad; si no hay, el más cercano con aviso) |
| `consultar_catalogo` | club, tema (horarios/amenidades/clases) | datos certificados del catálogo |
| `guardar_lead` | teléfono, nombre, club, respuestas, campaña (referral) | escribe el lead (idempotente) |
| `agendar_cita` | lead, club, fecha, hora | registra la cita; valida horario de atención |
| `enviar_experiencia` | lead, email | genera la experiencia ideal (motor Claude, mismo del demo) y la envía por correo al lead |
| `enviar_brief_club` | lead, club | genera el brief del asesor (contacto + perfil + cómo conducir la venta) y lo envía al correo del club |
| `programar_recordatorios` | cita | agenda los envíos de 24 h y 2 h (cron del middleware → Send Message con plantilla) |

## 4 · Plantillas de WhatsApp a pre-aprobar (categoría *utility*)

1. `recordatorio_24h`: "Hola {{1}}, te esperamos mañana {{2}} a las {{3}} en Sports World {{4}}. ¿Nos confirmas tu visita?"
2. `recordatorio_2h`: "Hola {{1}}, tu visita en Sports World {{2}} es hoy a las {{3}}. ¡Te esperamos! Si necesitas mover tu cita, responde este mensaje."
3. `retome_conversacion` (opcional): para reabrir si el lead quedó a medias fuera de ventana.

## 5 · Prompt del agente (borrador para pegar en ElevenLabs)

> Eres BES, el asistente de Sports World en WhatsApp. Hablas español de México, cálido, directo, mensajes cortos (máximo 3 líneas). Tu misión: confirmar o encontrar el club ideal del prospecto, aplicar el cuestionario de experiencia ideal, agendar su visita y despedirte con su experiencia en camino a su correo.
>
> Del primer mensaje extrae nombre y club de preferencia (viene pre-escrito desde el anuncio). Abre SIEMPRE así: confirma que entendiste su club de preferencia y pregunta si está seguro o quiere asesoría para identificar su club ideal. Si está seguro, continúa; si quiere asesoría, pregunta su ciudad y ofrécele darte su código postal o su colonia, y usa resolver_club.
>
> Antes del cuestionario anuncia que tomarás un minuto y medio de su tiempo. Haz UNA pregunta por mensaje. Después de cada respuesta, menciona el porcentaje completado. Máximo dos objetivos funcionales.
>
> Al terminar: anuncia su club ideal con una o dos razones tomadas de SUS respuestas. Pide su correo electrónico. Pregunta qué día y a qué hora quiere su visita y agéndala con agendar_cita (verifica horario del club con consultar_catalogo). Cierra confirmando la cita y que su experiencia ideal va en camino a su correo; llama enviar_experiencia, enviar_brief_club y programar_recordatorios.
>
> Nunca inventes precios, horarios, clases ni amenidades: consulta siempre consultar_catalogo. Si el usuario pide hablar con una persona, indícale que un asesor le escribirá y marca handoff. No des información de otros temas. No pidas más datos personales que nombre, correo y lo que el cuestionario requiere.

## 6 · Requisitos para arrancar (checklist)

- [ ] Número de WhatsApp Business **a nombre de la razón social**, en Cloud API, con **verificación de negocio en Meta** completada.
- [ ] Cuenta de ElevenLabs con Agents Platform habilitada; conectar el número por el flujo de autorización e **asignar el agente**.
- [ ] Middleware desplegado (Vercel sirve para el piloto) con los 7 webhooks y el cron de recordatorios.
- [ ] Proveedor de correo transaccional (Resend o Amazon SES) para experiencia ideal y brief del club.
- [ ] Plantillas *utility* enviadas a aprobación de Meta (24–48 h típicas).
- [ ] Catálogo de clubes cargado (horarios de atención por club como mínimo) + correos de destino por club.
- [ ] Anuncios de clic-a-WhatsApp configurados por club con el mensaje pre-escrito.

**Piloto recomendado:** 1 club, número de pruebas, 20–50 leads, medir: tasa de respuesta al primer mensaje, % que completa el cuestionario, % que agenda, show-rate con los 2 recordatorios.
