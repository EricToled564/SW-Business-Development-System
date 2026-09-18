# Capítulo 5 · El cuestionario: el único instrumento

Toda la personalización de la experiencia ideal sale de un solo instrumento: el **Cuestionario de Experiencia Ideal**. No hay una segunda fuente. Nada de lo que el sistema recomienda proviene de un dato que el cuestionario no haya recogido.

## 5.1 Rol y propósito

El cuestionario tiene un trabajo y solo uno: **recoger lo necesario para construir la experiencia ideal de esa persona**, en alrededor de un minuto de su tiempo.

Tres reglas lo gobiernan, y no admiten excepción por canal:

1. **Es el mismo en los tres canales.** Las preguntas, las opciones, las validaciones, las ramificaciones y los identificadores son idénticos en el sitio, en WhatsApp y en consola. BES no lo altera: lo aplica en conversación.
2. **Es la única fuente de personalización.** Ninguna regla de este documento se dispara con un dato que no salga de aquí.
3. **No recoge información de salud.** Ni diagnósticos, ni lesiones, ni embarazo, ni tratamientos, ni medicamentos, ni cirugías, ni peso, estatura o medidas corporales. El apartado 5.7 explica por qué.

## 5.2 Lo que ya sabemos no se vuelve a preguntar

**A la persona no se le pregunta dos veces lo mismo.** Lo que el sistema ya sabe antes de que empiece el cuestionario no se le pregunta: se le confirma, en un solo bloque, antes del primer reactivo.

Ese bloque se llama **P0 · Precarga**, y se declara dentro del instrumento. No es un reactivo: no lleva número, no personaliza por sí mismo y su contenido cambia en cada sesión.

### 5.2.1 De dónde sale lo que ya sabemos

| Canal | Conocimiento previo | Cuando no hay contexto |
|---|---|---|
| **Sitio web** | Las páginas que la persona visitó antes de abrir el cuestionario | Entrada directa al inicio: sin bloque |
| **WhatsApp** | Lo que la campaña que la trajo declara que promueve | Mensaje directo: sin bloque |
| **Consola** | El club donde la persona está parada, que se da por dado | Sin bloque. El club no se pregunta |

### 5.2.2 Las cuatro categorías y las dos formas

Solo cuatro cosas pueden precargarse, y cada una tiene una forma fija de preguntarse:

| Categoría | Forma | Cómo suena |
|---|---|---|
| **Club** | Dos opciones | «¿Te gustaría que tomáramos ese club como tu club ideal, o prefieres que te hagamos una recomendación?» |
| **Amenidad** | Dos opciones | «¿Te gustaría que incluyéramos entrenamiento acuático, o prefieres que te recomendemos?» |
| **Clase** | Sí o no | «¿Te gustaría que incluyéramos yoga en el programa de tu experiencia ideal?» |
| **Objetivo** | Sí o no | «¿Te gustaría que incluyéramos bajar de peso como uno de tus objetivos?» |

**La regla que separa las dos formas:** si al contestar que no alguien tiene que decidir eso de todas maneras, la opción de recomendar debe existir. Si al contestar que no simplemente no se agrega nada y el plan se arma igual, la pregunta es sí o no.

Por eso una clase no lleva «o te recomendamos»: el sistema va a recomendar clases de cualquier forma, y ofrecerlo sería ofrecer lo que ya va a ocurrir. Y por eso un club sí la lleva: si no toma ese club, alguien tiene que elegir uno.

### 5.2.3 Cómo se compone el bloque

**El bloque nunca ofrece algo que el sistema ya sabe que no puede entregar.** Antes de mostrarlo, cada punto candidato se verifica contra la instantánea del día. El que no se pueda cumplir no se muestra, y **no se menciona, no se explica y no deja rastro**.

| Lo que revela el contexto | Lo que dice la instantánea | Qué se muestra |
|---|---|---|
| Un club y una clase | Ese club no la imparte | Solo el club |
| Un club y una amenidad | Ese club no la tiene | Solo el club |
| Un club y una clase | Ese club sí la imparte | Los dos puntos |
| Un club y una amenidad | Ese club sí la tiene | Los dos puntos |
| Una clase, sin club | — | Ese punto. Aceptarlo hace de la clase un requisito del club |
| Una amenidad o un objetivo, sin club | — | Ese punto |

