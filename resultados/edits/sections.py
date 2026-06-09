import zipfile, re, hashlib, sys
from lxml import etree
W='{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
MC='{http://schemas.openxmlformats.org/markup-compatibility/2006}'
TXBX=W+'txbxContent'
def norm(s): return re.sub(r'\s+',' ',s).strip()
def sections(path):
    root=etree.fromstring(zipfile.ZipFile(path).read('word/document.xml'))
    for fb in list(root.iter(MC+'Fallback')):
        p=fb.getparent()
        if p is not None: p.remove(fb)
    body=root.find(W+'body')
    def own(p):
        o=[]
        for t in p.iter(W+'t'):
            e=t.getparent(); bx=False
            while e is not None:
                if e.tag==TXBX: bx=True;break
                e=e.getparent()
            if not bx: o.append(t.text or '')
        return ''.join(o)
    def alltext(el): return ''.join(t.text or '' for t in el.iter(W+'t'))
    def style(p):
        pPr=p.find(W+'pPr')
        if pPr is None: return None
        ps=pPr.find(W+'pStyle'); return ps.get(W+'val') if ps is not None else None
    secs={}; part='(front)'; key='(front)'; buf=[]
    def flush():
        if key in secs: secs[key]+=' '+' '.join(buf)
        else: secs[key]=' '.join(buf)
    for c in body:
        tag=etree.QName(c).localname
        if tag=='p':
            st=style(c); ot=norm(own(c))
            if st in ('Heading1','Heading2') and ot:
                flush(); buf=[]; part=ot; key=ot
            elif st in ('Heading3','Heading4') and ot:
                flush(); buf=[]; key=f"{part} :: {ot}"
            else:
                if ot: buf.append(ot)
            for tb in c.findall('.//'+TXBX):
                for tp in tb.findall(W+'p'):
                    tt=norm(alltext(tp))
                    if tt: buf.append(tt)
        elif tag=='tbl':
            for row in c.findall(W+'tr'):
                for cell in row.findall(W+'tc'):
                    ct=norm(alltext(cell))
                    if ct: buf.append(ct)
    flush()
    return {k:(hashlib.md5(v.encode()).hexdigest(), v) for k,v in secs.items()}
if __name__=='__main__':
    s=sections(sys.argv[1])
    for k,(h,v) in s.items(): print(h, k)
