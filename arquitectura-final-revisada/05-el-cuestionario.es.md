# Capítulo 5 · El cuestionario: el único instrumento

Toda la personalización de la Experiencia Ideal sale de un solo instrumento: el **Cuestionario de Experiencia Ideal**, identificado como **CEI-01**.

La versión vigente es la **1.5**, y vive en esta misma carpeta.

**Toda regla de personalización del sistema debe partir de un dato recogido o confirmado por CEI-01.**

Las señales operativas generadas por el propio sistema, como la de dato desactualizado, se rigen aparte.

---

## 5.1 Rol y propósito

El cuestionario tiene un trabajo:

**recoger lo necesario para construir la Experiencia Ideal de esa persona, en alrededor de un minuto de su tiempo.**

Tres reglas lo gobiernan y deben cumplirse igual en las tres puertas de entrada del funnel.

1. **Debe ser el mismo instrumento en las tres puertas.** Las preguntas, las opciones, las validaciones, las ramificaciones y los identificadores deben ser idénticos en el sitio, WhatsApp y la consola del asesor. En el sitio puede aplicarse de dos formas —la persona avanza sola o BES la acompaña—, por lo que CEI-01 contempla cuatro formas de aplicación. Los reactivos deben ser los mismos en las cuatro.

2. **Debe ser la única fuente de personalización.** Cada regla de recomendación debe consumir una respuesta recogida o confirmada por este instrumento.

3. **Debe recoger preferencias declaradas.** El apartado 5.8 fija el alcance del instrumento y la razón legal que lo sostiene.

Los reactivos deben identificarse con la clave **Q##**, la misma utilizada en CEI-01 y en la tabla de códigos del apartado 0.5.

---

## 5.2 La precarga: lo que ya sabemos se confirma

Antes del primer reactivo, **debe confirmarse a la persona, en un solo bloque, aquello que el sistema ya conoce por el contexto de esa interacción**.

Ese bloque se llama **P0 · Precarga** y forma parte del instrumento.

Debe identificarse con esa clave, componerse en cada sesión con el contexto disponible y resolverse después de la compuerta de mayoría de edad y antes del primer reactivo.

---

### 5.2.1 De dónde sale lo que ya sabemos

| Canal         | Conocimiento previo                                              | Cuando el contexto está vacío                 |
| ------------- | ---------------------------------------------------------------- | --------------------------------------------- |
| **Sitio web** | Las páginas que la persona visitó antes de abrir el cuestionario | Entrada directa al inicio: el bloque se omite |
| **WhatsApp**  | Lo que la campaña que la trajo declara que promueve              | Mensaje directo: el bloque se omite           |
| **Consola**   | El club donde la persona está presente, que se da por conocido   | El bloque se omite. El club viene del canal   |

**En el sitio, el conocimiento previo debe limitarse a la navegación.**

Google entrega la visita, pero el término que la persona escribió permanece del lado de Google.

El sistema conoce **en qué página aterrizó y cuáles visitó después**.

| Lo que el sistema tiene                          | Lo que permanece fuera de su alcance                      |
| ------------------------------------------------ | --------------------------------------------------------- |
| La página de aterrizaje y el recorrido posterior | El término de búsqueda que la trajo                       |
| Que llegó a la página de yoga de Polanco         | Si escribió “yoga cerca de mí” o “clases de yoga Polanco” |
| La ficha de la campaña, cuando viene de una      | La consulta original, incluso en campaña                  |

El sistema no debe inferir ni reconstruir la consulta original a partir de esa navegación.

---

### 5.2.2 Las cuatro categorías y las dos formas

Cuatro tipos de información pueden precargarse.

Cada uno tiene una forma fija de confirmación dentro de **P0**.

