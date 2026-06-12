#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""English mirror of assemble_v5.py — same structure, EN sources."""
import json, glob, re, os

HERE = os.path.dirname(os.path.abspath(__file__))
raw = [s for s in json.load(open(os.path.join(HERE, '_sections_raw_v4.json'), encoding='utf-8')) if s['doc'] == 'experiencia']
trans = {}
for f in sorted(glob.glob(os.path.join(HERE, '_trans_*.json'))) + sorted(glob.glob(os.path.join(HERE, '_ptrans_*.json'))):
    if '_ptrans_zz' in f: continue
    for o in json.load(open(f, encoding='utf-8')):
        trans[o['id']] = o
enpatch = json.load(open(os.path.join(HERE, '_enpatch.json'), encoding='utf-8'))

def en_body(i):
    s = raw[i]
    if s['lang'] == 'en':
        return enpatch.get(s['id'], {}).get('body', s['body'])
    return trans[s['id']]['body']

AUDIT_PAREN = re.compile(r'\s*\((?:audit|auditoría|C-audit)[^)]*\)', re.I)
def clean(t):
    t = AUDIT_PAREN.sub('', t)
    t = t.replace(' (cierra C5)', '').replace(' (closes C5)', '')
    t = re.sub(r'\s*—?\s*audit [A-Z][0-9]+(–[A-Z]?[0-9]+)?[;,.]?', '', t)
    return t

PATCH = {
 '2-personas-y-customer-journey': [(
  "Where the research uses its own frameworks (8-phase funnel, \"10 questions\", Help Center, member portal), **what was agreed prevails**.",
  "Where the research uses its own frameworks (8-phase funnel, \"10 questions\", Help Center, member portal), this spec uses its normative structures: questionnaire Q1–Q19, flow phases and the page types of §3.")],
 '2-3-insights-del-consumer-journey-que-informan-el-dise-o': [(
  "> **Precedence.** The journey describes \"10 questions, 1 minute\" and artifacts from another workstream (Help Center, app, member portal). What was agreed prevails: **official 15+6 questionnaire (Rule 18)**; Help Center out of scope (Rule 37 — BES covers it); app/portal are separate workstreams. The completion-time target is measured against the official instrument (abandonment risk, §10.3).",
  "> **Scope note.** The research describes \"10 questions, 1 minute\" and artifacts from other projects (Help Center, app, member portal). The normative instrument is the **official 15+6 questionnaire (Rule 18)**; the Help Center is out of scope (Rule 37 — BES covers it); app and portal are separate projects. The completion-time target is measured against the official instrument (abandonment risk, §12.3).")],
 'page-inventory': [(
  "> **Precedence (client rule).** What is agreed in these documents has higher authority than any other document, **including the contract deliverables**. The contract (Anexo Dos I.1) fixes a limitative architecture of **145** pages; the **2 individual-training pages + 8 subgroup subpages** the spec adds (audit M4, Rule 20/38) are **authoritative signed pages**, raising the total to **155**. This figure prevails over the contract figure; the increase is formalized via a contract amendment (convenio modificatorio) as a mere formality, without conditioning the spec scope.",
  "> The signed scope of this spec is **155 pages** (the 12 types in the table). Type 12 (individual training) extends the original contract figure (145); the increase is formalized via contract amendment without conditioning this scope.")],
 'individual-training-subgroup-taxonomy': [(
  "Per the client precedence rule, these are authoritative signed pages and raise the total to 155 (superseding the contract's 145 figure).",
  "They are part of the signed 155-page scope.")],
 'site-data-and-structured-markup-rule-11-confirmed-site-data': [(
  "| 155 (145 contractual + 10 individual-training, audit M4 — spec precedence) |", "| 155 |")],
 'rule-13-schema-markup-schema-org': [(
  "**Course** (contractual type — Anexo Dos I.2.h and Appendix C; resolves F14. Per-club schedules may be complemented with Event per scheduled session, an engineering decision)",
  "**Course**. Per-club schedules may be complemented with `Event` per scheduled session (engineering decision)."),
  ("> Table **reconstructed** from the corrupted source `.docx` (text split mid-word); standard schema.org types. **Confirm with engineering/SEO** before production.",
   "All structured data must validate against Google's Rich Results Test before publication.")],
 'rule-33-summary-of-which-buttons-appear-in-each-state': [(
  "> **Reconstructed table** (corrupted zone in the source `.docx`). Each page's", "Each page's")],
 'flujo-de-aplicaci-n-del-cuestionario-experiencia-ideal-resum': [(
  "> **Regla de precedencia (cliente):**", "> **Normative vs. reference.**")],
 'ap-ndice-preguntas-abiertas-al-cliente-datos-auditor-a-202': [],
 'questionnaire-codes': [(
  "Cityclassificationcodes. CIUDAD-1, CIUDAD-POCOS, .See Rule 24.",
  "City classification codes: CIUDAD-UNO, CIUDAD-POCOS, CIUDAD-ZMVM. See Rule 24.")],
 'rule-37-pages-explicitly-out-of-scope': [(
  "transactionally; conversion is via .", "transactionally; conversion is via «Agenda tu visita guiada» (Rule 22).")],
 'rule-30-fitkidz-specific-buttons': [(
  "-[ Clases Fi tKidz disponibles) (Available FitKidz classes) -", "— «Clases FitKidz disponibles» (Available FitKidz classes) —")],
}

