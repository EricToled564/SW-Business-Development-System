# Sports World México · Experience Architecture · V1.0
## Navigation, Questionnaire, Dynamic Menus & Business Rules

Foundational document. It defines, on its own and in normative terms, why the *experiencia ideal* exists, how it is navigated, the role of the questionnaire as the single source of personalization, how the dynamic menus work, and every business rule that governs the user experience from end to end. It is one of the pillars of the UX specs set: the site it lives inside is described in `02-site-architecture.md`, and the technology, build, and operation around it in `03`–`05`.

---

# 0 · Objectives

## 0.0 Why this project exists

Sports World operates a premium physical network — 49 clubs across México — but its digital presence does not reflect the scale of that infrastructure. The brand is found by people who already know it, and missed by people who don't. People searching for a generic fitness solution that Sports World genuinely offers rarely discover it, because Sports World does not appear in those searches. The result is a steady loss of new customers at the exact moment they are looking to enroll.

This page — the *experiencia ideal* — exists to close that gap at the point of decision. Its purpose is to convert demand that does reach Sports World into qualified, scheduled visits: to take a prospect who arrives looking for a solution, understand what they actually want, place them in the right club with the right training combination, and hand a complete brief to the advisor who will close the visit. The page is the conversion surface — the place where search visibility becomes booked visits.

## 0.1 The three key lead blockers

The first SEO audit identified three concrete ways Sports World loses a prospect who is ready to enroll today. Each is a real intent that Sports World can satisfy physically but fails to capture digitally. The *experiencia ideal* is designed as the direct answer to all three.

**Blocker 1 — The ignored vertical (weight loss).** A prospect searches "gimnasio para perder peso" — the highest-volume intent in the México fitness industry — and Sports World appears in a tiny fraction of those searches. The prospect goes to a competitor because, digitally, nothing told them Sports World could help. The *experiencia ideal* answers this directly: weight loss is a first-class functional objective with its own dedicated questionnaire branch, treatment-aware handling, and a tailored recommendation — so a prospect with this intent receives a concrete, personalized path instead of silence.

**Blocker 2 — The unattended demand (amenities and disciplines).** A prospect searches "yoga cerca de mí" and, although Sports World has premium yoga instructors and studios, it falls outside the top results, so the prospect ends up at a boutique studio. The same pattern repeats across functional training, martial arts, and other disciplines that Sports World offers but does not surface. The *experiencia ideal* answers this by crossing the prospect's stated objective with the real class catalog of each club, so that a discipline Sports World actually offers becomes a visible, recommended part of the ideal experience instead of an invisible capability.

**Blocker 3 — The extra-click labyrinth (geographic intent).** A prospect searches "gimnasio cerca de mí" and, instead of being taken to their nearest club, lands on a generic homepage. Every additional click costs retention, and Sports World wins the click but loses the visit to exhaustion. The *experiencia ideal* answers this by resolving the prospect directly to a specific recommended club based on their location, and routing them straight to a concrete next step — the guided visit — collapsing the labyrinth into a single, personalized path.

## 0.2 User objectives

The experience personalizes around the user's own objectives, and those objectives are not open-ended: they are bounded by the answer options of two questionnaire questions. Each user has exactly **five emotional objectives** and exactly **six functional objectives**. Nothing the user wants falls outside these eleven options — the questionnaire is deliberately constrained so that every recommendation maps to a known objective.

**The five emotional objectives** answer what the user wants to *feel* after training, and set the tone of the personalized copy without changing which club, which blocks, or which classes are recommended:

1. To disconnect from work and routine — the experience should read as an escape and a mental reset.
2. To feel refreshed and in good spirits — it should read as energizing and mood-lifting.
3. To belong to a healthy community — with emphasis on group classes, shared spaces, and belonging.
4. To feel confident that their body won't let them down — with emphasis on resilience and physical capability.
5. To feel more comfortable with themselves — from self-acceptance and wellbeing, not external validation.

**The six functional objectives** answer what the user wants to *achieve* physically. The question accepts up to two answers; the first is the **primary objective** and drives every deterministic decision in the system, and the second, if present, is a **secondary objective** that only diversifies the class ranking:

1. Lose weight — additionally opens the weight-loss branch of the questionnaire and the health-sensitive content handling.
2. Improve body aesthetics and muscle definition.
3. Gain muscle mass.
4. Improve athletic performance.
5. Improve cardiovascular health.
6. Recover from an injury or chronic pain.

The primary objective deterministically selects the strength block, the cardio block, the ranking weights for group classes, the set of ideal classes used to resolve the club, and the narrative arc of the personalized copy. The two axes are independent and complementary: the emotional one says *why* the person is here and the functional one says *what* their body wants to achieve. Together they bound everything the experience must personalize.

---

# 1 · Navigation principles

## 1.1 A single page, governed by a phase state machine

