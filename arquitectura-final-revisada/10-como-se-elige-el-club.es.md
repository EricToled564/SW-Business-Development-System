# Capítulo 10 · Cómo se elige el club

El sistema resuelve un solo club como recomendación principal: **el club ideal**.

Es el club que la Experiencia Ideal utiliza inicialmente para calcular sus tres bloques, sus clases y el tiempo de traslado que se muestra a la persona.

**La selección automática debe buscar primero el club que pueda cumplir mejor con todos los requisitos derivados de las respuestas del cuestionario.**

Sin embargo, la Experiencia Ideal también debe mostrar otras opciones de club. Cada una debe indicar claramente mediante un **flag** si cumple todos esos requisitos o cuáles no puede cumplir.

La persona puede elegir uno de esos clubes aun cuando tenga uno o más incumplimientos, pero **el sistema no debe interpretar el simple clic como aceptación de la carencia.**

Antes de efectuar el cambio debe explicar qué parte de la Experiencia Ideal tendrá que modificarse y pedir una confirmación expresa.

La regla general es:

**El sistema recomienda el club que puede entregar lo que la persona pidió. La persona puede elegir otro, pero debe saber exactamente qué dejará fuera de su Experiencia Ideal y aceptarlo antes de que el cambio se ejecute.**

---

## 10.1 El principio

La selección automática del club se resuelve contra:

* una condición de fondo que debe verificarse pero que, por diseño, no diferencia a los clubes;
* los requisitos activos derivados del cuestionario y del contexto confirmado;
* la cercanía entre los clubes que satisfacen esos requisitos.

**La condición de fondo**

Para cada objetivo declarado en Q4 y en la intensidad declarada en Q5 debe existir al menos una clase elegible en el club.

El apartado 7.4.1 fija esa comprobación.

Por diseño de la red: **las 18 combinaciones de seis objetivos × tres intensidades tienen al menos una clase elegible en cada uno de los 49 clubes.**

Por tanto, esta condición debe verificarse, pero normalmente no diferencia un club de otro.

**Los requisitos activos**

Los requisitos sí pueden diferenciar a los clubes porque no todos disponen de:

* alberca;
* programas de bajo impacto;
* programas prenatales o posparto;
* actividades para menores;
* o una clase específica confirmada mediante P0.

Para la recomendación automática, cada requisito activo funciona como condición de cumplimiento.

**Mientras exista un club que satisfaga todos los requisitos activos, el sistema no debe recomendar como club ideal uno que incumpla alguno únicamente por estar más cerca.**

---

## 10.2 Los cuatro requisitos

| Clave | Requisito | De dónde sale |
|---|---|---|
| **REQ-1** | Alberca | Q6, cuando la modalidad elegida o resuelta es **En la alberca** o **Ambas** |
| **REQ-2** | Clases de bajo impacto para cada objetivo declarado | Q14, cuando declara **Programas de bajo impacto** |
| **REQ-3** | Clases adecuadas para periodos prenatal o posparto para cada objetivo declarado | Q14, cuando declara **Programas prenatales o de posparto** |
| **REQ-4** | Actividades verificadas para menores de 13 años | Q14, cuando declara **Actividades para menores de 3 meses a 13 años** |

Estos cuatro requisitos deben utilizarse para determinar qué clubes pueden satisfacer completamente lo que la persona declaró.

Un club que incumple uno de ellos puede seguir apareciendo como alternativa, pero **no debe convertirse automáticamente en el club ideal mientras exista una opción que cumpla todos los requisitos.**

### 10.2.1 REQ-1 · Alberca

La alberca debe convertirse en requisito cuando Q6:

* sea **En la alberca**;
* sea **Ambas**;
* o **Quiero que me recomienden** haya sido resuelto por el sistema como **En la alberca**.

En esos casos, un club sin alberca:

* no debe ser la recomendación automática;
* debe mostrar el flag **No tiene alberca**;
* y solo puede convertirse en la elección final si la persona acepta expresamente excluir el componente acuático de su Experiencia Ideal.

### 10.2.2 REQ-2 · Bajo impacto

Cuando Q14 indique **Programas de bajo impacto**, el sistema debe comprobar que el club pueda satisfacer ese requisito para los objetivos declarados.

Si no puede:

* no debe ser la recomendación automática mientras exista otro que sí pueda;
* debe mostrar **No tiene clases de bajo impacto**;
* y, si la persona quiere seleccionarlo, debe aceptar expresamente que ese requisito deje de formar parte de la Experiencia Ideal calculada para ese club.

### 10.2.3 REQ-3 · Prenatal o posparto

Cuando Q14 indique **Programas prenatales o de posparto**, el club debe disponer de oferta compatible con ese requisito.

Si no la tiene:

* no debe ser la recomendación automática mientras exista otro que sí la tenga;
* debe mostrar **No tiene clases adecuadas para periodos prenatal o posparto**;
* y la persona debe aceptar expresamente la exclusión antes de que el sistema cambie de club.

### 10.2.4 REQ-4 · Actividades para menores

Cuando Q14 indique **Actividades para menores de 3 meses a 13 años**, el club debe disponer del servicio correspondiente.

Si no lo tiene:

* no debe ser la recomendación automática mientras exista otro que sí lo tenga;
* debe mostrar **No tiene actividades para menores de 13 años**;
* y la persona debe confirmar que acepta continuar sin ese elemento antes de efectuar el cambio.

---

## 10.3 El quinto requisito condicional

Existe un quinto requisito que no pertenece a la familia fija REQ-#.

Cuando la persona acepta mediante P0 una clase específica sin tener todavía un club fijado, esa clase debe convertirse en requisito para seleccionar el club.

Por ejemplo, si la persona confirma que quiere Yoga, el sistema debe intentar resolver un club que imparta Yoga.

Ese requisito:

* nace del contexto previo confirmado;
* existe únicamente cuando fue aceptado por la persona;
* debe participar en la selección automática;
* y debe verificarse contra el catálogo real del club.

Si una alternativa no imparte esa clase, debe mostrar un flag que la nombre específicamente:

**No imparte Yoga**

o el nombre exacto de la clase correspondiente.

Si la persona decide seleccionar ese club, debe confirmar expresamente que acepta eliminar esa clase de la Experiencia Ideal calculada para ese club.

---

## 10.4 Los requisitos y la selección de clases son dos cosas diferentes

Los requisitos de este capítulo determinan qué debe poder ofrecer el club.

La selección concreta de clases se resuelve posteriormente con las reglas correspondientes de clases y contraindicaciones.

Por tanto:

* REQ-2 determina que debe existir una solución de bajo impacto;
* REQ-3 determina que debe existir una solución prenatal o posparto;
* REQ-4 determina que debe existir el servicio correspondiente para menores;
* REQ-1 determina la disponibilidad de alberca;
* y el requisito de P0 determina la disponibilidad de una clase específica.

Después, los capítulos correspondientes determinan qué clases concretas se utilizan para construir la Experiencia Ideal.

**El sistema no debe confundir capacidad del club con selección específica de clases dentro de ese club.**

---

## 10.5 El radio de 10 km

**El sistema debe intentar resolver primero el club ideal entre los clubes situados dentro de 10 km del origen prioritario de la persona.**

El origen se obtiene de:

* Q15;
* Q15b, cuando aplica;
* y Q16.

Q16 aporta el código postal o colonia.

Q15 y Q15b determinan si el punto relevante corresponde a:

* domicilio;
* oficina;
* o el prioritario entre ambos.

Los 10 km son un radio de resolución inicial.

No deben confundirse con el radio de 5 km utilizado para mostrar y explorar otros clubes en el apartado 3.6.2.

Las funciones son distintas:

**10 km** = universo inicial para resolver el club ideal.

**5 km** = universo de exploración de otros clubes alrededor del club seleccionado.

Cuando ningún club dentro de 10 km cumple todos los requisitos, el sistema debe ampliar la búsqueda conforme al apartado 10.7.

---

## 10.6 Cómo se mide la cercanía

Los kilómetros y los minutos cumplen funciones diferentes.

Los kilómetros determinan qué clubes entran inicialmente en el universo de resolución.

Los minutos determinan cuál es más cercano entre los clubes comparables.

**La cercanía debe medirse mediante tiempo estimado de traslado en automóvil con tráfico de hora pico.**

Entre dos clubes que cumplen las mismas condiciones, debe preferirse el que tenga menor tiempo de traslado.

