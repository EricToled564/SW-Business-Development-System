# Anexo de contenido y prompts — Experiencia Ideal (owner: contenido)

> Única copia autoritativa del Brand Voice Guide, de las prohibiciones verbatim del system prompt (incluida la de "plan"), del lint automatizado de salida y de los ejemplos aprobados para todo copy generado por LLM. El UX Spec define las zonas de generación, sus claves JSON y sus límites de palabras; este anexo define cómo debe sonar, qué no puede decir y qué fallback se usa cuando el output no cumple.

## Voz de marca y tono

Esta guía gobierna todo el copy generado por LLM en el flujo Experiencia Ideal: el hook de la página de resultado, el hero-argument, la intent-line, los conectores de clase, el infrastructure-argument y los campos del brief del Asesor (`validation_questions`, `visit_route`, `proposal`, `closing_priorities`, `closing_script`). La referencian las Rules 38 a 43 y el Apéndice H del UX Spec. El copy de preguntas, las opciones y los ejemplos de abajo son español de México (es-MX).

### Alcance y terminología interna permitida

La palabra "plan" está prohibida en el copy de cara al usuario porque el entregable siempre se llama "Experiencia Ideal". Sigue permitida en claves internas de schema como `plan_argument`, en esta documentación al describir el nombre viejo de la clave, y en logs de ingeniería. La misma distinción aplica a los términos técnicos de entrenamiento: pueden aparecer en `anexo-clinico.md`, en identificadores de backend y en notas internas de QA, pero no en copy visible generado para usuarios o asesores, salvo que estén listados explícitamente como bandera interna aprobada.

### La voz de marca en una frase

Sports World habla como un entrenador adulto: directo, cercano, sin promesas vacías ni paternalismo. Trata a quien escucha como una persona capaz que está tomando una decisión importante, no como un cliente que necesita ser convencido con superlativos.

### Principios rectores

Verdad sobre motivación inflada: decimos lo que la Experiencia Ideal logra realmente, no lo que el usuario quiere escuchar. Segunda persona (tú), nunca usted ni "nosotros, los expertos". Frases cortas; un párrafo nunca pasa de 60 palabras. Verbos de acción concretos: construir, sostener, mejorar, recuperar, consolidar, ajustar, mantener. Cero exclamaciones, cero anglicismos, cero promesas en kilos, tallas, plazos o métricas clínicas inventadas.

### Vocabulario aprobado

construir · sostener · consolidar · mantener · recuperar · ajustar · combinar · clarificar · ritmo · constancia · consistencia · decisión · momento · forma · figura · fuerza · aguante · base · repetición · semana · sesión · objetivo · resultado · trabajo · entrenamiento · crecimiento muscular · ritmo conversacional · intervalos al máximo · intervalos cortos al máximo · técnica controlada · fuerza sostenida en posturas · conciencia corporal · saltos explosivos · cuerpo completo · centro del cuerpo · patrones de movimiento · pérdida de grasa.

### Vocabulario prohibido

Clichés de gimnasio: "show up", "aparecer", "transformación", "mejor versión de ti", "deja de poner excusas", "el primer paso es lo más difícil", "atrévete". Anglicismos: "journey", "lifestyle", "fitness journey", "mindset", "wellness path", "workout", "core", "lean", "fit". Paternalismo: "no te preocupes", "es normal sentir...", "todos empezamos así", "tú puedes". Cursilería: "tu sueño te espera", "atrévete a ser tú", "el primer paso de un gran viaje". Clínica falsa: "quema X calorías", "pierde X kilos", "tonifica en X semanas". Jerga técnica prohibida en copy generado: hipertrofia · Zone 2 · Zone 1-2 · HIIT · VO2max · VO₂max · plyometría · pliométrica · RPE · 1RM · FCmax · déficit calórico · canibalizar (el músculo) · sustrato · concéntrica · control motor · rate of force · propiocepción · isométrica · sobrecarga progresiva · modalidades aeróbicas. En su lugar usar lenguaje accesible: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".

### Cinco reglas de redacción

1. Presente y futuro próximo; evita el condicional (podrías, lograrías) salvo en YMYL por compliance. 2. Cita la decisión del usuario, no su deseo: "Elegiste entrenar cinco días" antes que "Quieres bajar de peso". 3. Cada afirmación con un ancla verificable en lo que dijo en el cuestionario. 4. Nunca cierres con signo de exclamación; si la frase necesita una para funcionar, está mal escrita. 5. Entre dos versiones, la más corta.

