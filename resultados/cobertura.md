# Phase 5 — Coverage Audit · `cobertura.md` (FINAL, post-decisions)

Source: `CONSOLIDADO.csv` (882 mappings). User decisions A (glossary: update + add) & B (App. D footer: update) applied.

## Mapping totals
| categoria | count |
|---|---|
| COMPATIBLE_NO_EDIT | 444 |
| REQUIERE_EDIT | 98 |
| REQUIERE_REEMPLAZO | 134 |
| REQUIERE_ELIMINACION | 0 |
| AMBIGUA | 0 |
| NUEVA_AFIRMACION_A_AGREGAR | 206 |

## Checks
- Check 1 — all 673 toca=true v4.1 claims mapped: **PASS**
- Check 2 — all 212 spec content-claims covered: **PASS**
- Check 3 — all §5.1 hypothesis loci referenced: **PASS**
- Check 4 — no AMBIGUA: **PASS**
- Check 5 — no edit on §6-protected section: **PASS**

## OVERALL: PASS — cleared for Phase 6

## §5.1 locus coverage
| locus | mappings |
|---|---|
| Document Control table | 1 |
| Rule 16 | 99 |
| Rule 17 | 18 |
| Rule 18 | 196 |
| Rule 19 | 184 |
| Rule 20 | 37 |
| Rule 21 | 4 |
| Rules 22-31 | 121 |
| Rule 32 | 21 |
| Rule 33 | 121 |
| Rule 38 | 7 |
| Part 3 IA | 73 |
| Part 5 matrices | 275 |
| Part 6 edge cases | 23 |
| Appendix D | 19 |
| Hub naming | 37 |

## Resolved decisions
- **Decision A (Appendix C glossary):** Update the 9 questionnaire-stale terms AND add new terms (LISS/MICT/HIIT/SIT, individual-training subgroup, gender concordance, XOR, Estética corporal). → edits E16.
- **Decision B (Appendix D closing line):** Update "End of UX Specification v4.1." → "...v4.2." → edit E17.

## §6 carve-out (permitted, listed for transparency)
- Code-ref-only edits on Rules 22-31/33 (text prose preserved): allowed by §6.
