# Resumen de las correcciones hechas

Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. Es el registro de **toda**
diferencia entre cada documento original (commit `90a1ede`, 28 de agosto de 2026) y su versión `-MOD`,
línea por línea.

Es lo que se le entrega al cuaderno 3 junto con los pares de documentos: NotebookLM compara cada
par contra este resumen y dice si hubo errores u omisiones, o cambios que no estaban autorizados.
Una edición que no aparezca aquí no ocurrió; una que aparezca y no corresponda a un hallazgo
cerrado es una edición no autorizada.

**2 de 38 documentos corregidos**, con 15 cambios en total.

## experience → experience-MOD — 14 cambios

**Original, línea 90 · MOD, línea 90**

```diff
- 7. **`briefing`** — Fase terminal. Muestra dos páginas separadas visualmente: la página 1 es la confirmación de la cita (pensada para que el prospecto tome una captura de pantalla y la recuerde), la página 2 es el brief del asesor (pensado para que el asesor de ventas de Sports World lo lea antes de la visita). El prospecto puede reiniciar el cuestionario o regresar a `schedule` para modificar la cita.
+ 7. **`briefing`** — Fase terminal. **El prospecto ve una sola página: la confirmación de su cita**, pensada para que tome una captura de pantalla y la recuerde. El brief del asesor **no se le muestra**: se genera en el servidor y se envía por correo al club, para que el asesor lo lea antes de la visita. Son dos destinatarios distintos y dos entregas distintas. El prospecto puede reiniciar el cuestionario o regresar a `schedule` para modificar la cita.
```

**Original, línea 134 · MOD, línea 134**

```diff
+ **El cuestionario es un instrumento controlado: `CEI-01`.** Su versión vigente es **`CEI-01 v2.0`**, la que describe este apartado. Cualquier documento, canal o procedimiento que aplique el cuestionario aplica **esta** versión y ninguna otra; una variante con distinto número de reactivos no es «una versión corta», es otro instrumento y necesita su propia clave.
+ 
+ **Cardinalidad única: 15 base + 2 condicionales = 17 reactivos como máximo.** Una persona contesta entre **15 y 17**, según se disparen las condicionales. Este es el único conteo válido; si otro documento da una cifra distinta, ese documento está desactualizado.
+ 
```

**Original, línea 139 · MOD, línea 143**

```diff
- | Q2  | Género              | single-select   | Concordancia gramatical de todo el copy con género (opciones de Q3, opciones de Q13, tarjetas de resumen). También habilita Q12b. |
+ | Q2  | Género              | single-select   | Concordancia gramatical de todo el copy con género (opciones de Q3, opciones de Q13, tarjetas de resumen). |
```

**Original, línea 141 · MOD, línea 145**

```diff
- | Q4  | Objetivos           | multi-select (máx 2) | Selecciona el subgrupo del Bloque 01, el subgrupo del Bloque 02, los pesos de ranking de clases del Bloque 03 y el arco narrativo de la experiencia ideal. La primera selección (`Q4[0]`) es el *objetivo principal* y dirige todas las resoluciones de elección única. La segunda selección es un *objetivo secundario* usado solo para diversificar el ranking de clases. También habilita Q17, Q18, Q19. |
+ | Q4  | Objetivos           | multi-select (máx 2) | Selecciona el subgrupo del Bloque 01, el subgrupo del Bloque 02, los pesos de ranking de clases del Bloque 03 y el arco narrativo de la experiencia ideal. La primera selección (`Q4[0]`) es el *objetivo principal* y dirige todas las resoluciones de elección única. La segunda selección es un *objetivo secundario* usado solo para diversificar el ranking de clases. |
```

**Original, línea 148 · MOD, línea 152**

```diff
- | Q12 | Condiciones médicas | multi-select    | Filtra de forma estricta el catálogo de clases mediante la matriz de contraindicaciones. (Ver §4.8.)                                          |
+ | Q12 | Programas de interés | multi-select   | **Preferencia, no condición de salud.** Pregunta qué tipos de programa le interesa que su experiencia incluya —bajo impacto, prenatal o posparto, acompañamiento nutricional, movilidad guiada—. Pondera el ranking de clases y se lleva al brief como interés declarado. **No filtra el catálogo ni activa ninguna matriz clínica** (ver §4.8). |
```

