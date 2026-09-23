# Bitácora de decisiones · Adenda de la revisión de la Arquitectura

**Continúa la numeración de DEC/SW/01, que llega hasta D-32.** Registra de D-33 a D-74. Esta adenda registra las decisiones tomadas durante la reescritura de la Arquitectura de la Experiencia, el 18 de septiembre de 2026.

Cada entrada dice qué se decidió y en qué capítulo del documento aterriza. **Todas las remisiones de esta bitácora usan la numeración vigente**, la que fija D-51. Las que obligan a corregir algo fuera de la Arquitectura lo señalan de forma expresa.

---

## 1 · El instrumento

### D-33 · La concordancia con la forma de trato, y cómo se nombra a terceros

La decisión tiene dos mitades, y confundirlas fue el error de la versión 1.1 del cuestionario.

**Primera mitad · Lo que se refiere a la persona que contesta sí declina.** La forma de trato que elige en el reactivo 2 —masculino, femenino o lenguaje neutral— gobierna toda palabra que se refiera a ella, en las opciones y en el texto que el sistema redacta. Cada una de esas palabras existe en **tres versiones**, y la persona ve solo la suya. La versión neutral es **una frase que vale para cualquiera**, nunca una marca tipográfica.

| Dónde | Masculino | Femenino | Lenguaje neutral |
|---|---|---|---|
| Reactivo 12 · Acompañamiento | Entrenar solo | Entrenar sola | Entrenar sin compañía |

**Segunda mitad · Lo que se refiere a otras personas no declina: se escribe con gramática española correcta.** El género de esas personas ni se conoce ni se pregunta, y conjugarlas con la forma de trato de quien contesta sería un error visible —un hombre con dos hijas vería «Con mis hijos» por ser hombre—. La regla tiene dos casos:

| Caso | Qué se escribe | Ejemplo |
|---|---|---|
| El español tiene una palabra que nombra a la persona sin declarar su género | Se usa esa palabra | «Con una amistad», «Con mi pareja» —nunca esposo ni esposa— |
| El español no la tiene | Se usa el plural masculino, que ya las incluye | «Con mis hijos», «Actividades para menores de 3 meses a 13 años» |

**Queda prohibida toda marca tipográfica de inclusión:** arroba, equis, vocal entre paréntesis y doble terminación separada por barra. Tampoco se fuerzan dobletes: «con mis hijas o hijos» es la misma gimnasia que la barra, con otras palabras.

Reformulaciones aplicadas al instrumento: el reactivo 12 recupera sus tres versiones; el reactivo 13 dice «Con una amistad», «Con mi pareja», «Con mis hijos»; el reactivo 14 y el control de lógica dicen «actividades para menores de 3 meses a 13 años».

**Fuera de la Arquitectura:** CEI-01 pasa a **versión 1.2**, que corrige la 1.1. La 1.1 había sustituido las tres versiones por una sola redacción neutral y con eso había suprimido la concordancia; también había forzado dobletes en terceros.

### D-34 · El apellido se pide con el teléfono y el correo

El apellido se solicita en la captura de contacto, al terminar el cuestionario, junto con el teléfono y el correo, en todos los canales. En WhatsApp se piden apellido y correo, porque el número viene del canal. El reactivo 1 sigue sin pedirlo.

**Fuera de la Arquitectura:** CEI-01 versión 1.2, apartado 4.

---

## 2 · El principio de precarga

### D-35 · No se le pregunta dos veces lo mismo a la persona

Lo que el sistema ya sabe antes de que empiece el cuestionario no se le pregunta: se le confirma, en un solo bloque, antes del primer reactivo. El bloque se llama **P0 · Precarga** y se declara dentro del instrumento.

**Aterriza en:** capítulo 5.2.

### D-36 · De dónde sale el conocimiento previo, por canal

Sitio web: las páginas que la persona visitó antes de abrir el cuestionario. WhatsApp: lo que la campaña que la trajo declara que promueve. Consola: el club donde la persona está parada, que se da por dado y no se pregunta.

**Aterriza en:** capítulo 5.2.1.

### D-37 · Cuatro categorías y dos formas

Solo pueden precargarse cuatro cosas: **club, amenidad, clase y objetivo.**

Dos formas de preguntar, y una regla que las separa: si al contestar que no alguien tiene que decidir eso de todas maneras, la pregunta lleva la opción de recomendar. Si al contestar que no simplemente no se agrega nada, la pregunta es sí o no.

Club y amenidad llevan la opción de recomendar. Clase y objetivo son sí o no.

**Aterriza en:** capítulo 5.2.2.

### D-38 · El bloque nunca ofrece lo que no se puede entregar

