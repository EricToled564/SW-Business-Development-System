# UX Spec — Agente de WhatsApp «Experiencia Ideal» (canal conversacional de texto)

> Especifica el agente de IA que atiende a los leads **100% por texto en WhatsApp**, desde el clic en el anuncio hasta la cita agendada y los recordatorios. Homogeniza el mismo cuestionario, la misma resolución de club, el mismo brief del asesor y el mismo contrato de datos que `ux-spec-experiencia-ideal.md` (canal web). Este documento gobierna comportamiento del canal WhatsApp; para copy generado por LLM manda `anexo-contenido-prompts.md`, para datos clínicos `anexo-clinico.md`, para parámetros de ingeniería y CRM `anexo-ingenieria-crm.md`.

## 0. Principio rector: un solo motor, tres canales

El motor conversacional y el flujo `lead → CRM` se construyen una vez y se reutilizan. El canal WhatsApp **no reimplementa** la lógica de personalización: consume el mismo servicio de Experiencia Ideal que la web y el iPad de recepción. Regla dura: mismas preguntas (Q1–Q19), mismo contrato JSON de salida (Apéndice H del UX Spec web), mismo brief de 10 secciones (Apéndice G), misma base de datos de lead. Un lead que empezó en un canal se puede reanudar en otro. Si este documento y el UX Spec web difieren en la lógica de negocio del cuestionario, **gana el UX Spec web**; aquí solo se define lo específico del transporte WhatsApp.

## 1. Alcance

**En alcance de este agente:**
- Recepción del lead que llega por anuncio Click-to-WhatsApp (CTWA) con mensaje pre-rellenado.
- Captura de teléfono, nombre y club de preferencia.
- Confirmación del club vs. asesoría para identificar el club ideal.
- Captura geográfica (ciudad + código postal o colonia) en la rama de asesoría.
- Aplicación del cuestionario adaptativo Q1–Q19 por texto, con porcentaje de avance en vivo.
- Revelado del Club Ideal y de la Experiencia Ideal.
- Captura de correo y de día/hora de la cita.
- Agendado contra la API del cliente y confirmación.
- Envío de la Experiencia Ideal por correo al lead.
- Generación del brief y envío por correo al club donde se agendó, además de la escritura idempotente del lead al CRM.
- Recordatorios de WhatsApp por plantilla 24 h y 2 h antes de la cita.

**Fuera de alcance (igual que el BES web):** pasarela de pagos, cierre de membresía en línea, ventas directas, cambios de cuenta, cancelaciones o congelamientos. El agente captura y agenda; el cierre lo ejecuta el club. WhatsApp fuera de la ventana de 24 h solo transporta plantillas utility aprobadas.

## 2. Arquitectura

```
Anuncio CTWA (Meta) ──► WhatsApp del negocio (número BSP / Cloud API)
        │  (nombre + número + texto pre-rellenado con el club)
        ▼
┌─────────────────────────────────────────────────────────────┐
│  Agente conversacional ElevenLabs (Chat Mode · texto)        │
│  - turnos en lenguaje natural (opener, asesoría, dudas)      │
│  - idioma fijado al primer mensaje (es-MX)                   │
│  - llama server tools (webhooks) para todo lo determinista   │
└───────────────┬─────────────────────────────────────────────┘
                │ server tools / webhooks
                ▼
┌─────────────────────────────────────────────────────────────┐
│  Servicio Experiencia Ideal (reutilizado de Proyecto A)      │
│  - máquina de estados del cuestionario (Q1–Q19, adaptivo)   │
│  - cálculo de % de avance (denominador dinámico)            │
│  - resolutor de Club Ideal (geo → GPS del catálogo)         │
│  - 1 llamada LLM → JSON Apéndice H (copy cliente + brief)   │
│  - lint de salida + fallbacks (anexo-contenido-prompts)     │
│  - lead scoring y flags (anexo-ingenieria-crm)              │
└───┬───────────┬───────────┬───────────┬─────────────────────┘
    │           │           │           │
    ▼           ▼           ▼           ▼
  CRM        API de      Correo      Programador de
 (idempo-   reservas   (lead +      plantillas WA
  tente)    del cliente  club)       (24 h / 2 h)
```

