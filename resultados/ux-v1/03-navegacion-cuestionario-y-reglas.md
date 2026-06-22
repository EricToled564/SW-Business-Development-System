# Navegación, cuestionario y reglas de negocio de la Experiencia Ideal

Sports World · Documento normativo de comportamiento, navegación y lógica de negocio del sitio web

---

## 1. Filosofía de navegación

El sitio de Sports World no es un catálogo: es un **instrumento de cualificación** presentado como una experiencia de contenido. Toda su arquitectura existe para llevar a una persona —desde donde sea que entre— a diseñar su experiencia ideal de entrenamiento y, con ello, convertirse en un lead que el equipo comercial pueda cerrar sin volver a preguntarle nada.

De esa intención se desprenden cuatro convicciones que gobiernan cada decisión de navegación:

1. **Todos los caminos llevan al mismo lugar.** No importa por qué puerta entre el usuario; la navegación lo orienta siempre hacia «Diseña tu experiencia».
2. **Una sola acción de conversión.** El sitio no vende en línea ni dispersa la intención en múltiples llamados a la acción que compiten entre sí. Hay un único acto de conversión —agendar una visita guiada— y está disponible en todo momento.
3. **El sistema nunca pierde al usuario.** La navegación es sensible al contexto: cambia según lo que el usuario ya hizo, la página en la que está y el club que le corresponde. Nunca lo deja en un callejón sin salida ni le vuelve a pedir lo que ya dio.
4. **La verdad por encima de la persuasión.** La navegación no engaña ni presiona. Ofrece la acción correcta en el momento correcto y deja que el valor entregado —una recomendación personalizada y segura— haga el trabajo de convencer.

---

## 2. Principios de navegación

Los siguientes principios son normativos. Cualquier pantalla, componente o flujo del sitio debe poder justificarse contra ellos.

**P1 — Cuatro puertas, un destino.** El prospecto llega por una de cuatro puertas: la página de inicio, una de las páginas de club, una página de clase o de amenidad, o uno de los hubs de objetivo. Las cuatro convergen en «Diseña tu experiencia». Ninguna puerta es un destino final en sí misma; todas son rampas hacia el cuestionario.

**P2 — Una sola acción de conversión.** Agendar una visita guiada es el único acto de conversión del sitio. No existe checkout transaccional, no se vende membresía en línea y no compiten varios CTAs por la atención. Esta acción está siempre presente y siempre alcanzable en un solo toque.

**P3 — Tres rutas paralelas más una conversión en el header.** El encabezado ofrece, además del logo, tres rutas de exploración paralelas —recorrer el sitio por su estructura, diseñar la experiencia y preguntarle al asistente— y una única acción de conversión. Las tres rutas son equivalentes en jerarquía; la conversión es de otra naturaleza y se distingue visualmente.

**P4 — Un elemento, un solo lugar a la vez.** Ningún elemento de navegación se duplica. Cada botón vive en exactamente un sitio según el estado del usuario. Si un botón pertenece al encabezado, no se repite en el cuerpo de la página; si un botón del menú contextual cambia según el estado, aparece en una sola de sus formas a la vez.

**P5 — Navegación sensible al contexto.** El menú que rodea el contenido no es fijo: se compone en función de tres ejes —qué tan avanzado va el usuario en el cuestionario, en qué tipo de página se encuentra y cuál es el club que le corresponde—. La misma página muestra opciones distintas a usuarios en estados distintos.

**P6 — Estado persistente y reanudable.** El sistema recuerda lo que el usuario ya respondió y en qué punto va. Si abandona y regresa, puede continuar donde se quedó. El estado solo se conserva una vez que el usuario aceptó el aviso de privacidad; antes de eso, nada se guarda.

**P7 — Primero el móvil.** La experiencia se diseña y se redacta pensando primero en el teléfono. La densidad, los tamaños táctiles y la jerarquía se resuelven para móvil y luego se expanden a pantallas mayores.

**P8 — Cero huérfanos, cero enlaces rotos.** Toda página es alcanzable desde la estructura del sitio y enlaza de vuelta a ella. No hay páginas huérfanas ni enlaces internos rotos. Toda página de club, clase, amenidad y objetivo se sirve de forma rastreable e indexable, con su HTML disponible sin depender de la ejecución de scripts en el cliente.

**P9 — La geografía determina las opciones.** Lo que el sitio ofrece en materia de clubes depende de cuántos clubes hay en la ciudad o zona del usuario. Una ciudad con un solo club no muestra las mismas opciones que la zona metropolitana del Valle de México.

**P10 — La conversión no exige el cuestionario, pero lo intercala.** El usuario puede pedir agendar su visita en cualquier momento, incluso sin haber respondido el cuestionario. Si lo hace, el cuestionario se presenta como paso prerrequisito antes de confirmar la cita: la visita siempre se agenda con la información suficiente para que el Asesor llegue preparado.

---

## 3. El encabezado y el cajón estructural

### 3.1 El encabezado

El encabezado está presente en todas las páginas y en todos los estados. Contiene cinco elementos, en este orden:

1. **El logotipo**, que regresa a la página de inicio.
2. **«Tu Sports World»**, que abre el cajón con la estructura del sitio.
3. **«Diseña tu experiencia»**, que inicia el cuestionario.
4. **«Pregúntale a BES»**, que abre el asistente conversacional.
5. **«Agenda tu visita»**, un botón en forma de píldora roja, anclado a la derecha.