def get(i):
    s = raw[i]
    t = en_body(i)
    if s['id'] == 'rule-3-2-whatsapp-scope':
        for marker in ('Rule 4 - Side drawer', 'Rule 4 - Drawer'):
            if marker in t:
                t = t.split(marker)[0]
    for a, b in PATCH.get(s['id'], []):
        t = t.replace(a, b)
    return clean(t).strip()

H = {}
H['rule2'] = """On screens narrower than 1024 px the four left-side elements do not fit on a single row. The solution is two stacked rows:

- **Row 1 (header, 56 px):** Sports World logo (left) + red «Agenda tu visita» button (right).
- **Row 2 (editorial strip, 44 px):** Tu Sports World · Diseña tu experiencia · Pregúntale a BES.

Labels shorten according to the available width:

| Screen width | Labels shown |
| --- | --- |
| ≥ 1024 px (desktop) | Tu Sports World • Diseña tu experiencia • Pregúntale a BES |
| 480–1023 px (tablet / large mobile) | `[TBD — design: shortened labels]` |
| < 480 px (small mobile) | `[TBD — design: icons or minimal labels]` |"""

H['rule3'] = """BES («Pregúntale a BES — tu asistente Sports World») is a **global floating widget** present on every one of the 155 pages. It is not a destination page.

- **Floating button.** Anchored to the bottom-right corner on all pages and breakpoints. It does not move with scroll.
- **Chat panel.** Slides in over the current page (does not navigate to a new URL). Mobile: full-screen panel with a close button. Desktop: 420 px right-side panel.
- **Default mode:** text input and text response. A toggle in the panel header switches to voice input and voice output.
- **Header entry point.** The «Pregúntale a BES» header element (Rule 1) is a redundant entry point that opens the same panel.
- **Fallback URL.** Users without JavaScript, users following a shared link and search-engine indexers reach a server-rendered fallback page with a clear message and the same chat interface in a non-floating layout.
- **Context passing.** When opened, BES knows the current page type and its identifiers (club tag, amenity slug, goal slug, class slug), so it can answer page-specific questions without the user restating context.

BES is delivered as a separate project with its own specification; this document covers only its integration points with the site."""

H['rule31_1'] = """- It does not directly execute cancellations, freezes, plan changes or refunds. It captures the request, performs basic identity validation, opens a ticket in the client's CRM and offers to connect the user with a human Asesor.
- It does not answer deep health questions. It redirects them to the corresponding hub (Bajar de peso or the goal hub), which carries the medical reviewer's sign-off.
- It does not promise outcomes."""

H['rule4'] = """On hover (desktop) or tap (mobile) over «Tu Sports World», a side panel slides in from the right with the site's 8 main hubs:

- Clubs.
- Classes.
- Amenities.
- Profiles (goal hubs).
- Bajar de peso.
- FitKidz (children's program).
- Memberships.
- Journal (editorial articles).

The panel is 560 px wide on desktop and full screen on mobile. It includes a footer with social links and the privacy notice.

The three header items — «Diseña tu experiencia», «Pregúntale a BES» and «Agenda tu visita» — are **not** in the side panel: each piece of navigation lives in exactly one place to avoid duplication."""

H['rule5'] = """- Desktop: opens on hover over «Tu Sports World» with a 200 ms delay to prevent accidental triggers. Closes when the cursor leaves the panel, with a 300 ms grace period.
- Mobile: opens on tap. Closes on tap outside the panel or on tap of any item.
- Animation: slides in from the right in 320 ms; exits in 240 ms.
- Backdrop: while open, the rest of the page is covered with a semi-transparent veil (12 px backdrop-blur + black overlay at 40% opacity).
- Manual close: an "X" at the top left of the panel.
- Keyboard: `Esc` closes the panel; `Tab` cycles focus only within the panel while open (focus trap)."""

