"""D-120 on the English source (14 Oct 2026). Line edits are located by a unique fragment; nothing is applied blindly.

Usage: python3 editar_en.py arquitectura.en.md arquitectura.en.md
Record of how D-120 was applied to the 6 October edition; not meant to be run again.
"""
import re, sys

src, dst = sys.argv[1], sys.argv[2]
L = open(src, encoding="utf-8").read().split("\n")


def find(frag):
    hits = [i for i, l in enumerate(L) if frag in l]
    if len(hits) != 1:
        sys.exit(f"expected 1 line, found {len(hits)}: {frag!r}")
    return hits[0]


def setline(frag, new):
    """Replace the whole line containing frag (None deletes it)."""
    i = find(frag)
    if new is None:
        del L[i]
    else:
        L[i] = new


def sub(frag, old, new):
    i = find(frag)
    if L[i].count(old) != 1:
        sys.exit(f"substring {old!r} not unique in line: {L[i][:120]}")
    L[i] = L[i].replace(old, new)


def cut(start_frag, end_frag):
    a, b = find(start_frag), find(end_frag)
    assert a < b
    del L[a:b]


def insert_after(frag, lines):
    i = find(frag)
    L[i + 1:i + 1] = lines


# Cover and front matter
setline("<!-- fecha-edicion: 2026-10-06 -->", "<!-- fecha-edicion: 2026-10-14 -->")
setline("Edition dated", None) if any("Edition dated" in l for l in L) else None
setline("Integrated English edition - October 6, 2026", "Canonical English edition - 14 October 2026")
sub("Current basis: D-119 and CEI-01 version 1.6", "D-119 and CEI-01 version 1.6", "D-120 and CEI-01 version 1.7")
for i, l in enumerate(L[:15]):
    if l.strip() in ("Version for review", "Review version", "Version for revision"):
        L[i] = "Single source of truth"
setline("| Version | Editorial close for revision · D-119 |", "| Version | Single source of truth · D-120 |")
setline("| Instrument | CEI-01 1.6 version |", "| Instrument | CEI-01 version 1.7 |")
sub("The chapters are based on the consolidated set incorporating D-119 of October 5.",
    "The chapters are based on the consolidated set incorporating D-119 of October 5. CEI-01 v1.6 remains the sole instrument.",
    "The chapters are based on the consolidated set incorporating D-119 of October 5 and decision D-120 of October 14. CEI-01 v1.7 remains the sole instrument. **Since D-120, this document, in Spanish and in English, is the single source of truth for the Experience Architecture.**")
sub("| D-33 to D-119 decisions and replacements |", "D-33 to D-119", "D-33 to D-120")
sub("[CEI-01 v1.6](#ideal-experience-questionnaire-cei-01)", "[CEI-01 v1.6]", "[CEI-01 v1.7]")
sub("| CEI-01 | The Ideal Experience Questionnaire, version 1.6.", "version 1.6", "version 1.7")
sub("| REQ-# | REQ-1–REQ-4 |", "REQ-1–REQ-4", "REQ-1–REQ-3")

# Chapter 4
setline("-  **It does** not have **appropriate classes** for **prenatal**", None)

# Chapter 5
sub("The current version is **the 1.6**", "**the 1.6**", "**1.7**")
setline("This second case adds **a fifth requirement** to the four set by the questionnaire.",
        "This second case adds **a fourth requirement** to the three set by the questionnaire.")
sub("| **Q2** | How you prefer to go to her |", "neutral**.** It also enables the prenatal option of Q14**. It**", "neutral**.** **It**")
setline("### 5.4.1 The four requirements set by the questionnaire {#5-4-1-the-four-requirements-set-by-the-questionnaire}",
        "### 5.4.1 The three requirements set by the questionnaire {#5-4-1-the-three-requirements-set-by-the-questionnaire}")
setline("| Prenatal or postpartum programmes | Classes suitable for these periods", None)
setline("The fourth requirement is **pool**.", "The third requirement is the **pool**.")
setline("Prenatal or postpartum and low-impact class preferences must also activate the contraindications matrix.",
        "The low-impact class preference must also activate the contraindications matrix.")
setline("| **Prenatal or postpartum** **programmes** | When Q2 is “Feminine” |", None)
sub("Medical conditions, pregnancy and postpartum as clinical conditions, treatments,",
    "Medical conditions, pregnancy and postpartum as clinical conditions, treatments,", "Medical conditions, treatments,")
i = find("You must not infer from it an injury, pregnancy, postpartum, illness or any other health condition.")
L[i] = "You must not infer from it an injury, an illness or any other health condition."
# the Q14 list in 5.8 and the requirement list in 10.1 share the same bullet text
hits = [k for k, l in enumerate(L) if l.strip() in ("-  prenatal or postpartum programmes;",)]
assert len(hits) == 2, hits
for k in reversed(hits):
    del L[k]

