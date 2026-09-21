# Bitácora de decisiones · Adenda de la revisión de la Arquitectura

**Continúa la numeración de DEC/SW/01, que llega hasta D-32.** Registra de D-33 a D-90. Esta adenda registra las decisiones tomadas durante la reescritura de la Arquitectura de la Experiencia, entre el 18 y el 20 de septiembre de 2026.

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

**Completada por D-90:** la Arquitectura nombra también la llave de idempotencia `session_uuid`, que sí forma parte del registro del prospecto.

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

**Corregida por D-60:** los tres estados dejaron de depender de por qué puerta entró la persona y pasaron a depender de hasta dónde llegó. «Completo, fuera del flujo» ya no existe como estado propio.

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

**Corregida por D-68:** el registro del prospecto sigue siendo uno solo, pero la experiencia ideal puede ser más de una, porque cada cita lleva la suya.

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

**Corregida por D-89:** los tres estados se nombran en vez de numerarse, porque los códigos `E##` pertenecen al Mapa del Funnel.

**Corregida por D-65 y D-67:** las etiquetas de la ranura del club pasan a ser «Encuentra tu club ideal» y «Conoce otros clubes Sports World», la regla por tamaño de ciudad y el radio de 10 km se retiran, y la ranura de la visita se comporta distinto en el cuerpo y en el encabezado.

### D-61 · Tres botones, una sola puerta, y la pregunta de contexto primero

**Encuentra tu club ideal, ¿Cuál es tu objetivo? y Diseña tu experiencia abren el mismo cuestionario.** No son tres instrumentos: son tres puertas al mismo.

Y las tres **empiezan por las preguntas de contexto de la página desde la que se tocó el botón**, no por el primer reactivo. Desde la página de alberca se le confirma si quiere actividades acuáticas en su experiencia; desde una clase, esa clase; desde un club, ese club; desde un objetivo, ese objetivo. Solo quien entró por el inicio sin haber visto otra página no tiene contexto que confirmar.

**Aterriza en:** capítulos 2.4.3 y 5.2.

### D-62 · La ranura del objetivo pregunta en E1 y entrega en E2

**«¿Cuál es tu objetivo?»** abre el cuestionario. **«Las clases para tu objetivo»** ya no pregunta: muestra las clases que corresponden al objetivo declarado, **en el club que la persona tiene resuelto**.

Es el mismo mecanismo que rige la página de un club: **nunca se entrega una lista de clases suelta. Las clases viven dentro del objetivo al que sirven.**

**Aterriza en:** capítulos 2.4.5, 2.5.5 y 6.

**Corregida por D-73:** la etiqueta nombra el objetivo, «Conoce las clases ideales para [nombre del objetivo]», y con dos objetivos declarados hay dos botones.

### D-63 · El menú contextual se deriva de seis variables, no se enumera

Especificar el menú página por página no permite saber si están cubiertos todos los casos. **Se especifica como una regla de decisión por botón, evaluada sobre seis variables:** el cuestionario, la cita, el tipo de página, el club de referencia, la densidad de clubes a su alrededor y los artículos etiquetados.

**Tres combinaciones no existen, y el documento dice por qué:** sin cuestionario no puede haber cita, porque agendar exige haber completado el cuestionario; con cuestionario siempre hay club, porque el cuestionario lo resuelve; y en la página de un club siempre hay club de referencia, porque aterrizar ahí lo identifica.

Con eso, las dos primeras variables colapsan en los tres estados que el documento usa como taquigrafía. **El apartado 2.5 comprueba los treinta y tres escenarios** —once tipos de página por tres estados— y cada celda sale de aplicar las reglas, no de escribirla a mano.

**Aterriza en:** capítulos 2.4 y 2.5.

**Corregida por D-65:** la variable del club de referencia se retira, porque la ranura ya no depende del tipo de página. Las seis variables quedan en cinco: el cuestionario, la cita, el tipo de página, la densidad alrededor del club ideal y los objetivos elegidos, de los que depende «Explora» (D-73).

### D-64 · Una sola jerarquía de clubes, y lo que cambia es el club de referencia

Había dos reglas de geografía distintas: una de 10 km medida desde el club de la página, y otra de 5 km medida desde el club ideal. **Queda una sola jerarquía —zona a 5 km, ciudad, República— y lo que cambia es desde dónde se mide:**

| Estado | Club de referencia |
|---|---|
| Sin cuestionario, en la página de un club | El club de esa página |
| Sin cuestionario, en cualquier otra página | Ninguno: no hay geografía que resolver todavía |
| Con cuestionario, en cualquier página | **El club ideal de la persona**, aunque esté viendo la página de otro |

