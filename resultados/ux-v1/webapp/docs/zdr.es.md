# Sports World · Estrategia de Retención Cero (ZDR)
## Los datos personales de los prospectos residen de forma permanente en un solo lugar: el CRM de Sports World

> **La retención cero no es un requisito nuevo: ya estaba en la planeación del sistema desde su diseño.** El Contrato no la nombra con el término técnico —**ZDR**, por *Zero Data Retention*—, pero sí consagra la promesa que la sustenta: en la **Cláusula Décima Octava** el proyecto se obliga a la **minimización y no retención** de los datos personales, y en el Anexo Uno y en los documentos de arquitectura se establece que la base del funnel y el hospedaje residen en la infraestructura del propio cliente. Es decir: **desde el origen, el compromiso fue que ningún dato personal de los prospectos se almacenara en sistemas ajenos a los que están bajo el control de Sports World.** Este documento no cambia esa promesa: le pone nombre, la extiende explícitamente a las plataformas de inteligencia artificial y al correo saliente, y la convierte en controles verificables uno por uno.

Este documento fija, entonces, la estrategia de **retención cero de datos personales** del sistema y especifica cómo se aplica en cada componente: la página, el agente **BES**, las plataformas de inteligencia artificial que lo impulsan y el correo que el sistema envía. El compromiso es uno y es verificable: **ningún componente del sistema, propio o de proveedor, conserva datos personales de los prospectos en reposo; el único registro permanente es el CRM de Sports World.**