# Chapter 10
setline("## 10.2 The four requirements {#10-2-the-four-requirements}", "## 10.2 The three requirements {#10-2-the-three-requirements}")
setline("| **REQ-3** | Classes suitable for prenatal or postpartum periods", None)
sub("| **REQ-4** | Verified activities for children under 13 years |", "| **REQ-4** |", "| **REQ-3** |")
setline("These four requirements must be used to determine which clubs can fully satisfy what the person stated.",
        "These three requirements must be used to determine which clubs can fully satisfy what the person stated.")
cut("### 10.2.3 REQ-3 · Prenatal or postpartum", "### 10.2.4 REQ-4 · Activities for minors")
setline("### 10.2.4 REQ-4 · Activities for minors {#10-2-4-req-4-activities-for-minors}",
        "### 10.2.3 REQ-3 · Activities for minors {#10-2-3-req-3-activities-for-minors}")
setline("## 10.3 The fifth conditional requirement {#10-3-the-fifth-conditional-requirement}",
        "## 10.3 The fourth conditional requirement {#10-3-the-fourth-conditional-requirement}")
setline("There is a fifth requirement that does not belong to the fixed REQ-# family.",
        "There is a fourth requirement that does not belong to the fixed REQ-# family.")
setline("-  REQ-3 determines that there must be an prenatal or postpartum solution;", None)
setline("-  REQ-4 determines that there must be the corresponding service for minors;",
        "-  REQ-3 determines that there must be the corresponding service for minors;")
setline("The fifth requirement of P0 must also count when it is active.", "The fourth requirement of P0 must also count when it is active.")
setline("| REQ-3 · Prenatal or postpartum |", None)
sub("| REQ-4 · Activities for minors |", "| REQ-4 ·", "| REQ-3 ·")
cut("### 10.10.3 Example · Prenatal or postpartum", "### 10.10.4 Example · Activities for minors")
setline("### 10.10.4 Example · Activities for minors {#10-10-4-example-activities-for-minors}",
        "### 10.10.3 Example · Activities for minors {#10-10-3-example-activities-for-minors}")
setline("### 10.10.5 Example · Class confirmed in P0 {#10-10-5-example-class-confirmed-in-p0}",
        "### 10.10.4 Example · Class confirmed in P0 {#10-10-4-example-class-confirmed-in-p0}")
sub("according to the 10.10.5 section.", "the 10.10.5 section", "the 10.10.4 section")

# Chapter 12
setline("-  if it is suitable for prenatal or postpartum periods;", None)
sub("Q14, when declaring low impact or prenatal/postpartum, according to section 12.4", "low impact or prenatal/postpartum", "low impact")
sub("**When Q14 declares low impact or prenatal/postpartum, the matrix", "low impact or prenatal/postpartum", "low impact")
sub("the qualification of aptitude for low impact and for prenatal or postpartum is one of the fields",
    "for low impact and for prenatal or postpartum is", "for low impact is")
i = find("on this **rule**. A club meets ‘low impact programs’ or ‘prenatal or postpartum programs’ when")
L[i] = L[i].replace("**The REQ-2** and **REQ-3 requirements** of **Chapter 10 depend** on this **rule**. A club meets ‘low impact programs’ or ‘prenatal or postpartum programs’ when",
                    "**The REQ-2 requirement of Chapter 10 depends on this rule.** A club meets ‘low impact programs’ when")
assert "prenatal" not in L[i], L[i][:200]
i = find("REQ-2 or REQ-3")
L[i] = L[i].replace("REQ-2 or REQ-3", "REQ-2")

# Chapter 13
setline("**The model must not convert a preference for low-impact or prenatal programs into a diagnosis, injury, or pregnancy claim.**",
        "**The model must not convert a preference for low-impact programs into a diagnosis or an injury.**")

# Chapter 14 and Annex E
setline("The matrix must comply with the 12.1 contract. The aptitude for low impact and for prenatal or postpartum periods must be part of the same matrix.",
        "The matrix must comply with the 12.1 contract. The aptitude for low impact must be part of the same matrix.")
setline("| **Prenatal or postpartum** | Class fitness for that preference |", None)
sub("The evaluation of low impact and prenatal or postpartum must cross", "low impact and prenatal or postpartum", "low impact")
sub("The calculation must evaluate low-impact and prenatal or postpartum requirements", "low-impact and prenatal or postpartum requirements", "low-impact requirements")
sub("| Current CEI-01 v1.6 |", "v1.6", "v1.7")