H['rule9caps'] = """The following rules apply to every piece of copy on the site:

- No exclamation marks. Not even on CTAs.
- No marketing-style all-caps. Capitals are allowed only in logos, acronyms (BES, GLP-1) or the initial letter of proper nouns.
- No emoji.
- No anglicisms where a Spanish word exists: membresía, not membership; asesor, not coach or advisor (the word «coach» may only appear inside proper class names from the catalog).
- Gender concordance: when Q2 = Mujer, all copy addressed to the user takes feminine forms (Q3, Q13, Q14 and the result)."""

H['rule14'] = """The following pages are classified as YMYL (Your Money or Your Life — Google search-quality terminology for content that can affect a user's health or finances):

- The Bajar de peso hub (entire page).
- The Rehabilitation goal hub.
- Journal articles on nutrition, rehabilitation and supplementation.

These requirements apply to all YMYL pages:

- **Visible professional sign-off** — the name and Mexican professional license number (cédula profesional) of the physician, nutritionist or physical therapist backing the content.
- **Health disclaimer** — before recommendations are shown, the user sees a notice that the information is orientational and does not substitute a medical consultation.
- **No numerical promises** — the site never says "you will lose X kilos in Y weeks". Recommendations are presented in phases, without promising a specific outcome.

(Rules about whether photos of the medical reviewer may be displayed are visual-asset production rules and live in the partner brief, section 6, not here.)"""

H['rule16fix'] = get_idx = None
H['rule17fix'] = None
H['rule22'] = """The 6 membership pages (1 hub + 5 plans) show for each plan: description, what is included, what is not, the price, the fine print and a comparison. **They include no transactional checkout.**

The conversion path from a membership page is «Agenda tu visita guiada», which captures the lead and routes it to the call center or the relevant club for a guided in-person visit. The actual sale happens in person at the club or by phone with the call center, not on the site."""

H['rule23'] = """The **«Tu Club ideal»** button appears in the contextual menu when:

- the user is on a page that is NOT an individual club page, and
- the user is not inside their ideal-experience flow.

On individual club pages it does not appear (the user is already at a club); instead «Otros clubes en tu ciudad» or «Otros clubes en el área» may appear, per Rule 24.

**Behavior on press:**

| Situation | What happens on press |
| --- | --- |
| No location inferred | The system presents questionnaire questions Q15 and Q16 (geographic intent: home, work, school, other; then city / neighborhood / ZIP). |
| Location inferred from the external search | The system presents Q15 and Q16 pre-filled with the inferred location; the user confirms or changes it. |

Once the location is captured, the system applies the geographic rules (Rule 24) to surface clubs based on how many exist in the indicated city."""

H['rule24'] = """The **«Otros clubes…»** button appears only on individual club pages. Its label and behavior depend on three factors:

**Factor 1 — how many clubs exist in the current club's city:**

| City type | Definition |
| --- | --- |
| CIUDAD-UNO | Only 1 club in the city. |
| CIUDAD-POCOS | 2 or 3 clubs in the city. |
| CIUDAD-ZMVM | More than 3 clubs (Mexico City + Estado de México metro area, 32 clubs). |

**Factor 2** — whether the user already chose a club explicitly via the questionnaire. **Factor 3** — whether the system has a location inferred from the external search.

**Button behavior:**

| City type | User state | Label | Action on press |
| --- | --- | --- | --- |
| CIUDAD-UNO | Any | (the button does not appear) | — |
| CIUDAD-POCOS | Club identified (by landing, selection or inference) | Otros clubes en tu ciudad | Shows the other 1 or 2 clubs in the city. No additional options. |
| CIUDAD-ZMVM | Club identified | Otros clubes en el área | Two options: (1) clubs near the current club (10 km radius); (2) clubs near a different location — the system asks home, work, school or other; then city / neighborhood / ZIP; then applies the city-count filter for the new city. |
| CIUDAD-ZMVM | No club identified, no inferred location | Tu Club ideal | The system presents Q15 and Q16 to identify the club. |"""

H['rule25'] = """The contextual menu is the set of buttons that appear as primary actions inside the page's body content (not in the header). It changes based on the page and the user's state at the moment of landing.

There are two kinds of buttons in the contextual menu:

- **Always-on buttons**, subject to global conditions that apply across nearly all pages.
- **Page-specific buttons**, which depend on the content of that particular page."""