Los elementos 2, 3 y 4 son tres rutas de exploración paralelas. El elemento 5 es la única acción de conversión y por eso se trata visualmente distinto: es la única superficie roja del encabezado y no compite con nada.

**Regla R1 — El botón de conversión nunca se degrada.** «Agenda tu visita» se mantiene como botón con texto en todas las resoluciones; no se reduce a un ícono ni se esconde detrás de un menú. Debe poder alcanzarse siempre en un solo toque, en cualquier página y cualquier estado. Al presionarlo, lleva al flujo de agendado; si el usuario aún no completó el cuestionario, este se presenta como paso previo antes de confirmar la cita.

### 3.2 El cajón «Tu Sports World»

«Tu Sports World» es el **único menú estructural** del sitio. Abre un cajón con los ocho hubs que organizan todo el contenido:

1. **Clubes** — las cuarenta y nueve ubicaciones, distribuidas en trece estados.
2. **Clases** — el catálogo de clases para adultos: cincuenta y una en total, de las cuales siete son clases premium y cuarenta y cuatro son regulares.
3. **Amenidades** — las diez amenidades: alberca, zona de entrenamiento funcional, FitKidz, ring de box, muro de escalada, canchas, sauna y vapor, regaderas y vestidores, cafetería y estacionamiento.
4. **Perfiles** — los cinco hubs de objetivo: primeros pasos, salud y bienestar, estética corporal, ganar fuerza y rehabilitación.
5. **Bajar de peso** — un hub aparte, tratado como contenido sensible a la salud.
6. **FitKidz** — la submarca infantil, que reúne treinta y cuatro actividades organizadas por rango de edad y disciplina, sin páginas individuales por actividad.
7. **Membresías** — el hub de planes y sus cinco planes: UniClub, AllClub, Black Pass, Pink Plan y la promoción de veintiún días.
8. **Diario** — el contenido editorial del sitio.

**Regla R2 — El cajón solo contiene estructura.** Las tres acciones del encabezado —«Diseña tu experiencia», «Pregúntale a BES» y «Agenda tu visita»— no aparecen dentro del cajón. El cajón es para navegar la estructura del sitio; las acciones viven en el encabezado y no se duplican.

---

## 4. El papel del cuestionario

### 4.1 Por qué el cuestionario es la columna vertebral

El cuestionario «Diseña tu experiencia» es el corazón del sitio. Es el mecanismo que convierte a un visitante anónimo en una persona conocida, y a una persona conocida en un lead cualificado. La cadena que articula toda la experiencia es:

> **Cuestionario → Conocimiento → Experiencia Ideal → Lead Cualificado.**

El usuario responde; el sistema lo conoce; con ese conocimiento construye una experiencia de entrenamiento a su medida; y esa experiencia, al traducirse en una visita agendada, produce un lead que el Asesor puede cerrar sin re-preguntar nada.

Todo lo demás del sitio —las páginas de club, de clase, de amenidad, los hubs de objetivo— existe para alimentar este cuestionario o para dar contexto a su resultado.

### 4.2 Estructura general

El cuestionario consta de **quince preguntas base que siempre se muestran y seis preguntas condicionales** que aparecen solo cuando se cumplen ciertos disparadores. Según el camino del usuario, verá entre quince y veintiuna preguntas.

**Regla R3 — Una pregunta por pantalla.** Cada pregunta ocupa su propia pantalla, con una barra de progreso. El botón «Continuar» permanece deshabilitado hasta que la pregunta esté respondida. La transición entre preguntas es inmediata, por debajo de cien milisegundos, para que el flujo se sienta ligero.

### 4.3 El banco de preguntas

Las preguntas base, en orden:

- **Cómo te llamas.** Campo de texto, obligatorio, con al menos dos caracteres.
- **Género.** Selección única entre Hombre, Mujer y «Prefiero no mencionarlo».
- **Qué quieres sentir al salir del club.** Selección única entre cinco opciones de sensación —desconexión, ánimo renovado, comunidad, confianza en el propio cuerpo, sentirse a gusto consigo mismo—.
- **Qué buscas.** Selección múltiple de hasta dos opciones entre: bajar de peso, mejorar la estética y la definición muscular, aumentar masa muscular, mejorar el desempeño atlético, mejorar la salud cardiovascular y recuperarse de una lesión o dolor crónico. Esta es la pregunta que más condiciona el resultado.
- **Qué ritmo va contigo.** Selección única entre suave y controlado, moderado y constante, o intenso.
- **Dónde prefieres entrenar.** Selección única entre piso o área seca, alberca, ambas, o lo que recomiende el entrenador.
- **En qué horario prefieres entrenar.** Selección múltiple entre seis franjas horarias.
- **Qué días prefieres entrenar.** Selección múltiple de lunes a domingo.
- **Cuál es tu nivel de entrenamiento.** Selección única entre principiante, intermedio y avanzado.
- **Vienes de otro gimnasio.** Selección única entre venir de otro gimnasio, no haber ido nunca, o regresar después de una pausa.
- **Tienes alguna condición médica.** Selección múltiple entre ninguna, lesión o dolor articular o muscular, condición cardiovascular o de presión, u otra que se comentará en el club.
- **Prefieres entrenar solo o acompañado.** Selección única.
- **Con quién nos visitas en el club.** Selección única entre solo, con un amigo, con la pareja, con los hijos, o la familia completa.
- **Cerca de tu casa o de tu trabajo.** Selección única.
- **Dónde queda.** Dos campos —código postal de cinco dígitos o colonia— de los cuales basta llenar uno.

