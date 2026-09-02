# B3 · Antes de corregir · versión del cuestionario, brief del asesor y promesa de no compartir

**Cuaderno:** 1 · Originales. **Fuentes cargadas:** 42. **Fecha:** 2 de septiembre de 2026.
**Cubre:** A-020, A-026, A-033.

## Pregunta

> **[ROL DE AUDITORÍA Y BARRIDO LITERAL]** Actúas como un auditor de datos riguroso
> cuya prioridad absoluta es la exhaustividad literal. Prefiero una respuesta masiva
> y redundante a una sola omisión.
>
> **1. Barrido lineal.** Revisa las 42 fuentes de la 1 a la 42 y reporta toda mención a
> cualquiera de estos tres puntos: (a) el NÚMERO DE PREGUNTAS del cuestionario y su
> VERSIÓN o identificador (CEI-01 o equivalente); (b) el BRIEF DEL ASESOR: quién lo
> recibe, quién lo ve, y si en algún documento se muestra, entrega o envía AL
> PROSPECTO; (c) la frase «no los compartimos con terceros» o cualquier promesa
> equivalente sobre no compartir datos.
>
> **2. Cero exclusiones.** Cada documento con su propio apartado y su nombre de archivo
> exacto. Prohibido agrupar o priorizar por relevancia.
>
> **3. Transcripción.** Frase exacta entre comillas y contexto preciso. Para (a),
> indica el número exacto que da cada documento, aunque difieran entre sí: me interesa
> justamente dónde no coinciden.
>
> **4. Recuento con puerta de calidad.** Abre con: «Tras revisar las 42 fuentes una por
> una, he identificado exactamente [N] documentos.» Si el recuento no coincide con la
> lista, detente y vuelve a escanear.

## Respuesta íntegra

«Tras revisar las 42 fuentes una por una, he identificado exactamente 18 documentos.»

**1. academia-contenido.txt** — «La taxonomía maestra del cliente», Eje 1, Eje 2, Índice de componentes.
(a) No registra ningún código de versión tipo «CEI-01». Identifica preguntas: `"Eje 1 — Objetivo emocional: por qué el cliente está aquí (Q3, cinco opciones, una sola respuesta)"`; `"Eje 2 — Objetivo funcional: qué quiere lograr con su cuerpo (Q4, seis opciones, hasta dos respuestas)"`; `"el programa enseña a clasificar con la misma taxonomía Q3/Q4 del cuestionario"`.
(b) `"el asesor recibe el brief automático con perfil, objetivos y sugerencias de conducción de la venta."` No indica que se entregue al prospecto.

**2. academia-fases.txt** — «Los dos momentos para descubrir el objetivo del cliente», «Etapa 2 · Certificarse».
(a) `"1. Versión corta (primer contacto). Por llamada o WhatsApp; su propósito es lograr la cita. Entre tres y cinco preguntas filtro que ya permiten una primera lectura del objetivo del cliente."`; `"2. Versión completa (recorrido en el club). Durante la visita guiada se profundiza en la motivación real del cliente, con el conjunto completo de preguntas de la taxonomía maestra."`
(b) `"Al terminar la sesión (noticias después), el asesor recibe dos cosas: la corrección en el momento, y un reporte de la sesión con su puntaje y su avance acumulado."`; `"Cada sesión alimenta el puntaje de preparación (readiness) del asesor, visible también por club, ciudad y a nivel nacional"`; `"el líder regional recibe el tablero de preparación como guía de coaching —a quién priorizar, en qué componente—;"`. No se envía al prospecto.

**3. academia-resumen.txt** — «Por qué existe este proyecto», «Qué esperamos obtener», «Fase 2».
(b) `"entrena a los 200 asesores en el mismo concepto que el sistema produce, para que el brief que reciben se convierta en venta."`; `"el brief automático le entrega el perfil, los objetivos y cómo conducir la venta."`; `"un reporte de la sesión con su puntaje de preparación (readiness) por sesión."`; `"el líder regional recibe el tablero de preparación como guía de coaching..."`.

**4. academia-tecnica.txt** — §3 «Agente de voz de role-play (Fase 2)».
(b) `"un reporte de la sesión — un documento de desempeño, por sesión y acumulado, que consolida el puntaje de readiness, la evolución respecto a sesiones anteriores y las áreas de oportunidad vigentes; alimenta el dashboard de readiness, cuya vista por asesor sirve al líder regional como guía de coaching."` No hay mención de envío al prospecto real.

