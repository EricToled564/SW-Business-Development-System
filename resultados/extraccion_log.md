# Phase 1 — Normalization · Extraction Log

## Source
- File: `01_UX_Specification_v4_1.docx`
- Baseline MD5: `29eb8d2a591d27d5b310da5e4b684da9`
- Well-formed: yes (python-docx 1.2.0; module was not preinstalled, installed this session)

## A-units (v4.1) — `unidades_v41.csv`
- Total: **1244**
- By tipo: {'paragraph': 707, 'heading': 91, 'table_cell': 254, 'textbox_paragraph': 192}

## B-units (spec, from prompt §3/§4/§5) — `unidades_spec.csv`
- Total: **131**
- By tipo: {'question': 19, 'rule': 3, 'cifra': 4, 'definicion': 18, 'recomendacion': 24, 'requisito': 16, 'excepcion': 8, 'relacion_causal': 5, 'regla': 18, 'supuesto': 16}

## Extraction method
1. Parsed `word/document.xml` directly with lxml (not only `document.paragraphs`).
2. **Removed all 757 `mc:Fallback` elements before extraction.** Each DrawingML textbox
   (`wps:txbx`, in `mc:Choice`) is duplicated by a VML fallback (`v:textbox`, in `mc:Fallback`)
   carrying identical text. Extracting both doubled all textbox text
   (e.g. heading rendered as `[SW logo][SW logo]`, `YMYLYMYLZMVMZMVM`). After dedup: 174 real textboxes.
3. Walked `w:body` direct children in document order:
   - `w:p` body paragraphs → `paragraph` units (own text only, excluding nested textbox text).
   - Heading-styled paragraphs (Heading1/2 = Part/Appendix; Heading3/4 = rule/subsection) → `heading` units;
     clause auto-detected via `Rule N` regex, else subheading name.
   - Textboxes anchored in each paragraph (Choice only) → one `textbox_paragraph` unit per non-empty textbox paragraph.
   - `w:tbl` (8 tables) → one `table_cell` unit per non-empty cell, located as `table@body[i]/r[R]/c[C]`.
4. Section context (encabezado / subencabezado / clausula) carried forward; **empty headings do NOT reset context**
   (fix: the blank `Heading3` at body[498] was wrongly clearing the Rule 18 context in the first pass).

## CAVEATS — to honor REGLAS OBLIGATORIAS (verbatim citations may reflect these artifacts)
- **No page numbers recoverable.** The docx contains zero `w:lastRenderedPageBreak` and zero
  `w:br type=page` markers. `pagina` is therefore EMPTY for all A-units. Logical locators
  (`ubicacion_dentro_de_clausula`, e.g. `body[503]`, `table@body[499]/r[2]/c[4]`) are used instead and are stable.
- **OCR / fragmented-run artifacts in the source.** The v4.1 docx stores copy in many tiny runs and
  textboxes, dropping Spanish accents and inserting stray spaces:
  `¿` → `l` or `(`; `é` → `e`; `nivel` → `ni vel`; `entrenar` → `ent renar`; `P5` → `PS`.
  `texto_original` preserves the raw extracted bytes; `texto_normalizado` only collapses whitespace.
  These artifacts must be read through (not "corrected") when citing v4.1 in later phases.
- **Question copy spans multiple units.** A single legacy question (e.g. P1) is split across a
  table row, body paragraphs, AND textbox paragraphs (option lists frequently sit in textboxes).
  Phase 2 atomization must stitch these by locality (adjacent body indices) — flagged for that phase.

## Unextractable content
- None lost. All `w:t` text was captured as paragraph, textbox_paragraph, or table_cell units.
- Drawing-only/empty paragraphs (no text) were intentionally skipped (no content to inventory).
- Images/logos carry no text (e.g. `[SW logo]` is literal placeholder text, retained).
