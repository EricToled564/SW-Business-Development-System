# Resumen de las correcciones hechas

Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. Es el registro de **toda**
diferencia entre cada documento original (commit `90a1ede`, 28 de agosto de 2026) y su versión `-MOD`,
línea por línea.

Es lo que se le entrega al cuaderno 3 junto con los pares de documentos: NotebookLM compara cada
par contra este resumen y dice si hubo errores u omisiones, o cambios que no estaban autorizados.
Una edición que no aparezca aquí no ocurrió; una que aparezca y no corresponda a un hallazgo
cerrado es una edición no autorizada.

**2 de 38 documentos corregidos**, con 19 cambios en total.

## experience → experience-MOD — 9 cambios

**Original, línea 134 · MOD, línea 134**

```diff
- **Preguntas base (15)** — siempre se preguntan, en el mismo orden, a todo prospecto sin importar las respuestas previas:
+ **El instrumento es `CEI-01`, versión vigente `CEI-01 v1.0`.** Su definición íntegra —los reactivos, sus opciones y lo que determina cada uno— vive en el **Anexo A del Manual del Proceso Comercial** (**[MPC/SW/01](#mpc-01)**), que es el documento que manda sobre el cuestionario. Este apartado describe **cómo se aplica en el sitio**, no qué pregunta: si algo aquí difiere del Anexo A, manda el Anexo A.
```

**Original, línea 136 · MOD, línea 136**

```diff
- | ID  | Tema                | Tipo            | Determina                                                                                                              |
- |-----|---------------------|-----------------|---------------------------------------------------------------------------------------------------------------------|
- | Q1  | Nombre              | text            | Trato en primera persona en todo el copy. La primera palabra se trata como el nombre de pila; la cadena completa se trata como el saludo. |
- | Q2  | Género              | single-select   | Concordancia gramatical de todo el copy con género (opciones de Q3, opciones de Q13, tarjetas de resumen). También habilita Q12b. |
- | Q3  | Sentir al salir     | single-select   | Ancla emocional principal para el hook del modelo de lenguaje y el argumento del plan.                                              |
- | Q4  | Objetivos           | multi-select (máx 2) | Selecciona el subgrupo del Bloque 01, el subgrupo del Bloque 02, los pesos de ranking de clases del Bloque 03 y el arco narrativo de la experiencia ideal. La primera selección (`Q4[0]`) es el *objetivo principal* y dirige todas las resoluciones de elección única. La segunda selección es un *objetivo secundario* usado solo para diversificar el ranking de clases. También habilita Q17, Q18, Q19. |
- | Q5  | Ritmo               | single-select   | Capturada para el brief del asesor como la intensidad de entrenamiento preferida del prospecto. Al igual que Q7/Q8, no filtra de forma estricta el catálogo ni cambia la selección determinista de bloques; el asesor concilia la preferencia de intensidad durante la visita. |
- | Q6  | Modo                | single-select   | Interruptor de nivel superior entre los catálogos de piso seco y acuático. "En la alberca" activa los bloques acuáticos 01 y 02; "Ambas" mantiene los bloques secos pero agrega una nota acuática; "Lo que mi entrenador recomiende" cede al valor por defecto del resolver según el objetivo principal. |
- | Q7  | Franjas horarias    | multi-select    | Capturada para el brief del asesor (Disponibilidad) y pasada al modelo de lenguaje para la línea de intención y la ruta de visita. No filtra de forma estricta el catálogo de clases —la conciliación de horarios ocurre con el asesor en la visita. |
- | Q8  | Días de la semana   | multi-select    | Igual que Q7: capturada para el brief y el modelo de lenguaje, surgida como la disponibilidad declarada del prospecto. El filtrado de clases a nivel de horario se difiere al asesor. |
- | Q9  | Nivel               | single-select   | Filtra las clases candidatas por nivel permitido: una clase sobrevive solo si su conjunto de niveles permitidos incluye el nivel Q9 del prospecto (el mismo modelo usado en §4.4 Paso 3). Un prospecto "Principiante" no verá una clase restringida a intermedio/avanzado. Determina la bandera del brief del asesor para "tour obligatorio antes de la sesión". |
- | Q10 | Historial           | single-select   | Determina la bandera del brief del asesor para primera vez en el gym, antecedente sedentario o regreso después de una pausa. También habilita Q11.   |
- | Q12 | Condiciones médicas | multi-select    | Filtra de forma estricta el catálogo de clases mediante la matriz de contraindicaciones. (Ver §4.8.)                                          |
- | Q13 | Acompañamiento      | single-select   | Alterna el Bloque 03 entre "Clases en grupo" (acompañado) y "Personal Training" (solo). Determina la bandera del asesor "no presionar pack de clases grupales". |
- | Q14 | Visita              | single-select   | Determina los mensajes de FitKidz en el reporte y, cuando dispara Q14b, hace de FitKidz una amenidad de experiencia requerida en la selección de club (§4.1). También habilita Q14b. |
- | Q15 | Cerca de qué        | single-select   | Ancla geográfica del resolver: casa / trabajo / ambas / sin preferencia.                                                       |
- | Q16 | Dónde queda         | location        | Entrada geográfica del resolver: código postal o nombre de colonia. Texto libre con validación ligera. |
+ **Diecinueve reactivos: 16 base y 3 condicionales.** Un minuto de participación. «Idéntico en los tres canales de captación», en palabras del Anexo A, «sin variantes por plaza ni por club». Una variante con otro número de reactivos no es «una versión corta» del CEI-01: es otro instrumento y necesita su propia clave.
```