**Rol de ElevenLabs (decisión de canal).** ElevenLabs opera en **Chat Mode** (texto puro; sin voz en este agente) como capa conversacional sobre WhatsApp. Se encarga de los turnos en lenguaje natural: el saludo, la bifurcación confirmar-club/asesoría, resolver dudas sueltas y reencuadrar respuestas ambiguas. **No** decide la lógica del cuestionario: cada avance de estado, la siguiente pregunta, el porcentaje, la resolución de club, la generación de la Experiencia Ideal, el agendado y los envíos ocurren en el backend, invocados como server tools. Esto mantiene el cuestionario idéntico entre canales y evita que el modelo improvise preguntas, orden o copy fuera del lint.

**Por qué el cuestionario es determinista y no "charla libre".** Q1–Q19 tienen orden fijo, ramas condicionales, filtro de contraindicaciones clínicas y límites de palabras con lint bloqueante. Presentar cada pregunta como mensaje interactivo de WhatsApp (botones/listas) guiado por el backend garantiza respuestas normalizadas (mismo taxonomía Q3/Q4/Q6/Q12) y evita fugas de códigos Qn o de jerga. ElevenLabs interviene cuando el usuario responde en texto libre en vez de tocar el botón: interpreta y mapea a la opción canónica, o repregunta.

> Verificación de plataforma pendiente en implementación: confirmar en el panel/API de ElevenLabs el soporte de envío de **plantillas WhatsApp salientes programadas** (recordatorios). Si ElevenLabs no las cubre nativamente, los recordatorios 24 h/2 h se emiten por el BSP/Cloud API directamente (ver §11). La capa conversacional no depende de esa verificación; los recordatorios sí.

## 3. Entrada del lead (Click-to-WhatsApp)

Al enviar el mensaje pre-rellenado del anuncio, Meta entrega **nombre de perfil y número de WhatsApp** del lead de forma automática. El texto pre-rellenado transporta el club de interés, con esta plantilla sugerida de anuncio:

> `Hola, soy {NOMBRE} y me interesa el club Sports World {CLUB}.`

Captura y fiabilidad:

| Dato | Fuente | Fiabilidad | Regla |
|---|---|---|---|
| Teléfono | Número de WhatsApp del remitente | Alta (verificado por Meta) | Se usa como identificador del lead y como celular de contacto. No se vuelve a pedir. |
| Nombre | Perfil de WhatsApp + parsing del texto pre-rellenado | Media | Se pre-llena Q1; se confirma en el opener. El usuario puede corregirlo. |
| Club de preferencia | Parsing del texto pre-rellenado | **Baja** (el usuario puede borrar o editar el texto antes de enviar) | Nunca se asume como definitivo: se confirma explícitamente en el opener. |

Si el texto llega sin club reconocible (usuario borró el pre-llenado), el opener omite "entendemos que tu club es X" y pasa directo a ofrecer confirmar un club o recibir asesoría.

El parámetro `ctwa_clid` (click id) y las UTM del anuncio se guardan como `origen_de_entrada` para atribución multi-touch hasta el handoff al CRM.

## 4. Máquina de estados conversacional

Fases del sistema (paralelas a las del canal web `welcome · questionnaire · loading · result · contact_capture · schedule · briefing`), adaptadas al transporte WhatsApp:

