# Anexo de contenido y prompts — Experiencia Ideal

> Fuente única de la voz de marca, de las prohibiciones del prompt del modelo, de la verificación (lint) de salida y de los textos de respaldo (fallbacks) de todo el copy generado por IA. El UX Spec define las zonas de generación, sus claves y sus límites de palabras (§5.7); este anexo define cómo debe sonar, qué no puede decir y qué se usa cuando la salida no cumple.

## 1. Voz de marca y tono

Esta guía gobierna todo el copy generado por el modelo en el flujo Experiencia Ideal: el hook de la página de resultado, el argumento principal, la línea de intención, los conectores de clase, el argumento de infraestructura y los campos del brief del Asesor (`validation_questions`, `visit_route`, `proposal`, `closing_priorities`, `closing_script`). El copy de preguntas, las opciones y los ejemplos de abajo son español de México (es-MX).

### 1.1 La voz en una frase

Sports World habla como un entrenador adulto: directo, cercano, sin promesas vacías ni paternalismo. Trata a quien escucha como una persona capaz que toma una decisión importante, no como un cliente que necesita ser convencido con superlativos.

### 1.2 Principios rectores

Verdad sobre motivación inflada: decimos lo que la Experiencia Ideal logra realmente, no lo que el usuario quiere escuchar. Segunda persona (tú), nunca usted ni «nosotros, los expertos». Frases cortas; un párrafo nunca pasa de 60 palabras. Verbos de acción concretos: construir, sostener, mejorar, recuperar, consolidar, ajustar, mantener. Cero exclamaciones, cero anglicismos, cero promesas en kilos, tallas, plazos o métricas clínicas inventadas.

### 1.3 Terminología interna permitida

La palabra «plan» está prohibida en el copy de cara al usuario porque el entregable siempre se llama «Experiencia Ideal». Sigue permitida en claves internas de schema (p. ej. `plan_argument`) y en logs de ingeniería. La misma distinción aplica a los términos técnicos de entrenamiento: pueden vivir en `anexo-clinico.md`, en identificadores de backend y en notas internas de QA, pero no en copy visible para usuarios o asesores.

### 1.4 Vocabulario aprobado

construir · sostener · consolidar · mantener · recuperar · ajustar · combinar · clarificar · ritmo · constancia · consistencia · decisión · momento · forma · figura · fuerza · aguante · base · repetición · semana · sesión · objetivo · resultado · trabajo · entrenamiento · crecimiento muscular · ritmo conversacional · intervalos al máximo · intervalos cortos al máximo · técnica controlada · fuerza sostenida en posturas · conciencia corporal · saltos explosivos · cuerpo completo · centro del cuerpo · patrones de movimiento · pérdida de grasa.

### 1.5 Vocabulario prohibido

- **Clichés de gimnasio:** «transformación», «mejor versión de ti», «deja de poner excusas», «el primer paso es lo más difícil», «atrévete».
- **Anglicismos:** «journey», «lifestyle», «mindset», «wellness path», «workout», «core», «lean», «fit».
- **Paternalismo:** «no te preocupes», «es normal sentir…», «todos empezamos así», «tú puedes».
- **Cursilería:** «tu sueño te espera», «atrévete a ser tú», «el primer paso de un gran viaje».
- **Clínica falsa:** «quema X calorías», «pierde X kilos», «tonifica en X semanas».
- **Jerga técnica:** hipertrofia · Zone 2 · HIIT · VO2max · plyometría · RPE · 1RM · FCmax · déficit calórico · concéntrica · propiocepción · isométrica · sobrecarga progresiva. En su lugar: «crecimiento muscular», «ritmo conversacional», «intervalos al máximo», «técnica controlada», «fuerza sostenida en posturas», «conciencia corporal».

### 1.6 Cinco reglas de redacción

1. Presente y futuro próximo; evita el condicional (podrías, lograrías) salvo en YMYL por cumplimiento.
2. Cita la decisión del usuario, no su deseo: «Elegiste entrenar cinco días» antes que «Quieres bajar de peso».
3. Cada afirmación con un ancla verificable en lo que respondió en el cuestionario.
4. Nunca cierres con signo de exclamación; si la frase la necesita para funcionar, está mal escrita.
5. Entre dos versiones, la más corta.

