# Anexo clínico — Experiencia Ideal · Sports World

Este anexo es la **única fuente de los datos clínicos** del paquete. El UX Spec define el comportamiento —el filtro duro de cinco claves `l/c/e/p/b` (§5.2) y la asignación de bloques por objetivo (§5.1)— y toma de aquí los datos.

> **Validación obligatoria (contenido YMYL).** Por tratarse de información de salud, un médico del deporte debe revisar y firmar la matriz de contraindicaciones y las prescripciones de este anexo **antes** de producción. El contenido marcado como `inferido` es propuesta técnica pendiente de ratificación médica. Una vez firmado, versionar el anexo como CSV/JSON con la firma del revisor.

---

## 1. Matriz de contraindicaciones y fichas por objetivo (51 clases)

El catálogo canónico tiene **51 clases**: 49 en seco y 2 acuáticas (AQUA ZUMBA, SWIM TRAINERS). Está organizado por **beneficio** (grupo) y por **contraindicación**.

Las cinco columnas de contraindicación son condiciones que el usuario declara en el cuestionario:

- **l** — lesión (condición declarada en Q12).
- **c** — condición cardiovascular (condición médica declarada en Q12).
- **e** — embarazo (Q12b).
- **p** — posparto (Q12b).
- **b** — cirugía bariátrica (Q17, rama de Bajar de peso).

**●** = clase contraindicada para esa condición. La columna **Fuente** indica el origen del dato: `clínico` = decisión documentada por el cliente; `inferido` = derivado por tipo de movimiento, pendiente de validación médica.

> **Conteos de control (catálogo de 51).** Clases contraindicadas: **lesión 21 · cardiovascular 16 · embarazo 38 · posparto 34 · bariátrica 20**. QA debe verificar estos totales contra las tablas en cada cambio del catálogo.

> **Doble eje: condición ≠ objetivo (leer con cuidado).** Dos columnas comparten nombre con un objetivo del cuestionario pero significan lo contrario. Son ejes independientes y por eso pueden coexistir `●` y `✓`/`★` en la misma clase, sin contradicción:
> - **Cardiovascular.** La columna **c** es la *condición médica* que el usuario ya tiene (Q12 → se excluye la clase). En las fichas, "Cardiovascular" es el *objetivo* "Mejorar mi salud cardiovascular" (Q4). Por eso una clase puede ser `●` para la condición y `★` para el objetivo (p. ej. CYCLING, INDBIKE).
> - **Lesión.** La columna **l** es la *condición* declarada (Q12 → se excluye la clase). En las fichas, "Lesión" es el *objetivo* "Recuperarme de una lesión o dolor crónico", que elige quien quiere recuperarse aunque no haya marcado una lesión activa en Q12.
>
> El filtro duro (§5.2) opera **solo sobre la condición** (Q12 / Q12b / Q17). Las fichas operan sobre el **objetivo** (Q4).

> **Punto de revisión médica — AEROYOGA.** Es el único caso del catálogo contraindicado para la *condición* lesión (`l ●`) y a la vez apto (`✓`) para el *objetivo* de recuperación. Bajo el doble eje es consistente —la ficha solo aplica a quien no declaró lesión en Q12—, pero por tratarse de yoga aéreo con inversiones y suspensión, el revisor médico debe confirmar si procede como objetivo de recuperación o si la ficha debe cambiar a "—".

**Fuerza, core y tonificación (8)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| BODY PUMP | | | ● | ● | ● | inferido |
| CORE | | | ● | ● | ● | clínico |
| CX WORX | | | ● | ● | ● | clínico |
| FUNTRAC | | | ● | ● | ● | clínico |
| KINETIC CHAIN | ● | ● | ● | ● | ● | clínico |
| KINETIC PUMP | | | ● | ● | ● | inferido |
| TONE | | | ● | ● | | inferido |
| TOTAL BARRE | | | ● | ● | ● | inferido |

