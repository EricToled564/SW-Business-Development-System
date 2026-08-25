# Sports World · Seguridad del sistema
## Protección de los datos personales: minimización y no retención

Este documento describe cómo **el sistema** protege la información, **con énfasis en los datos personales de los prospectos**. Cubre los cuatro canales de captación —el sitio, el agente "BES", WhatsApp (Proyecto B) y la consola interna— y la **base de datos del funnel**. El principio rector es claro y verificable: **el sistema recolecta lo mínimo indispensable, lo retiene el menor tiempo posible y no conserva una copia en infraestructura de EL PRESTADOR.**

## 1 · Principio rector — los datos del individuo viven brevemente

Los datos personales que captura un prospecto en el sitio (incluida su conversación con el agente **BES**: nombre, teléfono, correo, club de interés y horario) residen **únicamente de forma transitoria** en el entorno del sitio web, **el tiempo estrictamente necesario** para completar la captura y **transferirlos al CRM de Sports World**.

> **Una vez copiados al CRM, no se conserva ningún respaldo (back-up) de esos datos personales en el entorno de la página web.** El sitio no es un repositorio de datos personales, sino un punto de paso. El sistema de registro único y permanente es el **CRM de Sports World**.

Esto significa, en la práctica:

- **No hay base de datos de prospectos en el sitio.** El sitio no acumula un padrón de leads; cada captura se transfiere al CRM y deja de existir en el entorno web.
- **No hay respaldos de datos personales** en el servidor del sitio, ni en snapshots, ni en exportaciones, ni en almacenamiento intermedio persistente.
- **Si la transferencia al CRM falla**, el dato se mantiene en una cola temporal cifrada con **tiempo de vida máximo de 72 horas**, exclusivamente para reintentar el envío; se elimina al confirmarse la entrega y, en cualquier caso, al vencer ese plazo.

## 2 · El CRM como único sistema de registro

La captura del sitio y de BES registra el lead directamente en el CRM mediante su API, de forma **idempotente** (si el prospecto reconfirma, se actualiza el mismo registro en lugar de duplicarlo). A partir de ese momento, **la custodia, el resguardo y el ciclo de vida del dato son responsabilidad del CRM de Sports World**, bajo su control. El sitio no compite con el CRM como fuente de verdad ni conserva una segunda copia.

## 3 · El agente BES y las conversaciones