**Original, línea 154 · MOD, línea 138**

```diff
- **Preguntas condicionales (6)** — se preguntan solo si una respuesta específica aguas arriba las dispara:
+ **Reactivos base (16)** — se preguntan siempre, en este orden, a todo prospecto:
```

**Original, línea 156 · MOD, línea 140**

```diff
- | ID   | Disparador                                                                                    | Propósito                                                                                                  |
- |------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
- | Q11  | `Q10 === "Regreso después de una pausa"`                                                      | Duración de la pausa. Determina la bandera del asesor "primera sesión conservadora".                            |
- | Q12b | `Q2 !== "Hombre"` (es decir, "Mujer" o "Prefiero no mencionarlo")                             | Estado de embarazo y posparto. Filtra de forma estricta clases con impacto, trabajo abdominal o posicionamiento supino. Se pregunta a todos excepto a quienes seleccionaron "Hombre", de modo que una persona embarazada o en posparto que prefirió no declarar su género igual es evaluada; para "Prefiero no mencionarlo" la pregunta se muestra con un encuadre neutro (p. ej., "¿Aplica para ti embarazo o posparto reciente?"). |
- | Q14b | `Q14 ∈ {"Yo y mis hijos", "La familia completa"}`                                              | Presencia de hijos menores de 12 años. Determina los mensajes familiares de FitKidz en el reporte y hace de FitKidz una amenidad de experiencia requerida en la selección de club (§4.1). |
- | Q17  | `Q4 includes "Bajar de peso"`                                                                 | Tratamientos activos de pérdida de peso (GLP-1, cirugía bariátrica, acompañamiento nutricional, otro, ninguno). Determina la regla de prioridad GLP-1, el filtro estricto bariátrico y el mensaje abierto de revisión por el asesor. |
- | Q18  | `Q4 includes "Bajar de peso"`                                                                 | Datos físicos actuales (peso, estatura, cintura). Capturados para el brief del asesor; no usados por el resolver. |
- | Q19  | `Q4 includes "Bajar de peso"`                                                                 | Meta de cambio de peso (rango, en opciones de selección única). Capturada para el brief del asesor; no usada por el resolver. |
+ | Nº  | Reactivo | Tipo | Determina |
+ |-----|----------|------|-----------|
+ | 1  | ¿Cómo te llamas? | text | Trato en primera persona en todo el copy. La primera palabra se toma como nombre de pila. |
+ | 2  | ¿Con qué género te identificas? | single-select | Concordancia gramatical de todo el copy. Opciones: Mujer · Hombre · Prefiero no mencionarlo; con la última se emplea la terminación dual. |
+ | 3  | ¿Qué quieres sentir al salir del club? | single-select | Objetivo emocional. Ancla del hook del modelo de lenguaje y del argumento del plan. **Fija el tono de la recomendación, no su contenido.** |
+ | 4  | ¿Qué buscas? | multi-select (máx 2) | Objetivo funcional. La primera selección es el *objetivo principal* y gobierna toda la resolución —bloques, ponderación y clases idóneas—; la segunda sólo diversifica el ranking. |
+ | 5  | ¿Dónde te gustaría entrenar? | single-select | Modalidad. Interruptor estructural: cambia el catálogo completo de bloques y clases. "En la alberca" hace de la alberca una amenidad de experiencia requerida (§4.1). |
+ | 6  | ¿A qué ritmo te gusta entrenar? | single-select | Intensidad preferida. Se traslada al brief; **no filtra el catálogo** —el asesor la concilia en la visita. |
+ | 7  | ¿Hay algo que quieras que tu recomendación tome en cuenta? | multi-select | **Preferencias de entrenamiento, no condiciones de salud.** Bajo impacto · evitar saltos y movimientos bruscos · evitar trabajo abdominal intenso · evitar la alta intensidad sostenida · ninguna en particular. Ajustan la selección de clases. |
+ | 8  | ¿En qué horarios te queda mejor? | multi-select | Franjas horarias. Se traslada al brief como disponibilidad declarada; la conciliación ocurre con el asesor. |
+ | 9  | ¿Qué días? | multi-select | Días de la semana. Igual que el reactivo 8. |
+ | 10 | ¿Cuál es tu nivel? | single-select | Filtra las clases candidatas por nivel permitido (§4.4, paso 3). Determina la señal de recorrido guiado obligatorio en el brief. |
+ | 11 | ¿Cómo llegas a este momento? | single-select | Primera vez · vengo de otro gimnasio · regreso después de una pausa · llevo tiempo sin actividad física. Determina las señales del brief y **habilita los reactivos 12, 13 y 14**. |
+ | 15 | ¿Cómo prefieres entrenar? | single-select | Alterna el tercer bloque entre clases grupales y entrenamiento personal. Determina la señal de no presionar paquete de clases. |
+ | 16 | ¿Con quién vas a usar el club? | single-select | Solo · en pareja · yo y mis hijos · la familia completa. Determina los mensajes familiares del reporte y el acompañamiento que anota el brief. |
+ | 17 | ¿Te interesa alguno de estos programas? | multi-select | **Interés en un servicio, nunca un estado de salud.** Programa prenatal · programa de posparto · programa infantil · entrenamiento personal · ninguno por ahora. Cuando se elige el infantil o uno de los dos de maternidad, **la amenidad correspondiente pasa a ser requisito** en la resolución del club (§4.1). |
+ | 18 | ¿Cerca de qué te conviene entrenar? | single-select | Ancla geográfica del resolver: casa · trabajo · ambos · sin preferencia. |
+ | 19 | ¿Y dónde queda? | location | Código postal de cinco dígitos o nombre de colonia; basta uno. Se convierte en coordenadas para la búsqueda por radio. |
```