| # | Estado | Entra desde | Sale a | Qué ocurre |
|---|---|---|---|---|
| 1 | `entry` | Mensaje CTWA | `confirm_club` | Captura teléfono/nombre/club del anuncio. Registra consentimiento de contacto por WhatsApp (opt-in de la conversación iniciada por el usuario). |
| 2 | `confirm_club` | `entry` | `questionnaire` (si confirma) · `geo_capture` (si pide asesoría) | Saluda por nombre, refleja el club entendido, pregunta confirmar vs. asesoría. |
| 3 | `geo_capture` | `confirm_club` (rama asesoría) | `questionnaire` | Pregunta ciudad y luego código postal **o** colonia (Q15/Q16). Resuelve club candidato por cercanía. |
| 4 | `questionnaire` | `confirm_club` o `geo_capture` | `loading` | Aplica Q1–Q19 adaptivos, uno por mensaje, con % de avance. Salta preguntas ya implícitas. |
| 5 | `loading` | `questionnaire` completo | `result` | 1 llamada LLM → JSON Apéndice H. Mensaje de espera si tarda. |
| 6 | `result` | `loading` | `email_capture` | Revela Club Ideal + Experiencia Ideal (bloques) en 1–3 mensajes. |
| 7 | `email_capture` | `result` | `schedule` | Pide correo. Valida formato. |
| 8 | `schedule` | `email_capture` | `confirm` | Pide día y hora; consulta disponibilidad en la API del cliente; opt-in de recordatorios WhatsApp. |
| 9 | `confirm` | `schedule` | `post_actions` | Confirma la cita agendada y avisa que la Experiencia Ideal va en camino por correo. |
| 10 | `post_actions` (async) | `confirm` | `reminders` | Envía correo al lead + correo del brief al club + escritura idempotente al CRM + programa recordatorios. |
| 11 | `reminders` (async) | `post_actions` | fin | Emite plantilla 24 h antes y plantilla 2 h antes. |
| — | `error` | cualquiera | reintento / humano | Reintentos y escalamiento a asesor humano. |

Reglas de navegación:
- Desde `schedule`, "regresar" vuelve a `email_capture`, no a `result`.
- El estado parcial se persiste por número de WhatsApp; si el lead abandona y regresa, se reanuda en el último estado y pregunta contestada (reanudable entre canales).
- La cita no se puede agendar sin correo válido y sin la Experiencia Ideal ya generada.

## 5. Copy por estado (es-MX, Regla 9)

Todo el copy respeta las reglas editoriales del paquete: **sin signos de exclamación, sin mayúsculas sostenidas, sin emojis, sin anglicismos cuando existe la palabra en español, concordancia de género cuando Q2 = Mujer, prohibida la palabra "plan"** (el entregable se llama siempre "Experiencia Ideal"). Segunda persona familiar (tú). Los ejemplos marcados «verbatim reusable» se copian tal cual del canal web.

### 5.1 `confirm_club` — opener (net-new)

Con club reconocido:
> Hola {nombre}. Gracias por escribirnos. Entendemos que tu club de preferencia es Sports World {club}. Antes de continuar, quiero asegurarme: ¿confirmas ese club o prefieres que te ayude a identificar el club ideal para ti?

Botones interactivos: `Confirmo {club}` · `Quiero asesoría`.

Sin club reconocido:
> Hola {nombre}. Gracias por escribirnos. Para empezar, ¿ya tienes un club de Sports World en mente o prefieres que te ayude a identificar el ideal para ti?

Botones: `Ya tengo club` · `Quiero asesoría`. (La rama "ya tengo club" pide el nombre del club y lo resuelve contra el catálogo antes de pasar a `questionnaire`.)

- **Rama confirma:** el club queda fijo; se omiten Q15 y Q16 (geografía implícita). Pasa a `questionnaire`.
- **Rama asesoría:** pasa a `geo_capture`.

### 5.2 `geo_capture` — ciudad + CP/colonia (rama asesoría)

> Con gusto te ayudo a encontrarlo. ¿En qué ciudad quieres entrenar?

Luego:
> Para ubicar el club más cercano, dame **uno** de estos dos datos: tu código postal (5 dígitos) o el nombre de tu colonia.

- Corresponde a Q15 (intención: casa/trabajo/ambos/no me importa — se infiere o se pregunta breve) y Q16 (CP o colonia, al menos uno). Con colonia se normaliza vía SEPOMEX a CP + colonia + estado; si SEPOMEX no responde, se acepta texto libre y se normaliza del lado del servidor.
- Resuelto Q16, el backend clasifica la ciudad como CIUDAD-UNO (1 club), CIUDAD-POCOS (2–3) o CIUDAD-ZMVM (>3, zona metropolitana del Valle de México, 32 clubes) y prepara la resolución del Club Ideal para el estado `result`.

### 5.3 `questionnaire` — el cuestionario por texto