The *experiencia ideal* is a single-page application that moves through a fixed sequence of phases. Throughout the journey, from the questionnaire to the brief, the user never changes URL. All progression is governed by a single state value — the phase — and, based on its value, the system shows the screen that corresponds. There is no router, no deep linking, and no browser back-button history: back navigation is explicit and handled by buttons within each phase.

The choice is deliberate and guarantees four things: that the user cannot land on the result by accident without completing the questionnaire; that they cannot bookmark or share an intermediate step; that the advisor brief cannot be reached without first passing the contact-capture gate and the scheduler; and that everything captured during the session lives in the device's memory only.

## 1.2 The seven phases

The flow has exactly seven phases, executed in this order under normal conditions:

1. **Welcome.** Intro screen with the Sports World wordmark, a one-line value proposition, and a single primary action ("Comenzar"). The user does nothing but start.
2. **Questionnaire.** Shown on start. It advances one question at a time; each question is a self-contained screen with its own header, input, helper text, and Next/Back buttons. Option order is free, but the question sequence is linear, subject to conditional branching.
3. **Loading.** Begins when the last question is submitted. While an animation runs, the resolver computes the recommendation — pulling club and class data — and, in parallel, the language-model call completes. The user cannot interact during this phase.
4. **Result.** The *experiencia ideal* page. It is the longest screen and the primary deliverable to the prospect. The user arrives here once the resolver and the language model both return successfully. The content is organized into two visually separated pages.
5. **Contact capture.** Opens when the user presses "Agendar visita guiada". A mandatory three-field form — last name, mobile phone, email — blocks progression until all three are valid. The user can return to the result with a back arrow.
6. **Schedule.** Opens once the contact data is valid. A calendar shows the available days for the next two weeks, with predefined time slots. The user picks a day and time, confirms, and proceeds.
7. **Briefing.** Final phase. It shows two visually separated pages: the first is the appointment confirmation — for the prospect to screenshot and keep — and the second is the advisor brief — for the advisor to read before the visit. The user can restart the questionnaire or return to the schedule to move the appointment.

One ancillary phase exists outside the main sequence: the **error state**, which appears if the language-model call fails; it offers a retry button and a restart link, and on a successful retry the user returns to the result.

Phases are exclusive: only one is on screen at any moment. On every transition, the previous screen unmounts entirely; there are no fades or overlapping screens.

## 1.3 Forward always, back only when it makes sense

Forward navigation is universal: every phase has a primary action that advances to the next. Back navigation is selective and follows precise rules. From welcome there is no back, as it is the entry point. From the questionnaire, "Atrás" returns to the previous question; if that question was conditional and no longer applies — because the user changed the answer that triggered it — the system skips it and lands on the previous applicable one. From loading there is no back, because it cannot be interrupted. From the result there is no back: the user cannot reopen their answers; the only reset is the "Reiniciar cuestionario" link at the bottom of the result, which discards all state and returns to welcome. From contact capture, "Volver" returns to the result and the already-captured data is preserved if the user moves forward again. From schedule, back returns to contact capture. From briefing, back returns to schedule, and "Terminar" closes the session after a confirmation.

Blocking back navigation from the result is intentional, for two reasons. First, the recommendation is computed once and deterministically; changing answers after seeing it would force a full recompute — which is expensive — or show a stale result — which is misleading. Second, what the user expects is simple: "I answer and I see my recommendation"; reopening the answers undermines that recommendation's authority.

## 1.4 No account, no persistence

The experience requires no sign-in. There is no login, no account creation, and no tracking of the user via persistent identifiers. The entire session lives only in browser memory: no local storage, no session storage, no browser database, no cookies. No measurement tag fires before contact capture; at that moment, and only then, the captured data is sent to the customer system in a single encrypted request. Closing the tab discards all answers, the computed blocks, the generated copy, the brief, and the chosen appointment; the user must start again from welcome.

The contact data, once submitted, is the only thing that persists beyond the session, and only on the server side — in the customer-system record — never in the browser. The choice is deliberate: this is a one-shot recommendation tool with a strong action moment — booking the visit. Persisting state would risk showing stale recommendations to a returning user whose preferences or medical context have changed, and would require a consent infrastructure larger than this use case warrants.

---

# 2 · The questionnaire as the single source of personalization

## 2.1 What it is for

The questionnaire is the only way the user feeds the personalization engine. Everything downstream — the resolver that picks the club, the selector that builds the training blocks, the ranker that prioritizes the group classes, the language model that writes the personalized copy, and the generator of the advisor brief — takes the questionnaire answers as the single source of truth about the user.

The questionnaire is not a marketing form: it is a clinical-grade intake instrument. Each question plays a concrete role in computing the recommendation. Removing or skipping a question degrades the recommendation; adding a decorative question that does not feed the computation would dilute the sense that every question counts.

## 2.2 The questions, by category

The questionnaire has three categories.