| Categoría    | Forma de confirmación en P0   | Cómo suena                                                                                              |
| ------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Club**     | Aceptar o pedir recomendación | “¿Te gustaría que tomáramos ese club como tu club ideal, o prefieres que te hagamos una recomendación?” |
| **Amenidad** | Aceptar o pedir recomendación | “¿Te gustaría que incluyéramos entrenamiento acuático, o prefieres que te recomendemos?”                |
| **Clase**    | Sí o no                       | “¿Te gustaría que incluyéramos yoga en el programa de tu Experiencia Ideal?”                            |
| **Objetivo** | Sí o no                       | “¿Te gustaría que incluyéramos bajar de peso como uno de tus objetivos?”                                |

Estas formas corresponden únicamente a **la confirmación del contexto previo**.

P0 no crea una versión alternativa del cuestionario ni modifica la forma normal de sus reactivos.

**Si la persona no acepta un punto precargado, esa precarga debe descartarse y la pregunta correspondiente debe aparecer después exactamente como está definida en CEI-01: sin prellenado, con su redacción normal, todas sus opciones, sus validaciones y sus reglas originales.**

La precarga puede, por tanto, adelantar y resolver una respuesta cuando la persona la confirma.

Si no la confirma, **la decisión vuelve al cuestionario normal**.

---

### 5.2.3 Cómo se compone el bloque

**P0 debe ofrecer únicamente aquello que el sistema puede entregar.**

Antes de mostrarlo, cada punto candidato debe verificarse contra la instantánea vigente del día.

Si la instantánea no respalda uno de los puntos, ese punto debe omitirse y P0 debe componerse con los restantes.

| Lo que revela el contexto            | Lo que dice la instantánea                     | Qué se muestra                                          |
| ------------------------------------ | ---------------------------------------------- | ------------------------------------------------------- |
| Un club y una clase                  | Ese club la imparte                            | Los dos puntos                                          |
| Un club y una clase                  | La clase se imparte únicamente en otros clubes | Solo el club                                            |
| Un club y una amenidad               | Ese club la tiene                              | Los dos puntos                                          |
| Un club y una amenidad               | La amenidad existe únicamente en otros clubes  | Solo el club                                            |
| Una clase, sin club                  | —                                              | Esa clase. Aceptarla la convierte en requisito del club |
| Una amenidad o un objetivo, sin club | —                                              | Ese punto                                               |

Cuando el contexto revela varias páginas de una misma familia que representan el mismo elemento, deben producir **un solo punto**: tres páginas relacionadas con yoga producen un punto, yoga.

Cuando revela dos clubes, el punto debe presentar los dos y añadir la opción de recibir una recomendación.

**P0 debe componerse una sola vez y mostrarse una sola vez**, después de la compuerta de mayoría de edad y antes del primer reactivo.

Las respuestas dadas dentro de P0 deben entrar al cálculo cuando la persona las confirma.

La composición con la que el bloque se mostró debe permanecer fija durante ese cuestionario.

---

### 5.2.4 Qué hace aceptar y qué hace rechazar

| Respuesta en P0 | Efecto                                                                                                                                                                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Aceptar**     | La respuesta debe sustituir la del reactivo correspondiente y ese reactivo queda resuelto. No debe volver a preguntarse                                                                                                    |
| **Rechazar**    | La precarga debe descartarse. El reactivo correspondiente debe aparecer después, en su posición normal, **sin prellenado y exactamente con la redacción, las opciones, las validaciones y las reglas definidas en CEI-01** |

Aceptar un club resuelve la elección inicial de club.

**Q16 debe preguntarse de todas maneras**, porque el código postal o la colonia se utilizan para calcular el tiempo de traslado y detectar el interés en Multiclub.

Aceptar una clase produce dos efectos distintos según exista o no un club fijado.

| Contexto            | Efecto de aceptar la clase                                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Con club fijado** | La clase debe quedar asegurada en el tercer bloque. El club ya estaba fijado y la instantánea ya confirmó que la imparte                                                                                                                                |
| **Sin club fijado** | **La clase debe convertirse en requisito del club.** El resolvedor debe considerar los clubes que la imparten, ofrecer como recomendado el más cercano que la cumple y mostrar como alternativas los clubes más cercanos con el flag correspondiente |

