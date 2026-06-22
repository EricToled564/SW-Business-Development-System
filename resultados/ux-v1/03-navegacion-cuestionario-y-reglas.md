# Arquitectura de Experiencia — Sports World México
## Navegación, cuestionario, menús dinámicos y reglas de negocio · Versión 1.0

Documento génesis. Define, de forma normativa y autónoma, por qué existe la experiencia ideal, cómo se navega, el papel del cuestionario como única fuente de personalización, la mecánica de los menús dinámicos y cada una de las reglas de negocio que gobiernan la experiencia del usuario, de principio a fin.

---

## 0 · Objetivos

### 0.0 Por qué existe este proyecto

Sports World opera una red física premium —cuarenta y nueve clubes en México— pero su presencia digital no refleja la escala de esa infraestructura. La marca la encuentra quien ya la conoce, y la pierde quien no. Las personas que buscan una solución de acondicionamiento físico que Sports World genuinamente ofrece rara vez la descubren, porque Sports World no aparece en esas búsquedas. El resultado es una fuga sostenida de clientes nuevos en el momento exacto en que están listos para inscribirse.

La experiencia ideal existe para cerrar esa brecha en el punto de decisión. Su propósito es convertir la demanda que sí llega a Sports World en visitas agendadas y cualificadas: tomar a una persona que llega buscando una solución, entender qué quiere realmente, ubicarla en el club correcto con la combinación de entrenamiento correcta, y entregar un brief completo al asesor que cerrará la visita. La experiencia es la superficie de conversión que transforma la visibilidad de búsqueda recuperada en leads agendados.

### 0.1 Los tres bloqueadores de leads

El producto se diseña como respuesta directa a tres formas concretas en que Sports World pierde hoy a un prospecto listo para inscribirse. Cada una es una intención real que Sports World puede satisfacer físicamente, pero que no captura digitalmente.

**Bloqueador 1 — La vertical ignorada (bajar de peso).** Una persona busca "gimnasio para perder peso" —la intención de mayor volumen de la industria del fitness en México— y Sports World aparece en una fracción ínfima de esas búsquedas. La persona se va con un competidor porque, digitalmente, nada le dijo que Sports World podía ayudarla. La experiencia ideal responde tratando "bajar de peso" como un objetivo funcional de primera clase, con su propia rama de cuestionario, su manejo consciente de tratamientos y una recomendación a la medida: quien llega con esa intención recibe un camino concreto y personalizado en lugar de silencio.

**Bloqueador 2 — La demanda desatendida (amenidades y disciplinas).** Una persona busca "yoga cerca de mí" y, aunque Sports World tiene instructores y estudios de yoga premium, queda fuera de los primeros resultados y termina en un estudio boutique. El patrón se repite con entrenamiento funcional, artes marciales y otras disciplinas que Sports World ofrece pero no hace visibles. La experiencia ideal responde cruzando el objetivo declarado de la persona con el catálogo real de clases de cada club, de modo que una disciplina que Sports World sí ofrece se vuelve una parte visible y recomendada de la experiencia ideal, en lugar de una capacidad invisible.

**Bloqueador 3 — El laberinto del clic extra (intención geográfica).** Una persona busca "gimnasio cerca de mí" y, en vez de ser llevada a su club más cercano, aterriza en una página de inicio genérica. Cada clic adicional cuesta retención, y Sports World gana el clic pero pierde la visita por agotamiento. La experiencia ideal responde resolviendo a la persona directamente hacia un club recomendado específico según su ubicación, y encaminándola a un siguiente paso concreto —la visita guiada—, colapsando el laberinto en un único camino personalizado.

### 0.2 Los objetivos del usuario

La experiencia personaliza alrededor de los objetivos de la propia persona. Esos objetivos no son abiertos: están completamente acotados por las opciones de respuesta de dos preguntas del cuestionario. La persona tiene exactamente **cinco objetivos emocionales** posibles y exactamente **seis objetivos funcionales** posibles. Nada de lo que la persona quiere cae fuera de estas once opciones; el cuestionario se acota deliberadamente para que toda recomendación se mapee a un objetivo conocido.

**Los cinco objetivos emocionales** responden a qué quiere *sentir* la persona al salir del club, y fijan el tono de la copia personalizada sin alterar qué club, qué bloques ni qué clases se recomiendan:

1. Desconectarse del trabajo y la rutina —la experiencia se lee como un escape y un reinicio mental—.
2. Sentirse renovada y de buen ánimo —energizante y que levanta el ánimo—.
3. Ser parte de una comunidad saludable —énfasis en clases grupales, espacios compartidos y pertenencia—.
4. Sentir confianza en que su cuerpo no le va a fallar —énfasis en resiliencia y capacidad—.
5. Sentirse más a gusto consigo misma —aceptación personal y bienestar, no validación externa—.

**Los seis objetivos funcionales** responden a qué quiere *lograr* físicamente la persona. La pregunta admite hasta dos selecciones; la primera es el **objetivo principal** y gobierna toda resolución determinista del sistema, y la segunda, si existe, es un **objetivo secundario** que solo diversifica el ranking de clases:

1. Bajar de peso —además, abre la rama de peso del cuestionario y el manejo de contenido sensible a la salud—.
2. Mejorar la estética corporal y la definición muscular.
3. Aumentar masa muscular.
4. Mejorar el desempeño atlético.
5. Mejorar la salud cardiovascular.
6. Recuperarse de una lesión o dolor crónico.

El objetivo principal selecciona de forma determinista el subgrupo de pesas, el subgrupo de cardio, los pesos del ranking de clases grupales, el conjunto de clases ideales que se usa al resolver el club y el arco narrativo de la copia personalizada. Los dos ejes son independientes y complementarios: el emocional dice *por qué* está aquí la persona y el funcional dice *qué* quiere lograr su cuerpo. Juntos acotan todo el espacio de lo que la experiencia debe personalizar.

---

## 1 · Principios de navegación

### 1.1 Experiencia de página única con máquina de estados por fases

La experiencia ideal es una aplicación de página única que progresa a través de una secuencia fija de fases. Durante el flujo que va del cuestionario al brief, la persona nunca navega a otra dirección. Toda la progresión la gobierna una sola variable de estado —la fase— y el renderizador despacha la pantalla correcta según su valor. No hay enrutador, no hay enlaces profundos y no hay historial del botón "atrás" del navegador: el retroceso es explícito y lo manejan botones dentro de cada fase.

