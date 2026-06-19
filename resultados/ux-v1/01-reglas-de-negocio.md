# Base de reglas de negocio — UX V1

Cimiento del spec. Cada regla tiene ID, enunciado, fuente y estado. **Toda afirmación del spec debe ser trazable a una regla de aquí.** Lo no confirmado permanece `[POR DEFINIR]`.

## Fuentes registradas
- **F1** — *Propuesta de Inversión SEO — Sports World México*, Final Upgrade AI, 26-mar-2026 (entregada por el usuario).
- **F2** — Spec maestro vigente **v4.2** y anexos del repo: `resultados/ux-spec-experiencia-ideal.md`, `anexo-clinico.md`, `anexo-contenido-prompts.md`, `anexo-ingenieria-crm.md`, `DESIGN.md`. Referencias `(spec:LN)`, `(clin:Ln)`, `(cont:Ln)`, `(dsn:Ln)`.

Estados: ✅ confirmada · 🟡 confirmada-pendiente-de-auditoría/ratificación · ⚠️ **conflicto entre fuentes (decisión requerida)** · ⬜ por definir.

---

## ⚠️ Registro de reconciliación (decisiones requeridas antes de redactar el spec)

| # | Tema | F1 (Propuesta SEO) | F2 (Spec v4.2) | Acción |
| --- | --- | --- | --- | --- |
| REC-01 | **Alcance de páginas** | +500 entregables; **392 hubs de amenidad** (Yoga, Box, Alberca, Spinning…); club pages 49+ | **155 páginas** indexables; **10 amenidades**; 49 clubes; 51 clases; etc. | ⚠️ Decidir qué alcance gobierna la V1 del UX. ¿El spec describe el sitio de 155 (F2) y la expansión SEO de 392 es una fase posterior, o la V1 ya contempla los 392 hubs? |
| REC-02 | **Línea base de tráfico** | ~79,100/mes (−28% YoY) | 80,000 → 160,000 en 3 meses (spec:L143) | 🟡 Cifras casi idénticas; usar la de auditoría cuando exista. |
| REC-03 | **FitKidz: nº de actividades** | — | Matriz clínica lista 21; texto correcto **34** (spec:L1559, D7 pendiente) | 🟡 Ratificar 34 y completar matriz. |
| REC-04 | **Conteo de clases** | — | 51 (7 Premium + 44) ↔ "49 secas + 2 acuáticas" (clin:L6) | 🟡 Confirmar marco canónico (51 vs 49+2). |
| REC-05 | **Pre-marca Q4 en SIT (aeróbico individual)** | — | spec:L612 → "salud cardiovascular"; spec:L1031 → "desempeño atlético" | ⚠️ Conflicto interno del spec; elegir uno. |
| REC-06 | **KPIs/metas finales** | Tabla de metas SEO | Metas SMART del spec | 🟡 Se reafirman tras la auditoría. |

---

## D1 · Metas, línea base y revenue

| ID | Enunciado | Base | Meta | Fuente | Estado |
| --- | --- | --- | --- | --- | --- |
| RN-D1-01 | Tráfico orgánico mensual (meta primaria) | ~79,100–80,000/mes | 120,000–160,000/mes en 3 meses | F1·F2(spec:L143) | 🟡 |
| RN-D1-02 | Cobertura keywords *unbranded* | 31.1% | 55–65% | F1 | 🟡 |
| RN-D1-03 | Leads cualificados (meta secundaria) | — | **2x** | F1·F2(spec:L144) | 🟡 |
| RN-D1-04 | Tiempo de primera respuesta (meta terciaria) | — | **<1 min, 24/7** (agente de voz BES) | F1·F2(spec:L145) | 🟡 |
| RN-D1-05 | Tráfico incremental mensual | — | +40,000 a +80,000 visitas | F1 | 🟡 |
| RN-D1-06 | Keywords "perder peso" en Top 10 | 0 | 50–100 | F1 | 🟡 |
| RN-D1-07 | Keywords de amenidades en Top 10 | ~180 | 350–500 | F1 | 🟡 |
| RN-D1-08 | Páginas de club indexadas | 0 de 49 | 49 de 49 | F1·F2 | 🟡 |
| RN-D1-09 | Tasa de agenda de visita guiada | [SUPUESTO 12%] | [SUPUESTO ≥20%] | F2(spec:L1591) | 🟡 |
| RN-D1-10 | Entregables totales del proyecto | — | +500 | F1 | 🟡 |