Las preguntas condicionales:

- **Qué tan larga fue la pausa.** Aparece solo si la persona indicó que regresa después de una pausa.
- **Estás embarazada o en posparto reciente.** Aparece a menos que el género declarado sea Hombre; incluye también a quien prefirió no mencionar su género. El embarazo nunca es una opción dentro de la pregunta de condiciones médicas: se captura exclusivamente aquí.
- **Si uno o más de tus hijos tiene menos de doce años.** Aparece solo si la persona indicó que visita el club con sus hijos o con la familia completa.
- **Si estás tomando algún tratamiento para bajar de peso.** Selección múltiple entre tratamientos con análogos de GLP-1, cirugía bariátrica, acompañamiento nutricional, otro tratamiento médico, o ninguno. Aparece solo en el camino de bajar de peso.
- **Tus datos físicos actuales.** Peso, estatura y cintura, con rangos válidos de treinta a trescientos kilogramos, ciento veinte a doscientos treinta centímetros y cuarenta a doscientos centímetros. Aparece solo en el camino de bajar de peso.
- **Cuál es tu objetivo de cambio.** Rangos de kilos o «sin un número específico». Aparece solo en el camino de bajar de peso.

### 4.4 Reglas del cuestionario

**Regla R4 — La pregunta de objetivo siempre admite hasta dos opciones.** No hay excepciones por objetivo: la persona puede elegir uno o dos. Cuando elige dos, el sistema combina ambos mapeos y elimina duplicados.

**Regla R5 — El camino de bajar de peso activa tres preguntas obligatorias.** Cuando entre los objetivos está «bajar de peso», se activan las tres preguntas del camino de peso —tratamiento, datos físicos y objetivo de cambio—. Mejorar la estética no las activa. Una vez activadas, son obligatorias: el usuario no puede saltarlas.

**Regla R6 — El embarazo se captura por separado y con tacto.** La pregunta de condiciones médicas nunca lista el embarazo como condición. El embarazo y el posparto se preguntan en su propia pantalla, que aparece para todas las personas salvo quienes declararon ser hombres. Cuando la persona prefirió no mencionar su género, esta pantalla usa un fraseo neutral; la privacidad de género nunca elimina el tamizaje médico necesario para la seguridad.

**Regla R7 — Inferencia desde la búsqueda.** Cuando el usuario llega desde un buscador externo, el sistema solo infiere dos cosas: el objetivo, si la búsqueda lo expresa de forma explícita, y la ubicación, si la búsqueda nombra un lugar específico. No infiere objetivo a partir de una búsqueda de clase —una misma clase sirve a muchos objetivos—, no infiere preferencia de ritmo ni de entorno a partir de una búsqueda de amenidad, y la navegación interna no infiere nada. Cuando hay señales en conflicto, el objetivo tiene prioridad sobre la ubicación, y la ubicación sobre cualquier objetivo derivado de una clase.

**Regla R8 — Pre-llenado según la página de aterrizaje.** El sitio pre-llena respuestas según la página por la que entró la persona, para no preguntarle lo que el contexto ya revela:

- Desde la página de inicio no se pre-llena nada, salvo la ubicación si la búsqueda la traía.
- Desde una página de club se omiten por completo las dos preguntas de ubicación, porque el club ya está determinado.
- Desde una página de amenidad no se pre-llena nada.
- Desde una página de clase se pre-marca el objetivo alineado con el movimiento de esa clase.
- Desde FitKidz se pre-marca que la persona visita el club con sus hijos.
- Desde el hub de primeros pasos se pre-marca el nivel principiante.
- Desde el hub de salud y bienestar se pre-marca el objetivo de salud cardiovascular.
- Desde el hub de estética corporal se pre-marca el objetivo de estética.
- Desde el hub de ganar fuerza se pre-marca el objetivo de masa muscular.
- Desde el hub de rehabilitación se pre-marca el objetivo de recuperación de lesión.
- Desde el hub de bajar de peso se pre-marca ese objetivo, lo que activa las tres preguntas del camino de peso.
- Desde Personal Training se pre-marca la preferencia de entrenar acompañado.
- Desde las páginas de entrenamiento individual se pre-marca la preferencia de entrenar solo, y el objetivo correspondiente a la subpágina visitada.

**Regla R9 — Todo pre-llenado es editable.** Ninguna respuesta pre-llenada queda bloqueada. El usuario puede cambiar cualquiera. El resultado se calcula a partir de las respuestas finales, de modo que puede diferir de la página por la que entró; esto es intencional.

**Regla R10 — Validación cercana y no punitiva.** Cada campo valida lo justo: el nombre debe tener al menos dos caracteres; las preguntas de horario y de días requieren al menos una selección; en la pregunta de ubicación basta un código postal de cinco dígitos o una colonia; los datos físicos deben caer dentro de sus rangos. Los errores aparecen en línea, inmediatamente debajo del campo afectado, con el mismo tono del resto del sitio. Ningún error impide editar otros campos. Al intentar avanzar con errores, la pantalla lleva el foco al primero.

**Regla R11 — Concordancia de género en el lenguaje.** Cuando el género declarado es Mujer, las opciones y textos que llevan género se expresan en femenino —«desconectada», «renovada», «confiada», «sola», «acompañada»—. En cualquier otro caso se usa la forma masculina por defecto.

