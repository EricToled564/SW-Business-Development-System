#!/usr/bin/env node
/**
 * Genera las páginas que lee NotebookLM: tres conjuntos, uno por cuaderno.
 *
 * NotebookLM sólo extrae el texto de páginas HTML —un .md servido como
 * `text/markdown` lo rechaza— y **no vuelve a rastrear**: cada fuente queda
 * congelada en el momento en que se carga. De ahí que las páginas se generen,
 * no se escriban, y que se regeneren en la misma entrega que el documento.
 *
 *   webapp/original/     El depósito ANTES de las correcciones de la auditoría.
 *                        Se reproduce desde el historial de git, no desde el
 *                        disco: es la instantánea contra la que se levantaron
 *                        los 88 hallazgos, y nadie puede editarla.
 *   webapp/fuentes/      El depósito VIGENTE. Crece con cada paquete corregido.
 *   webapp/comparacion/  Las dos versiones de cada documento en una sola página,
 *                        con los cambios línea por línea entre ellas.
 *
 * El tercer conjunto existe porque la pregunta final no es «¿se hicieron los
 * cambios?» sino «¿se hicieron *sólo* los cambios?». Correlacionar dos fuentes
 * separadas es justo lo que NotebookLM hace mal; leer una sola página que ya
 * trae las dos versiones y su diferencia es lo que hace bien.
 *
 * Uso: node tools/build-fuentes.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const WEBAPP = path.join(__dirname, "..", "webapp");
const DOCS = path.join(WEBAPP, "docs");
const VIGENTE = path.join(WEBAPP, "fuentes");
const ORIGINAL = path.join(WEBAPP, "original");
const COMPARACION = path.join(WEBAPP, "comparacion");
const PROCESO = path.join(WEBAPP, "proceso");
const VERIFICACION = path.join(__dirname, "..", "..", "..", "verificacion");
const SITIO = "https://erictoled564.github.io/SW-Business-Development-System";

// El estado del depósito sobre el que se hizo la auditoría de los 88 hallazgos:
// el último commit anterior a la primera corrección (f3089ec, A-016). Es la
// misma base que Eric fijó al autorizar el trabajo. No se cambia sin su palabra:
// mover la línea de partida vuelve inauditable todo lo comparado hasta aquí.
const BASE = "90a1ede";
const BASE_FECHA = "28 de agosto de 2026";

// Los cuadernos de NotebookLM, en el orden en que se usan. El tercero se crea
// al cerrar todos los paquetes.
const CUADERNOS = [
  [
    "1 · Originales",
    "Sports World Business Dev. Documentation Review Engine",
    "https://notebook.google.com/notebook/c530c174-5f8f-4dd1-84ff-5f9a02938732",
  ],
  [
    "2 · Corregidos",
    "SW Biz Dev Projected Revised Documentation",
    "https://notebook.google.com/notebook/fa78730e-927b-4d57-8ab1-adcd35c09826",
  ],
  ["3 · Verificación final", "pendiente de crear", "pendiente de crear"],
];

// DEC/SW/01 se publica como aviso, no como documento: su contenido es interno
// (ver R21 en consistencia.js). No es una fuente cargable.
const PROCESO_INTERNO = new Set(["dec-01.html"]);

const escapar = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const rutaGit = (archivo) => `resultados/ux-v1/webapp/docs/${archivo}`;

/** El documento tal como estaba en la base, leído del historial. */
function versionOriginal(archivo) {
  return execSync(`git show ${BASE}:${rutaGit(archivo)}`, {
    encoding: "utf8",
    cwd: path.join(__dirname, "..", "..", ".."),
    maxBuffer: 32 * 1024 * 1024,
  });
}

/* ─────────── Diferencia línea por línea (subsecuencia común más larga) ─────────── */