Cuando el contexto revela varias páginas de la misma familia, producen **un solo punto**: tres clases de yoga son un punto, yoga. Cuando revela dos clubes, el punto ofrece los dos, más la opción de recomendar.

**El bloque se compone una sola vez y se muestra una sola vez**, antes del primer reactivo y después de la compuerta de mayoría de edad. No se recompone con las respuestas que la persona dé dentro de él.

### 5.2.4 Qué hace aceptar y qué hace rechazar

| | Efecto |
|---|---|
| **Aceptar** | La respuesta sustituye la del reactivo correspondiente, y ese reactivo no se vuelve a preguntar |
| **Rechazar** | No se precarga nada. El reactivo se pregunta después, en su lugar, sin cambio alguno |

Aceptar un club apaga el resolver de club, no el reactivo 16: el código postal o la colonia siguen haciendo falta para calcular el tiempo de traslado y para el interés en Multiclub.

**Aceptar una clase tiene dos efectos distintos, según haya club o no:**

| | Efecto de aceptar la clase |
|---|---|
| **Con club fijado** | La clase queda asegurada en su tercer bloque. No agrega requisito: el club ya estaba fijo y ya se verificó que la imparte |
| **Sin club fijado** | **La clase se vuelve requisito del club.** El resolver solo considera clubes que la impartan. Si el más cercano no la imparte, ofrece el más cercano que sí, y muestra como alternativas los clubes más cercanos que no la tienen, cada uno con su leyenda |

Ese segundo caso agrega **un quinto requisito** a los cuatro que el cuestionario fija, y es el único que no viene del cuestionario sino del contexto previo. El capítulo 9 especifica cómo entra en la elección de club y qué leyenda lleva la alternativa que no imparte esa clase.

## 5.3 Cómo se compone el cuestionario

| Elemento | Cuántos | Cuándo se pregunta |
|---|---|---|
| **G0** · Compuerta de mayoría de edad | 1 | Siempre, antes que nada. El capítulo 4 la especifica |
| **P0** · Precarga | 1 bloque | Cuando hay contexto previo. Apartado 5.2 |
| **Reactivos base** | 15 | Siempre, en el mismo orden |
| **Reactivos condicionales** | 3 | Solo si una respuesta previa los dispara |

Una persona contesta, por lo tanto, **entre 16 y 19 preguntas**: la compuerta, los quince reactivos base y de cero a tres condicionales.

## 5.4 Los quince reactivos base

| № | Qué pregunta | Qué determina |
|---|---|---|
| **1** | Cómo se llama | El saludo y la redacción de su experiencia. No pide apellido |
| **2** | Cómo prefiere que se dirijan a ella | **La concordancia de las opciones y del texto**, en sus tres formas: masculina, femenina y neutral (apartado 2.6.4). Condiciona la opción prenatal del reactivo 14. Nunca se usa para asignar asesor ni para inferir nada |
| **3** | Qué quiere sentir al salir del club | El tono con que se redacta su experiencia. No cambia el club |
| **4** | Qué busca | Los bloques de entrenamiento, las clases por objetivo y el argumento principal |
| **5** | Qué ritmo va con ella | Criterio de selección de clases, junto con el objetivo y el nivel. También viaja al brief |
| **6** | Dónde prefiere entrenar | El modo de entrenamiento: piso seco, agua, o los dos |
| **7** | En qué horario | Alerta para el asesor si las clases idóneas no coinciden. No descarta clubes ni entra al tiempo de traslado |
| **8** | Qué días | Igual que el reactivo 7 |
| **9** | Cuál es su nivel | El orden de las clases. Nunca funciona como diagnóstico |
| **10** | Cuál describe mejor su experiencia reciente | El contexto comercial y la preparación del recorrido. No incluye opción para quien tiene membresía activa |
| **12** | Si prefiere entrenar sin compañía o clases en grupo | Qué ocupa el tercer bloque. Dos opciones, sin tercera vía |
| **13** | Con quién visitaría el club | La preparación de la visita, y activa la opción infantil del reactivo 14 |
| **14** | Qué preferencia quiere que se priorice | Los requisitos que el club debe cumplir, y la matriz de contraindicaciones |
| **15** | Si busca cerca del domicilio, de la oficina o de ambos | Su origen prioritario, y el interés en Multiclub cuando responde «ambos» |
| **16** | Cuál es el código postal o la colonia de ese origen | Ubica el origen para recomendar club y calcular tiempos de traslado |