Antes de mostrarse, cada punto candidato se verifica contra la instantánea del día. El punto que no se pueda cumplir **no se muestra, no se menciona, no se explica y no deja rastro.**

Si la navegación revela un club y una clase que ese club no imparte, se pregunta solo por el club. Nunca se le dice a la persona que el club no imparte lo que estuvo viendo.

**Aterriza en:** capítulo 5.2.3.

### D-39 · El bloque se compone y se muestra una sola vez

Después de la compuerta de mayoría de edad y antes del primer reactivo. No se recompone con las respuestas que la persona dé dentro de él.

**Aterriza en:** capítulo 5.2.3.

### D-40 · La clase aceptada sin club fijado es requisito del club

Con club fijado, la clase aceptada queda asegurada en el tercer bloque y no agrega requisito. **Sin club fijado, la clase se vuelve requisito:** el resolver solo considera clubes que la impartan, y si el más cercano no la imparte, ofrece el más cercano que sí, con las alternativas señaladas.

Es el quinto requisito, y el único que no viene del cuestionario sino del contexto previo.

**Aterriza en:** capítulos 5.2.4 y 9.
**Fuera de la Arquitectura:** obliga a corregir el renglón de Clubes del control de lógica de CEI-01, que hoy exige solo amenidades, preferencias y clases por objetivo.

### D-41 · La ficha de campaña declara qué promueve

Sin ese campo, WhatsApp no sabe qué precargar y la conversación arranca preguntando lo que el anuncio ya le dijo a la persona.

**Aterriza en:** capítulo 13.
**Fuera de la Arquitectura:** la ficha de campaña gana un campo obligatorio.

---

## 3 · La elección de club

### D-42 · Las banderas existen para elegir y desaparecen al elegir

Mientras la persona elige, cada alternativa lleva su bandera y la leyenda concreta de lo que le falta. **En cuanto elige, las banderas desaparecen:** su plan se recompone contra ese club y queda completo, de modo que no hay nada faltante que señalar.

**Sustituye** la nota ámbar posterior a la elección que fijaba el cambio 14 del anexo de correcciones.

**Aterriza en:** capítulos 3.2.4 y 9.

### D-43 · Cuando el club que la persona quiere no cumple

No se le entrega ese club por omisión. Se le recomienda **el más cercano al club que pidió que sí cumple**, se le dice en concreto qué le falta al que quería, y el que quería queda disponible para cambiarse.

Unifica tres situaciones en un solo comportamiento: ningún club cercano cumple; la persona elige un club que no cumple; la precarga trae un club que no cumple.

**Aterriza en:** capítulo 9.
**Abierto:** de dónde sale el club que se recomienda — la tabla de sustitutos que Sports World asigna a mano, o una matriz calculada de tiempos entre clubes.

### D-44 · En consola, el sistema muestra y el asesor decide

El club se da por dado y no se pregunta. Cuando ese club no cumple lo que el perfil exige, el brief nombra lo que le falta y cuál club sí lo entrega. **Enviar o no a la persona a ese otro club es decisión del asesor.**

**Aterriza en:** capítulos 3.4.4 y 5.2.1.
**Abierto, fuera de la Arquitectura:** la regla de atribución comercial de esa venta corresponde al proceso comercial y está por definirse.

### D-45 · Al cambiar de club, el plan se recompone completo

Bloques, clases, modalidad, tiempo de traslado y evaluación de requisitos. Si algo que tenía no existe en el club nuevo, se sustituye por lo equivalente para el mismo objetivo; nunca queda un hueco.

El texto redactado **no** se vuelve a generar. De ahí se sigue una restricción: el texto se redacta de forma que lo único específico de un club sea su nombre y su dirección.

**Aterriza en:** capítulos 3.2.3, 10 y 12.

---

## 4 · El recorrido

### D-46 · BES está disponible en todo momento

Durante el cuestionario, **toma el control desde el reactivo en el que va la persona**, con lo que ya contestó, y sigue con el mismo instrumento. No reinicia ni repite. El paso de vuelta al recorrido autónomo también es libre. Después de entregada la experiencia, queda disponible para resolver dudas.

BES hace lo que la pantalla permite —cambiar de club, cambiar de clases— y nada más.

**Aterriza en:** capítulos 1.3.4, 3.3 y 7.

### D-47 · Ruta reducida para personas menores de edad

Quien no confirma la mayoría de edad **no queda fuera**. El sistema le resuelve su club **sin pedirle un solo dato personal** y sin generar experiencia ideal: solo se le preguntan los reactivos que alimentan la elección de club. Recibe el club, su dirección y su tiempo de traslado, y cómo inscribirse con la firma de su tutor, en el club.