H['rule26'] = """In the contextual menu of **every** page, in **every** state, the «Agenda tu visita guiada» button appears. It is the site's conversion action and has no exceptions. It is the body-content counterpart of the header button (Rule 6); both lead to the same booking flow."""

H['rule31'] = """When the user is on FitKidz and the system surfaces up to 3 proposed clubs (per the geographic rules in Rule 24), each club is presented with three buttons of its own:

1. **«Ver el club»** — leads to the individual club page.
2. **«Agenda tu visita guiada»** — guided-visit flow with that club preselected.
3. **«Clases FitKidz disponibles para tu familia»** — shows that specific club's FitKidz classes, with schedules."""

H['rule34'] = """A questionnaire-complete user whose result was generated more than 60 days ago is shown a non-blocking prompt offering to refresh their experience with current life context («¿Sigue siendo tu objetivo?»). If the user does not interact with the prompt, their result remains available unchanged. This prevents stale recommendations from biasing the contextual menu indefinitely."""

H['rule35'] = """Every page on the site meets WCAG 2.2 AA. Specifically:

- Minimum contrast 4.5:1 for body text and 3:1 for large text and UI components.
- Full keyboard operability with visible focus rings.
- Semantic HTML landmarks.
- ARIA labels on icon-only buttons.
- `prefers-reduced-motion` respected for animations.
- Touch targets ≥ 44×44 px (Apple HIG) and ≥ 48×48 dp (Material) on mobile.
- No interaction relies on hover alone."""

H['edge_tijuana'] = """**Trigger:** the user searches with a location where no Sports World club exists (e.g. "gimnasio en Tijuana").

**Behavior:** the user lands on Home, not on a club page. A neutral notice ("No tenemos club en Tijuana") accompanies two alternatives: search for the closest club via manual ZIP entry, or browse the full club list. The system does not auto-pick a far club."""

H['rule29'] = """The Journal's article tags (all lowercase, hyphenated) link articles to class pages, hubs and clubs for the Rule 10 cross-linking. The canonical tag list is `[TBD — content team: the list did not survive the source document intact; rebuild it with the editorial team before production]`."""

H['howto'] = """**Organization.** Sections 1–12 run from business to verification: rationale (§1), personas (§2), information architecture (§3), flows and states (§4), per-screen specification (§5), edge cases (§6), tokens and writing (§7), accessibility (§8), privacy (§9), handoff (§ 10), acceptance (§11) and metrics (§12). Appendices keep their **historical letter** as a stable identifier: B (out of scope), C (glossary), D (codes), F (result template), G (Asesor brief), H (LLM call). Appendix A (privacy) was folded into §9 and Appendix E (brand voice) lives in `anexo-contenido-prompts.md`. Rules (`Rule 1`–`Rule 43`) are stable identifiers; the rule index at the end maps each one to its section."""

# Rule 16/17: EN originals are intact — small fixes only
RULE16_FIX = [("Exception. When the user presses the button inside the site and provides their\n\nlocation through that flow, the location populates Q16 automatically. This is not search inference\n\n- it is direct capture from a user interaction.",
"**Exception.** When the user presses «Tu Club ideal» inside the site and provides their location through that flow, the location populates Q16 automatically. This is not search inference — it is direct capture from a user interaction.")]
RULE17_FIX = [("(e.g.,[ yoga Polanco bajar de peso)- a class+ a location+ a goal)",
"(e.g. «yoga Polanco bajar de peso» — a class + a location + a goal)")]

DOC = []
def w(t=''):
    DOC.append(t)
def sec(level, title, *bodies):
    w('#' * level + ' ' + title)
    w()
    for b in bodies:
        if b and str(b).strip():
            w(str(b).strip())
            w()

w('# UX Spec — Experiencia Ideal · Sports World')
w()
w('| Field | Value |')
w('|---|---|')
w('| Version | v5.0 |')
w('| Date | 2026-06-12 |')
w('| Authors | Product · Design · Engineering · QA (co-authorship pending sign-off) |')
w('| Status | In review |')
w('| Target stack | Next.js + React + TypeScript + Tailwind · SSR/ISR · headless CMS |')
w('| Handoff tool | `[TBD — link Figma inspect]` |')
w('| Package documents | `DESIGN.md` (tokens + premium guidelines) · `anexo-clinico.md` · `anexo-contenido-prompts.md` · `anexo-ingenieria-crm.md` |')
w()
w("> **How to read this document.** Sections 1–12 follow the standard order of a UX spec: from the why (business) to the what (architecture, flows, screens) and how it is verified (edge cases, accessibility, acceptance, metrics). Rules keep their stable number (`Rule N`) for cross-reference with code and annexes; the **rule index** at the end maps each rule to its section. Interface copy quoted in guillemets is verbatim es-MX.")
w()
w('## Table of contents')
w()
TOC_PLACEHOLDER = '@@TOC@@'
w(TOC_PLACEHOLDER)
w()
w('---'); w()

