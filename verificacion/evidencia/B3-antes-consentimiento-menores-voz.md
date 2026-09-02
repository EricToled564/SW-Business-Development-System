# B3 · Antes de corregir · artefactos de consentimiento, menores, mercadotecnia y voz

**Cuaderno:** 1 · Originales. **Fuentes cargadas al preguntar:** 42, de las cuales
**sólo 32 eran legibles** — las 10 páginas HTML cargadas por URL no se estaban leyendo.
**Fecha:** 2 de septiembre de 2026. **Cubre:** A-015, A-053, A-070, A-073, A-074, A-084.

> **Advertencia sobre esta evidencia.** NotebookLM afirmó que «en ninguna de las fuentes
> documentales existen o se definen las claves `AP-01` o `AU-01`». **Es falso**, y el
> propio MPC lo desmiente: «AP-01 Aviso de privacidad — Versión simplificada desplegada
> antes de la primera pregunta, con enlace a la versión integral» y «…mediante la
> autorización AU-01, solicitada con anticipación». La causa es que las 10 páginas HTML
> se habían cargado por URL y NotebookLM no extrae su texto. A partir de aquí se cargan
> como archivo de texto, con el extractor de `build-fuentes.js`, y R23 lo comprueba.
> **Lo que esta respuesta dice sobre A-073 y A-074 hay que volver a preguntarlo.**

## Pregunta

> **[ROL DE AUDITORÍA Y BARRIDO LITERAL]** … **1. Barrido lineal.** Revisa las 42 fuentes
> de la 1 a la 42 y reporta toda mención a: (a) los ARTEFACTOS DE CONSENTIMIENTO por su
> clave —AP-01, AU-01, aviso de privacidad, guion aprobado, autorización— y si el documento
> dice que existen, quién los redacta y en qué momento del flujo se muestran respecto de la
> primera pregunta; (b) qué se GUARDA del consentimiento: alcance, versión del aviso,
> método, evidencia, fecha y hora; (c) MENORES DE EDAD: detección, tutor, consentimiento
> parental, en cualquier etapa desde la captación hasta el alta; (d) MERCADOTECNIA Y
> SEGUIMIENTO: reactivación, invitación de acompañante, comunicaciones no relacionadas con
> la solicitud, y cómo se revoca o suprime; (e) VOZ: consentimiento de grabación, aviso
> sonoro, límites de audio, tratamiento de la transcripción. **2. Cero exclusiones.**
> **3. Transcripción.** Si un documento declara que un artefacto NO existe, está pendiente
> o queda a cargo de Legal, transcríbelo igual: esa ausencia es el hallazgo.
> **4. Recuento con puerta de calidad.**

## Respuesta íntegra

«Tras revisar las 42 fuentes una por una, he identificado exactamente 19 documentos.»

**1. academia-contenido.txt** — Componente 5, «Los siete componentes del programa».
(d) `"Seguimiento de hito y reactivación. Sistema único que integra la llamada de hito a noventa días con la reactivación de bases pasadas —varios asesores ya trabajan estas bases sin protocolo formal; un sistema integrado duplica la cobertura con el mismo esfuerzo de diseño."`; `"para el componente 5 (seguimiento de hito y reactivación) la industria aporta un segundo eje, conductual, sobre qué tan en riesgo está de cancelar."`; `"Por eso el componente 5 prioriza la llamada de hito y la reactivación sobre datos de uso real de la app/control de acceso..."`

**2. academia-fases.txt** — temario de Etapa 1, repasos de Etapa 3.
(d) `"Nivel 3 · Retención y contexto | 2 lecciones | Seguimiento de hito y reactivación · Alfabetización digital de la app"`; `"Día 90 | Alineado con la llamada de hito a noventa días (componente 5): repaso de seguimiento y reactivación, justo cuando el asesor lo aplica en campo con sus primeros socios."`

**3. academia-medicion.txt** — KPIs de Nivel 3, habilitadores de operación.
(d) `"uso de la herramienta de clasificación, llamadas de hito ejecutadas, seguimiento de bases reactivadas."`; `"Comportamiento en operación (Nivel 3) | Uso de la herramienta de clasificación con prospectos reales · llamadas de hito ejecutadas vs. programadas · bases pasadas trabajadas bajo protocolo | CRM"`; `"una parte sustancial del seguimiento y la reactivación (componente 5) depende de un canal de WhatsApp estable."`

**4. academia-resumen.txt** — «Cómo lo vamos a hacer», riesgos.
(d) `"La rutina que evita que la capacitación sea un evento de una sola vez ... repasos breves ya calendarizados a los 7, 30 y 90 días ... repaso de seguimiento y reactivación"`; `"una parte sustancial del seguimiento y la reactivación (componente 5) depende de un canal de WhatsApp estable."`