**RN-D1-11 · Revenue proyectado anual (modelo paramétrico por conversión).** 1% ≈ $37.6M · **1.5% ≈ $56.4M MXN (base)** · 2.5% ≈ $94.1M · con Paid+IA 4% ≈ $150.5M. *F1 · 🟡.*
**RN-D1-12 · Tiempos.** Opción A 14 sem · Opción B 10 sem; mismo alcance. *F1 · 🟡.*

## D2 · Actores, personas y journey

- **RN-D2-01** Dos arquetipos CORE: **P1 Family Wellbeing Manager** ("Family CWO", Prioridad 1, LTV 3–4x) y **P2 Urban Hybrid Executive** ("Third Spacer", Prioridad 2). *F2(spec:L146,L224-246) · ✅*
- **RN-D2-02** **P1**: 35–50, NSE AB/C+, 1–2 hijos 4–12; JTBD "que el club me devuelva tiempo"; entrena mientras hijos en FitKidz. Señales: búsquedas FitKidz/natación niños; landing FitKidz pre-llena Q14="Yo y mis hijos"; brief `isFamily+hasKids`; bloqueo absoluto ante cualquier señal de inseguridad infantil. *F2(spec:L224-234) · ✅*
- **RN-D2-03** **P2**: 28–45, híbrido/remoto, cerca de club legacy; JTBD "tercer espacio"; Q13=Solo → Block 3 OFF; Q10 sube `fromOtherGym`; agenda en el momento con confirmación en tiempo real. *F2(spec:L236-246) · ✅*
- **RN-D2-04** Públicos primarios (orden): prospectos de membresía · miembros (autoservicio) · padres/decisores familia (FitKidz). *F2(spec:L192-197) · ✅*
- **RN-D2-05** Actores secundarios: **Asesor** (consume el brief, cierra sin re-preguntar las 15–21 respuestas) y **BES** (agente conversacional, widget global, primera respuesta <1 min 24/7). Fuera de escena: entrenadores (definen ejercicios en 1ª sesión), marketing/SEO (gobierna hubs); recepción solo en modo degradado. *F2(spec:L248-249,L1362) · ✅*
- **RN-D2-06** **Journey canónico:** `CUESTIONARIO → CONOCIMIENTO → EXPERIENCIA IDEAL → LEAD CALIFICADO`; 4 fases: Descubrir → Cualificar → Convertir → Cerrar. *F2(spec:L121,L255-260) · ✅*
- **RN-D2-07** **Cuatro puertas de entrada → un destino:** home (1) · clubes (49) · clase/amenidad (61) · objetivo (6 hubs) → todas a «Diseña tu experiencia». *F2(spec:L123) · ✅*
- **RN-D2-08** Encuadre familiar **solo** en páginas FitKidz; el resto del sitio le habla a un usuario a la vez. *F2(spec:L204) · ✅*
- **RN-D2-09** Fuera de alcance del sitio: churn/retención/meseta (benchmarks NPS 47.3, retención 66.4%, 50% churn a 6m). *F2(spec:L292-293) · ✅*

## D3 · Catálogo (hechos confirmados)

- **RN-D3-01** **49 clubes** en **13 estados**. *F1·F2(spec:L257) · ✅*
- **RN-D3-02** **155 páginas indexables** totales (inventario F2). *F2(spec:L257,L387-391) · 🟡 (ver REC-01)*
- **RN-D3-03** **51 clases de adultos** = 7 Premium Les Mills (`/clases/signature/`) + 44 regulares (`/clases/`); marco alterno "49 secas + 2 acuáticas (AQUA ZUMBA, SWIM TRAINERS)". Grupos de beneficio: Fuerza/core/toning 8 · Cardio/combate/cycling/step 12 · Mente-cuerpo 13 · Baile 14 · Alta intensidad/acuática 4. *F2(spec:L387,L313; clin:L6,L19-86) · 🟡 (REC-04)*
- **RN-D3-04** **FitKidz = 34 actividades** (hub absorbe; sin páginas individuales; por rango de edad/disciplina/club). Rangos: niños pequeños, niños, preadolescentes, adolescentes. *F2(spec:L335,L943,L1559) · 🟡 (REC-03)*
- **RN-D3-05** **10 amenidades**: alberca, INTENZ (funcional), FitKidz, ring de box, muro de escalada, canchas, sauna y vapor, regaderas/vestidores, cafetería, estacionamiento. *F2(spec:L333,L390) · 🟡 (REC-01)*
- **RN-D3-06** **5 planes (+1 hub = 6 páginas)**: UniClub, AllClub, Black Pass, Pink Plan, Promo 21 días. Sin checkout (Rule 22). *F2(spec:L332,L319) · ✅*
- **RN-D3-07** **5 hubs de objetivo** (`/perfiles/`): primeros pasos, salud y bienestar, estética corporal, ganar fuerza, rehabilitación; **+ hub bajar-de-peso** (tipo aparte, YMYL). *F2(spec:L331) · ✅*
- **RN-D3-08** **18 sub-clases de entrenamiento individual** = 3 familias × 6 (Fuerza/desarrollo · Cardio/resistencia · Acuático), mapeadas a los 6 objetivos de Q4; 10 páginas de entrenamiento individual. *F2(spec:L377; clin:L301-345) · ✅*