sec(2, 'Executive summary', get(1))
w('---'); w()
sec(2, '1. Design rationale', '')
sec(3, '1.1 Reasoning chain (Why → Who → What → How)', get(3))
sec(3, '1.2 Macro justification (business strategy)', get(4))
sec(4, 'Business objectives', get(41))
sec(4, 'Success measures', get(43))
sec(3, '1.3 Micro justification (specific decisions)', get(5))
sec(3, '1.4 Audience, brand and language', get(40), get(42), get(38))
w('---'); w()
sec(2, '2. Personas and customer journey', get(6))
sec(3, '2.1 Personas', get(7))
sec(3, '2.2 Customer journey — the funnel that connects the three goals', get(8))
sec(3, '2.3 Research insights that inform the design', get(9))
w('---'); w()
sec(2, '3. Information architecture and SEO',
    'The indexable surface is the lever of the traffic goal: 155 pages across 12 types, each with its own search purpose, live club data and structured markup.')
sec(3, '3.1 Page inventory', get(51))
sec(3, '3.2 Detail by page type', get(52))
sec(3, '3.3 Individual training: subgroup taxonomy', get(53))
sec(4, 'Q4 goal → subgroup mapping (Rule 38)', get(54))
sec(4, 'Official catalog — individual training programs', get(55))
sec(3, '3.4 Confirmed site data (Rule 11)', get(71))
sec(3, '3.5 Live data per club (Rule 12)', get(72))
sec(3, '3.6 Required cross-linking between pages (Rule 10)', get(70))
sec(3, '3.7 Structured markup schema.org (Rule 13)', get(73))
sec(3, '3.8 External search routing (Rule 15)', get(77))
sec(3, '3.9 Conventions', get(45), get(46), get(47), get(48))
sec(4, 'Scope boundary: what this document does not cover', get(49))
w('---'); w()
b16 = get(78)
for a, c in RULE16_FIX: b16 = b16.replace(a, c)
b17 = get(79)
for a, c in RULE17_FIX: b17 = b17.replace(a, c)
sec(2, '4. Flows, states and personalization', get(10))
sec(3, '4.1 User state with respect to the questionnaire (Rule 32)', get(97))
sec(3, '4.2 Inference from the external search (Rule 16)', b16)
sec(3, '4.3 Precedence between competing inferences (Rule 17)', b17)
sec(3, '4.4 Pre-filling by landing page (Rule 20)', get(82))
sec(3, '4.5 Application pipeline (questionnaire → result → brief)', get(56))
sec(3, '4.6 Stale-experience refresh (Rule 34)', H['rule34'])
w('---'); w()
sec(2, '5. Per-screen and per-component specification',
    'Each subsection follows the same order: purpose · behavior · content · states. The «user state → visible questions → contextual menu» matrices define the exact behavior per page type.')
