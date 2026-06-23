# Changelog — UX Specification v4.1 → v4.2

**Date:** 2026-06-09 · **Owner:** Eric Toledano · **Editor:** Final Upgrade AI

## Summary
Adaptive questionnaire redesigned (10→16 base questions + 3 weight-loss optionals + 1 conditional follow-up),
two new individual-training pages added (as class pages) with ACSM-derived subgroups, Rule 38 created,
and the Tonificar hub renamed to Estética corporal.

## Edits (one git commit each)
| # | Locus | Change |
|---|-------|--------|
| E01 | Document Control | Added v4.2 revision row |
| E02 | Title block | Version 4.1 → 4.2; supersedes line |
| E03 | Rule 16 | Recode P→Q; refreshed inferred goal vocabulary; WL optionals |
| E04 | Rule 17 | Precedence P1>P9>P4 → Q4>Q16>class-driven goal |
| E05 | Rule 18 | Legacy 10-question block → clean 16-question table (Q1–Q16) + gender concordance |
| E06 | Rule 19 | 12-question variant → 3 WL optionals Q17–Q19 + YMYL |
| E07 | Rule 20 | Full pre-fill table rewrite (Q-codes, Estética corporal, individual-training landings) |
| E08 | Rule 21 | Q4 always multi-select max 2 (resolves P1 single-select contradiction) |
| E09 | Rule 32 | Counts 10→16 base; path A/B/C/D = 16/17/19/20 |
| E10 | Rules 23–25 | Geography code-refs PS/P8/P9 → Q15/Q16 (code-ref carve-out) |
| E11 | Rule 38 (new) | Individual-training solo pre-fill & result behavior (186 words) |
| E12 | Part 3 | Individual-training subgroup taxonomy (8 subgroups, ACSM 2026 + ACSM/ESSA 2024, Q4 mapping); hub tone→body aesthetics |
| E13 | Part 5 matrices | Recode P→Q + counts (10→16, 8→14, 12→19) across ~38 cells incl. one table |
| E14 | Part 6 | Health-disclaimer edge case — YMYL is weight-loss only (drop rehabilitation hub) |
| E15 | Appendix D | Questionnaire-codes subsection P-series → Q1–Q19 (other code systems preserved) |
| E16 | Appendix C | Update 9 stale glossary terms to Q-codes + add 8 new terms (Decision A) |
| E17 | Appendix D | Closing line v4.1 → v4.2 (Decision B) |
| E18 | Appendix D | Rules code line "Rule 1 to Rule 37" → "…38" (stale from Rule 38) |
| E19 | Hub naming | Tonificar → Estética corporal (query examples + article-tag slug) |
| E20 | Part 6 | Protected edge-case code tokens P→Q (geolocation, SEPOMEX, competing inferences) — user-approved |
| E21 | Part 5 | New behavior matrices for the two individual-training pages |
| E22 | Doc meta | Overview rule range → 38; language-note code example P10-WL → Q17 |
| E23 | Part 2 / glossary | Residual PS/P9 → Q15/Q16 (matrix note, Tu Club ideal def, P-code chip Q1–Q3) |
| E24 | Part 2 | Code-systems table questionnaire example P-series → Q1–Q19 |

## P-code → Q-code crosswalk
P1→Q4 · P2→Q14 · P3→Q9(+Q10/Q11) · P4→Q5/Q6 · P5→Q13 · P6→Q8 · P7→Q7 · P8→Q15 · P9→Q16 · P10→Q12 · P10/11/12-WL→Q17/18/19.
New: Q1 Name, Q2 Gender, Q3 Emotion.

## User decisions
- **A** — Appendix C glossary: update stale terms AND add new terms.
- **B** — Appendix D closing line: update to v4.2.
- **Page types** — the two new pages are added as CLASS pages; canonical page-type count stays 11 (Part 2 / Appendix D count untouched).
- **Part 6 / Part 2 code tokens** — update legacy P-codes in protected sections (code-ref only, prose preserved).

## §6 verification
0 unauthorized changes. 60 sections byte-identical (incl. all of Part 1, Appendix A, Appendix B, Rules 1–15, 34–37). See NON_MODIFICATION_PROOF.md.

## New top-level pages (as class pages)
- entrenamiento-con-pesas-individual → Fuerza, Hipertrofia, Potencia, Resistencia muscular (ACSM Position Stand 2026, DOI 10.1249/MSS.0000000000003897)
- entrenamiento-aerobico-individual → LISS, MICT, HIIT, SIT (ACSM/ESSA Joint Statement 2024)

## Compliance completion (edits 025-030)

Added the spec sections that were missing from the initial v4.2 build:
- Rules 39-43 (combined plan structure, class selection algorithm, replacement UI, Club Ideal card, other-clubs re-evaluation).
- Part 5: experiencia-ideal result-page matrix (block_1_on/block_2_on/block_3_on); Block 2 cardio user-facing mapping; Block 1 presentation rules.
- Part 6: five edge cases (aquatic-without-pool, dual Q12 contraindication, replacement outside Q4, club change with no viable Block 3, all-blocks-suppressed advisor handoff).
- Appendix E: Brand Voice and Tone guide.
- Appendix F: Experiencia Ideal HTML reference template (verbatim HTML/CSS).
- Appendix D: block flags, subgroup IDs, suppression reason codes, class-card slot IDs; rule range bumped to Rule 1-43.

Non-modification (§10) preserved: 60 baseline sections remain byte-identical.

## v6 alignment to demo (Addendum v6, full alignment)

Aligned the document to sw_experiencia_ideal_demo_v6_FINAL.jsx (the declared source of truth):
- Questionnaire: Q3 reworded, Q4 → 6 goals, Q5 reordered, Q12 drops Embarazo, new Q12b (pregnancy/postpartum) + Q14b (kids<12), Q17 new options.
- 6-goal subgroup model: Q4→subgroup mapping and Block 2 cardio presentation rewritten to demo accessible copy; Block 1 = six accessible names; ACSM detail kept as internal protocol reference.
- Brand Voice: 19 banned technical terms + accessible replacements + verbatim LLM system-prompt prohibitions and YMYL restrictions.
- YMYL: Rule 14b contraindications matrix (5 conditions, Q12/Q12b/Q17 mapping, 25-class hard filter, GLP-1 info exception, Otra/Otro advisor message, research basis).
- Contact-capture step (Rule 32b) + LFPDPPP privacy coverage (Appendix A).
- Appendix G (Advisor Brief) + Appendix H (single LLM call schema, adaptive YMYL context, recursive sanitization).
- Appendix F: client visual architecture, contextual safety copy, rejected elements, FitKidz three-state (40-club flag), two-page split + print CSS.
- Appendix D: Q12b/Q14b sub-codes, contraindication keys, contact fields, flow phases, advisor-brief LLM keys, FitKidz flag.

Mandatory Part B cross-section audit: resultados/v6_cross_section_audit.md.
Flagged for Eric (not auto-invented): F.1 ambiguous goal-name remap (Ganar fuerza, Mejorar condición y aguante); F.2 aerobic ACSM taxonomy purge vs keep-as-internal; F.3 14 ficha why-rewrites (no doc locus, Bucket 1).
§10: 59 sections byte-identical; only new protected change = Appendix A/Rule 36, authorized by Addendum §7.1/§12.
