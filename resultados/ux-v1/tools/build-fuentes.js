#!/usr/bin/env node
/**
 * Genera las páginas que lee NotebookLM: dos grupos, uno por cuaderno.
 *
 * NotebookLM sólo extrae el texto de páginas HTML —un .md servido como
 * `text/markdown` lo rechaza— y **no vuelve a rastrear**: cada fuente queda
 * congelada en el momento en que se carga.
 *
 *   webapp/original/  GRUPO 1. El depósito ANTES de toda corrección, reproducido
 *                     desde el historial de git, no desde el disco. Es la
 *                     instantánea contra la que se levantaron los 88 hallazgos.
 *                     No se edita nunca.
 *   webapp/mod/       GRUPO 2. Un archivo por documento con el mismo nombre y el
 *                     sufijo -MOD. Arranca como copia exacta del original y
 *                     recibe, hallazgo por hallazgo, las correcciones que indica
 *                     NotebookLM. Es donde se trabaja.
 *
 * Las dos versiones **nunca se escriben juntas en una misma página**: la
 * verificación final se hace comparando pares de fuentes independientes, para
 * que no dependa de que quien las transcribió no se haya equivocado.
 *
 * Uso: node tools/build-fuentes.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const UX = path.join(__dirname, "..");
const WEBAPP = path.join(UX, "webapp");
const DOCS = path.join(WEBAPP, "docs");
const DOCS_MOD = path.join(UX, "docs-mod");
const ORIGINAL = path.join(WEBAPP, "original");
const MOD = path.join(WEBAPP, "mod");
const PROCESO = path.join(WEBAPP, "proceso");
const RAIZ = path.join(UX, "..", "..");
const VERIFICACION = path.join(RAIZ, "verificacion");
const TXT = path.join(VERIFICACION, "txt");
const SITIO = "https://erictoled564.github.io/SW-Business-Development-System";

// El estado del depósito sobre el que se hizo la auditoría de los 88 hallazgos:
// el último commit anterior a la primera corrección. Es la misma base que Eric
// fijó al autorizar el trabajo. No se mueve sin su palabra: cambiar la línea de
// partida vuelve inauditable todo lo comparado hasta aquí.
const BASE = "90a1ede";
const BASE_FECHA = "28 de agosto de 2026";

// Los cuadernos de NotebookLM. El tercero se crea al cerrar todos los paquetes.
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
  [
    "3 · Verificación por pares",
    "SW Biz Dev Documentation Review Comparison",
    "https://notebook.google.com/notebook/a660eed3-0e54-4606-82a6-6633e296c126",
  ],
];

// Las páginas del sitio que llevan contenido propio y por tanto son auditables.
// Se cargan tal como están publicadas: NotebookLM extrae su texto sin que nadie
// las transcriba. Quedan fuera las que son sólo armazón —el visor, el redirector
// de la presentación y las dos del demo—, porque su contenido lo pinta JavaScript
// y como fuente entrarían vacías.
// El demo-manual queda fuera: su HTML pesa 31 KB pero su texto extraído son 37
// caracteres — el contenido lo pinta JavaScript, igual que el visor y el demo.
const WEB = [
  ["licitacion/index.html", "Licitación"],
  ["presentacion/deck.html", "Presentación · deck"],
];

// El código del cuestionario. Se publica íntegro y sin tocar, envuelto en un
// bloque preformateado: el texto de las preguntas y la lógica de ramificación
// que ve el prospecto son auditables tal como están escritos, sin que nadie los
// transcriba ni los resuma. Se toma el original en módulo ES, no la versión
// compilada para el navegador: difieren sólo en el envoltorio.
const CODIGO = [
  ["demo/cuestionario-inteligente.jsx", "Cuestionario dinámico · código"],
];

// DEC/SW/01 se publica como aviso, no como documento: su contenido es interno
// (ver R21 en consistencia.js). No es una fuente cargable.
const PROCESO_INTERNO = new Set(["dec-01.html"]);

/**
 * Texto visible de una página HTML compuesta. Determinista: quita script, style
 * y etiquetas, deshace las entidades y normaliza el espacio. No interpreta nada
 * y no reordena nada — R23 lo vuelve a correr y compara, de modo que lo que se
 * carga en NotebookLM es lo que este extractor produce, no lo que alguien copió.
 */