## Prohibiciones del system-prompt del LLM (verbatim)

PROHIBIDO ABSOLUTO: (a) la palabra "plan" en el copy DE CARA AL USUARIO — al entregable nos referimos SIEMPRE como "Experiencia Ideal" (o "tu Experiencia Ideal"); "plan" solo es válido en identificadores internos de código/schema (p. ej. plan_argument) y nunca en texto visible; (b) cualquier código tipo Q1, Q2, Q3, Q4 — son nombres internos del cuestionario y jamás aparecen en el copy, refiérete a cada cosa por su nombre humano; (c) JERGA TÉCNICA: hipertrofia, Zone 2, HIIT, VO2max, plyometría, pliométrica, RPE, 1RM, FCmax, déficit calórico, canibalizar músculo, sustrato, concéntrica, control motor, rate of force, propiocepción, isométrica, sobrecarga progresiva, modalidades aeróbicas. Usa lenguaje accesible: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".

RESTRICCIONES YMYL: si el lead tiene condición médica, embarazo/posparto, o tratamiento médico, NO diagnostiques, NO recomiendes intensidades específicas, NO sugieras que el lead "puede hacer todo" — siempre menciona que el asesor valida con criterio clínico en la visita guiada.

## Plantillas de copy aprobadas

Ejemplos aprobados y reglas por zona de generación. El LLM puede variar dentro de cada plantilla siempre que respete tono, longitud y vocabulario; las tablas marcan lo válido frente a lo inválido.

### Hooks por Q3 (ejemplos few-shot aprobados)

| Selección de Q3 | Ejemplo de hook aprobado |
| --- | --- |
| Desconectado/a del trabajo y la rutina | El día se queda en la puerta. Lo que entrenas aquí es tuyo, y el cuerpo lo agradece cuando sales. |
| Renovado/a y de buen ánimo | La energía no se finge: se construye con movimiento. Cada sesión cambia cómo llegas al resto de tu día. |
| Confiado/a en que mi cuerpo no me va a fallar | La confianza en tu cuerpo se gana con constancia, calibrada a tu punto de partida. No es fuerza máxima: es base sostenida. |
| Más a gusto conmigo mismo/a | Sentirte mejor contigo no llega de golpe. Se construye en cada sesión sostenida y en cada semana que vuelves. |
| Parte de una comunidad saludable | Entrenar acompañado sostiene la constancia. En el club hay gente en el mismo camino, a tu ritmo, sin competir. |

Se permiten variaciones del LLM si respetan el tono (calmado, sobrio, adulto), la longitud (30 palabras o menos), la estructura (verdad + conexión con la Experiencia Ideal) y las reglas de vocabulario de arriba.

### Pares antes / después

| Incorrecto | Correcto |
| --- | --- |
| ¡Bienvenida, Sofía! Estamos emocionados de acompañarte en este journey. | Sofía, esta es tu Experiencia Ideal. |
| Tu mejor versión te está esperando. | Lo que buscas tiene un camino claro. Este es el tuyo. |
| ¡Quema hasta 600 calorías por sesión! | Sesión de 45 min que sostiene gasto energético. |
| Esta clase te ayudará a tonificar y sentirte increíble. | Trabaja glúteo, abdomen y pierna en formato grupal. |
| Recuerda: lo importante es solo empezar. | Tu Experiencia Ideal está lista. La decisión es tuya. |
| ¡No te rindas, sigue intentándolo! | Si pausas una semana, tu Experiencia Ideal te espera. La retomas donde estabas. |

### Reglas del conector personal (≤15 palabras, tarjetas de Bloque 3)

El `conector_personal` es la única zona donde el LLM tiene libertad de redacción en las tarjetas de clase del Bloque 3. Debe citar literalmente una de las respuestas del cuestionario del usuario; empezar con "Porque mencionaste que...", "Considerando que...", "Para tu caso de..." o "Sabiendo que..."; engancharse sintácticamente con la siguiente oración (la ficha verbatim); y nunca introducir información factual nueva. Válidos: "Porque mencionaste que buscas mejorar tu estética corporal,"; "Considerando que prefieres entrenar acompañada en grupo,"; "Para tu objetivo de ganar fuerza con un ritmo moderado,". Inválidos: "¡Esto es perfecto para ti!"; "Sabemos que las mujeres como tú buscan..."; "Este plan quemará grasa rápidamente".

### Reglas de la intent-line (≤18 palabras, tarjeta Club Ideal, Rule 42)

