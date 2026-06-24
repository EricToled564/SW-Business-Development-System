# Sports World México · Experience Architecture · V1.0
## Navigation, Questionnaire, Dynamic Menus and Business Rules

Foundational document. It defines, on its own and in normative terms, why the *ideal experience* exists, how it is navigated, the role of the questionnaire as the sole source of personalization, how dynamic menus work, and every business rule that governs the experience from start to finish. It is written to be read autonomously: a reader —whether on the Sports World side or an external vendor— needs no other document to understand and build the experience described here. It is the authoritative specification of that experience.

**Terminology.** Throughout this document, **prospect** is the person who advances through the experience (first an anonymous visitor, then an identified person). **Lead** is the captured and qualified record written to the customer system (CRM). The two terms are never used interchangeably.

---

# 0 · Objectives

## 0.0 Why this project exists

Sports World operates a premium physical network —49 clubs across Mexico— but its digital presence does not reflect the scale of that infrastructure. The brand is found by people who already know it, and goes unnoticed by those who do not. People searching for a generic fitness solution that Sports World does offer rarely discover it, because Sports World does not appear in those searches. The result is a constant loss of new customers at the very moment they are looking to sign up.

This page —the *ideal experience*— exists to close that gap at the decision point. Its purpose is to convert the demand that does reach Sports World into qualified, scheduled visits: to take a prospect who arrives looking for a solution, understand what they really want, place them in the right club with the right training combination, and deliver a complete brief to the advisor who will close the visit. The page is the conversion surface that transforms recovered search visibility into scheduled visits.

## 0.1 The three key lead blockers

The initial SEO audit identified three concrete ways in which Sports World loses a prospect who is ready to sign up today. Each is a real intent that Sports World can satisfy physically, but fails to capture digitally. The *ideal experience* is designed as the direct response to all three.

**Blocker 1 — The ignored vertical (weight loss).** A prospect searches for "gimnasio para perder peso" —932,300 searches per month, the highest-volume intent in the Mexican fitness industry. Sports World appears in approximately 0.02% of these searches. The prospect leaves with a competitor because, digitally, nothing indicated that Sports World could help. The *ideal experience* responds to this directly: weight loss is a first-class functional objective (Q4) with its own dedicated branch of the questionnaire, conscious handling of treatment, and a tailored recommendation —so that a prospect with this intent receives a concrete, personalized path instead of silence.

**Blocker 2 — The underserved demand (amenities and disciplines).** A prospect searches for "yoga cerca de mí" —14,800 searches per month— and although Sports World has premium yoga instructors and studios, it falls outside the Top 100 results, so the prospect ends up at a boutique studio. The same pattern repeats with functional/HIIT, martial arts, and other disciplines that Sports World offers but does not make visible. The *ideal experience* responds to this by crossing the prospect's stated objective with each club's real class catalog, so that a discipline Sports World actually offers becomes a visible, recommended part of the prospect's ideal experience, rather than an invisible capability.

**Blocker 3 — The maze of extra clicks (geographic intent).** A prospect searches for "gimnasio cerca de mí" —751,000 searches per month— and instead of being taken to their nearest club, lands on a generic home page. Each additional click costs between 20% and 40% in retention, and Sports World wins the click but loses the visit through fatigue. The *ideal experience* responds to this by resolving the prospect directly to a specific recommended club based on their location, and immediately routing them to a concrete next step (the guided visit) —collapsing the maze into a single personalized path.

## 0.2 Prospect objectives

The *ideal experience* personalizes around the prospect's own objectives. These objectives are not open-ended: they are fully bounded by the answer options of two questionnaire questions. The prospect has exactly five possible emotional objectives (the Q3 options) and exactly six possible functional objectives (the Q4 options). Nothing the prospect wants falls outside these eleven options —the questionnaire is deliberately constrained so that every recommendation maps to a known objective.

### 0.2.1 Emotional objectives (Q3 — "¿Qué quieres sentir al salir del club?")

The emotional objective is what the prospect wants to *feel* after training. It is captured via Q3, a single-select question with a supporting line —"Esto define el tono de tu experiencia ideal."— and exactly five options. The prospect chooses one. The chosen option sets the emotional tone of the personalized copy (the hook and the plan argument).

The five emotional objectives, verbatim (shown here in the default masculine form; each is conjugated by gender from Q2):
1. **Desconectado / Desconectada del trabajo y la rutina** — the prospect trains to disconnect from work and routine. The experience should read as an escape and a mental reset.
2. **Renovado / Renovada y de buen ánimo** — the prospect trains to feel renewed and in good spirits. The experience should read as energizing and mood-boosting.
3. **Parte de una comunidad saludable** — the prospect trains to belong to a healthy community. The experience should emphasize group classes, shared spaces, and belonging.
4. **Confiado / Confiada en que mi cuerpo no me va a fallar** — the prospect trains for confidence and bodily reliability. The experience should emphasize endurance, capacity, and not being let down by one's own body.
5. **Más a gusto conmigo mismo / conmigo misma** — the prospect trains to feel more at ease with themselves. The experience should read as self-acceptance and personal well-being, rather than external validation.

This single answer does not change which club, which blocks, or which classes are recommended —that is determined by the functional objectives and the rest of the questionnaire. The emotional objective shapes the *tone* in which the recommendation is written, ensuring that the personalized copy resonates with the real reason the prospect is there.

### 0.2.2 Functional objectives (Q4 — "¿Qué buscas?")

The functional objective is what the prospect wants to *achieve* physically. It is captured via Q4, a multi-select question —supporting line "Puedes elegir hasta dos."— with exactly six options and a strict limit of two selections. The prospect chooses one or two. The first selection (`Q4[0]`) is the **primary functional objective** and drives all deterministic resolution in the system; the second (`Q4[1]`), if present, is a **secondary functional objective** used to diversify the class ranking.

The six functional objectives, verbatim:
1. **Bajar de peso** — weight loss. This objective additionally enables the weight-loss branch of the questionnaire (treatments, physical data, change goal —Q17, Q18, Q19) and the weight-loss YMYL handling.
2. **Mejorar mi estética corporal y definición muscular** — body aesthetics and muscle definition.
3. **Aumentar masa muscular** — muscle mass gain.
4. **Mejorar mi desempeño atlético** — athletic performance.
5. **Mejorar mi salud cardiovascular** — cardiovascular health.
6. **Recuperarme de una lesión o dolor crónico** — recovery from an injury or chronic pain.

The primary functional objective `Q4[0]` deterministically selects:
- the training subgroup of Block 01 (dry-floor strength or aquatic strength),
- the training subgroup of Block 02 (dry-floor cardio or aquatic cardio),
- the ranking weights of the Block 03 group classes,
- the set of ideal classes (`preferClasses`) used in club resolution,
- and the narrative arc of the personalized copy.

The two objective axes are independent and complementary: Q3 says *why* the prospect is here (the feeling they pursue) and Q4 says *what* they want their body to achieve. Together they bound the entire space of what the experience must personalize around. Every downstream rule in this document operates on objectives derived from these two questions.

---

# 1 · Navigation principles

## 1.1 Single-page experience with a phase state machine

The Sports World *ideal experience* is a single-page application that advances through a fixed sequence of phases. The prospect never navigates to a different URL during the questionnaire-to-brief flow. All progress is governed by a single state variable called `phase`. The renderer dispatches the correct screen based on the current value of `phase`. There is no router, no deep linking, and no browser back-button history —backward navigation is explicit and handled with buttons inside each phase.

This deliberate decision ensures that:
- The prospect cannot accidentally land on the result screen without completing the questionnaire.
- The prospect cannot bookmark or share an intermediate state.
- The advisor brief cannot be reached without first passing through the contact-capture gate and the appointment scheduler.
- All data captured during the session lives only in memory; closing the tab discards it.

## 1.2 The seven phases

The phase state machine has exactly seven values, executed in the following order under normal conditions:

