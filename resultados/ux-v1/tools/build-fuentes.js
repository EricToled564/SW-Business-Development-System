#!/usr/bin/env node
/**
 * Genera una página HTML por documento, para que NotebookLM pueda leerlos.
 *
 * NotebookLM sólo extrae el texto de páginas HTML: un .md servido como
 * `text/markdown` lo rechaza. Estas páginas exponen el documento íntegro dentro
 * de un bloque preformateado, sin convertir el markdown, de modo que el texto
 * que cita NotebookLM es carácter por carácter el del archivo fuente.
 *
 * Uso: node tools/build-fuentes.js
 */

const fs = require("fs");
const path = require("path");

const WEBAPP = path.join(__dirname, "..", "webapp");
const DOCS = path.join(WEBAPP, "docs");
const SALIDA = path.join(WEBAPP, "fuentes");

const escapar = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const plantilla = (id, titulo, cuerpo) => `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapar(titulo)} · Sports World</title>
<meta name="description" content="Documento del depósito de Sports World, publicado como página para su lectura automatizada.">
<style>
  body { margin: 0; padding: 2rem 1.5rem; background: #fff; color: #1d1d1b;
         font: 15px/1.6 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
  main { max-width: 60rem; margin: 0 auto; }
  h1 { font-size: 1.15rem; margin: 0 0 .25rem; }
  p.origen { margin: 0 0 2rem; color: #6b6b68; font-size: .85rem; }
  pre { white-space: pre-wrap; word-wrap: break-word; margin: 0; }
</style>
</head>
<body>
<main>
<h1>${escapar(titulo)}</h1>
<p class="origen">Documento del depósito · archivo fuente <code>docs/${id}</code></p>
<pre>${escapar(cuerpo)}</pre>
</main>
</body>
</html>
`;

fs.mkdirSync(SALIDA, { recursive: true });

// Se retiran las páginas de una corrida anterior: un documento borrado no debe
// sobrevivir como página publicada.
for (const viejo of fs.readdirSync(SALIDA).filter((f) => f.endsWith(".html"))) {
  fs.unlinkSync(path.join(SALIDA, viejo));
}

const archivos = fs.readdirSync(DOCS).filter((f) => f.endsWith(".es.md")).sort();
const generadas = [];

for (const archivo of archivos) {
  const cuerpo = fs.readFileSync(path.join(DOCS, archivo), "utf8");
  const primera = (cuerpo.match(/^#\s+(.+)$/m) || [, archivo])[1].trim();
  const nombre = archivo.replace(/\.es\.md$/, ".html");
  fs.writeFileSync(path.join(SALIDA, nombre), plantilla(archivo, primera, cuerpo));
  generadas.push(nombre);
}

// Índice de las páginas generadas, para poder cargarlas de una sola vez.
const filas = generadas
  .map((n) => `  <li><a href="./${n}">${escapar(n.replace(/\.html$/, ""))}</a></li>`)
  .join("\n");
fs.writeFileSync(
  path.join(SALIDA, "index.html"),
  plantilla("index", "Documentos del depósito", "").replace(
    "<pre></pre>",
    `<ul>\n${filas}\n</ul>`
  )
);

console.log(`${generadas.length} páginas generadas en webapp/fuentes/`);