## D4 · IA estructural, técnico y arquitectura de páginas

- **RN-D4-01** Toda página de club debe servirse **rastreable/indexable (SSR/SSG)** — hoy render client-side ⇒ 0 indexadas. *F1·F2 · ✅*
- **RN-D4-02** **Integridad de enlazado**: cero links rotos (hoy 116), sin huérfanos. *F1 · ✅*
- **RN-D4-03** Diseño y contenido **mobile-first** (gap 22x mobile/desktop). *F1 · ✅*
- **RN-D4-04** Construir **hubs semánticos por amenidad/objetivo** como capa de IA. *F1 · ✅*
- **RN-D4-05** Cajón estructural **«Tu Sports World» = 8 hubs**: Clubes · Clases · Amenidades · Perfiles · Bajar de peso · FitKidz · Membresías · Diario (Rule 4). Los 3 elementos de acción del header NO van en el panel. *F2(spec:L706-721) · ✅*
- **RN-D4-06** **Header (Rule 1)** = Logo · Tu Sports World · Diseña tu experiencia · Pregúntale a BES · **Agenda tu visita (pill rojo)**. Los elementos 2-4 son 3 rutas paralelas; el 5 es la única conversión. *F2(spec:L665-672) · ✅*
- **RN-D4-07** Inventario de tipos de página (F2): 49 clubes · 51 clases · 5 hubs objetivo · 1 hub bajar-de-peso (YMYL) · 10 amenidades · FitKidz · Personal Training · 10 entrenamiento individual · 6 membresías · 20 artículos Journal · Home. *F2(spec:L257) · 🟡 (REC-01)*
- **RN-D4-08** (F1) Bloques de ejecución: (1) técnico SSR/links/schema · (2) contenido 49 clubes · (3) hubs de amenidad (**392 págs** según F1) · (4) Paid Media + automatización IA. *F1 · ⚠️ (REC-01)*

## D5 · Navegación contextual y estados

- **RN-D5-01** **Modelo de 3 estados (Rule 32):** sin cuestionario · completo dentro del flujo · completo fuera del flujo. Al completar, **siempre** hay un club identificado. *F2(spec:L546-552) · ✅*
- **RN-D5-02** Menú contextual depende de 3 ejes (Rule 33): estado del cuestionario · tipo de página de origen · club resuelto. *F2(spec:L836) · ✅*
- **RN-D5-03** **Única acción de conversión, siempre presente:** «Agenda tu visita guiada» en el menú contextual de toda página y todo estado, sin excepción (Rule 26); el pill rojo del header se alcanza siempre en un toque (Rule 6); si no hay cuestionario, este se presenta como prerrequisito antes de confirmar la cita. *F2(spec:L774-776,L694-696) · ✅*
- **RN-D5-04** «Diseña tu experiencia» aparece mientras el cuestionario esté incompleto (Rule 27); al completarse, lo reemplaza «Volver a tu experiencia ideal» en el menú contextual (Rule 28); cada uno vive en exactamente un lugar a la vez. *F2(spec:L819-825,L721) · ✅*
- **RN-D5-05** «Tu Club ideal» aparece cuando NO es página de club y el usuario no está en su flujo (Rule 23); presenta/pre-llena Q15/Q16. *F2(spec:L778-794) · ✅*
- **RN-D5-06** **Reglas geográficas (Rule 24):** CIUDAD-UNO (1 club, no aparece botón) · CIUDAD-POCOS (2–3, "Otros clubes en tu ciudad") · CIUDAD-ZMVM (>3, 32 clubes; "Otros clubes en el área": radio 10 km u otra ubicación; sin club ⇒ Q15/Q16). *F2(spec:L796-817) · ✅*
- **RN-D5-07** «Artículos o información útil» solo si existe ≥1 artículo del Journal con etiqueta coincidente (Rule 29). *F2(spec:L827-832) · ✅*
- **RN-D5-08** En página de club se omiten Q15/Q16 (13 base; 16 si bajar de peso); cambiar de club re-evalúa solo Block 3 (Rule 43). *F2(spec:L867-885) · ✅*
- **RN-D5-09** Matrices por tipo de página (estado → preguntas visibles → menú): Home, Club, Clase premium/regular, Hubs objetivo, Bajar de peso, FitKidz (Rule 30/31), Personal Training, Membresías, Diario, entrenamiento individual, BES fallback. *F2(spec:L860-1041) · ✅*
- **RN-D5-10** Edge geográficos: ubicación inferida sin club ⇒ Home, aviso neutral, 2 alternativas, sin auto-seleccionar club lejano; geoloc denegada ⇒ Home con captura «Tu Club ideal», sin re-preguntar. *F2(spec:L1301-1322) · ✅*