1. **`welcome`** — Static intro screen with the Sports World wordmark, a one-line value proposition, and a single primary action ("Comenzar"). No input beyond the start button.
2. **`questionnaire`** — Rendered when the prospect clicks "Comenzar". The questionnaire engine presents one question at a time, advancing the `step` index. Each question is a self-contained screen with its own header, input, supporting text, and Next/Back buttons. The questionnaire is non-linear in the order of the options but linear in the sequence of questions (subject to conditional branching —see §3).
3. **`loading`** — Triggered when the prospect submits the final question. A spinner animation runs while the resolver computes the recommendation (retrieving the club and class data described in §5) and the language-model API call completes asynchronously. The prospect cannot interact during this phase. Average duration: 4–8 seconds depending on network latency.
4. **`result`** — The *ideal experience* page. The prospect lands here once the resolver returns successfully. (The language model normally returns as well; if it fails repeatedly, the prospect still reaches `result` in the fallback mode described in §4.14.) It is the longest screen by content volume and the primary deliverable for the prospect. It contains two visually separated content pages (see §4.13).
5. **`contact_capture`** — Triggered when the prospect clicks "AGENDAR VISITA GUIADA" on the result screen. A mandatory three-field form (last name, mobile phone, email) blocks advancement until all three pass validation. The prospect can return to `result` via a back arrow. (See §4.11.)
6. **`schedule`** — Triggered when the prospect submits valid contact data. A calendar widget presents the next 14 days with predefined time slots **within the club's business hours**. The prospect chooses a combination, confirms, and advances. **No availability is verified and no reservation is created**: the chosen date and time are recorded as the prospect's *visit request* —they are included in the lead written to the CRM and emailed to the club, which confirms and coordinates the visit.
7. **`briefing`** — Terminal phase. It shows two visually separated pages: page 1 is the appointment confirmation (intended for the prospect to take a screenshot and remember it), page 2 is the advisor brief (intended for the Sports World sales advisor to read before the visit). The prospect can restart the questionnaire or return to `schedule` to modify the appointment.

There is an auxiliary phase outside the main sequence:
- **`error`** — Triggered if the language-model API call fails. It shows a retry button and a restart link. A successful retry returns the prospect to `result`; if retries keep failing, the prospect advances to `result` in the §4.14 fallback. The error phase is never a dead end.

The phases are exclusive: only one renders at any time. The screen is fully unmounted on transition; there are no fade transitions or overlapping states.

## 1.3 Forward navigation, conditional backtracking

Forward navigation is universal: each phase has a primary action that advances to the next phase. Backward navigation is selective and follows these rules:
- From `welcome` → no backtracking (it is the entry point).
- From `questionnaire` → "Atrás" returns to the previous question. If the previous question was conditional and no longer applies (e.g., the prospect changed Q10 from "pause" to "I'm coming from another gym"), the engine skips Q11 and lands directly on Q10.
- From `loading` → no backtracking (loading is not interruptible).
- From `result` → no backtracking. The prospect cannot return to modify the questionnaire answers. The only "reset" is the complete restart of the questionnaire via the "Reiniciar cuestionario" link at the end of the result page, which discards all state and returns to `welcome`.
- From `contact_capture` → "← Volver" returns to `result`. Captured contact data is preserved if the prospect navigates forward again.
- From `schedule` → "← Cambiar datos de contacto" returns to `contact_capture`.
- From `briefing` → "← Cambiar fecha u hora" returns to `schedule`. "Terminar" closes the session (returns to `welcome` after a confirmation). If the prospect changes the appointment and confirms again, the lead record is updated in place rather than duplicated (see §5.2).

Blocking backward navigation from `result` is intentional, for two reasons. First, the model-generated copy is computed only once and deterministically; changing the inputs after seeing the output would force either a recomputation (a costly language-model call) or a stale, misleading screen. Switching clubs from the alternatives panel is different: it recomputes the three blocks and re-runs the ranker, but that is a recomputation scoped to the club, not a reopening of the questionnaire answers (see §4.1). Second, the prospect's mental contract is simple —answer the questions, see the recommendation— and reopening the answers would undermine the authority of that recommendation.

## 1.4 No authentication, no persistence

The *ideal experience* requires no authentication. There is no login, no account creation, and no tracking of the prospect via persistent identifiers. The entire session lives only in browser memory:
- No `localStorage`, `sessionStorage`, `IndexedDB`, or browser cookies are used.
- No analytics pixel fires until the contact-capture phase. The contact data entered there is held in session state; the write to the CRM (a single idempotent HTTPS POST —see §5.2) occurs afterward, at appointment confirmation (the `schedule` → `briefing` transition), once the complete lead record —contact data plus the chosen visit date and time plus the advisor brief— is complete.
- Closing the browser tab discards all questionnaire answers, all computed blocks, the language-model-generated copy, the advisor brief, and the appointment selection. The prospect must restart from `welcome`.
- The lead record, written to the CRM upon appointment confirmation, is the only information that persists beyond the session —and it persists only on the server side, never in the browser. The contact fields entered earlier in `contact_capture` are held only in session state until that write.

This design is intentional. The product is a single-use recommendation tool with a strong moment of action (scheduling the visit). Persistence would risk showing stale recommendations to a returning prospect whose preferences or medical context have changed, and would require consent-management infrastructure beyond what the visit-scheduling use case justifies.

---

# 2 · The questionnaire as the sole source of personalization

## 2.1 Role and purpose

The questionnaire is the only mechanism by which the prospect provides inputs to the personalization engine. Every downstream component —the resolver (which chooses the club), the block selector (which chooses the training subgroups), the class ranker (which chooses the best group classes), the language model (which writes the personalized copy), and the advisor-brief generator (which writes the advisor guidance)— consumes the questionnaire answers as the single source of truth about the prospect.

The questionnaire is not a marketing form. It is a clinical-grade capture instrument. Each question has a specific role in the recommendation algorithm. Removing or omitting a question would degrade the recommendation; adding an optional question that does not feed the algorithm would dilute the sense that every question matters.

## 2.2 Question taxonomy

The questionnaire is composed of three categories of questions:

**Base questions (15)** — always asked, in the same order, of every prospect regardless of prior answers:

| ID  | Topic               | Type            | Determines                                                                                                              |
|-----|---------------------|-----------------|---------------------------------------------------------------------------------------------------------------------|
| Q1  | Name                | text            | First-person address throughout the copy. The first word is treated as the given name; the full string is treated as the greeting. |
| Q2  | Gender              | single-select   | Grammatical agreement of all copy with gender (Q3 options, Q13 options, summary cards). Also enables Q12b. |
| Q3  | Feeling on leaving  | single-select   | Primary emotional anchor for the language-model hook and the plan argument.                                              |
| Q4  | Objectives          | multi-select (max 2) | Selects the Block 01 subgroup, the Block 02 subgroup, the Block 03 class-ranking weights, and the narrative arc of the ideal experience. The first selection (`Q4[0]`) is the *primary objective* and drives all single-choice resolutions. The second selection is a *secondary objective* used only to diversify the class ranking. Also enables Q17, Q18, Q19. |
| Q5  | Pace                | single-select   | Captured for the advisor brief as the prospect's preferred training intensity. Like Q7/Q8, it does not strictly filter the catalog or change the deterministic block selection; the advisor reconciles the intensity preference during the visit. |
| Q6  | Mode                | single-select   | Top-level switch between the dry-floor and aquatic catalogs. "En la alberca" activates aquatic Blocks 01 and 02; "Ambas" keeps the dry blocks but adds an aquatic note; "Lo que mi entrenador recomiende" defers to the resolver's default based on the primary objective. |
| Q7  | Time slots          | multi-select    | Captured for the advisor brief (Availability) and passed to the language model for the intent line and the visit route. It does not strictly filter the class catalog —schedule reconciliation happens with the advisor during the visit. |
| Q8  | Days of the week    | multi-select    | Same as Q7: captured for the brief and the language model, surfaced as the prospect's stated availability. Class filtering at the schedule level is deferred to the advisor. |
| Q9  | Level               | single-select   | Filters candidate classes by allowed level: a class survives only if its set of allowed levels includes the prospect's Q9 level (the same model used in §4.4 Step 3). A "Principiante" prospect will not see a class restricted to intermediate/advanced. Determines the advisor-brief flag for "mandatory tour before the session". |
| Q10 | History             | single-select   | Determines the advisor-brief flag for first time at the gym, sedentary background, or return after a pause. Also enables Q11.   |
| Q12 | Medical conditions  | multi-select    | Strictly filters the class catalog via the contraindications matrix. (See §4.8.)                                          |
| Q13 | Accompaniment       | single-select   | Toggles Block 03 between "Clases en grupo" (accompanied) and "Personal Training" (solo). Determines the advisor flag "do not push the group-class pack". |
| Q14 | Visit               | single-select   | Determines the FitKidz messages in the report and, when it triggers Q14b, makes FitKidz a required experience amenity in club selection (§4.1). Also enables Q14b. |
| Q15 | Near what           | single-select   | Geographic anchor of the resolver: home / work / both / no preference.                                                       |
| Q16 | Where it is         | location        | Geographic input of the resolver: postal code or neighborhood name. Free text with light validation. |

**Conditional questions (6)** — asked only if a specific upstream answer triggers them:

