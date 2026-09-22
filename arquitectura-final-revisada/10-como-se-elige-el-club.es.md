# Capítulo 10 · Cómo se elige el club

El sistema resuelve un solo club: **el club ideal**.

Es el club que la Experiencia Ideal usa para calcular sus tres bloques, sus clases y el tiempo de traslado que se le muestra a la persona.

**El sistema debe entregar siempre un club**, incluso cuando ninguno cumple todo lo que la persona pidió.

---

## 10.1 El principio

El club ideal se resuelve contra **cuatro requisitos que pueden filtrar clubes**, y una condición de fondo que no filtra ninguno.

La condición de fondo: para cada objetivo que la persona declaró en Q4, en la intensidad de Q5, debe existir al menos una clase elegible en el club. El apartado 7.4.1 fija esa comprobación, y **por diseño de la red, las 18 combinaciones de objetivo e intensidad se cumplen en los 49 clubes**. Es una garantía que ya viene resuelta.

Lo que sí filtra son los cuatro requisitos de este capítulo, porque no todos los clubes tienen alberca, ni todos ofrecen los tres programas de preferencia.

**El sistema no debe recomendar como club ideal uno que impida cumplir la modalidad elegida o resuelta para la persona.** El apartado 5.6.2 fija esa regla para la alberca; este capítulo la aplica.

---

## 10.2 Los cuatro requisitos

| Clave | Requisito | De dónde sale |
|---|---|---|
| **REQ-1** | Alberca | Q6, cuando la modalidad elegida o resuelta es **En la alberca** o **Ambas** (apartados 5.6.2 y 7.5.1) |
| **REQ-2** | Clases de bajo impacto, para cada uno de los objetivos de la persona | Q14, cuando declara **«Programas de bajo impacto»** |
| **REQ-3** | Clases adecuadas para periodos prenatal o posparto, para cada uno de los objetivos de la persona | Q14, cuando declara **«Programas prenatales o de posparto»** |
| **REQ-4** | Actividades verificadas para menores de 13 años | Q14, cuando declara **«Actividades para menores de 3 meses a 13 años»** |

Cada requisito declarado es **excluyente**: un club que no lo cumple queda fuera del club ideal, aunque sea el más cercano.

**Un quinto requisito, condicional y fuera de la familia REQ-#.** Cuando la persona acepta en la precarga una clase sin tener club fijado, esa clase se convierte en requisito del club, conforme al apartado 5.2.4. Nace del contexto previo de cada sesión, y por eso queda fuera de la familia REQ-#, que es fija.

**Ninguno de los cuatro requisitos se mide en la matriz de contraindicaciones.** REQ-2, REQ-3 y REQ-4 declaran una preferencia de programa; qué clases concretas la satisfacen es trabajo del capítulo 12.

---

## 10.3 El radio de 10 km

**El sistema resuelve el club ideal entre los clubes dentro de 10 km del origen de la persona.**

Ese origen lo da **Q16** —código postal o colonia—, sobre el que Q15 y Q15b fijan si es domicilio, oficina, o el prioritario entre ambos.

Los 10 km son un radio de resolución, no de exploración. El apartado 3.6.2 fija el radio de 5 km con el que la persona explora otros clubes desde su club ideal, y los dos no se confunden ni se unifican.

**Cuando ningún club dentro de los 10 km cumple los requisitos, el sistema amplía la búsqueda a la red completa de 49 clubes.** El apartado 10.5, modo 3, especifica esa ampliación.

---

## 10.4 Minutos con tráfico

**Los kilómetros acotan qué clubes entran en el cálculo. Los minutos son lo que se le muestra a la persona.**

El tiempo de traslado se calcula con tráfico, a la hora pico, y se presenta siempre como **«máx X minutos»**.

No se calcula a la hora que la persona declaró que prefiere entrenar, porque el sistema no puede saber si entrenará precisamente a esa hora. Q7 y Q8 generan una alerta para el asesor cuando la disponibilidad declarada no coincide con las clases idóneas, pero no entran al cálculo del tiempo de traslado ni descartan clubes.