sec(3, '5.1 Global header', '')
sec(4, 'Desktop structure (Rule 1)', get(58))
sec(4, 'Mobile structure (Rule 2)', H['rule2'])
sec(4, 'Header CTA «Agenda tu visita» (Rule 6)', get(66))
sec(4, 'Scroll behavior (Rule 7)', get(67))
sec(3, '5.2 «Tu Sports World» side panel', '')
sec(4, 'Contents (Rule 4)', H['rule4'])
sec(4, 'Behavior (Rule 5)', H['rule5'])
sec(3, '5.3 BES — global conversational assistant', '')
sec(4, 'Global widget (Rule 3)', H['rule3'])
sec(4, 'What BES does NOT do (Rule 3.1)', H['rule31_1'])
sec(4, 'WhatsApp scope (Rule 3.2)', get(63))
sec(3, '5.4 Contextual menu (recommendations, not menus)', '')
sec(4, 'What the contextual menu is (Rule 25)', H['rule25'])
sec(4, '«Agenda tu visita guiada» — always present (Rule 26)', H['rule26'])
sec(4, '«Tu Club ideal» button (Rule 23)', H['rule23'])
sec(4, '«Otros clubes…» button and geographic rules (Rule 24)', H['rule24'])
sec(4, 'Appears when the questionnaire is incomplete (Rule 27)', get(93))
sec(4, 'Appears when the questionnaire is complete (Rule 28)', get(94))
sec(4, 'Summary of buttons per state (Rule 33)', get(99))
sec(3, '5.5 SEO topic hub (e.g. `/bajar-de-peso/`)', get(12))
sec(3, '5.6 Home — behavior matrix', get(109))
sec(3, '5.7 Individual club page — behavior matrix', get(110))
sec(4, 'Other clubs in the area and class re-evaluation (Rule 43)', get(107))
sec(3, '5.8 Class pages', '')
sec(4, 'Premium Les Mills class — matrix', get(111))
sec(4, 'Regular class — matrix', get(112))
sec(3, '5.9 Goal hubs — matrix', get(113))
sec(3, '5.10 FitKidz', '')
sec(4, 'Specific buttons (Rule 30)', get(95))
sec(4, 'Clubs surfaced inside FitKidz (Rule 31)', H['rule31'])
sec(3, '5.11 Personal Training — matrix', get(114))
sec(3, '5.12 Journal — matrix', get(115))
sec(4, 'Article tags (Rule 29)', H['rule29'])
sec(3, '5.13 Memberships (Rule 22 — no checkout)', H['rule22'])
sec(3, '5.14 Individual-training pages', get(102))
sec(4, 'Individual weight training — matrix', get(117))
sec(4, 'Individual aerobic training — matrix', get(118))
sec(3, '5.15 BES via fallback URL — matrix', get(116))
sec(3, '5.16 «Diseña tu experiencia» questionnaire', get(13))
sec(4, 'Base questionnaire: 15 + 6 conditionals (Rule 18)', get(80))
sec(4, 'Weight-path conditionals Q17–Q19 (Rule 19)', get(81))
sec(4, 'Q4 allows up to two goals (Rule 21)', get(83))
sec(3, '5.17 Result — the Experiencia Ideal page', get(14))
sec(4, 'Combined 3-block structure (Rule 39)', get(103))
sec(4, 'Hard YMYL contraindication filter (Rule 14b)', get(75), get(76))
sec(4, 'Class selection algorithm (Rule 40)', get(104))
sec(4, 'Class replacement and full catalog (Rule 41)', get(105))
sec(4, '«Tu Club Ideal» card (Rule 42)', get(106))
sec(4, 'Result page matrix', get(119))
sec(4, 'Block 1 (weights) — user-facing presentation', get(121))
sec(4, 'Block 2 (cardio) — user-facing presentation', get(120))
sec(3, '5.18 Contact capture (Rule 32b)', get(15), get(98))
sec(3, '5.19 Scheduling and Asesor brief', get(16))
w('---'); w()
sec(2, '6. Edge-case and conditional-state matrix', get(17))
sec(3, '6.1 Geolocation denied or unavailable', get(123))
sec(3, '6.2 Search infers a location with no club', H['edge_tijuana'])
sec(3, '6.3 SEPOMEX (ZIP autocomplete) unavailable', get(125))
sec(3, '6.4 Form validation errors', get(126))
sec(3, '6.5 Questionnaire abandoned mid-flow', get(127))
sec(3, '6.6 Health disclaimer rejected', get(128))
sec(3, '6.7 BES asked an out-of-scope question', get(129))
sec(3, '6.8 Catalog or booking API unavailable', get(130), get(131))
sec(3, '6.9 Search with competing inferences', get(132))
sec(3, '6.10 Returning user with a stale experience', get(133))
sec(3, '6.11 JavaScript disabled or older browser', get(134))
sec(3, '6.12 Slow connection or data-saver mode', get(135))
sec(3, '6.13 Empty amenity or club lists', get(136))
sec(3, '6.14 Aquatic preference but the ideal club has no pool', get(137))
sec(3, '6.15 Q12 suppresses Block 1 and Block 2 at once', get(138))
sec(3, '6.16 Replacement class outside Q4 compatibility', get(139))
sec(3, '6.17 Club change yields no viable Block 3 set', get(140))
sec(3, '6.18 All three blocks suppressed', get(141))
w('---'); w()
sec(2, '7. Design system, tokens and writing', get(18))
sec(3, '7.1 Brand and editorial positioning (Rule 8)', get(68))
sec(3, '7.2 Editorial rules for all copy (Rule 9)', H['rule9caps'])
w('---'); w()
sec(2, '8. Accessibility (WCAG 2.2 AA)', get(19))
sec(3, 'Perceivable', get(20))
sec(3, 'Operable', get(21))
sec(3, 'Understandable', get(22))
sec(3, 'Robust', get(23))
sec(3, 'Per-page accessibility floor (Rule 35)', H['rule35'])
w('---'); w()
sec(2, '9. Privacy and data handling (Rule 36)', get(143))
sec(3, 'YMYL content (Rule 14)', H['rule14'])
w('---'); w()
sec(2, '10. Handoff and synchronization', get(24))
sec(3, '10.1 Pending client inputs', get(31))
w('---'); w()
sec(2, '11. Acceptance criteria', get(25))
w('---'); w()
sec(2, '12. Metrics and experimentation', '')
sec(3, '12.1 KPIs', get(27))
sec(3, '12.2 Lead scoring and routing', get(28))
sec(3, '12.3 Progressive profiling (recommendation)', get(29))
sec(3, '12.4 A/B testing', get(30))
w('---'); w()
sec(2, 'Appendix B — Pages explicitly out of scope (Rule 37)', get(145))
sec(2, 'Appendix C — Glossary', get(146))
sec(2, 'Appendix D — Code reference', get(147), get(148))
sec(2, 'Appendix F — Result page reference template', get(150))
sec(3, 'Visual structure (happy path)', get(151))
sec(3, 'Hard constraints', get(152))
sec(3, 'Suppression variants', get(153))
sec(3, 'Visual architecture (client view)', get(155))
sec(3, 'Safety section — contextual copy, not generic', get(156))
sec(3, 'Rejected elements (do not regress)', get(157))
sec(3, 'FitKidz — three-state render', get(158))
sec(3, 'Two-page split: client and Asesor views', get(159))
sec(3, 'Reference HTML (legacy, non-binding)', get(154))
sec(2, 'Appendix G — Asesor brief', get(160))
sec(3, 'Structure (10 sections in order)', get(161))
sec(3, 'Notes and flags (flag logic)', get(162))
sec(2, 'Appendix H — Single LLM call: schema and YMYL-aware prompt', get(163))
sec(3, 'Output JSON schema (single call)', get(164))
sec(3, 'Adaptive context', get(165))
sec(3, 'Sanitization and fallback', get(166))

