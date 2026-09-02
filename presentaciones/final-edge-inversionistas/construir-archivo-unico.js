#!/usr/bin/env node
/**
 * Empaqueta la presentación en UN SOLO archivo .html.
 *
 * index.html llama a assets/ por ruta relativa, así que enviado suelto se abre
 * sin logo y sin tipografías. Este script incrusta las cuatro fuentes y los dos
 * lockups como data URI, de modo que el archivo resultante se abre solo, sin
 * carpeta al lado y sin conexión.
 *
 *   node construir-archivo-unico.js
 *   → Final-Edge-AI-presentacion.html
 */
"use strict";

const fs = require("fs");
const path = require("path");

const DIR = __dirname;
const ORIGEN = path.join(DIR, "index.html");
const DESTINO = path.join(DIR, "Final-Edge-AI-presentacion.html");

function dataURI(rel, mime) {
  const buf = fs.readFileSync(path.join(DIR, rel));
  return `data:${mime};base64,${buf.toString("base64")}`;
}

let html = fs.readFileSync(ORIGEN, "utf8");
const incrustados = [];

// 1) Tipografías: assets/fonts/*.woff2 dentro de las reglas @font-face
for (const f of fs.readdirSync(path.join(DIR, "assets", "fonts"))) {
  if (!f.endsWith(".woff2")) continue;
  const ref = `assets/fonts/${f}`;
  if (!html.includes(ref)) continue;
  html = html.split(`url(${ref})`).join(`url(${dataURI(ref, "font/woff2")})`);
  incrustados.push(ref);
}

// 2) Lockups del logo y favicon: assets/*.svg en atributos src / href
for (const f of fs.readdirSync(path.join(DIR, "assets"))) {
  if (!f.endsWith(".svg")) continue;
  const ref = `assets/${f}`;
  if (!html.includes(`"${ref}"`)) continue;
  html = html.split(`"${ref}"`).join(`"${dataURI(ref, "image/svg+xml")}"`);
  incrustados.push(ref);
}

// 3) Los dos retratos siguen siendo externos a propósito: son los archivos que
//    Eric coloca. Se avisa dentro del documento para no perder el rastro.
const nota =
  "\n<!-- Archivo único autocontenido: tipografías y logo incrustados como data URI.\n" +
  "     Los dos retratos (assets/eric-01.jpg y assets/eric-02.jpg) siguen siendo\n" +
  "     externos: colócalos junto a este archivo, en una carpeta assets/, y el\n" +
  "     slide 11 los toma solo. Sin ellos muestra el marco con la ruta esperada.\n" +
  "     Se genera con construir-archivo-unico.js; no editar a mano. -->\n";
html = html.replace("</body>", nota + "</body>");

fs.writeFileSync(DESTINO, html);

const kb = (n) => (n / 1024).toFixed(0) + " KB";
console.log(`${path.basename(DESTINO)} — ${kb(Buffer.byteLength(html))}`);
console.log(`incrustados: ${incrustados.length} archivos`);
for (const r of incrustados) console.log("  " + r);
if (/(?:src|href)="assets\//.test(html)) {
  console.log("\nreferencias externas que quedan (esperado, sólo retratos):");
  for (const m of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)) {
    console.log("  " + m[1]);
  }
}
