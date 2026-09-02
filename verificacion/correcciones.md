# Registro de correcciones

Qué se corrigió, en qué documento, por qué, y con qué evidencia. `cambios.md` dice
**qué líneas** cambiaron; este archivo dice **por qué** y **con qué autoridad**. Los dos
juntos son lo que se le entrega al cuaderno 3 para la verificación por pares.

**No se edita a mano un `-MOD` sin agregar aquí su entrada.** La regla **R24** de
`tools/consistencia.js` falla si un documento tiene diferencias contra su original y
no está registrado, si cita un hallazgo que no existe en `hallazgos.csv`, o si el
número de cambios declarado no coincide con el que el generador contó.

## Índice

| Documento | Hallazgos | Cambios |
|---|---|---|
| proceso-mpc-01 | A-001, A-002, A-003, A-004, A-005, A-006, A-007, A-009, A-013, A-020, A-027, A-072 | 10 |


---

## proceso-mpc-01 · doce hallazgos del bloque P1

**Evidencia.** `evidencia/Respuesta-Notebook-P1.md` — 21 documentos identificados sobre
las 41 fuentes, con las frases transcritas. Es la primera respuesta obtenida sobre el
corpus completo: las siete páginas del Proceso Comercial ya se leen.

### A-002 · los SOP publicados figuraban como «Por elaborar»

**Lo que decía.** El registro maestro (§1.2), textual:

> `"SOP/SW/0102 Captación por el sitio web | … | Por elaborar"`
> `"SOP/SW/0103 Captación en consola | … | Por elaborar"`
> `"SOP/SW/0201 La Experiencia Guiada de Sports World | … | Por elaborar"`
> `"SOP/SW/0301 Contratación y alta de la membresía | … | Por elaborar"`

Los cuatro están publicados y son fuentes de este mismo cuaderno.

**Qué se corrigió.** Los cuatro pasan a **Vigente**. Un registro maestro que declara
inexistente lo que ya opera es peor que no tenerlo: quien lo consulta concluye que su
canal no tiene procedimiento.

### A-003 · «cinco procedimientos» contra siete claves

**Lo que decía.** `"Cinco procedimientos cubren el proceso de punta a punta"`, mientras la
tabla enumera siete claves, dos de ellas `"Por confirmar"`.

**Qué se corrigió.** §9 nombra **las cinco vigentes** una por una, y agrega que las otras
dos —SOP/SW/0104 referido y SOP/SW/0105 convenio— son **claves reservadas y todavía no
vigentes**, con lo que ocurre mientras tanto: referido y convenio operan bajo SOP/SW/0103.
Siete claves y cinco procedimientos no se contradicen si se dice cuáles rigen.

### A-004 · «once documentos» contra doce enumerados

**Qué se corrigió.** §6 pasa a decir **doce**, desglosados: tres instrumentos, cinco
insumos, cuatro registros. La cuenta ahora se puede verificar leyendo el propio apartado.

### A-005 · instrumentos que los procedimientos exigen y no existen

**Lo que decía.** Vivían en una nota al pie de §8: `"Tres instrumentos: el texto de la
autorización AU-01 …; el guion del aviso leído …; y el régimen de conservación … Sin ellos
el proceso opera, pero los pasos que dependen de cada uno quedan detenidos por diseño, no
por omisión."` Y en los SOP: `"AU-01 … Texto por definir con Legal"`, `"CR-01 … Pendiente
de definición"`.

**Qué se corrigió.** Nuevo **§6.1 bis · Instrumentos pendientes de emisión**, con AU-01,
CR-01 y GT-01 en tabla: clave, estado, qué detiene mientras no exista y propietario. Un
instrumento que un procedimiento exige para operar es parte del sistema documental aunque
falte, y su ausencia tiene que verse **en el mismo lugar donde se buscan los demás**, no en
una nota. Se agrega aparte que el segundo cruce de salud no es un instrumento sino una
decisión pendiente, sin dueño ni destino.

### A-006 · varias piezas se autodeclaran fuente única

**Lo que decía.** Cinco documentos se declaran rectores, y sus materias se solapan:
`experience` — `"Es la especificación autoritativa de esa experiencia"`; `funnel` —
`"Documento canónico de medición… fija la definición única del funnel para todo el
proyecto"`; `technical` y `execution` — `"Documento fundacional"`; `glosario` — `"Glosario
único y compartido"`; y el propio MPC — `"Fija una sola forma de trabajar para los 49
clubes"`.

