import docx, copy
from lxml import etree
W='{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
def qn(t): return W+t
def load(path='01_UX_Specification_v4_1.docx'): return docx.Document(path)
def body_children(d): return list(d.element.body)
def text_of(el): return ''.join(t.text or '' for t in el.iter(W+'t'))
def set_para_text(p, text):
    # remove existing runs, keep pPr; add one run with text
    pPr=p.find(W+'pPr')
    for r in p.findall(W+'r'): p.remove(r)
    # also remove stray hyperlink/fldSimple text runs
    r=etree.SubElement(p, W+'r')
    t=etree.SubElement(r, W+'t'); t.set('{http://www.w3.org/XML/1998/namespace}space','preserve'); t.text=text
    return p
def new_para(style=None, text=''):
    p=etree.Element(W+'p')
    if style:
        pPr=etree.SubElement(p,W+'pPr'); ps=etree.SubElement(pPr,W+'pStyle'); ps.set(W+'val',style)
    if text:
        r=etree.SubElement(p,W+'r'); t=etree.SubElement(r,W+'t')
        t.set('{http://www.w3.org/XML/1998/namespace}space','preserve'); t.text=text
    return p
def cell_set_text(tc, text):
    # clear paragraphs' runs in cell, set first paragraph text
    ps=tc.findall(W+'p')
    for p in ps[1:]: tc.remove(p)
    set_para_text(ps[0], text)

def strip_drawings(p):
    MC='{http://schemas.openxmlformats.org/markup-compatibility/2006}'
    for r in p.findall(W+'r'):
        if r.find(W+'drawing') is not None or r.find(MC+'AlternateContent') is not None:
            p.remove(r)
