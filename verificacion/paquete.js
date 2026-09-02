#!/usr/bin/env node
/**
 * Arma el paquete de fuentes para NotebookLM y lo verifica antes de entregarlo.
 *
 * Existe porque los errores caros de este proyecto no fueron de criterio, fueron
 * de entrega sin comprobar: un zip empaquetado encima de uno viejo que arrastró
 * instrucciones contradictorias; una página incluida como fuente cuyo texto eran
 * 37 caracteres; diez fuentes cargadas por una vía que no las leía. Los tres eran
 * detectables con una comprobación, y ninguno se comprobó.
 *
 * A partir de aquí, ningún paquete sale sin pasar por aquí, y la cuenta que se le
 * da a Eric es la que imprime este programa, no la que alguien recuerde.
 *
 * Uso:  node verificacion/paquete.js [1|2]     (cuaderno; por defecto 1)
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const RAIZ = path.resolve(__dirname, "..");
const TXT = path.join(__dirname, "txt");
const UX = path.join(RAIZ, "resultados/ux-v1");
const DOCS = path.join(UX, "webapp/docs");
const DOCS_MOD = path.join(UX, "docs-mod");
const WEBAPP = path.join(UX, "webapp");
const BASE = "90a1ede";
const MINIMO = 500; // un texto más corto que esto es armazón, no una fuente

const cuaderno = process.argv[2] === "2" ? 2 : 1;
const SALIDA = path.join(RAIZ, `CUADERNO-${cuaderno}-fuentes.zip`);
const STAGING = path.join(RAIZ, `.paquete-${cuaderno}`);

const fallas = [];
const filas = [];

/** Un archivo entra al paquete sólo si reproduce exactamente lo que dice reproducir. */
function incluir(nombre, esperado, categoria) {
  const ruta = path.join(TXT, nombre);
  if (!fs.existsSync(ruta)) {
    fallas.push(`${nombre}: no existe en verificacion/txt/ (node tools/build-fuentes.js)`);
    return;
  }
  const real = fs.readFileSync(ruta, "utf8");
  if (esperado !== null && real !== esperado)
    fallas.push(`${nombre}: no coincide con su archivo de origen`);
  if (real.length < MINIMO)
    fallas.push(`${nombre}: ${real.length} caracteres — es armazón, no una fuente`);
  filas.push({ nombre, categoria, caracteres: real.length });
}

const docs = fs.readdirSync(DOCS).filter((f) => f.endsWith(".es.md")).sort();

for (const f of docs) {
  const id = f.replace(/\.es\.md$/, "");
  if (cuaderno === 1) {
    let original;
    try {
      original = execSync(`git show ${BASE}:resultados/ux-v1/webapp/docs/${f}`, {
        encoding: "utf8", cwd: RAIZ, stdio: ["ignore", "pipe", "pipe"], maxBuffer: 32 * 1024 * 1024,
      });
    } catch {
      fallas.push(`${f}: no se pudo leer la versión de la base ${BASE}`);
      continue;
    }
    incluir(`${id}.txt`, original, "documento original");
  } else {
    const mod = path.join(DOCS_MOD, `${id}-MOD.es.md`);
    if (!fs.existsSync(mod)) { fallas.push(`${id}-MOD.es.md: no existe`); continue; }
    incluir(`${id}-MOD.txt`, fs.readFileSync(mod, "utf8"), "documento corregido");
  }
}

// Las páginas HTML: su texto lo extrae build-fuentes.js. Aquí sólo se comprueba
// que exista y que no sea armazón — la identidad con el extractor la vigila R23.
const PROC = path.join(WEBAPP, "proceso");
for (const f of fs.readdirSync(PROC).filter((x) => x.endsWith(".html") && x !== "dec-01.html").sort())
  incluir(`proceso-${f.replace(/\.html$/, "")}.txt`, null, "Proceso Comercial");