**The fifteen base questions** are always asked, in the same order, of every user: the name, which enables first-person address; gender, which governs grammatical agreement across the copy and gates the pregnancy question; what they want to feel on leaving, which sets the emotional tone; the objectives, up to two, which choose the strength and cardio blocks, the weights that prioritize the classes, and the narrative arc, and which gate the weight branch; pace, which adjusts the cardio's intensity descriptors and influences class order; mode — dry floor or pool — which switches between the dry and aquatic catalogs; time slots and days, captured for the brief and the language model but which do not filter the catalog; level, which filters candidate classes by level; history — whether they come from another gym, have never been, or are returning after a break — which feeds brief flags and gates the break-duration question; medical conditions, which filter the class catalog through the contraindications matrix; companionship, which switches the third block between group classes and Personal Training; who they visit with, which governs the FitKidz messaging and, when it applies, makes FitKidz a required experience amenity; what they want to be near — home, work, both, or no preference — which anchors the resolver's geography; and where it is, the postal code or colonia used to resolve the club.

**The six conditional questions** appear only when a prior answer triggers them: the duration of the break, when the user says they are returning after a break; pregnancy or postpartum status, when the declared gender is Mujer, which filters classes with impact, abdominal work, or supine positioning; the presence of children under twelve, when the user visits with their children or the whole family, which governs the FitKidz family messaging and makes FitKidz a required amenity; and the three weight-branch questions — active weight-loss treatments, current physical data, and change target — which trigger when "lose weight" is among the objectives.

**The three post-questionnaire contact fields** are captured on a single screen, after the recommendation is shown and before the calendar: last name, mobile phone, and email. They are not part of the questionnaire because they do not influence the recommendation; they are requested at the precise moment the user shows intent to book and therefore has a reason to share their contact details.

## 2.3 Input types and validation

The questionnaire supports six input types. **Free text** of one line, for the name and the colonia, valid with at least one character, with the cursor placed on entry and submission with Enter. **Single-select**, on large cards; auto-advance is disabled on purpose — the user must tap "Siguiente" — to avoid accidental advances on medical questions and keep a steady rhythm. **Multi-select**, on checkbox cards; the objectives question has a hard cap of two answers, enforced both in the interface and at submission. **Days**, a compact multi-select variant for the days of the week. **Location**, exclusive to the where-is-it question: two modes — a five-digit postal code or a colonia in free text of at least three characters — and filling one is enough. **Physical data**, exclusive to that question: three numeric fields — weight in kilograms, height in centimeters, waist in centimeters — valid within sensible ranges (weight 30–250, height 100–230, waist 40–200); an out-of-range value shows an inline error and blocks submission.

Error messages are always specific and useful. The questionnaire never shows a generic "required field": it says what is wrong and what to do. The last name asks for at least two letters; the phone, exactly ten digits; the email, a valid format.

## 2.4 The two questions that drive everything

Two questions weigh far more than the rest because they change the *structure* of the recommendation, not just its parameters: the objectives and the mode.

The **objectives** are the primary control question. The first objective chosen determines which of the six strength blocks is built, which of the six cardio blocks — with its machine and intensity profile — the weights that prioritize the classes, the narrative arc of the copy, whether the weight branch opens, and the priority of contraindications within the matrix. The second objective, if any, plays a narrow role: it breaks ties when ordering classes and is mentioned in the copy as a secondary motivator, but it does not change the strength or cardio block, which are chosen deterministically from the primary objective.

The **mode** is the structural switch. It defines whether the user receives the dry catalog — weights and machine cardio — or the aquatic catalog — water resistance and pool cardio. Its four options resolve as follows: "en piso / área seca" delivers only the dry catalog; "en la alberca" delivers only the aquatic catalog, with a special case for the muscle-mass objective that forces a hybrid recommendation; "ambas" delivers the dry catalog with a note mentioning the aquatic options as a complement; and "lo que mi entrenador recomiende" defers to the resolver, which picks aquatic for the injury-recovery and cardiovascular-health objectives and dry for the rest, without announcing the decision in the visible copy but recording it in the brief.

---

# 3 · Dynamic menus and conditional branching

## 3.1 How the questionnaire branches

The system evaluates each question's condition right when it is shown. If the condition is not met, the question is skipped entirely and the next one is shown; this is not a "hidden but submitted anyway" pattern: the skipped answer is left with no value, and everything downstream treats it as such.

When the user goes back and changes a prior answer that no longer triggers a later conditional, that later answer is kept in memory but ignored on submission. For example: if someone says they are returning after a break, advances and answers its duration, then goes back and changes to coming from another gym, the duration is kept in memory but is not sent to the resolver and does not appear in the brief; if they later indicate again that they are returning after a break, the duration question is asked again with its previous value pre-selected.

## 3.2 Gender agreement in the copy

Spanish grammatical agreement is respected across the questionnaire and the result screens. The declared gender governs the conjugation of several options and of the address on later screens: the masculine form when the gender is Hombre, the feminine when it is Mujer, and the dual **o/a** ending when the user prefers not to say — for example, "desconectado/a", "renovado/a", "confiado/a", "solo/a", "acompañado/a". The dual ending keeps the copy inclusive without assuming a gender, and the user sees it directly in the options.

