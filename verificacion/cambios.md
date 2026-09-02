# Cambios del depósito desde la base de la auditoría

Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. Es el registro de **toda**
diferencia entre el commit `90a1ede` (28 de agosto de 2026) y el texto vigente, línea por línea.

Sirve para lo que el cuaderno 3 tiene que confirmar: que los cambios hechos son exactamente
los autorizados, ni uno más. Una edición que no aparezca aquí no ocurrió; una que aparezca
aquí y no corresponda a un hallazgo cerrado es una edición no autorizada.

**13 de 31 documentos cambiaron**, con 26 cambios en total.

## bds-anexo.es.md — 2 cambios

**Original, línea 14 · vigente, línea 14**

```diff
- - **"BES" sobre WhatsApp (solo texto)** como respaldo automático 24/7, con escalación a operador humano.
+ - **"BES" sobre WhatsApp (solo texto)** como **atención inicial 24/7 de toda conversación entrante**, con escalación a operador humano.
```

**Original, línea 16 · vigente, línea 16**

```diff
- - **Capa de enrutamiento en tiempo real** (human-first → "BES" de respaldo → escalación; colas, asignación, rebote).
+ - **Capa de enrutamiento en tiempo real** (atiende "BES" → escalamiento a operador a petición del usuario o por política aprobada → devolución de llamada fuera de horario; colas, asignación, reencolado).
```

## bds-canales.es.md — 4 cambios

**Original, línea 10 · vigente, línea 10**

```diff
- | **WhatsApp** | Operador humano (primero) o "BES" (respaldo) | Texto, tiempo real |
+ | **WhatsApp** | "BES" (primero); operador humano por escalamiento | Texto, tiempo real |
```

**Original, línea 18 · vigente, línea 18**

```diff
- 1. **Human-first.** Todo lead conversacional se ofrece **primero a un operador humano** disponible y en horario.
- 2. **Asignación.** El lead se asigna por **cola** (por club/zona y por disponibilidad); si el usuario indicó un club, se prioriza la cola de ese club.
- 3. **Respaldo automático con "BES".** Si no hay operador disponible **o** es fuera de horario, **"BES" (WhatsApp, solo texto)** toma la conversación **de inmediato**, sin espera.
- 4. **Escalación a humano.** "BES" transfiere a un operador (o agenda devolución de llamada) cuando el usuario lo pide o el caso lo amerita, **conservando el contexto** ya capturado.
- 5. **Continuidad.** Si un operador no responde dentro del umbral de asignación, el lead **rebota** a otro operador o a "BES", para que **nunca quede sin atender**.
+ 1. **"BES" primero.** Toda conversación de WhatsApp la inicia **"BES" (solo texto)**, de inmediato y sin espera. No hay cola de asignación previa, ni diferencia entre horario y fuera de horario: la persona recibe respuesta desde el primer mensaje.
+ 2. **El humano entra por escalamiento.** Un operador toma la conversación **cuando el usuario lo pide expresamente**, cuando el caso cae en una **excepción o riesgo**, o cuando lo dispara una **política de escalamiento aprobada** por Sports World. Nunca como punto de partida.
+ 3. **Traspaso con contexto.** Al escalar, el operador recibe lo ya capturado —identidad, experiencia en curso, consentimiento, club, intención y pendientes— y **continúa desde ahí**: no vuelve a preguntar lo que la persona ya contestó.
+ 4. **Fuera de horario o sin operador disponible.** El escalamiento se convierte en **devolución de llamada agendada**, por WhatsApp o por teléfono, con su responsable y su fecha comprometida. La conversación con "BES" continúa mientras tanto.
+ 5. **Continuidad.** Ningún escalamiento queda sin dueño: si nadie lo toma dentro del umbral, se reencola y se registra el motivo. **Cero conversaciones sin atención.**
```

**Original, línea 27 · vigente, línea 27**

```diff
- - **Horario de operadores:** definido por Sports World (por ejemplo, horario hábil ampliado). Dentro de ese horario, **human-first**.
- - **Fuera de horario:** cobertura **24/7 por "BES"**, que atiende y agenda; los casos que requieran humano se **encolan** para el siguiente turno con el contexto ya levantado.
- - **Presencia de operadores:** el sistema conoce qué operadores están **en línea y disponibles** para asignar en tiempo real.
+ - **Atención de "BES":** **24/7**, en todo horario. No hay franja en la que la persona quede sin respuesta.
+ - **Horario de operadores:** definido por Sports World (por ejemplo, horario hábil ampliado). Determina **cuándo un escalamiento se atiende en vivo** y cuándo se convierte en devolución de llamada; no determina quién atiende primero.
+ - **Fuera de horario:** los escalamientos se **agendan como devolución de llamada** para el siguiente turno, con el contexto ya levantado.
+ - **Presencia de operadores:** el sistema conoce qué operadores están **en línea y disponibles** para recibir escalamientos en tiempo real.
```