**Original, línea 165 · MOD, línea 159**

```diff
+ **Reactivos condicionales (3)** — se preguntan sólo si el reactivo 11 los dispara:
+ 
+ | Nº  | Reactivo | Disparador | Determina |
+ |-----|----------|------------|-----------|
+ | 12 | ¿En qué gimnasio entrenas? | Reactivo 11 = «Vengo de otro gimnasio» | Texto libre, una línea. Identifica al competidor concreto: el asesor llega sabiendo contra qué compara y qué beneficios contrastar. |
+ | 13 | Antes de esa pausa, ¿dónde entrenabas? | Reactivo 11 = «Regreso después de una pausa» | En Sports World · en otro gimnasio · por mi cuenta, sin gimnasio. Activa la pista de reactivación; cuando la respuesta es Sports World, el sistema localiza la membresía anterior antes de la visita y el brief lo señala —la conversación no arranca como venta nueva. |
+ | 14 | ¿Cuánto tiempo duró la pausa? | Reactivo 11 = «Regreso después de una pausa» | Menos de tres meses · entre tres meses y un año · más de un año. Determina la señal de primera sesión conservadora en el brief. |
+ 
+ ### Qué no pregunta el cuestionario, y por qué
+ 
+ El instrumento **no recaba condiciones médicas, embarazo o posparto, tratamientos para control de peso, peso, estatura, medidas corporales ni datos de menores de edad.**
+ 
+ La Ley Federal de Protección de Datos Personales en Posesión de los Particulares clasifica los datos de salud como **sensibles** y exige para ellos consentimiento **expreso y por escrito** —firma autógrafa, electrónica o mecanismo de autenticación equivalente—. Un cuestionario de un minuto aplicado por conversación no puede satisfacer ese estándar, y la sanción por incumplimiento se duplica tratándose de datos sensibles.
+ 
+ **La decisión no degrada la recomendación.** El reactivo 7 recoge la *preferencia* de entrenamiento, que es lo que el sistema necesita para seleccionar clases; la condición que la origina no le hace falta. Quien prefiere bajo impacto recibe exactamente la misma selección, sin que la empresa asuma la custodia de un dato sensible ni la responsabilidad clínica que lo acompaña. La valoración de salud, en palabras del Anexo A, «corresponde al profesional del club, **en el momento del alta**, con el consentimiento y el formato que ese acto sí permite».
+ 
+ El reactivo 17 aplica la misma lógica: pregunta por el **interés en un programa** —prenatal, posparto, infantil o entrenamiento personal— y nunca por el estado que lo motiva. Quien busca acompañamiento en el embarazo lo encuentra, y la empresa registra un interés comercial en lugar de un dato de salud del que tendría que responder.
+ 
```