Esta decisión es deliberada y garantiza cuatro cosas: que la persona no pueda aterrizar por accidente en el resultado sin haber completado el cuestionario; que no pueda marcar como favorito ni compartir un estado intermedio; que el brief del asesor no pueda alcanzarse sin pasar antes por la captura de contacto y la agenda; y que todos los datos capturados durante la sesión vivan únicamente en memoria.

### 1.2 Las siete fases

La máquina de estados tiene exactamente siete fases, ejecutadas en este orden bajo condiciones normales:

1. **Bienvenida.** Pantalla de introducción con el logotipo de Sports World, una propuesta de valor de una línea y una sola acción primaria ("Comenzar"). No hay más entrada del usuario que el botón de inicio.
2. **Cuestionario.** Se renderiza al iniciar. El motor del cuestionario avanza una pregunta a la vez; cada pregunta es una pantalla autocontenida con su encabezado, su entrada, su texto de ayuda y sus botones de avanzar y retroceder. El orden de las opciones es libre, pero la secuencia de preguntas es lineal, sujeta a la ramificación condicional.
3. **Carga.** Se dispara al enviar la última pregunta. Una animación corre mientras el resolver calcula la recomendación —recuperando los datos de clubes y clases— y la llamada al modelo de lenguaje se completa de forma asíncrona. La persona no puede interactuar durante esta fase.
4. **Resultado.** La página de la experiencia ideal. Es la pantalla más extensa y el entregable principal para el lead. La persona llega aquí una vez que el resolver y el modelo de lenguaje regresan con éxito. El contenido se organiza en dos páginas visualmente separadas.
5. **Captura de contacto.** Se dispara al presionar "Agendar visita guiada". Un formulario obligatorio de tres campos —apellido, celular y correo— bloquea el avance hasta que los tres pasan validación. La persona puede regresar al resultado con una flecha.
6. **Agenda.** Se dispara al enviar datos de contacto válidos. Un calendario expone los días disponibles de las próximas dos semanas, con franjas horarias predefinidas. La persona elige una combinación, confirma y avanza.
7. **Entrega del brief.** Fase terminal. Muestra dos páginas visualmente separadas: la primera es la confirmación de la cita —pensada para que el lead la capture y la recuerde— y la segunda es el brief del asesor —pensado para que el asesor lo lea antes de la visita—. La persona puede reiniciar el cuestionario o volver a la agenda para modificar la cita.

Existe una sola fase auxiliar fuera de la secuencia principal: el **estado de error**, que se dispara si la llamada al modelo de lenguaje falla; muestra un botón de reintento y un enlace para reiniciar, y al reintentar con éxito la persona vuelve al resultado.

Las fases son exclusivas: solo una se renderiza en cualquier momento. La pantalla se desmonta por completo en cada transición; no hay fundidos ni estados superpuestos.

### 1.3 Avance universal, retroceso condicional

El avance es universal: toda fase tiene una acción primaria que lleva a la siguiente. El retroceso es selectivo y sigue reglas precisas. Desde la bienvenida no hay retroceso, por ser el punto de entrada. Desde el cuestionario, "Atrás" regresa a la pregunta anterior; si esa pregunta era condicional y ya no aplica —porque la persona cambió una respuesta que la disparaba—, el motor la salta y aterriza en la anterior aplicable. Desde la carga no hay retroceso, porque no es interrumpible. Desde el resultado no hay retroceso: la persona no puede volver a modificar sus respuestas; el único reinicio es el enlace "Reiniciar cuestionario" al pie del resultado, que descarta todo el estado y regresa a la bienvenida. Desde la captura de contacto, "Volver" regresa al resultado y los datos ya capturados se conservan si la persona avanza de nuevo. Desde la agenda, el retroceso regresa a la captura de contacto. Desde la entrega del brief, el retroceso regresa a la agenda, y "Terminar" cierra la sesión tras una confirmación.

Bloquear el retroceso desde el resultado es intencional. La recomendación se calcula una sola vez, de forma determinista; modificar las respuestas después de ver el resultado obligaría a recalcular —una operación costosa— o a mostrar un resultado obsoleto —algo engañoso—. Además, el contrato mental de la persona es "respondo preguntas y veo mi recomendación"; reabrir las respuestas erosiona la autoridad percibida de esa recomendación.

### 1.4 Sin autenticación, sin persistencia

La experiencia no requiere autenticación. No hay inicio de sesión, no hay creación de cuenta y no hay rastreo del usuario mediante identificadores persistentes. Toda la sesión vive únicamente en la memoria del navegador: no se usan almacenamiento local, de sesión, en base de datos del navegador ni cookies. Ningún píxel de analítica se dispara hasta la fase de captura de contacto, momento en el cual los datos capturados se transmiten al sistema comercial mediante una sola petición segura. Cerrar la pestaña descarta todas las respuestas, los bloques calculados, la copia generada, el brief y la selección de cita; la persona debe empezar de nuevo desde la bienvenida.

Los datos de contacto, una vez enviados, son lo único que persiste más allá de la sesión, y persisten solo del lado del servidor —en el registro del sistema comercial—, nunca en el navegador. Esta decisión es deliberada: el producto es una herramienta de recomendación de un solo disparo con un momento de acción fuerte —agendar la visita—. La persistencia introduciría el riesgo de mostrar recomendaciones obsoletas a quien regresa con preferencias o contexto médico ya cambiados, y exigiría una infraestructura legal de gestión de consentimiento mayor a la que el caso de uso justifica.

---

## 2 · El cuestionario como única fuente de personalización

### 2.1 Rol y propósito

El cuestionario es el único mecanismo por el cual la persona alimenta al motor de personalización. Cada componente posterior —el resolver que elige el club, el selector que elige los subgrupos de entrenamiento, el rankeador que elige las mejores clases grupales, el modelo de lenguaje que escribe la copia personalizada y el generador del brief que escribe la guía del asesor— consume las respuestas del cuestionario como única fuente de verdad sobre la persona.

El cuestionario no es un formulario de marketing: es un instrumento de captación de grado clínico. Cada pregunta tiene un papel específico en el algoritmo de recomendación. Quitar o saltar una pregunta degradaría la recomendación; agregar una pregunta opcional que no alimente el algoritmo diluiría la percepción de que cada pregunta importa.

### 2.2 Taxonomía de preguntas

El cuestionario se compone de tres categorías.

