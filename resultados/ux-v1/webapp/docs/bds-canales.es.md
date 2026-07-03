# BDS · Canales, enrutamiento y SLA de contacto
## Reglas operativas del engagement en tiempo real

> **Proyecto B (BDS).** Define cómo se asignan los leads, en qué orden, con qué tiempos y quién los atiende. El KPI que gobierna todo es el **tiempo al primer contacto** (*speed-to-lead*).

## Canales

| Canal | Quién atiende | Modo |
|---|---|---|
| **WhatsApp** | Operador humano (primero) o "BES" (respaldo) | Texto, tiempo real |
| **Consola interna** | Operadores y asesores de club | Texto/asistido, presencial o remoto |
| **Web / "BES" web** | "BES" (voz y texto) | Canal del Proyecto A, alimenta el mismo pipeline |

El BDS opera principalmente sobre **WhatsApp** (donde ya están los usuarios de campañas) y la **consola interna** (operadores y walk-ins).

## Reglas de enrutamiento

1. **Human-first.** Todo lead conversacional se ofrece **primero a un operador humano** disponible y en horario.
2. **Asignación.** El lead se asigna por **cola** (por club/zona y por disponibilidad); si el usuario indicó un club, se prioriza la cola de ese club.
3. **Respaldo automático con "BES".** Si no hay operador disponible **o** es fuera de horario, **"BES" (WhatsApp, solo texto)** toma la conversación **de inmediato**, sin espera.
4. **Escalación a humano.** "BES" transfiere a un operador (o agenda devolución de llamada) cuando el usuario lo pide o el caso lo amerita, **conservando el contexto** ya capturado.
5. **Continuidad.** Si un operador no responde dentro del umbral de asignación, el lead **rebota** a otro operador o a "BES", para que **nunca quede sin atender**.
6. **Sin duplicados.** Cualquiera que atienda escribe al CRM por la **misma vía idempotente**; si el lead ya existía, se actualiza (no se duplica).

## Horarios y disponibilidad

- **Horario de operadores:** definido por Sports World (por ejemplo, horario hábil ampliado). Dentro de ese horario, **human-first**.
- **Fuera de horario:** cobertura **24/7 por "BES"**, que atiende y agenda; los casos que requieran humano se **encolan** para el siguiente turno con el contexto ya levantado.
- **Presencia de operadores:** el sistema conoce qué operadores están **en línea y disponibles** para asignar en tiempo real.

## SLA de contacto (el corazón del BDS)

El objetivo es colapsar el **tiempo al primer contacto** de "horas o días" a **segundos o minutos**:

| Métrica | Objetivo |
|---|---|
| **Primer contacto (operador humano, en horario)** | En **segundos** desde que entra el lead (asignación inmediata) |
| **Primer contacto ("BES", fuera de horario o sin operador)** | **Inmediato** (respuesta automática) |
| **Rebote de asignación** (operador no responde) | Reasignar en un **umbral corto** definido con Sports World |
| **Escalación "BES" → humano** | Transferencia con contexto, sin re-preguntar |

Estos umbrales exactos se afinan con Sports World en el arranque, según el número de operadores y el volumen de campañas. Lo que **no** es negociable es el principio: **cero lead sin atención inmediata**.

## Responsabilidades

- **Sports World** provee el **número oficial de WhatsApp Business**, la **plantilla de operadores** y sus **horarios**, y la **lista de personal autorizado** de la consola.
- **El proveedor** provee el enrutamiento, la integración con WhatsApp Business API, "BES" por WhatsApp y la consola, y la medición.

El detalle técnico está en la **[Estrategia Técnica del BDS](#bds-tecnica)**.