## D6 · Cuestionario «Diseña tu experiencia»

- **RN-D6-01** **15 base + 6 condicionales = 15–21 visibles.** Una pregunta por pantalla, barra de progreso, "Continuar" deshabilitado hasta responder, transición <100 ms. *F2(spec:L1046-1058,L552-564) · ✅*
- **RN-D6-02** **Disparadores condicionales:** Q11 si Q10="Regreso después de una pausa"; Q12b si Q2≠Hombre; Q14b si Q14∈{Yo y mis hijos, La familia completa}; **Q17–Q19 si Q4 incluye "Bajar de peso"** (no por "estética"); landing /bajar-de-peso pre-marca Q4 ⇒ siempre activos (18). *F2(spec:L560-562,L1073-1095) · ✅*
- **RN-D6-03 · Banco de preguntas (verbatim):**
  - Q1 ¿Cómo te llamas? *(texto, req, ≥2)* · Q2 Género *(Hombre·Mujer·Prefiero no mencionarlo)* · Q3 ¿Qué quieres sentir al salir del club? *(5 opc)* · Q4 ¿Qué buscas? *(multi máx 2: Bajar de peso · Estética/definición · Masa muscular · Desempeño atlético · Salud cardiovascular · Recuperarme de lesión/dolor)* · Q5 ritmo *(Suave·Moderado·Intenso)* · Q6 dónde *(Piso/seca · Alberca · Ambas · Lo que recomiende el entrenador)* · Q7 horario *(multi, 6 franjas)* · Q8 días *(multi L–D)* · Q9 nivel *(Principiante·Intermedio·Avanzado)* · Q10 ¿vienes de otro gym? *(Sí·Nunca·Regreso de pausa)* · Q11 duración pausa *(cond)* · Q12 condición médica *(multi: Ninguna·Lesión/dolor·Cardiovascular/presión·Otra)* · Q12b embarazo/posparto *(cond)* · Q13 solo/acompañado · Q14 ¿con quién nos visitas? *(Solo·Amigo·Pareja·Yo y mis hijos·Familia completa)* · Q14b ¿hijo <12? *(cond)* · Q15 cerca de casa/trabajo · Q16 ¿dónde queda? *(CP 5 díg o colonia, ≥1)* · Q17 tratamiento peso *(cond multi: GLP-1·Bariátrica·Nutrición·Otro·Ninguno)* · Q18 datos físicos *(Peso 30–300·Estatura 120–230·Cintura 40–200)* · Q19 objetivo de cambio *(rangos kg o "sin número")*. *F2(spec:L1063-1095) · ✅*