No se abre registro, no se escribe nada y al cerrar la sesión no queda rastro. El bloque de precarga sí se muestra, porque no pide ningún dato.

**Aterriza en:** capítulo 4.2.

### D-48 · Identificador de sesión, que vive toda la sesión y muere con ella

El sitio asigna un identificador propio, aleatorio y vacío, cuyo trabajo es atar entre sí las páginas que la persona visita. No lleva ningún dato suyo y **nunca llega al registro del prospecto.**

**Vive toda la sesión.** No se descarta al abrir el cuestionario: sigue vivo después de entregada la experiencia, y es lo que permite que la persona navegue el sitio y siga reconocida como alguien que ya la tiene. **Muere cuando la persona sale.** Al volver, empieza de cero.

Nada de lo que la persona responde se guarda en su navegador: lo único que se guarda de su lado es el identificador.

**Corrige la versión anterior de esta decisión**, que descartaba el identificador en cuanto el cuestionario abría. Con esa regla, el estado «completo, fuera del flujo» de D-55 no tenía mecanismo posible.

**Sustituye** la regla anterior de «sin cookies».

**Aterriza en:** capítulos 2.4 —cuando se redacte—, 7.5.1 y 8.
**Abierto, fuera de la Arquitectura:** el texto del aviso simplificado y si procede consentimiento previo, que corresponde a Legal.

---

## 5 · El documento

### D-49 · El documento se parte en dos

**Parte I** explica por qué existe la experiencia ideal y no obliga a nada. **Parte II** prescribe lo que el sistema hace. La frontera queda declarada en el texto, para que el lector sepa en qué modo está leyendo.

### D-50 · Cada capítulo aprobado se sube en el momento de su aprobación

Con su hash registrado. Cualquier cambio posterior es un commit nuevo cuyo mensaje dice qué cambió y que lo ordenó Eric. El historial del repositorio sustituye a la memoria de cualquiera.

---

## 6 · El sitio como capa de captación

### D-51 · El sitio entra como capítulo 2 y los demás corren un número

La Arquitectura llegaba al capítulo 6 sin haber dicho **cómo accede la gente al cuestionario a través de las páginas del sitio**, ni cómo el contenido capta la atención y conduce a construir la experiencia ideal. Ese capítulo se escribe y se coloca **en la posición 2**, inmediatamente después de la tesis. Los capítulos que ocupaban las posiciones 2 a 6 corren un número hacia adelante.

| Antes | Ahora | Capítulo |
|---|---|---|
| — | **2** | El sitio: cómo la persona llega y cómo se le guía |
| 2 | 3 | Qué recibe la persona y qué recibe el asesor |
| 3 | 4 | Quién puede recorrer la experiencia |
| 4 | 5 | El cuestionario: el único instrumento |
| 5 | 6 | Los objetivos de la persona |
| 6 | 7 | El recorrido en pantalla |

Las remisiones internas de los capítulos ya aprobados se actualizaron en el mismo movimiento.

### D-52 · Los menús contextuales no se inventan: se recuperan

La especificación de los menús contextuales **ya existía** en el depósito, repartida en tres lugares: `ux-spec-experiencia-ideal.md` §4.2 (los tres estados de usuario) y §6.4 (las matrices por tipo de página), `contenido-minimo-por-tipo-de-pagina.es.md` (las etiquetas exactas de cada botón) y el §3 del documento original de Arquitectura (la ramificación condicional y el resolvedor dinámico). El capítulo 2 **las consolida**, no las sustituye.

**Aterriza en:** capítulo 2.4, cuando se redacte. **Alcanza también a la Parte II**, que prescribirá el comportamiento de esos menús.

### D-53 · El límite de dos objetivos es vivo

Mientras la persona no toque «Siguiente», puede cambiar de objetivos con entera libertad: quitar uno y poner otro cuantas veces quiera. El límite de dos no bloquea la pantalla, ordena la selección. **El orden en que los elige se conserva y significa algo:** el primero es su objetivo principal.

**Aterriza en:** capítulos 5.7.3 y 6.

### D-54 · El botón de agendar abre el cuestionario con un preámbulo

El botón de agendar una visita está en todas las páginas y en todo momento de la conversación por WhatsApp, y **es la puerta de entrada a la experiencia ideal**. Al tocarlo, antes de cualquier pregunta, se muestra un texto de invitación con dos versiones: la genérica —«durante tu visita a nuestros clubes»— y la del club, cuando el botón se tocó dentro de la página de un club —«durante tu visita a Sports World Polanco»—. Después viene la compuerta de mayoría de edad, después el bloque de precarga y después los reactivos.