**Original, línea 37 · vigente, línea 38**

```diff
- | **Primer contacto (operador humano, en horario)** | En **segundos** desde que entra el lead (asignación inmediata) |
- | **Primer contacto ("BES", fuera de horario o sin operador)** | **Inmediato** (respuesta automática) |
- | **Rebote de asignación** (operador no responde) | Reasignar en un **umbral corto** definido con Sports World |
- | **Escalación "BES" → humano** | Transferencia con contexto, sin re-preguntar |
+ | **Primer contacto ("BES", todo horario)** | **Inmediato**, desde el primer mensaje |
+ | **Escalamiento "BES" → operador, en horario** | Toma en vivo dentro de un **umbral corto** definido con Sports World |
+ | **Escalamiento fuera de horario o sin operador** | **Devolución de llamada agendada**, con responsable y fecha comprometida |
+ | **Traspaso al operador** | Con contexto completo, sin re-preguntar lo ya contestado |
```

## bds-flujo.es.md — 4 cambios

**Original, línea 26 · vigente, línea 26**

```diff
- ## El árbol de enrutamiento (human-first con respaldo de "BES")
+ ## El árbol de enrutamiento ("BES" primero, con escalamiento a operador)
```

**Original, línea 28 · vigente, línea 28**

```diff
- Cuando entra un lead que requiere atención conversacional (orígenes 1, 2 y 4), el sistema evalúa, **en este orden**:
+ Cuando entra un lead que requiere atención conversacional (orígenes 1, 2 y 4), el sistema procede **en este orden**:
```

**Original, línea 30 · vigente, línea 30**

```diff
- 1. **¿Hay un operador humano disponible y en horario de atención?**
-    - **Sí →** se asigna a un **operador humano por WhatsApp**, que aplica el cuestionario y agenda en tiempo real.
-    - **No →** siguiente paso.
- 2. **¿Está fuera de horario, o todos los operadores están ocupados?**
-    - **Sí →** **"BES" por WhatsApp (solo texto)** atiende de inmediato: aplica el cuestionario, arma la experiencia ideal y agenda la visita.
- 3. **Escalación.** Durante una conversación de "BES", si el usuario lo pide o el caso lo amerita, "BES" **transfiere al operador humano** (o agenda una devolución de llamada), sin perder el contexto ya capturado.
+ 1. **"BES" atiende, siempre.** **"BES" por WhatsApp (solo texto)** toma la conversación de inmediato, en todo horario y sin espera: aplica el cuestionario, arma la experiencia ideal y agenda la visita. No se consulta si hay operadores disponibles, porque la disponibilidad no condiciona el primer contacto.
+ 2. **¿El usuario pide hablar con una persona, el caso cae en una excepción o riesgo, o lo dispara una política de escalamiento aprobada?**
+    - **Sí →** se escala a un **operador humano**, que recibe el contexto ya capturado y continúa desde ahí.
+    - **No →** "BES" completa la conversación y cierra con la visita agendada.
+ 3. **Fuera del horario de operadores, o sin operador disponible.** El escalamiento se convierte en **devolución de llamada agendada**, con responsable y fecha; la conversación con "BES" continúa mientras tanto.
```

**Original, línea 39 · vigente, línea 38**

```diff
- > **Regla de oro:** ningún lead se queda sin atención inmediata. Si no hay humano, hay "BES"; si "BES" no basta, escala a humano. El objetivo es **cero espera**.
+ > **Regla de oro:** ningún lead se queda sin atención inmediata. La primera respuesta es siempre de "BES"; la persona entra cuando el usuario la pide o el caso lo exige. El objetivo es **cero espera**.
```

## bds-medicion.es.md — 1 cambio

**Original, línea 26 · vigente, línea 26**

```diff
- - **Por horario:** dentro de horario (human-first) vs. fuera de horario ("BES").
+ - **Por horario:** el primer contacto lo hace "BES" en todo horario; lo que se separa por franja es el **escalamiento** — atendido en vivo dentro de horario, o convertido en devolución de llamada fuera de él.
```

