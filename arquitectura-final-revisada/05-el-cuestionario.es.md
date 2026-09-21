# Capítulo 5 · El cuestionario: el único instrumento

Toda la personalización de la Experiencia Ideal sale de un solo instrumento: el **Cuestionario de Experiencia Ideal**, identificado como **CEI-01**.

La versión vigente es la **1.2**, y vive en esta misma carpeta.

**Toda regla del sistema se dispara con un dato que sale de ahí.**

---

## 5.1 Rol y propósito

El cuestionario tiene un trabajo: **recoger lo necesario para construir la Experiencia Ideal de esa persona**, en alrededor de un minuto de su tiempo.

Tres reglas lo gobiernan, y valen igual en las tres puertas de entrada del funnel.

1. **Es el mismo instrumento en las tres puertas.** Las preguntas, las opciones, las validaciones, las ramificaciones y los identificadores son idénticos en el sitio, en WhatsApp y en la consola del asesor. En el sitio se aplica de dos formas —la persona avanza sola, o BES la acompaña—, y CEI-01 cuenta esas cuatro formas de aplicación. Los reactivos son los mismos en las cuatro.
2. **Es la única fuente de personalización.** Cada regla de recomendación consume una respuesta de este instrumento.
3. **Recoge preferencias declaradas.** El apartado 5.8 fija el alcance y la razón legal que lo sostiene.

Los reactivos se identifican con la clave **Q##**, la misma de CEI-01 y de la tabla de códigos del apartado 0.5.

---

## 5.2 La precarga: lo que ya sabemos se confirma

**A la persona se le confirma lo que el sistema ya sabe, en un solo bloque, antes del primer reactivo.**

Ese bloque se llama **P0 · Precarga**, y se declara dentro del instrumento.

Se identifica por esa clave, se compone en cada sesión con el contexto de esa visita, y se resuelve antes del primer reactivo.

---

### 5.2.1 De dónde sale lo que ya sabemos

| Canal | Conocimiento previo | Cuando el contexto está vacío |
|---|---|---|
| **Sitio web** | Las páginas que la persona visitó antes de abrir el cuestionario | Entrada directa al inicio: el bloque se omite |
| **WhatsApp** | Lo que la campaña que la trajo declara que promueve | Mensaje directo: el bloque se omite |
| **Consola** | El club donde la persona está parada, que se da por dado | El bloque se omite. El club viene del canal |

**En el sitio, el conocimiento previo es la navegación.**

Google entrega la visita, y el término que la persona tecleó permanece del lado de Google.

Lo que el sistema conoce es **en qué página aterrizó** y las que visitó después.

| Lo que el sistema tiene | Lo que permanece fuera de su alcance |
|---|---|
| La página de aterrizaje y el recorrido posterior | El término de búsqueda que la trajo |
| Que llegó a la página de yoga de Polanco | Si escribió «yoga cerca de mí» o «clases de yoga Polanco» |
| La ficha de la campaña, cuando viene de una | La consulta original, incluso en campaña |

---

### 5.2.2 Las cuatro categorías y las dos formas

Cuatro cosas pueden precargarse, y cada una tiene una forma fija de preguntarse.

| Categoría | Forma | Cómo suena |
|---|---|---|
| **Club** | Dos opciones | «¿Te gustaría que tomáramos ese club como tu club ideal, o prefieres que te hagamos una recomendación?» |
| **Amenidad** | Dos opciones | «¿Te gustaría que incluyéramos entrenamiento acuático, o prefieres que te recomendemos?» |
| **Clase** | Sí o no | «¿Te gustaría que incluyéramos yoga en el programa de tu Experiencia Ideal?» |
| **Objetivo** | Sí o no | «¿Te gustaría que incluyéramos bajar de peso como uno de tus objetivos?» |

**La regla que separa las dos formas es qué ocurre cuando la persona contesta que no.**

| Qué ocurre al contestar que no | Forma que corresponde |
|---|---|
| Alguien tiene que decidir eso de todas maneras | Dos opciones, con la de recomendar |
| El plan se arma igual sin ese punto | Sí o no |

Una clase se pregunta con sí o no porque el sistema recomienda clases en todos los casos, y ofrecer la recomendación sería ofrecer lo que ya va a ocurrir.