w('## Appendix — Rule index')
w()
w('| Rule | Topic | Section |')
w('| --- | --- | --- |')
RULES = [
 ('Rule 1','Desktop header','§5.1'),('Rule 2','Mobile header','§5.1'),
 ('Rule 3','BES global widget','§5.3'),('Rule 3.1','What BES does not do','§5.3'),
 ('Rule 3.2','WhatsApp scope','§5.3'),('Rule 4','Side panel: contents','§5.2'),
 ('Rule 5','Side panel: behavior','§5.2'),('Rule 6','Header CTA','§5.1'),
 ('Rule 7','Header on scroll','§5.1'),('Rule 8','Brand and positioning','§7.1'),
 ('Rule 9','Editorial copy rules','§7.2'),('Rule 10','Cross-linking between pages','§3.6'),
 ('Rule 11','Confirmed site data','§3.4'),('Rule 12','Live data per club','§3.5'),
 ('Rule 13','Schema markup','§3.7'),('Rule 14','YMYL content','§9'),
 ('Rule 14b','Hard contraindication filter','§5.17'),('Rule 15','External search routing','§3.8'),
 ('Rule 16','Search inference','§4.2'),('Rule 17','Inference precedence','§4.3'),
 ('Rule 18','Base questionnaire 15+6','§5.16'),('Rule 19','Weight conditionals Q17–Q19','§5.16'),
 ('Rule 20','Landing pre-fill','§4.4'),('Rule 21','Q4 up to two goals','§5.16'),
 ('Rule 22','Memberships without checkout','§5.13'),('Rule 23','«Tu Club ideal» button','§5.4'),
 ('Rule 24','«Otros clubes…» / geography','§5.4'),('Rule 25','Contextual menu definition','§5.4'),
 ('Rule 26','«Agenda tu visita guiada» always','§5.4'),('Rule 27','Questionnaire incomplete','§5.4'),
 ('Rule 28','Questionnaire complete','§5.4'),('Rule 29','Journal tags','§5.12'),
 ('Rule 30','FitKidz buttons','§5.10'),('Rule 31','Clubs surfaced in FitKidz','§5.10'),
 ('Rule 32','User states','§4.1'),('Rule 32b','Contact capture','§5.18'),
 ('Rule 33','Buttons per state','§5.4'),('Rule 34','Stale-experience refresh','§4.6'),
 ('Rule 35','Accessibility floor','§8'),('Rule 36','User data and privacy','§9'),
 ('Rule 37','Out-of-scope pages','Appendix B'),('Rule 38','Individual training: pre-fill and result','§5.14'),
 ('Rule 39','3-block structure','§5.17'),('Rule 40','Class selection algorithm','§5.17'),
 ('Rule 41','Class replacement','§5.17'),('Rule 42','«Tu Club Ideal» card','§5.17'),
 ('Rule 43','Other clubs and re-evaluation','§5.7'),
]
for r,t,sc in RULES:
    w(f'| {r} | {t} | {sc} |')
