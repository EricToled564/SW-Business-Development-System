# Respuesta Notebook · P2 · Canales, enrutamiento, handoff e identidad de BES

**Cuaderno:** 1 · Originales. **Fuentes cargadas:** 41. **Fecha:** 2 de septiembre de 2026.
**Cubre:** A-010, A-011, A-012, A-014, A-015, A-016, A-017, A-018, A-019, A-028, A-054,
A-069, A-080.

«Tras revisar las 41 fuentes una por una, he identificado exactamente 26 documentos.»

## La contradicción central, con las dos caras

**Lado «human-first»:**

- `bds-canales`: `"1. Human-first. Todo lead conversacional se ofrece primero a un operador humano disponible y en horario."`; `"3. Respaldo automático con \"BES\". Si no hay operador disponible o es fuera de horario, \"BES\" (WhatsApp, solo texto) toma la conversación de inmediato, sin espera."`; `"WhatsApp | Operador humano (primero) o \"BES\" (respaldo) | Texto, tiempo real"`
- `bds-flujo`: `"El árbol de enrutamiento (human-first con respaldo de \"BES\"). Cuando entra un lead que requiere atención conversacional (orígenes 1, 2 y 4), el sistema evalúa, en este orden: 1. ¿Hay un operador humano disponible y en horario de atención? Sí → se asigna a un operador humano por WhatsApp… No → siguiente paso."`; `"Regla de oro: ningún lead se queda sin atención inmediata. Si no hay humano, hay \"BES\"; si \"BES\" no basta, escala a humano."`
- `bds-tecnica`: `"Actúa como respaldo del operador humano: atiende de inmediato cuando no hay operador disponible o es fuera de horario."`; `"Capa de enrutamiento en tiempo real… (human-first → \"BES\" de respaldo → escalación)."`
- `bds-anexo`: `"\"BES\" sobre WhatsApp (solo texto) como respaldo automático 24/7, con escalación a operador humano."`; `"Capa de enrutamiento en tiempo real (human-first → \"BES\" de respaldo → escalación; colas, asignación, rebote)."`
- `bds-resumen`: `"El lead se enruta primero a un operador humano por WhatsApp (atención en tiempo real)."`
- `glosario`: `"human-first | Regla de enrutamiento del BDS: al lead lo atiende primero un operador humano; \"BES\" entra como respaldo automático cuando no hay operador disponible, con escalación de vuelta al humano."`
- `resumen`: `"leads de campañas atendidos por operadores humanos en tiempo real, con BES por WhatsApp (solo texto) de respaldo 24/7"`
- `bds-medicion`: `"Por horario: dentro de horario (human-first) vs. fuera de horario (\"BES\")."`
- `entrevistas-campo`: `"Speed-to-lead en tiempo real (Proyecto B): human-first con BES de respaldo 24/7, medido por canal y operador."`
- `sitio-presentacion-deck`: `"WhatsApp: leads de campañas atendidos por operadores humanos en tiempo real, con BES de respaldo 24/7…"`
- `gastos-operativos`: `"— atendidos por \"BES\" texto como respaldo (~60%)"`

**Lado «BES atiende siempre»:**

- `proceso-sop-0101`: `"El asistente conversacional atiende la totalidad de las conversaciones entrantes. No hay cola de espera, no hay reparto entre operadores y no hay diferencia entre horario y fuera de horario. La intervención de una persona es una escalación, no el punto de partida."`; `"La escalación procede solo cuando concurren dos condiciones: la conversación ocurre en horario de oficina, y surge una pregunta que el asistente no puede responder o el prospecto pide expresamente hablar con una persona. Fuera de horario el pendiente se registra para el siguiente turno y no detiene el agendado."`
- `proceso-mpc-01`, principio P-07: `"Ningún prospecto conversacional queda sin atención inmediata. El tiempo al primer contacto es la variable que más rápido destruye una oportunidad digital. La atención inmediata es responsabilidad del sistema, no de la disponibilidad de una persona."`; y en la tabla de actores: `"Asistente conversacional | Atiende toda conversación entrante en los canales digitales, aplica el cuestionario, entrega la recomendación y agenda la visita | 1 | Ejecuta"` frente a `"Operador de atención digital | Atiende las escalaciones dentro de su horario y retoma los pendientes registrados fuera de él | 1 | Ejecuta por escalación"`

## Escalamiento y handoff