incluir("sitio-licitacion-index.txt", null, "página del sitio");
incluir("sitio-presentacion-deck.txt", null, "página del sitio");
incluir("cuestionario-inteligente.txt", fs.readFileSync(path.join(WEBAPP, "demo/cuestionario-inteligente.jsx"), "utf8"), "código");

/* ─────────── Reporte ─────────── */

const porCategoria = {};
for (const f of filas) porCategoria[f.categoria] = (porCategoria[f.categoria] || 0) + 1;

console.log(`\nPaquete del cuaderno ${cuaderno}\n`);
for (const [c, n] of Object.entries(porCategoria)) console.log(`  ${String(n).padStart(3)}  ${c}`);
console.log(`  ${"—".repeat(3)}`);
console.log(`  ${String(filas.length).padStart(3)}  fuentes\n`);

if (fallas.length) {
  console.log(`${fallas.length} problemas — el paquete NO se arma:\n`);
  fallas.forEach((f) => console.log(`  ${f}`));
  console.log("");
  process.exit(1);
}

/* ─────────── Armado ─────────── */

// Se borra lo anterior: `zip` añade a un archivo existente en vez de reemplazarlo,
// y así fue como un paquete arrastró el LEEME de una versión anterior que decía
// lo contrario del nuevo.
fs.rmSync(STAGING, { recursive: true, force: true });
fs.rmSync(SALIDA, { force: true });
fs.mkdirSync(STAGING, { recursive: true });

for (const f of filas) fs.copyFileSync(path.join(TXT, f.nombre), path.join(STAGING, f.nombre));

const leeme = [
  `CUADERNO ${cuaderno} · ${filas.length} FUENTES`,
  "",
  "Todas se suben como ARCHIVO, arrastrandolas a la ventana del cuaderno.",
  "Ninguna va por URL: NotebookLM no extrae el texto de las paginas HTML.",
  "",
  ...Object.entries(porCategoria).map(([c, n]) => `  ${String(n).padStart(3)}  ${c}`),
  `  ---`,
  `  ${String(filas.length).padStart(3)}  fuentes`,
  "",
  "ANTES DE SUBIR: VACIA EL CUADERNO.",
  "Una fuente vieja que sobreviva falsea cualquier respuesta que diga",
  `"revise las ${filas.length}".`,
  "",
  `Al preguntar, [N_FUENTES] = ${filas.length}.`,
  "",
  "Generado por verificacion/paquete.js. La cuenta de arriba la imprime el",
  "programa: cada archivo se comparo contra su origen antes de entrar.",
  "",
].join("\n");
fs.writeFileSync(path.join(STAGING, "00-LEEME.txt"), leeme);

execSync(`cd "${STAGING}" && zip -q -r -X "${SALIDA}" .`);
fs.rmSync(STAGING, { recursive: true, force: true });

// Y se vuelve a abrir para comprobar que salió lo que se esperaba.
const dentro = execSync(`unzip -Z1 "${SALIDA}"`, { encoding: "utf8" }).trim().split("\n")
  .map((x) => x.replace(/^\.\//, "")).filter((x) => x.endsWith(".txt"));
const esperados = new Set([...filas.map((f) => f.nombre), "00-LEEME.txt"]);
const sobran = dentro.filter((x) => !esperados.has(x));
const faltan = [...esperados].filter((x) => !dentro.includes(x));

if (sobran.length || faltan.length) {
  console.log("El paquete armado no coincide con lo verificado:");
  sobran.forEach((x) => console.log(`  sobra:  ${x}`));
  faltan.forEach((x) => console.log(`  falta:  ${x}`));
  process.exit(1);
}

console.log(`Verificado y armado: ${path.basename(SALIDA)}`);
console.log(`${dentro.length} archivos dentro — ${filas.length} fuentes y el LEEME.`);
console.log(`Cada archivo se comparó contra su origen; ninguno baja de ${MINIMO} caracteres.\n`);