**Aterriza en:** capítulo 7.1 y 7.3.1.

---

## 7 · Lo que dura y lo que no

### D-55 · Los tres estados son de sesión, y no sobreviven a la salida

Los tres estados que gobiernan el menú contextual —sin cuestionario, completo dentro del flujo, completo fuera del flujo— **describen a la persona dentro de una sesión**, no a lo largo del tiempo.

«**Completo, fuera del flujo**» es lo que ocurre cuando alguien contesta, recibe su experiencia, **no agenda** y se pone a navegar el sitio: llega a la página de un club por la navegación interna o por una búsqueda, y ahí ya no se le ofrece diseñar su experiencia, sino volver a ella.

**En cuanto la persona sale, el registro de sesión muere.** Al volver es, para el sitio, alguien sin cuestionario, y si lo quiere vuelve a contestarlo. No hay reconocimiento entre visitas, no hay cuenta y no se guarda nada en su navegador salvo el identificador de D-48, que muere con la sesión.

**Aterriza en:** capítulos 2.4 —cuando se redacte— y 7.5.

### D-56 · Al reencontrarse: el prospecto se actualiza, su experiencia se reemplaza

Una persona que ya está registrada —por ejemplo con la bandera «no quiso agendar visita»— vuelve días después, rehace el cuestionario y esta vez sí agenda. Qué ocurre con lo que ya existía:

| Qué | Qué pasa |
|---|---|
| **El registro del prospecto en el CRM** | **Se actualiza, no se duplica.** Se concilia con la llave canónica del proyecto: **nombre + apellido + teléfono + club** |
| **La bandera «no quiso agendar visita»** | La sustituye el resultado nuevo. Es una marca de estado, no un historial |
| **La experiencia ideal** | **No vive en el CRM:** vive en una base propia, ligada al registro del prospecto por su identificador. La anterior **se elimina por completo** y queda la última. No sobra nada |
| **La cita** | Queda contra el registro que ya existía, no contra uno nuevo |

**Una persona, un registro de prospecto, una experiencia vigente.**

**El borrado no deja hueco en la medición.** Las etapas de la espina del funnel no cuentan registros guardados, cuentan eventos en el momento en que ocurren: E2 cuenta al responderse la primera pregunta y **E3 cuenta cuando se genera la experiencia ideal**, no cuando se consulta después. Rehacer el cuestionario dispara un E2 y un E3 nuevos, que quedan registrados aunque el documento anterior se borre.

**Aterriza en:** capítulos 8, 13 y 15.

### D-57 · El capítulo 2 se reescribe, y su material se reubica

El texto que se había escrito para el capítulo 2 describía el inventario de páginas, los botones y el comportamiento del cuestionario. **Ninguna de esas tres cosas es el objeto del capítulo**, que es cómo el contenido del sitio capta la atención y lleva a la persona a construir su experiencia ideal.

**La estructura del capítulo queda aprobada** en seis apartados: por qué existe cada página · qué encuentra la persona al llegar · por qué ese contenido la mueve a construir su experiencia · cómo se le lleva · qué se lleva consigo al cuestionario · el blog.

El contenido de los apartados 2.2 y 2.3 sale de la **sección 5 de `contenido-minimo-por-tipo-de-pagina.es.md`**, que especifica el contenido mínimo de los once tipos de página. El texto retirado usó la sección 4 de ese documento —la de los botones— y nunca la 5.

**El material correcto se reubicó:**

| Qué | Dónde quedó |
|---|---|
| Los menús dinámicos del cuestionario | Capítulo **5.7**, «Cómo se comporta el cuestionario en pantalla» |
| Que Google no entrega el término de búsqueda, y que solo se conoce la página de aterrizaje | Capítulo **5.2.1**, donde se especifica de dónde sale el conocimiento previo |

**Aterriza en:** capítulos 2 y 5.

### D-58 · Los documentos no llevan notas sobre su propia edición

El texto explica qué hace el sistema, no por qué se redactó de una manera u otra. **Quedan fuera** las justificaciones de la decisión editorial, las comparaciones con versiones anteriores del documento y las instrucciones a quien redacta.

Se retiraron en esta pasada: el apartado 7.5.3, «Por qué está escrito así», y las notas que acompañaban a la regla de concordancia y a la regla del «Siguiente».

La regla que sí es del sistema se conserva siempre. Ejemplo: «lo que no está en la tabla, no persiste» se queda, porque es una regla; «por eso este apartado no enuncia un principio» se va, porque habla del documento.

**Aterriza en:** todos los capítulos.