**Las quince preguntas base** se hacen siempre, en el mismo orden, a toda persona: el nombre, que ancla el trato en primera persona; el género, que rige la concordancia gramatical de toda la copia y habilita la pregunta de embarazo; qué quiere sentir al salir, que ancla el tono emocional; los objetivos, hasta dos, que seleccionan los subgrupos de pesas y cardio, los pesos del ranking de clases y el arco narrativo, y que habilitan la rama de peso; el ritmo, que modula los descriptores de intensidad del cardio e influye en el ranking; el modo —piso seco o alberca—, que conmuta entre los catálogos seco y acuático; las franjas horarias y los días, que se capturan para el brief y el modelo de lenguaje pero no filtran el catálogo; el nivel, que filtra las clases candidatas por nivel mínimo; el historial —si viene de otro gimnasio, nunca ha ido, o regresa de una pausa—, que alimenta banderas del brief y habilita la pregunta de duración de la pausa; las condiciones médicas, que filtran el catálogo de clases mediante la matriz de contraindicaciones; el acompañamiento, que conmuta el tercer bloque entre clases grupales y Personal Training; con quién visita el club, que rige el mensaje de FitKidz y, cuando aplica, vuelve a FitKidz una amenidad requerida de la experiencia; cerca de qué busca —casa, trabajo, ambos o sin preferencia—, que ancla la geografía del resolver; y dónde queda, el código postal o la colonia que el resolver usa como entrada geográfica.

**Las seis preguntas condicionales** se hacen solo si una respuesta previa las dispara: la duración de la pausa, cuando la persona indica que regresa después de una pausa; el estado de embarazo o posparto, cuando el género declarado es Mujer, que filtra clases con impacto, trabajo abdominal o posición supina; la presencia de hijos menores de doce años, cuando la persona visita con sus hijos o la familia completa, que rige el mensaje familiar de FitKidz y vuelve a FitKidz una amenidad requerida; y las tres preguntas de la rama de peso —tratamientos activos para bajar de peso, datos físicos actuales y objetivo de cambio—, que se disparan cuando entre los objetivos está "bajar de peso".

**Los tres campos de contacto posteriores al cuestionario** se capturan en una sola pantalla, después de mostrar la recomendación y antes del calendario: apellido, celular y correo. No forman parte del cuestionario porque no influyen en la recomendación; se piden en el momento preciso en que la persona expresa la intención de agendar y, por tanto, tiene una razón para compartir su contacto.

### 2.3 Tipos de entrada y reglas de validación

El motor admite seis tipos de entrada. **Texto libre** de una línea, para el nombre y la colonia, válido con al menos un carácter, con autoenfoque y envío con Enter. **Selección única**, en tarjetas grandes; el autoavance está deshabilitado a propósito —la persona debe tocar "Siguiente"— para evitar avances accidentales en preguntas médicas y mantener un ritmo constante. **Selección múltiple**, en tarjetas tipo casilla; la pregunta de objetivos tiene un límite duro de dos selecciones, impuesto visual y lógicamente. **Días**, una variante compacta de selección múltiple para los días de la semana. **Ubicación**, exclusiva de la pregunta de dónde queda: dos modos —código postal de cinco dígitos o colonia en texto libre de al menos tres caracteres—, de los cuales basta llenar uno. **Datos físicos**, exclusiva de esa pregunta: tres entradas numéricas —peso en kilogramos, estatura en centímetros y cintura en centímetros— válidas dentro de rangos plausibles —peso de treinta a doscientos cincuenta, estatura de cien a doscientos treinta, cintura de cuarenta a doscientos—; los valores fuera de rango muestran un error en línea y bloquean el envío.

Los mensajes de error son siempre específicos y accionables. El cuestionario nunca muestra un genérico "campo requerido": muestra qué está mal y qué hacer. El apellido exige al menos dos letras; el celular, exactamente diez dígitos; el correo, un formato válido.

### 2.4 Las dos preguntas de control

Dos preguntas tienen una influencia desproporcionada porque cambian la *estructura* de la recomendación, no solo sus parámetros: los objetivos y el modo.

Los **objetivos** son la pregunta de control primaria. El primer objetivo seleccionado determina cuál de los seis subgrupos de pesas se elige, cuál de los seis subgrupos de cardio —con su máquina y su perfil de intensidad—, los pesos del ranking de clases, el arco narrativo de la copia, si se abre o no la rama de peso, y la prioridad de contraindicaciones dentro de la matriz. El segundo objetivo, si existe, tiene un papel acotado: actúa como criterio de desempate en el ranking de clases y se menciona en la copia como motivador secundario, pero no cambia el subgrupo de pesas ni el de cardio, que se eligen de forma determinista a partir del objetivo principal.

El **modo** es el conmutador estructural. Determina si la persona recibe el catálogo en seco —pesas y cardio en máquinas— o el catálogo acuático —fuerza en agua y cardio en alberca—. Sus cuatro opciones se resuelven así: "en piso / área seca" entrega exclusivamente el catálogo seco; "en la alberca" entrega exclusivamente el catálogo acuático, con un caso especial para el objetivo de masa muscular que fuerza una recomendación híbrida; "ambas" entrega el catálogo seco con una nota que menciona las opciones acuáticas como complemento; y "lo que mi entrenador recomiende" cede al criterio del resolver, que elige acuático para los objetivos de recuperación de lesión y salud cardiovascular, y seco para el resto, sin informar de la decisión en la copia visible pero dejándola anotada en el brief.

---

## 3 · Menús dinámicos y ramificación condicional

### 3.1 Reglas de ramificación

El motor evalúa la condición de cada pregunta en el momento de renderizarla. Si la condición es falsa, la pregunta se salta por completo y el motor avanza a la siguiente; no es un patrón de "oculto pero enviado": la respuesta saltada queda indefinida y todo el código posterior debe tratarla como tal.

Cuando la persona retrocede y cambia una respuesta previa que ya no dispara una condicional posterior, la respuesta posterior se conserva en el estado pero se ignora al enviar. Por ejemplo: si alguien indica que regresa de una pausa, avanza y responde su duración, y luego retrocede y cambia a que viene de otro gimnasio, la duración se conserva en memoria pero no se transmite al resolver ni aparece en el brief; si más tarde vuelve a indicar que regresa de una pausa, la pregunta de duración se le hace de nuevo con su valor previo preseleccionado.

### 3.2 Conjugación dinámica de la copia por género

La concordancia gramatical del español se respeta en todo el cuestionario y en las pantallas de resultado. El género declarado rige la conjugación de varias opciones y del trato en pantallas posteriores: la forma masculina cuando el género es Hombre, la femenina cuando es Mujer, y la terminación doble **o/a** cuando la persona prefiere no mencionarlo —por ejemplo, "desconectado/a", "renovado/a", "confiado/a", "solo/a", "acompañado/a"—. La terminación doble mantiene la copia inclusiva sin asumir un género, y es visible para la persona en las opciones renderizadas.