El número 11 no aparece en esta lista porque es condicional.

## 5.5 Los tres reactivos condicionales

| № | Se pregunta cuando | Qué determina |
|---|---|---|
| **10a** | El reactivo 10 es «Vengo de otro gimnasio» o cualquiera de las dos opciones de regreso después de una pausa | El gimnasio actual, o el último al que perteneció. Contexto comercial y de atención. Nunca se usa para campañas contra una marca |
| **11** | El reactivo 10 es alguna de las dos opciones de regreso después de una pausa | Cuánto duró la pausa. Ajusta la preparación de la visita, sin inferir estado físico |
| **15b** | El reactivo 15 es «ambos» | Cuál de los dos orígenes es el prioritario. El interés en Multiclub sigue activo sin capturar una segunda ubicación |

## 5.6 Las dos preguntas que cambian la estructura

Trece reactivos ajustan parámetros. Dos cambian la forma de la recomendación:

**El reactivo 4, los objetivos.** La persona elige uno o dos, y **el primero es el objetivo principal**. De él dependen el subgrupo del Bloque 01, el subgrupo del Bloque 02, la ponderación de las clases del Bloque 03 y el arco del texto. El segundo, cuando existe, solo diversifica la selección de clases.

**El reactivo 6, la modalidad.** Decide si la experiencia se arma sobre el catálogo de piso seco o sobre el de agua, y con eso cambia el contenido de los tres bloques a la vez. Sus cuatro opciones se resuelven así:

| Opción | Qué ocurre |
|---|---|
| En piso o área seca | Catálogo de piso seco |
| En la alberca | Catálogo de agua. **La alberca se exige como amenidad** en la elección del club |
| Ambas | El catálogo se mantiene en piso seco, y el sistema **integra de forma proactiva** natación individual y clases acuáticas que sirvan al objetivo declarado. La alberca **no** se exige como amenidad |
| Quiero que me recomienden | El sistema resuelve la modalidad según el objetivo principal |

El capítulo 10 especifica cómo se compone el plan en cada modalidad.

## 5.7 Qué no pregunta el cuestionario, y por qué

El instrumento **no recaba condiciones médicas, embarazo o posparto, tratamientos, medicamentos, cirugías, peso, estatura, medidas corporales ni datos de personas menores de edad.**

La razón es de fondo, no de estilo. La ley clasifica los datos de salud como sensibles y exige para ellos consentimiento expreso y por escrito, con firma. **Un cuestionario de un minuto, aplicado por conversación, no puede satisfacer ese estándar**, y la sanción por incumplimiento se duplica tratándose de datos sensibles.

La decisión no degrada la recomendación, porque **el sistema no necesita la condición: necesita la preferencia.** El reactivo 14 recoge lo que la persona quiere que se priorice —programas de bajo impacto, programas prenatales o de posparto, actividades para niños— y eso es lo que el seleccionador de clases usa. Quien prefiere bajo impacto recibe exactamente la misma selección, sin que Sports World asuma la custodia de un dato sensible ni la responsabilidad clínica que lo acompaña.

El mismo criterio rige el reactivo 13: pregunta por el interés en un servicio, nunca por el estado que lo motiva.

La valoración de salud corresponde al profesional del club, en el momento del alta, con el consentimiento y el formato que ese acto sí permite. El capítulo 11 especifica cómo se aplica la matriz de contraindicaciones en los dos momentos.

**La experiencia ideal tampoco ofrece** acompañamiento nutricional, planes alimenticios, dietas ni recomendaciones de nutrición.

## 5.8 Las señales que viajan al brief

Algunas respuestas no cambian el plan: cambian cómo el asesor conduce la conversación. El sistema las levanta y las pone en el brief.

| Señal | Reactivo que la dispara |
|---|---|
| Intensidad preferida | 5 |
| La disponibilidad declarada no coincide con las clases idóneas | 7 y 8 |
| Nivel de dominio | 9 |
| Viene de otro gimnasio, y cuál | 10 y 10a |
| Regresa a Sports World: se localiza su membresía anterior antes de la visita | 10 |
| Cuánto duró la pausa | 11 |
| Con quién visitará el club | 13 |
| Interés en Multiclub | 15 |

Ninguna señal contiene información de salud, porque el instrumento no la recoge.