**Regla R12 — El estado parcial solo se guarda con consentimiento.** El progreso del cuestionario se conserva en el dispositivo únicamente después de que la persona acepta el aviso de privacidad. Si no lo acepta, no se guarda nada. Cuando vuelve, el sistema ofrece retomar desde la última pregunta respondida.

**Regla R13 — Compuerta de salud antes del resultado.** En el camino de bajar de peso, antes de mostrar el resultado, se presenta un aviso de salud con la firma del profesional que respalda el contenido. Si la persona no lo acepta, recibe una experiencia genérica y no clínica —que nombra los componentes de forma general, sin intensidades, duraciones ni contenido médico— y se le explica por qué. No se captura ningún dato adicional a lo ya ingresado.

**Regla R14 — Perfilado progresivo ante el abandono.** El sistema mide el abandono pregunta por pregunta. Si la proporción de personas que completan de la primera a la última pregunta cae por debajo del umbral establecido, el cuestionario se divide en dos etapas: una primera con lo mínimo viable —nombre, objetivo y zona— suficiente para entregar una recomendación preliminar, y una segunda con el detalle, antes de agendar.

---

## 5. Los menús dinámicos

### 5.1 El modelo de estados

La experiencia distingue tres estados del usuario, y de ellos depende casi todo el comportamiento del menú contextual:

1. **Sin cuestionario.** La persona aún no ha completado «Diseña tu experiencia».
2. **Cuestionario completo, dentro del flujo.** La persona terminó el cuestionario y está navegando su experiencia ideal.
3. **Cuestionario completo, fuera del flujo.** La persona terminó el cuestionario pero se fue a explorar otras páginas del sitio.

**Regla R15 — Quien completa el cuestionario siempre tiene un club.** En el momento en que el cuestionario se completa, el usuario tiene necesariamente un club identificado. No existe el estado «cuestionario completo sin club».

### 5.2 El menú contextual y sus tres ejes

Alrededor del contenido de cada página vive un **menú contextual** que no es fijo. Se compone a partir de tres ejes: el estado del cuestionario, el tipo de página desde la que llega la persona, y el club que le corresponde.

**Regla R16 — Composición del menú por estado.** El botón de experiencia que aparece depende del estado:

- **Sin cuestionario**, el menú ofrece «Diseña tu experiencia», y —cuando la geografía lo amerita— «Tu Club ideal», además de «Agenda tu visita guiada», los artículos útiles si los hay, y los botones propios de la página.
- **Completo, dentro del flujo**, el menú muestra los botones propios de la página y no ofrece «Diseña tu experiencia» ni duplica «Volver a tu experiencia ideal».
- **Completo, fuera del flujo**, el menú ofrece «Volver a tu experiencia ideal», los artículos útiles si los hay, y los botones propios de la página.

**Regla R17 — La conversión, siempre presente.** En el menú contextual de toda página y en todo estado aparece «Agenda tu visita guiada». Es la acción de conversión y no tiene excepciones. Esto es consistente con el botón rojo del encabezado: la conversión está disponible por dos vías que nunca desaparecen.

**Regla R18 — «Diseña tu experiencia» mientras el cuestionario esté incompleto.** Mientras el usuario no haya completado el cuestionario, «Diseña tu experiencia» aparece en el menú contextual de cada página. Una vez completo, deja de aparecer en el menú contextual, aunque el botón permanece en el encabezado.

**Regla R19 — «Volver a tu experiencia ideal» cuando ya hay resultado.** Una vez que el usuario completó el cuestionario, «Volver a tu experiencia ideal» aparece en el menú contextual y reemplaza a «Diseña tu experiencia». Cada uno de los dos vive en un solo lugar a la vez.

**Regla R20 — «Tu Club ideal» fuera de las páginas de club.** «Tu Club ideal» aparece cuando la persona está en una página que no es la de un club individual y aún no está dentro de su flujo de experiencia ideal. Al presionarlo, si no hay ubicación inferida, presenta las dos preguntas de ubicación; si hay ubicación inferida, las muestra pre-llenadas para confirmar.

**Regla R21 — «Artículos o información útil» cuando hay coincidencia.** Cuando la persona aterriza en una página y existe al menos un artículo del Diario con una etiqueta que coincide con esa página, el menú muestra «Artículos o información útil». Si no hay artículos etiquetados para esa página, el botón no aparece.

### 5.3 La lógica geográfica

La oferta de navegación entre clubes depende de cuántos clubes hay en la ciudad o zona de la persona. El sistema distingue tres situaciones:

- **Ciudad con un solo club.** No se ofrece navegación a «otros clubes»: no hay otros.
- **Ciudad con dos o tres clubes.** Identificado el club, se ofrece «Otros clubes en tu ciudad», que muestra los uno o dos restantes.
- **Zona metropolitana del Valle de México, con más de tres clubes** —treinta y dos clubes en total—. Identificado el club, se ofrece «Otros clubes en el área», con dos caminos: ver los clubes dentro de un radio de diez kilómetros, o elegir otra ubicación. Si no hay club ni ubicación inferida, se presentan las preguntas de ubicación.

**Regla R22 — «Otros clubes» solo en páginas de club.** La navegación a otros clubes aparece únicamente en las páginas de club, y su forma exacta la determina el tamaño de la ciudad según lo anterior.

**Regla R23 — En la página de club se omiten las preguntas de ubicación.** Cuando la persona diseña su experiencia desde una página de club, las dos preguntas de ubicación se omiten, porque el club ya está determinado. El conteo de preguntas baja en consecuencia. Cambiar de club re-evalúa únicamente el componente de clases del resultado.