Un club se pregunta con dos opciones porque, si la persona rechaza ese club, alguien tiene que elegir uno.

---

### 5.2.3 Cómo se compone el bloque

**El bloque ofrece únicamente lo que el sistema puede entregar.**

Antes de mostrarlo, cada punto candidato se verifica contra la instantánea del día.

**El punto que la instantánea no respalda se omite del bloque, y el bloque se muestra con los puntos restantes.**

| Lo que revela el contexto | Lo que dice la instantánea | Qué se muestra |
|---|---|---|
| Un club y una clase | Ese club la imparte | Los dos puntos |
| Un club y una clase | La clase se imparte en otros clubes | Solo el club |
| Un club y una amenidad | Ese club la tiene | Los dos puntos |
| Un club y una amenidad | La amenidad está en otros clubes | Solo el club |
| Una clase, sin club | — | Ese punto. Aceptarlo hace de la clase un requisito del club |
| Una amenidad o un objetivo, sin club | — | Ese punto |

Cuando el contexto revela varias páginas de la misma familia, producen **un solo punto**: tres clases de yoga son un punto, yoga.

Cuando revela dos clubes, el punto ofrece los dos, más la opción de recomendar.

**El bloque se compone una sola vez y se muestra una sola vez**, antes del primer reactivo y después de la compuerta de mayoría de edad.

Las respuestas que la persona da dentro del bloque se aplican al cálculo, y el bloque conserva la composición con que se mostró.

---

### 5.2.4 Qué hace aceptar y qué hace rechazar

| Respuesta | Efecto |
|---|---|
| **Aceptar** | La respuesta sustituye la del reactivo correspondiente, y ese reactivo queda resuelto |
| **Rechazar** | El reactivo se pregunta después, en su lugar y en su forma normal |

Aceptar un club resuelve la elección de club, y **Q16 se pregunta igual**: el código postal o la colonia sirven para calcular el tiempo de traslado y para detectar el interés en Multiclub.

**Aceptar una clase tiene dos efectos distintos, según haya club o no.**

| Contexto | Efecto de aceptar la clase |
|---|---|
| **Con club fijado** | La clase queda asegurada en su tercer bloque. El club ya estaba fijo y la instantánea ya confirmó que la imparte |
| **Sin club fijado** | **La clase se vuelve requisito del club.** El resolver considera los clubes que la imparten. Ofrece el más cercano que la imparte, y muestra como alternativas los clubes más cercanos, cada uno con su leyenda |

Ese segundo caso agrega **un quinto requisito** a los cuatro que el cuestionario fija, y es el único que viene del contexto previo.

El capítulo 10 especifica cómo entra en la elección de club y qué leyenda lleva cada alternativa.

---

## 5.3 Cómo se compone el cuestionario

| Elemento | Cuántos | Cuándo se pregunta |
|---|---|---|
| **G0** · Compuerta de mayoría de edad | 1 | Siempre, antes que nada. El capítulo 6 la especifica |
| **P0** · Precarga | 1 bloque | Cuando hay contexto previo. Apartado 5.2 |
| **Reactivos base** | 15 | Siempre, en el mismo orden |
| **Reactivos condicionales** | 3 | Cuando una respuesta previa los dispara |

Una persona contesta, por lo tanto, **entre 16 y 19 preguntas**: la compuerta, los quince reactivos base y de cero a tres condicionales.

Los identificadores vigentes son **Q1 a Q10, Q12 a Q16** en la base, y **Q10a, Q11 y Q15b** en los condicionales.

**Q17, Q18 y Q19 están retirados y reservados**, y quien construya el sistema no debe reutilizarlos.

---

## 5.4 Los quince reactivos base