El tiempo de traslado en minutos aparece en el club recomendado del apartado 4.2.1, en la entrega de la ruta reducida del capítulo 6, y en el brief.

---

## 10.5 Los cuatro modos

El sistema resuelve el club ideal en uno de cuatro modos, según cuántos clubes cumplan los requisitos y a qué distancia.

| Modo | Cuándo se dispara | Qué resuelve el sistema |
|---|---|---|
| **Varios cumplen** | Más de un club dentro de 10 km cumple todos los requisitos | El más cercano de los que cumplen |
| **Uno cumple** | Exactamente un club dentro de 10 km cumple todos los requisitos | Ese club |
| **Cumple más lejos** | Ningún club dentro de 10 km cumple todos los requisitos, y al menos uno de la red completa sí | El más cercano de toda la red que cumple todos los requisitos |
| **Lo más cercano a tu objetivo** | Ningún club de la red completa cumple todos los requisitos a la vez | El club que cumple el mayor número de requisitos, con prioridad a los que sirven al objetivo principal declarado en Q4 |

**Los tres primeros modos entregan un club que cumple todo lo que la persona pidió.** Solo el cuarto entrega un club con algo pendiente, y **ese pendiente debe declararse siempre**.

**El modo «Lo más cercano a tu objetivo» se espera infrecuente.** La condición de fondo del apartado 10.1 ya garantiza clase elegible en todos los clubes; este modo solo se dispara cuando la combinación de requisitos declarados —alberca, bajo impacto, prenatal o posparto, actividades para menores— no la cumple ningún club a la vez.

---

## 10.6 Alternativas y leyendas

**Junto al club ideal, el sistema debe ofrecer alternativas cercanas para que la persona pueda comparar.**

Cada alternativa que no cumple algún requisito lleva su leyenda, una por requisito incumplido:

| Requisito incumplido | Leyenda |
|---|---|
| REQ-1 · Alberca | «No tiene alberca» |
| REQ-2 · Bajo impacto | «No tiene clases de bajo impacto» |
| REQ-3 · Prenatal o posparto | «No tiene clases adecuadas para periodos prenatal o posparto» |
| REQ-4 · Actividades para menores | «No tiene actividades para menores de 13 años» |
| El quinto requisito, condicional | Una leyenda que nombra la clase que no imparte |

**Cuando el club que la persona pidió no cumple**, el sistema no lo descarta en silencio: le dice en concreto qué le falta, y **ese club queda disponible para que la persona se cambie a él si lo prefiere**. La situación es la misma tanto si nadie cerca cumple, como si la persona eligió directamente un club que no cumple, como si la precarga trajo uno que no cumple: el sistema responde igual en los tres casos.

**De dónde sale exactamente el conjunto de alternativas —una tabla de clubes cercanos que Sports World asigna, o una matriz calculada de tiempos entre clubes— es un punto abierto.** El documento nombra el comportamiento; la fuente de datos se declara cuando se decida, conforme al apartado 10.1 y a la regla de origen de datos del capítulo 14.

---

## 10.7 Elección propia

**La persona puede fijar su club sin pasar por los cuatro modos.**

Ocurre de dos formas:

| Cómo fija su club | Qué hace el sistema |
|---|---|
| **Acepta el club en la precarga** | El apartado 5.2.4 resuelve la elección de club directamente. Los cuatro modos no se ejecutan |
| **Cambia de club dentro de su experiencia** | El apartado 4.2.3 recompone el plan completo contra el club que eligió |

**En los dos casos, si el club elegido no cumple algún requisito, el sistema se lo dice** con la misma leyenda del apartado 10.6, y su plan se recompone con las alternativas equivalentes disponibles en ese club, conforme al apartado 4.2.4.

**La elección propia siempre prevalece.** El sistema informa; no revierte la decisión de la persona.