- BES usa los datos del prospecto **solo durante la conversación** para calificar, recomendar y agendar.
- Al cerrar la interacción, el lead se entrega al **CRM** y se envía el **resumen del prospecto por correo al club** correspondiente; **el sitio no almacena la conversación con datos personales** una vez completado ese flujo. Ese correo **sale por el servicio de correo de Sports World**, con remitente de su propio dominio y sin proveedores externos de correo transaccional, de modo que el mensaje —que lleva el perfil del cuestionario— queda archivado en su infraestructura (**[Estrategia de Retención Cero · §7](#zdr:7-correo-saliente-el-mensaje-nace-y-queda-en-la-infraestructura-de-sports-world)**).
- Las bases de conocimiento que consulta BES (membresías, clases, políticas, información por club) **no contienen datos personales de usuarios**; corresponden a información operativa de Sports World. Su régimen de protección —confidencialidad, residencia y regla de contenido— se detalla en la Sección 9.

## 4 · Seguridad técnica del sitio

- **Cifrado en tránsito:** todo el tráfico viaja sobre **HTTPS/TLS**; sin contenido mixto.
- **Manejo de secretos:** las llaves de API (CRM, plataforma de voz, modelo de lenguaje) **nunca se exponen en el navegador**; residen como variables de entorno o secretos del lado del servidor y se entregan a través de una bóveda compartida (1Password, Bitwarden o equivalente), nunca por correo en texto plano.
- **Webhooks firmados:** las notificaciones entre sistemas usan firma **HMAC-SHA256**, identificador único de evento, marca de tiempo, reintentos con espera incremental y rotación dual de claves.
- **Cuentas de servicio y rotación:** integraciones con cuentas de servicio dedicadas (no personales), de mínimo privilegio, con **rotación trimestral** de claves.
- **Bitácoras sin datos personales:** los logs operativos y de error **no registran PII**; se usan identificadores no personales para diagnóstico.
- **Accesibilidad y robustez:** el sitio cumple **WCAG 2.2 AA** y se sirve con render del lado del servidor (SSR), lo que reduce superficie de ejecución en el cliente.

## 5 · La base de datos del funnel

La medición de punta a punta (**[Mapa del Funnel](#funnel)**) requiere conservar el recorrido de cada prospecto hasta la membresía y, en su caso, la cancelación. Ese registro **no contradice el principio de minimización** porque:

- **Reside en el servidor de Sports World** (Anexo Uno, Bloque F), no en infraestructura de EL PRESTADOR — igual que el CRM, bajo custodia del propio cliente.
- **El tablero consume únicamente resultados agregados**: tasas de conversión por canal, club y campaña. Ningún reporte expone datos personales individuales.
- **Los datos personales que contiene son los mínimos para conciliar**: nombre, apellido, teléfono y club, más el número de membresía. No almacena conversaciones, respuestas médicas ni contenido del cuestionario.
- El tratamiento se rige por la **Cláusula Décima Octava** del Contrato, igual que el resto del sistema.

## 6 · Respaldo del sitio ≠ respaldo de datos personales

Es importante no confundir dos conceptos distintos:

- **El sitio (código, contenido y configuración) sí se respalda**, para poder restaurarlo ante un incidente y garantizar continuidad operativa.
- **Los datos personales de los prospectos no se respaldan en el entorno web**, precisamente por el principio de minimización y no retención de la Sección 1. Su respaldo y resguardo viven en el CRM de Sports World.

## 7 · Cumplimiento legal (LFPDPPP)

- El tratamiento se rige por la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares**, su Reglamento y los avisos de privacidad de Sports World.
- **Sports World es el responsable** del tratamiento; **Final Upgrade (el prestador) actúa como encargado**, tratando los datos únicamente conforme a las instrucciones de Sports World, con las medidas de seguridad administrativas, técnicas y físicas razonables, y **suprimiéndolos o devolviéndolos** al término de la relación.
- Los **avisos de privacidad, el consentimiento y la atención de los derechos ARCO** son responsabilidad de Sports World; el sitio y BES despliegan los avisos y los mecanismos de consentimiento que Sports World apruebe.
- Ante cualquier vulneración de seguridad, el prestador **notifica de inmediato** a Sports World, indicando el alcance y las acciones tomadas.

Este enfoque está reflejado contractualmente en la **Cláusula Décima Octava (Seguridad y minimización de datos personales)** y en la **Cláusula Décima Séptima (Confidencialidad y Datos Personales)** del Contrato.

## 8 · Retención cero (ZDR) con los proveedores de inteligencia artificial

Las capas de procesamiento de BES —reconocimiento de voz, modelo de lenguaje, síntesis de voz y orquestación— operan en las plataformas gestionadas de sus proveedores como **procesamiento en tránsito, no como repositorio**. Ese tránsito se rige por el régimen de **retención cero** especificado en la **[Estrategia de Retención Cero (ZDR)](#zdr)**: convenio de retención cero con el proveedor del modelo de razonamiento, modo de retención cero de la plataforma de voz con acceso únicamente por API, y una regla de selección vinculante — el componente que no ofrezca retención cero o un régimen contractual equivalente de no retención no se selecciona.

## 9 · La base de conocimiento de BES

La base de conocimiento (KB) es **información operativa y comercial de Sports World** —catálogo de membresías con precios y términos, clases con descripciones, políticas de cancelación y congelamiento e información operativa por club (Anexo Uno D.6)—. **No contiene datos personales de usuarios**, por lo que su protección no se rige por el régimen de retención de datos personales, sino por la **confidencialidad**: la **Cláusula Décima Séptima** la trata como secreto comercial de Sports World, protegido por la Ley Federal de Protección a la Propiedad Industrial, con obligación de reserva durante la vigencia del Contrato y por **diez años** posteriores; esa obligación **sobrevive a la terminación** por cualquier causa.

**Dónde reside.** Los datos operativos del catálogo —clubes, clases, horarios, tarifas, descuentos y promociones— viven en la base compartida del **servidor de Sports World**, sincronizada desde el CRM con el corte diario (**[Integración de Datos · §1](#integracion:1-principio-rector-se-extrae-una-sola-vez-y-se-comparte)**). El contenido documental de la KB —políticas, términos y descripciones— reside en esa misma infraestructura y **se entrega al modelo en el momento de cada consulta**, como contexto de la conversación en curso: **no se carga como corpus permanente** en la plataforma del proveedor del modelo ni en almacenes documentales de terceros. En consecuencia, el corpus completo de la KB **no queda en reposo fuera de la infraestructura de Sports World**, y el fragmento que viaja en cada consulta queda cubierto por el mismo régimen de retención cero del modelo (**[Estrategia de Retención Cero · §3](#zdr)**).

**Qué entra y qué no entra a la KB.** La KB contiene únicamente **información destinada a ser comunicada a un prospecto**. Quedan fuera, por regla: nombres y datos de contacto del personal, información financiera interna, márgenes y resultados por club, datos de socios actuales y cualquier documento interno no destinado al público. El criterio es una sola línea: **un dato que no puede decirse a un prospecto no entra a la KB.**

**Contención de la extracción conversacional.** BES opera bajo instrucciones que le impiden revelar credenciales, sus propias instrucciones o contenido ajeno al propósito de la conversación, y responde únicamente dentro del alcance de la información de Sports World destinada al público. La regla de contenido anterior es la salvaguarda de fondo: como la KB no contiene información que no pueda comunicarse a un prospecto, **ninguna respuesta del agente —ni siquiera ante un intento deliberado de extracción— expone información que Sports World no publicaría.** Es una protección por diseño y no depende de la eficacia de una instrucción.

**Acceso, actualización y control de cambios.** Sports World mantiene la KB con **actualización semanal mínima** durante el proyecto (Anexo Uno D.6). Su edición se realiza por **personal autorizado** desde la sección de administración; el mantenimiento de la KB, sus instrucciones y su optimización forman parte de la iguala mensual. La titularidad del contenido es de Sports World, conforme a la Cláusula Décima Sexta.