w()
sec(2, 'Document control', get(35), H['howto'], get(37))

out = '\n'.join(DOC)

REFFIX = [
 ("Detalle completo en el documento técnico (Rule 14b).", "Full detail in §5.17 (Rule 14b)."),
 ("Full detail in the technical document (Rule 14b).", "Full detail in §5.17 (Rule 14b)."),
 ("see the normative count table in the Technical Part", "see the normative count table in §4.1"),
 ("ver la tabla normativa de conteo en la Parte Técnica", "see the normative count table in §4.1"),
 ("Detail in the technical document (Appendix G).", "Detail in Appendix G."),
 ("Global rules in Part 4.", "Global site rules; the rule index (at the end) maps each to its section."),
 ("Each per-page matrix in Part 5", "Each per-page matrix in §5"),
 ("per-page matrices in Part 5", "per-page matrices in §5"),
 ("per each Part 5 matrix", "per each §5 matrix"),
 ("the Part 2 scope boundary", "the §3.9 scope boundary"),
 ("(ver §3.3 y la tabla puente", "(see §3.3 and the bridge table"),
 ("Spec prose: English, for the production team.", "Spec prose: English edition (Spanish canonical lives in `resultados/`)."),
 ("CIUDAD-1, POCOS, CIUDAD-ZMVM", "CIUDAD-UNO, CIUDAD-POCOS, CIUDAD-ZMVM"),
 ("(Part 3)", "(§3)"), (" Part 3", " §3"), ("Part 5", "§5"), ("Part 6", "§6"),
 ("Part 2", "§3.9"), ("Part 1, Brand positioning", "§1.4, Brand positioning"),
 ("See Part 1.", "See §1.4."), ("declared in Part 2", "declared in §3.9"),
 ("§10.3", "§12.3"), ("see §10", "see §12"), ("Context of §10", "Context of §12"),
 ("live in **§3** and **§4**", "live in **§4** and **§5**"),
 ("are in **§3** and **§4**", "are in **§4** and **§5**"),
 ("per Appendix A.", "per the privacy policy (§9)."),
 ("templates in Appendix E", "templates in `anexo-contenido-prompts.md`"),
 ("Brand Voice Guide of Appendix E", "Brand Voice Guide (`anexo-contenido-prompts.md`)"),
 ("Appendix E", "`anexo-contenido-prompts.md`"),
 ("(§ 10)", "(§10)"),
 ("Relocated to `anexo-ingenieria-crm.md`.", "Lead-scoring and routing logic (weights, thresholds, CRM/sales rules) lives in `anexo-ingenieria-crm.md`; it defines no UI behavior."),
 ("See Part 3 and Rule 38.", "See §3.3 and Rule 38."), ("See Part 3.", "See §3.3."),
 ("subgroups in Part 3;", "subgroups in §3.3;"),
 ("per Rule 38 and Part 3, Individual-training subgroup taxonomy", "per Rule 38 and §3.3"),
]
for a, b in REFFIX:
    out = out.replace(a, b)
out = re.sub(r"^\s*•\s*•\s*$", "", out, flags=re.M)

toc = []
for ln in out.split('\n'):
    m = re.match(r'^(#{2,3}) (.+)$', ln)
    if m and m.group(2) != 'Table of contents':
        lvl = len(m.group(1))
        if lvl == 2:
            toc.append(f"- **{m.group(2)}**")
        elif lvl == 3 and re.match(r'^\d+\.\d+', m.group(2)):
            toc.append(f"  - {m.group(2)}")
out = out.replace(TOC_PLACEHOLDER, '\n'.join(toc))
out = re.sub(r'\n{4,}', '\n\n\n', out)
open('/home/user/Final-Upgrade-Webpage/resultados/en/ux-spec-experiencia-ideal.md', 'w', encoding='utf-8').write(out.rstrip() + '\n')
print('written:', len(out.split(chr(10))), 'lines')
bad = []
for pat in ['audit ', 'what was agreed prevails', ';;::', '((', 'conversion is via .', '[LSigue', 'Cityclassificationcodes', 'Part 4', 'Technical Part']:
    if pat in out:
        bad.append(pat)
print('residues:', bad if bad else 'none')
