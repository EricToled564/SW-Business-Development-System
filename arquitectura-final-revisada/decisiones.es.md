# Bitácora de decisiones · Adenda de la revisión de la Arquitectura

**Continúa la numeración de DEC/SW/01, que llega hasta D-32.** Registra de D-33 a D-56. Esta adenda registra las decisiones tomadas durante la reescritura de la Arquitectura de la Experiencia, el 18 de septiembre de 2026.

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

**Aterriza en:** capítulos 2.3.1, 7.5.1 y 8.
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

**Aterriza en:** capítulo 2.3 y 2.6. **Alcanza también a la Parte II**, que prescribirá el comportamiento de esos menús.

### D-53 · El límite de dos objetivos es vivo

Mientras la persona no toque «Siguiente», puede cambiar de objetivos con entera libertad: quitar uno y poner otro cuantas veces quiera. El límite de dos no bloquea la pantalla, ordena la selección. **El orden en que los elige se conserva y significa algo:** el primero es su objetivo principal.

**Aterriza en:** capítulo 2.6.3 y capítulo 6.

### D-54 · El botón de agendar abre el cuestionario con un preámbulo

El botón de agendar una visita está en todas las páginas y en todo momento de la conversación por WhatsApp, y **es la puerta de entrada a la experiencia ideal**. Al tocarlo, antes de cualquier pregunta, se muestra un texto de invitación con dos versiones: la genérica —«durante tu visita a nuestros clubes»— y la del club, cuando el botón se tocó dentro de la página de un club —«durante tu visita a Sports World Polanco»—. Después viene la compuerta de mayoría de edad, después el bloque de precarga y después los reactivos.

**Aterriza en:** capítulo 7.1 y 7.3.1.

---

## 7 · Lo que dura y lo que no

### D-55 · Los tres estados son de sesión, y no sobreviven a la salida

Los tres estados que gobiernan el menú contextual —sin cuestionario, completo dentro del flujo, completo fuera del flujo— **describen a la persona dentro de una sesión**, no a lo largo del tiempo.

«**Completo, fuera del flujo**» es lo que ocurre cuando alguien contesta, recibe su experiencia, **no agenda** y se pone a navegar el sitio: llega a la página de un club por la navegación interna o por una búsqueda, y ahí ya no se le ofrece diseñar su experiencia, sino volver a ella.

**En cuanto la persona sale, el registro de sesión muere.** Al volver es, para el sitio, alguien sin cuestionario, y si lo quiere vuelve a contestarlo. No hay reconocimiento entre visitas, no hay cuenta y no se guarda nada en su navegador salvo el identificador de D-48, que muere con la sesión.

**Aterriza en:** capítulos 2.3.1 y 7.5.

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
