#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Comprueba, una por una, que las correcciones reportadas estén hechas.

El problema que resuelve: cuando alguien dice «ya lo corregí», la única forma
de saberlo era leer el documento. Los otros programas comprueban otra cosa
—frases en negativo, remisiones a apartados inexistentes, el índice, el
instrumento—, pero ninguno comprueba que una corrección concreta siga en pie.

Cada corrección se declara aquí con lo que debe aparecer y lo que ya no debe
aparecer. El programa las verifica todas y falla si alguna se perdió, sea por
una reescritura posterior, por un revert o porque nunca se hizo.

    python3 tools/correcciones.py           las comprueba
    python3 tools/correcciones.py --lista   solo las enuncia, en español

Una corrección se agrega aquí en la misma entrega en que se hace. Una que no
esté aquí no es comprobable, y por tanto hay que leerla a mano.
"""

import glob
import hashlib
import io
import os
import re
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(RAIZ)

CAP10 = '10-como-se-elige-el-club.es.md'
CAP11 = '11-como-se-compone-el-plan.es.md'
CAP12 = '12-como-se-eligen-las-clases.es.md'
CAP3 = '03-el-sitio-como-llega-y-como-se-le-guia.es.md'
CAP4 = '04-que-recibe-la-persona-y-que-recibe-el-asesor.es.md'
CAP5 = '05-el-cuestionario.es.md'
GLOSARIO = '00-paginas-iniciales.es.md'
ESTRUCTURA = '00-estructura.es.md'
NORMA = 'NORMA-DE-REDACCION.es.md'
DECISIONES = 'decisiones.es.md'
INSUMO = 'insumo-entrenamiento-acuatico.es.md'
PERMITIDAS = 'tools/registro-permitidas.txt'

# Los capítulos, para las comprobaciones que valen en todos.
CAPITULOS = sorted(glob.glob('[0-2][0-9]-*.es.md'))

CORRECCIONES = [
    {
        'dice': 'El apartado 10.13 quedó enunciado en afirmativo, porque Eric resolvió '
                'eliminar la frase que el verificador marcaba en el índice.',
        'archivo': CAP10,
        'contiene': ['## 10.13 La respuesta original del cuestionario se conserva'],
        'no_contiene': ['La respuesta original del cuestionario no cambia'],
    },
    {
        'dice': 'Las dos frases de la contingencia de tráfico del capítulo 10 quedaron '
                'autorizadas por Eric, no borradas.',
        'archivo': PERMITIDAS,
        'contiene': ['Contingencia cuando no existe tráfico disponible',
                     'si no existe información válida de tráfico, utilizar la menor distancia por ruta.'],
    },
    {
        'dice': 'Las dos frases del capítulo 11 que marcaba el verificador quedaron '
                'autorizadas por Eric.',
        'archivo': PERMITIDAS,
        'contiene': ['Q5 no cambia el objetivo del programa',
                     'El tono narrativo derivado de Q3 debe permanecer estable porque la motivación '
                     'emocional original no cambia al seleccionar otro club.'],
    },
    {
        'dice': '«Flag» es el término oficial: ningún capítulo ni el insumo llaman «bandera» '
                'a esa marca, ni «leyenda de disponibilidad» a la de las listas de clases.',
        'archivos': CAPITULOS + [INSUMO],
        'no_contiene': ['bandera', 'banderas', 'leyenda de disponibilidad', 'Leyenda de disponibilidad'],
    },
    {
        'dice': 'El apartado 4.2.4 y el 3.6.6 llevan el término oficial en su título.',
        'archivos': [CAP4, CAP3],
        'contiene_alguno_por_archivo': {
            CAP4: ['### 4.2.4 Los flags existen para elegir y desaparecen al elegir'],
            CAP3: ['### 3.6.6 El flag de disponibilidad'],
        },
    },
    {
        'dice': 'El glosario define «Flag», «Flag de disponibilidad» y «Fuerza de la cadena».',
        'archivo': GLOSARIO,
        'contiene': ['| **Flag** |', '| **Flag de disponibilidad** |', '| **Fuerza de la cadena** |'],
    },
    {
        'dice': 'La señal de dato desactualizado se llama señal, como en el apartado 5.9, '
                'y no comparte nombre con el flag.',
        'archivos': [CAP12, INSUMO],
        'contiene': ['y la señal viaja al brief'],
        'no_contiene': ['la bandera viaja al brief'],
    },
    {
        'dice': '«Fuerza de la cadena» es el nombre único del campo: la variante anterior '
                'desapareció de todo el depósito.',
        'archivos': CAPITULOS + [INSUMO, GLOSARIO, NORMA],
        'no_contiene': ['fuerza de la derivación', 'Fuerza de la derivación', 'cadena de derivación'],
    },
    {
        'dice': 'El contrato de la matriz del apartado 11.5.1 quedó como lo reescribió Eric, '
                'con la remisión al apartado 12.1.1.',
        'archivo': CAP11,
        'contiene': ['la fuerza de la cadena: directa, de un paso o por ausencia, conforme al apartado 12.1.1.'],
        'no_contiene': ['| **Nivel o parámetros asociados a Q5** |'],
    },
    {
        'dice': 'El capítulo 12 selecciona las clases del club seleccionado, no del club ideal, '
                'porque la persona puede haberse cambiado.',
        'archivo': CAP12,
        'contiene': ['las clases del club seleccionado', 'Toma el catálogo del club seleccionado'],
        'no_contiene': ['catálogo del club ideal', 'las clases del club ideal'],
    },
    {
        'dice': 'La remisión del nombre único de cada objetivo apunta al apartado 3.1, que es '
                'donde vive la regla, y ya no al 3.1.2, que son los once tipos de página.',
        'archivo': CAP12,
        'contiene': ['el apartado 3.1 nombra'],
        'no_contiene': ['apartado 3.1.2'],
    },
    {
        'dice': 'El capítulo 12 cubre la clase que la persona acepta en la precarga, que antes '
                'no aparecía en ninguna parte del capítulo.',
        'archivo': CAP12,
        'contiene': ['## 12.6 La clase que la persona aceptó en la precarga'],
    },
    {
        'dice': 'Los cuatro puntos que el capítulo 12 dejaba abiertos quedaron resueltos por Eric: '
                'B03 lleva tres clases, la distribución con dos objetivos es dos más una, la rama '
                'individual no construye selección, y una clase incompatible entra solo con '
                'confirmación expresa.',
        'archivo': CAP12,
        'contiene': ['## 12.7 Cuántas clases componen B03',
                     'B03 debe contener **tres clases idóneas**',
                     '## 12.8 Cómo diversifica el objetivo secundario',
                     '* dos posiciones deben estar guiadas por el objetivo principal;',
                     '## 12.9 Cuando Q12 indica entrenamiento individual',
                     'el sistema no debe construir ni mostrar una selección de clases idóneas para B03',
                     '## 12.10 Elección manual de una clase que no cumple un requisito',
                     '**Las reglas fijas de seguridad del sistema no deben poder sobreescribirse mediante esta confirmación.**'],
    },
    {
        'dice': 'El capítulo 12 remite a B03 en el apartado 11.7, que es donde quedó con la '
                'estructura nueva del capítulo 11.',
        'archivo': CAP12,
        'contiene': ['conforme al apartado 11.7'],
        'no_contiene': ['alimentan B03, conforme al apartado 11.5'],
    },
    {
        'dice': 'La tabla del contrato de la matriz de clases dejó de tener una columna vacía '
                'y un renglón sin cerrar.',
        'archivo': CAP12,
        'contiene': ['**La matriz debe entregar, por clase:**'],
        'no_contiene': ['| La matriz debe entregar, por clase | |'],
    },
    {
        'dice': 'La concordancia del apartado 12.5 quedó corregida.',
        'archivo': CAP12,
        'contiene': ['Los requisitos REQ-2 y REQ-3'],
        'no_contiene': ['El requisito REQ-2 y REQ-3'],
    },
    {
        'dice': 'La opción de Q12 en el apartado 11.7 lleva las tres formas con que la persona '
                'la lee en pantalla.',
        'archivo': CAP11,
        'contiene': ['| **Entrenar solo** (o *sola*, o *sin compañía*) | Entrenamiento personal |'],
        'no_contiene': ['| **Entrenamiento individual** | Entrenamiento personal |'],
    },
    {
        'dice': 'La frase del apartado 11.4 conserva la mayúscula y el párrafo aparte con que '
                'Eric la escribió, después de que al convertirla a Markdown se le cambiaron.',
        'archivo': CAP11,
        'contiene': ['**La persona pidió agua, eligió posteriormente un club que no puede '
                     'entregarla y aceptó continuar sin ese componente.**'],
    },
    {
        'dice': 'D-45 dejó de decir que el texto redactado no se vuelve a generar, porque el '
                'apartado 11.13 y D-109 fijan lo contrario.',
        'archivo': DECISIONES,
        'contiene': ['ninguna oración del plan anterior sobrevive si dejó de ser verdadera',
                     '**Corrige la redacción anterior de esta decisión**'],
    },
    {
        'dice': 'El subcapítulo previsto del capítulo 13 dice «una llamada por versión», para '
                'que no contradiga a D-109 antes de escribirse.',
        'archivos': [ESTRUCTURA, NORMA],
        'contiene': ['Una llamada por versión'],
        'no_contiene': ['Una sola llamada'],
    },
    {
        'dice': 'El insumo acuático remite al apartado 5.9 para la regla de contingencia, no al '
                'capítulo 3, que no la contiene.',
        'archivo': INSUMO,
        'contiene': ['La regla general del apartado 5.9'],
        'no_contiene': ['La regla general del capítulo 3'],
    },
    {
        'dice': 'Los capítulos 10, 11 y 12 salieron de la tabla de subcapítulos previstos de los '
                'que faltan, porque ya están escritos.',
        'archivo': ESTRUCTURA,
        'no_contiene': ['| **10** | El principio · Los cuatro requisitos',
                        '| **11** | B01 · B02 · B03',
                        '| **12** | La matriz de clases · Los pasos del seleccionador'],
    },
]


def texto(archivo):
    return io.open(archivo, encoding='utf-8').read()


def comprueba(c):
    """Devuelve la lista de fallos de una corrección. Vacía significa que está."""
    fallos = []
    archivos = c.get('archivos') or [c['archivo']]

    for f in archivos:
        if not os.path.exists(f):
            fallos.append('falta el archivo %s' % f)
            continue
        t = texto(f)
        for frase in c.get('no_contiene', []):
            if frase.lower() in t.lower():
                fallos.append('%s todavía contiene «%s»' % (f, frase))

    # «contiene» se cumple en al menos uno de los archivos declarados, porque
    # una misma frase puede vivir en uno solo del conjunto.
    for frase in c.get('contiene', []):
        if not any(os.path.exists(f) and frase in texto(f) for f in archivos):
            fallos.append('ningún archivo contiene «%s»' % frase[:70])

    for f, frases in c.get('contiene_alguno_por_archivo', {}).items():
        t = texto(f) if os.path.exists(f) else ''
        for frase in frases:
            if frase not in t:
                fallos.append('%s no contiene «%s»' % (f, frase[:70]))

    return fallos


def hashes():
    """Coteja la tabla de integridad contra los archivos en disco."""
    t = texto('VERIFICACION.es.md')
    fallos = []
    filas = re.findall(r'^\| `([^`]+)` \| ([\d,—]+) \| `([0-9a-f]{64})` \|$', t, re.M)
    for nombre, palabras, h in filas:
        if not os.path.exists(nombre):
            fallos.append('%s está en la tabla y no en la carpeta' % nombre)
            continue
        real = hashlib.sha256(open(nombre, 'rb').read()).hexdigest()
        if real != h:
            fallos.append('%s cambió desde que se registró su hash' % nombre)
        if palabras != '—':
            reales = '{:,}'.format(len(texto(nombre).split()))
            if reales != palabras:
                fallos.append('%s dice %s palabras y tiene %s' % (nombre, palabras, reales))
    return len(filas), fallos


def main():
    # Para que canalizar la salida a `head` termine como en cualquier programa
    # de consola, en vez de levantar una excepción.
    try:
        import signal
        signal.signal(signal.SIGPIPE, signal.SIG_DFL)
    except (AttributeError, ValueError, ImportError):
        pass

    if '--lista' in sys.argv:
        print('Lo que este programa comprueba, una por una:\n')
        for i, c in enumerate(CORRECCIONES, 1):
            print('%2d. %s\n' % (i, c['dice']))
        n, _ = hashes()
        print('Y que los %d archivos de la tabla de integridad sigan dando el hash registrado.' % n)
        return 0

    total_fallos = 0
    for i, c in enumerate(CORRECCIONES, 1):
        fallos = comprueba(c)
        estado = 'ok  ' if not fallos else 'FALLA'
        print('%s  %2d. %s' % (estado, i, c['dice'].split('\n')[0][:88]))
        for f in fallos:
            print('            · %s' % f)
        total_fallos += len(fallos)

    n, fallos_hash = hashes()
    print('%s  %2d. Los %d archivos de la tabla de integridad dan el hash registrado.'
          % ('ok  ' if not fallos_hash else 'FALLA', len(CORRECCIONES) + 1, n))
    for f in fallos_hash:
        print('            · %s' % f)
    total_fallos += len(fallos_hash)

    print('')
    if total_fallos:
        print('%d comprobaciones fallaron. Cada una nombra el archivo y la frase.' % total_fallos)
        return 1
    print('%d correcciones comprobadas, todas en pie. Ninguna hay que leerla a mano.'
          % (len(CORRECCIONES) + 1))
    return 0


if __name__ == '__main__':
    sys.exit(main())
