# v6 Authoritative Inventory — extracted verbatim from sw_experiencia_ideal_demo_v6_FINAL.jsx

Source: resultados/v6_source/sw_experiencia_ideal_demo_v6_FINAL.jsx (1840 lines). All strings below are copied from the demo (the single source of truth per Addendum §0.4).

## 1. Questionnaire (getQuestions, lines 408-540)

| Q | Type | Label (verbatim) | Options / notes |
|---|---|---|---|
| Q1 | text | Antes de empezar, ¿cómo te llamas? | placeholder "Tu nombre completo" |
| Q2 | single | Género | Hombre · Mujer · Prefiero no mencionarlo |
| Q3 | single | ¿Qué quieres sentir al salir del club? | Desconectado/a del trabajo y la rutina · Renovado/a y de buen ánimo · Parte de una comunidad saludable · Confiado/a en que mi cuerpo no me va a fallar · Más a gusto conmigo mismo/a (gender-concordant) |
| Q4 | multi max2 | ¿Qué buscas? | **6 goals**: Bajar de peso · Mejorar mi estética corporal y definición muscular · Aumentar masa muscular · Mejorar mi desempeño atlético · Mejorar mi salud cardiovascular · Recuperarme de una lesión o dolor crónico |
| Q5 | single | ¿Qué ritmo va contigo? | **Suave/controlado · Moderado y constante · Intenso, que me rete** (ascending) |
| Q6 | single | ¿Dónde prefieres entrenar? | En piso / área seca · En la alberca · Ambas · Lo que mi entrenador recomiende |
| Q7 | multi | ¿En qué horario prefieres entrenar? | Temprano (5:00–8:00) · Media mañana (8:00–11:00) · Mediodía (11:00–14:00) · Primera tarde (14:00–17:00) · Tarde (17:00–20:00) · Noche (20:00–22:00) |
| Q8 | multi chips | ¿Qué días prefieres entrenar? | L · M · X · J · V · S · D |
| Q9 | single | ¿Cuál es tu nivel de entrenamiento? | Principiante · Intermedio · Avanzado |
| Q10 | single | ¿Vienes de otro gimnasio? | Sí, vengo de otro gimnasio · Nunca he ido a un gimnasio · Regreso después de una pausa |
| Q11 | single (cond Q10=pausa) | ¿Qué tan larga fue la pausa? | Menos de 3 meses · Entre 3 y 12 meses · Más de un año |
| Q12 | multi | ¿Tienes alguna condición médica? | helper "Solo condiciones médicas. Embarazo no es una condición." Options: Ninguna · Lesión o dolor articular/muscular · Condición cardiovascular o de presión · Otra, la comento en el club  (**Embarazo REMOVED from Q12**) |
| Q12b | single (cond Q2=Mujer) | ¿Estás embarazada o en posparto reciente? | Sí, embarazada · Sí, posparto reciente (últimos 6 meses) · No |
| Q13 | single | ¿Prefieres entrenar solo o acompañado? | Solo/Sola, a mi ritmo · Acompañado/a, en clases o grupo · Me da igual (gender-concordant) |
| Q14 | single | ¿Con quién nos visitas en el club? | Solo/Sola, es mi momento · Con mi amigo/a · Con mi pareja · Yo y mis hijos · La familia completa |
| Q14b | single (cond Q14=hijos/familia) | ¿Uno o más de tus hijos tiene menos de 12 años? | Sí · No |
| Q15 | single | ¿Buscas el gimnasio cerca de tu casa o de tu trabajo? | Cerca de mi casa · Cerca de mi trabajo · Ambos · No me importa |
| Q16 | location | ¿Dónde queda? | helper "Llena uno: código postal o colonia." |
| Q17 | multi (cond Q4=Bajar de peso) | ¿Estás tomando algún tratamiento para bajar de peso? | GLP-1 (Ozempic, Wegovy, Mounjaro) · Cirugía bariátrica · Acompañamiento nutricional con especialista · Otro tratamiento médico para peso · Ninguno |
| Q18 | physical (cond Q4=Bajar de peso) | Tus datos físicos actuales | peso · altura · edad |
| Q19 | single (cond Q4=Bajar de peso) | ¿Cuál es tu objetivo de cambio? | 1 a 3 kilos · 3 a 6 kilos · 6 a 10 kilos · 10 a 15 kilos · Más de 15 kilos · Sin un número específico |