**Regla R24 — La geografía nunca auto-selecciona un club lejano.** Cuando la búsqueda permite inferir una ubicación pero no hay club cercano, la persona aterriza en la página de inicio con un aviso neutral y dos alternativas; el sistema no auto-selecciona un club distante. Cuando la geolocalización es denegada, la persona llega a la página de inicio en modo de captura de «Tu Club ideal», sin que se le insista repetidamente.

---

## 6. Las reglas de negocio a lo largo de la experiencia

Esta sección describe, etapa por etapa, cada regla de negocio que se aplica durante la experiencia del usuario, desde que descubre el sitio hasta que se convierte en un lead en manos del Asesor.

### 6.1 Descubrimiento y entrada

**Regla R25 — Indexabilidad como condición de existencia.** Toda página de club, clase, amenidad y objetivo debe entregarse al buscador como HTML rastreable, sin depender de la ejecución de scripts en el cliente. Una página que el buscador no puede leer, para efectos de descubrimiento, no existe.

**Regla R26 — Integridad de enlazado.** El sitio no tiene enlaces internos rotos ni páginas huérfanas. Cada página enlaza hacia y desde la estructura, de modo que tanto la persona como el buscador puedan recorrerla sin toparse con vacíos.

**Regla R27 — Una sola colonia o un solo código postal bastan para ubicar.** Para resolver el club que corresponde, el sistema acepta un código postal de cinco dígitos o el nombre de una colonia; con autocompletado cuando es posible y texto libre como respaldo. No exige dirección completa.

### 6.2 La generación de la Experiencia Ideal

El resultado del cuestionario es la **Experiencia Ideal**: una página construida específicamente para esa persona. Solo es alcanzable después de completar el cuestionario; quien intente llegar sin haberlo respondido es dirigido a «Diseña tu experiencia».

**Regla R28 — Orden del resultado.** La Experiencia Ideal se presenta siempre en el mismo orden: un encabezado con un gancho y un argumento que nombra los tres componentes; cuatro tarjetas de resumen —objetivo, nivel, horario y con quién entrena—; la tarjeta de «Tu Club Ideal»; los tres componentes de entrenamiento; la sección de seguridad cuando aplica; y la nota legal.

**Regla R29 — Tres componentes, encendidos por defecto.** El entrenamiento se arma con tres componentes: pesas, cardio y clases. Cada uno está encendido por defecto y solo se apaga ante una supresión explícita. El sistema es auditable: a partir de las respuestas, siempre es posible predecir qué componentes se encienden y por qué.

**Regla R30 — El componente de pesas.** Está encendido por defecto y la preferencia de entorno nunca lo apaga. Su única causa de supresión es una condición médica marcada como contraindicación absoluta para ese tipo de trabajo. Toma una variante acuática cuando la persona prefiere la alberca y el club tiene alberca; si el club no la tiene, toma la variante en seco y se acompaña de una nota. Su nombre visible es uno de seis, según el objetivo principal —fuerza integral, rutina por grupos musculares, desarrollo muscular progresivo, potencia y velocidad, fuerza de mantenimiento, o fuerza guiada en máquinas—. Nunca lista equipos en el texto visible y cierra recordando que el entrenador define los ejercicios y el peso en la primera sesión.

**Regla R31 — El componente de cardio.** Está encendido por defecto. Una condición cardiovascular no estabilizada y sin autorización médica lo restringe a cardio suave o lo apaga. No usa nombres técnicos en el texto visible: muestra la máquina sugerida, la duración, el momento respecto a las pesas y una razón en lenguaje llano. La máquina es una sugerencia, no una restricción. Cuando hay dos objetivos, la guía adopta la del más restrictivo, priorizando la recuperación. Las clases de intervalos de alta intensidad pertenecen al componente de clases, nunca a este.

**Regla R32 — El componente de clases.** Está encendido por defecto. Se apaga cuando la persona declara que prefiere entrenar sola; en ese caso, el espacio se renombra «Tu rutina individual» y recomienda en su lugar las subclases de entrenamiento individual correspondientes al objetivo. El entorno declarado filtra el catálogo: quien prefiere la alberca ve solo clases acuáticas; quien prefiere el área seca, solo clases en seco; quien elige ambas o deja que el entrenador decida, ve todas.

**Regla R33 — La preferencia de entorno gobierna los tres componentes en conjunto.** Cuando la persona prefiere la alberca y su club la tiene, pesas y cardio toman variantes acuáticas; si el club no la tiene, ambas quedan en seco con una nota que señala el club con alberca más cercano. Cuando elige ambas, pesas queda en seco y cardio ofrece alternativa acuática si el club la tiene. Cuando deja la decisión al entrenador, todo queda en seco y se aclara que el entrenador define el entorno en la primera sesión.

**Regla R34 — La tarjeta «Tu Club Ideal».** Se presenta entre el encabezado del resultado y los tres componentes. Todo su contenido es verificable: el nombre del club más cercano según la ubicación de la persona —o una alternativa por ciudad cuando la ubicación no importa—; la distancia expresada en minutos de traslado; la dirección de catálogo; una línea de intención que combina con quién y cómo entrena la persona; exactamente cuatro características verificables del club; y un enlace para ver otros clubes cercanos. Si algún dato no puede resolverse, ese elemento se omite; nunca se inventa.