Quien está viendo Polanco pero tiene resuelto Satélite ve la zona de Satélite, porque ahí es donde va a entrenar.

**Aterriza en:** capítulos 2.4.3 y 2.4.4.

**Corregida por D-65:** la jerarquía se mide siempre desde el club ideal, nunca desde el club de la página, porque antes del cuestionario no hay jerarquía que mostrar.

---

---

## 8 · El menú contextual, fijado punto por punto

Las decisiones de este apartado se tomaron el 20 de septiembre de 2026, una por una, y **sustituyen lo que D-60, D-63 y D-64 decían sobre las etiquetas y la geografía**. Lo que aquellas decisiones fijaron y aquí no se menciona sigue vigente.

### D-65 · La ranura del club tiene dos etiquetas, y la geografía vive dentro del botón

La ranura del club **no depende del tipo de página**. Depende de una sola cosa: si la persona contestó el cuestionario.

| Estado | Qué dice la ranura |
|---|---|
| **Sin cuestionario**, en cualquier página, también en la de un club | **Encuentra tu club ideal** — abre el cuestionario |
| **Con cuestionario**, con o sin cita, en cualquier página | **Conoce otros clubes Sports World** — abre la jerarquía de abajo |

**La jerarquía se despliega dentro del botón**, medida desde el club ideal de la persona, aunque esté viendo la página de otro club:

| Qué hay alrededor del club ideal | Qué opciones se despliegan |
|---|---|
| Un solo club en su ciudad | Conoce nuestros clubes en todo el país |
| Dos o más en la ciudad, ninguno a 5 km | Conoce otros clubes en tu ciudad · Conoce nuestros clubes en todo el país |
| Dos o más en la ciudad, al menos uno a 5 km | Conoce otros clubes en tu área · Conoce otros clubes en tu ciudad · Conoce nuestros clubes en todo el país |

**El único radio de esta jerarquía es 5 km**, y sustituye a los 10 km que regían antes. Ningún nivel se muestra vacío y el orden va siempre de lo cercano a lo lejano. Antes del cuestionario no hay geografía que resolver: sin club ideal no hay desde dónde medir.

**Alcance de la regla.** Estos 5 km son los de la jerarquía del menú, que sirve para que la persona **explore** otros clubes. El radio con el que el sistema **resuelve** su club ideal es otra cosa y vive en el capítulo 9. **D-82 fija que son dos cosas distintas y no se unifican.**

**Sustituye:** de D-60, las etiquetas «Tu club ideal» y «Conoce nuestros clubes», la regla por tamaño de ciudad y el radio de 10 km. De D-64, el club de la página como punto de medida. De D-63, la variable del club de referencia, que deja de hacer falta.

**Aterriza en:** capítulos 2.4 y 2.5.

### D-66 · El orden de los botones es fijo

De izquierda a derecha: **el club, la experiencia y la visita.** Después, los botones propios de la página.

El orden no cambia con el estado ni con el tipo de página. Cuando una ranura no tiene nada que ofrecer, las demás conservan su orden entre sí.

**Aterriza en:** capítulo 2.4.

### D-67 · Cuando ya hay cita: el cuerpo lleva a la cita y el encabezado ofrece otro club

**En el cuerpo de la página**, la ranura de la visita dice **«Tu visita agendada»** y lleva a su cita, para verla, cambiarla o cancelarla.

**En el encabezado**, «Agenda tu visita» no cambia de etiqueta, pero sí de comportamiento: antes de llevarla a ningún lado **le pregunta si desea agendar una visita en otro club.**

| Respuesta | Qué ocurre |
|---|---|
| **No** | La lleva a su visita agendada |
| **Sí** | Le pide el club, **recalcula su experiencia ideal para ese club con las respuestas que ya dio** —no se le vuelve a preguntar nada— y la lleva a agendar la cita en ese club |

**La primera cita se conserva.** Una persona puede tener visitas agendadas en dos clubes.

**Aterriza en:** capítulos 2.4, 3 y 7.

### D-68 · Cada cita tiene su propia experiencia ideal y su propio brief

Dos clubes distintos resuelven clases distintas, así que **no puede haber una sola experiencia para dos citas.** Cada cita agendada lleva la experiencia recalculada para su club y el brief hecho con esa experiencia, y el club recibe la suya.

**Al confirmarse el alta de la membresía se verifica en qué club ocurrió: la experiencia de ese club prevalece y las demás se eliminan.** El alta llega por el corte diario del sistema de clientes.

**Al rehacer el cuestionario otro día**, la experiencia nueva **sustituye a la anterior solo si resuelve el mismo club**. Si resuelve otro, se suma: las dos conviven hasta el alta.