- **RN-D6-04** Q4 siempre multi máx 2; dos selecciones ⇒ unión deduplicada de mapeos. Embarazo nunca es opción de Q12 (solo Q12b). Q17–Q19, una vez en el path de peso, son obligatorias. *F2(spec:L1058,L1086-1101) · ✅*
- **RN-D6-05 · Inferencia por búsqueda (Rule 16):** solo Q4 (objetivo explícito) y Q15/Q16 (ubicación). NO infiere: clase→Q4, amenidad→Q5/Q6, navegación interna. Precedencia: Q4 > Q16 > pre-marca por clase. *F2(spec:L568-587) · ✅*
- **RN-D6-06 · Pre-llenado por landing (Rule 20):** Home→nada (Q15/Q16 si búsqueda traía ubicación); Club→omite Q15/Q16; Amenidad→nada; Clase→Q4 alineado al movimiento; FitKidz→Q14="Yo y mis hijos"; Primeros Pasos→Q9 Principiante; Salud→Q4 cardiovascular; Estética→Q4 estética; Fuerza→Q4 masa muscular; Rehabilitación→Q4 lesión; Bajar de peso→Q4 + activa Q17–19; Personal Training→Q13 Acompañado; entrenamiento individual→Q13 Solo/Sola + Q4 según subpágina. **Todo pre-llenado es editable.** *F2(spec:L598-614,L1018) · ✅ (REC-05 en SIT)*
- **RN-D6-07 · Validación:** Q1 ≥2; Q7/Q8 ≥1; Q16 CP=5 dígitos o colonia; Q18 rangos numéricos. Errores inline es-MX bajo el campo, no bloquean otros campos; al enviar con error, scroll+focus al primero. Estado parcial se persiste **solo tras aceptar el aviso de privacidad**; al volver, reanuda. *F2(spec:L1050-1052,L1332-1342) · ✅*
- **RN-D6-08 · Concordancia de género:** Q2=Mujer ⇒ formas femeninas en Q3/Q13/Q14 ("Desconectada", "Sola", "Acompañada"…); default masculino. Q12 helper varía por género (embarazo no es condición). Q12b con "Prefiero no mencionarlo" usa fraseo neutral; la privacidad de género no elimina el tamizaje médico. *F2(spec:L620,L1053,L1074-1082) · ✅*
- **RN-D6-09 · Compuerta YMYL:** en el path de peso, antes del resultado se muestra modal de aviso de salud con firma del revisor médico; si se rechaza ⇒ experiencia genérica no clínica (sin intensidades/duraciones/contenido médico). *F2(spec:L922,L1097,L1344-1348) · ✅*

## D7 · Motor de personalización / resultado

