#!/usr/bin/env node
/**
 * Candado de verificación con NotebookLM.
 *
 * Ningún hallazgo puede declararse corregido sin la respuesta de NotebookLM
 * que lo sustenta. El candado no depende de la disciplina de quien corrige:
 * si falta la evidencia, la corrida falla.
 *
 * Uso:  node verificacion/candado-notebooklm.js
 * Sale con código 1 si hay cualquier hallazgo sin su evidencia.
 */

const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname);
const REGISTRO = path.join(RAIZ, "hallazgos.csv");
const EVIDENCIA = path.join(RAIZ, "evidencia");
const MINIMO = 200; // caracteres: una respuesta más corta no es una respuesta

const ESTADOS = ["abierto", "corregido", "congelado", "no-aplica"];

function leerCsv(ruta) {
  const texto = fs.readFileSync(ruta, "utf8").trim();
  const lineas = texto.split("\n");
  const cabecera = partir(lineas[0]);
  return lineas.slice(1).map((linea) => {
    const celdas = partir(linea);
    return Object.fromEntries(cabecera.map((c, i) => [c, celdas[i] ?? ""]));
  });
}

// Partidor de CSV con comillas: los hallazgos traen comas dentro del texto.
function partir(linea) {
  const celdas = [];
  let actual = "";
  let dentro = false;
  for (let i = 0; i < linea.length; i++) {
    const c = linea[i];
    if (c === '"') {
      if (dentro && linea[i + 1] === '"') { actual += '"'; i++; }
      else dentro = !dentro;
    } else if (c === "," && !dentro) { celdas.push(actual); actual = ""; }
    else actual += c;
  }
  celdas.push(actual);
  return celdas;
}

function contenido(archivo) {
  if (!archivo) return null;
  const ruta = path.join(EVIDENCIA, archivo);
  if (!fs.existsSync(ruta)) return null;
  return fs.readFileSync(ruta, "utf8").trim();
}

const fallas = [];
const hallazgos = leerCsv(REGISTRO);
const conteo = { abierto: 0, corregido: 0, congelado: 0, "no-aplica": 0 };

for (const h of hallazgos) {
  const estado = (h.estado || "").trim();

  if (!ESTADOS.includes(estado)) {
    fallas.push(`${h.id}: estado "${estado}" no es válido (${ESTADOS.join(" · ")})`);
    continue;
  }
  conteo[estado]++;

  if (estado !== "corregido") continue;

  // Un hallazgo corregido exige las dos respuestas de NotebookLM:
  // la de antes, que prueba dónde estaba el problema, y la de después,
  // que prueba que ya no está.
  for (const [campo, cuando] of [["evidencia_antes", "antes"], ["evidencia_despues", "después"]]) {
    const texto = contenido(h[campo]);
    if (texto === null) {
      fallas.push(`${h.id}: declarado corregido sin la respuesta de NotebookLM de ${cuando} (${h[campo] || "sin archivo"})`);
      continue;
    }
    if (texto.length < MINIMO) {
      fallas.push(`${h.id}: la respuesta de ${cuando} tiene ${texto.length} caracteres; el mínimo son ${MINIMO}`);
    }
    // La pregunta tiene que haberse hecho con la plantilla. Sin ella NotebookLM
    // aplica su propio criterio de relevancia y omite menciones: fue lo que dejó
    // fuera un documento en la verificación de A-016.
    if (!/ROL DE AUDITOR[ÍI]A Y BARRIDO LITERAL/i.test(texto)) {
      fallas.push(`${h.id}: la evidencia de ${cuando} no contiene la plantilla obligatoria (ver plantilla-pregunta.md)`);
    }
    // Y tiene que traer la respuesta citando documentos, no un resumen.
    if (!/\.es\.md|\.html|Frase textual|frase textual/.test(texto)) {
      fallas.push(`${h.id}: la evidencia de ${cuando} no cita ningún documento ni transcribe frases`);
    }
  }
}

console.log(`Registro: ${hallazgos.length} hallazgos`);
console.log(
  `  abiertos ${conteo.abierto} · corregidos ${conteo.corregido} · ` +
  `congelados ${conteo.congelado} · no aplican ${conteo["no-aplica"]}`
);

if (fallas.length) {
  console.log(`\n${fallas.length} correcciones sin respaldo de NotebookLM:\n`);
  fallas.forEach((f) => console.log(`  ${f}`));
  console.log("\nEl candado no deja avanzar hasta que cada corrección tenga su evidencia.");
  process.exit(1);
}

console.log("\nTodas las correcciones declaradas tienen su respaldo de NotebookLM.");
