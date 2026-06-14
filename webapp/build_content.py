#!/usr/bin/env python3
"""Build content.json directly from the GENESIS v1 documentation package.

Self-contained: parses the Markdown in ../resultados/v1 into navigable sections.
The output keeps a bilingual shape ({es, en}) so the app stays bilingual-ready;
Spanish is populated now, English is optional. To add English later, drop a file
named `_trans_en.json` (a list of {"id", "title", "body"}) next to this script and
re-run — no other change is needed.
"""
import json, os, re, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, 'resultados', 'v1')

# (filename, doc-category for the sidebar filter, short id prefix) — in reading order
FILES = [
    ('README.md',                     'experiencia', 'guia'),
    ('ux-spec-experiencia-ideal.md',  'experiencia', 'ux'),
    ('diagrama-de-flujo.md',          'experiencia', 'flujo'),
    ('anexo-clinico.md',              'anexos',      'clinico'),
    ('anexo-contenido-prompts.md',    'anexos',      'contenido'),
    ('anexo-ingenieria-crm.md',       'anexos',      'ingenieria'),
    ('DESIGN.md',                     'design',      'design'),
]


def slug(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    s = re.sub(r'[^a-zA-Z0-9]+', '-', s).strip('-').lower()
    return s[:48] or 'sec'


def split_sections(text):
    """Split at level-1 and level-2 ATX headings that are outside code fences."""
    fence = False
    secs, cur, pre = [], None, []
    for ln in text.split('\n'):
        if ln.lstrip().startswith('```'):
            fence = not fence
        m = None if fence else re.match(r'^(#{1,2})\s+(.*)$', ln)
        if m:
            if cur:
                secs.append(cur)
            cur = {'level': len(m.group(1)), 'title': m.group(2).strip(), 'body': []}
        elif cur is None:
            pre.append(ln)
        else:
            cur['body'].append(ln)
    if cur:
        secs.append(cur)
    if secs and any(p.strip() for p in pre):
        secs[0]['body'] = pre + [''] + secs[0]['body']
    for s in secs:
        s['body'] = '\n'.join(s['body']).strip()
    return secs


def front_matter_block(fm):
    """Render the DESIGN.md YAML front matter as a fenced, readable tokens section."""
    intro = ("Tokens de diseño en formato legible por máquina (DTCG/YAML). Son la fuente "
             "única de los valores de color, tipografía, espaciado y contraste; el cuerpo "
             "del documento los explica en prosa.")
    return intro + "\n\n```yaml\n" + fm.strip() + "\n```"


# optional English translations: list of {"id","title","body"}
trans = {}
tr_path = os.path.join(HERE, '_trans_en.json')
if os.path.exists(tr_path):
    for o in json.load(open(tr_path, encoding='utf-8')):
        trans[o['id']] = o

sections, seen = [], set()
for fname, doc, prefix in FILES:
    text = open(os.path.join(SRC, fname), encoding='utf-8').read()

    fm = None
    if text.startswith('---'):
        end = text.find('\n---', 3)
        if end != -1:
            fm = text[3:end].strip()
            text = text[end + 4:].lstrip('\n')

    secs = split_sections(text)
    if fm:
        secs.insert(1, {'level': 2,
                        'title': 'Tokens de diseño (formato legible por máquina)',
                        'body': front_matter_block(fm)})

    for s in secs:
        sid = f"{prefix}-{slug(s['title'])}"
        base, n = sid, 2
        while sid in seen:
            sid = f"{base}-{n}"; n += 1
        seen.add(sid)
        tr = trans.get(sid, {})
        sections.append({
            'id': sid, 'doc': doc, 'level': s['level'],
            'title': {'es': s['title'], 'en': tr.get('title', '')},
            'body':  {'es': s['body'],  'en': tr.get('body', '')},
        })

out = {'generated': '2026-06-14', 'lang_primary': 'es', 'count': len(sections),
       'sections': sections}
json.dump(out, open(os.path.join(HERE, 'content.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, separators=(',', ':'))

en_done = sum(1 for s in sections if s['body']['en'].strip())
print(f"sections: {len(sections)}  ·  EN populated: {en_done}/{len(sections)}")
