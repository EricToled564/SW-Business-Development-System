# v6 Cross-Section Audit (Addendum Part B — mandatory)

- Generated: 2026-06-10
- Source deltas: CLAUDE_CODE_PROMPT_ADDENDUM_v6 Part A
- Single source of truth: resultados/v6_source/sw_experiencia_ideal_demo_v6_FINAL.jsx (1840 lines)
- Target document: 01_UX_Specification_v4_2.docx
- Scope chosen by Eric: **full alignment to the demo**

## Summary
- Delta domains applied: 9 (commits "v6 batch 1" … "v6 batch 8" + this audit).
- Repercussions found and fixed: questionnaire cascade (Q3/Q4/Q5/Q12/Q12b/Q14b/Q17), subgroup mapping, Block 1/2 presentation, Brand Voice, YMYL, privacy, codes.
- Items FLAGGED for Eric's decision (not auto-resolved per §0.bis "no inventar"): 3 (see §F).
- §10 protected sections: 59 byte-identical; the only new v6 change to a protected section is Appendix A/Rule 36, **authorized** by Addendum §7.1/§12.

## Per-delta audit table

| Delta | v4.2 section | Query method | Evidence | Action taken |
|---|---|---|---|---|
| 1.1 Q5 reorder | Rule 18 | grep "Suave/controlado · Moderado" | present (1) | DONE batch 1 |
| (demo) Q3 reworded | Rule 18 | grep "Desconectado/a del trabajo" | present | DONE batch 1 |
| (demo) Q4 → 6 goals | Rule 18 + tbl3/tbl13 | grep "Mejorar mi desempeño atlético" | present (3) | DONE batch 1-2 |
| (demo) Q12 drops Embarazo + Q12b | Rule 18 | grep "Q12b","Embarazo no es una condición" | present (12/1) | DONE batch 1 |
| (demo) Q14b kids<12 | Rule 18 | grep "Q14b" | present (4) | DONE batch 1 |
| (demo) Q17 new options | Rule 19 | grep "Acompañamiento nutricional" | present (1) | DONE batch 1 |
| 3.1 Block 01 subgroup names | tbl3 + Part 5 Block 1 para | grep "Crecimiento muscular con carga creciente" | present (3) | DONE batch 2 |
| 3.2 Block 02 cardio (accessible) | tbl13 | grep "ritmo conversacional" | present (6) | DONE batch 2 |
| 3.3 Aquatic blocks | Part 5 / mapping | demo AQUATIC_* captured in INVENTORY | DONE (mapping) batch 2; full aquatic catalog = data layer | partial — see §F.2 |
| 3.4 14 CLASS_FICHAS why rewrites | — | grep "CLASS_FICHAS" in doc → none | N/A — doc has no ficha catalog (Bucket 1, MASTER §14). See §F.3 |
| 2.2 Contraindications matrix | Rule 14b (new) | grep "Contraindications matrix for group classes" | present (1) | DONE batch 4 |
| 2.2 GLP-1 info / Otra-Otro msg | Rule 14b | grep "priorizar clases de fuerza preserva","advisor-review" | present | DONE batch 4 |
| 6.1-6.3 banned terms + LLM prompt | Appendix E | grep "Jerga técnica","RESTRICCIONES YMYL" | present | DONE batch 3 |
| 7 contact_capture step | Rule 32b (new) | grep "Contact-capture step (between result" | present (1) | DONE batch 5 |
| 7/12 privacy LFPDPPP | Appendix A / Rule 36 | grep "Contact-capture data (LFPDPPP)" | present (1) | DONE batch 5 (authorized §10 change) |
| 5 advisor brief | Appendix G (new) | grep "Advisor Brief Template" | present | DONE batch 6 |
| 8 single LLM call schema | Appendix H (new) | grep "Single LLM Call","validation_questions" | present | DONE batch 6 |
| 4.1 visual architecture | Appendix F | grep "Visual architecture (client view)" | present | DONE batch 7 |
| 4.2 contextual safety | Appendix F | grep "Safety section — contextual" | present | DONE batch 7 |
| 4.3 rejected elements | Appendix F | grep "Rejected elements" | present | DONE batch 7 |
| 2.1 FitKidz 3-state / 40-club flag | Appendix F + Appendix D | grep "FitKidz availability — three-state" | present | DONE batch 7-8 |
| 9 two-page split + print CSS | Appendix F | grep "Two-page split","page-break-before" | present (2) | DONE batch 7 |
| codes (Q12b,Q14b,contra,contact,brief) | Appendix D | grep "Conditional questionnaire sub-codes" | present | DONE batch 8 |

