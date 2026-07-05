# JD Upwork · Senior AI Integrations Developer (WhatsApp / CRM / Voice)

> Texto listo para pegar en Upwork. Montos: se capturan al publicar (no van en este repo).

---

**Title:** Senior Developer — Conversational AI Agent, CRM Middleware & WhatsApp Integration (8 weeks)

**Overview:**
Mexico's leading premium fitness chain (49 clubs) is rebuilding its digital funnel. You will
own the conversational and integration backbone: an LLM-powered agent ("BES") on the new
website (text + voice via an ElevenLabs-class platform), an idempotent middleware writing
every lead into the client's CRM, and an internal console where sales advisors see an
AI-generated brief per lead. A likely follow-on phase extends the same engine to WhatsApp
Business API with a human-operator console — WhatsApp experience is required. The engine you
build will also be reused later for an AI voice role-play training system.

**Responsibilities:**
- Design and build the CRM middleware: idempotent lead writes (no duplicates ever), retries,
  queueing, monitoring — this unlocks the mid-project gate
- Build the website agent with full catalog coverage (RAG over the knowledge base), text and
  voice, with human handoff
- Build the internal advisor console (lead brief + conversation history)
- Conditional phase: integrate the engine with WhatsApp Business API (24-hour window,
  utility/marketing templates) plus an operator console
- Enforce a strict privacy boundary: no conversational data ever writes to the CRM from the
  training/role-play side; dev and production API keys never mix

**Deliverables by milestone:**
- M1 (W3): CRM middleware live and tested end-to-end against the client's sandbox + production
- M2 (W4): lead capture flow live (questionnaire → middleware → CRM → advisor brief)
- M3 (W6): website agent with full coverage + internal advisor console
- M4 (W7): integration sign-off at final QA
- M5 (conditional): WhatsApp agent + operator console

**Required qualifications:**
- 6+ years backend/integrations; production LLM agents (tool use, RAG, guardrails, evals)
- Real WhatsApp Business API experience (Meta/BSP, template categories, 24-h window)
- CRM integrations with idempotency, retries and observability in production
- Voice-agent stack experience (ElevenLabs, Vapi, Retell or similar) or equivalent real-time
  audio work
- Spanish (agents and consoles operate in Mexican Spanish)

**Nice to have:** operator/agent-console UX experience; cost-optimization of LLM workloads.

**Experience level:** Expert
**Project length & commitment:** 8 weeks (heaviest W3–W7), 15–20 h/week; conditional
follow-on phase of similar length
**Budget type:** Fixed-price, one funded milestone per gate (amounts set in the posting)

**Screening questions:**
1. Describe a production LLM agent you built: stack, RAG design, guardrails, and how you
   measured answer quality.
2. Detail a WhatsApp Business API integration you shipped: BSP used, template strategy,
   window handling, and one hard problem you solved.
3. How do you guarantee idempotent writes to a CRM when the same lead can arrive from three
   channels? Be specific.
4. Availability for the next 8 weeks and overlap with Mexico City hours?
