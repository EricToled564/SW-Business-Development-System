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
| experience | A-021, A-022, A-023, A-026, A-033, A-020 | 14 |
| seguridad | A-015, A-053, A-070, A-084 | 1 |

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

---

## experience · A-026 y A-033

**Qué decía la auditoría.**

- **A-026** (alta, privacidad) — «El brief interno se muestra o entrega al prospecto en la
  arquitectura UX.»
- **A-033** (alta, privacidad) — «La frase "No los compartimos con terceros" es engañosa
  frente al uso de encargados tecnológicos.»

**Lo que decía el documento, textual.**

Sobre A-026, NotebookLM lo resumió así: «Contrario a la idea convencional de un documento
"USO INTERNO" que nunca ve el cliente, el documento de diseño confirma que el brief del
asesor (Página 2 de la fase terminal `briefing`) SÍ se le muestra visualmente en pantalla
al prospecto». El texto era:

> «7. `briefing` — Fase terminal. Muestra dos páginas separadas visualmente: la página 1 es
> la confirmación de la cita […], la página 2 es el brief del asesor (pensado para que el
> asesor de ventas de Sports World lo lea antes de la visita).»

Y la página 2 contiene, según el mismo documento: «§6 Prioridades de cierre, §7 Notas y
banderas, Guion de cierre […], Footer USO INTERNO».

Sobre A-033:

> «Aviso de privacidad en la pantalla: "Tus datos se usan únicamente para coordinar tu
> visita guiada. No los compartimos con terceros."»

**Qué se corrigió, cambio por cambio.**

| # | Línea | Qué cambió |
|---|---|---|
| 8 | 90 | La fase `briefing` deja de mostrar dos páginas al prospecto. **Ve una sola: la confirmación de su cita.** El brief se genera en el servidor y se envía por correo al club. |
| 9–11 | 590–592 | La división de página del brief se encabeza declarando que es **interno** y que **no se renderiza en la sesión del prospecto**. Se retira el «banner de confirmación para el prospecto» de su página 1, que era el resto de la confusión. Se agrega por qué importa: el pie «USO INTERNO» sólo es cierto si el documento no llega al prospecto. |
| 12 | 563 | Se retira **«No los compartimos con terceros»** y se sustituye por: «Los tratan Sports World y sus proveedores tecnológicos, que no pueden usarlos para ningún otro fin. Consulta el aviso de privacidad integral.» |

**Por qué así, y no de otra forma.**

En A-026 no había que suavizar el texto: había que separar los destinatarios. El propio
proyecto define la experiencia ideal con **dos destinatarios distintos** —el cliente la
recibe como su experiencia, el asesor como brief de cierre—. Mostrarle al prospecto el
guion de cierre, las prioridades de venta y las banderas con las que el asesor va a
conducir la conversación no es un descuido de maquetación: le entrega el pliego de la otra
parte.

En A-033, «no los compartimos con terceros» es falso tal como está escrito. Los datos sí se
remiten a **encargados del tratamiento**: el modelo de lenguaje que redacta la experiencia y
el brief, el proveedor de voz, la API de WhatsApp Business y el CRM. Remitir datos a un
encargado **no es una transferencia** en el sentido de la LFPDPPP —por eso es lícito sin
consentimiento adicional—, pero decirle al prospecto que no se comparten con nadie afirma
algo que no ocurre. La corrección nombra la figura sin tecnicismos y remite al aviso
integral, que es donde el encargado se identifica.

**Evidencia.** `evidencia/B3-antes-cuestionario-brief-terceros.md` — 18 documentos
identificados sobre las fuentes legibles, con las frases transcritas.

---

## Nota sobre la evidencia de la primera entrada

**Evidencia.** `evidencia/B3-antes-salud-consentimiento.md` — respuesta íntegra de
NotebookLM sobre las 42 fuentes, 12 documentos identificados, con las frases transcritas.


---

## seguridad · A-015, A-053, A-070, A-084

**Qué decía la auditoría.**

- **A-015** (crítica, consentimiento) — «No hay consentimiento, aviso sonoro, límites de
  audio, tratamiento de transcripción ni excepciones de voz.»
- **A-053** (crítica, consentimiento) — «El contrato de datos no conserva alcance, versión
  del aviso, método, evidencia y timestamp de consentimiento.»
- **A-070** (alta, consentimiento) — «Seguimiento, reactivación e invitación de acompañante
  no tienen propósito/consentimiento y supresión unificados.»
- **A-084** (alta, consentimiento) — «El flujo de captación no detecta ni gobierna
  prospectos menores hasta el alta.»

**Lo que faltaba, según las fuentes.**

NotebookLM lo resumió sobre las 32 fuentes legibles: «**No se persiste la versión, evidencia
o alcance del consentimiento** en la base de datos del sitio web o del funnel»; «**No existe
mención de tutor legal o formato de consentimiento parental** en las fuentes. Su presencia se
detecta mediante las condicionales `Q14` y `Q14b` para asociar al prospecto a la membresía
familiar e integrar el tour guiado por la zona infantil FitKidz».

