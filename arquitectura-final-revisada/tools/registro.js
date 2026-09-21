#!/usr/bin/env node
'use strict';

// Verificador de registro · Arquitectura de la Experiencia
//
// Busca en los capítulos las frases que explican por qué el documento está
// escrito así, qué había antes o qué podría haber en su lugar. El capítulo
// enuncia lo que el sistema hace; la razón vive en decisiones.es.md.
//
// NO BORRA NADA. Reporta archivo, línea y familia, y termina con código 1.
// Las frases que Eric autoriza expresamente se anotan en registro-permitidas.txt.

const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const PERMITIDAS = path.join(__dirname, 'registro-permitidas.txt');

const FAMILIAS = [
  {
    nombre: 'Contrafactual',
    explica: 'argumenta contra una alternativa: qué pasaría si el sistema hiciera otra cosa',
    patrones: [
      /\btendrían? que\b/i, /\bobligaría\b/i, /\bimpediría\b/i, /\bquedaría\b/i,
      /\bsacaría\b/i, /\bhabría (manera|que)\b/i, /\bno tendría\b/i, /\bperdería\b/i,
    ],
  },
  {
    nombre: 'Contraste inventado',
    explica: 'niega algo que nadie propuso para afirmar la regla',
    patrones: [
      /\bno es una?\b[^.]{0,60}:/i, /\bno son\b[^.]{0,60}:/i,
      /\bno es\b[^.]{0,40}\bsino\b/i, /\bcompite con\b/i,
      /\bno se escribió a mano\b/i, /\bno es una plantilla\b/i,
    ],
  },
  {
    nombre: 'El documento habla de sí mismo',
    explica: 'describe cómo está escrito el documento en vez de lo que hace el sistema',
    patrones: [
      /\beste documento\b/i, /\beste apartado fija\b/i, /\beste capítulo fija\b/i,
      /\bes la comprobación\b/i, /\bla regla general del sistema\b/i,
      /\bque el documento usa\b/i, /\bcomo abreviatura\b/i, /\baquí se escribe\b/i,
      /\bescrita aquí\b/i, /\bse redactó\b/i,
    ],
  },
  {
    nombre: 'Procedencia',
    explica: 'cita el registro de decisiones o el historial de edición',
    patrones: [
      /\bD-\d{2}\b/, /\bse reescrib/i, /\bse corrig/i, /\bversión anterior\b/i,
      /\bantes decía\b/i, /\ben esta entrega\b/i, /\bpendiente de aprobación\b/i,
      /\bPOR DEFINIR\b/, /\bqueda por definir\b/i, /\bla bitácora\b/i,
    ],
  },
  {
    nombre: 'Estado anterior',
    explica: 'dice qué había antes o por qué ya no está',
    patrones: [
      /\bdejan? de llamarse\b/i, /\bsolía\b/i, /\bantes de esta\b/i,
      /\bhasta ahora\b/i, /\bse retiró\b/i, /\bya no se\b/i, /\bcaduc[ao]\b/i,
    ],
  },
];

function permitidas() {
  if (!fs.existsSync(PERMITIDAS)) return [];
  return fs.readFileSync(PERMITIDAS, 'utf8')
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter((l) => l && !l.startsWith('#'));
}

function normaliza(s) {
  return s.replace(/\*+/g, '').replace(/\s+/g, ' ').trim();
}

// Parte una línea en oraciones, sin romper las celdas de una tabla.
// Se quita el marcado antes de partir: si no, «…del club.** Cada club…» no separa.
function oraciones(linea) {
  const limpia = linea.replace(/\*+/g, '').replace(/`/g, '');
  if (limpia.trimStart().startsWith('|')) {
    return limpia.split('|').map(normaliza).filter(Boolean);
  }
  return limpia.split(/(?<=[.:;])\s+(?=[A-ZÁÉÍÓÚÑ¿«¡0-9])/).map(normaliza).filter(Boolean);
}

function revisa(archivo, ok) {
  const lineas = fs.readFileSync(archivo, 'utf8').split('\n');
  const hallazgos = [];
  let enCodigo = false;

  lineas.forEach((linea, idx) => {
    if (/^\s*```/.test(linea)) { enCodigo = !enCodigo; return; }
    if (enCodigo || /^\s*#/.test(linea) || /^\s*\|?\s*-{3,}/.test(linea)) return;

    for (const frase of oraciones(linea)) {
      if (ok.some((p) => frase.includes(p) || p.includes(frase))) continue;
      for (const fam of FAMILIAS) {
        if (fam.patrones.some((p) => p.test(frase))) {
          hallazgos.push({ linea: idx + 1, familia: fam.nombre, frase });
          break;
        }
      }
    }
  });

  return hallazgos;
}

function main() {
  const ok = permitidas();
  // Dos archivos quedan fuera por oficio, y se nombran uno por uno para que la
  // exclusión sea visible: 00-estructura es el índice y registra estado; las
  // páginas iniciales explican el documento, que es justo su trabajo.
  const FUERA = new Set(['00-estructura.es.md', '00-paginas-iniciales.es.md']);
  const archivos = fs.readdirSync(RAIZ)
    .filter((f) => /^\d{2}-.*\.es\.md$/.test(f) && !FUERA.has(f))
    .sort();

  if (!archivos.length) {
    console.error('No se encontró ningún capítulo en', RAIZ);
    process.exit(2);
  }

  let total = 0;
  const ancho = 120;

  for (const f of archivos) {
    const h = revisa(path.join(RAIZ, f), ok);
    if (!h.length) continue;
    total += h.length;
    console.log(`\n${f} — ${h.length}`);
    for (const { linea, familia, frase } of h) {
      const texto = frase.length > ancho ? frase.slice(0, ancho) + '…' : frase;
      console.log(`  ${String(linea).padStart(4)}  [${familia}]`);
      console.log(`        ${texto}`);
    }
  }

  console.log('');
  if (total === 0) {
    console.log(`Registro limpio: ${archivos.length} capítulos, 0 hallazgos.`);
    process.exit(0);
  }

  console.log(`${total} frase${total === 1 ? '' : 's'} para revisión de Eric, en ${archivos.length} capítulos.`);
  console.log('');
  console.log('El verificador no borra. Cada frase se borra solo con autorización expresa;');
  console.log('las que Eric confirme como correctas se anotan en tools/registro-permitidas.txt.');
  process.exit(1);
}

main();