**Corrige D-56**, que fijaba «una persona, un registro de prospecto, una experiencia vigente». El registro del prospecto sigue siendo uno solo, conciliado con la llave canónica; lo que puede ser más de una es la experiencia.

**Aterriza en:** capítulos 3, 7, 8 y 13.

### D-69 · Nada se escribe ni se envía hasta que la sesión cierra

Mientras la sesión está viva, la persona puede cambiar de club, cambiar de clases, agendar y agendar en otro club las veces que quiera. **Nada de eso se escribe ni se envía**: vive en la sesión.

**La sesión cierra por lo que ocurra primero:** la persona sale y el navegador alcanza a avisarlo, o pasan **diez minutos sin actividad**. No se puede depender solo de la salida, porque cerrar la pestaña, perder la señal o bloquear el teléfono no siempre avisan al servidor.

Al cerrar, y **una sola vez**, se escribe el estado final:

| Qué | A dónde |
|---|---|
| Las experiencias ideales, una por cita | A su base propia |
| El registro del prospecto y sus citas | Al sistema de clientes |
| Su experiencia ideal, en su versión final | Por correo a la persona |
| El brief de cada cita | Por correo a su club |

**De ahí se sigue que no hay correos de cancelación por lo que la persona cambió dentro de la sesión:** nada salió mientras cambiaba. Los avisos de cambio o cancelación al club solo ocurren cuando vuelve otro día y mueve una cita ya enviada.

**Corrige el capítulo 7**, que escribía al sistema de clientes en el momento de agendar y enviaba el correo al terminar el cuestionario.

**Aterriza en:** capítulos 7, 8, 13 y 15.

### D-70 · Las páginas de objetivo son los seis objetivos del cuestionario

**Una sola lista de objetivos en todo el sistema**: la del reactivo 4 de CEI-01. Las páginas de objetivo dejan de llamarse por perfiles y pasan a llamarse por los seis objetivos, de modo que el cuestionario, las páginas, el menú, la matriz de clases y la experiencia hablen de lo mismo.

| Antes | Ahora |
|---|---|
| Primeros pasos · Salud y bienestar · Estética corporal · Ganar fuerza · Rehabilitación · Bajar de peso | Bajar de peso · Estética corporal y definición muscular · Aumentar masa muscular · Desempeño atlético · Capacidad cardiovascular · Moverse mejor con más agilidad |

**Cabe en el contrato**, que fija cinco hubs de perfil y un hub de bajar de peso **sin nombrarlos**: son seis páginas antes y seis después. Bajar de peso conserva su página y su tratamiento de salud.

**Aterriza en:** capítulos 2 y 6.
**Fuera de la Arquitectura:** obliga a corregir el inventario de páginas y las direcciones de `/perfiles/`.

### D-71 · Nunca se entrega una lista suelta: las clases viven dentro del objetivo

**La página de un club no muestra un catálogo de clases.** Muestra los seis objetivos, y dentro de cada uno las clases de ese club que sirven a ese objetivo, **con sus días y horarios**. Las amenidades aparecen en la descripción de cómo ese club ayuda a alcanzar el objetivo, no como inventario.

**La página de un objetivo muestra todas las clases del sistema que entregan ese objetivo**, no solo las del club de la persona, y al tocar una lleva a la página de esa clase. Lo que distingue unas de otras es la leyenda de D-72, no la ausencia: una lista recortada al catálogo del club le impediría a la persona saber qué gana si se mueve.

**Los horarios viven en un solo lugar: la página del club.** La página de una clase **no lleva días ni horarios**, porque cada club tiene su propia cuadrícula: muestra en qué clubes se imparte, y al tocar un club se ven ahí los días y horarios de esa clase.

**Sustituye** lo que pedía `contenido-minimo-por-tipo-de-pagina.es.md` para la página de club —el catálogo de las 51 clases para adultos y las 34 para menores— y para la página de clase —«clubes donde se imparte, con sus horarios reales»—.

**Aterriza en:** capítulos 2.2 y 2.3.

### D-72 · La leyenda de disponibilidad en las listas de clases

Con el cuestionario contestado, **cada clase de una lista de objetivo lleva la leyenda «Disponible en tu club» o «No disponible en tu club».**

Es **la única excepción** a la regla del capítulo 3.2.5, que prohíbe comunicarle a la persona una carencia. Aquí no es una carencia de su plan: es información para comparar clubes, en una superficie que existe para eso.

**Aterriza en:** capítulos 2.4 y 3.

### D-73 · La ranura del objetivo: «¿Cuál es tu objetivo?» antes del cuestionario, y las clases ideales solo en las páginas de objetivo