**Original, línea 218 · MOD, línea 230**

```diff
- Las seis condiciones de habilitación se evalúan así:
+ Las tres condiciones de habilitación se evalúan así:
```

**Original, línea 220 · MOD, línea 232**

```diff
- Q11  shows when answers.Q10 === "Regreso después de una pausa"
- Q12b shows when answers.Q2 !== "Hombre"      // Mujer or "Prefiero no mencionarlo"
- Q14b shows when answers.Q14 === "Yo y mis hijos" || answers.Q14 === "La familia completa"
- Q17  shows when (answers.Q4 || []).includes("Bajar de peso")
- Q18  shows when (answers.Q4 || []).includes("Bajar de peso")
- Q19  shows when (answers.Q4 || []).includes("Bajar de peso")
+ R12  shows when answers.R11 === "Vengo de otro gimnasio"
+ R13  shows when answers.R11 === "Regreso después de una pausa"
+ R14  shows when answers.R11 === "Regreso después de una pausa"
```

**Original, línea 227 · MOD, línea 236**

```diff
+ Las tres cuelgan del mismo reactivo 11. Ninguna condicional depende del género ni del objetivo: las que lo hacían —estado de embarazo y la rama de pérdida de peso— salieron del instrumento por recabar datos de salud.
```

**Original, línea 228 · MOD, línea 238**

```diff
- Cuando el prospecto navega hacia atrás y cambia una respuesta aguas arriba que ya no dispara una condicional aguas abajo, la respuesta aguas abajo se preserva en el estado pero se ignora al enviar. Ejemplo: el prospecto responde Q10 = "pausa", avanza a Q11, responde "Más de un año", luego regresa a Q10 y cambia a "vengo de otro gimnasio". La respuesta de Q11 ("Más de un año") se preserva en el estado pero no se transmite al resolver ni se muestra en el brief del asesor. Si Q10 se cambia de nuevo a "pausa", Q11 se vuelve a preguntar con el valor previo preseleccionado.
+ Cuando el prospecto navega hacia atrás y cambia una respuesta aguas arriba que ya no dispara una condicional aguas abajo, la respuesta aguas abajo se preserva en el estado pero se ignora al enviar. Ejemplo: el prospecto responde el reactivo 11 = «regreso después de una pausa», avanza al 14, responde «más de un año», luego regresa al 11 y cambia a «vengo de otro gimnasio». La respuesta del 14 se preserva en el estado pero no se transmite al resolver ni se muestra en el brief; en cambio se pregunta el 12. Si el 11 vuelve a «pausa», el 14 se pregunta de nuevo con el valor previo preseleccionado.
```