Sobre mercadotecnia, lo único que constaba era el presupuesto, en `gastos-operativos`:

> `"Plantillas marketing (reactivación de bases) | 0 | ~1,000 | ~2,000"`

Volumen y costo, sin propósito declarado, sin consentimiento separado y sin supresión.

Sobre voz, lo único que constaba era una frase de un documento de la Academia —«esas
conversaciones no se graban»— referida a las conversaciones entre asesores y clientes, no al
canal conversacional del prospecto.

**Qué se corrigió.** Cuatro apartados nuevos en `seguridad`, que es el documento que gobierna
la protección de datos:

| Apartado | Qué establece |
|---|---|
| **§8 · El registro del consentimiento** | Cinco campos que se escriben al CRM junto al lead: alcance, versión del aviso, método, evidencia y fecha y hora. |
| **§9 · Personas menores de edad** | Declaración de mayoría de edad antes de pedir contacto; quien no la declare no continúa por el canal digital. Contratación de un menor sólo en el club, con firma de quien ejerce la patria potestad. FitKidz no cambia. |
| **§10 · Comunicaciones comerciales y su revocación** | Consentimiento separado y opcional; propósito declarado al pedirlo; revocación en un paso que marca la supresión en el CRM; una base histórica sin registro de consentimiento no se trabaja. |
| **§11 · Voz: grabación y transcripción** | Aviso al inicio de que se habla con un asistente automatizado; el audio no se almacena; la transcripción sigue la regla de §1; quien lo pida pasa a texto o a una persona. |

**Por qué así, y no de otra forma.**

**§8 corrige una confusión del propio documento.** La minimización explica por qué no se
guardan los datos; no explica por qué habría que guardar **el consentimiento**. Son cosas
opuestas y se resuelven al revés: el dato se descarta, el acto de consentir se conserva. Sin
ese registro Sports World no puede demostrar que lo obtuvo, y la carga de la prueba es suya
como responsable. Los cinco campos describen un acto, no a la persona, así que conservarlos
no contradice el principio rector — es lo que permite atender una revocación, porque para
revocar hay que saber qué se otorgó.

**§9 no inventa un requisito nuevo:** el sistema no puede recabar datos de un menor sin
consentimiento de quien ejerce la patria potestad, y hasta ahora no lo detectaba. `Q14b` no
servía para eso —pregunta por los hijos del prospecto, no por su edad—, y confundir las dos
cosas es lo que dejó el hueco.

**§10 separa dos consentimientos que viajaban juntos.** Coordinar una visita y recibir
comunicaciones comerciales son finalidades distintas; la segunda es opcional y su negativa no
puede afectar la primera. La supresión se marca en el CRM, que es el sistema de registro, para
que ningún componente conserve una lista propia desde la cual seguir enviando.

**§11 acota el canal.** En WhatsApp "BES" opera sólo por texto, así que el apartado aplica al
canal web y a la atención telefónica, que es donde hay voz.

**Evidencia.** `evidencia/B3-antes-consentimiento-menores-voz.md`.


---

## experience · A-020

**Qué decía la auditoría.** **A-020** (crítica, contradicción) — «El cuestionario no
tiene una versión ni cardinalidad únicas.»

**Lo que había, textual.** Tres conteos distintos conviviendo, según transcribió
NotebookLM: `experience` declaraba `"Preguntas base (15)"` y `"Preguntas condicionales
(6)"` con rango operativo `"el cuestionario (15–21 preguntas)"`; el código confirmaba 21
claves declaradas; y `academia-fases` introducía `"Versión corta (primer contacto) […]
Entre tres y cinco preguntas filtro"`. Ningún documento daba un identificador: la clave
`CEI-01` que la auditoría nombra **no existía en ninguna fuente**.

**Qué se corrigió.**

| # | Línea | Qué cambió |
|---|---|---|
| 13 | 134 | Se declara el instrumento y su versión: **`CEI-01`, versión vigente `CEI-01 v2.0`**, y que una variante con distinto número de reactivos no es «una versión corta» sino otro instrumento, que necesita su propia clave. Se fija la **cardinalidad única: 15 base + 2 condicionales, entre 15 y 17 reactivos**, y que si otro documento da otra cifra, ese documento está desactualizado. |
| 14 | 604 | La referencia suelta «(15–21 preguntas)» pasa a «(`CEI-01 v2.0`, 15–17 reactivos)». |

**Por qué así.** El rango 15–21 quedó obsoleto por la corrección de A-021: al salir Q12b,
Q17, Q18 y Q19, las condicionales pasaron de seis a dos. Pero el problema de fondo no era
el número, era que **nadie era dueño del número**: cada documento lo repetía por su cuenta
y ninguno decía cuál manda. Nombrar el instrumento y su versión pone la cardinalidad en un
solo lugar, y convierte a los demás en referencias que se pueden verificar.

**Evidencia.** `evidencia/B3-antes-cuestionario-brief-terceros.md`.