El valor mostrado a la persona debe utilizar el formato **«máx X minutos»**.

El cálculo no debe utilizar la hora declarada en Q7.

Q7 y Q8 determinan disponibilidad para entrenamiento y generan las señales correspondientes, pero:

* no deben excluir clubes;
* no deben modificar el cálculo de traslado;
* ni deben modificar el radio de búsqueda.

**Contingencia cuando no existe tráfico disponible**

Cuando no exista información válida de tráfico para comparar opciones, el sistema debe utilizar distancia por ruta.

No debe utilizar distancia en línea recta.

El tiempo estimado debe mostrarse en:

* la Experiencia Ideal;
* la ruta reducida del capítulo 6;
* y el brief.

---

## 10.7 Los cuatro modos de resolución automática

La recomendación automática debe resolverse en uno de cuatro modos.

| Modo | Cuándo se dispara | Qué resuelve el sistema |
|---|---|---|
| **Varios cumplen** | Más de un club dentro de 10 km cumple todos los requisitos activos | El de menor tiempo de traslado entre los que cumplen |
| **Uno cumple** | Exactamente un club dentro de 10 km cumple todos los requisitos activos | Ese club |
| **Cumple más lejos** | Ningún club dentro de 10 km cumple todos los requisitos, pero al menos uno de los 49 sí | El de menor tiempo de traslado entre todos los clubes que cumplen |
| **Lo más cercano a tu objetivo** | Ningún club de la red completa cumple todos los requisitos activos simultáneamente | El que cumple el mayor número de requisitos y, entre los empatados, el de menor tiempo de traslado |

Los tres primeros modos producen una recomendación que cumple todo lo declarado.

**Solo el cuarto puede producir una recomendación con uno o más requisitos pendientes.**

En ese caso, los incumplimientos deben declararse mediante sus flags.

### 10.7.1 Cómo se resuelve el cuarto modo

Cuando ningún club de los 49 cumple todos los requisitos simultáneamente, el sistema debe:

* contar cuántos requisitos activos cumple cada club;
* conservar los que cumplen el mayor número;
* entre esos clubes, elegir el de menor tiempo de traslado;
* si no existe información válida de tráfico, utilizar la menor distancia por ruta.

La condición de clases objetivo × intensidad no debe utilizarse como desempate porque los 49 clubes ya la cumplen por diseño.

El quinto requisito de P0 debe contar también cuando esté activo.

### 10.7.2 El cuarto modo debe ser excepcional

**Lo más cercano a tu objetivo** solo debe utilizarse después de comprobar que ningún club de toda la red puede satisfacer simultáneamente todos los requisitos activos.

No debe activarse simplemente porque el club más cercano no cumple.

Primero debe comprobarse:

* el radio inicial de 10 km;
* después la red completa;
* y únicamente entonces utilizar cumplimiento parcial.

---

## 10.8 Las otras opciones de club dentro de la Experiencia Ideal

Una vez calculado el club ideal, la Experiencia Ideal debe mostrar también otras opciones de club conforme al universo de exploración definido para el sitio.

Cada opción debe mostrar un flag específico para esa persona.

El flag debe responder a una pregunta: **¿Puede este club cumplir con los requisitos que resultaron de tu cuestionario?**

### 10.8.1 Club que cumple todo

Cuando una opción cumple todos los requisitos activos debe mostrar:

**Cumple con tus requisitos**

Ese indicador significa que cambiar a ese club no obliga a eliminar ninguno de los requisitos que la persona había declarado.

### 10.8.2 Club que no cumple todo

Cuando una opción no cumple uno o más requisitos debe mostrar exactamente cuáles.

| Incumplimiento | Flag |
|---|---|
| REQ-1 · Alberca | «No tiene alberca» |
| REQ-2 · Bajo impacto | «No tiene clases de bajo impacto» |
| REQ-3 · Prenatal o posparto | «No tiene clases adecuadas para periodos prenatal o posparto» |
| REQ-4 · Actividades para menores | «No tiene actividades para menores de 13 años» |
| Clase confirmada mediante P0 | «No imparte [nombre de la clase]» |

Si incumple varios requisitos, debe mostrar todos los correspondientes.

Por ejemplo:

* No tiene alberca
* No tiene actividades para menores de 13 años