Más allá del cuestionario, el resultado y el brief usan el *primer nombre* —la primera palabra del nombre capturado— para el saludo y el anclaje emocional, y el *nombre completo* —nombre más apellido— para el encabezado formal del brief.

### 3.3 Límite dinámico de dos objetivos

La pregunta de objetivos admite hasta dos selecciones y la interfaz impone el límite de forma reactiva. Sin selecciones, todas las opciones están habilitadas y "Siguiente" deshabilitado, con la ayuda "selecciona al menos uno". Con una selección, todas siguen habilitadas, "Siguiente" se habilita y la opción elegida se marca como "objetivo principal". Con dos selecciones, las opciones no elegidas se deshabilitan y la ayuda invita a tocar una seleccionada para cambiarla. Tocar una tercera no hace nada; tocar una ya elegida la deselecciona y libera capacidad. El orden de selección se conserva: el primer toque es el objetivo principal y el segundo el secundario; la persona puede intercambiarlos deseleccionando y reseleccionando.

### 3.4 El resolver dinámico: ubicación más experiencia ideal

El resolver de club es determinista y calcula su resultado sin más latencia visible que la recuperación de datos. Toma la ubicación de la persona más una descripción calculada de su **experiencia ideal**, y aplica un árbol de decisión por radio cuya prioridad es entregar la experiencia ideal por encima de minimizar la distancia.

La experiencia ideal tiene dos partes calculadas. La primera son las **clases ideales**: el conjunto de clases alineadas con los objetivos de la persona, calculado antes de elegir el club; un club "cumple" el lado de clases cuando ofrece al menos una de ellas, y cuando la persona entrena sola esta condición se satisface de forma vacía. La segunda son las **amenidades de la experiencia**, a lo sumo dos, cada una requerida solo bajo su disparador: la **alberca**, cuando el modo es "en la alberca", y **FitKidz**, cuando la persona visita con su familia y tiene hijos menores de doce años. Estas son las únicas amenidades que participan en la selección del club; el cuestionario no pregunta por ninguna otra, así que ninguna otra puede ser un requisito. Es crucial entender que la alberca y FitKidz no son filtros ciegos que descarten clubes en silencio: forman parte de la prueba de "cumple la experiencia" dentro del árbol de radio, diseñada para hacer explícito el compromiso a la persona —ofrecer el club que cumple, explicar la distancia y aun así mostrar los clubes cercanos que no cumplen como alternativas—.

---

## 4 · Reglas de negocio

Esta sección enumera cada regla que afecta la recomendación, la copia visible, el brief del asesor o la máquina de estados. Cada regla se describe con su disparador, su mecanismo y su efecto observable.

### 4.1 Resolución de club — árbol de radio que prioriza la experiencia

Al enviar la última pregunta, la carga comienza con el mensaje "buscando tu club ideal". El principio rector es que **la experiencia ideal gana sobre la cercanía**: el sistema no elige sin más el club más próximo, sino el que entrega la experiencia ideal de la persona, y usa la distancia solo para desempatar o cuando ningún club cercano cumple.

Un club **cumple la experiencia** cuando satisface ambos lados: el de clases —ofrece al menos una de las clases ideales, condición vacía si la persona entrena sola— y el de amenidades —tiene todas las amenidades requeridas, que son a lo sumo la alberca y FitKidz, cada una solo bajo su disparador—.

El proceso es el siguiente. Primero se computa la experiencia ideal —las clases ideales y las amenidades requeridas—. Luego se geocodifica la ubicación a coordenadas mediante una búsqueda en cuatro niveles —código postal directo, sinónimo de colonia, colonia aproximada y, como último recurso, el centroide—. Después se puntúan todos los clubes por distancia desde ese ancla y se etiqueta cada uno según si cumple o no la experiencia. Finalmente se aplica el árbol de decisión con un radio base de **diez kilómetros**:

- **Dos o más clubes dentro de diez kilómetros cumplen la experiencia:** decide la distancia; se elige el más cercano de los que cumplen.
- **Exactamente un club dentro de diez kilómetros cumple:** se ofrece ese club, aun si no es el más cercano en términos absolutos; la persona puede cambiarlo, pero cambiar a uno que no cumple muestra una nota de que no incluye todas las clases ideales.
- **Ningún club dentro de diez kilómetros cumple:** se expande el radio —veinte, treinta kilómetros, sin tope— hasta encontrar uno que cumpla; se ofrece primero ese club más lejano y se señala la distancia, y además se anexan los tres clubes más cercanos dentro del radio original como alternativas, cada una marcada como que no incluye las clases o amenidades ideales.
- **Ningún club en ningún lugar cumple** —por ejemplo, una amenidad requerida no existe en ningún club alcanzable, o la clase ideal no existe en ninguna parte—: se recurre al club más cercano en términos absolutos y se señala un encaje parcial.

La copia de la tarjeta de club y una nota ámbar opcional se adaptan al modo resuelto. Cuando varios cumplen, la tarjeta dice que el club tiene las clases ideales y es el más cercano de los que las ofrecen, sin nota. Cuando solo uno cumple, dice que es el club cerca de la persona que reúne las clases ideales, sin nota. Cuando hubo que expandir el radio, dice que es el club que sí reúne las clases ideales, con una nota ámbar: "Está un poco más lejos que otras opciones, pero es el más cercano que ofrece las clases ideales para tu objetivo. Abajo te dejamos también los clubes más cercanos a ti." Cuando ninguno cumple, dice que es el club más cercano a la ubicación, con la nota: "Ningún club cercano reúne todas las clases ideales para tu objetivo. Tu Asesor te ayuda a armar la mejor experiencia posible aquí en la visita guiada."

Cada club del panel "Ver otros clubes cerca de ti" lleva una marca de si cumple la experiencia; los que no cumplen muestran una subnota ámbar: "No incluye todas las clases ideales para tu objetivo." Así el compromiso queda explícito al momento de elegir.

Cuando la persona elige un club alternativo, el sistema recalcula los tres bloques de entrenamiento contra el catálogo del club elegido, vuelve a correr el rankeador de clases y reevalúa si el club elegido cumple la experiencia: si sigue cumpliendo, la copia dice que lo eligió y reúne las clases ideales; si no cumple, aparece una nota ámbar de que no incluye todas las clases ideales pero que puede entrenar ahí y el asesor le ayudará a ajustar la experiencia en la visita. El cambio siempre se permite. El modelo de lenguaje no se vuelve a llamar al cambiar de club, porque su copia no depende del club más allá del nombre y la dirección. Con independencia del modo, si el club resuelto supera los cincuenta kilómetros se marca como demasiado lejos y una nota invita a reconsiderar las alternativas.