## 2. Prohibiciones del prompt del modelo (verbatim)

PROHIBIDO ABSOLUTO: (a) la palabra «plan» en el copy DE CARA AL USUARIO — al entregable nos referimos SIEMPRE como «Experiencia Ideal» (o «tu Experiencia Ideal»); «plan» solo es válido en identificadores internos de código/schema (p. ej. plan_argument) y nunca en texto visible; (b) cualquier código tipo Q1, Q2, Q3, Q4 — son nombres internos del cuestionario y jamás aparecen en el copy, refiérete a cada cosa por su nombre humano; (c) JERGA TÉCNICA: hipertrofia, Zone 2, HIIT, VO2max, plyometría, RPE, 1RM, FCmax, déficit calórico, concéntrica, propiocepción, isométrica, sobrecarga progresiva. Usa lenguaje accesible: «crecimiento muscular», «ritmo conversacional», «intervalos al máximo», «técnica controlada», «fuerza sostenida en posturas», «conciencia corporal».

RESTRICCIONES YMYL: si el lead tiene condición médica, embarazo/posparto o tratamiento médico, NO diagnostiques, NO recomiendes intensidades específicas, NO sugieras que el lead «puede hacer todo» — siempre menciona que el asesor valida con criterio clínico en la visita guiada.

## 3. Plantillas de copy aprobadas

Ejemplos aprobados por zona de generación. El modelo puede variar dentro de cada plantilla siempre que respete tono, longitud y vocabulario; las tablas marcan lo válido frente a lo inválido.

### 3.1 Hooks por Q3 (ejemplos aprobados)

| Selección de Q3 | Ejemplo de hook aprobado |
| --- | --- |
| Desconectado/a del trabajo y la rutina | El día se queda en la puerta. Lo que entrenas aquí es tuyo, y el cuerpo lo agradece cuando sales. |
| Renovado/a y de buen ánimo | La energía no se finge: se construye con movimiento. Cada sesión cambia cómo llegas al resto de tu día. |
| Confiado/a en que mi cuerpo no me va a fallar | La confianza en tu cuerpo se gana con constancia, calibrada a tu punto de partida. No es fuerza máxima: es base sostenida. |
| Más a gusto conmigo mismo/a | Sentirte mejor contigo no llega de golpe. Se construye en cada sesión sostenida y en cada semana que vuelves. |
| Parte de una comunidad saludable | Entrenar acompañado sostiene la constancia. En el club hay gente en el mismo camino, a tu ritmo, sin competir. |

El hook tiene un máximo de 30 palabras y respeta el tono (calmado, sobrio, adulto) y la estructura (verdad + conexión con la Experiencia Ideal).

### 3.2 Pares antes / después

| Incorrecto | Correcto |
| --- | --- |
| ¡Bienvenida, Sofía! Estamos emocionados de acompañarte en este journey. | Sofía, esta es tu Experiencia Ideal. |
| Tu mejor versión te está esperando. | Lo que buscas tiene un camino claro. Este es el tuyo. |
| ¡Quema hasta 600 calorías por sesión! | Sesión de 45 min que sostiene gasto energético. |
| Esta clase te ayudará a tonificar y sentirte increíble. | Trabaja glúteo, abdomen y pierna en formato grupal. |
| Recuerda: lo importante es solo empezar. | Tu Experiencia Ideal está lista. La decisión es tuya. |
| ¡No te rindas, sigue intentándolo! | Si pausas una semana, tu Experiencia Ideal te espera. La retomas donde estabas. |

### 3.3 Conector personal (≤15 palabras, tarjetas del Bloque 3)

El conector personal es la única zona con libertad de redacción en las tarjetas de clase del Bloque 3. Debe citar literalmente una respuesta del cuestionario; empezar con «Porque mencionaste que…», «Considerando que…», «Para tu caso de…» o «Sabiendo que…»; enganchar con la oración siguiente (la ficha verbatim); y nunca introducir información factual nueva.
- **Válidos:** «Porque mencionaste que buscas mejorar tu estética corporal,»; «Considerando que prefieres entrenar acompañada en grupo,».
- **Inválidos:** «¡Esto es perfecto para ti!»; «Sabemos que las mujeres como tú buscan…»; «Esta experiencia quemará grasa rápidamente».