| Dónde está la persona | Sin cuestionario | Con cuestionario, con o sin cita |
|---|---|---|
| Inicio, club, amenidad, actividades para menores, entrenamiento personal, blog y clase | **¿Cuál es tu objetivo?** — abre el cuestionario, empezando por las preguntas de contexto de la página | **Ningún botón de objetivo.** Las clases ideales solo se ven en las páginas de objetivo |
| Página de un objetivo | **Conoce las clases ideales para [el objetivo de la página]** — todas las clases del sistema que entregan ese objetivo | El mismo botón, con la leyenda de disponibilidad de D-72 |
| Página de un objetivo **que la persona eligió**, si eligió dos | — | Además, **Explora [el otro objetivo elegido]**, que la lleva a la página de ese objetivo |
| Página de un objetivo **que no eligió** | — | Ningún botón de exploración. Vuelve a sus objetivos por «Volver a tu experiencia ideal» o por el menú principal |

**El botón de clases ideales nombra siempre el objetivo de la página**, con uno o con dos objetivos elegidos. Los objetivos elegidos entran al menú de una sola forma: «Explora…», en la página de cada uno de los dos, con el otro.

Membresías no lleva botón de objetivo en ningún estado (D-75). Las páginas de entrenamiento individual tampoco: su botón es el de programas (D-77).

**Corrige las dos versiones anteriores de esta decisión:** la primera ponía dos botones con dos objetivos y la segunda un solo botón con el principal, y las dos ponían clases ideales fuera de las páginas de objetivo, donde nunca van. Devuelve a D-63 la variable de los objetivos elegidos: el menú se evalúa sobre cinco variables, porque de ella depende «Explora».

**Sustituye** de D-62 la etiqueta «Las clases para tu objetivo»: el objetivo se nombra, no se alude.

**Aterriza en:** capítulos 2.4, 2.5 y 6.

### D-74 · Los botones propios de cada tipo de página

| Página | Botón propio | Qué hace |
|---|---|---|
| **Clase** | **Otras clases similares** | Las clases agrupadas por nivel de intensidad y por beneficios parecidos a la que está viendo. Aparece en los tres estados |
| **Blog** | **Otros artículos similares** | Los artículos relacionados con el que está leyendo |
| **Entrenamiento individual**, las tres modalidades | **Tu rutina individual** | La parte individual de su experiencia. Solo con cuestionario, y **para todas las personas**: los bloques individuales no son exclusivos de quien pidió entrenar sin compañía |

**El botón «Artículos o información útil» desaparece de todas las páginas.** Donde un artículo es pertinente, la página lo enlaza **dentro de su contenido**, no desde el menú. Sustituye la regla del contenido mínimo que lo encendía por etiquetas.

**Aterriza en:** capítulos 2.4 y 2.5.

### D-75 · Membresías no lleva la ranura del objetivo

Quien compara precios no está eligiendo objetivo, y en esa página ya hay dos botones que abren el cuestionario. **Es el único tipo de página sin botón de objetivo en ningún estado.** Las demás páginas sin objetivo propio, el blog incluido, llevan «¿Cuál es tu objetivo?» antes del cuestionario (D-73).

**Aterriza en:** capítulo 2.5.

### D-76 · FitKidz se llama por su nombre y se parte en dos secciones

La página se llama **«Actividades para menores de 3 meses a 13 años»**, como el servicio en todo el proyecto, y tiene dos secciones:

| Sección | Cómo funciona |
|---|---|
| **Clases para niños** | Como una página de objetivo. El botón dice **«Conoce las clases disponibles»** y abre la lista; al tocar una clase se ven los clubes que la imparten, y al tocar un club, sus días y horarios |
| **FitKidz** | Los clubes donde se ofrece; la lista lleva a la página de cada club |

Con el cuestionario contestado, cada clase para niños lleva la leyenda de D-72, igual que en una página de objetivo.

Su menú es el de cualquier otra página. **Desaparecen los tres botones que tenía**: «Clases FitKidz disponibles» y «Las actividades de tu club para tus hijos», que mostraban lo mismo, y los hasta tres clubes propuestos, cuyo trabajo hacen ahora las dos secciones.

**Sustituye** las reglas de botones propios de FitKidz del contenido mínimo.

**Aterriza en:** capítulos 2.2 y 2.5.

### D-77 · Las tres páginas de entrenamiento individual se comportan como páginas de objetivo

Entrenamiento con pesas, entrenamiento aeróbico y **entrenamiento aeróbico en alberca**. Su botón propio de contenido dice **«Conoce los programas de [nombre de la modalidad]»** y abre los seis objetivos, cada uno con su programa: el nombre que la persona lee y por qué le sirve. En el aeróbico, además, la máquina, la duración y cuándo hacerlo. Al tocar un programa se ven los clubes donde está disponible, y de ahí la página del club; en alberca, solo los clubes que la tienen. Con el cuestionario contestado, cada programa lleva la leyenda de D-72, que en la práctica solo distingue en alberca.

