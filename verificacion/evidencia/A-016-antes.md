# A-016 · Enrutamiento en WhatsApp · evidencia ANTES de corregir

**Fuente:** NotebookLM, sobre el cuaderno de 49 fuentes del proyecto.
**Fecha:** 31 de agosto de 2026.
**Pregunta formulada:** «En el canal de WhatsApp, ¿cuál es la regla de enrutamiento según los documentos: atiende primero un operador humano y BES queda como respaldo, o atiende primero BES y el operador humano entra sólo por escalamiento o a petición del usuario? Enumera TODOS los documentos donde aparezca esa regla, sin excluir los que sólo la mencionen de paso o en una tabla, y transcribe de cada uno la frase textual donde aparece.»

---

## Respuesta de NotebookLM, íntegra

Aquí tienes la recopilación completa de los 12 documentos principales (e incluyendo las fuentes de auditoría y resúmenes de soporte) que contienen, contraponen o definen las reglas de enrutamiento de WhatsApp (human-first vs. BES-first).

**1. bds-anexo.es.md (BDS · Addendum contractual)**
Establece de manera contractual el modelo híbrido del Proyecto B.
- Frase textual: "Capa de enrutamiento en tiempo real (human-first → "BES" de respaldo → escalación; colas, asignación, rebote)".

**2. bds-canales.es.md (BDS · Canales, enrutamiento y SLA de contacto)**
Define la regla operativa de "human-first" detallando las colas de atención y horarios.
- Frase textual (en tabla de Canales): "WhatsApp | Operador humano (primero) o "BES" (respaldo) | Texto, tiempo real".
- Frase textual (en Reglas de enrutamiento): "1. Human-first. Todo lead conversacional se ofrece primero a un operador humano disponible y en horario.".

**3. bds-tecnica.es.md (BDS · Estrategia Técnica)**
Explica cómo la capa técnica de decisión de enrutamiento debe procesar cada lead entrante.
- Frase textual: "Decide, por cada lead entrante, quién atiende según las reglas de Canales y enrutamiento (human-first → "BES" de respaldo → escalación).".

**4. bds-flujo.es.md (BDS · Flujo de conversión)**
Detalla el árbol lógico de enrutamiento secuencial y su regla de oro de "cero espera".
- Frase textual: "El árbol de enrutamiento (human-first con respaldo de 'BES')".

**5. bds-medicion.es.md (BDS · Medición y funnel)**
Fija la métrica del tiempo de primer contacto y cómo se divide según el tipo de atención.
- Frase textual: "Por horario: dentro de horario (human-first) vs. fuera de horario ('BES').".

**6. bds-resumen.es.md (Business Development System (BDS) · Resumen Ejecutivo)**
Presenta la tesis del Proyecto B (BDS) para atajar la latencia en el primer contacto digital.
- Frase textual: "...bajo un modelo human-first con IA de respaldo...".
- Frase textual: "El lead se enruta primero a un operador humano por WhatsApp (atención en tiempo real).".

**7. sop-0101.html (Captación por WhatsApp · SOP/SW/0101 · Sports World)**
Fija el procedimiento operativo oficial del canal de WhatsApp, determinando que BES atiende primero.
- Frase textual: "El asistente conversacional atiende la totalidad de las conversaciones entrantes. No hay cola de espera, no hay reparto entre operadores y no hay diferencia entre horario y fuera de horario. La intervención de una persona es una escalación, no el punto de partida.".

**8. entrevistas-campo.es.md (Entrevistas de Campo · Reporte de Hallazgos)**
Contrasta los problemas de latencia digital del campo comercial con la solución planteada en el sistema.
- Frase textual: "Latencia de respuesta al lead digital | Speed-to-lead en tiempo real (Proyecto B): human-first con BES de respaldo 24/7, medido por canal y operador.".

**9. mpc-01.html (Manual del Proceso Comercial · MPC/SW/01 · Sports World)**
Especifica la correspondencia de los procedimientos de captación y el rol de BES por WhatsApp.
- Frase textual: "SOP/SW/0101 WhatsApp oficial: ... El asistente conduce el cuestionario y escala a una persona solo cuando no puede responder algo, en horario de oficina.".