### 3.4 Línea de intención (≤18 palabras, tarjeta Club Ideal — §5.8)

| Q13 | Q14 | Plantilla de línea de intención |
| --- | --- | --- |
| Solo/Sola, a mi ritmo | Solo/Sola | Tu espacio para entrenar a tu propio ritmo, lejos del ruido del día. |
| Solo/Sola, a mi ritmo | Con mi amigo/a | Tu Experiencia Ideal es individual; tu amigo/a tiene la suya, en el mismo club. |
| Solo/Sola, a mi ritmo | Con mi pareja / La familia completa | Tu rutina personal en un club donde tu familia también encuentra lo suyo. |
| Solo/Sola, a mi ritmo | Yo y mis hijos | Tu rutina a tu ritmo mientras tus hijos tienen FitKidz en el mismo club. |
| Acompañado/a, en clases o grupo | Solo/Sola | Tu momento, con la opción de clases en grupo cuando lo decidas. |
| Acompañado/a, en clases o grupo | Con mi amigo/a | Entrenar acompañado de tu amigo/a en las clases que escogiste. |
| Acompañado/a, en clases o grupo | Con mi pareja | Clases y rutina con tu pareja, en el mismo horario. |
| Acompañado/a, en clases o grupo | Yo y mis hijos / La familia completa | Tu rutina en grupo mientras tus hijos tienen FitKidz en el mismo club. |
| Me da igual | (cualquiera) | Se omite la línea de intención y se renderiza directamente la lista de características. |

### 3.5 Argumento principal (clave `plan_argument`)

Explica por qué la Experiencia Ideal combinada encaja con el objetivo primario del usuario. 1 a 2 oraciones, ≤45 palabras; nombra los bloques visibles con sus etiquetas de cara al usuario (Rutina por grupos musculares / Caminadora o bicicleta / las clases por nombre), no «ejercicios» abstractos; cierra afirmando la personalización — «No es una experiencia genérica: es la combinación que tus respuestas pidieron»; sin superlativos. La clave de schema se mantiene `plan_argument` por compatibilidad; el copy visible nunca usa la palabra «plan».

### 3.6 Argumento de infraestructura

Expone qué hace a Sports World estructuralmente apto para entregar la Experiencia Ideal. 1 a 2 oraciones, ≤55 palabras; cita al menos un diferenciador verificable (49 clubes en 13 estados, la clasificación propia de clases por objetivo, la consistencia de infraestructura entre clubes); nombra el club específico del usuario y cuáles clases recomendadas están programadas ahí en sus horarios disponibles; nunca compara con competidores nombrados ni afirma lo no verificable.

## 4. Campos del brief del Asesor

El brief es interno, pero es parte de la experiencia de producto: claro, corto y accionable. Puede mencionar banderas operativas aprobadas (principiante, pausa, embarazo, posparto, GLP-1, bariátrica, condición cardiovascular, lesión, FitKidz, viene de otro gimnasio), pero no diagnostica, no prescribe intensidad ni introduce afirmaciones clínicas más allá de las banderas validadas.

| Campo | Regla | Ejemplo aprobado |
| --- | --- | --- |
| `validation_questions` | Exactamente 5 preguntas, ≤18 palabras c/u. Pregunta lo que el asesor debe confirmar, no lo que el usuario ya respondió. | «¿Qué horario real puede sostener tres semanas seguidas?» |
| `visit_route` | Exactamente 4 objetos; cada uno con título corto y descripción ≤18 palabras. | `{ "title": "Conectar con su objetivo", "description": "Retoma su motivación y valida qué espera sentir al salir." }` |
| `proposal.main` | ≤35 palabras. La dirección principal de membresía o experiencia, sin venta agresiva. | «Iniciar con visita guiada, validación de nivel y combinación de fuerza, cardio y clases disponibles en su club.» |
| `proposal.complement` | ≤30 palabras. Un complemento o alternativa, ligado a un bloqueador declarado. | «Si viene con hijos, mostrar FitKidz antes de cerrar la agenda de entrenamiento.» |
| `closing_priorities` | Exactamente 3 viñetas, ≤12 palabras c/u. Prioriza acción, bloqueador y siguiente paso. | «Confirmar disponibilidad real de horarios.» |
| `closing_script` | ≤60 palabras, primera persona del asesor al lead. Sin presión, sin urgencia falsa. | «Te voy a mostrar cómo esta experiencia encaja con tu horario y tu objetivo. Si al final hace sentido para ti, dejamos agendada tu primera sesión con el siguiente paso claro.» |