Introducción antes de Q1 (net-new, cumple la promesa de "1 minuto y medio"):
> Perfecto. Te voy a hacer unas preguntas rápidas para armar tu Experiencia Ideal. Toma alrededor de un minuto y medio y te voy diciendo cuánto llevas. Empecemos.

Presentación: **una pregunta por mensaje**, con opciones como botones (≤3 opciones) o lista interactiva (4+ opciones), y avance en cada mensaje:
> ({avance}% completado) {texto de la pregunta}

Cuestionario **Q1–Q19** idéntico al canal web (15 base + 6 condicionales; total real 15–21). Copy de preguntas y opciones **verbatim** del UX Spec web §5.16. Resumen operativo:

| Q | Pregunta | Tipo | Notas de canal WhatsApp |
|---|---|---|---|
| Q1 | ¿Cómo te llamas? | Texto | Pre-llenado del anuncio; se confirma, no se re-pregunta salvo corrección. |
| Q2 | Género (Hombre · Mujer · Prefiero no mencionarlo) | Botón | Fija concordancia de género de todo el copy posterior. |
| Q3 | ¿Qué quieres sentir al salir del club? | Lista | 5 opciones; forma femenina si Q2 = Mujer. |
| Q4 | ¿Qué buscas? | Lista **multi-select, máx 2, requerido** | En WhatsApp: lista con confirmación "elige hasta 2". Define los bloques de entrenamiento. |
| Q5 | ¿Qué ritmo va contigo? | Botón | Suave/Moderado/Intenso. |
| Q6 | ¿Dónde prefieres entrenar? | Lista | Piso · alberca · ambas · lo que recomiende el entrenador. |
| Q7 | ¿En qué horario prefieres entrenar? | Lista multi-select | 6 franjas. |
| Q8 | ¿Qué días prefieres entrenar? | Lista multi-select | L–D. |
| Q9 | ¿Cuál es tu nivel de entrenamiento? | Botón | Principiante/Intermedio/Avanzado. |
| Q10 | ¿Vienes de otro gimnasio? | Lista | Otro gym · nunca · regreso tras pausa. |
| Q11 | ¿Qué tan larga fue la pausa? | Botón | **Condicional**: solo si Q10 = pausa. |
| Q12 | ¿Tienes alguna condición médica? | Lista multi-select | Requiere **consentimiento de datos de salud antes de mostrarla** (§12). |
| Q12b | ¿Estás embarazada o en posparto reciente? | Botón | **Condicional**: visible salvo Q2 = Hombre. Fraseo neutro si Q2 = Prefiero no mencionarlo. |
| Q13 | ¿Prefieres entrenar solo o acompañado? | Botón | Solo → Bloque 3 (clases) se apaga. |
| Q14 | ¿Con quién nos visitas en el club? | Lista | Detona lógica FitKidz. |
| Q14b | ¿Uno o más de tus hijos tiene menos de 12 años? | Botón | **Condicional**: si Q14 incluye hijos/familia. |
| Q15 | ¿Buscas el gimnasio cerca de tu casa o de tu trabajo? | Botón | **Se omite si el club ya está fijo** (rama confirma). |
| Q16 | ¿Dónde queda? (CP o colonia) | Texto | **Se omite si el club ya está fijo**. Ya capturado en `geo_capture` en la rama asesoría. |
| Q17 | ¿Tratamiento para bajar de peso? | Lista multi-select | **Condicional weight-loss**: solo si Q4 incluye Bajar de peso; obligatoria en ese path. |
| Q18 | Datos físicos (peso, estatura, cintura) | Numérico ×3 | **Condicional weight-loss**. Consentimiento LFPDPPP. |
| Q19 | ¿Cuál es tu objetivo de cambio? | Lista | **Condicional weight-loss**. Sin promesas clínicas. |

Antes de renderizar el resultado en el path de peso se muestra el **aviso YMYL** (disclaimer médico con firma del revisor) como mensaje bloqueante que el usuario debe reconocer.

Manejo de respuestas en texto libre: si el usuario escribe en vez de tocar el botón, ElevenLabs mapea a la opción canónica más cercana y confirma ("Entiendo que prefieres {opción}, ¿correcto?"); si no hay match seguro, reenvía las opciones. Nunca se inventan opciones fuera del catálogo de la pregunta.