Ese segundo caso agrega **un quinto requisito** a los cuatro que fija el cuestionario.

Es el único requisito del club que puede originarse en el contexto previo.

El capítulo 10 especifica cómo debe entrar en la elección del club y qué flag debe llevar cada alternativa.

**Rechazar un punto de P0 no debe dejar ese dato resuelto ni generar una respuesta implícita.**

Debe devolver esa decisión al cuestionario normal.

---

## 5.3 Cómo se compone el cuestionario

| Elemento                              |  Cuántos | Cuándo se pregunta                                                         |
| ------------------------------------- | -------: | -------------------------------------------------------------------------- |
| **G0 · Compuerta de mayoría de edad** |        1 | Siempre, antes que cualquier otra interacción. El capítulo 6 la especifica |
| **P0 · Precarga**                     | 1 bloque | Cuando existe contexto previo. Apartado 5.2                                |
| **Reactivos base**                    |       15 | Siempre, en el mismo orden                                                 |
| **Reactivos condicionales**           |        3 | Únicamente cuando una respuesta previa los dispara                         |

Una persona contesta, por lo tanto, **entre 16 y 19 preguntas**: la compuerta, los quince reactivos base y entre cero y tres condicionales.

P0 no agrega una pregunta al conteo: confirma información contextual y puede resolver reactivos que, de otra forma, aparecerían después.

Los identificadores vigentes son **Q1 a Q10 y Q12 a Q16** para los reactivos base, y **Q10a, Q11 y Q15b** para los condicionales.

**Q17, Q18 y Q19 están retirados y reservados. Quien construya el sistema no debe reutilizarlos.**

---

## 5.4 Los quince reactivos base

| Clave   | Qué pregunta                                           | Qué determina                                                                                                                                                                                                                   |
| ------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Q1**  | Cómo se llama                                          | El saludo y la redacción de su experiencia. El apellido se pide posteriormente, durante la captura de contacto                                                                                                                  |
| **Q2**  | Cómo prefiere que se dirijan a ella                    | **La concordancia de las opciones y del texto**, en sus tres formas: masculina, femenina y neutral. Habilita además la opción prenatal de Q14. **No debe utilizarse para asignar asesor ni para inferir identidad o condición** |
| **Q3**  | Qué quiere sentir al salir del club                    | El tono con el que se redacta su experiencia. La elección del club se resuelve aparte                                                                                                                                           |
| **Q4**  | Qué busca                                              | Los bloques de entrenamiento, las clases por objetivo y el argumento principal                                                                                                                                                  |
| **Q5**  | Qué ritmo va con ella                                  | El criterio de selección de clases, junto con el objetivo y el nivel. También viaja al brief                                                                                                                                    |
| **Q6**  | Dónde prefiere entrenar                                | El modo de entrenamiento: piso seco, agua o ambos                                                                                                                                                                               |
| **Q7**  | En qué horario                                         | La señal al asesor cuando las clases idóneas caen en otra franja. La elección de club y el tiempo de traslado se resuelven aparte                                                                                               |
| **Q8**  | Qué días                                               | La misma lógica de disponibilidad de Q7                                                                                                                                                                                         |
| **Q9**  | Cuál es su nivel                                       | El orden de las clases. **No debe tratarse como diagnóstico**                                                                                                                                                                   |
| **Q10** | Cuál describe mejor su experiencia reciente            | El contexto comercial y la preparación del recorrido. Sus cuatro opciones corresponden a personas sin membresía activa                                                                                                          |
| **Q12** | Si prefiere entrenar sin compañía o en clases grupales | Qué ocupa el tercer bloque. Tiene dos opciones y debe elegirse una                                                                                                                                                              |
| **Q13** | Con quién visitaría el club                            | La preparación de la visita y la habilitación de la opción de actividades para menores de Q14                                                                                                                                   |
| **Q14** | Qué preferencia quiere que se priorice                 | Los requisitos que el club debe cumplir y la matriz de contraindicaciones                                                                                                                                                       |
| **Q15** | Si busca cerca del domicilio, de la oficina o de ambos | El origen prioritario y el interés en Multiclub cuando responde “ambos”                                                                                                                                                         |
| **Q16** | Cuál es el código postal o la colonia de ese origen    | Ubica el origen para recomendar club y calcular tiempos de traslado                                                                                                                                                             |