## proceso-mpc-01 → proceso-mpc-01-MOD — 10 cambios

**Original, línea 240 · MOD, línea 240**

```diff
-       <tr><td class="c">SOP/SW/0102</td><td><strong>Captación por el sitio web</strong></td><td>Visita solicitada, brief del asesor y asesor designado</td><td><span class="est pe">Por elaborar</span></td></tr>
-       <tr><td class="c">SOP/SW/0103</td><td><strong>Captación en consola</strong><br><span class="fine">Club y teléfono</span></td><td>Visita solicitada, brief del asesor y asesor designado</td><td><span class="est pe">Por elaborar</span></td></tr>
-       <tr><td class="c">SOP/SW/0201</td><td><strong>La Experiencia Guiada de Sports World</strong></td><td>Propuesta presentada y decisión del prospecto registrada</td><td><span class="est pe">Por elaborar</span></td></tr>
-       <tr><td class="c">SOP/SW/0301</td><td><strong>Contratación y alta de la membresía</strong></td><td>Membresía contratada, socio dado de alta y expediente completo</td><td><span class="est pe">Por elaborar</span></td></tr>
+       <tr><td class="c">SOP/SW/0102</td><td><strong>Captación por el sitio web</strong></td><td>Visita solicitada, brief del asesor y asesor designado</td><td><span class="est ok">Vigente</span></td></tr>
+       <tr><td class="c">SOP/SW/0103</td><td><strong>Captación en consola</strong><br><span class="fine">Club y teléfono</span></td><td>Visita solicitada, brief del asesor y asesor designado</td><td><span class="est ok">Vigente</span></td></tr>
+       <tr><td class="c">SOP/SW/0201</td><td><strong>La Experiencia Guiada de Sports World</strong></td><td>Propuesta presentada y decisión del prospecto registrada</td><td><span class="est ok">Vigente</span></td></tr>
+       <tr><td class="c">SOP/SW/0301</td><td><strong>Contratación y alta de la membresía</strong></td><td>Membresía contratada, socio dado de alta y expediente completo</td><td><span class="est ok">Vigente</span></td></tr>
```

**Original, línea 600 · MOD, línea 600**