| Clave | Qué pregunta | Qué determina |
|---|---|---|
| **Q1** | Cómo se llama | El saludo y la redacción de su experiencia. El apellido se pide en la captura de contacto, al terminar |
| **Q2** | Cómo prefiere que se dirijan a ella | **La concordancia de las opciones y del texto**, en sus tres formas: masculina, femenina y neutral (apartado 5.7.4). Habilita la opción prenatal de Q14. **No debe usarse para asignar asesor, ni para inferir identidad o condición** |
| **Q3** | Qué quiere sentir al salir del club | El tono con que se redacta su experiencia. La elección de club se resuelve aparte |
| **Q4** | Qué busca | Los bloques de entrenamiento, las clases por objetivo y el argumento principal |
| **Q5** | Qué ritmo va con ella | Criterio de selección de clases, junto con el objetivo y el nivel. También viaja al brief |
| **Q6** | Dónde prefiere entrenar | El modo de entrenamiento: piso seco, agua o los dos |
| **Q7** | En qué horario | Alerta para el asesor cuando las clases idóneas caen en otra franja. La elección de club y el tiempo de traslado se resuelven aparte |
| **Q8** | Qué días | Igual que Q7 |
| **Q9** | Cuál es su nivel | El orden de las clases. **No debe tratarse como diagnóstico** |
| **Q10** | Cuál describe mejor su experiencia reciente | El contexto comercial y la preparación del recorrido. Sus cuatro opciones son para personas sin membresía activa |
| **Q12** | Si prefiere entrenar sin compañía o clases en grupo | Qué ocupa el tercer bloque. Dos opciones, y la persona elige una de las dos |
| **Q13** | Con quién visitaría el club | La preparación de la visita, y habilita la opción de actividades para menores de Q14 |
| **Q14** | Qué preferencia quiere que se priorice | Los requisitos que el club debe cumplir, y la matriz de contraindicaciones |
| **Q15** | Si busca cerca del domicilio, de la oficina o de ambos | Su origen prioritario, y el interés en Multiclub cuando responde «ambos» |
| **Q16** | Cuál es el código postal o la colonia de ese origen | Ubica el origen para recomendar club y calcular tiempos de traslado |

**Q11 pertenece a los condicionales**, y por eso la lista salta de Q10 a Q12.

---

### 5.4.1 Los cuatro requisitos que el cuestionario fija

Cada preferencia declarada en **Q14** es un requisito en la elección del club.

| Preferencia declarada | El club debe tener |
|---|---|
| Actividades para menores de 3 meses a 13 años | Actividades verificadas para menores de 13 años |
| Programas prenatales o de posparto | Clases adecuadas para esos periodos, para cada uno de los objetivos de la persona |
| Programas de bajo impacto | Clases de bajo impacto, para cada uno de los objetivos de la persona |

El cuarto requisito es **la alberca**, que viene de **Q6** como amenidad y se exige cuando el modo de entrenamiento resuelto es en agua.

Las dos preferencias de clases —prenatal o posparto, y bajo impacto— disparan además la matriz de contraindicaciones.

**La matriz sustituye cada clase contraindicada por una alternativa equivalente para el mismo objetivo.**

El capítulo 12 especifica cómo opera.

---

### 5.4.2 El entrenamiento personal se propone sin preguntarse

**El entrenamiento personal se ofrece a todas las personas**, con al menos una sesión inicial, en las dos ramas de **Q12**.

Por eso el cuestionario lo resuelve solo: lo que Q12 decide es si ocupa el tercer bloque completo o acompaña a las clases en grupo.

---

## 5.5 Los tres reactivos condicionales

| Clave | Se pregunta cuando | Qué determina |
|---|---|---|
| **Q10a** | Q10 es «Vengo de otro gimnasio» o cualquiera de las dos opciones de regreso después de una pausa | El gimnasio actual, o el último al que perteneció. Contexto comercial y de atención. Admite «No lo recuerdo» |
| **Q11** | Q10 es alguna de las dos opciones de regreso después de una pausa | Cuánto duró la pausa, en tres tramos. Ajusta la preparación de la visita |
| **Q15b** | Q15 es «Ambos» | Cuál de los dos orígenes es el prioritario. Se pregunta antes de Q16, y el interés en Multiclub permanece activo con una sola ubicación |

**Q10a no debe usarse para campañas dirigidas contra una marca.**

---

## 5.6 Las dos preguntas que cambian la estructura

Trece reactivos ajustan parámetros. Dos cambian la forma de la recomendación.

---

### 5.6.1 Q4 · Los objetivos

La persona elige uno o dos, y **el primero es el objetivo principal**.

De él dependen el subgrupo del Bloque 01, el subgrupo del Bloque 02, la ponderación de las clases del Bloque 03 y el arco del texto.