**10. glosario.es.md (Sports World México · Glosario · V1.0)**
Define formalmente el concepto de "human-first" como término de negocio del proyecto.
- Frase textual: "human-first | Regla de enrutamiento del BDS: al lead lo atiende primero un operador humano; 'BES' entra como respaldo automático cuando no hay operador disponible, con escalación de vuelta al humano.".

**11. execution.es.md (Sports World México · Plan de Ejecución · V2.2)**
Establece los frentes de trabajo y la secuencia de entrega para el Equipo 5 (BDS).
- Frase textual: "...se construye la capa de enrutamiento (human-first → 'BES' de respaldo → escalación).".

**12. contrato.es.md (Sports World · Contrato de Prestación de Servicios Profesionales y Consultoría)**
Contrato marco de prestación de servicios profesionales donde se enuncia el alcance del Proyecto B.
- Frase textual: "...capa de enrutamiento en tiempo real (human-first → "BES" de respaldo → escalación)...".

**Fuentes adicionales que registran o resuelven la contradicción:**

- **resumen.es.md** (Sports World México · Resumen Ejecutivo · V1.0):
  - Frase textual: "...leads de campañas atendidos por operadores humanos en tiempo real, con BES por WhatsApp (solo texto) de respaldo 24/7...".
  - Frase textual: "El lead se enruta primero a un operador humano por WhatsApp, en tiempo real. Si no hay operador disponible o es fuera de horario, 'BES' por WhatsApp (solo texto) atiende, aplica el cuestionario y agenda.".
- **auditoria-completa.txt** (Documento de Auditoría):
  - Frase textual: "El enrutamiento se contradice: BDS es human-first; el SOP 0101 es BES-first.".
  - Frase textual: "WhatsApp es sólo texto, siempre BES-first; atención humana únicamente por escalamiento o petición del usuario.".
  - Frase de decisión final: "BES atiende primero en WhatsApp y opera solo por texto. La atención humana ocurre únicamente a solicitud expresa del usuario o por una política de escalamiento aprobada.".

---

## Comprobación de las citas contra los archivos

Las frases que NotebookLM atribuye a los dos documentos del Proceso Comercial se localizaron textualmente en el repositorio:

- `proceso/sop-0101.html` — «atiende la totalidad de las conversaciones entrantes» y «La intervención de una persona es una escalación, no el punto de partida»: **presentes**.
- `proceso/mpc-01.html` — «escala a una persona solo cuando no puede responder algo»: **presente**.
- `docs/glosario.es.md` — «Regla de enrutamiento del BDS: al lead lo atiende primero un operador humano»: **presente**.

Ninguno de los dos documentos del Proceso Comercial usa el término «human-first» (0 apariciones en ambos): describen la regla contraria con otras palabras. Por eso una búsqueda literal del término no los encuentra.

## Diferencia con el barrido mecánico

El barrido por el término «human-first» sobre las fuentes del cuaderno arroja **12 documentos**. NotebookLM nombró 11 de esos 12 y omitió `indice.es.md`, cuya mención se verificó en el archivo: «Reglas human-first, respaldo con BES, horarios y SLA de contacto».

A cambio, NotebookLM aportó **los dos documentos que sostienen la regla contraria** —`sop-0101.html` y `mpc-01.html`—, que ninguna búsqueda del término podía encontrar porque no lo contienen.

## Alcance real del hallazgo A-016

La contradicción no es de doce documentos, sino de **quince**:

- **12 afirman human-first:** bds-anexo, bds-canales, bds-flujo, bds-medicion, bds-resumen, bds-tecnica, contrato, entrevistas-campo, execution, glosario, indice, resumen.
- **2 afirman BES-first:** sop-0101 y mpc-01 — es decir, el procedimiento operativo del canal y el proceso maestro que lo gobierna.
- **1 registra la contradicción:** el documento de auditoría.

La decisión vigente es BES-first. Los doce primeros son los que deben corregirse; los dos del Proceso Comercial ya están conformes. Uno de los doce es el Contrato, por lo que la corrección de ese documento queda sujeta a autorización y al paquete legal.