```diff
+   <!-- ═══════ 4 bis ═══════ -->
+   <h2 class="s"><span class="n">4 bis</span>Publicación y vigencia de los documentos</h2>
+   <p class="intro">
+     Un documento del proceso puede estar en tres estados, y sólo uno de ellos obliga.
+   </p>
+   <div class="tw"><table>
+     <thead><tr><th style="width:150px">Estado</th><th>Qué significa</th><th style="width:230px">Quién lo ve</th></tr></thead>
+     <tbody>
+       <tr><td><strong>Borrador</strong></td><td>Se está escribiendo o revisando. No obliga a nadie y no se opera con él.</td><td>Sólo quien lo redacta y quien lo revisa.</td></tr>
+       <tr><td><strong>Aprobado, sin vigencia</strong></td><td>Su contenido está cerrado, pero su fecha de entrada en vigor no ha llegado. No obliga todavía.</td><td>Se publica con la fecha visible en la cabecera, y con la leyenda de que aún no rige.</td></tr>
+       <tr><td><strong>Vigente</strong></td><td>Rige la operación desde su fecha de entrada en vigor.</td><td>Publicado. Es el único estado con el que se opera.</td></tr>
+     </tbody>
+   </table></div>
+   <p class="intro">
+     <strong>Un documento no se publica como vigente antes de su fecha de entrada en vigor.</strong> Publicarlo
+     antes obliga a quien lo lee a adivinar si ya aplica, y en un proceso de 49 clubes esa duda se resuelve de 49
+     maneras distintas.
+   </p>
+   <p class="intro">
+     <strong>Un documento con bloques «por definir» puede estar vigente, pero cada bloque abierto tiene que nombrar
+     qué detiene.</strong> No se publica una instrucción de trabajo cuyos huecos el asesor tenga que rellenar con su
+     criterio: o el paso está definido, o está explícitamente detenido y se dice quién lo va a resolver. Los
+     instrumentos pendientes de emisión están en §6.1 bis con esa lectura.
+   </p>
+   <p class="intro">
+     <strong>Una sola versión rige a la vez.</strong> Las anteriores se conservan como antecedente, se marcan como
+     superadas y no se publican junto a la vigente en un lugar donde puedan confundirse con ella. Cuando un
+     documento contractual esté en revisión, la versión firmada anterior sigue siendo la que obliga hasta que la
+     nueva entre en vigor, y así se dice en su cabecera.
+   </p>
+ 
+   <!-- ═══════ 5 bis ═══════ -->
+   <h2 class="s"><span class="n">5 bis</span>Qué documento manda sobre qué</h2>
+   <p class="intro">
+     Varias piezas del proyecto se declaran <em>fundacionales</em>, <em>autoritativas</em> o <em>canónicas</em>. Esa
+     palabra sólo sirve si cada materia tiene <strong>un solo</strong> dueño; si dos documentos se declaran rectores
+     sobre lo mismo, la declaración no resuelve nada y el lector queda peor que sin ella. Esta tabla asigna cada
+     materia a un documento, y ese documento es el único que puede cambiarla.
+   </p>
+   <div class="tw"><table>
+     <thead><tr><th style="width:250px">Materia</th><th style="width:190px">Documento que manda</th><th>Los demás</th></tr></thead>
+     <tbody>
+       <tr><td><strong>El proceso comercial y sus procedimientos</strong><br><span class="fine">Pasos, responsables, instrumentos, estados</span></td><td>MPC/SW/01</td><td>Los SOP desarrollan; no crean pasos ni instrumentos por su cuenta.</td></tr>
+       <tr><td><strong>El cuestionario CEI-01</strong><br><span class="fine">Reactivos, orden, cardinalidad, versión</span></td><td>MPC/SW/01 §6.1</td><td>La arquitectura de experiencia y el Manual de Ventas lo <em>aplican</em> y lo citan por versión; no declaran un número propio de preguntas.</td></tr>
+       <tr><td><strong>La experiencia del prospecto en el sitio</strong><br><span class="fine">Pantallas, fases, reglas de resolución</span></td><td>Arquitectura de la Experiencia</td><td>El MPC define qué produce; no cómo se ve.</td></tr>
+       <tr><td><strong>El funnel y su medición</strong><br><span class="fine">Etapas, llaves de conciliación, indicadores</span></td><td>Mapa del Funnel</td><td>Ningún documento define etapas propias, ni el BDS ni la Academia.</td></tr>
+       <tr><td><strong>La tecnología y las integraciones</strong></td><td>Estrategia Técnica</td><td>Integración de Datos especifica los contratos de datos; no la arquitectura.</td></tr>
+       <tr><td><strong>Los términos del proyecto</strong></td><td>Glosario</td><td>Ningún documento redefine un término del glosario.</td></tr>
+       <tr><td><strong>Las obligaciones entre las partes</strong></td><td>Contrato y sus Anexos</td><td>Ningún documento operativo crea, amplía ni reduce una obligación contractual.</td></tr>
+     </tbody>
+   </table></div>
+   <p class="intro">
+     <strong>Regla de conflicto.</strong> Si un documento contradice al que manda sobre esa materia, gana el que
+     manda y el otro se corrige. Un documento no adquiere autoridad por declararse fundacional.
+   </p>
+ 
```

**Original, línea 604 · MOD, línea 660**

```diff
-     Once documentos atraviesan el proceso. Este apartado establece el contenido y la responsabilidad de cada uno; los procedimientos los citan por clave. Los tres primeros son los instrumentos del sistema; el resto son insumos o registros.
+     <strong>Doce documentos</strong> atraviesan el proceso: tres instrumentos del sistema (§6.1), cinco insumos
+     (§6.2) y cuatro registros (§6.3). Este apartado establece el contenido y la responsabilidad de cada uno; los
+     procedimientos los citan por clave.
```

**Original, línea 611 · MOD, línea 669**