## bds-resumen.es.md — 3 cambios

**Original, línea 19 · vigente, línea 19**

```diff
- El **BDS** reemplaza el "formulario + llamada tardía" por un **engagement inmediato**, en el canal donde el usuario ya está (**WhatsApp**), aplicando **el mismo cuestionario** de experiencia ideal que ya desarrollamos, bajo un modelo **human-first con IA de respaldo**, y **agendando la visita en el momento**:
+ El **BDS** reemplaza el "formulario + llamada tardía" por un **engagement inmediato**, en el canal donde el usuario ya está (**WhatsApp**), aplicando **el mismo cuestionario** de experiencia ideal que ya desarrollamos, bajo un modelo en el que **"BES" atiende primero y el operador humano entra por escalamiento**, y **agendando la visita en el momento**:
```

**Original, línea 22 · vigente, línea 22**

```diff
- - El lead se enruta **primero a un operador humano por WhatsApp** (atención en tiempo real).
- - Si **no hay operador disponible** o es **fuera de horario**, **"BES" por WhatsApp (solo texto)** atiende, aplica el cuestionario y agenda.
+ - La conversación de WhatsApp la **inicia siempre "BES" (solo texto)**, de inmediato y en todo horario: aplica el cuestionario y agenda.
+ - El **operador humano entra por escalamiento** —a petición expresa del usuario, por excepción o por política aprobada—, con el contexto ya capturado. Fuera de horario, ese escalamiento se agenda como devolución de llamada.
```

**Original, línea 48 · vigente, línea 48**

```diff
- | [**Canales, enrutamiento y SLA**](#bds-canales) | Reglas human-first, respaldo con "BES", horarios y el SLA de contacto |
+ | [**Canales, enrutamiento y SLA**](#bds-canales) | Reglas de atención con "BES" primero, escalamiento a operador, horarios y el SLA de contacto |
```

## bds-tecnica.es.md — 2 cambios

**Original, línea 27 · vigente, línea 27**

```diff
- - Actúa como **respaldo** del operador humano: atiende de inmediato cuando no hay operador disponible o es fuera de horario.
+ - Es la **atención inicial** de toda conversación entrante: responde de inmediato, en todo horario, sin depender de que haya operadores disponibles.
```

**Original, línea 41 · vigente, línea 41**

```diff
- - Decide, por cada lead entrante, **quién atiende** según las reglas de **[Canales y enrutamiento](#bds-canales)** (human-first → "BES" de respaldo → escalación).
+ - Decide, por cada lead entrante, **quién atiende** según las reglas de **[Canales y enrutamiento](#bds-canales)** (atiende "BES" → escalamiento a operador a petición del usuario o por política aprobada → devolución de llamada fuera de horario).
```

## contrato.es.md — 1 cambio

**Original, línea 76 · vigente, línea 76**

