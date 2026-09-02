# B3 · Antes de corregir · datos de salud y consentimiento

**Cuaderno:** 1 · Originales (Sports World Business Dev. Documentation Review Engine).
**Fuentes cargadas:** 42.
**Fecha:** 2 de septiembre de 2026.
**Cubre:** A-020, A-021, A-022, A-023, A-026, A-073, A-074.

## Pregunta

> **[ROL DE AUDITORÍA Y BARRIDO LITERAL]** Actúas como un auditor de datos
> riguroso cuya prioridad absoluta es la exhaustividad literal, no la síntesis, ni
> la brevedad, ni la elegancia conversacional. Prefiero una respuesta masiva, larga
> y redundante a una sola omisión.
>
> **1. Barrido lineal.** Revisa secuencialmente las 42 fuentes cargadas, de la 1 a
> la 42. Si aparece cualquier mención a DATOS DE SALUD DEL PROSPECTO —condiciones
> médicas, lesiones, embarazo, postparto, medicación, limitaciones físicas,
> objetivos clínicos— o al CONSENTIMIENTO que los habilita, esa fuente DEBE
> incluirse en el reporte final. No juzgues si la mención es «de paso»,
> «secundaria» o «redundante».
>
> **2. Cero exclusiones.** Está estrictamente prohibido resumir, agrupar documentos
> similares en un solo punto o priorizar por relevancia. Cada documento donde
> aparezca debe tener su propio apartado individual, con su nombre de archivo exacto.
>
> **3. Transcripción.** Para cada documento identificado: nombre exacto del archivo;
> la frase o párrafo exacto donde aparece, entre comillas; y el contexto preciso —si
> es una tabla, un anexo, un procedimiento o una minuta. Indica además, cuando el
> documento lo diga: en qué momento del flujo se pregunta el dato, dónde se almacena,
> quién lo ve, y si el consentimiento aparece antes o después de la recolección.
>
> **4. Recuento con puerta de calidad.** Antes de responder, cuenta cuántos
> documentos cumplen el criterio y abre la respuesta con: «Tras revisar las 42
> fuentes una por una, he identificado exactamente [N] documentos que contienen
> datos de salud o su consentimiento. Aquí está el desglose de los [N] documentos
> sin omitir ninguno.» Si el recuento no coincide con la lista, detente y vuelve a
> escanear.

## Respuesta íntegra

«Tras revisar las 42 fuentes una por una, he identificado exactamente 12 documentos que contienen datos de salud o su consentimiento. Aquí está el desglose de los 12 documentos sin omitir ninguno.»

**1. academia-contenido.txt** — Tabla del Eje 2, objetivo funcional (Q4), en «La taxonomía maestra del cliente», y «Cómo se conecta con lo que dijo el campo».
Frases textuales: `"Bajar de peso | Plan personalizado con resultados visibles; habilita manejo YMYL"`; `"Mejorar su salud cardiovascular | Alberca, entrenamiento supervisado, servicios anexos"`; `"Recuperarse de una lesión o dolor crónico | Alberca, entrenamiento supervisado, servicios anexos"`; `"Las 15 entrevistas describieron los motivadores del cliente en tres bloques de lenguaje coloquial ('estético-físico', 'salud', 'bienestar y contexto social'); los tres están cubiertos por esta misma taxonomía..."`.
Momento: se capturan al inicio, en Q4. Almacenamiento: la taxonomía la consumen «el cuestionario del sitio y el agente de voz BES». Quién lo ve: el asesor, para personalizar el argumento. **No se detalla consentimiento explícito en esta fuente.**

**2. auditoria.txt** — §1.1 «Tres prospectos reales», §2.2 y §3 «'Bajar de peso': la puerta de entrada».
Frases textuales: `"Vertical ignorada — 'gimnasio para perder peso': 932,300 búsquedas/mes..."`; `"\"Bajar de peso\" (universo separado) | 932,300 | 0.02% | Landing + blog + contenido de transformación"`; `"Perder peso es el objetivo #1 por el que las personas se unen a un gimnasio. Contexto México: 75.2% de los adultos tiene sobrepeso u obesidad (ENSANUT 2020–2023)."`
Corresponde a la fase de atracción. No detalla almacenamiento, accesos ni consentimiento.