**Original, línea 154 · MOD, línea 158**

```diff
- **Preguntas condicionales (6)** — se preguntan solo si una respuesta específica aguas arriba las dispara:
+ **Preguntas condicionales (2)** — se preguntan solo si una respuesta específica aguas arriba las dispara:
```

**Original, línea 159 · MOD, línea 163**

```diff
- | Q12b | `Q2 !== "Hombre"` (es decir, "Mujer" o "Prefiero no mencionarlo")                             | Estado de embarazo y posparto. Filtra de forma estricta clases con impacto, trabajo abdominal o posicionamiento supino. Se pregunta a todos excepto a quienes seleccionaron "Hombre", de modo que una persona embarazada o en posparto que prefirió no declarar su género igual es evaluada; para "Prefiero no mencionarlo" la pregunta se muestra con un encuadre neutro (p. ej., "¿Aplica para ti embarazo o posparto reciente?"). |
```

**Original, línea 161 · MOD, línea 164**

```diff
- | Q17  | `Q4 includes "Bajar de peso"`                                                                 | Tratamientos activos de pérdida de peso (GLP-1, cirugía bariátrica, acompañamiento nutricional, otro, ninguno). Determina la regla de prioridad GLP-1, el filtro estricto bariátrico y el mensaje abierto de revisión por el asesor. |
- | Q18  | `Q4 includes "Bajar de peso"`                                                                 | Datos físicos actuales (peso, estatura, cintura). Capturados para el brief del asesor; no usados por el resolver. |
- | Q19  | `Q4 includes "Bajar de peso"`                                                                 | Meta de cambio de peso (rango, en opciones de selección única). Capturada para el brief del asesor; no usada por el resolver. |
```

**Original, línea 165 · MOD, línea 165**

```diff
+ **Lo que el cuestionario digital no pregunta, y por qué.** No hay preguntas de condición médica, embarazo, posparto, tratamiento activo, peso, estatura ni cintura. No es una omisión: el artículo 2, fracción VI de la LFPDPPP clasifica el estado de salud presente o futuro como **dato sensible**, y el artículo 8 exige para él **consentimiento expreso y por escrito**. Ese consentimiento no puede obtenerse con la calidad que la ley exige en una conversación de un minuto, así que la regla del Proceso Comercial —**[MPC/SW/01 §8.4](#mpc-01)**— es que por medios electrónicos no se recaba información de salud, en ninguno de los cuatro canales.
+ 
+ Lo que sí pregunta Q12 son **intereses de programa**: si a la persona le interesa que su experiencia incluya trabajo de bajo impacto, programas prenatales o de posparto, acompañamiento nutricional o movilidad guiada. Un interés declarado no es un diagnóstico ni un estado de salud, y por eso puede recabarse con consentimiento tácito, con el aviso a la vista antes del primer reactivo.
+ 
+ La información de salud se recaba **en persona**, en la visita guiada, con la autorización **AU-01** firmada. Es ahí donde corre el cuestionario de salud y la matriz de contraindicaciones (**[SOP/SW/0201](#sop-0201)**).
+ 
```

**Original, línea 561 · MOD, línea 567**

```diff
- **Aviso de privacidad en la pantalla:** "Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros." Este texto no es legalmente vinculante por sí mismo —el aviso de privacidad integral se referencia en otra parte del sitio— pero es el primer momento de consentimiento del prospecto.
+ **Aviso de privacidad en la pantalla:** "Tus datos se usan únicamente para coordinar tu visita guiada. Los tratan Sports World y sus proveedores tecnológicos, que no pueden usarlos para ningún otro fin. Consulta el aviso de privacidad integral." El enlace lleva al aviso integral de Sports World.
```

**Original, línea 563 · MOD, línea 569**