# Decision log
sub("This addendum records D-33 through D-119.", "D-33 through D-119", "D-33 through D-120")
sub("**The current number**ing **is that** of **D-119**", "**D-119**", "**D-120**")
insert_after("in: index, editorial standard, chapters 3, 8, 9, 14, 15, 16, 17 and 18 and references to 19 pendings to 21.", [
    "",
    "### D-120 · Q14 keeps three options and the document becomes canonical {#d-120-q14-keeps-three-options-and-the-document-becomes-canonic}",
    "",
    "**Eric's instruction · 14 October 2026:** “once removed, canonise it as the single source of truth”.",
    "",
    "**Q14 keeps three options:** **Low impact programmes**, **Activities for children aged 3 months to 13 years** —conditional on Q13— and **None of the above**. The other conditional option is withdrawn, together with its club requirement, its flag, its confirmation example and its field in the class matrix. **Q2 governs grammatical agreement only** and no longer conditions any Q14 option.",
    "",
    "The questionnaire sets three requirements: **REQ-1** pool, **REQ-2** low impact and **REQ-3** activities for minors. The class confirmed in P0 is the **fourth requirement**, conditional. Sections 10.2.3, 10.10.3 and 10.10.4 are renumbered accordingly. **CEI-01 moves to version 1.7.**",
    "",
    "**This document, in Spanish and in English, is the single source of truth for the Experience Architecture.** Its source text lives in the repository and the PDFs are generated from it. Every derived piece —site, questionnaire, brief, demo and portal documents— is corrected against this document, never the other way round.",
    "",
    "**Lands in:** front matter and chapters 4, 5, 10, 12, 13 and 14; Annexes D and E; CEI-01. **Replaces** in D-114 the mention of Q2 as a condition of the Q14 options on the reduced route. **Retains D-119.**",
])

# CEI-01
setline("| **Version** | **1.6 · October 5 corrected copy of 2026** |", "| **Version** | **1.7 · 14 October 2026** |")
setline("| Replaces | 1.5 version |", "| Replaces | Version 1.6 |")
setline("| What changed | Q8 collects possible days and Q17 duration by session.",
        "| What changed | D-120: Q14 keeps three options —Low impact programmes, Activities for children aged 3 months to 13 years and None of the above—. Q2 governs grammatical agreement only. |")
sub("No diagnosis, injury, pregnancy, treatments, medications,", "injury, pregnancy, treatments", "injury, treatments")
setline("Authorized use. Grammatical agreement and the condition for the prenatal/postpartum option in Q14.",
        "Authorized use. Grammatical agreement. It is never used to assign an advisor or infer identity or a condition.")
setline("-  Pre*natal or* postpart*um (conditional) programmes*", None)
setline("**Authorized use**. Declar**ed** preferences. No **diagnosis, pregnancy or minor data are inferred.**",
        "**Authorized use**. Declared preferences. **No diagnosis or data on minors are inferred.**")
setline("-  ‘Prenatal or postpartum programmes’ is shown **only** if **Q2** is **‘Fe**male’.", None)
setline("-  **Reduced route**. As Q2 and Q13 are not asked, Q14 must only show",
        "-  **Reduced route**. As Q13 is not asked, Q14 must only show **“Low impact programmes”** and **“None of the above”**.")
sub("| 6 | Q14 · Preferences | Show only Low Impact and None of the above, because Q2 and Q13 do not exist on this route |",
    "because Q2 and Q13 do not exist", "because Q13 does not exist")
sub("Complete route: always low impact or none; prenatal/postpartum only with female Q2; activities for minors",
    "prenatal/postpartum only with female Q2; ", "")
insert_after("| **Version** | **What changed** |", [])  # presence check only
i = find("| 1.6 · corrected copy | 5 October 2026:")
L.insert(i, "| 1.7 | 14 October 2026 · D-120: Q14 keeps three options —Low impact programmes, Activities for children aged 3 months to 13 years and None of the above—. Q2 governs grammatical agreement only. |")
sub("| **REQ-#** | `REQ-1`... REQ-4 |", "REQ-4", "`REQ-3`")

# Document structure and Annex D
sub("**D-119** integrates the funnel and dashboard as chapter **18**",
    "measurement continuity after transfer.",
    "measurement continuity after transfer. **D-120** leaves Q14 with three options and makes this document the single source of truth.")
setline("**CEI-01 1.6 version**, which lives in this same folder as `CEI-01-v1.6.es.html`.",
        "**CEI-01 version 1.7**, contained in this same document. The questionnaire in Appendix A of the Business Process Manual is an older version and is not used.")
sub("The four requirements and the fifth conditional", "The four requirements and the fifth conditional", "The three requirements and the fourth conditional")
i = find("| Integrated Funnel | D-119 · October 5 |")
j = i + 1
while L[j].startswith("|"):
    j += 1
L.insert(j, "| Single source of truth | D-120 · 14 October | Q14 with three options; source text in the repository and PDFs generated from it |")

t = "\n".join(L)
open(dst, "w", encoding="utf-8").write(t)
left = [m.group(0) for m in re.finditer(r"(?i)[^\n]{0,70}(prenatal|postpart|pregnan|post-partum)[^\n]{0,70}", t)]
print("remaining mentions:", len(left))
for x in left:
    print("  ", x)