El sistema no debe resumirlos en una advertencia genérica como **«No cumple todos tus requisitos»**, porque la persona necesita saber exactamente cuál es la diferencia.

### 10.8.3 Los flags son personales

Los flags no describen al club en abstracto.

Describen la relación entre lo que esa persona pidió y lo que ese club puede ofrecerle.

El mismo club puede aparecer:

* con **Cumple con tus requisitos** para una persona;
* con **No tiene alberca** para otra;
* y con varios flags para una tercera.

**Los flags deben calcularse contra los requisitos activos de cada recorrido.**

### 10.8.4 Los flags aparecen durante la comparación

Los flags deben mostrarse mientras la persona compara clubes.

Una vez elegido definitivamente un club y recalculada la Experiencia Ideal, el plan final debe mostrar la experiencia que realmente puede entregarse en ese club.

No debe mantenerse permanentemente dentro del plan una lista de cosas que el club no ofrece.

Si la persona vuelve a abrir la comparación de clubes, los flags deben volver a mostrarse.

---

## 10.9 Cambiar a otro club

La persona puede seleccionar cualquiera de las otras opciones mostradas dentro de su Experiencia Ideal.

Existen dos casos.

**El nuevo club cumple todo**

Si aparece con **Cumple con tus requisitos**, el sistema puede efectuar el cambio directamente.

Después debe recalcular la Experiencia Ideal completa contra ese club.

**El nuevo club tiene uno o más flags**

Si el club incumple algún requisito, el sistema no debe efectuar el cambio inmediatamente.

Debe abrir primero una confirmación que explique la consecuencia.

---

## 10.10 El flag informa; el pop-up obtiene la aceptación

El hecho de que la persona pueda ver un flag no significa que haya aceptado la carencia.

El flag sirve para informar durante la comparación.

**Cuando toca «Cambiar a este club», el sistema debe abrir un pop-up si existe al menos un requisito incumplido.**

El pop-up debe:

* identificar qué no tiene el club;
* recordar qué había indicado la persona;
* explicar qué deberá excluirse o modificarse de su Experiencia Ideal;
* y preguntar expresamente si acepta esa consecuencia.

**El cambio no debe ejecutarse antes de esa confirmación.**

### 10.10.1 Ejemplo · Club sin alberca

Si la persona había pedido entrenamiento acuático y selecciona un club sin alberca:

> Este club no tiene alberca.
>
> Nos habías indicado que querías incluir entrenamiento acuático en tu Experiencia Ideal.
>
> Podemos cambiarte a este club, pero para hacerlo tendremos que excluir el entrenamiento acuático de tu experiencia.
>
> ¿Estás de acuerdo?

Acciones:

* **Sí, cambiar de club**
* **No, conservar mi club actual**

Solo la primera debe autorizar el cambio.

### 10.10.2 Ejemplo · Bajo impacto

> Este club no puede cubrir las opciones de bajo impacto que habías solicitado.
>
> Podemos cambiarte a este club, pero tendremos que recalcular tu Experiencia Ideal sin ese requisito.
>
> ¿Estás de acuerdo?

### 10.10.3 Ejemplo · Prenatal o posparto

> Este club no ofrece las opciones prenatales o posparto que habías solicitado.
>
> Podemos cambiarte a este club, pero ese requisito tendrá que excluirse de tu Experiencia Ideal.
>
> ¿Estás de acuerdo?

### 10.10.4 Ejemplo · Actividades para menores

> Este club no ofrece las actividades para menores que habías solicitado.
>
> Podemos cambiarte a este club, pero esas actividades no formarán parte de tu Experiencia Ideal.
>
> ¿Estás de acuerdo?

### 10.10.5 Ejemplo · Clase confirmada en P0

> Este club no imparte [nombre de la clase].
>
> Nos habías indicado que querías incluirla en tu experiencia.
>
> Podemos cambiarte a este club, pero tendremos que excluir esa clase y recalcular las alternativas disponibles.
>
> ¿Estás de acuerdo?

---

## 10.11 Cuando el club incumple más de un requisito

Si el club tiene varios flags, el sistema no debe abrir un pop-up por cada uno.

**Debe presentar una sola confirmación con todas las consecuencias.**

Por ejemplo:

> Este club no cumple dos de los requisitos de tu Experiencia Ideal:
>
> * No tiene alberca.
> * No tiene actividades para menores de 13 años.
>
> Nos habías indicado que querías incluir entrenamiento acuático y actividades para tus hijos.
>
> Podemos cambiarte a este club, pero esos elementos tendrán que excluirse de tu Experiencia Ideal.
>
> ¿Estás de acuerdo?

Acciones:

* **Sí, cambiar de club**
* **No, conservar mi club actual**

**La confirmación debe cubrir el conjunto completo de carencias.**

---

## 10.12 Qué ocurre cuando la persona acepta

Cuando la persona confirma que desea cambiar a un club que no cumple todos los requisitos, el sistema debe:

* convertir ese club en el club seleccionado;
* registrar cuáles requisitos no puede cumplir;
* registrar que la persona fue informada y aceptó continuar sin ellos;
* conservar intactas las respuestas originales de CEI-01;
* recalcular la Experiencia Ideal completa contra el catálogo real del nuevo club;
* excluir del nuevo plan aquello que el club no puede entregar;
* recomponer bloques y clases cuando corresponda;
* recalcular el tiempo de traslado;
* generar la nueva versión completa de la Experiencia Ideal;
* y actualizar el brief con el mismo estado final.

**No debe limitarse a sustituir el nombre del club.**

### 10.12.1 Ejemplo con alberca

Si Q6 originalmente era **En la alberca** y la persona acepta posteriormente cambiarse a un club sin alberca:

la respuesta original de Q6 debe permanecer registrada como **En la alberca**, pero el sistema debe registrar además una excepción posterior: la persona eligió voluntariamente un club sin alberca y aceptó excluir el componente acuático de la Experiencia Ideal de ese club.

La nueva experiencia:

* no debe incluir entrenamiento acuático;
* no debe mencionar actividades en alberca;
* debe recalcular las alternativas disponibles;
* y no debe presentar el club como si pudiera satisfacer la preferencia original.

---

## 10.13 La respuesta original del cuestionario se conserva

La aceptación de una carencia durante la selección de club no debe modificar retroactivamente CEI-01.

Debe conservarse la diferencia entre:

**Lo que la persona declaró**

Las respuestas originales del cuestionario.

**Lo que posteriormente decidió aceptar**

Las excepciones que aceptó para poder utilizar un club determinado.

Por ejemplo:

* Q6 original: En la alberca
* Club seleccionado posteriormente: sin alberca
* Excepción aceptada: excluir entrenamiento acuático de esta Experiencia Ideal

Las tres cosas son diferentes y deben conservarse como tales.

Esto permite que el sistema y el asesor sepan:

* qué quería originalmente la persona;
* qué limitación tenía el club elegido;
* y qué decidió aceptar conscientemente.

---

## 10.14 Qué recibe el asesor

Cuando existe una excepción aceptada, el brief debe reflejarla.

El asesor debe poder distinguir la respuesta original, el requisito que el club no cumple, y la decisión posterior de la persona.

Por ejemplo:

* Preferencia original: entrenamiento acuático
* Club seleccionado: [club]
* Disponibilidad: sin alberca
* Decisión de la persona: aceptó continuar sin entrenamiento acuático

El brief no debe presentar esa diferencia como un error de cálculo.

Debe mostrarla como **una elección informada realizada después del cuestionario.**

---

## 10.15 Qué ocurre si la persona no acepta

Si la persona selecciona un club con flags y después responde que no acepta las consecuencias:

* el cambio no debe ejecutarse;
* el club anterior debe conservarse;
* la Experiencia Ideal no debe modificarse;
* las respuestas originales deben permanecer intactas;
* no debe registrarse ninguna excepción aceptada;
* y la persona debe volver a la comparación de clubes.

Las demás opciones deben seguir disponibles.

---

## 10.16 Cambiar nuevamente de club

**La misma lógica debe repetirse cada vez que la persona cambia de club.**

Cada nuevo club debe evaluarse nuevamente contra los requisitos originales del cuestionario, no únicamente contra las excepciones aceptadas para el club anterior.

Por ejemplo:

* la persona pidió alberca;
* eligió después un club sin alberca;
* aceptó excluir el entrenamiento acuático;
* posteriormente abre otra vez la comparación;
* selecciona ahora un club con alberca.