**Q11 pertenece a los reactivos condicionales**, por lo que la numeración de la base salta de Q10 a Q12.

---

### 5.4.1 Los cuatro requisitos que fija el cuestionario

Cada preferencia declarada en **Q14** debe convertirse en requisito para la elección del club.

| Preferencia declarada                         | El club debe tener                                                                |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| Actividades para menores de 3 meses a 13 años | Actividades verificadas para menores de 13 años                                   |
| Programas prenatales o de posparto            | Clases adecuadas para esos periodos, para cada uno de los objetivos de la persona |
| Programas de bajo impacto                     | Clases de bajo impacto, para cada uno de los objetivos de la persona              |

El cuarto requisito es **la alberca**.

Proviene de **Q6** y debe exigirse como amenidad cuando la modalidad elegida o resuelta sea **En la alberca** o **Ambas**.

En ambos casos, la alberca es un **requisito excluyente para la elección del club**, porque sin ella el sistema no puede entregar la modalidad solicitada por la persona.

Las preferencias de clases prenatales o de posparto y de bajo impacto deben activar además la matriz de contraindicaciones.

**La matriz debe sustituir cada clase contraindicada por una alternativa equivalente para el mismo objetivo.**

El capítulo 12 especifica cómo opera.

---

### 5.4.2 El entrenamiento personal se propone sin preguntarse

**El entrenamiento personal debe proponerse a todas las personas**, con al menos una sesión inicial, en las dos ramas de Q12.

Por eso no necesita un reactivo propio.

Q12 determina si el entrenamiento individual ocupa el tercer bloque completo o acompaña a las clases grupales.

---

## 5.5 Los tres reactivos condicionales

| Clave    | Se pregunta cuando                                                                               | Qué determina                                                                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Q10a** | Q10 es “Vengo de otro gimnasio” o cualquiera de las dos opciones de regreso después de una pausa | El gimnasio actual o el último al que perteneció. Sirve como contexto comercial y de atención. Debe admitir “No lo recuerdo”                          |
| **Q11**  | Q10 es alguna de las dos opciones de regreso después de una pausa                                | Cuánto duró la pausa, en tres tramos. Ajusta la preparación de la visita                                                                              |
| **Q15b** | Q15 es “Ambos”                                                                                   | Cuál de los dos orígenes es prioritario. Debe preguntarse antes de Q16. El interés en Multiclub permanece activo aunque se capture una sola ubicación |

**Q10a no debe utilizarse para campañas dirigidas contra una marca.**

---

## 5.6 Las dos preguntas que cambian la estructura

Trece reactivos ajustan parámetros.

Dos cambian la estructura de la recomendación:

**Q4, porque define para qué se entrena, y Q6, porque define sobre qué modalidad debe construirse el plan.**

---

### 5.6.1 Q4 · Los objetivos

La persona puede elegir uno o dos objetivos.

Cuando elige dos, **el primero debe tratarse como objetivo principal**.

De ese objetivo deben depender:

* el subgrupo del Bloque 01;
* el subgrupo del Bloque 02;
* la ponderación de las clases del Bloque 03;
* y el arco de la redacción.

El segundo objetivo, cuando existe, debe diversificar la selección de clases.

---

### 5.6.2 Q6 · La modalidad