### 4.2 Selección del bloque de pesas

Completado el cuestionario, el selector toma el objetivo principal y el modo y elige uno de doce subgrupos —seis en seco y seis acuáticos—. En seco: bajar de peso da "Fuerza integral con pesas"; estética da "Rutina por grupos musculares"; masa muscular da "Desarrollo muscular progresivo"; desempeño da "Potencia y velocidad"; salud cardiovascular da "Fuerza de mantenimiento"; recuperación de lesión da "Fuerza guiada en máquinas". En agua: bajar de peso da "Trote acuático por intervalos"; estética da "Fuerza acuática con equipo"; masa muscular da "Fuerza combinada: agua y gimnasio"; desempeño da "Potencia y velocidad acuática"; salud da "Nado continuo moderado"; lesión da "Movilidad y recuperación acuática".

El nombre del subgrupo se muestra como título de la tarjeta de pesas, acompañado de un texto explicativo en español llano que nunca contiene jerga técnica. La tarjeta nunca lista equipos. El caso de masa muscular en modo acuático es el único subgrupo de pesas que exige de forma explícita una sesión complementaria en seco: su texto aclara que el agua no permite cargar suficiente peso para hacer crecer músculo de forma significativa, que si el objetivo principal es ganar músculo la rutina combina alberca con días en piso, y que el entrenador define el balance; el brief lo señala como una bandera de sesiones híbridas a validar.

### 4.3 Selección del bloque de cardio

De estructura idéntica al de pesas —seis subgrupos en seco, seis acuáticos, elegidos por el objetivo principal y el modo—. En seco: bajar de peso da "Cardio continuo moderado" en caminadora, bicicleta o elíptica, de treinta y cinco a cuarenta y cinco minutos; estética da "Cardio moderado con intervalos", de veinticinco a treinta y cinco minutos; masa muscular da "Cardio ligero de mantenimiento" en caminadora suave o bicicleta, de quince a veinticinco minutos; desempeño da "Intervalos intensos 4×4" en bicicleta, remo o caminadora, de treinta a cuarenta minutos; salud da "Base aeróbica 80/20", de treinta y cinco a cuarenta y cinco minutos; lesión da "Recuperación activa de bajo impacto" en bicicleta reclinada, elíptica o caminadora muy suave, de quince a veinticinco minutos. Los subgrupos acuáticos se determinan por el mismo eje de objetivo, con modalidades y duraciones de alberca; en el caso de masa muscular en modo acuático, la tarjeta incluye una línea de alternativa acuática de sesión corta para no comprometer el trabajo de fuerza.

La tarjeta muestra el nombre del subgrupo como título, la máquina con la duración y el momento respecto a las pesas como subtítulo, y la razón como cuerpo. La persona nunca ve metas numéricas crudas como porcentajes de frecuencia cardiaca o repeticiones máximas.

### 4.4 Selección de clases grupales

Esta regla corre cuando el cuestionario está completo y la persona quiere clases grupales —es decir, eligió entrenar acompañada o le da igual—. Si eligió entrenar sola, la regla no corre y el tercer bloque se convierte en Personal Training.

El rankeador de clases corre dos veces con propósitos distintos. La **primera vez**, durante la resolución del club, computa el conjunto de clases que la persona idealmente recibiría a lo largo de todo el catálogo, para sesgar la selección del club hacia uno que de hecho las ofrezca; es la verificación de que las clases ideales están disponibles antes de fijar el club. La **segunda vez**, ya elegido el club, computa las dos mejores clases reales de su catálogo.

El árbol de la selección final tiene cinco filtros secuenciales y un paso de puntuación. Primero, la **intersección con el catálogo**: solo sobreviven las clases que el club realmente ofrece; es la compuerta dura de disponibilidad. Segundo, el **filtro de modo**: en alberca solo clases acuáticas, en piso solo clases en seco, y en ambas o a criterio del entrenador, todas. Tercero, el **filtro de nivel**: solo clases cuyos niveles permitidos incluyen el nivel de la persona, de modo que un principiante nunca ve una clase restringida a niveles superiores. Cuarto, el **filtro de contraindicaciones**: se descartan las clases contraindicadas bajo cualquier condición activa; es el filtro duro de seguridad, y las clases removidas nunca aparecen ni se nombran. Quinto, la **puntuación contra los objetivos y el descarte de las no aptas**: por cada objetivo seleccionado, una clase calificada como de las mejores para ese objetivo suma tres, una clase apta suma uno, y una clase no apta veta la clase por completo; una sola calificación de "no apta" contra cualquier objetivo elegido descarta la clase, sin importar qué tan bien puntúe para el otro, garantizando que nunca se muestre una clase que choque activamente con una meta declarada; se conserva la clase solo si no está vetada y su puntuación es mayor a cero.

Existe un paso adicional de puntuación, aplicable solo cuando la persona está en tratamiento con análogos de GLP-1: el ajuste de prioridad de fuerza descrito más adelante, que añade puntos a las clases de fuerza y resta a las de resistencia de alta intensidad para que las dos clases mostradas reflejen la guía clínica de preservar masa muscular. Es el único ajuste de puntuación fuera de la matriz de objetivos, y cuando la persona no está en ese tratamiento es inocuo.

Por último, las clases sobrevivientes se ordenan por puntuación descendente y, en empate, alfabéticamente; las dos primeras son las recomendadas y las siguientes tres alimentan el panel de alternativas. La tarjeta del tercer bloque muestra el resultado: con dos clases, ambas con su nombre, un conector escrito por el modelo de lenguaje y una descripción, más los accesos a "Cambiar mis clases" y "Ver todas las del club"; con una sola clase, esa clase y el selector de alternativas; con ninguna, un mensaje que reconoce que no se encontraron clases que encajen con el objetivo y el nivel en ese club e invita a considerar Personal Training o explorar otros clubes, con su botón correspondiente. Como la verificación previa sesga la elección del club hacia uno con clases alineadas, el caso vacío es raro en la práctica; cuando ocurre, encaminar a Personal Training es el desenlace correcto y seguro.

### 4.5 Regla del modo acuático