| Q13 | Q14 | Plantilla de intent-line |
| --- | --- | --- |
| Solo/Sola, a mi ritmo | Solo/Sola | Tu espacio para entrenar a tu propio ritmo, lejos del ruido del día. |
| Solo/Sola, a mi ritmo | Con mi amigo/a | Tu Experiencia Ideal es individual; tu amigo/a tiene la suya, en el mismo club. |
| Solo/Sola, a mi ritmo | Con mi pareja / La familia completa | Tu rutina personal en un club donde tu familia también encuentra lo suyo. |
| Solo/Sola, a mi ritmo | Yo y mis hijos | Tu rutina a tu ritmo mientras tus hijos tienen FitKidz en el mismo club. |
| Acompañado/a, en clases o grupo | Solo/Sola | Tu momento sola, con la opción de clases en grupo cuando lo decidas. |
| Acompañado/a, en clases o grupo | Con mi amigo/a | Entrenar acompañada de tu amigo/a en las clases que escogiste. |
| Acompañado/a, en clases o grupo | Con mi pareja | Clases y rutina con tu pareja, en el mismo horario. |
| Acompañado/a, en clases o grupo | Yo y mis hijos / La familia completa | Tu rutina en grupo mientras tus hijos tienen FitKidz en el mismo club. |
| Me da igual | (cualquiera) | El LLM omite la intent-line y renderiza directamente la lista de características. |

### Reglas del hero-argument (clave de schema `plan_argument`)

El hero-argument explica por qué la Experiencia Ideal combinada encaja con el objetivo primario del usuario. Es de 1 a 2 oraciones, 45 palabras o menos; nombra los bloques visibles de forma explícita usando sus etiquetas de cara al usuario (Rutina por grupos musculares / Caminadora o bicicleta / las clases por nombre), no "ejercicios" abstractos; cierra afirmando la personalización — "No es una experiencia genérica: es la combinación que tus respuestas pidieron" (o una variante aprobada); y no usa superlativos (el mejor, la única forma, lo más efectivo). La clave de schema sigue siendo `plan_argument` por compatibilidad; el copy visible nunca usa la palabra "plan".

### Reglas del infrastructure-argument

El infrastructure-argument expone qué hace a Sports World estructuralmente apto para entregar la Experiencia Ideal. Es de 1 a 2 oraciones, 55 palabras o menos; cita al menos un diferenciador verificable (49 clubes en 13 estados, la clasificación propia de clases por objetivo, la consistencia de infraestructura entre todos los clubes); nombra el club específico del usuario y referencia cuáles de las clases recomendadas están programadas ahí en sus horarios disponibles; nunca compara directamente con competidores nombrados; y nunca afirma lo que no se puede verificar.

## Campos del brief del Asesor generados por LLM

El brief del Asesor es interno, pero sigue siendo parte de la experiencia de producto. Debe ser claro, corto y accionable. Puede mencionar banderas operativas aprobadas (principiante, pausa, embarazo, posparto, GLP-1, bariátrica, condición cardiovascular, lesión, FitKidz, viene de otro gimnasio), pero no debe diagnosticar, prescribir intensidad ni introducir afirmaciones clínicas más allá de las banderas validadas.

| Campo | Regla | Ejemplo aprobado |
| --- | --- | --- |
| `validation_questions` | Exactamente 5 preguntas, cada una de 18 palabras o menos. Pregunta lo que el asesor debe confirmar, no lo que el usuario ya respondió. | "¿Qué horario real puede sostener tres semanas seguidas?" |
| `visit_route` | Exactamente 4 objetos. Cada uno con un título corto y una descripción de 18 palabras o menos. | `{ "title": "Conectar con su objetivo", "description": "Retoma su motivación y valida qué espera sentir al salir." }` |
| `proposal.main` | 35 palabras o menos. Plantea la dirección principal de membresía o experiencia sin venta agresiva. | "Iniciar con visita guiada, validación de nivel y combinación de fuerza, cardio y clases disponibles en su club." |
| `proposal.complement` | 30 palabras o menos. Da un complemento o alternativa, ligado a un bloqueador declarado. | "Si viene con hijos, mostrar FitKidz antes de cerrar la agenda de entrenamiento." |
| `closing_priorities` | Exactamente 3 viñetas, 12 palabras o menos cada una. Prioriza acción, bloqueador y siguiente paso. | "Confirmar disponibilidad real de horarios." |
| `closing_script` | 60 palabras o menos, primera persona del asesor al lead. Sin presión, sin urgencia falsa. | "Te voy a mostrar cómo esta experiencia encaja con tu horario y tu objetivo. Si al final hace sentido para ti, dejamos agendada tu primera sesión con el siguiente paso claro." |