**Nunca se le muestra a la persona el equipo, el protocolo ni el nombre técnico del programa.** El equipo y la carga los define el entrenador en la primera sesión. Los nombres técnicos viven en las fichas internas.

**Los programas son secciones dentro de las tres páginas, no páginas nuevas:** el contrato cuenta 47 clases individuales, que ya incluyen estas tres, y cualquier adición exige convenio modificatorio.

**Aterriza en:** capítulos 2.5 y 10.

### D-78 · El entrenamiento aeróbico en alberca se prescribe por esfuerzo percibido, no por pulsaciones

**En el agua, el corazón late entre 10 y 12 pulsaciones por minuto menos que en piso al mismo esfuerzo** —la cifra y su fuente están en el insumo acuático—, por efecto de la presión del agua y la flotación sobre la distribución de la sangre. Una zona de pulsaciones calculada para piso, aplicada en alberca, subestima el trabajo real.

De ahí, dos reglas del sistema:

1. **La intensidad de los programas acuáticos se expresa en esfuerzo percibido y en cadencia**, nunca en pulsaciones trasladadas del piso.
2. **El reactivo 5 del cuestionario —el ritmo que va con la persona— es el criterio que ordena los programas acuáticos**, igual que ordena las clases.

La correspondencia de los seis objetivos con sus programas acuáticos **no se fija en el documento**: vive en la matriz de entrenamiento individual, con el contrato que D-83 exige. El capítulo 10 declara esa fuente y el método de derivación de D-84.

**Aterriza en:** capítulos 10 y 11.

### D-79 · Lo que el sistema nunca hace en el agua

Ninguna pieza del sistema —ni la experiencia, ni el brief, ni BES— **propone apnea, hiperventilación previa a la inmersión ni series de aguante de la respiración.** La pérdida de conocimiento por falta de oxígeno bajo el agua es la principal causa de ahogamiento entre nadadores con experiencia, y ocurre sin aviso.

**Aterriza en:** capítulos 10 y 12.

---

## 9 · Qué fija el documento y qué no

### D-80 · La atención a personas socias queda fuera de este documento

**El sitio y BES atienden prospectos.** La experiencia ideal es un instrumento de captación, y el capítulo 4 ya lo acota a quien no tiene membresía activa.

Consultar horarios, congelar una membresía, cancelarla o cualquier otro autoservicio de una persona socia **no es materia de este documento**. Si Sports World decide publicar su política de cancelación o abrir un centro de ayuda, es contenido institucional, fuera de las 148 páginas y fuera de esta Arquitectura.

**Aterriza en:** el límite de alcance de las páginas iniciales.

### D-81 · Las direcciones nuevas siguen el patrón de las que ya existen

| Página | Dirección | Viene de |
|---|---|---|
| Bajar de peso | `/bajar-de-peso/` | Se conserva |
| Estética corporal y definición muscular | `/objetivos/estetica-corporal/` | `/perfiles/tonificar/` |
| Aumentar masa muscular | `/objetivos/masa-muscular/` | `/perfiles/ganar-fuerza/` |
| Desempeño atlético | `/objetivos/desempeno-atletico/` | Nueva |
| Capacidad cardiovascular | `/objetivos/salud-cardiovascular/` | `/perfiles/salud-y-bienestar/` |
| Moverse mejor con más agilidad | `/objetivos/agilidad-y-movilidad/` | `/perfiles/rehabilitacion/` |
| Actividades para menores de 3 meses a 13 años | `/actividades-para-menores/` | `/fitkidz/` |

**Toda dirección anterior redirige a la nueva de forma permanente.** `/perfiles/primeros-pasos/` no tiene sucesora directa, porque no era un objetivo sino un nivel: redirige al inicio de la sección de objetivos.

**Aterriza en:** Anexo F.
**Fuera de la Arquitectura:** el plan de redirecciones del rediseño.

### D-82 · Hay dos radios y no se unifican

| Radio | Para qué sirve | Dónde vive |
|---|---|---|
| **5 km** | Que la persona **explore** otros clubes alrededor del suyo | Capítulo 2, la jerarquía del menú |
| **10 km** | Que el sistema **resuelva** cuál es su club ideal entre los que cumplen sus requisitos | Capítulo 9 |

Son dos operaciones distintas y no tienen por qué medir lo mismo. **El capítulo 9 nombra el suyo de forma que no se confunda con el del menú.**

**Cierra** el punto abierto que había quedado en D-65.

### D-83 · El documento nombra la fuente y el proceso, no congela el dato

