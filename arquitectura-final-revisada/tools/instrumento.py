#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Coteja CEI-01, el instrumento que rige, contra las reglas de los capítulos.

Un capítulo puede corregir una regla del instrumento —así entró D-104—, y
mientras el instrumento no se actualiza los dos dicen cosas distintas. Una
lista de pendientes no lo sostiene: se olvida. Este programa la sustituye.

Cada ajuste declara qué dice hoy CEI-01, qué debe decir y qué apartado de la
Arquitectura lleva la regla vigente. El programa falla mientras alguno siga
pendiente, y deja de fallar solo cuando el instrumento lo incorpora.

    python3 tools/instrumento.py
"""

import glob
import html
import io
import os
import re
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Cada ajuste: qué decide, la frase que CEI-01 debe dejar de contener, la que
# debe contener, el apartado que lleva la regla y la decisión que la fija.
AJUSTES = [
    {
        'nombre': 'Q6 · Ambas · la alberca',
        'decision': 'D-104',
        'apartados': ['5.4.1', '5.6.2'],
        'retira': 'La alberca no se exige como amenidad',
        'incorpora': 'La alberca se exige como amenidad',
        'porque': 'Ambas promete natación individual y clases acuáticas; un club '
                  'sin alberca no entrega ninguna de las dos.',
    },
    {
        'nombre': '§5 · Control de lógica · renglón Clubes',
        'decision': 'D-104',
        'apartados': ['5.4.1'],
        'retira': 'se exige cuando el modo de entrenamiento resuelto es en agua',
        'incorpora': ['se exige cuando la modalidad elegida o resuelta es En la alberca o Ambas',
                      'requisito excluyente cuando la modalidad elegida o resuelta es En la alberca o Ambas'],
        'porque': 'El renglón solo contempla el modo resuelto, y la modalidad '
                  'también puede elegirla la persona.',
    },
    {
        'nombre': 'P0 · la declaración del bloque de precarga',
        'decision': 'D-56',
        'apartados': ['5.2'],
        'retira': None,
        'incorpora': 'P0',
        'porque': 'El apartado 5.2 declara P0 como parte del instrumento y CEI-01 '
                  'todavía no lo nombra.',
    },
]


def instrumento():
    """Devuelve (nombre del archivo, versión declarada, texto plano)."""
    encontrados = sorted(glob.glob(os.path.join(RAIZ, 'CEI-01-v*.es.html')))
    if not encontrados:
        print('No se encontró CEI-01-v*.es.html en', RAIZ)
        sys.exit(2)
    if len(encontrados) > 1:
        print('Hay más de un CEI-01 en la carpeta:')
        for f in encontrados:
            print('  ·', os.path.basename(f))
        print('El instrumento que rige es uno solo.')
        sys.exit(2)
    ruta = encontrados[0]
    version = re.search(r'CEI-01-v([\d.]+)\.es\.html$', os.path.basename(ruta)).group(1)
    t = io.open(ruta, encoding='utf-8').read()
    t = re.sub(r'<(script|style)[^>]*>.*?</\1>', ' ', t, flags=re.S | re.I)
    t = html.unescape(re.sub(r'<[^>]+>', ' ', t))
    return os.path.basename(ruta), version, re.sub(r'\s+', ' ', t)


def version_citada():
    """La versión que el capítulo 5 declara vigente."""
    ruta = os.path.join(RAIZ, '05-el-cuestionario.es.md')
    if not os.path.exists(ruta):
        return None
    m = re.search(r'La versión vigente es la \*\*([\d.]+)\*\*',
                  io.open(ruta, encoding='utf-8').read())
    return m.group(1) if m else None


def main():
    archivo, version, texto = instrumento()
    fallos = []

    citada = version_citada()
    if citada and citada != version:
        fallos.append(
            'El capítulo 5 declara vigente la versión %s y el archivo es %s.'
            % (citada, version))

    pendientes = []
    for a in AJUSTES:
        retira_sigue = a['retira'] and a['retira'].lower() in texto.lower()
        acepta = a['incorpora'] if isinstance(a['incorpora'], list) else [a['incorpora']]
        falta_incorporar = not any(f.lower() in texto.lower() for f in acepta)
        if retira_sigue or falta_incorporar:
            pendientes.append(a)

    print('Instrumento: %s' % archivo)
    print('Ajustes declarados: %d · pendientes: %d' % (len(AJUSTES), len(pendientes)))

    for a in pendientes:
        print('')
        print('  PENDIENTE · %s  (%s)' % (a['nombre'], a['decision']))
        if a['retira']:
            print('    retira      «%s»' % a['retira'])
        acepta = a['incorpora'] if isinstance(a['incorpora'], list) else [a['incorpora']]
        for f in acepta:
            print('    incorpora   «%s»' % f)
        print('    lo fija     apartado %s' % ' y '.join(a['apartados']))
        print('    porque      %s' % a['porque'])

    for f in fallos:
        print('')
        print('  FALLO · %s' % f)

    if pendientes or fallos:
        print('')
        print('Los tres ajustes se aplican en una sola versión, con su PDF.')
        print('Hasta entonces, la regla vigente es la del capítulo, no la del')
        print('instrumento, y este programa lo dice en cada corrida.')
        sys.exit(1)

    print('El instrumento y los capítulos dicen lo mismo.')


if __name__ == '__main__':
    main()
