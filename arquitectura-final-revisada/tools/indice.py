#!/usr/bin/env python3
"""Regenera el apartado 0.3, Índice detallado, leyendo los apartados reales
de cada archivo de capítulo. Sustituye a mantenerlo a mano, donde se
desalineaba en cuanto un capítulo cambiaba un título.

Los capítulos que todavía no existen toman sus subcapítulos previstos de
00-estructura.es.md, de modo que hay una sola fuente para cada cosa.
"""
import io, re, glob, os, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(RAIZ)

PARTES = [('Parte I · Por qué existe', 1, 2),
          ('Parte II · Qué hace el sistema', 3, 17),
          ('Parte III · Qué se le exige al sistema', 18, 20)]

def escritos():
    d = {}
    for f in sorted(glob.glob('0[1-9]-*.es.md')):
        t = io.open(f, encoding='utf-8').read()
        m = re.search(r'(?m)^# Capítulo (\d+) · (.+)$', t)
        if not m:
            continue
        aps = re.findall(r'(?m)^## (\d+\.\d+ .+)$', t)
        d[int(m.group(1))] = (m.group(2).strip(), ' · '.join(aps))
    return d

def previstos():
    """00-estructura lleva dos tablas que abren igual: la de capítulos, con
    cuatro columnas, y la de subcapítulos previstos, con dos. Se distinguen
    por el número de columnas, no por el orden en que aparecen."""
    t = io.open('00-estructura.es.md', encoding='utf-8').read()
    nombres, subs = {}, {}
    for l in t.split('\n'):
        m = re.match(r'^\| \*\*(\d+)\*\* \| (.+) \|$', l)
        if not m:
            continue
        n, resto = int(m.group(1)), m.group(2)
        cols = [c.strip() for c in resto.split(' | ')]
        if len(cols) == 3:
            nombres[n] = cols[0].replace('**', '')
        elif len(cols) == 1:
            subs[n] = cols[0]
    return nombres, subs

def main():
    hechos = escritos()
    nombres, subs = previstos()
    faltan = []
    out = ['## 0.3 Índice detallado', '']
    for titulo, ini, fin in PARTES:
        out += ['### ' + titulo, '', '| № | Capítulo | Apartados |', '|---|---|---|']
        for n in range(ini, fin + 1):
            if n in hechos:
                nom, aps = hechos[n]
            elif n in nombres:
                nom, aps = nombres[n], subs.get(n, '—')
            else:
                faltan.append(n); continue
            out.append('| **%d** | %s | %s |' % (n, nom.replace('**',''), aps))
        out.append('')
    bloque = '\n'.join(out)

    p = io.open('00-paginas-iniciales.es.md', encoding='utf-8').read()
    a = p.index('## 0.3 Índice detallado')
    b = p.index('### Anexos')
    nuevo = p[:a] + bloque + p[b:]
    cambio = nuevo != p
    io.open('00-paginas-iniciales.es.md', 'w', encoding='utf-8').write(nuevo)
    print('Índice regenerado · %d capítulos escritos, %d previstos%s'
          % (len(hechos), 20 - len(hechos), '' if not faltan else ' · sin datos: %s' % faltan))
    print('El archivo %s' % ('cambió.' if cambio else 'ya estaba al día.'))
    return 0

if __name__ == '__main__':
    sys.exit(main())