function textoDeHtml(html) {
  let t = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, "");
  t = t.replace(/<\/(p|div|section|article|tr|li|h[1-6]|table|thead|tbody|header|footer|main|nav)>/gi, "\n");
  t = t.replace(/<br\s*\/?>/gi, "\n").replace(/<\/t[dh]>/gi, "\t");
  t = t.replace(/<[^>]+>/g, "");
  const ent = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", nbsp: " ", aacute: "á", eacute: "é", iacute: "í", oacute: "ó", uacute: "ú", ntilde: "ñ", Aacute: "Á", Eacute: "É", Iacute: "Í", Oacute: "Ó", Uacute: "Ú", Ntilde: "Ñ", uuml: "ü", laquo: "«", raquo: "»", mdash: "—", ndash: "–", hellip: "…", middot: "·" };
  t = t.replace(/&([a-zA-Z#0-9]+);/g, (m, e) => (e in ent ? ent[e] : m));
  t = t.replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{3,}/g, "\n\n");
  return t.trim() + "\n";
}

const escapar = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** El documento tal como estaba en la base, leído del historial. */
function versionOriginal(archivo) {
  return execSync(`git show ${BASE}:resultados/ux-v1/webapp/docs/${archivo}`, {
    encoding: "utf8",
    cwd: RAIZ,
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 32 * 1024 * 1024,
  });
}

/* ─────────── Diferencia línea por línea (subsecuencia común más larga) ─────────── */

function diferencia(antes, despues) {
  const a = antes.split("\n");
  const b = despues.split("\n");
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
  p.origen { margin: 0 0 1.25rem; color: #6b6b68; font-size: .85rem; }
  p.sello { margin: 0 0 2rem; padding: .7rem .9rem; font-size: .85rem;
            border-left: 3px solid #1d1d1b; background: #f3f3f0; }
  pre { white-space: pre-wrap; word-wrap: break-word; margin: 0; }
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
<pre>${escapar(cuerpo)}</pre>
</main>
</body>
</html>
`;

const tituloDe = (cuerpo, archivo) =>
  (cuerpo.match(/^#\s+(.+)$/m) || [, archivo])[1].trim();

/** Limpia una carpeta: un documento borrado no sobrevive como página publicada. */
function limpiar(dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const viejo of fs.readdirSync(dir).filter((f) => f.endsWith(".html")))
    fs.unlinkSync(path.join(dir, viejo));
}

[ORIGINAL, MOD].forEach(limpiar);
fs.mkdirSync(TXT, { recursive: true });
for (const viejo of fs.readdirSync(TXT).filter((f) => f.endsWith(".txt")))
  fs.unlinkSync(path.join(TXT, viejo));
fs.mkdirSync(DOCS_MOD, { recursive: true });

const archivos = fs.readdirSync(DOCS).filter((f) => f.endsWith(".es.md")).sort();
const codigo = [];
limpiar(path.join(WEBAPP, "codigo"));
for (const [rel, nombre] of CODIGO) {
  const fuente = fs.readFileSync(path.join(WEBAPP, rel), "utf8");
  const salida = `${path.basename(rel).replace(/\.[^.]+$/, "")}.html`;
  fs.writeFileSync(
    path.join(WEBAPP, "codigo", salida),
    pagina(
      nombre,
      `Código del sitio · archivo fuente <code>${rel}</code>`,
      "<strong>Código, publicado íntegro y sin modificar.</strong> Es el archivo tal como está en el " +
        "repositorio: el texto de las preguntas, sus opciones y la lógica de ramificación del " +
        "cuestionario, sin recortes ni resumen.",
      fuente
    )
  );
  fs.writeFileSync(path.join(TXT, salida.replace(/\.html$/, ".txt")), fuente);
  codigo.push([salida, nombre]);
}

const grupo1 = [];
const grupo2 = [];
const registro = [];

for (const archivo of archivos) {
  const id = archivo.replace(/\.es\.md$/, "");
  const original = versionOriginal(archivo);
  const origen = `Documento del depósito · archivo fuente <code>docs/${archivo}</code>`;

  /* Grupo 1 · el original, sin un solo cambio. */
  fs.writeFileSync(
    path.join(ORIGINAL, `${id}.html`),
    pagina(
      tituloDe(original, archivo),
      origen,
      `<strong>Versión ORIGINAL.</strong> Estado del documento en el commit <code>${BASE}</code> ` +
        `(${BASE_FECHA}), sobre el que se levantaron los 88 hallazgos de la auditoría. Se reproduce ` +
        `desde el historial del repositorio: no se puede editar sin reescribir la historia de git. ` +
        `Su versión corregida es <code>${id}-MOD</code>.`,
      original
    )
  );
  fs.writeFileSync(path.join(TXT, `${id}.txt`), original);
  grupo1.push(`${id}.html`);

  /* Grupo 2 · la versión en la que se trabajan las correcciones. */
  const rutaMod = path.join(DOCS_MOD, `${id}-MOD.es.md`);
  // Un documento que todavía no se ha tocado arranca como copia exacta del
  // original: así toda diferencia que aparezca después es, por construcción,
  // una corrección hecha a propósito.
  if (!fs.existsSync(rutaMod)) fs.writeFileSync(rutaMod, original);
  const mod = fs.readFileSync(rutaMod, "utf8");

  const cambios = diferencia(original, mod);
  fs.writeFileSync(
    path.join(MOD, `${id}-MOD.html`),
    pagina(
      `${tituloDe(mod, archivo)} · MOD`,
      `Documento del depósito · archivo fuente <code>docs-mod/${id}-MOD.es.md</code>`,
      `<strong>Versión CORREGIDA.</strong> Es <code>${id}</code> con las correcciones de la auditoría ` +
        `aplicadas. Su versión original, sin corregir, es <code>${id}</code>. ` +
        (cambios.length
          ? `Registra <strong>${cambios.length} ${cambios.length === 1 ? "corrección" : "correcciones"}</strong> ` +
            `respecto del original.`
          : `<strong>Todavía no registra ninguna corrección:</strong> es idéntico al original.`),
      mod
    )
  );
  fs.writeFileSync(path.join(TXT, `${id}-MOD.txt`), mod);
  grupo2.push(`${id}-MOD.html`);
  registro.push({ id, archivo, cambios });
}

/* ─────────── El texto de las páginas HTML, para cargarlas como archivo ─────────── */
// NotebookLM no extrae el texto de estas páginas cuando se cargan por URL: se
// comprobó dos veces, y llegó a afirmar que AP-01 y AU-01 no existían en ninguna
// fuente cuando el MPC los define. Se cargan como texto, igual que los documentos.
const paginasHtml = [
  ...fs.readdirSync(PROCESO).filter((f) => f.endsWith(".html") && !PROCESO_INTERNO.has(f)).sort()
    .map((f) => [path.join(PROCESO, f), `proceso-${f.replace(/\.html$/, "")}.txt`]),
  ...WEB.map(([rel]) => [path.join(WEBAPP, rel), `sitio-${rel.replace(/\//g, "-").replace(/\.html$/, "")}.txt`]),
];
for (const [origen, salida] of paginasHtml)
  fs.writeFileSync(path.join(TXT, salida), textoDeHtml(fs.readFileSync(origen, "utf8")));

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

const conCambios = registro.filter((r) => r.cambios.length);
const totalCambios = conCambios.reduce((a, r) => a + r.cambios.length, 0);

const lista = [
  "# Fuentes que se cargan en NotebookLM",
  "",
  "Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. No se edita a mano:",
  "se rehace en cada corrida del generador, y la regla **R23** de `tools/consistencia.js` falla",
  "si alguna página no corresponde con lo que debe reproducir o si esta lista no las nombra todas.",
  "",
  "**NotebookLM no vuelve a rastrear:** cada fuente queda congelada en el momento en que se carga.",
  "Después de un cambio hay que **volver a cargar** las fuentes afectadas, o la verificación",
  "contestará sobre texto viejo.",
  "",
  "## Cómo se cargan",
  "",
  "**Los documentos y el código se cargan como texto pegado**, con `add_source` en modo `text`,",
  "desde los archivos de `verificacion/txt/`. Así no hay rastreo de por medio: lo que lee",
  "NotebookLM es carácter por carácter el archivo, y no depende de que una página se publique",
  "ni de cómo la interprete un rastreador. R23 comprueba esa identidad en cada corrida.",
  "",
  "**Las páginas HTML se cargan por URL**, en modo `url`: son las 7 del Proceso Comercial y las 3",
  "del sitio. No tienen un archivo de texto detrás —se escribieron directamente como páginas—, así",
  "que extraer su texto lo hace el rastreador de NotebookLM y no nosotros. Convertirlas a mano",
  "sería transcribirlas, que es justo lo que este método evita.",
  "",
  "## Los cuadernos",
  "",
  "| Cuaderno | Nombre en NotebookLM | Liga |",
  "|---|---|---|",
  ...CUADERNOS.map(([n, nombre, url]) => `| **${n}** | ${nombre} | ${url.startsWith("http") ? url : "—"} |`),
  "",
  "| Cuaderno | Qué se carga | Cuándo | Para qué |",
  "|---|---|---|---|",
  `| **1 · Originales** | los ${grupo1.length} documentos de \`original/\` + las ${proceso.length} páginas del Proceso Comercial + las ${WEB.length} páginas del sitio + el código del cuestionario = **${grupo1.length + proceso.length + WEB.length + codigo.length} fuentes** | **ahora** | Se le pregunta hallazgo por hallazgo, desde el primero. Dice qué hay que cambiar y dónde. |`,
  `| **2 · Corregidos** | los ${grupo2.length} documentos \`-MOD\` de \`mod/\` + las ${proceso.length} del Proceso Comercial + las ${WEB.length} del sitio + el código del cuestionario = **${grupo2.length + proceso.length + WEB.length + codigo.length} fuentes** | **cuando todas las modificaciones estén hechas** | Confirma que los cambios están hechos. |`,
  "| **3 · Verificación por pares** | el original y su `-MOD` de cada documento **que haya cambiado**, más el resumen de `cambios.md` | al final | Compara par por par y dice si hubo errores o ediciones no autorizadas al hacer los cambios. |",
  "",
  "Las dos versiones **nunca van juntas en una misma página**. Cada una es una fuente independiente,",
  "reproducida mecánicamente de su archivo, y se emparejan por el nombre: `bds-tecnica` con",
  "`bds-tecnica-MOD`. Así la verificación no depende de que quien las transcribió no se equivocara.",
  "",
  "El cuaderno 3 lleva sólo los pares que cambiaron: un documento idéntico a su original no tiene nada",
  `que verificar. Hoy serían **${conCambios.length * 2} fuentes** (${conCambios.length} pares).`,
  "",
  `## Cuaderno 1 · Documentos originales (${grupo1.length})`,
  "",
  `Estado del depósito en el commit \`${BASE}\` (${BASE_FECHA}), anterior a toda corrección.`,
  "",
  ...grupo1.map((n) => `- \`${n.replace(/\.html$/, "")}\` — ${SITIO}/original/${n}`),
  "",
  `## Cuaderno 2 · Documentos corregidos (${grupo2.length})`,
  "",
  "Mismo nombre que su original, con el sufijo `-MOD`.",
  "",
  ...grupo2.map((n) => `- \`${n.replace(/\.html$/, "")}\` — ${SITIO}/mod/${n}`),
  "",
  `## Proceso Comercial (${proceso.length}) · cuadernos 1 y 2`,
  "",
  "No cambiaron desde la base, así que la misma página sirve a los dos cuadernos.",
  "",
  ...proceso.map((n) => `- ${tituloProceso(n)} — ${SITIO}/proceso/${n}`),
  "",
  `## Código (${codigo.length}) · cuadernos 1 y 2`,
  "",
  "Publicado íntegro y sin modificar. Es donde vive el texto exacto de las preguntas del",
  "cuestionario, tal como las ve el prospecto.",
  "",
  ...codigo.map(([n, nombre]) => `- ${nombre} — ${SITIO}/codigo/${n}`),
  "",
  `## Páginas del sitio (${WEB.length}) · cuadernos 1 y 2`,
  "",
  "Se cargan tal como están publicadas. Quedan fuera el visor, el redirector de la presentación",
  "y las dos páginas del demo: son armazón, su contenido lo pinta JavaScript y como fuente",
  "entrarían vacías. El contenido del cuestionario del demo está especificado en",
  "`experience.es.md`, que ya es fuente.",
  "",
  ...WEB.map(([ruta, nombre]) => `- ${nombre} — ${SITIO}/${ruta}`),
  "",
];

fs.writeFileSync(path.join(VERIFICACION, "fuentes.md"), lista.join("\n"));

/* ─────────── El resumen de cambios que se le entrega a NotebookLM ─────────── */

const cambios = [
  "# Resumen de las correcciones hechas",
  "",
  "Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. Es el registro de **toda**",
  `diferencia entre cada documento original (commit \`${BASE}\`, ${BASE_FECHA}) y su versión \`-MOD\`,`,
  "línea por línea.",
  "",
  "Es lo que se le entrega al cuaderno 3 junto con los pares de documentos: NotebookLM compara cada",
  "par contra este resumen y dice si hubo errores u omisiones, o cambios que no estaban autorizados.",
  "Una edición que no aparezca aquí no ocurrió; una que aparezca y no corresponda a un hallazgo",
  "cerrado es una edición no autorizada.",
  "",
  conCambios.length
    ? `**${conCambios.length} de ${registro.length} documentos corregidos**, con ${totalCambios} ${totalCambios === 1 ? "cambio" : "cambios"} en total.`
    : `**Ningún documento corregido todavía.** Los ${registro.length} documentos \`-MOD\` son idénticos a su original.`,
  "",
  ...conCambios.flatMap((r) => [
    `## ${r.id} → ${r.id}-MOD — ${r.cambios.length} ${r.cambios.length === 1 ? "cambio" : "cambios"}`,
    "",
    ...r.cambios.flatMap((c) => [
      `**Original, línea ${c.i} · MOD, línea ${c.j}**`,
      "",
      "```diff",
      ...c.quitadas.map((l) => `- ${l}`),
      ...c.puestas.map((l) => `+ ${l}`),
      "```",
      "",
    ]),
  ]),
  "## Documentos todavía sin corregir",
  "",
  ...registro.filter((r) => !r.cambios.length).map((r) => `- \`${r.id}-MOD\``),
  "",
];

fs.writeFileSync(path.join(VERIFICACION, "cambios.md"), cambios.join("\n"));

console.log(`Grupo 1 · ${grupo1.length} originales en webapp/original/ (base ${BASE})`);
console.log(`Grupo 2 · ${grupo2.length} corregidos en webapp/mod/`);
console.log(`Cuaderno 1: ${grupo1.length + proceso.length + WEB.length + codigo.length} fuentes · cuaderno 2: ${grupo2.length + proceso.length + WEB.length + codigo.length} fuentes (límite 50)`);
console.log(
  conCambios.length
    ? `${conCambios.length} documentos corregidos (${totalCambios} cambios) en verificacion/cambios.md`
    : `Ninguna corrección aplicada todavía: los ${registro.length} MOD son idénticos a su original`
);