Q6 determina si la experiencia se construye sobre el catálogo de piso seco, sobre el catálogo de agua o combinando ambos.

Su respuesta cambia el contenido de los tres bloques y, cuando corresponde, convierte la alberca en requisito para la elección del club.

| Opción                        | Qué debe ocurrir                                                                                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **En piso o área seca**       | El plan debe utilizar el catálogo de piso seco. La alberca no debe ser requisito del club                                                                                                                                            |
| **En la alberca**             | El plan debe utilizar el catálogo de agua. **La alberca debe ser requisito excluyente en la elección del club**                                                                                                                      |
| **Ambas**                     | **El plan debe incluir forzosamente contenido de piso seco y contenido de alberca**, e integrar de forma proactiva natación individual y clases acuáticas que sirvan al objetivo declarado. **La alberca debe ser requisito excluyente en la elección del club**                   |
| **Quiero que me recomienden** | **El sistema debe calcular cuál de las tres modalidades contribuye más al objetivo principal** y resolver esa. Si resuelve **En la alberca** o **Ambas**, la alberca debe convertirse en requisito excluyente del club; si resuelve **En piso o área seca**, no debe hacerlo |

Dos reglas cierran el apartado.

**La primera: con «Ambas», el plan debe entregar las dos modalidades.** Un plan que resolviera «Ambas» solo en piso seco entregaría menos de lo que la opción ofrece.

**La segunda: si la modalidad elegida o resuelta necesita agua, el club debe tener alberca.**

El sistema no debe recomendar como club ideal uno que impida cumplir la modalidad elegida o resuelta para la persona.

El capítulo 10 especifica cómo entra este requisito en la selección del club y el capítulo 11 cómo se componen los tres bloques en cada modalidad.

---

## 5.7 Cómo se comporta el cuestionario en pantalla

**A la persona deben mostrársele únicamente las opciones que le corresponden.**

Cada respuesta debe quedar fija cuando la persona toca **Siguiente**.

Mientras permanezca en la misma pantalla, puede cambiar su respuesta cuantas veces quiera sin perder información ni recibir advertencias.

---

### 5.7.1 Qué reactivos se preguntan y cuáles se resuelven solos

Un reactivo condicional debe mostrarse y enviarse únicamente cuando se cumple la condición que lo activa.

**Cuando la condición no se cumple, ese reactivo debe quedar fuera del cuestionario visible, fuera del cálculo, fuera del brief y fuera del envío correspondiente.**

Si la persona retrocede y cambia la respuesta de la que dependía un reactivo condicional, la respuesta que ya hubiera dado en ese reactivo debe **conservarse en reposo**.

Debe permanecer guardada, pero quedar fuera del cálculo y del brief mientras la condición no se cumpla.

Si posteriormente vuelve a cambiar la respuesta superior y el condicional vuelve a aplicar, el reactivo debe reaparecer con la respuesta anterior ya seleccionada.

Es la misma lógica general:

**lo que el sistema ya sabe no debe volver a pedirse desde cero.**

---

### 5.7.2 Opciones que aparecen cuando aplican

Dentro de un mismo reactivo, algunas opciones deben aparecer únicamente cuando se cumple su condición.

En **Q14**:

| Opción                                            | Se muestra                                       |
| ------------------------------------------------- | ------------------------------------------------ |
| **Programas de bajo impacto**                     | Siempre                                          |
| **Programas prenatales o de posparto**            | Cuando Q2 es “Femenino”                          |
| **Actividades para menores de 3 meses a 13 años** | Cuando Q13 es “Con mis hijos” o “Con mi familia” |
| **Ninguna de las anteriores**                     | Siempre. Debe ser excluyente                     |

Por eso **Q14 debe aparecer después de Q13**: necesita saber con quién visitaría la persona el club para determinar qué opciones corresponde mostrar.

---

### 5.7.3 Opciones que se apagan al llegar al límite