## §11 audit-dimension results
- §1 Project context: no delta conflicts with locked scope (49 clubs / $81K / 6 weeks). No edit.
- §3 Questionnaire: Q5 order matches; Q12b/Q14b documented as conditional; contact-capture marked as post-questionnaire intake (excluded from Q1-Q19). PASS.
- §4 Routing/state machine: contact_capture added between result and schedule; back from schedule → contact_capture documented (Rule 32b). PASS.
- §5 Schema/data layer: contraindication keys, FitKidz flag (separate from kids_classes), result.contact shape all in Appendix D. PASS.
- §6 YMYL: Rule 14b enumerates 5 conditions + GLP-1 exception + Otra/Otro message + research basis. PASS.
- §7 Brand Voice: 19 banned terms + accessible replacements + LLM prohibitions added. PASS.
- §8 Page blueprints: subgroup names, cardio accessible copy, visual architecture, safety, page-break boundaries present. Aquatic full catalog + ficha why = §F. PARTIAL.
- §9 LLM patterns: JSON schema, adaptive context, recursive sanitization, malformed-JSON fallback (Appendix H). PASS.
- §10 Edge cases: contraindication-driven cases + all-blocks-suppressed already in Part 6; contact validation strings in Rule 32b; FitKidz State-B in Appendix F. PASS.
- §12 Legal/privacy: contact data + health-related data covered under LFPDPPP (Appendix A). PASS.

## §F — FLAGGED for Eric's decision (per §0.bis, not auto-invented)

**F.1 — Ambiguous goal-name remap.** The demo's 6-goal Q4 set has no direct equivalent for two legacy goals still referenced in Rule 20 (pre-fill), Rules 38-43 and Part 5 matrices:
- "Ganar fuerza" (5 occurrences) — closest new goals: "Aumentar masa muscular" or "Mejorar mi desempeño atlético".
- "Mejorar condición y aguante" (11 occurrences) — closest new goal: "Mejorar mi salud cardiovascular".
Also "Mejorar mi estética corporal" (8 stale, missing "y definición muscular") and "Recuperarme de una lesión o dolor" (3 stale, missing "crónico"). These were NOT auto-replaced because the remap of the first two is a judgment call. **Decision needed:** confirm the mapping and I will sweep all loci in one commit.

**F.2 — Aerobic ACSM taxonomy purge.** The MASTER aero page taxonomy (LISS/MICT/HIIT/SIT) and the pesas ACSM detail remain in Part 3 / Rules 38-43 / Part 5: grep counts Hipertrofia 8, HIIT 20, VO2max 2, propiocepción 2. They are now flagged in the Part 3 reconciliation note as **internal protocol reference (not user-facing)**, which satisfies Addendum §3.1/§3.4 (protocol may retain jargon). A full user-facing purge would require restructuring the two ACSM landing pages into the 6-goal model. **Decision needed:** keep ACSM detail as internal protocol (current state) or fully restructure the aero/pesas pages.

**F.3 — 14 CLASS_FICHAS `why` rewrites (Addendum §3.4).** The doc has no class-ficha catalog (fichas are FUPAI Bucket 1, out of scope per MASTER §14). The rewrites apply to the demo's CLASS_FICHAS, not to any doc locus. No doc edit possible; recorded for traceability.

## Open dependencies (carry-over, Addendum §15)
1. 10 State-B clubs: missing 13 FitKidz class names pending from Gabriela.
2. Non-Les Mills fichas classified [DERIVED]; sports-medicine MD validation recommended before production YMYL.
3. Banned-terms strip on LLM output not yet implemented (sanitize() strips Q-codes only).

## §10 non-modification verification
- Baseline: resultados/01_UX_Specification_v4_1.ORIGINAL.docx
- Shared sections byte-identical: **59**; shared changed: 29; added: 56; removed: 3 (legacy Rule 18/19/21 headings, original authorized edits).
- Only new v6 change to a §10-protected section: **Appendix A :: Rule 36** — AUTHORIZED by Addendum §7.1/§12 (privacy notice must cover contact-capture + health data). The two Part 2 changes pre-date v6 (original edits 023/024). All other protected sections (Part 1, Appendix B, Rules 1-15/22-31/34-37) remain byte-identical.

## Commit log (v6)
v6 batch 1 — questionnaire · batch 2 — subgroup model · batch 3 — Brand Voice · batch 4 — contraindications · batch 5 — contact-capture + privacy · batch 6 — advisor brief + LLM schema · batch 7 — visual architecture/safety/FitKidz/two-page · batch 8 — Appendix D codes · this audit.