```diff
- **CUARTA. Alcance del Proyecto B — Business Development System (BDS).** *Sistema de captación y conversión de leads multicanal en tiempo real.* EL PRESTADOR desarrolla e integra para EL CLIENTE un sistema (el **"BDS"**) que reduce el **tiempo al primer contacto** atendiendo a los prospectos en **WhatsApp** y en la **consola interna**, con el **mismo cuestionario de experiencia ideal y la misma escritura al CRM del Proyecto A**, mediante: **(i)** landing de campañas con el cuestionario de experiencia ideal; **(ii)** integración con **WhatsApp Business API** (número oficial de EL CLIENTE) para mensajería bidireccional, plantillas y multiagente; **(iii)** **"BES" sobre WhatsApp (solo texto)** como respaldo automático 24/7, con escalación a operador humano; **(iv)** consola de operadores/asesores (rol de operador sobre la consola interna del Proyecto A); **(v)** capa de enrutamiento en tiempo real (human-first → "BES" de respaldo → escalación); y **(vi)** la medición del Canal de WhatsApp y del tiempo al primer contacto, integrada al **mismo funnel de resultados y dashboard del Proyecto A** —el BDS no constituye un funnel independiente—. Quedan **excluidas** la **telefonía** y la **voz por WhatsApp**. El detalle funcional, las exclusiones específicas y las aportaciones a cargo de EL CLIENTE constan en el **Addendum del BDS**, documento que desarrolla —sin modificar— el alcance aquí pactado. **Plazo de desarrollo y entrega: 8 (ocho) semanas**, contadas a partir de la suscripción del Addendum del BDS y del cierre del listado de requerimientos; el Proyecto B **se ejecuta en paralelo al Proyecto A**, sin modificar el cronograma de éste, y el retraso de EL CLIENTE en sus aportaciones extiende el plazo día por día (Cláusula Décima Tercera). **Contraprestación:** Cláusula Octava, Sección B. **Mantenimiento:** el mantenimiento y soporte del BDS, una vez activado, queda comprendido **sin costo adicional** en la iguala mensual del Proyecto A (Cláusula Sexta).
+ **CUARTA. Alcance del Proyecto B — Business Development System (BDS).** *Sistema de captación y conversión de leads multicanal en tiempo real.* EL PRESTADOR desarrolla e integra para EL CLIENTE un sistema (el **"BDS"**) que reduce el **tiempo al primer contacto** atendiendo a los prospectos en **WhatsApp** y en la **consola interna**, con el **mismo cuestionario de experiencia ideal y la misma escritura al CRM del Proyecto A**, mediante: **(i)** landing de campañas con el cuestionario de experiencia ideal; **(ii)** integración con **WhatsApp Business API** (número oficial de EL CLIENTE) para mensajería bidireccional, plantillas y multiagente; **(iii)** **"BES" sobre WhatsApp (solo texto)** como **atención inicial 24/7 de toda conversación entrante**, con escalación a operador humano; **(iv)** consola de operadores/asesores (rol de operador sobre la consola interna del Proyecto A); **(v)** capa de enrutamiento en tiempo real (atiende "BES" → escalación a operador humano a petición expresa del usuario o por política de escalamiento aprobada por EL CLIENTE → devolución de llamada agendada fuera del horario de operadores); y **(vi)** la medición del Canal de WhatsApp y del tiempo al primer contacto, integrada al **mismo funnel de resultados y dashboard del Proyecto A** —el BDS no constituye un funnel independiente—. Quedan **excluidas** la **telefonía** y la **voz por WhatsApp**. El detalle funcional, las exclusiones específicas y las aportaciones a cargo de EL CLIENTE constan en el **Addendum del BDS**, documento que desarrolla —sin modificar— el alcance aquí pactado. **Plazo de desarrollo y entrega: 8 (ocho) semanas**, contadas a partir de la suscripción del Addendum del BDS y del cierre del listado de requerimientos; el Proyecto B **se ejecuta en paralelo al Proyecto A**, sin modificar el cronograma de éste, y el retraso de EL CLIENTE en sus aportaciones extiende el plazo día por día (Cláusula Décima Tercera). **Contraprestación:** Cláusula Octava, Sección B. **Mantenimiento:** el mantenimiento y soporte del BDS, una vez activado, queda comprendido **sin costo adicional** en la iguala mensual del Proyecto A (Cláusula Sexta).
```

## entrevistas-campo.es.md — 1 cambio

**Original, línea 48 · vigente, línea 48**

```diff
- | Latencia de respuesta al lead digital | **Speed-to-lead en tiempo real** (Proyecto B): human-first con BES de respaldo 24/7, medido por canal y operador. |
+ | Latencia de respuesta al lead digital | **Speed-to-lead en tiempo real** (Proyecto B): BES atiende de inmediato 24/7 y el operador entra por escalamiento; se mide por canal y operador. |
```

## execution.es.md — 1 cambio

**Original, línea 230 · vigente, línea 230**

```diff
- 2. **Integración.** Se conecta la WhatsApp Business API; se habilita el rol de operador en la consola interna; se construye la capa de enrutamiento (human-first → "BES" de respaldo → escalación).
+ 2. **Integración.** Se conecta la WhatsApp Business API; se habilita el rol de operador en la consola interna; se construye la capa de enrutamiento (atiende "BES" → escalamiento a operador a petición del usuario o por política aprobada → devolución de llamada fuera de horario).
```

## gastos-operativos.es.md — 2 cambios

**Original, línea 35 · vigente, línea 35**

```diff
- | — atendidos por "BES" texto como respaldo (~60%) | ~600 | ~1,500 | ~3,000 |
+ | — atendidos por "BES" texto (supuesto heredado del ~60%; ver nota) | ~600 | ~1,500 | ~3,000 |
```

**Original, línea 42 · vigente, línea 42**