**5. academia-tecnica.txt** — §5 «Motor de aprendizaje continuo».
(e) `"el sistema nunca accede a las conversaciones reales entre asesores y clientes — esas conversaciones no se graban, no pasan por ninguna plataforma del proyecto y no se integran al CRM en ningún momento"`.
*Lectura del auditor:* las conversaciones reales no se graban ni se procesan para entrenamiento; el role-play se limita a simulaciones internas.

**6. bds-anexo.txt** — Cláusula 7, disposiciones finales.
(a) `"Datos personales y seguridad. La Cláusula Décima Octava del Contrato aplica al Proyecto B desde su activación, sin necesidad de pacto adicional en los Addenda."`

**7. bds-flujo.txt** — paso 7 del recorrido end-to-end.
(d) `"7. Confirmación y recordatorios. El prospecto recibe la confirmación; se disparan los 2 recordatorios por WhatsApp (24 h y 2 h antes); el asesor asignado recibe el brief del comprador potencial antes de la visita."`

**8. contrato.txt** — Cláusula Tercera (II), Décima Octava, Bloque E (E.7) del Anexo Uno.
(a) `"los datos capturados en el cuestionario de experiencia ideal; las conversaciones con \"BES\" (canal web y, activado el Proyecto B, WhatsApp)..."`; `"V. Derechos ARCO. EL PRESTADOR apoyará a EL CLIENTE, en su calidad de encargado, para atender las solicitudes de derechos ARCO..."`; `"E.7 Avisos de privacidad y textos legales vigentes de la marca, validados por el área legal."`
(d) `"Su operación bajo el presente Contrato (Proyecto A) se limita al canal web del sitio y al envío automatizado, vía WhatsApp, de 2 (dos) mensajes recordatorios (24 horas y 2 horas antes de la visita solicitada)."`; `"Cancelación de membresía: número de membresía, fecha de cancelación y, cuando el CRM lo registre, motivo de la cancelación — por API o por entrega periódica..."`

**9. cuestionario-inteligente.txt** — constante `getQuestions`.
(c) `"{ id: \"Q14b\", type: \"single\", label: \"¿Uno o más de tus hijos tiene menos de 12 años?\", options: [\"Sí\", \"No\"], condition: (a) => a.Q14 === \"Yo y mis hijos\" || a.Q14 === \"La familia completa\" }"`; `"Perfil familiar: el lead visita el club ... con sus hijos ... e incluir FitKidz..."`; `"const isFamily = answers.Q14 === \"Yo y mis hijos\" || answers.Q14 === \"La familia completa\"; ... const showFitkidz = isFamily && answers.Q14b === \"Sí\";"`; `"flags.push({ severity: \"warn\", text: \"Familia con hijos <12 -> ofrecer demo de FitKidz en la visita.\" })"`
(a) `"(2) condiciones médicas específicas (validar autorización, trimestre si embarazo, tiempo en tratamiento si GLP-1)"`; `"isPregnant: Embarazada. Clases con impacto/kicks/saltos ya filtradas. Validar trimestre y autorización médica."`

**10. experience.txt** — §1.2, §1.4, taxonomía de preguntas, restricciones YMYL.
(a) `"Aviso de privacidad en la pantalla: \"Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros.\" Este texto no es legalmente vinculante por sí mismo —el aviso de privacidad integral se referencia en otra parte del sitio— pero es el primer momento de consentimiento del prospecto."`; `"El brief del asesor no puede alcanzarse sin antes pasar por la compuerta de captura de contacto y el agendador de citas."`
(b) `"Ningún pixel de analítica se dispara hasta la fase de captura de contacto. Los datos de contacto ingresados ahí se mantienen en el estado de sesión; la escritura al CRM ... ocurre después, en la confirmación de la cita..."`; `"Todos los datos capturados durante la sesión viven únicamente en memoria; cerrar la pestaña los descarta."`
(c) `"Q14b | Q14 ∈ {\"Yo y mis hijos\", \"La familia completa\"} | Presencia de hijos menores de 12 años..."`; `"alberca (requerida cuando el modo de entrenamiento resuelto es acuático, §2.4) y FitKidz (cuando Q14 ∈ {familia} y Q14b = \"Sí\")."`

**11. funnel.txt** — etapas de la espina canónica, corte E7.
(d) `"E7 · Membresía cancelada | El CRM registra la baja | CRM o base periódica de cancelaciones | El dato de cancelación por número de membresía | SW Sistemas"`; `"Registro de cancelación (E7): número de membresía, fecha y —cuando el CRM lo registre— motivo. Habilita la medición de retención y la lectura de qué segmento cancela."`

**12. gastos-operativos.txt** — supuestos de volumen del Proyecto B.
(d) `"Plantillas marketing (reactivación de bases) | 0 | ~1,000 | ~2,000"`; `"BDS: ... plantillas marketing de reactivación × $0.0305 + margen del BSP."`