```diff
+ La frase anterior —"No los compartimos con terceros"— **se retira por engañosa**. Los datos sí se remiten a encargados del tratamiento: el proveedor del modelo de lenguaje que redacta la experiencia y el brief, el proveedor de voz, la API de WhatsApp Business y el CRM de Sports World. Remitir datos a un encargado no es una transferencia en el sentido de la LFPDPPP, y por eso es lícito sin consentimiento adicional; pero decirle al prospecto que no se comparten con nadie es afirmar algo que no ocurre. El texto corregido nombra la figura sin tecnicismos y remite al aviso integral, que es donde el encargado se identifica.
+ 
+ Este texto no es legalmente vinculante por sí mismo —el aviso integral se referencia en otra parte del sitio— pero es el primer momento de consentimiento del prospecto, y por eso no puede decir menos de lo que es cierto.
+ 
```

**Original, línea 588 · MOD, línea 598**

```diff
- **División de página del brief del asesor:**
- - **Página 1:** banner de confirmación para el prospecto, encabezado del brief (nombre completo + nivel + chips + fecha), §1 Perfil del lead (8 campos), §2 Logística y contacto (club + ubicación + acompañantes + teléfono + email).
+ **División de página del brief del asesor.** El brief es un documento **interno**: se envía por correo al club y **no se renderiza en la sesión del prospecto** en ningún momento. Su banner de confirmación es para el asesor, no para el cliente —el cliente ya vio la suya en la pantalla de resultado—.
+ - **Página 1:** encabezado del brief (nombre completo + nivel + chips + fecha), §1 Perfil del lead (8 campos), §2 Logística y contacto (club + ubicación + acompañantes + teléfono + email).
```

**Original, línea 592 · MOD, línea 602**

```diff
- **Justificación del orden de división del cliente (Página 1 = Club primero):** la primera pregunta del prospecto tras completar el cuestionario (15–21 preguntas) es "¿dónde voy a entrenar?" —por lo tanto el Club aparece de inmediato después del encabezado personalizado, antes del resumen de perfil o cualquier detalle de la combinación.
+ El pie **USO INTERNO** sólo es cierto si el documento nunca llega al prospecto. Mostrarlo en su pantalla —como hacía la versión anterior de este documento— le entregaba el guion de cierre, las prioridades de venta y las banderas que el asesor usa para conducir la conversación.
```

**Original, línea 594 · MOD, línea 604**

```diff
+ **Justificación del orden de división del cliente (Página 1 = Club primero):** la primera pregunta del prospecto tras completar el cuestionario (`CEI-01 v2.0`, 15–17 reactivos) es "¿dónde voy a entrenar?" —por lo tanto el Club aparece de inmediato después del encabezado personalizado, antes del resumen de perfil o cualquier detalle de la combinación.
+ 
```

## seguridad → seguridad-MOD — 1 cambio

**Original, línea 62 · MOD, línea 62**