### 5.4 Cálculo del porcentaje de avance (net-new, requerido por el flujo)

El total es variable, así que el denominador se recalcula en cada turno conforme se desbloquean condicionales:

```
proyectado = 15                     # base
proyectado -= 2  si el club ya está fijo (rama confirma → se omiten Q15, Q16)
proyectado += 1  si Q10 = pausa                     (desbloquea Q11)
proyectado += 1  si Q2 ≠ Hombre                     (desbloquea Q12b)
proyectado += 1  si Q14 ∈ {hijos, familia}          (desbloquea Q14b)
proyectado += 3  si Q4 incluye Bajar de peso        (desbloquea Q17–Q19)

avance% = round( contestadas / proyectado * 100 )
```

Rango del denominador: 13 (club fijo, sin condicionales) a 21 (asesoría + weight-loss + todas las ramas). El porcentaje se muestra en cada mensaje de pregunta como en §5.3. Nunca baja: si un condicional sube el denominador, el porcentaje se recalcula de forma monótona no decreciente (se toma el máximo entre el valor previo mostrado y el nuevo).

### 5.5 `loading`

> Estoy armando tu Experiencia Ideal con lo que me compartiste. Dame unos segundos.

Si excede ~15 s: reintento silencioso; si vuelve a fallar, mensaje de error (§13) con opción de reintentar.

### 5.6 `result` — revelado (verbatim reusable del canal web)

Estructura en mensajes cortos (WhatsApp no admite bullets/encabezados de marketing; se usa prosa breve):

1. Hook (clave `hook`, ≤30 palabras, conecta con Q3).
2. Tu Club Ideal: nombre del club + "a N minutos de tu {colonia/CP}" + dirección. **Todo verificable en backend; nunca inventado.** En la rama confirma, el Club Ideal es el club confirmado por el usuario.
3. Tu Experiencia Ideal: los bloques activos (Bloque 1 por grupos musculares · Bloque 2 caminadora o bicicleta · Bloque 3 clases por nombre), con el `plan_argument` (≤45 palabras) y, si aplica, la `intent_line` y los conectores de clase. Si Q13 = Solo, el Bloque 3 se renombra "Tu rutina individual" y se apaga la venta de paquete de clases.

Copy de seguridad cuando hay condición/tratamiento (verbatim, según `anexo-clinico`/`anexo-contenido-prompts`), p. ej. GLP-1:
> Durante tu tratamiento con GLP-1, priorizamos clases de fuerza para preservar tu masa muscular mientras bajas grasa. Tu Asesor confirma el detalle clínico en la visita guiada.

Disclaimer fijo cuando aplica:
> Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica.

### 5.7 `email_capture` (verbatim reusable)

> {nombre}, necesito un dato más para enviarte tu Experiencia Ideal y confirmar tu visita: ¿cuál es tu correo electrónico?

Error de validación:
> Ingresa un correo electrónico válido.

Privacidad:
> Tu correo se usa únicamente para enviarte tu Experiencia Ideal y coordinar tu visita. No lo compartimos con terceros.

(El apellido y el celular del canal web aquí no se piden por separado: el celular ya es el número de WhatsApp; el nombre viene de Q1.)

### 5.8 `schedule`

> ¿Qué día y a qué hora te gustaría tu visita guiada en Sports World {club}?

El backend consulta disponibilidad real en la API del cliente y ofrece las franjas cercanas si la propuesta no está libre. Opt-in de recordatorios (obligatorio para poder mandarlos):
> ¿Te mando un recordatorio por WhatsApp un día antes y otra vez dos horas antes de tu visita? Responde sí o no.

Sin opt-in, el recordatorio se hace por correo (fallback), no por WhatsApp.

### 5.9 `confirm`

> Listo, {nombre}. Tu visita quedó agendada para el {día} a las {hora} en Sports World {club}, {dirección}. En unos minutos recibes tu Experiencia Ideal en {correo}. Te esperamos.

## 6. Resolución del Club Ideal

