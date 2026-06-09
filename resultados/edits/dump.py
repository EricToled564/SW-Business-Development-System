import zipfile, re, sys
from lxml import etree
W='{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
MC='{http://schemas.openxmlformats.org/markup-compatibility/2006}'
TXBX=W+'txbxContent'
def norm(s): return re.sub(r'\s+',' ',s).strip()
def dump(path):
    root=etree.fromstring(zipfile.ZipFile(path).read('word/document.xml'))
    for fb in list(root.iter(MC+'Fallback')):
        p=fb.getparent()
        if p is not None: p.remove(fb)
    body=root.find(W+'body'); out=[]
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
    for bi,c in enumerate(body):
        tag=etree.QName(c).localname
        if tag=='p':
            tx=norm(own(c))
            if tx: out.append(f"body[{bi}]\t{tx}")
            for ti,tb in enumerate(c.findall('.//'+TXBX)):
                for pi,tp in enumerate(tb.findall(W+'p')):
                    tt=norm(alltext(tp))
                    if tt: out.append(f"body[{bi}]/txbx[{ti}]/p[{pi}]\t{tt}")
        elif tag=='tbl':
            for ri,row in enumerate(c.findall(W+'tr')):
                for ci,cell in enumerate(row.findall(W+'tc')):
                    ct=norm(alltext(cell))
                    if ct: out.append(f"table@body[{bi}]/r[{ri}]/c[{ci}]\t{ct}")
    return out
if __name__=='__main__':
    for line in dump(sys.argv[1]): print(line)