**Q4 permite elegir hasta dos objetivos**, y la interfaz debe hacer visible ese límite mientras la persona elige.

| Lleva elegidos | Qué debe ver                                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ninguno**    | Todas las opciones disponibles. El avance se habilita con la primera elección                                                                   |
| **Uno**        | Todas las opciones continúan disponibles. Puede avanzar y el elegido queda marcado como **objetivo principal**                                  |
| **Dos**        | Las opciones no elegidas se apagan. Puede avanzar y un aviso indica que ya eligió dos y que puede tocar una de las seleccionadas para cambiarla |

Mientras no toque **Siguiente**, la persona puede cambiar sus objetivos libremente.

Tocar una opción apagada no debe modificar la selección.

Tocar una opción ya elegida debe liberarla y volver a abrir un espacio para otra.

La persona puede deshacer y rehacer la selección cuantas veces quiera.

**El límite de dos restringe cuántos objetivos puede conservar, no cuántas veces puede cambiar de opinión.**

El orden de selección debe conservarse y tiene significado:

**el primer objetivo seleccionado es el objetivo principal.**

Para invertir el orden, la persona debe deseleccionar ambos y volver a elegirlos en el orden que quiera.

El capítulo 7 especifica el peso de esa diferencia.

---

### 5.7.4 La concordancia con la forma de trato

Q2 pregunta cómo prefiere la persona que se dirijan a ella:

**masculino, femenino o lenguaje neutral.**

La respuesta debe gobernar únicamente la concordancia de las palabras que se refieren a la persona que está contestando.

Cada una de esas expresiones debe existir en tres versiones, y la persona debe ver únicamente la que corresponde a su elección.

| Dónde                    | Masculino         | Femenino          | Lenguaje neutral          |
| ------------------------ | ----------------- | ----------------- | ------------------------- |
| **Q12 · Acompañamiento** | Entrenar **solo** | Entrenar **sola** | Entrenar **sin compañía** |

Las referencias a otras personas deben escribirse conforme a la gramática española y no deben cambiar según la forma de trato elegida por quien responde.

El género de esas terceras personas debe permanecer fuera del instrumento.

La regla para nombrarlas tiene dos casos:

| Caso                                                                          | Qué debe escribirse         | Ejemplo                                                          |
| ----------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------- |
| El español dispone de una palabra que nombra a la persona sin declarar género | Debe utilizarse esa palabra | “Con una amistad”, “Con mi pareja”                               |
| El español utiliza el plural masculino para nombrar al conjunto               | Debe utilizarse ese plural  | “Con mis hijos”, “Actividades para menores de 3 meses a 13 años” |

La forma neutral debe construirse mediante **una frase que funcione para cualquier persona**.

**No deben utilizarse marcas tipográficas de inclusión** —arroba, equis, vocal entre paréntesis o doble terminación separada por barra—.

La forma correcta es, por ejemplo, **“entrenar sin compañía”**.

Formas como “solo/a” o “amig@” deben quedar fuera del instrumento.

La concordancia debe mantenerse después del cuestionario.

**Q2 debe gobernar también el texto generado por el sistema —incluidos el saludo, el argumento del plan y las referencias a la persona dentro del brief— de principio a fin.**

No debe utilizarse para ningún propósito distinto de los expresamente definidos en este capítulo.

El capítulo 13 especifica cómo debe aplicarse esa concordancia.

---

## 5.8 El alcance del cuestionario

CEI-01 **debe recoger preferencias declaradas, no condiciones clínicas**.

Las condiciones médicas, el embarazo y el posparto como estados clínicos, los tratamientos, los medicamentos, las cirugías, el peso, la estatura, las medidas corporales y los datos personales de menores de edad deben permanecer fuera de su alcance.

Quien construya el sistema **no debe recabarlos ni inferirlos**.

La razón es tanto funcional como jurídica.

