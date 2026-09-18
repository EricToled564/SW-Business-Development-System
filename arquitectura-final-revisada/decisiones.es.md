# Bitácora de decisiones · Adenda de la revisión de la Arquitectura

**Continúa la numeración de DEC/SW/01, que llega hasta D-32.** Esta adenda registra las decisiones tomadas durante la reescritura de la Arquitectura de la Experiencia, el 18 de septiembre de 2026.

Cada entrada dice qué se decidió y en qué capítulo del documento aterriza. Las que obligan a corregir algo fuera de la Arquitectura lo señalan de forma expresa.

---

## 1 · El instrumento

### D-33 · Lenguaje neutro, sin marcas tipográficas

Ninguna opción del cuestionario declina por género. Los reactivos se redactan con frases que valen para cualquier persona. **Queda prohibida toda marca tipográfica de inclusión:** arroba, equis, vocal entre paréntesis y doble terminación separada por barra.

Reformulaciones aplicadas: «entrenar sin compañía» en lugar de «entrenar solo»; «con una amistad»; «con mis hijas o hijos»; «actividades para menores» en lugar de «actividades para niños».

**Fuera de la Arquitectura:** CEI-01 pasa a versión 1.1.

### D-34 · El apellido se pide con el teléfono y el correo

El apellido se solicita en la captura de contacto, al terminar el cuestionario, junto con el teléfono y el correo, en todos los canales. En WhatsApp se piden apellido y correo, porque el número viene del canal. El reactivo 1 sigue sin pedirlo.

**Fuera de la Arquitectura:** CEI-01 versión 1.1, apartado 4.

---

## 2 · El principio de precarga

### D-35 · No se le pregunta dos veces lo mismo a la persona

Lo que el sistema ya sabe antes de que empiece el cuestionario no se le pregunta: se le confirma, en un solo bloque, antes del primer reactivo. El bloque se llama **P0 · Precarga** y se declara dentro del instrumento.

**Aterriza en:** capítulo 4.2.

### D-36 · De dónde sale el conocimiento previo, por canal

Sitio web: las páginas que la persona visitó antes de abrir el cuestionario. WhatsApp: lo que la campaña que la trajo declara que promueve. Consola: el club donde la persona está parada, que se da por dado y no se pregunta.

**Aterriza en:** capítulo 4.2.1.

### D-37 · Cuatro categorías y dos formas

Solo pueden precargarse cuatro cosas: **club, amenidad, clase y objetivo.**

Dos formas de preguntar, y una regla que las separa: si al contestar que no alguien tiene que decidir eso de todas maneras, la pregunta lleva la opción de recomendar. Si al contestar que no simplemente no se agrega nada, la pregunta es sí o no.

Club y amenidad llevan la opción de recomendar. Clase y objetivo son sí o no.

**Aterriza en:** capítulo 4.2.2.

### D-38 · El bloque nunca ofrece lo que no se puede entregar

Antes de mostrarse, cada punto candidato se verifica contra la instantánea del día. El punto que no se pueda cumplir **no se muestra, no se menciona, no se explica y no deja rastro.**

Si la navegación revela un club y una clase que ese club no imparte, se pregunta solo por el club. Nunca se le dice a la persona que el club no imparte lo que estuvo viendo.

**Aterriza en:** capítulo 4.2.3.

### D-39 · El bloque se compone y se muestra una sola vez

Después de la compuerta de mayoría de edad y antes del primer reactivo. No se recompone con las respuestas que la persona dé dentro de él.

**Aterriza en:** capítulo 4.2.3.

### D-40 · La clase aceptada sin club fijado es requisito del club

Con club fijado, la clase aceptada queda asegurada en el tercer bloque y no agrega requisito. **Sin club fijado, la clase se vuelve requisito:** el resolver solo considera clubes que la impartan, y si el más cercano no la imparte, ofrece el más cercano que sí, con las alternativas señaladas.

Es el quinto requisito, y el único que no viene del cuestionario sino del contexto previo.

**Aterriza en:** capítulos 4.2.4 y 8.
**Fuera de la Arquitectura:** obliga a corregir el renglón de Clubes del control de lógica de CEI-01, que hoy exige solo amenidades, preferencias y clases por objetivo.

### D-41 · La ficha de campaña declara qué promueve

Sin ese campo, WhatsApp no sabe qué precargar y la conversación arranca preguntando lo que el anuncio ya le dijo a la persona.