## 5. Verificación (lint) de la salida del modelo

Toda cadena devuelta por el modelo debe pasar la verificación antes de renderizarse o entrar como nota al CRM. Corre después de validar el schema JSON y del saneamiento de códigos Qn.

### 5.1 Verificaciones bloqueantes

- **Fuga de código Qn:** rechazar cualquier patrón `Q` visible (`Q1`, `Q12b`, `(Q4)`, «según Q17»).
- **Palabra visible prohibida:** rechazar «plan» en campos de cara al usuario (`hook`, `plan_argument`, `intent_line`, `infrastructure_argument`, `class_1_connector`, `class_2_connector`). La clave de schema `plan_argument` está exenta porque no es visible.
- **Vocabulario prohibido:** rechazar todos los términos de §1.5, incluyendo variantes de acento y mayúsculas.
- **Exceso médico:** rechazar diagnóstico, garantías clínicas, intensidad prescriptiva, promesas de pérdida de peso, conteo de calorías y todo lo que implique autorización médica.
- **Violación de longitud:** rechazar campos que excedan los límites de palabras de §5.7 del UX Spec.
- **Forma incorrecta:** rechazar JSON malformado, conteos de arreglo erróneos, claves faltantes o estructura de objeto incorrecta.
- **Hechos no soportados:** rechazar afirmaciones sobre clubes, horarios, amenidades, precios, resultados médicos o competidores que no vengan del contexto provisto al prompt.

### 5.2 Comportamiento de respaldo (fallback)

Si un campo falla la verificación, se reemplaza **solo ese campo** por su fallback y se registra el motivo. Si la forma JSON falla, se renderizan todos los campos con fallback. Nunca se bloquea al usuario de ver la página de resultado, salvo que el resolver no tenga una ruta de recomendación segura.

| Campo | Fallback |
| --- | --- |
| `hook` | «Tu Experiencia Ideal está lista. La decisión es tuya.» |
| `plan_argument` | «Combinamos tus bloques recomendados con tu objetivo, tu nivel y tus horarios. No es una experiencia genérica: responde a lo que compartiste.» |
| `intent_line` | Omitir el campo y renderizar la lista de características. |
| `infrastructure_argument` | «Sports World combina clubes, clases e infraestructura real para sostener tu experiencia en el club que elegiste.» |
| `class_1_connector` / `class_2_connector` | Omitir el conector y mostrar el texto validado de la ficha. |
| `validation_questions` | Usar las cinco preguntas deterministas de §6. |
| `visit_route` | Usar la ruta de cuatro pasos determinista de §6. |
| `proposal` | Usar main + complement deterministas según Q4, Q13 y Q14. |
| `closing_priorities` | Usar las tres banderas de mayor severidad más la confirmación de horario. |
| `closing_script` | «Te voy a mostrar la experiencia recomendada, validar tus horarios y resolver cualquier duda antes de definir el siguiente paso.» |

## 6. Brief del Asesor — copy determinista de respaldo

Si el modelo falla, el brief del Asesor sigue siendo usable con este copy fijo:

- `validation_questions`: «¿Qué horario real puedes sostener?», «¿Qué parte del club te genera más duda?», «¿Qué experiencia previa quieres evitar repetir?», «¿Qué apoyo necesitas para empezar con seguridad?», «¿Qué siguiente paso te resultaría claro hoy?»
- `visit_route`: «Conectar con objetivo» / «Retomar motivación y prioridad declarada.»; «Mostrar infraestructura clave» / «Recorrer áreas ligadas a sus bloques.»; «Resolver bloqueador» / «Atender logística, nivel, familia o salud.»; «Cerrar siguiente paso» / «Definir visita, sesión o seguimiento concreto.»
- `proposal.main`: «Validar la Experiencia Ideal en visita guiada y confirmar el primer siguiente paso con el asesor.»
- `proposal.complement`: «Ajustar clases, horarios o apoyo familiar según disponibilidad real del club.»
- `closing_priorities`: «Validar horarios sostenibles.», «Resolver principal bloqueador.», «Acordar siguiente paso.»