function diferencia(antes, despues) {
  const a = antes.split("\n");
  const b = despues.split("\n");
  // Tabla de la subsecuencia común más larga. El documento más grande ronda las
  // 900 líneas, así que la tabla completa es holgada y evita heurísticas que
  // podrían ocultar un cambio.
  const t = Array.from({ length: a.length + 1 }, () => new Uint32Array(b.length + 1));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      t[i][j] = a[i] === b[j] ? t[i + 1][j + 1] + 1 : Math.max(t[i + 1][j], t[i][j + 1]);

  const cambios = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    const desde = { i: i + 1, j: j + 1 };
    const quitadas = [];
    const puestas = [];
    while (i < a.length && j < b.length && a[i] !== b[j]) {
      if (t[i + 1][j] >= t[i][j + 1]) quitadas.push(a[i++]);
      else puestas.push(b[j++]);
    }
    cambios.push({ ...desde, quitadas, puestas });
  }
  if (i < a.length || j < b.length)
    cambios.push({ i: i + 1, j: j + 1, quitadas: a.slice(i), puestas: b.slice(j) });

  return cambios.filter((c) => c.quitadas.length || c.puestas.length);
}

/* ─────────── Composición de las páginas ─────────── */

const ESTILO = `
  body { margin: 0; padding: 2rem 1.5rem; background: #fff; color: #1d1d1b;
         font: 15px/1.6 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
  main { max-width: 60rem; margin: 0 auto; }
  h1 { font-size: 1.15rem; margin: 0 0 .25rem; }
  h2 { font-size: 1rem; margin: 2.5rem 0 .75rem; padding-top: 1rem; border-top: 1px solid #d8d8d4; }
  p.origen { margin: 0 0 1.25rem; color: #6b6b68; font-size: .85rem; }
  p.sello { margin: 0 0 2rem; padding: .7rem .9rem; font-size: .85rem;
            border-left: 3px solid #1d1d1b; background: #f3f3f0; }
  pre { white-space: pre-wrap; word-wrap: break-word; margin: 0; }
  .quitada { color: #8a1c1c; }
  .puesta { color: #14532d; }
  .sitio { color: #6b6b68; }
`;

const pagina = (titulo, origen, sello, cuerpo) => `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapar(titulo)} · Sports World</title>
<meta name="description" content="Documento del depósito de Sports World, publicado como página para su lectura automatizada.">
<style>${ESTILO}</style>
</head>
<body>
<main>
<h1>${escapar(titulo)}</h1>
<p class="origen">${origen}</p>
<p class="sello">${sello}</p>
${cuerpo}
</main>
</body>
</html>
`;