Cuando el modo es "en la alberca", el catálogo de pesas pasa de seco a acuático, el de cardio pasa de máquinas a alberca, y el rankeador conserva solo clases acuáticas del catálogo del club. El modo **no actúa como un filtro ciego que descarte clubes en silencio**: la alberca participa en la selección del club como una amenidad requerida que sesga al resolver hacia un club con alberca —expandiendo el radio si hace falta—, mientras los clubes sin alberca permanecen siempre visibles como alternativas marcadas. El modo determina, además, el tipo de entrenamiento para el club que finalmente se resuelva. El selector verifica si el club resuelto tiene alberca: si la tiene, entrega los bloques acuáticos del objetivo principal; si no la tiene, entrega los bloques en seco y añade una nota —"Este club no tiene alberca. Revisa otros clubes cerca de ti — varios sí ofrecen entrenamiento acuático."—. Cuando el club resuelto tiene alberca, la persona ve una recomendación plenamente acuática y el brief incluye la marca de preferencia de alberca; el manejo especial de masa muscular en modo acuático aplica solo cuando el club tiene alberca.

### 4.6 Regla del modo individual

Cuando la persona elige entrenar sola, el tercer bloque de clases grupales se reemplaza por una tarjeta de Personal Training y el rankeador se omite por completo. La tarjeta se muestra en tono oscuro, titulada "Personal Training", con la copia "Decidiste entrenar a tu ritmo, sin clases grupales. Personal Training te asigna un entrenador dedicado en tus horarios." y su botón. El brief recibe la bandera de que el lead busca formato individual y de no presionar la venta de un paquete de clases grupales. Cuando la persona responde que le da igual, el motor opta por clases grupales y el brief anota que el acompañamiento está abierto y conviene explorar ambos formatos en la visita.

### 4.7 Regla de disponibilidad de FitKidz

Cuando la persona visita con sus hijos o con la familia completa y tiene al menos un hijo menor de doce años, el disparador rige el *mensaje* de FitKidz en el resultado y, como se estableció en el resolver, vuelve a FitKidz una amenidad requerida de la experiencia que sesga la selección del club hacia uno que la ofrezca —expandiendo el radio si hace falta—. **No actúa como un filtro ciego que descarte clubes en silencio**: los clubes sin FitKidz permanecen siempre visibles como alternativas marcadas y la persona puede elegir uno. La tarjeta de beneficio familiar se renderiza según si el club resuelto ofrece FitKidz, en tres estados. En el primero, el club ofrece FitKidz y tiene clases infantiles documentadas: la tarjeta muestra el conteo de actividades y hasta seis etiquetas con sus nombres. En el segundo, el club ofrece FitKidz pero su catálogo infantil está vacío o incompleto: la tarjeta muestra una copia genérica —"Este club ofrece FitKidz. Tu Asesor te compartirá el detalle de actividades y horarios disponibles para tus hijos en tu visita guiada."— sin etiquetas. En el tercero, el club no ofrece FitKidz: la tarjeta muestra un respaldo en gris que remite a otros clubes cercanos que sí lo tienen. Cuando el disparador no se cumple, la tarjeta de beneficio familiar no se renderiza y la tarjeta de club ocupa todo el ancho de la sección.

### 4.8 Filtro duro de contraindicaciones

Cuando la persona declara una o más condiciones o tratamientos activos —a través de las condiciones médicas, el embarazo o posparto, o los tratamientos de peso—, entra en operación la matriz de contraindicaciones: una tabla determinista de cincuenta y una clases por cinco condiciones. La matriz marca una clase como contraindicada para una condición según indicadores dominantes de movimiento. La condición de **lesión** filtra clases con alto impacto, carga pliométrica o superficies inestables, y remueve diecisiete clases. La **cardiovascular** filtra clases con intervalos sostenidos de alta intensidad, posición supina o patrones de fuerza propensos a la maniobra de Valsalva, y remueve catorce. El **embarazo** filtra clases con impacto, patadas, posición supina después del primer trimestre y trabajo abdominal intenso, y remueve veintiuna. El **posparto** filtra esas mismas más la fuerza de alta carga hasta una evaluación del piso pélvico, y remueve veintiuna. La **bariátrica** filtra clases de alto impacto y carga elevada durante el primer año posoperatorio, y remueve dieciséis.

Las clases filtradas no aparecen en el tercer bloque ni en el selector de alternativas. La copia visible nunca menciona qué clases se filtraron ni por qué: hacerlo alarmaría a la persona con un encuadre clínico en una superficie de marketing o la invitaría a desafiar el filtro, lo que anularía su propósito. El brief sí captura las condiciones activas y anota que las clases contraindicadas están prefiltradas.

La matriz se construye a partir de fuentes profesionales de medicina del deporte, ginecología, cirugía bariátrica y cardiología, y cada par clase-condición se etiqueta internamente según su base epistémica —citado directamente de la fuente, derivado de la categoría dominante de movimiento, o inferido desde primeros principios fisiológicos cuando ninguna fuente aborda la clase directamente—. La matriz no se expone a la persona en ninguna forma; se usa internamente para filtrar y se incluye como metadato del brief para la validación clínica posterior por un profesional de medicina del deporte.

### 4.9 Regla de priorización por GLP-1

Cuando la persona declara un tratamiento con análogos de GLP-1, el sistema **no** filtra clases: la guía clínica es priorizar el trabajo de fuerza para preservar masa muscular durante el estado catabólico que inducen estos fármacos, no restringir modalidades. El efecto es doble. En la copia, la sección de seguridad usa un texto específico —si es GLP-1 solo, "Durante tu tratamiento con GLP-1, priorizamos clases de fuerza para preservar tu masa muscular mientras bajas grasa. Tu Asesor confirma el detalle clínico en la visita guiada."; si es GLP-1 con otra condición, "Tu experiencia incluye prioridad en clases de fuerza para preservar tu masa muscular durante tu tratamiento. Las clases con impacto o restricciones específicas ya están filtradas. Tu Asesor confirma el detalle en la visita guiada."—. En el ranking, se aplica un ajuste —más dos puntos a las clases orientadas a fuerza y menos uno a las de resistencia de alta intensidad— de modo que las dos clases mostradas reflejen la prioridad de fuerza. Este ajuste es el único de su tipo y constituye la fuente única de sus valores. El brief lleva la bandera informativa de tratamiento con GLP-1 y de priorizar fuerza para preservar masa muscular.

### 4.10 Regla de revisión por asesor ante respuesta abierta

Cuando la persona marca una condición no especificada —"otra, la comento en el club"— o un tratamiento de peso no especificado —"otro tratamiento médico"—, el sistema no puede aplicar un filtro determinista porque desconoce la condición concreta. En su lugar produce un mensaje suave de revisión por asesor y deja la incógnita en el brief. La copia de la sección de seguridad cambia a: "Mencionaste una condición o tratamiento médico. Tu experiencia ideal ya excluye las clases contraindicadas por las condiciones declaradas, y tu Asesor ajusta los protocolos de pesas y cardio individual en la visita guiada según tu criterio clínico." El brief lleva una bandera de advertencia para capturar el detalle y validar contraindicaciones específicas antes de recomendar.