**3. contrato.txt** — Cláusula Décima Octava y Anexo Dos (I.3 y II).
Frases textuales: `"Quedan comprendidos en esta Cláusula todos los datos personales de prospectos, clientes y personal de EL CLIENTE que EL PRESTADOR trate con motivo de los Servicios, de manera enunciativa: los datos capturados en el cuestionario de experiencia ideal; las conversaciones con 'BES'..."`; `"El sitio opera bajo un principio de minimización y no retención: los datos personales que el prospecto captura en el sitio (incluida la conversación con 'BES') residen únicamente de forma transitoria en el entorno del sitio... Una vez copiados al CRM, no se conserva respaldo (back-up)..."`; `"V. Derechos ARCO. EL PRESTADOR apoyará a EL CLIENTE, en su calidad de encargado..."`; `"hub 'Bajar de Peso' (estándar YMYL)... coordinación con el médico designado por EL CLIENTE para la firma del hub 'Bajar de Peso' (cédula vigente visible)"`; `"advertencias YMYL; registro de la visita guiada solicitada..."`
Momento: captura transitoria en sitio o chat. Almacenamiento: transitorio; tras copiarse al CRM se elimina. Quién lo ve: EL PRESTADOR como encargado, Sports World como responsable. Consentimiento: LFPDPPP, avisos aprobados por Sports World, derechos ARCO ante Sports World.

**4. cuestionario-inteligente.txt** — Constante `CONTRAINDICATIONS`, función `activeContraindicationKeys`, declaración de campos en `getQuestions`, y el bloque de seguridad.
Frases textuales: la matriz completa `const CONTRAINDICATIONS = { "CORE": {embarazo:1, posparto:1, bariatrica:1}, ... "FLYBOARD": {embarazo:1, posparto:1}, };`; `function activeContraindicationKeys(answers) { ... if (q12.includes("Lesión o dolor articular/muscular")) keys.add("lesion"); if (q12.includes("Condición cardiovascular o de presión")) keys.add("cardiovascular"); if (answers.Q12b === "Sí, embarazada") keys.add("embarazo"); if (answers.Q12b === "Sí, posparto reciente (últimos 6 meses)") keys.add("posparto"); ... if (q17.includes("Cirugía bariátrica")) keys.add("bariatrica"); return keys; }`; `{ id: "Q12", type: "multi", label: "¿Tienes alguna condición médica?", helper: "Solo condiciones médicas. Embarazo no es una condición.", options: ["Ninguna", "Lesión o dolor articular/muscular", "Condición cardiovascular o de presión", "Otra, la comento en el club"] }`; `{ id: "Q12b", type: "single", label: ... "¿Estás embarazada o en posparto reciente?", options: ["Sí, embarazada", "Sí, posparto reciente (últimos 6 meses)", "No"], condition: (a) => a.Q2 !== "Hombre" }`; `{ id: "Q17", type: "multi", label: "¿Estás tomando algún tratamiento para bajar de peso?", ... options: ["GLP-1 (Ozempic, Wegovy, Mounjaro)", "Cirugía bariátrica", ...], condition: (a) => Array.isArray(a.Q4) && a.Q4.includes("Bajar de peso") }`; `"Tu experiencia incluye prioridad en clases de fuerza para preservar tu masa muscular durante tu tratamiento..."`.
Momento: fase `questionnaire`; Q12 y Q12b generales, Q17/Q18/Q19 condicionales a «Bajar de peso». Almacenamiento: estado de sesión de React (`answers`), se destruye al cerrar. Quién lo ve: el LLM lee las respuestas; **el asesor ve condiciones médicas, banderas y tratamientos en la sección de alertas del `briefing` (página 2)**. Consentimiento: **«Se asume la aceptación implícita al avanzar en el cuestionario de experiencia y se recaba formalmente el consentimiento en la fase de captura de contacto.»**

**5. entrevistas-campo.txt** — §2 «Las motivaciones reales del cliente» y §3.
Frases textuales: `"Salud | Rehabilitación, indicación médica, prevención, tercera edad. Mayor lealtad y vida útil del cliente."`; `"Leads sin cualificar (prioridad #1 para 8/15) | El cuestionario cualifica al origen en todo canal y el asesor recibe el brief automático..."`.
El asesor visualiza objetivos y condiciones médicas del lead antes de la visita física. No detalla consentimiento.

**6. execution.txt** — §1 «Qué se está construyendo, en paralelo».
Frase textual: `"un video institucional de 45–60 s para 'Bajar de Peso'; ..."`. No define almacenamiento ni consentimiento.