| ID   | Trigger                                                                                       | Purpose                                                                                                   |
|------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Q11  | `Q10 === "Regreso después de una pausa"`                                                      | Duration of the pause. Determines the advisor flag "conservative first session".                            |
| Q12b | `Q2 !== "Hombre"` (that is, "Mujer" or "Prefiero no mencionarlo")                             | Pregnancy and postpartum status. Strictly filters classes with impact, abdominal work, or supine positioning. Asked of everyone except those who selected "Hombre", so that a pregnant or postpartum person who preferred not to declare their gender is still evaluated; for "Prefiero no mencionarlo" the question is shown with a neutral framing (e.g., "¿Aplica para ti embarazo o posparto reciente?"). |
| Q14b | `Q14 ∈ {"Yo y mis hijos", "La familia completa"}`                                              | Presence of children under 12. Determines the FitKidz family messages in the report and makes FitKidz a required experience amenity in club selection (§4.1). |
| Q17  | `Q4 includes "Bajar de peso"`                                                                 | Active weight-loss treatments (GLP-1, bariatric surgery, nutritional support, other, none). Determines the GLP-1 priority rule, the strict bariatric filter, and the open advisor-review message. |
| Q18  | `Q4 includes "Bajar de peso"`                                                                 | Current physical data (weight, height, waist). Captured for the advisor brief; not used by the resolver. |
| Q19  | `Q4 includes "Bajar de peso"`                                                                 | Weight-change goal (range, in single-select options). Captured for the advisor brief; not used by the resolver. |

**Post-questionnaire capture (3 fields, one screen)** — captured after the recommendation is shown, before the calendar:

| Field      | Validation                                  | Purpose                                                                                |
|------------|---------------------------------------------|----------------------------------------------------------------------------------------|
| `lastName` | `trim().length >= 2`                        | Concatenated with Q1 to render the full name in the advisor brief.                     |
| `phone`    | `replace(/\D/g, "").length === 10` (MX)     | Contact channel for the advisor; rendered with `XX XXXX XXXX` formatting.                 |
| `email`    | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`              | Secondary contact channel and the identifier used by the CRM integration.              |

These three fields are not part of the questionnaire because they do not influence the recommendation. They are requested at the exact moment the prospect expresses the intent to schedule a visit, which is the precise moment they have a reason to share contact data.

## 2.3 Question types and validation rules

The questionnaire engine supports six input types:
- **text** — single-line free text. Used for Q1 (name) and the `colonia` part of Q16. Validation: `trim().length >= 1`. Auto-focus on render. Submit with Enter.
- **single-select** — radio buttons rendered as large touch-friendly cards. Used for Q2, Q3, Q5, Q6, Q9, Q10, Q11, Q12b, Q13, Q14, Q14b, Q15, Q19. Validation: one option selected. Auto-advance on selection is *disabled* —the prospect must explicitly tap "Siguiente". This is intentional: it prevents accidental advancement from mistaps on medical questions and keeps the pacing consistent throughout the questionnaire.
- **multi-select** — checkbox-style cards. Used for Q4, Q7, Q8, Q12, Q17. Q4 has a strict limit of 2 selections (the third tap deselects the first); the limit is enforced visually (a third option is disabled when 2 are chosen) and on submit. Validation: at least one option selected. "Siguiente" becomes enabled once the minimum is reached.
- **days** — a custom chip-style multi-select for the days of the week (Q8). Same semantics as multi-select but rendered as compact pills with the day's letter.
- **location** — Q16 only. Two input modes: postal code (5 numeric digits) or neighborhood (free text with at least 3 characters). The prospect fills in one; the resolver tolerates either. Validation: at least one of the two has a value that passes its minimum-length check.
- **physical** — Q18 only. Three numeric inputs (weight in kg, height in cm, waist in cm). Validation: all three are numeric and within plausible ranges (weight 30–250 kg; height 100–230 cm; waist 40–200 cm). Out-of-range inputs render an inline error and block submission.

Error messages are always specific and actionable. The questionnaire never shows a generic "required field" message; it shows what is wrong and what to do.

## 2.4 The two control questions: Q4 and Q6

Two questions have an outsized influence on resolution: **Q4 (objectives)** and **Q6 (mode)**. They are the only questions that change the *structure* of the recommendation rather than its parameters.

**Q4 is the primary control question.** The first selected objective (`Q4[0]`) drives:
- Which Block 01 subgroup is selected (1 of 6 options per mode).
- Which Block 02 subgroup, machine, and intensity profile is selected.
- The Block 03 class-ranking weights.
- The narrative arc of the language-model copy (hook, plan argument, intent line).
- Whether Q17, Q18, and Q19 are enabled (triggered only when "Bajar de peso" is selected).

The contraindications matrix is *not* modulated by the objective: per §4.8, the condition filters (class × condition, objective-independent) and the objective only scores the surviving classes (§4.4). The primary objective therefore governs block and class selection and scoring, never the clinical filter.

The second selection (`Q4[1]`), if present, has a more limited role: it acts as a tiebreaker in the class ranking and is mentioned in the language-model copy as a secondary motivator. It does *not* change the Block 01 or Block 02 subgroup —these are chosen deterministically from `Q4[0]`.

**Q6 is the structural switch.** It determines whether the prospect receives the dry-floor catalog (Block 01 with weights, Block 02 with cardio machines) or the aquatic catalog (Block 01 with water resistance, Block 02 with pool cardio). The four Q6 options resolve as follows:
- **"En piso / área seca"** — exclusively the dry catalog. Aquatic blocks are not shown.
- **"En la alberca"** — exclusively the aquatic catalog. Dry blocks are not shown. The special case "Aumentar masa muscular" + "En la alberca" forces a hybrid recommendation: aquatic Block 01 shows "Fuerza combinada: agua y gimnasio" with an explicit note that the bulk of muscle growth happens on the dry floor; the resolver additionally adds a `dry_floor_required` flag to the advisor brief.
- **"Ambas"** — the dry catalog with a note added to the language-model copy mentioning the aquatic options as a complement. The prospect sees dry Blocks 01 and 02 plus an aquatic-alternative line in Block 02.
- **"Lo que mi entrenador recomiende"** — defers to the resolver's default based on the primary objective. For "Recuperarme de una lesión o dolor crónico" and "Mejorar mi salud cardiovascular", the resolver chooses aquatic; for all other objectives it chooses dry. The prospect sees a single catalog and is not informed of the deferral in the user-facing copy; the advisor brief notes "Modo de entrenamiento decidido por el sistema: {mode}".

**Resolved training mode (the value on which every downstream rule depends).** The mode is **aquatic** when Q6 = "En la alberca", *or* when Q6 = "Lo que mi entrenador recomiende" and Q4[0] ∈ {"Recuperarme de una lesión o dolor crónico", "Mejorar mi salud cardiovascular"}. It is **dry** in all other cases ("En piso / área seca", "Ambas", and the dry objectives deferred to the trainer). Every rule depends on this **resolved mode**, not on the raw Q6 string: the Block 01/02 catalog switch, the class mode filter, the aquatic override, and the marking of the pool as a required experience amenity. As a result, the trainer-deferred aquatic path behaves exactly like an explicit "En la alberca" choice, including making the pool a required amenity in club selection. ("Ambas" remains dry with an aquatic note and does not make the pool required.)

---

# 3 · Dynamic menus and conditional branching

## 3.1 Branching rules

The questionnaire engine evaluates each question's enablement condition at render time. If the condition is false, the question is skipped entirely and the engine advances to the next question. This is not a "hidden but submitted" pattern —the skipped question's answer is `undefined`, and downstream code must treat it as such.

The six enablement conditions are evaluated as follows:
```
Q11  shows when answers.Q10 === "Regreso después de una pausa"
Q12b shows when answers.Q2 !== "Hombre"      // Mujer or "Prefiero no mencionarlo"
Q14b shows when answers.Q14 === "Yo y mis hijos" || answers.Q14 === "La familia completa"
Q17  shows when (answers.Q4 || []).includes("Bajar de peso")
Q18  shows when (answers.Q4 || []).includes("Bajar de peso")
Q19  shows when (answers.Q4 || []).includes("Bajar de peso")
```

When the prospect navigates back and changes an upstream answer that no longer triggers a downstream conditional, the downstream answer is preserved in state but ignored on submit. Example: the prospect answers Q10 = "pause", advances to Q11, answers "Más de un año", then returns to Q10 and changes to "I'm coming from another gym". The Q11 answer ("Más de un año") is preserved in state but is not passed to the resolver or shown in the advisor brief. If Q10 is changed back to "pause", Q11 is asked again with the previous value pre-selected.

## 3.2 Dynamic gender conjugation of the copy (Q2)

Grammatical agreement in Spanish is applied throughout the questionnaire and the result screens. The prospect's gender (Q2) drives the conjugation of several option strings and the greeting on the later screens:

| Source                 | Hombre                                          | Mujer                                          | Prefiero no mencionarlo                         |
|------------------------|-------------------------------------------------|------------------------------------------------|-------------------------------------------------|
| Q3 option 1            | Desconectado del trabajo y la rutina            | Desconectada del trabajo y la rutina           | Desconectado/a del trabajo y la rutina          |
| Q3 option 2            | Renovado y de buen ánimo                        | Renovada y de buen ánimo                       | Renovado/a y de buen ánimo                      |
| Q3 option 4            | Confiado en que mi cuerpo no me va a fallar     | Confiada en que mi cuerpo no me va a fallar    | Confiado/a en que mi cuerpo no me va a fallar   |
| Q3 option 5            | Más a gusto conmigo mismo                       | Más a gusto conmigo misma                      | Más a gusto conmigo mismo/a                     |
| Q13 option 1           | Solo, a mi ritmo                                | Sola, a mi ritmo                               | Solo/a, a mi ritmo                              |
| Q13 option 2           | Acompañado, en clases o grupo                   | Acompañada, en clases o grupo                  | Acompañado/a, en clases o grupo                 |
| Q14 option 1           | Solo                                            | Sola                                           | Solo/a                                          |

When the prospect selects "Prefiero no mencionarlo", each gender-declined word uses the dual ending **o/a** (e.g., "bienvenido/a", "desconectado/a"). This keeps the copy inclusive without assuming a gender, and is visible to the prospect through the rendered options. The routing logic never matches on the conjugated string —it relies on a gender-neutral option key (see §4.4 and §4.6).

Beyond the questionnaire, the result screen and the advisor brief use the *given name* extracted from Q1 (`Q1.split(" ")[0]`) for the greeting and the emotional anchoring. The advisor brief uses the *concatenated full name* (`Q1 + " " + contact.lastName`) for the formal header.

## 3.3 Dynamic Q4 option limit

Q4 allows up to two selections. The UI enforces this limit reactively:
- With 0 selections: all options enabled, "Siguiente" disabled with the helper "Selecciona al menos uno".
- With 1 selection: all options enabled, "Siguiente" enabled, helper hidden, the selected option marked visually as "Objetivo principal".
- With 2 selections: the *unselected* options are disabled (dimmed, non-touchable), "Siguiente" enabled, helper shown "Has elegido tus 2 objetivos; toca uno seleccionado para cambiarlo".
- On tapping a third option (which is disabled): no action; the helper is briefly emphasized.
- On tapping an already-selected option: that option is deselected, freeing capacity.

The selection order is preserved: the first tap becomes `Q4[0]` (primary), the second becomes `Q4[1]` (secondary). The prospect can swap by deselecting and reselecting.

## 3.4 Dynamic resolver from Q15 + Q16 + ideal experience

The club resolver is deterministic and computes its result without any user-facing latency beyond data retrieval. It takes the prospect's location plus a computed description of the **ideal experience**, and applies a radius-based decision tree whose priority is to deliver the ideal experience over minimizing distance. The resolver operates on the snapshot of club and class data described in §5 —live for the volatile portions (operational status, class availability and schedule), periodic for the stable portions (directory baseline, amenity flags).

The ideal experience has two computed parts:
1. **Ideal classes** (`preferClasses`) — the set of classes aligned with the prospect's Q4 objectives, computed before choosing the club (see §4.4). A club "meets" the class side of the experience when it offers at least one of these.
2. **Experience amenities** — at most two, each required only under its trigger: **pool** (when the resolved training mode is aquatic, §2.4) and **FitKidz** (when Q14 ∈ {family} and Q14b = "Sí"). The questionnaire does not ask about anything else amenity-related, so no other amenity can ever be a requirement.

The full "meets the experience" test, the radius decision tree, its four resolution modes, the override behavior, and the resulting copy are specified in §4.1.

---

# 4 · Business rules

This section enumerates every business rule that affects the recommendation, the user-facing copy, the advisor brief, or the state machine. The rules are grouped by the layer at which they apply. Each rule is described with its trigger, its mechanism, and its observable effect.

## 4.1 Club resolution rule — radius decision tree with experience priority

**Trigger:** the prospect submits the final question of the questionnaire. The loading phase begins with the message "Buscando tu club ideal".

**Priority principle: the ideal experience wins over proximity.** The system does not simply pick the closest club. It picks the club that delivers the prospect's ideal experience, and uses distance only as a tiebreaker or when no nearby club qualifies.

**What "meets the experience" means.** A club meets the prospect's ideal experience when it satisfies both:
- **Class side:** it offers **at least one** of the prospect's ideal classes (`preferClasses`, the set computed from Q4 —see §4.4). When the prospect trains alone (no group classes), this condition is satisfied vacuously.
- **Amenity side:** it has **all** of the required experience amenities. There are only two, each required only under its trigger: **pool** (required when the resolved training mode is aquatic, §2.4) and **FitKidz** (required when Q14 ∈ {family} and Q14b = "Sí").

These two amenities are not blind filters that silently discard clubs. They are part of the "meets the experience" test within the radius tree, which is designed to make the trade-off explicit to the prospect: offer the qualifying club, explain the distance, and still show nearby non-qualifying clubs as alternatives. No other amenity is ever a requirement.

**Step 0 — Compute the ideal experience.** Before touching the catalog, the system computes `preferClasses` (the ideal classes, §4.4) and the required experience amenities (pool and/or FitKidz, per the triggers above).

**Step 1 — Geocode the location** (Q16) into anchor coordinates via the four-level lookup (direct postal code → neighborhood synonym → fuzzy neighborhood → centroid fallback).

**Step 2 — Score all clubs by distance** from the anchor, and tag each club with whether it meets the experience.

**Step 3 — Apply the radius decision tree.** The base radius is **10 km**.
```
inRadius      = clubs within 10 km, sorted by distance
meetingInRadius = inRadius clubs that meet the experience

