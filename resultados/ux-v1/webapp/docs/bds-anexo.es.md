# BDS · Addendum contractual
## Alcance, entregables y contraprestación adicional del Proyecto B

## 1 · Objeto

EL PRESTADOR desarrolla e integra para EL CLIENTE un **sistema de captación y conversión de leads multicanal en tiempo real** (el "BDS"), que reduce el **tiempo al primer contacto** atendiendo a los prospectos en **WhatsApp** y en la **consola interna**, con el mismo cuestionario de experiencia ideal y la misma escritura al CRM del Proyecto A.

## 2 · Alcance y entregables

- **Landing de campañas** con el cuestionario de experiencia ideal (punto de entrada de anuncios).
- **Integración con WhatsApp Business API** (número oficial de EL CLIENTE) para mensajería bidireccional, plantillas y multiagente.
- **"BES" sobre WhatsApp (solo texto)** como respaldo automático 24/7, con escalación a operador humano.
- **Consola de operadores/asesores** (rol de operador sobre la consola interna ya existente): bandeja de WhatsApp, aplicación del cuestionario, generación de experiencia ideal y carga al CRM.
- **Capa de enrutamiento en tiempo real** (human-first → "BES" de respaldo → escalación; colas, asignación, rebote).
- **Funnel y medición del BDS** (primer contacto y *speed-to-lead*, por canal y operador), integrado al dashboard.

El detalle funcional y técnico consta en los documentos del módulo BDS: **[Flujo](#bds-flujo)**, **[Canales](#bds-canales)**, **[Estrategia Técnica](#bds-tecnica)** y **[Medición](#bds-medicion)**.

## 3 · Exclusiones

- **Telefonía** y **voz por WhatsApp** (el BDS opera por **texto** en WhatsApp).
- **Costos de operación** de "BES" (plataforma del modelo de razonamiento, mensajería WhatsApp de los proveedores) y las **cuotas de WhatsApp Business API**, que cubre EL CLIENTE directamente a los proveedores.
- Cualquier servicio no enumerado en la sección 2.

## 4 · Aportaciones a cargo de EL CLIENTE

- **Número oficial de WhatsApp Business** y aprobación de las plantillas de mensaje.
- **Plantilla de operadores**, sus **horarios de atención** y la **lista de personal autorizado** de la consola.
- Acceso al **API estándar del CRM** (ya cubierto por el middleware del Proyecto A) para la escritura de leads y las etapas de visita proporcionada y membresía del funnel.

## 5 · Contraprestación adicional

- **Monto: USD $4,850.00 (cuatro mil ochocientos cincuenta dólares 00/100) más IVA** —equivalente a **MXN $86,330.00** al tipo de cambio contractual de $17.80—, por la implementación del alcance descrito en la sección 2. Es **adicional** a la contraprestación del Contrato (Proyecto A).
- Se paga en **dos exhibiciones de 50% (USD $2,425.00 más IVA cada una; MXN $43,165.00)**: la factura de cada mitad se entrega al iniciar sus trabajos y el pago es exigible contra la entrega aprobada de la mitad de los entregables y contra la entrega total, respectivamente (Contrato, Cláusula Tercera).
- El BDS **no genera iguala propia**: su mantenimiento y soporte quedan incluidos, sin costo adicional, en la iguala mensual del Proyecto A (Contrato, Cláusula Segunda, Sección A).
- **Plazo de desarrollo y entrega: 8 (ocho) semanas**, contadas a partir de la firma de este Addendum y del cierre del alcance y del listado de requerimientos. El Proyecto B **se ejecuta en paralelo al Proyecto A**, sin modificar su cronograma: los componentes que reutiliza (consola, middleware, cuestionario) quedan operativos desde las Semanas 3–6 del cronograma del sitio (**[Plan de Ejecución · §10](#execution:10-proyecto-b-bds-marco-de-ejecucin)**), por lo que el arranque del BDS no depende del lanzamiento del sitio. El retraso de EL CLIENTE en las aportaciones de la sección 4 extiende el plazo día por día (Contrato, Cláusula Sexta).

## 6 · Naturaleza y garantías

- **Condición de precio:** el precio del BDS asume su **aprobación simultánea al Proyecto A**; de no aprobarse en forma simultánea, deberá recalcularse antes de la firma de este Addendum (Contrato, Cláusula Segunda, Sección IV).
- El BDS es un **alcance independiente**; su suscripción no modifica el Proyecto A. En tanto no se firme este Addendum, el Proyecto B **no genera obligación ni costo** para ninguna de las Partes.
- EL PRESTADOR **no garantiza** tasas de conversión ni volúmenes de agendamiento o de membresías: dependen de factores comerciales y de mercado. Lo comprometido es la **funcionalidad** del sistema y su **medición**.