## Lint automatizado de salida del LLM

Todas las cadenas devueltas por el LLM deben pasar el lint antes de renderizarse o entrar como notas al CRM. El lint corre después de la validación del schema JSON y del saneamiento recursivo de códigos Qn.

### Verificaciones bloqueantes

- **Fuga de código Qn:** rechazar cualquier patrón de código `Q` visible como `Q1`, `Q12b`, `(Q4)`, `según Q17`.
- **Palabra visible prohibida:** rechazar la palabra "plan" en campos de cara al usuario (`hook`, `plan_argument`, `intent_line`, `infrastructure_argument`, `class_1_connector`, `class_2_connector`). La clave de schema `plan_argument` está exenta porque no es visible.
- **Vocabulario prohibido:** rechazar todos los términos prohibidos listados arriba, incluyendo variantes de acento y mayúsculas donde sea práctico.
- **Exceso médico:** rechazar diagnóstico, garantías clínicas, intensidad prescriptiva, promesas de pérdida de peso, afirmaciones de calorías y enunciados que impliquen autorización médica.
- **Violación de longitud:** rechazar campos que excedan los límites de palabras del Apéndice H del UX Spec.
- **Forma requerida ausente:** rechazar JSON malformado, conteos de arreglo incorrectos, claves faltantes o estructura de objeto incorrecta.
- **Hechos no soportados:** rechazar afirmaciones factuales generadas sobre clubes, horarios, amenidades, precios, resultados médicos o competidores, salvo que esos hechos vengan del contexto de backend/catálogo provisto al prompt.

### Comportamiento de fallback

Si un campo falla el lint, reemplazar solo ese campo por su fallback aprobado y registrar el motivo de la falla. Si la forma JSON requerida falla, renderizar todos los campos del LLM con fallbacks. Nunca bloquear al usuario de ver la página de resultado hardcodeada, salvo que el propio resolver no-LLM no tenga una ruta de recomendación segura.

| Campo | Fallback |
| --- | --- |
| `hook` | "Tu Experiencia Ideal está lista. La decisión es tuya." |
| `plan_argument` | "Combinamos tus bloques recomendados con tu objetivo, tu nivel y tus horarios. No es una experiencia genérica: responde a lo que compartiste." |
| `intent_line` | Omitir el campo y renderizar directamente la lista de características. |
| `infrastructure_argument` | "Sports World combina clubes, clases e infraestructura real para sostener tu experiencia en el club que elegiste." |
| `class_1_connector` / `class_2_connector` | Omitir el conector y mostrar el texto validado de la ficha. |
| `validation_questions` | Usar las cinco preguntas de validación hardcodeadas del fallback del Apéndice G. |
| `visit_route` | Usar la ruta de cuatro pasos hardcodeada del fallback del Apéndice G. |
| `proposal` | Usar main + complement hardcodeados según Q4, Q13 y Q14. |
| `closing_priorities` | Usar las tres banderas de mayor severidad más la confirmación de horario. |
| `closing_script` | "Te voy a mostrar la experiencia recomendada, validar tus horarios y resolver cualquier duda antes de definir el siguiente paso." |

## Fallbacks deterministas del brief del Asesor (Apéndice G)

Si el LLM falla, el brief del Asesor sigue siendo usable con copy determinista:

- `validation_questions`: "¿Qué horario real puedes sostener?", "¿Qué parte del club te genera más duda?", "¿Qué experiencia previa quieres evitar repetir?", "¿Qué apoyo necesitas para empezar con seguridad?", "¿Qué siguiente paso te resultaría claro hoy?"
- `visit_route`: "Conectar con objetivo" / "Retomar motivación y prioridad declarada."; "Mostrar infraestructura clave" / "Recorrer áreas ligadas a sus bloques."; "Resolver bloqueador" / "Atender logística, nivel, familia o salud."; "Cerrar siguiente paso" / "Definir visita, sesión o seguimiento concreto."
- `proposal.main`: "Validar la Experiencia Ideal en visita guiada y confirmar el primer siguiente paso con el asesor."
- `proposal.complement`: "Ajustar clases, horarios o apoyo familiar según disponibilidad real del club."
- `closing_priorities`: "Validar horarios sostenibles.", "Resolver principal bloqueador.", "Acordar siguiente paso."