**Cardio, combate, cycling y step (12)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| BODY ATTACK | ● | ● | ● | ● | ● | clínico |
| BODY COMBAT | ● | ● | ● | ● | ● | clínico |
| BODY STEP | ● | | | ● | | clínico |
| CYCLING | | ● | | | | inferido |
| INDBIKE | | ● | | | | inferido |
| POWER CYCLING | | ● | | | | clínico |
| POWER JUMP | ● | ● | ● | ● | ● | clínico |
| RACE WALKER | | ● | | | | inferido |
| RPM | | ● | | | | clínico |
| STEP | ● | | | ● | | clínico |
| STRONG NATION | ● | ● | ● | ● | ● | clínico |
| ZUMBA STEP | ● | | ● | ● | ● | clínico |

**Mente-cuerpo, yoga, pilates y stretch (13)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| AEROYOGA | ● | ● | ● | ● | ● | clínico |
| ASHTANGA YOGA | | | ● | | | clínico |
| BALL PILATES | | | ● | ● | ● | inferido |
| BODY BALANCE | | | ● | | | inferido |
| HATHA YOGA | | | ● | | | inferido |
| KINETIC BALL | | | ● | ● | | inferido |
| MAT PILATES | | | ● | ● | ● | inferido |
| NATURAL MOTION | | | ● | | | inferido |
| REFORMER PILATES | | | ● | ● | ● | inferido |
| STRETCH | | | | | | inferido |
| TAI CHI | | | | | | inferido |
| VINYASA YOGA | | | ● | | | inferido |
| YOGA RESTAURATIVA | | | | | | inferido |

**Baile (14)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| AERO DANCE | ● | | ● | ● | | inferido |
| AQUA ZUMBA | | | | | | inferido |
| BAILE DE SALÓN | | | | | | inferido |
| BELLY DANCE | | | ● | | | clínico |
| BODY JAM | ● | | ● | ● | | inferido |
| FIT DANCE | ● | | ● | ● | | inferido |
| JAZZ | ● | | ● | ● | | clínico |
| POUND | | | ● | ● | | inferido |
| RITMOS LATINOS | ● | | ● | ● | | inferido |
| SENSUAL DANCE | | | ● | ● | | inferido |
| SH'BAM | ● | ● | ● | ● | ● | clínico |
| URBAN DANCE | ● | | ● | ● | | clínico |
| ZUMBA FITNESS | ● | | ● | ● | | inferido |
| ZUMBA TONING | ● | | ● | ● | | inferido |

**Alta intensidad, atletismo y acuática (4)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| ALPHA TRAINER | ● | ● | ● | ● | ● | clínico |
| GRIT | ● | ● | ● | ● | ● | clínico |
| SWIM TRAINERS | | ● | | | | inferido |
| TRAINT BOOST | ● | ● | ● | ● | ● | clínico |

### Fichas de clases grupales (Bloque 03) — perfil por objetivo Q4 y nivel

Cada clase del catálogo se perfila contra los seis objetivos Q4 y el nivel. El motor de resultado usa esta tabla en el paso de puntuación (§5.3), después del filtro duro (§5.2).

Leyenda: **★** prioridad · **✓** apto · **—** no apto (se descarta para ese objetivo). Nivel: **P** principiante · **I** intermedio · **A** avanzado. **💧** acuática.