La estrategia complementa el documento **[Seguridad del sistema](#seguridad)** —que describe la protección integral en los cuatro canales de captación— con la especificación del régimen de retención por componente y por proveedor. Su fundamento contractual son las **[Cláusulas Décima Séptima y Décima Octava del Contrato](#contrato:clusulas)** (confidencialidad, seguridad, minimización y no retención), que aplican a los tres Proyectos.

## 1 · Qué significa ZDR en este sistema

Retención cero significa que cada componente usa el dato personal **solo mientras cumple su función** y no lo almacena después: el sistema lo transfiere al CRM sin guardar copia, y los proveedores de inteligencia artificial lo procesan sin conservarlo. El régimen se aplica en dos frentes distintos, porque las garantías se obtienen de forma distinta en cada uno:

| Componente | Dónde opera | Datos personales que toca | Régimen de retención |
|---|---|---|---|
| Sitio web (captura y cuestionario) | Servidor de Sports World ([Anexo Uno, Bloque F](#contrato:bloque-f-servidor-e-infraestructura-de-hospedaje-proporcionada-por-el-cliente)) | Contacto, club y perfil durante la captura | Tránsito; retención cero tras la escritura al CRM (§2) |
| Middleware de integración | Servidor de Sports World | El lead en su paso al CRM | Tránsito; cola de reintento con vida máxima de 72 horas (§2) |
| Base de datos del funnel | Servidor de Sports World | Mínimos de conciliación | Custodia de Sports World; el tablero solo presenta agregados (§2) |
| Modelo de razonamiento (BES y experiencia ideal) | Plataforma del proveedor, por API | La conversación durante la generación de cada respuesta | Convenio de retención cero con el proveedor (§3) |
| Plataforma de voz | Plataforma del proveedor, por API | El audio de la conversación | Modo de retención cero; acceso únicamente por API (§4) |
| Reconocimiento de voz y orquestación | Plataforma del proveedor | Voz y texto en tránsito | Regla de selección vinculante (§5) |
| Correo saliente (brief al club y experiencia ideal) | Servicio de correo de Sports World | Perfil del cuestionario y datos de contacto | Envío desde infraestructura de Sports World; sin proveedor externo (§7) |
| CRM de Sports World | Infraestructura de Sports World | El registro permanente del lead | Ciclo de vida bajo las políticas y avisos de privacidad de Sports World |

## 2 · La capa propia: retención cero por arquitectura

En los componentes que corren en el servidor de Sports World, la retención cero no depende de una política: **está construida en la arquitectura**, conforme al documento **[Seguridad del sistema](#seguridad)**.

- **No existe base de datos de prospectos en el sitio.** Cada captura se escribe al CRM de forma idempotente y deja de existir en el entorno web; no hay respaldos, snapshots ni exportaciones de datos personales.
- **Cola de reintento con vida máxima de 72 horas.** Si la escritura al CRM falla, el dato espera en una cola temporal **cifrada**, exclusivamente para reintentar el envío; se elimina al confirmarse la entrega y, en cualquier caso, a las 72 horas de creado. Es el único almacenamiento intermedio del sistema y su valor máximo es verificable en la configuración.
- **La [base de datos del funnel](#funnel:4-dnde-vive-el-dato) guarda los mínimos de conciliación** —nombre, apellido, teléfono, club y número de membresía— dentro de la infraestructura de Sports World; no almacena conversaciones, respuestas médicas ni contenido del cuestionario, y el tablero presenta únicamente resultados agregados.
- **Bitácoras sin PII.** Los registros operativos y de error usan identificadores no personales.

## 3 · El modelo de razonamiento: convenio de retención cero

El modelo de lenguaje que impulsa BES y la generación de la experiencia ideal (la API de Claude, de Anthropic, o el modelo equivalente que se confirme al arranque) procesa la conversación en la plataforma del proveedor. Ahí el régimen se obtiene por contrato y configuración, en este orden:

1. **La cuenta es de Sports World.** La cuenta organizacional del proveedor del modelo se contrata a nombre de Sports World, que cubre su costo directamente (Cláusula Décima Cuarta del Contrato); la titularidad del régimen de datos queda del lado del cliente.
2. **Piso de partida del proveedor:** los datos enviados por API **no se usan para entrenar modelos** sin permiso expreso del cliente, y las entradas y salidas se eliminan de sus sistemas en un **máximo de 30 días**.
3. **Sobre ese piso se activa el convenio de retención cero** (*Zero Data Retention*) que el proveedor otorga por solicitud sobre la cuenta organizacional: los mensajes enviados y las respuestas generadas **no se almacenan en reposo** una vez devuelta cada respuesta. La gestión del convenio forma parte del arranque de la integración y su activación es **condición para la salida a producción del agente**; el estado del régimen es visible en la consola de la cuenta.
4. **Selección de modelos limitada a los elegibles para retención cero.** Los modelos del proveedor que por sus políticas exigen retención quedan excluidos de la operación; la gama prevista para el proyecto ([Gastos Operativos Variables](#gastos-operativos)) es elegible.
5. **Sin funciones que exijan almacenamiento.** La integración usa la API de mensajes; las funciones del proveedor que retienen datos en su infraestructura (por ejemplo, la ejecución de código en contenedores) no se utilizan, de modo que todo el tráfico del agente queda dentro del régimen.
6. **Minimización del contexto.** La base de conocimiento que el modelo consulta (RAG: membresías, clases, políticas, información por club) **no contiene datos personales**; la conversación viaja con el identificador de sesión, y los únicos datos personales que el modelo ve son los que el propio prospecto proporciona en la conversación en curso.

## 4 · La plataforma de voz: acceso únicamente por API

La voz de BES (ElevenLabs, o la plataforma equivalente que se confirme al arranque) convierte el audio de la conversación en la plataforma del proveedor. El régimen se asegura con tres decisiones:

- **El acceso es únicamente a través de su API.** El modo de retención cero del proveedor de voz cubre **solo el tráfico por API**; el uso por interfaz web o *playground* queda fuera del régimen y por ello **se excluye de la operación**: todas las conversaciones corren por API con llaves de servicio. El acceso por API es, además, el esquema de costo previsto en **[Gastos Operativos Variables](#gastos-operativos)**.
- **Modo de retención cero activado.** En la configuración del agente, la información personal identificable **no se registra durante la conversación ni se almacena al concluirla**: sin grabaciones ni transcripciones persistidas en el proveedor. Este modo corresponde a los planes empresariales del proveedor; la contratación —a nombre de Sports World, Cláusula Décima Cuarta— se realiza en el plan que lo incluye.
- **El audio se procesa en flujo.** La voz se convierte en tiempo real para sostener la conversación y se descarta al terminar; lo único que sobrevive a una conversación es el lead escrito al CRM y el resumen del prospecto enviado por correo al club.

## 5 · Regla de selección para todo componente de inteligencia artificial

Los componentes del agente se eligen al arranque frente a los tres requisitos de la **[Estrategia Técnica · §5](#technical:5-bes-el-agente-de-voz-y-texto)** (voz natural en español de México, latencia conversacional y traspaso limpio a humano). Esta estrategia agrega el **cuarto requisito, vinculante**:

> Todo componente que procese datos personales —reconocimiento de voz, orquestación conversacional, modelo de lenguaje o síntesis de voz— debe ofrecer **retención cero o un régimen contractual equivalente de no retención**. El componente que no lo ofrezca **no se selecciona**, sin excepción por precio o por conveniencia técnica.

La misma regla aplica al agente de voz de práctica de la Academia (Proyecto C) cuando se active: trata datos de los asesores comerciales, comprendidos en el alcance de la Cláusula Décima Octava, apartado I.

## 6 · Canales colaterales: WhatsApp, correo y analítica

- **Recordatorios por WhatsApp.** Los 2 recordatorios automatizados (24 horas y 2 horas antes de la visita) usan plantillas con los **datos mínimos**: nombre, club, fecha y hora de la visita. No incluyen contenido del cuestionario ni de la conversación. El tránsito por la plataforma de mensajería se rige por las condiciones de ese proveedor, sobre el número oficial y la cuenta de Sports World.
- **Correo.** El sistema envía dos mensajes —el resumen del prospecto al club y la experiencia ideal al prospecto—; su régimen se especifica en el §7.
- **Analítica.** La medición de tráfico opera sobre datos **agregados y anónimos**; las etapas del recorrido individual se concilian dentro de la infraestructura de Sports World, conforme al **[Mapa del Funnel](#funnel:4-dnde-vive-el-dato)**.

## 7 · Correo saliente: el mensaje nace y queda en la infraestructura de Sports World

El correo es el componente que transporta **la mayor carga de datos personales de todo el sistema**: el resumen del prospecto que recibe el asesor lleva el perfil completo del cuestionario —objetivos, nivel, horario, acompañantes y las banderas de contexto que el propio prospecto declaró—, más de lo que contiene el registro del lead. Por eso su vía de salida se especifica con el mismo rigor que las plataformas de inteligencia artificial.

**Los dos mensajes del sistema:**

| Mensaje | Destinatario | Contenido |
|---|---|---|
| Resumen del prospecto (brief del asesor) | Buzón del club (`correo_club`), dentro del dominio de Sports World | Perfil del cuestionario, datos de contacto y logística de la visita |
| Experiencia ideal | Buzón que la propia persona proporcionó | Su recomendación personalizada; sin datos de terceros |

**Régimen de envío:**

- **El envío sale de la infraestructura de correo de Sports World, no de EL PRESTADOR.** La capa de orquestación se autentica contra el **relay corporativo de Sports World** —el servicio de correo que ya opera su dominio— mediante una **cuenta de servicio dedicada**, y el remitente es una dirección del propio dominio de Sports World. En consecuencia, el mensaje y su contenido nacen, transitan y quedan archivados **en la infraestructura de correo de Sports World**, igual que el resto de su correspondencia: es el mismo principio que rige al CRM.
- **Sin proveedores externos de correo transaccional.** Los servicios de terceros que envían correo por cuenta de una aplicación **retienen el cuerpo del mensaje y sus registros de entrega en su propia infraestructura**, lo que colocaría el brief del asesor —el dato más sensible del sistema— fuera del régimen. Por eso **quedan excluidos** de la operación, en congruencia con la regla de selección del §5.
- **Sin cambios en la autenticación del dominio.** Como el correo sale del propio servicio de Sports World, **no se agrega ningún tercero a sus registros de autenticación de correo** (SPF, DKIM, DMARC) ni se modifican sus registros MX — congruente con la regla de la migración, que sólo toca los registros del sitio.
- **Credenciales bajo el régimen general:** cuenta de servicio dedicada y no personal, con **privilegio mínimo de solo envío**, entregada por bóveda compartida y con **rotación trimestral**.
- **Minimización del contenido.** El mensaje al club lleva lo necesario para preparar la visita; el mensaje al prospecto, su experiencia ideal. **Ninguno de los dos incluye la transcripción de la conversación** con BES.
- **Sin copia en el entorno web.** El sistema no conserva copia de los mensajes enviados: el registro del envío se limita a un identificador no personal —marca de tiempo, club e identificador de sesión—, conforme a la regla de bitácoras sin PII.
- **Buzón del destinatario.** El mensaje al club llega a un buzón del propio Sports World. El mensaje al prospecto llega al buzón que esa persona proporcionó, fuera del alcance de ambas Partes por la naturaleza del medio; por eso su contenido se limita a su propia experiencia ideal.

**Vía alternativa, si Sports World prefiere no exponer un relay corporativo.** El envío puede resolverse con un **servicio de correo propio en el servidor del Bloque F**: el contenido tampoco sale de la infraestructura de Sports World y el principio se conserva íntegro. A cambio, la entregabilidad queda sujeta a la reputación de la dirección de red de ese servidor y exige configurar la autenticación de correo para ese emisor. **La vía preferente es el relay corporativo**, porque preserva el régimen sin comprometer que el brief llegue a tiempo a la bandeja del asesor.

**Definición al arranque.** Sports World indica cuál de las dos vías opera y entrega la cuenta de servicio correspondiente; la elección queda registrada junto con las demás credenciales productivas del proyecto.

## 8 · Verificación y gobierno del régimen

La retención cero no se declara: se verifica. Cada control tiene una evidencia concreta y un momento de revisión.

| Control | Evidencia verificable | Momento |
|---|---|---|
| Convenio de retención cero del modelo activo | Estado del régimen visible en la consola de la cuenta del proveedor | Al arranque de la integración y en cada rotación trimestral de credenciales |
| Modo de retención cero de la plataforma de voz | Configuración del agente en la cuenta del proveedor | Al arranque y en cada rotación trimestral |
| Acceso a la voz únicamente por API | Llaves de servicio como única vía de tráfico de conversaciones | Al arranque y en cada rotación trimestral |
| Cola de reintento con vida máxima de 72 horas | Valor configurado en el middleware | Al arranque |
| Correo saliente por el servicio de Sports World | Remitente del dominio de Sports World y cuenta de servicio de solo envío | Al arranque y en cada rotación trimestral |
| Sin terceros en la autenticación de correo del dominio | Registros SPF, DKIM y DMARC sin emisores externos añadidos | Al arranque y trimestral |
| Bitácoras sin PII | Muestreo de registros operativos y de error, incluidos los del envío de correo | Al arranque y trimestral |
| Base de conocimiento sin datos personales | Revisión del contenido RAG | Al arranque y ante cada actualización de la base |

**Gobierno.** El estado del régimen se incluye en el **reporte mensual de monitoreo de consumo** que EL PRESTADOR entrega conforme a la Cláusula Décima Cuarta. Si un proveedor modifica sus políticas de retención de forma que rompa el régimen, EL PRESTADOR lo notifica a Sports World y lo sustituye conforme a la regla de selección del §5; el Contrato prevé el tratamiento de los cambios sustanciales de políticas de las plataformas de inteligencia artificial (Cláusula Vigésima Primera). Este régimen es **adicional** a la minimización y no retención de la Cláusula Décima Octava; no sustituye al CRM de Sports World como único sistema de registro ni releva a EL PRESTADOR de la supresión certificada al término de la relación.
