<!-- fecha-edicion: 2026-10-06 -->
<!-- portada -->
Sports World Mexico
Experience Architecture
Lead acquisition, conversion and measurement
Website and self-guided experience
21 chapters and appendices
Integrated English edition - October 6, 2026
Current basis: D-119 and CEI-01 version 1.6
Version for review
The journey ends with the Ideal Experience email to the person and the brief email to the club. The dashboard
and measurement continue using the results supplied by Sports World.
<!-- /portada -->

# Front Matter {#front-matter}

**Sports World Mexico · Project A · Lead acquisition, conversion and measurement**

## 0.1 Document Control {#0-1-document-control}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Field** | **Value** |
|---|---|
| Document | Architecture of Experience · consolidated set |
| Date | 5 October 2026 |
| Version | Editorial close for revision · D-119 |
| Status | 21 written chapters; preserved previous approvals; 19–21 chapters for revision |
| Appendices | B, D, E and F written; A and C with exact source dependency |
| Instrument | CEI-01 1.6 version |
| Addressees | Commercial management, implementation team and verification owners |

### The Documentary Base {#the-documentary-base}

Eric's explicit instructions and the subsequent recorded decisions govern this review. The chapters are based on the consolidated set incorporating D-119 of October 5. CEI-01 v1.6 remains the sole instrument. Decisions apply together with their recorded supersessions; the complete addendum preserves the history.

The original experience and its integration documents provide the basis for the remaining sections. Superseded rules are interpreted through the current decisions. Contractual performance and content commitments retain the figures recorded in 1.7 and 20. BES service, WhatsApp service and the advisor console were excluded at the client's instruction, recorded in D-116.

The journey ends with the experience and brief emails. The funnel and dashboard retain the scope of D-118 and D-119. Sports World supplies attendance, activation and cancellation results.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Reference** | **Current function** |
|---|---|
| [Structural index](#document-structure) | Parts, parts and condition |
| [Decision log in full](#decision-log-architecture-review-addendum) | D-33 to D-119 decisions and replacements |
| [CEI-01 v1.6](#ideal-experience-questionnaire-cei-01) | Questions, preload and two routes |
| [Editorial standard](#editorial-standard) | Form of each section |
| [Chapter 18](#chapter-18-the-funnel-and-the-dashboard) | Single funnel reference and dashboard |
| [Appendix E](#appendix-e-source-contracts-field-by-field) | Data exchange contracts |

<!-- salto -->

## 0.2 How to read the set {#0-2-how-to-read-the-set}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Word** | **Meaning** |
|---|---|
| Must | Implementation obligation |
| Must not | Prohibition addressed to the implementation team |
| May | Option permitted by the rule |

A statement describing behavior also establishes the expected conduct. Test conditions retain their evidence and status. Approval of a chapter is recorded separately from verification of the implemented product.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Part** | **Chapters** | **Function** |
|---|---|---|
| I · Why it exists | 1–2 | Problem and product |
| II · What the system does | 3–18 | Behaviour, sources, operation and measurement |
| III · What is required of you | 19–21 | Incidences, thresholds and acceptance |

Archetypes, the design system, lead scoring and A/B tests retain the destinations specified in the structural index. The advisor uses the brief and provides subsequent service under SW's responsibility. The panel in chapter 17 permits authorized content and configuration updates.

<!-- indice: 0.3 Detailed Table of Contents -->

## 0.4 Glossary {#0-4-glossary}

<!-- tabla anchos=156.0,352.3 letra=10.0 -->
| **Term** | **Meaning** |
|---|---|
| Amenity | A club facility used for training: pool, steam room, sauna and other facilities in the catalog. |
| axe | Automated accessibility checking, accompanied by manual review. |
| Training Block | Each of the three parts of the plan: B01, B02 and B03. |
| Brief | Delivery to the club containing the profile, contact details, result and signals from the same experience version; with an appointment or as a direct call. |
| Personal Layer | Session-dependent menus and controls layered over shared public content. |
| CEI-01 | The Ideal Experience Questionnaire, version 1.6. The system's sole instrument. |
| Individual Class | A page dedicated to a discipline; includes 44 group disciplines and three individual training modes. Individual training in Q12 describes the training format. |
| Premium Class | One of the seven disciplines Sports World chooses to prioritize. Its page contains more text and images. |
| CLS | A unitless measure of cumulative content displacement. |
| Ideal Club | The single current club. A confirmed choice replaces the previous recommendation and governs calculation, menus and drafting. |
| CMS | Content management system and editorial page registry. |
| Coverage | The period and proportion of information available or reconciled. |
| Cohort | A group sharing an entry or activation period, tracked over a defined horizon. |
| Pending Queue | A protected record of operations with contact details awaiting handoff or confirmation; retention follows SW policy. |
| Legal-Age Gate | The first question in the journey. Determines whether to use the full experience or the reduced route. |
| Contingency | A condition that activates a valid fallback or leaves an identified operation pending. |
| Core Web Vitals | Real-world web experience metrics: LCP, INP and CLS. |
| 06:00 Snapshot | Daily synchronization with the customer system. Records entered through 05:59 are published that day. |
| CRM | SW's customer system; retains people, recorded sessions and appointments. |
| CRUX | Real-world experience data from Chrome users. |
| Dashboard | A panel of aggregated funnel results with attribution, dates and coverage. |
| Route Distance | Distance measured along a route; a comparison fallback when valid traffic data are unavailable. |
| E.164 | International format for normalizing phone numbers. |
| Ideal Experience | The training plan connected to the person's goals, with their club, blocks and classes. |
| Flag | A marker of an unmet requirement when comparing clubs. Acceptance preserves the exception and its signal in the brief for the current version. |
| Availability Flag | The marker "Available in your club" or "Not available in your club" for classes offered by goal. An in-person appointment uses assumed availability. |
| Strength of the Evidence Chain | How directly the evidence supports a class or program in relation to a goal. Three values: direct, one-step and by absence. |
| Funnel | Conversion stages and rates defined in chapter 18. |
| GA4 | Source of website session and event analytics. |
| Google Business Profile | Source of club profile views, calls and directions. |
| Hub | A page concentrating on a subject and linking to pages that develop it. |
| Idempotency | Repeating an operation with the same identity and a single result. |
| Session Identifier | web_session_id. Connects pages visited by the person and expires with the session. Remains on the person's side. |
| INP | Visual response time to interactions, in milliseconds. |
| JSON | Structured field format for data exchange and validation. |
| LCP | Time until the main content element appears, in seconds. |
| Session Key | session_uuid. Idempotency key and field in the session record. |
| Recognition Key | Identifies a returning person across systems: phone number in E.164 as the primary element; first name, last name and club distinguish people with the same name. |
| Contextual Menu | The menu that changes with page type and the person's state. |
| Main Menu | The same menu across all 148 pages. |
| Individual Training Mode | Each of the three ways to train without a class: weights, aerobic training and aerobic training in the pool. |
| Emotional Goal | What the person wants to feel when leaving the club. There are five. |
| Functional Goal | What the person wants to achieve with their body. There are six. |
| PageSpeed Insights | Performance inspection using lab data and field data when available. |
| Percentile | Position of a value in a distribution; the 75th percentile places 75 % of observations at or below that value. |
| Preload | The P0 block confirming what the system already knows before the first question. |
| Slot | Each of the three fixed positions in the contextual menu: club, experience and visit. |
| Question | Each question in the questionnaire. |
| Requirement | What the person requires from a club and the club must meet to be a candidate. |
| RUM | Performance measurement based on actual use. |
| Reduced Route | The journey for someone who does not confirm legal age; an on-screen club result with contact or arrival instructions. |
| Search Console | Source of Google search performance and crawling data. |
| Semrush | The agreed keyword monitoring and crawling tool. |
| Signal | The marker produced by an answer in the brief so the person providing service knows what to do with it. |
| Session | The period ending when the browser reports closure or after ten minutes of inactivity, whichever occurs first. |
| SSR | Content generated on the server and available in the page response. |
| SW | Sports World, owner of the operational data. |
| sw_person_id | The internal identifier assigned to a person by the system and retrieved through the recognition key. Stored in the CRM and database; never entered by the person. |
| TLS | Encryption of communications between services. |
| Peak-Hour Traffic | Travel conditions requested from the provider to express route time. |
| Threshold | A value the result must meet to be considered delivered. |
| UTM | Campaign parameters recording origin when present. |
| Calculated Version | The club, composition and decisions of a calculation and its drafted text. |
| WCAG 2.2 AA | Applicable Level A and AA criteria from the WCAG 2.2 accessibility guidelines. |

## 0.5 Table of codes and abbreviations {#0-5-table-of-codes-and-abbreviations}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Family** | **Form** | **Meaning** |
|---|---|---|
| Q## | Q1–Q17 and conditional | Questions |
| OE-# | OE-1–OE-5 | Emotional objectives |
| OF-# | OF-1–OF-6 | Functional objectives |
| B## | B01–B03 | Training blocks |
| REQ-# | REQ-1–REQ-4 | Requirements; class P0 as a conditional requirement |
| RN-## | RN-01–RN-nn | Business rules |
| E## | E0 and E2–E7 | Stages of Chapter 18 |
| C1[a–c] | C1a, C1b, C1c | Entry cuts |

P0 identifies the preload. D-## identifies a decision. The modes are named several meet the requirements, one meets the requirements, a qualifying club farther away, and the closest to your goal. Menu states are named Without questionnaire, With experience and With visit. Funnel codes retain their identities.

<!-- salto -->

<!-- parte -->
# Part I - Why It Exists {#part-i-why-it-exists}

<!-- salto -->

# Chapter 1 - We Will Create the Best Digital Fitness Lead** **Acquisition and Conversion System in Mexico {#chapter-1-we-will-create-the-best-digital-fitness-lead-acqui}

## 1.1 This is how we're going to do it. {#1-1-this-is-how-we-re-going-to-do-it}

**And that's how we're going to do it.**

Sports World stops selling a club, starts selling a result.

a lead delivers a minute of its time—between 17 and 20 questions, applied through the site's autonomous journey—and receives **its Ideal Experience** at **Sports** World.

A plan built on what you want to achieve: the club that best responds to your needs, the training blocks that correspond to you and the classes and disciplines that can bring you closer to your goal.

Those same answers feed the brief the club uses to continue serving the person. The experience and brief are sent by email when the browser reports closure or after ten minutes of inactivity, whichever occurs first.

**The person receives a plan. The advisor receives evidence. It is the same information, used from both sides of the conversation.**

That's the system.

The rest of this document explains how to build it.

## 1.2 Opportunity begins before lead reaches the club {#1-2-opportunity-begins-before-lead-reaches-the-club}

Sports World has 49 clubs, 47 disciplines and the infrastructure of a premium operator. However, much of that value remains invisible at the moment the decision begins: the search.

Today, none of the 49 club pages manages to fully communicate those assets to a search engine.

Of the keywords that people search for the category, Sports World currently covers the 31.1%.

The larger scale example clearly shows the opportunity. **"G**ym**nas**ium to **lose weight**" **generates 932,300 monthly searches**, the intention of greater volume of industry in Mexico, in a country where 75.2% of adults live with overweight or obesity.

Sports World appears only in the 0.02% of those searches.

And yet, many of the elements that a person might need to achieve that goal — trainers, evaluation, pool, steam and sauna — already exist within their clubs.

The problem is not the lack of assets.

**It's just that the market still can't find them.**

<!-- salto -->

## 1.3 Sports World starts from a difficult position to replicate {#1-3-sports-world-starts-from-a-difficult-position-to-replica}

The opportunity is especially relevant because the brand already has a significant advantage in organic presence.

Sports World **appears in** 17,400 **keywords**, versus 12,300 from Smart Fit, 5,600 from Sport City and 1,900 from Anytime Fitness.

That is: Sports World already has the greatest organic presence of the analyzed group and, even so, participates only in approximately one third of the category searches performed without writing the name of the brand.

There is still considerable space in searches where people express specific needs, objectives and preferences without having yet decided which brand can solve them.

And Sports **World** comes **to that space with** a fundamental advantage**: it already has within its clubs a wide enough offer to respond to many of those intentions.**

The opportunity is not simply to appear more.

It **consists of making visible what Sports World already has exactly the moment a person is looking for something that Sports World can solve.**

## 1.4 But winning the search isn't enough {#1-4-but-winning-the-search-isn-t-enough}

A well-kept search generates an opportunity.

Turning that opportunity into a membership requires connecting what happens before the click with what happens next.

That's where the project ceases to be a site redesign and becomes a commercial system.

The lead comes from a specific intention, answers the questions and receives its Ideal Experience.

The advisor receives the same information converted into a brief to conduct the visit.

The Academy prepares more than 200 advisors to work under the same logic.

The site delivers the customer experience and brief to the club by email. With these deliveries, the responsibility for this digital experience ends.

**The digital experience connects lead acquisition, customizing and delivering evidence for Sports World to continue the visit and sale.**

The place is no longer the center.

It's one of the interfaces of the system.

It all starts with a question:

**What do you want to accomplish?**

And everything that follows is organized around the response.

<!-- salto -->

## 1.5 The system changes the equation between price and value {#1-5-the-system-changes-the-equation-between-price-and-value}

The low price terrain already has owners. And when Sports World enters the conversation from the rate, it agrees to compete on a court designed by others.

The evidence is in the field: the price objection appears in the 100% of interviews with advisors. When the price dominates the conversation, the promotion ends up becoming one of the main resources to defend the sale.

The new system changes the starting point.

**Before talking about how much Sports World costs, it shows how much value it can have for that person.**

The lead comes to the visit with an experience built around its objectives, preferences and needs. The advisor can then explain how the club's coaches, disciplines, classes and amenities articulate to help you get what you're looking for.

The comparison ceases to be simply **price versus price**.

It becomes what I **want** to **achieve**, what **experience Sports** World **offers** me to **get** it and how **much that experience is worth** to me.

That change does not eliminate price sensitivity, but it moves the center of the commercial conversation from price to value and reduces the need to use the promotion as the main selling argument.

## 1.6 148 pages cease to be a catalogue {#1-6-148-pages-cease-to-be-a-catalogue}

**They** become 148 **gateway**s to the same system.

Each one built around a documented search intention.

Each one designed to respond to a specific need.

Each one connected with the same customization and conversion mechanism.

And all with a common exit:

**turn intention into a scheduled visit.**

The digital ecosystem stops organizing around what Sports World wants to show.

It **begins** to organize **around what the person is trying to solve.**

## 1.7 How we'll know it works {#1-7-how-we-ll-know-it-works}

Ambition is not supported only by a statement.

It is sustained in the ability to measure the system from point to point.

From the first search to membership and then to cancellation.

And every project commitment has a tool to check it out.

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **What you commit to** | **Today** | **At launch** | **Checked with** |
|---|---|---|---|
| Legible Clubs for a Search Engine | 0 of 49 | 49 of 49 | Google Search Console |
| Structured data by club | 0 | 49 | Google Rich Results Test |
| Broken links | 136 | 0 | Semrush |
| Speed, response and stability | Out of threshold | 2.5 s · 200 ms · 0.1 | PageSpeed Insights |
| Category keywords coverage | 31.1% | 55–65% at 12 months | Semrush |

And, above these metrics, you measure the result that really matters:

**traffic → scheduled visit → visit made → new membership.**

## 1.8 What changes for business {#1-8-what-changes-for-business}

The most important change is not on a page, a chatbot or an SEO metric.

**It's where the sale rests.**

Today, an important part of the outcome depends on the trade of those who attend the lead and the promotion available to support the conversation.

The new system introduces a common basis.

Every lead expresses what it wants to achieve.

Each visit can begin with a plan built from that information.

Each advisor works under the same logic.

The digital journey uses the same method on all pages.

And every weight invested in generating traffic can be followed up to the membership it produced.

That connects elements that until now could operate separately:

**the search intention, the digital experience, the personalized recommendation, the visit to the club, the commercial method and the business result.**

Sports World stops showing installations, disciplines and amenities.

It makes them the components of a personal response to a specific need.

**It's not just about showing everything Sports World has anymore.**

It**'s about** showing **each person what they can accomplish with it.**

And that's where the conversation changes.

**Sports World stops selling a club, starts selling a result.**

<!-- salto -->

# Chapter 2 - How People Who Have Already Decided to Join a** **Gym Are Lost Today {#chapter-2-how-people-who-have-already-decided-to-join-a-gym-}

## 2.1 Two different searches, two different decision moments {#2-1-two-different-searches-two-different-decision-moments}

**Who** writes **"Sport**s World" on a search engine probably already knows the brand. Find a club, location, schedule or specific information.

Who writes what he really wants—**lose weight**, **re-training**, **finding a gym** with **pool near** his home—is at another time in the decision.

He's already decided to do something.

What he hasn't decided yet is with whom.

And there's the opportunity.

Sports World can have exactly what that person is looking for and still stay out of comparison because the digital environment does not connect that need with what exists within their clubs.

The loss **occurs, therefore, at** one **of** the most valuable **moments of** the journey**: when there is already an intention to purchase and only the alternative is left to choose.**

## 2.2 The Three Ways People with a Strong Intention to Join Are Lost {#2-2-the-three-ways-people-with-a-strong-intention-to-join-ar}

### 2.2.1 The target not met {#2-2-1-the-target-not-met}

What happens. A person searches for "gym to lose weight" and Sports World appears in a marginal fraction of those searches.

What **it** costs. Sports World may have coaches, assessment, disciplines, facilities and services capable of responding to that need, but it never enters the comparison because nothing in the search establishes that relationship.

The person does not necessarily choose another gym because it is better to achieve their goal.

You can choose it simply because you found it first in response to what you were **looking** for.

What **Ideal Experience** does. Lose weight is one of the six objectives recognized by questionnaire. The need declared by the person becomes the starting point of the system and, from it, a concrete proposal is built with the club, training blocks, disciplines and classes that correspond to what it wants to achieve.

Necessity is no longer a key word.

It becomes a plan.

<!-- salto -->

### 2.2.2 The capacity that exists, but remains invisible {#2-2-2-the-capacity-that-exists-but-remains-invisible}

What happens. A person searches for "yoga near me." They are 14,800 searches per month. Sports World has yoga studios and instructors and, however, is out of the first 100 results.

The same problem can be repeated in other disciplines and needs that Sports World already has the capacity to attend.

What **costs**. Demand is lost for capabilities that already exist within the operation: built spaces, contracted instructors, programmed classes and equipment available.

The asset exists.

**What's missing is connecting them to the person who's looking for them.**

**What the Ideal Experience** does. It crosses the goal and the preferences declared by the person with the actual offer of each club.

Discipline ceases to appear as an element within a catalogue.

It happens to have a specific function within that person's plan.

### 2.2.3 The unnecessarily long road {#2-2-3-the-unnecessarily-long-road}

What happens. A person searches for gym near me. They are 751,000 searches per month. Instead of directly reaching a response relevant to their location and needs, they can land on a general page and have to find the right club for themselves.

Sports World managed to attract intent.

Then he asks the user to finish solving the problem.

**What it costs**. Complexity and friction make a significant part of leads quit before completing the journey.

Every unnecessary step — finding clubs, comparing locations, reviewing features, or finding out which one to take — creates a new opportunity to lose someone who had already shown intent.

You do not need to lose the click to miss the opportunity.

You may also miss the person after **you have gotten** them to come.

**What the Ideal Experience** does. Use the stated location and needs to identify the club that best responds to that person and drive it to a single next step:

**schedule the visit.**

<!-- salto -->

## 2.3 What the product is {#2-3-what-the-product-is}

**The** product is **Ideal Experience**.

It is the holistic and specific training plan that turns the technical superiority of Sports World into something that the person can understand and value before buying.

It's not a facility list or an inventory of classes.

It is a personal proposal that organizes Sports World capabilities around what a person wants to achieve.

From **its responses, the system** translate**s** objectives**,** preferences **and context into** a concrete experience**: what type of training it will perform, how it is structured, what disciplines and classes are part of it and in which club it can carry out.**

Technical superiority thus ceases to depend on the lead knowing everything Sports World has or on the advisor being able to explain it during the visit.

**The system makes it an experience designed for that person.**

Sports World stops presenting everything it offers and begins to demonstrate what it can do with it to **help** it **achieve** the **result** it **seeks**.

That's why the product isn't just access to a club.

**It is the result that Sports World proposes to help you achieve and the path designed to achieve it.**

### 2.3.1 What is the product and what is an input? {#2-3-1-what-is-the-product-and-what-is-an-input}

Classes, amenities, facilities, coaches, schedules and services are essential.

But they are not, by themselves, the product.

**They are the components with which the Ideal Experience is built.**

The difference can be verified with a simple question:

**Are we describing Sports World or are we explaining what Sports World means to this person?**

If a page, screen or conversation is limited to listing what the club has, it presents a catalogue.

If you organize those same assets around a person's target, start delivering the product.

### 2.3.2 Both recipients {#2-3-2-both-recipients}

The same information produces two different outputs.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Addressee** | **What you get** | **Purpose** |
|---|---|---|
| **The person** | Your Ideal Experience, built around your goals and preferences | To understand how Sports World can respond to what it wants to achieve before discussing membership |
| **The advisor** | The same information turned into a commercial brief | To drive the visit knowing what that person is looking for, what they cares about and what elements of Sports World are relevant to her |

They are two different documents in their function, but they are born from the same evidence.

**The person receives an experience. The advisor receives the context necessary to sell it.**

### 2.3.3 Where it is delivered {#2-3-3-where-it-is-delivered}

The Ideal Experience starts on the website, using the autonomous journey.

The pages lead to the same instrument, with the same questions, validations and rules. The previous navigation provides only the context that P0 can validate and confirm.

The person receives their experience on screen and can change clubs or classes during the session, according to the chapter 8. Each change recalculates the corresponding version.

When the browser communicates the tab closure or ten minutes of inactivity, whichever happens first, the system sends the final experience by email to the person and the brief to the club. Delivery requires the contact details of the complete route.

The **responsibility for** this **experience ends** with those **shipments**. Sports World continues the service in the club. The reduced route remains anonymous and delivers only the ideal club and the instructions to contact or arrive, on screen.

<!-- salto -->

<!-- parte -->
# Part II - What the System Does {#part-ii-what-the-system-does}

<!-- salto -->

# Chapter 3 - The Website: How People Arrive and How They Are** **Guided {#chapter-3-the-website-how-people-arrive-and-how-they-are-gui}

The public site of Sports World has **148 pages**, the figure that sets the Contract.

It's not 148 loose documents.

There are eleven **types** of page, each built to respond to a concrete search intention and all connected with the same output:

**the scheduled visit.**

This chapter sorts them out in three times: first, why each type of page exists and what problem it solves; then, what the site produces; and finally, how content and navigation lead the person to that result.

The **Appendix F** lists the 148 pages one by one, with its title and address.

## 3.1 The eleven types of page and the problem that solves each {#3-1-the-eleven-types-of-page-and-the-problem-that-solves-eac}

Chapter 2 documents three ways in which today a person may be lost with intent to enroll.

All three **occur** at the **same time: when someone writes in a search engine what they want to get and Sports World should be able to respond.**

The site turns those searches into specific gateways.

Instead of forcing the person to reach a general page and find the answer for themselves, each relevant intention has one or more types of page built to serve it in the language with which it was sought.

### 3.1.1 The three problems and the pages that answer {#3-1-1-the-three-problems-and-the-pages-that-answer}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Problem** | **What Happens Today** | **Pages responding** |
|---|---|---|
| **The target not met** | «Gymnasium for weight loss» represents 932,300 searches per month, the intention of greater volume of the fitness industry in Mexico. Sports World appears in around 0.02% of them | **07** and **08 types**: the six pages built around the questionnaire targets |
| **The capacity that** **exists, but remains** **invisible** | "Yoga Close to Me" represents 14,800 searches per month. Sports World has yoga studios and instructors and is out of the first 100 results. The same problem can be repeated with the rest of the catalog and the amenities | **Types 03**, **04**, **05** and **06**: pages built around amenities, disciplines and activities |
| **The unnecessarily** **long road** | «Gymnasium near me» represents 751,000 searches per month. The person can land on a general page and have to find for himself the club that corresponds to them. Every unnecessary step adds friction and creates a new opportunity to lose someone who already showed intention | **Type 02**: one page per club, findable by location and accessible directly from the search engine |

To these three situations are added two moments at the ends of the journey.

Before, there is someone who is looking for a solution but still does not know that Sports World can be an option. To that person responds **the type 11**, Blog, that the 3.10 section specifies.

Then there is someone who already knows their alternatives and compares price and conditions. To that person responds **the type 10, Membership**s.

In this way, the site does not attempt to respond only to those who already know Sports World.

It seeks **to be** present **from the time the need arises until the time comes to decide.**

### 3.1.2 The eleven types {#3-1-2-the-eleven-types}

Each type of page responds to a documented search intention.

**The existence of such an intention is the requirement for the type to exist.**

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Type** | **Pages** | **Search intent that** **attends** | **Problem Solving** |
|---|---|---|---|
| **01 · Home** | 1 | Who knows the mark and looks for it by name | Delivers site catalogue and input to questionnaire |
| **02 · Club** | 49 | ‘Gymnasium near me’ and the name of each neighborhood or zone | The unnecessarily long road |
| **03 · Amenity Hub** | 10 | ‘Gymnasium with pool’, ‘with steam’, ‘with sauna’ | The capacity that remains invisible |
| **04 · Premium Class** | 7 | The discipline sought by his name, among the seven that Sports World prioritizes | The capacity that remains invisible |
| **05 · Individual Class** | 47 | «Yoga near me», and so with each discipline of the catalog | The capacity that remains invisible |
| **06 · Activities for** **children aged 3** **months to 13 years** | 1 | ‘Gymnasium with activities for children of 13 years’ | The capacity that remains invisible |
| **07 · Objective** | 5 | Who seeks for the result he wants to achieve | The target not met |
| **08 · Lose weight** | 1 | ‘Gymnasium for weight loss’ | The target not met |
| **09 · Personal** **training** | 1 | «Personal trainer near me» | The capacity that remains invisible |
| **10 · Memberships** | 6 | Who already decided and compares price and conditions | The final comparison |
| **11 · Blog** | 20 | Who is looking for a solution before knowing that Sports World is an option | The search prior to the make decision |

Three terms of this table should be fixed from now on.

**A hub** concentrates a theme and connects the pages that develop it. The pool hub, for example, links the clubs that have it and the objectives for which it can be part of the training experience.

**A premium** class is one of the seven disciplines Sports World chooses to prioritize. Its page works just like any other class — same menu, same buttons, same preload. What changes is the depth of content: more text and more images.

**An individual** class is any of the 47 disciplines in the catalogue. Among them are the three modalities of individual training — with weights, aerobics and aerobics in pool—, which the 3.7.3 section treats separately because they use other buttons.

### 3.1.3 The six target pages {#3-1-3-the-six-target-pages}

The 07 and 08 types add up to six pages, one for each target the questionnaire offers in **Q4**, "What are you looking for?"

*Question* is the name that the chapter 5 uses for each question in the questionnaire.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Page** | **Objective of questionnaire** |
|---|---|
| **Lose weight · type 08** | Lose weight |
| **Body aesthetics and muscle** **definition** | Improve my body aesthetics and muscle definition |
| **Increase muscle mass** | Increase muscle mass |
| **Athletic performance** | Improve my athletic performance |
| **Cardiovascular capacity** | Improve my cardiovascular capacity |
| **Moving better with more** **agility** | Move better with more agility |

Correspondence is one by one.

The same target identity is used on the page, questionnaire, menu, and class matrix—the table that qualifies each discipline of the catalog against each target; chapter 12—and in the Ideal Experience.

In this way, the goal that led the person to Sports World does not disappear after the click.

**Accompany the entire journey.**

**The Lose weight** page also receives the treatment of health content specified in section 3.5.4: medical signature with card in sight, health notice and institutional video.

## 3.2 What the site produces {#3-2-what-the-site-produces}

148 pages can respond to different searches.

But they all feed the **same chain of conversion**.

The final goal of the site is to schedule a visit.

The previous three pieces exist for this visit to arrive qualified.

<!-- tabla anchos=90.0,110.0,100.0,90.0,118.3 letra=10.5 -->
| **Piece** | **What is it?** | **Who receives it?** | **When** | **Chapter** |
|---|---|---|---|---|
| **The** **questionnaire** | The instrument that collects the information needed to build the Ideal Experience of that person, in about one minute. It is applied in the autonomous journey of the site and constitutes the only source of customization of the system | The person answers it | When knocking on any of the four doors of section 3.6.8 | 5 |
| **The Ideal** **Experience** | The person's training plan: their club, their three training blocks, their classes and their schedules. It's the product of the system | The person | On screen, at the end of questionnaire | 4 |
| **The brief** | The same evidence transformed into the commercial document with which the advisor arrives at the visit knowing what the person who will receive | The advisor attending the visit | When closure is reported or after ten minutes of inactivity, whichever occurs first | 4 |
| **The scheduled** **visit** | The appointment in the club, with day and time | The person and the club | Upon completion of the scheduling process | 8 |

Ideal Experience and brief are born from **the** same **calculation**.

At the end of the questionnaire, the system solves the club, builds the training blocks, selects the classes and determines the experience that corresponds to that person.

From that same result produces two deliverables:

**Ideal Experience for the person and brief for the advisor.**

The source information is the same.

What changes **is who it presents itself for and what it is used for.**

The calculation is solved for each appointment.

If a person schedule a second visit to another club, they will not answer the questionnaire again: the system uses the answers they already gave and recalculates their Ideal Experience for that club.

That second appointment also generates its own **brief**.

Since any of the 148 pages, five mechanisms lead to this string:

**the top menu, the three states, the content of each page, the context menu and the preload.**

The following sections specify them one by one.

## 3.3 Top menu {#3-3-top-menu}

The top menu accompanies the person on the 148 pages and is identical in all of them.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Button** | **What It Does** |
|---|---|
| **Your Sports World** | Opens the catalogue of the site, with the eight hubs: clubs, classes, amenities, objectives, lose weight, activities for minors, memberships and blog. It is the structural navigation point of the site |
| **Design your experience** | Open the questionnaire |
| **Schedule your visit** | Opens the scheduling process. When an appointment already exists, it behaves as specified in section 3.6.5 |

The last two buttons are **parallel paths** to the same **conversion chain**.

The person can start directly from the questionnaire or go to the schedule using the journey standalone.

The system solves what is missing depending on the state you are in.

**Schedule** your visit is the conversion action of the site.

It is available on 148 pages and on any device.

The 2.3.3 section defines digital delivery: experience by email to the person and brief by email to the club, with the final status of the session.

## 3.4 The three states of the person {#3-4-the-three-states-of-the-person}

At any time, two facts determine the status of the person within the site:

1.  if you have already completed the questionnaire;
2.  if you already have a scheduled visit.

Since a visit cannot be scheduled without completing the questionnaire before, these two events produce only three possible states.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Status** | **Questionnaire** | **Appointment** |
|---|---|---|
| **Without** **questionnaire** | Pending | Without appointment |
| **With experience** | Completed | Without appointment |
| **With visit** | Completed | With appointment |

The state depends exclusively on these two facts.

It doesn't matter from which page the person arrives or what journey has followed to get there.

**Two people in the same state see the same system.**

All three states exist within a session: the period that begins when the person enters the site and ends when they leave or passes ten minutes without activity.

When the session is closed, the visible state of the site returns to Without questionnaire.

On a subsequent visit, the person is again treated by the site as someone with the questionnaire pending.

Chapter 9 specifies what information persists beyond session.

Once the questionnaire has been completed, the system resolves the ideal club of that person from its responses.

This club becomes a reference for several of the rules that appear in the following sections.

Chapter 10 specifies how it is determined.

## 3.5 The content of each page type {#3-5-the-content-of-each-page-type}

Each type of page has **a mandatory minimum** content.

Complying with it is a condition for publishing.

### 3.5.1 Where everything lives {#3-5-1-where-everything-lives}

The site follows a simple rule:

**the classes are shown within the objective to which they serve; the schedules, within the club that teaches them; and the amenities, within the club that has them.**

From that rule come three main surfaces:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Page** | **What does it show?** |
|---|---|
| **Club** | The six goals. Within each, the classes of that club that serve that goal, with their days and schedules, and the amenities of the club that that goal uses |
| **Objective** | All kinds of the system that contribute to that goal, all over the network. By touching a class, it leads to the page of that class. |
| **Class** | The clubs where it is taught. When you touch a club, the person arrives on your page, where you can check the days and schedules of that class. |

**The schedules are published in one place: the club page.**

The target page covers the entire network.

Once the questionnaire has been completed, the flag in the 3.6.6 section indicates which of these classes are available in the ideal club of that person.

<!-- salto -->

### 3.5.2 Minimum content, type by type {#3-5-2-minimum-content-type-by-type}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Page Type** | **Minimum content** |
|---|---|
| **Home** | Network value proposition · club search · links to the eight hubs · access to the questionnaire |
| **Club** | Name and full address · hours of service day by day · telephone and email · the six objectives, with the classes of that club serving each one, their days and schedules and the amenities used by that goal · map · club status: open, closed temporarily or next opening |
| **Amenity Hub** | Description of the amenity · clubs that have it, with link to each · objectives for which it can be part of the experience |
| **Premium class** | The same as an individual class, with a larger description and more images |
| **Individual class** | Description · benefits · level and intensity · clubs where it is taught, each with link to your page |
| **Activities for children aged 3** **months to 13 years** | The two sections specified in section 3.5.3 |
| **Objective** | Title with the keyword of the objective · 600 to 900 useful content words · FAQ · all classes of the system that contribute to that objective · links to clubs · links within the text to related blog articles |
| **Lose weight** | The same as a target page, plus the health treatment in section 3.5.4 |
| **Personal training** | Description of the service · the three modalities of individual training · links to the six target pages · clubs where it is offered |
| **Memberships** | Per plan: description · what includes · price · fine print · comparison between plans · current promotions |
| **Blog** | Article with its own content · links within the text to the object of the treatment and to the classes and clubs it mentions |

Four elements make that content something that a person can imagine within their own experience:

1.  **The actual schedules**, **day** by day, presented within each target on the club page.
2.  **The level** and **intensity** of each class, so that the person can evaluate whether it corresponds to what they seeks.
3.  **Classes grouped** by **objective**, which transform a catalogue into an answer.
4.  **The 600 to 900 words from the target pages**, designed to respond in sufficient depth to the search intention.

<!-- salto -->

### 3.5.3 The two sections of the activity page for minors {#3-5-3-the-two-sections-of-the-activity-page-for-minors}

The page is called **"Activities** for **children aged 3 months to 13 years**" and contains two sections:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Section** | **How it works** |
|---|---|
| **Classes for children** | It works like a target page. Its button says “Know the available classes” and opens the list. Playing a class shows the clubs that teach it and, when playing a club, their days and schedules |
| **FitKidz** | Shows the clubs where it is offered. Each result leads to the corresponding club page |

With the questionnaire completed, each class for children carries the flag for availability of the 3.6.6 section.

The context menu follows the same rules as any other page.

### 3.5.4 Treatment of health content {#3-5-4-treatment-of-health-content}

**The Lose weight** page and articles related to nutrition, rehabilitation and supplementation include:

-  specialist signature, with visible professional identity card;
-  health warning prior to any recommendation;
-  and, on the Lose weight page, an institutional video between 45 and 60 seconds.

The other five target pages do not require this treatment.

Three rules apply to content throughout the site:

1.  **No page must promise results in kilos or in timeframes.**
2.  **The** sale **is closed** at **the club** or by phone after the visit. The site publishes the prices within Memberships.
3.  **All health content must be signed by the specialist who supports it.**

### 3.5.5 Where the content comes from {#3-5-5-where-the-content-comes-from}

The site separates two types of information.

The **content** manager manages editorial content.

**Sports** World's CRM manages operating data that can change every day: hours of care, contact details, class catalog, class schedules, plans, prices, discounts and promotions.

Chapter 14 specifies the contract for each source.

The published version corresponds to **the** daily snapshot of **the 06:00, Mexico** City **time**.

At that time, the site takes from the CRM the information recorded up to the 05:59 and keeps that version until the next snapshot.

For exceptional cases — for example, a promotion that needs to be published immediately — there is manual synchronization.

If the CRM stops responding, the site does not interrupt the experience.

The page continues to display the last data saved and the person can complete the questionnaire and receive their Ideal Experience normally.

The incident is communicated to the club's commercial advisor.

The brief identifies what **data** was used and what **date** it was, so that the advisor can verify it before the visit.

## 3.6 The context menu {#3-6-the-context-menu}

The context menu is the set of buttons that appears inside the body of each page.

There is no separate page-by-page definition.

It is constructed by applying the same logic of decision on five variables:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Variable** | **Values** |
|---|---|
| **The questionnaire** | pending · Completed |
| **The appointment** | Without appointment · With appointment |
| **The Page Type** | The eleven types in section 3.1.2 |
| **Clubs around the ideal club** | Unique in your city · Two or more in the city, none to 5 km · Two or more, at least one to 5 km |
| **The objectives chosen** | One · Two, and if the goal of the page is one of them |

The first two variables produce the three states defined in section 3.4.

The menu is built from **three fixed slots**, present on all pages and in all states.

Then add, where appropriate, the buttons specific to each type of page.

### 3.6.1 The order of buttons {#3-6-1-the-order-of-buttons}

The order is always the same:

**club → experience → visit → buttons specific to the page.**

It is preserved in all eleven types of pages and in all three states.

Depending on the page and status, the menu contains **between three** and **five buttons**.

### 3.6.2 1 Slot · The Club {#3-6-2-1-slot-the-club}

The first slot depends on whether the questionnaire is pending or completed.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Status** | **What appears** |
|---|---|
| **Without questionnaire**, on any page, including that of a club | **Find** your **ideal club** — open the questionnaire |
| **With experience**, with or without appointment, on any page | **Meet other Sports** World **clubs** — display options calculated from the person's ideal club |

When the ideal club is already resolved, the options depend on what exists around it:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What's around the ideal club** | **What options are deployed** |
|---|---|
| **It's the only club in your city.** | Meet our clubs across the country |
| **There are two or more clubs** **in town, but none to 5 km** | Meet other clubs in your city · Meet our clubs all over the country |
| **There are two or more clubs** **in the city and at least one to** **5 km** | Meet other clubs in your area · Meet other clubs in your city · Meet our clubs all over the country |

The hierarchy advances **from the closest to the fur**thest**.**

Here two different radios coexist and must not be confused:

-  5 km is the scan radius. Determine which clubs may appear within **"Know other clubs** in your area".
-  **10 km** is the radio used by the system to resolve the ideal club, according to the rules of the chapter 10.

The kilometers determine which clubs enter each set.

The measure shown to the person is **the** time of **travel**, in **minutes**.

Each menu option appears only when you have at least one club to display.

That is why, in a city with only one club, the hierarchy begins directly in "**Know** our **clubs** across the country".

As long as the questionnaire is still pending, the slot opens Find your **ideal club**, because there is still no club from which to measure.

The reference must be the only valid ideal club. When the person confirms another club, it must replace the previous one as ideal club and update the menu options.

Who is viewing the Polanco page but has Satellite as ideal club will see the options corresponding to Satellite.

**Because that's the club around which your experience is being built.**

The Metropolitan Zone of the Valley of Mexico concentrates 32 of the 49 clubs, so the third case of the table will be the most frequent.

### 3.6.3 2 Slot · Experience {#3-6-3-2-slot-experience}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Status** | **What appears** |
|---|---|
| **Without questionnaire** | Design your experience |
| **With experience**, with or without appointment | Back to your Ideal Experience |

### 3.6.4 3 Slot · Visit {#3-6-4-3-slot-visit}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Status** | **What appears** |
|---|---|
| **Without appointment** | Schedule your visit |
| **With appointment** | Your scheduled visit — open the appointment to view, change or cancel |

### 3.6.5 What Does "Agenda Your Visit" Header When There Is Already appointment? {#3-6-5-what-does-agenda-your-visit-header-when-there-is-alrea}

The **Schedule** Your Header **Visit** button retains the same label on the 148 pages because it remains the site's main conversion action.

What changes is your behavior when the person already has an appointment.

Before starting a new schedule, the system asks if you want to visit another club.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Response** | **What Happens** |
|---|---|
| **No** | It takes you to your already scheduled visit |
| **Yes** | Asks you to select the new club, recalculates your Ideal Experience for that club using the answers you already gave and leads it to the schedule of that new visit |

The first appointment is preserved.

A person may have scheduled visits in two clubs.

Each appointment has its **own Ideal Experience** and **its own brief**, because different clubs can produce different combinations of classes.

The chapter 4 specifies both deliverables and the chapter 9 defines their writing and delivery when closing the session.

### 3.6.6 The availability flag {#3-6-6-the-availability-flag}

Once the questionnaire is completed, each class within a target list has one of two flags:

**Available in your club** or Not **available in your club**

"Your club" means **that** person's **ideal club**.

This area indicates the availability of classes to compare clubs. Club panels also show the flags requirements of the chapter 10.

The reason is functional: here the person is comparing options and needs to know that difference.

The Ideal Experience follows another logic.

As the chapter 4 specifies, the plan is built with **what is available** in the corresponding club and is delivered complete, without turning absences into part of the experience.

<!-- salto -->

### 3.6.7 The buttons specific to each type of page {#3-6-7-the-buttons-specific-to-each-type-of-page}

These buttons appear after the three fixed slots.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Button** | **Where it appears** | **What It Does** |
|---|---|---|
| **What's your target?** | Without questionnaire, Home, Club, Amenity, Class, Activities for Children, Personal training and Blog | Opens the questionnaire, starting with the context questions on the page |
| **Know the ideal** **classes for [the** **purpose of the** **page]** | In the six target pages, in the three states | Opens all classes of the system that contribute to that goal. With experience, also shows the flag in the 3.6.6 section |
| **Explore [the other** **target chosen]** | With experience, when the person chose two targets and is on the page of one of them | Take to the page of the other target chosen |
| **Knows the** **programs of [name** **of modality]** | In the three pages of individual training, in the three states | Opens the six objectives, each with the programme under this modality |
| **Your individual** **routine** | On the three pages of individual training, with experience | Opens the individual part of your Ideal Experience: the 01 and 02 blocks specified in the chapter 11. Appears for all people |
| **Other similar** **classes** | On the class pages, in all three states. | Shows classes grouped by intensity level and similar benefits |
| **Other similar** **articles** | On the blog pages, in all three states | Shows articles related to which the person is reading |

The classes corresponding to an objective are consulted on the page of that objective.

When one person chose two, they can go directly from one to the other **through Explo**ra [**the other objective**].

If you are browsing the page of a target you did not choose, you can return to your own from your Ideal Experience or through the top menu.

The blog articles are linked within the content, in the paragraph in which the corresponding topic is developed.

### 3.6.8 The four doors to the questionnaire and the context questions {#3-6-8-the-four-doors-to-the-questionnaire-and-the-context-qu}

Four buttons can start the questionnaire:

**Find your ideal club · What is your goal? · Design your experience · Schedule your visit**

All four open the same instrument.

What changes is **the valid context** of the **entire previous navigation window**, according to chapters 5 and 8.

Before the first question, the questionnaire confirms that context.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **From where he hit the button** | **What is confirmed before the first question** |
|---|---|
| **pool Page** | If you want your experience to include water training |
| **Page of another amenity** | If you want your experience to include that amenity |
| **Page of a Class** | If you want your experience to include that class |
| **Club page** | If you want that club to be your ideal club or prefer a recommendation |
| **Page of a target** | If that's your goal |
| **Activities for minors** | If you'd visit the club with your kids |
| **Blog** | The object of the article, when it has it and P0 validates it |
| **Home or Memberships** **without other valid** **candidates in the window** | After G0, continue with Q1 without P0 |

These questions do not again ask for information that navigation has already suggested.

**They confirm it.**

This mechanism is part of the preload presented in section 3.8 and specified in detail in chapter 5.

## 3.7 Menus, one by one {#3-7-menus-one-by-one}

The rules in section 3.6 apply to the eleven **page types** and **the three states**, which produces thirty-three base scenarios.

The three pages of individual training belong to the 05 type, but they use their own buttons and therefore appear in a separate row.

Within each cell, buttons are presented in the order set in 3.6.1.

Where it appears [**the purpose** of the page] the corresponding target name is used.

Where **it** appears **[another target**], the second target chosen by the person is used. That button only appears when you chose two and is on the page of one of them.

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Page Type** | **Without questionnaire** | **With experience** | **With visit** |
|---|---|---|---|
| **Home** | Find your ideal club · Design your experience · Schedule your visit · What is your goal? | Meet other Sports World clubs · Back to your Ideal Experience · Schedule your visit | Like With experience, replacing the third slot with Your scheduled visit |
| **Club** | Same as Home | Same as Home | Just like With experience, with Your Scheduled Visit |
| **Amenity Hub** | Same as Home | Same as Home | Just like With experience, with Your Scheduled Visit |
| **Premium class** | Find your ideal club · Design your experience · Schedule your visit · What is your goal? · Other similar classes | Discover other Sports World clubs · Back to your Ideal Experience · Schedule your visit · Other similar classes | Just like With experience, with Your Scheduled Visit |
| **Individual class** | Same as Premium Class | Same as Premium Class | Just like With experience, with Your Scheduled Visit |
| **Individual training ·** **three modes of type** **05** | Find your ideal club · Design your experience · Schedule your visit · Learn about the [modality] programs | Meet other Sports World clubs · Back to your Ideal Experience · Schedule your visit · Get to know the [modality] programs · Your individual routine | Just like With experience, with Your Scheduled Visit |
| **Activities for** **children aged 3** **months to 13 years** | Same as Home | Same as Home | Just like With experience, with Your Scheduled Visit |
| **Objective · five** **pages** | Find your ideal club · Design your experience · Schedule your visit · Know the ideal classes for [the purpose of the page] | Meet other Sports World clubs · Back to your Ideal Experience · Schedule your visit · Get to know the ideal classes for [the goal of the page] · Explore [another goal], where appropriate | Just like With experience, with Your Scheduled Visit |
| **Lose weight** | The same as Objective | The same as Objective | Just like With experience, with Your Scheduled Visit |
| **Personal training** | Same as Home | Same as Home | Just like With experience, with Your Scheduled Visit |
| **Memberships** | Find your ideal club · Design your experience · Schedule your visit | Meet other Sports World clubs · Back to your Ideal Experience · Schedule your visit | Just like With experience, with Your Scheduled Visit |
| **Blog** | Find your ideal club · Design your experience · Schedule your visit · Other similar articles · What is your goal? | Meet other Sports World clubs · Back to your Ideal Experience · Schedule your visit · Other similar articles | Just like With experience, with Your Scheduled Visit |

The With visit status retains **the With experience** status menu and modifies only the third slot:

**Schedule your visit → Your scheduled visit.**

### 3.7.1 How many buttons each page carries {#3-7-1-how-many-buttons-each-page-carries}

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Page Type** | **Without questionnaire** | **With experience** | **With visit** |
|---|---|---|---|
| **Home, Club,** **Amenity, Activities** **for Children and** **Personal training** | 4 | 3 | 3 |
| **Premium and** **individual class** | 5 | 4 | 4 |
| **Individual training ·** **three modalities** | 4 | 5 | 5 |
| **Objective and Lose** **weight** | 4 | 4, or 5 on the page of one of its two objectives | 4, or 5 on the page of one of its two objectives |
| **Memberships** | 3 | 3 | 3 |
| **Blog** | 5 | 4 | 4 |

The menu therefore contains **between three** and **five buttons**.

### 3.7.2 Memberships, the Shortest Menu {#3-7-2-memberships-the-shortest-menu}

Memberships uses only the three fixed slots in all three states.

You don't need extra buttons.

The reason is simple:

**Who is in Memberships is already comparing price and conditions.**

Experience slot allows you to return to your plan when you need it, without interrupting that comparison with new navigation routes.

The other pages that do not have their own goal show What is your **goal**?As long as the questionnaire is still pending.

The Blog also does this: an article is usually related to a specific need and the question appears precisely when the person is thinking about it.

Once the questionnaire is completed, those pages return to the three base slots.

Blog and Class also maintain their own button.

<!-- salto -->

### 3.7.3 The three pages of individual training {#3-7-3-the-three-pages-of-individual-training}

**Weight training**, **aerobic** training and **aerobic training in the pool** are part of the 47 individual classes of the 05 type.

However, their pages also function as target pages.

Each has its own button:

**Know the programs of [modality].**

That button opens the six objectives and shows, for each one, the corresponding program of that modality: the **name the person reads** and the reason why it **serves** them.

When playing a program, clubs appear where it is available.

From there you get to the page of each club.

In the case of aerobic training in the pool, the list is limited to clubs with pool.

With the questionnaire completed, each program also displays the flag for availability in the 3.6.6 section.

**The** programs are sections within those **three** pages, not new pages.

The contract sets 47 individual classes and these three are already included in the total.

Any additional page requires an amendment agreement.

The person sees only the name of the program and the reason why it **serves** them.

The equipment, protocol and technical name remain on the internal tab.

The coach defines equipment and loads during the first session.

Chapter 11 specifies the source of the programs and the contract to be performed.

## 3.8 What a person gets to questionnaire {#3-8-what-a-person-gets-to-questionnaire}

The pages in the previous navigation window contain information about what the person has just looked for or explored.

The system uses that context instead of ignoring it.

**He won't ask you again from scratch.**

That initial block is the preload.

Chapter 5 specifies the mechanism.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Type of home page** | **What preload** | **Question Form** |
|---|---|---|
| **01 · Home** | No candidate of your own; retains valid candidates from the window | No block only if the window does not provide candidates |
| **02 · Club** | That club. | Two options |
| **03 · Pool** | Aquatic training | Two options |
| **03 · Other amenities** | That amenity. | Two options |
| **04 and 05 · Classes** | That class. | Yes or no |
| **05 · Individual** **training** | The modality | Two options |
| **06 · Activities for** **minors** | That preference | Yes or no |
| **07 · Objective** | The purpose of the page | Yes or no |
| **08 · Lose weight** | This objective | Yes or no |
| **09 · Personal** **training** | Without its own candidate; it retains the previous valid context | No block only if there are no valid candidates |
| **10 · Memberships** | Without its own candidate; it retains the previous valid context | No block only if there are no valid candidates |
| **11 · Blog** | The object of the article, when it has | Yes or no |

‘Two options’ and ‘Yes or No’ are the two forms of confirmation defined in Chapter 5.

The first allows you to accept what the page **suggests** or **ask** for **a recommendation**.

The second allows acceptance or **rejection**.

Personal training is proposed to all people and its page does not provide a candidate of its own. After G0 P0 is applied if the window contains other valid candidates; otherwise Q1 continues.

The contextual information that the system knows comes from the navigation of that session: on which **page the person landed** and which **visited** later.

Section 5.2.1 specifies this mechanism.

The pages are related using `web_session_id`, the session identifier defined in the Funnel Map (Chapter 18).

`web_session_id` is a code of its own and random.

**It does not carry any data on the person, remains on the side of the person and never reaches the lead record.**

It must not be used as a key to link navigation to that record.

When a lead record exists, the identifier that belongs to that record is session_uuid.

The separation between the two is deliberate:

`web_session_id` **identifies the navigation of a session in the browser;** `session_uuid` **identifies the session registered within the system.**

Chapter 9 specifies the scope and persistence of both.

## 3.9 The page is the same for everyone; the menu is the personal layer {#3-9-the-page-is-the-same-for-everyone-the-menu-is-the-person}

Each of the 148 pages is generated from the 06:00 snapshot and served from cache.

**The basic content is identical for all people.**

Customization does not change the page.

It's added on top of it like a layer.

This layer includes:

-  the context menu;
-  the flag Available in your club **/ Not** available in your **club**;
-  **Explore [another objective**];
-  **Your scheduled** visit;
-  and Agenda behavior your header **visit** when an appointment already exists.

The layer is resolved from the status of the session and mounted on the base page.

The concrete implementation—server, distribution network, or browser—is left to the builder of the solution.

Five rules of design come out of that separation.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Rule** | **Specification** |
|---|---|
| **1 · Maximum buttons** | Each type of page reserves from the start the space corresponding to the maximum number of buttons it can have. Thus, the content does not change position when the menu changes status or is loaded afterwards. The maximum is five in Class, Blog, Individual training and Objective; four in Start, Club, Amenity, Activities for Minors and Personal training; and three in Memberships |
| **2 · With and without identifier** | Whoever arrives with web_session_id receives the layer corresponding to the status of that session. Whoever arrives without it receives the status Without questionnaire |
| **3 · If the script fails** | If the script responsible for the personal layer fails, the person must view the entire page with **the Without questionnaire contingency menu**, **whose four buttons** are **links**. This contingency menu always has four links and does not have to play the normal number of buttons corresponding to the page type according to 3.7.1. Application screens —questionnaire, Ideal Experience and agenda — require the script to work |
| **4 · No additional queries** | The flag of availability and the Explore button are resolved using information that the page already contains — including clubs where each class is taught — and the status of the session |
| **5 · Two environments, one** **step** | The questionnaire, the Ideal Experience and the agenda are application screens. The preload in the 3.8 section works as a bridge between the public pages and those screens. The design must make the step felt continuously: same header, same typography and same response speed. |

The fixed layer can use animations and transitions.

It has, however, two non-negotiable limits:

**performance and accessibility.**

The content must not be moved after having been painted, because this movement affects both the experience and the requirements of positioning in search engines.

## 3.10 Blog {#3-10-blog}

The first ten types of page mainly answer a question:

**What's up?**

What a club there is. What a class it is. What an amenity it has. What a membership it offers.

The Blog responds to another:

**What's good for me?**

That's why it occupies a different place within the journey.

Listen to the search that happens before the person knows **that Sports** World can be **an option**.

And from there he connects her to the rest of the system.

Two rules govern his articles:

1.  **Each** article must **provide its own content**, different from the content of the target page to which it relates.
2.  **Each** article must **link** within its own text to the target of the topic and to the classes and clubs it mentions. The link must appear in the paragraph in which the person is reading on that subject, not as a list disconnected at the end.

In this way, the type 11 feeds the previous ten.

The health-related articles must follow the treatment of section 3.5.4:

**specialist's signature with visible professional card and health notice.**

The content must describe how the training can be adapted and refer, where appropriate, to the assessment of the advisor and the health professional.

<!-- salto -->

# Chapter 4 - What the Person Receives and What the Advisor** **Receives {#chapter-4-what-the-person-receives-and-what-the-advisor-rece}

For each version of the experience, the system solves the plan once and uses that result to produce two deliveries.

**The person receives their plan. The advisor receives the same evidence turned into a tool to drive service and close the sale.**

The two deliveries are born of the same answers, the same rules and the same calculation.

What changes is who **receives** them and what they are used for.

## 4.1 One calculation, two deliveries {#4-1-one-calculation-two-deliveries}

When the person finishes the questionnaire, the system executes the full calculation of its Ideal Experience.

That calculation solves your club, builds your three training blocks, selects your classes and generates the information that composes your plan.

That result feeds two deliveries:

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Delivery** | **Who receives it?** | **When** |
|---|---|---|
| **The Ideal** **Experience** | The person | On screen, at the end of questionnaire |
| **The brief** | The club that must continue the service | **At the close communicated by the browser** **or after ten minutes of inactivity, what** **happens first. Contact: one by** **appointment; without appointment, to the** **club resolved as direct call** |

The two must agree on all the facts that they share.

The Ideal Experience presents to the person the plan Sports World built for her.

The brief takes the same plan and the same evidence, incorporates the contact details and, where it exists, the appointment data, and organizes them so that the advisor can prepare the visit or **continue the service through direct call**, **conduct** the **conversation** and **close** the sale.

**When contact details are supplied, having an appointment must not be a condition for generating or delivering the brief. Without contact details, no brief is generated for the club.**

If appointment does not exist, the brief must correspond to the identified club and must be identified as direct call.

If an appointment exists, there must be a specific brief for that appointment and for the club where it was scheduled.

**brief must not produce a recommendation other than that received by the person.**

It can change the language, order and purpose of the information, but not the facts that underpin the plan.

The chapter 13 specifies how writing is generated and what must happen when automatic writing fails.

### 4.1.1 An experience for the identified club; one for each additional appointment {#4-1-1-an-experience-for-the-identified-club-one-for-each-add}

The first Ideal Experience is calculated at **the end** of **the questionnaire**, using the club that the system solved for that person.

This experience must exist even if the person does not request a visit.

The same calculation feeds the brief of the identified club. Its delivery requires contact and waits for the closure of session, with all the changes made until then.

If there is contact details and there is no appointment:

-  the Ideal Experience of the club must be retained;
-  brief must be generated for the same club;
-  and the brief must be marked as direct call, so that the advisor can continue the service.

If the person schedules a visit to that club, the appointment must be linked to the corresponding Ideal Experience and there must be a brief for that appointment.

If you then schedule a visit to a second club**, you must not reply to the questionnaire** again.

The system must use the answers already given and recalculate the complete experience against the catalog of the second club.

That new appointment must have:

-  its own Ideal Experience;
-  and his own brief.

Two different clubs can produce different classes, combinations and arguments.

That is why each appointment must be linked to **the Ideal Experience version corresponding** to the **club** where it will be **performed** and to its own brief.

The rule is:

**with contact and without appointment, there must be an Ideal Experience and a brief for the identified club; with appointment, an Ideal Experience and a brief for each appointment and corresponding club.**

The chapter 8 specifies the calculation and sending of the final state; the chapter 9 establishes its persistence. Responsibility for this experience ends with email to the person and the brief to the club.

### 4.1.2 Two pages per delivery {#4-1-2-two-pages-per-delivery}

Each of the two deliveries must be arranged in two pages.

On screen, a separator must clearly indicate where the 1 page ends and starts the 2 page.

When printing, that separator must not appear and the 2 page must start on a new sheet.

<!-- salto -->

## 4.2 What the person sees {#4-2-what-the-person-sees}

The Ideal Experience must answer two questions in this order:

**Where am I going to train?**

and then:

**What am I going to do there?**

### 4.2.1 Page 1 · Who you are and where you are going to train {#4-2-1-page-1-who-you-are-and-where-you-are-going-to-train}

The first page solves the context of the experience.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Element** | **What it contains** |
|---|---|
| **Heading** | Your name, opening phrase and the argument of why that combination corresponds to you |
| **Recommended club** | The club, its travel time in minutes and the reason why it is recommended |
| **Family benefit** | Children's activities available at the club, when the person's responses activate them |
| **Other clubs nearby** | Panel that opens on request, with relevant alternatives and what each one provides |
| **Summary cards** | Four boxes with the essentials of your profile |
| **Forward button** | **Schedule guided tour** |

### 4.2.2 Page 2 · Your recommended combination {#4-2-2-page-2-your-recommended-combination}

The second page answers what the person will do at that **club**.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Element** | **What it contains** |
|---|---|
| **The three blocks** | 01 block, 02 block and 03 block, each with its contents and the reason why it is part of the plan |
| **Change Classes** | Panel that opens on request, with other suitable classes and the catalog of the club available for consultation |
| **Security Section** | The preventive text corresponding to the responses allowed by the questionnaire, without inferring or recording health conditions |
| **Infrastructure argument** | What the network of 49 clubs puts behind that plan |
| **Closure** | Forward button and restart option |

<!-- salto -->

### 4.2.3 The plan is recomposed when the person changes something {#4-2-3-the-plan-is-recomposed-when-the-person-changes-somethi}

**The** person can **change** clubs and **can change** classes.

Each change affecting the composition of the experience must produce a new calculated version of the plan.

The system must not be limited to replacing the piece that changed.

**You must resolve the plan as a whole.**

If you change clubs, the system must recalculate the experience against the new club catalog: blocks, classes, mode and time of travel.

If you change a class within the same club, you must recompose the affected blocks and classes to preserve the coherence of the plan.

The chapter 11 specifies which elements are recalculated and in which order.

Each change must return **a complete** plan.

If the new club delivers a capacity in another way, the system must replace it with the alternative corresponding to the same objective.

The previous version is no longer the active experience for that journey.

If the person already has a scheduled visit and changes club, the system must **recalc**ulate **the complete experience** against the **new club** and **ask them again day** and time within the **opening calendar** of that **club**, because the one they had chosen belongs to the previous club.

### 4.2.4 flags exist to choose and disappear when choosing {#4-2-4-flags-exist-to-choose-and-disappear-when-choosing}

As long as the person compares clubs, each alternative must show **the corresponding flags** and **the concrete text** of what **they deliver less** than their **requirements**.

a flag is available as a requirement and must be shown all those applying:

-  **No pool**;
-  **No activities** for **children under 13** years of age;
-  **It does** not have **appropriate classes** for **prenatal** or **postpart**um periods;
-  **He doesn**'t have **low-impact** classes.

When the person accepted a class through the preload questionnaire and an alternative club does not offer it, a flag that names that class must also appear.

flags exists so that the person can compare with sufficient information.

**As soon as a club is selected, the flags must disappear from the person's Ideal Experience.**

The system must recalculate the plan against the chosen club and deliver a complete solution with the capabilities available there.

If the club does not have pool and pool was not **an hard requirement** from the experience, the plan must solve the three blocks with alternatives that that club can deliver.

If the chosen or resolved modality requires pool, according to chapter 5, the system must not automatically recommend a club without it. If the person confirms the change after agreeing to exclude the aquatic component, that club must replace the previous one as the only existing ideal club, according to chapter 10.

Ideal Experience must not submit a list of absences to lead.

You must present the plan that **you can make**.

If the person reopens the panel of other clubs, the flags must appear again there, because that surface retains its comparison function.

### 4.2.5 The scope of what the person sees {#4-2-5-the-scope-of-what-the-person-sees}

The Ideal Experience must be resolved against the only existing ideal club and each block must contain only what that club can deliver.

Two rules govern its two pages:

1.  **The Ideal Experience pages must present the plan solved and only the plan solved.**
2.  **Neither of those two pages must name what the club does not teach.**

**These** rules apply to **the experience delivered**, not to surfaces whose function is to help you choose.

The panel of other clubs must display their flags while the person compares alternatives, according to section 4.2.4.

The list of classes by goal of the site must show the flags Available in your **club** or Not **available** in your **club**, according to section 3.6.6.

In both cases, the comparison exists because the person needs that information to decide whether to change the alternative.

## 4.3 The autonomous journey {#4-3-the-autonomous-journey}

The person completes the questionnaire and consults its result through the site interface. You can change the club or classes with the actions allowed on screen.

Each change applies the 4.2.3 recalculation rules and retains the original answers. The chapter 8 specifies the journey and the final delivery by email.

## 4.4 What the advisor reads: the brief {#4-4-what-the-advisor-reads-the-brief}

brief is **the same evidence that produced Ideal Experience, organized** to make **it** a **commercial** tool.

It must allow the advisor who continues the service to know:

-  who the person is;
-  what you want to achieve;
-  What do you care;
-  what is to be validated;
-  what journey or conversation should be conducted;
-  and what arguments are relevant to closing the sale.

When appointment exists, the brief prepares the visit.

When appointment does not exist, you must allow the club advisor to continue the service with **direct call**.

brief can translate evidence into commercial language.

**It must not contradict, replace or expand with unsubstantiated facts the plan received by the person.**

<!-- salto -->

### 4.4.1 Page 1 · Who is coming or who is to be contacted {#4-4-1-page-1-who-is-coming-or-who-is-to-be-contacted}

The first page contains the necessary data to identify the context of service and the start of the brief.

When appointment exists, it must include the corresponding confirmation.

When there is no appointment, you must identify the case as direct call.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Block** | **What it contains** |
|---|---|
| **Context of care** | With appointment**:** club**,** address**, date and time**. Without appointment: identified club **and** brand **Direct call** |
| **brief Header** | Full name, training level, profile and date labels |
| **§1 · lead Profile** | Eight fields with what he declared |
| **§2 · Logistics and contact** | Club, location, with whom I would visit the club, phone and email |

When appointment exists, the confirmation of club, address, date and time is also the information that the person must keep.

### 4.4.2 Page 2 · How service is directed {#4-4-2-page-2-how-service-is-directed}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Block** | **What it contains** |
|---|---|
| **§3 · What to validate** | Five questions to confirm what the person stated |
| **§4 · Recommended route** | With appointment, four steps in order to drive the journey through the club. Without appointment, it must serve as a preparation for conversation and for a possible visit |
| **§5 · Recommended proposal** | The main offer and its complement |
| **§6 · Closing priorities** | Three points sorted by relevance |
| **§7 · Notes and Signals** | Signals raised from the questionnaire and system |
| **§8 · The time adjustment** | When the plan exceeds the Q8 days or the session duration of Q17: what the person stated, what the plan requests according to Q12, and the two outputs—explain to you why a greater commitment serves you, or adjust the plan with it during the visit |
| **Closing script** | A conversation proposal written in the first person for the advisor |
| **advisor ' s registry** | Four empty boxes that the advisor completes during the interaction |
| **Foot** | The legend of internal use |

<!-- salto -->

### 4.4.3 brief Signals {#4-4-3-brief-signals}

Signals are warnings constructed from the questionnaire responses or operational contingencies of the system itself and placed in the view of the advisor.

**A signal must not modify the plan.**

It must provide context for the advisor to know what to **consider** or **validate** during **the conversation**.

The 5.9 section lists the signals and identifies their origin. An accepted class in P0 that differs from objectives or preferences is conserved and generates a flag only in the brief. Q12 individual excludes groups; arriving on its own account in Q13 is compatible with choosing them.

Signals built with the person's responses can only use information that the questionnaire is authorized to collect.

Paragraph 5.8 sets that limit:

**preferences and functional needs, never health conditions.**

The system must not use a permitted response to infer a medical condition that the person did not declare and that questionnaire is not authorized to register.

### 4.4.4 When another club delivers the best experience {#4-4-4-when-another-club-delivers-the-best-experience}

The brief must include an additional signal addressed exclusively to the advisor when **the club associated** with the care **meets fewer profile requirements** than **another club identified** by the system.

That associate club may be:

-  the appointment club, when there is a scheduled visit;
-  or the identified club, when the case is marked as direct call.

The signal must identify:

-  what requirement that club does not meet;
-  And what club does.

The system must make such information available to the advisor.

**The decision on how to use it is up to the advisor.**

You can:

-  propose to move or schedule a visit to another club;
-  mention it during the conversation or the journey;
-  or resolve the experience within the club associated with care, provided that it can do so without contradicting the exclusionary requirements defined by the system.

The difference between surfaces is deliberate:

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Area** | **Who decides what to** **communicate** | **Which rule applies** |
|---|---|---|
| **Website**, where the person progresses autonomously | The system | flags appear while comparing and disappearing when choosing, according to 4.2.4 |
| **Brief delivered by** **email to the club** | The club's advisor, outside the journey digital | The signal accompanies the delivery for Sports World to continue the service |

The freedom of the advisor applies to how the **conversation leads**.

It does not allow you to retroactively alter the questionnaire responses or the logic with which the system calculated the Ideal Experience.

## 4.5 Why the Club Goes First {#4-5-why-the-club-goes-first}

The Ideal Experience is ordered around a simple decision sequence.

After completing the questionnaire, the first answer the person must receive is:

**where you can carry out your experience.**

That is why the club appears immediately after the header, before the detailed summary of its profile and before the composition of the training.

Once the place has been resolved, the second page answers:

**What are you going to do there?**

And then it explains the backing that Sports World puts behind that combination.

The complete logic is:

**first where, then what and finally what I back up with.**

<!-- salto -->

# Chapter 5 - The Questionnaire: The Only Instrument {#chapter-5-the-questionnaire-the-only-instrument}

All Ideal Experience customization comes out of one instrument: **Questionnaire** Ideal Experience, identified as **CEI-01**.

The current version is **the 1.6**, and lives in this same folder.

**Any system customization rule must be based on a data collected or confirmed by CEI-01.**

Operating signals generated by the system itself, such as outdated data, are regulated separately.

## 5.1 Role and purpose {#5-1-role-and-purpose}

The questionnaire has a job:

**collect what it takes to build that person's Ideal Experience, in about a minute of your time.**

Three rules govern the site's autonomous journey.

1.  **The instrument must be the same throughout the website. CEI-01 questions, options, validations, branches and identifiers are retained at every entry point to the self-guided journey.**
2.  **It** must be the **only source** of **customization**. Each rule of recommendation must consume a response collected or confirmed by this instrument.
3.  **It** must **collect stated preferences**. The 5.8 section sets the scope of the instrument and the legal reason for it.

questions must be identified with the Q**##** key, the same used in CEI-01 and in the 0.5 code table.

## 5.2 preload: what we already know is confirmed {#5-2-preload-what-we-already-know-is-confirmed}

Before the first question, **the person must be confirmed**, in **a single block**, what the system already **knows** from the context of that **interaction**.

This block is called P0 **· Preload** and is part of the instrument.

It must be identified with that key, composed in each session with the context available and resolved after the legal age gate and before the first question.

### 5.2.1 Where what we already know comes from {#5-2-1-where-what-we-already-know-comes-from}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Channel** | **Prior knowledge** | **When the context is empty** |
|---|---|---|
| **Website** | The pages that the person visited before opening the questionnaire | Direct entry at start: block omitted |

**On the site, prior knowledge must be limited to navigation.**

Google delivers the visit, but the term the person wrote remains on Google's side.

The system knows which **page it landed** on and **which one** it **visited** later.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What the system has** | **What remains out of scope** |
|---|---|
| The landing page and the rear journey | The search term that brought her |
| Who came to Polanco's yoga page | If you wrote “yoga near me” or “Polanco yoga classes” |
| The campaign tab, when it comes from a | The original consultation, even in campaign |

The system must not infer or reconstruct the original query from that navigation.

### 5.2.2 The four categories and the two forms {#5-2-2-the-four-categories-and-the-two-forms}

Four types of information can be preloaded.

Each has a fixed form of confirmation within **P0**.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Category** | **Confirmation form in P0** | **How it sounds** |
|---|---|---|
| **Club** | Accept or request recommendation | “Would you like us to take that club as your ideal club, or would you rather we make a recommendation?” |
| **Amenity** | Accept or request recommendation | “Would you like us to include water training, or would you prefer to be recommended?” |
| **Class** | Yes or no | “Would you like us to include yoga in your Ideal Experience program?” |
| **Objective** | Yes or no | “Would you like us to include lose weight as one of your goals?” |

These forms correspond only to **confirmation** of **the previous** context.

P0 does not create an alternative version of questionnaire or modify the normal form of its questions.

**If the person does not accept a preloaded point, that preload must be discarded and the corresponding question must then appear exactly as defined in CEI-01: without prefilled, with its normal wording, all its options, its validations and its original rules.**

preload can therefore advance and resolve a response when the person confirms it.

If you do not confirm it, the decision **returns** to **the normal questionnaire**.

### 5.2.3 How the block is composed {#5-2-3-how-the-block-is-composed}

**P0 must offer only what the system can deliver.**

Before showing it, each candidate point must be verified against the current snapshot of the day.

If the snapshot does not support one of the points, that point must be omitted and P0 must be composed with the remaining points.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **What the Context** **Reveals** | **What the snapshot says** | **What is shown** |
|---|---|---|
| A club and a class | That club teaches it. | The two points |
| A club and a class | The class is taught only in other clubs | Just the club. |
| A club and an amenity | That club has it. | The two points |
| A club and an amenity | Amenity exists only in other clubs | Just the club. |
| One class, no club. | — | That class, accepting it makes it a club requirement. |
| Amenity or a goal, no club | — | That point. |

When the context reveals several pages of the same family representing the same element, they must produce a **single point**: three pages related to yoga produce a point, yoga.

When you reveal two clubs, the point must present both and add the option to receive a recommendation.

**P0** must **be composed only once** and **displayed only once**, after the legal age gate and before the first question.

Answers given within P0 must enter the calculation when the person confirms them.

The composition with which the block was shown must remain fixed during that questionnaire.

### 5.2.4 What makes you accept and what makes you reject {#5-2-4-what-makes-you-accept-and-what-makes-you-reject}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Response in P0** | **Effect** |
|---|---|
| **Accept** | The answer must replace the corresponding question and that question is resolved. You must not ask yourself again. |
| **Reject** | preload must **be** discarded**.** The corresponding question **must** appear **later, in** its normal **position, without prefilled and exactly with the** **wording, options, validations and rules defined in CEI-01** |

Accepting a club resolves the initial choice of club.

**Q16** must **be asked** anyway, because the zip code or neighborhood is used to calculate the time of travel and detect interest in Multiclub.

Accepting a class produces two different effects depending on whether or not a fixed club exists.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Context** | **Effect of accepting the class** |
|---|---|
| **With club fixed** | The class must be secured in the third block. The club was already fixed and the snapshot already confirmed that it imparts it |
| **No club fixed** | **The** class must become **a requirement** of the club. The solver must consider the clubs that teach it, offer as recommended the closest that meets it and show as alternatives the closest clubs with the corresponding flag |

This second case adds **a fifth requirement** to the four set by the questionnaire.

This class requirement is only active if Q12 is a group. Confirmed amenities participate in the selection under the control of CEI-01 clubs.

The chapter 10 specifies the choice of the club and the flags alternatives. If the class accepted differs from objectives or preferences, it is preserved and the difference is indicated only in the brief. If Q12 is individual, groups are excluded even if they were accepted in P0.

**Rejecting a point from P0 must not leave that data solved or generate an implicit response.**

You must return that decision to the normal questionnaire.

<!-- salto -->

## 5.3 How the questionnaire is composed {#5-3-how-the-questionnaire-is-composed}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Element** | **How many** | **When to ask** |
|---|---|---|
| **G0 · legal age gate** | 1 | Always, before any other interaction. 6 specifies it |
| **P0 · Preload** | 1 block | When prior context exists. Section 5.2 |
| **Questions base** | 16 | Always, in the same order. |
| **Questions** **conditional** | 3 | Only when a previous response triggers them |

A person answers, therefore, between **17** and **20 questions**: the gate, the sixteen base questions and between zero and three conditionals.

P0 does not add a question to the count: it confirms contextual information and can resolve questions that would otherwise appear later.

The current identifiers are Q1 **to Q10**, **Q12** to **Q16** and **Q17** for the base questions, and Q10a, **Q11** and **Q15b** for the conditionals.

**Q17 is asked immediately** after **Q8**, because both declare the person's time availability. Its key is out of sequence because it retrieves an identifier that was removed.

**Q18** and **Q19 are free** for **contextual** questions. Together with Q17 they formed the branch of lose weight—active treatments, weight, height and waist, and goal of change—which came out of the instrument by the rule of the 5.8 section. That branch does not return, so its keys return to use.

<!-- salto -->

## 5.4 The sixteen questions base {#5-4-the-sixteen-questions-base}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.2 -->
| **Key** | **Question Text** | **What determines** |
|---|---|---|
| **Q1** | What's her name? | The greeting and writing of his experience. The last name is later requested, during the capture of contact |
| **Q2** | How you prefer to go to her | **The agreement of the options and the text,** **in** its three **forms:** male**,** female **and** neutral**.** It also enables the prenatal option of Q14**. It** **must not be used to assign advisor or to** **infer identity or condition** |
| **Q3** | What you want to feel when you leave the club | The tone with which your experience is written. The choice of the club is resolved separately |
| **Q4** | What are you looking for? | The training blocks, the classes by objective and the main argument |
| **Q5** | What a rhythm it is with her | The class selection criteria, along with the goal and level. It also travels to the brief |
| **Q6** | Where you prefer to train | The training mode: dry floor, water or both |
| **Q7** | On what schedule | The signal to the advisor when the appropriate classes fall into another strip. The choice of club and time of travel are resolved separately |
| **Q8** | What days you can train | The same logic of availability of Q7. With Q17, it declares the time capacity against which it compares what the plan requires |
| **Q17** | How much time you can spend on each session | With Q8, the time availability. When the plan asks for more than you can, the experience is delivered fully and the warning travels to brief, according to section 11.16 |
| **Q9** | What's your level? | The order **of classes**. It must not **be treated** **as a diagnosis** |
| **Q10** | Which best describes your recent experience | The commercial context and preparation of the journey. Its four options correspond to people without active membership |
| **Q12** | If you prefer train without company or in group classes | What occupies the third block. It has two options and must be chosen one |
| **Q13** | Who I'd visit the club with | The preparation of the visit and the empowerment of the Q14 child activity option |
| **Q14** | What preference does he want to prioritize? | The requirements that the club must meet and the contraindications matrix |
| **Q15** | If you search near home, office or both | Priority origin and interest in Multiclub when responding “both” |
| **Q16** | What is the postal code or neighborhood of that origin | Locate the source to recommend club and calculate travel times |

**Q11 belongs** to **the conditional questions**, so the base numbering jumps from Q10 to Q12.

### 5.4.1 The four requirements set by the questionnaire {#5-4-1-the-four-requirements-set-by-the-questionnaire}

**Each** preference declared in Q14 must become a requirement for the club's choice.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Declared preference** | **The club must have** |
|---|---|
| Activities for children aged 3 months to 13 years | Verified activities for children under 13 years |
| Prenatal or postpartum programmes | Classes suitable for these periods, for each of the person's objectives |
| Low impact programmes | Low impact classes, for each of the person's objectives |

The fourth requirement is **pool**.

It comes from Q6 and must be required as an amenity when the chosen or resolved modality is In **pool** or Both.

In both cases, pool is **an hard requirement** for **club choice**, because without it the system cannot deliver the modality requested by the person.

Prenatal or postpartum and low-impact class preferences must also activate the contraindications matrix.

**The matrix must replace each contra-indicated class with an equivalent alternative for the same target.**

The chapter 12 specifies how it operates.

### 5.4.2 personal training is proposed without question {#5-4-2-personal-training-is-proposed-without-question}

**The personal training** must be **proposed** to all people, with at least one initial session, in both branches of Q12.

That's why you don't need your own question.

Q12 determines whether individual training occupies the third complete block or accompanies group classes.

## 5.5 The three conditional questions {#5-5-the-three-conditional-questions}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Key** | **Asked When** | **What determines** |
|---|---|---|
| **Q10a** | Q10 is “I come from another gym” or either of the two options back after a break | The current gymnasium or the last one it belonged to. It serves as a commercial and service context. You must admit “I don’t remember” |
| **Q11** | Q10 is one of the two return options after a pause | How long the break lasted, in three stages. Adjust the preparation of the visit |
| **Q15b** | Q15 is “Both” | Which of the two origins is a priority. You must ask yourself before Q16. Interest in Multiclub remains active even if you capture a single location |

**Q10a must not be used for campaigns directed against a brand.**

<!-- salto -->

## 5.6 Decisions that change the structure {#5-6-decisions-that-change-the-structure}

The sixteen questions base includes the parameters and structure decisions described below. Q12 also determines the individual or group composition of B03.

Q4 and Q6 determine the objective and modality of the recommendation:

**Q4, because it defines what it is trained for, and Q6, because it defines what modality the plan must be built on.**

### 5.6.1 Q4 · Objectives {#5-6-1-q4-objectives}

The person can choose one or two goals.

When choosing two, the first must be **treated** as the **main objective**.

This objective must depend on:

-  the subgroup of the 01 block;
-  the subgroup of the 02 block;
-  the weighting of classes in the 03 block;
-  and the writing arch.

The second objective, when it exists, must diversify the selection of classes.

### 5.6.2 Q6 · The modality {#5-6-2-q6-the-modality}

Q6 determines whether the experience is built on the dry floor catalogue, on the water catalogue or combining both.

Its response determines the mode of B02; B01 remains on the floor and Q12 determines B03. When applicable, it makes the pool a requirement to choose a club.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Option** | **What must Happen** |
|---|---|
| **On the gym floor or in a dry** **area** | The plan must use the dry floor catalogue. The pool must not be required by the club |
| **In the pool** | B02 **must use** the water catalog**;** B01 remains on the floor**. pool must be** **an exclusive requirement when choosing the club** |
| **Both** | **The plan must necessarily include dry floor content and pool** **content,** and proactive**ly** integrate individual swimming **and**, **when** Q12 is a group, water classes that serve the stated goal**. pool must be an hard** **requirement in the club’s choice** |
| **I would like a** **recommendation** | **The** system must **calculate** which of the **three modalities contributes** **the most** to the **main objective** and solve that. If it resolves In **the pool** or **Both**, the pool must become exclusive requirement of the club; if it resolves **In floor** or **dry** area, it must not do so. |

Two rules close the section.

**The** first: with **"Bo**th", the plan must **deliver** the **two modalities**. A plan that solved "Both" only on dry floor would deliver less than the option offers.

**The second: if the chosen or resolved modality needs water, the club must have pool.**

The system must not recommend as ideal club one that prevents the chosen or resolved modality for the person.

The chapter 10 specifies how this requirement enters the selection of the club and the chapter 11 how the three blocks are composed in each modality.

## 5.7 How questionnaire behaves on screen {#5-7-how-questionnaire-behaves-on-screen}

**The person must be shown only the options that correspond to them.**

Each answer must be fixed when the person touches Next.

As long as you stay on the same screen, you can change your response as many times as you want without losing information or receiving warnings.

### 5.7.1 Which questions are wondering and which are resolved alone {#5-7-1-which-questions-are-wondering-and-which-are-resolved-a}

A conditional question must be displayed and sent only when the condition that activates it is met.

**When the condition is not met, that question must be out of the questionnaire visible, out of the calculation, out of the brief and out of the corresponding sending.**

If the person recedes and changes the response on which a conditional question depended, the response they or they would have already given in that question must **be kept at rest**.

It must remain stored, but be out of calculation and brief as long as the condition is not met.

If you subsequently change the top response again and the conditional reapply, the question must reappear with the previous response already selected.

It's the same general logic:

**what the system already knows must not be asked again from scratch.**

### 5.7.2 Options that appear when applying {#5-7-2-options-that-appear-when-applying}

Within the same question, some options must appear only when your condition is met.

**In** Q14:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Option** | **Shown** |
|---|---|
| **Low impact programmes** | Always. |
| **Prenatal or postpartum** **programmes** | When Q2 is “Feminine” |
| **Activities for children aged 3** **months to 13 years** | When Q13 is “With My Children” or “With My Family” |
| **None of the above** | It must always be exclusive. |

**That**'s why Q14 must **appear** after **Q13**: you need to know with whom the person would visit the club to determine which options to show.

### 5.7.3 Options that turn off when you reach the limit {#5-7-3-options-that-turn-off-when-you-reach-the-limit}

**Q4 allows you** to **choose up** to **two targets**, and the interface must make that limit visible while the person chooses.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **He's been chosen.** | **What to see** |
|---|---|
| **None** | All available options. Advance is enabled with first choice |
| **One** | All options remain available**.** You **can** move **forward and** the chosen **one** is marked **as the main target** |
| **Two** | Unelected options are turned off. You can go ahead and a notice indicates that you have already chosen two and that you can touch one of the selected options to change it |

As long as you don't touch Next, the person can change their goals freely.

Touching an off option must not modify the selection.

Touching an already chosen option must free it and reopen a space for another.

The person can undo and redo the selection as many times as they want.

**The two limit restricts how many goals you can keep, not how many times you can change your mind.**

The order of selection must be preserved and has meaning:

**the first target selected is the main target.**

To reverse the order, the person must deselect both and re-elect them in whatever order they want.

The chapter 7 specifies the weight of that difference.

### 5.7.4 The agreement with the form of treatment {#5-7-4-the-agreement-with-the-form-of-treatment}

Q2 asks how the person who addresses her prefers:

**male, female or gender-neutral language.**

The answer must govern only the concordance of the words referring to the person who is answering.

Each of these expressions must exist in three versions, and the person must see only the one corresponding to their choice.

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Where** | **Masculine** | **Feminine** | **Gender-neutral language** |
|---|---|---|---|
| **Q12 ·** **Accompanying** | Train alone | Train alone | Train without company |

References to other people must be written according to Spanish grammar and must not change according to the form of treatment chosen by the responder.

The gender of these third parties must remain outside the instrument.

The rule for naming them has two cases:

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Case** | **What to write** | **Example** |
|---|---|---|
| Spanish has a word that names the person without declaring gender | That word must be used. | “With a friendship”, “With my partner” |
| Spanish uses the masculine plural to name the whole | This plural must be used | “With my children”, “Activities for children from 3 months to 13 years” |

The neutral form must be constructed by **a phrase that works** for anyone.

**Incorporat**ion **typ**ographic **marks** — arroba, equis, vowel in parenthesis or double end separated by bar — **must not** be used.

The correct form is, for example, **“train without company**”.

Forms such as “only” or “friend” must be left out of the instrument.

Concordance must be maintained after questionnaire.

**Q2 must also govern the text generated by the system—including greeting, plan argument, and references to the person within brief—from beginning to end.**

It must not be used for any purpose other than those expressly defined in this chapter.

Chapter 13 specifies how this agreement must be applied.

## 5.8 The scope of the questionnaire {#5-8-the-scope-of-the-questionnaire}

CEI-01 must **collect stated preferences, not clinical** conditions.

Medical conditions, pregnancy and postpartum as clinical conditions, treatments, medications, surgeries, weight, height, body measures and personal data of minors must remain out of scope.

Whoever builds the system must not **collect** them or **infer** them.

The reason is both functional and legal.

Mexican legislation considers sensitive the personal data that may reveal, among other aspects, the present or future state of health. For the processing of sensitive personal data, the express and written consent requirements established by the applicable legislation must be met.

**CEI-01, as defined, must not incorporate the processing of such data or convert commercial questionnaire into a mechanism to collect them.**

Infringements related to the processing of sensitive data may also be subject to penalties aggravated under applicable law.

The decision does not reduce the ability to recommend the system because **logic works** with **the stated preference, not** with the **condition** that might **exist behind** it.

Q14 asks what the person who prioritizes wants:

-  low impact programmes;
-  prenatal or postpartum programmes;
-  activities for minors.

The system must use that preference only.

You must not infer from it an injury, pregnancy, postpartum, illness or any other health condition.

Thus, a low impact seeker receives the corresponding selection without Sports World needing to guard within CEI-01 the clinical data that might motivate that preference.

The same criterion must apply to Q13:

must collect interest in a service **and not personal data** of **minors**.

Health assessment is the responsibility of the club's professional, at the time and through the enrollment process determined by Sports World, subject to the applicable consents and requirements.

Chapter 12 specifies how the contraindications matrix must be applied within the scope permitted by the instrument.

**The Ideal Experience covers training.**

Nutritional accompaniment, food plans, diets and nutritional recommendations must be out of scope.

## 5.9 Signals travelling to brief {#5-9-signals-travelling-to-brief}

Some answers do not change the composition of the plan.

**They** change how **business conversation** must **be prepared** and **conducted**.

The system must convert them into visible signals within the brief.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Signal** | **What shoots her?** |
|---|---|
| **Preferred intensity** | Q5 |
| **The declared availability falls** **into another range than the** **suitable classes** | Q7 and Q8 only when Q12 is a group |
| **Domain Level** | Q9 |
| **It comes from another gym,** **and which one** | Q10 and Q10a |
| **Return to Sports World:** **locate your previous** **membership before the visit** | Q10 |
| **How long the pause lasted** | Q11 |
| **With whom will visit the club** | Q13 |
| **Plan exceeds days or** **duration by declared session** | Q8 and Q17, against frequency and duration of the plan according to Q12 |
| **Interest in Multiclub** | Q15 |
| **Unupdated data** | The CRM did not respond by composing the experience and the system used the last saved data. The signal must identify what data was used and when it was for the advisor to verify it before the visit. |

The first nine signals are derived from information collected by the instrument.

The tenth is born of the system itself **and does** not **constitute personal**ization of **the recommendation**: it is an operational contingency signal.

The general rule must be:

**the person receives their full experience; any operational data whose validity could not be confirmed must travel identified to the brief for the advisor to verify prior to the visit.**

The class confirmed in P0 that differs from objectives or preferences carries a flag only in the brief, without being replaced by that difference or requesting another acceptance. Q13 on its own and Q12 group are compatible. Signals must respect the scope of 5.8.

**No signal must infer or reveal a health condition that CEI-01 is not authorized to collect.**

<!-- salto -->

# Chapter 6 - Who Can Follow the Experience {#chapter-6-who-can-follow-the-experience}

**The** digital Ideal Experience is aimed at **people** from **18 years** or **more who are not yet members** of **Sports** World.

legal age must be confirmed before anything else.

**Who confirms that he or she is 18 years old or older can go through the complete experience. Who answers that he or she does not enter a small anonymous route that only helps him or her identify what his or her ideal club would be.**

For people aged 14 to 17, the Ideal Experience is available, but it must be built in person at the club with their guardian, rather than through the digital journey.

## 6.1 The legal age gate {#6-1-the-legal-age-gate}

The questionnaire must open with a gate identified as G0.

**G0 must be the first thing the person sees.**

This **experience is** available online **for** people **from** 18 years **or more.** Do **you** confirm **that you are** 18 years **old or** older**? · Yes · No**

G0 must not request the exact age.

You must confirm only which of the two routes corresponds.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Response** | **What Happens** |
|---|---|
| **Yes** | Person continues for the full digital Ideal Experience |
| **No** | The person continues along the reduced route of section 6.2 |

G0 must be outside the plan, brief and recommendation.

## 6.2 The reduced route {#6-2-the-reduced-route}

When the person responds No in G0, the complete journey must be stopped and the system must open a reduced and anonymous path.

This route has only one purpose:

**determine which club Sports World is most appropriate for that person based on what they want to achieve, how they prefers to train, their level, the type of training they prefers, the requirements they need the club to have and from where they would move.**

It does not build an Ideal Experience.

It doesn't start a business relationship.

they doesn't identify the person.

It does not generate any subsequent contact.

It does not use previous navigation information or preload context.

### 6.2.1 Which questions you use {#6-2-1-which-questions-you-use}

The reduced route must use only the questions CEI-01 necessary to determine which club is most appropriate for the person.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Question** | **What you use** |
|---|---|
| **Q4 · What you are looking for** | Defines one or two goals and allows you to evaluate which club can best respond to them |
| **Q5 · What rhythm goes with it** | Allows you to consider the type of training experience that best corresponds to your preference |
| **Q6 · Where you prefer to train** | Determines whether to look for dry floor, pool or both and whether pool must become an hard requirement |
| **Q9 · What is your level** | Allows to consider whether the offer available in the club corresponds to its declared level |
| **Q12 · Individual training or** **group classes** | Allows to consider what type of offer must be most relevant when evaluating the club |
| **Q14 · What you want to** **prioritize** | It incorporates the applicable requirements of the club, with the low impact programs options and none of the above |
| **Q15 · Close to what you are** **looking for** | Determines whether the origin to search for the club is domicile, office or both |
| **Q15b · Which source is a** **priority** | You only wonder when Q15 is “Both” |
| **Q16 · Postal code or** **neighborhood** | It locates the priority origin and allows to calculate the time of travel and solve the club |

The reduced route must not use **P0** **· Preload**.

Do not use:

-  navigation history;
-  the marketing year of origin;
-  landing page;
-  pages visited;
-  or any other previous context.

You must not prefill any answer.

**All decisions must be based exclusively on what the person answers within this route.**

<!-- salto -->

### 6.2.2 What Questions Are Left Out {#6-2-2-what-questions-are-left-out}

The reduced route must exclude the questions that serves to identify the person, prepare a business visit or collect information that is not necessary to determine the ideal club.

They must therefore be left out:

-  **Q1**
-  **Q2 · Form** of treatment;
-  **Q3** **·** What you **want** to feel;
-  **Q7** **· Schedule**;
-  **Q8 ·** Days
-  **Q17** **· Time** for **session**;
-  **Q10**, **Q10a** and **Q11 · Previous** experience;
-  **Q13** **·** With whom I would **visit** the **club**.

The route must also not request:

-  First name;
-  last name;
-  e-email;
-  telephone;
-  or any other information intended to identify or contact the person.

**There must be no contact capture at the end.**

The responses of Q4, **Q5**, **Q6**, **Q9**, **Q12**, **Q14**, **Q15**, **Q15b** and **Q16** must be used exclusively to determine the recommended club and write the brief argument explaining why that club is the most appropriate.

They must not be used to build the complete Ideal Experience yet.

### 6.2.3 What the system does with the answers {#6-2-3-what-the-system-does-with-the-answers}

Responses must be used only during that session to run the chapter 10 club selection rules.

The system must consider:

1.  the location and time of travel;
2.  the stated objectives;
3.  the preferred rhythm;
4.  the method chosen;
5.  the declared level;
6.  preference for individual training or group classes;
7.  pool when Q6 makes it an hard requirement;
8.  and requirements declared in Q14.

With that information you must solve **a single recommended club**.

The system must not use these responses to:

-  generate an Ideal Experience;
-  build the three training blocks;
-  select a routine;
-  generate a brief;
-  create a lead;
-  send information to a club;
-  feed the CRM;
-  start a call;
-  send an e-email;
-  Or schedule a visit.

### 6.2.4 What a person receives {#6-2-4-what-a-person-receives}

At the end of the route, the system must show only:

-  **the name** of **the recommended club**;
-  **their** address;
-  **the estimated** time of **travel** in **minutes**;
-  **a brief summary** of why that **club** is **the most appropriate** according to their responses;
-  and **instructions** to **contact the gym** or **arrive**, with your public contact and location information.

The summary must explain only the criteria that actually determined the recommendation.

For example:

**Sports World X is the club that best corresponds to what you are looking for because it is 18 minutes from your location, has pool and offers training options that correspond to your goals, your level and the way you prefer to train.**

The instructions must include the public contact details of the club, its address and the link to the map. The indication must then appear:

**We recommend visiting this club with your guardian. If you are between 14 and 17 years old, they can help you build your Ideal Experience there and explain how to continue the process of training at Sports World.**

**The digital journey must end there.**

No contact form must appear.

E-email must not be requested.

You mustn't ask for a phone.

No name must be asked for.

appointment must not be offered.

Sports World must not be offered to contact the person.

Do not offer to continue Ideal Experience online.

<!-- salto -->

### 6.2.5 What Happens to Information {#6-2-5-what-happens-to-information}

The path must work without creating an identifiable record of the person.

**No response must be sent to the club.**

No response must be incorporated into CRM or any record of leads.

The information must be used only during the session to calculate the recommended club.

**At the end of the session, the answers must end with it.**

If the person decides to go to the club, the process must begin there as a new interaction.

The club must not receive previously:

-  their responses;
-  its recommendation;
-  their location;
-  their preferences;
-  or any other data from this route.

## 6.3 14 to 17 years old {#6-3-14-to-17-years-old}

A person from 14 to **17 years** may receive an Ideal Experience.

The difference is where it's **built**.

**It must not be built online. It must be built in person at the club, with its guardian.**

In the digital journey, the person from 14 to 17 years uses only the reduced path of the 6.2 section to identify what their ideal club would be.

The digital result ends with that recommendation.

If you decide to go to the club with your guardian, Sports World can start the corresponding process there and in person build your complete Ideal Experience.

When Sports World rules allow a person from 14 to 17 years to use the adult catalog, your Ideal Experience can be built on the same disciplines, areas and training modalities as they apply.

Therefore, the digital restriction does not mean that you receive a lower training experience.

It only means that:

**The club recommendation can be resolved online anonymously, but the complete Ideal Experience must be built in person.**

<!-- salto -->

## 6.4 A Minor's Membership Contract {#6-4-a-minor-s-membership-contract}

A minor's membership contract must be completed in person at the club and with their guardian's participation, under Sports World's current process.

The site must not:

-  enrolling a minor;
-  capture it as lead;
-  request your contact details;
-  schedule a visit;
-  generate a brief for the club;
-  or transfer to the club the answers of the reduced route.

The digital route must end with a recommendation:

**This is the club that best corresponds to what you are looking for; we recommend you go there with your guardian to continue.**

For a person from 14 to 17 years, it is in that face-to-face process that **the complete Ideal Experience** must be built.

Authorizations, validations and corresponding documents must be managed directly by Sports World within this face-to-face process.

## 6.5 Only for those who are not yet members {#6-5-only-for-those-who-are-not-yet-members}

The digital Ideal Experience is an instrument of lead acquisition and is aimed at people who do not yet have an active membership in Sports World.

From there come two rules for CEI-01:

1.  **No question** must offer **the option** “**Act**ually **Training** in **Sports** World”, in the autonomous journey of the complete route.
2.  **Whoever previously had a membership must be treated as a return after a break.**

Q10 distinguishes the return contexts defined in CEI-01, including the return to Sports World.

When an adult states that they return to Sports World, the system must generate the corresponding signal for their previous membership to be located before continuing commercial service.

The brief must identify that context.

**The advisor's conversation must begin as a reunion, not as if Sports World had never had a relationship with that person.**

The system must not infer that someone has or has a membership if the person did not declare it or that relationship was not located according to the corresponding rules.

<!-- salto -->

## 6.6 What Information Is Collected from Minors {#6-6-what-information-is-collected-from-minors}

**The digital journey must not ask for the exact age of a minor.**

G0 must be limited to determining whether the responder is 18 **years old** or **older**.

When No replies, the reduced route can only collect the answers from:

-  **Q4**;
-  **Q5**;
-  **Q6**;
-  **Q9**;
-  **Q12**;
-  **Q14**;
-  **Q15**;
-  **Q15b**, when applied;
-  and Q16.

You must not collect:

-  name;
-  last name;
-  telephone;
-  email;
-  contact details;
-  business history;
-  data from third parties;
-  or any other information intended to identify the person.

You must not use P0.

You must not open a record.

You must not send the answers to a club.

You must not keep them after session is finished.

**The information exists only to answer a question: which club Sports World would be the most appropriate for that person.**

Once that answer is delivered and its brief explanation, the journey must end.

If the person is between 14 and 17 years old and decides to continue, they must do so in person at the club accompanied by their guardian, and **the Ideal Experience begins** there as **a new** process.

<!-- salto -->

# Chapter 7 - The Person's Goals {#chapter-7-the-person-s-goals}

The Ideal Experience is built around two types of objectives that the person states in the questionnaire:

**Q3**, which collects what you want to feel; **Q4**, which collects what you want to achieve.

It's five emotional goals and six functional.

The two perform different functions.

**The emotional objective determines how the experience is counted. The functional objective determines where it is built.**

In the reduced route for those who do not confirm having 18 years, Q3 does not wonder. Q4 is preserved only to help resolve and explain the club recommendation, according to chapter 6.

## 7.1 Two independent axes {#7-1-two-independent-axes}

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Axis** | **Key** | **Question Text** | **What governs** |
|---|---|---|---|
| **Emotional** | **Q3** | What you want to feel when you leave the club | The narrative tone with which your Ideal Experience is written |
| **Functional** | **Q4** | What you want to achieve | The training blocks, the classes by objective and the main argument |

The two axes must be resolved separately.

The emotional axis explains what meaning the person wants to give to the experience.

The functional axis defines which direction the training must follow.

Q3 must not modify the club, blocks or classes.

Q4 must not decide for itself the club. It enters into the validation that there is a training offer compatible with the stated objectives, but the choice of the club is resolved according to the complete rules of chapter 10.

## 7.2 The five emotional goals {#7-2-the-five-emotional-goals}

On the complete route, the person must choose one.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What you choose** | **How your experience must be read** |
|---|---|
| Disconnect from work and my daily routine | Like a pause space, change of pace and restart |
| Renew my energy and lift my spirits | With a language of energy, activation and renewal |
| Be part of a healthy community | With a language of belonging, coexistence and connection with the environment of Sports World |
| Feel that my body responds | With a language of capacity, progress, endurance and confidence in one's own body |
| Feel better about myself | With a language of personal well being and satisfaction with the process itself |

This response must set the narrative record of the text for Ideal Experience to be explained from a motivation relevant to the person.

It must not alter the technical recommendation.

For example, choosing "Being part of a healthy community" must not make the system replace individual training with group classes if Q12 indicated otherwise.

The rule is:

**Q3 changes how the plan is explained, not the plan that is calculated.**

## 7.3 The six functional objectives {#7-3-the-six-functional-objectives}

The person must choose one or two in Q4.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What you choose** | **What it means within the system** |
|---|---|
| Lose weight | Weight reduction |
| Improve my body aesthetics and muscle definition | Body composition and definition |
| Increase muscle mass | Gaining muscle mass |
| Improve my athletic performance | Sports performance |
| Improve my cardiovascular capacity | Cardiovascular capacity |
| Move better with more agility | Mobility, coordination and control of movement |

The six objectives must be resolved within Q4.

Choosing one or two must not modify the structural length of the questionnaire or create new ramifications.

All six were defined against the minimum class offer of the network.

For each of the six objectives and each of the three intensity levels of Q5 there must be at least one eligible class in each of the 49 clubs.

This produces **18 target combinations × intensity** that the network must be able to cover.

That is why the functional objective participates in the validation of the club, but it is not usually the factor that differentiates one club from another.

The selection is mainly resolved by the rules of proximity, modality, amenities and preferences set out in chapter 10.

The six objectives have their own page and retain the same identity on these surfaces, with brief page titles and Q4 formulations:

-  questionnaire;
-  the target pages;
-  the corresponding menu;
-  the class matrix;
-  and Ideal Experience.

Five belong to page type **07 · Objective** and **Lose weight** to **type 08**.

The 3.1.1 section specifies that architecture.

## 7.4 The primary and secondary objectives {#7-4-the-primary-and-secondary-objectives}

Q4 allows you to choose one or two objectives.

When the person chooses two, the first selected must become the **main** target.

The second must become **the secondary** target.

They shouldn't have the same weight.

**The main objective must be to govern:**

-  the training subgroup of the 01 block;
-  the training subgroup of the 02 block;
-  the weighting and order of classes in the 03 block;
-  the main functional argument of Ideal Experience;
-  the main arc of the text;
-  and the modality when Q6 is "I want to be recommended."

**The secondary objective** must diversify the selection of classes to also incorporate the second objective without removing the main direction from the plan.

Do not change the training subgroup of the 01 and 02 Blocks.

Asymmetry is deliberate.

Two goals with the same weight would produce a plan without clear direction. A main objective sets that direction and the secondary one adds variety without competing with it.

### 7.4.1 The two objectives do participate in the validation of the club {#7-4-1-the-two-objectives-do-participate-in-the-validation-of}

The fact that one is principal does not mean that the second can be ignored by validating the club's offer.

When two objectives exist, the system must check that the club has at least **one class eligible** for each **target selected**, **at the declared intensity in Q5**.

Therefore:

-  the main objective governs the structure of the plan;
-  the secondary objective mainly diversifies the selection of classes;
-  but both must exceed the minimum eligibility condition of the club.

By offering design, the 49 clubs meet this condition for 18 combinations of objective and intensity.

Consequently, the existence of one or two objectives does not normally decide between clubs.

The final choice of the club must follow the rules of chapter 10.

<!-- salto -->

## 7.5 When the person asks to be recommended the modality {#7-5-when-the-person-asks-to-be-recommended-the-modality}

Q6 offers the option "I **want to be recommended**".

When the person chooses to do so, the system must **calculate** which of the **three modalities contributes** most to the **main objective** and resolve it.

The three modalities compete in the calculation:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Modality** | **What is evaluated** |
|---|---|
| **On the gym floor or in a dry** **area** | What the dry floor catalogue brings to the main objective, in the intensity declared in Q5 |
| **In the pool** | What the water catalogue brings to the same objective and in the same intensity |
| **Both** | What the combination brings, when neither of the two separate covers the target as well as the two joints |

The calculation must be based on the class matrix, which qualifies each class of the catalog against each objective and each intensity.

**The rule** is **calculated**; **it is not fixed** in a **mapping** table. When the catalog changes, the result changes with it, without needing to rewrite this chapter.

The modality must be resolved only when the person requests that the system recommend it.

If the person chooses directly **On floor** or **dry** area, **On pool** or **Both**, their choice must prevail.

Chapter 14 specifies the matrix, who maintains it, and under which rules.

### 7.5.1 Effect on Club Choice {#7-5-1-effect-on-club-choice}

**The resolved modality must have exactly the same consequences as if the person had selected it directly in Q6.**

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Resolved procedure** | **Effect on the club** | **Impact on the plan** |
|---|---|---|
| **On the gym floor or** **in a dry area** | pool is not required | The plan uses the dry floor catalogue |
| **In the pool** | **pool is an exclusive requirement** | Plan uses water catalog |
| **Both** | **pool is an exclusive requirement** | **The plan must necessarily include dry** **floor content and pool content** |

The brief must indicate that the modality was resolved by the system at the request of the person, to distinguish it from a directly chosen modality.

<!-- salto -->

## 7.6 How targets are used on the reduced route {#7-6-how-targets-are-used-on-the-reduced-route}

The reduced path defined in the chapter 6 does not construct a digital Ideal Experience.

That's why Q3 is not asked.

There is no emotional objective on that route, nor must a personalized narrative arc be generated.

**Q4 must be retained.**

The person can choose one or two objectives with the same options and the same primary and secondary rules.

In this route, Q4 must be used only for:

-  contextualise the compatibility of the club's offer;
-  apply the rules of modality when Q6 is "I want to be recommended".
-  check the minimum condition of eligible classes;
-  and briefly explain why the recommended club corresponds to what the person seeks.

It must not be used for:

-  build 01, 02 or 03 blocks;
-  generate a custom selection of classes;
-  produce an Ideal Experience;
-  or generate a brief.

The result of the reduced route remains only **a recommended club** and **a brief explanation** of why it **corresponds** to **the person**'s responses.

There ends the use of targets within that route.

<!-- salto -->

# Chapter 8 - The On-Screen Journey {#chapter-8-the-on-screen-journey}

## 8.1 The gateway: schedule a visit {#8-1-the-gateway-schedule-a-visit}

Scheduling a visit is the ultimate goal of the site for the **complete route**. Your responsibility for the journey ends by sending the experience to the person and the brief to the club by email.

The measurement of the funnel and dashboard must continue with the results provided by Sports World according to the Funnel Map (Chapter 18).

This follows a rule governing the 148 pages:

**The option** to **schedule** a visit must be **presented** to the person at all times, on any page of the site, while remaining within the complete route.

Any button that leads to scheduling a visit can open the journey Ideal Experience.

When the person has not yet answered the questionnaire, touch one of those buttons must start the journey.

When you already have an appointment, the button must remain available and behave according to the 8.3.5 section.

### The context is not the last page: it is the previous journey {#the-context-is-not-the-last-page-it-is-the-previous-journey}

Before opening the questionnaire for the first time, the system must retain as context all the pages **that the person has visited** during that **session** until the moment they touches any button that opens the questionnaire.

**You must not use only:**

-  the landing page;
-  the last page visited;
-  nor the page from which he finally hit the button.

You must consider the entire journey previous navigation of that context window.

**That** journey feeds P0 **· Preload**, according to the chapter 5.

For example, if before opening the questionnaire the person visited:

-  a club page;
-  a yoga page;
-  a pool page;
-  and an lose weight page;

the four elements can become candidates for P0, subject to its validation, availability and consolidation rules.

If several pages visited represent the same element or belong to the same family, they must be consolidated according to section 5.2.3.

**Navigation provides context; CEI-01 determines which part of that context can be confirmed and used.**

<!-- salto -->

### The reduced route is the exception {#the-reduced-route-is-the-exception}

When G0 determines that this route corresponds:

-  P0 must not be used;
-  prior navigation must not be used to prefill responses;
-  no agenda must be offered;
-  no contact must be requested;
-  brief must not be generated;
-  and the journey must end after recommending a club, briefly explain why and indicate how to contact the gym or arrive.

## 8.2 One Internet Address {#8-2-one-internet-address}

Ideal Experience must occur in one direction only.

The person remains in that direction throughout the journey and what changes is the screen shown to them.

This decision has three consequences:

1.  **The** result is **answered**. The recommendation lives within that one direction.
2.  **The status** of **the journey lives** in **the session**. The address that the person can save or share is the entry address.
3.  **The final deliveries** are **written** and **distributed when the session is closed**, according to section 8.5.2.

At each moment a single screen must be displayed and the previous one must be removed completely.

<!-- salto -->

## 8.3 The six phases {#8-3-the-six-phases}

The entire route has six phases.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **No** | **Phase** | **What Happens** |
|---|---|---|
| **1** | **Invitation** | The text explaining why questions will be asked and the legal age gate |
| **2** | **Questionnaire** | P0, when applied, and questions CEI-01, one per screen |
| **3** | **Calculation and contact** | The system calculates the recommendation while requesting last name, telephone and email |
| **4** | **Result** | The person receives their Ideal Experience on the two pages of chapter 4 |
| **5** | **Agenda** | You are asked once if you want to schedule. If you accept, choose date and time |
| **6** | **Closure** | With appointment, your confirmation is submitted. Without appointment, keep your Ideal Experience and finish the journey |
| **—** | **Error** | Auxiliary phase that must always offer a forward exit |

**The brief is not a screen for the person.**

It must be generated from the final state of the session and sent according to section 8.5.2:

-  with appointment, one for appointment and for that appointment club;
-  without appointment, one for the identified club, marked as direct call.

**The existence of an appointment must not be a condition for generating a brief.**

<!-- salto -->

### 8.3.1 The 1 phase · The invitation {#8-3-1-the-1-phase-the-invitation}

You must use a single screen, with the invitation text above and G0 below.

**G0 must be the first question of journey.**

The text has two versions.

**When it does not come from a particular club page:**

In order to provide you with the best experience during your visit to our clubs, let us ask you a few questions. Just take a minute of your time.

**When you open the journey from a club page:**

In order to provide you with the best experience during your visit to Sports World Polanco, let us ask you a few questions. Just take a minute of your time.

In this second version, the name of the club must correspond to the page from which the person opened the questionnaire.

This affects only the invitation text.

**It does** not **limit the context** of **P0** to that page: P0 must use the entire previous journey of the context window according to the 8.1 section.

After G0 there are two routes:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Response** | **What Happens** |
|---|---|
| **Yes** | Continue the complete route |
| **No** | Complete route completes and starts the reduced route of chapter 6 |

### 8.3.2 The 2 phase · When there is preload {#8-3-2-the-2-phase-when-there-is-preload}

P0 belongs exclusively to the complete route.

Confirmed legal age, the system must review all pages visited within the current context window before opening the questionnaire.

For the first entry to the questionnaire, that window starts with the start of the session and ends when the person touches any button that opens the questionnaire.

**The system must not be limited to:**

-  the landing page;
-  the last page;
-  or the page from which the questionnaire was opened.

You must use all valid elements revealed by the journey.

The pages visited can produce context of:

-  club;
-  amenity;
-  class;
-  Target.

P0 must be composed by applying the rules of chapter 5. This includes:

-  validate each candidate against the current snapshot;
-  rule out what the system cannot deliver;
-  consolidate several pages representing the same element;
-  and display each item only once.

For example, if the person successively visited Sports World Polanco, yoga, water training and lose weight, the four elements can feed P0 if they comply with the corresponding rules. If they visited three different pages related to yoga, they must be consolidated into one point: yoga.

**P0 must be omitted** when **none** of the **pages** in the **current context window produces a us**able **element** of **club**, **amenity**, **class** or **target**. For example, if the person enters the Start and opens the questionnaire directly without having visited any page that produces one of those four types of context, the journey must go directly to Q1.

**The reduced route must not use P0 or any previous navigation data.**

### 8.3.3 The 3 phase does two things at once {#8-3-3-the-3-phase-does-two-things-at-once}

The 3 phase begins at the end of the questionnaire of the complete route.

While the system calculates the Ideal Experience, you must order the contact details. The reason communicated to the person is to send their Ideal Experience by email.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **If you deliver the data** | **If you don't deliver them** |
|---|---|
| Data remain in the session until closed | You must be able to see your full Ideal Experience on screen |
| You can continue to the agenda | No lead registry must be created |
| When closing the session the final state must be written and your experience sent according to section 8.5.2 | Information must not be sent to the club |
| Changes you make before closing must modify what you finally write | At the end of the session, experience and responses end with it |

The site requests surname, telephone and email, according to chapter 9.

**The reduced** route **must not enter** this phase. You must not ask for first name, last name, telephone, email or any other contact details.

### 8.3.4 The 5 phase asks once {#8-3-4-the-5-phase-asks-once}

After handing over the contact details, you must ask yourself once if the person wants to schedule a face-to-face visit.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Response** | **What must Be Left in the Final State** |
|---|---|
| **Yes** | The appointment requested, with club, date and time |
| **No** | The brand **"didn't want to schedule a visit"** |
| **Close before the agenda is** **finished** | Registration persists according to the status reached, without appointment confirmed within journey |

The mark "did **not** want **to** schedule **a visit" is** a state mark**. It must not be interpreted as an instruction not to contact.**

**The** date and time must be **chosen only** within the **current opening calendar** of the **club**. The days and schedules offered must come from the operational synchronization defined for the clubs and coincide with those published on the corresponding page. Within that calendar records the date and time requested and assumes availability, without consulting quotas or real capacity.

The subsequent coordination corresponds to Sports World. Our responsibility ends by sending the experience to the customer and the brief to the club by email.

### 8.3.5 Schedule another visit: a new context window {#8-3-5-schedule-another-visit-a-new-context-window}

When **a person** schedule **a visit, the context window that produced that action must be closed at that time.**

From there a new context window must begin.

**The new** window must contain all the pages that the person visits after having scheduled that appointment and before touching any "Agenda your visit" button again.

Therefore**, when the person** already **has** an appointment and touches **the** button again**, the system must not use:**

-  all history since the start of the session;
-  the navigation produced by the previous appointment;
-  only the last page visited;
-  or exclusively the page from which the button is re-touched.

You must use everything you visited from the previous appointment to that new touch. That journey represents a new agenda intention.

**Example**. Within the same session:

Home → pages A, B and C → questionnaire → Ideal Experience → appointment 1 → pages D, E, F and G → retouch Agenda your visit

For the first Ideal Experience, the context is A + B + C. Once the appointment 1 is scheduled, that context is closed. For the next agenda intention, the context becomes D + E + F + G. Pages A, B and C must not be part of that second window again.

**8.3.5.1 What happens when you replay Agenda your visit**

When the person already has an appointment and re-touchs Agenda your visit, the button must not disappear or change the label.

You **must** ask **first:** «**Do you want to schedule a visit to another club?»**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Response** | **What Happens** |
|---|---|
| **No** | It takes you to the already scheduled visit to see, modify or cancel it |
| **Yes** | Use the context accumulated from the previous appointment to guide the new club choice, and then recalculate the complete Ideal Experience for the current ideal club using the original CEI-01 responses |

The new navigation can show that the person is exploring another club, a particular class, an amenity, an objective, or a combination of them. All these elements must be considered within the new context window by applying the corresponding validation and consolidation rules.

**questionnaire must not be reopened. Original CEI-01 responses remain fixed.**

The new navigation:

-  can guide which club you want to explore;
-  can give context to the new intention;
-  and can help determine which alternative you are evaluating;

**but** must not **overwrite or retroactively modify the questionnaire responses.**

If the new club is different, the system must recalculate the complete Ideal Experience against the catalog of that club.

**The first appointment** must **be preserved**. Each new appointment must have its own club, its own Ideal Experience and its own brief.

**8.3.5.2 The window closes again with each new appointment**

When the second appointment is scheduled, the second context window must be closed. A third window must start from that point on.

The same logic must be repeated if the person continues sailing and then re-touchs Agenda your visit.

The **general** rule is: each scheduled appointment closes the navigation window that produced it. Everything that the person visits afterwards belongs to the following agenda intention.

Within the same session may exist, for example:

session start → window 1 → questionnaire → appointment 1 → window 2 → appointment 2 → window 3 → possible appointment 3

Each new agenda action must exclusively use the context window open from the appointment immediately earlier.

### 8.3.6 The reduced path has its own sequence {#8-3-6-the-reduced-path-has-its-own-sequence}

Those who do not confirm having 18 years must not go through the six phases. They must go only three:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Phase** | **What Happens** |
|---|---|
| **1 · Entry** | G0 determines that the reduced route corresponds |
| **2 · Reduced Questionnaire** | Only the questions defined in chapter 6 to resolve the club are shown |
| **3 · Outcome** | Shows a single recommended club, its address, travel time, a brief explanation and instructions to contact the gym or arrive |

The reduced route:

-  you must not use P0;
-  must not use navigation context;
-  must not ask for a name, surname, telephone or email;
-  must not open contact capture;
-  must not generate a digital Ideal Experience;
-  must not generate brief;
-  must not be scheduled;
-  must not send information to the club;
-  and you must not create a lead record.

In the end it must be recommended that the person goes to the club accompanied by their guardian to continue. That must end the digital journey.

## 8.4 Advance and Regression {#8-4-advance-and-regression}

In the complete route, each phase must offer an action that allows progress. The regression is selective.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **From** | **Regression** |
|---|---|
| **Invitation** | Not applicable: is the entry |
| **Questionnaire** | Returns to the previous question that corresponds |
| **Calculation and contact** | Regression must not be allowed while running the calculation |
| **Result** | You must not allow returning to questionnaire. You may offer to restart the full journey |
| **Agenda** | Go back to the result |
| **Closure** | When appointment exists, you can go back to the schedule to modify it |

When the person recedes into the questionnaire and modifies a response that controlled a conditional question, the rest and reactivation rules of the chapter 5 must apply.

### 8.4.1 Why questionnaire is answered once {#8-4-1-why-questionnaire-is-answered-once}

The logic is simple: the person answers and the system recommends.

Once the Ideal Experience is calculated, the questionnaire must be closed. **You** must not **be allowed** to **modify** the responses after receiving the **result** to try to cause a different recommendation.

**Changing the** club or **changing** classes **must** be **allowed**. Such changes must not reopen CEI-01. You must recompose the plan using the original answers, the corresponding club, its current catalog, and the rules of chapter 11.

Subsequent navigation also does not modify the original responses. The context can change what the person wants to explore; it does not change what they already stated in the questionnaire.

## 8.5 What the browser keeps and what the server saves {#8-5-what-the-browser-keeps-and-what-the-server-saves}

In the complete path, the journey must remain anonymous until the 3 phase. Until then, the person advances without account, password and without lead registration.

**The reduced route must remain anonymous throughout the journey.**

### 8.5.1 In your browser {#8-5-1-in-your-browser}

**The browser must not persist as personal** data **the responses** of the person. It must not persistently save the responses of the questionnaire, the calculated blocks, the generated text, the brief, or the appointments.

The site uses its own random navigation identifier**: web_session_id**. Your job is to keep that which belongs to the same session browser.

`web_session_id` **must not** contain any **data** of the person, **must remain on** the **side** of the person and **must never arrive** at **the lead registry**. It must not be used as a key to subsequently link navigation to a person's registration.

Within the session you can support the sequence of visited pages, context windows, **and Without questionnaire**, **With experience** and **With visit** states.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Moment** | **Function** |
|---|---|
| **Before the first questionnaire** | Accumulate the first window pages for P0 |
| **After the first Ideal** **Experience** | Maintain status of session |
| **After an appointment** | Close the window that produced that appointment and start a new |
| **Before another agenda** **action** | Accumulate everything visited from the appointment immediately previous |

The context windows belong to the session navigation, not to the lead registry.

**When the session ends, web_session_id must end** with it. A new session must start with a new navigation identifier.

**The reduced path must not use the accumulated pages for preload responses.**

### 8.5.2 Server side: a single write when closing the session {#8-5-2-server-side-a-single-write-when-closing-the-session}

When a person delivered their contact details, the final deed must occur upon closing the session.

As long as the session remains open, you can switch clubs, change classes, schedule, modify an appointment, schedule a second club, or continue browsing between an appointment and the next one. All this must remain as the status of the session until its closure.

**session** must be **considered closed** when **it occurs** first: an output that the browser can communicate to the server, or ten minutes without activity. Time*out* is necessary because closing a tab, losing connectivity or blocking a device does not guarantee that the browser can notify the output.

**When the session closes — if the browser warns, or if 10 minutes or more of inactivity passes — the system must write and send the following, at once:**

-  You must write the Ideal Experience on your own base. With appointment, one for appointment. Without appointment, the one corresponding to the identified club.
-  You must write the record of the lead and its appointments in the customer system.
-  You must write the final Ideal Experience and email it to the person.
-  You must write the brief and email it to the club. With appointment, one by appointment and directed to the appointment club. Without appointment, one aimed at the club resolved and marked as direct call.

**The existence of an appointment must not be a condition for generating or sending the brief.**

When the person submitted their data but did not schedule: the Ideal Experience of the club must be retained, a brief must be generated for that same club, the brief must be marked **as direct call**, and the advisor must receive the same recommendation basis that the person received.

If **the** person expressly replied that **they** did **not** want **to** schedule**, the** registration **must** also keep **the** mark «they did **not** want to schedule visit**.» That mark does not prevent subsequent contact.**

<!-- salto -->

### 8.5.3 The two keys of session are not the same {#8-5-3-the-two-keys-of-session-are-not-the-same}

`web_session_id` and session_uuid must perform different functions.

`web_session_id`

-  identifies only temporary navigation in the browser;
-  does not contain personal data;
-  does not reach the lead register;
-  supports context windows and navigation states;
-  ends with the session.

`session_uuid`

-  identifies the session registered within the system;
-  is part of the record that does persist when there was a contact capture;
-  allows the operations belonging to that registered session to be maintained together.

`session_uuid` **must not be used as a substitute for web_session_id. web_session_id must not be used as a conciliation mechanism for a person with a record.**

The reconciliation between different sessions and an existing lead must be resolved by means of the recognition key and the rules of the chapter 9.

### 8.5.4 Ideal Experience versions {#8-5-4-ideal-experience-versions}

The Ideal Experience must live on its own basis linked to the corresponding record.

**Without appointment**, the club version must be retained. **With one** or **more appointments**, a version must be kept for each appointment and the corresponding club.

Two clubs can produce different blocks, different classes, different arguments, and therefore Different Ideal Experiences.

When the person schedules another visit within the same session, the system must use the original questionnaire responses and recalculate the plan against the new club.

The subsequent management of the versions by Sports World is out of our experience, which ends with the emails of the experience and the brief.

### 8.5.5 Notices of later changes {#8-5-5-notices-of-later-changes}

As long as changes occur within the same session still open, the club must receive only the final state when that session closes.

**Success**ive **emails must not** be **sent** to the **club** for each class change, club change, appointment adjustment, or new scan.

The modifications to the session are incorporated in the final delivery. The club's actions after that delivery belong to Sports World.

<!-- salto -->

### 8.5.6 Delivery completes the journey {#8-5-6-delivery-completes-the-journey}

By sending the final Ideal Experience by email to the person and the brief to the club, they concludes the responsibility for this experience. Each club receives the status of its appointment or, without appointment, the club's resolved as direct call.

## 8.6 The autonomous journey {#8-6-the-autonomous-journey}

The person uses the screen actions defined in this chapter. Changing Club or Classes retains the original answers and recalculates the complete experience according to the 10, 11 and 12 chapters.

The status of the session gathers the changes until they are closed; the emails reflect that latest version. The reduced path ends on screen with the ideal club and the instructions to contact or arrive.

## 8.7 The error phase {#8-7-the-error-phase}

The error phase must be used when the automatic generation of part of the Ideal Experience text fails.

You must offer a retry button and a reboot link.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What Happens** | **What the Person Sees** |
|---|---|
| **The retry works.** | Return to the result with your full experience |
| **The second retry fails.** | **The button is** replaced **by "See my recommendation"** |

When playing "See my recommendation", the person must receive everything that the system can calculate without depending on the automatic writing: club, blocks, classes, security section, and other deterministic elements of the recommendation.

The chapter 13 specifies which sections depend on the language model.

**The screen must not inform the person of a technical failure or display an error message.**

**The error phase must always offer a forward exit.**

<!-- salto -->

# Chapter 9 - Contact Details and Consent {#chapter-9-contact-details-and-consent}

The Ideal Experience is built with what the person answers.

To send it by email, register the lead, allow the club to continue the service and, where appropriate, manage a visit, you also need your contact details.

These data are requested only once within the journey, after the questionnaire and while the system calculates the recommendation.

Architecture distinguishes four **things that must not be confused**:

-  `web_session_id` identifies only temporary navigation in the browser;
-  `session_uuid` identifies a registered session and allows its writing to be idepotent;
-  the **recognition** key allows a person to be recognized when they return to the system;
-  sw_person_id is the internal identifier that is associated with that person in the database and in the CRM, and then allows to join the different stages of the funnel.

`sw_person_id` **does not replace the recognition key.**

The person does not know that identifier and must not enter it when they return. The system must recognize it through the data that it does provide again and, once the match is found, recover their `sw_person_id`.

Everything specified here corresponds to the complete route. Whoever arrives at the contact capture already confirmed in G0 that it is 18 years old or older.

**The reduced path of chapter 6 must not reach this capture, must not identify the person and must not write information on the CRM or the leads base.**

## 9.1 When and what are requested {#9-1-when-and-what-are-requested}

contact details must be ordered at the end of the questionnaire, in the 3 phase of the journey, while the system calculates the recommendation.

The chapter 8 specifies the sequence.

The reason **to** communicate **to the person is** the actual **use:** send **them your Ideal Experience by email.**

The calculation wait is used to perform the capture.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Data** | **Where it comes from** |
|---|---|
| **First Name** | From Q1, which was already answered |
| **Last Name** | From the contact capture |
| **Phone** | From contact capture, standard in E.164 format |
| **Email** | From the contact capture |

The capture takes place on the website.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Channel** | **What is required in the catch** |
|---|---|
| **Website** | Surname, telephone and email |

The fields must comply with the validations set out in CEI-01 and the chapter 14 data contract.

### 9.1.1 If you deliver the data {#9-1-1-if-you-deliver-the-data}

The data must remain within the status of the session until this closure.

**At close:**

-  the lead register must be created or updated;
-  their recognition against existing registers must be resolved;
-  your sw_person_id must be recovered or assigned;
-  the final status of the session must be written;
-  Ideal Experience must be sent by email;
-  the corresponding brief must be generated;
-  and, where appointments exists, they must persist as well.

### 9.1.2 If you do not deliver the data {#9-1-2-if-you-do-not-deliver-the-data}

The **person must be able to see** the same full Ideal Experience on screen**. The recommendation must not be degraded by missing the contact.**

But without that data:

-  a record of lead must not be created;
-  Ideal Experience must not be mailed;
-  no brief must be generated for the club;
-  direct call must not occur;
-  and must not be able to schedule a visit.

**Without contact details there must be no trade tracking.**

At the end of the session, the answers and Ideal Experience must end with it.

### 9.1.3 Data belongs to the responder {#9-1-3-data-belongs-to-the-responder}

contact details must always be the person you are answering.

When someone declares interest in activities for children of 3 months to 13 years, the system must only collect that interest for a club service.

**You must not ask for:**

-  name;
-  age;
-  telephone;
-  email;
-  or any other identifiable data from such minor third parties.

Paragraph 6.6 sets that rule.

<!-- salto -->

## 9.2 Sending the Ideal Experience by email {#9-2-sending-the-ideal-experience-by-email}

Ideal Experience must be sent when session is closed, using the final state reached during that session.

That means that the email must reflect the changes that the person has made before closing.

<!-- tabla anchos=156.0,352.3 letra=10.5 sin-encabezado -->
|  |  |
|---|---|
| **What it contains** | The full Ideal Experience corresponding to that version: club, blocks, classes and other content defined in chapter 4 |
| **When it comes out** | When closing the session, by communicated output or for ten minutes without activity |
| **To whom it reaches** | To the email delivered by the person |
| **What the Club Receives** | The corresponding brief, not the person Ideal Experience |

**How many emails** are **sent**. One **must** be sent for each current Ideal Experience corresponding to the final status of the session.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Case** | **What must Happen** |
|---|---|
| **Without appointment** | There must be the Ideal Experience corresponding to the identified club. That version must be sent to the person |
| **With an appointment** | Ideal Experience corresponding to the appointment club must persist and be sent |
| **With appointments in** **different clubs** | Each appointment must keep its own Ideal Experience. The person must receive each of the corresponding current versions. |

Two clubs can produce different classes, combinations and arguments; therefore, these experiences must not be treated as if they were the same document.

### 9.2.1 What the club receives {#9-2-1-what-the-club-receives}

The club receives the brief.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Case** | **What must Happen** |
|---|---|
| **With appointment** | brief must exist by appointment and must be sent to the appointment club |
| **Without appointment** | There **must be** a brief for the identified club **and** must **be** sent marked **‘direct call’** |

**Therefore, the existence of an appointment must not be a condition for generating or sending the brief.**

<!-- salto -->

### 9.2.2 Delivery to customer and club {#9-2-2-delivery-to-customer-and-club}

With appointment, the person's email includes the club, day and time requested, and the brief is sent to the club. Without appointment, the experience of the identified club and the brief as direct call is delivered.

With these shipments, the responsibility for this experience ends.

## 9.3 A single write when closing the session {#9-3-a-single-write-when-closing-the-session}

The definitive writing must occur only once, when the session is closed.

As long as the session remains open, the person can change clubs, change classes, schedule, modify an appointment, schedule at another club, and continue sailing. All that must remain as a state of work until closing.

**The system must not create a new definitive commercial deed for each modification.**

When closing the session, the final state must persist.

The website uses a single end state writing operation and the data contract defined for the experience.

## 9.4 The four pieces of identification {#9-4-the-four-pieces-of-identification}

Architecture uses four different mechanisms.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Element** | **Identifying** | **What is it for?** |
|---|---|---|
| `web_session_id` | The browser's temporary navigation | Maintain navigation status and context windows |
| `session_uuid` | A registered session | Idempotency and traceability of such implementation |
| **Recognising key** | A person who returns to the system | Find the existing record using data that the person re-provides |
| `sw_person_id` | The internal identity of that person | Unite your records and subsequent funnel stages within Sports World systems |

**None must be used as a substitute for another.**

### 9.4.1 web_session_id {#9-4-1-web-session-id}

`web_session_id` must identify only the navigation of a session in the browser.

**It must:**

-  be proper and random;
-  not contain data on the person;
-  remain on the side of the person;
-  never get to the lead register;
-  not to be used to recognise a person returning;
-  and finish with the session navigation.

Within the session you can support the visited pages, the context windows of the chapter 8, **and the Without questionnaire**, **With experience** and **With visit** states.

When the person returns another day, they starts with a new `web_session_id`.

### 9.4.2 session_uuid {#9-4-2-session-uuid}

`session_uuid` must identify a registered session of the commercial process.

It must be used as an idempotence key. If the write operation corresponding to that same session is executed more than once, you must update or confirm the same status and not create a duplicate.

**The same person can have multiple** `session_uuid` **over time.**

Therefore: session_uuid **identifies a session; it does not permanently identify a person.**

### 9.4.3 The recognition key {#9-4-3-the-recognition-key}

When a person returns another day, the system does not have its previous `web_session_id`. Nor must you ask your `sw_person_id`.

To determine if it already exists you must use the project recognition key, built with the data that the person provides again.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Data** | **Paper** |
|---|---|
| Telephone, standard in E.164 format | Main recognition element |
| **First Name** | Helps validate the match |
| **Last Name** | Helps validate the match |
| **Club** | Helps resolve homonymous or ambiguous cases within the process |

The combination of these data must be used to search for the existing record, avoid duplicates, resolve matches, and recover the previously assigned `sw_person_id`.

**The recognition key is what allows you to find the person. sw_person_id is what allows you to maintain your internal continuity after you find it.**

### 9.4.4 sw_person_id {#9-4-4-sw-person-id}

`sw_person_id` must be an internal identifier assigned by the system.

**It** must be **written** in: the corresponding database, the CRM, and subsequent records that need to maintain continuity within the funnel.

**The person:**

-  it must not introduce it;
-  you don't need to know him;
-  and must not retain it in order to be able to reuse the system.

When a new person delivers their data and there is no valid match, the system must create the corresponding record and assign a new `sw_person_id`.

When the person returns and the recognition key finds an existing record, the system must recover the sw_person_id already associated with that record.

Sports World may subsequently use that identifier to link the lead, appointment, completed visit, enrollment, membership, cancellation and renewal. This later operation is outside the delivered journey.

**The correct sequence is:**

the person delivers their data → the recognition key looks for a match → the system recovers or creates `sw_person_id` → the new activity is associated with that internal identifier.

## 9.5 What to write {#9-5-what-to-write}

The person, session, appointments and Ideal Experiences represent different things. The data model must keep that separation.

### 9.5.1 lead Record {#9-5-1-lead-record}

Within the scope of the project, the registry must be able to contain or relate to:

<!-- tabla anchos=156.0,352.3 letra=10.0 -->
| **Field** | **Content** |
|---|---|
| `sw_person_id` | Internal identifier of the person |
| `nombre` | Name declared in Q1 |
| `apellido` | Last name captured |
| `telefono` | Standard phone in E.164 |
| `correo` | Email |
| `club_id` | Club resolved or club corresponding to the current commercial status |
| `perfil[]` | Applicable questionnaire Responses |
| `canal_origen` | `web` |
| `utm_source` · `utm_medium` ·<br>`utm_campaign` | Campaign allocation, where available |
| `timestamp` | Date and time of creation or update |

The field-by-field contract lives in chapter 14 and appendix E.

### 9.5.2 session Registration {#9-5-2-session-registration}

Each registered session must keep:

<!-- tabla anchos=156.0,352.3 letra=10.0 -->
| **Field** | **Content** |
|---|---|
| `session_uuid` | Identifier of that session |
| `sw_person_id` | Person with whom she was reconciled |
| **Final State** | Result achieved within this session |
| **Channel** | Channel by which it happened |
| **Attribution** | Relevant campaign data |
| `timestamp` | Date and time of session |

`web_session_id` **must not be written in this record.**

<!-- salto -->

### 9.5.3 appointments {#9-5-3-appointments}

Each appointment must keep its own information. At a minimum: `sw_person_id`, `session_uuid` which produced it, club, date, time, status, and reference to the corresponding Ideal Experience.

**The** same person may **have more** than one **appointment**. So date, time and appointment club must not be modeled as if there could only be one visit for that person.

### 9.5.4 The Ideal Experiences {#9-5-4-the-ideal-experiences}

The Ideal Experience must live on a project base, within the Sports World infrastructure.

Each persistent version must be able to relate to `sw_person_id`, `session_uuid`, club, and, where it exists, the corresponding appointment.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Case** | **What must persist** |
|---|---|
| **Without appointment** | The club's experience must persist |
| **With appointment** | Ideal Experience must persist by appointment |
| **With appointments in** **different clubs** | The different versions must coexist while corresponding to current appointments |

## 9.6 When the scheduled visit counts {#9-6-when-the-scheduled-visit-counts}

The **scheduled** tour of the Funnel Map (Chapter 18) must count when the client system confirms the writing of the appointment.

**You must not simply count** when the person opens the agenda, provisionally selects a date, or taps a button.

The Funnel Map (Chapter 18) must govern as a single document for the definition of metrics and events.

## 9.7 Where the data live and for how long {#9-7-where-the-data-live-and-for-how-long}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Place** | **Rule** |
|---|---|
| **Site environment** | Personal data may reside temporarily during session, the time needed to complete the journey and transfer the final status |
| **CRM / customer system** | Must live the record of the lead, its sw_person_id and its appointments |
| **Ideal Experiences Base** | Must live the persistent versions of the experience, related by corresponding identifiers |
| **Technical logs** | Technical events must be left without personal data |
| **In transit** | Communications must travel encrypted via HTTPS/TLS and accesses must operate under minimum privilege |

Once the information has been transferred to the relevant persistent destination, the transitory environment of the site must not keep additional copies outside of the defined retention rules for the project.

These rules must be implemented in accordance with the Agreement and the technical contract of chapter 14.

## 9.8 Conciliation and reunification {#9-8-conciliation-and-reunification}

The same person can return another day to perform another Ideal Experience, complete the questionnaire again, schedule another visit, or start a new journey.

**Upon return:**

-  will have a new `web_session_id`;
-  the newly registered execution will have a new `session_uuid`;
-  but the system must try to recover the same sw_person_id.

To do so you must not ask for that ID. You must again use the recognition key.

### 9.8.1 How to recognize those who return {#9-8-1-how-to-recognize-those-who-return}

**The sequence must be:**

1.  The person completes the journey again and delivers their contact details.
2.  The system normalizes those data.
3.  Use phone + first name + last name + club according to the recognition rules of the project.
4.  Find a match with the existing leads.
5.  If you find a valid match, you recover the existing `sw_person_id`.
6.  The new session retains its own session_uuid.
7.  The new experience, appointment and events must be associated with that same sw_person_id.
8.  If there is no valid match, a new record must be created and a new `sw_person_id` assigned.

**Therefore: the key recognizes the person; sw_person_id maintains its internal continuity after recognition.**

### 9.8.2 What happens in the reunion {#9-8-2-what-happens-in-the-reunion}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What?** | **What Happens** |
|---|---|
| **Recognition** | It is done again with telephone, first name, surname and club |
| `sw_person_id` | If there is a match, the one you already had will recover. |
| `web_session_id` | It is new because it belongs to the new navigation |
| `session_uuid` | It is new because it is a new registered session |
| **lead Record** | The existing one is updated when the conciliation determines that it is the same person |
| **Brand «did not want to** **schedule visit»** | Updated according to new status; not a permanent feature |
| **Appointments** | The new appointments are added to the same person |
| **Experience without** **appointment** | The new version can replace the previous one of the same club according to the rules of the project |
| **Experiences with** **appointment** | Every valid appointment maintains its own version |
| **Experience in another club** | May coexist with others |

### 9.8.3 Measurement preserves history {#9-8-3-measurement-preserves-history}

Recognize a person as the same and reuse your sw_person_id must not delete previous funnel events.

**The stages** must **count** when **they happen**. For example:

-  Questionnaire started account when the corresponding event occurs.
-  Questionnaire completed account when the recommendation is generated.
-  Scheduled visit account when the corresponding writing is confirmed.

If the same person returns and performs another journey, that journey must produce its own events.

Therefore: a **person can have only one sw_person_id and, at the same time, multiple sessions, experiences, appointments and historical events.**

### 9.8.4 Later use of sw_person_id on the funnel {#9-8-4-later-use-of-sw-person-id-on-the-funnel}

Once assigned, sw_person_id must travel on the systems involved in the later stages of the funnel when technically appropriate.

Its function is to allow Sports World to relate the different events to the same person after the person has already been identified.

Sports World manages aftercare and records visits, enrollments, memberships, cancellations and renovations in its systems. The journey delivers the identifiers and ends with emails to the customer and the club. The measurement integration must reconcile the results that Sports World provides and feed the dashboard according to the Funnel Map (chapter 18).

The recognition of a person returning to the system continues to be performed with the key defined in this chapter. `sw_person_id` allows for subsequent joining of records once the identity has already been reconciled.

## 9.9 Who does not agenda also enters the commercial process {#9-9-who-does-not-agenda-also-enters-the-commercial-process}

A person who completed the questionnaire, delivered **their** contact details**,** received **their** Ideal Experience**,** and did **not** schedule **a visit, is still a valid lead.**

**When closing the session:**

-  their registration must be maintained;
-  your sw_person_id must be resolved or assigned;
-  the Ideal Experience of the club must be retained;
-  This experience must be sent by email;
-  brief must be generated for that club;
-  and the brief must be marked as direct call.

If he expressly replied that he did not want to schedule, the registration must also bear the mark **«he did** not **want to schedule visits**».

**That mark is a state. It must not be interpreted as an instruction not to contact.**

The advisor must receive the brief to continue the care according to chapter 16.

<!-- salto -->

## 9.10 Simplified notice and comprehensive notice {#9-10-simplified-notice-and-comprehensive-notice}

The capture of contact is the moment when the person delivers the data that allows identifying and contacting her. The corresponding privacy information must be presented there.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Warning** | **Where it appears** | **What to cover** |
|---|---|---|
| **Simplified** | On the contact capture screen, next to the fields | What data will be used for and access to the comprehensive notice |
| **Integral** | Linked from that screen and from the bottom of the 148 pages | Complete information applicable to the processing, purposes and exercise of rights |

**Sports** World must **act** as **data controller** within the defined architecture for the project.

Whoever operates the system on behalf of Sports World must do so as a manager, in accordance with the applicable contractual instructions and conditions.

The rights of access, rectification, cancellation and opposition must be exercised before Sports World in accordance with the procedure set out in your privacy notice. Whoever operates the system technically must provide the corresponding support so that Sports World can meet these requests within the contracted scope.

**The exact text** of **the simplified notice**, **comprehensive notice** and **any consent** mechanism must be **that approved** by **Sports** World **Legal**. The system must implement that version without changing its content.

**The architecture remains like this, without mixing functions:**

-  `web_session_id` = temporary navigation
-  `session_uuid` = registered session and idempotency
-  telephone + first name + last name + club = recognition of the returnee
-  sw_person_id = internal identifier recovered or created after recognition, used to subsequently join the funnel

<!-- salto -->

# Chapter 10 - How the Club Is Selected {#chapter-10-how-the-club-is-selected}

The journey must keep a single club in force: **the ideal club**. The automatic recommendation establishes that club until the person confirms another choice.

The club chosen by the person must immediately replace the previous one as ideal club. The record must keep only one club_id for the current ideal club. The above automatic recommendation must be removed from the active state.

The Ideal Experience, the menu, its three blocks, its classes and the time of travel must use the same current ideal club.

**The automatic selection must first search for the club that can best meet all the requirements derived from the questionnaire responses.**

However, the Ideal Experience must also display other club options. Each one must clearly indicate by means of **a flag** whether it meets all those requirements or what it cannot meet.

The **person can** choose one **of those** clubs even **if they or they have** one **or** more breaches**, but the system must not interpret the simple click as acceptance of the deficiency.**

Before making the change you must explain which part of the Ideal Experience will have to be modified and ask for express confirmation.

The general rule is:

**The system recommends the club that can deliver what the person asked for. The person can choose another, but you must know exactly what will leave out of your Ideal Experience and accept it before the change runs.**

## 10.1 The beginning {#10-1-the-beginning}

The automatic selection of the club is resolved against:

-  a background condition to be verified but which, by design, does not differentiate clubs;
-  the active requirements arising from the questionnaire and the confirmed context;
-  the proximity between clubs that meet those requirements.

**The background condition**

For each target declared in Q4 and in the intensity declared in Q5 there must be at least one class eligible in the club.

Section 7.4.1 sets that check.

By network **design: 18 combinations of six objectives × three intensities have at least one class eligible in each of the 49 clubs.**

Therefore, this condition must be verified, but normally it does not differentiate one club from another.

**Active requirements**

The requirements can differentiate between clubs because not everyone has:

-  pool;
-  low impact programmes;
-  prenatal or postpartum programmes;
-  activities for minors;
-  or a specific class confirmed by P0.

For automatic recommendation, each active requirement functions as a condition of compliance.

**As long as there is a club that meets all the active requirements, the system must not recommend as ideal club one that fails to meet one just because it is closer.**

## 10.2 The four requirements {#10-2-the-four-requirements}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Key** | **Requirement** | **Where it comes from** |
|---|---|---|
| **REQ-1** | Pool | Q6, when the chosen or resolved modality is In **the pool** or Both |
| **REQ-2** | Low impact classes for each declared target | Q14, when declaring **Low Impact** Programs |
| **REQ-3** | Classes suitable for prenatal or postpartum periods for each declared objective | Q14, when declaring **prenatal or postpartum** **programs** |
| **REQ-4** | Verified activities for children under 13 years | **Q14,** when declaring **Activities for children** **aged 3 months to 13 years** |

These four requirements must be used to determine which clubs can fully satisfy what the person stated.

A club that does not **comply with** one **of them may** continue to appear as an alternative**, but** it must not **automatically become the ideal club as long as there is an option that meets all the requirements.**

### 10.2.1 REQ-1 · Pool {#10-2-1-req-1-pool}

pool must become a requirement when Q6:

-  be pool;
-  be both;
-  either I want to **be recommended** has been resolved as in **the pool** or both.

In such cases, a club without pool:

-  must not be the automatic recommendation;
-  must show the flag No **pool**;
-  and can only become the final choice if the person expressly agrees to exclude the aquatic component from their Ideal Experience.

### 10.2.2 REQ-2 · Low impact {#10-2-2-req-2-low-impact}

When Q14 indicates **Low Impact** Programs, the system must check that the club can meet that requirement for stated objectives.

If you cannot:

-  must not be the automatic recommendation as long as there is one that can;
-  you must show you don't have **low impact** classes;
-  and, if the person wants to select them, they must expressly accept that this requirement ceases to be part of the Ideal Experience calculated for that club.

### 10.2.3 REQ-3 · Prenatal or postpartum {#10-2-3-req-3-prenatal-or-postpartum}

When Q14 indicates **prenatal** or **postpart**um programs, the club must have an offer compatible with that requirement.

If you don't:

-  must not be the automatic recommendation as long as there is one that does;
-  you must show you do not have **appropriate classes** for **prenatal** or **postpart**um periods;
-  and the person must expressly accept exclusion before the system changes club.

### 10.2.4 REQ-4 · Activities for minors {#10-2-4-req-4-activities-for-minors}

When Q14 indicates **Activities for children aged 3 months to 13 years**, the club must have the corresponding service.

If you don't have it:

-  it must not be the automatic recommendation as long as there is one that does;
-  **must** show No **activities** for **children under 13** years;
-  and the person must confirm that they agrees to continue without that element before making the change.

## 10.3 The fifth conditional requirement {#10-3-the-fifth-conditional-requirement}

There is a fifth requirement that does not belong to the fixed REQ-# family.

When you accept in P0 a specific class without a fixed club and Q12 is group, that class becomes a requirement to select the club. If Q12 is individual, it does not activate a selection or a group class requirement.

For example, if the person confirms that they want Yoga, the system must try to solve a club that delivers Yoga.

This requirement shall:

-  is derived from the confirmed previous context;
-  exists only when it was accepted by the person;
-  must participate in the automatic selection;
-  and must be verified against the club's real catalog.

If an alternative does not teach that class, it must show a flag that specifically name it:

**Does not teach Yoga**

or the exact name of the class concerned.

If the person decides to select that club, they must expressly confirm that they agrees to remove that class from the Ideal Experience calculated for that club.

<!-- salto -->

## 10.4 Requirements and class selection are two different things {#10-4-requirements-and-class-selection-are-two-different-thin}

The requirements of this chapter determine what the club must be able to offer.

The specific selection of classes is subsequently resolved by the corresponding rules of classes and contraindications.

Therefore:

-  REQ-2 determines that there must be a low impact solution;
-  REQ-3 determines that there must be an prenatal or postpartum solution;
-  REQ-4 determines that there must be the corresponding service for minors;
-  REQ-1 determines the availability of pool;
-  and the P0 requirement determines the availability of a specific class.

Then, the corresponding chapters determine which specific classes are used to build the Ideal Experience.

**The system must not confuse club capacity with specific selection of classes within that club.**

## 10.5 10 km radius {#10-5-10-km-radius}

**The system must first try to resolve the ideal club between clubs located within 10 km of the person's priority origin.**

The origin is obtained from:

-  Q15;
-  Q15b, when applied;
-  and Q16.

Q16 provides the postal code or neighborhood.

Q15 and Q15b determine whether the relevant point corresponds to:

-  home address;
-  office;
-  or the priority between the two.

10 km is an initial resolution radius.

They must not be confused with the 5 km radio used to display and explore other clubs in the 3.6.2 section.

The functions are different:

**10 km** = initial universe to solve the ideal club.

**5 km** = exploration universe around the current ideal club according to 3.6.2; the plan is calculated for the same club.

When no club within 10 km meets all requirements, the system must expand the search according to 10.7.

<!-- salto -->

## 10.6 How Closeness is Measured {#10-6-how-closeness-is-measured}

Kilometers and minutes perform different functions.

The kilometers determine which clubs initially enter the universe of resolution.

The minutes determine which is closest among the comparable clubs.

**The proximity must be measured by the estimated time of travel in car with peak hour traffic.**

Between two clubs that meet the same conditions, the one with the shortest travel time must be preferred.

The value shown to the person must use **the ‘max X minutes**’ format.

The calculation must not use the time declared in Q7.

Q7 and Q8 determine availability for training and generate corresponding signals, but:

-  they must not exclude clubs;
-  must not modify the calculation of travel;
-  Nor must they modify the search radius.

**Contingency when no traffic is available**

When there is no valid traffic information to compare options, the system must use distance per route.

You must not use straight line distance.

The estimated time must be shown in:

-  Ideal Experience;
-  the reduced route of Chapter 6;
-  and the brief.

## 10.7 The four modes of automatic resolution {#10-7-the-four-modes-of-automatic-resolution}

The automatic recommendation must be resolved in one of four ways.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Mode** | **When it shoots** | **What the System Solves** |
|---|---|---|
| **Several meet** | More than one club within 10 km meets all active requirements | The lowest time of travel among those who meet |
| **One fulfills** | Exactly one club within 10 km meets all active requirements | That club. |
| **It does more than** **that** | No club within 10 km meets all the requirements, but at least one of the 49 does. | The lowest travel time between all the clubs that meet |
| **The closest to your** **target** | No full network club meets all active requirements simultaneously | The one that meets the highest number of requirements and, among those tied, the lowest time of travel |

The first three modes produce a recommendation that complies with everything stated.

**Only the fourth** can **produce a recommendation** with **one or more pending requirements**. The pool remains exclusive when the modality requires water; the count does not automatically allow to recommend a club without it.

In that case, non-compliances must be declared by their flags.

### 10.7.1 How the fourth mode is solved {#10-7-1-how-the-fourth-mode-is-solved}

When no 49 club meets all requirements simultaneously, the system must:

-  counting how many active requirements each club meets;
-  keep those that meet the highest number;
-  among those clubs, choose the shortest travel time;
-  If there is no valid traffic information, use the shortest distance per route.

The condition of target classes × intensity must not be used as a tiebreaker because the 49 clubs already comply with it by design.

The fifth requirement of P0 must also count when it is active.

### 10.7.2 The fourth mode must be exceptional {#10-7-2-the-fourth-mode-must-be-exceptional}

**The closest** to your **target** must only be used after checking that no club on the whole network can simultaneously meet all active requirements.

It must not be activated simply because the nearest club does not comply.

First, it must be checked:

-  the initial radius of 10 km;
-  then the entire network;
-  and only then use partial compliance.

## 10.8 The other club options within the Ideal Experience {#10-8-the-other-club-options-within-the-ideal-experience}

Once the ideal club is calculated, the Ideal Experience must also display other club options according to the universe of exploration defined for the site.

Each option must show a specific flag for that person.

The flag **must** answer a **question: Can this club meet the requirements that resulted from your questionnaire?**

### 10.8.1 Club that meets everything {#10-8-1-club-that-meets-everything}

When an option meets all active requirements it must show:

**Meet your requirements**

That indicator means that switching to that club does not require the removal of any of the requirements that the person had declared.

<!-- salto -->

### 10.8.2 Club that does not fulfill everything {#10-8-2-club-that-does-not-fulfill-everything}

When an option does not meet one or more requirements it must show exactly which ones.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Non-compliance** | **Flag** |
|---|---|
| REQ-1 · Pool | ‘No pool’ |
| REQ-2 · Low impact | ‘No low impact classes’ |
| REQ-3 · Prenatal or postpartum | ‘You do not have appropriate classes for prenatal or postpartum periods’ |
| REQ-4 · Activities for minors | “No activities for children of 13 years” |
| Class confirmed by P0 | ‘Does not impart [class name]’ |

If you fail to meet several requirements, you must show all requirements.

For example:

-  No pool
-  No activities for children under 13 years

The system must not summarize them in a generic warning such as **"Not meeting** all your **requirements**", because the person needs to know exactly what the difference is.

### 10.8.3 flags are personal {#10-8-3-flags-are-personal}

The flags do not describe the club in abstract.

Describe the relationship between what that person asked for and what that club can offer.

The same club may appear:

-  with Meet your **requirements** for a person;
-  with Do not have **pool** for another;
-  and with several flags for a third.

**flags must be calculated against the active requirements of each journey.**

### 10.8.4 flags appear during comparison {#10-8-4-flags-appear-during-comparison}

flags must be displayed while the person compares clubs.

Once a club is definitely chosen and the Ideal Experience recalculated, the final plan must show the experience that can actually be delivered at that club.

A list of things that the club does not offer must not be kept permanently within the plan.

If the person reopens the club comparison, the flags must be shown again.

<!-- salto -->

## 10.9 Switch to another club {#10-9-switch-to-another-club}

The person can select any of the other options shown within their Ideal Experience.

There are two cases.

**The new club fulfills everything**

If it appears with Meet your **requirements**, the system can make the change directly.

When confirming the choice, that club must replace the previous one as the only valid ideal club. Then it must recalculate the complete Ideal Experience against that club.

**The new club has one or more flags**

If the club fails to comply with any requirement, the system must not make the change immediately.

The system must report what requirements it fails to meet and offer options that do cover them according to the current selection and exploration rules. It must open a confirmation explaining the consequence before executing the change to a club with shortcomings.

## 10.10 flag reports; pop-up gets acceptance {#10-10-flag-reports-pop-up-gets-acceptance}

The fact that the person can see a flag does not mean that they have accepted the deficiency.

The flag is used to report during comparison.

**When it touches "Change this club", the system must open a pop-up if at least one unfulfilled requirement exists.**

The pop-up must:

-  identify what the club does not have;
-  to remember what the person had indicated;
-  explain what should be excluded or modified from your Ideal Experience;
-  and ask expressly if you accept that consequence.

**The change must not be executed before such confirmation.**

### 10.10.1 Example · Club without pool {#10-10-1-example-club-without-pool}

If the person had asked for water training and select a club without pool:

This club doesn't have pool.

You told us you wanted to include water training in your Ideal Experience.

We can change you to this club, but in order to do so we will have to exclude water training from your experience.

Do you agree?

Actions:

-  **Yeah, change clubs.**
-  **No, keep my current club.**

Only the first must authorize the change.

### 10.10.2 Example · Low impact {#10-10-2-example-low-impact}

This club can't cover the low impact options you've requested.

We can change you to this club, but we'll have to recalculate your Ideal Experience without that requirement.

Do you agree?

### 10.10.3 Example · Prenatal or postpartum {#10-10-3-example-prenatal-or-postpartum}

This club does not offer the prenatal or postpartum options you had requested.

We can switch you to this club, but that requirement will have to be excluded from your Ideal Experience.

Do you agree?

### 10.10.4 Example · Activities for minors {#10-10-4-example-activities-for-minors}

This club does not offer the activities for minors that you had requested.

We can switch you to this club, but those activities won't be part of your Ideal Experience.

Do you agree?

### 10.10.5 Example · Class confirmed in P0 {#10-10-5-example-class-confirmed-in-p0}

This club does not teach [class name].

You had indicated that you wanted to include her in your experience.

We can switch you to this club, but we'll have to exclude that class and recalculate the available alternatives.

Do you agree?

## 10.11 When the club fails more than one requirement {#10-11-when-the-club-fails-more-than-one-requirement}

If the club has several flagss, the system must not open one pop-up for each.

**You must submit a single confirmation with all the consequences.**

For example:

This club does not meet two of your Ideal Experience requirements:

\* No pool.

\* No activities for children of 13 years.

You had indicated that you wanted to include water training and activities for your children.

We can switch you to this club, but those elements will have to be excluded from your Ideal Experience.

Do you agree?

Actions:

-  **Yeah, change clubs.**
-  **No, keep my current club.**

**The confirmation must cover the complete set of shortcomings.**

## 10.12 What happens when the person accepts {#10-12-what-happens-when-the-person-accepts}

When the person confirms that they wishes to change to a club that does not meet all the requirements, the system must:

-  replace the previous ideal club by that club as the only existing ideal club;
-  record which requirements it cannot meet;
-  record that the person was informed and agreed to continue without them;
-  keep the original CEI-01 responses intact;
-  recalculate the complete Ideal Experience against the real catalog of the new club;
-  exclude from the new plan what the club cannot deliver;
-  recomposing blocks and classes where appropriate;
-  recalculate the time of travel;
-  generate the new full version of the Ideal Experience;
-  and update the brief with the same final state.

**It must not be limited to replacing the name of the club.**

### 10.12.1 Example with pool {#10-12-1-example-with-pool}

If Q6 was originally on **the pool** and the person subsequently agreed to switch to a club without pool:

Q6's original response must remain registered as In **pool**, but the system must also record a later exception: the person voluntarily chose a club without pool and agreed to exclude the aquatic component of Ideal Experience from that club.

The new experience:

-  it must not include aquatic training;
-  must not mention activities in pool;
-  must recalculate the available alternatives;
-  and must not present the club as if it could satisfy the original preference.

## 10.13 The original questionnaire response is preserved {#10-13-the-original-questionnaire-response-is-preserved}

Acceptance of a deficiency during club selection must not be retroactively modified by CEI-01.

The difference between:

**What the person declared**

The original questionnaire responses.

**What he subsequently decided to accept**

The exceptions he accepted to be able to use a particular club.

For example:

-  Original Q6: In pool
-  Ideal club effective after the election: no pool
-  Exception accepted: exclude water training from this Ideal Experience

The three things are different and must be preserved as such.

This allows the system and the advisor to know:

-  what the person originally wanted;
-  what limitation the chosen club had;
-  and what he decided to accept consciously.

## 10.14 What the Advisor Receives {#10-14-what-the-advisor-receives}

When an accepted exception exists, the brief must reflect it.

The advisor must be able to distinguish the original answer, the requirement that the club does not meet, and the subsequent decision of the person.

For example:

-  Original preference: water training
-  Current Ideal club: [club]
-  Availability: no pool
-  Person's decision: agreed to continue without water training

The brief must not present that difference as a computational error.

You **must** show **it as an informed choice made after questionnaire.**

## 10.15 What happens if the person does not accept {#10-15-what-happens-if-the-person-does-not-accept}

If the person selects a club with flags and then responds that they do not accept the consequences:

-  the change must not be implemented;
-  the previous club must be kept;
-  Ideal Experience must not be amended;
-  the original answers must remain intact;
-  no derogation accepted must be registered;
-  and the person must return to the comparison of clubs.

The other options must remain available.

## 10.16 Change Club Again {#10-16-change-club-again}

**The same logic must be repeated every time the person changes club.**

Each new club must be re-evaluated against the original questionnaire requirements, not only against the exceptions accepted for the previous club.

For example:

-  the person requested pool;
-  then chose a club without pool;
-  agreed to exclude water training;
-  then re-opens the comparison;
-  now select a club with pool.

The system must recognize that this new club can meet the original preference.

The exception associated with the previous club must not become a permanent modification of the questionnaire.

When recalculating for the new club, the system must return from the original answers and the capabilities of the new club.

## 10.17 P0 Election {#10-17-p0-election}

When the person accepts a club directly in P0, that choice must establish the only existing ideal club according to the chapter 5.

However, accepting the name of the club in P0 does not automatically mean accepting its shortcomings compared to the rest of the questionnaire, because at that time those answers may not yet exist.

Once CEI-01 has been completed, the system must compare the club fixed by P0 against all finally declared requirements.

If you do everything: the Ideal Experience can be calculated directly against that club.

If one or more requirements are not met:

-  Ideal Experience must report the corresponding flags;
-  the system must explain the consequences;
-  and the person must confirm whether they want to keep that club despite the shortcomings.

If you do not accept: the system must recommend another club according to the rules of this chapter.

## 10.18 Nearby alternatives {#10-18-nearby-alternatives}

The Ideal Experience must offer other club options in accordance with the 3.6.2 scanning rules.

Each option must include at least:

-  name of the club;
-  estimated time of travel;
-  its flag compliance;
-  and, where appropriate, specific requirements that it does not meet.

The technical source used to construct this set must be defined in the data contract of chapter 14.

**The system must not invent a second definition of proximity other than that established here.**

## 10.19 Application on the reduced route {#10-19-application-on-the-reduced-route}

The reduced route of the chapter 6 uses the same resolution rules needed to find a club.

It must consider the responses allowed on that route and the requirements that may arise from them.

However, the reduced route:

-  must not generate Ideal Experience;
-  must not generate brief;
-  must not capture contact;
-  must not be scheduled;
-  nor must it initiate a commercial process.

Its outcome remains only:

-  a recommended club;
-  their address;
-  the estimated time of travel;
-  a brief explanation of why it corresponds to the statement;
-  and instructions to contact the gym or arrive, with your public contact details, address and map.

The person can see the recommendation, but the digital flow ends according to chapter 6.

## 10.20 The full rule {#10-20-the-full-rule}

The automatic recommendation must follow this order:

1.  identify the priority origin of the person;
2.  form the initial universe of clubs within 10 km;
3.  determine all active requirements derived from CEI-01 and, where appropriate, from P0;
4.  check which clubs meet all these requirements;
5.  if several comply, choose the shortest travel time;
6.  If exactly one fulfills, choose it;
7.  if none within 10 km meets, expand the search to the 49 clubs;
8.  if one or more of the complete network comply, choose the shortest travel time;
9.  if none of them fulfils everything, choose the one that meets the highest number of requirements and, among those tied, the nearest;
10.  build the Ideal Experience against that club;
11.  display other club options with your individual flags;
12.  allow the person to choose another option;
13.  if the new option complies with everything, recalculate directly;
14.  if you have one or more flags, explain the consequences by pop-up;
15.  make the change only when the person expressly accepts it;
16.  keep the original questionnaire responses;
17.  separate recording of the derogations accepted;
18.  and completely recalculate the Ideal Experience against the new club.

The final hierarchy is:

**First, the system finds the club that can best fulfill what the person asked for. Then it allows you to compare other options clearly showing what each one meets. If you prefer a club that cannot deliver everything, the person can choose it, but only after knowing exactly what will have to be excluded from your Ideal Experience and confirming that you agree.**

<!-- salto -->

# Chapter 11 - How the Plan Is Built {#chapter-11-how-the-plan-is-built}

The Ideal Experience is organized into three training blocks: B01, **B02** and **B03**.

The three blocks together constitute the plan that the person receives on the 2 page of their Ideal Experience, according to section 4.2.2.

The plan must always be based on:

-  the original CEI-01 responses;
-  the main objective and, where it exists, the secondary objective;
-  the method chosen or decided;
-  the declared pace;
-  individual or group preference;
-  the only existing ideal club;
-  the current catalogue of that club;
-  and any exceptions that the person has expressly accepted when changing club according to chapter 10.

**The system must not build each block independently.**

All three must form a single Ideal Experience and any changes affecting the club, classes or an accepted requirement must pass through the calculation engine again before generating the new version.

## 11.1 The Three Blocks {#11-1-the-three-blocks}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Key** | **What it contains** |
|---|---|
| **B01** | Individual training with weights |
| **B02** | Aerobic Individual training, according to the current mode of experience |
| **B03** | Personal training or group classes, according to Q12 |

B01 and B02 constitute the individual part of the plan.

The **"Your Individual Rou**tine" button in the 3.7 section must open these two blocks.

B03 constitutes the guided or group part of the plan.

Q12 determines which of its two structures is used.

**All three blocks must be built for the same current ideal club and from the same current version of the answers and rules.**

<!-- salto -->

## 11.2 B01 and B02 · Individual training {#11-2-b01-and-b02-individual-training}

**B01 and B02 must start from the main target declared in Q4.**

Each of the three individual training families defined in section 3.5.2 must have a solution for each of the six functional objectives:

-  weights;
-  aerobics on floor or dry area;
-  Aerobic in pool.

Thus, each family contains six basic programmes, one per target.

**The main objective decides which program is used**

Within each applicable family, the system must select the program corresponding to the main objective.

The secondary objective must not replace that programme.

It must then be used to diversify B03 where appropriate.

**Q5 does not change the goal of the program**

Q5 must not select a different target or create another base program.

It must be used to adapt the parameters envisaged within the programme for the main objective.

Therefore: Q4 **determines which program corresponds. Q5 determines which intensity level to present within the parameters allowed by its matrix.**

The system must not confuse programme with programme **implementation** level.

### 11.2.1 What a person sees {#11-2-1-what-a-person-sees}

Ideal Experience must not show:

-  specific equipment;
-  loads;
-  weights;
-  internal technical protocol;
-  or instructions corresponding to the coach during the first session.

You must only show the approved information for the person, including:

-  name of the programme;
-  what it seeks to achieve;
-  applicable level or range of effort;
-  guidance duration;
-  frequency;
-  and an explanation in plain language of why it corresponds to your goal.

The trainer must then define the operational parameters that require face-to-face evaluation.

<!-- salto -->

## 11.3 Q6 decides the structure of B02 {#11-3-q6-decides-the-structure-of-b02}

Q6 determines which aerobic catalog can feed B02.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Current Q6** | **What B02 must contain** |
|---|---|
| **On the gym floor or in a dry** **area** | The ground aerobic program corresponding to the main objective |
| **In the pool** | The aerobic program in pool corresponding to the main objective |
| **Both** | The Aerobic Floor Program and Aerobic Program in pool, both corresponding to the main objective |
| **I would like a** **recommendation** | The modality that the system has resolved according to chapter 7 |

**When Q6 is both, B02 must include components of both modes.**

It must not be construed as permission to choose only one.

Both means floor + pool.

**B01 remains on the floor in all cases.**

The Q6 mode governs B02, not B01.

## 11.4 The original modality and the exceptions accepted {#11-4-the-original-modality-and-the-exceptions-accepted}

**The original Q6 response must not be modified automatically because the person changes club.**

It must be stored as part of CEI-01.

However, the chapter 10 allows a person to consciously choose a club that cannot meet any requirement and expressly accept the consequence.

When that happens, the system must distinguish between:

-  the modality originally declared or resolved;
-  the derogation subsequently accepted for that club;
-  the actual composition of the Ideal Experience of that club.

**Example**

If Q6 original was on **the pool** and then the person selects a club without pool and confirms that they agrees to exclude water training:

-  Q6 must remain registered as In **pool**;
-  the derogation accepted must be retained;
-  and B02 of that version of Ideal Experience must be recalculated without aquatic component.

The system must not change silently Q6 to On **floor** or **dry** area.

You must keep the right story:

**The person asked for water, then chose a club that could not deliver it and agreed to continue without that component.**

### 11.4.1 Q6 = Both and club without pool {#11-4-1-q6-both-and-club-without-pool}

The same rule applies when Q6 is both.

Originally B02 must contain:

-  Aerobic on the floor;
-  and aerobics in pool.

If the person subsequently chooses and confirms a club without pool, the new version can retain only the floor component because there is an expressly accepted exception.

Without that confirmation**: B02 must not be automatically degraded from both to floor.**

### 11.4.2 Recover a requirement in another club {#11-4-2-recover-a-requirement-in-another-club}

An accepted exception belongs to the relationship between that Ideal Experience and that club.

It must not become a permanent change in responses.

For example:

-  Q6 = In **pool**;
-  the person accepts a club without pool;
-  agrees to exclude aquatic training;
-  then switch back to a club with pool.

**The system must return from original Q6.**

Therefore, in the new B02 club you must recover the corresponding water program.

The exception of the previous club must not travel as if it were a new preference of the person.

## 11.5 The six programmes of each individual modality {#11-5-the-six-programmes-of-each-individual-modality}

Each of the three individual families must have six programmes: one for each functional objective of Q4.

This results in:

-  6 weight programs
-  6 Aerobic programs on the floor
-  6 Aerobic Programs in pool

**Programs must come from the individual training matrix defined as an official source in chapter 14.**

The system must not invent programs using the language model.

<!-- salto -->

### 11.5.1 What to deliver the matrix {#11-5-1-what-to-deliver-the-matrix}

**For** each **objective** combination **× modality** the matrix must be able to deliver at least:

-  the name the person reads;
-  the perceived range of effort;
-  the duration;
-  frequency;
-  the reason in plain language;
-  strength of the evidence chain: direct, one step or absent, according to section 12.1.1.

The engine must consume that data.

It must not generate them freely.

## 11.6 The specific treatment of aquatic training {#11-6-the-specific-treatment-of-aquatic-training}

Water programs must use their own water training parameters.

**The system must not automatically transfer zones or physiological parameters designed for floor training to aquatic training.**

The aquatic training matrix must expressly define:

-  perceived effort;
-  cadence;
-  duration;
-  frequency;
-  and any other parameters that Sports World approves for that modality.

Q5 must be used to select or parameterize the corresponding level within that matrix.

The system must not itself perform clinical or physiological conversions not defined in the official matrix.

### 11.6.1 Fixed water safety rule {#11-6-1-fixed-water-safety-rule}

No part of the system must recommend:

-  apnea;
-  hyperventilation prior to immersion;
-  Deliberate endurance series of breathing;
-  or equivalent practices not authorised by Sports World.

This rule applies to:

-  Ideal Experience;
-  brief;
-  and any content generated automatically.

**It must not depend on a decision of the language model.**

### 11.6.2 Matrix governance {#11-6-2-matrix-governance}

Sports World must maintain the individual training matrix with the responsible professional it determines.

It must be reviewed:

-  when the offer changes materially;
-  when changing the training rules used by the project;
-  and according to the periodicity of government established.

When a required source is not available, the system must apply the current general contingency and data rule defined in chapters 5 and 14.

## 11.7 B03 · Personal training or group classes {#11-7-b03-personal-training-or-group-classes}

**Q12 must solve the structure of B03.**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Q12** | **What B03 Must Occupy** |
|---|---|
| **Train alone** (or alone, or without *company*) | Personal training |
| **Group classes** | Group classes selected according to the chapter 12, with personal training as a complement |

The system must propose personal training in both branches.

What changes is the role it occupies within B03.

**When the person prefers individual training**

B03 must focus on personal training.

You must not select or display group classes for B03, even if confirmed in P0.

**When the person prefers group classes**

B03 must be built mainly with the classes selected according to chapter 12.

personal training must appear as a complement.

## 11.8 The secondary target within B03 {#11-8-the-secondary-target-within-b03}

When the person declared two objectives in Q4:

-  the first must remain as the main objective;
-  The second must function as a secondary target.

**The secondary target must not be modified by B01 or B02.**

When B03 contains group classes, it must be used to diversify the selection of classes, according to the chapter 12.

The main objective must retain greater weight.

Therefore: B01 **and B02 maintain the main direction. B03 can incorporate the second objective to expand the experience without taking direction from the plan.**

## 11.9 The club always rules what can really be delivered {#11-9-the-club-always-rules-what-can-really-be-delivered}

**Once a club has been selected, all plan components must be validated against the current club catalogue.**

Ideal Experience must not show:

-  a non-existent class in that club;
-  a modality that the club cannot deliver;
-  a programme not available;
-  non-existent amenity;
-  nor a service that is unconfirmed.

The selection of the club and the composition of the plan are not independent processes.

**First the only valid ideal club is determined. Then the plan must show that that club can deliver everything that appears on the screen, discounting only the exceptions that the person has expressly accepted.**

## 11.10 What happens when you change clubs {#11-10-what-happens-when-you-change-clubs}

**Changing Club must produce a new full version of the Ideal Experience.**

When confirming the change, the new club must replace the previous one as the only valid ideal club. The calculation and menu must use that updated reference.

The system must run the calculation again using:

-  the original CEI-01 responses;
-  the primary and secondary objective rules;
-  the original format;
-  the exceptions specifically accepted for the new club, if any;
-  the current catalogue of the new club;
-  their classes;
-  their programmes;
-  their amenities;
-  and his travel time.

Then he must rebuild:

-  B01;
-  B02;
-  B03;
-  selection of classes;
-  travel time;
-  and any other section that depends on the club.

Changing the club must not consist of replacing the name and address on the previous plan.

### 11.10.1 If the new club does not meet a requirement {#11-10-1-if-the-new-club-does-not-meet-a-requirement}

The flag process must be applied first **→ explanation** **→ confirmation** of chapter 10.

Only if the person accepts the deficiency can the recomposition be executed.

The system must then exclude only those whose absence was explained and accepted.

You must not infer other resignations.

## 11.11 What happens when you change classes {#11-11-what-happens-when-you-change-classes}

Changing a class within the same club must also not be executed as an isolated substitution.

The person may apply for a different class, but the system must recheck the complete plan against:

-  its objectives;
-  Q5;
-  Q9;
-  Q12;
-  the rules of Chapter 12;
-  the other classes selected;
-  And the catalog of the club.

The confirmed class is preserved against differences with objectives or preferences and carries a flag only to the brief; individual Q12 excludes groups. Then it must generate a new consistent version of the Ideal Experience.

This prevents manual substitution from producing:

-  duplication;
-  loss of coverage of a target;
-  incompatibilities between classes;
-  or a combination that no longer respects the overall logic of the plan.

**The intention to change can affect only one class; validation must be done again on the whole plan.**

## 11.12 What can be stored after a recalculation {#11-12-what-can-be-stored-after-a-recalculation}

Recalculating the entire plan does not mean that all components have to change.

Items that remain valid may remain identical.

For example:

-  B01 may turn out the same;
-  B02 may turn out the same;
-  certain classes may remain;
-  and the narrative record of Q3 can retain the same tone.

But they must remain because the recalculation reselected or validated them, not because the system has decided to skip the recalculation.

The **rule is**: full re**calculation does not mean changing everything; it means rechecking everything.**

## 11.13 Text after a change {#11-13-text-after-a-change}

The narrative tone derived from Q3 must remain stable because the original emotional motivation does not change when selecting another club.

However, any part of the text describing:

-  club;
-  modality;
-  blocks;
-  classes;
-  requirements;
-  exceptions;
-  or specific elements of the plan;

must correspond to the new calculated version.

**The system must not retain a sentence of the previous plan if it ceased to be true.**

Chapter 13 defines which parts are written using language model and which are directly derived from the calculation.

Therefore**, narrative stability must not become outdated content.**

## 11.14 Relationship to brief {#11-14-relationship-to-brief}

**The brief must be built from the same version of the plan that the person receives.**

There can be no different logic for the advisor.

If Ideal Experience is recalculated:

-  brief must use the same blocks;
-  the same classes;
-  the same club;
-  the same effective modality;
-  and the same exceptions accepted.

When an exception was accepted when changing clubs, the brief must also retain:

-  the original response;
-  the limitation of the club;
-  the subsequent acceptance of the person.

For example:

-  Original preference: water training
-  Current Ideal club: no pool
-  Exception accepted: continue without water training

The advisor must be able to understand why the final plan does not contain a component that did appear in the original response.

## 11.15 The full rule {#11-15-the-full-rule}

The composition must follow this order:

1.  read the original CEI-01 responses;
2.  identify primary and secondary objectives;
3.  take Q5 as an intensity parameter;
4.  resolve the Q6 modality;
5.  determine the structure of B03 by Q12;
6.  take the club finally selected;
7.  apply only the exceptions expressly accepted for that club;
8.  consult the official matrices;
9.  build B01;
10.  build B02;
11.  build B03;
12.  validate all classes and components against the current club catalogue;
13.  verify the consistency of the complete plan;
14.  generate the version received by the person;
15.  and generate the brief from exactly the same result.

**When** you change the club **or** a **class: the system must go back to the calculation, do not manually edit the above result.**

The final rule is:

**The person declares what they are looking for. The system turns it into three blocks. The club determines what can actually be delivered. And if the person consciously accepts a lack of that club, the plan is recalculated without erasing what they had originally asked for.**

<!-- salto -->

## 11.16 When the declared time is not enough for the plan {#11-16-when-the-declared-time-is-not-enough-for-the-plan}

The plan is composed against the objectives of the person, not against their/her availability.

**That** is why it may happen that what the plan **asks does** not **fit** in the days **that** the **person declared**.

The typical case: someone declares two days a week, chooses to increase muscle mass and select group classes in Q12. The plan corresponds to him with his three blocks — weights, aerobics and three classes in group — and those three blocks ask for more sessions than they fit in two days.

**The** system must **deliver complete experience anyway**. Cutting the plan to declared availability would give the person less than their or her goal requires, and without telling them or her why.

What you must do is lift **a capacity signal** and take it to **the brief**, according to section 5.9.

The comparison must be made between:

-  the capacity that the person stated: Q8 days and session time of Q17;
-  and what the plan asks for, frequently and duration per program according to 11.5.1; B03 sums up personal training in the individual branch or classes and its complement in the group.

When the second exceeds the first, the signal must be activated.

The **signal** must **reach the advisor** with **the two outputs that exist**, according to section 4.4.2:

-  explain to the person why a longer time commitment serves better than they stated;
-  or adjust the plan with her during the visit, within the days you do have.

The **decision** belongs **to** the conversation **at the club. The system prepares the brief without cutting the plan and ends its responsibility by delivering it by email.**

<!-- salto -->

# Chapter 12 - How Classes Are Selected {#chapter-12-how-classes-are-selected}

The system calls **suitable** classes **the** result of this chapter: the current ideal club classes that best serve the goal, the rhythm and the level that the person declared.

The appropriate classes feed B03, according to the 11.7 section, and are the term used in the 4, 5 and 8 chapters when they speak of availability, class change or time alerts.

**The classes** are **calculated** for **the only current ideal club**. When the person confirms another club, it replaces the previous one as ideal club. The selector must run against the catalog of the same club, according to section 11.10.

## 12.1 The Class Matrix {#12-1-the-class-matrix}

**The class matrix qualifies each class of a club catalog against each of the six objectives and each of the three levels of intensity of Q5.**

According **to** the data source rule **of** chapter 14**, what follows is the contract that the matrix must comply with.**

**The matrix must deliver, by class:**

-  to what objective or objectives it serves;
-  to what degree of intensity it qualifies;
-  whether it is suitable for low-impact programmes;
-  if it is suitable for prenatal or postpartum periods;
-  its equivalent class, where it is contraindicated;
-  the strength of the evidence chain which qualifies it for that purpose: direct, one step or absent, according to section 12.1.1.

**It** is the same table **that 3.1 names** when setting that each target bears the same name on the page, the questionnaire, the menu, the matrix and the Ideal Experience.

**The matrix is maintained** by **Sports** World. It is reviewed when changing the class catalogue and at least once a year. When it does not respond, the selection is composed of the last data saved and the signal travels to brief, according to the general rule of section 5.9.

### 12.1.1 strength of the evidence chain {#12-1-1-strength-of-the-evidence-chain}

When the rating of a class against a target does not come from a direct measurement of that target, the matrix must declare the strength of that chain.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Grade** | **Meaning** |
|---|---|
| **Direct** | The class qualified by measuring the same outcome of the objective |
| **One step** | He qualified by measuring an intermediate quality, and the jump to the target is one. |
| **Absence** | The qualification is built recognizing the absence of evidence for that class-objective combination |

**This statement changes only** how **strong** the **reason is for each class selected**, and with that, how direct the explanation the person receives.

## 12.2 The Selection Steps {#12-2-the-selection-steps}

The selector solves the appropriate classes in a fixed order.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Step** | **What It Does** | **With what?** |
|---|---|---|
| **1** | Take the current ideal club catalogue | The club with which the person stays, according to chapter 10 |
| **2** | Filter the classes qualified for the main purpose | Q4, first target chosen |
| **3** | Apply the intensity filter | Q5 in accordance with paragraph 12.3 |
| **4** | Sort by level | Q9 in accordance with paragraph 12.3 |
| **5** | Applies the contraindications matrix | Q14, when declaring low impact or prenatal/postpartum, according to section 12.4 |
| **6** | When there is a secondary target, it diversifies the selection | Q4, second target chosen according to section 7.4 |

The composition also applies Q6 to integrate the aquatic component when appropriate in the group branch. Q12 individual does not activate group selection.

**The result** of **the 6 step** is **the right class**. They are the **classes** occupied by B03 when Q12 solves group classes, and those shown to the person in the **"Change Classes**" panel in the 4.2.2 section.

## 12.3 The intensity filter {#12-3-the-intensity-filter}

**Q5 determines which classes enter the selection; Q9 determines the order in which they are presented.**

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Question** | **What It Does** | **What don't you do?** |
|---|---|---|
| **Q5 · Rhythm** | Filter classes to those qualified for that intensity in the matrix | Filter classes only; travel club and time are resolved in chapter 10 |
| **Q9 - Level** | Order the classes already filtered, from the most appropriate to your level to the least | It doesn't work as a diagnosis, and it doesn't filter by itself. |

**Q7** and **Q8 do** not **enter** this **filter**. The availability of schedules they declare generates an alert for the advisor when the declared range does not match that of the appropriate classes, according to the 5.9 section, but the appropriate classes are selected regardless of the schedule in which they are taught.

<!-- salto -->

## 12.4 The Contraindications Matrix {#12-4-the-contraindications-matrix}

**When Q14 declares low impact or prenatal/postpartum, the matrix is applied to automatic selection. The class accepted in P0 is preserved against differences with objectives or preferences; the flag travels only to the brief. Individual Q12 excludes groups even if previously accepted.**

The contraindications matrix is the same matrix of classes in section 12.1: the qualification of aptitude for low impact and for prenatal or postpartum is one of the fields that this matrix must deliver by class.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Step** | **What It Does** |
|---|---|
| **1** | Check each class suitable against the stated preference |
| **2** | When a class is contraindicated, it removes it from the selection |
| **3** | Replaces it with its equivalent class for the same target, according to paragraph 12.5 |

**Substitution operates** for every **goal that the person stated**, primary and secondary when it exists.

## 12.5 Replacement, never exclusion {#12-5-replacement-never-exclusion}

**A counter-indicated automatic class is replaced by its equivalent. The class expressly accepted in P0 retains the priority of 12.6.**

When the class matrix marks one class as the equivalent of another for the same purpose, that equivalent takes its place in the right classes.

**The REQ-2** and **REQ-3 requirements** of **Chapter 10 depend** on this **rule**. A club meets ‘low impact programs’ or ‘prenatal or postpartum programs’ when, after applying this replacement, it still has at least one class suitable for each target of the person. A club without any class equivalent to a stated target does not meet the requirement, and is left out according to section 10.2.

**The person** never **sees** a class marked as retreat**. they see the selection already resolved, with its equivalent in the corresponding place.**

## 12.6 The class that the person accepted in preload {#12-6-the-class-that-the-person-accepted-in-preload}

When you accept a class in P0 and Q12 is a group, that class must **remain** in **the selection**, without depending on the selector or differences with objectives or preferences. Those differences are only pointed to the advisor in the brief.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Where it comes from** | **What Happens** |
|---|---|
| **He took the class with an** **already fixed club.** | The club teaches this class, and is insured in B03 according to section 5.2.4 |
| **He took the class without a** **fixed club.** | The class became a requirement of the club—the fifth, conditional, section 10.3—so the identified club it teaches and enters B03 the same |

**The insured** class **occupies place** within **the appropriate** classes**, does** not **add apart**. The selector composes the rest of B03 around it, with the same six steps.

**It is not selected** if **Q12 is individual**. **In the group branch it comes out if**: the person chooses a club that does not teach it and expressly accepts that consequence, according to the 10.10.5 section. Then the selector recomposes B03 without it, and the chapter 11 states that the plan is recalculated completely.

## 12.7 How many classes make up B03 {#12-7-how-many-classes-make-up-b03}

When Q12 resolves **Group** Classes, B03 must contain three **appropriate classes**.

The selector must deliver exactly three classes as long as the club's valid catalog allows them to be built.

With a single objective, this objective guides the automatic positions. The classes expressly accepted in P0 retain their place even if they differ; the flag difference travels only to brief.

With two objectives, the automatic selection uses **two positions guided** by **the principal** and **one by the secondary**, first respecting the classes expressly accepted in P0.

The three classes constitute the base selection of B03.

The Change **Classes** panel may display other valid alternatives, but the Ideal Experience retains three when the catalog allows. If there are fewer different classes valid, it delivers those available without inventing or duplicating and signals the contingency in the brief, according to D-59.

## 12.8 How it diversifies the secondary target {#12-8-how-it-diversifies-the-secondary-target}

When Q4 contains two objectives, the second must diversify the selection without removing the plan direction from the first.

When B03 contains group classes, the automatic positions are resolved thus, respecting the classes already accepted in P0:

-  two positions must be guided by the main objective;
-  a position must be guided by the secondary target.

The selector must first prefer classes that bring value to both objectives where they exist.

A class serving both objectives may occupy either of the three positions, but must not be duplicated within the selection.

The automatic class incorporated by the secondary lens meets the same filters as the others. The expressly accepted class retains the priority of 12.6. The automatic selection filters are:

-  Q5;
-  Q14;
-  club availability;
-  and any exceptions in force.

The secondary objective diversifies; it does not replace the address set by the principal.

<!-- salto -->

## 12.9 When Q12 indicates individual training {#12-9-when-q12-indicates-individual-training}

When Q12 indicates that the person prefers train without company, the system must not build or display a selection of classes suitable for B03.

B03 must be resolved as personal training in accordance with Chapter 11.

The class matrix can continue to be consulted only when necessary to validate club requirements, such as REQ-2 or REQ-3.

Such validation must not become a visible class selection for the person.

Therefore: Valid**ating that the club can meet a requirement does not mean recommending group classes to someone who chose individual training.**

In this branch:

-  a selection of three classes must not be shown;
-  a Q7/Q8 alert based on suitable class schedules must not be generated;
-  and Q9 must continue to travel to brief as a declared level.

## 12.10 Manual choice of a class that does not meet a requirement {#12-10-manual-choice-of-a-class-that-does-not-meet-a-requirem}

The Change **Classes** panel must prioritize alternatives that meet all active requirements.

If in Changing Classes you try to incorporate a new class that does not meet an active Q14 preference, this confirmation applies. The one already accepted in P0 does not require any other acceptance for differences with objectives or preferences: it is preserved and carries a flag only to brief. Q12 individual continues to exclude groups.

You must explain the incompatibility and ask for express confirmation.

For example, **when low impact programs** are active:

This class is not qualified as low impact.

You had indicated that you wanted to include low-impact options in your Ideal Experience.

We may include this class, but it would no longer meet that requirement.

You want to include her anyway?

If the person confirms:

1.  the original Q14 response must be kept intact;
2.  the derogation accepted must be registered;
3.  the selector must be re-run;
4.  the consistency of the other two classes must be checked;
5.  a new version of the Ideal Experience must be generated;
6.  and the exception must appear in the brief.

If the person does not confirm, the class must not be incorporated.

An accepted exception must not become a permanent modification of Q14 or move automatically to another club or later experience.

**Fixed system safety rules must not be overwritten by this confirmation.**

# Chapter 13 - The Text Written by the Language Model {#chapter-13-the-text-written-by-the-language-model}

The system calculates the Ideal Experience and delivers that result to the language model to write its narrative pieces.

The same response of the model contains the person's text and the writing pieces that feed the brief. The system assembles each delivery with the calculated data and fixed fields of the chapter 4.

**The wording must correspond to the current ideal club, its three blocks and the classes of that version.**

## 13.1 One call per version {#13-1-one-call-per-version}

The system must make an initial call to the language model for each calculated version of the experience.

The call must return a single object of structured data that gathers the narrative fields of the two recipients.

The system must retain the validated response in the status of that version during the session. Displays and assembly of deliveries must consume the same response.

### 13.1.1 The result received by the model {#13-1-1-the-result-received-by-the-model}

The system must prepare the application after resolving the club, the modality, B01, B02 and B03.

The request must contain:

-  the applicable responses of CEI-01 and the context accepted in P0;
-  the way Q2 is treated and the emotional goal of Q3;
-  the primary objective and, where it exists, the secondary objective of Q4;
-  the current ideal club and the facts that resolved its choice;
-  the approved programs, classes and parameters of that version;
-  the effective modalities and exceptions accepted for that club;
-  the reasons and benefits of the matrices, with their strength of the evidence chain;
-  the arrival company declared in Q13;
-  and approved institutional data supporting the infrastructure argument.

The data must come from the calculation and from the sources of chapter 14. The reasons for the individual programs must come from the matrix of section 11.5.1. The explanation of the classes must respect the matrix of section 12.1.

The system must distinguish original responses, accepted exceptions and the actual composition of experience.

<!-- salto -->

### 13.1.2 Text after a change {#13-1-2-text-after-a-change}

When the club changes or classes change, the system must run the full recalculation of sections 11.10 and 11.11.

The system must return the recalculated data to the model and obtain a new drafting of the experience.

The narrative record of Q3 must be preserved. Affirmations about club, modality, programs, classes and exceptions must correspond to the new version.

**The system must not reuse or patch the previous wording to present the new plan.**

Each response must be linked to the version that requested it. An answer that comes after another change must be incorporated only into its original version.

Open an already written experience or deploy one of your panels must use your validated response.

The contact capture, the date and time selection and the assembly of the brief must use the fixed fields and the already prepared writing. Those actions, by themselves, must retain the same response of the model.

### 13.1.3 The arming and shipping of deliveries {#13-1-3-the-arming-and-shipping-of-deliveries}

The system must prepare narrative pieces during the session.

With the contact details, the system must assemble the brief for the corresponding club. Without contact, the prepared parts remain in the temporary state and the result is delivered only on screen.

The name, surname, telephone, email, club address and appointment data must be incorporated from their source fields when assembling each delivery.

**With** contact and without appointment, the brief must bear the direct call brand and correspond to the identified club.

With appointments, the system must retain the experience and brief corresponding to each appointment and its club, according to section 4.1.1.

The closing must write and send the final state already prepared. It must occur at the closing communicated by the browser or after ten minutes of inactivity, which occurs first.

**The responsibility for the experience ends with the email of the customer experience and the email from brief to the club.**

## 13.2 What you can write and what is fixed {#13-2-what-you-can-write-and-what-is-fixed}

The model can write the narrative fields of the Ideal Experience and brief defined below.

The system must retain the two-page delivery structure of section 4.1.2.

<!-- salto -->

### 13.2.1 The fields and their word limits {#13-2-1-the-fields-and-their-word-limits}

The answer must use an JSON object: fields identified by name, lists and nested objects that the system incorporates to their places in deliveries.

The field names belong to the internal contract. The person and the advisor receive their texts and presentation labels.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.0 -->
| **Field** | **Content** | **Limit** |
|---|---|---|
| `hook` | Opening phrase linked to Q3 | 30 words; one or two sentences |
| `plan_argument` | Argument of why the combination corresponds | 45 words |
| `intent_line` | Line of intention with the arrival company and the context of visit | 18 words |
| `infrastructure_arg`<br>`ument` | Argument of the current Sports World network and ideal club | 55 words |
| class_1_connector, class_2_connector, class_3_connector | Connector between each class selected and what the person stated | 15 words per connector |
| `validation_questio`<br>`ns` | Questions from §3 · What to validate | Five questions; 18 words per question |
| `visit_route` | Steps of §4 · Recommended route, each with title and description | Four steps; 18 words per description |
| `proposal.main` | Argument of the main offer of §5 | 35 words |
| `proposal.complemen`<br>`t` | §5 Plugin Argument | 30 words |
| `closing_priorities` | §6 Priorities | Three points; 12 words per point |
| `closing_script` | First-person closure script for the advisor | 60 words |

The system must request a connector for each class occupied by B03. The selection of three classes follows the 12.7 section. If the valid catalog delivers fewer classes, you must request the connectors of the classes that did remain in that version.

When Q12 specifies individual training, group-class connectors must be omitted and B03 must retain personal training.

Connectors must be different and correspond to the reason for inclusion of each class. A class accepted in P0 must be explained as a person's choice when that is their reason for inclusion. Differences with objectives or preferences must travel only to brief.

The main objective must direct the functional argument. The secondary one must maintain the role it has in the calculation, according to section 7.4.

With appointment, the route must prepare the journey for the club. Without appointment, it must serve as a preparation for the conversation and a possible visit, according to the 4.4.2 section.

Validation questions must use what is stated in CEI-01. Proposals and scripts must use offers and benefits supported by sources.

### 13.2.2 The context that adapts writing {#13-2-2-the-context-that-adapts-writing}

The system must prepare narrative instructions based on the responses allowed by the current instrument.

Q2 must determine the concordance of the words referring to the person. Q3 must determine the emotional record, according to section 7.2.

Q9 must provide the declared level. Q10, Q10a and Q11 must provide the applicable history and the stated pause.

Q12 must determine the individual or group format. Q13 must determine with whom it would visit the club. Coming on its own and choosing group classes must be retained as a compatible combination.

Q14 must provide the stated preferences. The offer of activities for minors must depend on the responses that activate it and the club's data.

The modality must correspond to Q6 and the exceptions accepted for that club. B01 must remain on floor. B02 must retain the calculated composition of floor, water or both.

**The model must not convert a preference for low-impact or prenatal programs into a diagnosis, injury, or pregnancy claim.**

The model must not infer health status from the level, history or duration of the break.

### 13.2.3 The fixed facts and parts {#13-2-3-the-fixed-facts-and-parts}

The system must incorporate from the calculation and sources:

-  the current ideal club, its address and travel time;
-  the public names of programmes and classes;
-  the approved reasons for the programmes and class descriptions;
-  the intensity, range of effort, duration and frequency;
-  the family benefit that the club’s offer supports;
-  the original responses, the exceptions accepted and the signals;
-  the name and contact details;
-  and the date and time requested, or the direct call mark.

Fixed templates must incorporate headers, buttons, summary cards, security section, profile tags, and internal text.

The brief must retain the eight fields of §1 · lead Profile, §2 · Logistics and contact, §7 · Notes and signals and the four empty boxes of the advisor's registry.

When the load of the plan exceeds Q8 or Q17, §8 · The time adjustment must show the calculated comparison and the two outputs of section 11.16: explain the benefit of a larger commitment or prepare an adjustment during the visit.

The system must retain the complete experience and flag capacity aimed at the advisor.

**The model must not choose another club, invent programs, replace classes or modify accepted parameters, answers or exceptions.**

The visit must assume availability within the opening hours. The date and time must come from the club's calendar, according to section 8.3.4.

### 13.2.4 Writing vocabulary {#13-2-4-writing-vocabulary}

The instructions to the model must require plain language, professional treatment and agreement with CEI-01.

The generated prose must exclude:

-  the word plan and its forms plans and planning;
-  questions keys, such as Q4, Q10a or Q15b;
-  jarga such as hypertrophy, Zone 2, HIIT, VO2max, plyometry, pliometric, RPE, 1RM, FCmax, caloric deficit, cannibalize muscle, substrate, concentric, motor control, rate of force, proprioception, isometric, progressive overload and aerobic modes;
-  and marketing expressions like show up, appear, journey, lifestyle, mindset, transformation, better version of you, dare and burn X calories.

These restrictions must apply to the narrative values of the model. The internal identifiers of the contract and the public names incorporated from the catalogue retain their function.

Writing can use words and expressions such as build, sustain, consolidate, maintain, recover, adjust, rhythm, constancy, shape, figure, strength, endurance, base, experience, routine, combination and muscle growth.

The training explanation can use the approved terms corresponding to the source data: conversational rhythm, maximum intervals, controlled technique, sustained strength in postures, body consciousness, explosive jumps, complete body, body center, patterns of movement and loss of fat.

The neutral form must use phrases that are valid for anyone. Trademarks with arroba, equis, parenthesis or double ending separated by bar must be left out of the wording.

### 13.2.5 Restrictions and sanitation {#13-2-5-restrictions-and-sanitation}

The model must retain the strength of the evidence chain stating the source: direct, **one step** or **absent**, according to section 12.1.1.

The model must not convert an indirect derivation into a statement of direct evidence or guarantee results.

The editorial must not promise changes in kilos or deadlines.

The model must not introduce diagnoses, clinical prescriptions, intensities created on its own, nutrition, diets or food plans.

The model must not recommend apnea, hyperventilation prior to immersion or series of breath endurance, according to section 11.6.1.

The specific equipment, loads, weights and internal protocols must remain on the coach's instruments, according to section 11.2.1.

The system must clean up all text values of the response, including nested lists and objects. Sanitation must remove residual questions keys and their link expressions, normalize spaces and correct the score left after that cleaning.

The system must validate the healed result before displaying it or incorporating it into a delivery.

Validation must check the required fields, the number of items in each list, word limits, concordance, vocabulary, and correspondence of facts with the calculated version.

A malformed, incomplete, out-of-limit or counter-calculation response must be treated for failure of 13.3.

**The system must not change the calculation to match a model statement.**

## 13.3 Failure backup {#13-3-failure-backup}

The system must retain the calculated result when the call fails, the response arrives malformed or validation rejects its content.

The backup must use the data of the current version and the fixed elements of your deliveries.

### 13.3.1 The Two Retryings {#13-3-1-the-two-retryings}

The screen must apply the error phase of section 8.7: Retry button and link to restart.

Each retry must request the fields of the current version. The system must keep the answers, the club, the blocks, the classes and the exceptions accepted from that version.

When a retry works and overcomes validation, the screen must display the full experience.

When the second retry fails, the system must replace the button with "**See** my **recommendation**".

When choosing that output, the person must receive the calculated content.

The display must always offer a forward output. Visible text must not display an error message or describe a technical flaw.

### 13.3.2 What the backup contains {#13-3-2-what-the-backup-contains}

The Ideal Experience must keep the club, blocks, programs, classes, approved reasons from sources, applicable family benefit, summary cards, security section and screen actions.

The narrative pieces of the model whose generation failed must be left out of that back-up version.

The brief must keep in contact:

-  the context of appointment or direct call;
-  the header;
-  §1 · lead Profile;
-  §2 · Logistics and contact;
-  §7 · Notes and signals;
-  §8 · Time adjustment, when activated, with comparison and two approved outputs;
-  the four boxes in the advisor's register;
-  and the foot of internal use.

Sections §3 to §6 and the closing script must be omitted when model writing fails.

The brief must include a contingency signal identifying the version and the absence of those narrative pieces, in accordance with the general rule of section 5.9.

The system must record the result of generation and retry in the status of the session. Its persistence must follow the conditions of contact and closure of the chapter 9.

<!-- salto -->

### 13.3.3 Closing and reduced route {#13-3-3-closing-and-reduced-route}

The system must keep the backup elements of each version ready during the session.

If the session closes while the writing is still pending, the system must use those elements of the latest version corresponding to each delivery.

**The closure must not start another call or recover the drafting of a plan that the person has already modified.**

With contact, the system must write and send the deliveries to the reported closing or after ten minutes of inactivity, which occurs first. A subsequent response of the model must remain outside of the emails already sent.

The reduced route must use the club calculation and a brief explanation based on the criteria that resolved the recommendation.

The screen must include club name, address, travel time and instructions to contact the gym or arrive, according to section 6.2.4.

The result of the reduced path must be completed with calculated data and approved templates. That path ends on screen and lacks Ideal Experience, brief, contact capture, appointment and CRM registration.

<!-- salto -->

# Chapter 14 - Data Sources and Their Contracts {#chapter-14-data-sources-and-their-contracts}

Sports World maintains operational club, class and pricing data in its systems of record. The website consumes a synchronized copy of those data, the approved matrices and the content held in the content management system. The system writes the lead and their appointments to the customer system and retains Ideal Experiences in a dedicated database within Sports World's infrastructure.

Each source must identify the data it supplies, who maintains them, when they are updated and which fallback the system uses if the source fails. The technical contract and its field dictionary must be documented in appendix E.

## 14.1 The 06:00 snapshot {#14-1-the-06-00-snapshot}

The system must synchronize the operational catalogs every day at 06:00, Mexico City time. The snapshot must include changes recorded in the CRM through 05:59. Later changes must enter the next snapshot.

The snapshot must include club status, opening hours, contact details, amenities, classes, class schedules, rates, discounts and promotions. The integration layer must extract those data once per cycle and make them available to the website in a shared copy within Sports World's infrastructure.

The website, club selector and class selector must consume the same published snapshot. The system must retain the identifier and date of the snapshot used by each calculated version. The synchronized copy must retain Sports World as owner of the operational data.

The management panel must permit immediate manual synchronization for authorized urgent changes. This operation must retain its date, scope, result and responsible person. Chapter 17 specifies who may execute it.

The system must validate data consistency before publishing a snapshot. A failed update must retain the last valid data from the affected source. The system must record which source failed and the date of the data used.

The journey must continue using that fallback, under the rule in section 5.9. The brief must identify the data used and their date when the contingency affects the experience. The system must use prices, schedules, classes and services supported by an available source.

The final state of the lead and their appointments must be written at session closure, under section 9.1.1. This write operation must use its own confirmation and idempotency key: an identifier allowing an operation to be repeated without duplicating its result.

<!-- salto -->

## 14.2 source Categories {#14-2-source-categories}

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Category** | **Content** | **Source and** **maintenance** | **Use** |
|---|---|---|---|
| **lead contact and** **activity** | Identity, profile, session registered, appointments and attribution | Questionnaire and contact capture; Sports World customer system as destination | Recognition, registration and transfer to the club |
| **Clubs** | Directory, location, status, service, contact, amenities and activities for minors | Sports World operating systems; daily cutting | Club pages, requirements, recommendation and agenda |
| **Classes** | Catalogue of disciplines, offer by club, days, hours and dates | Sports World programming systems; daily cutting | Pages, selection, replacement and time alerts |
| **Rates and** **promotions** | Memberships, services, prices, registration, discounts and validities | Sports World CRM; Daily snapshot and Authorized Manual Synchronization | Commercial Site Information |
| **Own matrices** | Aptitude and relation of classes to objectives; individual programs and their parameters | Sports World and its Training Managers | Selection of classes, block composition and reasons for each recommendation |
| **Editorial content** **and configuration** | Texts, images, pages, navigational relationships, instrument and approved templates | Project Content and Configuration Manager; Sports World Authorized Managers | Publication, background and presentation of experience |
| **Location and travel** | Postal codes, neighborhood, coordinates, routes, distances and times | Geographic catalogue and map service | Geographical resolution and nearby alternatives |
| **Ideal Experiences** | Calculated result, drafted version and related deliveries | Own base of the Sports World infrastructure project | How to store the final state delivered and relationship to each appointment |

The content manager must manage editorial content. The system must obtain rates, discounts and promotions from the CRM. The panel must run its synchronization without converting those values into editorial editing fields.

The current questionnaire must provide the answers that personalize the result. The previous context confirmed in P0 must preserve its origin and the acceptance of the person. The system must apply the priorities of questionnaire when consuming that context.

<!-- salto -->

## 14.3 Own matrices {#14-3-own-matrices}

Sports World must maintain an identifiable version of each matrix. Each version must keep approval date and responsible. The system must relate the matrices to the operating catalog identifiers they consume.

### 14.3.1 The Class Matrix {#14-3-1-the-class-matrix}

The matrix must comply with the 12.1 contract. The aptitude for low impact and for prenatal or postpartum periods must be part of the same matrix.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Data** | **Minimum content** |
|---|---|
| **Class** | Identifier of discipline in the catalogue |
| **Objective** | Identity of each of the six functional objectives of Q4 |
| **Intensity** | Rating corresponding to the three rhythms of Q5 |
| **Class–Objective ratio** | Qualification and qualification for each applicable combination |
| **Low impact** | Class fitness for that preference |
| **Prenatal or postpartum** | Class fitness for that preference |
| **Equivalent Class** | Identifier of the substitute class for the same target |
| **Strength of the Evidence** **Chain** | Direct, one step or absent, according to section 12.1.1 |
| **Governance** | Version, date of approval and responsible |

The matrix must allow the primary and secondary objective to be assessed separately. The catalogue and its rating must provide the level information necessary to order the classes according to Q9, according to section 12.3.

Equivalence must refer to an identified discipline. The selector must verify that the current ideal club gives that discipline before using it as a substitute. An equivalence must retain the objective for which it was approved.

Sports World must review the matrix when changing the catalog and at least once a year. The source control must check the 18 combinations of six targets by three intensities in the club network, according to section 7.3.

The class accepted in P0 must retain the priority of the 12.6 section against differences with objectives or preferences. The system must move those differences to brief. Q12 individual must disable the selection of group classes, even when P0 contains an accepted class.

<!-- salto -->

### 14.3.2 The individual training Matrix {#14-3-2-the-individual-training-matrix}

The matrix must deliver six programs for each family: weights, aerobics on the floor and aerobics in pool. Those 18 combinations of objective and modality must retain the fields of section 11.5.1.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Data** | **Minimum content** |
|---|---|
| **Program** | Identifier and public name |
| **Objective and modality** | Functional objective and training family |
| **Perceived effort** | Approved range and adapted according to Q5 |
| **Duration** | Programme time and unit |
| **Frequency** | Meetings per week |
| **Reason** | Explanation approved in plain language |
| **Strength of the Evidence** **Chain** | Direct, one step or absent |
| **Aquatic parameters** | Cadence and other approved parameters for water training |
| **Governance** | Version, approval date and professional responsible |

Sports World must maintain this matrix through the professional it determines. The controller must approve the aquatic parameters according to section 11.6. The system must consume the water parameters and the fixed safety rules of section 11.6.1.

Q6 must determine the structure of B02. B01 must keep weights on the ground. The calculation must compare the load of the blocks with Q8 and Q17 according to section 11.16, using the effective branch of Q12.

### 14.3.3 Versions and backup {#14-3-3-versions-and-backup}

The system must keep the latest valid version of the matrices. The calculation must record which version it used. An update failure must generate the corresponding signal for the brief.

The system must use the different valid classes that it can support when the offer is insufficient. The system must retain its real identity and quantity. The program reasons and class descriptions must come from approved sources, according to section 13.2.3.

## 14.4 Adding a Club {#14-4-adding-a-club}

Sports World must register each new club on its operating system with a stable club_id. Integration must relate that identifier to your page, location, services, classes and business data.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Inputs for Adding the Record** | **Content** |
|---|---|
| **Directory** | Identifier, name, status, address, city and postal code |
| **Location** | Verified latitude and longitude |
| **service and contact** | Timetables per day, telephone and brief receiving email |
| **Offer** | Facilities, activities for minors and club classes |
| **Qualification** | Relationships between classes, objectives, intensity and preferences |
| **Commercial information** | Rates, scope and promotions in force |
| **Page** | Page address, editorial content and browsing relationships |

The publication must verify that the classes of the new club correspond to the matrix. The system must incorporate the club into the geographical ensembles and the evaluation of requirements through its source data.

The selector must use the published operating status to determine whether the club participates in the recommendation. The site must retain the appropriate closing information when the club changes status.

The system must update the club ensembles of the same city and scan radios when publishing the release. That update must use the only valid ideal club as a reference for the menu and calculation of the experience.

The daily snapshot or authorized manual synchronization must publish the operational data for the new record. The content management system must publish the page and its relationships using those same identifiers.

## 14.5 Adding a Class {#14-5-adding-a-class}

Sports World must assign to each discipline a stable clase_id. The system must distinguish the discipline from each session programmed in a club.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Inputs for Adding the Record** | **Content** |
|---|---|
| **Discipline** | Identifier, public name, description and level |
| **Qualification** | Objectives, intensities, skills, equivalents and strength of the evidence chain |
| **Offer per club** | Club identifier and relationship to discipline |
| **Programming** | Days, hours, duration and dates of the visible week |
| **Optional data** | Instructor and salon, when the source records them |
| **Editorial content** | Page, benefits and relationships with goals and clubs |

Sports World must approve the qualification of the new discipline before incorporating it into the automatic selection. Integration must validate the correspondence between discipline, matrix and offer per club.

The system must interpret several sessionss of a discipline as schedules of the same class. The selector must count different disciplines when composing B03. The repetition of a class on different days must keep its schedules without increasing the number of different classes delivered.

A schedule change must update the discipline schedule. A withdrawal from a club offer must update the relationship between that club and the class. The calculation must consume the published offer of the current ideal club.

The tour schedule must use the club's opening hours. Training alerts must compare class schedules with Q7 and Q8. Each data must retain that use.

## 14.6 The contract of each source {#14-6-the-contract-of-each-source}

Each contract must define names of fields, types, units, supported values, mandatory fields, treatment of missing values, identifiers and relationships. Each source must declare responsible, frequency of update, date of data and support behavior.

The following names represent the data exchange. Integration can translate the physical names of the source system by means of correspondence documented in appendix E.

### 14.6.1 Club directory {#14-6-1-club-directory}

<!-- tabla anchos=156.0,352.3 letra=10.0 -->
| **Field** | **Content and format** |
|---|---|
| `club_id` | Stable CRM identifier |
| `nombre_club` | Trade name |
| `estatus` | `activo`, cerrado_temporal `or` cerrado_definitivo |
| `latitud`, longitud | Geographical numerical coordinates |
| `direccion` | Street and number |
| `ciudad` | Identity of city or square to group clubs |
| `codigo_postal` | Five-digit string, with initial zeros |
| `telefono_club` | Club Public Phone |
| `correo_club` | brief Receiver email |
| `horarios_atencion` | Day, opening and closing; local hours in HH:MM format |
| `amenidades[]` | Club service identifiers and names |
| **Activities for minors** | Verified offer and service content where applicable |
| **Origin** | System of origin, date of extraction and snapshot published |

Sports World must keep the directory. The system must synchronize it with the daily snapshot. The boot coordinates must correspond to club_id; the panel can manage that seed and integration must recognize valid CRM updates.

The evaluation of low impact and prenatal or postpartum must cross the offer of the club with the matrix of classes. The evaluation of activities for minors must use the verified offer of the service. An amenity must retain its identity when relating to the corresponding requirement.

<!-- salto -->

### 14.6.2 Catalogue and class programming {#14-6-2-catalogue-and-class-programming}

<!-- tabla anchos=156.0,352.3 letra=10.0 -->
| **Field** | **Content and format** |
|---|---|
| `clase_id` | Discipline identifier |
| `club_id` | Club where it is taught |
| `nombre_clase` | Public name of the discipline |
| `descripcion` | Approved description |
| **Level** | Level information for the order of affinity with Q9 |
| `dia_semana` | session Day; one registration per day and schedule |
| `hora_inicio`, hora_fin | Local hours in HH:MM format |
| `fechas` | Specific dates of the visible week |
| **Duration** | Minutes of the session, consistent with beginning and end |
| `instructor`, salon | Optional source data |
| **Origin** | Date, snapshot and Relationship to Matrix Version |

Sports World must maintain the catalog and schedule. The daily snapshot must incorporate the visible week of classes. The site must resolve with the last valid snapshot when the update fails and keep the date of that backup for the brief.

### 14.6.3 Rates, discounts and promotions {#14-6-3-rates-discounts-and-promotions}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Field** | **Content and format** |
|---|---|
| `plan_id`, nombre_plan | Identifier and trade name of membership or service |
| `nivel_precio` | Scope club, `ciudad` or nacional |
| `club_id` | Club, when the price is specific |
| **City or square** | Identity of application when the price is per city |
| `precio` | List price in Mexican pesos |
| `inscripcion` | Registration fee, where applicable |
| `vigencia_desde`, vigencia_hasta | Price validity window |
| `promocion_id`, descripcion_promo | Identity and text of promotion |
| `descuento` | Value and type: amount or percentage |
| `vigencia_promo` | Promotional Validity Window |
| **Origin** | Date of extraction and snapshot published |

The CRM must provide these rates. The integration must document the application of prices by club, city and national level according to the rule agreed with Sports World. The site must check the validitys when publishing the values.

The system must retain the last valid data before a source failure. A promotion whose validity has ended must retain its expired condition. The system must support each price shown in the value and validity available.

### 14.6.4 Content, questionnaire and templates {#14-6-4-content-questionnaire-and-templates}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Source** | **Content of the contract** | **Maintenance and updating** |
|---|---|---|
| **Editorial content** | Page identifier, type, address, texts, images, publication status and relationships with clubs, classes, objectives and services | Authorized managers of Sports World; publication in the manager |
| **Page context** | Objective, class, club or associated service and background | Same content relationships; publication along with the page |
| **CEI-01** | Current version, questions, options, validations, reduced path and P0 rules | Approved instrument; authorised update |
| **Templates** | Experience structure and brief, fixed pieces, narrative fields, limits and vocabulary rules | Approved configuration; authorized update |
| **Family benefit** | Relationship between verified service, declared preference and approved text | Sports World; update when changing offer or content |

The system must retain a unique correspondence between questionnaire objectives, pages, matrices and experience. Brief page titles can use the approved editorial treatment without changing the identity of the target.

The previous context must apply the windows and priorities of the chapter 5. A generic page must retain the valid previous navigational context according to those rules.

The manager must keep the latest published version valid when an editorial update fails. The system must use the instrument and approved templates that are published. Each calculation must record the versions used.

The language model must receive the calculated data and return the fields of the 13.2.1 section. Your contract must apply the limits, validations, retry and support of the chapter 13. The integration must retain the parameters of that response without converting the model into a source of classes, programs, schedules or prices.

### 14.6.5 Location, routes and alternatives {#14-6-5-location-routes-and-alternatives}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Source or result** | **Minimum content** | **Use** |
|---|---|---|
| **Geographical** **catalogue** | Five-digit postal code, associated neighborhood, city and reference coordinates | Resolution of Q15 and Q16 |
| **Club coordinates** | `club_id`, verified latitude and longitude | Geographical universe of clubs |
| **Mapping service** | Origin, destination, journey by car, distance by route, time with peak hour traffic and date of calculation | Comparison and presentation of proximity |
| **Alternatives** | `club_id`, name, area or city membership, travel time and compliance | Menu for exploration and club change |

The geographical catalogue must solve the postal code and the neighborhood according to chapter 5. The integration contract must identify its version and the origin of the coordinates. The system must keep the latest valid version of the catalog when its update fails.

The system must construct the initial set of 10 km from the declared location, according to chapter 10. The 5 km scan set must use the current ideal club as a reference, according to section 3.6.2. A confirmed choice of another club must replace that reference. The synchronized directory must provide the membership of city and national network.

The mapping service must provide the time of travel by car with peak hour traffic. The contract must identify the supplier and the criterion used to consult that traffic condition. The system must show the time available in **the "max X minutes**" format. Q7 must retain its training time function.

The system must compare distance per route when it lacks valid traffic, according to section 10.6. A time data used as backup must retain its provenance and date. The system must refrain from converting distances in minutes by an assumed speed.

### 14.6.6 Writing in the customer system {#14-6-6-writing-in-the-customer-system}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Entity** | **Exchange fields** |
|---|---|
| **Lead** | `sw_person_id`, nombre, apellido, telefono, correo, club_id, perfil[], canal_origen, attribution and timestamp |
| **Recorded meeting** | `session_uuid`, sw_person_id, final status, channel, attribution and timestamp |
| **Appointment** | appointment, sw_person_id, session_uuid, club_id, fecha_visita, horario_visita, status and reference to your experience |
| **Confirmation** | Recognized or created identifiers, write result and result of each appointment |

The contract must keep the separate entities of section 9.5. The session_uuid key must accompany the closing operation. The integration must distinguish the results of each appointment and deliver when one session produces several.

The phone must be standardized in E.164. The name and surname must keep separate fields. The email must comply with CEI-01 validations. The reconciliation must apply phone, first name, surname and club according to the 9.8.1 section to recover or assign `sw_person_id`.

The source channel must be web. The attribution must retain `utm_source`, `utm_medium` and `utm_campaign` when they exist. `perfil[]` must retain the applicable responses of the existing instrument and distinguish the original response from the accepted resolutions and exceptions.

Each appointment must record the requested date and time within the care schedule. The system must assume availability for the in-person visit. The writing confirmation must prove the registration of the application, without consulting quotas or capacity.

<!-- salto -->

### 14.6.7 Integration access and confirmation {#14-6-7-integration-access-and-confirmation}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Element** | **Content of the contract** |
|---|---|
| **Interface documentation** | Reading and writing operations, field scheme and real examples of three clubs and five classes |
| **Access** | Service credentials, permits, responsible and rotation procedure |
| **Environments** | Testing and production with separate credentials |
| **Limits** | Frequency of requests, CRM limits and response to excess |
| **Confirmation and errors** | Result per operation, error code and retry condition |
| **Idempotence** | Closing key and stable relationship with each appointment and delivery |
| **Email** | Addressee, reference to delivery, service confirmation and sending status |
| **Decision log technical** | Source, version, operation, date and result; content without personal data |

Sports World must provide access to your systems. Communications must travel encrypted via HTTPS/TLS. Services must operate with the necessary permissions for their function.

The integration must use the same key when retrying a deed or delivery. The system must retain the confirmed result to avoid repeating the email or duplicating the appointment. The 15 and 19 chapters specify the operational treatment of the incidents.

<!-- salto -->

### 14.6.8 Measurement sources and dashboard {#14-6-8-measurement-sources-and-dashboard}

The Funnel Map (Chapter 18) must define the stages, rates and rules of the dashboard. The measurement integration must consume the subsequent results recorded by Sports World. The person's journey must keep its closure with the delivery of the experience and the brief.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Source** | **Content of the exchange** | **Responsible and updated** |
|---|---|---|
| **Analytical and** **campaigns** | Sessions, events, search metrics, tabs and pattern; period and attribution available | SW Marketing provides accesses; update according to each source |
| **Visits undertaken** | appointment identity or recognition key, status, club and date of realization | SW Systems; daily cutting when the data is in the CRM |
| **New Memberships** | Membership number, phone and recognition data, club, type and activation date | SW Systems; CRM or agreed periodic delivery |
| **Cancellations** | Membership number, date of withdrawal and additional data that the source registers | SW Systems; CRM or agreed periodic delivery |
| **Load Control** | Source, period covered, date of receipt, outcome and reconciliation coverage | Measuring integration within the Sports World infrastructure |

The base must retain the date of occurrence and the date of incorporation of each result. Conciliation must occur within the Sports World infrastructure. dashboard must present aggregate results and date and coverage of its sources.

The missing source must retain an outstanding or unavailable information state. The system must use the source identities to avoid duplicating results when retrying or correcting a load. Fields and accesses must complete the appendix E contract according to the Funnel Map (Chapter 18).

## 14.7 The basis of Ideal Experiences and your contract {#14-7-the-basis-of-ideal-experiences-and-your-contract}

The Ideal Experiences base must live within the Sports World infrastructure. Sports World must designate the person responsible for its maintenance, access, backup and retention policy. The CRM must retain the lead and related appointments; the base itself must retain the final versions of the experience and its deliveries.

<!-- salto -->

### 14.7.1 Content of each persistent version {#14-7-1-content-of-each-persistent-version}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Field or Set** | **Content** |
|---|---|
| **Experience identifier** | Unique identity of the persistent version |
| `sw_person_id` | Recognised person in the customer system |
| `session_uuid` | Recorded session producing the version |
| `club_id` | Only valid ideal club for which this version was calculated |
| **appointment Reference** | appointment identifier, where available |
| **Instrument and responses** | CEI-01 version and applicable journey responses |
| **Context and decisions** | P0 confirmed, objectives, modality resolved, class accepted and exceptions accepted |
| **Calculated result** | Blocks, programs, classes and schedules used for the current ideal club |
| **brief signals** | Contingencies, differences, time alerts and time comparison where applicable |
| **Validated text** | Narrative fields of model response or backup identification used |
| **Sources** | snapshot-off identifiers, matrix versions and data dates used |
| **Deliveries** | References to experience and final brief, corresponding recipient and shipping status |
| **Ctrl** | Closing date, date of persistence and result of operations |

The system must save the content applicable to the journey performed. The database must retain the identifiers necessary to relate the experience to lead, session and appointment. web_session_id must remain as the temporary browser identifier according to 9.4.1.

The record must allow to reconstruct what result was delivered and with what data was calculated. The experience and brief associated with an appointment must share the result of that same version, according to the 13.1.3 section.

<!-- salto -->

### 14.7.2 Writing time and number of experiences {#14-7-2-writing-time-and-number-of-experiences}

The system must prepare the calculations and texts during the session. The system must persist and send the last prepared state when the browser communicates the shutdown or it takes ten minutes without activity, which occurs first.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Final status with contact** | **Experiences and destiny** |
|---|---|
| **Without appointment** | Club experience solved; email the person and brief to the club as direct call |
| **An appointment** | Experience of this appointment; email to the person and brief to the corresponding club |
| **Appointments in different** **clubs** | An experience by appointment; delivery of each version and brief to the corresponding recipient |
| **New journey for the same** **club** | Replacement of the previous experience of that club where applicable according to section 9.8.2; preservation of current versions linked to appointments |
| **New journey for another club** | Coexistence of experiences according to their relationships with club and appointment |

The system must recognize the person before linking the new versions to their record. A new journey must keep its own session_uuid and the measurement events it produces. Replacing an experience must respect the events already registered, according to the 9.8.3 section.

The closing must execute the operations only once for final result. The system must retry a failed operation using the same delivery identity. The closing must use the result or backup already prepared when the writing is pending, according to section 13.3.3.

<!-- salto -->

### 14.7.3 Retention and maintenance {#14-7-3-retention-and-maintenance}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Information** | **Conservation rule** |
|---|---|
| **Transitional State with** **contact** | Until the confirmed transfer of the final state; treatment of pending according to the technical policy of the project |
| **Journey without contact** | Until the end of session; no persistence of responses or experience |
| **Journey for minors** | Transitional status for on-screen result; no lead, appointment, brief or persistent documents |
| **Experience replaced from the** **same club** | Removal of the substituted version and its associated copies when replacement is appropriate; protection of existing appointments versions |
| **Current Experiences and** **Deliveries** | Conservation in accordance with Sports World-approved retention policy |
| **Backups** | Time frame, access and disposal under the same policy |
| **Measurement events** | Independent preservation of document replacement, according to the Funnel Map (Chapter 18) |

Sports World must set in the retention policy the deadlines for data retention, deliveries, pending and backups. The technical contract must record those deadlines, its responsible and the disposal mechanism. The implementation must apply that policy to each preserved copy.

The non-contact route must end with the session data. The reduced minor route must end on screen with the ideal club, its explanation and the instructions to contact or arrive.

The system must keep technical logs without personal data. The head of the database must control accesses and the execution of backups and deletions.

The system must deliver to Sports World the identifiers that relate lead, session, appointment and experience. **journey’**s **responsibility ends** by **mailing the Ideal Experience** to the person and **the brief** by **email** to the **club**. Sports World manages the service and subsequent record management. The measurement integration and dashboard must continue with the results provided by Sports World according to the Funnel Map (Chapter 18).

<!-- salto -->

# Chapter 15 - Daily Operations {#chapter-15-daily-operations}

The daily operation checks that the site can build and deliver the Ideal Experience with the published data of Sports World. The system verifies the source cutting, simulates the journeys and records the incidences for each responsible to correct its origin.

The review must cover the journey from the questionnaire to the email with experience to the person and the brief to your club. Subsequent service corresponds to Sports World.

## 15.1 Daily simulation {#15-1-daily-simulation}

The system must run a daily simulation linked to the snapshot of **the 06:00, Mexico** City **time**. The execution must use the validated data for that snapshot and the published versions of the questionnaire, the matrices and the templates.

The simulation must use the same club calculations, programs, classes and signals as the person's journey. Each case must compare the result obtained with the rule that governs it.

### 15.1.1 Preparation and scope {#15-1-1-preparation-and-scope}

The integration must capture the changes recorded in the CRM to 05:59, according to the 14.1 section. The system must validate identifiers, relationships, formats, validitys and dates of the sources before publishing the update.

The simulation must retain the relationship between each case and the snapshot used. Sources that continue with an earlier data must retain their date and backup status.

The execution must check the coverage of the six objectives of Q4 and the three rhythms of Q5 in the club catalog. That check must evaluate the 18 combinations target × intensity per club, according to section 7.3. The record must identify combinations that lack an eligible class.

The simulation must check the 18 combinations of objective and modality of the individual programs in section 11.5. The control must verify the approved fields of the matrix and the parameters of the aquatic training.

The system must repeat the cases concerned after manual synchronization or an update of matrices, instrument or templates. The registry must distinguish the daily execution of the checks caused by those changes.

<!-- salto -->

### 15.1.2 journeys checked {#15-1-2-journeys-checked}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.0 -->
| **Condition** | **What Happens** | **What Is Recorded** |
|---|---|---|
| **P0 contains valid** **lens, club, class or** **service context** | questionnaire retains its origin and applies the acceptances and rejections in section 5.2.4 | Context used, control response and expected outcome |
| **A generic page** **succeeds to a valid** **context** | The system retains the previous context according to the windows of chapter 5 | Navigation sequence and resulting context |
| **The person declares** **one or two** **objectives** | The calculation retains the main and secondary order and checks both when applicable | Objectives, ratings and selection results |
| **Clubs meet different** **combinations of** **requirements** | The selector applies the four modes of the 10.7 section and its flags | Mode, club resolved and requirements met or pending |
| **The person chooses** **a club that does not** **meet a requirement** | The system reports the lack and offers options that do cover it; if it confirms the choice and accepts the exception, that club replaces the previous one as ideal club and recalculates the experience | Requirement, alternatives, acceptance, unique current ideal club and resulting composition |
| **The person chooses** **water, floor, both or** **recommendation of** **modality** | B01 retains weights on the ground; B02 takes the resolved mode of Q6 | Original Modality, Effective Modality and Blocks |
| **Q12 determines** **individual training or** **group** | B03 uses the corresponding branch of the 11.7 section | Effective branch, applicable components and signals |
| **The class accepted** **in P0 differs from** **targets or** **preferences** | The group branch retains that class and brings the difference only to the brief | Preserved class and corresponding signal |
| **Individual Q12** **happens to an** **accepted class in P0** | The calculation excludes group classes and their requirement and schedule alert | Individual branch and absence of these group elements |
| **Q13 indicates arrival** **on its own and Q12** **is a group** | The system retains both responses and selects group classes | Answers and result without sign of contradiction |
| **The offer contains** **fewer different** **classes valid than** **those envisaged** | The selector delivers the available according to section 12.7 | Different identifiers, actual quantity and contingency |
| **The person changes** **clubs or classes** | The system recalculates experience and obtains wording for the new version | Versions, calculation data and corresponding text |
| **The days or times** **declared are not** **enough for the** **experience** | The system retains the complete plan and activates the comparison and the two outputs of the brief | Capacity of Q8 and Q17, load according to Q12 and time signal |
| **Class schedules** **differ from Q7 and** **Q8** | The group branch retains the selected classes and activates the schedule alert | Offer used, declared availability and alert |
| **Person requests** **date and time of visit** | The agenda uses the club's opening hours and assumes availability | Date, time and correspondence with the care schedule |
| **The person** **continues to modify** **an open session** | The prepared state incorporates the changes until closing | Latest version and absence of pre-written or emails |
| **The browser** **communicates the** **closure or passes** **ten minutes without** **activity** | The first trigger closes the session and processes its final state once | Shooter, final status and results of operations |
| **There is contact and** **there is no** **appointment** | The person receives their experience; the club resolved receives the brief as direct call | Destinations and direct call mark; express rejection of appointment when it exists |
| **There are** **appointments in** **different clubs** | Each appointment retains its experience and each club receives the corresponding brief | Relationships between person, session, appointment, club and delivery |
| **The person returns** **and gives contact** | Reconciliation recovers or assigns its internal identity and retains the new session | Result of recognition and rules of coexistence or substitution |
| **The person omits** **contact** | Full experience is displayed on screen and ends with session | Case result without lead, appointment, brief, email or experience persisted |
| **The person uses the** **reduced route of** **minors** | The system displays ideal club, explanation and instructions to contact or arrive | Result of the case without P0, Q17, contact capture or persistent deliveries |
| **A source or model** **fails** | The journey uses the applicable fallback and retains the forward output | Source, date, backup and signal content where applicable |

The simulation must check that the journey retains a single valid ideal club. When the person confirms another club, that club must replace the previous one in the registry and become the reference of the menu and calculation. The 5 km scan radius and the plan must use the same current ideal club, according to sections 3.6.2 and 11.9.

The proximity control must distinguish kilometers from minutes. The absence of traffic must use distance per route according to section 10.6. The simulation must check that Q7 retains its training schedule function.

### 15.1.3 Text, closing and test deliveries {#15-1-3-text-closing-and-test-deliveries}

The editing check must apply the chapter 13 contract. Each validated response must correspond to the club, the blocks and the classes of its version. The control must review fields, quantities of elements, word limits, concordance and vocabulary.

The simulation must check the backup when the model's response fails or fails to comply with its contract. The case must respect both retry and the "**See My Recommendation**" output of the 13.3.1 section. The brief backup must retain the fixed parts and omit the failed narrative pieces according to the 13.3.2 section.

The closure check must include a repeated operation and an operation the result of which remains to be confirmed. The integration must retain `session_uuid` and the identity of each appointment and deliver when resolving those cases, according to section 14.6.7.

The case with writing pending closure must use the prepared result or backup of section 13.3.3. The system must retain the final state that originated each sending.

The simulation must use test profiles without actual leads personal data. Deeds and test emails must be directed to the configured test environments and destinations. The system must keep those results separate from the commercial records and the actual funnel metrics.

### 15.1.4 Performance result {#15-1-4-performance-result}

The execution must produce a record with date, snapshot, versions used, proven cases and result of each case. Each incident must identify the failed rule, the affected component or source and the backup used.

The system must provide that record to the technical officer; the incidences of catalogue, content or matrix must be assigned to the person responsible for that source.

The publication must keep the valid data according to section 14.1. A rejected update must maintain the backup of the affected source and its contingency signal. Incidence must remain open until a check confirms the correction.

## 15.2 What is reviewed and who {#15-2-what-is-reviewed-and-who}

Sports World must designate those responsible for its sources, contents and matrices. The system’s technical manager must maintain the day-to-day execution, review its results and address integration, calculation and delivery failures.

<!-- salto -->

### 15.2.1 Responsible and Checkers {#15-2-1-responsible-and-checkers}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Condition** | **What Happens** | **What Is Recorded** |
|---|---|---|
| **The Daily Cycle** **Ends** | The technical officer reviews that the synchronization and simulation are over and that there is a result per case | Date, status of cycle, cases executed and incidences |
| **Clubs, services,** **classes or** **schedules change** | The manager of the operational data in Sports World verifies the source and the technical manager verifies its incorporation | Corrected source, snapshot-off and outcome of affected cases |
| **Rates or** **promotions change** | The data controller in Sports World verifies value, scope and validity in the CRM | Source value, validity and publication by cutting or manual synchronization |
| **Change editorial** **content or page** **context** | Manager responsible reviews content, relationships and publication | Page, relationships, version and navigation result |
| **Change the class** **matrix** | Sports World training manager reviews goals, intensity, skills and equivalents | Approved version and coverage and selection result |
| **Change the matrix** **of individual** **programs** | Sports World-designated professional reviews effort, duration, frequency, reason and aquatic parameters | Approved version and results by objective and modality |
| **Calculation or** **drafting failed** | The technical officer verifies the rule, versions and backup; the source manager corrects the data when it is sourced | Cause, component, correction and subsequent verification |
| **A deed or sending** **is pending** | The technical officer reviews your confirmation and retry with the same operating identity | Status of lead, appointment, experience and every email |
| **attendance data,** **memberships or** **cancellations arrive** | SW Systems provides data and the technical manager verifies dashboard load, reconciliation and update | Source, period, date and coverage of results according to the Funnel Map (Chapter 18) |
| **An experience is** **replaced or a** **transitory state is** **removed** | The base manager checks the applicable rule and retention policy of Sports World | Operation and result without personal data in the decision log technical |
| **The check confirms** **a correction** | The technical officer closes the incident and retains his evidence | Case resolved, date, responsible and proven cases |

The head of a source must correct the data in his home system. Rates, discounts and promotions must retain their origin in the CRM. The manager must keep editing the editorial content.

Sports World must maintain the matrices according to its rules of government. The daily review must verify their availability, version and correspondence with the catalogue. The revision of the class matrix must keep the periodicity of the 12.1 section; the program section must retain the governance of the 11.6.2 section.

The operation must distinguish an incorrect catalog data from an implementation that misapplyes a rule. The technical manager must identify that difference when assigning the incidence and checking its solution.

### 15.2.2 Recording of incidents and deliveries {#15-2-2-recording-of-incidents-and-deliveries}

Each incident must retain source or component, date of detection, version, rule affected, responsible, action taken and result of verification. The decision log technique must exclude personal data, questionnaire responses and copies of commercial documents.

The Ideal Experiences base must retain the relations and statuses of the deliveries according to section 14.7.1. The operational review must use those references to check the outcome of each operation with the permissions that correspond to it.

The control must distinguish the writing of the lead, the writing of each appointment, the persistence of the experience, and each sending of email. A confirmation of one operation must retain its scope without taking the others for granted.

The technical officer must review the delivery pending until the relevant service confirms its operation or failure. A retry must retain the original final state and avoid duplicating confirmed results.

The shipping confirmation must correspond to the email service. The system review must end with the delivery of the experience to the person and the brief to the club. Sports World manages the reading, the direct call, the visit and the subsequent service.

## 15.3 What to do when a source does not arrive {#15-3-what-to-do-when-a-source-does-not-arrive}

The system must apply the continuity rule of section 5.9. The journey must use the last valid data available, retain its origin and transfer to brief the contingency affecting experience when contact exists.

The system must support every schedule, price, class and service in the data it retains. The person must continue with the actions of the journey and the result supported by those sources.

<!-- salto -->

### 15.3.1 Backup by type of incidence {#15-3-1-backup-by-type-of-incidence}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Condition** | **What Happens** | **What Is Recorded** |
|---|---|---|
| **CRM does not** **deliver the** **snapshot or an** **update is invalid** | The system retains the last valid data from the affected source and continues the journey | Source, failure, date of data used and signal in the brief when it affects experience |
| **The class or** **program array does** **not deliver a valid** **version** | The calculation consumes the latest approved version available | Matrix, version, date and contingency signal |
| **A list of the** **catalogue is left** **without valid** **correspondence** | The system retains valid relationships and uses the applicable backup to compose the result | Affected identifiers and result of the check |
| **Fewer classes are** **valid than planned** | The selector retains the amount available without inventing or duplicating disciplines | Classes delivered and signal to brief when contact exists |
| **Failed editorial,** **instrument or** **template update** | The site retains the latest valid published version | Source, preserved version and cause of rejection |
| **Geographic Catalog** **Update Failed** | The calculation uses the latest valid version of the catalogue | Version, source of coordinates and contingency |
| **Lack of valid traffic** **information** | The comparison uses distance by route, according to section 10.6 | Path source, data available and backup usage |
| **Formulation of the** **model or response** **fails to comply with** **contract** | The screen applies the chapter 13's retrying and backup output | Calculated version, attempts, validation and backup parts |
| **Writing failed in the** **customer system at** **closing** | The integration retains the final state pending and retrys the operation with the same key | `session_uuid`, pending operation and confirmation or error |
| **The persistence of** **an experience fails** | The system retains the relationship with its session and appointment and retry pending writing | Identity of experience, result of persistence and state of delivery |
| **Can not open** **message** | The system retrys pending delivery with the same identity and retains the other confirmed shipments | Referenced delivery destination, status of service and attempts |
| **An operation has an** **uncertain outcome** | The integration reconciles its result by means of the confirmation and idempotency contract before resolving the retry | Operation identity, recovered result and action taken |

The technical officer must receive the incidence to review connection, permissions, formats, relationships and source result. Sports World must correct your system data when the problem comes from the source.

The re-entry must respect the application limits and the waiting conditions of the 14.6.7 contract. The transaction must retain the last valid result during recovery.

### 15.3.2 The signal the club receives {#15-3-2-the-signal-the-club-receives}

The brief must identify the affected source, the data used and its date. The signal must correspond to the version delivered to that club. A source contingency must retain its operational meaning and avoid inferences about the health of the person.

The difference between an accepted class and targets or preferences must travel only to the brief. The time alert must be activated in the group branch. The time alert must retain the comparison between Q8 and Q17 and the load of the actual Q12 branch.

With contact and without appointment, the brief must arrive at the club resolved as direct call. Without contact, the journey must keep the experience on screen and finish its data with the session. The reduced route must keep its result on screen without sending information to the club.

### 15.3.3 Recovery and End of Operation {#15-3-3-recovery-and-end-of-operation}

The integration must validate the recovered data before incorporating it into the snapshot or manual synchronization. The simulation must repeat the affected cases and record their result. The technical officer must close the incidence when that check confirms the recovery.

The recovery of a source must keep the deliveries already made and the data with which they were constructed. An outstanding operation must use the final state of its session; the catalog update must feed the subsequent calculations according to chapter 14.

The system must complete the outstanding shipments of experience and brief. **The responsibility** of **this journey ends** by **sending** both **emails** to **its respective recipients**. The club's subsequent performances belong to Sports World.

The measurement operation must continue with the sources of the Funnel Map (Chapter 18). The dashboard must show the date of each load and its coverage. A pending result source must retain that state in the measurement.

<!-- salto -->

# Chapter 16 - The Handoff to the Club {#chapter-16-the-handoff-to-the-club}

The transfer delivers to the club the brief with which Sports World continues the service of the person. The person receives their Ideal Experience by email and the club receives the commercial document built with the same answers and the same result.

**The responsibility** of **the journey ends** by **sending the Ideal Experience** to the **person** and **the brief** to the **club**. Sports World manages the call, the coordination of the visit and subsequent service.

The dashboard and the funnel measurement remain within the scope of the project. The measurement integration must incorporate the results that Sports World records according to the Funnel Map (Chapter 18).

## 16.1 What the club receives {#16-1-what-the-club-receives}

The system must send the brief to the correo_club of the published directory, according to the 14.6.1 section. The recipient must correspond to the club of the experience that is delivered.

The journey must retain a single valid ideal club. When the person confirms another club, that club must replace the former in the active state and govern the calculation and destination of the brief. An informed and accepted deficiency must retain its exception according to chapter 10.

The club must receive the brief corresponding to the final state. The Ideal Experience of the person must be sent to the email they provided, according to the 9.2 section. The 4.4 section establishes the content of the brief.

### 16.1.1 When delivered {#16-1-1-when-delivered}

The system must calculate and prepare the versions during the session. The transfer must wait until the browser communicates the shutdown or it takes ten **minutes without activity**, which occurs first.

Club, class or appointment changes prior to closing must update the prepared result. The system must write and send that final state once, according to section 9.3.

When a person changes an appointment club during the session, the system must recalculate the experience and request day and time within the new club's opening calendar, according to section 4.2.3. The sending must reflect the final result of that modification.

<!-- salto -->

### 16.1.2 The cases of delivery {#16-1-2-the-cases-of-delivery}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Condition** | **What Happens** | **What Is Recorded** |
|---|---|---|
| **Contact and an** **appointment** | The person receives the experience of that appointment and the club receives its brief with day and time | Lead, session, appointment, experience and result of each sending |
| **Contact and more** **than one** **appointment in the** **session** | Each appointment retains its experience and its brief; each delivery uses the club corresponding to that appointment | Relationship of each appointment to its club, version and delivery |
| **Contact and no** **appointment** | The person receives the experience of the current ideal club and that club receives the brief as direct call | Lead, experience, direct call brand and result of each sending |
| **Express rejection of** **schedule, with** **contact** | Case passes to direct call and retains express response | State «did not want to schedule visit» and brief of direct call |
| **Confirmed club** **change before** **closing** | The new club replaces the previous one as ideal club and receives the brief of the final version that corresponds to it | Unique `club_id` of that version, accepted exceptions and recalculated result |
| **Journey complete** **contactless** | The person retains their experience on screen until the end of the session | Without lead, appointment, brief, email or experience persisted |
| **Minors reduced** **route** | Display delivers ideal club, explanation and instructions to contact or arrive | No commercial registration, submission of documents or transfer of replies to the club |

Each version must retain a single club identifier. appointments references must respect the relationships in the 9.5.3 section and the appointment experience rule in the 4.1.1 section.

The system must communicate in each appointment the date and time requested within the opening hours. The registration must assume availability for the in-person visit. The management of that request corresponds to the club.

### 16.1.3 Confirmation of writing and sending {#16-1-3-confirmation-of-writing-and-sending}

The closure must link the lead, the registered session, appointments and experiences with the chapter 9 identifiers. The integration must retain `session_uuid` as the key to the session and the identity of each operation and delivery, according to the 14.6.7 section.

The system must check the result of each writing and each email. A confirmation must attest the operation to which it belongs. Confirmation of the email service must attest the sending; the reading and internal allocation of the brief belong to Sports World.

A pending deed or delivery must be treated in the 15.3.1 section. The retry must retain the identity of the operation and the final status that led to the delivery. The system must retain the confirmed results to avoid duplicating the lead, appointment or email.

The technical logs must keep transaction and result references without personal data, according to section 15.2.2. The documents and their relationships must remain in the destinations defined by chapter 14.

## 16.2 What the Advisor Receives {#16-2-what-the-advisor-receives}

The advisor receives the brief through the club. The document must identify whether the service corresponds to a scheduled visit or to a direct call.

The brief must keep the two pages of the 4.1.2 section. The first page must identify the person and the context of service. The second page must organize the evidence to prepare the conversation.

### 16.2.1 Identification and content {#16-2-1-identification-and-content}

The first page must include the context of appointment or direct call, the header, the lead profile and the logistics and contact, according to the 4.4.1 section. With appointment, the context must include club, address, date and time. Without appointment, it must include the current ideal club and **the Direct call** mark.

The second page must include what to validate, the recommended route, the proposal, the closing priorities, notes and signals, the adjustment of time where applicable, the closing script, the four boxes of the advisor's registry and the internal footer, in accordance with paragraph 4.4.2.

The recommended route must prepare the journey by the club when there is appointment. In a direct call it must be used to prepare the conversation and a possible visit.

The brief must match the experience delivered in objectives, club, modality, programs, classes and exceptions accepted. The text must correspond to the calculated version that is delivered, according to section 13.1.3.

### 16.2.2 Signals for service {#16-2-2-signals-for-service}

The brief must include the signals in section 5.9 and the exceptions accepted in section 10.14. Each signal must retain the data that originates it.

The class accepted in P0 must be retained in the group branch even if it differs from objectives or preferences. That difference must be identified only in the brief. Individual Q12 must exclude groups; Q13 on its own must remain compatible with Q12 group.

The time alert must correspond to the group branch and to the comparison with Q7 and Q8. The time alert must compare the days of Q8 and the session duration of Q17 with the loading of the effective Q12 branch, according to the 11.16 section.

When the time setting is activated, the brief must retain the complete experience and the two approved outputs: explain why a larger commitment serves the target better or adjust the plan with the person during the visit. Sports World conducts that conversation after delivery.

The contingency of a source must identify what data was used and what date it was. An insufficient offer must retain the actual amount of different valid classes. The signal on an alternative club that best meets a requirement must follow section 4.4.4 and keep the current ideal club of the experience delivered.

Signals must use the instrument's authorised responses and operational contingencies. The content must respect the limit of preferences and functional needs of section 5.8.

<!-- salto -->

### 16.2.3 When writing fails {#16-2-3-when-writing-fails}

The system must deliver the support of the 13.3.2 section when the writing fails. The brief must retain context, header, profile, logistics, notes and signals, time adjustment when applicable, the four boxes of the record and footer.

The failed narrative sections and the closing script must be out of the back. brief must carry the signal identifying that contingency.

If the session closes with the pending wording, the delivery must use the ready-made elements of the latest version, according to section 13.3.3. A subsequent response must remain out of the emails already sent.

## 16.3 Direct calls: who answered and did not schedule {#16-3-direct-calls-who-answered-and-did-not-schedule}

A person who completes the questionnaire and delivers contact must enter the transfer even if it does not schedule a visit. The system must send its experience by email and direct call brief to the ideal club in force at the close of session.

The brief must provide the same result and the same evidence that would have prepared a visit. The context must distinguish direct call from an appointment with date and time.

### 16.3.1 Brand and recipient {#16-3-1-brand-and-recipient}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Condition** | **What Happens** | **What Is Recorded** |
|---|---|---|
| **Delivery contact** **and reply that you** **do not want to** **schedule** | The club receives brief from direct call to continue the service | direct call marker and state "did not want to schedule visit" |
| **Delivery contact** **and session ends** **without** **appointment** | The current ideal club receives brief from direct call | Final status without appointment and direct call brand |
| **A subsequent** **session ends with** **appointment** | The system updates the status of lead and delivers the brief corresponding to the new appointment | New session, appointment and updated commercial status |
| **Skip Contact** | The result remains on screen until the end of the session | No record of direct call or brief to the club |

**The** mark **"did** not **want to schedule** visit" must correspond to the express rejection of the person. The system must keep it as an updateable state of the registry, according to section 9.9.

The direct call must be directed to the current experience club. A confirmed change before closing must update that destination and the corresponding brief.

<!-- salto -->

### 16.3.2 The commercial continuation {#16-3-2-the-commercial-continuation}

Sports World assigns the call to the club's advisor and determines the time frame and form of follow-up in its business process. The brief delivers the information with which that advisor can begin the service.

The non-schedule response must retain its meaning: the person rejected an appointment in that journey. The case remains identified as direct call according to the 9.9 section.

The completion of the call and its results belong to Sports World. The transfer of the system must be complete with the email of the experience to the person and the brief to the club.

## 16.4 What happens if the person does not show up {#16-4-what-happens-if-the-person-does-not-show-up}

The date and time sent to the club express the request registered within their hours of service. Sports World manages the coordination of that visit and knows if the person came.

If the person does not show up, Sports World manages the status of attendance and subsequent contact in its business process. Failure occurs after the transfer and falls under its responsibility.

The sending record must retain the experience, brief and appointment data that were delivered. The system must respect the origin and outcome of those operations.

The confirmation of writing accredits a registered appointment. The confirmation of sending accredits the email. The attendance depends on the registration of Sports World; these confirmations must each retain their meaning. The measurement integration must incorporate that record to measure the visit made according to the Funnel Map (chapter 18).

The responsibility of the digital journey is fulfilled with the delivery of both emails. The management of an absence of assistance retains the identifiers received so that Sports World can relate it to the corresponding lead and appointment.

## 16.5 What the advisor sees when the lead already existed {#16-5-what-the-advisor-sees-when-the-lead-already-existed}

The reconciliation must apply the 9.8.1 recognition key when closing the journey with contact. When a valid match exists, the system must recover `sw_person_id` and update the record of that person.

The new execution must retain its own session_uuid. The brief must present the responses, the ideal club and the final result of this new session. The calculation must use the questionnaire of this journey, according to the chapter 5.

<!-- salto -->

### 16.5.1 The result of the reunion {#16-5-1-the-result-of-the-reunion}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Condition** | **What Happens** | **What Is Recorded** |
|---|---|---|
| **Valid match with an** **existing lead** | Delivery is linked to the recovered internal identity | Same sw_person_id, new session and delivery operations |
| **The previous brand** **was «he did not** **want to schedule** **visit» and now** **agenda** | The status is updated and the advisor receives the brief from the new appointment | Appointment, date, time and commercial status of the new journey |
| **The new journey** **ends without** **appointment and** **with contact** | The advisor receives brief from direct call from the current final state | Status without appointment, valid experience and applicable brand |
| **New experience of** **the same club** | The version replaces the previous version where appropriate according to paragraph 9.8.2 | Result of replacement and maintenance of current appointments-linked versions |
| **Delivery** **corresponds to an** **existing** **appointment** | brief maintains the relationship with the experience of this appointment | Identity of appointment, version and club of that delivery |
| **Conciliation does** **not find a valid** **match** | The system creates the identity of the new lead according to chapter 9 | New sw_person_id and session linked |

The advisor must receive the brief of the experience corresponding to the care given to him. The document must retain the current context of appointment or direct call and the preferences and exceptions of that version.

Relationships with previous records must remain in Sports World systems according to chapters 9 and 14. The replacement of an experience must keep the measurement events already recorded, according to section 9.8.3.

The system must deliver the identifiers that relate person, session, appointment and experience. Sports World manages the subsequent use of that continuity in its commercial service.

<!-- salto -->

# Chapter 17 - The Panel for Updates Without Programming {#chapter-17-the-panel-for-updates-without-programming}

Sports World must have a panel to keep site content and settings authorized without programming. The panel must publish the changes with its validations, permissions and operating record.

The **dashboard** must present the **results** of **the measurement** according to **the Funnel Map** (**Chapter 18**). The update panel must manage content and configuration; the accesses to the dashboard must allow to consult the measurement according to the authorized profile.

## 17.1 What can be changed without programming {#17-1-what-can-be-changed-without-programming}

The panel must allow you to edit texts and replace images from the pages of the site. The publication must retain the structure of each type of page and its relations with clubs, classes, objectives and services, according to chapter 3.

### 17.1.1 Content and relationships {#17-1-1-content-and-relationships}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Element** | **Updating permitted** | **Source and validation** |
|---|---|---|
| **Texts and images** | Content editing and replacement of visual resources | Approved editorial content for page type |
| **Blog** | Publishing and publishing articles and their relationships with objectives, classes, clubs and services | Valid relations of the catalogue and page context |
| **Pages and** **navigation** | Maintenance of content, publication status and inventory relationships | Page Identity and Menu Rules of Chapter 3 |
| **Boot Coordinates** | Correction of the seed linked to each club | Stable identifier and verified coordinates; valid CRM updates according to 14.6.1 |
| **Class Matrices** | Load or update of approved version | 12.1 contract and correspondence with the catalogue |
| **Program matrices** | Load or update of approved programs and parameters | 11.5.1 Contract and 11.6.2 Government |
| **Instrument and** **templates** | Publication of an approved version of CEI-01 and the presentation and writing pieces | Questions, branching, current fields, limits and vocabulary |
| **Operational** **catalogues** | Implementation of an authorized manual synchronization | CRM data and chapter 14 contract |

The identity of the objectives must match questionnaire, pages, matrices and experience. Editing a title must retain that identity.

The update of page relations must feed the context of P0 according to chapter 5. The panel must check that each club, class or service referred to exists in the published source.

The family benefit texts, class descriptions and program reasons must retain the source maintenance defined in section 14.6.4. The system must consume those approved parts when presenting the experience.

### 17.1.2 Data that is updated from source {#17-1-2-data-that-is-updated-from-source}

The CRM must provide club status, hours of service, contact details, amenities, offer and schedule of classes, rates, discounts and promotions. The panel must manage its synchronization according to the 14.1 section.

Sports World must correct the operating values in its source system. Publication must respect the identifiers, validitys and scope of application of that data.

The panel must offer manual synchronization for an authorized urgent change. That action must collect and validate the source data before publishing them. The site must retain the last valid data when the update fails.

The daily snapshot must continue at 06:00**, Mexico** City time. A manual synchronization must keep date, scope, responsible and result, according to chapter 14.

### 17.1.3 Publication and verification {#17-1-3-publication-and-verification}

Each update must check the fields and relationships of your contract. An array must keep version, responsible and date of approval. A template must keep the fields, quantities and limits of the chapter 13.

The system must repeat the affected cases of the chapter 15 simulation when changing matrices, instrument, templates or sources. Publication must use the valid versions tested.

The panel must retain the result of the validation and the cause of rejection of an update. The site must continue with the published version valid when the change fails.

The publication of a catalogue must feed the subsequent calculations. An already delivered experience must preserve the content and sources that originated its version.

### 17.1.4 Measurement and its Consultation {#17-1-4-measurement-and-its-consultation}

The dashboard must consult the aggregate results of the measurement base within the Sports World infrastructure. **The Funnel Map** (**Chapter 18**) must define its stages, sources, rates, filters and update states.

Sports World must provide the data of visits made, memberships and cancellations from their systems. The measurement integration must incorporate them with the periodicity of the source. The dashboard must show the date and coverage of the data received.

The panel must retain the approved content and configuration management. The metric reading must respect the Funnel Map definitions (Chapter 18) and the consultation and export permissions.

The person's journey must end with the emails of the experience and brief. The measurement integration and the dashboard must continue with the result data provided by Sports World.

<!-- salto -->

## 17.2 Who authorizes it {#17-2-who-authorizes-it}

Sports World must designate the authorized personnel to edit, publish and run synchronizations. Each access must use a user identity and permissions corresponding to its function.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Function** | **Responsibility** | **Permission to apply** |
|---|---|---|
| **Content of Sports** **World** | Texts, images, articles and editorial relations | Editing and publishing of authorized content |
| **Sports World** **operating data** | Correction of values in their source systems | Source maintenance and sync request |
| **Training Officer** | Class matrix and grades | Approval and publication of versions of that matrix |
| **Professional** **programme** **manager** | individual training and aquatic parameters | Approval and publication of relevant programmes |
| **Instrument Manager** **and Templates** | Approved versions of questionnaire and deliveries | Publication of authorized configuration |
| **Technical Officer** | Integrations, validations, permissions and failure recovery | Technical administration and authorised synchronisation |
| **Authorized** **reference staff** | Read funnel results | dashboard consultation and aggregate export according to your profile |

Sports World must determine which people can perform each function. The same person can have multiple permissions when Sports World authorizes them.

The controllers of the matrices must apply the revisions of sections 12.1 and 11.6.2. The loading of a file must retain the approval of its contents and the validation result of the system.

The questionnaire edition or templates must use an approved version of the current rules. Logic changes must retain their decision and traceability before being published.

Access management must allow permissions to be withdrawn when a person's responsibility is changed. Integration credentials must retain the permissions and environment separation in section 14.6.7.

The technical officer must take care of the publication and access incidents. The person responsible for each source must correct the data whose origin corresponds to him, according to section 15.2.1.

<!-- salto -->

## 17.3 What Is Recorded {#17-3-what-is-recorded}

Each change must retain identity of operation, responsible user, date, affected element, previous version, published version and result. The record must allow to know who authorized and published the change.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Operation** | **Contents of the register** |
|---|---|
| **Content Editing** | Page or resource, responsible, date and version of the change |
| **Publication** | Version, Authorizer, Date, Validations and Result |
| **Matrix Update** | Matrix, version, approveer, date and correspondence with the catalogue |
| **Instrument or template** **update** | Approved version, associated decision and logic or content checks |
| **Manual synchronization** | Source, snapshot, range, responsible and result |
| **Rejected update** | Element, cause of rejection and valid version preserved |
| **Change of permissions** | User, permissions authorized or withdrawn, responsible and date |
| **Load for measurement** | Source, period, date of receipt, conciliation and coverage according to the Funnel Map (Chapter 18) |

The technical decision log must retain operating and result references without personal data from leads. The commercial and measurement records must remain in the destinations and with the retention policy of chapter 14.

The system must retain the relationship between the published change and the chapter 15 checks. An incidence must be associated with its cause, responsibility and recovery result.

The Ideal Experiences base must retain the source versions used in each delivery. The measurement must retain its events when replacing a document, according to section 9.8.3.

The dashboard must present the dates of the sources and pending updates defined in the Funnel Map (Chapter 18). The absence of a data must keep its state of information pending or unavailable.

<!-- salto -->

# Chapter 18 - The Funnel and the Dashboard {#chapter-18-the-funnel-and-the-dashboard}

The funnel measures conversion from website traffic to the visit, membership and cancellation. The dashboard presents aggregated results, attribution and source coverage.

**The person's journey ends when their Ideal Experience is emailed and the brief is delivered to the club. Measurement and the dashboard continue using the results that Sports World records in its systems. Subsequent commercial follow-up belongs to Sports World.**

This map must be the sole reference for funnel stage names, events, sources, rates and presentation rules. The Architecture chapters must use these definitions when referring to measurement.

## 18.1 journey and measurement {#18-1-journey-and-measurement}

The website must be the acquisition channel for the self-guided experience. The journey must retain the questionnaire, the experience, contact details when supplied, an appointment when scheduled, and final delivery at session closure.

The conversion backbone must retain the stages questionnaire started → questionnaire completed → visit scheduled → visit completed → membership purchased → membership cancelled. Brief delivery and direct calls must have their own follow-up indicators to represent cases with contact details that end without an appointment.

The system must build the dashboard and measurement integration. Sports World must record and supply commercial data after the handoff. Reading those results must feed measurement without performing the club's service operations.

## 18.2 Site entries {#18-2-site-entries}

Measurement must distinguish website sessions, ad reach and Google Business Profile activity. Each data item must retain its unit and source.

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **snapshot** | **What's in it?** | **Source** | **Use in dashboard** |
|---|---|---|---|
| **C1a · Organic** | Sessions from unpaid search | GA4; Search Console for search performance | Lead acquisition organic and positioning reading |
| **C1b · Payment on** **site** | Sessions attributable to campaigns landing on the site | GA4 and campaign parameters | Lead acquisition of separate organic pattern |
| **C1c · Google** **Business** | Visits, calls and requests for information on the fact sheets | Google Business Profile | Performance of 49 chips |
| **E0 · Campaign** **Scope** | Impressions and pattern metrics for campaigns to the site | Advertising accounts of Meta and TikTok | Investment context and lead acquisition paid |

Search Console must supply impressions, clicks and search data within its own scope. Category keyword coverage must use the universe of terms in the current strategy and be measured with Semrush, under section 1.7 of the Architecture. The indicator must retain the baseline of 31.1 % and the twelve-month target of 55–65 %. The dashboard must show the universe, date and source of that measurement.

Google Business views, calls and directions must be shown as profile metrics. Sessions sent to the website by a profile must be measured in GA4 with the available attribution. The dashboard must distinguish both units when calculating rates.

Campaign attribution must retain utm_source, utm_medium and utm_campaign when present. Missing data must be identified as unattributed according to the available source.

## 18.3 When each stage counts {#18-3-when-each-stage-counts}

### 18.3.1 Conversion Events {#18-3-1-conversion-events}

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Stage** | **Count when** | **Source** | **Owner** |
|---|---|---|---|
| **E2 · Questionnaire** **initiated** | The person answers the first questionnaire question of the complete route | journey Instrumentation | Project system; analytic access provided by SW Marketing |
| **E3 · Questionnaire** **completed** | The complete questionnaire produces its first valid calculated recommendation, with validated text or with approved backup | Calculation event | Project system |
| **E4 · Scheduled visit** | The client system confirms the writing of an appointment at the close of session | Confirmation of writing of that appointment | Project system; SW Systems provides access |
| **E5 · Visit made** | Sports World records the person's attendance on that visit | CRM visit status or Sports World agreed source | SW Systems provides data; measurement integration incorporates it |
| **E6 · Purchased** **membership** | Sports World records membership activation | CRM or periodic base of new memberships | SW Systems provides data; measurement integration incorporates it |
| **E7 · Membership** **cancelled** | Sports World records the withdrawal of that membership | CRM or periodic base of cancellations | SW Systems provides data; measurement integration incorporates it |

E2 must count once per questionnaire run. E3 must count once for that completed run. Recalculation following a club or class change must retain its own version without adding another completion of the same questionnaire.

A new questionnaire in a later session must produce its own events. Replacing a stored experience must retain events already recorded, under section 9.8.3 of the Architecture.

Provisional selection of date and time must remain in session state. E4 must use confirmation of the appointment written at closure, not a lead write operation without an appointment. A retry of that same operation must retain the same event.

E5 must depend on Sports World's attendance data. Brief delivery, write confirmation and email sending must retain indicators distinct from attendance.

<!-- salto -->

### 18.3.2 Transfer indicators {#18-3-2-transfer-indicators}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Indicator** | **Count when** | **Identity of the result** |
|---|---|---|
| **Registered contact** | Closing confirms lead creation or update with contact | Registered person and session |
| **Experience sent** | The email service confirms the sending to the person | Delivery identity and version |
| **Brief sent to the** **club** | The service confirms the sending to the respective club | Delivery identity, version and club |
| **Direct call delivered** | The club receives the confirmed sending of a brief without appointment marked as direct call | Session, club and delivery |
| **fallback used** | The prepared version uses the support of a source or the editor | Version, source and type of contingency |
| **Pending operation** | A deed or final sending retains a result pending confirmation | Operation and status identity |

The call made by an advisor must only be presented as a result observed when Sports World provides this data. The sending of a brief direct call must retain its meaning of delivery.

### 18.3.3 Contactless routes and reduced route {#18-3-3-contactless-routes-and-reduced-route}

The complete non-contact route can provide the anonymous E2 and E3 participation events. At the end of the session they must complete their responses and experience, according to the chapter 9 of the Architecture. The measurement must keep anonymous counts and aggregate results.

The reduced minor route must have anonymous separate participation and club result counts. The dashboard must distinguish it from the complete route and commercial leads. That route must keep the output on screen, without contact, CRM, appointment, brief or documents sent.

## 18.4 Where the data lives and when it is updated {#18-4-where-the-data-lives-and-when-it-is-updated}

The measurement base must reside in the Sports World infrastructure. The reconciliation of identifiable data must occur in that infrastructure. The dashboard must present aggregate results and apply consultation and export permissions.

The events of E2 and E3 must record the date on which they occur. E4 and the closing indicators must record the date of the confirmed operation. Ad data, GA4, Search Console and Google Business must keep the date and cadence provided by each source.

E5, E6 and E7 must be incorporated with the daily snapshot of the 06:00, **Mexico** City **time**, when they are available in the CRM. A source delivered by files or periodical bases must keep its agreed periodicity, date of receipt and period covered.

Each commercial result must retain date of occurrence and date of incorporation. The board must group the periods with the time reference of Mexico City and document the conversion from the time marks of each source.

A missing source must retain the last valid load and its date. The dashboard must **display pending**, **outdated** or **unavailable**, depending on the actual status. An missing data must remain out of the calculation that requires it; the board must report the corresponding coverage.

## 18.5 Connection and attribution keys {#18-5-connection-and-attribution-keys}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Tram or entity** | **Key** | **Rule of use** |
|---|---|---|
| **Temporary** **navigation** | `web_session_id` | Browser status; no travel to CRM or persistent leads base |
| **Traffic and** **anonymous** **participation** | sessions metrics and analytical events | Aggregate rates; no personal identity attributed to traffic |
| **Recognized person** | `sw_person_id` | Internal identity recovered or created by means of the recognition key |
| **Journey registered** **with contact** | `session_uuid` | session relationship with person, experience and closing operations |
| **Appointment and** **attendance** | appointment and sw_person_id identifier when the source delivers it | Relationship of the application to its visit result |
| **Lead, visit and** **membership** | Internal identity where it exists; telephone, first name, surname and club according to the recognition contract | Reconciliation with Sports World records |
| **Membership and** **cancellation** | `numero_membresia` | Stable identity of active membership and its loss |

The phone must be normalized in E.164. Conciliation must apply the key to the chapter 9 of the Architecture and document its result. A valid record without matching must be identified as pending conciliation in the measurement. Attribution must use the relations confirmed by the source; a result with ambiguous relationships must keep its state pending attribution.

The journey must keep a single valid ideal club. The choice confirmed by the person must replace the previous one. The measurement must keep the club of each event, appointment and delivery as it happened, without converting the previous recommendation into another active ideal club identity.

The attribution available at the closure must travel with the registered session and its results reconciled. The dashboard must retain the origin of that attribution by linking E5, E6 and E7.

Retry and new loads of the same result must use stable operating identities, appointment, membership or source event. Integration must update the existing result when the source corrects it.

<!-- salto -->

## 18.6 The closing data provided by Sports World {#18-6-the-closing-data-provided-by-sports-world}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Result** | **Required content** | **Use** |
|---|---|---|
| **Visit undertaken** | appointment identifier or recognition key, attendance status, club and date of realization | E4 Conciliation → E5 |
| **New Membership** | Membership number, phone number, first name, surname, club, type and date of activation; internal identity when existing | E5 Conciliation → E6 and attribution of purchase |
| **Cancellation** | Membership number, date of withdrawal, club and type when available; reason when source records | E6 Conciliation → E7 and retention reading |

SW Systems must provide this data by agreed interface or periodic delivery. The contract must retain formats, mandatory fields, frequency, responsible and status of each load.

The measurement integration must verify the required fields before reconciling. The lack of a phone or other valid key must be recorded as a limitation of membership attribution. The lack of membership number must be recorded as a limitation to link the cancellation.

The base must retain the business results received and its reconciliation coverage. The dashboard must distinguish the results reconciled with the funnel from the total sources that still lack that relationship.

## 18.7 What dashboard presents and who provides access {#18-7-what-dashboard-presents-and-who-provides-access}

### 18.7.1 Views and filters {#18-7-1-views-and-filters}

The executive board must show as main reading traffic to the site, **scheduled visits**, **visits made** and **purchased membership**s. The participation stages, delivery indicators and cancellations must provide the operational and retention detail.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **View** | **Content** |
|---|---|
| **Summary** | Volumes, fees, period and date of update of sources |
| **Lead acquisition** | Organic, pay-to-site, campaign attribution and Google Business performance |
| **Questionnaire** | E2, E3, anonymous participation and separate reduced route |
| **Transfer** | Contact, experiences and briefs sent, direct calls delivered and pending |
| **Commercial performance** | E4, E5, E6 and reconciliation coverage with Sports World data |
| **Retention** | E7 and activation cohort cancellation |
| **Data quality** | Available sources, dates, covered periods, pending charges and unconciled records |

Filters must include period, origin, campaign, club and profile attributes available in the reconciled records, as objective, modality and intensity. Visualization must respect the information provided by each source and journey.

The tab of each indicator must identify definition, unit, source, period and denominator where appropriate. The query and export must retain aggregate results.

### 18.7.2 Access and responsibility {#18-7-2-access-and-responsibility}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Block** | **Data or access** | **Deliverer** |
|---|---|---|
| **Ads to site** | Reading of Meta and TikTok accounts and campaigns | SW Marketing |
| **Organic and on-site** **payment** | GA4 Property, Query Access, Verified Console Search and Tag Manager Container | SW Marketing |
| **Google Business** | Ownership or administration of 49 chips and access to their metrics | SW Marketing |
| **Keyword coverage** | Semrush report with universe of terms, date and result comparable to the base | Project position manager |
| **E2, E3 and** **deliveries** | Project instrumentation, calculation and confirmations | Project technical team; SW Marketing provides analytic access |
| **E4** | appointment Writing Confirmation and Customer System Access | SW Systems |
| **E5** | Status of attendance and relationship to appointment | SW Systems |
| **E6** | Activation, membership number and key to reconcile with the person | SW Systems |
| **E7** | Membership number and drop data | SW Systems |
| **Infrastructure and** **consultation** | Server, storage and authorized personnel | Sports World |

The project must build views and measurement integration. Sports World must provide accesses and data from its sources. The board must identify which indicators can be calculated with the information received.

<!-- salto -->

### 18.7.3 Incomplete sources {#18-7-3-incomplete-sources}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Condition** | **What the dashboard Shows** | **What Is Recorded** |
|---|---|---|
| **Lack of analytical** **access** | Pending or unavailable indicator and coverage of other sources | Missing and responsible access |
| **attendance missing** | E4 available; E5 and fees needing attendance pending | Source and missing period |
| **Lack of activations** | Participation, transfer and available visits; pending purchase | Source and missing period |
| **Cancellations are** **missing** | Conversion to available membership; pending retention | Period and source of casualties |
| **A periodic load fails** | Last valid data with date and update status | Failure and preserved coverage |
| **A Conciliation Key** **Missing** | Distinguished Total Source and Results | Pending records and case |
| **A period has zero** **denominator** | Rate not to be calculated for that period | Numberer, denominator and condition |

## 18.8 Scope and verification of measurement {#18-8-scope-and-verification-of-measurement}

The journey must end with delivery of the experience and the brief. Service, visit coordination, attendance, enrollment and cancellation must take place in Sports World's processes. The integration must consume their results to measure the funnel.

The check must cover E2, E3, contact registration, E4 and test data delivery. Retry must retain your identities and a club change must update the end result without duplicating the questionnaire completion event.

The measurement of E5, E6 and E7 must be checked with Sports World test loads that allow to follow an appointment, an activation and a decrease. The board must keep the dates of occurrence, the reconciliation and the expected added result.

The simulated absence of a source must show its status and coverage. A reloading or correction of the same data must retain an updated unique result. Test records must remain separate from actual business results.

Monitoring must retain measurement events even if a previous experience is replaced. Personal data must remain within the Sports World infrastructure and dashboard outputs must retain their aggregate character.

<!-- salto -->

## 18.9 Conversion rates and cohorts {#18-9-conversion-rates-and-cohorts}

Each rate must compare compatible populations and units. dashboard must distinguish sessions counts, questionnaire executions, people, appointments and memberships.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Rate** | **Calculation and reading** |
|---|---|
| **Traffic → questionnaire** **initiated** | Site sessions with at least one complete route start / sessions of the site of the same snapshot; participation |
| **Started → completed** | Completed executions/initiated executions of the same population; completion |
| **Completed → scheduled visit** | Completed tours with at least one confirmed appointment / journeys completed from the comparable population; intention to visit |
| **Agendad → carried out** | Appointments made / appointments confirmed from the same cohort of appointment; attendance |
| **Made → purchased** | Persons of the attendance cohort with a reconciled activation/persons of that cohort; conversion to membership |
| **Purchased → cancelled** | Memberships of a cohort that cancel within the horizon/memberships of that cohort with sufficient follow-up; cancellation |
| **Traffic → Membership** | Conciliated and attributed activations to an input cohort / sessions of the site of that cohort; added performance of lead acquisition, with visible period, coverage and reconciliation limits |

Event counts must keep the new journeys and additional appointments. Individual rates, sessions or journeys must use unique units of your population to prevent multiple appointments of a person from inflating a conversion.

The schedule rate must distinguish journeys anonymous completed from journeys registered with contact when an identified snapshot is presented. The aggregate traffic reading must retain the pre-contact identity limitation.

The retention must use activation cohorts and horizons of **30**, **90** and **180 days**. Each horizon must include memberships with the necessary tracking to observe it. The board must show the cancellation and permanence of those cohorts with their snapshot-off date.

Reading from traffic to membership must distinguish the entry period from a cohort from the period in which its activations occur. A relationship between totals of different periods must identify its aggregate character and the available coverage.

<!-- salto -->

<!-- parte -->
# Part III - System Requirements {#part-iii-system-requirements}

<!-- salto -->

# Chapter 19 - What the System Does When Something Goes** **Wrong {#chapter-19-what-the-system-does-when-something-goes-wrong}

The system must retain the last valid state and continue with the applicable fallback when a source or component fails. The result must use supported data. The incident must reach the technical owner and, when it affects an experience delivered with contact details, the brief.

## 19.1 The case table {#19-1-the-case-table}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.0 -->
| **Condition** | **What the Person Sees** | **What Is Recorded** |
|---|---|---|
| **Failure to snapshot** **an operating source** | Pages and recommendation with last valid data | Source, failure, backup date and signal to brief when applicable |
| **An update has** **invalid fields or** **relationships** | The valid published version | Validation rejected, affected fields and preserved version |
| **The class or program** **matrix does not** **respond** | The composition with the latest approved version available | Matrix, version, date and contingency |
| **Fewer classes are** **valid than planned** | Available classes without duplication or invention | Actual quantity, classes and signal to brief with contact |
| **The map service** **lacks valid traffic** | The option resolved with available path backup | Comparison by route distance and data source; no invented minutes |
| **Drafting fails or fails** **to comply with the** **contract** | Retry and "See my recommendation" output according to 13.3 | Attempts, validation, calculated version and backup |
| **Drafting is still** **pending for closure** | The result or endorsement that was already prepared | Latest version, backup pieces and final sending; late response out of emails sent |
| **lead or appointment** **write failed to close** | The prepared outcome of the experience | Final state pending, identity of operation and outcome of each retry |
| **The persistence of** **experience fails** | The prepared version | Identity of experience, relationship with session and appointment and pending writing |
| **Can not open** **message** | Experience available during the journey | Outstanding delivery and other confirmed consignments retained |
| **Confirmation of an** **operation is** **uncertain** | The state of experience supported by the available confirmations | Reconciling the operation before resolving its retry |
| **Application Server** **Failed** | Valid public content still available from the publication layer | Incident, affected services and prepared operations retained where available |
| **Connection is** **interrupted or slow** | Loaded content and advance status available | Pending petitions, valid status and confirmations received |
| **Personal layer script** **fails** | Full public page and Without questionnaire contingency menu with four links | Technical failure without creating commercial data |
| **The temporary** **status of a session is** **lost** | journey recoverable if its state exists; a new journey when it no longer exists | Recovery result and new identity of session where applicable |
| **Closing comes more** **than once** | The same end result of that session | A final operation by identity and confirmed results reused |
| **Person leaves before** **completing** **questionnaire** | Public content available | Applicable anonymous participation; no complete experience or lead for an incomplete questionnaire |
| **session ends without** **contact** | The on-screen experience until the end of the session | Applicable anonymous counts; no profile, experience, brief, appointment or persistent email |
| **The reduced path** **loses connection** | Public content already loaded and reduced result when available | Non-contact technical incident, CRM or club transfer |
| **attendance source** **missing,** **memberships or** **cancellations** | The navigation and experience of the site continue with their own sources | Dashboard with pending, outdated or unavailable status and preserved coverage |
| **A measurement** **result cannot be** **reconciled** | The site's journey retains its result | Pending reconciliation or attribution and separate source totals of reconciled results |

The system must distinguish a pending operation from a confirmed one. A subsequent data failure must preserve the deliveries already made and the provenance of its versions.

## 19.2 When a source does not arrive {#19-2-when-a-source-does-not-arrive}

The deployment must have a valid initial version of the sources and matrices needed to publish and calculate. The chapter 21 acceptance control must check that base before enabling the journey.

The system must retain the last valid snapshot before a failed update, according to section 14.1. The rejected load must retain its cause and responsibility. The calculation must identify the cuts and versions used.

The contingency must comply with the rule in section 5.9: continue with supported information and notify the advisor using brief when contact exists. The availability of a source must keep its actual date. An expired promotion must retain its expired status.

The geographical comparison must use distance per route when valid traffic is missing, according to section 10.6. The minutes shown must come from an available and traceable time data.

The measurement sources must retain the coverage status of the chapter 18. An absent load must be displayed as pending or unavailable information. Recovery must reconcile and update the results of the same identity without duplicating them.

## 19.3 When server fails {#19-3-when-server-fails}

The technical officer must identify the affected services and keep the valid public publication that remains available. Recovery must use site backups, configurations and data authorized by Sports World.

Prepared final operations must retain their identity of session, appointment, experience and delivery. Recovery must consult existing confirmations before retrying a deed or sending. Operations must use the final state that originated them.

The display must keep your data available. The system must display a confirmation of appointment only when the corresponding result exists. The public content of a club must continue to offer its contact and location when that publication remains available.

The incident must record component, detection, scope, action, responsible and recovery result. Technical records must exclude personal and secret data. The outstanding operating data must remain in the infrastructure and under Sports World's retention policy, according to section 14.7.3.

## 19.4 When Text Comes Out of Range {#19-4-when-text-comes-out-of-range}

Validation must check the fields and limits of section 13.2.1, the calculated facts, the quantities of elements, vocabulary and concordance. The rejected text must be treated the same as a failed generation.

Retry must use the current version and keep the calculation. After the second failed retry, the output must be "**See** my **recommendation**", according to section 13.3.1.

The backup must keep the calculated content and the brief fixed parts of section 13.3.2. The failed narrative sections must be left out of that result. The contingency signal must identify the version and missing parts.

The closure must consume the fallback already prepared when the generation is still pending. A subsequent response must be left out of the deliveries already sent, according to section 13.3.3.

## 19.5 When connection is slow {#19-5-when-connection-is-slow}

The page must retain the geometry of its elements while loading content or changing the personal layer. The controls must keep the status available and avoid duplicate requests by repeated pulses.

The generation and capture of contact must respect the sequence of the chapter 8. The calculation must use the published catalogues and reduce the dependence of the CRM during the journey.

The loss of a network response must retain the identity of the request and the confirmation of operation where it exists. The system must reconcile an uncertain result before resolving the retry.

Closing for ten minutes of inactivity must retain the current rule even if one generation is still pending. The system must use the prepared status or backup, according to chapter 13. The measured times must be part of the evidence of chapter 20.

## 19.6 When the personal layer script does not run {#19-6-when-the-personal-layer-script-does-not-run}

The public page must keep all its base content. The contingency menu must display **four** links in **the Without questionnaire state**, according to the 3.9 section.

Links must retain their public destinations. questionnaire screens, experience and schedule require the application script defined in chapter 3. Public publication must retain its navigation when that layer fails.

The incidence must remain in the technical decision log. The failure of a personal layer must retain public information without producing a recommendation or an appointment that the system has not calculated and confirmed.

## 19.7 When session is lost to medium journey {#19-7-when-session-is-lost-to-medium-journey}

The system must recover the existing time state when it can identify it and verify its validity. Recovery must keep responses, calculation and operations available from that session.

When that state no longer exists, the new journey must use a new navigation identity. The system must ask for the answers needed for that new journey and apply the chapter 9 reconciliation when contact is delivered.

Recovery must respect the prohibition of persisting responses, plans, briefs or appointments in the 8.5.1 browser. Recognition of a lead must use the chapter 9 key.

A closed session must keep its operations and final deliveries. The system must distinguish them from the status of a new journey. Events of a new execution must retain their identity according to the chapter 18.

The contactless journey and the reduced route must end their data with the session. Incidents must be technically treated in the chapter 15. The transfer and measurement continuity must retain the scope of the chapter 16 and the chapter 18.

# Chapter 20 - Thresholds {#chapter-20-thresholds}

Each check must identify site version, environment, date, sample, device and tool. Performance and tracking figures must keep the 1.7 section commitments and the chapter 18 measurement rules.

## 20.1 Appearance and Response Speed {#20-1-appearance-and-response-speed}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Check** | **Number and unit** | **Tool and evidence** |
|---|---|---|
| **Main content visible** **· LCP** | **Less** than 2.5 **seconds**, 75 percentile, separate for mobile and desktop | PageSpeed Insights, CRUX or real-user own measurement field data; report per page or group and device |
| **Response to** **interaction · INP** | Less than 200 **millisecond**s, 75 percentile, separate for mobile and desktop | PageSpeed Insights, CRUX or own measurement field data; journey interaction log |
| **Integration readings** | Percentile 95 less **than** 500 **milliseconds** | Integration paths and application testing; latency, sample and reading operations |
| **Creation of lead** | Percentile 95 less **than** 800 **milliseconds** | Traces and proof of writing service; confirmed operation and sample |

The percentiles of the web metrics must follow [the Core Web Vital](#front-matter)s [methodology](#front-matter). The laboratory test must prepare the launch and help the diagnosis. Field evidence must keep its own sample; a laboratory report must be identified as such.

In the absence of a sufficient field sample, **the state** must be **slope field measurement**. The delivery record must keep the available laboratory results and the instrumentation prepared. The comparison must use the measured value without rounding it to appear compliance.

The test must cover the types of page and actions of questionnaire, experience, club change or classes and schedule. Integration latencies must retain the limits of your contract; the journey must continue to use the published snapshot.

## 20.2 Page stability while loading {#20-2-page-stability-while-loading}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Check** | **Number and unit** | **Tool and evidence** |
|---|---|---|
| **Cumulative** **displacement · CLS** | Less than 0.1, index without unit, 75 percentile per device | PageSpeed Insights, CRUX or own field measurement; laboratory diagnosis to locate displacements |
| **Context Menu** **Space** | 5, **4** or **3 buttons** capability, depending on the page type in the 3.9 section | Interface inspection and catch comparison before and after loading the personal layer |
| **Contingency Menu** | **4 status links** Without questionnaire | Test with disabled personal layer script; navigation of each link |

The publication must reserve the image spaces and the expected buttons. The change of personal status must retain the geometry of the content, according to section 3.9.

## 20.3 Accessibility with the four pillars {#20-3-accessibility-with-the-four-pillars}

The delivery must comply with **WCAG 2.2 level AA**. Conformity must evaluate all applicable level A and AA criteria, complete pages and complete processes, according to [W3](#front-matter)C.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Pilar** | **Check** | **Tool and evidence** |
|---|---|---|
| **Perceptible** | Information available through its presentation alternatives; verifiable contrast and structure | Revision of alternative texts, contrast and structure reading; axe and manual revision |
| **Operable** | Journey complete with keyboard and visible focus; usable controls | Manual testing of navigation, selection, changes and closing of forms |
| **Understandable** | Identifiable instructions, tags and capture errors | Review of forms and evidence of invalid responses with supporting technologies |
| **Robust** | Name, function and status of controls available for support technologies | Screen reader, semantic inspection and axe |

The check must combine automatic tools and manual revision. The report must identify criteria, page or phase, result and correction. The journey for minors and dashboard must be part of the processes evaluated.

The system must retain the validations and instructions of the current instrument. The focus state must accompany the change of phase and the appearance of controls, without altering the decisions of the questionnaire.

## 20.4 Club Page Tracking {#20-4-club-page-tracking}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Check** | **Number and unit** | **Tool and evidence** |
|---|---|---|
| **Legible Clubs for** **Search Engines** | **49 49** pages with main content available in the published reply | Inspection of Responses and Tracking; Search Console as Evidence of Access and Processing |
| **Structured club** **data** | **49** pages with verified club data | Google Rich Results Test and inspection of published data |
| **Broken links** | **0 broken internal links** in published inventory | Semrush and site tracking; list of destinations and responses |
| **Production** **inventory** | **148 positions** in **11 types**, according to appendix F | Comparison of inventory with manager's page log and tracking |

The content check must include answers without executing the customization script. The pages must retain their identity and the club data of the published source.

The report must distinguish traceability from **index**ing. The indexing status must reflect what Search Console reports; the construction must provide traceable publication and evidence of its responses.

The replacement routes of the appendix F must retain their permanent redirection to the current destination. Titles, addresses and operational data must correspond to the inventory and current sources.

## 20.5 How to check each figure {#20-5-how-to-check-each-figure}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Evidence** | **Compulsory content** |
|---|---|
| **Performance** | Version, date, device, environment, sample, percentile and result per metric |
| **Integration** | Service, operation, request identity, sample, latency and confirmation; no personal data in the decision log |
| **Accessibility** | WCAG criterion, page or process, automatic and manual revision, result and correction |
| **Tracking** | Inventory, date, responses, links, redirects and content check |
| **Dashboard** | Source, period, unit, denominator, date of loading and reconciliation coverage |

E2 to E7 events, deliveries, and cohorts must use the definitions of chapter 18. A repeated load or event must retain only one result per identity. A missing source must retain its state of coverage.

The 31.1 key word coverage target **% to 55–65 % at twelve** months must be measured with Semrush over the defined term universe, according to 1.7 and 18.2. That goal must retain its tracking horizon after launch.

The acceptance file must distinguish measured results, pending evidence from a source and post-launch follow-up. Each result must retain the tool and the evidence supporting it.

<!-- salto -->

# Chapter 21 - Acceptance Criteria {#chapter-21-acceptance-criteria}

Each condition must be checked on the version that is delivered. The file must identify environment, date, cases, result, responsibility and evidence. The implementation tests must be kept separate from the documentary checks of this architecture.

## 21.1 A checkable condition per chapter {#21-1-a-checkable-condition-per-chapter}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.0 -->
| **Chapter** | **Acceptance condition** | **Verification and evidence** |
|---|---|---|
| **1 · Purpose and** **Commitments** | 1.7 commitments retain indicator, unit, tool and horizon | 1.7, 20.5 and dashboard matrix mapping; measuring file |
| **2 · Problem and** **product** | The delivered result corresponds to a training experience linked to objectives and club | Review of the journey and its two deliveries with test profiles |
| **3 · Site and** **navigation** | **11 types** and **148 positions** have content and menu according to their status | appendix F inventory and Without questionnaire, With experience and With visit cases; contingency menu check |
| **4 · Two deliveries** | Experience **and** brief match **facts** and retain 2 **pages per delivery** | Comparison of documents by version and print proof |
| **5 · Questionnaire** | Current CEI-01 applies P0, cardinality, conditions and limits without changing original answers | Test routes of the two routes, conditions, regression and acceptance of context |
| **6 · Eligibility** | The reduced route delivers only club **and** instructions **and** produces 0 **commercial records,** **appointments, briefs or emails** | legal age tests, reduced route, persistence and integration destinations |
| **7 · Objectives** | The selection retain**s maximum 2** **objectives**, its order and coverage **of** **the 18** combinations of goal and intensity per club | Matrix of objectives, programmes and cases of primary and secondary objectives |
| **8 · Journey** | The first closing **condition** processes the final **status with 1 result by** **operation identity** | Reported departure cases, 10 minutes of inactivity, re-closure and changes before closing |
| **9 · Contact and** **identity** | Recognition, session **and** appointments retain their separate identities; no contact there **is 0 leads** **persisting** | Standardisation tests, rendezvous, absence of contact, approved notice and record review |
| **10 · Ideal club** | The confirmed choice keeps **1 ideal** **club in effect** and replaces the previous one | Four resolution modes; gaps, alternatives, acceptance and menu and calculation references |
| **11 · Composition** | B01, B02 and B03 correspond to the same club and the effective branch of Q12 | Q6 cases, club change or classes, exceptions and Q8 comparison with Q17 |
| **12 Classes** | Classes belong **to the** club and retain their identity; **0 invented or** **duplicated disciplines** | Automatic selection, P0, Q12 individual, equivalents and insufficient supply |
| **13 · Drafting** | Each version has **1 initial call** and the parts meet all limits of 13.2.1 | Applications, structured output, validation, retrying and backup without failed narrative pieces |
| **14 · Sources** | Each calculation and load retains source, version, date and validation result | appendix E contracts, 06:00 cutting, manual synchronization and source failure |
| **15 - Operation** | Each daily cycle records all expected cases and assigns each incidence | Simulation log, responsible, recovery and dashboard loads |
| **16 · Transfer** | The person receives their experience and the club the correct brief; without appointment the case is direct call | Addressees, versions, closing, rendezvous and identity of each sending |
| **17 · Panel** | Each publication or change of access retains responsible, validation and version | Proofs of editing, publishing, permissions, rejection of update and decision log |
| **18 · Funnel and** **dashboard** | Each result retains definition**,** unity **and** coverage**, with 0 duplicated by** **identity** | E2 cases to E7, deliveries, missing data, corrections, attribution and cohorts of 30/90/180 days |
| **19 · Incidences** | All cases of 19.1 retain a supported output and recovery record | Source, Server, Writing, Network, Screenplay, session and Delivery Failure Tests |
| **20 · Thresholds** | Each figure has evidence with the value, unit and tool of chapter 20 | Identified field or laboratory reports, accessibility, tracking and integration |
| **21 · Acceptance** | 21 **conditions** have verifiable status and evidence | Acceptance matrix signed or validated by project managers |

## 21.2 With what each condition is checked {#21-2-with-what-each-condition-is-checked}

Test profiles must use test data and the same rules and sources of the system. Check deeds and emails must be directed to test environments and destinations. Test events must be kept separate from commercial ones.

The suite must include a complete journey with appointment, another with contact without appointment, another without contact and the route reduced. You must check club and class changes, priority of P0, Q12 individual, Q13 on your own with groups, accepted deficiencies and insufficient time.

The check must include repeated closure, loss of confirmation, pending generation, source failure, outdated data and recovery of a funnel load. Each retry must retain the identity of your operation.

The file must include performance, accessibility and tracking reports; output documents; technical records without personal data; permit controls; source versions; and expected aggregate dashboard results.

<!-- salto -->

## 21.3 What is considered delivered {#21-3-what-is-considered-delivered}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Status** | **Criterion** | **Record** |
|---|---|---|
| **Checked** | The condition has sufficient evidence about the delivery version | Result, evidence, date and responsibility |
| **Pending evidence** | Missing measurement, access, source or test required | Dependency, responsibility and condition to be verified upon receipt |
| **Requires correction** | The test shows non-compliance with a condition | Incidence, observed result and subsequent verification |
| **Post-launch** **monitoring** | The indicator requires traffic or an observation horizon | Instrumentation, source, snapshot-off date and applicable horizon |

The site must be delivered with the verified functions and dependencies identified. The documentary status of a specification must be kept separate from the implementation result.

The slope field measurement must retain its condition until sufficient sample exists. The 12-month positioning target and retention cohorts must keep track of chapter 18 and chapter 20.

Sports World must provide operational content and accesses from its sources. Delivery must include contracts, responsible and supportive behavior for those dependencies.

The journey must end with the emails of experience and brief. The dashboard and funnel integration must be prepared to incorporate the results of Sports World. The file must retain the evidence of both components.

<!-- salto -->

<!-- parte -->
# Appendices {#appendices}

<!-- salto -->

# Appendix A - Traceability of the 62 Changes {#appendix-a-traceability-of-the-62-changes}

**Status**: **Exact pending source**. The current index requires change list for 62 corrections changes. The available source does not allow you to identify your 62 entries with certainty.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Localized source** | **Verified content** | **Relationship to appendix** |
|---|---|---|
| Repository verification log | 88 findings | Inventory other than change list 62 changes |
| Repository Corrections Tool | 24 corrections declared | Different index change list list |
| Clean review of this conversation | Five findings withdrawn | Different list of the four findings of the index |

## A.1 Required source and traceability {#a-1-required-source-and-traceability}

Each change list identifier must retain its exact wording, the decision that resolves it, the current location and the result of the matching. Subsequent decisions must govern the evaluation of each change.

## A.2 Dependency control {#a-2-dependency-control}

The request from that source was submitted to Eric during this delivery. 1 chapters to 21 and appendices B, D, E and F are available for review. The exact identification of this appendix remains pending from the source. This control retains the expected number of entries without creating equivalences between different listings.

<!-- salto -->

# Appendix B - Decisions Applied Individually {#appendix-b-decisions-applied-individually}

**Coverage: D-33 through D-119, the 87 entries in the available addendum. The complete decision log preserves each decision and its history. DEC/SW/01 through D-32 is the predecessor cited by the addendum; reproducing it requires that source.**

## B.1 Current implementation {#b-1-current-implementation}

Each row links the entire text, the current application and its destination in this architecture. Subsequent substitutions govern the use of historical rules. The rules of writing and structure are located in the index, standard or controls, as appropriate.

D-116 removes excluded channels; D-117 sets a single current ideal club; D-118 retains dashboard and measurement; D-119 sets the chapter 18 and the index of twenty-one chapters. E1/E2/E3 historical identifiers are interpreted with D-89 and the three named states.

The following locations correspond to the documentary specification. The verification of the constructed product retains the evidence of chapter 21.

<!-- salto -->

## B.2 87 decisions {#b-2-87-decisions}

<!-- tabla anchos=185.0,217.0,106.3 letra=10.0 -->
| **Decision and full text** | **Implementation in force** | **Current location** |
|---|---|---|
| [D-33 · Concordance with the form of](#decision-log-architecture-review-addendum) [treatment, and how third parties are](#decision-log-architecture-review-addendum) [named](#decision-log-architecture-review-addendum) | Q2 and third-party grammar; CEI-01 v1.6 | [Cap. 5](#chapter-13-the-text-written-by-the-language-model) · [Cap. 13](#chapter-13-the-text-written-by-the-language-model) · [CEI-01](#ideal-experience-questionnaire-cei-01) |
| [D-34 · The last name is requested with](#d-34-the-last-name-is-requested-with-phone-and-email) [phone and email](#d-34-the-last-name-is-requested-with-phone-and-email) | Last name with phone and email; web capture by D-116 | [Cap. 9](#chapter-14-data-sources-and-their-contracts) · [Cap. 14](#chapter-14-data-sources-and-their-contracts) · [CEI-01](#ideal-experience-questionnaire-cei-01) |
| [D-35 · Do not ask twice the same](#d-34-the-last-name-is-requested-with-phone-and-email) [person](#d-34-the-last-name-is-requested-with-phone-and-email) | Unique context confirmation using P0 | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) |
| [D-36 · Where previous knowledge](#d-34-the-last-name-is-requested-with-phone-and-email) [comes from, by channel](#d-34-the-last-name-is-requested-with-phone-and-email) | Pre navigation of the site as source; channels removed by D-116 | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) |
| [D-37 · Four categories and two forms](#d-34-the-last-name-is-requested-with-phone-and-email) | Club, amenity, class and goal; two forms of confirmation | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) |
| [D-38 · The block never offers what](#d-34-the-last-name-is-requested-with-phone-and-email) [cannot be delivered](#d-34-the-last-name-is-requested-with-phone-and-email) | P0 uses facts based on the published snapshot | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) · [Cap. 14](#chapter-14-data-sources-and-their-contracts) |
| [D-39 · The block is composed and](#d-39-the-block-is-composed-and-shown-once) [shown once](#d-39-the-block-is-composed-and-shown-once) | P0 once, after the gate; route omission reduced by D-114 | [Cap. 5](#chapter-6-who-can-follow-the-experience) · [Cap. 6](#chapter-6-who-can-follow-the-experience) · [CEI-01](#ideal-experience-questionnaire-cei-01) |
| [D-40 · The accepted class without club](#d-39-the-block-is-composed-and-shown-once) [fixed is required by the club](#d-39-the-block-is-composed-and-shown-once) | Clubless accepted class set as conditional requirement; Q12 individual by D-115 | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) · [Cap. 10](#chapter-10-how-the-club-is-selected) · [Cap. 12 · CEI-01](#chapter-12-how-classes-are-selected) |
| [D-41 · The campaign tab states what it](#d-39-the-block-is-composed-and-shown-once) [promotes](#d-39-the-block-is-composed-and-shown-once) | Excluded channel campaign sheet withdrawn by D-116; allocation of campaigns to the site retains its contract | [Cap. 18](#chapter-18-the-funnel-and-the-dashboard) |
| [D-42 · Flags exist to choose and](#d-39-the-block-is-composed-and-shown-once) [disappear when choosing](#d-39-the-block-is-composed-and-shown-once) | Comparison flags; acceptance and exceptions preserved according to D-117 | [Cap. 4](#chapter-4-what-the-person-receives-and-what-the-advisor-rece) · [Cap. 10](#chapter-10-how-the-club-is-selected) |
| [D-43 · When the club that the person](#d-39-the-block-is-composed-and-shown-once) [wants does not comply](#d-39-the-block-is-composed-and-shown-once) | Deficiencies and confirmation information; the chosen one goes to unique ideal by D-117 | [Cap. 10](#chapter-10-how-the-club-is-selected) |
| [D-44 · On console, the system displays](#d-44-on-console-the-system-displays-and-the-advisor-decides) [and the advisor decides](#d-44-on-console-the-system-displays-and-the-advisor-decides) | Console withdrawn by D-116; service and decisions of the advisor correspond to SW | [Cap. 16](#chapter-16-the-handoff-to-the-club) · [Cap. 18](#chapter-18-the-funnel-and-the-dashboard) |
| [D-45 · When changing club, the plan is](#d-44-on-console-the-system-displays-and-the-advisor-decides) [completely recomposed](#d-44-on-console-the-system-displays-and-the-advisor-decides) | Complete and new wording for the current club | [Cap. 4](#chapter-4-what-the-person-receives-and-what-the-advisor-rece) · [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 13](#chapter-13-the-text-written-by-the-language-model) |
| [D-46 · BES is available at all times](#d-44-on-console-the-system-displays-and-the-advisor-decides) | BES removed by D-116; journey autonomous from the site | [Cap. 4](#chapter-4-what-the-person-receives-and-what-the-advisor-rece) · [Cap. 8](#chapter-8-the-on-screen-journey) |
| [D-47 · Minors reduced route](#d-44-on-console-the-system-displays-and-the-advisor-decides) | Reduced route in force according to D-114 | [Cap. 6](#chapter-6-who-can-follow-the-experience) · [CEI-01](#ideal-experience-questionnaire-cei-01) |
| [D-48 · session identifier, which lives all](#d-48-session-identifier-which-lives-all-the-session-and-dies) [the session and dies with it](#d-48-session-identifier-which-lives-all-the-session-and-dies) | web_session_id temporary browser; separate commercial identity | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap.](#chapter-9-contact-details-and-consent) [9](#chapter-9-contact-details-and-consent) |
| [D-49 · The document is split into two](#d-48-session-identifier-which-lives-all-the-session-and-dies) | Parts updated by D-98 and D-119: I 1–2, II 3–18, III 19–21 | [Cap. 19](#chapter-19-what-the-system-does-when-something-goes-wrong) · [Cap. 20](#chapter-20-thresholds) · [Cap. 21 · Contents](#chapter-21-acceptance-criteria) |
| [D-50 · Each approved chapter is](#d-48-session-identifier-which-lives-all-the-session-and-dies) [uploaded at the time of its approval](#d-48-session-identifier-which-lives-all-the-session-and-dies) | Approval and publication by chapter; this new submission remains for review | [Version Control](#appendix-d-version-control) |
| [D-51 · Site enters as chapter 3 and](#d-48-session-identifier-which-lives-all-the-session-and-dies) [others run a number](#d-48-session-identifier-which-lives-all-the-session-and-dies) | Historical numbering replaced by the D-119 index | [Contents](#document-structure) |
| [D-52 · Contextual menus are not](#d-52-contextual-menus-are-not-invented-they-are-recovered) [invented: they are recovered](#d-52-contextual-menus-are-not-invented-they-are-recovered) | Recovered and developed menus in chapter 3 rules and cases | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-53 · The limit of two objectives is](#d-52-contextual-menus-are-not-invented-they-are-recovered) [alive](#d-52-contextual-menus-are-not-invented-they-are-recovered) | Maximum two objectives; primary and secondary selection | [Cap. 5](#chapter-7-the-person-s-goals) · [Cap. 7](#chapter-7-the-person-s-goals) · [CEI-01](#ideal-experience-questionnaire-cei-01) |
| [D-54 · The scheduler button opens the](#d-52-contextual-menus-are-not-invented-they-are-recovered) [questionnaire with a preamble](#d-52-contextual-menus-are-not-invented-they-are-recovered) | Preamble and gate when entering; web channel by D-116 | [Cap. 8](#chapter-8-the-on-screen-journey) |
| [D-55 · All three states are session, and](#d-52-contextual-menus-are-not-invented-they-are-recovered) [do not survive the exit](#d-52-contextual-menus-are-not-invented-they-are-recovered) | session States renamed by D-60 and D-89; no commercial recognition before contact | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap.](#chapter-9-contact-details-and-consent) [9](#chapter-9-contact-details-and-consent) |
| [D-56 · When you meet again: the lead](#d-56-when-you-meet-again-the-lead-is-updated-your-experience) [is updated, your experience is replaced](#d-56-when-you-meet-again-the-lead-is-updated-your-experience) | Updated Lead; replacement of experiences and conservation by appointment according to D-68 | [Cap. 9](#chapter-9-contact-details-and-consent) · [Cap. 14](#chapter-14-data-sources-and-their-contracts) · [Cap. 16 · Cap. 18](#chapter-16-the-handoff-to-the-club) |
| [D-57 · Chapter 3 is rewritten, and its](#d-56-when-you-meet-again-the-lead-is-updated-your-experience) [material is relocated](#d-56-when-you-meet-again-the-lead-is-updated-your-experience) | Site content and preload with current numbering | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) |
| [D-58 · Documents do not have notes on](#d-58-documents-do-not-have-notes-on-their-own-edition) [their own edition](#d-58-documents-do-not-have-notes-on-their-own-edition) | Chapter rules; editorial controls in decision log and appendix D | [Standard](#editorial-standard) |
| [D-59 · Life is never difficult for the](#d-58-documents-do-not-have-notes-on-their-own-edition) [person: the advisor is resolved and](#d-58-documents-do-not-have-notes-on-their-own-edition) [advised](#d-58-documents-do-not-have-notes-on-their-own-edition) | Continuation supported with last valid data and internal contingency signal | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) · [Cap. 13](#chapter-13-the-text-written-by-the-language-model) · [Cap. 14 · Cap. 15 ·](#chapter-14-data-sources-and-their-contracts) [Cap. 19](#chapter-19-what-the-system-does-when-something-goes-wrong) |
| [D-60 · Two menus, and context has](#d-58-documents-do-not-have-notes-on-their-own-edition) [four slots](#d-58-documents-do-not-have-notes-on-their-own-edition) | Menus updated by D-65, D-67, D-73, D-89 and D-116; three common slots plus own buttons | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-61 · Three buttons, one door, and](#d-61-three-buttons-one-door-and-context-question-first) [context question first](#d-61-three-buttons-one-door-and-context-question-first) | Doors to the same questionnaire and P0 context | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) |
| [D-62 · The lens slot asks in E1 and](#d-61-three-buttons-one-door-and-context-question-first) [delivers in E2](#d-61-three-buttons-one-door-and-context-question-first) | D-73 Target Buttons and States Named by D-89 | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 7](#chapter-7-the-person-s-goals) |
| [D-63 · The context menu is derived](#d-63-the-context-menu-is-derived-from-six-variables-not-list) [from six variables, not listed](#d-63-the-context-menu-is-derived-from-six-variables-not-list) | Current menu variables according to D-65; cases by type and status | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-64 · A single hierarchy of clubs, and](#d-63-the-context-menu-is-derived-from-six-variables-not-list) [what changes is the reference club](#d-63-the-context-menu-is-derived-from-six-variables-not-list) | Menu center updated by D-65 and D-117; radios separated by D-82 | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 10](#chapter-10-how-the-club-is-selected) |
| [D-65 · The club slot has two tags, and](#d-65-the-club-slot-has-two-tags-and-geography-lives-inside-t) [geography lives inside the button](#d-65-the-club-slot-has-two-tags-and-geography-lives-inside-t) | Club labels and hierarchy around the current ideal | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-66 · The order of buttons is fixed](#d-65-the-club-slot-has-two-tags-and-geography-lives-inside-t) | Order club, experience, visit and own buttons | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-67 · When there is already](#d-67-when-there-is-already-appointment-the-body-leads-to-the) [appointment: the body leads to the](#d-67-when-there-is-already-appointment-the-body-leads-to-the) [appointment and the header offers](#d-67-when-there-is-already-appointment-the-body-leads-to-the) [another club](#d-67-when-there-is-already-appointment-the-body-leads-to-the) | Appointment body and option of another visit from header | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 4](#chapter-4-what-the-person-receives-and-what-the-advisor-rece) · [Cap.](#chapter-8-the-on-screen-journey) [8](#chapter-8-the-on-screen-journey) |
| [D-68 · Each appointment has its own](#d-67-when-there-is-already-appointment-the-body-leads-to-the) [Ideal Experience and its own brief](#d-67-when-there-is-already-appointment-the-body-leads-to-the) | An experience and brief by appointment; later advisor operations by D-116 and D-118 | [Cap. 4](#chapter-4-what-the-person-receives-and-what-the-advisor-rece) · [Cap. 9](#chapter-9-contact-details-and-consent) · [Cap.](#chapter-14-data-sources-and-their-contracts) [14 · Cap. 16](#chapter-14-data-sources-and-their-contracts) |
| [D-69 · Nothing is written or sent until](#d-67-when-there-is-already-appointment-the-body-leads-to-the) [session closes](#d-67-when-there-is-already-appointment-the-body-leads-to-the) | Writing and sending of final state to closing; D-106 and D-113 precision | [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap. 9](#chapter-9-contact-details-and-consent) · [Cap.](#chapter-13-the-text-written-by-the-language-model) [13 · Cap. 14 · Cap.](#chapter-13-the-text-written-by-the-language-model) [16](#chapter-16-the-handoff-to-the-club) |
| [D-70 · Target pages are the six](#d-70-target-pages-are-the-six-objectives-of-questionnaire) [objectives of questionnaire](#d-70-target-pages-are-the-six-objectives-of-questionnaire) | Five target pages plus lose weight; appendix F names and routes | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 7](#chapter-7-the-person-s-goals) · [Appendix F](#appendix-f-inventory-of-the-148-pages) |
| [D-71 · A loose list is never given:](#d-70-target-pages-are-the-six-objectives-of-questionnaire) [classes live within the target](#d-70-target-pages-are-the-six-objectives-of-questionnaire) | Classes presented within your goal | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 7](#chapter-7-the-person-s-goals) |
| [D-72 · The legend of availability in class](#d-72-the-legend-of-availability-in-class-lists) [lists](#d-72-the-legend-of-availability-in-class-lists) | Legend of class offer in the club; availability of appointment separate service | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-73 · The lens slot: "What is your](#d-72-the-legend-of-availability-in-class-lists) [target?" before the questionnaire, and](#d-72-the-legend-of-availability-in-class-lists) [the ideal classes only on the target](#d-72-the-legend-of-availability-in-class-lists) [pages](#d-72-the-legend-of-availability-in-class-lists) | Objective before questionnaire and classes by stated objectives after | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-74 · The buttons specific to each type](#d-74-the-buttons-specific-to-each-type-of-page) [of page](#d-74-the-buttons-specific-to-each-type-of-page) | Own buttons per page type | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-75 · Memberships does not carry the](#d-74-the-buttons-specific-to-each-type-of-page) [lens slot](#d-74-the-buttons-specific-to-each-type-of-page) | Memberships with common slots and commercial content | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) |
| [D-76 · FitKidz is called by name and](#d-74-the-buttons-specific-to-each-type-of-page) [split into two sections](#d-74-the-buttons-specific-to-each-type-of-page) | Activities for children aged 3 months to 13 years and their sections | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 6](#chapter-6-who-can-follow-the-experience) · [Appendix F](#appendix-f-inventory-of-the-148-pages) |
| [D-77 · The three pages of individual](#d-77-the-three-pages-of-individual-training-behave-as-target) [training behave as target pages](#d-77-the-three-pages-of-individual-training-behave-as-target) | Three pages of individual modality and programmes as sections | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 11](#chapter-11-how-the-plan-is-built) |
| [D-78 · aerobic training in the pool is](#d-77-the-three-pages-of-individual-training-behave-as-target) [prescribed by perceived effort, not by](#d-77-the-three-pages-of-individual-training-behave-as-target) [pulses](#d-77-the-three-pages-of-individual-training-behave-as-target) | Perceived effort and approved aquatic parameters; values provided by source according to D-83 | [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 14](#chapter-14-data-sources-and-their-contracts) |
| [D-79 · What the system never does in](#d-77-the-three-pages-of-individual-training-behave-as-target) [water](#d-77-the-three-pages-of-individual-training-behave-as-target) | Water safety rules in calculation and text | [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 13](#chapter-13-the-text-written-by-the-language-model) |
| [D-80 · Care for members is outside of](#10-what-sets-the-document-and-what-does-not) [this document](#10-what-sets-the-document-and-what-does-not) | Lead acquisition for non-members yet; SW aftercare | [Cap. 6](#chapter-6-who-can-follow-the-experience) · [Cap. 16](#chapter-16-the-handoff-to-the-club) |
| [D-81 · New addresses follow the](#10-what-sets-the-document-and-what-does-not) [pattern of those that already exist](#10-what-sets-the-document-and-what-does-not) | Current routes and redirects of appendix F | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Appendix F](#appendix-f-inventory-of-the-148-pages) |
| [D-82 · There are two radios and they](#10-what-sets-the-document-and-what-does-not) [are not unified](#10-what-sets-the-document-and-what-does-not) | 10 km resolution of origin and 5 km exploration of the current ideal | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 10](#chapter-10-how-the-club-is-selected) |
| [D-83 · Document names source and](#d-83-document-names-source-and-process-does-not-freeze-data) [process, does not freeze data](#d-83-document-names-source-and-process-does-not-freeze-data) | Contract and process; data and content provided by sources | [Cap. 10](#chapter-10-how-the-club-is-selected) · [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 13 · Cap. 14 ·](#chapter-13-the-text-written-by-the-language-model) [Cap. 17](#chapter-17-the-panel-for-updates-without-programming) |
| [D-84 · When derivation is indirect, it is](#d-83-document-names-source-and-process-does-not-freeze-data) [declared](#d-83-document-names-source-and-process-does-not-freeze-data) | Chain force: direct, one step, by absence | [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 12](#chapter-12-how-classes-are-selected) · [Cap. 13 · Cap. 14](#chapter-13-the-text-written-by-the-language-model) |
| [D-85 · The Contract heads the](#d-85-the-contract-heads-the-hierarchy-of-sources) [hierarchy of sources](#d-85-the-contract-heads-the-hierarchy-of-sources) | Documentary hierarchy with express D-116 scope modification and D-118/D-119 clarifications | [Contents](#document-structure) |
| [D-86 · Everything decided in a session](#d-85-the-contract-heads-the-hierarchy-of-sources) [enters the decision log in that session](#d-85-the-contract-heads-the-hierarchy-of-sources) | Full addition and traceability by decision | [Version Control](#appendix-d-version-control) |
| [D-87 · An approved chapter is not](#d-85-the-contract-heads-the-hierarchy-of-sources) [rewritten: edited](#d-85-the-contract-heads-the-hierarchy-of-sources) | Chapters 1–18 copied in full in this consolidation | [Version Control](#appendix-d-version-control) |
| [D-88 · 148 pages are served static and](#11-the-personal-page-and-layer) [identical; what depends on the person](#11-the-personal-page-and-layer) [is a layer that resolves with the session](#11-the-personal-page-and-layer) [identifier](#11-the-personal-page-and-layer) | Common public content and personal layer; BES backup removed by D-116 | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap.](#chapter-19-what-the-system-does-when-something-goes-wrong) [19 · Cap. 20](#chapter-19-what-the-system-does-when-something-goes-wrong) |
| [D-89 · All three states are named, not](#12-architecture-aligns-with-funnel-map) [numbered](#12-architecture-aligns-with-funnel-map) | Named menu states; E-codes reserved for measurement | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 18](#chapter-18-the-funnel-and-the-dashboard) |
| [D-90 · Architecture names the two](#12-architecture-aligns-with-funnel-map) [session identifiers](#12-architecture-aligns-with-funnel-map) | web_session_id browser and session_uuid registry with separate uses | [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap. 9](#chapter-9-contact-details-and-consent) · [Cap.](#chapter-14-data-sources-and-their-contracts) [14 · Cap. 18](#chapter-14-data-sources-and-their-contracts) |
| [D-91 · The chapter of the site is sorted](#13-the-order-and-drafting-of-the-document) [by result, not by journey](#13-the-order-and-drafting-of-the-document) | Site order by intent, content and result | [Chapter 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Contents](#document-structure) |
| [D-92 · The document says what the](#13-the-order-and-drafting-of-the-document) [system does](#13-the-order-and-drafting-of-the-document) | Affirmative drafting according to standard | [Standard](#editorial-standard) |
| [D-93 · A premium class is one of the](#14-four-details-about-the-site-the-visit-and-the-distance) [seven that Sports World prioritizes](#14-four-details-about-the-site-the-visit-and-the-distance) | Seven premium positions chosen by SW; appendix F editorial positions | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 17](#chapter-17-the-panel-for-updates-without-programming) · [Appendix F](#appendix-f-inventory-of-the-148-pages) |
| [D-94 · The date and time are chosen](#14-four-details-about-the-site-the-visit-and-the-distance) [within the club's opening calendar](#14-four-details-about-the-site-the-visit-and-the-distance) | Date and time in care; availability assumed by D-113 | [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap. 13](#chapter-13-the-text-written-by-the-language-model) · [Cap. 14](#chapter-14-data-sources-and-their-contracts) |
| [D-95 · The two reminders of WhatsApp](#d-95-the-two-reminders-of-whatsapp-are-from-the-person) [are from the person](#d-95-the-two-reminders-of-whatsapp-are-from-the-person) | WhatsApp Reminders Removed by D-116 | [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap. 16](#chapter-16-the-handoff-to-the-club) |
| [D-96 · Kilometers narrow down clubs;](#d-95-the-two-reminders-of-whatsapp-are-from-the-person) [minutes measure the journey and are](#d-95-the-two-reminders-of-whatsapp-are-from-the-person) [what is shown](#d-95-the-two-reminders-of-whatsapp-are-from-the-person) | Radios in kilometres and route with traffic; backup by route distance | [Cap. 10](#chapter-10-how-the-club-is-selected) · [Cap. 14](#chapter-14-data-sources-and-their-contracts) |
| [D-97 · The client's people and journey](#d-95-the-two-reminders-of-whatsapp-are-from-the-person) [are left out of the document](#d-95-the-two-reminders-of-whatsapp-are-from-the-person) | Archetypes and strategic journey with external destination set in index | [Contents](#document-structure) |
| [D-98 · The document moves to](#d-98-the-document-moves-to-nineteen-chapters-in-three-parts) [nineteen chapters in three parts](#d-98-the-document-moves-to-nineteen-chapters-in-three-parts) | Updated historical structure to 21 chapters by D-119 | [Contents](#document-structure) |
| [D-99 · lead scoring and A/B testing are](#d-98-the-document-moves-to-nineteen-chapters-in-three-parts) [out of this project](#d-98-the-document-moves-to-nineteen-chapters-in-three-parts) | Rating and tests A/B with external destination set in index | [Contents](#document-structure) |
| [D-100 · Who answers and does not](#d-100-who-answers-and-does-not-schedule-passes-to-direct-cal) [schedule passes to direct call of the](#d-100-who-answers-and-does-not-schedule-passes-to-direct-cal) [advisor](#d-100-who-answers-and-does-not-schedule-passes-to-direct-cal) | Contact without appointment: experience to person and brief as direct call to the current ideal | [Cap. 9](#chapter-9-contact-details-and-consent) · [Cap. 16](#chapter-16-the-handoff-to-the-club) |
| [D-101 · The test to find out if a negative](#d-101-the-test-to-find-out-if-a-negative-phrase-stays-or-goe) [phrase stays or goes](#d-101-the-test-to-find-out-if-a-negative-phrase-stays-or-goe) | Editorial Test by Subject in editorial standard | [Standard](#editorial-standard) |
| [D-102 · questionnaire moves to chapter](#d-101-the-test-to-find-out-if-a-negative-phrase-stays-or-goe) [5 and 5 eligibility](#d-101-the-test-to-find-out-if-a-negative-phrase-stays-or-goe) | Questionnaire before eligibility; current numbering 5 and 6 | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) · [Cap. 6](#chapter-6-who-can-follow-the-experience) · [Contents](#document-structure) |
| [D-103 · The definition of a state](#d-103-the-definition-of-a-state-remains-negative) [remains negative](#d-103-the-definition-of-a-state-remains-negative) | Absence as definition of states by standard | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Standard](#editorial-standard) |
| [D-104 · pool is an hard requirement](#d-103-the-definition-of-a-state-remains-negative) [whenever the modality needs water](#d-103-the-definition-of-a-state-remains-negative) | Pool as a modality requirement that requires water; exceptions according to club rules | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) · [Cap. 10](#chapter-10-how-the-club-is-selected) · [Cap. 11 · CEI-01](#chapter-11-how-the-plan-is-built) |
| [D-105 · ‘Both’ delivers the two](#d-105-both-delivers-the-two-modalities-and-the-recommended-o) [modalities, and the recommended one](#d-105-both-delivers-the-two-modalities-and-the-recommended-o) [is calculated](#d-105-both-delivers-the-two-modalities-and-the-recommended-o) | Both provides floor and water; recommendation only on request and calculation with matrix | [Cap. 7](#chapter-7-the-person-s-goals) · [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 12 · CEI-01](#chapter-12-how-classes-are-selected) |
| [D-106 · session closure does not](#d-106-session-closure-does-not-generate-just-write-the-calcu) [generate; just write the calculated](#d-106-session-closure-does-not-generate-just-write-the-calcu) | Close writes and sends prepared content; calculation during session by D-107 | [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap. 9](#chapter-9-contact-details-and-consent) · [Cap.](#chapter-13-the-text-written-by-the-language-model) [13](#chapter-13-the-text-written-by-the-language-model) |
| [D-107 · The calculation is continuous](#d-106-session-closure-does-not-generate-just-write-the-calcu) [during the session; change the club](#d-106-session-closure-does-not-generate-just-write-the-calcu) [with appointment scheduled again day](#d-106-session-closure-does-not-generate-just-write-the-calcu) [and time; and the confirmation by](#d-106-session-closure-does-not-generate-just-write-the-calcu) [WhatsApp is added to the closing](#d-106-session-closure-does-not-generate-just-write-the-calcu) | session check and date/time check when changing club; WhatsApp confirmation removed by D-116 | [Cap. 4](#chapter-4-what-the-person-receives-and-what-the-advisor-rece) · [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap.](#chapter-9-contact-details-and-consent) [9 · Cap. 13](#chapter-9-contact-details-and-consent) |
| [D-108 · ‘Flag’ is the official term](#d-108-flag-is-the-official-term) | Flag as a term for comparison marks and signals | [Cap. 4](#chapter-4-what-the-person-receives-and-what-the-advisor-rece) · [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) · [Cap.](#chapter-10-how-the-club-is-selected) [10 · Cap. 11](#chapter-10-how-the-club-is-selected) |
| [D-109 · Changing Club or Classes](#d-108-flag-is-the-official-term) [Returns Data to Language Model](#d-108-flag-is-the-official-term) | Club changes or classes with recalculation and editing | [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 13](#chapter-13-the-text-written-by-the-language-model) |
| [D-110 · ‘Strength of the Evidence](#d-110-strength-of-the-evidence-chain-is-the-official-and-uni) [Chain’ is the official and unique term](#d-110-strength-of-the-evidence-chain-is-the-official-and-uni) | Strength of the Evidence Chain as term; individual programs without level parameter | [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 12](#chapter-12-how-classes-are-selected) · [Cap. 13 · Cap. 14](#chapter-13-the-text-written-by-the-language-model) |
| [D-111 · When the stated time is not](#d-110-strength-of-the-evidence-chain-is-the-official-and-uni) [enough for the plan, the brief warns you](#d-110-strength-of-the-evidence-chain-is-the-official-and-uni) | Load comparison with Q8/Q17; signal and two options in brief | [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 13](#chapter-13-the-text-written-by-the-language-model) · [Cap. 16](#chapter-16-the-handoff-to-the-club) |
| [D-112 · Enter Q17, time for session,](#d-112-enter-q17-time-for-session-and-the-keys-removed-return) [and the keys removed return to use](#d-112-enter-q17-time-for-session-and-the-keys-removed-return) | Q17 and existing instrument keys; CEI-01 v1.6 | [Cap. 5](#chapter-11-how-the-plan-is-built) · [Cap. 11](#chapter-11-how-the-plan-is-built) · [CEI-01](#ideal-experience-questionnaire-cei-01) |
| [D-113 · The sending reflects the final](#17-evaluation-decisions-incorporated-into-this-copy-5-octobe) [status and the visit assumes availability](#17-evaluation-decisions-incorporated-into-this-copy-5-octobe) | Last state prepared at first closure; appointment without quota query | [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap. 9](#chapter-9-contact-details-and-consent) · [Cap.](#chapter-13-the-text-written-by-the-language-model) [13 · Cap. 16](#chapter-13-the-text-written-by-the-language-model) |
| [D-114 · Minors: ideal club and](#17-evaluation-decisions-incorporated-into-this-copy-5-octobe) [on-screen instructions](#17-evaluation-decisions-incorporated-into-this-copy-5-octobe) | Reduced route without P0 or Q17: club and on-screen instructions | [Cap. 6](#chapter-13-the-text-written-by-the-language-model) · [Cap. 13](#chapter-13-the-text-written-by-the-language-model) · [CEI-01](#ideal-experience-questionnaire-cei-01) |
| [D-115 · Accepted class, individual](#17-evaluation-decisions-incorporated-into-this-copy-5-octobe) [training and arrival company](#17-evaluation-decisions-incorporated-into-this-copy-5-octobe) | P0 priority, Q12 individual excludes group, Q13 independent company | [Cap. 5](#chapter-5-the-questionnaire-the-only-instrument) · [Cap. 11](#chapter-11-how-the-plan-is-built) · [Cap. 12 · Cap. 13 ·](#chapter-12-how-classes-are-selected) [CEI-01](#ideal-experience-questionnaire-cei-01) |
| [D-116 · Autonomous channel and end](#d-116-self-guided-channel-and-end-of-responsibility) [of responsibility](#d-116-self-guided-channel-and-end-of-responsibility) | Self-contained site; exclusions and post closures, clarified by D-118 | [Cap. 4](#chapter-4-what-the-person-receives-and-what-the-advisor-rece) · [Cap. 8](#chapter-8-the-on-screen-journey) · [Cap.](#chapter-9-contact-details-and-consent) [9 · Cap. 16](#chapter-9-contact-details-and-consent) |
| [D-117 · The choice of the person](#d-116-self-guided-channel-and-end-of-responsibility) [replaces the only existing ideal club](#d-116-self-guided-channel-and-end-of-responsibility) | Unique current ideal club; change confirmed replaces previous | [Cap. 3](#chapter-3-the-website-how-people-arrive-and-how-they-are-gui) · [Cap. 10](#chapter-10-how-the-club-is-selected) · [Cap. 11 · Cap. 12 ·](#chapter-11-how-the-plan-is-built) [Cap. 13 · Cap. 14 ·](#chapter-13-the-text-written-by-the-language-model) [Cap. 15](#chapter-15-daily-operations) |
| [D-118 · The journey ends when you](#d-118-the-journey-ends-at-handoff-the-dashboard-and-funnel-c) [pass; the dashboard and the funnel](#d-118-the-journey-ends-at-handoff-the-dashboard-and-funnel-c) [continue](#d-118-the-journey-ends-at-handoff-the-dashboard-and-funnel-c) | Measurement and dashboard continue with SW results | [Cap. 14](#chapter-14-data-sources-and-their-contracts) · [Cap. 15](#chapter-15-daily-operations) · [Cap. 16 · Cap. 17 ·](#chapter-16-the-handoff-to-the-club) [Cap. 18](#chapter-18-the-funnel-and-the-dashboard) |
| [D-119 · The funnel and dashboard form](#d-118-the-journey-ends-at-handoff-the-dashboard-and-funnel-c) [the chapter 18 of the experience](#d-118-the-journey-ends-at-handoff-the-dashboard-and-funnel-c) | Funnel integrated into 18 and chapter 21 index | [Chapter 18](#chapter-18-the-funnel-and-the-dashboard) · [Chapter](#chapter-19-what-the-system-does-when-something-goes-wrong) [19](#chapter-19-what-the-system-does-when-something-goes-wrong) · [Chapter 20 ·](#document-structure) [Chapter 21 ·](#document-structure) [Contents](#document-structure) |

## B.3 Closure of drafting {#b-3-closure-of-drafting}

The 19 to 21 chapters and appendices chapters develop the current decisions and thresholds recorded. It retains its status for review and previous approvals. Chapter 18 maintains the definitions of E0 and E2 to E7. The pending chapter writing retains a separate record from the implementation test.

<!-- salto -->

# Appendix C - The Four Rejected Findings {#appendix-c-the-four-rejected-findings}

**Status: Exact pending** source. The current index requires the original listing of the four inappropriate findings. The available source does not allow identifying your 4 entries with certainty.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Localized source** | **Verified content** | **Relationship to appendix** |
|---|---|---|
| Repository verification log | 88 findings | Inventory other than change list 62 changes |
| Repository Corrections Tool | 24 corrections declared | Different index change list list |
| Clean review of this conversation | Five findings withdrawn | Different list of the four findings of the index |

## C.1 Required source and traceability {#c-1-required-source-and-traceability}

Each of the four original identifiers must retain its wording, the decision that supports its improcedness and the location of the conserved rule. The list of five findings removed in this conversation maintains its own traceability.

## C.2 Dependency control {#c-2-dependency-control}

The request from that source was submitted to Eric during this delivery. 1 chapters to 21 and appendices B, D, E and F are available for review. The exact identification of this appendix remains pending from the source. This control retains the expected number of entries without creating equivalences between different listings.

<!-- salto -->

# Appendix D - Version Control {#appendix-d-version-control}

## D.1 Base and evolution {#d-1-base-and-evolution}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Milestone** | **Source and change** | **Status** |
|---|---|---|
| Original experience | Original repository experience and integration | Authorized basis; rules replaced by decisions in force |
| 12 Chapters and CEI-01 Revision | Corrected copies with registered decisions | Preserved history |
| Chapters 13 and 14 | Writing and approval in this conversation | Approved with recorded adjustments |
| Single Ideal club | D-117 · October 5 | Replacement of references to two active clubs |
| Measurement scope | D-118 · October 5 | Journey to post; dashboard to scope |
| Integrated Funnel | D-119 · October 5 | 1–chapter 18 Base and 21 Index |
| Closure of the proceedings | Eric's instruction to complete the pending · October 5 | 19–21 Chapters and review plugins |

## D.2 Origin {#d-2-origin}

The base is outputs/architecture-con-funnel-2026-10-05/documents. Chapter bodies 1–18 and CEI-01 are copied unchanged. The index updates states and eight code families. 87 entries of the decision log retain their text; the header clarifies historical numbering and the open control records the writing of the chapter 20.

The initial pages update the September control. appendices B, E and F use current log, chapters and original subordinate sources. A and C retain exact source dependency.

The repository consulted is EricToled564/SW-Business-Development-System, branch claude/focused-davinci-ekgov2, revision ed0228139ad681a9c366b4e41bd36675ad76e328. Delivery is local; publication in the repository retains its own status.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Query Copy** | **Function** |
|---|---|
| work/audit/original-experience. es.md | Original experience authorized as a basis |
| work/audit/original-integration.e s.md | Exchanges and integration commitments |
| work/audit/original-funnel.es.m d | Base of the funnel adapted and integrated into 18 |
| work/audit/repo/00-paginas-inic iales.es.md | Initial Page Base Line |

<!-- salto -->

## D.3 Approval and evidence {#d-3-approval-and-evidence}

Chapters 1 and 2 retain Eric’s authorship. Chapters 4 to 7 retain approval. Chapters 13 to 16 retain approvals and settings recorded. Chapters 3, 8 to 12 and 17 to 21 retain revision pending.

Authorization to complete parts allows for writing. New content retains status for review. Document evidence checks integrity, inventories, referrals and copy retention; chapter 21 implementation tests maintain their independent status.

## D.4 Integrity {#d-4-integrity}

The../validacion/manifest.json external manifest records file, size, words and SHA-256. It includes this appendix and is generated after closing its contents. The count retains baseline of existing files and distinguishes new pieces.

The previous copies remain in your folders. The latest version index points to this set and records open dependencies.

<!-- salto -->

# Appendix E - Source Contracts, Field by Field {#appendix-e-source-contracts-field-by-field}

**Status: Specification** for **revision**. The following thirteen contracts group logical exchanges. Each group can use multiple interfaces; the number thirteen does not prescribe thirteen physical services. The names represent the exchange scheme of chapter 14. Sports World and the integration team must document their correspondence with the actual names, accesses and examples of the origin system.

## E.0 Common rules {#e-0-common-rules}

Each publication must record source, version, date of extraction, covered period, responsible and result of validation. Dates must keep time zone; the operating snapshot must use the 06:00 of Mexico City and include changes to the 05:59. Identifiers must be kept between loads. A missing value must retain its absence condition.

The physical contract must incorporate authentication, permissions, environments, application limits, errors, confirmations, retry and retention approved by Sports World. Communications must use HTTPS/TLS. Credentials must live in the integration service. The decision log technique must exclude personal data.

The site must use the last valid data when an update fails. The brief must indicate the contingency and date of the affected data, according to 5.9, 14.1 and 19.2. The invalid data must retain its outstanding status. The initial publication must have valid sources for the calculations it enables.

**Legend**: R = required for the exchange; C = conditioned to the case; O = optional when the source registers it. A conditioned obligation becomes required when its condition is activated.

<!-- salto -->

## E.1 Directory and offer of clubs {#e-1-directory-and-offer-of-clubs}

Responsible: SW Club systems and operation. Update: daily snapshot and authorized manual synchronization. Key: club_id. fallback: last valid snapshot, with your date.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| club_id | Identifier · R | Stable club identity |
| nombre_club | Text · R | Commercial name published |
| estatus | Enumeration · R | activo, cerrado_temporal, cerrado_definitivo |
| direccion, ciudad | Text and location identity · R | Address and geographical grouping |
| codigo_postal | Text · R | Five digits; initial zero conservation |
| latitud, longitud | Number · R | Checked Club Coordinates |
| telefono_club | Text · R | Public telephone |
| correo_club | Email · R | brief receiver |
| horarios_atencion[] | List · R | Day, opening and closing in HH:MM, local time |
| amenidades[] | List of identifiers · R | Offer linked to requirements |
| actividades_menores | Object · C | Checked service and applicable ages where available |
| procedencia | Object · R | System, date of extraction and snapshot published |

The calculation must evaluate low-impact and prenatal or postpartum requirements using the available classes and their matrix. Scheduling must use opening hours and assume availability for an in-person visit.

<!-- salto -->

## E.2 Catalogue, offer and programming of classes {#e-2-catalogue-offer-and-programming-of-classes}

Owner: SW Scheduling and SW Systems. Update: daily snapshot and authorized urgent changes. Keys: discipline clase_id; relationship with club_id; stable identity of the scheduled session. Fallback: last valid calendar.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| clase_id, nombre_clase | Identifier and text · R | Discipline and public name |
| descripcion, nivel | Text and catalog value · R | Approved description and level for Q9 |
| club_id | Identifier · R | Club that teaches the discipline |
| sesion_id | Identifier · R | Identity of each documented occurrence or composite key |
| dia_semana, hora_inicio | Day and HH:MM · R | Local programming |
| duracion_minutos | Number · R | session time and unit |
| fecha_sesion, semana_visible | Date and period · R | Dates of the week showing the site |
| estatus_oferta | Source value · R | Inclusion or withdrawal of offer |
| instructor, salon | Text · O | Only when the operating system records it |
| procedencia | Object · R | snapshot, extract and calendar date |

The selection must count different disciplines. Several sessions of a discipline must provide schedules of the same class.

<!-- salto -->

## E.3 Rates, discounts and promotions {#e-3-rates-discounts-and-promotions}

**Responsible**: SW Commercial and SW Systems. Update: daily snapshot and authorized urgent change**. Key**s: plan, tariff and promotion of origin. **Backup**: last valid data with proven validity.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| plan_id, nombre_plan | Identifier and text · R | Commercial origin plan |
| criterio_membresia | Editorial relationship · R | A club, multiclub, family, corporate or promotion |
| nivel_precio | Enumeration · R | club, city or national |
| club_id, ciudad | Relationship · C | Club or place where applicable to the price scope |
| precio, moneda | Number and code · R | List price in Mexican pesos |
| inscripcion | Number · C | Registration fee where applicable |
| periodicidad, condiciones | Value and text · R | Billing period and approved terms |
| vigencia_desde, vigencia_hasta | Date · R | Price validity window |
| descuento, promocion_id, descripcion_promo | Amount or percentage, identity and text · C | Value, type and promotion where they exist |
| vigencia_promo | Period · C | Promotional Validity Window |
| restricciones | Approved text · C | Rules of application |
| procedencia | Object · R | Origin, snapshot and date |

The site must present the conditions supported. The permanent membership route must retain the decision criterion even if the trade name changes.

<!-- salto -->

## E.4 Class matrix {#e-4-class-matrix}

**Responsible**: professional and area that Sports World designates. **Update**: when changing the catalog and at least once a year, according to 14.3.1**. Key**: class, objective and version. **Backup**: last approved matrix.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| clase_id | Identifier · R | Correspondence with the catalogue |
| objetivo_funcional | Code · R | Objective to which the score applies |
| intensidad, nivel | Approved values · R | Filters and Selection Order |
| aptitudes, preferencias | List · R | 12.1 and 12.4 compatibility |
| razon, beneficio | Approved text · R | Supported explanation |
| equivalente_id | Identifier · C | Substitute approved for the same purpose |
| fuerza_cadena | Enumeration · R | Direct, one step, by absence |
| version, fecha_aprobacion, responsable | Control · R | Identity and approval of the matrix |

Equivalence must check offer in the current club. The class accepted in P0 must retain the priority of 12.6; individual Q12 must keep the branch without group classes.

## E.5 individual training Matrix {#e-5-individual-training-matrix}

**Responsible**: professional appointed by SW. Update: when approving changes**. Key**: program, objective, modality and version. **Coverage**: six objectives by three modalities, eighteen combinations. **Backup**: last matrix approved.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| programa_id, nombre | Identifier and text · R | Programme public name |
| objetivo_funcional | Code · R | One of the six objectives |
| modalidad | Enumeration · R | Weights, aerobics on the floor, aerobics on pool |
| esfuerzo_percibido | Approved range · R | Q5 adaptation |
| duracion, unidad | Number and unit · R | Approved program duration |
| frecuencia_semanal | Number · R | Sessions per week |
| razon | Approved text · R | Explanation in plain language |
| fuerza_cadena | Enumeration · R | Direct, one step, by absence |
| parametros_acuaticos | Object · C | Cadence and approved water parameters |
| version, fecha_aprobacion, profesional | Control · R | Approval and provenance |

B01 must keep weights on the ground. Q6 must rule B02. The matrix must provide the necessary load to compare Q8 and Q17 in the effective branch of Q12.

## E.6 Editorial content and page registration {#e-6-editorial-content-and-page-registration}

**Responsible**: SW Marketing and content managers. Update: Authorized publication on the panel**. Key**: page and version. **Back** up: Previous valid publication.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| pagina_id, tipo_pagina | Identifier and enumeration · R | One of the eleven types of 3.1 |
| titulo, ruta | Text and path · R | Public title and single address |
| estado_publicacion | CMS value · R | Draft, publication or withdrawal |
| contenido, imagenes | Text and references · R | Minimum 3.5 content and image alternatives |
| club_id, clase_id, amenidad_id, objetivo | Relationships · C | Entities applicable to the page |
| contexto_P0 | Relationship · C | Approved category and preloadable entity |
| beneficio_familiar | Text and relationship · C | Benefit sustained by the offer of the club |
| metadatos, enlaces, redirecciones | Objects · C | Navigation and tracking according to type and route replaced |
| version, fecha, editor, autorizacion | Control · R | Register of publication |

The inventory must use the appendix F name and route changes. The seven premium and twenty articles must receive SW content before publication.

<!-- salto -->

## E.7 Approved instrument, rules and templates {#e-7-approved-instrument-rules-and-templates}

**Responsible**: Project Managers and SW for their contents. Update: Authorized version**. Key**: instrument, rule or template and version. **Backup**: Last valid configuration.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| instrumento_id, version | Identifier · R | Current CEI-01 v1.6 |
| reactivo_id, opciones | Identity and list · R | Questions and values of the instrument |
| condicion, validacion, cardinalidad | Rule · R | Ramification and limits of the instrument |
| forma_trato | Variant · R | Male, female or neutral, according to Q2 |
| regla_id, version_regla | Identifier · R | Calculation and resolution of approved exceptions |
| plantilla_id, campos_fijos | Identifier and object · R | Screens, experience and brief |
| texto_respaldo | Approved text · R | Prepared elements of 13.3 |
| aviso_privacidad, version_aviso | Reference and version · C | Approved Notice for Contact Capture |
| fecha, responsable, autorizacion | Control · R | Approval and publication |

The configuration must retain the web scope, the unique ideal club and the two routes in force. The original version of a response must be kept together with the accepted exception.

<!-- salto -->

## E.8 Georeference, routes and traffic {#e-8-georeference-routes-and-traffic}

**Responsible**: SW for the seed of clubs; integration for the documented geographic provider**. Update**: coordinates with the snapshot; path query when solving the calculation. **Key**s: origin, destination, query and date. **Back**: distance per route when there is no valid traffic, according to 10.6.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| origen_tipo, origen_valor | Type and value · R | Postal code, neighborhood or location allowed |
| origen_coordenadas | Numeric pair · R | Geographical resolution of origin |
| catalogo_geografico_version | Identifier · R | Catalogue of postal codes, neighborhood, cities and reference coordinates |
| destino_club_id, coordenadas | Identity and pair · R | Catalogue Club |
| distancia_ruta, unidad | Number and unit · R | Distance by route |
| tiempo_trafico_pico, unidad | Number and unit · C | Supported time when provider provides |
| criterio_hora_pico | Configuration · C | Documented traffic condition |
| proveedor, consulta_id, fecha | Control · R | Origin of the result |
| estado_resultado | Value · R | Valid result or absence of data |
| alternativas[] | List · C | Club, name, area or city, travel and compliance with requirements when offering options |

The result must show ‘max X minutes’ when valid time exists. The initial radius of ten kilometers and five scan radius must retain the reference centers of 10.5 and D-117.

<!-- salto -->

## E.9 Persona, session and appointments in CRM {#e-9-persona-session-and-appointments-in-crm}

**Responsible**: SW Systems. Updating: write-to-closure communicated or ten minutes of inactivity, whichever happens first. **Key**s: `sw_person_id`, `session_uuid`, appointment and operation. **Backup**: pending transfer with retained identity and confirmation query before retry.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| sw_person_id | Identifier · R | Recognized or created person |
| nombre, apellido | Separate text · R | Contact Capture |
| telefono | E.164 text · R | Main recognition element |
| correo | Email · R | CEI-01 Validation and Experience Destination |
| club_id | Identifier · R | Unique current version ideal |
| perfil[], excepciones | Objects · R | Applicable responses and separate acceptances |
| session_uuid, estado_final | Identifier and status · R | Recorded session and closing key |
| canal_origen | Value · R | web |
| utm_source, utm_medium, utm_campaign | Text · O | Attribution where it exists |
| cita_id, fecha_visita, horario_visita | Identity, date and time · C | Appointment requested within hours |
| experiencia_id, estado_cita | Reference and status · C | Own relationship of each appointment |
| operacion_id, resultado, timestamp | Control · R | Confirmation by operation and by appointment |

The recognition must apply phone, first name, surname and club according to 9.8.1. `web_session_id` must remain in the browser. The route without contact and the reduced route must keep its closure without commercial registration.

<!-- salto -->

## E.10 Commercial Results Supplied by SW {#e-10-commercial-results-supplied-by-sw}

**Owner: SW Systems and commercial operations. Update: daily CRM snapshot or agreed periodic delivery for memberships and cancellations. Keys: source event or result; appointment for attendance; membership number for activation and cancellation. Fallback: last received period, with coverage awaiting an update.**

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| resultado_id, tipo_resultado | Identity and type · R | Attendance, activation or cancellation |
| cita_id, estado_asistencia | Reference and status · C | Result of an appointment; recognition key if reference missing |
| sw_person_id or datos_reconocimiento | Identity or join fields · C | Union to person within SW |
| numero_membresia | Identifier · C | Required for activation and cancellation |
| telefono, nombre, apellido | Recognition · C | Activation data available to bind to the lead |
| club_id, tipo_membresia | Relationship and value · C | Club and type supplied at enrollment |
| fecha_ocurrencia | Date · R | Attendance, activation or cancellation |
| fecha_incorporacion, periodo_cubierto | Date and period · R | Receipt and coverage of the data load |
| origen, resultado_carga, cobertura_union | Control · R | Source, validation and reconciliation |

E5, E6 and E7 must use 18.3 triggers. Corrected results must retain the identity of the origin. The measurement must separate the appointment club from the activation club when the source registers a sale at another club.

<!-- salto -->

## E.11 Analytics, Search, Business Listings and Campaigns {#e-11-analytics-search-business-listings-and-campaigns}

**Responsible**: SW Marketing for accesses; measurement integration for loads and reconciliation**. Update**: according to availability of each supplier, with date and period visible**. Key**s: source, property or account, period and dimensions.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| fuente, cuenta_propiedad | Identifier · R | GA4, Search Console, GBP, Meta, TikTok or Semrush |
| periodo_inicio, periodo_fin, zona | Period and time zone · R | Measurement interval |
| metrica, valor, unidad | Name, number and unit · R | Sessions, impressions, clicks, calls, directions or spending, depending on the source |
| canal, campana, dimensiones | Source values · C | C1a, C1b, C1c and E0 cuts |
| evento_id, etapa, ejecucion_id | Identities · C | journey Events and E2/E3 Deduplication |
| persona_sesion_cita | References · C | Union after contact within SW according to 18.5 |
| cobertura_keywords, universo_terminos | Metric and set · C | Semrush 1.7 tracking |
| fecha_carga, cobertura, estado | Control · R | Update or pending information |

Each metric must retain its unit. Pre-contact aggregate accounts must retain their anonymous character; reduced journeys must be distinguished from the commercial funnel. E4 must depend on an appointment confirmed in CRM.

<!-- salto -->

## E.12 Language Model Request and Response {#e-12-language-model-request-and-response}

Owner: project integration. Update: one initial call per calculated version; two user retries under 13.3. Key: version and request. Fallback: calculated content and prepared templates.

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| version_calculada, solicitud_id | Identifiers · R | Correspondence of request and reply |
| contexto_calculado | Object · R | 13.1.1 allowed data and sources for that version |
| hook | Text · R | Maximum 30 words; one or two sentences |
| plan_argument | Text · R | Maximum 45 words |
| intent_line | Text · R | Maximum 18 words |
| infrastructure_argument | Text · R | Maximum 55 words |
| class_1_connector, class_2_connector, class_3_connector | Text · C | Maximum 15 words per effective B03 class |
| validation_questions | List · R | Five questions; maximum 18 words each |
| visit_route | List of objects · R | Four steps with title and description; maximum 18 words per description |
| proposal.main, proposal.complement | Text · R | Maximum 35 and 30 words |
| closing_priorities | List · R | Three points; maximum 12 words per point |
| closing_script | Text · R | Maximum 60 words |
| estado_validacion, reintentos | Control · R | 13.2 Correspondence, Limits, Vocabulary and Sanitation |

The required text fields correspond to a valid model response. The backup must omit the failed parts according to 13.3.2. The reduced path must use calculation and club templates. The closure must send the prepared version; a late response must be kept outside the already sent emails.

<!-- salto -->

## E.13 Experiences, Deliveries and Email Confirmation {#e-13-experiences-deliveries-and-email-confirmation}

**Owner: SW for infrastructure, access and retention; integration for writing and sending. Update: session closure with contact details. Keys: experience, appointment when present, operation and delivery. Fallback: pending transfer or sending with a stable identity.**

<!-- tabla anchos=170.0,116.0,222.3 letra=10.5 -->
| **Field** | **Type and** **requirement** | **Value, relationship or validation** |
|---|---|---|
| experiencia_id, version | Identity · R | Final version persisted |
| sw_person_id, session_uuid, club_id | Relationships · R | Person, session and unique ideal of that version |
| cita_id | Reference · C | Experience of each appointment |
| instrumento_respuestas, contexto_excepciones | Objects · R | Instrument, original responses and acceptances |
| resultado_calculado, senales_brief | Objects · R | Blocks, programs, classes and alerts |
| texto_validado or respaldo | Object and status · R | Drafting of the version |
| fuentes_versiones_fechas | List · R | Reconstruction of the calculation |
| documento_tipo, referencia_documento | Type and reference · R | Experience for person or brief for club |
| entrega_id, destinatario | Identity and destination · R | Relationship to operation; destination of each document |
| fecha_cierre, fecha_persistencia | Date · R | Writing Sequence |
| estado_envio, confirmacion_servicio | Status and reference · R | Pending, confirmed result or impact by supplier |
| politica_retencion, responsable | Reference · R | SW approved deadlines for current, pending and back-up |

The sending must use the same identity when retrying. The confirmation of the service must retain the status it credits; the opening of the email belongs to another event if the provider provides it. Each appointment must retain its experience and brief. Without appointment, the brief must bear the direct call mark.

<!-- salto -->

## E.14 Correspondence with actual interfaces {#e-14-correspondence-with-actual-interfaces}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **SW input** | **Required result** |
|---|---|
| Physical dictionary and examples | Mapping each logical field to its origin, unit and treatment of absences |
| Three clubs and five example classes | Identity validation, relationships, schedules and fields |
| Credentials and environments | Separate accesses to testing and production |
| Schedule of commercial charges | Period, responsible, reception and coverage visible on the dashboard |
| Retention policy | Approved deadlines for each entity, pending and endorsements |
| Measurement accounts | Properties, permissions, available period and query limits |

The receipt of these inputs must be recorded in the 21.3 file. Production sources and their tests must retain their state of evidence until they are received and checked.

<!-- salto -->

# Appendix F - Inventory of the 148 Pages {#appendix-f-inventory-of-the-148-pages}

**Status**: **Archi**tect**ural inventory** for **review**; **production publication pending SW content** and **data**. 148 positions are in eleven types. 47 individual class pages comprise 44 group disciplines and three individual modalities. "Individual Class" identifies a page dedicated to a discipline; Q12 individual identifies the training format.

The original experience provides the basis for the inventory. D-70, D-76 and D-81 update targets and minors. D-83 retains operational data as inputs to Sports World. D-93 leaves the choice of the seven premium to SW. Its original names remain in the historical source.

27 paths with [slug-confirmed] are content patterns to be provided. The manager must assign unique routes after receiving disciplines and articles. The other 121 routes are inventory references; their operational validity and publication require verification with the catalog and the manager.

## F.1 The 148 positions {#f-1-the-148-positions}

<!-- tabla anchos=25.0,70.0,120.0,138.0,155.3 letra=10.0 -->
| **No** | **Type** | **Title or position** | **Architecture address** | **Origin and status** |
|---|---|---|---|---|
| 1 | 01 · Home | Home | `/` | Original database; data and publication to be verified |
| 2 | 02 · Club | Amores (Av. Coyoacán) | `/clubes/amores/` | Original database; data and publication to be verified |
| 3 | 02 · Club | Antara | `/clubes/antara/` | Original database; data and publication to be verified |
| 4 | 02 · Club | Anzures | `/clubes/anzures/` | Original database; data and publication to be verified |
| 5 | 02 · Club | Cumbres | `/clubes/cumbres/` | Original database; data and publication to be verified |
| 6 | 02 · Club | Hermosillo | `/clubes/hermosillo/` | Original database; data and publication to be verified |
| 7 | 02 · Club | La Rioja | `/clubes/la-rioja/` | Original database; data and publication to be verified |
| 8 | 02 · Club | Plaza Mayor (León) | `/clubes/leon/` | Original database; data and publication to be verified |
| 9 | 02 · Club | Pabellón Bosques | `/clubes/pabellon-bosque`<br>`s/` | Original database; data and publication to be verified |
| 10 | 02 · Club | Las Ánimas (Puebla) | `/clubes/puebla/` | Original database; data and publication to be verified |
| 11 | 02 · Club | Reforma Rhin | `/clubes/reforma/` | Original database; data and publication to be verified |
| 12 | 02 · Club | Roma | `/clubes/roma/` | Original database; data and publication to be verified |
| 13 | 02 · Club | Sonata | `/clubes/sonata/` | Original database; data and publication to be verified |
| 14 | 02 · Club | Triángulo Tecamachalco | `/clubes/triangulo-tecam`<br>`achalco/` | Original database; data and publication to be verified |
| 15 | 02 · Club | Plaza Sol (Veracruz) | `/clubes/veracruz/` | Original database; data and publication to be verified |
| 16 | 02 · Club | Condesa | `/clubes/condesa/` | Original database; data and publication to be verified |
| 17 | 02 · Club | Félix Cuevas | `/clubes/felix-cuevas/` | Original database; data and publication to be verified |
| 18 | 02 · Club | Altavista | `/clubes/altavista/` | Original database; data and publication to be verified |
| 19 | 02 · Club | Satélite | `/clubes/satelite/` | Original database; data and publication to be verified |
| 20 | 02 · Club | Patriotismo | `/clubes/patriotismo/` | Original database; data and publication to be verified |
| 21 | 02 · Club | Espacio Interlomas | `/clubes/interlomas/` | Original database; data and publication to be verified |
| 22 | 02 · Club | Metepec | `/clubes/metepec/` | Original database; data and publication to be verified |
| 23 | 02 · Club | Oasis Coyoacán (Miguel Ángel de Quevedo) | `/clubes/miguel-angel-de`<br>`-quevedo/` | Original database; data and publication to be verified |
| 24 | 02 · Club | Obrero Mundial | `/clubes/obrero-mundial/` | Original database; data and publication to be verified |
| 25 | 02 · Club | Palmas | `/clubes/palmas/` | Original database; data and publication to be verified |
| 26 | 02 · Club | Acora Pedregal | `/clubes/pedregal/` | Original database; data and publication to be verified |
| 27 | 02 · Club | San Jerónimo | `/clubes/san-jeronimo/` | Original database; data and publication to be verified |
| 28 | 02 · Club | Santa Fe | `/clubes/santa-fe/` | Original database; data and publication to be verified |
| 29 | 02 · Club | Patio Universidad | `/clubes/universidad/` | Original database; data and publication to be verified |
| 30 | 02 · Club | Xola | `/clubes/xola/` | Original database; data and publication to be verified |
| 31 | 02 · Club | Zona Esmeralda | `/clubes/zona-esmeralda/` | Original database; data and publication to be verified |
| 32 | 02 · Club | Torre Manacar | `/clubes/manacar/` | Original database; data and publication to be verified |
| 33 | 02 · Club | Lindavista | `/clubes/lindavista/` | Original database; data and publication to be verified |
| 34 | 02 · Club | Cabo Norte | `/clubes/cabo-norte/` | Original database; data and publication to be verified |
| 35 | 02 · Club | Portal San Ángel (Barranca) | `/clubes/barranca/` | Original database; data and publication to be verified |
| 36 | 02 · Club | Juriquilla | `/clubes/juriquilla/` | Original database; data and publication to be verified |
| 37 | 02 · Club | Bernardo Quintana | `/clubes/bernardo-quinta`<br>`na/` | Original database; data and publication to be verified |
| 38 | 02 · Club | Cráter | `/clubes/crater/` | Original database; data and publication to be verified |
| 39 | 02 · Club | Patio Tlalpan | `/clubes/patio-tlalpan/` | Original database; data and publication to be verified |
| 40 | 02 · Club | Paseo Interlomas | `/clubes/paseo-interloma`<br>`s/` | Original database; data and publication to be verified |
| 41 | 02 · Club | Plaza Tlalne (Tlalnepantla) | `/clubes/tlalnepantla/` | Original database; data and publication to be verified |
| 42 | 02 · Club | Saltillo | `/clubes/saltillo/` | Original database; data and publication to be verified |
| 43 | 02 · Club | Esfera (Querétaro) | `/clubes/esfera-queretar`<br>`o/` | Original database; data and publication to be verified |
| 44 | 02 · Club | Plaza Almanara (Torreón) | `/clubes/torreon/` | Original database; data and publication to be verified |
| 45 | 02 · Club | Altaria (Aguascalientes) | `/clubes/aguascalientes/` | Original database; data and publication to be verified |
| 46 | 02 · Club | Punto MAQ (Parque San Andrés) | `/clubes/parque-san-andr`<br>`es/` | Original database; data and publication to be verified |
| 47 | 02 · Club | Nave 01 Apodaca | `/clubes/apodaca/` | Original database; data and publication to be verified |
| 48 | 02 · Club | Coapa (Terraza Coapa) | `/clubes/terraza-coapa/` | Original database; data and publication to be verified |
| 49 | 02 · Club | Plaza Cinépolis (Culiacán) | `/clubes/culiacan/` | Original database; data and publication to be verified |
| 50 | 02 · Club | San Pedro | `/clubes/san-pedro/` | Original database; data and publication to be verified |
| 51 | 03 · Amenity | Pool | `/amenidades/alberca/` | Original database; data and publication to be verified |
| 52 | 03 · Amenity | INTENZ | `/amenidades/intenz/` | Original database; data and publication to be verified |
| 53 | 03 · Amenity | Box Ring | `/amenidades/ring-box/` | Original database; data and publication to be verified |
| 54 | 03 · Amenity | Cardiovascular | `/amenidades/cardiovascu`<br>`lar/` | Original database; data and publication to be verified |
| 55 | 03 · Amenity | Free weight | `/amenidades/peso-libre/` | Original database; data and publication to be verified |
| 56 | 03 · Amenity | IndBike | `/amenidades/indbike/` | Original database; data and publication to be verified |
| 57 | 03 · Amenity | Cancha | `/amenidades/cancha/` | Original database; data and publication to be verified |
| 58 | 03 · Amenity | Paddle | `/amenidades/padel/` | Original database; data and publication to be verified |
| 59 | 03 · Amenity | Spash | `/amenidades/squash/` | Original database; data and publication to be verified |
| 60 | 03 · Amenity | Scalar wall | `/amenidades/muro-escala`<br>`r/` | Original database; data and publication to be verified |
| 61 | 04 · Premium | Premium class 1 · discipline to contribute | `/clases/signature/[slug`<br>`-confirmado]/` | SW provides choice, title and route |
| 62 | 04 · Premium | Premium class 2 · discipline to contribute | `/clases/signature/[slug`<br>`-confirmado]/` | SW provides choice, title and route |
| 63 | 04 · Premium | Premium class 3 · discipline to contribute | `/clases/signature/[slug`<br>`-confirmado]/` | SW provides choice, title and route |
| 64 | 04 · Premium | Premium class 4 · discipline to contribute | `/clases/signature/[slug`<br>`-confirmado]/` | SW provides choice, title and route |
| 65 | 04 · Premium | Premium class 5 · discipline to contribute | `/clases/signature/[slug`<br>`-confirmado]/` | SW provides choice, title and route |
| 66 | 04 · Premium | Premium class 6 · discipline to contribute | `/clases/signature/[slug`<br>`-confirmado]/` | SW provides choice, title and route |
| 67 | 04 · Premium | Premium class 7 · discipline to contribute | `/clases/signature/[slug`<br>`-confirmado]/` | SW provides choice, title and route |
| 68 | 05 · Individual Class | INDBIKE | `/clases/indbike/` | Original database; data and publication to be verified |
| 69 | 05 · Individual Class | RPM | `/clases/rpm/` | Original database; data and publication to be verified |
| 70 | 05 · Individual Class | Power Cycling | `/clases/power-cycling/` | Original database; data and publication to be verified |
| 71 | 05 · Individual Class | Cycling | `/clases/cycling/` | Original database; data and publication to be verified |
| 72 | 05 · Individual Class | Beat'n Bike | `/clases/beat-n-bike/` | Original database; data and publication to be verified |
| 73 | 05 · Individual Class | Reformer Pilates | `/clases/reformer-pilate`<br>`s/` | Original database; data and publication to be verified |
| 74 | 05 · Individual Class | Mat Pilates | `/clases/mat-pilates/` | Original database; data and publication to be verified |
| 75 | 05 · Individual Class | Ball Pilates | `/clases/ball-pilates/` | Original database; data and publication to be verified |
| 76 | 05 · Individual Class | Total Barre | `/clases/total-barre/` | Original database; data and publication to be verified |
| 77 | 05 · Individual Class | Hatha Yoga | `/clases/hatha-yoga/` | Original database; data and publication to be verified |
| 78 | 05 · Individual Class | Vinyasa Yoga | `/clases/vinyasa-yoga/` | Original database; data and publication to be verified |
| 79 | 05 · Individual Class | Ashtanga Yoga | `/clases/ashtanga-yoga/` | Original database; data and publication to be verified |
| 80 | 05 · Individual Class | Restorative Yoga | `/clases/yoga-restaurati`<br>`va/` | Original database; data and publication to be verified |
| 81 | 05 · Individual Class | AE Yoga (aerial yoga) | `/clases/ae-yoga/` | Original database; data and publication to be verified |
| 82 | 05 · Individual Class | Intrinity | `/clases/intrinity/` | Original database; data and publication to be verified |
| 83 | 05 · Individual Class | Zumba Fitness | `/clases/zumba-fitness/` | Original database; data and publication to be verified |
| 84 | 05 · Individual Class | Zumba Toning | `/clases/zumba-toning/` | Original database; data and publication to be verified |
| 85 | 05 · Individual Class | Zumba Step | `/clases/zumba-step/` | Original database; data and publication to be verified |
| 86 | 05 · Individual Class | Belly Dance | `/clases/belly-dance/` | Original database; data and publication to be verified |
| 87 | 05 · Individual Class | Urban Dance | `/clases/urban-dance/` | Original database; data and publication to be verified |
| 88 | 05 · Individual Class | Fit y Dance | `/clases/fit-y-dance/` | Original database; data and publication to be verified |
| 89 | 05 · Individual Class | Aerial Dance | `/clases/danza-aerea/` | Original database; data and publication to be verified |
| 90 | 05 · Individual Class | Ballroom Dance | `/clases/baile-de-salon/` | Original database; data and publication to be verified |
| 91 | 05 · Individual Class | Hawaiian | `/clases/hawaiano/` | Original database; data and publication to be verified |
| 92 | 05 · Individual Class | Full Body | `/clases/full-body/` | Original database; data and publication to be verified |
| 93 | 05 · Individual Class | Core | `/clases/core/` | Original database; data and publication to be verified |
| 94 | 05 · Individual Class | Stretch | `/clases/stretch/` | Original database; data and publication to be verified |
| 95 | 05 · Individual Class | Power Jump | `/clases/power-jump/` | Original database; data and publication to be verified |
| 96 | 05 · Individual Class | Fun Trac | `/clases/fun-trac/` | Original database; data and publication to be verified |
| 97 | 05 · Individual Class | Interval | `/clases/interval/` | Original database; data and publication to be verified |
| 98 | 05 · Individual Class | Pound | `/clases/pound/` | Original database; data and publication to be verified |
| 99 | 05 · Individual Class | Step | `/clases/step/` | Original database; data and publication to be verified |
| 10 0 | 05 · Individual Class | Kinetic Chain | `/clases/kinetic-chain/` | Original database; data and publication to be verified |
| 10 1 | 05 · Individual Class | Kinetics Ball | `/clases/kinetics-ball/` | Original database; data and publication to be verified |
| 10 2 | 05 · Individual Class | Kinetic Pump | `/clases/kinetic-pump/` | Original database; data and publication to be verified |
| 10 3 | 05 · Individual Class | Natural Motion | `/clases/natural-motion/` | Original database; data and publication to be verified |
| 10 4 | 05 · Individual Class | Strong Nation | `/clases/strong-nation/` | Original database; data and publication to be verified |
| 10 5 | 05 · Individual Class | Race Walker | `/clases/race-walker/` | Original database; data and publication to be verified |
| 10 6 | 05 · Individual Class | Group Gymnastics | `/clases/gimnasia-de-gru`<br>`pos/` | Original database; data and publication to be verified |
| 10 7 | 05 · Individual Class | Boxing | `/clases/box/` | Original database; data and publication to be verified |
| 10 8 | 05 · Individual Class | TKD Intro | `/clases/iniciacion-tkd/` | Original database; data and publication to be verified |
| 10 9 | 05 · Individual Class | Aqua Aerobics | `/clases/acuaerobics/` | Original database; data and publication to be verified |
| 11 0 | 05 · Individual Class | Aqua Zumba | `/clases/acuazumba/` | Original database; data and publication to be verified |
| 11 1 | 05 · Individual Class | Flyboard | `/clases/flyboard/` | Original database; data and publication to be verified |
| 11 2 | 05 · Individual Class | Individual training with weights | `/clases/pesas-individua`<br>`l/` | Original database; data and publication to be verified |
| 11 3 | 05 · Individual Class | Individual aerobic training | `/clases/aerobico-indivi`<br>`dual/` | Original database; data and publication to be verified |
| 11 4 | 05 · Individual Class | Individual aerobic training in pool | `/clases/acuaticos-indiv`<br>`idual/` | Original database; data and publication to be verified |
| 11 5 | 06 · Minors | Activities for children aged 3 months to 13 years | `/actividades-para-menor`<br>`es/` | Updated route by current decisions |
| 11 6 | 07 · Objective | Body aesthetics and muscle definition | `/objetivos/estetica-cor`<br>`poral/` | Updated route by current decisions |
| 11 7 | 07 · Objective | Increase muscle mass | `/objetivos/masa-muscula`<br>`r/` | Updated route by current decisions |
| 11 8 | 07 · Objective | Athletic performance | `/objetivos/desempeno-at`<br>`letico/` | Updated route by current decisions |
| 11 9 | 07 · Objective | Cardiovascular capacity | `/objetivos/salud-cardio`<br>`vascular/` | Updated route by current decisions |
| 12 0 | 07 · Objective | Moving better with more agility | `/objetivos/agilidad-y-m`<br>`ovilidad/` | Updated route by current decisions |
| 12 1 | 08 · Lose weight | lose weight Hub | `/bajar-de-peso/` | Original database; data and publication to be verified |
| 12 2 | 09 · Personal training | Personal training | `/personal-training/` | Original database; data and publication to be verified |
| 12 3 | 10 · Membership | Hub memberships | `/membresias/` | Original database; data and publication to be verified |
| 12 4 | 10 · Membership | A club | `/membresias/un-club/` | Original database; data and publication to be verified |
| 12 5 | 10 · Membership | Multiclub | `/membresias/multiclub/` | Original database; data and publication to be verified |
| 12 6 | 10 · Membership | Family | `/membresias/familiar/` | Original database; data and publication to be verified |
| 12 7 | 10 · Membership | Corporate | `/membresias/corporativa`<br>`/` | Original database; data and publication to be verified |
| 12 8 | 10 · Membership | Current promotions | `/membresias/promociones`<br>`/` | Original database; data and publication to be verified |
| 12 9 | 11 · Blog | Article 1 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 0 | 11 · Blog | Article 2 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 1 | 11 · Blog | Article 3 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 2 | 11 · Blog | Article 4 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 3 | 11 · Blog | Article 5 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 4 | 11 · Blog | Article 6 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 5 | 11 · Blog | Article 7 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 6 | 11 · Blog | Article 8 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 7 | 11 · Blog | Article 9 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 8 | 11 · Blog | Article 10 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 13 9 | 11 · Blog | Article 11 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 0 | 11 · Blog | Article 12 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 1 | 11 · Blog | Article 13 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 2 | 11 · Blog | Article 14 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 3 | 11 · Blog | Article 15 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 4 | 11 · Blog | Article 16 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 5 | 11 · Blog | Article 17 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 6 | 11 · Blog | Article 18 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 7 | 11 · Blog | Article 19 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |
| 14 8 | 11 · Blog | Article 20 · Title to be contributed | `/blog/[slug-confirmado]`<br>`/` | SW provides choice, title and route |

## F.2 Count by type {#f-2-count-by-type}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Type** | **Pages** |
|---|---|
| 01 · Home | 1 |
| 02 · Club | 49 |
| 03 · Amenity | 10 |
| 04 · Premium | 7 |
| 05 · Individual Class | 47 |
| 06 · Minors | 1 |
| 07 · Objective | 5 |
| 08 · Lose weight | 1 |
| 09 · Personal training | 1 |
| 10 · Membership | 6 |
| 11 · Blog | 20 |
| **Total** | **148** |

## F.3 Replaced routes {#f-3-replaced-routes}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Previous path** | **Destination in force** | **Source** |
|---|---|---|
| /fitkidz/ | /actividades-para-menores/ | D-76 and D-81 |
| /perfiles/tonificar/ | /objetivos/estetica-corporal/ | D-70 and D-81 |
| /perfiles/ganar-fuerza / | /objetivos/masa-muscular/ | D-70 and D-81 |
| /perfiles/salud-y-bien estar/ | /objetivos/salud-cardiovascular/ | D-70 and D-81 |
| /perfiles/rehabilitacio n/ | /objetivos/agilidad-y-movilidad/ | D-70 and D-81 |
| /perfiles/primeros-pas os/ | Home Objectives Section; publication anchor to be recorded in CMS | D-81 |

Athletic performance occupies the fifth position of the Objective type. Lose weight retains its independent page. The redirections retain the total of 148 pages in force.

## F.4 Validation of publication {#f-4-validation-of-publication}

The manager must link each page to its catalog entity. The tracking must check titles, unique addresses, links, redirections and content. The published inventory must record catalogue version and date of the tracking. The Tu Sports World drop-down catalog belongs to the navigation.

<!-- salto -->

# Decision Log - Architecture Review Addendum {#decision-log-architecture-review-addendum}

**The numbering continues from DEC/SW/01, which ends at D-32. This addendum records D-33 through D-119. It retains the decisions from the September 2026 rewrite and incorporates the evaluation clarifications in section 17, dated October 5, 2026.**

Each entry says what was decided and in which chapter of the document lands. **The current number**ing **is that** of **D-119** and **the index** of **twenty-one chapters**. Historical entries retain the referrals of their date; they are interpreted by subsequent updates and substitutions recorded. Those that force to correct something outside of the Architecture indicate it expressly.

## 1 · The instrument {#1-the-instrument}

### D-33 · Concordance with the form of treatment, and how third parties are named {#d-33-concordance-with-the-form-of-treatment-and-how-third-pa}

The decision has two halves, and confusing them was the 1.1 version error of the questionnaire.

**First half - References to the person answering do use grammatical agreement. The form of address selected in question 2 - masculine, feminine or gender-neutral language - governs every word referring to that person, both in the options and in the text written by the system. Each such word has three versions, and the person sees only the applicable version. The neutral version is a phrase suitable for anyone, never a typographic marker.**

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Where** | **Masculine** | **Feminine** | **Gender-neutral language** |
|---|---|---|---|
| Question 12 · Accompanying | Entrenar solo (train alone; masculine) | Entrenar sola (train alone; feminine) | Entrenar sin compañía (train without company; neutral) |

**Second half - References to other people do not change according to the respondent's form of address: they use correct Spanish grammar. Those people's gender is neither known nor requested, and matching it to the respondent's form of address would be a visible error - a man with two daughters would see "Con mis hijos" because he is a man. The rule has two cases:**

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Case** | **What is written?** | **Example** |
|---|---|---|
| Spanish has a word that names the person without declaring his gender | You use that word. | "Con una amistad" (with a friend), "Con mi pareja" (with my partner) - never "esposo" or "esposa" (husband or wife). |
| Spanish doesn't have it. | The masculine plural is used, which already includes them | "Con mis hijos" (with my children), "Actividades para menores de 3 meses a 13 años" (activities for minors aged 3 months to 13 years). |

**All typographic inclusion markers are prohibited: @, x, a vowel in parentheses, and dual endings separated by a slash. Paired gender forms are not forced either: "con mis hijas o hijos" performs the same maneuver as a slash, using different words.**

Rewordings applied to the instrument: question 12 regains its three versions; question 13 says "Con una amistad", "Con mi pareja", "Con mis hijos"; question 14 and the logic check say "actividades para menores de 3 meses a 13 años".

**Outside** the Architecture: CEI-01 passes **to 1.2** version, which corrects the 1.1. 1.1 had replaced the three versions with a single neutral wording and with that it had suppressed the concordance; it had also forced doublets on third parties.

### D-34 · The last name is requested with phone and email {#d-34-the-last-name-is-requested-with-phone-and-email}

The last name is requested in the contact capture, at the end of the questionnaire, together with the phone and email, on all channels. On WhatsApp you ask for last name and email, because the number comes from the channel. The question 1 still does not ask.

Outside the Architecture: CEI-01 1.2 version, section 5.

## 3 · The preload Principle {#3-the-preload-principle}

### D-35 · Do not ask twice the same person {#d-35-do-not-ask-twice-the-same-person}

What the system already knows before the questionnaire starts is not asked: it is confirmed, in a single block, before the first question. The block is called P0 **· Preload** and declared inside the instrument.

Land in: chapter 5.2.

### D-36 · Where previous knowledge comes from, by channel {#d-36-where-previous-knowledge-comes-from-by-channel}

Website: the pages that the person visited before opening the questionnaire. WhatsApp: what the campaign that brought it says it promotes. Console: the club where the person is standing, that is taken for granted and does not wonder.

Land in: chapter 5.2.1.

### D-37 · Four categories and two forms {#d-37-four-categories-and-two-forms}

Only four things can be preload**ed:** club**, amenity, class and goal.**

Two ways to ask, and a rule that separates them: if when answering that not someone has to decide that anyway, the question has the option to recommend. If when answering that not simply does not add anything, the question is yes or no.

Club and amenities have the option to recommend. Class and goal are yes or no.

Land in: chapter 5.2.2.

### D-38 · The block never offers what cannot be delivered {#d-38-the-block-never-offers-what-cannot-be-delivered}

Before being shown**,** each candidate point is verified against the snapshot **of the day.** The point that cannot **be** fulfilled **is not shown, not mentioned, not explained and leaves no trace.**

If the navigation reveals a club and a class that that club does not teach, it asks only about the club. It is never told the person that the club does not teach what they were seeing.

Land in: chapter 5.2.3.

<!-- salto -->

### D-39 · The block is composed and shown once {#d-39-the-block-is-composed-and-shown-once}

After the legal age gate and before the first question. It is not recomposed with the answers that the person gives within it.

Land in: chapter 5.2.3.

### D-40 · The accepted class without club fixed is required by the club {#d-40-the-accepted-class-without-club-fixed-is-required-by-th}

With club fixed, the class accepted is secured in the third block and does not add requirement. Without **club fixed**, the class **becomes requirement**: the solver only considers clubs that provide it, and if the closest one does not teach it, offers the closest one that does, with the alternatives indicated.

It is the fifth requirement, and the only one that does not come from the questionnaire but from the previous context.

**Land**s in: 5.2.4 and 10 chapters**. Outside the** Architecture: it forces to correct the line of Clubs of logic control of CEI-01, which today requires only amenities, preferences and classes by objective.

### D-41 · The campaign tab states what it promotes {#d-41-the-campaign-tab-states-what-it-promotes}

Without that field, WhatsApp doesn't know what preload and the conversation starts by asking what the ad already told the person.

Land in: chapter 14**. Outside the** Architecture: the campaign card wins a mandatory field.

## 4 · Club Choice {#4-club-choice}

### D-42 · Flags exist to choose and disappear when choosing {#d-42-flags-exist-to-choose-and-disappear-when-choosing}

While the person chooses, each alternative carries its flag and the concrete legend of what it lacks. **As soon** as **it choose**s**, the flags disappear**: its plan is recomposed against that club and is complete, so that there is nothing missing to point out.

**Replace**s the amber note after the choice that fixed the 14 change of appendix corrections.

**Land**s in: 4.2.4 and 10 chapters.

### D-43 · When the club that the person wants does not comply {#d-43-when-the-club-that-the-person-wants-does-not-comply}

This club is not given by default. **It** is recommended **the closest one** to the **club that asked that it does,** it is told specifically what it lacks to the one that wanted, and the one that wanted it is available to change.

It unites three situations in one behavior: no close club meets; the person chooses a club that does not meet; the preload brings a club that does not meet.

**Land** in: chapter 10**. Open**: where the recommended club comes from — the table of substitutes that Sports World assigns by hand, or a calculated array of club times.

<!-- salto -->

### D-44 · On console, the system displays and the advisor decides {#d-44-on-console-the-system-displays-and-the-advisor-decides}

The **club** takes it for granted and does **not** wonder**. When that** club does **not** fulfill **what** the profile demands**,** the brief names **what** it lack**s and which** club does deliver **it. Sending the person to that other club or not is decided by the advisor.**

**Land** in: chapters 4.4.4 and 5.2.1**. Open, outside the** Architecture: the rule of commercial attribution of that sale corresponds to the commercial process and is to be defined.

### D-45 · When changing club, the plan is completely recomposed {#d-45-when-changing-club-the-plan-is-completely-recomposed}

Blocks, classes, modality, travel time and evaluation of requirements. If something that did not exist in the new club, it is replaced by the equivalent for the same target; there is never a gap left.

**The narrative tone is conserve**d, because it comes from what the person wants to feel when leaving the club and that does not change when choosing another. Everything that describes club, modality, blocks, classes, requirements or exceptions must **correspond** to **the new calculated version**: no sentence of the previous plan survives if it ceases to be true. Which pieces write the language model and which come directly from the calculation is fixed by the chapter 13. How **it gets fixed** D-109: the data returns to the language model and the experience is written again.

**It correct**s the **previous wording** of this decision, which stated that the written text is not generated again and that the only specific thing about a club was its name and address. It is replaced by section 11.13, Eric's text.

**Land**s in: sections 4.2.3 and 11.13, and chapter 13.

## 5 · The journey {#5-the-journey}

### D-46 · BES is available at all times {#d-46-bes-is-available-at-all-times}

During the questionnaire, it **takes** control from **the** question in which the person **goes**, with what already answered, and continues with the same instrument. It does not restart or repeat. The step back to the journey autonomous is also free. After the experience is delivered, it is available to resolve doubts.

BES does what the screen allows—change clubs, change classes—and nothing more.

Land in 2.3.3, 5.3 and 9.

### D-47 · Minors reduced route {#d-47-minors-reduced-route}

Updated **rule** by **D-114** and **CEI-01 in force**: the reduced route does not use P0. The following wording is retained as history.

Who does not confirm the legal age is not **left out**. The system solves your club without **asking for a single personal data** and without generating Ideal Experience: you are only asked the questions that feeds the club choice. It receives the club, its address and its time from travel, and how to register with the signature of its guardian, at the club.

Registration is not opened, nothing is written and when closing the session there is no trace. The preload block is shown, because it does not ask for any data.

Land in: chapter 6.2.

### D-48 · session identifier, which lives all the session and dies with it {#d-48-session-identifier-which-lives-all-the-session-and-dies}

The **site** assign**s** its own identifier, random and empty**,** whose **job is** to tie together **the pages** that the **person** visits**.** It does **not carry** any data **of its own and never reaches the lead registry.**

**Live all the session**. It is not ruled out when you open the questionnaire: it is still alive after the experience is delivered, and it is what allows the person to navigate the site and remain recognized as someone who already has it. **It dies** when the **person leaves**. Upon returning, it starts from scratch.

Nothing that the person responds to is saved in their browser: the only thing that is saved on their side is the identifier.

**Correct**s the **previous** version of this decision, which discarded the identifier as soon as the questionnaire opened. With that rule, the "complete, out-of-flow" status of D-55 had no possible mechanism.

Replaces the previous "no cookies" rule.

Completed by **D-90**: the Architecture also names the session_uuid power key, which is part of the lead registry.

**It lands** in: chapters 3.4 —when written—, 7.5.1 and 8**. Open, outside the** Architecture: the text of the simplified notice and if appropriate prior consent, which corresponds to Legal.

## 6 · The document {#6-the-document}

### D-49 · The document is split into two {#d-49-the-document-is-split-into-two}

**Part I** explains why Ideal Experience exists and does not force anything. **Part II** prescribes what the system does. The border is declared in the text, so that the reader knows in what way he is reading.

### D-50 · Each approved chapter is uploaded at the time of its approval {#d-50-each-approved-chapter-is-uploaded-at-the-time-of-its-ap}

With your hash registered. Any subsequent change is a new commit whose message says what changed and ordered by Eric. The repository history replaces anyone’s memory.

## 7 · The site as lead acquisition layer {#7-the-site-as-lead-acquisition-layer}

### D-51 · Site enters as chapter 3 and others run a number {#d-51-site-enters-as-chapter-3-and-others-run-a-number}

The Architecture reached the chapter 7 without having said how **people access the questionnaire** through the **pages** of the site, or how the content captures service and leads to building the Ideal Experience. That chapter is written and placed in the 2 position, immediately after the thesis. The chapters that occupied the 2 positions to 6 run a number forward.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Before** | **Now** | **Chapter** |
|---|---|---|
| — | **2** | The site: how the person arrives and how they are guided |
| 2 | 3 | What the person receives and what the advisor receives |
| 3 | 4 | Who can travel through the experience |
| 4 | 5 | The questionnaire: the only instrument |
| 5 | 6 | The objectives of the individual |
| 6 | 7 | The journey on screen |

The internal referrals of the already approved chapters were updated in the same movement.

### D-52 · Contextual menus are not invented: they are recovered {#d-52-contextual-menus-are-not-invented-they-are-recovered}

The specification of the context menus **already existed** in the repository, divided into three locations: `ux-spec-experiencia-ideal.md` §5.2 (the three user states) and §6.4 (the arrays by page type), contenido-minimo-por-tipo-de-pagina.es.md (the exact tags of each button) and the §3 of the original Architecture document (the conditional branching and dynamic resolver).The chapter 3 consolidates them, does not replace them.

**Land** in: chapter 3.4, when written. **Also reach Part II**, which will prescribe the behavior of those menus.

### D-53 · The limit of two objectives is alive {#d-53-the-limit-of-two-objectives-is-alive}

As long as the person does not touch "Next", they or they can change targets freely: remove one and put another as many times as they or they want. The limit of two does not block the screen, sort the selection. **The order in** which **they or** they choose them **is preserved** and **means something**: the first is their or her main goal.

**Land**s in: 5.7.3 and 7 chapters.

### D-54 · The scheduler button opens the questionnaire with a preamble {#d-54-the-scheduler-button-opens-the-questionnaire-with-a-pre}

The button to schedule a visit is on all pages and at all times of the conversation via WhatsApp, and it is the **gateway** to **the Ideal Experience**. When you touch it, before any question, an invitation text is displayed with two versions: the generic one — "during your visit to our clubs" — and the one of the club, when the button was struck inside the club page — "during your visit to Sports World Polanco"—. Then comes the legal age gate, then the preload block and then the questions.

**Land** in: chapter 8.1 and 8.3.1.

## 8 · What lasts and what does not {#8-what-lasts-and-what-does-not}

### D-55 · All three states are session, and do not survive the exit {#d-55-all-three-states-are-session-and-do-not-survive-the-exi}

The three states that govern the context menu—without questionnaire, complete within the flow, complete outside the flow—**describe** the **person** within **a session**, not over time.

«**Complete, out** of **the** flow» is what happens when someone answers, receives their experience**, does** not **schedule** and starts browsing the site: it comes to a club page by internal navigation or by a search, and there you are no longer offered to design your experience, but to return to it.

**As** soon as the **person leaves**, **the session record dies**. Upon return is, for the site, someone without questionnaire, and if you want to answer it again. There is no recognition between visits, there is no account and nothing is saved in your browser except the D-48 identifier, which dies with the session.

**Land** in: chapters 3.4 — when written— and 7.5.

**Correct**ed by **D-60**: the three states stopped depending on which door the person entered and went on to depend on how far they got. "Complete, out of flow" no longer exists as their own state.

<!-- salto -->

### D-56 · When you meet again: the lead is updated, your experience is replaced {#d-56-when-you-meet-again-the-lead-is-updated-your-experience}

A person who is already registered — for example with the flag “didn’t want to schedule a visit” — comes back days later, remakes the questionnaire and this time does it. What happens to what already existed:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What?** | **What Happens** |
|---|---|
| **The lead record in the CRM** | **It is updated, not duplicated.** It is reconciled **with** the canonical key **of** **the project: first name + last name + phone + club** |
| **The flag "did not want to** **schedule a visit"** | It's a status mark, not a history. |
| **The Ideal Experience** | It **does** not **live** in **the CRM**: it lives on its own base, linked to the lead record by its identifier. The previous one **is completely deleted** and the last one is left. |
| **The appointment** | It is against the record that already existed, not against a new one |

**One person, a record of lead, a valid experience.**

**The deletion leaves no room** for **measurement**. The steps of the funnel spine do not count saved records, they count events at the time they occur: E2 counts when the first question is answered and **E3 counts** when **the Ideal Experience** is **generated**, not when it is consulted later. Redoing the questionnaire triggers a new E2 and a new E3, which are recorded even if the previous document is deleted.

**Land** in: 9, 14 and 16 chapters.

**Correct**ed by **D-68**: The lead record is still one, but the Ideal Experience can be more than one, because every appointment carries its own.

### D-57 · Chapter 3 is rewritten, and its material is relocated {#d-57-chapter-3-is-rewritten-and-its-material-is-relocated}

The text that had been written for chapter 3 described the inventory of pages, buttons and behavior of questionnaire. **None** of those **three** things is **the object** of the **chapter**, which is how the content of the site captures service and leads the person to build their Ideal Experience.

**The structure** of the **chapter is approved** in six sections: why each page exists · what the person finds when arriving · why that content moves them to build their experience · how they get · what they take with them to the questionnaire · blog.

The contents of the 3.2 and 3.3 sections come from **the 5** section of `contenido-minimo-por-tipo-de-pagina.es.md`, which specifies the minimum content of the eleven page types. The removed text used the 4 section of that document — the one in the buttons — and never the 5.

**The correct material was relocated:**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What?** | **Where is it?** |
|---|---|
| Dynamic menus of the questionnaire | **Chapter 4.7**, ‘How the questionnaire behaves on screen’ |
| That Google does not deliver the search term, and that only the landing page is known | **Chapter 4.2.1**, which specifies where previous knowledge comes from |

**Land**s in: 3 and 6 chapters.

### D-58 · Documents do not have notes on their own edition {#d-58-documents-do-not-have-notes-on-their-own-edition}

The text explains what the system is doing, not why it was drafted in one way or another. The justifications **of** the editorial decision**,** comparisons with earlier versions of the document and the instructions to which it is drafted **are excluded**.

They withdrew in this passage: the section 8.5.3, "Why it is written like this", and the notes accompanying the rule of concordance and the rule of "Next".

The rule that is of the system is always preserved. Example: «what is not in the table, does not persist» stays, because it is a rule; «that is why this paragraph does not state a principle» leaves, because it speaks of the document.

Land in: all chapters.

### D-59 · Life is never difficult for the person: the advisor is resolved and advised {#d-59-life-is-never-difficult-for-the-person-the-advisor-is-r}

**It**'s a **rule** of decision, **and it govern**s the **whole** system.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Option A** | **Option B** |
|---|---|
| Ask the person to do something else, or tell them that their request cannot be met | Continue the process in the best possible way, without **lying** to him, and tell the contingency advisor |

**B is always chosen.**

**First application** **·** when **the CRM does** not **respond**. The page continues with the last data saved and **the person is not asked** to **confirm anything** on the phone. The experience is built and delivered. What happens is that **the brief of the advisor carries** a **flag** that says what outdated data was built and what it was. It replaces what contenido-minimo-por-tipo-de-pagina.es.md indicates today, which asked to tell the person.

**The two limits** of the rule. You don't lie: you don't invent a schedule, a price or an availability that you don't have. And you don't shut up inside: every contingency resolved in silence towards the person **travels** to **the brief**, so that the advisor knows what they's working with.

**Land** in: 3, 5.9, 8.7 and 14 chapters.

### D-60 · Two menus, and context has four slots {#d-60-two-menus-and-context-has-four-slots}

**The top** menu **is fixed** and accompanies the person on the 148 pages: **Your Sports** World — the catalog, the only structural navigation point—**, Design** your **experience**, **Talk** with **BES** and **Schedule** your visit.

**The context menu does** not **change buttons**: **it changes** what each says. It has four slots, and each is retaged according to the point at which the person goes.

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Slot** | **E1 · Without** **questionnaire** | **E2 · Complete,** **unscheduled** | **E3 · Complete and** **scheduled** |
|---|---|---|---|
| **1 · The Club** | Find your ideal club | Your ideal club | Your ideal club |
| **2 · Experience** | Design your experience | Back to your Ideal Experience | Back to your Ideal Experience |
| **3 · The objective** | What's your target? | Classes for your goal | Classes for your goal |
| **4 · The visit** | Schedule your visit | Schedule your visit | Your scheduled visit |

**On a club** page **the 1 slot does** not **offer to** find a **club**, because landing there solves it: it offers alternatives. Before the questionnaire: nothing if the city has a single club, "Other clubs in your city" if it has two or three, and "Other clubs in your area" if it has more than three and there is at least another club on a 10 km radius. **With the full questionnaire, the slot opens** the **entire** network. On a club page it says "**Know** our **clubs**", and displays a hierarchy of up to three levels measured from **the person'**s **ideal club**, not from the page club:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What's around the ideal club** | **What is presented to you** |
|---|---|
| One club in your city | Meet all our clubs in the Republic |
| More than one in the city, none to 5 km ideal club | Meet other clubs in your city · Meet all our clubs in the Republic |
| At least one to 5 km of ideal club | Meet other clubs in your area · Meet other clubs in your city · Meet all our clubs in the Republic |

**No level is shown to be empty**, and the order always goes from near to far.

**Land**s in: 3.4 and 3.5 chapters.

**Correct**ed by **D-89**: all three states are named instead of numbered, because `E##` codes belong to the Funnel Map.

**Correct**ed by **D-65** and **D-67**: Club slot tags become "Find Your ideal club" and "Know Other Sports World Clubs", the city size rule and 10 km radius are removed, and the tour slot behaves differently on the body and header.

### D-61 · Three buttons, one door, and context question first {#d-61-three-buttons-one-door-and-context-question-first}

**Find** your **ideal club**, What is your **goal**? **and Design** your experience **open the same questionnaire**. There are three instruments: they are three doors to the same.

And all three begin with **the context questions** on the page **from** which **the button was touched**, not the first question. From the pool page you are confirmed if you want aquatic activities in your experience; from a class, that class; from a club, that club; from a goal, that goal. Only those who entered the start without having seen another page have no context to confirm.

**Land**s in: 3.4.3 and 5.2 chapters.

### D-62 · The lens slot asks in E1 and delivers in E2 {#d-62-the-lens-slot-asks-in-e1-and-delivers-in-e2}

**"**What is your **goal**?" opens the questionnaire. "**The classes** for your **goal**" no longer asks: show the classes that correspond to the stated goal, in the **club that the person has resolved**.

It **is the same mechanism** that govern**s** a club page**: a list of classes is never given. Classes live within the target they serve.**

**Land** in: 3.4.5, 3.5.5 and 7 chapters.

**Correct**ed by **D-73**: the label names the target, "Know the ideal classes for [target name]", and with two stated targets there are two buttons.

<!-- salto -->

### D-63 · The context menu is derived from six variables, not listed {#d-63-the-context-menu-is-derived-from-six-variables-not-list}

Specifying the menu page by page does not allow you to know if all cases are covered. **It is specified** as **a rule of decision** per **button, evaluated** on **six variables**: the questionnaire, the appointment, the type of page, the reference club, the density of clubs around you, and the tagged items.

**Three combinations do** not **exist**, and the document **says** why: without questionnaire can not be appointment, because scheduler requires having completed questionnaire; with questionnaire there is always club, because questionnaire solves it; and on a club page there is always reference club, because landing there identifies it.

With this, the first two variables collapse into the three states that the document uses as shorthand. **The 3.5 section checks the thirty-three scenarios** — eleven page types by three states — and each cell comes out of applying the rules, not from handwriting.

**Land**s in: 3.4 and 3.5 chapters.

**Correct**ed by **D-65**: the reference club variable is removed, because the slot no longer depends on the type of page. The six variables are left in five: the questionnaire, the appointment, the page type, the density around the ideal club and the chosen targets, on which "Explore" depends (D-73).

### D-64 · A single hierarchy of clubs, and what changes is the reference club {#d-64-a-single-hierarchy-of-clubs-and-what-changes-is-the-ref}

There **were** two different geography **rules:** one of 10 km measured **from** the page club**, and** another **of** 5 km measured **from** the ideal club**. There is only one hierarchy left—zone to 5 km, city, Republic—and what changes is from where it is measured:**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Status** | **Reference club** |
|---|---|
| Without questionnaire, on a club page | The club on that page. |
| Without questionnaire, on any other page | None: no geography to solve yet |
| With questionnaire on any page | **The person'**s **ideal club**, even if you are viewing another person's page |

Who's watching Polanco but has satellite solved sees the satellite zone, because that's where he's going to train.

**Land**s in: 3.4.3 and 3.4.4 chapters.

**Correct**ed by **D-65**: The hierarchy is always measured from the ideal club, never from the page club, because before the questionnaire there is no hierarchy to display.

## 9 · The context menu, fixed point by point {#9-the-context-menu-fixed-point-by-point}

The decisions in this section were taken the 20 of September of 2026, one by one, and replace what **D-60**, **D-63** and **D-64 said** about **labels** and **geography**. What those decisions set and here is not mentioned remains in force.

<!-- salto -->

### D-65 · The club slot has two tags, and geography lives inside the button {#d-65-the-club-slot-has-two-tags-and-geography-lives-inside-t}

The club slot does not **depend** on the **type** of page. It depends on a single thing: if the person answered the questionnaire.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Status** | **What the slot says** |
|---|---|
| **Without questionnaire**, on any page, also in that of a club | **Find** your **ideal club** — open the questionnaire |
| **questionnaire**, with or without appointment, on any page | **Meet Other Sports** World **Club**s — Open the Bottom Hierarchy |

The **hierarchy unfold**s within the **button**, measured from the person's ideal club, even if you are viewing the page of another club:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What's around the ideal club** | **What options are deployed** |
|---|---|
| One club in your city | Meet our clubs across the country |
| Two or more in the city, none to 5 km | Meet other clubs in your city · Meet our clubs all over the country |
| Two or more in the city, at least one to 5 km | Meet other clubs in your area · Meet other clubs in your city · Meet our clubs all over the country |

**The only radius** of this **hierarchy** is **5 km**, and it replaces the 10 km that were ruled before. No level is shown empty and the order always goes from the near to the distant. Before questionnaire there is no geography to solve: without ideal club there is no place to measure.

**Scope of the rule. These** 5 km **are** those **of** the menu hierarchy**, which** serves **for the** person **to explore** other clubs**. The** radio **with which the system resolves its** ideal club **is** something else **and** lives **in** the chapter 10**. D-82 states that they are two different things and are not unified.**

**It replace**s: from D-60, the labels "Tu ideal club" and "Know our clubs", the rule by city size and 10 km radius. From D-64, the page club as a point of measurement. From D-63, the reference club variable, which is no longer needed.

**Land**s in: 3.4 and 3.5 chapters.

### D-66 · The order of buttons is fixed {#d-66-the-order-of-buttons-is-fixed}

From left to right: **the** club, **the** experience and the visit. Then, the buttons proper to the page.

The order does not change with the status or type of page. When a slot has nothing to offer, the others retain their order with each other.

Land in: chapter 3.4.

<!-- salto -->

### D-67 · When there is already appointment: the body leads to the appointment and the header offers** **another club {#d-67-when-there-is-already-appointment-the-body-leads-to-the}

On the **body** of the page, the visit slot says "**Your scheduled** visit" and takes you to your appointment, to view it, change it or cancel it.

**In the headline**, "Agenda **your** visit**"** doesn**'t** change the label**, but** it does change the behavior**:** before taking **her** anywhere **she asks her if she wants to schedule a visit at another club.**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Response** | **What Happens** |
|---|---|
| **No** | He takes her to his scheduled visit. |
| **Yes** | The club asks him, re**calc**ulates **his Ideal Experience** for that **club** with **the answers** he **already gave** — he is not asked anything again — and takes him to schedule the appointment at that club. |

**The** first **appointment is preserved**. A person can have scheduled visits in two clubs.

**Land** in: 3.4, 4 and 8 chapters.

### D-68 · Each appointment has its own Ideal Experience and its own brief {#d-68-each-appointment-has-its-own-ideal-experience-and-its-o}

Two different clubs solve different classes, so **there can be no one experience** for **two appointments**. Each scheduled appointment carries the recalculated experience for your club and the brief made with that experience, and the club receives yours.

**When membership enrollment is confirmed, the club where it occurred is checked: that club's experience prevails and the others are deleted. Enrollment arrives through the customer system's daily snapshot.**

**When the questionnaire is completed again on another day, the new experience replaces the previous experience only if it identifies the same club. If it identifies another club, it is added: both coexist until enrollment.**

**Fix D-56**, which fixed "one person, one lead record, one current experience."The lead record remains one, reconciled with the canonical key; what can be more than one is the experience.

**Land** in: 4, 8, 9 and 14 chapters.

### D-69 · Nothing is written or sent until session closes {#d-69-nothing-is-written-or-sent-until-session-closes}

While the session is alive, the person can change clubs, change classes, schedule and schedule at another club whenever they want. **None** of that is **written** or **sent**: they lives in the session.

**The session close**s for **what** happens **first**: the person leaves and the browser gets to warn, or they spend ten **minutes without activity**. You can't rely only on the output, because closing the tab, losing the signal or blocking the phone doesn't always alert the server.

**When** closing, and **only** once, the final state is written:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What?** | **Where to?** |
|---|---|
| The Ideal Experiences, one by appointment | To his own base. |
| Registration of the lead and its appointments | To the customer system |
| Your Ideal Experience, in its final version | By email to the person |
| The brief of each appointment | By email to your club |

**That** follows **that there** are **no cancellation emails** so the **person changed** inside **the session**: nothing came out while changing. Cancellation or change notices to the club only occur when they return another day and moves an already sent appointment.

**Correct the chapter 8**, which wrote to the client system at the time of scheduling and sent the email at the end of the questionnaire.

**Land** in: 8, 9, 14 and 16 chapters.

### D-70 · Target pages are the six objectives of questionnaire {#d-70-target-pages-are-the-six-objectives-of-questionnaire}

**A single list** of **system**-**wide targets**: question 4 CEI-01. Target pages are no longer called by profiles and are renamed by all six targets, so that questionnaire, pages, menu, class matrix, and experience talk about the same thing.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Before** | **Now** |
|---|---|
| First steps · Health and well-being · Body aesthetics · Gain strength · Rehabilitation · Lose weight | Lose weight · Body aesthetics and muscle definition · Increase muscle mass · Athletic performance · Cardiovascular capacity · Move better with more agility |

**It fits** into the **contract**, which fixes five profile hubs and one lose weight hub without **naming** them: it is six pages before and six pages after. Lose weight retains its page and its health treatment.

**Land**s in: 3 and 7 chapters**. Outside the** Architecture: it forces to correct the inventory of pages and addresses of `/perfiles/`.

### D-71 · A loose list is never given: classes live within the target {#d-71-a-loose-list-is-never-given-classes-live-within-the-tar}

**The club page does** not show **a catalogue** of classes. It shows the six objectives, and within each one the classes of that club that serve that goal, with their days and **schedules**. The amenities appear in the description of how that club helps to achieve the goal, not as inventory.

**The page** of **a target shows** all **the classes** of the system **that deliver** that **goal**, not just those of the person's club, and when you touch one leads to the page of that class. What distinguishes one from another is the legend of D-72, not the absence: a list cut out of the club's catalog would prevent the person from knowing what they earns if they moves.

**The schedules live in one** place: the **club page**. A class page **does** not **take** days or **schedules**, because each club has its own grid: it shows which clubs it is taught in, and when playing a club you see there the days and schedules of that class.

It **replace**s what contenido-minimo-por-tipo-de-pagina.es.md requested for the club page — the catalogue of 51 adult classes and 34 for minors — and for the class page — "clubs where it is taught, with their actual schedules."

**Land**s in: 3.2 and 3.3 chapters.

<!-- salto -->

### D-72 · The legend of availability in class lists {#d-72-the-legend-of-availability-in-class-lists}

With the questionnaire answered**, each class of a target list carries the legend "Available in your club" or "Not available in your club".**

It is the **only exception** to the rule of chapter 4.2.5, which prohibits communicating to the person a deficiency. Here is not a lack of your plan: it is information to compare clubs, on a surface that exists for that.

**Land**s in: 3.4 and 4 chapters.

### D-73 · The lens slot: "What is your target?" before the questionnaire, and the ideal classes only on** **the target pages {#d-73-the-lens-slot-what-is-your-target-before-the-questionna}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Where the person is** | **Without questionnaire** | **With questionnaire, with or without** **appointment** |
|---|---|---|
| Home, club, amenities, activities for minors, personal training, blog and class | **What** is your **goal**? — Open the questionnaire, starting with the context questions on the page | No **target button**. Ideal classes are only seen on the target pages |
| Page of a target | **Know the ideal classes** for [**the** **purpose** of the page] — all classes of the system that deliver that goal | The same button, with the D-72 availability legend |
| Page of a goal **that** **the person chose**, if they chose two | — | **In** addition**, Explore** [**the other target** **chosen**], which brings it to the page of that goal |
| Page **of an** Objective **You Didn't Choose** | — | No scan button. Go back to your targets by "Back to your Ideal Experience" or by the main menu |

**The ideal class button always names** the **goal** of the page, with one or two chosen objectives. The chosen objectives enter the menu in a single way: "Explore...", on the page of each of the two, with the other.

Memberships do not carry a target button in any state (D-75). individual training pages either: its button is the program button (D-77).

**It correct**s the **two previous versions** of this decision: the first put two buttons with two objectives and the second put a single button with the main one, and the two put ideal classes outside of the target pages, where they never go. It returns to D-63 the variable of the chosen objectives: the menu is evaluated over five variables, because it depends on "Exploration".

**Replace** D-62 with the label "Classes for your goal": the target is named, is not alluded to.

**Land** in: 3.4, 3.5 and 7 chapters.

<!-- salto -->

### D-74 · The buttons specific to each type of page {#d-74-the-buttons-specific-to-each-type-of-page}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Page** | **Own button** | **What It Does** |
|---|---|---|
| **Class** | **Other similar classes** | Classes grouped by intensity level and benefits similar to the one you are seeing. It appears in all three states. |
| **Blog** | **Other similar articles** | Articles related to the one you are reading |
| **Individual training**, the three modalities | **Your individual routine** | The individual part of your experience. Only with questionnaire, and for all people: individual blocks are not exclusive to those who asked for train without company |

**The "Article**s or **Useful** Information" **button disappear**s from all pages. Where an article is relevant, the page **links** it within its content, not from the menu. It replaces the minimum content rule that lit it by labels.

**Land**s in: 3.4 and 3.5 chapters.

### D-75 · Memberships does not carry the lens slot {#d-75-memberships-does-not-carry-the-lens-slot}

Who compares prices is not choosing target, and on that page there are already two buttons that open the questionnaire. It is the **only type of page without target button** in any state. The other pages without their own goal, the blog included, carry "What is your goal?" before the questionnaire (D-73).

Land in: chapter 3.5.

### D-76 · FitKidz is called by name and split into two sections {#d-76-fitkidz-is-called-by-name-and-split-into-two-sections}

The page is called **"Activities** for **children of 3 months** to **13 years**", as the service throughout the project, and has two sections:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Section** | **How it works** |
|---|---|
| **Classes for children** | Like a target page. The button says "**Know the available** classes" and opens the list; playing a class you see the clubs that teach it, and playing a club, their days and schedules |
| **FitKidz** | The clubs where it is offered; the list leads to the page of each club |

With the questionnaire answered, each class for children carries the legend of D-72, just like on a target page.

Its menu **is** that of any other page. **The three buttons it had disappear**: "FitKidz classes available" and "Your club activities for your children", which showed the same, and the up to three proposed clubs, whose work the two sections now do.

**Replace**s FitKidz's own button rules with the minimum content.

**Land**s in: 3.2 and 3.5 chapters.

<!-- salto -->

### D-77 · The three pages of individual training behave as target pages {#d-77-the-three-pages-of-individual-training-behave-as-target}

**Clarification of the corrected copy**: the express prohibition of displaying equipment specific to this same entry and 3.7.3/11.2.1 applies. The historical reference to display the machine is considered to be replaced by that rule.

Weight training, aerobic training and **aerobic training in the pool**. Its own content button says "**Know the programs of [name of modality**]" and opens the six objectives, each with its program: the name that the person reads and why it serves it. In the aerobic, in addition, the machine, the duration and when to do it. When playing a program you see the clubs where it is available, and hence the club page; in pool, only the clubs that have it. With the questionnaire answered, each program carries the legend of D-72, which in practice only distinguishes in pool.

**The** person **is never shown** the **team**, **protocol** or **technical name** of the program. The team and load are defined by the coach in the first session. Technical names live on the internal tiles.

**The** programs are **sections** within **the three** pages**, not new** pages: the contract counts 47 individual classes, which already include these three, and any addition requires modifying agreement.

**Land**s in: 3.5 and 11 chapters.

### D-78 · aerobic training in the pool is prescribed by perceived effort, not by pulses {#d-78-aerobic-training-in-the-pool-is-prescribed-by-perceived}

**In** the water, the **heart beat**s **between 10** and **12 pulse**s **per minute less** than **on the floor at the** same **effort** — the number and its source are in the aquatic input — due to the effect of water pressure and flotation on blood distribution. A pulsation zone calculated for floor, applied in pool, underestimates the actual work.

Hence, two rules of the system:

1.  **The intensity** of **the aquatic** programs **is expressed in perceived effort** and **in cadence**, never in pulsations transferred from the floor.
2.  **The question 5 of the questionnaire**—**the rhythm that goes** with the person—is **the criterion that orders aquatic** programs, just as it orders classes.

The correspondence of the six objectives with their aquatic programs **is not set** out in the **document**: it lives in the individual training matrix, with the contract that D-83 requires. Chapter 11 declares that source and the D-84 referral method.

**Land**s in: 11 and 12 chapters.

### D-79 · What the system never does in water {#d-79-what-the-system-never-does-in-water}

No part of the system—either experience, brief, or BES—**proposes apnea**, **hyperventil**ation **prior to immersion**, **or series of breath endurance**. Loss of consciousness due to lack of oxygen under water is the main cause of drowning among with experience swimmers, and occurs without warning.

**Land**s in: 11 and 13 chapters.

<!-- salto -->

## 10 · What sets the document and what does not {#10-what-sets-the-document-and-what-does-not}

### D-80 · Care for members is outside of this document {#d-80-care-for-members-is-outside-of-this-document}

**The** site and **BES serve leads**. The Ideal Experience is an instrument of lead acquisition, and the chapter 6 already confines it to those who do not have active membership.

Checking schedules, freezing a membership, cancelling it or any other self-service of a member **is not the** subject of this document. If Sports World decides to publish its cancellation policy or open a help center, it is institutional content, outside of the 148 pages and outside of this Architecture.

**Land**s at: the range limit of the initial pages.

### D-81 · New addresses follow the pattern of those that already exist {#d-81-new-addresses-follow-the-pattern-of-those-that-already-}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.0 -->
| **Page** | **Address Entry** | **It comes from** |
|---|---|---|
| Lose weight | `/bajar-de-peso/` | It's preserved |
| Body aesthetics and muscle definition | `/objetivos/estetica-corporal/` | `/perfiles/tonificar/` |
| Increase muscle mass | `/objetivos/masa-muscular/` | `/perfiles/ganar-fuerza/` |
| Athletic performance | `/objetivos/desempeno-atletico/` | New |
| Cardiovascular capacity | `/objetivos/salud-cardiovascula`<br>`r/` | `/perfiles/salud-y-bienestar/` |
| Moving better with more agility | `/objetivos/agilidad-y-movilida`<br>`d/` | `/perfiles/rehabilitacion/` |
| Activities for children aged 3 months to 13 years | `/actividades-para-menores/` | `/fitkidz/` |

**Every previous** address **redirect**s **to** the **new one permanently**. `/perfiles/primeros-pasos/` has no direct successor, because it was not a goal but a level: it redirects to the beginning of the target section.

**Land** in: Appendix F. Outside the Architecture: the redesign plan.

### D-82 · There are two radios and they are not unified {#d-82-there-are-two-radios-and-they-are-not-unified}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Radio** | **What is it for?** | **Where he lives** |
|---|---|---|
| **5 km** | Let the person explore other clubs around yours | Chapter 3, the menu hierarchy |
| **10 km** | That the system solves what is your ideal club among those that meet your requirements | Chapter 10 |

They **are** two different operations and do **not** have **to** measure **the same thing. The chapter 10 names yours so that it is not confused with the one in the menu.**

Close the open spot that was left in D-65.

### D-83 · Document names source and process, does not freeze data {#d-83-document-names-source-and-process-does-not-freeze-data}

**It is a rule of writing and governs the entire document.**

The operating data — the class catalog, its benefits, the amenities, the plans, the individual training programs — are **obtained** from **the Sports** World systems. What exists in the project today is preliminary and will change.

Hence, what the document writes and what not:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **The document writes** | **Document does not write** |
|---|---|
| **From** which source the data **comes** | The data itself, as if it were definitive |
| **What** must **that** source **deliver**, field by field | The names of the classes, their benefits or their schedules |
| **Who holds** it and with what cadence | Lists that age with the first change of the catalogue |
| **What happens if you don't** **respond** |  |

**When** the **document** needs **to show content** to **explain** itself, **it marks** it **as a preliminary** state and says from which source the final one will come out.

The **practical consequence**: a revision of the document **is not a review** of **the quality** of the current data. Discussing whether a benefit is well drafted or whether a class serves an objective is the work of the matrix, not of the document. The document is judged by whether it names the source, the contract and the process well.

**Land** in: all chapters, and notably 10, 11 and 13**. Correct D-78**, which left the six aquatic programs "subject to validation by the health professional" as if that were a pending document. It is not: the programs are maintained by the source, and the document only declares its contract.

### D-84 · When derivation is indirect, it is declared {#d-84-when-derivation-is-indirect-it-is-declared}

Much of what the system prescribes has no **direct evidence** for **the exact** case, and that does not invalidate it: it is derived from what is measured. What is not worth it is that an indirect derivation is read as a direct one.

So every time the document results in a rule or an evidence program that measures something else, **it** states **the strength of the evidence chain** with three degrees:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Grade** | **Meaning** |
|---|---|
| **Direct** | The evidence measures the same outcome |
| **One step** | The evidence measures an intermediate quality, and the jump to the outcome is only one |
| **Absence** | There's no evidence for that case, and the rule is built by recognizing it. |

**Land**s in: 11 and 12 chapters.

<!-- salto -->

### D-85 · The Contract heads the hierarchy of sources {#d-85-the-contract-heads-the-hierarchy-of-sources}

During the revision of the Architecture, when two documents of the deposit say different things about the same fact**, the one that is above in** this **hierarchy prevail**s:

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
|  | **Source** | **Why there?** |
|---|---|---|
| **1** | **The Contract and its appendices** | Nothing that the document says can force anything other than the agreement. |
| **3** | **CEI-01**, the current questionnaire | It is the only instrument, and everything that the system personalizes comes out of it |
| **4** | **This decision log of decisions** | What has been expressly decided, with date |
| **5** | **The Approved Chapter**s of Architecture |  |
| **6** | The rest of the deposit | Pre-review working papers |

**A** proposal that does not fit in the Contract is not adopted, is quoted. That is why the six target pages of D-70 fit: the Contract fixes five profile hubs and **one lose weight** hub **without naming** them, so renaming them does not alter the count or scope. And so D-77 individual training programs are sections and not pages: the Agreement counts 47 individual classes, and any addition requires modifying agreement.

**Within the same level, wins the most recent date.**

Land in: the initial pages, in the documentary base.

### D-86 · Everything decided in a session enters the decision log in that session {#d-86-everything-decided-in-a-session-enters-the-decision-log}

A decision that is made in conversation and not written **cease**s **to exist** as soon as **the session ends**: the next one asks again or, worse, solves it differently.

Therefore, when closing a session working on Architecture, any decision made in it is **written** here with **its number**, and the previous decisions that are corrected carry its correction note. The repository history replaces the memory of anyone, and this decision log replaces the history of the conversation.

Verification: The decisions of a session are counted against the conversation before closing it. If the number does not match, writing is missing.

### D-87 · An approved chapter is not rewritten: edited {#d-87-an-approved-chapter-is-not-rewritten-edited}

**The complete rewriting** of **an approved chapter** is **prohibited**. Even if the result is better, it forces you to read it whole to know what changed, and in that rereading you lose what had already been revised.

Hence, how all changes come about from this decision:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
|  | **Rule** |
|---|---|
| **Scope** | Only what the decision touches is edited. The rest of the chapter remains character by character as it was. |
| **A commit by decision** | The message names the decision and the chapter. Whoever reviews reads the change, not the chapter. |
| **Nothing enters without a** **decision.** | A drafting improvement that no decision calls for is not done |
| **If the change does not fit in** **an edition** | It is said earlier, with the motive, and express authorization is requested to rewrite |

**The verification that it was fulfilled** is the record itself: a change that touches more lines than its decision justifies is visible in the commit.

**It reaches the approved chapters** and **the pending writings.** A chapter that does not yet exist is written complete, because there is nothing to preserve.

## 11 · The personal page and layer {#11-the-personal-page-and-layer}

### D-88 · 148 pages are served static and identical; what depends on the person is a layer that** **resolves with the session identifier {#d-88-148-pages-are-served-static-and-identical-what-depends-}

**Each** page **is** generated with the 06:00 snapshot—and manually synced for promotions—**and** served identically to all people, from cache. **Nothing of** the content **varies** per person. What does depend on it—the context menu, the D-72 availability legend, "Exploring...", "Your scheduled visit" and what does "Agenda your visit" of the header when there is already appointment (**D-67**)—is a personal layer that is solved with the session identifier of D-48 and is mounted on the page. With what technique is solved—on the server, on the distribution network or on the browser—it is decided by the builder; what this fixed decision is what the person sees.

Five design rules are followed from there:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
|  | **Rule** |
|---|---|
| **1 · Maximum buttons** | The menu is designed for the maximum number of buttons that this type of page can carry, and the space is reserved for that maximum, so that the content does not move when the menu changes status or when it arrives after the page. The maximum is set by chapter 3: five in class, blog, individual training and target; four in start, club, amenity, activities for minors and personal training; three in memberships |
| **2 · No identifier** | Who arrives without session identifier is, for the site, someone without questionnaire, and its menu is written on the page: it appears with the content, without waiting. Whoever arrives with the identifier receives the menu of its status, solved with that identifier |
| **3 · If the script fails** | The site uses JavaScript in the application, animations, and in the personal layer. If a visit to the personal layer script fails or fails, the person does not see a page without a menu: see the full page with the without questionnaire status menu, whose four buttons are normal links. The app —questionnaire, experience and schedule — does require the script to run; its backup is BES |
| **4 · No additional queries** | The legend and "Explore" are solved with data that the page already brings —the clubs where each class is taught — and with the status of the session |
| **5 · Two worlds, one step** | The questionnaire, experience and schedule are application screens, not static pages. The preload in the 3.chapter 6 is the bridge, and the design makes the step continuous: same header, same font, same speed |

**The fixed layer does** not **limit animation**s or **transition**s. What limits **them** is the performance required by positioning — the content is not delayed or moved after painting — and accessibility.

**Land** in: 3.chapter 4; chapter 8, what the server saves and what the browser requests; **thresholds**, when they take place in the structure.

## 12 · Architecture aligns with Funnel Map {#12-architecture-aligns-with-funnel-map}

### D-89 · All three states are named, not numbered {#d-89-all-three-states-are-named-not-numbered}

The **Contract** designates **the Funnel** Map as the project's "single measurement document", and that document owns the E## codes. Its stages and context menu states used the same codes for different things:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Map of Funnel** | **Chapter 3, before** |
|---|---|
| **E2** · Questionnaire initiated, when answering the first question | **E2** · Questionnaire completed, without appointment |
| **E3** · Questionnaire completed, when Ideal Experience is generated | **E3** · Questionnaire completed, with appointment |
| **E4** · Scheduled visit, when writing to CRM is confirmed | — |

The three menu states are renamed by name:

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Status** | **Questionnaire** | **Appointment** |
|---|---|---|
| **Without** **questionnaire** | Pending | Without appointment |
| **With experience** | Completed | Without appointment |
| **With visit** | Completed | With appointment |

And each rule names the variable on which it depends: where it depends only on questionnaire, the text says “without questionnaire” or “with experience”; where it depends only on appointment, it says “without appointment” or “with appointment”.

**It does** not **change** any rules: it changes what the three states are called. What they prescribe D-55, D-60, D-63, D-65, D-73 and D-88 remain intact.

**Land**s in: 3 and 8 chapters.

### D-90 · Architecture names the two session identifiers {#d-90-architecture-names-the-two-session-identifiers}

The Funnel Map and Data Integration name two; the Architecture named only one, and therefore seemed to contradict them.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
|  | **What is it?** | **Do you get to the lead registry?** |
|---|---|---|
| **session identifier** ·<br>`web_session_id` | Own, random and empty. Live in the browser, tie together the pages that the person visits and dies with the session | **No** |
| **session Key** ·<br>`session_uuid` | Idempotence key: if the person returns and reconfirms, the same record is updated and never duplicates | Yes**,** it's the field of the record. |

**D-48 remains intact**: what never comes to the record is the first of the two.

**Land** in: 3.8, 8.5.1 and 8.5.2 chapters.

## 13 · The order and drafting of the document {#13-the-order-and-drafting-of-the-document}

### D-91 · The chapter of the site is sorted by result, not by journey {#d-91-the-chapter-of-the-site-is-sorted-by-result-not-by-jour}

Chapter 3 goes in this order, and in no other order:

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
|  | **Paragraph** | **Why he goes there** |
|---|---|---|
| **1** | **The eleven types of page, each** **for why it exists and the problem** **it solves today** | A page is described after knowing what it exists for. Each type declares the search intention it attends, and having it is the requirement for the type to exist |
| **3** | **What** the site produces: questionnaire, Ideal Experience, brief and scheduled visit | The result is set before the process. Whoever reads the process already knows where it leads. |
| **4** | **How the content of pages and** **context menus lead to** **questionnaire and Ideal** **Experience** | The media, once the end is known |

**Land** in: Chapter 3, sections 3.1 to 2.10.

### D-92 · The document says what the system does {#d-92-the-document-says-what-the-system-does}

**To describe** the system for **what** it **does** not does is **forbidden**. A phrase that lists what does not happen obliges those who read to deduce the fact by discarding, and the text ceases to be legible. The correct form is always the affirmative: what happens, with what data, at what time and who sees it.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
|  | **Rule** |
|---|---|
| **In what is written from here** **on out** | Each rule is stated by what happens. Where it is necessary to narrow down a range, it is limited by naming what does remain within. |
| **In what has already been** **written** | The phrases in this way — ‘what decides and what does not’, and his family — are withdrawn document by document. **Each paragraph** is **shown** to **Eric** and **is withdrawn only** with his **approval**, because some of those phrases hold a fact that the Contract requires to be declared and that it must be said in the affirmative before removing them. |

**Unique exception, already in** force: the D-72 availability legend — "Available in your club" or "Not available in your club" — because the person needs that comparison to decide.

**Land** in: the entire document, and the sweep reaches the rest of the deposit.

<!-- salto -->

## 14 · Four details about the site, the visit and the distance {#14-four-details-about-the-site-the-visit-and-the-distance}

### D-93 · A premium class is one of the seven that Sports World prioritizes {#d-93-a-premium-class-is-one-of-the-seven-that-sports-world-p}

**There** are **no branded** classes and **no branded classes**. The seven premium class pages correspond to **the seven disciplines that Sports** World **choose**s **to prioritize**, and the only thing that distinguishes those pages from the individual class 47 is **the editorial** treatment of the 3.5.2 section. Same minimum content, same menu, same buttons.

<!-- tabla anchos=156.0,352.3 letra=10.5 sin-encabezado -->
|  |  |
|---|---|
| **What this decision sets out** | That "premium" is a commercial priority of Sports World, and that translates into the page extension: more text and more images |
| **That doesn't change** | Everything **else.** Same menu**,** same buttons, same preload, same minimum **content. The system behaves the same with a premium** **class as any other** |
| **What's open** | **What are the seven**, and how much is "more": the number of words and the number of images. They are inputs to write those pages, not to specify the system |

**It fits** in the **Contract**. The Appendix Two, Section I, counts seven premium class pages. The mark that mentions that row in parentheses is illustrative and does not require any seven; choosing them does not alter the count or scope, as does the six D-70 target pages.

**Correct**ed **on the September 21**. The first editorial dealt with "what are the seven" as a decision of Sports World that conditions the start-up. It is not: the system does not change behavior according to which they are. It is an input of content production, and as such it is registered.

**Land** in: chapter 3, sections 3.1.2 and 3.5.2; appendix F, the inventory of the 148 pages.

### D-94 · The date and time are chosen within the club's opening calendar {#d-94-the-date-and-time-are-chosen-within-the-club-s-opening-}

The agenda offers only the **days on** which that **club opens** and the hours in which it **serves**. A club closed that day, or an hour outside the opening hours, does not appear as an option.

<!-- tabla anchos=156.0,352.3 letra=10.5 sin-encabezado -->
|  |  |
|---|---|
| **Where the calendar comes** **from** | From the day-to-day hours of the club, which arrive with the 06:00 snapshot and which the club page already publishes. The agenda and the page show the same data |
| **What the System Continues** **to Do** | Register what the person asked for. **Availability is confirmed** by the **club**, which coordinates the visit and responds with your accusation |
| **Where it was written** | The Contract, Clause Three, paragraph II: “the day and hours chosen by the user, within the **opening** hours of the **club**, are sent by email to the club as a requirement” |

**Land** in: chapter 8, section 8.3.4; chapter 10, when written, for the club that is resolved; chapter 16, the transfer.

<!-- salto -->

### D-95 · The two reminders of WhatsApp are from the person {#d-95-the-two-reminders-of-whatsapp-are-from-the-person}

The **2 WhatsApp messages** that the Contract commits — 24 hours and 2 hours before the visit — **go** to the person, and serve to remind them of their scheduled visit.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Addressee** | **Channel** | **What you get** |
|---|---|---|
| **The person** | WhatsApp, to the phone you delivered in the 3 phase | The two reminders of your visit: your club, day and time |
| **The club** | Email | The brief of that appointment, before the visit |

They are two different recipients and two different channels, and this decision log fixes it because the Architecture did not say it and was willing to read them as warnings to the club.

**With two appointments**, each **carries its two reminder**s, because each has its club, its day and its time (D-67 and D-68).

**Land** in: chapter 8, 8.5.3 section; chapter 16, which specifies what the club receives.

### D-96 · Kilometers narrow down clubs; minutes measure the journey and are what is shown {#d-96-kilometers-narrow-down-clubs-minutes-measure-the-journe}

They are two measures with two different trades, and each one is used where it comes from:

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Measure** | **What It Does** | **Where it applies** |
|---|---|---|
| **Kilometers** | **Club ensembles:** tell which **ones** are **on** each list | **10 km**, between which clubs **the** system **solve**s the ideal club, chapter 10. **5 km**, which offers **to explore** the menu, measured from ideal club, section 3.6.2 |
| **Minutes** | **They measure** a person's journey to a club, with traffic, from its origin | It is **the measure shown** to you: the recommended club in section 4.2.1, the delivery of the reduced route of chapter 6, and the brief |

**The origin** of the journey is given by question 16 — postal code or neighborhood — which wonders even if the person has accepted a club at preload, because it depends on it the time of travel and interest in Multiclub (chapter 5).

**D-82 remains intact**: the two radii in kilometers remain two different things and are not unified.

Land in: sections 3.6.2, 4.2.1 and 5.4; chapters 6 and 10.

### D-97 · The client's people and journey are left out of the document {#d-97-the-client-s-people-and-journey-are-left-out-of-the-doc}

The best practice reference calls **for** a section **of people and customer journey. It does not enter.**

The Architecture specifies the behavior of the system. What the system needs to know from who arrives does not **come out** of **an arche**type: **it leaves the questionnaire**. CEI-01 is the only instrument, and the chapter 5 says so in its own terms: no rule of this document is triggered with a data that does not come out of it. A portrait of archetypes would be, here, description that no rule consumes.

Where they **live**: in the strategy documents of the deposit, which they do have. The Architecture does not reproduce them nor the appointment.

**Land** in: the structure of the document. Close the 5 point of the comparison against the reference.

### D-98 · The document moves to nineteen chapters in three parts {#d-98-the-document-moves-to-nineteen-chapters-in-three-parts}

The current **structure** had sixteen chapters **in** two **parts.** By contrast**ing it against** the reference of best **practices** three gaps were visible**,** and **all** three are of the **same type: what is required of the system was nowhere written.**

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **No** | **New Chapter** | **What closes** |
|---|---|---|
| **18** | **What does the system do when** **something goes wrong?** | Today it is divided into three places — the error screen, the script that does not run, the source that does not arrive — and there is no table that gathers them |
| **19** | **The thresholds** | The figures that the Contract already requires: speed of appearance and response, page stability, accessibility and tracking of the 49 club pages |
| **20** | **Acceptance criteria** | A verifiable condition per chapter. Without them, "delivery" is an opinion |

**The** three form **the third part**, “**What** is **required** of the system.” The thresholds go there and not to an appendix: a figure to be met and an acceptance criterion are the same thing, and separating them would force them to read two pieces to know if the work is delivered.

**The boundary between** the parties **is corrected**. D-49 put it after the chapter 4, so that the chapter 3 — which prescribes the 148 pages and their menus — was under “no obligation.” Part I becomes the chapter 1 alone.

**No written chapter moves** nor **does** it **re**number. The seven retain their number and their referrals.

**Land** in: 00-estructura.es.md, rewritten complete.

### D-99 · lead scoring and A/B testing are out of this project {#d-99-lead-scoring-and-a-b-testing-are-out-of-this-project}

The best practice reference asks **to rate** each **lead with a score** and **route** it according to that **score**, and asks to mark **components** for **tests A**/B. Neither enters.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
|  | **Why** |
|---|---|
| **The score** | This system does not deliver a row of leads to qualify for: it delivers **a** **scheduled visit**, **with club**, day and time. It is already the hottest case that exists, and to which club the geography decides, not a score |
| **The routing** | The only routing that the Contract agrees to is the scaling of BES to a person, and belongs to **Project** B, which is contracted by separate Addendum |
| **Tests A/B** | The Contract does not agree to this project |
| **In addition** | A score is only valid if you calibrate against who ended up buying. That record doesn’t exist yet, so fixing points today would be inventing them |

**What does remain inside**, and **is a real gap**: what happens to those who answer the questionnaire **and not** agenda. Today they put the mark "did not want to schedule visit" and the document says nothing else. That is not to qualify: it is what is done with a record that the system already creates, and it is written in the chapter 9.

**It is not ruled out**: **it is postponed**. Eric leaves it open for later, and the condition to take it back is already stated above: it is necessary the history that one that the person answered with if they ended up buying. That history is produced by conciliation by name, surname, telephone and club, so it will exist when the system takes time operating. Then the points are calibrated with data; today they would be invented.

Lands in: the structure, in "What remains outside this document"; and chapter 9, with the new subchapter.

### D-100 · Who answers and does not schedule passes to direct call of the advisor {#d-100-who-answers-and-does-not-schedule-passes-to-direct-cal}

So **far, that person** was brand**ed** "no visit schedule**" and** the document said nothing **more about it. Now they enter the advisor's responsibilities, such as direct call.**

<!-- tabla anchos=156.0,352.3 letra=10.5 sin-encabezado -->
|  |  |
|---|---|
| **Who calls** | The club’s advisor who solved the system — the same one who would have received his visit |
| **What's he calling with?** | With **their** brief**.** The person completed the questionnaire**, so their** Ideal Experience exists **and** the brief is written the **same. The advisor does** **not call blind** |
| **When it comes out** | Upon closing the session, in the same unique writing in section 8.5.2 |
| **How it arrives marked** | Like direct call, for the advisor to distinguish him from a scheduled visit |
| **If you didn't leave contact** | Registration is not opened or brief leaves: there is no caller (8.3.3 section) |

**It correct**s **the 8.5.2 section**, which sent brief only when there was appointment and kept an Ideal Experience only by appointment. Without appointment it saves the one from the identified club, which is the one the advisor needs to call.

**It requires to correct something outside of the** Architecture. The responsibilities of the advisor live in the Commercial Process: SOP/SW/0102, Lead acquisition for the website, does not contemplate today the direct call to whom it answered and did not schedule. **It remains as open** work in that procedure, and from there it goes down to the Sales Manual `MV/SW/01` if it changes the script of the call.

**Sports** World **assumes** it at **the start**. The system rule is written here, but the call is made by a person: that the advisors take that job, and within what time frame, **is one of Sports** World's **decisions** for **the start** of the project, and so it is recorded at the open points.

**Land** in: chapter 8, section 8.5.2; chapter 16, with its own subchapter; and outside the document, in `SOP/SW/0102`.

<!-- salto -->

### D-101 · The test to find out if a negative phrase stays or goes {#d-101-the-test-to-find-out-if-a-negative-phrase-stays-or-goe}

D-92 prohibits describing the system for what it does not do. The test to apply it is **the subject** of the **phrase**:

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **The guy's...** | **What is the phrase?** | **What are you doing?** |
|---|---|---|
| **The current** **problem** of **Sports** World — what there is and cannot be seen — | A finding. The omission is the fact, and saying so would erase it. | **He stays.** |
| **A declared state of** **the system** | A definition. Absence is what distinguishes that state from the others (D-103) | **He stays.** |
| **The system under** **construction** | A flaw in wording: obligates to deduce the fact by discard | **Rewrites affirmatively** |

**The two** cases **that remain** for **the** first **line**: "The target that is not met: lose weight" and "The discipline that does exist and is not seen." Both name an omission from Sports World, which is just what the project comes to correct.

**The** third **line enters with D-103**, which records the case that this test did not cover.

**Land** in: NORMA-DE-REDACCION.es.md, rule 1.

### D-102 · questionnaire moves to chapter 5 and 5 eligibility {#d-102-questionnaire-moves-to-chapter-5-and-5-eligibility}

The previous **order** put **first who can go through the experience and then the questionnaire.** It remains the other **way around: the instrument is defined before the conditions for using it.**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Before** | **Now** |
|---|---|
| 4 · Who can travel the experience | **4 · The questionnaire: the only instrument** |
| 5 · The questionnaire: the only instrument | **5 · Who can travel the experience** |

Everything that the system customises comes out of the questionnaire, and chapters 3 and 4 already cite it before reaching it. Defining it first leaves the reader with the instrument in hand when it reaches the legal age gate, which is a condition of access to that instrument.

**What moved with the exchange**: the two files change names, the sections are renumbered — 4.1 to `4.9` for the questionnaire and `5.1` to `5.6` for eligibility — and cross-remissions are set in the eleven files containing them. **No** text changes: only their number.

**Land**s in: 5 and 6 chapters, and 2, 3, 7, 8 referrals, the initial pages, editorial standard and this decision log.

<!-- salto -->

### D-103 · The definition of a state remains negative {#d-103-the-definition-of-a-state-remains-negative}

The D-101 test had two lines and left out a third **case,** which appeared when reviewing the chapter 3**: the phrase whose subject is a declared state of the system.**

The specific case: "As long as the questionnaire is still pending, the slot opens **Find** your **ideal club**, because there is still no club from which to measure."

Read with the two-line test, the subject is the system and the phrase would be rewritten. Read for what it says**, not having solved the ideal club** is **the defining feature** of **the Without questionnaire state**, and it is what separates it from With experience and With visit (D-89). Removing it leaves all three states without the distinguishing feature.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What the phrase describes** | **What is it?** |
|---|---|
| What the system stops doing | A writing defect. Rewrites |
| What characterizes a state that the document declares | A definition. |

**The test**, **in one** line: if by removing the absence the state continues to distinguish itself from the others, the phrase was a defect; if it ceases to distinguish, the phrase was the definition.

**Scope**. It is valid for all three menu states, the four club selector modes, and any status that the document declares and name. It is not useful to describe the system in general, which continues to be governed by D-92.

**How it stands**. `tools/registro.js` points out these phrases just like the others, because one program does not distinguish a definition from an oversight. Those that Eric authorizes are left in `tools/registro-permitidas.txt`, **with the reason noted,** so that the list does not become a deposit of exceptions without criteria.

**Land** in: NORMA-DE-REDACCION.es.md rule 1, D-101, tools/registro-permitidas.txt and 3.7 section of Chapter 3.

### D-104 · pool is an hard requirement whenever the modality needs water {#d-104-pool-is-an-hard-requirement-whenever-the-modality-need}

**Q6 has four options and only one of them leaves the decision to the system.**

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Q6 Option** | **Who decides the modality** | **Is pool required by the club?** |
|---|---|---|
| **On the gym floor or** **in a dry area** | The person | No |
| **In the pool** | The person | **Yeah, exclusive.** |
| **Both** | The person | **Yeah, exclusive.** |
| **I would like a** **recommendation** | The system, based on the main objective | Yeah**, exclusive**, when it resolves in water. |

**The rule**, **in one** line: if the chosen or resolved modality needs water, the club must have pool.

**Why. The Both** option promises individual swimming and water classes integrated into the plan. A club without pool cannot deliver either, so recommending it as ideal club delivers an experience that the club cannot fulfill.

**Correct CEI-01 v1.2**, which says of Q6 "Both": "The catalogue is kept dry... **The pool is not required** as **amen**ity." That rule allows solving as ideal club one who cannot deliver what the option offered.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Where** | **What CEI-01 v1.2 said** | **What the 1.3 Says, Already Published** |
|---|---|---|
| Q6 · Both | “The catalogue is kept dry, and the system proactively integrates individual training swimming and water classes to help maximize the stated target. pool is not required as an amenity.” | The plan combines dry floor **and water** and proactive**ly** integrates individual swimming **and** water classes that serve the stated goal**.** **pool is required as an amenity.** |
| §5 · Logic control, Clubs line | ‘To these requirements is added the pool... is required when the training mode solved is in water’ | pool is required when the chosen or resolved modality is In **pool** or Both |

**Confirm**ed by **Eric the September 21**, in both directions: that both pool is included, and that the system **decides the modality only** when **the person asks** to **be recommended**.

**The 21 of September 2026 was applied** in **CEI-01 v1.3**, along with the other two adjustments that the instrument was dragging: the Clubs line of logic control and the P0 block declaration, which was pending from D-56. `tools/instrumento.py` checks and passes to zero.

Lands in sections 5.4.1 and 5.6.2, section 4.2.4, section 7.5, CEI-01 and tools/instrumento.py.

### D-105 · ‘Both’ delivers the two modalities, and the recommended one is calculated {#d-105-both-delivers-the-two-modalities-and-the-recommended-o}

Two clarifications by Eric about Q6, from the September 22.

**The first. With Ambas, the plan must necessarily include dry floor content and pool content.**

CEI-01 v1.4 said that the plan "combines dry floor and water", without requiring it. A plan resolved only dryly fulfilled the letter and delivered less than the option offered. With this, pool's D-104 requirement ceases to be a precaution and becomes the condition for delivering the plan.

**Secondly, with 'I want to be recommended', the system calculates which of the three modalities contributes most to the main objective.**

So far there was a fixed allocation table: two targets solved in water and four on dry floor. The table was a result of the class matrix, frozen in the text.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Before** | **Now** |
|---|---|
| A table of six lines, objective by objective, with the modality already resolved | **The system calculate**s, with the class matrix and the intensity declared in Q5, which of the three modes contributes more to the main objective |
| "I want to be recommended" resolved two modalities; never "Both" | All **three compete**, including ‘Both’, which wins when neither of them separately covers the target as well as the two together. |
| Changing the catalog required rewriting the chapter | Result follows catalog without touching text |

**What does** not **change**: the modality is resolved only when the person asks to be recommended. If they choose directly, their choice prevails. And the modality resolved by the system has exactly the same consequences as the one chosen by the person, including the pool as an hard requirement.

**Applied** in **CEI-01 v1.5**, with its PDF. tools/instrumento.py checks it in two settings, one for precision.

**Land** in 5.6.2, 7.5 and 7.5.1, CEI-01-v1.5.es.html and its PDF, and tools/instrumento.py.

### D-106 · session closure does not generate; just write the calculated {#d-106-session-closure-does-not-generate-just-write-the-calcu}

**The open point "when the brief is delivered to the club" advances, without closing it altogether.**

**The only thing Eric states, literal:** “N**one of the two** [Ideal Experience or brief**]** is generated by closing the session**, if** the browser warn**s or** if they pass 10 minutes of inactivity**.”** It’**s** a denial**,** and it reaches exactly **that: the closure of session — the two triggers already fixed by 8.5.2 — is not the time the system calculates.**

What that closure does, because the 8.5.2 section already fixed it and this doesn't change it, is **to write** and **send** what was calculated, with the changes that the person has made up to that moment—change club, change classes—applied to the result.

**What D-106 does** not **fix**, **and remains open**: at what exact time the calculation occurs, if not at the close of the session. The 4.1 section says "at the end of the questionnaire", but that is its pre-decision wording, not something Eric has reconfirmed here. As long as **it** does not expressly confirm it**, 4.1 remains** the **only written reference** for that moment, and D-106 only states that the closure of session cannot be.

It **lands** in: section 8.5.2, which is confirmed without changing its text. **Leaves pending**: Eric confirms if "at the end of the questionnaire" (4.1) is in effect when it is calculated, or if the time is different.

### D-107 · The calculation is continuous during the session; change the club with appointment** **scheduled again day and time; and the confirmation by WhatsApp is added to the closing {#d-107-the-calculation-is-continuous-during-the-session-chang}

**It close**s **the open point** "at what **exact** moment **the Ideal Experience** and **brief are generated**." Dictated by Eric, the September 22, verbatim:

“When you create an Ideal Experience, the client can continue to change clubs and classes while you are browsing. In fact, if you have already scheduled and changed the Ideal Experience club, you must recalculate the entire experience and re-order which day and time you want to visit, and change the schedule of the face-to-face visit. As this can happen while browsing, the end result of the experience is not sent to you until the session is closed, if the browser warns or has passed more than 10 minutes without activity. At that time the experience is written and sent by email, confirmation is sent to you via WhatsApp, brief is written and emailed to the club, and the lead is written to the CRM and the Ideal Experience database.”

**Three pieces, two already written and one new:**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Piece** | **Status before D-107** |
|---|---|
| The calculation is repeated live throughout the session, not once | **Already written**. The 4.2.3 section already says: "Every change that affects the composition of the experience must produce a new calculated version of the plan" |
| Writing and shipping await closure of session | **Already written**. D-69 and section 8.5.2 |
| **Changing the club with an** **already scheduled** **appointment forces you to** **question day and time, and** **to modify that appointment** | **The** 4.2.3 section recomposes blocks, classes, modality and time of travel, but does not mention the appointment or its date. The 8.3.4 section establishes that the date and time are chosen within the club's opening calendar, so a club change may render invalid the date already chosen |
| **Confirmation by WhatsApp,** **when closing the session** | **New**. The 8.5.6 section already has two reminders — 24 hours and 2 hours before the visit — but neither is an immediate confirmation to the schedule. It is a third piece, not a renowned one. |

**Land in**: section 4.2.3 **(**re**com**position **of** an already scheduled appointment when changing club**) and** section 8.5.2 **(**reconfirmation by WhatsApp **as** the fourth delivery of the session closure, along **with** the Ideal Experience by email**,** the brief **by** email **to** the club **and** registration **in** the CRM**). The two sections are Eric's text, installed character by character: the exact text that is added is shown to you before touching them.**

### D-108 · ‘Flag’ is the official term {#d-108-flag-is-the-official-term}

Eric, 22 of September 2026, when asked whether ‘flag’ became the end of the document or whether ‘flag’ and ‘leg**end**’ were retained: **‘FLAG IS THE** OFFICER’.

Name the **brand that declares**, for **a particular** person, what **requirement of** its **questionnaire cannot meet an alternative club**. It is the object that its chapters 10 and 11 already called that and that chapters 4 and 5 called "flag" — and "legend" when referring to its text.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Where I said something else** | **What does it say now?** |
|---|---|
| Chapter 4, section 4.2.4, title and body | **flags exist to choose and disappear when you choose.** ‘Band**era’** passes **to** ‘flag**’ in** its five mentions**; ‘**the concrete legend**’** passes **to ‘**the particular **text’, and ‘**a legend **by** requirement**’ to a flag by requirement** |
| Chapter 4, sections 4.2.5 and 4.4 | The remaining two entries of ‘flags’ pass to ‘flags’ |
| Chapter 5, sections 5.2.4 and 5.4 | ‘the corresponding legend**’ and ‘what** legend must each alternative **carry’** pass **to flag** |
| Glossary | New **entry**: Flag |
| **The** D-72 **availability** legend, in section 3.6.6, chapter 3, chapter 4, glossary and standard | Go to **flag for availability**. Mark something else—if a class is taught in the person’s club, not if the club meets a requirement of its questionnaire—but it’s a marker of the same family and the official term is one. What the person reads on screen doesn’t change: it’s still “Available in your club” or “Not available in your club” |

**What doesn't change, and why:**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Piece** | **Why it retains its name** |
|---|---|
| **The outdated data signal in** **section 5.9** | The chapter 5 **calls** it **a sign** since it was written. The chapter 12 called it a "flag", which was neither the term of the chapter 5 nor the official: corrected to "signal" |
| **D-42, and the rest of the** **decision log** | The record says what was decided on the day it was decided. Rewrite it to use the new term would falsify the date on which the term was set, which is today. D-42 keeps saying “flags”; this decision is what they are called from now on. |

**Land** in: chapters 4, 5, 10, 11 and 12, **and** glossary**. Replace**s the name D-42 gave to the same object.

### D-109 · Changing Club or Classes Returns Data to Language Model {#d-109-changing-club-or-classes-returns-data-to-language-mode}

Dictated by Eric, the September 22:

“The system must not retain a sentence of the previous plan if it ceased to be true. For this reason the data must be sent back to the LLM if the club or classes change, to write a new experience.”

**The rule**: when the club changes or the classes change, the system must return the recalculated data to the language model and obtain **a new wording** of **the experience**. It must not reuse or patch the previous text.

**What it close**s. The 11.13 section already demanded the result — “the system must not retain a sentence of the previous plan if it ceased to be true” — and referred to the chapter 13 for the mechanism. D-109 sets the mechanism: a new wording, not an edition of the previous one.

**What it correct**s. D-45 said, until today, that the written text **is not** generated again, and from that derived the restriction of writing it so that the only thing typical of a club was its name and address. That restriction goes without effect: the text is rewritten, so it does not need to be written to survive a change of club.

**What doesn**'t **change**, and where it **comes** from. The shipping time is fixed by D-107 and it doesn't move: the person can keep changing the club and classes while browsing, and **only** the **latest** version **is written** and **sent**, when the session closes — if the browser warns or if 10 minutes or more of inactivity pass. During the same session there may therefore be multiple redactions and a single sending.

**As a consequence** of **chapter 13, still to** be **written**. Its first intended sub-chapter was called "One Call." It goes to **"One Call** per **Version**": what the fixed rule is a call for each version of the experience, not one for session. What happens if the model does not respond in one of those calls is the back-up to failure of the same chapter.

**Land in**: chapter 13**, and** section 11.13 which refers **it. Correct D-45.**

### D-110 · ‘Strength of the Evidence Chain’ is the official and unique term {#d-110-strength-of-the-evidence-chain-is-the-official-and-uni}

Dictated by Eric, the September 22:

"strength of the evidence chain" must remain as an official and unique term. It is the one that already uses the decision log and the one that develops the 12.1.1 itself · The strength of the evidence chain. "Derivation" may appear within a prose explanation if it is necessary to explain what the string means, but it must not be used as a field name or as an alternative term."

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Piece** | **Value** |
|---|---|
| **Name of field** | Strength of the Evidence Chain |
| **Values** | Direct · One step · By absence |
| **Where it develops** | Section 12.1.1 |

Where **the variant** was. The individual training matrix contract, in section 11.5.1, read ‘Force of derivation’, and the aquatic input read ‘strength of the evidence chain derivation’. Both are corrected. The 11.5.1 contract also remains as Eric rewrote, with the six input fields and the reference to 12.1.1.

**What is removed** from that contract. The "Level or Parameters Associated with Q5" line leaves the list. The perceived stress range is the parameter on which Q5 operates, so the 11.2 section — "Q5 determines which intensity level must be presented within the parameters allowed by its matrix" — still has data behind it.

**Where "deriv**ation" can **continue to appear**: in prose that explains what the chain means. That is why they retain the title of D-84, "When the derivation is indirect, it is declared", and the section 3 of the aquatic input.

**Land** in: sections 11.5.1 and 12.1.1, the aquatic input and glossary.

### D-111 · When the stated time is not enough for the plan, the brief warns you {#d-111-when-the-stated-time-is-not-enough-for-the-plan-the-br}

Dictated by Eric, the September 22:

"Here you have to add a point to the brief. If the user is declaring his or her intention to train two days and do it one hour each day to increase muscle mass, and chooses that he or she wants to train in company, here's a sametch, because the time spent is not going to be enough for weights, cardio and classes. But the user will be given his or her Ideal Experience with all the blocks, and we have to add a section in the brief that alerts the advisor to this situation and helps him or her how to solve the problem: either explaining to the user why more commitment time would be better, or to make an adjustment in the club during the visit."

**What** it **sets**: the plan is composed against the objective, not against availability. When what the plan asks exceeds what the person declared, **the experience is delivered in full equal** and the warning travels to the advisor, not to the person.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Piece** | **Where** |
|---|---|
| The rule and comparison | Section 11.16 |
| The Signal | The **table in** section 5.9 |
| The brief section, with both outputs | **§8** **· The time adjustment**, in section 4.4.2 |

**The two exit**s are **from the advisor, not** from the system: explain to the person why a greater commitment serves better than what they stated, or adjust the plan with her during the visit. The system prepares the conversation; it does not cut the plan on its own.

**What the instrument still doesn't pick up**. Eric**, on whether** CEI-01 capture**s** availability**: "Yes captures it, but we may have to change the question a little bit to make it clear."**

Today Q8 asks "What days do you **prefer to train**?", which picks up a taste, and the comparison needs a capacity. And how **long for session is not asked** anywhere: Q7 collects three-hour stripes, which is something else. As long as that goes on, the signal rises by comparing days against the frequency that the plan asks for, without the duration of each session.

The adjustment is stated in tools/instrumento.py, which fails in each **run** until CEI-01 incorporates it. The exact wording of the question is decided by Eric.

**Land** in sections 4.4.2, 5.9 and 11.16, and CEI-01.

### D-112 · Enter Q17, time for session, and the keys removed return to use {#d-112-enter-q17-time-for-session-and-the-keys-removed-return}

Dictated by Eric, the September 24, on the withdrawal of Q17, Q18 and Q19:

“The decision has already been made that health data will never be collected online. Unless those numerations are used for contextual questions, then you can use them.”

The **instrument** and section 5.3 declared those three keys "withdrawn and reserved", without saying what or what. They were the branch of lose weight: **Q17**, active treatments; **Q18**, weight, height and waist; **Q19**, goal of weight change. They came out by the rule of 5.8—the questionnaire contains stated preferences, not clinical conditions—which responds to the fact that Mexican legislation considers the data that reveal health status sensitive.

**The reason** for **the withdrawal protected** against **a risk that no** longer **exists**. That branch does not return by decision, so the keys are available for contextual questions.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Key** | **Status** |
|---|---|
| **Q17** | In use: time for session |
| **Q18 and Q19** | Free, for contextual questions |

**What enters the instrument, version 1.6:**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Question** | **What does it say?** |
|---|---|
| **Q8** | «What days can you train?», where I said «preferes». The comparison of section 11.16 needs a capacity, not a taste |
| **Q17** | "How long can you spend on every session?" · Up to 45 minutes · 1 hour · 1 hour and a half · More than an hour and a half. Single mandatory selection, immediately after Q8 |

**Its key is out of sequence**, because it retrieves a removed identifier and its place on screen is next to Q8. **What it dragged.** The count goes from 16–20 to **17–20 questions** and the questions base from fifteen to sixteen: 5.3 and 5.4 sections, the chapter 1, the Q## family of the code table, the standard and README. The 11.16 section adds Q17 to your comparison. The 1.5 version leaves the folder and remains in the repository history.

**Close** the **point that D-111 left open**: the capacity signal is already lifted over time by session, not just on days.

**Land**s in: sections 5.3, 5.4 and 11.16, chapter 1, glossary, code table, standard, README and `CEI-01-v1.6`.

## 17 · Evaluation decisions incorporated into this copy · 5 October 2026 {#17-evaluation-decisions-incorporated-into-this-copy-5-octobe}

This section records Eric's clarifications to apply to all affected references. Previous entries retain the history; the current rules indicated here prevail over the replaced parts. The original snapshot remains intact in GitHub.

### D-113 - Delivery Reflects the Final State and Visit Availability Is Assumed {#d-113-delivery-reflects-the-final-state-and-visit-availabili}

The Ideal Experience and the brief are sent when the browser reports that the tab has closed or after ten minutes of inactivity, whichever occurs first. Changes made before closure update the state that is saved and sent. Calculating or drafting during the session does not constitute sending.

Without contact details, no brief is generated or sent to the club. With contact details and no appointment, it is sent to the identified club as a direct call.

Scheduling records the requested date and time within opening hours and assumes availability, without checking slots or actual capacity. Subsequent operations are Sports World's responsibility.

**Confirm**s and **clarifies**: D-69, D-94, D-100 and D-107**. Land**s in: 1, 2, 3, 4, 8, 9 and CEI-01 chapters.

### D-114 - Minors: Ideal Club and On-Screen Instructions {#d-114-minors-ideal-club-and-on-screen-instructions}

The reduced route uses only the questions permitted by CEI-01 and does not use P0. Q14 offers low impact or none, because Q2 and Q13 do not exist in this route. Q17 is excluded.

The on-screen result is the ideal gym, a short explanation and instructions for contacting or reaching the gym, together with its public contact and location details. No documents, brief or answers are sent to the club; no appointment is scheduled online and the minor is not entered in the CRM.

**Replace**s: the P0 statement in D-47 and the incomplete output of the instrument. **Land**s in: 6, 8, 10 and CEI-01 chapters.

### D-115 - Accepted Class, Individual Training and Arrival Companions {#d-115-accepted-class-individual-training-and-arrival-compani}

A class accepted in P0 is included even if it differs from the person's goals or preferences; those differences are indicated only by a flag for the advisor in the brief. The class is not replaced because of that difference, and acceptance is not requested again.

If Q12 specifies individual training, group classes are not selected, even if they were previously accepted. Q13 states who accompanies the person on arrival: arriving independently and choosing group classes are compatible and do not create a contradiction.

These rules apply to P0, training mode, the selector, substitutions, class changes, recalculation and the brief. Time requirements are calculated according to the actual Q12 branch, using Q8 and Q17. If fewer distinct valid classes exist, D-59 applies, without inventing or duplicating classes.

**It clarifies**: D-40, D-104, D-105 and D-112. **It lands** in: chapters 4, 5, 11, 12 and CEI-01.

### D-116 - Self-Guided Channel and End of Responsibility {#d-116-self-guided-channel-and-end-of-responsibility}

Eric reported that the client excludes BES, WhatsApp service and the advisor console from the project contract. The corrected copy uses the self-guided website. The BES button, handoff and fallback, data collection through excluded channels, WhatsApp confirmations and reminders, and console dependencies are removed.

Responsibility for this experience ends when the experience is emailed to the person and the brief is emailed to the club. The advisor's subsequent work, visit coordination and administration after enrollment are Sports World's responsibility and are not additional operations of this experience.

**Within the current scope, this supersedes the BES, WhatsApp and console obligations in D-34, D-36, D-41, D-44, D-46, D-54, D-60, D-88, D-95 and D-107, and the post-delivery obligations in D-68. Other rules on calculation, appointments, delivery persistence and signaling remain in force.**

Land in: 1–6, 8, 9, 11 and CEI-01 chapters.

**Clarified by D-118: the end of responsibility refers to the journey; the dashboard and funnel measurement integration remain within the project scope.**

### D-117 - The Person's Choice Replaces the Single Current Ideal Club {#d-117-the-person-s-choice-replaces-the-single-current-ideal-}

**Eric's decision - October 5, 2026.**

The journey retains a single current ideal club. The system establishes it through its recommendation until the person confirms another choice. The club chosen by the person immediately replaces the previous club and becomes the ideal club. The previous automatic recommendation leaves the active state.

The ideal club record retains only one club_id. Calculation, classes, drafting, the menu and the 5 km exploration radius use that same current reference. The system does not maintain two club values, one "ideal" and another "selected", to govern the same experience.

When the club proposed by the person does not meet a requested characteristic, the system explains the shortcoming and offers options that do meet it under the current rules. Accepting a shortcoming follows the established information and confirmation process. When the change is confirmed, the new club replaces the previous club as the single ideal club and the experience is recalculated. The original questionnaire answers are retained.

**Corrects the distinction between an initial ideal club and a selected club, and the menu and calculation references that retained two different clubs in previous copies. Alternative selection and accepted exceptions follow the existing rules.**

Land in: 3, 4, 8, 10, 11, 12, 13, 14, 15 and CEI-01 logic control.

<!-- salto -->

### D-118 - The Journey Ends at Handoff; the Dashboard and Funnel Continue {#d-118-the-journey-ends-at-handoff-the-dashboard-and-funnel-c}

**Eric's clarification - October 5, 2026.**

Eric confirms that the experience ends with delivery to the club and clarifies that the dashboard and funnel measurement remain within the project scope.

The journey ends with the Ideal Experience email to the person and the brief email to the club. Sports World manages subsequent commercial follow-up. The measurement integration must consume the results recorded by Sports World, and the dashboard must present the aggregated funnel with attribution, dates and source coverage.

The repository's current Funnel Map is adapted to the self-guided website. Its engagement, appointment, attendance, membership and cancellation stages are retained, with the triggers and identities defined in the questionnaire and current chapters. Excluded channels and their time-to-first-contact indicator are removed.

Completed visits, activations and cancellations are data supplied by Sports World. Incorporating them for measurement remains within the project and does not transfer execution of commercial follow-up to the system.

**Clarifies D-116: its boundary applies to the person's journey; dashboard and measurement scope are retained. Retains D-117: a single current ideal club in each active experience.**

**Land** in: chapters 8, 9, 14, 15, 16 and 17; Funnel Map and dashboard.

### D-119 - The Funnel and Dashboard Form Chapter 18 of the Experience {#d-119-the-funnel-and-dashboard-form-chapter-18-of-the-experi}

**Eric's instruction - October 5, 2026: "Integrate the funnel as an additional chapter of the experience."**

The adapted funnel and dashboard document is integrated as chapter 18 - The Funnel and the Dashboard, at the end of Part II. Its nine sections are numbered 18.1 through 18.9. Its paragraphs, tables and measurement definitions are retained.

The Architecture now has twenty-one chapters. Part II comprises chapters 3 through 18. Part III retains its three remaining sections with the following numbering:

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Chapter** | **Content** |
|---|---|
| **19** | What does the system do when something goes wrong? |
| **20** | The thresholds |
| **21** | Acceptance criteria |

Chapter 18 retains the Funnel Map as the sole definition of stages, sources, rates and the dashboard. References in the current chapters and the structural index point to that location. The previous standalone copy remains a historical reference.

**Retains D-118: the journey ends with delivery of the experience and the brief; the dashboard and measurement integration continue using Sports World data. Retains D-117: a single current ideal club.**

**Updates the structural index and the current numbering established by D-98. Stage codes E0 and E2 through E7 retain their identities.**

**Land**s in: index, editorial standard, chapters 3, 8, 9, 14, 15, 16, 17 and 18 and references to 19 pendings to 21.

<!-- salto -->

## Open Points {#open-points}

### Sports World decisions for the start of the project {#sports-world-decisions-for-the-start-of-the-project}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Decision** | **What it depends on** |
|---|---|
| **Let the advisor**s **take the** **direct** calls to whom the questionnaire answered and did not schedule, and within what time frame | It is new work for the club team. The system rule is already written (D-100): what is missing is that Sports World assumes it and sets the time frame for the call. Hence the correction of `SOP/SW/0102` |

### Open points of the document {#open-points-of-the-document}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Point** | **What a mistake.** |
|---|---|
| **The thresholds** | The figures are verified against the Contract —**LCP < 2.5 s**, **INP** **< 200** **ms**, **CLS** **< 0.1**, **WCAG 2.2** AA and **49 49 trace**able **club pages on SSR** — and their current place is the chapter 20, following the integration of the funnel by D-119. Chapter 20 written for revision of 5 October 2026 |
| **Two documents are called** **CEI-01** | The Appendix A of the Trade Process Manual and the current one. The label does not distinguish |
| **Historical Reference to BES** **Attendees, Out of Current** **Scope by D-116** | The one of this Architecture, which attends leads, and the one of the deposit configuration file, which attends the project team and expressly declares that it does not attend leads |
| **Technical source of club** **selection** | It is specified in the chapter 14 data contract under D-83 and 10.18; it does not reopen the current journey selection |
| **Commercial attribution of** **sale to another club** | See D-44 |
| **Text of the session identifier** **notice** | See D-48 |
| **What are the seven premium** **classes, and how much text** **and images they carry** | Inputs to write those seven pages and to the appendix F inventory**. Do** not **condition the specification**: the system behaves the same with any of the 47 classes (D-93) |
| **The basis of Ideal** **Experiences** | D-56 names it as its own base linked to CRM by identifier. Its contract — which fields it carries, who maintains it, how much it retains — is specified in chapter 14 |

<!-- salto -->

# Ideal Experience Questionnaire CEI 01 {#ideal-experience-questionnaire-cei-01}

Sports World Mexico

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Version** | **1.6 · October 5 corrected copy of 2026** |
|---|---|
| Replaces | 1.5 version |
| What changed | Q8 collects possible days and Q17 duration by session. preload is aligned, classes accepted, child output and delivery to the closure with autonomous site scope. |
| Structure | G0; complete route with P0, 16 conditional base questions and 3; or reduced route with 8 base questions and Q15b when applying. |

## 1 · What it is and who it is addressed to {#1-what-it-is-and-who-it-is-addressed-to}

Questionnaire Ideal Experience captures the preferences needed to generate a consistent Ideal Experience, with the same semantics throughout the site's autonomous journey. It is the only commercial process rating instrument for the complete route and also contains a reduced and anonymous route for those who do not confirm legal age.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Audience** | **People without active membership in Sports World. The complete** **digital route is only for those who confirm having 18 years or more.** |
|---|---|
| Structure | G0; full route with P0, 16 base questions and 3 conditional questions; or reduced route with Q4, Q5, Q6, Q9, Q12, Q14, Q15, Q16 and Q15b when applicable. |
| Channels | Autonomous website. The reduced digital route does not generate contact or transfer to the club. |

## 2 · Rules of application {#2-rules-of-application}

-  The questionnaire is intended exclusively for people without an active membership. It does not include the option “I currently train at Sports World”.
-  If the person confirms they are aged 18 or older, they follow the full route. If they answer No at G0, they enter the reduced anonymous route defined in section 4.
-  **The reduced route does** not use **P0**, does not ask for first name, surname, telephone or email, does not open a registration, does not send information to the club and ends after showing a single recommended club with a brief explanation and the indication to go with your guardian.
-  No diagnosis, injury, pregnancy, treatments, medications, surgeries, weight, height, body measurements or any other clinical data are **requested** or **inferred**.
-  Ideal Experience does not offer nutritional accompaniment, food plans, diets or nutrition recommendations.
-  In the complete path, questions, options, validations, ramifications, and identifiers **are kept** in all **entries** on the site.
-  The Q18 and Q19 identifiers are free for contextual questions; the lose weight branch they occupied does not return to the instrument.
-  **The form of address selected in Q2 governs grammatical agreement in the full route. In the reduced route, where Q2 is not asked, Q12 is presented in its neutral form: "entrenar sin compañía" (train without company).**
-  **References to other people use correct Spanish grammar and are not inflected according to the respondent's form of address. Those people's gender is neither known nor requested. Where Spanish has a word that names them without declaring gender, that word is used: "una amistad", "mi pareja". Otherwise, the masculine plural is used: "mis hijos", "actividades para menores de 3 meses a 13 años".**
-  **All typographic inclusion markers are prohibited: @, x, a vowel in parentheses and dual endings separated by a slash.**
-  **In** the **complete** route, **at the end** of **the questionnaire** and while **the** system **processes, the last** name, **phone** and **email** are **requested**. All three are required to write a record. If you do not deliver them, you can see your experience on screen and no record is written.
-  **Once the data** is submitted, and **once,** you are **asked** if you **want** to **schedule** a visit. If you do not want, your registration will be with the flag "not wanted to schedule a visit", which is a status mark and not an instruction not to contact.

## 3 · The questionnaire {#3-the-questionnaire}

### G0 · gate {#g0-gate}

**This online experience is available to people aged 18 or older. Do you confirm that you are aged 18 or older?**

-  Yes
-  No

**Data entry and validation**. Single mandatory selection. If you respond Yes, continue with P0 when context exists and then with Q1. If you respond No, open **the reduced path** in **the 4 section**.

**Author**ized use. Eligibility gate; does not customize the recommendation.

### P0 · Preload {#p0-preload}

**A confirmation block for prior context. It is assembled in each session, displayed after G0 and before Q1, and shown only once.**

**Data entry and validation. It exists only in the full route. It must not be displayed when G0 = No.**

**What may be preloaded. Four categories, each with a fixed confirmation format: club and amenity, accept or request a recommendation; class and goal, yes or no.**

**How it is assembled. Each candidate item is checked against the current daily snapshot. An item not supported by the snapshot is omitted. Multiple pages from the same family produce a single item. Two clubs produce one item offering both, plus the recommendation option. The composition shown in the block remains fixed throughout that questionnaire.**

**Accept. The answer replaces the corresponding question's answer and that question is resolved; it is not asked again. Accepting a club does not disable Q16. Accepting a class without a fixed club makes it a club requirement only if Q12 specifies group training; individual training in Q12 disables that requirement.**

**Reject. The preload is discarded. The corresponding question appears later in its normal position, without prefilling and with exactly the wording, options, validations and rules defined in this instrument.**

**Count. P0 does not add a question to the full route's count of 17 to 20 questions, before deducting questions resolved through preloading.**

**Accepted class. If Q12 specifies group training, the class is included even if it differs from goals or preferences; the difference produces a flag only in the brief. Acceptance is not requested again because of that difference. If Q12 specifies individual training, group classes are not selected, even if they were previously confirmed.**

**Author**ized use. Confirmation of previous context. It retains the validations and limits of the instrument.

### Q1 {#q1}

**Before we start, what's your name?**

Your name _______________________________

Data entry and validation. Required text of 1 to 60 characters. Do not request the last name in this question; it is requested during contact collection at the end.

**Author**ized use. Greeting and writing of the Ideal Experience.

### Q2 {#q2}

**How would you prefer us to address you?**

-  Masculine
-  Feminine
-  Gender-neutral language

**Data entry and validation**. Single mandatory selection.

Authorized use. Grammatical agreement and the condition for the prenatal/postpartum option in Q14. It is never used to assign an advisor or infer identity or a condition.

### Q3 {#q3}

**What do you want to feel when you leave the club?**

-  Disconnect from work and my daily routine
-  Renew my energy and lift my spirits
-  Be part of a healthy community
-  Feel that my body responds
-  Feel better about myself

**Data entry and validation**. Single mandatory selection.

**Author**ized use. Ideal Experience narrative tone; does not change the club by itself.

### Q4 {#q4}

**What are you looking for?**

-  Lose weight
-  Improve my body aesthetics and muscle definition
-  Increase muscle mass
-  Improve my athletic performance
-  Improve my cardiovascular capacity
-  Move better with more agility

Data entry and validation. Multiple selection; minimum 1, maximum 2. The first choice is the main target.

Authorized use. Training blocks, classes by objective and main argument. **In the reduced route** it is preserved to contextualize the compatibility of the offer and the recommendation summary.

### Q5 {#q5}

**What training intensity suits you?**

-  Gentle and controlled
-  Moderate and constant
-  Intense and challenging

**Data entry and validation**. Single mandatory selection.

Authorized use. Class selection criterion together with the objective and level; also included in the brief on the full route. On the reduced route it contextualizes the club offering and summary.

### Q6 {#q6}

**Where do you prefer to train?**

-  On the gym floor or in a dry area
-  In the pool
-  Both
-  I would like a recommendation

**Data entry and validation**. Single mandatory selection.

**Author**ized use. Defines the training mode.

-  **In the pool: B02 uses the aquatic catalog; B01 remains on the gym floor. A pool is required as an amenity when selecting the club.**
-  **Both: the plan must include dry-floor content and pool content. It proactively incorporates individual swimming training and, if Q12 specifies group training, aquatic classes that support the stated objective. A pool is required as an amenity.**
-  **I would like a recommendation: the system calculates which of the three modalities contributes most to the main objective, using the class matrix at the intensity stated in Q5, and selects that modality. If it selects In the pool or Both, a pool is required as an amenity.**

Rule. If the chosen or calculated modality requires water, the club must have a pool. The modality selected by the system has the same consequences as the one chosen by the person.

### Q7 {#q7}

**What time do you prefer to train?**

-  05:00 to 08:00
-  08:00 to 11:00
-  11:00 to 14:00
-  14:00 to 17:00
-  17:00 to 20:00
-  20:00 until closing

**Data entry and validation**. Multiple selection; minimum 1.

Author**ized use**. It generates an alert **for** the advisor **if** the ideal classes do **not** match**.** It does **not select or discard clubs or intervene in the calculation of travel time.**

### Q8 {#q8}

**What days can you train?**

-  Monday · Tuesday · Wednesday · Thursday · Friday · Saturday · Sunday

**Data entry and validation**. Multiple selection; minimum 1.

**Author**ized use. Generates an alert for the advisor if the ideal classes do not match; does not select or discard clubs. Along with Q17, it declares the time capacity to compare what the plan asks for.

### Q17 {#q17}

**How much time can you spend on each session?**

-  Up to 45 minutes
-  1 hour
-  1 hour and a half
-  More than an hour and a half

**Data entry and validation**. Single mandatory selection. Asked immediately after Q8.

**Authorized use. Together with Q8, it states the person’s available training time. If the plan requires more time than they can provide, the full Ideal Experience is still delivered and the warning is included in the brief. The plan is not shortened and classes are not discarded.**

### Q9 {#q9}

**What is your training level?**

-  Beginner
-  Intermediate
-  Advanced

**Data entry and validation**. Single mandatory selection.

**Authorized use. Proficiency level for ordering classes; never used as a diagnosis. On the reduced route it contextualizes compatibility with the offering and the summary.**

### Q10 {#q10}

**Which one best describes your recent experience?**

-  I am coming from another gym
-  It's my first time in a gym
-  I am resuming training after a break
-  I am returning to Sports World after a break

**Data entry and validation**. Single mandatory selection. It does not include an option for those who have active membership.

**Author**ized use. Commercial context and preparation of journey.

### Q10a conditional {#q10a-conditional}

It shows whether Q10 is "I'm coming from another gym" or either of the two options back after a break.

**If it comes from another gym: What gym do you currently train at? If it comes back from a break: What was the last gym you belonged to?**

Response ______________________________

Data entry and validation. Mandatory text; admit 'I don't remember'.

**Author**ized use. Commercial and service context. Not used for campaigns against a specific brand.

### Q11 conditional {#q11-conditional}

It is shown whether Q10 is "Retake training after a break" or "Return to Sports World after a break".

**How long was the pause?**

-  Less than 3 months
-  Between 3 and 12 months
-  More than a year

**Data entry and validation**. Single mandatory selection. Appears immediately within the return branch after a pause.

**Author**ized use. Adjust the visit preparation, without inferring physical condition.

### Q12 {#q12}

**Do you prefer to train alone or do you prefer group classes? - Spanish feminine form: "sola"; neutral form: "sin compañía".**

-  Train alone - Spanish forms: "solo" / "sola" / "sin compañía".
-  Group classes

**Data entry and validation**. Single mandatory selection**. There are two options; there is no third way or default value.**

**Permitted use. Defines what occupies the third block of the experience. Personal training is proposed in both branches; what changes is whether it occupies the entire block or accompanies classes. In the reduced route it must be shown in the neutral form: "Do you prefer to train without company or do you prefer group classes?" - "Train without company" - "Group classes".**

### Q13 {#q13}

**Who would you visit us with at the club?**

-  On my own.
-  With a friend
-  With my partner.
-  With my children
-  With my family

**Data entry and validation**. Single mandatory selection.

**Author**ized use. Preparation of the visit and activation of the preference of activities for minors where appropriate.

### Q14 {#q14}

**Is there any preference you want us to prioritize?**

-  Low impact programmes
-  Pre*natal or* postpart*um (conditional) programmes*
-  Activities for children aged 3 months to 13 years *(conditional)*
-  None of the above

**Data entry and validation**. Required multiple selection; 1 minimum. "None of the above" is exclusive. In the complete path, Q14 appears after Q13 to apply its conditional options.

**Authorized use**. Declar**ed** preferences. No **diagnosis, pregnancy or minor data are inferred.**

### Dynamic options in the complete path {#dynamic-options-in-the-complete-path}

-  ‘Prenatal or postpartum programmes’ is shown **only** if **Q2** is **‘Fe**male’.
-  «Activities for children of 3 months to 13 years» **is** shown **only** if **Q13 is** **«With** my children» or «With my family».
-  **Reduced route**. As Q2 and Q13 are not asked, Q14 must only show **"Low Impact Programs**" and **"N**one of the above".

### Club and Matrix Requirements {#club-and-matrix-requirements}

**Club requirements**. Each preference declared is required. To those requirements is added the pool when the chosen or resolved modality is In the pool or Both.

**Matrix**. Preferences apply to automatic selection and replace contra-indicated classes with equivalents. The class already accepted in P0 is preserved against differences with objectives or preferences and carries a flag only to brief; individual Q12 excludes groups.

### Q15 {#q15}

**Looking for a club near your home, office, or both?**

-  Home
-  Office
-  Both

**Data entry and validation**. Single mandatory selection. "Both" activates the Multiclub membership interest indicator in **the complete path**.

**Author**ized use. Identify the type of origin. **In the reduced route** only serves to define the origin of the recommendation; it does not generate a commercial opportunity.

<!-- salto -->

### Q15b conditional {#q15b-conditional}

It is shown if Q15 is both.

**From which would you visit us most often?**

-  Home
-  Office

**Data entry and validation**. Single selection mandatory and prior to Q16.

**Author**ized use. Defines the only priority source for the recommendation. On **the complete route**, the Multiclub interest remains active without capturing a second location.

### Q16 {#q16}

**What is the postal code or neighborhood of the place from which you would visit us most often?**

-  Postal code
-  Neighborhood

After choosing, show a single field _____________________

**Data entry and validation. One mandatory location reference. A valid postal code or a neighborhood selected through autocomplete. Do not request a street, street number, full address or device coordinates.**

**Permitted use. Approximately locates the primary origin to recommend clubs and calculate travel times.**

## 4 · Reduced route when G0 = No {#4-reduced-route-when-g0-no}

The reduced route exists solely to help a person who does not confirm being 18 or older identify the most suitable Sports World club. It does not build a digital Ideal Experience or initiate a commercial relationship.

<!-- salto -->

### 4.1 · Questions Used {#4-1-questions-used}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Order** | **Question** | **Use on the reduced route** |
|---|---|---|
| 1 | Q4 · What you are looking for | Main objective and, where available, secondary objective; used to contextualize supply compatibility and recommendation summary |
| 2 | Q5 · Suitable training intensity | Intensity preference; used to contextualize offer and summary |
| 3 | Q6 · Where you prefer to train | Training modality. In the pool or Both makes a pool a hard requirement. |
| 4 | Q9 - Level | Declared level; contextualizes the compatibility of the offer and summary |
| 5 | Q12 · Individual or group | It is shown in its neutral form: Train without company / Group Classes |
| 6 | Q14 · Preferences | Show only Low Impact and None of the above, because Q2 and Q13 do not exist on this route |
| 7 | Q15 · Close to what | Defines home, office or both |
| 8 | Q15b · Priority origin | Only if Q15 = Both |
| 9 | Q16 · Postal code or neighborhood | Locates the priority source and allows to calculate travel and solve the club |

The reduced route must not use **P0** or any navigation history, campaign, landing page or previous context data. All responses must be given within the route itself.

### 4.2 · What you don't ask {#4-2-what-you-don-t-ask}

-  **Q1 · First name**
-  **Q2 · Form of address**
-  **Q3** · What you want to feel
-  **Q7** · Schedule
-  **Q8** days
-  **Q17 · Time per session**
-  **Q10**, **Q10a** and **Q11** · Previous experience
-  **Q13** · With whom I would visit the club
-  Last Name
-  Phone
-  Email
-  Any other information intended to identify or contact the person

**There must be no contact capture at the end of this route.**

### 4.3 · What you do with the answers {#4-3-what-you-do-with-the-answers}

Responses must be used only during the session to execute the club selection rules of the relevant chapter. The recommendation must apply closeness, modality, requirements and other current selection rules. Q4, Q5, Q9 and Q12 are preserved to contextualize the compatibility of the offer and explain the recommendation, without creating a digital Ideal Experience.

-  Do not generate an Ideal Experience.
-  Don't build all three blocks.
-  Do not generate a brief.
-  Do not create a lead.
-  Do not send information to a club.
-  Do not write in CRM.
-  Do not initiate further contact.
-  Don't schedule a visit.

### 4.4 · What you receive {#4-4-what-you-receive}

Upon completion, the system displays the name of the recommended club, its address, travel time and a brief summary of why it corresponds. It includes instructions to contact the gym or arrive, with its public contact details and the link to the map.

Then it must state: "We recommend visiting this club with your guardian. If you are between 14 and 17 years old, they can help you build your Ideal Experience there and explain how to continue the process of training at Sports World."

There ends the digital journey. No contact form, request for name, email or phone number, appointment offer or promise that Sports World will contact the person.

### 4.5 · Persistence {#4-5-persistence}

The path must work without creating an identifiable record. No response must be sent to the club or incorporated into the CRM or leads registry. Information exists only during the session to calculate the recommended club and must end with the session.

If the person is between 14 and 17 years old and decides to continue, the complete Ideal Experience must start at the club as a new process, face-to-face and with its guardian.

<!-- salto -->

## 5 · Contact Capture {#5-contact-capture}

It applies only to the complete route. It occurs at the end of the questionnaire, while the system calculates the recommendation. It is not part of the questions and does not customize the Ideal Experience.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Field** | **Validation** | **Purpose** |
|---|---|---|
| Last Name | Required text from 2 to 60 characters | Tops the advisor's brief with the full name, along with the name Q1 |
| Phone | Ten digits; E.164 standardization in the registry | Contact of the advisor |
| Email | Valid email Format | Sending your Ideal Experience and registry identifier |

All three are required to write a record on the complete path. If the person does not deliver them, they see their experience on screen and no record is written.

**Contact capture must never appear on the reduced route.**

<!-- salto -->

## 6 · Logic and Consistency Control {#6-logic-and-consistency-control}

These rules are part of the instrument and must be maintained consistently on the site and route concerned.

<!-- tabla anchos=156.0,352.3 letra=10.0 -->
| **Rule** | **Mandatory implementation** |
|---|---|
| Leads | Never show "Actually Training in Sports World." Whoever had a membership before only appears as a return after a break. |
| Legal age | G0 decides the route. Yes = complete route. No = anonymous reduced route. Do not ask for exact age. |
| Reduced path | No P0, Q1, Q2, Q3, Q7, Q8, Q17, Q10, Q10a, Q11 or Q13; no contact collection, record, brief, appointment or handoff to the club. Uses Q4, Q5, Q6, Q9, Q12, Q14, Q15, Q16 and Q15b when applicable. |
| Another gym | Ask the current gym only on the complete route. |
| Return from a pause | Ask the last gym and the duration of the break only on the complete route. |
| Preferences | Complete route: always low impact or none; prenatal/postpartum only with female Q2; activities for minors only after Q13 children/family. Reduced route: only low impact or none. |
| Modality | With "Both", the plan necessarily includes dry floor and pool. With "I want to be recommended", the system calculates the modality that contributes the most to the main objective; it is not fixed in an allocation table |
| Clubs | The automatic recommendation requires the chosen amenities, declared preferences and at least one class eligible for each target in the stated intensity. Days and schedules only generate alert on the complete route; they do not rule out clubs. pool is an hard requirement for the automatic recommendation when the chosen or resolved modality is In the pool or Both. journey retains a single ideal club in force. If the person confirms another club, it replaces the previous one as ideal club and updates the calculation and menu. If it fails to meet a requirement, the system reports the deficiency and offers options that do; confirmation of an exception follows the rules of chapter 10. |
| Closeness | It is measured in minutes of travel with traffic at peak time, never in kilometers and never at declared time. Time is shown as "max X minutes". |
| Location | Capture a single zip code or neighborhood of priority origin. Never ask for two locations or a full address. |
| Multiclub | In the complete route, both activate the Multiclub and Q15b opportunity defines the priority origin. In the reduced route, both only activate Q15b; it does not generate commercial opportunity. |
| Nutrition | Do not offer nutritional accompaniment, diets or food plans. |
| Personal training | No question is asked, because it is proposed to all people on the complete route: at least one initial session, in the two branches of Q12. |
| Contact | Only complete route: last name, telephone and email when finished. Reduced route: none. |
| Health | No question asks about health conditions. The clinical crossing occurs at the visit with the applicable process and authorizations, and replaces classes instead of eliminating them. |
| Final delivery | With contact, experience by email to the person and brief to the club at the closure communicated or ten minutes of inactivity, which happens first. The final state is sent; our responsibility ends with those emails. The visit assumes availability within the hours of service, without checking quotas. |
| Persistence of reduced route | Do not create identifiable record; do not send answers to the club; the information ends with the session. |

## 7 · Current identifiers {#7-current-identifiers}

**Gate: G0.**

**Preload block: P0. Full route only.**

**Full-route base questions (16): Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q17, Q9, Q10, Q12, Q13, Q14, Q15 and Q16, in that display order. Q17 reuses an identifier that had been retired, which is why its code is out of sequence.**

**Full-route conditional questions (3): Q10a, Q11 and Q15b.**

**Reduced route: Q4, Q5, Q6, Q9, Q12, Q14, Q15, Q16 and Q15b when applicable.**

**Available: Q18 and Q19. They were part of the weight-loss branch removed from the instrument under the scope rule: the questionnaire collects stated preferences, not clinical conditions. That branch does not return, so its codes remain available for contextual questions.**

<!-- salto -->

## 8 · Change Log {#8-change-log}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Version** | **What changed** |
|---|---|
| 1.6 · corrected copy | 5 October 2026: application of shipping decisions, minors, confirmed classes and Q12; autonomous web channel and limit of delivery to the customer and the club. Correction of counting and summary. |
| 1.6 | Q8 passes from preference to capacity. I asked what days the person prefers to train, which picks up a taste, and now asks what they can. The comparison between what the plan asks and what the person can dedicate needs a capacity. Q17 enters, how long per session, that the instrument did not ask anywhere: Q7 collects three-hour slots, which is when it can come, not how long it stays. With both, the mismatch is calculated complete. Q17 recovers a retired identifier: the lose weight branch occupied by Q17, Q18 and Q19 came out by the scope rule and does not return, so the keys are available for contextual questions. Q18 and Q19 remain free. |
| 1.5 | The plan must necessarily include dry floor content and pool content. 1.4 said that the plan "combines" the two without requiring it, and a plan resolved only in dry delivery less than the option offers. The modality recommendation is calculated. With "I want to be recommended", the system calculates which of the three modalities contributes most to the main objective, with the class matrix and the intensity declared in Q5. It replaces the fixed allocation table by target, which was outdated every time the catalogue changed. The three modalities compete, including "Ambas". |
| 1.4 | Reduced route for G0 = No. It no longer ends immediately: it opens an anonymous route without P0 or contact collection, using Q4, Q5, Q6, Q9, Q12, Q14, Q15, Q16 and Q15b when applicable. The result is one recommended club with a short explanation of how it corresponds to the answers and a recommendation to attend with a guardian. It creates no record, brief, appointment or handoff to the club. For ages 14 to 17, the full Ideal Experience is built in person at the club with the guardian. The v1.3 correction requiring a pool when the training mode is In the pool or Both is retained. |
| 1.3 | P0 is declared within the instrument. Accept resolves the corresponding question; rejects returns the question to its normal form without prefilled. pool also becomes required with "Both" and when the system resolves In the pool or Both. |
| 1.2 | IntraText Concordance: masculine, feminine or neutral for the words that refer to the responder; third parties with correct Spanish grammar and without inclusion typographical marks. |
| 1.1 | Last name: requested in the contact capture along with phone and email; Q1 retains only name. Neutral language settings. |
| 1.0 | Initial version of the instrument. |

# Document Structure {#document-structure}

**Architecture of Experience · revised version. This** file fixes the complete index **—**initial pages**,** twenty-one chapters**,** six appendices**— and the status of each** piece**.** It **is** the reference **for** cross-remission**s: no chapter refers to a number that is not in this table.**

**D-119** integrates the funnel and dashboard as chapter **18**, at the end of Part II. Part III moves to chapters **19** to **21**. D-117 and D-118 retain the current rules of ideal club unique and measurement continuity after transfer.

## Home Pages {#home-pages}

**The initial pieces are numbered from 0.1 to 0.5. Their consolidation with the index of twenty-one chapters corresponds to** `00-paginas-iniciales.es.md`**.**

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Piece** | **What it contains** |
|---|---|
| **0.1** Document Control | Version, date, status, recipients, documentary basis |
| **0.2** How to read this document | For **who it is, what it** decides**, and** the three normative words**: it must · it** **must not · it can** |
| **0.3 Detailed Table of** **Contents** | Chapters and subchapters, with internal link; pagination when preparing the final edition |
| **0.4** Glossary | A-Z, in business language |
| **0.5** Table of codes and abbreviations | The eight family codes, with an example of each |

The argument of the project came out of the initial pages and is **chapter 1**.

Rule **governing the initial** pages: no term, code or concept appears in the body without being previously in the glossary or in the code table.

<!-- salto -->

### The eight family codes {#the-eight-family-codes}

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Family** | **Form** | **It means** | **Example** |
|---|---|---|---|
| **Q##** | `Q1`... Q16 and `Q17`, with their conditionals | Question of questionnaire | `Q4` = functional objectives |
| **OE-#** | `OE-1`... OE-5 | Emotional goal: what the person wants to feel | OE-3 = community |
| **OF-#** | `OF-1`... OF-6 | Functional objective: what it wants to achieve | `OF-1` = lose weight |
| **B##** | `B01`... B03 | Plan training block | `B03` = group classes or personal training |
| **REQ-#** | `REQ-1`... REQ-4 | Requirement that the person demands from the club | `REQ-1` = pool |
| **RN-##** | `RN-01`... RN-nn | Rule of business, numbered and traceable | `RN-08` = club choice |
| **E##** | `E0` and E2... E7 | Measurement stage, defined in chapter 18 | `E4` = scheduled visit |
| **C1[a–c]** | C1a, C1b, C1c | chapter 18 entry and report | `C1a` = organic |

The four modes of the club selector go with a Spanish name and no code: **several meet** **· one meets** **· meets further · as close** to your **target**. The three menu states also go with a name**: without questionnaire** **· with experience** · with visit (D-89).

## All three parts {#all-three-parts}

**Part I** **·** Why it **exists** — chapters 1 and 2. It explains the problem and the product. It does not require anything. **Part II** **·** What the system does — chapters 3 to 18. It prescribes behavior**. Part III** **·** What the system **is required** to do — chapters 19 to 21. Set what is checked before giving the job for delivery.

The border is stated in the text, so that the reader knows in what way he is reading.

**It correct**s **D-49**, which set the border after the chapter 4 and leaves under "not binding" two chapters that do bind: the 3, which prescribes the 148 pages and their menus, and the 4, which prescribes what the person receives and what the advisor receives.

<!-- salto -->

## The twenty-one chapters {#the-twenty-one-chapters}

<!-- tabla anchos=45.0,135.0,170.0,158.3 letra=10.0 -->
| **No** | **Chapter** | **File** | **Status** |
|---|---|---|---|
| **1** | Let's create the best lead acquisition system and digital fitness conversion in Mexico | `01-vamos-a-crear-el-mejor-sis`<br>`tema.es.md` | Written by Eric |
| **2** | How you miss today who already decided to enter a gym | `02-como-se-pierde-hoy.es.md` | Written by Eric |
| **3** | The site: how the person arrives and how they are guided | `03-el-sitio-como-llega-y-como`<br>`-se-le-guia.es.md` | Written, awaiting approval |
| **4** | What the person receives and what the advisor receives | `04-que-recibe-la-persona-y-qu`<br>`e-recibe-el-asesor.es.md` | Approved |
| **5** | The questionnaire: the only instrument | `05-el-cuestionario.es.md` | Approved |
| **6** | Who can travel through the experience | `06-quien-puede-recorrer-la-ex`<br>`periencia.es.md` | Approved |
| **7** | The objectives of the individual | `07-los-objetivos-de-la-person`<br>`a.es.md` | Approved |
| **8** | The journey on screen | `08-el-recorrido-en-pantalla.e`<br>`s.md` | Written, awaiting approval |
| **9** | Contact details and consent | `09-datos-de-contacto-y-consen`<br>`timiento.es.md` | Written, awaiting approval |
| **10** | How the Club is Chosen | `10-como-se-elige-el-club.es.m`<br>`d` | Written, awaiting approval |
| **11** | How the plan is composed | `11-como-se-compone-el-plan.es`<br>`.md` | Written, awaiting approval |
| **12** | How classes are chosen | `12-como-se-eligen-las-clases.`<br>`es.md` | Written, awaiting approval |
| **13** | The text that drafts the language model | `13-el-texto-que-redacta-el-mo`<br>`delo-de-lenguaje.es.md` | Approved with recorded adjustments |
| **14** | Data sources and their contract | `14-las-fuentes-de-datos-y-su-`<br>`contrato.es.md` | Approved with recorded adjustments |
| **15** | Daily operation | `15-la-operacion-diaria.es.md` | Approved with recorded adjustments |
| **16** | The transfer to the club | `16-el-traspaso-al-club.es.md` | Approved with recorded adjustments |
| **17** | The Codeless Update Panel | `17-el-panel-de-actualizacion-`<br>`sin-codigo.es.md` | Written for review |
| **18** | The funnel and the dashboard | `18-el-funnel-y-el-dashboard.e`<br>`s.md` | Integrated for revision |
| **19** | **What does the system do** **when something goes** **wrong?** | `19-que-hace-el-sistema-cuando`<br>`-algo-sale-mal.es.md` | Written for review |
| **20** | **The thresholds** | `20-los-umbrales.es.md` | Written for review |
| **21** | **Acceptance criteria** | `21-criterios-de-aceptacion.es`<br>`.md` | Written for review |

### Subchapters of parts 13 to 21 {#subchapters-of-parts-13-to-21}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **No** | **Subchapters** |
|---|---|
| **13** | A call per version · What can and can not · Back to failure |
| **14** | The 06:00 snapshot · Source categories · Dedicated matrices · Adding a club · Adding a class · Each source contract · The Ideal Experiences database and its contract (D-56) |
| **15** | Daily simulation · What is reviewed and who · What is done when a source does not arrive |
| **16** | What **the** club receives · **What** the advisor receives **· Direct calls: who** **answered and did not** schedule · **What happens if** the person does **not** show **· What the advisor sees when the lead already existed** |
| **17** | What can be changed without programming · Who authorizes · What is registered |
| **18** | journey and measurement · Site inputs · When each stage counts · Where the data lives and when it is updated · Connecting and attribution keys · Closing data provided by Sports World · What dashboard presents and who provides access · Scope and verification of the measurement · Conversion rates and cohorts |
| **19** | The case table: what shoots it, what the person sees and what is registered · When a source does not arrive · When the server fails · When the text comes out of range · When the connection is slow · When the script of the personal layer does not run · When the session is lost to half journey |
| **20** | Speed of appearance **and** response · Page stability **while** loading · Accessibility**,** with the four pillars · 49 tracking club pages **· How to check** **each figure and with what tool** |
| **21** | A checkable condition per chapter · With what each one is checked · What is considered delivered |

<!-- salto -->

## The Six appendices {#the-six-appendices}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Appendix** | **What it contains** | **Status** |
|---|---|---|
| **A** | Traceability: 62 change list corrections changes and where each was left | Exact pending source; written dependency control |
| **B** | Decisions implemented, one by one | Written for review |
| **C** | What was not changed and why: the four inappropriate findings | Exact pending source; written dependency control |
| **D** | Version Control | Written for review |
| **E** | Source contracts: field table by field of the thirteen sources | Written for review |
| **F** | Inventory of 148 pages**:** club 49**,** class 47**,** hub**s and** 20 blog **articles**, with title **and** address**.** **Collect new names and** **addresses from the six target** **pages (D-70) and from the** **activities for minors (D-76)** | Written for review |

The inventory goes **to** appendix, and not to the chapter 3**, because it is** a long list **and** half-read it breaks the thread**. The chapter 3 takes the logic; the appendix carries the detail.**

**The thresholds go** to **the chapter 20**. A figure to be met and an acceptance criterion are the same thing — a condition that is checked — and separating them would force them to read two pieces to know if the work is delivered.

## What remains of this document {#what-remains-of-this-document}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Piece** | **Why** | **Where he lives** |
|---|---|---|
| **Client journey** **person and map** **archetypes** | What the system needs to know about who arrives comes out of the questionnaire, not an archetype. Here would be a description that no rule consumes (D-97) | In strategy documents of the deposit |
| **Measurements,** **fonts, colours and** **components** | It is the design system that the Contract orders separately | Delivery of the design system |
| **lead scoring by** **score and routing** **by that rating** | The score is resumed when there is a history to calibrate it, according to D-99; the current journey retains the range of D-116 and D-118 | Project B · Business Development System |
| **A/B tests of** **headlines, calls to** **action and images** | The Contract does not agree to this project (D-99) | Listed if Sports World wants them |

## The inputs {#the-inputs}

They are not chapters or appendices: they are the material with which a chapter that does not yet exist will be written. They are verified with hash like the other files in the folder.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **File** | **Feeds** | **Status** |
|---|---|---|
| `insumo-entrenamien`<br>`to-acuatico.es.md` | Chapter 11, section aerobic training in the pool, and the page of that modality | Proposal, subject to validation by health professional Sports World |

## The instrument governing {#the-instrument-governing}

**CEI-01 1.6 version**, which lives in this same folder as `CEI-01-v1.6.es.html`. The questionnaire Appendix A of the Business Process Manual is an older version and is not used.

<!-- salto -->

# Editorial Standard {#editorial-standard}

**Architecture** of **Experience · revised** version. This file fixes, section by section, what **content** each one **carries** and in what form it **is written**. It serves for two different people — or the same in two different days — to write the same chapter.

It does not replace 00-estructura.es.md, which fixes the index. Here the form is fixed.

## The Five Ways of Writing {#the-five-ways-of-writing}

There are five of them and there is no sixth. Each section of the document is written in one of them, and the index below says in which.

<!-- tabla anchos=110.0,140.0,125.0,133.3 letra=10.5 -->
| **Form** | **What It Does** | **How to Write** | **That's what it looks like.** |
|---|---|---|---|
| **Tale** | Explains why something exists and what is lost today without it | Prosa cumura, without «must». Each statement carries its commercial consequence. Figures, never adjectives | "The purpose of the system is to turn the demand that does come to Sports World into scheduled and qualified visits." |
| **Rule** | Sets what the system does, mandatory | **A rule** by **sentence**, with explicit subject: system, page, menu or person. Voice active | "The top menu accompanies the person on the 148 pages and is identical in all of them." |
| **Table of cases** | Solve forks situations | Three fixed columns: condition **·** what **happens** **·** what **is** **recorded**. No empty cell | «Answer **that yes** → remains your record, with the date and time you chose.» |
| **Table of data** | Inventories, catalogues, minimum contents | Substantive, without verbs. Without explaining why: that lives in the decision log of decisions | «Premium class · description with editorial treatment · benefits · level and intensity · clubs where it is taught.» |
| **Verifiable figure** | What needs to be done to give the job for delivery | Each line brings **the** **number**, **its unit** and **the tool** with which it is **measured**. Without those three things, the line does not enter | "The main content of the page appears in 2.5 seconds or less, measured over real traffic in Search Console." |

<!-- salto -->

## The nine rules that are valid in all five ways {#the-nine-rules-that-are-valid-in-all-five-ways}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **No** | **Rule** | **Why** |
|---|---|---|
| **1** | **The system** is described by what it does (D-92). **The test** is **the** **subject** of the **phrase**, and it has three outputs: if the subject is the current problem of Sports World, the negative phrase stays, because the omission is the fact; if the subject is a state that the document declares, it stays, because the absence is what distinguishes that state from the others (D-103); if the subject is the system that is built, it is rewritten (D-101) | A sentence that lists what the system does not do forces the fact to be deduced by discarding |
| **3** | **The** document **does** not **speak** of itself. No ‘specific document’, ‘as will be seen below’, ‘this chapter is about’ | Whoever reads wants the fact, not the map of the text. |
| **4** | No **contrast invented**. No «it's not X, it's Y» or «more than X, it's Y» | It introduces an adversary that no one proposed, and the reader gets both ideas |
| **5** | **Each** term is **presented** in **its** first use, or refers to the chapter that defines it | No concept appears in the body without being previously in the glossary or code table |
| **6** | **Neu**tral **language** for people. Never "they" by default | Half of those arriving are not men. |
| **7** | Figures**, not adjective**s. “Reasonable capacity” does not work; 148 pages yes | An adjective cannot be checked |
| **8** | **Active voice, no adverbs in –** **mind, minimum of words** | ‘Processing your application’, not ‘your application is currently being processed’ |
| **9** | **No metaphors or conversational** **twists** | Executive record throughout the deposit |
| **10** | **The three normative** words must **·** **must not** **· can**, and are only used in the rules | «You must not» forbids a conduct to which you build. It never describes the system: it is covered by the 1 rule. |

**Only exception** to **the 1 rule**: the flag "Available in your club" or "Not available in your club" from the class lists per goal (D-72), because the person needs that comparison to decide.

<!-- salto -->

## What each section takes and how it is written {#what-each-section-takes-and-how-it-is-written}

### Part I · Why it exists {#part-i-why-it-exists-2}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Section** | **What's in it?** | **How to Write** |
|---|---|---|
| **1.1** This is how we're going to do it. | The system on one page: the minute, the Ideal Experience and the brief | Tale |
| **1.2** Opportunity begins before lead reaches the club | Invisibility in the search, with its figures | Confrontation + verifiable figure |
| 1.3 Sports World starts from a difficult position to replicate | The competitive position, with the organic presence table | Reporting + data table |
| **1.4** But winning the search isn't enough | What connects the click to the signature | Tale |
| **1.5** The system changes the equation between price and value | Where the Commercial Conversation Begins | Tale |
| **1.6** 148 pages cease to be a catalogue | What are the 148 gateways | Tale |
| 1.7 How we'll know it works | Commitments to your verification tool | Verifiable figure |
| **1.8** What changes for business | Where the sale is supported from here | Tale |
| **2.1** Two different searches, two different decision moments | Who seeks the brand and who seeks what he wants to achieve | Tale |
| **2.2 The Three Ways** **People with a** **Strong Intention to** **Join Are Lost** | The objective that is not met · the capacity that remains invisible · the unnecessarily long path | Tale |
| **2.3** What the product is | Ideal Experience, input and product, both recipients and where it is delivered | Tale |

<!-- salto -->

### Part II · What the system does {#part-ii-what-the-system-does-2}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.0 -->
| **Section** | **What's in it?** | **How to Write** |
|---|---|---|
| **3.1** The eleven types of page and the problem that solves each | The search intention that attends to each type, the page count and the problem that closes | Table of data |
| **3.2** What the site produces | The four pieces of the chain: questionnaire, Ideal Experience, brief, scheduled visit | Rule |
| **3.3** Top menu | The buttons fixed on the 148 pages | Rule |
| **3.4** The three states of the person | The two facts that describe it and the three states that produce it | Rule + case table |
| **3.5** The content of each page type | Where each thing lives and the minimum content type by type | Table of data |
| 3.6 The context menu | The order of the buttons, the three slots, the flag and the doors to the questionnaire | Rule + case table |
| **3.7** Menus, one by one | The menu solved for each type of page in each state, and the maximum of buttons | Table of cases |
| **3.8** What a person gets to questionnaire | What each type of page contributes to the preload | Table of data |
| **3.9** The page is the same for everyone; the menu is the personal layer | How the page is served and how it is resolved what depends on the person | Rule |
| **3.10** Blog | What search he attends and how he links to the rest | Rule |
| **4.1** One calculation, two deliveries | The single calculation and its two addressees | Rule |
| **4.2** What the person sees | The two pages of your experience, element by element | Table of data |
| **4.3** The autonomous journey | Site Actions and Recalculation of Experience | Rule |
| **4.4** What the advisor reads: the brief | The two pages of the brief, its signals and the case of the club that delivers best | Data table + case table |
| **4.5** Why the Club Goes First | The order of the recommendation and its reason | Tale |
| **5.1** Role and purpose | What CEI-01 is and where each customization comes from | Rule |
| **5.2** preload | The four categories, the two forms, how the block is composed and what makes you accept or reject | Rule + case table |
| **5.3** How the questionnaire is composed | How many questions are there in each class and when are you wondering? | Table of data |
| **5.4** The sixteen questions base | What questions each and what determines | Table of data |
| **5.5** The three conditional questions | What shoots them and what determines them | Table of cases |
| **5.6** The two questions that change the structure | The two questionss that change the form of the recommendation | Rule |
| **5.7** How questionnaire behaves on screen | Ramification, options that appear, limits and agreement with the form of treatment | Table of cases |
| **5.8** The scope of the questionnaire | What the instrument covers and why it stops there | Rule |
| **5.9** Signals travelling to brief | What an answer produces what a sign and what the advisor does with it | Table of data |
| **6.1** The legal age gate | What is asked, when and what opens up each answer? | Rule + case table |
| **6.2** The reduced route | What is asked and delivered to those who do not confirm legal age | Rule |
| **6.3** 14 to 17 years old | The age bracket and its share | Rule |
| **6.4 A Minor's** **Membership** **Contract** | How you sign up, with what signature and where | Rule |
| 6.5 Only for those who are not yet members | Who attends the lead acquisition system | Rule |
| **6.6** What data are collected from minors | The rule of collection, affirmatively | Rule |
| **7.1** Two independent axes | The two objective axes and why they are resolved separately | Rule |
| **7.2** The five emotional goals | What is each and what produces in the text | Table of data |
| **7.3** The six functional objectives | What is each and what produces in the plan | Table of data |
| **7.4** The primary and secondary objectives | How to choose and what to do with the second | Rule |
| **7.5** When the person asks to be recommended the modality | What does the system do in that case? | Rule |
| **8.1** The gateway: schedule a visit | Where is the button and what opens | Rule |
| **8.2** One Internet Address | What changes and remains during journey | Rule |
| **8.3** The six phases | What happens in each phase, one by one | Table of cases |
| **8.4** Advance and Regression | From what stage you can go back and to which | Table of cases |
| 8.5 What the browser keeps and what the server saves | The two identifiers, unique writing when closing the session and email deliveries | Rule + data table |
| **8.6** The autonomous journey | Changes during session and final delivery | Rule |
| **8.7** The error phase | What does the person see and how does they get out of there? | Table of cases |
| **9** Contact details and consent | When requested · Mailing · A single handwriting to CRM · Conciliation and Rendezvous · Simplified and comprehensive notice | Rule other than notice: data table |
| **10** How to choose the club | The principle · The four requirements and the fifth conditional · The radius of 10 km · How closeness is measured · The four modes · The flags of each alternative · The confirmation pop-up · The exceptions accepted · The reduced route | Rule, the four modes and the flags in case table |
| **11** How the plan is composed | The three blocks · B01 and B02 · Q6 and the structure of B02 · The original modality and the exceptions accepted · The six programs of each modality · Water training · B03 · Change of club and change of classes · Relationship with brief | Rule, programs in data table |
| **12** How classes are chosen | The matrix · The selection steps · Intensity filter · Contraindications · Replacement | Table of cases, matrix in data table |
| **13** The text that drafts the language model | A call per version · What can and what is fixed · Back to failure | Rule |
| **14** Data sources and your contract | The 06:00 snapshot · Categories · Dedicated matrices · Adding clubs and classes · Each source contract | Table of data, cutting and height in order |
| **15** Daily operation | Daily simulation · What is reviewed and who · What is done when a source does not arrive | Rule + case table |
| **16** Transfer to the club | What the club receives · What the advisor receives · Direct calls · If the person does not show · When the lead already existed | Rule + case table |
| **17** The Codeless Update Panel | What is changed without programming · Who authorizes · What is registered | Rule |
| **18** The funnel and dashboard | Stages · sources · keys · Sports World results · dashboard · rates and cohorts | Rule + data tables and cases |

<!-- salto -->

### Part III · What is required of the system {#part-iii-what-is-required-of-the-system}

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **Section** | **What's in it?** | **How to Write** |
|---|---|---|
| **19** What the system does when something goes wrong | A table with all the cases: what shoots it, what the person sees, what is recorded | Table of cases |
| **20** The thresholds | Speed of appearance and response · Page stability · Accessibility · 49 tracking club pages · What each figure is checked for | Verifiable figure |
| **21** Acceptance criteria | A checkable condition per chapter, with its check tool | Verifiable figure |

## What today does not meet the standard {#what-today-does-not-meet-the-standard}

**The ver**ifier **boot**ed **the 73 scanning sentences** and **remains** in **7**. The tools/registro.js verifier notes **and does** not **delete**; each paragraph is approved one by one.

### The nine sentences marked by the verifier: corrected {#the-nine-sentences-marked-by-the-verifier-corrected}

Approved by Eric on September 21. Seven were rewritten as follows, one was deleted and one was retained.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Chapter** | **What was done** |
|---|---|
| 1.3.1 | **It is conserve**d. «A catalogue of classes... are not the product: they are inputs of the plan» is the doctrine of the project and, by the test of the subject, corrects how it is sold today. It is noted in<br>`tools/registro-permitidas.txt` |
| 1.3.3 | «BES is not a channel» → «BES is a variant of care that lives within the site and within WhatsApp» |
| 1.3.3 | "This document specifies..." → "Ideal Experience is specified here for the website channel" |
| 1.3.4 | «BES **is** a proper **name and** this document does **not** develop **it» →** **deleted** |
| 5.1 | «...which is what the rest of this document specifies» → «...with its six phases» |
| 5.2.2 | «What changes is not how the club is chosen, but what comes next» → «What changes is what comes next» |
| 4.1 | "No rule in this document is triggered with a data that doesn't come out of here" → "Every rule of the system is triggered with a data that comes out of here" |
| 4.2 | «It is not an question: it does not have a number...» → «It is identified by that key, it is composed in each session with the context of that visit, and it is resolved before the first question» |
| 6 | «These objectives are not open» → «These objectives are those offered by two questions questionnaire» |

**Those nine were closed**, and the sweep continued later, chapter by chapter.

### The twelve titles written in negative: corrected {#the-twelve-titles-written-in-negative-corrected}

Approved by Eric on September 21 and applied, one commit per chapter.

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **Before** | **Now** |
|---|---|
| 1.3.1 What is not the product | **What is the product and what is a plan input?** |
| 3.2.5 What Never Appears in Your Experience | **The scope of what the person sees** |
| 5.2.3 What does not receive, and what does not keep | **The scope of the reduced route** |
| 5.5 Only for those who do not have active membership | **Only for those who are not yet members** |
| 5.6 Data on minors are not collected | **What data are collected from minors?** |
| 4.2 What we already know is not to be asked again | **preload: what we already know is confirmed** |
| 4.7.1 Questions that are not asked | **Which questions are wondering and which are solved alone** |
| 4.8 What doesn't questionnaire ask, and why | **The scope of the questionnaire** |
| 6.1 Two axes that are not mixed | **Two separate axes** |
| 7.3.2 The 2 phase · When there is preload and when there is not | **The 2 phase · When there is preload** |
| 7.4.1 Why the questionnaire cannot be answered again | **Why questionnaire is answered only once** |
| 7.5 What persists and what does not | **What the browser saves and what the server saves** |

**Only the titles were changed**. The text that goes under each one remained character by character as it was, and enters the paragraph sweep, which is approved separately.

**Two negative titles remain,** for the D-101 subject test: 1.2.1 "The target not being met" and 1.2.2 "The discipline that does exist and is not seen". They name an omission of Sports World, not a behavior of the system.

<!-- salto -->

### The paragraph sweep: where it goes {#the-paragraph-sweep-where-it-goes}

The verifier ripped out the 73 scan **sentences**. **21** of September leaves **7**, in four files.

<!-- tabla anchos=110.0,175.0,223.3 letra=10.5 -->
| **File** | **Remaining** | **What are they?** |
|---|---|---|
| `00-paginas-inicial`<br>`es.es.md` | 1 | ‘The decision log of decisions’, line of the 0.1 documentary hierarchy table. The section states which documents govern, and the decision log is one of them. |
| `01-vamos-a-crear-e`<br>`l-mejor-sistema.es`<br>`.md` | 3 | **Eric**'s text. Two describe the previous state of Sports World and stay for the test of the subject. One, "The rest of this document explains how to build it", is rule 3 |
| `02-como-se-pierde-`<br>`hoy.es.md` | 2 | **Eric**'s text. One describes the ability of Sports World that today is not translated, and stays. The other, "The result does not change according to the channel", admits affirmative form |
| `08-el-recorrido-en`<br>`-pantalla.es.md` | 1 | “The browser must not keep anything the person responds to”, rule 10 regulatory prohibition, of the same type as the four that Eric already authorized in chapter 3 |

**The five chapters 1** and **2 are Eric**'s text and **remain for resolution**. The other two are candidates for `tools/registro-permitidas.txt`, which only Eric authorizes.

### A title that speaks of the document {#a-title-that-speaks-of-the-document}

**Sol**ved. The chapter 1 is Eric's text and its 1.4 section is called "But winning the search is not enough." The previous proposal, which changed "What converts this document" to "What converts the system", was left without object.

<!-- salto -->

## How It Is Verified {#how-it-is-verified}

<!-- tabla anchos=156.0,352.3 letra=10.5 -->
| **What?** | **With what?** |
|---|---|
| Let no sentence describe the system for what it does not | `node tools/registro.js`, six find families. It points out and does not erase; the phrases that Eric authorizes live in `tools/registro-permitidas.txt`, each with the reason behind it. |
| That the files did not change after their delivery | `sha256sum` versus VERIFICACION.es.md table |
| No reference to a paragraph that does not exist | `python3 tools/remisiones.py` |
| The index reproduces the actual paragraphs of each chapter | `python3 tools/indice.py` |
| Let CEI-01 and chapters say the same | `python3 tools/instrumento.py`. When a chapter corrects an instrument rule, the setting is declared there and the program fails until CEI-01 incorporates it |

**What none of** the **four checks**: that a referral points to the **correct** section. `remisiones.py` confirms that the destination exists, and a referral to a wrong section that does exist passes the test. That is reviewed by reading.