- **RN-D7-01** Resultado accesible solo tras completar el cuestionario. Orden vinculante: hero+hook (Q3) + argumento nombrando 3 bloques → 4 cards resumen → **Card Club Ideal (Rule 42)** → 3 bloques (01 pesas · 02 cardio · 03 clases) → sección de seguridad (YMYL si aplica) → nota legal. *F2(spec:L1106,L1731-1753) · ✅*
- **RN-D7-02** Cada bloque ON por defecto; OFF solo por supresión explícita; backend devuelve `block_1/2/3_on`; sistema auditable. Códigos de supresión: SUP-Q6-ALBERCA, SUP-Q12-CONTRA, SUP-Q13-SOLO, SUP-CARDIO-RESTRICT. *F2(spec:L1136-1146,L1703) · ✅*
- **RN-D7-03 · Block 1 (Pesas):** ON por defecto; Q6 nunca lo suprime; única supresión = condición de Q12 marcada como contraindicación absoluta. Variante acuática si Q6=Alberca y club tiene alberca (si no, seca + nota). 6 nombres oficiales según Q4; nunca lista equipo; cierra con "Tu entrenador define los ejercicios y el peso en la primera sesión". *F2(spec:L1138,L1211,L366-371) · ✅*
- **RN-D7-04 · Block 2 (Cardio):** ON por defecto; condición cardiovascular no estabilizada sin autorización ⇒ solo cardio suave (LISS) u OFF. Sin nombres técnicos ACSM en copy; muestra máquina + duración + timing vs pesas + razón llana. Dos Q4 ⇒ guía del más restrictivo (Lesión>Masa>Desempeño>Estética>Bajar>Salud). Clases de intervalos de alta intensidad van solo a Block 3. *F2(spec:L1140,L1215-1227,L366-371) · ✅*
- **RN-D7-05 · Block 3 (Clases):** ON por defecto; **Q13="Solo/Sola"⇒ OFF (Rule 38)** y renombra a "Tu rutina individual" (recomienda sub-clases individuales). Filtro de entorno por Q6 (alberca→acuáticas; seca→secas; ambas/recomiende→todas). *F2(spec:L627,L1003,L1142-1176) · ✅*
- **RN-D7-06 · Filtro de seguridad (Rule 14b/40):** corre **antes** del ranking; 5 condiciones (l lesión, c cardiovascular, e embarazo, p posparto, b bariátrica) mapeadas de Q12/Q12b/Q17; las clases contraindicadas nunca se nombran. **GLP-1**: no filtra; prioriza fuerza + mensaje informativo. "Otra/Otro tratamiento": sin auto-filtro, mensaje de revisión por Asesor. **La matriz por clase (51) vive en `anexo-clinico.md §1` — fuente única; validación médica obligatoria y bloqueante.** *F2(spec:L1150-1170; clin §1) · 🟡 (ratificación médica)*
- **RN-D7-07 · Ranking (Rule 40):** backend, antes del LLM. Orden: (1) catálogo del club resuelto → (2) filtro entorno Q6 → (3) compatibilidad Q4 (un "no apto" descarta) → (4) nivel Q9 → (5) contraindicación dura → (6) score → (7) partición top_2 / también_encajan (3–5) / resto. Score: Q4 top3 +3 / apto +1; Q3 +2; Q5 +1; solape Q7 +1/+0.5; orden desc con desempate alfabético. El LLM no genera/ordena/filtra clases: solo elige IDs de beneficio y razón de match y escribe un conector ≤15 palabras. *F2(spec:L1174-1178,L636) · ✅*
- **RN-D7-08 · Card «Tu Club Ideal» (Rule 42):** nombre (más cercano por Q16 vs GPS; Q15="No me importa"⇒ciudad/fallback) · distancia en minutos (Distance Matrix) · dirección de catálogo · intent line LLM ≤18 (Q13+Q14) · **exactamente 4 features** verificables · link "Ver otros clubes cerca de ti" (Rule 43). Degradación: omite elemento irresoluble, nunca inventa. *F2(spec:L1190-1194) · ✅*
- **RN-D7-09 · Cambio de clase/club (Rules 41/43):** "Cambiar mis clases" reemplaza solo esa card y re-invoca al LLM para esa clase; no se puede elegir fuera del catálogo del club; persiste en sesión + CRM. Cambio de club: re-evalúa solo Block 3 (Blocks 1/2 son club-independientes), radio default 15 km, orden por distancia; persiste con bandera de anulación manual. *F2(spec:L883-887,L1182-1186) · ✅*
- **RN-D7-10 · FitKidz 3 estados:** A (30 clubes, con clases nombradas) · B (10 clubes, FitKidz sin clases listadas → texto genérico) · C (9 clubes sin FitKidz → sección gris + remite a otros clubes). FitKidz = boolean por club (40 de 49); resolver usa el flag, no `kids_classes.length`. *F2(spec:L1717,L1798-1800) · ✅*
- **RN-D7-11 · Edge cases:** 3 flags false ⇒ error controlado + card de handoff a Asesor (único caso sin bloque de plan); 0 clases viables ⇒ Personal Training como alternativa; 1 clase ⇒ card única + PT; preferencia acuática sin alberca ⇒ plan en seco + nota. *F2(spec:L1146,L1293-1414) · ✅*
- **RN-D7-12 · Copy LLM (una sola llamada, Apéndice H):** una llamada devuelve copy de cliente **y** brief de Asesor. Solo LLM en resultado: hook ≤30 (Q3), plan_argument ≤45 (sin palabra "plan"), intent_line ≤18 (Q13/Q14), infrastructure_argument ≤55 (cita 49 clubes), conectores de clase ≤15. Defensa en profundidad `stripQCodes` recursivo; JSON mal formado ⇒ fallbacks seguros, nunca pantalla en blanco. *F2(spec:L639-642,L2114-2142) · ✅*
- **RN-D7-13 · Sección de seguridad (copy contextual):** variantes por condición (GLP-1; GLP-1+otra; otra condición; sin condición) + disclaimer fijo "Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica." *F2(spec:L1785-1790) · ✅*
- **RN-D7-14 · Frescura (Rule 34):** resultado >60 días ⇒ aviso no bloqueante "¿Sigue siendo tu objetivo?". *F2(spec:L649-651) · ✅*

## D8 · Conversión, captura y enrutamiento del lead