El segundo, cuando existe, diversifica la selección de clases.

---

### 5.6.2 Q6 · La modalidad

Decide si la experiencia se arma sobre el catálogo de piso seco o sobre el de agua, y con eso cambia el contenido de los tres bloques a la vez.

| Opción | Qué ocurre |
|---|---|
| En piso o área seca | Catálogo de piso seco |
| En la alberca | Catálogo de agua. **La alberca se exige como amenidad** en la elección del club |
| Ambas | El catálogo se mantiene en piso seco, y el sistema **integra de forma proactiva** natación individual y clases acuáticas que sirvan al objetivo declarado. La alberca queda fuera de los requisitos del club |
| Quiero que me recomienden | El sistema resuelve la modalidad según el objetivo principal |

El capítulo 11 especifica cómo se compone el plan en cada modalidad.

---

## 5.7 Cómo se comporta el cuestionario en pantalla

**A la persona se le presentan las opciones que le corresponden.**

> **Cada respuesta queda fija al tocar «Siguiente».** El cuestionario avanza con ese toque expreso. Mientras la persona sigue en esa pantalla puede cambiar su respuesta las veces que quiera, sin costo, sin aviso y sin perder nada.

---

### 5.7.1 Qué reactivos se preguntan y cuáles se resuelven solos

Un reactivo condicional se muestra y se envía cuando su condición se cumple.

**Para quien no cumple la condición, ese reactivo queda fuera de su cuestionario y fuera de su envío.**

**Qué pasa al retroceder.** Cuando la persona regresa y cambia una respuesta de la que colgaba un reactivo condicional, lo que ya había contestado en ese condicional **se conserva en reposo**: permanece guardado y queda fuera del cálculo y del brief.

Y cuando vuelve a cambiar la respuesta de arriba de modo que el condicional aplique otra vez, **el reactivo reaparece con lo que ya había contestado**.

Es la misma regla de la precarga: lo que ya sabemos se confirma.

---

### 5.7.2 Opciones que aparecen cuando aplican

Dentro de un mismo reactivo, hay opciones que se muestran bajo su condición.

En **Q14**, el reactivo de preferencias:

| Opción | Se muestra |
|---|---|
| Programas de bajo impacto | Siempre |
| Programas prenatales o de posparto | Cuando Q2 es «Femenino» |
| Actividades para menores de 3 meses a 13 años | Cuando Q13 es «Con mis hijos» o «Con mi familia» |
| Ninguna de las anteriores | Siempre, y es excluyente |

Por eso **Q14 va después de Q13**: necesita saber con quién visitaría el club para decidir qué opciones ofrecerle.

---

### 5.7.3 Opciones que se apagan al llegar al límite

**Q4** permite elegir hasta dos objetivos, y la pantalla lo hace visible mientras la persona elige.

| Lleva elegidos | Qué ve |
|---|---|
| **Ninguno** | Todas las opciones disponibles. El avance se habilita con la primera elección |
| **Uno** | Todas siguen disponibles. Ya puede avanzar. El elegido queda marcado como **objetivo principal** |
| **Dos** | Las no elegidas **se apagan**. Puede avanzar. Un aviso le dice que ya eligió sus dos y que puede tocar uno para cambiarlo |

**Mientras no toque «Siguiente», puede cambiar de objetivos con entera libertad.**

Tocar una opción apagada mantiene la selección como está.

Tocar una ya elegida la libera, y con eso vuelve a tener cupo para otra.

Puede deshacer y rehacer su elección cuantas veces quiera: **el límite de dos acota lo que puede llevarse, y las veces que cambia de opinión quedan a su criterio.**

**El orden de selección se conserva y significa algo:** la primera que toca es su objetivo principal, y el capítulo 7 explica cuánto pesa esa diferencia.

Para invertirlos, deselecciona los dos y vuelve a elegir en el orden que quiere.

---

### 5.7.4 La concordancia con la forma de trato

El primer reactivo que cambia la pantalla es **Q2**, donde la persona dice cómo prefiere que se dirijan a ella: masculino, femenino o lenguaje neutral.

**La concordancia alcanza a las palabras que se refieren a la persona que contesta.**

Cada una de ellas existe en tres versiones, y la persona ve solo la suya.