La legislación mexicana considera sensibles los datos personales que puedan revelar, entre otros aspectos, el estado de salud presente o futuro. Para el tratamiento de datos personales sensibles deben cumplirse los requisitos de consentimiento expreso y por escrito establecidos por la legislación aplicable.

**CEI-01, tal como está definido, no debe incorporar el tratamiento de esos datos ni convertir el cuestionario comercial en un mecanismo para recabarlos.**

Las infracciones relacionadas con el tratamiento de datos sensibles pueden además estar sujetas a sanciones agravadas conforme a la legislación aplicable.

La decisión no reduce la capacidad de recomendación del sistema porque **la lógica trabaja con la preferencia declarada, no con la condición que pudiera existir detrás de ella**.

Q14 pregunta qué quiere la persona que se priorice:

* programas de bajo impacto;
* programas prenatales o de posparto;
* actividades para menores.

El sistema debe utilizar únicamente esa preferencia.

No debe inferir de ella una lesión, embarazo, posparto, enfermedad ni cualquier otra condición de salud.

Así, una persona que solicita bajo impacto recibe la selección correspondiente sin que Sports World necesite custodiar dentro de CEI-01 el dato clínico que pudiera motivar esa preferencia.

El mismo criterio debe aplicarse a **Q13**:

debe recoger interés en un servicio y **no datos personales de los menores**.

La valoración de salud corresponde al profesional del club en el momento y mediante el proceso que Sports World determine para el alta, sujeto a los consentimientos y requisitos que correspondan.

El capítulo 12 especifica cómo debe aplicarse la matriz de contraindicaciones dentro del alcance permitido por el instrumento.

**La Experiencia Ideal cubre entrenamiento.**

El acompañamiento nutricional, los planes alimenticios, las dietas y las recomendaciones nutricionales deben quedar fuera de su alcance.

---

## 5.9 Las señales que viajan al brief

Algunas respuestas no cambian la composición del plan.

Cambian **cómo debe prepararse y conducirse la conversación comercial**.

El sistema debe convertirlas en señales visibles dentro del brief.

| Señal                                                                          | Qué la dispara                                                                                                                                                                                                |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Intensidad preferida**                                                       | Q5                                                                                                                                                                                                            |
| **La disponibilidad declarada cae en otra franja que las clases idóneas**      | Q7 y Q8                                                                                                                                                                                                       |
| **Nivel de dominio**                                                           | Q9                                                                                                                                                                                                            |
| **Viene de otro gimnasio, y cuál**                                             | Q10 y Q10a                                                                                                                                                                                                    |
| **Regresa a Sports World: localizar su membresía anterior antes de la visita** | Q10                                                                                                                                                                                                           |
| **Cuánto duró la pausa**                                                       | Q11                                                                                                                                                                                                           |
| **Con quién visitará el club**                                                 | Q13                                                                                                                                                                                                           |
| **El plan pide más sesiones de las que caben en los días declarados**          | Q8, contra la frecuencia del plan                                                                                                       |
| **Interés en Multiclub**                                                       | Q15                                                                                                                                                                                                           |
| **Dato desactualizado**                                                        | El CRM no respondió al componer la experiencia y el sistema utilizó el último dato guardado. La señal debe identificar qué dato se utilizó y de cuándo era para que el asesor lo verifique antes de la visita |

Las primeras ocho señales nacen de información recogida por el instrumento.

La novena nace del propio sistema y **no constituye personalización de la recomendación**: es una señal de contingencia operativa.

La regla general debe ser:

**la persona recibe su experiencia completa; cualquier dato operativo cuya vigencia no haya podido confirmarse debe viajar identificado al brief para que el asesor lo verifique antes de la visita.**

Las señales construidas con respuestas de la persona deben respetar el alcance establecido en el apartado 5.8.

**Ninguna señal debe inferir ni revelar una condición de salud que CEI-01 no esté autorizado a recoger.**
