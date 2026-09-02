# Registro de correcciones

Qué se corrigió, en qué documento, por qué, y con qué evidencia. `cambios.md` dice
**qué líneas** cambiaron; este archivo dice **por qué** y **con qué autoridad**. Los dos
juntos son lo que se le entrega al cuaderno 3 para la verificación por pares.

**No se edita a mano un `-MOD` sin agregar aquí su entrada.** La regla **R24** de
`tools/consistencia.js` falla si un documento tiene diferencias contra su original y
no está registrado aquí, si cita un hallazgo que no existe en `hallazgos.csv`, o si el
número de cambios declarado no coincide con el que el generador contó. Es lo que
convierte «no hubo ediciones no autorizadas» en algo que se comprueba, no que se
afirma.

## Índice

| Documento | Hallazgos | Cambios |
|---|---|---|
| experience | A-021, A-022, A-023 | 7 |

---

## experience · A-021, A-022, A-023

**Qué decía la auditoría.**

- **A-021** (crítica, contradicción) — «El proceso prohíbe salud en captación digital,
  pero la arquitectura UX la pregunta y usa.»
- **A-022** (crítica, consentimiento) — «La experiencia digital procesa datos sensibles
  antes de mostrar el consentimiento/contacto.»
- **A-023** (crítica, privacidad) — «El primer cruce de salud se guarda en el Brief
  comercial, contra la segregación declarada.»

**Las dos caras de la contradicción, textuales.**

El Proceso Comercial ya fijaba la regla correcta, en `MPC/SW/01 §8.4`:

> «Por medios electrónicos no se recaba información de salud. Ni el cuestionario, ni el
> asistente conversacional, ni el sitio preguntan por condiciones médicas. El
> cuestionario pregunta por objetivos e intereses —incluidos programas prenatales o de
> posparto—, que no son diagnóstico ni estado de salud. […] La información de salud se
> recaba en persona, en la visita guiada y en la valoración física, que es donde puede
> obtenerse consentimiento expreso y por escrito. […] Sin autorización firmada no se
> aplica el cuestionario de salud ni se corre la matriz de contraindicaciones.»

Y la arquitectura de experiencia hacía exactamente lo contrario. NotebookLM lo
transcribió de `experience` y del código del cuestionario:

> `"Q12 | Condiciones médicas | multi-select | Filtra de forma estricta el catálogo de
> clases mediante la matriz de contraindicaciones."`
>
> `{ id: "Q12", label: "¿Tienes alguna condición médica?", options: ["Ninguna", "Lesión
> o dolor articular/muscular", "Condición cardiovascular o de presión", "Otra, la
> comento en el club"] }`
>
> `{ id: "Q12b", label: "¿Estás embarazada o en posparto reciente?", options: ["Sí,
> embarazada", "Sí, posparto reciente (últimos 6 meses)", "No"] }`
>
> `{ id: "Q17", label: "¿Estás tomando algún tratamiento para bajar de peso?", options:
> ["GLP-1 (Ozempic, Wegovy, Mounjaro)", "Cirugía bariátrica", …] }`

Sobre el consentimiento, el propio código declaraba el orden invertido:

> «Se asume la aceptación implícita al avanzar en el cuestionario de experiencia y se
> recaba formalmente el consentimiento en la fase de captura de contacto.»

Y sobre la segregación, dos frases que no pueden ser ciertas a la vez:

> `seguridad`: «La base de datos del funnel […] **no almacena conversaciones, respuestas
> médicas ni contenido del cuestionario**.»
>
> `experience`: el asesor «ve los datos de salud e indicación médica de manera
> estructurada en la Página 2 del dossier de `briefing` antes de la visita guiada».

**Qué se corrigió, cambio por cambio.**

| # | Línea | Qué cambió |
|---|---|---|
| 1 | 139 | La fila de **Q2** deja de decir «También habilita Q12b». |
| 2 | 141 | La fila de **Q4** deja de decir «También habilita Q17, Q18, Q19». |
| 3 | 148 | **Q12** deja de ser «Condiciones médicas» con filtro estricto por matriz de contraindicaciones, y pasa a ser **«Programas de interés»**: preferencia declarada —bajo impacto, prenatal o posparto, acompañamiento nutricional, movilidad guiada— que pondera el ranking y se lleva al brief como interés. **No filtra el catálogo ni activa ninguna matriz clínica.** |
| 4 | 152 | El encabezado de las condicionales pasa de **«Preguntas condicionales (6)»** a **«(2)»**. |
| 5 | 156 | Se retira la fila de **Q12b** (estado de embarazo y posparto). |
| 6 | 158–160 | Se retiran las filas de **Q17** (tratamientos activos: GLP-1, cirugía bariátrica), **Q18** (peso, estatura, cintura) y **Q19** (meta de cambio de peso). |
| 7 | 161 | Se agrega el apartado **«Lo que el cuestionario digital no pregunta, y por qué»**, con el fundamento legal, lo que Q12 sí pregunta, y dónde se recaba la salud. |

**Por qué así, y no de otra forma.**

El fundamento no es una preferencia editorial. El artículo 2, fracción VI de la LFPDPPP
clasifica el estado de salud presente o futuro como **dato sensible**, y el artículo 8
exige para él **consentimiento expreso y por escrito** —firma autógrafa, electrónica o
mecanismo de autenticación—, además de prohibir crear bases de datos con datos
sensibles sin justificar su creación. Ese consentimiento no puede obtenerse con la
calidad que la ley exige en una conversación de un minuto. De ahí que la regla del
proceso sea no recabar salud por medios electrónicos: no es una prohibición arbitraria,
es la consecuencia de que el medio no permite el consentimiento que el dato requiere.

Un **interés declarado no es un diagnóstico**. Preguntar si a la persona le interesa que
su experiencia incluya un programa prenatal no afirma que esté embarazada, igual que
preguntar por actividades para menores no afirma que tenga hijos. Por eso Q12 puede
recabarse con consentimiento tácito, con el aviso a la vista antes del primer reactivo,
y por eso la corrección conserva la utilidad de la pregunta sin el dato sensible.

**Los tres hallazgos se cierran con el mismo cambio.** Al no recabar salud por medio
electrónico: desaparece la contradicción con el proceso (A-021); no hay dato sensible
procesado antes del consentimiento, porque no hay dato sensible (A-022); y el brief
digital no puede contener el primer cruce de salud, porque el flujo digital nunca lo
recibe (A-023).

**Consecuencia que hay que sostener en el resto del documento.** La matriz de
contraindicaciones, la regla de priorización GLP-1, el copy de la sección de seguridad y
las banderas médicas del brief dependían de Q12, Q12b y Q17. Al salir esas preguntas del
flujo digital, esas mecánicas **no desaparecen: se mudan a la visita**, donde corren con
la autorización AU-01 firmada. Los apartados §4.8, §4.9, §4.10, §4.12 y §4.15 quedan
pendientes de reescritura en ese sentido, dentro de este mismo bloque.

**Evidencia.** `evidencia/B3-antes-salud-consentimiento.md` — respuesta íntegra de
NotebookLM sobre las 42 fuentes, 12 documentos identificados, con las frases transcritas.