Beyond the questionnaire, the result and the brief use the *first name* — the first word of the captured name — for the greeting and the emotional tone, and the *full name* — first name plus last name — for the brief's formal header.

## 3.3 The two-objective cap

The objectives question accepts up to two answers, and the screen enforces the cap instantly. With none, all options are active and "Siguiente" is off, with the helper "selecciona al menos uno". With one, all stay active, "Siguiente" turns on, and the chosen option is marked "objetivo principal". With two, the unchosen options turn off and the helper invites tapping one of the selected to change it. Tapping a third does nothing; tapping an already-chosen one frees it. Order is preserved: the first tap is the primary objective and the second the secondary, and the user can swap them by freeing and re-choosing.

## 3.4 The dynamic club resolver: location plus ideal experience

The club resolver is deterministic and computes its result with no visible delay beyond the data lookup. It takes the user's location plus a computed description of their **ideal experience**, and applies a distance-based decision tree whose priority is to deliver the ideal experience before minimizing the trip.

The ideal experience has two computed parts. The first is the **ideal classes**: the set of classes aligned with the user's objectives, computed before the club is chosen; a club "meets" the class side when it offers at least one of them, and when the user trains alone this is met automatically. The second is the **experience amenities**, at most two, each required only under its trigger: the **pool**, when the mode is "en la alberca", and **FitKidz**, when the user visits with their family and has children under twelve. These are the only amenities that weigh on club selection; the questionnaire asks about no others, so no other can be a requirement. It bears underlining: the pool and FitKidz are not blind filters that drop clubs silently — they are part of the "meets the experience" test inside the distance tree, designed to put the trade-off on the table: offer the qualifying club, explain the distance, and still show the nearby clubs that don't qualify as alternatives.

---

# 4 · Business rules

This section lists every rule that affects the recommendation, the visible copy, the advisor brief, or the phase flow. Each rule is described by what triggers it, how it works, and its observable effect.

## 4.1 Club resolution — distance tree that prioritizes the experience

On submitting the last question, the loading phase opens with the message "Buscando tu club ideal". The guiding principle is that **the ideal experience outweighs proximity**: the system does not simply pick the closest club, but the one that delivers the user's ideal experience, and uses distance only to break ties or when no nearby club qualifies.

A club **meets the experience** when it satisfies both sides: the class side — it offers at least one of the ideal classes, a condition taken as met if the user trains alone — and the amenity side — it has every required amenity, which are at most the pool and FitKidz, each only under its trigger.

The process is as follows. First, the ideal experience is computed — the ideal classes and the required amenities. Then the location is converted into coordinates through a four-tier lookup — direct postal code, colonia synonym, fuzzy colonia, and, as a last resort, the zone centroid. Next, all clubs are ranked by distance from that anchor and each is tagged as meeting the experience or not. Finally, the decision tree is applied, with a base radius of **10 km**:

- **Two or more clubs within 10 km meet the experience:** distance decides; the closest qualifying club is chosen.
- **Exactly one club within 10 km meets it:** that club is offered, even if it is not the closest in absolute terms; the user can switch, but switching to one that does not meet it shows a note that it does not include all the ideal classes.
- **No club within 10 km meets it:** the radius is expanded — 20 km, 30 km, with no cap — until one qualifies; that farther qualifying club is offered first and the distance is flagged, and the three closest clubs within the original radius are appended as alternatives, each flagged as not including the ideal classes or amenities.
- **No club anywhere meets it** — for example, a required amenity exists at no reachable club, or the ideal class exists nowhere — the closest club in absolute terms is used and a partial fit is flagged.

The club card copy and an optional amber note adapt to the resolved case. When several meet it, the card says the club has the ideal classes and is the closest of those that offer them, with no note. When only one meets it, it says it is the club near the user that has the ideal classes, with no note. When the radius had to expand, it says it is the club that does have the ideal classes, with an amber note: "Está un poco más lejos que otras opciones, pero es el más cercano que ofrece las clases ideales para tu objetivo. Abajo te dejamos también los clubes más cercanos a ti." When none meets it, it says it is the closest club to the location, with the note: "Ningún club cercano reúne todas las clases ideales para tu objetivo. Tu Asesor te ayuda a armar la mejor experiencia posible aquí en la visita guiada."

Each club in the "Ver otros clubes cerca de ti" panel carries a mark of whether it meets the experience; those that do not show an amber sub-note: "No incluye todas las clases ideales para tu objetivo." So the trade-off is clear at the moment of choosing.