- `proceso-sop-0101`, pasos 14 a 18: `"Paso 14: ¿Surge una pregunta que el asistente no puede responder, o el prospecto pide expresamente hablar con una persona? Sí, y la conversación ocurre en horario de oficina — continúa en el paso 15. Sí, y ocurre fuera de horario — continúa en el paso 17. No — continúa en el paso 19."`; `"Paso 15: Escala la conversación a un operador de atención digital y le transfiere el contexto ya capturado, incluida la ficha de campaña cuando exista."`; `"Paso 16: Resuelve la pregunta y retoma la conversación en el punto exacto en que quedó, sin repetir nada de lo que el prospecto ya respondió."`; `"Paso 17: Registra el punto no resuelto como pendiente del siguiente turno, con el contexto levantado, y continúa el procedimiento."`; `"Paso 18: Retoma el pendiente al inicio del turno siguiente y contacta al prospecto por el mismo canal, con plantilla autorizada si la ventana de servicio ya venció."`
- `bds-canales`: `"2. Asignación. El lead se asigna por cola (por club/zona y por disponibilidad)…"`; `"4. Escalación a humano. \"BES\" transfiere a un operador (o agenda devolución de llamada) cuando el usuario lo pide o el caso lo amerita, conservando el contexto ya capturado."`; `"5. Continuidad. Si un operador no responde dentro del umbral de asignación, el lead rebota a otro operador o a \"BES\", para que nunca quede sin atender."`; `"Fuera de horario: cobertura 24/7 por \"BES\"…"`; SLA: `"Primer contacto (operador humano, en horario) | En segundos desde que entra el lead"`, `"Primer contacto (\"BES\", fuera de horario o sin operador) | Inmediato"`, `"Rebote de asignación (operador no responde) | Reasignar en un umbral corto definido con Sports World"`, `"Escalación \"BES\" → humano | Transferencia con contexto, sin re-preguntar"`
- `contrato`: `"soporte con primer respondiente por agente de voz disponible 24/7 … y escalamiento a soporte humano en horario hábil"`; `"D.7 Estrategia de escalación a operador humano documentada (transferencia por SIP con número/cola de destino; WhatsApp con operador; o devolución de llamada agendada en el CRM), con responsables del lado humano."`
- `integracion`: `"'BES' atiende únicamente la entrada digital… BES no contesta el teléfono de los clubes ni se integra al conmutador para llamadas entrantes; la telefonía interviene en el proyecto únicamente en el sentido inverso — cuando BES escala un prospecto a un operador humano (transferencia por SIP a un número o cola, derivación a un operador de WhatsApp, o devolución de llamada agendada; Anexo Uno D.7)."`; `"Si un socio actual escribe por los canales de captación… BES responde con la base de conocimiento general y no agenda una visita…"`
- `minuta-2026-06-22`: `"Escalación a humano: transferencia automática a agentes humanos, integración vía WhatsApp y voz/SIP."`
- `seguimiento-2026-06-22`: `"Escalamiento a WhatsApp o voz/SIP contemplado; falta que SW entregue la información técnica SIP y defina canales y reglas."`

## Identidad de BES

- `glosario`: `"BES | Agente conversacional de inteligencia artificial del proyecto, por voz y texto. Opera en dos canales: web (voz y texto — Proyecto A) y WhatsApp (solo texto — parte del Business Development System, Proyecto B)… No opera por telefonía ni por voz en WhatsApp."`
- `bds-tecnica`: `"La conversación es solo texto (sin voz por WhatsApp)."`; `"Es el mismo \"BES\", con la misma base de conocimiento y la misma lógica de club/clase/lead que el \"BES\" web, operando por texto en WhatsApp."`
- `contrato`: `"Quedan excluidas de este Contrato la telefonía y la voz por WhatsApp."`; `"La operación conversacional de \"BES\" por WhatsApp (solo texto) forma parte del Business Development System (Proyecto B) y se contrata por Addendum por separado"`
- `gastos-operativos`: `"ElevenLabs — voz de BES web (solo el 30% de las interacciones)"`; `"Claude API — LLM conversacional de BES (todos los canales)"`
- `resumen`: `"BES… opera por voz y texto: en el sitio (Proyecto A) por el canal web (voz y texto) y… también por WhatsApp (solo texto)… transfiere a un agente humano cuando el usuario lo solicita"`

**Ningún documento describe cómo se presenta "BES" ni si declara ser un sistema automatizado.**

## Canales fuera de los cuatro principales

