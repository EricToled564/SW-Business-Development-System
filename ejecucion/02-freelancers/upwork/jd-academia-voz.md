# JD Upwork · Senior Voice AI Developer (role-play) — Proyecto C (condicional)

> Texto listo para pegar en Upwork. Montos: se capturan al publicar (no van en este repo).
> Publicar solo cuando se firme el Addendum del Proyecto C.

---

**Title:** Senior Voice AI Engineer — Sales Role-Play Simulator on Existing LLM Engine (10 weeks)

**Overview:**
Mexico's leading premium fitness chain (49 clubs) is deploying an AI voice role-play trainer
for its 200 sales advisors: weekly practice sessions against simulated customers that speak,
object and decide like real prospects, with automated scoring and feedback. The architecture
is already decided: ONE existing production LLM engine (built for the company's website
agent) extended with 10–15 certified persona cards — not 15 separate agents. Voice runs on an
ElevenLabs-class real-time platform. Certified scenario scripts and scoring rubrics are
provided by an instructional designer. Hard privacy rule by design: the system never accesses
real advisor–customer conversations, and no conversational data ever integrates with the CRM
(only outcome metrics are read from it).

**Responsibilities:**
- Build the role-play layer on the existing engine: persona-card system (profile, motivation
  taxonomy, objections, temperament, difficulty), practice-session manager, real-time voice
  loop with low latency
- Implement the scoring engine: evaluate sessions against certified rubrics and generate
  actionable feedback per advisor
- Build the progress dashboard for client coordinators (practice adherence, mastery per
  scenario, evolution per advisor and per club)
- Build a governed intake channel for new field objections (human-reported, certified before
  entering the scenario library)
- Monitor and optimize the cost drivers (voice minutes, session length) from day one

**Deliverables by milestone:**
- M1: role-play layer + first 5 persona cards live in pilot with a test advisor group
- M2: full 10–15 persona library + scoring engine with rubric-based feedback
- M3: coordinator dashboard + governed objection-intake channel
- M4: rollout to 200 advisors, load-tested, cost dashboard in place

**Required qualifications:**
- 6+ years software engineering; shipped real-time voice AI in production (ElevenLabs
  Conversational, Vapi, Retell, Pipecat/LiveKit or equivalent)
- Strong LLM engineering: prompt/persona architecture, evals, guardrails, structured scoring
- Latency and cost optimization of voice+LLM pipelines
- Dashboarding/reporting for non-technical operators
- Spanish strongly preferred (personas and feedback ship in Mexican Spanish)

**Nice to have:** sales-training or simulation products (e.g., role-play SaaS); experience
extending an existing production agent without breaking its live operation.

**Experience level:** Expert
**Project length & commitment:** 10 weeks, 15–20 h/week
**Budget type:** Fixed-price, one funded milestone per phase (amounts set in the posting)

**Screening questions:**
1. Describe a production real-time voice agent you built: stack, average round-trip latency,
   and how you measured conversation quality.
2. How would you implement 12 distinct customer personalities on ONE engine so behavior stays
   consistent and certifiable? Be concrete.
3. Explain a scoring/eval system you built for AI conversations. What made its feedback
   actionable rather than generic?
4. How do you keep per-session voice costs predictable at 200 weekly users?