```diff
+ > **Nota sobre el supuesto del ~60%.** Ese porcentaje se fijó bajo la regla anterior de enrutamiento, en la que "BES" sólo entraba fuera del horario de operadores. Con la regla vigente —**"BES" atiende toda conversación entrante de WhatsApp, en todo horario**— la proporción real tiende al 100%, y el costo de mensajería y de modelo de este renglón **debe recalcularse al alza** antes de comprometer presupuesto. La cifra se conserva como estaba hasta que Sports World valide el nuevo supuesto: no se sustituye por una estimación no acordada.
+ 
```

## glosario.es.md — 1 cambio

**Original, línea 42 · vigente, línea 42**

```diff
- | **human-first** | Regla de enrutamiento del BDS: al lead lo atiende primero un operador humano; "BES" entra como respaldo automático cuando no hay operador disponible, con escalación de vuelta al humano. |
+ | **BES primero** | Regla de enrutamiento del BDS en WhatsApp: toda conversación la inicia "BES", en todo horario y sin espera. El operador humano entra por **escalamiento** —a petición expresa del usuario, por excepción o riesgo, o por una política aprobada por Sports World—, nunca como punto de partida. Fuera de horario, el escalamiento se convierte en devolución de llamada agendada. |
```

## indice.es.md — 1 cambio

**Original, línea 77 · vigente, línea 77**

```diff
- | B3 | [**BDS · Canales y enrutamiento**](#bds-canales) | Reglas human-first, respaldo con BES, horarios y SLA de contacto. | Operación, Sistemas |
+ | B3 | [**BDS · Canales y enrutamiento**](#bds-canales) | Reglas de atención con BES primero, escalamiento a operador, horarios y SLA de contacto. | Operación, Sistemas |
```

## resumen.es.md — 3 cambios

**Original, línea 39 · vigente, línea 39**

```diff
- - **Proyecto B · Business Development System (alcance y costo aparte).** Extiende el **mismo** cuestionario y la **misma** experiencia ideal a **WhatsApp**: leads de campañas atendidos por **operadores humanos** en tiempo real, con **BES por WhatsApp (solo texto)** de respaldo 24/7, más el **rol de operador sobre la consola interna del Proyecto A** para asesores y walk-ins. Ver **[BDS · Resumen Ejecutivo](#bds-resumen)**.
+ - **Proyecto B · Business Development System (alcance y costo aparte).** Extiende el **mismo** cuestionario y la **misma** experiencia ideal a **WhatsApp**: leads de campañas atendidos por **"BES" en WhatsApp (solo texto)** desde el primer mensaje, en todo horario, con **escalamiento a operador humano** cuando el usuario lo pide o el caso lo exige, más el **rol de operador sobre la consola interna del Proyecto A** para asesores y walk-ins. Ver **[BDS · Resumen Ejecutivo](#bds-resumen)**.
```

**Original, línea 158 · vigente, línea 158**

```diff
- El BDS reemplaza el "formulario + llamada tardía" por un **engagement inmediato en WhatsApp**, aplicando **el mismo cuestionario** de experiencia ideal, bajo un modelo **human-first con IA de respaldo**:
+ El BDS reemplaza el "formulario + llamada tardía" por un **engagement inmediato en WhatsApp**, aplicando **el mismo cuestionario** de experiencia ideal, bajo un modelo en el que **"BES" atiende primero y el operador humano entra por escalamiento**:
```

**Original, línea 161 · vigente, línea 161**

```diff
- - El lead se enruta **primero a un operador humano por WhatsApp**, en tiempo real.
- - Si **no hay operador disponible** o es **fuera de horario**, **"BES" por WhatsApp (solo texto)** atiende, aplica el cuestionario y agenda.
+ - La conversación de WhatsApp la **inicia siempre "BES" (solo texto)**, de inmediato y en todo horario: aplica el cuestionario y agenda.
+ - El **operador humano entra por escalamiento** —a petición expresa del usuario, por excepción o por política aprobada—, con el contexto ya capturado. Fuera de horario, ese escalamiento se agenda como devolución de llamada.
```

## Documentos sin cambios

- `academia-anexo.es.md`
- `academia-contenido.es.md`
- `academia-fases.es.md`
- `academia-medicion.es.md`
- `academia-produccion.es.md`
- `academia-resumen.es.md`
- `academia-tecnica.es.md`
- `aportaciones.es.md`
- `auditoria.es.md`
- `experience.es.md`
- `funnel.es.md`
- `integracion.es.md`
- `minuta-2026-06-22.es.md`
- `roi.es.md`
- `seguimiento-2026-06-22.es.md`
- `seguridad.es.md`
- `technical.es.md`
- `workshop-discovery.es.md`