When the user picks another club, the system recomputes the three training blocks against that club's catalog, re-runs the class ranker, and re-checks whether the chosen club meets the experience: if it still does, the copy says they chose it and it has the ideal classes; if it does not, an amber note clarifies that it does not include all the ideal classes, but they can train there and the advisor will help adjust the experience at the visit. The switch is always allowed. The language model is not called again when the club changes, because its copy does not depend on the club beyond the name and address. In any case, if the resolved club is over 50 km away it is flagged as too far and a note invites reconsidering the alternatives.

## 4.2 The strength block

Once the questionnaire is complete, the selector takes the primary objective and the mode and picks one of twelve blocks — six dry and six aquatic. Dry: lose weight gives "Fuerza integral con pesas"; aesthetics gives "Rutina por grupos musculares"; muscle mass gives "Desarrollo muscular progresivo"; performance gives "Potencia y velocidad"; cardiovascular health gives "Fuerza de mantenimiento"; injury recovery gives "Fuerza guiada en máquinas". Aquatic: lose weight gives "Trote acuático por intervalos"; aesthetics gives "Fuerza acuática con equipo"; muscle mass gives "Fuerza combinada: agua y gimnasio"; performance gives "Potencia y velocidad acuática"; health gives "Nado continuo moderado"; injury gives "Movilidad y recuperación acuática".

The block name is shown as the strength card's title, with an explanatory text in plain Spanish that never uses jargon. The card never lists equipment. The muscle-mass case in aquatic mode is the only strength block that explicitly requires a complementary dry session: its text explains that water does not allow enough load for the muscle to grow meaningfully, that if the primary objective is to gain muscle the routine combines pool with dry-floor days, and that the trainer defines that balance; the brief flags it as a hybrid-session item to validate.

## 4.3 The cardio block

Same structure as the strength block — six dry blocks, six aquatic, chosen by the primary objective and the mode. Dry: lose weight gives "Cardio continuo moderado" on treadmill, bike, or elliptical, 35–45 minutes; aesthetics gives "Cardio moderado con intervalos", 25–35 minutes; muscle mass gives "Cardio ligero de mantenimiento" on a gentle treadmill or bike, 15–25 minutes; performance gives "Intervalos intensos 4×4" on bike, rower, or treadmill, 30–40 minutes; health gives "Base aeróbica 80/20", 35–45 minutes; injury gives "Recuperación activa de bajo impacto" on a recumbent bike, elliptical, or very gentle treadmill, 15–25 minutes. The aquatic blocks are set by the same objective, with pool modalities and durations; in the muscle-mass case in aquatic mode, the card adds a short aquatic-alternative line so as not to compromise the strength work.

The card shows the block name as title, the machine with the duration and the timing relative to weights as subtitle, and the reason as body. The user never sees raw numeric targets such as heart-rate percentages or rep maxes.

## 4.4 Group classes

This rule runs when the questionnaire is complete and the user wants group classes — that is, they chose to train accompanied or are indifferent. If they chose to train alone, the rule does not run and the third block becomes Personal Training.

The class ranker runs twice, with different purposes. The **first time**, during club resolution, it computes the set of classes the user would ideally receive across the whole catalog, to bias club selection toward one that actually offers them; it is the check that the ideal classes are available before the club is fixed. The **second time**, once the club is chosen, it computes the two best real classes from its catalog.

The final-selection tree has five filters in order and a scoring step. First, the **catalog intersection**: only classes the club actually offers survive; this is the hard availability gate. Second, the **mode filter**: pool keeps only aquatic classes, dry floor keeps only dry classes, and "both" or "trainer's choice" keep all. Third, the **level filter**: only classes whose permitted levels include the user's, so a beginner never sees a class reserved for higher levels. Fourth, the **contraindications filter**: classes contraindicated by any active condition are dropped; this is the hard safety filter, and dropped classes never appear and are never named. Fifth, the **scoring against objectives and the dropping of unsuitable ones**: for each chosen objective, a class among the best for that objective adds three, a suitable class adds one, and an unsuitable class vetoes it outright; a single "unsuitable" rating against any chosen objective drops the class, no matter how well it scores on the other, so a class that conflicts with a stated goal is never shown; a class is kept only if it is not vetoed and its score is above zero.

There is an additional scoring step, only when the user is on GLP-1 treatment: the strength-priority adjustment described below, which adds points to strength classes and subtracts from high-intensity endurance classes so that the two shown classes reflect the clinical guidance to preserve muscle mass. It is the only scoring adjustment outside the objectives matrix, and when the user is not on that treatment it has no effect.

Finally, the surviving classes are ordered by score from high to low and, on a tie, alphabetically; the first two are the recommended ones and the next three feed the alternatives panel. The third block's card shows the result: with two classes, both with their name, a connector written by the language model, and a description, plus the "Cambiar mis clases" and "Ver todas las del club" links; with a single class, that class and the alternatives picker; with none, a message acknowledging that no classes were found that fit the objective and level at that club, inviting the user to consider Personal Training or explore other clubs, with its button. Because the prior check biases club selection toward one with aligned classes, the empty case is rare in practice; when it happens, routing to Personal Training is the correct, safe outcome.