**5. bds-flujo.txt** — pasos 4 y 7 de «El recorrido end-to-end».
(b) `"Se genera la recomendación (club, clases, plan) con los datos reales del CRM (vía el middleware) y el brief del asesor —documento personalizado del comprador potencial, con sugerencias de venta— por la misma fase briefing ya documentada en Arquitectura de Experiencia · §1.2."`; `"7. Confirmación y recordatorios. El prospecto recibe la confirmación; se disparan los 2 recordatorios por WhatsApp (24 h y 2 h antes); el asesor asignado recibe el brief del comprador potencial antes de la visita."`

**6. bds-resumen.txt** — «La solución: atender en tiempo real».
(b) `"entregar al asesor un documento personalizado del comprador potencial —su perfil, sus intereses y objetivos, con sugerencias concretas de cómo conducir la venta en la visita—. Es el mismo brief del asesor ya definido en Arquitectura de Experiencia · §1.2, fase briefing: el BDS lo entrega sin importar si el cuestionario lo aplicó un operador humano, "BES" por WhatsApp o el asesor mismo en la consola."` No indica entrega al prospecto.

**7. bds-tecnica.txt** — «Principio de reutilización», §3 «Consola de operadores y asesores».
(b) `"Brief del asesor (documento personalizado del comprador potencial con sugerencias de venta) — misma fase briefing, Arquitectura de Experiencia · §1.2."`; `"Consola de operadores y asesores ... habilitada para el rol de operador: bandeja de conversaciones de WhatsApp asignadas, aplicación del cuestionario asistida, generación de la experiencia ideal y carga del lead al CRM."`

**8. contrato.txt** — Cláusula Primera, Décima Octava, Sección II de entregables de «BES».
(b) `"resumen del prospecto enviado por correo al club con información personalizada para el asesor."`; `"los datos de los asesores comerciales tratados en la Academia (Proyecto C)"`.

**9. cuestionario-inteligente.txt** — declaración de preguntas en `getQuestions` y lógica de contacto.
(a) 21 preguntas posibles (15 base y 6 condicionales). Sin identificador «CEI-01». Claves: `Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q12b, Q13, Q14, Q14b, Q15, Q16, Q17, Q18, Q19`.
(b) `"Tu Advisor confirma el detalle en la visita guiada."`; `"Con ellos armamos tu experiencia ideal y tu Advisor te contacta para coordinar tu visita y enviarte los detalles del club."`

**10. entrevistas-campo.txt** — §1 y §3.
(b) `"El cuestionario cualifica al origen en todo canal y el asesor recibe el brief automático con perfil, objetivos y sugerencias de conducción de la venta."`

**11. execution.txt** — §1 «Qué se está construyendo, en paralelo».
(b) `"BES, el agente de voz y texto con IA — ... siempre entrega al asesor del club un brief del prospecto por correo antes de la cita."`

**12. experience.txt** — §0.1, §0.2.1, §0.2.2, §1.2, §1.3, §2.2, §4.11, §4.13, §4.14.
(a) `"Preguntas base (15) — siempre se preguntan, en el mismo orden, a todo prospecto sin importar las respuestas previas"`; `"Preguntas condicionales (6) — se preguntan solo si una respuesta específica aguas arriba las dispara"`; total 21 posibles; `"el cuestionario (15–21 preguntas)"`. Sin versión codificada. `"cualquier código tipo Q1, Q2, Q3, Q4, etc. — son nombres internos del cuestionario, jamás aparecen en el copy final"`.
(b) **Es el documento donde se especifica que el prospecto SÍ visualiza el brief del asesor.** `"La experiencia ideal es el producto del sistema de ventas... tiene dos destinatarios: el cliente la recibe como su experiencia, y el asesor la recibe traducida a argumentos de cierre en el brief."`; `"El brief del asesor no puede alcanzarse sin antes pasar por la compuerta de captura de contacto y el agendador de citas."`; `"7. briefing — Fase terminal. Muestra dos páginas separadas visualmente: la página 1 es la confirmación de la cita (pensada para que el prospecto tome una captura de pantalla y la recuerde), la página 2 es el brief del asesor (pensado para que el asesor de ventas de Sports World lo lea antes de la visita)."`; `"División de página del brief del asesor: Página 1: banner de confirmación para el prospecto, encabezado del brief (nombre completo + nivel + chips + fecha), §1 Perfil del lead (8 campos), §2 Logística y contacto... Página 2: §3 Qué validar (5 preguntas del modelo de lenguaje), §4 Ruta recomendada (4 pasos), §5 Propuesta recomendada, §6 Prioridades de cierre, §7 Notas y banderas, Guion de cierre, Registro del asesor (4 cajas vacías), Footer USO INTERNO."`; `"La pantalla de briefing lee validation_questions, visit_route, proposal, closing_priorities, closing_script."`
(c) `"Aviso de privacidad en la pantalla: \"Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros.\""`