**Regla R35 — Cambio de clases y de club.** La persona puede cambiar las clases recomendadas; al hacerlo, se reemplaza solo esa tarjeta y se vuelve a redactar el texto de esa clase, sin regenerar las demás. No puede elegir una clase fuera del catálogo de su club. Si elige una clase poco alineada con su objetivo, se le señala con suavidad, pero se respeta su elección. La persona también puede cambiar de club: se le muestran los clubes adicionales dentro de un radio configurable, ordenados por distancia; al elegir uno nuevo, se actualiza la tarjeta de club y se re-evalúa el componente de clases con el catálogo del nuevo club, mientras pesas y cardio permanecen, por ser independientes del club. Todo cambio se conserva en la sesión y se registra como anulación manual.

**Regla R36 — FitKidz en tres estados.** La disponibilidad de FitKidz es una característica del club, presente en cuarenta de los cuarenta y nueve. Cuando el club tiene FitKidz y clases infantiles nombradas, se muestra la sección con esas clases. Cuando tiene FitKidz pero sin clases listadas, se muestra una sección que indica que el Asesor compartirá el detalle en la visita. Cuando el club no tiene FitKidz, se muestra una sección que remite a otros clubes cercanos que sí lo ofrecen. Cuando la persona visita con sus hijos y al menos uno es menor de doce años, FitKidz se trata como una amenidad requerida y el club se elige entre los que la tienen.

### 6.3 Seguridad clínica y contenido sensible a la salud

**Regla R37 — El filtro de seguridad corre antes de recomendar.** Antes de ordenar y seleccionar clases, el sistema aplica un filtro duro de seguridad sobre cinco condiciones: lesión, condición cardiovascular, embarazo, posparto y cirugía bariátrica. Estas se derivan de las respuestas de condiciones médicas, de embarazo o posparto, y de tratamiento. Las clases contraindicadas para la condición de la persona quedan excluidas antes de cualquier ranking y nunca se nombran en el texto que ve el usuario.

**Regla R38 — El filtro opera sobre la condición, no sobre el objetivo.** La exclusión por seguridad depende exclusivamente de la condición declarada; la selección por afinidad depende del objetivo. Son ejes independientes: una misma clase puede quedar excluida por una condición y, en ausencia de esa condición, ser idónea para un objetivo.

**Regla R39 — Los tratamientos para bajar de peso tienen tratamiento diferenciado.** Un tratamiento con análogos de GLP-1 no excluye clases: prioriza el trabajo de fuerza para preservar masa muscular y se acompaña de un mensaje informativo que aclara que el Asesor lo confirma en la visita. La cirugía bariátrica excluye clases de alto impacto y carga elevada. Cuando la persona declara «otra» condición u «otro» tratamiento médico, no se aplica un filtro automático: se genera un mensaje que indica que el Asesor ajustará los protocolos con criterio clínico.

**Regla R40 — Los datos de salud solo excluyen y preparan, nunca diagnostican.** La información de salud se usa para dos cosas: excluir las clases grupales contraindicadas y preparar el brief del Asesor. Nunca se usa para diagnosticar. El Asesor valida clínicamente en la visita guiada.

**Regla R41 — Las prescripciones técnicas son internas.** Las prescripciones de series, repeticiones, cargas y descansos son internas; no se muestran al usuario. Están sujetas a la misma validación profesional que el resto del contenido sensible a la salud.

**Regla R42 — Validación profesional obligatoria y bloqueante.** El contenido sensible a la salud —el hub de bajar de peso, el de rehabilitación, los artículos de nutrición y rehabilitación, y el catálogo clínico de contraindicaciones— debe ser validado por un médico del deporte antes de publicarse. Esta validación es bloqueante: nada de este contenido llega a producción sin la firma profesional.

**Regla R43 — Requisitos de toda página sensible a la salud.** Cada una de estas páginas lleva tres cosas: la firma profesional visible, con nombre y cédula; un aviso de salud antes de las recomendaciones, que aclara que la información orienta y no sustituye la valoración médica; y la ausencia total de promesas numéricas: nunca se afirma que la persona bajará una cierta cantidad de kilos en un cierto tiempo.

**Regla R44 — La sección de seguridad del resultado se adapta a la condición.** Al pie del resultado, la sección de seguridad cambia su texto según la situación de la persona —tratamiento con GLP-1, GLP-1 junto con otra condición, otra condición médica, o ninguna— y siempre cierra con la misma aclaración: la recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica.

### 6.4 Selección y orden de las clases

**Regla R45 — La selección de clases ocurre antes de redactar.** El sistema elige y ordena las clases en el servidor, antes de generar cualquier texto. La redacción no genera, ordena ni filtra clases; solo selecciona identificadores de beneficio y de razón de coincidencia y escribe un conector breve.

**Regla R46 — El orden de la selección.** El proceso es: partir del catálogo del club resuelto; filtrar por entorno según la preferencia; filtrar por compatibilidad con el objetivo, descartando de inmediato cualquier clase marcada como no apta para alguno de los objetivos elegidos; filtrar por nivel; aplicar el filtro duro de contraindicaciones; calcular una puntuación de afinidad; y partir el resultado en las dos mejores, las que también encajan, y el resto.

**Regla R47 — La puntuación de afinidad.** Una clase suma por coincidir con el objetivo, con la sensación buscada y con el ritmo, y por traslapar con los horarios disponibles —traslape pleno o parcial—. Cuando hay dos objetivos, las coincidencias se acumulan. El empate se resuelve por orden alfabético.

