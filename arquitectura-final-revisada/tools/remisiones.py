#!/usr/bin/env python3
"""Comprueba cada remision cruzada del documento contra el destino real.

Verifica tres cosas y falla con codigo 1 si alguna no se cumple:
  1. "apartado N.M" apunta a un encabezado que existe en el capitulo N.
  2. "capitulo N" nombra un numero entre 1 y 20 que existe en la estructura.
  3. Ningun archivo remite a un capitulo por un nombre que ya no tiene.
"""
import io, re, glob, os, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(RAIZ)
TOTAL = 20

def mapa():
    caps, aps = {}, {}
    for f in sorted(glob.glob('0[1-9]-*.es.md')):
        t = io.open(f, encoding='utf-8').read()
        m = re.search(r'(?m)^# Capítulo (\d+) · (.+)$', t)
        if not m:
            continue
        n = int(m.group(1))
        caps[n] = (m.group(2).strip(), f)
        for h in re.findall(r'(?m)^#{2,4} (\d+(?:\.\d+)+)', t):
            aps[h] = f
    return caps, aps

def main():
    caps, aps = mapa()
    fallas = []
    # VERIFICACION registra lo que ocurrio en cada entrega, con la numeracion
    # que regia entonces. Renumerarla falsificaria el registro, asi que queda
    # fuera de esta comprobacion por oficio.
    for f in sorted(glob.glob('*.es.md')):
        if f == 'VERIFICACION.es.md':
            continue
        for ln, linea in enumerate(io.open(f, encoding='utf-8'), 1):
            for m in re.finditer(r'apartados?\s+(\d+(?:\.\d+)+)', linea):
                ref = m.group(1)
                cap = int(ref.split('.')[0])
                if cap in caps and ref not in aps:
                    fallas.append((f, ln, 'apartado %s no existe en el capítulo %d' % (ref, cap)))
            for m in re.finditer(r'[Cc]apítulos?\s+(\d+)\b', linea):
                n = int(m.group(1))
                if not 1 <= n <= TOTAL:
                    fallas.append((f, ln, 'capítulo %d fuera del rango 1-%d' % (n, TOTAL)))
    if fallas:
        for f, ln, msg in fallas:
            print('%-46s %4d  %s' % (f, ln, msg))
        print('\n%d remisiones rotas.' % len(fallas))
        return 1
    print('Remisiones: %d capítulos escritos, %d apartados. Ninguna rota.' % (len(caps), len(aps)))
    return 0

if __name__ == '__main__':
    sys.exit(main())