**7. experience.txt** — §0.1, §0.2.2, §2.2 (Q12, Q12b, Q17) y reglas §4.8 y §4.15.
Frases textuales: `"La pérdida de peso es un objetivo funcional de primera clase (Q4) con su propia rama dedicada del cuestionario..."`; `"1. Bajar de peso — pérdida de peso. Este objetivo además habilita la rama de pérdida de peso del cuestionario (tratamientos, datos físicos, meta de cambio —Q17, Q18, Q19) y el manejo YMYL de pérdida de peso."`; `"6. Recuperarme de una lesión o dolor crónico — recuperación de una lesión o dolor crónico."`; `"Q12 | Condiciones médicas | multi-select | Filtra de forma estricta el catálogo de clases mediante la matriz de contraindicaciones. (Ver §4.8.)"`; `"Q12b | ... Estado de embarazo y posparto. Filtra de forma estricta clases con impacto, trabajo abdominal o posicionamiento supino."`; `"Q17 ... Tratamientos activos de pérdida de peso (GLP-1, cirugía bariátrica...)"`; `"Paso 4 — Filtro de contraindicaciones (Q12, Q12b, Q17). Este es el filtro estricto YMYL. Las clases removidas nunca aparecen y nunca se nombran al prospecto."`; `"Capa 2 — Restricciones YMYL. Cuando el lead tiene cualquier condición médica, embarazo, estado de posparto o tratamiento activo: El modelo no debe diagnosticar..."`.
Momento: progresivamente en el cuestionario (Q12, Q12b, Q17, Q18, Q19). Almacenamiento: página única sin persistencia; en memoria. Quién lo ve: el LLM; **el asesor es el único destinatario que ve los datos de salud estructurados en la página 2 del `briefing` antes de la visita**. Consentimiento: **«Se presenta un aviso de privacidad en pantalla en el momento de la recolección de los datos de contacto»**.

**8. glosario.txt** — fila «YMYL».
Frase textual: `"YMYL | 'Your Money or Your Life'; contenidos de alto impacto en salud, finanzas o bienestar, que requieren un estándar editorial reforzado y, en salud, validación profesional."`

**9. indice.txt** — fila 121 y «Localizador rápido».
Frases textuales: `"121. Hub de bajar de peso — /bajar-de-peso/. Contenido dedicado al objetivo de bajar de peso, con respaldo profesional."`; `"YMYL"`.

**10. resumen.txt** — §1, tabla de páginas en §3 y §14.
Frases textuales: `"El cuestionario de experiencia ideal es ese discovery, estandarizado en todo canal: llega aplicado antes de que el asesor hable, y el brief automático le entrega el perfil, los objetivos y cómo conducir la venta."`; `"121 | Hub de pérdida de peso | La vertical de mayor demanda no capturada."`; `"Fase 1 · Módulos interactivos ... Fase 2 · Role-play con agente de voz ..."`.

**11. seguimiento-2026-06-22.txt** — fila 13.
Frase textual: `"Privacidad y legal: datos, responsabilidades, balance (9) | ✅ | Minimización y no retención de datos; confidencialidad (secreto comercial, 10 años) y datos personales bajo LFPDPPP (SW responsable, proveedor encargado)..."`.

**12. seguridad.txt** — §1 «Principio rector», §5 «La base de datos del funnel» y §7 «Cumplimiento legal (LFPDPPP)».
Frases textuales: `"Los datos personales que captura un prospecto en el sitio (incluida su conversación con el agente BES: nombre, teléfono, correo, club de interés y horario) residen únicamente de forma transitoria en el entorno del sitio web..."`; `"La base de datos del funnel ... Los datos personales que contiene son los mínimos para conciliar: nombre, apellido, teléfono y club, más el número de membresía. **No almacena conversaciones, respuestas médicas ni contenido del cuestionario.**"`; `"7 · Cumplimiento legal (LFPDPPP) | ... Los avisos de privacidad, el consentimiento y la atención de los derechos ARCO son responsabilidad de Sports World; el sitio y BES despliegan los avisos y los mecanismos de consentimiento que Sports World apruebe."`
Momento: captura transitoria para transferencia inmediata al CRM. Almacenamiento: cero persistencia local; la base del funnel **excluye** respuestas médicas y contenido del cuestionario. Quién lo ve: EL PRESTADOR como encargado, con mínimo privilegio y logs sin PII.

---

*Cierre de la respuesta:* «¿Deseas que profundicemos en la lógica de exclusión que aplica la matriz de contraindicaciones para un perfil con condiciones cardiovasculares o bariatría?»