- `proceso-mpc-01`: `"SOP/SW/0104 Captación por referido | Por definir | Por confirmar"`; `"SOP/SW/0105 Captación por convenio corporativo | Por definir | Por confirmar"`; `"Los dos últimos están marcados por confirmar: falta resolver si el referido y el convenio corporativo constituyen procedimientos propios o si ingresan por consola con una marca de origen distinta."`
- `proceso-sop-0103`: `"Llamada saliente a un prospecto referido"`; `"En llamada saliente, la primera frase declara el origen del dato… Si la persona no autoriza, se registra la negativa y no se le vuelve a contactar por esa vía."`; `"Paso 5: Antes de marcar, verifica que la referencia esté registrada con el nombre de quien la proporcionó y con la constancia de que esa persona obtuvo autorización para compartir el dato… Si no existe constancia — no se realiza la llamada."`
- `proceso-mv-01`: `"Vía C | Referido, por teléfono | Alguien dio sus datos y tú marcas."`; `"Referido · lo llamas tú… Declara el origen en la primera frase… Cierra con la cita, no con la venta."`
- `contrato`: `"E.8 Acceso al Meta Business Manager de EL CLIENTE: las cuentas publicitarias (Meta Ads) y el activo de WhatsApp Business…"`; `"E.9 Acceso de lectura a TikTok Ads, en su caso…"`
- `funnel`: `"Cortes de reporte del Canal 1… 1a · Orgánico… 1b · Pago a sitio… 1c · Fichas de Google Business…"`

**Convenio corporativo no aparece en ningún procedimiento vigente.**

## Cambio de canal y persistencia

- `experience`: `"Todos los datos capturados durante la sesión viven únicamente en memoria; cerrar la pestaña los descarta."`; `"No se usan localStorage, sessionStorage, IndexedDB ni cookies del navegador."`; `"Cerrar la pestaña del navegador descarta todas las respuestas del cuestionario, todos los bloques calculados, el copy generado por el modelo de lenguaje, el brief del asesor y la selección de cita."`
- `proceso-sop-0102`: `"El prospecto puede pasar de una vía a la otra en cualquier momento, desde el reactivo en que va y sin reiniciar."`; `"Paso 11: … Si el prospecto decide continuar por su cuenta, lo devuelve al reactivo exacto en que va, sin reiniciar ni repetir."`; `"Nada se conserva en el navegador… El único dato que persiste es el registro escrito en el CRM."`

**El cambio entre autónomo y asistido está resuelto dentro del sitio. El cambio de un canal a otro —de web a WhatsApp, de WhatsApp a consola— no está descrito en ninguna fuente.**

## Puntos de entrada por canal

- `funnel`: `"Tres puertas de entrada reales: el sitio web, el WhatsApp oficial y la consola del asesor."`; `"Canal 1 · Sitio web… La persona se identifica: Al completar el cuestionario… Llave: web_session_id (anónimo) → session_uuid"`; `"Canal 2 · Anuncio → WhatsApp… La persona se identifica: Desde el primer mensaje… Llave: Teléfono en E.164 + referencia del anuncio"`; `"Canal 3 · Consola del asesor… Origen: Walk-in en club y llamada telefónica… Llave: Operador + club + session_uuid"`
- `bds-flujo`: cuatro puntos de entrada — campaña, WhatsApp entrante, walk-in, sitio público.
- `proceso-sop-0101`: `"Punto de entrada A · Campaña en redes sociales…"`; `"Punto de entrada B · Mensaje directo al número…"`; `"En WhatsApp la persona está identificada desde el primer mensaje…"`
- `proceso-sop-0102`: `"En el sitio, la persona permanece anónima durante la mayor parte del recorrido: se identifica hasta el paso 33…"`
- `proceso-sop-0103`: `"Paso 2: ¿Cómo se origina el contacto? Llamada entrante al club… Llamada saliente a un prospecto referido… Persona que llega al club…"`; `"Cuando hay asesor disponible, el procedimiento no agenda nada: genera el diagnóstico y entrega la persona directamente al procedimiento de la visita, en la misma sesión."`
- `proceso-sop-0201`: `"Paso 15: Visita inmediata. El asesor que capturó el cuestionario conduce la visita en la misma sesión…"`

**El BDS cuenta cuatro puntos de entrada y el funnel canónico tres puertas.**

---

*Cierre de la respuesta:* «¿Deseas que analicemos de forma minuciosa y literal los flujos
técnicos del protocolo SIP, webhooks firmados y la latencia conversacional del agente
"BES"?»