El sistema debe reconocer que ese nuevo club sí puede cumplir la preferencia original.

La excepción asociada al club anterior no debe convertirse en una modificación permanente del cuestionario.

Al recalcular para el nuevo club, el sistema debe volver a partir de las respuestas originales y de las capacidades del nuevo club.

---

## 10.17 Elección mediante P0

Cuando la persona acepta un club directamente en P0, esa elección debe utilizarse como club inicial conforme al capítulo 5.

Sin embargo, aceptar el nombre del club en P0 no significa aceptar automáticamente sus carencias frente al resto del cuestionario, porque en ese momento esas respuestas todavía pueden no existir.

Una vez completado CEI-01, el sistema debe comparar el club fijado mediante P0 contra todos los requisitos finalmente declarados.

Si cumple todo: la Experiencia Ideal puede calcularse directamente contra ese club.

Si no cumple uno o más requisitos:

* la Experiencia Ideal debe informar los flags correspondientes;
* el sistema debe explicar las consecuencias;
* y la persona debe confirmar si desea conservar ese club a pesar de las carencias.

Si no acepta: el sistema debe recomendar otro club conforme a las reglas de este capítulo.

---

## 10.18 Las alternativas cercanas

La Experiencia Ideal debe ofrecer otras opciones de club conforme a las reglas de exploración del apartado 3.6.2.

Cada opción debe incluir, como mínimo:

* nombre del club;
* tiempo estimado de traslado;
* su flag de cumplimiento;
* y, cuando corresponda, los requisitos específicos que no cumple.

La fuente técnica utilizada para construir ese conjunto debe definirse en el contrato de datos del capítulo 14.

**El sistema no debe inventar una segunda definición de cercanía distinta de la establecida aquí.**

---

## 10.19 Aplicación en la ruta reducida

La ruta reducida del capítulo 6 utiliza las mismas reglas de resolución necesarias para encontrar un club.

Debe considerar las respuestas permitidas en esa ruta y los requisitos que puedan derivarse de ellas.

Sin embargo, la ruta reducida:

* no debe generar Experiencia Ideal;
* no debe generar brief;
* no debe capturar contacto;
* no debe agendar;
* ni debe iniciar un proceso comercial.

Su resultado sigue siendo únicamente:

* un club recomendado;
* su dirección;
* el tiempo estimado de traslado;
* y una explicación breve de por qué corresponde a lo declarado.

La persona puede ver la recomendación, pero el flujo digital termina conforme al capítulo 6.

---

## 10.20 La regla completa

La recomendación automática debe seguir este orden:

1. identificar el origen prioritario de la persona;
2. formar el universo inicial de clubes dentro de 10 km;
3. determinar todos los requisitos activos derivados de CEI-01 y, cuando corresponda, de P0;
4. comprobar qué clubes cumplen todos esos requisitos;
5. si varios cumplen, elegir el de menor tiempo de traslado;
6. si exactamente uno cumple, elegirlo;
7. si ninguno dentro de 10 km cumple, ampliar la búsqueda a los 49 clubes;
8. si uno o más de la red completa cumplen, elegir el de menor tiempo de traslado;
9. si ninguno cumple todo, elegir el que satisface el mayor número de requisitos y, entre los empatados, el más cercano;
10. construir la Experiencia Ideal contra ese club;
11. mostrar otras opciones de club con sus flags individuales;
12. permitir que la persona elija otra opción;
13. si la nueva opción cumple todo, recalcular directamente;
14. si tiene uno o más flags, explicar las consecuencias mediante un pop-up;
15. efectuar el cambio únicamente cuando la persona acepte expresamente;
16. conservar las respuestas originales del cuestionario;
17. registrar por separado las excepciones aceptadas;
18. y recalcular completamente la Experiencia Ideal contra el nuevo club.

La jerarquía final es:

**Primero, el sistema encuentra el club que mejor puede cumplir lo que la persona pidió. Después le permite comparar otras opciones mostrando claramente qué cumple cada una. Si prefiere un club que no puede entregar todo, la persona puede elegirlo, pero solo después de saber exactamente qué tendrá que excluirse de su Experiencia Ideal y confirmar que está de acuerdo.**