**Regla R48 — Casos límite de la selección.** Si todas las clases quedan contraindicadas, el componente de clases ofrece Personal Training como alternativa. Si solo una clase resulta viable, se muestra esa y se complementa con Personal Training. Si en el nuevo club elegido no hay clases viables en los horarios de la persona, se le advierte y se le ofrecen alternativas o volver al club anterior.

### 6.5 Captura y conversión del lead

**Regla R49 — La captura de contacto va entre el resultado y la agenda.** Los datos de contacto se piden después de entregar el resultado y antes de permitir agendar. No se puede avanzar a elegir fecha y hora sin haberlos proporcionado. Se piden tres: apellido —con al menos dos caracteres—, celular —exactamente diez dígitos— y correo electrónico válido. Se pide el contacto solo después de que el resultado ya entregó valor.

**Regla R50 — La agenda y su retorno.** En la pantalla de agenda, la persona elige día y hora; el botón de regreso la lleva de vuelta a la captura de contacto, no al resultado. La confirmación ocurre en tiempo real. Si el sistema de agenda no responde, se entra en modo degradado: se captura el lead y se promete una llamada manual dentro de un día hábil.

**Regla R51 — Los recordatorios de visita.** Cuando la persona agenda, se programan dos recordatorios por mensajería: uno veinticuatro horas antes y otro dos horas antes de la cita. Sin consentimiento explícito para esa mensajería, no se envía ningún mensaje y el recordatorio recae en el correo electrónico.

**Regla R52 — La venta no ocurre en el sitio.** El sitio no tiene checkout. La ruta de conversión desde una página de membresía es agendar la visita guiada, que captura el lead y lo enruta. La venta de la membresía ocurre en persona en el club o por teléfono, nunca en línea.

### 6.6 Calificación y enrutamiento del lead

**Regla R53 — La puntuación del lead.** Cada lead recibe una puntuación a partir de señales: completar el contacto y agendar suma cuarenta; un objetivo de alta intención —bajar de peso o masa muscular— suma veinte; venir de otro gimnasio suma quince; un objetivo de cambio definido suma diez; un nivel intermedio o avanzado suma cinco; quien solo curioseó sin agendar no suma. Estos valores son la calibración inicial y se ajustan con el tiempo.

**Regla R54 — El enrutamiento por puntuación.** Un lead con sesenta o más es caliente y se enruta de inmediato al Asesor y al asistente. Entre treinta y cincuenta y nueve, agenda estándar con recordatorio. Por debajo de treinta, nutrición por correo y retargeting.

**Regla R55 — Agendar es siempre caliente.** Todo lead que completó su contacto y agendó una visita se enruta siempre como caliente, sin importar su puntuación. La puntuación solo sirve para priorizar a quienes no agendaron.

**Regla R56 — La puntuación nunca castiga una bandera clínica.** El enrutamiento nunca reduce la atención de leads con banderas clínicas, embarazo o posparto, cirugía bariátrica, tratamiento con GLP-1 o lesión. La puntuación no se usa para negar seguimiento a nadie.

**Regla R57 — Lo que el sistema debe registrar.** De cada lead se registran, en campos separados, la puntuación total, las señales que sumaron, el club resuelto, la puerta de entrada, las banderas críticas y si la persona agendó.

**Regla R58 — El brief del Asesor.** Cada lead produce un brief para el Asesor que reúne: el perfil de la persona, la logística de su visita, exactamente cinco preguntas de validación, una ruta de visita de cuatro pasos —conectar con su objetivo, recorrido enfocado, resolver su bloqueador y cerrar con el siguiente paso—, una propuesta con un elemento principal y uno complementario, exactamente tres prioridades de cierre, las notas y banderas, y un guion de cierre breve. El brief se escribe en primera persona, del Asesor hacia la persona.

**Regla R59 — El Asesor no vuelve a preguntar.** El propósito del brief es que el Asesor convierta la visita sin re-preguntar ninguna de las respuestas que la persona ya dio. Su métrica es exactamente esa.

**Regla R60 — Las banderas del brief.** El brief marca, con su nivel de atención, situaciones como familia con FitKidz, persona principiante, regreso de una pausa, embarazo, posparto, cirugía bariátrica, tratamiento con GLP-1, una condición médica específica, una nota sobre alberca, o la preferencia de entrenar sola —que advierte no presionar la venta de un paquete de clases grupales—.

### 6.7 Voz, contenido y el asistente conversacional

**Regla R61 — La voz de la marca.** El sitio habla como un entrenador adulto: directo, cercano, sin promesas vacías ni paternalismo. Usa la segunda persona, frases cortas, párrafos que no rebasan las sesenta palabras y verbos concretos. No usa signos de exclamación, anglicismos ni promesas en kilos, tallas, plazos o métricas clínicas inventadas.

**Regla R62 — Lo que el texto nunca dice.** El texto visible nunca usa la palabra «plan» —el entregable es la experiencia ideal—; nunca muestra los códigos internos de las preguntas; nunca recurre a clichés de gimnasio ni a jerga técnica —hipertrofia, intervalos de máxima intensidad por su sigla, consumo máximo de oxígeno, esfuerzo percibido, repetición máxima, déficit calórico, propiocepción y semejantes— sino a lenguaje accesible.