**Es una regla de redacción y gobierna todo el documento.**

Los datos operativos —el catálogo de clases, sus beneficios, las amenidades, los planes, los programas de entrenamiento individual— **se obtienen de los sistemas de Sports World.** Lo que hoy existe en el proyecto es preliminar y va a cambiar.

De ahí, qué escribe el documento y qué no:

| El documento escribe | El documento no escribe |
|---|---|
| **De qué fuente sale** el dato | El dato mismo, como si fuera definitivo |
| **Qué debe entregar** esa fuente, campo por campo | Los nombres de las clases, sus beneficios o sus horarios |
| **Quién la mantiene** y con qué cadencia | Listas que envejecen con el primer cambio del catálogo |
| **Qué ocurre si no responde** | |

**Cuando el documento necesita mostrar contenido para explicarse, lo marca como estado preliminar** y dice de qué fuente saldrá el definitivo.

**La consecuencia práctica:** una revisión del documento **no es una revisión de la calidad de los datos actuales.** Discutir si un beneficio está bien redactado o si una clase sirve a un objetivo es trabajo de la matriz, no del documento. El documento se juzga por si nombra bien la fuente, el contrato y el proceso.

**Aterriza en:** todos los capítulos, y señaladamente el 10, el 11 y el 13.
**Corrige D-78**, que dejaba los seis programas acuáticos «sujetos a validación del profesional de salud» como si eso fuera un pendiente del documento. No lo es: los programas los mantiene la fuente, y el documento solo declara su contrato.

### D-84 · Cuando la derivación es indirecta, se declara

Buena parte de lo que el sistema prescribe **no tiene evidencia directa para el caso exacto**, y eso no lo invalida: se deriva de lo que sí está medido. Lo que no se vale es que una derivación indirecta se lea igual que una directa.

Por eso, cada vez que el documento derive una regla o un programa de evidencia que mide otra cosa, **declara la fuerza de la cadena** con tres grados:

| Grado | Qué significa |
|---|---|
| **Directa** | La evidencia mide el mismo desenlace |
| **De un paso** | La evidencia mide una cualidad intermedia, y el salto al desenlace es uno solo |
| **Por ausencia** | No hay evidencia para ese caso, y la regla se construye reconociéndolo |

**Aterriza en:** capítulos 10 y 11.


### D-85 · El Contrato encabeza la jerarquía de fuentes

Durante la revisión de la Arquitectura, cuando dos documentos del depósito dicen cosas distintas sobre el mismo hecho, **prevalece el que esté más arriba en esta jerarquía**:

| | Fuente | Por qué ahí |
|---|---|---|
| **1** | **El Contrato y sus anexos** | Es lo firmado. Nada que el documento diga puede obligar a algo distinto de lo pactado |
| **2** | **CEI-01**, el cuestionario vigente | Es el único instrumento, y todo lo que el sistema personaliza sale de él |
| **3** | **Esta bitácora de decisiones** | Lo decidido de forma expresa, con fecha |
| **4** | **Los capítulos aprobados** de la Arquitectura | |
| **5** | El resto del depósito | Documentos de trabajo anteriores a la revisión |

**Consecuencia práctica.** Una propuesta que no cabe en el Contrato no se adopta, se cotiza. Por eso las seis páginas de objetivo de D-70 caben: el Contrato fija cinco hubs de perfil y un hub de bajar de peso **sin nombrarlos**, así que renombrarlos no altera el conteo ni el alcance. Y por eso los programas de entrenamiento individual de D-77 son secciones y no páginas: el Contrato cuenta 47 clases individuales, y cualquier adición exige convenio modificatorio.

**Dentro de un mismo nivel, gana la fecha más reciente.**

**Aterriza en:** las páginas iniciales, en la base documental.

### D-86 · Todo lo decidido en una sesión entra a la bitácora en esa sesión

Una decisión que se toma en conversación y no se escribe **deja de existir en cuanto termina la sesión**: la siguiente vuelve a preguntarla o, peor, la resuelve distinto.

Por eso, al cerrar una sesión de trabajo sobre la Arquitectura, **toda decisión tomada en ella queda escrita aquí con su número**, y las decisiones anteriores que quedan corregidas llevan su nota de corrección. El historial del repositorio sustituye a la memoria de cualquiera, y esta bitácora sustituye al historial de la conversación.

**Verificación:** las decisiones de una sesión se cuentan contra la conversación antes de cerrarla. Si el número no coincide, falta escribir.


### D-87 · Un capítulo aprobado no se reescribe: se edita

**La reescritura completa de un capítulo aprobado está prohibida.** Aunque el resultado sea mejor, obliga a releerlo entero para saber qué cambió, y en esa relectura se pierde lo que ya se había revisado.