**Aterriza en:** capítulo 12.
**Fuera de la Arquitectura:** la ficha de campaña gana un campo obligatorio.

---

## 3 · La elección de club

### D-42 · Las banderas existen para elegir y desaparecen al elegir

Mientras la persona elige, cada alternativa lleva su bandera y la leyenda concreta de lo que le falta. **En cuanto elige, las banderas desaparecen:** su plan se recompone contra ese club y queda completo, de modo que no hay nada faltante que señalar.

**Sustituye** la nota ámbar posterior a la elección que fijaba el cambio 14 del anexo de correcciones.

**Aterriza en:** capítulos 2.2.4 y 8.

### D-43 · Cuando el club que la persona quiere no cumple

No se le entrega ese club por omisión. Se le recomienda **el más cercano al club que pidió que sí cumple**, se le dice en concreto qué le falta al que quería, y el que quería queda disponible para cambiarse.

Unifica tres situaciones en un solo comportamiento: ningún club cercano cumple; la persona elige un club que no cumple; la precarga trae un club que no cumple.

**Aterriza en:** capítulo 8.
**Abierto:** de dónde sale el club que se recomienda — la tabla de sustitutos que Sports World asigna a mano, o una matriz calculada de tiempos entre clubes.

### D-44 · En consola, el sistema muestra y el asesor decide

El club se da por dado y no se pregunta. Cuando ese club no cumple lo que el perfil exige, el brief nombra lo que le falta y cuál club sí lo entrega. **Enviar o no a la persona a ese otro club es decisión del asesor.**

**Aterriza en:** capítulos 2.4.4 y 4.2.1.
**Abierto, fuera de la Arquitectura:** la regla de atribución comercial de esa venta corresponde al proceso comercial y está por definirse.

### D-45 · Al cambiar de club, el plan se recompone completo

Bloques, clases, modalidad, tiempo de traslado y evaluación de requisitos. Si algo que tenía no existe en el club nuevo, se sustituye por lo equivalente para el mismo objetivo; nunca queda un hueco.

El texto redactado **no** se vuelve a generar. De ahí se sigue una restricción: el texto se redacta de forma que lo único específico de un club sea su nombre y su dirección.

**Aterriza en:** capítulos 2.2.3, 9 y 11.

---

## 4 · El recorrido

### D-46 · BES está disponible en todo momento

Durante el cuestionario, **toma el control desde el reactivo en el que va la persona**, con lo que ya contestó, y sigue con el mismo instrumento. No reinicia ni repite. El paso de vuelta al recorrido autónomo también es libre. Después de entregada la experiencia, queda disponible para resolver dudas.

BES hace lo que la pantalla permite —cambiar de club, cambiar de clases— y nada más.

**Aterriza en:** capítulos 1.3.4, 2.3 y 6.

### D-47 · Ruta reducida para personas menores de edad

Quien no confirma la mayoría de edad **no queda fuera**. El sistema le resuelve su club **sin pedirle un solo dato personal** y sin generar experiencia ideal: solo se le preguntan los reactivos que alimentan la elección de club. Recibe el club, su dirección y su tiempo de traslado, y cómo inscribirse con la firma de su tutor, en el club.

No se abre registro, no se escribe nada y al cerrar la sesión no queda rastro. El bloque de precarga sí se muestra, porque no pide ningún dato.

**Aterriza en:** capítulo 3.2.

### D-48 · Identificador de sesión para poder seguir la navegación

El sitio asigna un identificador propio, aleatorio y vacío, cuyo único trabajo es atar entre sí las páginas que la persona visita. No lleva ningún dato suyo, **se descarta en cuanto el cuestionario abre** y nunca llega al registro del prospecto. Nada de lo que la persona responde se guarda en su navegador.

**Sustituye** la regla anterior de «sin cookies».

**Aterriza en:** capítulo 7.
**Abierto, fuera de la Arquitectura:** el texto del aviso simplificado y si procede consentimiento previo, que corresponde a Legal.

---

## 5 · El documento

### D-49 · El documento se parte en dos

**Parte I** explica por qué existe la experiencia ideal y no obliga a nada. **Parte II** prescribe lo que el sistema hace. La frontera queda declarada en el texto, para que el lector sepa en qué modo está leyendo.

### D-50 · Cada capítulo aprobado se sube en el momento de su aprobación

Con su hash registrado. Cualquier cambio posterior es un commit nuevo cuyo mensaje dice qué cambió y que lo ordenó Eric. El historial del repositorio sustituye a la memoria de cualquiera.

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