**13. resumen.txt** — «El sistema completo», «Tres capas, un solo concepto», «La validación de campo», «BES · el asistente digital».
(b) `"el brief que la traduce en argumentos de cierre. ... el cliente recibe su experiencia; el asesor recibe el brief"`; `"el cliente lo recibe como su experiencia ideal, el asesor lo recibe traducido a argumentos de cierre en el brief"`; `"...y el brief automático le entrega el perfil, los objetivos y cómo conducir la venta."`; `"y siempre entrega al asesor del club un brief del prospecto por correo antes de la cita."`; `"el mismo motor que arma la experiencia ideal genera también el brief del asesor..."`

**14. gastos-operativos.txt** — «Qué cubre este documento», §1 «Claude API».
(b) `"la generación de la experiencia ideal y del brief del asesor con la API de Claude"`; `"Cada cuestionario completado dispara dos generaciones: la experiencia ideal para el prospecto y el brief para el asesor."`

**15. seguridad.txt** — §3 «El agente BES y las conversaciones», §5 «La base de datos del funnel».
(b) `"Al cerrar la interacción, el lead se entrega al CRM y se envía el resumen del prospecto por correo al club correspondiente; el sitio no almacena la conversación con datos personales una vez completado ese flujo."`; `"La base de datos del funnel ... No almacena conversaciones, respuestas médicas ni contenido del cuestionario."`

**16. workshop-discovery.txt** — §3 «Qué significa para el sistema».
(b) `"El prospecto llega al club ya cualificado, con visita agendada y con el brief del asesor que arma los argumentos de valor a partir de los objetivos que el propio prospecto declaró."`

**17. indice.txt** — «El sistema · marco», «Proyecto A», «Localizador rápido».
(b) `"el cliente lo recibe como experiencia, el asesor como brief, la Academia lo entrena como método."`; `"Brief del asesor (documento personalizado del comprador potencial, con sugerencias de venta)"`

**18. glosario.txt** — tabla de términos.
(b) `"brief del asesor | Documento que BES entrega al asesor del club por correo antes de la cita, con el contexto del prospecto: objetivos, respuestas del cuestionario y sugerencias. También referido como dossier o resumen del prospecto."`; `"experiencia ideal | El producto del sistema ... el cliente la recibe como su experiencia; el asesor la recibe como brief de cierre."`; `"las tres capas | ... el cliente lo recibe como experiencia, el asesor como brief, la Academia lo entrena como método."`

## Resumen que dio NotebookLM

**(a) Número de preguntas y versión.** No existe ningún identificador estructurado tipo «CEI-01» en ninguno de los 18 documentos. `experience.txt` declara 15 base + 6 condicionales = 21 posibles, con rango operativo «15–21». `cuestionario-inteligente.txt` confirma 21 claves declaradas (`Q1`–`Q19` más `Q12b` y `Q14b`). `academia-fases.txt` introduce una «versión corta» de primer contacto de «tres a cinco preguntas filtro».

**(b) Visualización del brief por el prospecto.** «Contrario a la idea convencional de un documento "USO INTERNO" que nunca ve el cliente, el documento de diseño de interacción `experience.txt` confirma que el brief del asesor (Página 2 de la fase terminal `briefing`) SÍ se le muestra visualmente en pantalla al prospecto al final de su sesión.»

---

*Cierre de la respuesta:* «¿Deseas que analicemos la lógica condicional que asocia los datos médicos y físicos del cuestionario con las alertas automáticas que se despliegan en el brief del asesor?»