Regla idéntica al canal web (Regla 42):
- Rama asesoría: `nombre del club resuelto a partir del catálogo usando la ubicación de Q16 frente al GPS del club — gana el más cercano, salvo que Q15 = "No me importa", en cuyo caso aplica la ciudad o el fallback más cercano`. Distancia por Google Maps Distance Matrix API (o equivalente), mostrada como "a N minutos de tu colonia/CP".
- Rama confirma: el Club Ideal es el club que el usuario confirmó; no se resuelve por geo.
- Degradación elegante: si un campo no se puede verificar en backend, se omite; nunca se fabrica.
- Sin club en la ciudad: mensaje "No tenemos club en {ciudad}" + captura del club más cercano o de otra ubicación.

## 7. Generación de la Experiencia Ideal y del brief del asesor

Una sola llamada LLM devuelve el JSON del Apéndice H con copy del cliente **y** los campos del brief del asesor. No se cambia el schema, los límites de palabras, las reglas YMYL ni el lint. Campos del cliente: `hook`, `plan_argument`, `intent_line`, `infrastructure_argument`, `class_1_connector`, `class_2_connector`. Campos del brief: `validation_questions[5]`, `visit_route[4]`, `proposal{main,complement}`, `closing_priorities[3]`, `closing_script`. Flags de backend (`hasMedical`, `isPregnant`, `onGLP1`, `isFamily`, `isSolo`, etc.) alimentan las banderas del brief.

Post-proceso obligatorio antes de cualquier render o escritura a CRM: `sanitize()` recursivo que elimina códigos Qn + **lint bloqueante** (fuga de Qn, palabra "plan" visible, vocabulario prohibido, exceso médico, longitud, forma JSON, hechos no soportados). Si un campo falla, se sustituye por su fallback aprobado y se registra el motivo para QA/observabilidad.

Brief del asesor: misma arquitectura de 10 secciones del Apéndice G (banner de cliente, encabezado, perfil, logística, qué validar, ruta recomendada, propuesta, prioridades de cierre, notas y banderas, guion de cierre). El asesor **convierte sin volver a preguntar nada de lo que el lead ya respondió**.

## 8. Lead scoring y enrutamiento

Se aplican los defaults de lanzamiento de `anexo-ingenieria-crm.md` (R14). **Override determinista:** todo lead que completó contacto y agendó visita se enruta siempre como caliente (asesor + agente al instante), sin importar el puntaje. El score nunca reduce la atención de leads con banderas clínicas, embarazo/posparto, bariátrica, GLP-1 o lesión. El CRM guarda, como campos separados: puntaje total, señales que sumaron, club resuelto, origen de entrada (incluye `ctwa_clid`/UTM), flags críticos del brief y si agendó.

## 9. Agendado

- Confirmación en tiempo real contra la API de reservas del cliente; el objetivo de respuesta es < 1 min.
- Modo degradado si la API no responde: se captura el lead para callback manual dentro de un día hábil en vez de ofrecer una franja en tiempo real, y se avisa al usuario que el asesor confirmará el horario.
- Datos mínimos para agendar: correo válido (§5.7) + Experiencia Ideal ya generada. El celular es el número de WhatsApp.

## 10. Correos (net-new respecto al canal web)

El diseño web ruta el brief vía CRM/consola del asesor, no por correo. Este canal **añade** dos envíos de correo, según lo pedido en el flujo, sin sustituir la escritura al CRM:

| Correo | Destinatario | Disparo | Contenido |
|---|---|---|---|
| Experiencia Ideal | Lead (correo de §5.7) | En `post_actions`, tras confirmar la cita | Resumen de la Experiencia Ideal (Club Ideal, bloques, horarios sugeridos, dirección, día/hora de la cita). Mismo copy generado (post-lint), formateado para correo. Sin la palabra "plan". |
| Brief de visita guiada | Club donde se agendó (buzón del club/asesor) | En `post_actions`, en paralelo | Brief del asesor de 10 secciones (Apéndice G). Marcado "USO INTERNO · confidencial · datos declarados por el lead; validar antes de recomendar". |

Además, **siempre** se escribe el lead al CRM del cliente mediante el middleware idempotente (reintentos, cola, monitoreo; un duplicado jamás crea dos registros). El correo al club es una notificación operativa, no la fuente de verdad: la fuente de verdad del lead es el CRM.