### D-59 · Nunca se le hace difícil la vida a la persona: se resuelve y se avisa al asesor

**Es una regla de decisión, y gobierna todo el sistema.** Cada vez que aparezca la disyuntiva entre

| Opción A | Opción B |
|---|---|
| Pedirle a la persona que haga algo más, o decirle que no se puede atender su solicitud | Continuar el proceso de la mejor manera posible, **sin mentirle**, y avisarle al asesor de la contingencia |

**se elige siempre la B.**

**Primera aplicación · cuando el CRM no responde.** La página sigue con el último dato guardado y **no se le pide a la persona que confirme nada por teléfono.** La experiencia se construye y se entrega. Lo que ocurre es que **el brief del asesor lleva una bandera** que dice con qué dato desactualizado se construyó y cuál era. Sustituye lo que indica hoy `contenido-minimo-por-tipo-de-pagina.es.md`, que pedía avisarle a la persona.

**Los dos límites de la regla.** No se miente: no se inventa un horario, un precio ni una disponibilidad que no se tienen. Y no se calla hacia dentro: toda contingencia resuelta en silencio hacia la persona **viaja al brief**, para que el asesor sepa con qué está trabajando.

**Aterriza en:** capítulos 2, 5.9, 7.7 y 13.

### D-60 · Dos menús, y el contextual tiene cuatro ranuras

**El menú superior es fijo** y acompaña a la persona en las 148 páginas: **Tu Sports World** —el catálogo, único punto de navegación estructural—, **Diseña tu experiencia**, **Habla con BES** y **Agenda tu visita**.

**El menú contextual no cambia de botones: cambia lo que dice cada uno.** Tiene cuatro ranuras, y cada una se reetiqueta según el punto en que va la persona.

| Ranura | E1 · Sin cuestionario | E2 · Completo, sin agendar | E3 · Completo y agendado |
|---|---|---|---|
| **1 · El club** | Encuentra tu club ideal | Tu club ideal | Tu club ideal |
| **2 · La experiencia** | Diseña tu experiencia | Volver a tu experiencia ideal | Volver a tu experiencia ideal |
| **3 · El objetivo** | ¿Cuál es tu objetivo? | Las clases para tu objetivo | Las clases para tu objetivo |
| **4 · La visita** | Agenda tu visita | Agenda tu visita | Tu visita agendada |

**En la página de un club la ranura 1 no ofrece encontrar un club**, porque aterrizar ahí lo resuelve: ofrece alternativas. Antes del cuestionario: nada si la ciudad tiene un solo club, «Otros clubes en tu ciudad» si tiene dos o tres, y «Otros clubes en tu área» si tiene más de tres y hay al menos otro club en un radio de 10 km.

**Con el cuestionario completo, la ranura abre la red entera.** En la página de un club dice **«Conoce nuestros clubes»**, y despliega una jerarquía de hasta tres niveles medida **desde el club ideal de la persona**, no desde el club de la página:

| Qué hay alrededor del club ideal | Qué se le presenta |
|---|---|
| Un solo club en su ciudad | Conoce todos nuestros clubes en la República |
| Más de uno en la ciudad, ninguno a 5 km del club ideal | Conoce otros clubes en tu ciudad · Conoce todos nuestros clubes en la República |
| Al menos uno a 5 km del club ideal | Conoce otros clubes en tu zona · Conoce otros clubes en tu ciudad · Conoce todos nuestros clubes en la República |

**Ningún nivel se muestra vacío**, y el orden va siempre de lo cercano a lo lejano.

**Aterriza en:** capítulos 2.4 y 2.5.

### D-61 · Tres botones, una sola puerta, y la pregunta de contexto primero

**Encuentra tu club ideal, ¿Cuál es tu objetivo? y Diseña tu experiencia abren el mismo cuestionario.** No son tres instrumentos: son tres puertas al mismo.

Y las tres **empiezan por las preguntas de contexto de la página desde la que se tocó el botón**, no por el primer reactivo. Desde la página de alberca se le confirma si quiere actividades acuáticas en su experiencia; desde una clase, esa clase; desde un club, ese club; desde un objetivo, ese objetivo. Solo quien entró por el inicio sin haber visto otra página no tiene contexto que confirmar.

**Aterriza en:** capítulos 2.4.3 y 5.2.

### D-62 · La ranura del objetivo pregunta en E1 y entrega en E2

**«¿Cuál es tu objetivo?»** abre el cuestionario. **«Las clases para tu objetivo»** ya no pregunta: muestra las clases que corresponden al objetivo declarado, **en el club que la persona tiene resuelto**.

Es el mismo mecanismo que rige la página de un club: **nunca se entrega una lista de clases suelta. Las clases viven dentro del objetivo al que sirven.**