CASE (a) — two or more clubs in 10 km meet the experience:
    → distance decides among them. Pick the closest qualifying club.
    → mode = "multiple_meet"

CASE (b) — exactly one club in 10 km meets the experience:
    → offer that club, even if it is not the closest club overall.
    → the prospect may still switch to another club from the alternatives,
      but switching to a non-qualifying club shows a note that it does
      not include all the ideal classes (the switch is allowed).
    → mode = "single_meets"

CASE (c) — no club in 10 km meets the experience:
    → expand the radius (20 km, 30 km, … unbounded) until a club meets it.
    → offer that farther qualifying club FIRST, and flag the distance.
    → also append up to the 3 closest clubs within the original 10 km as
      alternatives, each flagged as NOT including the ideal classes/amenities.
      If fewer than 3 (including zero) exist within the original radius,
      append however many do exist; the panel may therefore show 0–3 alternatives.
    → mode = "expanded_radius"

CASE (d) — no club anywhere meets the experience (e.g., a required amenity
           does not exist at any reachable club, or the ideal class exists
           nowhere):
    → fall back to the closest club overall and flag partial fit.
    → mode = "none_meet"
```

**Effect on the report.** The club card's "Por qué lo recomendamos" copy and an optional amber experience note adapt to the resolved mode:
- **`multiple_meet`** — "tiene las clases ideales para tu objetivo y es el más cercano de los que las ofrecen." No note.
- **`single_meets`** — "es el club cerca de ti que reúne las clases ideales para tu objetivo." No note.
- **`expanded_radius`** — "es el club que sí reúne las clases ideales para tu objetivo." Amber note: "Está un poco más lejos que otras opciones, pero es el más cercano que ofrece las clases ideales para tu objetivo. Abajo te dejamos también los clubes más cercanos a ti."
- **`none_meet`** — "es el club más cercano a tu ubicación." Amber note: "Ningún club cercano reúne todas las clases ideales para tu objetivo. Tu Advisor te ayuda a armar la mejor experiencia posible aquí en la visita guiada."

**The alternatives panel.** Each club in "Ver otros clubes cerca de ti" carries a `meetsExperience` flag. Clubs that do not meet the experience render a small amber subline: "No incluye todas las clases ideales para tu objetivo." This makes the trade-off explicit at the moment of choosing.

**User override and re-resolution.** When the prospect chooses an alternative club, the system recomputes the three training blocks against the chosen club's catalog and re-runs the class ranker. It also re-evaluates whether the chosen club meets the experience:
- **`override_meets`** — the chosen club does meet the experience; the why copy becomes "lo elegiste y reúne las clases ideales para tu objetivo."
- **`override_partial`** — the chosen club does not meet the experience; an amber note appears: "Este club no incluye todas las clases ideales para tu objetivo. Aun así puedes entrenar aquí; tu Advisor te ayuda a ajustar tu experiencia en la visita." The switch is always allowed.

The language model is **not** called again on override —its copy does not depend on the specific club beyond the club's name and address.

**Distance flagging.** Regardless of the mode, if the resolved club exceeds 50 km, a `tooFar` flag is set and a note invites the prospect to reconsider the alternatives.

## 4.2 Block 01 selection rule

**Trigger:** the questionnaire is complete.

**Mechanism:** the block selector takes `Q4[0]` and the resolved training mode (§2.4). It chooses one of 12 catalog entries —six dry-floor subgroups for weight training, six aquatic subgroups for water-resistance training.

**Dry-floor subgroups (when the resolved training mode is dry —§2.4):**

| Q4[0]                                                  | Subgroup name                                  |
|--------------------------------------------------------|------------------------------------------------|
| Bajar de peso                                          | Fuerza integral con pesas                      |
| Mejorar mi estética corporal y definición muscular     | Rutina por grupos musculares                   |
| Aumentar masa muscular                                 | Desarrollo muscular progresivo                 |
| Mejorar mi desempeño atlético                          | Potencia y velocidad                           |
| Mejorar mi salud cardiovascular                        | Fuerza de mantenimiento                        |
| Recuperarme de una lesión o dolor crónico              | Fuerza guiada en máquinas                      |

**Aquatic subgroups (when the resolved training mode is aquatic —§2.4):**

| Q4[0]                                                  | Subgroup name                                       |
|--------------------------------------------------------|-----------------------------------------------------|
| Bajar de peso                                          | Trote acuático por intervalos                       |
| Mejorar mi estética corporal y definición muscular     | Fuerza acuática con equipo                          |
| Aumentar masa muscular                                 | Fuerza combinada: agua y gimnasio                   |
| Mejorar mi desempeño atlético                          | Potencia y velocidad acuática                       |
| Mejorar mi salud cardiovascular                        | Nado continuo moderado                              |
| Recuperarme de una lesión o dolor crónico              | Movilidad y recuperación acuática                   |

**Effect:** the name of the selected subgroup is rendered as the h3 of the Block 01 plan card on the result screen (page 2). A `why_template` accompanies the subgroup, written in plain Spanish and never containing technical jargon such as "hipertrofia", "Zone 2", "HIIT", "VO2max", "plyometría", "RPE", "1RM", or "FCmax". The card also exposes a "Ver más →" link reserved for future expansion (currently inert).

**Edge case "Aumentar masa muscular" + aquatic mode:** the subgroup "Fuerza combinada: agua y gimnasio" is the only Block 01 subgroup that explicitly *requires* a complementary dry-floor session. The `why_template` for this case states: "El agua no permite cargar suficiente peso para hacer crecer músculo de forma significativa. Si tu objetivo principal es ganar músculo, tu rutina combina alberca con días en piso. Tu entrenador define el balance." The advisor brief makes it visible as a flag: "Combo Aumentar masa + Alberca: requerirá sesiones híbridas; validar disposición a usar piso seco."

## 4.3 Block 02 selection rule

**Trigger:** the questionnaire is complete.

**Mechanism:** structure identical to Block 01 —6 dry subgroups, 6 aquatic subgroups, selected by `Q4[0]` and the resolved training mode (§2.4).

**Dry-floor cardio subgroups:**

| Q4[0]                                                  | Subgroup name                                  | Machines                                              | Duration       |
|--------------------------------------------------------|------------------------------------------------|-------------------------------------------------------|----------------|
| Bajar de peso                                          | Cardio continuo moderado                       | Caminadora, bicicleta o elíptica                      | 35 a 45 min    |
| Mejorar mi estética corporal y definición muscular     | Cardio moderado con intervalos                 | Caminadora, bicicleta o elíptica                      | 25 a 35 min    |
| Aumentar masa muscular                                 | Cardio ligero de mantenimiento                 | Caminadora suave o bicicleta                          | 15 a 25 min    |
| Mejorar mi desempeño atlético                          | Intervalos de alta intensidad                  | Bicicleta, remo o caminadora                          | 30 a 40 min    |
| Mejorar mi salud cardiovascular                        | Base aeróbica de ritmo sostenido               | Caminadora, bicicleta, elíptica o remo                | 35 a 45 min    |
| Recuperarme de una lesión o dolor crónico              | Recuperación activa de bajo impacto            | Bicicleta reclinada, elíptica o caminadora muy suave  | 15 a 25 min    |

**The aquatic cardio subgroups** are determined by the same Q4[0] axis but use pool-based modalities and durations. When the resolved training mode is aquatic and Q4[0] = "Aumentar masa muscular", the Block 02 card includes an `alternativa_acuatica` line with a red border: "Sesión acuática corta para recuperación activa y no comprometer el trabajo de fuerza", and the h3 reflects a shorter aquatic protocol.

**Effect:** the Block 02 plan card on page 2 of the result screen renders the subgroup name as the h3, the machine + duration + when as the subline, the `why` as the body paragraph, and (if present) the `alternativa_acuatica` as the red-bordered emphasis line. The prospect never sees raw numeric training targets such as heart-rate percentages or repetition maximums.

## 4.4 Class selection rule (group classes) — decision tree

**Trigger:** the questionnaire is complete *and* the prospect wants group classes —that is, Q13 resolves to the **group** option (option 2) regardless of its gender conjugation (`Acompañado` / `Acompañada` / `Acompañado/a`, en clases o grupo), or Q13 = "Me da igual". The routing compares the gender-neutral option key, not the displayed conjugated string. If the prospect chose the solo option, this rule does not run and Block 03 becomes Personal Training (§4.6).

The class ranker runs **twice** in the lifecycle, with distinct purposes:
- **First run — during club resolution (preferred-classes pre-check, §4.1 Step 0).** Here the ranker logic computes the set of classes the prospect *would ideally receive*, across the entire catalog, to bias club selection toward a club that actually offers them. This is the verification that the ideal classes are available before fixing the club.
- **Second run — after choosing the club (final ranking, this section).** Here the ranker computes the top 2 actual classes from the chosen club's real catalog.

The decision tree for the final ranking has five sequential filters followed by a scoring step:

**Step 1 — Catalog intersection (availability).**
```
inCatalog = every class in the master class catalog
            that is actually offered at the resolved primary club