| Clase | Nivel | Bajar peso | Estética/def. | Masa | Desempeño | Cardiovascular | Lesión |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| AERO DANCE | PI | ✓ | ✓ | — | — | ✓ | — |
| AEROYOGA | PIA | — | ✓ | — | — | ✓ | ✓ |
| ALPHA TRAINER | IA | ✓ | ✓ | ★ | ★ | ✓ | — |
| AQUA ZUMBA 💧 | PI | ✓ | ✓ | — | — | ✓ | ✓ |
| ASHTANGA YOGA | IA | — | ✓ | — | ✓ | ✓ | — |
| BAILE DE SALÓN | PI | — | — | — | — | ✓ | ✓ |
| BALL PILATES | PIA | — | ✓ | — | — | ✓ | ✓ |
| BELLY DANCE | PI | ✓ | ✓ | — | — | ✓ | — |
| BODY ATTACK | IA | ✓ | ✓ | — | ★ | ✓ | — |
| BODY BALANCE | PIA | — | ✓ | — | — | ✓ | ✓ |
| BODY COMBAT | PIA | ★ | ✓ | — | ✓ | ★ | — |
| BODY JAM | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| BODY PUMP | PIA | ★ | ★ | ★ | ✓ | ✓ | — |
| BODY STEP | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| CORE | PIA | ✓ | ✓ | ✓ | ✓ | — | — |
| CX WORX | PIA | ✓ | ★ | ✓ | ✓ | — | — |
| CYCLING | PIA | ✓ | ✓ | — | ✓ | ★ | ✓ |
| FIT DANCE | PI | ✓ | ✓ | — | — | ✓ | — |
| FUNTRAC | PIA | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| GRIT | A | ✓ | ✓ | ✓ | ★ | ✓ | — |
| HATHA YOGA | PIA | — | ✓ | — | — | ✓ | ★ |
| INDBIKE | PIA | ★ | ✓ | — | ✓ | ★ | ✓ |
| JAZZ | IA | — | ✓ | — | — | ✓ | — |
| KINETIC BALL | PIA | — | ✓ | — | — | ✓ | ✓ |
| KINETIC CHAIN | IA | ✓ | ✓ | ★ | ✓ | — | — |
| KINETIC PUMP | PIA | ✓ | ★ | ✓ | ✓ | ✓ | — |
| MAT PILATES | PIA | — | ✓ | — | — | ✓ | ★ |
| NATURAL MOTION | PIA | — | ✓ | — | ✓ | ✓ | ✓ |
| POUND | PI | ✓ | ✓ | — | — | ✓ | — |
| POWER CYCLING | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| POWER JUMP | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| RACE WALKER | PI | ✓ | ✓ | — | — | ✓ | ✓ |
| REFORMER PILATES | PIA | — | ✓ | — | — | ✓ | ✓ |
| RITMOS LATINOS | PI | ✓ | ✓ | — | — | ✓ | — |
| RPM | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| SENSUAL DANCE | PI | — | ✓ | — | — | ✓ | — |
| SH'BAM | PIA | ✓ | ✓ | — | ✓ | ✓ | — |
| STEP | PIA | ✓ | ✓ | — | — | ✓ | — |
| STRETCH | PIA | — | — | — | — | — | ✓ |
| STRONG NATION | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| SWIM TRAINERS 💧 | PIA | ✓ | ✓ | — | ✓ | ✓ | ★ |
| TAI CHI | PIA | — | — | — | — | ✓ | ✓ |
| TONE | PIA | ✓ | ✓ | ✓ | — | ✓ | — |
| TOTAL BARRE | PIA | ✓ | ✓ | ✓ | — | ✓ | — |
| TRAINT BOOST | IA | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| URBAN DANCE | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| VINYASA YOGA | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| YOGA RESTAURATIVA | PIA | — | — | — | — | — | ✓ |
| ZUMBA FITNESS | PI | ✓ | ✓ | — | — | ✓ | — |
| ZUMBA STEP | PI | ✓ | ✓ | — | — | ✓ | — |
| ZUMBA TONING | PI | ✓ | ✓ | — | — | ✓ | — |

> **Dato pendiente del cliente.** En la matriz de programación por club, hoy solo AQUA ZUMBA tiene asignación confirmada; SWIM TRAINERS y otras clases oficiales no tienen aún datos de disponibilidad por club. El motor solo muestra clases con programación real en el club resuelto (§5.3, paso 1); las clases sin programación quedan fuera hasta que el cliente entregue su disponibilidad (ver §13.1 del UX Spec).

---

## 2. Prescripciones técnicas por protocolo (uso interno, no visible)