Resolución del buzón del club: el catálogo de clubes debe incluir el correo de destino por club (dependencia del cliente; ver §15). Si falta, el brief cae al buzón central de asesores con el club indicado en el asunto.

## 11. Recordatorios de WhatsApp (plantillas)

**Constraint de plataforma (Meta):** fuera de la ventana de 24 h desde el último mensaje del usuario solo se pueden enviar **plantillas pre-aprobadas**. Los recordatorios caen fuera de esa ventana casi siempre, así que **obligan a message templates categoría Utility**, no texto libre del agente.

- **T-24h:** plantilla Utility programada para 24 horas antes de la cita.
- **T-2h:** plantilla Utility programada para 2 horas antes de la cita.
- Ambas son informativas y no requieren respuesta. Si el usuario responde, se reabre la ventana de 24 h y el agente puede volver a texto libre (p. ej. reagendar → vuelve a `schedule`).
- Requieren **opt-in explícito** (§5.8). Sin opt-in: el recordatorio va por correo, no por WhatsApp.

Copy propuesto para aprobación de Meta (Utility, es-MX, sin exclamaciones ni emojis; variables entre llaves):

**Recordatorio 24 h** (`recordatorio_visita_24h`):
> Hola {{1}}. Te recordamos tu visita guiada en Sports World {{2}} mañana {{3}} a las {{4}}. La dirección es {{5}}. Si necesitas reagendar, responde a este mensaje.

**Recordatorio 2 h** (`recordatorio_visita_2h`):
> Hola {{1}}. Tu visita guiada en Sports World {{2}} es hoy a las {{3}}. Te esperamos en {{4}}.

Mapeo de variables: {{1}} nombre · {{2}} club · {{3}} día/hora · {{4}} hora/dirección · {{5}} dirección. Las plantillas se registran y aprueban antes de go-live (dependencia del cliente/BSP).

## 12. Consentimiento y compliance (LFPDPPP)

- Consentimiento de contacto por WhatsApp: implícito al iniciar el usuario la conversación desde el anuncio; se confirma el opt-in de recordatorios por separado (§5.8).
- **Datos de salud (Q12, Q12b, Q17, Q18): consentimiento explícito obligatorio antes de mostrar esas preguntas.** El agente pide reconocimiento explícito ("¿Aceptas compartir esta información de salud, que se usa solo para cuidar tu seguridad en la recomendación y prepararla con tu asesor? Responde sí para continuar") antes de Q12.
- Los datos sensibles se usan únicamente para excluir clases contraindicadas y preparar el brief; nunca para diagnosticar. Derecho a eliminación a solicitud.
- No se comparten datos con terceros fuera del propósito declarado. El brief al club es uso interno del cliente.

## 13. Casos borde y errores

| Caso | Manejo |
|---|---|
| Texto pre-rellenado sin club | Opener sin "entendemos que tu club es X"; ofrece confirmar club o asesoría. |
| Club del anuncio no existe en catálogo | Se trata como asesoría: se pide ciudad + CP/colonia y se resuelve el más cercano. |
| Usuario responde con texto libre a una pregunta de opciones | ElevenLabs mapea a la opción canónica y confirma; si no hay match, reenvía opciones. |
| SEPOMEX no responde en Q16 | Fallback a texto libre, normalización del lado del servidor. |
| API de reservas caída | Modo degradado: captura para callback en un día hábil. |
| LLM falla o excede timeout | Reintento; si persiste, fallbacks deterministas del Apéndice G y aviso de reintento. |
| Abandono a mitad del flujo | Estado persistido por número; se reanuda en la última pregunta. |
| Usuario pide hablar con humano | Escalamiento a asesor humano en cualquier estado. |
| Sin opt-in de recordatorios | Recordatorio por correo. |
| Ventana de 24 h cerrada y hay que contactar | Solo plantillas aprobadas; nada de texto libre. |

## 14. Modelo de datos (estado de sesión por número de WhatsApp)