const tituloDe = (cuerpo, archivo) =>
  (cuerpo.match(/^#\s+(.+)$/m) || [, archivo])[1].trim();

/** Limpia una carpeta de páginas: un documento borrado no sobrevive publicado. */
function limpiar(dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const viejo of fs.readdirSync(dir).filter((f) => f.endsWith(".html")))
    fs.unlinkSync(path.join(dir, viejo));
}

[VIGENTE, ORIGINAL, COMPARACION].forEach(limpiar);

const archivos = fs.readdirSync(DOCS).filter((f) => f.endsWith(".es.md")).sort();
const generadas = [];
const resumenCambios = [];

for (const archivo of archivos) {
  const id = archivo.replace(/\.es\.md$/, "");
  const nombre = `${id}.html`;
  const vigente = fs.readFileSync(path.join(DOCS, archivo), "utf8");

  let original = null;
  try {
    original = versionOriginal(archivo);
  } catch {
    // Documento creado después de la base: no tiene versión original.
    original = null;
  }

  const titulo = tituloDe(vigente, archivo);
  const origen = `Documento del depósito · archivo fuente <code>docs/${archivo}</code>`;

  // 1 · Vigente.
  fs.writeFileSync(
    path.join(VIGENTE, nombre),
    pagina(
      `[VIGENTE] ${titulo}`,
      origen,
      "<strong>Versión VIGENTE.</strong> Es el texto en vigor del depósito, con las correcciones " +
        "de la auditoría aplicadas hasta la fecha de publicación de esta página.",
      `<pre>${escapar(vigente)}</pre>`
    )
  );

  // 2 · Original, reproducido del historial.
  if (original !== null) {
    fs.writeFileSync(
      path.join(ORIGINAL, nombre),
      pagina(
        `[ORIGINAL] ${tituloDe(original, archivo)}`,
        origen,
        `<strong>Versión ORIGINAL, anterior a las correcciones.</strong> Es el estado del documento ` +
          `en el commit <code>${BASE}</code> (${BASE_FECHA}), sobre el que se levantaron los 88 hallazgos ` +
          `de la auditoría. Se reproduce desde el historial del repositorio, no desde el disco: ` +
          `no se puede editar sin reescribir la historia de git.`,
        `<pre>${escapar(original)}</pre>`
      )
    );
  }

  // 3 · Comparación.
  const cambios = original === null ? null : diferencia(original, vigente);
  if (cambios !== null) {
    const bloques = cambios.length
      ? cambios
          .map((c) => {
            const q = c.quitadas.map((l) => `<span class="quitada">− ${escapar(l)}</span>`);
            const p = c.puestas.map((l) => `<span class="puesta">+ ${escapar(l)}</span>`);
            return `<pre>Original, línea ${c.i} · vigente, línea ${c.j}\n${[...q, ...p].join("\n")}</pre>`;
          })
          .join("\n")
      : "<pre>Sin cambios: el texto vigente es idéntico al original.</pre>";

    fs.writeFileSync(
      path.join(COMPARACION, nombre),
      pagina(
        `[COMPARACIÓN] ${titulo}`,
        origen,
        `<strong>Las dos versiones del mismo documento.</strong> Primero los cambios línea por línea ` +
          `entre el original (commit <code>${BASE}</code>, ${BASE_FECHA}) y el texto vigente; después ` +
          `cada versión íntegra. Las líneas que empiezan con <code>−</code> se retiraron; las que ` +
          `empiezan con <code>+</code> se agregaron. ` +
          (cambios.length
            ? `Este documento registra <strong>${cambios.length} ${cambios.length === 1 ? "cambio" : "cambios"}</strong>.`
            : `Este documento <strong>no registra cambios</strong>.`),
        [
          "<h2>Cambios entre el original y el vigente</h2>",
          bloques,
          "<h2>Versión ORIGINAL íntegra</h2>",
          `<pre>${escapar(original)}</pre>`,
          "<h2>Versión VIGENTE íntegra</h2>",
          `<pre>${escapar(vigente)}</pre>`,
        ].join("\n")
      )
    );
    resumenCambios.push({ id, archivo, cambios });
  }

  generadas.push(nombre);
}

/* ─────────── Las dos listas que quedan en verificacion/ ─────────── */

const proceso = fs
  .readdirSync(PROCESO)
  .filter((f) => f.endsWith(".html") && !PROCESO_INTERNO.has(f))
  .sort();

const tituloProceso = (archivo) => {
  const t = fs
    .readFileSync(path.join(PROCESO, archivo), "utf8")
    .match(/<title>([^<]*)<\/title>/);
  return t ? t[1].replace(/\s*·\s*Sports World\s*$/, "").trim() : archivo;
};

const conOriginal = generadas.filter((n) => fs.existsSync(path.join(ORIGINAL, n)));
const conComparacion = generadas.filter((n) => fs.existsSync(path.join(COMPARACION, n)));

const lista = [
  "# Fuentes que se cargan en NotebookLM",
  "",
  "Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. No se edita a mano:",
  "se rehace en cada corrida del generador, y la regla **R23** de `tools/consistencia.js` falla",
  "si alguna página no corresponde con su documento o si esta lista no las nombra todas.",
  "",
  "**NotebookLM no vuelve a rastrear:** cada fuente queda congelada en el momento en que se",
  "carga. Después de publicar un cambio hay que **volver a cargar** las fuentes afectadas, o la",
  "verificación contestará sobre texto viejo. Por eso se carga **después** de publicar, nunca antes.",
  "",
  "## Los tres cuadernos",
  "",
  "| Cuaderno | Nombre en NotebookLM | Liga |",
  "|---|---|---|",
  ...CUADERNOS.map(([n, nombre, url]) => `| **${n}** | ${nombre} | ${url.startsWith("http") ? url : "—"} |`),
  "",
  "| Cuaderno | Qué se carga | Para qué |",
  "|---|---|---|",
  `| **1 · Originales** | ${conOriginal.length} páginas de \`original/\` + ${proceso.length} del Proceso Comercial | Dice **dónde hay que hacer los cambios**. Es el depósito tal como lo leyó la auditoría. |`,
  `| **2 · Corregidos** | ${generadas.length} páginas de \`fuentes/\` + ${proceso.length} del Proceso Comercial | Al cerrar todos los paquetes: confirma que **los cambios están hechos**. |`,
  `| **3 · Verificación final** | ${conComparacion.length} páginas de \`comparacion/\` | Confirma que se hicieron **sólo** los cambios: sin omisiones y sin ediciones no autorizadas. |`,
  "",
  "Las páginas del Proceso Comercial no cambiaron desde la base, así que sirven a los cuadernos 1 y 2",
  "sin necesidad de dos versiones.",
  "",
  "El cuaderno 3 lleva una sola página por documento —con las dos versiones y su diferencia dentro—",
  "en lugar de las dos por separado. Correlacionar dos fuentes distintas es lo que NotebookLM hace",
  "mal; leer una página que ya trae la comparación hecha es lo que hace bien. Y de paso cabe en el",
  "límite de fuentes.",
  "",
  `## Cuaderno 1 · Documentos originales (${conOriginal.length})`,
  "",
  `Estado del depósito en el commit \`${BASE}\` (${BASE_FECHA}), anterior a toda corrección.`,
  "",
  ...conOriginal.map((n) => `- \`${n.replace(/\.html$/, "")}\` — ${SITIO}/original/${n}`),
  "",
  `## Cuaderno 2 · Documentos vigentes (${generadas.length})`,
  "",
  ...generadas.map((n) => `- \`${n.replace(/\.html$/, "")}\` — ${SITIO}/fuentes/${n}`),
  "",
  `## Cuaderno 3 · Comparación original contra vigente (${conComparacion.length})`,
  "",
  ...conComparacion.map((n) => `- \`${n.replace(/\.html$/, "")}\` — ${SITIO}/comparacion/${n}`),
  "",
  `## Proceso Comercial (${proceso.length}) · cuadernos 1 y 2`,
  "",
  ...proceso.map((n) => `- ${tituloProceso(n)} — ${SITIO}/proceso/${n}`),
  "",
];

fs.writeFileSync(path.join(VERIFICACION, "fuentes.md"), lista.join("\n"));

/* ─────────── El registro de cambios, para poder detectar los no autorizados ─────────── */

const conCambios = resumenCambios.filter((r) => r.cambios.length);
const totalCambios = conCambios.reduce((a, r) => a + r.cambios.length, 0);

const cambios = [
  "# Cambios del depósito desde la base de la auditoría",
  "",
  "Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. Es el registro de **toda**",
  `diferencia entre el commit \`${BASE}\` (${BASE_FECHA}) y el texto vigente, línea por línea.`,
  "",
  "Sirve para lo que el cuaderno 3 tiene que confirmar: que los cambios hechos son exactamente",
  "los autorizados, ni uno más. Una edición que no aparezca aquí no ocurrió; una que aparezca",
  "aquí y no corresponda a un hallazgo cerrado es una edición no autorizada.",
  "",
  `**${conCambios.length} de ${resumenCambios.length} documentos cambiaron**, con ${totalCambios} ${totalCambios === 1 ? "cambio" : "cambios"} en total.`,
  "",
  ...conCambios.flatMap((r) => [
    `## ${r.archivo} — ${r.cambios.length} ${r.cambios.length === 1 ? "cambio" : "cambios"}`,
    "",
    ...r.cambios.flatMap((c) => [
      `**Original, línea ${c.i} · vigente, línea ${c.j}**`,
      "",
      "```diff",
      ...c.quitadas.map((l) => `- ${l}`),
      ...c.puestas.map((l) => `+ ${l}`),
      "```",
      "",
    ]),
  ]),
  "## Documentos sin cambios",
  "",
  ...resumenCambios.filter((r) => !r.cambios.length).map((r) => `- \`${r.archivo}\``),
  "",
];

fs.writeFileSync(path.join(VERIFICACION, "cambios.md"), cambios.join("\n"));

console.log(`${generadas.length} páginas vigentes en webapp/fuentes/`);
console.log(`${conOriginal.length} páginas originales en webapp/original/ (base ${BASE})`);
console.log(`${conComparacion.length} páginas de comparación en webapp/comparacion/`);
console.log(`Lista de fuentes por cuaderno en verificacion/fuentes.md`);
console.log(`${conCambios.length} documentos con cambios (${totalCambios} en total) en verificacion/cambios.md`);