| Dónde | Masculino | Femenino | Lenguaje neutral |
|---|---|---|---|
| Q12 · Acompañamiento | Entrenar **solo** | Entrenar **sola** | Entrenar **sin compañía** |

**Lo que se refiere a otras personas se escribe con gramática española correcta**, y conserva esa forma cualquiera que sea la de quien contesta.

El género de esas personas permanece fuera del instrumento, y la regla para nombrarlas tiene dos casos.

| Caso | Qué se escribe | Ejemplo |
|---|---|---|
| El español tiene una palabra que nombra a la persona sin declarar su género | Se usa esa palabra | «Con una amistad», «Con mi pareja» |
| El español nombra al conjunto con el plural masculino, que ya las incluye | Se usa ese plural | «Con mis hijos», «Actividades para menores de 3 meses a 13 años» |

La forma neutral es **una frase que vale para cualquiera**.

**Queda prohibida toda marca tipográfica de inclusión** —arroba, equis, vocal entre paréntesis y doble terminación separada por barra—: la redacción correcta es «entrenar sin compañía», y «solo/a» y «amig@» quedan fuera del instrumento.

La concordancia sigue más allá del cuestionario.

**Q2 gobierna también el texto que el sistema redacta** —el saludo, el argumento de su plan y el encabezado de su brief—, de principio a fin.

El capítulo 13 especifica cómo.

---

## 5.8 El alcance del cuestionario

El instrumento **recoge preferencias declaradas**.

Las condiciones médicas, el embarazo y el posparto, los tratamientos, los medicamentos, las cirugías, el peso, la estatura, las medidas corporales y los datos de personas menores de edad **permanecen fuera de su alcance**, y quien construya el sistema no debe recabarlos ni inferirlos.

La razón es de fondo.

La ley clasifica los datos de salud como sensibles y exige para ellos consentimiento expreso y por escrito, con firma.

**Un cuestionario de un minuto, aplicado por conversación, queda por debajo de ese estándar**, y la sanción por incumplimiento se duplica tratándose de datos sensibles.

La decisión deja intacta la recomendación, porque **el sistema trabaja con la preferencia.**

**Q14** recoge lo que la persona quiere que se priorice —programas de bajo impacto, programas prenatales o de posparto, actividades para menores— y eso es lo que el seleccionador de clases usa.

Quien prefiere bajo impacto recibe la misma selección, y Sports World queda al margen de la custodia de un dato sensible y de la responsabilidad clínica que lo acompaña.

El mismo criterio rige **Q13**: pregunta por el interés en un servicio.

La valoración de salud corresponde al profesional del club, en el momento del alta, con el consentimiento y el formato que ese acto sí permite.

El capítulo 12 especifica cómo se aplica la matriz de contraindicaciones en los dos momentos.

**La Experiencia Ideal cubre entrenamiento**, y el acompañamiento nutricional, los planes alimenticios, las dietas y las recomendaciones de nutrición quedan fuera de su alcance.

---

## 5.9 Las señales que viajan al brief

Algunas respuestas dejan el plan igual y cambian cómo el asesor conduce la conversación.

El sistema las levanta y las pone en el brief.

| Señal | Qué la dispara |
|---|---|
| Intensidad preferida | **Q5** |
| La disponibilidad declarada cae en otra franja que las clases idóneas | **Q7** y **Q8** |
| Nivel de dominio | **Q9** |
| Viene de otro gimnasio, y cuál | **Q10** y **Q10a** |
| Regresa a Sports World: se localiza su membresía anterior antes de la visita | **Q10** |
| Cuánto duró la pausa | **Q11** |
| Con quién visitará el club | **Q13** |
| Interés en Multiclub | **Q15** |
| **Dato desactualizado** | El CRM quedó sin responder al componer la experiencia, y el sistema la resolvió con el último dato guardado. La bandera dice qué dato se usó y cuál era, para que el asesor lo verifique antes de la visita |

Las ocho primeras salen de lo que la persona contesta. La novena sale del propio sistema.

**Es la regla general de la contingencia:** la persona recibe su experiencia completa, el dato que quedó en duda viaja señalado al brief, y el asesor lo confirma antes de la visita.

Las señales se componen con lo que el instrumento recoge, y el apartado 5.8 fija ese alcance.