**Aterriza en:** capítulos 2.4.5, 2.5.5 y 6.

### D-63 · El menú contextual se deriva de seis variables, no se enumera

Especificar el menú página por página no permite saber si están cubiertos todos los casos. **Se especifica como una regla de decisión por botón, evaluada sobre seis variables:** el cuestionario, la cita, el tipo de página, el club de referencia, la densidad de clubes a su alrededor y los artículos etiquetados.

**Tres combinaciones no existen, y el documento dice por qué:** sin cuestionario no puede haber cita, porque agendar exige haber completado el cuestionario; con cuestionario siempre hay club, porque el cuestionario lo resuelve; y en la página de un club siempre hay club de referencia, porque aterrizar ahí lo identifica.

Con eso, las dos primeras variables colapsan en los tres estados que el documento usa como taquigrafía. **El apartado 2.5 comprueba los treinta y tres escenarios** —once tipos de página por tres estados— y cada celda sale de aplicar las reglas, no de escribirla a mano.

**Aterriza en:** capítulos 2.4 y 2.5.

### D-64 · Una sola jerarquía de clubes, y lo que cambia es el club de referencia

Había dos reglas de geografía distintas: una de 10 km medida desde el club de la página, y otra de 5 km medida desde el club ideal. **Queda una sola jerarquía —zona a 5 km, ciudad, República— y lo que cambia es desde dónde se mide:**

| Estado | Club de referencia |
|---|---|
| Sin cuestionario, en la página de un club | El club de esa página |
| Sin cuestionario, en cualquier otra página | Ninguno: no hay geografía que resolver todavía |
| Con cuestionario, en cualquier página | **El club ideal de la persona**, aunque esté viendo la página de otro |

Quien está viendo Polanco pero tiene resuelto Satélite ve la zona de Satélite, porque ahí es donde va a entrenar.

**Aterriza en:** capítulos 2.4.3 y 2.4.4.

---

## 8 · El paso entre canales y la seguridad de los datos

### D-65 · El cuestionario sale de WhatsApp. BES atiende, convence y remite al sitio

BES en WhatsApp es la **atención inicial**: campaña, promociones, precios, dudas previas. No aplica el cuestionario. Cuando la persona acepta diseñar su Experiencia Ideal, BES le envía un botón que la lleva al sitio, y ahí el cuestionario corre completo, con la misma semántica que para quien entró por la web, hasta agendar la visita.

Lo que BES recabó en la conversación viaja con ella como **precarga** —el mismo bloque P0 de D-35, ahora alimentado por una conversación y no solo por la campaña de D-36—: el club que mencionó, el objetivo que nombró, la promoción que le interesó y el teléfono, que en WhatsApp viene del canal.

**La precarga propone, nunca decide.** Todo reactivo precargado se muestra contestado y se puede cambiar. Lo que no es reactivo —campaña, promoción, teléfono— va al registro y al brief, nunca al cuestionario. Sin esta regla la semántica del instrumento cambiaría según el canal, y CEI-01 apartado 2 lo prohíbe.

**Aterriza en:** capítulos 2.4, 5.2 y 5.2.1.

### D-66 · La precarga viaja como token, no como parámetros en la dirección

BES deposita la precarga en el servidor de Sports World y recibe a cambio un **código opaco de un solo uso**. El botón de WhatsApp lleva ese código, no los datos. Al tocarlo, el sitio canjea el código del lado del servidor y quema el token.

Si los datos viajaran en la dirección quedarían copiados en cuatro lugares que nada tienen que ver con la conversación: el hilo de WhatsApp, el historial del navegador, las bitácoras de acceso del servidor web y **GA4, que registra la dirección completa**. Esta última es la que decide: la política de Google prohíbe recibir teléfonos o correos, incluidas las direcciones de página, y la sanción documentada es el borrado de los datos del periodo afectado y la suspensión de la propiedad. Sería perder la medición del funnel, que es la prueba del proyecto.

**Lo que esta decisión no hace:** no oculta nada a Meta. Si la conversación entró por un anuncio, Meta ya tiene el teléfono. El token evita las copias posteriores, no el conocimiento previo de la plataforma.

**Vida útil:** treinta minutos, reutilizable dentro de la misma sesión —en WhatsApp la gente toca el botón dos veces— y quemado al completar el cuestionario. Un token de un solo uso estricto le daría un error a quien no hizo nada mal, contra D-59.

**Aterriza en:** capítulos 2.4 y 5.2.1.

### D-67 · El traspaso no cambia el canal de origen