```
Only classes the club genuinely offers survive. This is the strict availability gate.

**Step 2 — Mode filter (resolved mode, §2.4).**
```
if resolved mode == aquatic:   keep only aquatic classes
if resolved mode == dry:       keep only dry classes
(Ambas keeps dry classes plus the aquatic note; see §2.4)
```

**Step 3 — Level filter (Q9).**
```
keep only classes whose permitted levels include the prospect's Q9 level
```
A "Principiante" prospect never sees a class restricted to intermediate/advanced.

**Step 4 — Contraindications filter (Q12, Q12b, Q17).**
```
activeContra = active contraindication keys derived from the medical answers
keep only classes that are NOT contraindicated under any active key
```
This is the strict YMYL filter. Removed classes never appear and are never named to the prospect.

**Step 5 — Score against the objectives matrix (Q4) and discard the disqualified.**
```
for each surviving class:
    score = 0
    disqualified = false
    for each selected objective in Q4:
        rating = class.profiles[objective]      // "top3" | "apto" | "no apto" | undefined
        if rating == "top3":  score += 3
        if rating == "apto":  score += 1
        if rating == "no apto": disqualified = true   // veto against this class
    keep the class only if (NOT disqualified) AND (score > 0)
```
A single "no apto" rating against **any** selected objective vetoes the class entirely, no matter how well it scores for the other objective. This guarantees that the prospect is never shown a class that actively conflicts with one of their stated goals.

**Step 5b — Apply the GLP-1 score adjustment (only if active).** When the prospect is on GLP-1 treatment (Q17), the score computed in Step 5 receives the strength-priority adjustment defined in §4.9 (a bonus to strength-oriented classes and a penalty to high-intensity endurance classes), so that the top 2 shown reflect the clinical guidance of preserving muscle mass. This is the *only* score adjustment outside the objectives matrix, and its full specification —including the exact class lists and point values— lives in §4.9 to keep the clinical rationale in one place. When the prospect is not on GLP-1 treatment, this step is a no-op.

**Step 6 — Sort and section.**
```
sort surviving classes by score descending, then alphabetically by display name
top2     = the first 2
tambien  = the next 3 (positions 3–5), used in the "Ver todas" / alternatives panel
```

**Effect:** the Block 03 plan card on page 2 of the result screen renders the outcome:
- **`top2.length === 2`** — both classes shown with display name, the language-model connector ("Porque buscas…") and a `why` description. Below: "Cambiar mis clases →" (opens the alternatives selector, populated from `tambien` plus the rest of the compatible set) and "Ver todas las del club →" (opens the full catalog browser).
- **`top2.length === 1`** — the single class shown, the alternatives selector still available.
- **`top2.length === 0`** — the fallback: "No encontramos clases en este club que encajen con tu objetivo y nivel. Considera Personal Training o explora otros clubes cerca." with a red "Conoce Personal Training →" button. This state occurs when the club's catalog, after all filters, contains no class that both avoids the "no apto" veto and scores above zero for the prospect's objectives.

**Why the two-run design matters.** Because the preferred-classes pre-check (§4.1) biases club selection toward clubs that offer aligned classes, the final ranking usually finds at least two strong matches. The empty fallback is therefore rare in practice —it appears mainly when the closest club within the distance tolerance has a sparse catalog for the prospect's specific objective, or when the contraindications filter removed everything compatible. In both cases, routing the prospect to Personal Training is the correct and safe outcome.

## 4.5 Aquatic mode override rule (Q6)

**Trigger:** the resolved training mode is aquatic (§2.4) —that is, `Q6 === "En la alberca"`, or `Q6 === "Lo que mi entrenador recomiende"` with Q4[0] ∈ {injury, cardiovascular health}.

**Mechanism:** Block 01 switches from dry to aquatic (§4.2), Block 02 switches from cardio machines to pool cardio (§4.3), and the class ranker keeps only the aquatic classes from the chosen club's catalog. The pool is not a blind filter: as a required experience amenity it biases club selection toward a club with a pool (§4.1), while clubs without one remain visible as flagged alternatives. The block resolver then verifies whether the resolved club actually has a pool:
```
if resolved mode == aquatic:
    if the resolved club has a pool:
        block1 = aquatic Block 01 for the primary objective
        block2 = aquatic Block 02 for the primary objective
    else:
        block1 = dry Block 01 for the primary objective
        block2 = dry Block 02 for the primary objective
        alberca_note = "Este club no tiene alberca. Revisa otros clubes cerca de ti
                        — varios sí ofrecen entrenamiento acuático."