De ahí, cómo entra todo cambio a partir de esta decisión:

| | Regla |
|---|---|
| **Alcance** | Se edita solo lo que la decisión toca. El resto del capítulo queda carácter por carácter como estaba |
| **Un commit por decisión** | El mensaje nombra la decisión y el capítulo. Quien revisa lee el cambio, no el capítulo |
| **Nada entra sin decisión** | Una mejora de redacción que ninguna decisión pide no se hace |
| **Si el cambio no cabe en una edición** | Se dice antes, con el motivo, y se pide autorización expresa para reescribir |

**La verificación de que se cumplió** es el propio historial: un cambio que toca más líneas de las que su decisión justifica es visible en el commit.

**Alcanza a los capítulos aprobados y a los escritos pendientes de aprobación.** Un capítulo que todavía no existe se escribe completo, porque no hay nada que preservar.


## 10 · La página y la capa personal

### D-88 · Las 148 páginas se sirven estáticas e idénticas; lo que depende de la persona es una capa que se resuelve con el identificador de sesión

Cada página se genera con el corte de las 06:00 —y con la sincronización manual para promociones— y se sirve idéntica a todas las personas, desde caché. **Nada del contenido varía por persona.** Lo que sí depende de ella —el menú contextual, la leyenda de disponibilidad de D-72, «Explora…», «Tu visita agendada» y lo que hace «Agenda tu visita» del encabezado cuando ya hay cita (D-67)— es una **capa personal** que se resuelve con el identificador de sesión de D-48 y se monta sobre la página. Con qué técnica se resuelve —en el servidor, en la red de distribución o en el navegador— lo decide quien construye; lo que esta decisión fija es lo que la persona ve.

Cinco reglas de diseño se siguen de ahí:

| | Regla |
|---|---|
| **1 · El máximo de botones** | El menú se diseña para el número máximo de botones que ese tipo de página puede llevar, y el espacio se reserva para ese máximo, de modo que el contenido no se mueva cuando el menú cambie de estado ni cuando llegue después que la página. El máximo lo fija el capítulo 2: cinco en clase, blog, entrenamiento individual y objetivo; cuatro en inicio, club, amenidad, actividades para menores y entrenamiento personal; tres en membresías |
| **2 · Sin identificador** | Quien llega sin identificador de sesión es, para el sitio, alguien sin cuestionario, y su menú viene escrito en la página: aparece con el contenido, sin espera. Quien llega con identificador recibe el menú de su estado, resuelto con ese identificador |
| **3 · Si el script falla** | El sitio usa JavaScript en la aplicación, en las animaciones y en la capa personal. Si en una visita el script de la capa personal no llega o falla, la persona no ve una página sin menú: ve la página completa con el menú del estado sin cuestionario, cuyos cuatro botones son enlaces normales. La aplicación —cuestionario, experiencia y agenda— sí requiere que el script corra; su respaldo es BES |
| **4 · Sin consultas adicionales** | La leyenda y «Explora» se resuelven con datos que la página ya trae —los clubes donde se imparte cada clase— y con el estado de la sesión |
| **5 · Dos mundos, un solo paso** | El cuestionario, la experiencia y la agenda son pantallas de aplicación, no páginas estáticas. La precarga del capítulo 2.6 es el puente, y el diseño hace continuo el paso: mismo encabezado, misma tipografía, misma velocidad |

**La capa fija no limita animaciones ni transiciones.** Lo que las limita es el rendimiento que exige el posicionamiento —el contenido no se retrasa ni se mueve una vez pintado— y la accesibilidad.

**Aterriza en:** capítulo 2.4; capítulo 7, qué guarda el servidor y qué pide el navegador; requisitos no funcionales, cuando tengan lugar en la estructura.


## 11 · La Arquitectura se alinea con el Mapa del Funnel

### D-89 · Los tres estados se nombran, no se numeran

El Contrato designa el **Mapa del Funnel** como «documento único de medición» del proyecto, y ese documento es dueño de los códigos `E##`. Sus etapas y los estados del menú contextual usaban los mismos códigos para cosas distintas:

| Mapa del Funnel | Capítulo 2, antes |
|---|---|
| **E2** · Cuestionario iniciado, al responderse la primera pregunta | **E2** · Cuestionario completado, sin cita |
| **E3** · Cuestionario completado, al generarse la experiencia ideal | **E3** · Cuestionario completado, con cita |
| **E4** · Visita agendada, al confirmarse la escritura al CRM | — |

Los tres estados del menú pasan a llamarse por su nombre:

| Estado | Cuestionario | Cita |
|---|---|---|
| **Sin cuestionario** | Pendiente | Sin cita |
| **Con experiencia** | Completado | Sin cita |
| **Con visita** | Completado | Con cita |