Quien llegó por WhatsApp sigue siendo un lead de WhatsApp aunque el cuestionario corra en el sitio. El token lleva el origen consigo. Sin esta regla la campaña pierde su atribución y el mismo prospecto se cuenta dos veces en el funnel.

**Aterriza en:** capítulo 5.2.1. **Fuera de la Arquitectura:** el mapa del funnel.

### D-68 · La captura de contacto depende del origen, no del canal donde corre el cuestionario

CEI-01 apartado 4 pide apellido, teléfono y correo, y en WhatsApp solo apellido y correo porque el número viene del canal. Con D-65 el cuestionario corre en el sitio aunque el origen sea WhatsApp, así que la regla pasa a depender del **origen**: si es WhatsApp, la pantalla pide apellido y correo.

**Aterriza en:** capítulo 5. **Fuera de la Arquitectura:** CEI-01, apartados 2 y 4.

### D-69 · El nombre no entra al modelo de lenguaje: se inyecta al presentar

El reactivo 1 sirve para el trato en primera persona y nada aguas abajo depende de él. La concordancia sale del reactivo 2, que es una bandera de tres valores. **El modelo recibe el reactivo 2 y nunca el 1.** El sistema antepone el nombre de pila al mostrar el texto en pantalla.

Lo mismo con el brief: el modelo redacta sus secciones sin nombre, y el sistema compone el encabezado con nombre completo, teléfono y correo en el ensamblado final, antes de enviarlo al club. Apellido, teléfono y correo ya estaban fuera por la regla de única llamada, que se dispara antes de la captura de contacto.

**Dos condiciones para que la medida no se filtre sola.** El prompt prohíbe todo vocativo y marcador de posición, y el saneador —que hoy solo elimina códigos de reactivo— elimina también cualquier vocativo residual al inicio del gancho y del guion de cierre. Sin eso el modelo escribe un nombre inventado y el sistema le antepone otro encima.

**Aterriza en:** capítulos 5 y 7.

### D-70 · BES por voz en el sitio: dos botones, micrófono cerrado y estado devuelto por el sitio

BES no conduce el cuestionario hablando: lo despliega y queda en **stand-by con el micrófono cerrado**. Cerrar significa cortar la transmisión, no descartar el resultado: descartar ocurre después de transcribir.

Dos botones, los dos activan a BES y los dos reciben contexto: **«Tengo una duda»**, presente en todo reactivo, tras el cual BES resuelve y vuelve a stand-by en el mismo punto; y **«Estoy listo»**, la señal de avanzar.

**La memoria vive en el sitio, no en la plataforma.** BES no retiene nada entre activaciones: el sitio le devuelve el estado cada vez. Lo que BES recabó hablando se entrega al sitio, que lo conserva **en el estado de sesión** —el que muere cuando la persona sale, nunca más allá— para devolvérselo al reactivarse.

**La carga útil se acota:** «Tengo una duda» manda el reactivo actual y sus opciones, no el acumulado, porque ahí se origina casi toda duda. Si la duda resulta ser sobre algo anterior, BES lo pide y el sitio se lo da.

**Aterriza en:** capítulos 5.7 y 7.

### D-71 · Un solo proveedor conversacional: ElevenLabs

ElevenLabs Agents opera el agente, la orquestación y el canal de WhatsApp, que es canal nativo de su plataforma, y admite modo solo texto. **Salen Vapi y Retell:** eran la capa de orquestación, y ElevenLabs ya la hace. No se suma ningún proveedor que no estuviera ya contratado para el sitio.

Queda descartada, por la misma razón, la transcripción en servidor propio con Whisper o Vosk: existía para no sumar un proveedor, y con ElevenLabs no hay uno que sumar.

**Fuera de la Arquitectura:** la especificación técnica del sitio y la del Proyecto B nombran Vapi o Retell como ejemplo de orquestación.

### D-72 · Retención cero donde se puede contratar; en Meta no se puede

| Plataforma | Retención | Qué se hace |
|---|---|---|
| ElevenLabs | cero con **Zero Retention Mode** | Se activa por agente. Requiere plan Enterprise |
| Modelo de razonamiento | según proveedor | Se contrata retención cero |
| **Meta** | **30 días, fijo** | **Nada. No ofrece retención cero** |

Meta es el único punto que no se arregla contratando, y no por descuido: con Cloud API, Meta administra las llaves de cifrado por cuenta del negocio y descifra el mensaje antes de reenviarlo. El cifrado punta a punta llega hasta Meta, porque Meta es el otro extremo. No se puede conservar lo que no se puede leer, y por eso los treinta días existen.