**Regla R63 — La verificación del contenido generado.** Todo texto generado pasa por una verificación que bloquea: la fuga de códigos de pregunta, la aparición de la palabra «plan» o de vocabulario prohibido, el exceso médico —diagnósticos, garantías clínicas, prescripción de intensidad, promesas de pérdida de peso o afirmaciones sobre calorías—, las violaciones de longitud, la falta de un formato requerido, y cualquier afirmación sobre clubes, horarios, amenidades, precios o competidores que no provenga del sistema. Cuando un campo falla, se reemplaza solo ese campo por una alternativa segura; nunca se deja al usuario sin su resultado.

**Regla R64 — El asistente conversacional.** El asistente es un widget flotante presente en todas las páginas. Responde preguntas operativas —horarios, precios, clases, membresías—, agenda visitas y conoce el contexto de la página. Funciona por texto de forma predeterminada, con opción de voz, y tiene una dirección de respaldo para cuando no hay scripts.

**Regla R65 — Lo que el asistente no hace.** El asistente no ejecuta cancelaciones, congelamientos, cambios de plan ni reembolsos: capta la solicitud, hace una verificación básica de identidad, abre un caso y ofrece un Asesor humano. No responde preguntas profundas de salud: remite al hub correspondiente con firma médica. No promete resultados. Para todo lo que está fuera de su alcance, transfiere a una persona; nunca inventa una respuesta.

**Regla R66 — La mensajería instantánea es solo para recordatorios.** El canal de mensajería se usa exclusivamente para los recordatorios de visita, con plantilla y previo consentimiento; no para ventas ni para cambios de cuenta.

### 6.8 Estados del sistema, persistencia y casos límite

**Regla R67 — Las fases de la experiencia.** La experiencia transita por fases bien definidas: bienvenida, cuestionario, carga, resultado, captura de contacto, agenda y entrega del brief, además de un estado de error. Cada transición es predecible.

**Regla R68 — La carga y sus tiempos.** Durante la generación del resultado se muestra de inmediato una estructura de carga; a los pocos segundos, un mensaje que indica que se está armando la experiencia; y si tarda demasiado, una opción de reintento. Si el reintento falla, se entra en el comportamiento de respaldo.

**Regla R69 — La degradación con gracia.** Ante un error del servidor o una demora excesiva, el sistema muestra un respaldo seguro y ofrece reintentar. Si el texto generado llega mal formado, la página se arma con sus secciones fijas y deja vacíos los campos que no pudieron generarse, sin pantallas en blanco.

**Regla R70 — El único caso sin componentes.** Si los tres componentes quedaran apagados, el sistema lanza un error controlado y muestra una tarjeta de transferencia a un Asesor humano, conservando las respuestas y adjuntándolas al lead. Es el único caso en que el resultado no muestra ningún componente de entrenamiento.

**Regla R71 — La caducidad del resultado.** Si un resultado se generó hace más de sesenta días, se muestra un aviso no bloqueante que pregunta si el objetivo sigue siendo el mismo. Si la persona lo ignora, el resultado permanece sin cambios.

### 6.9 Privacidad y accesibilidad transversales

**Regla R72 — El marco de privacidad.** El tratamiento de datos se rige por la legislación mexicana de protección de datos personales en posesión de los particulares. Se capturan datos en cuatro momentos —el cuestionario, el registro de entrega del resultado, la agenda de la visita y la conversación con el asistente— y en cada uno la persona ve un aviso de privacidad y otorga su consentimiento antes de cualquier almacenamiento.

**Regla R73 — El consentimiento reforzado para datos de salud.** Los datos de salud —peso, estatura, condiciones médicas y medicamentos— son sensibles y requieren un consentimiento específico adicional. Ese consentimiento se otorga mediante una casilla obligatoria en la pantalla de condiciones médicas, antes de responder esa pregunta y las del camino de peso. El consentimiento para la mensajería de recordatorios se capta por separado, con aceptación explícita.

**Regla R74 — Los datos de contacto, acotados a su fin.** El apellido, el celular y el correo se usan únicamente para coordinar la visita guiada y no se comparten con terceros. Se transfieren al sistema comercial bajo la misma base de consentimiento que las respuestas del cuestionario.

**Regla R75 — La accesibilidad como piso, no como añadido.** Todas las páginas cumplen el estándar de accesibilidad de nivel doble A en su versión vigente, verificado de forma automática como condición bloqueante. El contraste de texto cumple las proporciones mínimas; el rojo de marca se reserva para fondos de acción y no para texto pequeño, que usa una variante de mayor contraste. Ninguna información depende solo del color: el estado seleccionado se marca con borde y palomita, y la sección de seguridad combina ícono y texto. Los blancos táctiles respetan los tamaños mínimos en móvil. Se respeta la preferencia de movimiento reducido. La operación por teclado es completa, con foco visible. El idioma se declara como español de México, los cambios dinámicos se anuncian a los lectores de pantalla y cada pregunta se estructura como un grupo con su leyenda.

---

## 7. Síntesis

La navegación de Sports World es, en el fondo, una sola idea ejecutada con disciplina: **conducir a cada persona, por el camino más corto y más honesto, desde su intención hasta una visita agendada con todo el contexto necesario para cerrarla.** El cuestionario es la columna que sostiene esa idea; los menús dinámicos son la forma en que el sitio se adapta a cada persona sin perderla; y las reglas de negocio descritas aquí son las que garantizan que, en cada paso, el sistema haga lo correcto: personalizar sin inventar, recomendar sin poner en riesgo, capturar sin presionar y entregar al equipo comercial un lead que ya se siente comprendido.