- **RN-D8-01 · Captura de contacto (Rule 32b):** aparece **entre `result` y `schedule`**; no se agenda sin ella. Campos: apellido (≥2), celular (exacto **10 dígitos**), correo (regex). No es pregunta del cuestionario. Privacidad: "Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros." *F2(spec:L1229-1256) · ✅*
- **RN-D8-02 · Scoring (R14):** +40 contacto+agenda · +20 Q4 Bajar de peso/Masa · +15 Q10 viene de otro gym · +10 Q19 objetivo definido · +5 Q9 Avanzado/Intermedio · +0 solo curioseó. *F2(spec:L21-28) · 🟡 (defaults v5, calibrar 30/60/90 d)*
- **RN-D8-03 · Enrutamiento (R14):** ≥60 caliente (asesor + voz al instante) · 30–59 agenda estándar + recordatorio · <30 nurturing. **Override determinista:** todo lead que completó contacto **y** agendó se enruta **siempre como caliente**, sin importar score. *F2(spec:L30-36) · ✅*
- **RN-D8-04 · Seguridad del score (R14.2):** el score nunca reduce atención a leads con banderas clínicas, embarazo/posparto, bariátrica, GLP-1 o lesión; no se usa para negar seguimiento. *F2(spec:L44) · ✅*
- **RN-D8-05 · Observabilidad CRM (R14.1):** guardar como campos separados: puntaje, señales que sumaron, club resuelto, origen de entrada, flags críticos del brief, si agendó. *F2(spec:L40) · ✅*
- **RN-D8-06 · Agenda:** `schedule` = día/hora; "Volver" regresa a captura. Confirmación en tiempo real vía API; BES/WhatsApp confirman <1 min. Modo degradado (API caída): captura lead + callback manual en 1 día hábil. *F2(spec:L1262,L1362) · ✅*
- **RN-D8-07 · Recordatorios (Rule 3.2):** solo de visita; WhatsApp plantilla **24 h** y **2 h** antes; sin opt-in ⇒ recae en correo. *F2(spec:L756-758) · ✅*
- **RN-D8-08 · Brief del Asesor (Apéndice G, 10 secciones):** banner cliente · header · §1 perfil · §2 logística · §3 qué validar (5, LLM) · §4 ruta (4 pasos, LLM) · §5 propuesta (main+complement, LLM) · §6 prioridades (3, LLM) · §7 notas/banderas · guion de cierre (LLM) · registro. **El Asesor no re-pregunta ninguna de las 15–21 respuestas.** *F2(spec:L2080-2092,L248) · ✅*
- **RN-D8-09 · Límites LLM del brief:** validation_questions =5 (≤18) · visit_route =4 (≤18; Conectar/Tour/Resolver bloqueador/Cerrar) · proposal main ≤35, complement ≤30 · closing_priorities =3 (≤12) · closing_script ≤60. *F2(spec:L2128-2132) · ✅*
- **RN-D8-10 · Banderas del brief:** FitKidz familia, principiante, pausa, embarazo, posparto, bariátrica (warn); GLP-1, solo formato (info); condición específica, nota alberca (warn). Flags derivados: fromOtherGym, hasMedical, wantsAquatic, isFamily+hasKids, isPrincipiante, fromPause. *F2(spec:L2096-2108,L645) · ✅*
- **RN-D8-11 · Sin checkout (Rule 22):** la ruta desde membresías es «Agenda tu visita guiada»; la venta ocurre en persona/teléfono, no en el sitio. *F2(spec:L993-997) · ✅*
- **RN-D8-12 · Perfilado progresivo:** si Q1→Q19 cae <[SUPUESTO 50%], dividir en 2 etapas (mínimo viable → detalle antes de agendar). *F2(spec:L1605,L181) · 🟡*

## D9 · YMYL, clínico, privacidad y accesibilidad

- **RN-D9-01** `anexo-clinico.md` es la **fuente única** de datos clínicos; el spec los consume. *F2(clin:L3) · ✅*
- **RN-D9-02 · Compuerta YMYL bloqueante:** un **médico del deporte** valida el contenido clínico **antes** de producción; versionar con firma. *F2(clin:L3,L157; spec:L1170) · 🟡 (ejecutar validación)*
- **RN-D9-03** Páginas YMYL: hub bajar-de-peso, hub rehabilitación, artículos de nutrición/rehab/suplementación. Requieren: firma profesional visible (nombre + cédula), aviso de salud antes de recomendaciones, **sin promesas numéricas**. Schema `MedicalWebPage` + revisor médico. *F2(spec:L431,L1525-1533) · ✅*
- **RN-D9-04 · Filtro duro (5 condiciones)** sobre catálogo de 51, conteos: lesión 21 · cardiovascular 16 · embarazo 38 · posparto 34 · bariátrica 20. Opera sobre la condición (Q12/Q12b/Q17), independiente del objetivo (Q4). *F2(clin:L7-15) · 🟡 (ratificar)*
- **RN-D9-05** Prescripciones técnicas ACSM (series/reps/%1RM/descanso) son internas, **no** visibles al usuario; mismo gate médico. *F2(clin:L156-157) · ✅*
- **RN-D9-06 · Privacidad = LFPDPPP** (México; EAA no aplica). Captura en 4 momentos: cuestionario, registro de entrega, agenda, conversación BES; en cada uno, aviso + consentimiento explícito antes de almacenar. *F2(spec:L1510-1512,L1467) · ✅*
- **RN-D9-07** Datos de salud (peso, estatura, condiciones, medicamentos) = sensibles ⇒ consentimiento adicional específico: **checkbox obligatorio en la pantalla de Q12, antes de Q12/Q12b/Q17/Q18**. Estado cliente se persiste solo tras aceptar aviso. Opt-in de WhatsApp por separado. *F2(spec:L1514-1519,L1054) · ✅*
- **RN-D9-08 · Accesibilidad = WCAG 2.2 AA** en todas las páginas; axe-core bloqueante. Contraste ≥4.5:1 (texto), ≥3:1 (texto grande/UI); rojo `#E6282A` falla AA en texto ⇒ usar `#C81E20`. No solo color; touch ≥44×44 / 48×48; `prefers-reduced-motion`; teclado completo con focus visible; `lang="es-MX"`, `aria-live`, `role="alert"`, fieldset/legend por pregunta. *F2(spec:L1467-1504; dsn:L37-54) · ✅*