Esta sección documenta los **protocolos técnicos** de los subgrupos de entrenamiento individual: dosis exacta (series, repeticiones, %1RM, descansos), equipo y perfil ideal. **No se muestran al usuario**: el sitio presenta solo los nombres oficiales y el copy accesible, y el entrenador aplica el protocolo en la primera sesión. Están sujetos a la misma validación médica que la matriz de clases.

> **Relación con los nombres visibles.** Hay cuatro protocolos de pesas (Fuerza, Hipertrofia, Potencia, Resistencia muscular) y cuatro aeróbicos (LISS, MICT, HIIT, SIT). Los seis nombres del Bloque 01 y los seis del Bloque 02 que ve el usuario (§3 de este anexo) se derivan de estos protocolos según el objetivo Q4. La correspondencia exacta protocolo ↔ nombre oficial vive en la tabla puente del UX Spec (§5.5) y está pendiente de confirmación médica; aquí se documenta el protocolo, no el nombre comercial.

### Entrenamiento con pesas (individual)

**Fuerza** — slug: `/entrenamiento-con-pesas-individual/fuerza`
Tagline: *Mover más peso, con técnica sólida.*
- **Prescripción:** carga ≥80% 1RM · 2–3 series por ejercicio · 1–5 repeticiones · 2–5 min de descanso entre series · 2–3 sesiones por semana · ejercicios compuestos al inicio, rango de movimiento completo.
- **Equipo:** barras olímpicas con discos, mancuernas de carga media-alta, kettlebells; racks de potencia, bancas (plana, inclinada, declinada); Smith machine, hack squat, prensa pesada; cinturón, muñequeras, magnesio.
- **Ejercicios representativos:** sentadilla con barra, peso muerto convencional y sumo, press de banca, press militar de pie, dominadas con peso, remo con barra, hip thrust pesado.
- **Beneficios:** fuerza máxima absoluta, densidad mineral ósea, base neuromuscular para potencia, postura y fuerza funcional, prevención de sarcopenia.
- **Perfil ideal:** nivel intermedio o avanzado; domina la técnica de los compuestos básicos; metas de fuerza pura, rendimiento atlético o base de potencia.
- **Precauciones:** principiantes deben pasar primero por Hipertrofia o Resistencia muscular; contraindicado con lesión articular activa o condición cardiovascular no estabilizada; requiere supervisión inicial.

**Hipertrofia** — slug: `/entrenamiento-con-pesas-individual/hipertrofia`
Tagline: *Más músculo, menos grasa, mejor figura.*
- **Prescripción:** ≈10 series semanales por grupo muscular · 60–85% 1RM · 6–15 repeticiones · 60–90 s de descanso · 2–4 sesiones por semana · prioridad al volumen total semanal.
- **Equipo:** mancuernas de rango completo, barras EZ, kettlebells; máquinas selectorizadas (prensa, leg curl, leg extension, jalón, remo sentado, press de hombros, pec deck); torre de cable; bandas; bancas regulables.
- **Ejercicios representativos:** sentadilla goblet, prensa de pierna, hip thrust, curl de bíceps, elevaciones laterales, jalón al pecho, cruces en polea, extensión de tríceps, leg curl, leg extension, remo sentado, press de hombros.
- **Beneficios:** aumento de masa muscular, recomposición corporal, definición y volumen, mejor sensibilidad a la insulina, mantenimiento de masa magra en déficit calórico (clave para Bajar de peso).
- **Perfil ideal:** cualquier nivel; meta Estética corporal o Bajar de peso; recomposición; transición desde principiante.
- **Precauciones:** el volumen alto requiere recuperación; principiantes empiezan con cargas conservadoras y técnica.