**La consecuencia operativa:** como la retención de Meta no se toca, lo único que mueve la aguja es **qué pasa por el hilo**. Es la razón de D-65 y de D-66, no una precaución añadida.

**Meta como encargado.** Las condiciones de WhatsApp Business hacen del negocio el responsable y de Meta el encargado, y Meta declara que Cloud API no usa los mensajes para la publicidad que ve la persona. La vía por la que los datos de prospectos sí llegarían a su segmentación no es el canal, sino subir la base del CRM a Custom Audiences o mandar eventos con datos de contacto por Conversions API. Son decisiones de marketing, no consecuencias del sistema.

### D-73 · Las notas de voz se contestan con notas de voz

ElevenLabs trae encendida la opción *audio message response*, que hace que el agente conteste las notas de voz con notas de voz. **Se deja encendida:** es como se usa WhatsApp en México y no se le complica la vida a nadie.

El audio entrante pasa obligatoriamente por Meta —la persona lo sube a sus servidores y el agente lo descarga de ahí—, así que Meta lo conserva treinta días haga el sistema lo que haga. ElevenLabs lo transcribe y, con retención cero activa, no conserva nada.

**Condición:** las Cláusulas Tercera y Cuarta del Contrato excluyen «la voz por WhatsApp». Con la opción encendida hay síntesis de voz en ese canal. Es una línea que hay que resolver antes de lanzar, y el Contrato está en revisión.

### D-74 · Se elimina el reactivo de programas prenatales o de posparto

Sale del cuestionario y del sistema, por completo. El instrumento ya declaraba que no recaba condiciones de salud; esta opción era la única que permitía inferir algo sobre la persona, y era además la única cuya presencia dependía de la forma de trato.

**Dos efectos que conviene tener presentes.** El reactivo 2 pierde su única función más allá de la gramática —su uso autorizado decía «y condiciona la opción de programas prenatales o de posparto»—, de modo que queda como pura concordancia y deja de permitir cualquier inferencia. Y la matriz de contraindicaciones pasa a tener **un solo disparador**, bajo impacto, donde el texto decía «las dos preferencias de clases».

**Aterriza en:** capítulos 3 y 5. **Fuera de la Arquitectura:** CEI-01 pasa a **versión 1.3**.

---

## Puntos abiertos que esta revisión destapó

| Punto | Qué falta |
|---|---|
| **Dos documentos se llaman CEI-01** | El del Anexo A del Manual del Proceso Comercial y el vigente. La etiqueta no distingue |
| **Dos asistentes se llaman BES** | El de esta Arquitectura, que atiende prospectos, y el del archivo de configuración del depósito, que atiende al equipo del proyecto y declara expresamente que no atiende prospectos |
| **De dónde sale el club sustituto** | Ver D-43 |
| **Atribución comercial de la venta que se va a otro club** | Ver D-44 |
| **Texto del aviso sobre el identificador de sesión** | Ver D-48 |
| **CEI-01 requiere dos ajustes** | El renglón de Clubes del control de lógica, y la declaración del bloque P0 |
| **La base de experiencias ideales** | D-56 la nombra como base propia ligada al CRM por identificador. Su contrato —qué campos lleva, quién la mantiene, cuánto retiene— se especifica en el capítulo 13 |
| **Si BES por voz recibe el nombre** | D-69 lo deja fuera del modelo. Para BES hablando no está resuelto: decirlo en voz alta lo entrega a la plataforma de síntesis. Decisión de Eric |
| **Si el origen sustituye a la ubicación en el prompt** | El reactivo 16 es el último cuasi-identificador que llega al modelo. El resolver corre antes de la única llamada, así que podría mandarse el club resuelto en su lugar |
| **La lectura de «voz por WhatsApp»** | Si la exclusión de las Cláusulas Tercera y Cuarta alcanza solo a que el agente hable, o también a procesar audio entrante. Ver D-73 |
| **El plan de ElevenLabs** | Zero Retention Mode requiere Enterprise. No está verificado cuál tiene contratado Sports World. Ver D-72 |
| **El CRM y el lead en dos tiempos** | D-65 parte el registro entre WhatsApp y el sitio. La escritura es idempotente por teléfono, pero no está verificado que el CRM de Sports World lo soporte |
| **Custom Audiences y Conversions API** | Ver D-72. Es la vía real por la que los datos de prospectos llegarían a la segmentación de Meta, y es una decisión de marketing de Sports World |
| **Filtro de redacción antes del prompt** | BES en WhatsApp queda como conversación abierta y es el único punto donde alguien puede dar un dato no solicitado. Propuesto, no aprobado |
| **Duración máxima de una nota de voz** | Ver D-73. Falta fijar el límite y qué ocurre al excederlo |