## 4.5 Aquatic mode

When the mode is "en la alberca", the strength catalog switches from dry to aquatic, the cardio catalog switches from machines to pool, and the ranker keeps only aquatic classes from the club's catalog. The mode **does not act as a blind filter that drops clubs silently**: the pool weighs on club selection as a required amenity that biases the resolver toward a club with a pool — expanding the radius if needed — while clubs without a pool always remain visible as flagged alternatives. The mode also defines the training type for whichever club is finally resolved. The selector checks whether the resolved club has a pool: if it does, it delivers the aquatic blocks of the primary objective; if it does not, it delivers the dry blocks and adds a note — "Este club no tiene alberca. Revisa otros clubes cerca de ti — varios sí ofrecen entrenamiento acuático." When the resolved club has a pool, the user sees a fully aquatic recommendation and the brief includes the pool-preference tag; the special muscle-mass handling in aquatic mode applies only when the club has a pool.

## 4.6 Individual mode

When the user chooses to train alone, the third block of group classes is replaced by a Personal Training card and the ranker is skipped entirely. The card is shown in a dark tone, titled "Personal Training", with the copy "Decidiste entrenar a tu ritmo, sin clases grupales. Personal Training te asigna un entrenador dedicado en tus horarios." and its button. The brief gets the flag that the prospect wants an individual format and not to push the sale of a group-class package. When the user answers that they are indifferent, the system defaults to group classes and the brief notes that companionship is open and both formats are worth exploring at the visit.

## 4.7 FitKidz availability

When the user visits with their children or the whole family and has at least one child under twelve, the trigger governs the FitKidz *messaging* in the result and, as established in the resolver, makes FitKidz a required experience amenity that biases club selection toward one that offers it — expanding the radius if needed. **It does not act as a blind filter that drops clubs silently**: clubs without FitKidz always remain visible as flagged alternatives and the user can choose one. The family-benefit card is shown depending on whether the resolved club offers FitKidz, in three states. In the first, the club offers FitKidz and has documented kids' classes: the card shows how many activities there are and up to six tags with their names. In the second, the club offers FitKidz but its kids' catalog is empty or incomplete: the card shows generic text — "Este club ofrece FitKidz. Tu Asesor te compartirá el detalle de actividades y horarios disponibles para tus hijos en tu visita guiada." — with no tags. In the third, the club does not offer FitKidz: the card shows a gray fallback that points to nearby clubs that do. When the trigger is not met, the family-benefit card is not shown and the club card spans the full width of the section.

## 4.8 The hard contraindications filter

When the user declares one or more active conditions or treatments — in the medical conditions, in pregnancy or postpartum, or in the weight treatments — the contraindications matrix comes into play: a deterministic table of 51 classes by 5 conditions. The matrix marks a class as contraindicated for a condition based on the dominant traits of its movement. The **injury** condition filters classes with high impact, plyometric load, or unstable surfaces, and removes 17 classes. **Cardiovascular** filters classes with sustained high-intensity intervals, supine positioning, or strength patterns prone to the Valsalva maneuver, and removes 14. **Pregnancy** filters classes with impact, kicks, supine positioning after the first trimester, and intense abdominal work, and removes 21. **Postpartum** filters those same plus high-load strength until a pelvic-floor evaluation, and removes 21. **Bariatric** filters high-impact and heavy-load classes during the first post-operative year, and removes 16.

Filtered classes do not appear in the third block or in the alternatives picker. The visible copy never mentions which classes were filtered or why: doing so would alarm the user with a clinical framing on a sales page, or invite them to argue with the filter, which is exactly what must be avoided. The brief does record the active conditions and notes that contraindicated classes have already been left out.

The matrix is built from professional sources in sports medicine, gynecology, bariatric surgery, and cardiology, and each class-condition pair is tagged internally by its basis: taken directly from the source, derived from the dominant movement category, or inferred from physiological first principles when no source addresses the class directly. The matrix is never shown to the user in any form; it is used internally to filter and travels as brief metadata for later clinical validation by a sports-medicine professional.

## 4.9 GLP-1 prioritization

When the user declares a GLP-1 treatment, the system **does not** filter classes: the clinical guidance is to prioritize strength work to preserve muscle mass during the catabolic state these medications induce, not to restrict modalities. The effect is twofold. In the copy, the safety section uses a specific message — if GLP-1 alone, "Durante tu tratamiento con GLP-1, priorizamos clases de fuerza para preservar tu masa muscular mientras bajas grasa. Tu Asesor confirma el detalle clínico en la visita guiada."; if GLP-1 with another condition, "Tu experiencia incluye prioridad en clases de fuerza para preservar tu masa muscular durante tu tratamiento. Las clases con impacto o restricciones específicas ya están filtradas. Tu Asesor confirma el detalle en la visita guiada." In the class order, an adjustment is applied — plus two points to strength classes and minus one to high-intensity endurance classes — so the two shown classes reflect that priority. It is the only adjustment of its kind and is the single source of its values. The brief carries the informational flag of GLP-1 treatment and of prioritizing strength to preserve muscle mass.