## D10 · Contenido, voz y agente conversacional

- **RN-D10-01 · Voz:** entrenador adulto — directo, cercano, sin promesas vacías ni paternalismo; 2ª persona (tú); frases cortas, párrafo ≤60 palabras; verbos concretos; cero exclamaciones/anglicismos/promesas en kilos/tallas/plazos. *F2(cont:L15-31) · ✅*
- **RN-D10-02 · Prohibido en copy:** la palabra **"plan"** (entregable = "Experiencia Ideal"; permitido solo en claves internas como `plan_argument`); códigos Qn; clichés/anglicismos (journey, lifestyle, workout, core, fit…); falso-clínico ("quema X calorías"); **jerga técnica** (hipertrofia, HIIT, VO2max, RPE, 1RM, déficit calórico, propiocepción…) → usar lenguaje accesible. *F2(cont:L11-35,L27; dsn:L131) · ✅*
- **RN-D10-03 · Lint bloqueante:** tras validar JSON + sanitizar Qn; checa fuga de Qn, palabra "plan", vocabulario prohibido, exceso médico, longitudes, forms requeridos, hechos no respaldados. Fallback: reemplaza solo el campo que falla; nunca bloquea el resultado hardcodeado salvo sin ruta segura. *F2(cont:L107-134) · ✅*
- **RN-D10-04 · BES (agente):** widget flotante en las 155 páginas; responde operativo (horarios, precios, clases, membresías), agenda visitas, consciente del contexto; texto por defecto + voz; fallback URL sin-JS. **NO hace:** cancelaciones/congelamientos/cambios de plan/reembolsos (captura ticket + ofrece Asesor), preguntas profundas de salud (remite a hub con firma médica), promesas de resultados. Handoff a humano para esos casos; nunca inventa. *F2(spec:L734-753,L1354) · ✅*
- **RN-D10-05 · WhatsApp:** solo recordatorios de visita (24 h + 2 h), plantilla, opt-in o correo; no ventas ni cambios de cuenta. *F2(spec:L755-759) · ✅*
- **RN-D10-06 · Fuera de alcance del sitio:** composición de diseño gráfico (equipo de diseño), reglas de producción de contenido/Journal (guía del equipo de contenido), Q&A profundo de salud y acciones financieras de cuenta (BES). BES se entrega como proyecto aparte con su propio spec. *F2(spec:L204,L509,L747,L1354; dsn:L85) · ✅*

## DESIGN · Tokens y jerarquía (fuente: `DESIGN.md`)

- **RN-DSN-01** Color: `primary #E6282A` (solo fondos CTA) · `primaryText #C81E20` (rojo en texto) · `ink #1D1D1B` · superficies `#F5F5F4/#FFFFFF` · bloques `#EEF5FF / #EDF8F1 / #F3F4F6` · safety `#FFF6E7`. Tipografía **Montserrat** (heading 900/1.2, body 400/1.5). Espaciado múltiplos de 4 (xs4…xl40). Radius 4/8/16. Breakpoints 360/768/1024/1440. *F2(dsn) · ✅*
- **RN-DSN-02 · Guías premium (10):** editorial no catálogo; foto al frente (AVIF/WebP); el rojo es un bisturí (1 CTA dominante por vista); tipografía segura; superficies calmadas; señales de confianza (firma médica + cédula); movimiento con propósito; accesibilidad = premium; consistencia en 49 clubes/155 páginas; densidad correcta por dispositivo. *F2(dsn:L110-119) · ✅*
- **RN-DSN-03 · Jerarquía normativa:** ux-spec = comportamiento/IA/estructura de contenido; DESIGN.md = restricciones visuales/tokens; prototipo = referencia no normativa. *F2(dsn:L95-104) · ✅*

---

## Pendientes / por definir
- Resolver REC-01…REC-06 (arriba).
- KPIs finales tras auditoría.
- `[POR DEFINIR — Figma inspect]` herramienta de handoff visual (spec:L1541).
- Distribución geográfica detallada de los 49 clubes (más allá de 13 estados).
