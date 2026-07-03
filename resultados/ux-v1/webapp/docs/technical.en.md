# Sports World México · Technical Strategy · V2.0
## Stack, integrations, technical SEO, visual content, the BES agent, site migration, and quality controls

Foundational document. It explains, in clear terms and with the specific tools named, **what** technology builds the experience, **how** it is built —the working method and the quality controls—, **how it connects** to Sports World's systems, and **how it is migrated** from the current site to the new one without interrupting email or losing search rankings. It is written so that management, the systems/IT team, and any external provider can understand it without ambiguity; wherever a decision is relevant to Sports World, the rationale is stated. Each technical deliverable described here corresponds, one to one, with the contractual scope of the **[Contract · Annex Two, Section I](#contrato)**, and each dependency requested of Sports World is cataloged in **[Contract · Annex One](#contrato)**.

A single assumption underpins the integration: **Sports World exposes an API for its customer system (CRM).** Everything else the project requires is provided by the delivery team.

## 1 · The website — stack and rationale

The site is built on the current generation of the most widely used professional framework for content-oriented, search-optimized sites. The contract fixes the stack (**Next.js, React, TypeScript, and Tailwind, with SSR and ISR and a decoupled CMS**); here the versions are named, along with the rationale for each:

- **Next.js 16** (App Router), with **server-side rendering (SSR)** and **Incremental Static Regeneration (ISR)**. Server-side rendering is the most important technical requirement of the project: it fixes at the root the problem of the previous site, whose club pages Google could not read (diagnosis in **[Initial Audit](#auditoria)**). ISR allows content to be updated without rebuilding the entire site.
- **React 19** with the **React Compiler** enabled (automatic memoization, with no manual tuning), to keep the site fast without manual optimization work.
- **TypeScript** in strict mode across all code, which catches a broad class of errors before production.
- **Tailwind CSS v4** over a reduced set of **brand design tokens** (color, typography, spacing), so that every page is consistent and faithful to the brand by construction. These tokens originate from the brand book provided by Sports World (Annex One E.1).
- **Self-hosted variable web fonts** (`next/font`), for fast, brand-faithful typography with no third-party calls.
- **Node.js 20.9 or later** as the runtime (required by Next.js 16). The sized server specification is in **[Execution Plan · §4](#execution)**.
- **Aggressive caching** (`'use cache'`, `cacheLife`, `cacheTag`) to serve most views from cache and reserve compute for dynamic work and traffic peaks.
- **Self-hosted decoupled (headless) CMS** on the Sports World server —for example Payload or Strapi, on Node.js alongside the site—, so that the no-code editing panel lives in Sports World's infrastructure, with no dependency on an external service. When a change is saved, the page is revalidated with `cacheTag` and ISR. The final choice is confirmed at kickoff (detail in **[Experience Architecture · CMS](#experience:el-panel-de-actualizacin-sin-cdigo-cms)**).
- **Hosting on Sports World's own server**, not on a third-party platform, so that the site remains entirely under Sports World's control and ownership.

The quality standard is concrete and measurable —**Core Web Vitals** (LCP < 2.5 s, INP < 200 ms, CLS < 0.1), image optimization (responsive **AVIF/WebP**), and **WCAG 2.2 AA** accessibility— and is verified automatically on every change (§8).

## 2 · The four data sets and the integrations with Sports World

The personalized experience cross-references what the user wants with Sports World's operational data and writes the qualified lead back into the CRM. The contract requires the **live integration of the data via API** plus one write.

**Reads (the CRM operational data).** The PROVIDER's middleware consumes the CRM's standard API and exposes: **each club's status** (active / temporarily closed / permanently closed), **coordinates**, **amenities per club** (pool, FitKidz, sauna, padel…), **classes per club**, **class schedules** (with one-week visibility, minimum weekly periodicity), **business hours**, **prices** (per plan, per club, Multiclub, FitKidz, and other services), and **discounts and promotions**. In **real time**, **prices** and **classes per club (schedules and dates)** are read; **once a day**, the **club status**, **business hours**, and **amenities** are synchronized. The **coordinates** are kept as a seed in the code, editable without code in the CMS. This corresponds to access points D.1–D.3, the knowledge base (D.6), and the data catalog of Annex One.

**Write (the real-time operation).** Creation of the **qualified lead** —name, phone, email, complete profile, chosen club, and the **requested day and time of visit**— in the CRM, at the moment the prospect confirms, via a **call to the CRM API** (create/update). The operation is **idempotent per session** (idempotency key / UUID or equivalent deduplication): if the prospect modifies and reconfirms, the same record is updated rather than duplicated (Annex One B.3 and D.4); this idempotency may be resolved in the CRM or in the PROVIDER's middleware layer. **The guided tour is neither booked nor is availability verified**: the chosen day and time —within the club's business hours— are recorded in the prospect record and emailed to the club as a request; there is no integration with any booking system.

**Integration path: PROVIDER middleware.** The integration is implemented through a **middleware layer provided by the PROVIDER** that **consumes the CRM's standard HTTP RESTful API** and exposes to the site and BES exactly what is needed —idempotency, caching, retries, amenity and geolocation searches, price resolution, and latency shaping—. Thus the CLIENT only **exposes its standard API and data**; it does not develop custom access points inside the CRM. The Contract cites only the **general standards and best practices** of the API (client-server, stateless, caching, JSON, `/v1/` versioning, HTTPS, Bearer/OAuth 2.0/JWT, OpenAPI/Swagger); the detail is defined during the project (requirements list → proposal → adjustments). In general terms it requires: API documentation (**OpenAPI/Swagger** or Postman) and a sandbox (Block A); production credentials with **equivalent authentication** (Bearer Token, OAuth 2.0/2.1, JWT, mTLS, or a scoped key with rotation), event notification (signed webhook or equivalent polling), and rate limits (Block B); and an **objective latency SLA** —95th percentile **< 500 ms** for reads (D.1–D.3) and **< 800 ms** for lead creation (D.4), Annex One D.5— achievable via read caching and/or the middleware. These figures are the SLA of the client's API/service; **they must not be confused with BES's conversational objective** (§6).

**Geolocation and pricing.** The **coordinates of the 49 clubs** are seeded in the code, with a **no-code procedure in the CMS** to add or change them (the CRM's coordinates are a valid source). **Rates are extracted automatically from the CRM** (not edited in the CMS): the **pricing engine** applies them **per club**, resolving and **replicating** when the CRM defines them by **city** or **nationally** (or combinations), and the same logic covers **discounts, promotions, and amenity/service prices** (Personal Trainer, FitKidz). The CMS manages content, images, and the coordinates. (Deliverables in Contract · Annex Two I.3.)

The architecture is built so that the recommendation logic does not depend on whether the data arrived live or from a recent synchronization —which means the integration can start simple and be strengthened later without rewriting the core. The flow's own update needs are specified in **[Experience Architecture · §5](#experience)**.

## 3 · Technical SEO and structured data

The business objective (raising unbranded coverage from 31.1% to 55–65%) rests on a concrete technical layer:

- **Structured data (schema markup) in JSON-LD**, generated at the render of each page and validatable against Google's **Rich Results**, by page type: **HealthClub** and **LocalBusiness** for the club pages —with verified GPS coordinates, hours, and phone—, **Course** for the class pages, **FAQPage** for the frequently asked questions sections, and **BreadcrumbList** for navigation. This is what confirms to Google that Sports World does indeed offer each service at each location.
- **Architecture and linking** of the 148 pages with hierarchy, clean URLs, and internal linking (the complete inventory is in **[Experience Architecture · Site map](#experience:6-mapa-del-sitio)**), plus the **semantic hubs** by amenity and by location that the previous site lacked.
- **Content production at scale with editorial control.** **Six master templates** for AI-assisted content in Mexican Spanish; the 148 pages with unique content; human review by SEO specialists before publishing, so that volume is not achieved at the expense of accuracy or brand voice.
- **Reinforced YMYL standard for health.** The benefits matrix of the **54 adult classes cross-referenced with the 5 profiles** is validated against medical literature, and the **"Weight Loss"** hub is published with the signature of the physician designated by Sports World (valid license number visible). The language model that assists the content operates under YMYL constraints and sanitization (see **[Experience Architecture · §4.15](#experience)**).
- **The 49 Google Business profiles** are created and optimized through the official tool (**Google Business Profile API, with OAuth 2.0**, the scheme that this Google API requires). For the more than 10 locations, the bulk spreadsheet verification that Google offers to chains is used. **An honest constraint**, documented in the plan: the API manages and optimizes existing profiles, but **does not create new ones**; a new profile requires Google's own verification —which Google controls and which takes time— plus approval of the API access, which Google grants over the course of weeks. That is why the process begins in Week 1 (**[Contract · Annex One](#contrato:anexo-uno-aportaciones-de-sports-world-requerimientos-a-cargo-del-cliente)**).
- **Measurement.** Configuration of Google Search Console and GA4 from the outset; **event instrumentation** on the site (time on page, exit point, and traffic → scheduled-visit conversion); **results funnel and dashboard** (see §10); and a weekly executive report.

## 4 · Visual content at scale

The visual content combines three sources, not just one, in accordance with the contractual scope (Annex Two I.3):

- **Treatment of ~650 photographs from the Sports World library** —style normalization, cropping, resolution, and format— so that the existing material coexists within a single visual identity.
- **~150 new AI-produced images** through a **custom-built application** created for this project, which automatically applies a **consistent artistic style** across all output and the **correct resolution** for each use (hero, cards, thumbnails), so that the images turn out sharp where required and lightweight where speed takes priority.
- **12 ten-second animations** and **1 institutional video of 45–60 seconds** for the "Weight Loss" hub.

All material is delivered in **responsive AVIF/WebP**. This automated and supervised pipeline is what makes it feasible to produce the visual content of 49 clubs and hundreds of pages within the available time: it replaces thousands of manual edits without sacrificing consistency. The application's internal engine is confirmed at the start of the project; here it is described by its function.

In addition to the public-facing content, the project delivers a **conversion funnel and a real-time executive dashboard** for Sports World, so that management can see performance without depending on manual reports (detail in **§10**).

## 5 · BES, the voice and text agent

BES is an AI conversational agent **by voice and text**, with natural synthetic voice in Mexican Spanish. It operates on **two channels**: **(1) web** —voice and text, within the site— and **(2) WhatsApp —text only—**. In the present website project (**Project A**), BES is deployed on the **web channel**; the **WhatsApp (text-only)** channel is part of the **Business Development System (Project B)**, contracted via a **separate Addendum** (BDS module, Project B). It serves prospects in natural language, resolves common questions, guides them toward the right club and the guided tour, and captures qualified leads —the same result produced by the site's form, but through conversation—. In addition, it sends **2 automated WhatsApp reminders** (24 h and 2 h before the visit) and the **prospect summary by email to the club**. **It does not operate by telephony or by voice on WhatsApp** (those scopes are excluded; Contract, Clause One II).

**Conversational flow.** BES's responsibility is to **apply the questionnaire and deliver the ideal experience** to any prospect who wishes it, or to **assist with the request for a guided tour** at a club the user has already chosen. In either case, BES tells the prospect it needs **a minute of their time** to complete the questionnaire and offers two modes:

1. **Question by question.** BES poses each question and presents the user with the answer options.
2. **Pre-filled questionnaire to confirm.** BES presents the questionnaire with the answers that could already be **inferred** —from the user's own statements or from the page they arrive from— shown pre-loaded, and asks the user to **confirm** them; if any is not confirmed, BES offers the normal answer options.

At the end, BES **reconfirms the ideal club** and proceeds to request the **date and time of the visit** and the necessary **contact details** (last name, mobile, and email). **Only once the visit is confirmed**, BES informs the prospect that their **ideal experience has been emailed** to them and that their **preferences have been communicated to the advisor** who will attend them during the guided tour. Finally, BES asks whether there is anything else it can help with: if so, it continues; otherwise, it ends the conversation.

Underneath, the agent is assembled from four layers, all operating within the site:

- **Speech recognition (ASR):** converts the user's speech on the site into text in real time (for example, Deepgram). Voice mode only.
- **Reasoning (a language model):** understands what the prospect wants, decides how to respond, and uses the **same club, class, and lead logic that powers the site** (for example, Claude or an equivalent frontier model), so that the response is consistent with the site's. It is the layer shared between voice mode and text mode.
- **Voice synthesis (TTS):** converts the response into natural Mexican-Spanish voice, with a quality that avoids the robotic effect (for example, ElevenLabs). Voice mode only.
- **Orchestration layer (on the site):** integrates the agent into the website, manages the flow of each voice and text conversation, triggers the 2 automated WhatsApp reminders and the email summary to the club, and executes the handoff to the human staff when required (for example, Vapi or Retell for conversational orchestration).

**Knowledge base (RAG).** BES does not invent its answers: in addition to reading the operational data live, it consults a knowledge base —membership catalog with prices and terms, classes with descriptions, cancellation and freeze policies, and operational information by club— that Sports World maintains with a minimum weekly update during the project (Annex One D.6). It writes leads into the same CRM and through the same API as the site (D.4), so that BES and the site never contradict each other and a lead captured by BES reaches the pipeline exactly like one from the site.

**Escalation to a human.** When the prospect needs it, BES hands off cleanly through the strategy that Sports World defines: transfer by **SIP** to a number/queue, routing to a WhatsApp operator, or a callback scheduled in the CRM (Annex One D.7).

**Two latency metrics, which must not be confused.** (1) BES's **conversational objective** —the total time for the conversation to feel human— is **below ~900 ms** (recognized industry standard). (2) That objective is only achievable if **Sports World's APIs** meet their own SLA: p95 **< 500 ms** on reads and **< 800 ms** on lead creation (Annex One D.5). The first is the agent's responsibility; the second, the client's APIs'. The exact components are chosen at kickoff against three requirements: natural Mexican-Spanish voice, that conversational latency, and the clean handoff to a human advisor.

**Where BES runs.** BES **does not reside on the site server**: it runs on its **providers' managed platforms** —voice on **ElevenLabs**, in addition to speech recognition, the reasoning model, and the orchestration layer—. That is why the sizing of the site server (Execution Plan §4) does not include BES, and the **operating costs of BES are covered directly by Sports World** to those providers (Contract, Clause Six Bis).

## 6 · Migration from the current site to the new one (without interrupting email or losing rankings)

The migration is a first-order technical deliverable (Annex Two I.2 and I.3) and the highest-risk phase of the project, because the DNS does not only point to the site: it also routes the **corporate email (MX records)** and, potentially, other services. The method protects all of that explicitly. The contractual commitment for the migration is set out in the **[Contract · Annex Two](#contrato:anexo-dos-entregables-especficos-de-los-servicios)** (I.2 and I.3); the technical method is as follows:

- **Prior DNS inventory.** Before touching anything, a complete inventory of the current DNS records is taken, separating those of the website from those of email (MX) and other services. **Only the site records are migrated**; the email records are not modified.
- **301 redirect map.** A map is built covering the **136 broken links** detected in the audit —**116 301 redirects** from old addresses to the new ones and the correction of the **20 URLs with a backslash**—, so that neither the rankings earned nor any visitor is lost to a nonexistent page.
- **Crawlability from day one.** The new site is born with SSR and schema, which is exactly what the previous site lacked; upon publishing, the **sitemap** and the pages are submitted to Google via Search Console to accelerate the re-crawling of the 49+ club pages that were previously invisible.
- **Low-risk cutover.** The **TTL** of the site records is reduced **24 hours before** the change, so that the transition is fast and reversible. The change is executed in a window coordinated with Sports World (Annex One C.7), and immediately afterward it is confirmed that the corporate email and the other services continue operating without interruption.
- **Active monitoring for 48 hours and rollback.** After launch, the site is actively monitored for **48 hours**; because the TTL was kept low, any anomaly can be reverted quickly. Afterward, the **stabilization stage of 2 to 4 weeks** begins, with reinforced attention, without consuming the improvement hours pool.

## 7 · How it is built: AI-assisted development with human supervision

The project is built with AI coding agents under continuous human supervision. This is the method that allows a compressed eight-week schedule without sacrificing quality. It is not a matter of "AI writing the site without supervision": a senior engineer defines each objective, the agents execute the bulk of the work, and a human owner reviews and approves each result before it goes to production.

Two complementary agents are used. **Claude Code** for implementation —writing and modifying code, running tests and fixing failures, in the project's own environment under the engineer's direct control—. **Codex** as an independent reviewer —a second, distinct agent that reviews the plan and the implementation in search of gaps, errors, and weaknesses that the implementing agent might overlook—. Employing two distinct agents is a deliberate decision: whoever writes the code is not whoever evaluates it, analogous to a second engineer reviewing a colleague's work, but at AI speed.

Each significant piece of work follows the same five-step cycle, with the human staff at the decision points: **research and plan** (the plan is written before any code, and the human staff approves it), **implement** (Claude Code writes the code in small, reviewable pieces), **review** (Codex reviews independently against the plan and the requirements), **verify with evidence** (the work must show proof that it functions —the test output, the rendered result, a measured performance score— not a mere assertion), and **publish** (only after human approval, through the automated quality controls). Supervision is never optional, and it is stricter for anything that touches user data, lead capture, or health-related content.

## 8 · Quality controls on every change

Quality is applied automatically; it is not left to memory. Every change to the site passes through a set of controls before it can go to production:

- **Automated tests** that confirm existing functionality continues to operate.
- **Performance checks** (Core Web Vitals) on every change, against the thresholds of §1.
- **Accessibility checks** (axe-core), in accordance with WCAG 2.2 AA.
- **Search-readiness checks** that confirm the structured data and page structure remain correct.
- **Preview links** so that any reviewer —including Sports World— sees exactly how a change looks before it is published (this is the mechanism for the approvals of the **[Contract · Annex Two I.4](#contrato)**).

If any control fails, the change is not published until it is corrected. This mechanism prevents an eight-week pace from accumulating hidden defects.

## 9 · Environments, continuous delivery, and security

- **Environments:** local, **staging**, and **production**, with feature flags where applicable; every change is seen first in a preview.
- **Continuous delivery (CI/CD):** every change passes through the controls of §8 before being published; nothing reaches production by bypassing the gate.
- **Integration security:** inbound integrations are protected with **signature verification (HMAC on webhooks)**, **HTTPS with HSTS**, and **secret rotation**. Credentials are delivered through a secure channel (a password manager), **never by plain-text email** (Annex One B and C).
- **Personal data protection:** the site applies **minimization and non-retention** —the prospect's data lives briefly and is not backed up in the site environment once copied to the CRM—. The detail and the legal framework (LFPDPPP) are in **[Site Security](#seguridad)**.
- **Ownership:** all code, content, and assets remain the property of Sports World, operating on its own infrastructure.

## 10 · Results funnel and measurement dashboard

The project delivers an **end-to-end conversion funnel** and a **real-time executive dashboard** that measure the **real result** of the project, not just traffic. The funnel has four stages:

1. **Traffic** — site visits (organic, direct, campaigns), by source and by page.
2. **Scheduled guided visit** — the prospect completes the flow and schedules the visit (lead captured). Key metric: **traffic → scheduled-visit conversion**.
3. **Guided visit provided** — the prospect actually attended the visit at the club. Metric: **scheduled → provided conversion**.
4. **New membership** — the visit converted into a sign-up. Metric: **provided → new-membership conversion**.

**Data sources (two, integrated into the dashboard):**

- **Google (GA4 + Search Console), connected to Sports World's necessary accounts (Annex One E.4):** traffic and on-page behavior. The site is **instrumented with events** to measure **time on page**, the user's **exit page/point**, and the **traffic → scheduled-visit conversion**.
- **CRM (via the PROVIDER's middleware):** the two stages only the CRM knows —**scheduled visit → provided visit** and **provided visit → new membership**—, tied to the same prospect (per-session idempotency) to close the funnel end to end.

**Dashboard.** A real-time executive panel for Sports World management: the four funnel stages with their conversion rates, traffic by source, time on page and exit points, and project progress. It requires the CRM to expose (Annex One catalog) the **guided-visit status** (scheduled / provided) and the **membership activation** associated with the prospect.

## 11 · Unified lead capture (site, BES, and internal console)

So that **all channels capture leads the same way** and reach the CRM in the same format, the project delivers **three entry points to the same questionnaire and the same idempotent write**:

1. **Public site** — the visitor completes the ideal-experience flow themselves.
2. **BES** — the agent applies the questionnaire by voice/text on the web channel.
3. **Internal console (authorized-personnel use only)** — a **restricted-access** section that lets **phone operators, club advisors, and any authorized person** apply the **same questionnaire** to any potential client (e.g., during a call or at the club) and **register the lead in the CRM**.

All three use the **same recommendation logic, the same questionnaire, and the same per-session idempotent write** to the CRM (via the middleware), so that a lead captured by staff reaches the pipeline **identically** to one from the site or BES —no duplicates, with the same profile, club, and visit—. This **harmonizes lead capture** across the entire operation. Access to the console is for **authorized personnel only**; Sports World defines the list of people.

## 12 · Sports World HTTP RESTful API standards

> **Client reference document (reproduced in full).** It is the basis on which the PROVIDER's middleware consumes Sports World's standard API (see §2). The specific list of services is defined during the project (requirements → proposal → adjustments).

The HTTP RESTful API is designed under a scalable and modular architecture with the goal of facilitating integration between different platforms.

### Basic design principles
- **Client-Server model:** Separates the user interface from data storage, improving the portability and scalability of the system.
- **Stateless:** The server does not store the context of previous requests; each request must contain all the information necessary for its processing.
- **Cache:** Responses must be explicitly defined as cacheable to optimize performance and reduce latency.
- **Uniform Interface:** Standardizes interaction through resource identification, manipulation via representations, and descriptive messages.

### Conventions and best practices
Optimization of HTTP protocol usage following these guidelines:

- **Descriptive URIs:** Use of plural nouns (e.g., `/usuarios`) avoiding the use of verbs in the path.
- **HTTP methods:**
  - **GET:** Reading data.
  - **POST:** Creating resources.
  - **PUT:** Full update.
  - **PATCH:** Partial modification.
  - **DELETE:** Deleting resources.
- **Status codes:**
  - **200 OK:** Successful operation.
  - **201 Created:** Resource generated.
  - **400 Bad Request:** Error in the request syntax.
  - **401 Unauthorized:** Invalid credentials.
  - **404 Not Found:** Nonexistent resource.
  - **500 Internal Server Error:** Failure in server processing.
- **Data exchange:** The JSON standard is used via the `Content-Type: application/json` header.

### Architecture and security
- **Version control:** Implementation of versioning in the URI to guarantee backward compatibility (e.g., `/v1/usuarios`).
- **Security:** Mandatory use of HTTPS and authorization protocols such as Bearer Token, OAuth 2.0, or JWT tokens. A bearer token is a digital security credential that grants access to protected resources in an API. Its key concept is simple: whoever holds the token ("bears it") gains access without needing to prove additional identity.
- **Documentation:** Use of OpenAPI / Swagger to generate interactive interfaces that facilitate consuming the endpoints. A tool that works on the standard is Postman, which will be a viable option for documentation.