### 4.11 Compuerta de captura de contacto

Al presionar "Agendar visita guiada" en el resultado, la fase pasa a la captura de contacto: un formulario de tres campos —apellido, número de celular y correo electrónico— cuyo botón de continuar permanece deshabilitado hasta que los tres pasan validación. El apellido exige al menos dos letras; el celular, exactamente diez dígitos; el correo, un formato válido. Los errores se muestran debajo del campo correspondiente al perder el foco, no en cada pulsación, para evitar mostrarlos de forma prematura. Al enviar con éxito, los datos de contacto se guardan en el estado del resultado y la fase avanza a la agenda; esos datos se renderizan en la sección de logística y contacto del brief, y el nombre completo en su encabezado. La pantalla muestra una divulgación de privacidad —"Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros."—, que es el primer momento de consentimiento de la persona.

### 4.12 Copia contextual de la sección de seguridad

La sección de seguridad —"Antes de comenzar"— se renderiza en toda página de resultado, en su segunda página, y su cuerpo se adapta al contexto médico evaluando cuatro casos mutuamente excluyentes en orden: GLP-1 con otra condición; GLP-1 solo; otra condición médica sin GLP-1 —"Con base en lo que compartiste, esta recomendación prioriza opciones controladas y evita actividades contraindicadas. Las clases con impacto o restricciones específicas ya están filtradas. Informa al personal del club sobre cualquier indicación de tu profesional de salud."—; y, por defecto, sin condición declarada —"Con base en lo que compartiste, esta recomendación se ajusta a tu nivel y disponibilidad. Si tienes alguna indicación médica antes de comenzar, coméntala con tu Asesor en la visita guiada."—. La sección se presenta con fondo cálido, un ícono de atención y una línea de aviso fija debajo: "Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica." Su prominencia visual se calibra para notarse sin alarmar.

### 4.13 Regla de doble página: vistas de cliente y de asesor

Tanto el resultado como la entrega del brief se renderizan en dos páginas visualmente separadas. El contenido se divide con un separador punteado; en vista digital el separador es visible, y en impresión se oculta y se fuerza un salto de página, produciendo dos hojas.

En el resultado del cliente, la primera página lleva la barra superior, el encabezado personalizado, la sección de dos columnas con el club y el beneficio familiar, el panel de otros clubes cuando se expande, las cuatro tarjetas de resumen y la fila de conversión con "Agendar visita guiada"; la segunda página lleva el rótulo "Tu combinación recomendada", las tres tarjetas de bloque, los paneles de cambiar y ver todas las clases cuando se expanden, la sección de seguridad, el argumento de infraestructura, la conversión de cierre con el reinicio y el pie legal. El orden de la primera página pone el club primero a propósito: tras responar el cuestionario, la primera pregunta cognitiva de la persona es "¿dónde voy a entrenar?".

En el brief del asesor, la primera página lleva el banner de confirmación para el lead, el encabezado con nombre completo, nivel, etiquetas y fecha, el perfil del lead y la logística y contacto; la segunda página lleva qué validar, la ruta recomendada de la visita, la propuesta, las prioridades de cierre, las notas y banderas, el guion de cierre y el registro del asesor.

### 4.14 Regla de una sola llamada al modelo de lenguaje

Se hace exactamente una llamada al modelo, que devuelve un único objeto con la copia del cliente y el contenido del brief. La llamada se dispara una sola vez por sesión y su respuesta se cachea y se reutiliza en el resultado y en el brief. La copia del cliente incluye el gancho —hasta treinta palabras—, el argumento de la combinación —hasta cuarenta y cinco—, la línea de intención —hasta dieciocho—, el argumento de infraestructura —hasta cincuenta y cinco— y los conectores de cada clase —hasta quince cada uno, distintos entre sí y omitidos cuando no hay clases grupales—. El brief incluye exactamente cinco preguntas de validación —hasta dieciocho palabras cada una—, una ruta de visita de exactamente cuatro pasos con título y descripción —hasta dieciocho—, una propuesta con elemento principal —hasta treinta y cinco— y complemento —hasta treinta—, exactamente tres prioridades de cierre —hasta doce cada una— y un guion de cierre —hasta sesenta, en primera persona del asesor hacia el lead—.

Antes de componer la instrucción, el sistema computa un conjunto de banderas a partir de las respuestas —si hay contexto médico, embarazo, posparto, tratamiento con GLP-1 o bariátrica, si es familia con hijos, si entrena sola, si es principiante, su historial de gimnasio y su preferencia de modo—. Cuando hay contexto médico, la instrucción incluye un bloque que enumera las condiciones declaradas y recuerda que las clases contraindicadas ya están prefiltradas y que el asesor ajusta el protocolo individual con criterio clínico.

Si la llamada falla, el sistema pasa al estado de error con un botón de reintento. Si el reintento tiene éxito, la persona continúa con normalidad. Si los reintentos fallan de forma repetida, la persona aún puede avanzar: el resultado renderiza el contenido determinista —bloques, club, clases, seguridad— y el brief renderiza solo sus secciones fijas, omitiendo las generadas por el modelo sin mostrar error.

### 4.15 Restricciones YMYL y saneamiento de la salida

Cada llamada al modelo impone tres capas de restricción. La primera es de **vocabulario prohibido**: nunca la palabra "plan" en ninguna forma, nunca los códigos internos de las preguntas, nunca jerga técnica —como hipertrofia, intervalos de máxima intensidad por su sigla, consumo máximo de oxígeno, esfuerzo percibido, repetición máxima o déficit calórico— y nunca clichés de marketing ni promesas de resultados. La segunda es de **restricciones de contenido sensible a la salud**: cuando la persona tiene cualquier condición, embarazo, posparto o tratamiento activo, el modelo no diagnostica, no recomienda intensidades específicas, no sugiere que la persona "puede hacer todo" y siempre afirma que el asesor valida con criterio clínico en la visita. La tercera es de **saneamiento de la salida**: aun con las restricciones de instrucción, el modelo a veces filtra códigos de pregunta en la prosa, así que un saneador recursivo recorre toda la respuesta, elimina cualquier código residual y las palabras puente que lo rodean, normaliza los espacios dobles y quita la puntuación colgante, operando sobre textos, listas y objetos anidados para que ningún campo escape a la limpieza.