```diff
+ ## 8 · El registro del consentimiento
+ 
+ La minimización explica por qué **no se guardan los datos**; no explica por qué habría que
+ guardar **el consentimiento**. Son cosas distintas y se resuelven al revés: el dato se
+ descarta, el acto de consentir se conserva. Sin ese registro, Sports World no puede
+ demostrar que obtuvo el consentimiento, y la carga de la prueba es suya como responsable.
+ 
+ Cada vez que una persona consiente, el sistema escribe al CRM **cinco campos**, junto al
+ lead y no como base aparte:
+ 
+ | Campo | Qué guarda |
+ |---|---|
+ | `consentimiento_alcance` | Para qué consintió: coordinar la visita, o además comunicaciones comerciales |
+ | `consentimiento_aviso_version` | Identificador y versión del aviso que estaba a la vista en ese momento |
+ | `consentimiento_metodo` | Cómo consintió: tácito con el aviso desplegado, o expreso con casilla |
+ | `consentimiento_evidencia` | Referencia al texto exacto mostrado, para poder reproducir qué leyó |
+ | `consentimiento_fecha_hora` | Marca de tiempo en horario de la Ciudad de México |
+ 
+ Ninguno de los cinco es un dato personal adicional: describen un acto, no a la persona. Por
+ eso conservarlos no contradice el principio rector — al contrario, es lo que permite
+ atender una revocación, porque para revocar hay que saber qué se otorgó.
+ 
+ ## 9 · Personas menores de edad
+ 
+ El sistema **no está dirigido a menores de edad** y no puede recabar sus datos sin
+ consentimiento del padre, madre o tutor. Hasta ahora el flujo no lo detectaba: la única
+ pregunta relacionada era si la persona tiene hijos menores de 12 años, y sirve para
+ ofrecer FitKidz, no para gobernar a un prospecto menor.
+ 
+ - **En la captación**, antes de pedir datos de contacto, el prospecto declara ser mayor de
+   edad. Quien no lo declare no continúa por el canal digital: se le indica que la
+   inscripción de un menor se hace en el club, con su padre, madre o tutor presente.
+ - **En el club**, la contratación de un menor exige la presencia y la firma de quien
+   ejerce la patria potestad o la tutela, y el aviso de privacidad se le entrega a esa
+   persona.
+ - **FitKidz** no cambia: los hijos del socio no son prospectos ni titulares de una
+   membresía propia; sus datos los aporta el socio adulto al inscribirlos en la actividad.
+ 
+ ## 10 · Comunicaciones comerciales y su revocación
+ 
+ Las plantillas de reactivación de bases, la invitación de acompañante y cualquier
+ comunicación no relacionada con la solicitud de la persona **son mercadotecnia**, y no
+ viajan con el consentimiento de la visita.
+ 
+ - **Consentimiento separado y opcional.** Se pide aparte del de coordinar la visita, y
+   negarlo no afecta la visita agendada ni la membresía.
+ - **Propósito declarado** en el momento de pedirlo, no en un aviso genérico.
+ - **Revocación en un paso**, disponible en cada mensaje enviado. Revocar detiene el envío y
+   **marca la supresión en el CRM**, que es el sistema de registro; ningún otro componente
+   conserva una lista propia desde la cual seguir enviando.
+ - **Bases pasadas.** Reactivar una base histórica exige comprobar que esas personas
+   otorgaron consentimiento de mercadotecnia y no lo han revocado. Una base sin ese registro
+   no se trabaja por este canal.
+ 
+ ## 11 · Voz: grabación y transcripción
+ 
+ El agente "BES" opera por voz en el canal web. En WhatsApp opera **sólo por texto**
+ (**[BDS · Estrategia Técnica](#bds-tecnica)**), de modo que lo de este apartado aplica al
+ canal web y a la atención telefónica.
+ 
+ - **Aviso al inicio**, antes del primer intercambio: la persona escucha que habla con un
+   asistente automatizado y que la conversación se procesa para atender su solicitud.
+ - **No se conserva el audio.** La voz se transcribe para poder responder, y **el audio no
+   se almacena** ni en el sitio ni en infraestructura del prestador.
+ - **La transcripción sigue la misma regla que el resto:** vive de forma transitoria, se
+   copia al CRM lo que corresponde al lead, y no se conserva copia una vez completado ese
+   flujo (§1).
+ - **Quien lo pida, pasa a texto o a una persona.** Nadie queda obligado a usar la voz para
+   ser atendido.
+ 
```

## Documentos todavía sin corregir

- `academia-anexo-MOD`
- `academia-contenido-MOD`
- `academia-fases-MOD`
- `academia-medicion-MOD`
- `academia-produccion-MOD`
- `academia-resumen-MOD`
- `academia-tecnica-MOD`
- `aportaciones-MOD`
- `auditoria-MOD`
- `bds-anexo-MOD`
- `bds-canales-MOD`
- `bds-flujo-MOD`
- `bds-medicion-MOD`
- `bds-resumen-MOD`
- `bds-tecnica-MOD`
- `contrato-MOD`
- `entrevistas-campo-MOD`
- `execution-MOD`
- `funnel-MOD`
- `gastos-operativos-MOD`
- `glosario-MOD`
- `indice-MOD`
- `integracion-MOD`
- `minuta-2026-06-22-MOD`
- `resumen-MOD`
- `roi-MOD`
- `seguimiento-2026-06-22-MOD`
- `technical-MOD`
- `workshop-discovery-MOD`
- `proceso-mpc-01-MOD`
- `proceso-mv-01-MOD`
- `proceso-sop-0101-MOD`
- `proceso-sop-0102-MOD`
- `proceso-sop-0103-MOD`
- `proceso-sop-0201-MOD`
- `proceso-sop-0301-MOD`