- `origen`: `{ ctwa_clid, utm_*, texto_prellenado }`
- `contacto`: `{ nombre (Q1), telefono (WA), correo }`
- `club`: `{ modo: confirma|asesoria, club_id, resuelto_por: usuario|geo, distancia_min }`
- `respuestas`: `{ Q1..Q19 }` con flags derivados (`hasMedical, isPregnant, isPostpartum, onGLP1, onBariatric, isFamily, hasKids, isSolo, isPrincipiante, fromOtherGym, fromPause, wantsAquatic, wantsDry`)
- `bloques`: `{ block_1_on, block_2_on, block_3_on }` + `top_2, tambien_encajan, resto`
- `experiencia`: JSON Apéndice H post-lint (copy cliente + brief)
- `cita`: `{ dia, hora, club_id, estado }`
- `consentimientos`: `{ contacto_wa, recordatorios_wa, datos_salud }`
- `avance`: `{ contestadas, proyectado, porcentaje }`
- `scoring`: `{ puntaje, señales[], enrutamiento }`

## 15. Integraciones y dependencias

**Reutilizado de Proyecto A (no se reconstruye):** servicio Experiencia Ideal (cuestionario, resolutor de club, llamada LLM, lint, fallbacks), catálogo/KB de 49 clubes, middleware idempotente al CRM, API de reservas del cliente, integración WhatsApp Business API, Distance Matrix, SEPOMEX.

**Net-new de este canal:** opener confirmar-club/asesoría; presentación del cuestionario como mensajes interactivos de WhatsApp; cálculo de % de avance; agente ElevenLabs Chat Mode conectado a WhatsApp; correo de Experiencia Ideal al lead; correo del brief al club; plantillas de recordatorio 24 h/2 h y su programador.

**Dependencias del cliente (bloqueantes para go-live):**
- Correo de destino por club para el brief (o buzón central de asesores).
- Alta y aprobación de las plantillas Utility de recordatorio ante Meta/BSP.
- Acceso a la API de reservas para agendado en tiempo real.
- Firma médica del disclaimer YMYL (misma dependencia que el canal web) antes de habilitar el path de peso.
- Confirmación en ElevenLabs del envío de plantillas WhatsApp salientes programadas; si no, emitir recordatorios por el BSP/Cloud API.

## 16. Criterios de aceptación

- No se puede llegar a `schedule` sin correo válido y Experiencia Ideal generada.
- El cuestionario presentado es Q1–Q19 con la misma adaptividad, taxonomía y orden que el canal web; ningún código Qn ni jerga técnica llega al usuario.
- El porcentaje de avance se muestra en cada pregunta, con denominador dinámico correcto (13–21) y monótono no decreciente.
- El Club Ideal mostrado es verificable en backend; en la rama confirma es el club confirmado por el usuario.
- Al confirmar la cita: se envía la Experiencia Ideal por correo al lead, se envía el brief por correo al club, se escribe el lead al CRM (idempotente) y se programan los dos recordatorios (o su fallback por correo).
- Los recordatorios usan plantillas Utility aprobadas; nunca texto libre fuera de la ventana de 24 h.
- Todo el copy cumple la Regla 9 (sin exclamaciones, sin emojis, sin "plan" visible, concordancia de género) y pasa el lint antes de renderizar o escribir al CRM.

## 17. Relación con el paquete y con la cotización

Este documento es hermano de `ux-spec-experiencia-ideal.md` y opera bajo su jerarquía normativa. Implementa el canal "WhatsApp conversacional" de la homogenización cross-channel del cuestionario. Amplía el uso de WhatsApp más allá de los recordatorios 24 h/2 h que define el alcance BES del canal web; cualquier decisión comercial sobre ese alcance ampliado se gestiona fuera de este documento, que asume la construcción del canal como decisión ya tomada.

## 18. Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| v1.0 | 2026-07-17 | Especificación inicial del agente de WhatsApp de texto: arquitectura ElevenLabs Chat Mode + servicio Experiencia Ideal reutilizado; máquina de estados de 11 fases; cuestionario Q1–Q19 por texto con % de avance dinámico; correos al lead y al club; recordatorios por plantilla 24 h/2 h. Homogenizado con el canal web (Q1–Q19, Apéndice G/H, Regla 9). |