Y cada regla nombra la variable de la que depende: donde depende solo del cuestionario, el texto dice «sin cuestionario» o «con experiencia»; donde depende solo de la cita, dice «sin cita» o «con cita».

**No cambia ninguna regla:** cambia cómo se llaman los tres estados. Lo que prescriben D-55, D-60, D-63, D-65, D-73 y D-88 queda intacto.

**Aterriza en:** capítulos 2 y 7.

### D-90 · La Arquitectura nombra los dos identificadores de sesión

El Mapa del Funnel y la Integración de Datos nombran dos; la Arquitectura nombraba uno solo, y por eso parecía contradecirlos.

| | Qué es | ¿Llega al registro del prospecto? |
|---|---|---|
| **Identificador de sesión** · `web_session_id` | Propio, aleatorio y vacío. Vive en el navegador, ata entre sí las páginas que la persona visita y muere con la sesión | **No** |
| **Llave de la sesión** · `session_uuid` | Llave de idempotencia: si la persona vuelve y reconfirma, se actualiza el mismo registro y nunca se duplica | **Sí.** Es campo del registro |

**D-48 queda intacta:** lo que nunca llega al registro es el primero de los dos.

**Aterriza en:** capítulos 2.8, 7.5.1 y 7.5.2.

---

## 12 · El orden y la redacción del documento

### D-91 · El capítulo del sitio se ordena por resultado, no por recorrido

El capítulo 2 va en este orden, y en ningún otro:

| | Apartado | Por qué va ahí |
|---|---|---|
| **1** | **Los once tipos de página, cada uno por el porqué existe y el problema que resuelve hoy** | Una página se describe después de saber para qué existe. Cada tipo declara la intención de búsqueda que atiende, y tenerla es el requisito para que el tipo exista |
| **2** | **Lo que el sitio produce**: el cuestionario, la experiencia ideal, el brief y la visita agendada | El resultado se establece antes que el proceso. Quien lee el proceso ya sabe a dónde lleva |
| **3** | **Cómo el contenido de las páginas y los menús contextuales llevan al cuestionario y a la experiencia ideal** | Los medios, una vez conocido el fin |

**Aterriza en:** capítulo 2, apartados 2.1 a 2.10.
### D-92 · El documento dice lo que el sistema hace

**Describir el sistema por lo que no hace queda prohibido.** Una frase que enumera lo que no ocurre obliga a quien lee a deducir el hecho por descarte, y el texto deja de ser legible. La forma correcta es siempre la afirmativa: qué ocurre, con qué dato, en qué momento y quién lo ve.

| | Regla |
|---|---|
| **En lo que se escribe de aquí en adelante** | Cada regla se enuncia por lo que ocurre. Donde hace falta acotar un alcance, se acota nombrando lo que sí queda dentro |
| **En lo ya escrito** | Las frases de esta forma —«qué decide y qué no», y su familia— se retiran documento por documento. **Cada párrafo se le muestra a Eric y se retira solo con su aprobación**, porque algunas de esas frases sostienen un hecho que el Contrato exige declarar y que hay que volver a decir en afirmativo antes de quitarlas |

**Excepción única, ya vigente:** la leyenda de disponibilidad de D-72 —«Disponible en tu club» o «No disponible en tu club»— porque la persona necesita esa comparación para decidir.

**Aterriza en:** todo el documento, y el barrido alcanza al resto del depósito.



---

## Puntos abiertos que esta revisión destapó

| Punto | Qué falta |
|---|---|
| **Requisitos no funcionales** | Accesibilidad, tiempos de carga, comportamiento sin JavaScript y en conexión lenta no tienen lugar en la estructura de dieciséis capítulos y seis anexos. **Pendiente de confirmación de Eric** |
| **Dos documentos se llaman CEI-01** | El del Anexo A del Manual del Proceso Comercial y el vigente. La etiqueta no distingue |
| **Dos asistentes se llaman BES** | El de esta Arquitectura, que atiende prospectos, y el del archivo de configuración del depósito, que atiende al equipo del proyecto y declara expresamente que no atiende prospectos |
| **De dónde sale el club sustituto** | Ver D-43 |
| **Atribución comercial de la venta que se va a otro club** | Ver D-44 |
| **Texto del aviso sobre el identificador de sesión** | Ver D-48 |
| **CEI-01 requiere dos ajustes** | El renglón de Clubes del control de lógica, y la declaración del bloque P0 |
| **La base de experiencias ideales** | D-56 la nombra como base propia ligada al CRM por identificador. Su contrato —qué campos lleva, quién la mantiene, cuánto retiene— se especifica en el capítulo 13 |