**13. glosario.txt** — términos de datos.
(a) `"ARCO | Derechos de Acceso, Rectificación, Cancelación y Oposición que la ley mexicana otorga al titular sobre sus datos personales."`

**14. integracion.txt** — campos de la base del funnel, etapa E7.
(d) `"Membresía cancelada | CRM o base periódica de cancelaciones | numero_membresia · fecha_cancelacion · motivo (si el CRM lo registra) · club · tipo_plan"`; `"La etapa 6 habilita además el análisis de retención: al vincular cada cancelación con el perfil de origen del funnel (objetivo, club, canal, campaña), el dashboard puede presentar qué segmentos cancelan más..."`

**15. minuta-2026-06-22.txt** — punto 9.
(a) `"9 · Privacidad y legal | El equipo indicó revisión preliminar por parte legal. Temas a revisar: privacidad de datos, responsabilidades, riesgos y balance contractual."`

**16. resumen.txt** — capacidades de BES.
(d) `"Envía 2 recordatorios automatizados por WhatsApp (24 h y 2 h antes de la visita)"`

**17. seguimiento-2026-06-22.txt** — tabla de seguimiento, punto de privacidad.
(a) `"Minimización y no retención de datos; confidencialidad (secreto comercial, 10 años) y datos personales bajo LFPDPPP (SW responsable, proveedor encargado)."`

**18. seguridad.txt** — §1, §3 y §7.
(a) `"7 · Cumplimiento legal (LFPDPPP) | El tratamiento se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y los avisos de privacidad de Sports World."`; `"Los avisos de privacidad, el consentimiento y la atención de los derechos ARCO son responsabilidad de Sports World; el sitio y BES despliegan los avisos y los mecanismos de consentimiento que Sports World apruebe."`
(b) `"los datos personales que el prospecto captura en el sitio (incluida la conversación con el agente BES: nombre, teléfono, correo, club de interés y horario) residen únicamente de forma transitoria en el entorno del sitio web..."`; `"La base de datos del funnel ... No almacena conversaciones, respuestas médicas ni contenido del cuestionario."`

**19. technical.txt** — §3 SEO y fichas, §5 funcionamiento de BES.
(a) `"Las 49 fichas de Google Business se crean y optimizan mediante la herramienta oficial (Google Business Profile API, con OAuth 2.0, el esquema que esa API de Google requiere)."`
(d) `"Además, envía 2 recordatorios automatizados por WhatsApp (24 h y 2 h antes de la visita) y el resumen del prospecto por correo al club."`

## Resumen que dio NotebookLM

1. **Ausencia de claves de consentimiento.** «En ninguna de las fuentes documentales
   existen o se definen las claves `AP-01` o `AU-01` asociadas a artefactos de
   consentimiento.» — **Afirmación falsa por fuentes ilegibles; ver la advertencia
   del encabezado.**
2. **Qué se guarda.** «No se persiste la versión, evidencia o alcance del consentimiento
   en la base de datos del sitio web o del funnel.»
3. **Voz y grabaciones.** «Las llamadas telefónicas y de WhatsApp de los prospectos no se
   graban ni se almacenan en infraestructura de IA.»
4. **Menores de edad.** «No existe mención de tutor legal o formato de consentimiento
   parental en las fuentes. Su presencia se detecta mediante las condicionales `Q14` y
   `Q14b` para asociar al prospecto a la membresía familiar e integrar el tour guiado por
   la zona infantil FitKidz.»

## Qué queda establecido, y qué no

**Confirmados** — se sostienen con las 32 fuentes que sí se leyeron:

- **A-053.** El consentimiento no se persiste: ni alcance, ni versión del aviso, ni
  método, ni evidencia, ni fecha y hora. `experience` y `seguridad` describen memoria
  transitoria y descarte al cerrar la pestaña; ningún documento registra el acto.
- **A-084.** No hay detección de minoría de edad, tutor ni consentimiento parental en
  ninguna etapa. Lo único que existe es `Q14b`, «¿uno o más de tus hijos tiene menos de
  12 años?», que sirve para ofrecer FitKidz, no para gobernar a un prospecto menor.
- **A-070.** Existen plantillas de mercadotecnia de reactivación con volumen y costo
  presupuestados —`"Plantillas marketing (reactivación de bases) | 0 | ~1,000 | ~2,000"`—
  sin propósito declarado, sin consentimiento separado y sin mecanismo de supresión.
- **A-015.** Sobre voz sólo consta que las conversaciones reales no se graban, dicho en un
  documento de la Academia. No hay consentimiento de grabación, aviso sonoro, límites de
  audio ni tratamiento de la transcripción para el canal de WhatsApp por voz.

**Sin resolver, por fuentes ilegibles** — A-073 y A-074 dependen del MPC y los SOP.
Se vuelven a preguntar con las 41 fuentes cargadas como archivo.