**Potencia** — slug: `/entrenamiento-con-pesas-individual/potencia`
Tagline: *Fuerza que se mueve rápido.*
- **Prescripción:** carga moderada 30–70% 1RM · 3–6 repeticiones · intención concéntrica de máxima velocidad · 2–5 min de descanso · 2–3 sesiones por semana · ejercicios explosivos al inicio.
- **Equipo:** barras olímpicas, mancuernas de mango ancho, kettlebells variables; balones medicinales y wall balls; cajas pliométricas; bandas y cadenas; plataforma de levantamiento; air bike opcional.
- **Ejercicios representativos:** power clean, push press, kettlebell swing, jump squat, lanzamiento de balón medicinal, box jump, broad jump, snatch desde bloque.
- **Beneficios:** tasa de producción de fuerza, rendimiento deportivo (sprint, salto, cambios de dirección), prevención de caídas en adultos mayores con carga conservadora, coordinación intermuscular.
- **Perfil ideal:** nivel intermedio o avanzado; base previa de fuerza; deportistas o metas de rendimiento; adultos mayores bajo supervisión específica.
- **Precauciones:** requiere técnica supervisada; contraindicado con lesión articular aguda; no es primer contacto con pesas; cargas más bajas con hipertensión no controlada.

**Resistencia muscular** — slug: `/entrenamiento-con-pesas-individual/resistencia-muscular`
Tagline: *Aguante para hacer más, durante más tiempo.*
- **Prescripción:** carga ligera <60% 1RM · 15–25+ repeticiones · 30–60 s de descanso · 2–4 sesiones por semana · volumen alto; circuitos y supersets aceptables.
- **Equipo:** bandas elásticas; peso corporal y suspensión (TRX, anillas, barra de dominadas); mancuernas y kettlebells ligeros; pelotas suizas, BOSU, discos deslizantes; cuerdas de batalla.
- **Ejercicios representativos:** circuitos con bandas, sentadillas al aire de alto volumen, planchas, TRX rows, walking lunges, step-ups, push-ups, circuito de peso corporal, kettlebell complex ligero, escaladores.
- **Beneficios:** aguante muscular local, tono sin hipertrofia marcada, base neuromuscular para principiantes, regreso tras pausa, rehabilitación de lesión leve, postura y estabilizadores, acondicionamiento metabólico ligero.
- **Perfil ideal:** principiantes absolutos; regreso tras pausa larga (Q11); rehabilitación de lesión leve (Q12); adultos mayores; meta Cardiovascular o Recuperación.
- **Precauciones:** verificar técnica antes de subir volumen; si hay dolor agudo, derivar a entrenamiento supervisado; embarazadas consultan antes de empezar.

### Entrenamiento aeróbico (individual)

**LISS — estado estable de baja intensidad** — slug: `/entrenamiento-aerobico-individual/liss`
Tagline: *Movimiento sostenido, sin estrés ni impacto.*
- **Prescripción:** <60% VO₂max o <60–65% FCmáx · RPE 9–12 (Borg 6–20) · ritmo conversacional · 30–60+ min · 3–6 sesiones por semana, incluidos días de recuperación activa.
- **Equipo:** caminadora a paso de caminata (3–5 km/h, 0–3% inclinación); bicicleta estática a resistencia mínima; elíptica suave; natación lenta; aqua walking; bicicleta recumbente para limitación lumbar.
- **Beneficios:** base aeróbica, recuperación activa, manejo de estrés y salud mental, baja demanda articular, apoyo a rehabilitación cardiaca de fase I–II, oxidación de grasa como sustrato dominante.
- **Perfil ideal:** principiantes absolutos; rehabilitación post-lesión o post-cirugía; adultos mayores; días de recuperación de cualquier nivel; condición cardiovascular estabilizada con prescripción médica; meta Recuperación.
- **Precauciones:** con condición cardiaca requiere autorización médica previa (se marca en Q12); en embarazo es seguro con monitoreo de RPE.