La instrucción incluye además un vocabulario aprobado de verbos y sustantivos accesibles —construir, sostener, consolidar, mantener, recuperar, ajustar, ritmo, constancia, fuerza, aguante, base, experiencia, rutina, combinación, crecimiento muscular, técnica controlada, conciencia corporal, entre otros—. El efecto es que la persona recibe una copia cálida, profesional y libre de terminología clínica que confundiría a un lector no especialista, y el asesor recibe un contenido preciso, sin relleno y que difiere de forma explícita al criterio clínico cuando hay contexto médico.

---

## 5 · Integración de datos y fuentes de verdad

La experiencia es tan exacta como los datos que la sostienen. La recomendación cruza el perfil de la persona con dos cuerpos de datos operativos —la red de clubes y el catálogo de clases— y escribe el lead capturado en el sistema comercial. El sistema nunca es dueño de los datos operativos: la información de clubes, de clases y los registros de leads viven en los sistemas de registro de Sports World; la experiencia lee de ellos y escribe en ellos, sin mantener una copia maestra paralela que pueda desincronizarse de la realidad.

### 5.1 Categorías de datos

Hay tres categorías. La de **lead y contacto** es la que el sistema produce: el nombre completo, el celular, el correo, el perfil completo derivado del cuestionario —objetivos, nivel, modo, disponibilidad, banderas de contexto médico—, el club resuelto, la combinación de entrenamiento recomendada, el brief generado y la cita agendada; fluye hacia afuera de la experiencia, hacia el sistema comercial, como un nuevo lead cualificado. La de **datos de club** es la red de cuarenta y nueve clubes: nombre comercial, dirección, coordenadas, las amenidades que ofrece —en particular si tiene alberca y si tiene FitKidz, las dos que participan en la experiencia—, el catálogo infantil donde aplique, el estado operativo y los datos de contacto del club. La de **datos de clase** es el catálogo: la lista maestra de disciplinas y, por club, qué clases ofrece, el nivel que exige cada una y el horario en que se imparte; la disponibilidad de clase —si una clase aún se imparte, a qué horas y en qué clubes— es el dato más volátil del sistema.

### 5.2 Tiempo real frente a periódico

No todos los datos necesitan la misma frescura. Forzar todo a tiempo real añadiría costo y fragilidad sin beneficio; dejar que los datos volátiles se vuelvan obsoletos produciría recomendaciones que mandan al lead a un club por una clase que ya no existe.

Deben ser en **tiempo real**: la escritura del lead, que al confirmar la visita debe registrarse en el sistema comercial de inmediato, como una sola escritura en el momento de la captura —es la única escritura obligatoria en tiempo real del sistema, porque una escritura demorada arriesga perder el lead o dejar al asesor sin brief—; el estado operativo del club, porque recomendar un club cerrado es una falla dura visible para el lead, de modo que el resolver no debe ofrecer un club que no esté operando; y la disponibilidad y el horario de las clases en el momento en que corre el rankeador, porque una recomendación construida sobre un horario obsoleto manda al lead a una clase cancelada o reprogramada, la falla de datos obsoletos más dañina, pues se manifiesta como una promesa rota durante la visita.

Pueden ser **periódicos**: la base del directorio de clubes —nombres, direcciones, coordenadas y las marcas de amenidad—, que cambia rara vez; el catálogo infantil de FitKidz por club, que cambia con poca frecuencia y que, donde está incompleto, ya degrada con gracia a un mensaje genérico; y la lista maestra de disciplinas con el nivel que cada una exige, que es estable, porque lo que cambia a menudo es dónde y cuándo se imparte cada clase, y esa parte volátil ya es la porción de tiempo real.

### 5.3 Implicaciones para el flujo de recomendación

El resolver y el rankeador operan sobre una instantánea consistente de datos de clubes y clases, ensamblada en el momento en que la persona completa el cuestionario. Las porciones de tiempo real deben reflejar el estado en vivo de ese momento; las periódicas pueden venir de la sincronización más reciente. En concreto: el árbol de resolución de club debe excluir los clubes que no estén operando, con estado operativo en vivo; la intersección con el catálogo del rankeador debe reflejar la disponibilidad en vivo de las clases del club resuelto, de modo que una clase cancelada o ya no ofrecida en el club no aparezca como ideal. Conviene precisar que este filtro en vivo es sobre el estado operativo de la clase —cancelada, descontinuada, no programada actualmente en el club—, **no** sobre si el horario de la clase coincide con la disponibilidad declarada por la persona: las franjas y los días se capturan para el brief y nunca filtran el catálogo; la conciliación de horario contra la disponibilidad del lead ocurre con el asesor durante la visita. Finalmente, la escritura del lead debe completarse en tiempo real antes de mostrar la pantalla de confirmación, para que el brief esté disponible en el instante en que se agenda la visita.

### 5.4 Dependencias abiertas

Los sistemas de registro precisos, sus métodos de acceso y sus contratos de datos son propiedad de Sports World y no se definen aquí. Para volver operativas las porciones en tiempo real hace falta que el equipo técnico de Sports World provea el sistema comercial y el contrato de escritura para crear un lead cualificado —qué campos, en qué formato, a qué destino—, el sistema de registro del directorio de clubes y cómo expone el estado operativo en vivo, y el sistema de registro de la programación de clases y cómo expone su disponibilidad y horario en vivo. Hasta que esos contratos se definan, la experiencia opera contra una instantánea sincronizada. La arquitectura se diseña para que reemplazar la instantánea por lecturas en vivo requiera cambiar solo la capa de datos, no la lógica de recomendación: el resolver, el selector de bloques y el rankeador consumen la misma forma de datos sin importar si llegó en vivo o por sincronización periódica.

---

## 6 · Síntesis

La experiencia ideal es una sola idea ejecutada con disciplina: tomar a una persona que llega buscando una solución, entenderla a través de un cuestionario de grado clínico, ubicarla en el club que de verdad le entrega su experiencia ideal, armarle una combinación de entrenamiento segura y a su medida, y entregar al asesor un brief que le permita cerrar la visita sin volver a preguntar nada. La navegación por fases asegura que nadie llegue al resultado sin haberse dejado conocer; los menús dinámicos —la ramificación condicional, la concordancia de género, el límite de objetivos y el resolver— adaptan el sistema a cada persona sin perderla; y las reglas de negocio garantizan que, en cada paso, el sistema haga lo correcto: personalizar sin inventar, recomendar sin poner en riesgo, capturar sin presionar y convertir una búsqueda en una visita agendada con todo el contexto necesario para cerrarla.
