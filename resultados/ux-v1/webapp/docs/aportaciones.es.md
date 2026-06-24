# Aportaciones de Sports World · V1.1
## Lo que Sports World entrega para que el proyecto arranque y avance

> Documento del proyecto · Confidencial. Tablero de seguimiento de las aportaciones a cargo de Sports World; el detalle contractual de cada requerimiento se establece en el **[Contrato › Anexo Uno](#contrato:anexo-uno-aportaciones-de-sports-world-requerimientos-a-cargo-del-cliente)** (Bloques 0, A, B, C, D para sistemas; Bloque E para marketing).

Esta sección concentra, en un solo tablero de seguimiento, **todo lo que Sports World debe aportar** —dividido en **Sistemas** y **Marketing**—. Cada entregable tiene **responsable**, **fecha límite** y **status** (entregado / no entregado), con un **semáforo** que se calcula solo:

- 🔴 **Vencido** — no entregado y la fecha límite ya pasó (igual o anterior a hoy).
- 🟡 **Por vencer** — no entregado y faltan **2 días o menos**.
- 🟢 **En tiempo / Entregado** — con holgura mayor a 2 días, sin fecha, o ya entregado.

> El status y la fecha límite son editables y se guardan en este navegador. El detalle contractual de cada requerimiento se establece en el **Contrato › Anexo Uno**.

## 1 · Aportaciones de sistemas

[[APORTACIONES:sistemas]]

### Detalle de las aportaciones de sistemas

La participación técnica requerida de Sports World se ha acotado al mínimo indispensable. El proveedor ejecuta, bajo su propia responsabilidad, la totalidad de los componentes a su cargo; los insumos enumerados a continuación constituyen, de forma limitativa, lo que corresponde aportar a Sports World, en congruencia con el Anexo Uno del Contrato.

#### API del sistema de clientes (CRM) — dependencia central
Sports World proveerá una interfaz de programación (API) de su sistema de clientes (CRM) que permita **crear o actualizar un prospecto calificado**, con sus campos: nombre, teléfono, correo electrónico, perfil, club seleccionado y visita agendada. Deberá entregar el punto de conexión (endpoint) y las credenciales correspondientes por un canal seguro (gestor de contraseñas), nunca por correo electrónico en texto plano. La operación será **idempotente por sesión**: si el prospecto modifica y reconfirma su cita, el registro existente se actualiza sin generar duplicados. Ésta constituye la única escritura en tiempo real de la solución; disponible ella, el flujo de captación de prospectos se implementa sin participación adicional de Sports World.

#### Acceso de lectura a los datos de clubes y clases
Para la recomendación de club y de clases, Sports World habilitará el acceso a su información vigente de clubes y clases mediante una de las siguientes modalidades, en orden de preferencia: (i) una API de lectura o feed de datos —clubes, amenidades y catálogo/horarios de clases—, modalidad preferente por mantener la información actualizada de forma automática; o (ii) en ausencia de API, una exportación estructurada (archivo de datos u hoja de cálculo correctamente formada) de la misma información, actualizada conforme a un calendario acordado. En ambos casos la integración corresponde al proveedor; la responsabilidad de Sports World se limita a exponer o proporcionar los datos.

#### Titularidad en Google para las 49 fichas
Sports World será titular —o concederá la administración— de la cuenta de Google Business de la marca. La creación y verificación de 49 fichas está sujeta a procesos que Google controla y que requieren tiempo: la verificación de cada ubicación y la aprobación del acceso programático, que Google otorga conforme a sus propios plazos (habitualmente semanas). El proveedor gestiona el proceso en su totalidad; la titularidad de la cuenta y la verificación dependen exclusivamente de Google y de Sports World. **Por su tiempo de espera, ésta es la dependencia más sensible del cronograma y deberá iniciarse en la Semana 1.**

#### Accesos de dominio y publicación (próximos al lanzamiento)
En la cercanía del lanzamiento, Sports World otorgará: el acceso para redireccionar el dominio (DNS) al nuevo sitio y el acceso a las cuentas de analítica y búsqueda (Google Analytics y Google Search Console) para la medición del desempeño y el envío de páginas a indexación. Estos accesos se requieren por una sola vez, próximos al lanzamiento, con el acompañamiento del proveedor.

#### WhatsApp Business y estrategia de escalación de BES
La operación de BES se limita al **canal web** del sitio; no opera por telefonía ni como chat conversacional de WhatsApp. Sports World proporcionará el número oficial de **WhatsApp Business** de la marca para el envío automatizado de los **dos recordatorios de visita** (24 y 2 horas antes) y definirá la **estrategia de escalación a operador humano** —transferencia por SIP a un número o cola, operador de WhatsApp, o devolución de llamada agendada en el CRM (Anexo Uno, Bloque D)—, designando a los responsables correspondientes. La construcción y configuración del agente corresponden al proveedor.

#### Servidor del sitio
Sports World proveerá un servidor bajo su control, conforme a la especificación técnica del proyecto (aproximadamente 8 vCPU, 16 GB de RAM, 80 GB de SSD y Node.js 20.9 o superior), con acceso seguro para su configuración por el proveedor. La especificación detallada y su justificación constan en el **[Plan de Ejecución · §4](#execution:4-el-servidor-donde-corre-el-sitio)**. BES no reside en este servidor: opera en las plataformas gestionadas de sus proveedores.

#### Resumen de insumos a cargo de Sports World
1. API del CRM para crear o actualizar prospectos (dependencia central).
2. Acceso a los datos de clubes y clases (API o exportación programada).
3. Titularidad de la cuenta de Google Business y cooperación con la verificación (inicio en la Semana 1).
4. Accesos de dominio y de analítica, próximos al lanzamiento.
5. Número oficial de WhatsApp Business y estrategia de escalación de BES.
6. Servidor conforme a la especificación técnica, con acceso seguro para su configuración.

Cualquier insumo no enumerado en este apartado ni en el Anexo Uno se entiende a cargo del proveedor.

## 2 · Aportaciones de marketing

[[APORTACIONES:marketing]]

### Detalle: qué aporta marketing

Lo que Sports World aporta del lado de marketing y marca (Anexo Uno, Bloque E):

- **Brand book:** logotipos vectoriales, paleta de color, tipografías con licencia, reglas de uso y tono de voz.
- **Activos visuales** con derechos de uso vigentes (o autorización para producirlos a la medida).
- **Contenido y copys vigentes** de clubes, amenidades, promociones, membresías y tarifas.
- **Accesos** a Google Business Profile, Google Analytics 4, Search Console, la herramienta SEO y las redes sociales.
- **Responsable de marca facultado** para aprobar wireframes, prototipo, plantillas, contenido y territorio visual.
- **Presupuesto de medios**, en su caso (no incluido en la contraprestación salvo pacto expreso).
- **Avisos de privacidad y textos legales** vigentes de la marca, validados por el área legal.