## 2. Block 1 (pesas) subgroup names — Q4_TO_BLOCK_1 (verbatim)
- Bajar de peso → **Cuerpo completo con peso moderado**
- Mejorar mi estética corporal y definición muscular → **Definición muscular por zonas**
- Aumentar masa muscular → **Crecimiento muscular con carga creciente**
- Mejorar mi desempeño atlético → **Fuerza explosiva y velocidad**
- Mejorar mi salud cardiovascular → **Mantenimiento de fuerza general**
- Recuperarme de una lesión o dolor crónico → **Pesas guiadas con énfasis en técnica controlada**

## 3. Block 2 (cardio seco) — Q4_TO_BLOCK_2 (machine/duration/intensity/when/why captured in jsx lines 24-31; accessible language, no Zone2/HIIT/VO2max/FCmax)

## 4. Aquatic blocks (Q6=alberca) — AQUATIC_BLOCK_1 / AQUATIC_BLOCK_2 (jsx 34-55). Accessible names: Trote acuático / Resistencia del agua / Saltos y sprints en el agua / Natación a ritmo conversacional, etc.

## 5. Contraindications matrix — CONTRAINDICATIONS (jsx 310-335)
5 condition keys: `lesion`, `cardiovascular`, `embarazo`, `posparto`, `bariatrica`.
Mapping (activeContraindicationKeys): Q12="Lesión o dolor articular/muscular"→lesion; Q12="Condición cardiovascular o de presión"→cardiovascular; Q12b="Sí, embarazada"→embarazo; Q12b="Sí, posparto reciente (últimos 6 meses)"→posparto; Q17="Cirugía bariátrica"→bariatrica.
Contraindicated classes (verbatim flags):
CORE{e,p,b} · CX WORX{e,p,b} · FUN TRAC{e,p,b} · KINETIC CHAIN{l,c,e,p,b} · BODY ATTACK{l,c,e,p,b} · BODY COMBAT{l,c,e,p,b} · BODY STEP{l,p} · POWER CYCLING{c} · POWER JUMP{l,c,e,p,b} · RPM{c} · STEP{l,p} · STRONG NATION{l,c,e,p,b} · ZUMBA STEP{l,e,p,b} · AEROYOGA{l,c,e,p,b} · ASHTANGA YOGA{e} · DANZA AEREA{l,c,e,p,b} · BELLY DANCE{e} · JAZZ 90{l,e,p} · SH BAM{l,c,e,p,b} · URBAN DANCE{l,e,p} · ALPHA TRAINER{l,c,e,p,b} · GRIT DEMO{l,c,e,p,b} · TRAINT BOOST DEMO{l,c,e,p,b} · INTERVAL{l,c,e,p,b} · FLYBOARD{e,p}.
Filter is HARD (rankClasses Step 4). GLP-1 = info message only (no filter). "Otra/Otro" = advisor-review message.

## 6. Banned / approved terms (LLM system prompt, jsx ~570) — captured verbatim in Addendum §6.1-6.3. Banned add: hipertrofia, Zone 2, Zone 1-2, HIIT, VO2max, plyometría, pliométrica, RPE, 1RM, FCmax, déficit calórico, canibalizar, sustrato, concéntrica, control motor, rate of force, propiocepción, isométrica, sobrecarga progresiva, modalidades aeróbicas.

## 7. Single LLM call JSON keys (sys prompt + sanitize, jsx 540-650)
client: hook, plan_argument, intent_line, infrastructure_argument, class_1_connector, class_2_connector (omitted if no Block 3).
advisor: validation_questions[5], visit_route[4]{title,description}, proposal{main,complement}, closing_priorities[3], closing_script. max_tokens 2000. Recursive `sanitize` strips Q-codes from strings/arrays/objects.

## 8. State machine (jsx 1748-1829)
phases: welcome → questionnaire → loading → result → **contact_capture** → schedule → briefing (+ error). Back from schedule → contact_capture; back from contact_capture → result. ContactCapture stores result.contact={lastName,phone,email}; validation: lastName.trim>=2, phone 10 digits, email regex.

## 9. FitKidz: flag-based `amenidades.includes('FitKidz')` → 40 clubs (State A=30 with named kids classes, State B=10 generic copy, State C none). State B tags: pedregal, felix-cuevas, miguel-angel-de-quevedo, san-jeronimo, zona-esmeralda, san-pedro, puebla, bernardo-quintana, esfera-queretaro, culiacan.