## 4.10 Advisor-review on an open-ended answer

When the user marks an unspecified condition — "otra, la comento en el club" — or an unspecified weight treatment — "otro tratamiento médico" — the system cannot apply a deterministic filter, because it does not know the condition. Instead it produces a discreet advisor-review message and leaves the unknown noted in the brief. The safety-section copy changes to: "Mencionaste una condición o tratamiento médico. Tu experiencia ideal ya excluye las clases contraindicadas por las condiciones declaradas, y tu Asesor ajusta los protocolos de pesas y cardio individual en la visita guiada según tu criterio clínico." The brief carries a warning flag to capture the detail and validate specific contraindications before recommending.

## 4.11 The contact-capture gate

On pressing "Agendar visita guiada" in the result, the flow moves to contact capture: a three-field form — last name, mobile number, and email — whose continue button stays off until all three are valid. The last name asks for at least two letters; the phone, exactly ten digits; the email, a valid format. Errors appear below the corresponding field on blur, not on every keystroke, so they are not shown prematurely. On a successful submit, the contact data is saved with the result and the flow moves to schedule; that data is shown in the brief's logistics-and-contact section, and the full name in its header. The screen includes a privacy disclosure — "Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros." — which is the user's first consent moment.

## 4.12 The safety section's contextual copy

The safety section — "Antes de comenzar" — is shown on every result page, on its second page, and its body adapts to the medical context by evaluating four mutually exclusive cases in order: GLP-1 with another condition; GLP-1 alone; another medical condition without GLP-1 — "Con base en lo que compartiste, esta recomendación prioriza opciones controladas y evita actividades contraindicadas. Las clases con impacto o restricciones específicas ya están filtradas. Informa al personal del club sobre cualquier indicación de tu profesional de salud."; and, by default, no declared condition — "Con base en lo que compartiste, esta recomendación se ajusta a tu nivel y disponibilidad. Si tienes alguna indicación médica antes de comenzar, coméntala con tu Asesor en la visita guiada." The section is presented with a warm background, an attention icon, and a fixed disclaimer line below: "Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica." Its visual weight is calibrated to be noticed without alarming.

## 4.13 The two-page split: client view and advisor view

Both the result and the briefing are shown in two visually separated pages. The content is divided by a dashed separator; on screen the separator is visible, and in print it is hidden and a page break is forced, producing two sheets.

In the client result, the first page carries the top bar, the personalized header, the two-column section with the club and the family benefit, the other-clubs panel when expanded, the four summary cards, and the conversion row with "Agendar visita guiada"; the second page carries the "Tu combinación recomendada" kicker, the three block cards, the change-classes and see-all-classes panels when expanded, the safety section, the infrastructure argument, the closing conversion with the restart, and the legal footer. The first page puts the club front and center on purpose: after answering the questionnaire, the user's first question is "where will I train?".

In the advisor brief, the first page carries the confirmation banner for the prospect, the header with full name, level, tags, and date, the prospect profile, and the logistics and contact; the second page carries what to validate, the recommended visit route, the proposal, the closing priorities, the notes and flags, the closing script, and the advisor's register space.

## 4.14 A single language-model call

Exactly one call is made to the language model, returning a single object with the client copy and the brief content. The call happens once per session and its response is cached and reused across the result and the brief. The client copy includes the hook — up to 30 words — the combination argument — up to 45 — the intent line — up to 18 — the infrastructure argument — up to 55 — and the per-class connectors — up to 15 each, distinct from one another and omitted when there are no group classes. The brief includes exactly five validation questions — up to 18 words each — a visit route of exactly four steps with title and description — up to 18 — a proposal with a main item — up to 35 — and a complement — up to 30 — exactly three closing priorities — up to 12 each — and a closing script — up to 60, in the advisor's first person to the prospect.

Before composing the prompt, the system computes a set of flags from the answers — whether there is medical context, pregnancy, postpartum, GLP-1 or bariatric treatment, whether it is a family with children, whether they train alone, whether they are a beginner, their gym history, and their mode preference. When there is medical context, the prompt includes a section listing the declared conditions and recalling that contraindicated classes have already been left out and that the advisor adjusts the individual protocol with clinical judgment.

If the call fails, the system moves to the error state with a retry button. If the retry works, the user proceeds normally. If retries fail repeatedly, the user can still proceed: the result shows the deterministic content — blocks, club, classes, safety — and the brief shows only its fixed sections, omitting the model-written ones, with no error shown.

## 4.15 Health-sensitive content constraints and output cleanup