```diff
-       <tr><td class="c">CEI-01</td><td><strong>Cuestionario de Experiencia Ideal</strong></td><td><strong>19 reactivos —16 base y 3 condicionales—, un minuto de participación.</strong> Idéntico en todos los canales, sin variantes por plaza ni por club. Identidad y trato · objetivo emocional · objetivo funcional · ritmo y modalidad · preferencias de entrenamiento · disponibilidad · nivel e historial · acompañamiento · interés en programas familiares · ancla geográfica</td><td>Dirección Comercial<br><span class="fine">Anexo A</span></td></tr>
+       <tr><td class="c">CEI-01</td><td><strong>Cuestionario de Experiencia Ideal</strong><br><span class="fine">Versión vigente: CEI-01 v1.0</span></td><td><strong>19 reactivos —16 base y 3 condicionales—, un minuto de participación.</strong> Ésta es la cardinalidad única del instrumento: ningún documento ni canal declara un número distinto, y una variante con otro número de reactivos no es «una versión corta» sino otro instrumento, que necesita su propia clave. Idéntico en todos los canales, sin variantes por plaza ni por club. Identidad y trato · objetivo emocional · objetivo funcional · ritmo y modalidad · preferencias de entrenamiento · disponibilidad · nivel e historial · acompañamiento · interés en programas familiares · ancla geográfica</td><td>Dirección Comercial<br><span class="fine">Anexo A</span></td></tr>
```

**Original, línea 613 · MOD, línea 671**

```diff
-       <tr><td class="c">BA-01</td><td><strong>Brief del asesor</strong><br><span class="fine">Uso interno</span></td><td>Perfil del prospecto · logística y contacto · qué confirmar antes de proponer · ruta recomendada del recorrido en cuatro pasos · propuesta principal y complemento · tres prioridades de cierre · notas y señales de atención · espacio de registro del asesor</td><td>Dirección Comercial<br><span class="fine">Anexo B</span></td></tr>
+       <tr><td class="c">BA-01</td><td><strong>Brief del asesor</strong><br><span class="fine">Uso interno · Versión vigente: BA-01 v1.0</span></td><td><strong>Estructura canónica, en este orden y sin secciones opcionales:</strong> §1 Perfil del prospecto · §2 Logística y contacto · §3 Qué confirmar antes de proponer · §4 Ruta recomendada del recorrido, en cuatro pasos · §5 Propuesta principal y complemento · §6 Tres prioridades de cierre · §7 Notas y señales de atención · §8 Registro del asesor. Todo brief lleva las ocho secciones, en ese orden, cualquiera que sea el canal que aplicó el cuestionario; una sección sin contenido se imprime vacía y no se omite, para que el asesor sepa que no hay dato y no que se perdió. <strong>Es de uso interno y no se le muestra al prospecto en ningún canal.</strong></td><td>Dirección Comercial<br><span class="fine">Anexo B</span></td></tr>
```

**Original, línea 617 · MOD, línea 675**

```diff
+   <h3 class="ss">6.1 bis · Instrumentos pendientes de emisión</h3>
+   <p class="intro">
+     Los procedimientos exigen tres instrumentos que <strong>todavía no existen como archivo controlado</strong>.
+     Figuran aquí, con clave, propietario y efecto, y no en una nota al margen: un instrumento que un procedimiento
+     exige para operar es parte del sistema documental aunque falte, y su ausencia tiene que ser visible en el
+     mismo lugar donde se buscan los demás.
+   </p>
+   <div class="tw"><table>
+     <thead><tr><th style="width:76px">Clave</th><th style="width:172px">Documento</th><th>Qué detiene mientras no exista</th><th style="width:128px">Propietario</th></tr></thead>
+     <tbody>
+       <tr><td class="c">AU-01</td><td><strong>Autorización de tratamiento de datos de salud</strong><br><span class="fine">Estado: por emitir</span></td><td>Sin ella no se aplica el cuestionario de salud ni se corre la matriz de contraindicaciones en la visita (SOP/SW/0201). El paso queda detenido por diseño, no por omisión.</td><td>Asuntos Legales</td></tr>
+       <tr><td class="c">CR-01</td><td><strong>Constancia de autorización de referido</strong><br><span class="fine">Estado: por emitir</span></td><td>Sin ella no se realiza ninguna llamada saliente a un prospecto referido (SOP/SW/0103, paso 5).</td><td>Asuntos Legales</td></tr>
+       <tr><td class="c">GT-01</td><td><strong>Guion del aviso leído</strong><br><span class="fine">Atención telefónica · Estado: por emitir</span></td><td>Sin él la atención telefónica no puede desplegar el aviso antes de la primera pregunta, y no se recaba dato alguno por ese canal.</td><td>Asuntos Legales</td></tr>
+     </tbody>
+   </table></div>
+   <p class="intro">
+     <strong>Un cuarto punto no es un instrumento sino una decisión pendiente:</strong> el segundo cruce contra la
+     información de salud, posterior a la valoración física, no tiene dueño, documento ni destino definidos
+     (SOP/SW/0201). Mientras no se determinen, ese paso opera como indicador y no produce registro.
+   </p>
+ 
```