**MICT — continuo de intensidad moderada** — slug: `/entrenamiento-aerobico-individual/mict`
Tagline: *El cardio sostenido que produce resultados.*
- **Prescripción:** 60–85% VO₂max o ~50–70% de la reserva de FC · RPE 12–14 (puedes hablar, no cantar) · 20–60 min · 3–5 sesiones por semana · mínimo 150 min/semana de moderado.
- **Equipo:** caminadora para trote (6–10 km/h); bicicleta estática y de spin a resistencia media; elíptica de zancada amplia; remo ergómetro constante; stair climber moderado; natación sostenida.
- **Beneficios:** sostiene déficit calórico con bajo daño muscular (Bajar de peso), salud cardiovascular, presión arterial, perfil lipídico y glucosa, mejora moderada de VO₂max, base para HIIT, adherencia a largo plazo.
- **Perfil ideal:** cualquier nivel; meta Bajar de peso o Cardiovascular; tolerancia a sesiones largas; transición de LISS a HIIT.
- **Precauciones:** rotar caminadora con bicicleta o elíptica para cuidar articulaciones; no es lo más eficiente en tiempo si solo se busca VO₂max.

**HIIT — intervalos de alta intensidad** — slug: `/entrenamiento-aerobico-individual/hiit`
Tagline: *Máximo resultado en mínimo tiempo.*
- **Prescripción:** intervalos a >85–90% del pico de VO₂ (o ≥80% FCmáx) · trabajo de 30 s a 4 min · recuperación igual o mayor · 4–10 rondas · 15–30 min totales con calentamiento y enfriamiento · 2–3 sesiones por semana máximo.
- **Equipo:** caminadora de cambio rápido (sprints o cuestas); spin bike de ajuste rápido; air bike; remo ergómetro; elíptica de resistencia alta; stair climber para cuestas.
- **Beneficios:** mejora de VO₂max mayor que MICT por minuto invertido, gasto elevado post-ejercicio (EPOC), sensibilidad a la insulina, recomposición corporal, buena adherencia con poco tiempo, acondicionamiento mixto.
- **Perfil ideal:** nivel intermedio o avanzado; meta Estética o Cardiovascular; poco tiempo con base aeróbica suficiente; combinación con Hipertrofia en recomposición.
- **Precauciones:** requiere base aeróbica previa (4–6 semanas de MICT/LISS); contraindicado con condición cardiovascular no estabilizada (Q12); no apto para principiantes absolutos; espaciar 48 h entre sesiones; en embarazo solo si ya se entrenaba HIIT y con autorización médica.

**SIT — intervalos de sprint** — slug: `/entrenamiento-aerobico-individual/sit`
Tagline: *Esfuerzos máximos, recuperación completa.*
- **Prescripción:** esfuerzos máximos (≥100% VO₂max) · 10–30 s de trabajo · recuperación completa de 2–4 min · 4–8 rondas · 15–25 min totales con calentamiento y enfriamiento extensos · 1–2 sesiones por semana máximo.
- **Equipo:** air bike; spin bike de alta inercia; caminadora con capacidad de sprint o cuesta empinada; remo ergómetro para intervalos all-out; pista o calle si el club tiene acceso.
- **Beneficios:** máxima mejora documentada de VO₂max por minuto, capacidad anaeróbica, gasto calórico alto en poco tiempo, poder máximo, EPOC pronunciado.
- **Perfil ideal:** nivel avanzado; base aeróbica sólida (≥3 meses de MICT/HIIT); deportistas; meta Cardiovascular en su forma más exigente; sin contraindicación cardiovascular.
- **Precauciones:** no apto para principiantes ni intermedios sin base; contraindicado con condición cardiovascular (Q12) y en embarazo; alto riesgo de lesión sin calentamiento; espaciar ≥72 h; vigilar signos de sobreentrenamiento (insomnio, fatiga crónica, FC elevada en reposo).

---

## 3. Catálogo de entrenamiento individual — 18 sub-clases

Tres familias de entrenamiento individual; cada una con seis sub-clases. Se entregan como variantes de los bloques de la Experiencia Ideal:

- El **Bloque 01** usa la familia **Fuerza y desarrollo muscular** en experiencia seca, o una variante acuática compatible cuando Q6 = "En la alberca" y el club tiene alberca.
- El **Bloque 02** usa la familia **Cardio y resistencia** en seco, o su variante acuática bajo la misma condición.
- El **catálogo acuático** no crea un cuarto bloque ni apaga el Bloque 01: es la fuente de variantes acuáticas para los bloques 01 y 02, gobernada por la regla de entorno acuático del UX Spec (§5.4).

**Bloque 01 — Fuerza y desarrollo muscular**

| Sub-clase | Objetivo Q4 | Fuente |
| --- | --- | --- |
| Fuerza integral con pesas | Bajar de peso | clínico |
| Rutina por grupos musculares | Mejorar mi estética corporal y definición muscular | clínico |
| Desarrollo muscular progresivo | Aumentar masa muscular | clínico |
| Potencia y velocidad | Mejorar mi desempeño atlético | clínico |
| Fuerza de mantenimiento | Mejorar mi salud cardiovascular | clínico |
| Fuerza guiada en máquinas | Recuperarme de una lesión o dolor crónico | clínico |

**Bloque 02 — Cardio y resistencia** (ajuste fino por Q5 ritmo y Q9 nivel)

| Sub-clase | Perfil (Q4 · Q9) | Fuente |
| --- | --- | --- |
| Cardio continuo moderado | Bajar de peso · principiante/intermedio | inferido |
| Cardio moderado con intervalos | Estética · intermedio | inferido |
| Cardio ligero de mantenimiento | Masa muscular / recuperación · cualquier nivel | inferido |
| Intervalos intensos 4×4 | Desempeño atlético · avanzado (sin contraindicación cardiovascular) | inferido |
| Base aeróbica 80/20 | Salud cardiovascular · intermedio/avanzado | inferido |
| Recuperación activa de bajo impacto | Recuperación de lesión · cualquier nivel | inferido |

**Variantes acuáticas** (se activan cuando Q6 = "En la alberca" o "Ambas" y el club resuelto tiene alberca; ver §5.4)

| Sub-clase | Perfil (Q4, acuático) | Fuente |
| --- | --- | --- |
| Nado continuo moderado | Bajar de peso / salud cardiovascular | inferido |
| Fuerza acuática con equipo | Estética / masa muscular | inferido |
| Trote acuático por intervalos | Desempeño atlético / cardio | inferido |
| Potencia y velocidad acuática | Desempeño atlético | inferido |
| Fuerza combinada: agua y gimnasio | Q6 = "Ambas" (combina seco + agua) | inferido |
| Movilidad y recuperación acuática | Recuperarme de una lesión o dolor crónico | inferido |

> **Desempate cuando dos sub-clases acuáticas sirven el mismo objetivo Q4.** La selección es determinista: gana una sola sub-clase por objetivo, usando Q9 (nivel) y Q5 (ritmo) como desempate.
> - **Desempeño atlético:** "Trote acuático por intervalos" por defecto; "Potencia y velocidad acuática" solo si Q9 = Avanzado.
> - **Bajar de peso / salud cardiovascular:** "Nado continuo moderado" por defecto; si Q5 = "Intenso, que me rete" y Q9 ≠ Principiante, "Trote acuático por intervalos".
> - **Estética / masa muscular:** "Fuerza acuática con equipo".
> - **Recuperación:** "Movilidad y recuperación acuática".
> - **Q6 = "Ambas":** "Fuerza combinada: agua y gimnasio".

> **Pendiente de confirmación (cliente + médico).** Los mapeos `inferido` del Bloque 02 y de las variantes acuáticas son propuesta por nombre e intensidad; el Bloque 01 seco ya está mapeado. Q6 nunca suprime el Bloque 01 por sí solo: con "En la alberca" y club con alberca, los bloques 01 y 02 renderizan variantes acuáticas compatibles con el objetivo; sin alberca, ambos renderizan variantes secas con la nota correspondiente (§5.4); con "Ambas", el sistema puede combinar seco y agua, priorizando siempre seguridad clínica y disponibilidad real del club.