```

**Effect:** when the resolved club has a pool, the prospect sees a fully aquatic recommendation and the advisor-brief header includes the chip "Preferencia: alberca". When the resolved club has no pool, the prospect sees dry-floor blocks plus the `alberca_note` inviting them to consider nearby clubs with a pool. The "Aumentar masa muscular" + aquatic hybrid applies only when the club has a pool.

## 4.6 Solo mode override rule (Q13)

**Trigger:** Q13 resolves to the **solo** option (option 1) regardless of its gender conjugation (`Solo` / `Sola` / `Solo/a`, a mi ritmo). The routing compares the gender-neutral option key, not the displayed conjugated string.

**Mechanism:** Block 03 (group classes) is replaced by a Personal Training card. The class ranker is skipped entirely; `top2 = []` and `showBlock3 = false`.

**Effect:** the Block 03 space is rendered as a dark card titled "Personal Training" with the copy "Decidiste entrenar a tu ritmo, sin clases grupales. Personal Training te asigna un entrenador dedicado en tus horarios." and a red "Conoce Personal Training →" button. The advisor brief receives the flag "Lead busca formato individual. No presionar venta de pack de clases grupales."

When `Q13 === "Me da igual"`, the engine defaults to group classes (showBlock3 = true). The advisor brief notes "Acompañamiento abierto; explorar ambos formatos en la visita."

## 4.7 FitKidz availability rule

**Trigger:** `Q14 ∈ {"Yo y mis hijos", "La familia completa"}` *and* `Q14b === "Sí"`.

**Mechanism:** the trigger determines the FitKidz *messages* in the report and makes FitKidz a required experience amenity that biases club selection toward a club that offers it (§4.1). As with the pool, this is not a blind filter —clubs without FitKidz remain visible as flagged alternatives, and the prospect can still choose one. The two-column section of the result screen renders the Family Benefit card based on whether the resolved club offers FitKidz.

**Effect, three states:**
- **State A — the resolved club offers FitKidz and has documented children's classes** (30 clubs): the Family Benefit card renders the count of children's activities and up to 6 chips with the activity names ("Iniciación deportiva", "Danza", "Arte", etc.).
- **State B — the resolved club offers FitKidz but the children's class catalog is empty or incomplete** (10 clubs: `pedregal`, `felix-cuevas`, `miguel-angel-de-quevedo`, `san-jeronimo`, `zona-esmeralda`, `san-pedro`, `puebla`, `bernardo-quintana`, `esfera-queretaro`, `culiacan`): the Family Benefit card renders generic copy "Este club ofrece FitKidz. Tu Advisor te compartirá el detalle de actividades y horarios disponibles para tus hijos en tu visita guiada." No chips.
- **State C — the resolved club does not offer FitKidz**: the Family Benefit card renders a gray fallback "Este club no ofrece FitKidz. Otros clubes cerca de ti sí lo tienen — revisa la lista de otros clubes."

When the trigger is not met (individual prospect, couple, or family without children under 12), the Family Benefit card is not rendered. The Club card occupies the full width of the two-column section.

## 4.8 Strict contraindications filter rule

**Trigger:** the prospect has declared one or more medical conditions or active treatments via Q12, Q12b, or Q17.

**Mechanism:** the contraindications matrix is a deterministic table of 51 group classes × 5 conditions (the **54 adult classes** in the catalog minus the 3 personal-training modalities, which are not group classes). The matrix returns true ("contraindicated") for a class-condition pair if any of these dominant indicators is present:

| Condition key      | Triggered by                                                                  | Filter behavior                                                                                                                              |
|--------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `lesion`           | `Q12` includes "Lesión o dolor articular/muscular"                            | Filters out classes with high impact, plyometric load, or unstable surfaces. 17 classes removed.                                              |
| `cardiovascular`   | `Q12` includes "Condición cardiovascular o de presión"                        | Filters out classes with sustained high-intensity intervals, supine positioning at height, or Valsalva-prone strength patterns. 14 classes removed.    |
| `embarazo`         | `Q12b === "Sí, embarazada"`                                                   | Filters out classes with impact, kicks, supine after the first trimester, and intense abdominal work. 21 classes removed.                                    |
| `posparto`         | `Q12b === "Sí, posparto reciente (últimos 6 meses)"`                          | Applies the same class filter as `embarazo` (impact, kicks, supine after the first trimester, intense abdominal work). The same 21 classes removed. The additional postpartum caution regarding high-load strength until pelvic-floor assessment is carried as an advisor-brief flag, not as a change in the class count. |
| `bariatrica`       | `Q17` includes "Cirugía bariátrica"                                           | Filters out high-impact and heavy-load classes during the first postoperative year. 16 classes removed.                                                  |

**Effect:** the filtered classes do not appear in the user-facing Block 03, nor in the alternative-class selector. The user-facing copy never mentions which classes were filtered or why —doing so would either alarm the prospect (clinical framing on a sales surface) or invite them to question the filter (defeating the purpose of YMYL compliance). The advisor-brief flag captures the active conditions and notes that the contraindicated classes are pre-filtered.

The matrix is built from professional sources (American College of Obstetricians and Gynecologists, Les Mills International, American Society for Metabolic and Bariatric Surgery, American College of Sports Medicine, Cleveland Clinic, National Academy of Sports Medicine, Mount Sinai, Heart Foundation New Zealand, Obesity Action Coalition). Each class-condition pair is internally labeled with an epistemic tag:
- `[QUOTED]` — explicit recommendation in the source material.
- `[DERIVED]` — inferred from the dominant movement category aligned with source material on similar classes.
- `[INFERRED]` — applied from fundamental physiological principles when no direct source addresses the class.

The matrix is never exposed to the prospect in any form. It is used internally for filtering and travels as advisor-brief metadata for downstream clinical validation by a sports-medicine professional.

## 4.9 GLP-1 prioritization rule (no filter, informative message)

**Trigger:** `Q17` includes "GLP-1 (Ozempic, Wegovy, Mounjaro)".

**Mechanism:** unlike the bariatric or pregnancy triggers, GLP-1 does *not* filter classes. The clinical guidance from professional sources is to *prioritize strength training* to preserve muscle mass during the catabolic state induced by GLP-1 agonists, not to restrict exercise modalities.

**Effect:** the result screen's safety section ("Antes de comenzar") uses GLP-1-specific copy:
- If GLP-1 alone: "Durante tu tratamiento con GLP-1, priorizamos clases de fuerza para preservar tu masa muscular mientras bajas grasa. Tu Advisor confirma el detalle clínico en la visita guiada."
- If GLP-1 plus another medical condition: "Tu experiencia incluye prioridad en clases de fuerza para preservar tu masa muscular durante tu tratamiento. Las clases con impacto o restricciones específicas ya están filtradas. Tu Advisor confirma el detalle en la visita guiada."

The class ranker applies a +2 bonus to strength-oriented classes (BODY PUMP, KINETIC PUMP, CX WORX, CORE) and a −1 penalty to high-intensity endurance classes (GRIT, BODY ATTACK) so that the top 2 shown reflect the strength priority. This adjustment is applied as Step 5b of the class-selection pipeline (§4.4); it is the single source of truth for the GLP-1 scoring values. The advisor brief carries the `info` severity flag "En tratamiento GLP-1. Priorizar fuerza para preservar masa muscular."

## 4.10 Open "Otra/Otro" response advisor-review rule

**Trigger:** `Q12` includes "Otra, la comento en el club" *or* `Q17` includes "Otro tratamiento médico para peso".

**Mechanism:** since the prospect has flagged an undisclosed condition or treatment, the system cannot apply a deterministic filter (the specific condition is unknown). Instead, it produces a soft advisor-review message and makes the unknown visible in the brief.

**Effect:** the safety-section copy changes to: "Mencionaste una condición o tratamiento médico. Tu experiencia ideal ya excluye las clases contraindicadas por las condiciones declaradas, y tu Advisor ajusta los protocolos de pesas y cardio individual en la visita guiada según tu criterio clínico." The advisor brief carries a `warn` severity flag "Condición no especificada declarada por el lead; capturar el detalle y validar contraindicaciones específicas antes de recomendar." This flag fires whenever "Otra/Otro" is present, regardless of which safety-section copy is ultimately rendered (see §4.12), so that the advisor never loses the undisclosed-condition signal even when a higher-precedence copy case wins the visible message.

## 4.11 Contact-capture gate rule

**Trigger:** the prospect clicks "AGENDAR VISITA GUIADA" on the result screen.

**Mechanism:** the phase transitions from `result` to `contact_capture`. The prospect is presented with a three-field form: last name, mobile number, email address. The "Continuar" button is disabled until all three pass validation.

**Per-field validation:**
- **Last name:** `trim().length >= 2`. Error message: "Ingresa tu apellido (mínimo 2 letras)".
- **Mobile number:** `replace(/\D/g, "").length === 10`. Error message: "Ingresa un número de 10 dígitos".
- **Email address:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`. Error message: "Ingresa un correo electrónico válido".