**Original, línea 763 · MOD, línea 842**

```diff
-     Rige la <strong>Ley Federal de Protección de Datos Personales en Posesión de Sujetos Obligados</strong>
-     publicada en el Diario Oficial de la Federación el <strong>20 de marzo de 2025</strong>, vigente desde el día
-     siguiente, que abrogó la ley de 2010. La autoridad en la materia es la <strong>Secretaría Anticorrupción y
-     Buen Gobierno</strong>. Toda referencia de este manual a artículos corresponde a ese ordenamiento.
+     Rige la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>, su
+     Reglamento y los Lineamientos del Aviso de Privacidad. Sports World es una sociedad privada y trata los datos
+     de sus prospectos y socios como <strong>responsable</strong> en términos de esa ley; toda referencia de este
+     manual a artículos corresponde a ese ordenamiento.
```

**Original, línea 768 · MOD, línea 847**

```diff
+   <p class="intro">
+     <strong>No rige la Ley Federal de Protección de Datos Personales en Posesión de Sujetos Obligados</strong>,
+     publicada el 20 de marzo de 2025. Esa ley aplica a los sujetos obligados —autoridades, partidos, sindicatos y
+     fideicomisos públicos—, y Sports World no lo es. Citarla como título de tratamiento atribuía a la operación un
+     régimen y una autoridad que no le corresponden.
+   </p>
```

**Original, línea 888 · MOD, línea 973**

```diff
-     Cinco procedimientos cubren el proceso de punta a punta. Cada uno es autónomo: quien opera un canal no
-     necesita leer los otros. Este apartado establece qué resuelve cada uno, dónde empieza, dónde termina y con
-     qué se conecta.
+     <strong>Cinco procedimientos vigentes</strong> cubren el proceso de punta a punta: tres de captación
+     —SOP/SW/0101, 0102 y 0103—, la Experiencia Guiada —SOP/SW/0201— y la contratación —SOP/SW/0301—. Cada uno es
+     autónomo: quien opera un canal no necesita leer los otros. Este apartado establece qué resuelve cada uno,
+     dónde empieza, dónde termina y con qué se conecta.
```

**Original, línea 892 · MOD, línea 978**

```diff
+   <p class="intro">
+     El registro maestro (§1.2) enumera además <strong>dos claves reservadas y todavía no vigentes</strong>
+     —SOP/SW/0104, referido, y SOP/SW/0105, convenio corporativo—. No son procedimientos del proceso mientras no
+     se resuelva si constituyen procedimientos propios o si ingresan por consola con una marca de origen distinta;
+     hasta entonces, referido y convenio operan bajo SOP/SW/0103. Siete claves y cinco procedimientos no son una
+     contradicción sólo si se dice cuáles rigen: son las cinco vigentes.
+   </p>
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
- `seguridad-MOD`
- `technical-MOD`
- `workshop-discovery-MOD`
- `proceso-mv-01-MOD`
- `proceso-sop-0101-MOD`
- `proceso-sop-0102-MOD`
- `proceso-sop-0103-MOD`
- `proceso-sop-0201-MOD`
- `proceso-sop-0301-MOD`