**Qué se corrigió.** Nuevo **§5 bis · Qué documento manda sobre qué**: una tabla que asigna
cada materia a un solo documento —el proceso al MPC, el cuestionario al MPC §6.1, la
experiencia del prospecto a la Arquitectura, el funnel al Mapa, la tecnología a la
Estrategia Técnica, los términos al Glosario, las obligaciones al Contrato— y una **regla
de conflicto**: gana el que manda sobre esa materia, y un documento no adquiere autoridad
por declararse fundacional.

### A-020 · el cuestionario sin versión ni cardinalidad únicas

**Lo que decía.** El MPC: `"19 reactivos —16 base y 3 condicionales—"`. El Manual de Ventas:
`"Las diecinueve preguntas del apartado 04"`. La Arquitectura de Experiencia: `"Preguntas
base (15)"` y `"Preguntas condicionales (6)"`, con rango `"15–21 preguntas"`. Y ningún
documento daba una clave de versión.

**Qué se corrigió.** CEI-01 pasa a llevar **versión vigente `CEI-01 v1.0`** y su
cardinalidad declarada como única, con la consecuencia escrita: una variante con otro
número de reactivos **no es «una versión corta», es otro instrumento y necesita su propia
clave**. §5 bis asigna la propiedad del cuestionario al MPC, de modo que los demás
documentos lo citen por versión en vez de declarar un número propio.

**Queda abierto, y se dice aquí para no darlo por cerrado:** el MPC describe 16+3 y la
Arquitectura describe 15+6. Son dos cuestionarios distintos, no dos redacciones del mismo.
Reconciliar la lista real de reactivos es trabajo del bloque P3, donde se decide qué
preguntas salen por ser datos de salud.

### A-027 · el brief sin estructura canónica

**Qué se corrigió.** BA-01 pasa a declarar **ocho secciones numeradas, en orden fijo y sin
opcionales**, iguales en todo canal, con dos reglas: una sección sin contenido **se imprime
vacía y no se omite** —para que el asesor sepa que no hay dato, no que se perdió—, y el
brief **no se le muestra al prospecto en ningún canal**.

### A-072 · la ley citada no es la aplicable

**Lo que decía.** `"Rige la Ley Federal de Protección de Datos Personales en Posesión de
Sujetos Obligados publicada … el 20 de marzo de 2025 … La autoridad en la materia es la
Secretaría Anticorrupción y Buen Gobierno."`

**Qué se corrigió.** Rige la **Ley Federal de Protección de Datos Personales en Posesión de
los Particulares**, su Reglamento y los Lineamientos del Aviso de Privacidad. Sports World
es una sociedad privada y trata los datos como **responsable** en términos de esa ley. Se
agrega, explícito, que **no rige** la de Sujetos Obligados: ésa aplica a autoridades,
partidos, sindicatos y fideicomisos públicos. Citarla como título atribuía a la operación un
régimen y una autoridad que no le corresponden — y el propio manual ya invocaba la ley
correcta unas líneas más abajo, al clasificar los datos de salud como sensibles.

### A-001, A-007 y A-009 · publicación y vigencia

**Lo que decía.** El MV/SW/01 tiene `"Entrada en vigor: 01-SEP-2026"` y su control de
cambios registra trece versiones fechadas el 27 y 28 de agosto —publicadas antes de regir—;
el manual convive con bloques «por definir»; y el Contrato figura como `"Versión 4.3 ·
agosto de 2026 · documento en revisión"` mientras una versión anterior consta como oficial.

**Qué se corrigió.** Nuevo **§4 bis · Publicación y vigencia de los documentos**: tres
estados —borrador, aprobado sin vigencia, vigente— y qué obliga cada uno; que un documento
no se publica como vigente antes de su fecha; que puede tener bloques abiertos **si cada uno
nombra qué detiene**, en vez de dejar que el asesor rellene el hueco con su criterio; y que
una sola versión rige a la vez, con la firmada anterior obligando mientras la nueva no entre
en vigor.

### A-013 · referidos en dos sitios a la vez

**Qué se corrigió.** Queda resuelto por §9: SOP/SW/0104 es una **clave reservada, no
vigente**, y mientras no se decida si es procedimiento propio, **referido y convenio operan
bajo SOP/SW/0103**. Un mismo canal deja de estar simultáneamente pendiente y embebido.

## Del bloque P1 quedan sin corregir

- **A-008** (alta) — los controles automáticos reportan cero porque validan forma, no
  contradicción semántica. Es cierto y no se arregla en un documento: se arregla
  convirtiendo cada hallazgo cerrado en una regla, que es lo que hace este proyecto.
- **A-055** (alta) y **A-066** (crítica) — el momento de escritura al CRM y el cobro antes
  de la firma viven en SOP/SW/0101, 0103 y 0301, no en el MPC. Se corrigen con P5 y P6, que
  es donde se pregunta por el flujo completo.