Errors are rendered below the corresponding field on blur (not on every keystroke), avoiding premature error display.

**Effect:** on successful submission, the contact object `{ lastName, phone, email }` is stored in the result state and the phase advances to `schedule`. (The CRM write itself happens one phase later, at appointment confirmation —see §5.2.) The captured data is rendered in the advisor brief in §2 "Logística y contacto". The full name (`Q1 + " " + contact.lastName`) is rendered in the brief header.

**On-screen privacy notice:** "Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros." This text is not legally binding on its own —the comprehensive privacy notice is referenced elsewhere on the site— but it is the prospect's first moment of consent.

## 4.12 Contextual safety-section copy rule

**Trigger:** always —the safety section ("Antes de comenzar") is rendered on every result screen, on page 2.

**Mechanism:** the safety body copy adapts to the prospect's medical context, evaluating five mutually exclusive cases in order (the first match wins):
1. **GLP-1 + another condition** — combined message (see §4.9).
2. **GLP-1 alone** — GLP-1-specific message (see §4.9).
3. **Undisclosed condition/treatment ("Otra/Otro")** — when Q12 includes "Otra, la comento en el club" or Q17 includes "Otro tratamiento médico para peso", the advisor-review copy from §4.10 governs and takes precedence over case 4 (checked first because the condition is unknown and cannot be filtered deterministically).
4. **Other declared medical condition (no GLP-1, not "Otra")** — "Con base en lo que compartiste, esta recomendación prioriza opciones controladas y evita actividades contraindicadas. Las clases con impacto o restricciones específicas ya están filtradas. Informa al personal del club sobre cualquier indicación de tu profesional de salud."
5. **No declared medical condition (default)** — "Con base en lo que compartiste, esta recomendación se ajusta a tu nivel y disponibilidad. Si tienes alguna indicación médica antes de comenzar, coméntala con tu Advisor en la visita guiada."

This ordering governs only the single *visible* safety message. The per-condition advisor-brief flags are independent and additive —the §4.10 "Otra/Otro" `warn` flag and the §4.9 GLP-1 `info` flag both fire when both are present, even though only one copy case wins the visible message.