Every model call imposes three layers of control. The first is **banned vocabulary**: never the word "plan" in any form, never the questions' internal codes, never jargon — such as hypertrophy, max-intensity intervals by their acronym, maximal oxygen uptake, perceived exertion, one-rep max, or caloric deficit — and never marketing clichés or promises of results. The second is **health restrictions**: when the user has any condition, pregnancy, postpartum, or active treatment, the model does not diagnose, does not recommend specific intensities, does not hint that the user "can do anything", and always states that the advisor validates with clinical judgment at the visit. The third is **output cleanup**: even with the two layers above, the model sometimes lets a question code slip into the prose, so a recursive cleaner walks the whole response, strips any leftover code together with the bridging words around it, collapses double spaces, and removes punctuation left dangling, working over strings, arrays, and nested objects so no field escapes it.

The prompt also includes an approved vocabulary of plain verbs and nouns — build, sustain, consolidate, maintain, recover, adjust, pace, consistency, strength, stamina, base, experience, routine, combination, muscle growth, controlled technique, body awareness, among others. The effect is that the user receives warm, professional copy free of clinical-sounding terms that would confuse a non-specialist reader, and the advisor receives precise content, free of filler, that explicitly defers to clinical judgment when there is medical context.

---

# 5 · Data integration and sources of truth

The experience is only as accurate as the data behind it. The recommendation crosses the user's profile with two bodies of operational data — the club network and the class catalog — and writes the captured lead into the customer system. The system does not own the operational data: club, class, and lead records live in Sports World's systems; the experience reads from and writes to them, without keeping a parallel master copy that could drift from reality. The integration mechanics, the security of the connections, and the dependency on Sports World are detailed in `03-technical-strategy.md` and `04-execution-plan.md`; what follows is what the recommendation flow itself needs.

## 5.1 The three data categories

The **lead and contact** category is what the system produces: the full name, the phone, the email, the full profile from the questionnaire — objectives, level, mode, availability, medical-context flags — the resolved club, the recommended training combination, the generated brief, and the booked appointment; it flows out of the experience into the customer system as a new qualified lead. The **club data** category is the network of 49 clubs: trade name, address, coordinates, the amenities offered — in particular whether it has a pool and whether it has FitKidz, the two that weigh on the experience — the kids' catalog where applicable, the operating status, and the club's contact details. The **class data** category is the catalog: the master list of disciplines and, per club, which classes it offers, the level each requires, and the schedule on which it runs; class availability — whether a class still runs, at what times, and at which clubs — is the most volatile data in the system.

## 5.2 What is real-time and what is periodic

Not all data needs the same freshness. Forcing everything to real time would add cost and fragility with no benefit; letting volatile data age would produce recommendations that send the lead to a club for a class that no longer exists.

**Real time:** the lead write, which on confirming the visit must be recorded in the customer system immediately, in a single write at the moment of capture — the system's only mandatory real-time write, because a delayed write risks losing the lead or leaving the advisor without a brief; the club's operating status, because recommending a closed club is a hard failure visible to the lead, so the resolver must not offer a club that is not operating; and class availability and schedule at the moment of ranking, because a recommendation built on a stale schedule sends the lead to a cancelled or rescheduled class — the most damaging stale-data failure, because it surfaces as a broken promise during the visit.

**Periodic:** the club directory baseline — names, addresses, coordinates, and the amenity flags — which changes rarely; the FitKidz kids' catalog per club, which changes seldom and which, where incomplete, already falls back to a generic message; and the master list of disciplines with the level each requires, which is stable, because what changes often is where and when each runs — and that volatile part is already the real-time portion.

## 5.3 What this means for the recommendation flow

The resolver and the ranker work on a consistent snapshot of club and class data, assembled when the user finishes the questionnaire. The real-time portions must reflect the live state at that moment; the periodic portions may come from the latest synchronization. Concretely: the club-resolution tree must leave out clubs that are not operating, using live operating status; the ranker's catalog intersection must reflect the live availability of the resolved club's classes, so a cancelled or no-longer-offered class does not surface as ideal. It is worth being precise: this live filter is about the class's own operating status — cancelled, discontinued, not currently scheduled at the club — **not** about whether the class time matches the user's stated availability: time slots and days are captured for the brief and never filter the catalog; reconciling schedules against the prospect's availability happens with the advisor during the visit. Finally, the lead write must complete in real time before the confirmation screen is shown, so the brief is ready the instant the visit is booked.

---

# 6 · Synthesis

The *experiencia ideal* is a single idea executed with discipline: receive a person who arrives looking for a solution, understand them through a clinical-grade questionnaire, place them in the club that truly delivers their ideal experience, build them a safe, tailored training combination, and hand the advisor a brief that lets them close the visit without asking anything twice. The phase flow ensures no one reaches the result without first being known; the dynamic menus — conditional branching, gender agreement, the objective cap, and club resolution — adapt the system to each person without losing them; and the business rules guarantee that, at every step, the system does the right thing: personalize without inventing, recommend without putting anyone at risk, capture without pressuring, and turn a search into a booked visit with all the context needed to close it.