**Effect:** the section is rendered with a yellow background (#FFF6E7), a circular "!" icon, the section title "Antes de comenzar", the contextual body, and a fixed disclaimer line below: "Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica." The section's visual prominence is calibrated to be noticed but not to alarm.

## 4.13 Two-page split rule (client and advisor views)

**Trigger:** always —both the result screen and the briefing screen are rendered in two visually separated pages.

**Mechanism:** within a single scrollable React component, the content is split by a dotted-border separator labeled "Página 2". In digital view, the separator is visible. In print view (`@media print`), the separator is hidden and a CSS `page-break-before: always` directive is applied to the second-page container, producing two A4 sheets.

**Client result-screen page split:**
- **Page 1:** top bar, header (eyebrow + h1 + hook + plan_argument + brand box on the right), club + family benefit in two columns, other-clubs panel (when expanded), summary cards (4 boxes), CTA row with "AGENDAR VISITA GUIADA".
- **Page 2:** section kicker "Tu combinación recomendada", three plan cards (Block 01 + Block 02 + Block 03 with colors), change-classes / all-classes panels (when expanded), amber safety section, infrastructure-argument paragraph, bottom CTA + restart, footer with fine print.

**Advisor-brief page split:**
- **Page 1:** confirmation banner for the prospect, brief header (full name + level + chips + date), §1 Lead profile (8 fields), §2 Logistics and contact (club + location + companions + phone + email).
- **Page 2:** §3 What to validate (5 language-model questions), §4 Recommended route (4 steps), §5 Recommended proposal (offer + complement), §6 Closing priorities (3 bullets), §7 Notes and flags (coded flags), Closing script (language-model script), Advisor log (4 empty boxes), INTERNAL USE Footer.

**Rationale for the client split order (Page 1 = Club first):** the prospect's first question after completing the questionnaire (15–21 questions) is "where am I going to train?" —so the Club appears immediately after the personalized header, before the profile summary or any combination detail.

## 4.14 Single LLM call rule

**Trigger:** the questionnaire is complete and the resolver has finished.

**Mechanism:** exactly one language-model call is made. The call returns a single JSON object containing both the client-facing copy and the advisor-brief content. The call is triggered one and only one time per session; the response is cached in the result state and reused between the result screen and the briefing screen.

The complete JSON output schema:
```json
{
  "hook": "string (max 30 words, 1-2 sentences)",
  "plan_argument": "string (max 45 words, why the combination fits)",
  "intent_line": "string (max 18 words, accompaniment + visit context)",
  "infrastructure_argument": "string (max 55 words, SW as 49-club network + specific club)",
  "class_1_connector": "string (max 15 words, 'Porque mencionaste que...') — omitted when no group classes",
  "class_2_connector": "string (max 15 words, different from class_1) — omitted when no group classes",
  "validation_questions": ["array of exactly 5 strings, each max 18 words"],
  "visit_route": [{"title": "string", "description": "string (max 18 words)"}, ... × 4],
  "proposal": {
    "main": "string (max 35 words)",
    "complement": "string (max 30 words)"
  },
  "closing_priorities": ["array of exactly 3 strings, each max 12 words"],
  "closing_script": "string (max 60 words, advisor first-person to the prospect)"
}
```

**Adaptive per-prospect context:** before composing the prompt, the system computes a set of flags from the questionnaire answers:
- `hasMedical` — true if any condition or treatment is declared.
- `isPregnant` / `isPostpartum` — derived from Q12b.
- `onGLP1` / `onBariatric` — derived from Q17.
- `isFamily` / `hasKids` — derived from Q14 + Q14b.
- `isSolo` — derived from Q13 (gender-neutral option key).
- `isPrincipiante` — derived from Q9.
- `fromOtherGym` / `fromPause` / `fromSedentary` — derived from Q10.
- `wantsAquatic` / `wantsDry` — derived from the resolved training mode (§2.4), so that the trainer-deferred aquatic path is labeled correctly rather than from the raw Q6 string.

When `hasMedical` is true, the prompt includes a "⚠ CONDICIONES MÉDICAS / TRATAMIENTOS DECLARADOS" block that lists the specific conditions, with an explicit reminder that the contraindicated classes are pre-filtered and that the advisor handles the individual block-protocol adjustment with clinical judgment.

**Effect:** the same JSON is consumed by two screens. The result screen reads `hook`, `plan_argument`, `intent_line`, `infrastructure_argument`, `class_1_connector`, `class_2_connector`. The briefing screen reads `validation_questions`, `visit_route`, `proposal`, `closing_priorities`, `closing_script`. No additional language-model call occurs after the initial one —the appointment selection, the contact capture, and the brief rendering all use the cached output.

**Fallback on language-model failure:** if the API call fails (network error, malformed response, validation failure), the system transitions to the `error` phase with a retry button. A successful retry lets the prospect continue normally. If retries fail repeatedly, the prospect can still continue: the result screen renders the deterministic content (blocks, club, classes, safety) and the briefing screen renders only the coded sections (header, §1, §2, §7, log, footer). The language-model-generated sections (§3–§6 and the closing script) are simply omitted, without showing any error message.

## 4.15 LLM YMYL constraints and sanitization

**Trigger:** every language-model call.

**Mechanism:** the system prompt to the language model imposes three layers of constraint:

**Layer 1 — Forbidden vocabulary.** The model must not produce any of:
- The word "plan" in any form (plan, planes, planear).
- Question codes (Q1, Q2, ..., Q19, Q12b, Q14b).
- Technical jargon: hipertrofia, Zone 2, HIIT, VO2max, plyometría, pliométrica, RPE, 1RM, FCmax, déficit calórico, canibalizar (el músculo), sustrato, concéntrica, control motor, rate of force, propiocepción, isométrica, sobrecarga progresiva, modalidades aeróbicas.
- Marketing clichés: show up, aparecer, journey, lifestyle, mindset, transformación, mejor versión de ti, atrévete, quema X calorías.

**Layer 2 — YMYL constraints.** When the prospect has any medical condition, pregnancy, postpartum status, or active treatment:
- The model must not diagnose.
- The model must not recommend specific intensities.
- The model must not suggest that the prospect "can do everything".
- The model must explicitly state that the advisor validates with clinical judgment during the visit.

**Layer 3 — Output sanitization.** Even with the prompt-level constraints, the model occasionally leaks question codes into the prose (e.g., "según mencionaste en Q4"). A recursive post-processing sanitizer walks the response object, removes any residual `Q1`–`Q19`/`Q12b`/`Q14b` patterns and the surrounding bridge words ("según Q4", "en Q4", "para Q4 → tu objetivo"), normalizes double spaces, and removes dangling punctuation. The sanitizer operates on strings, arrays, and nested objects so that no field of the JSON output escapes the cleanup.

**Approved vocabulary** (positive instructions in the prompt): construir, sostener, consolidar, mantener, recuperar, ajustar, ritmo, constancia, forma, figura, fuerza, aguante, base, experiencia, rutina, combinación, crecimiento muscular, ritmo conversacional, intervalos al máximo, técnica controlada, fuerza sostenida en posturas, conciencia corporal, saltos explosivos, cuerpo completo, centro del cuerpo, patrones de movimiento, pérdida de grasa.

**Effect:** the prospect receives copy that is warm, professional, and free of clinical-sounding terminology that would confuse a non-specialist reader or erode trust. The advisor receives content that is precise, free of marketing filler, and that explicitly defers to clinical judgment when medical context is present.

---

# 5 · Data integration and sources of truth

The experience is only as accurate as the data that backs it. The recommendation crosses the prospect's profile with two bodies of operational data —the club network and the class catalog— and writes the captured lead to the commercial system. This section specifies what data the system consumes, where each body of data originates, and which data must be live (read or written in real time) versus which can be synchronized periodically.

The system never owns the operational data. Club information, class information, and lead records all live in Sports World's systems of record. The experience reads from and writes to those systems; it does not maintain a parallel master copy that could drift out of sync with reality.

## 5.1 Data categories

There are three data categories, with distinct ownership and freshness requirements.

**Category A — Lead / contact data (written to the CRM).** This is what the experience produces: the captured lead. It includes the full name (Q1 plus the captured last name), mobile phone, email, the complete profile derived from the questionnaire (objectives, level, resolved training mode, schedule, medical-context flags), the resolved club, the recommended training combination, the generated advisor brief, and the scheduled visit (date and time). This record flows *out* of the experience and *into* Sports World's CRM as a new qualified lead.

**Category B — Club data (read from the club directory / system of record).** This is the network of 49 clubs. It includes, per club: commercial name, full address, geographic coordinates, the amenities the club offers (specifically whether it has a pool and whether it has FitKidz, the two amenities that participate in the experience), the FitKidz children's-activity catalog where applicable, the operational status (open / temporarily closed / coming soon), and the club contact data used on the confirmation screen.

**Category C — Class data (read from the class scheduling system / system of record).** This is the class catalog. It includes the master list of class disciplines, and per club: which classes that club offers, the level each class requires, and the schedule (days and slots) in which each class is offered. Class availability —whether a given class is still taught, at which times, and at which clubs— is the most volatile data in the system.

## 5.2 Real-time vs periodic

Not all data needs the same freshness. Forcing everything to real time would add cost and fragility without benefit; letting volatile data go stale would produce recommendations that send the prospect to a club for a class that no longer exists. The split:

**Must be real-time (live read or write at the moment of use):**
- **Lead / contact write (Category A).** The lead is written to the CRM in real time at the moment the visit is confirmed (the `schedule` → `briefing` transition), and that write includes the chosen appointment date and time. The contact fields are collected one phase earlier (`contact_capture`) and held in session state until then; the write is deferred to confirmation precisely because the appointment is part of the record. The write is **idempotent (create-or-update)** indexed by a per-session lead id: if the prospect returns from `briefing` to `schedule` and re-confirms a different date/time, the existing record is updated in place, never duplicated, so that there is exactly one lead in the CRM per session no matter how many times the appointment changes. A deferred or batched write would risk losing the lead or leaving the advisor without a brief.
- **Club operational status (Category B).** Whether a club is open, temporarily closed, or not yet operating must be live. Recommending a closed club is a serious failure visible to the prospect. The resolver must not offer a club that is not currently operating.
- **Class availability and schedule (Category C).** Whether a class is still taught, on which days, in which slots, and at which clubs must be live at the moment the class ranker runs. A recommendation built on a stale schedule sends the prospect to a class that may have been canceled or rescheduled —the most damaging stale-data failure, because it manifests as a broken promise during the visit.

**Can be periodic (synchronized on a schedule, not per request):**
- **Club directory baseline (Category B).** Commercial names, addresses, coordinates, and the amenity flags (pool, FitKidz) rarely change. A club neither gains nor loses a pool between two sessions.
- **FitKidz children's-activity catalog (Category B).** The specific list of children's activities per club changes infrequently and can be synchronized periodically. (Where this catalog is incomplete for a club, the experience already degrades gracefully to a generic FitKidz message and defers the detail to the advisor.)
- **Master class catalog and per-class metadata (Category C).** The list of disciplines and the level each requires are stable. What changes often is *where and when* each is taught —and that volatile portion (availability and schedule) is the real-time portion above.

## 5.3 Implications for the recommendation flow

The resolver and the class ranker operate on a consistent snapshot of club and class data assembled at the moment the prospect completes the questionnaire. The real-time portions (operational status, class availability, schedule) must reflect the live state at that moment; the periodic portions (directory baseline, amenity flags, class metadata) may come from the most recent synchronization.

Concretely, this means:
- The club resolution decision tree (§4.1) must exclude clubs that are not currently operating, using live operational-status data.
- The class ranker's catalog-intersection filter (§4.4, Step 1) must reflect live class availability for the resolved club. A class that has been canceled or is no longer offered must not surface as ideal. This live filter is about the *class's own operational status* (canceled, discontinued, not currently scheduled) —**not** about whether the class schedule matches the prospect's stated availability (Q7/Q8). Per §2.2 and §4.4, Q7/Q8 are captured for the advisor brief and never strictly filter the catalog; schedule reconciliation against the prospect's availability happens with the advisor during the visit.
- The lead write must complete at appointment confirmation (the `schedule` → `briefing` transition), before the confirmation screen is shown, so that the complete lead record is in the CRM the instant the visit is scheduled. If the appointment is modified later in the same session, the same record is updated (§5.2).

## 5.4 Open dependencies

The precise systems of record, their access methods, and their data contracts are owned by Sports World and are not defined in this document. To make the real-time portions of this specification operational, Sports World's technical team must provide:
- The CRM system and the write contract for creating (or updating) a qualified lead —which fields, in what format, to what destination— where the update path supports the idempotent re-confirmation described in §5.2.
- The club-directory system of record and how live operational status is exposed.
- The class-scheduling system of record and how live class availability and schedule are exposed.

Until those contracts are defined, the experience operates against a synchronized snapshot of club and class data. The architecture is designed so that replacing the snapshot with live reads requires changing only the data layer, not the recommendation logic: the resolver, the block selector, and the class ranker consume the same data shape regardless of whether it arrived live or via periodic synchronization.

---

This document defines the complete navigation model, the role of the questionnaire as the sole source of personalization, the dynamic-menu and conditional-branching rules, and the business rules that govern the experience from `welcome` to `briefing`. Every rule is observable in the rendered product. Every rule has a deterministic trigger and a deterministic effect. There are no hidden states, no implicit defaults that contradict the documented behavior, and no overrides outside the rules described here. This document is the authoritative specification of the experience.
