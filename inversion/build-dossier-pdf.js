// Genera el PDF del Dossier para Inversionistas desde su .es.md.
//
// Es un pipeline aparte del de la documentación del cliente
// (resultados/ux-v1/kb/build_pdfkit.js): este documento NO forma parte del
// depósito que ve Sports World y no debe publicarse con él. Tipografía
// pensada para lectura impresa por personas mayores de 60: cuerpo de 11 pt,
// interlínea amplia y tablas con separación generosa.
//
// Uso:  NODE_PATH=<ruta a node_modules con pdfkit> node build-dossier-pdf.js

const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const SRC = path.resolve(__dirname, "dossier-inversionistas.es.md");
const OUT = path.resolve(__dirname, "Dossier-Inversionistas-Sports-World.pdf");

const M = 58;                    // margen
const INK = "#16181d";
const GRAY = "#6b7280";
const RULE = "#d8dbe0";
const ACCENT = "#0f4c81";
const BAND = "#f2f4f7";

const BODY = 11;                 // cuerpo generoso: el lector objetivo tiene 60+
const LEAD = 1.45;               // interlínea

// ---------------------------------------------------------------- parseo md

// Las fuentes base de PDF usan WinAnsi: un emoji o una flecha no sólo no se
// dibujan, se comen el carácter vecino. Se sustituyen antes de componer.
const GLYPHS = [
  [/[✅✔✓]/g, ""],      // palomas
  [/[⚠️]/g, ""],            // advertencia y su selector de variación
  [/[\u{1F300}-\u{1FAFF}]/gu, ""],    // emoji en general
  [/[←-⇿]/g, "—"],     // flechas -> raya
  [/−/g, "–"],              // signo menos -> semirraya
  [/[•●▪]/g, "•"],
  [/ /g, " "],
];

function sanitize(s) {
  let out = s;
  GLYPHS.forEach(([re, to]) => { out = out.replace(re, to); });
  return out.replace(/ {2,}/g, " ");
}

function decodeEntities(s) {
  return sanitize(s)
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}

function splitRow(line) {
  return line.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|")
             .map((c) => decodeEntities(c.trim()));
}

function mdBlocks(raw) {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const t = line.trim();

    if (!t) { i++; continue; }

    if (/^---+$/.test(t)) { out.push({ type: "hr" }); i++; continue; }

    const h = t.match(/^(#{1,4})\s+(.*)$/);
    if (h) { out.push({ type: "h", level: h[1].length, text: decodeEntities(h[2]) }); i++; continue; }

    // tabla: fila de encabezado seguida de la fila separadora |---|---|
    if (t.startsWith("|") && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const header = splitRow(t);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(splitRow(lines[i].trim()));
        i++;
      }
      out.push({ type: "table", header, rows });
      continue;
    }

    if (t.startsWith(">")) {
      const buf = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        buf.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      // Una cita puede contener sus propios encabezados y párrafos.
      out.push({ type: "quote", blocks: mdBlocks(buf.join("\n")) });
      continue;
    }

    const li = t.match(/^[-*]\s+(.*)$/);
    if (li) { out.push({ type: "li", text: decodeEntities(li[1]) }); i++; continue; }

    const ol = t.match(/^(\d+)\.\s+(.*)$/);
    if (ol) { out.push({ type: "li", marker: ol[1] + ".", text: decodeEntities(ol[2]) }); i++; continue; }

    // párrafo: acumula líneas contiguas
    const buf = [t];
    i++;
    while (i < lines.length) {
      const n = lines[i].trim();
      if (!n || n.startsWith("|") || n.startsWith(">") || n.startsWith("#") ||
          /^---+$/.test(n) || /^[-*]\s/.test(n) || /^\d+\.\s/.test(n)) break;
      buf.push(n); i++;
    }
    out.push({ type: "p", text: decodeEntities(buf.join(" ")) });
  }
  return out;
}

// Divide texto con **negritas**, `código` y _cursivas_ en corridas tipográficas.
function inlineRuns(text) {
  const runs = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|_[^_]+_)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) runs.push({ text: text.slice(last, m.index) });
    const tok = m[0];
    if (tok.startsWith("**")) runs.push({ text: tok.slice(2, -2), bold: true });
    else if (tok.startsWith("`")) runs.push({ text: tok.slice(1, -1), code: true });
    else runs.push({ text: tok.slice(1, -1), italic: true });
    last = m.index + tok.length;
  }
  if (last < text.length) runs.push({ text: text.slice(last) });
  return runs.filter((r) => r.text.length);
}

function fontFor(run) {
  if (run.code) return "Courier";
  if (run.bold) return "Helvetica-Bold";
  if (run.italic) return "Helvetica-Oblique";
  return "Helvetica";
}

function plain(text) {
  return text.replace(/\*\*/g, "").replace(/`/g, "").replace(/_/g, "");
}

// ---------------------------------------------------------------- render

function renderRuns(doc, text, x, width, size, color) {
  const runs = inlineRuns(text);
  if (!runs.length) return;
  // Sólo la primera corrida fija la posición. Las siguientes deben usar la
  // forma de dos argumentos: pasar `undefined` como x/y rompe la continuación
  // de pdfkit y cada corrida en negritas terminaría en su propio renglón.
  runs.forEach((r, idx) => {
    doc.font(fontFor(r)).fontSize(r.code ? size - 1 : size).fillColor(color);
    const opts = { width, continued: idx < runs.length - 1, lineGap: size * (LEAD - 1) };
    if (idx === 0) doc.text(r.text, x, doc.y, opts);
    else doc.text(r.text, opts);
  });
  doc.fillColor(INK);
}

function measureRuns(doc, text, width, size) {
  // Alto de una celda: se mide con la fuente más ancha que vaya a usarse.
  const runs = inlineRuns(text);
  const bold = runs.some((r) => r.bold);
  doc.font(bold ? "Helvetica-Bold" : "Helvetica").fontSize(size);
  return doc.heightOfString(plain(text), { width, lineGap: size * (LEAD - 1) });
}

// ------------------------------------------------- reglas de paginación
//
// 1. Cada sección de primer nivel (##) abre página.
// 2. Ningún encabezado queda al pie: si no caben él y las primeras líneas de
//    su contenido, se manda entero a la página siguiente (keep-with-next).
// 3. Sin líneas viudas ni huérfanas: un párrafo parte sólo si deja al menos
//    dos líneas de este lado y se lleva al menos dos al otro.
// 4. Las tablas repiten su encabezado al continuar y marcan «(continúa)».
//    Nunca se parte una tabla dejando el encabezado solo al pie.
// 5. Las citas destacadas no se parten si caben completas en una página.

const FOOT = 30;                 // franja reservada para el pie

function limitY(doc) {
  return doc.page.height - doc.page.margins.bottom - FOOT;
}

function atPageTop(doc) {
  return doc.y <= doc.page.margins.top + 1;
}

// ¿Cabe `need` en lo que resta de la página? Si no, abre una nueva.
function room(doc, need) {
  if (doc.y + need > limitY(doc) && !atPageTop(doc)) { doc.addPage(); return true; }
  return false;
}

function newSection(doc) {
  if (!atPageTop(doc)) doc.addPage();
}

function colWidths(doc, block, total) {
  const cols = block.header.length;
  // Peso de cada columna = largo máximo de su contenido, acotado para que
  // ninguna columna acapare el ancho ni quede ilegiblemente angosta.
  const weights = block.header.map((h, c) => {
    let max = plain(h).length;
    block.rows.forEach((r) => { max = Math.max(max, plain(r[c] || "").length); });
    return Math.min(Math.max(max, 6), 62);
  });
  const sum = weights.reduce((a, b) => a + b, 0);
  const min = Math.min(58, total / (cols * 1.9));
  let widths = weights.map((w) => Math.max(min, (w / sum) * total));
  const scale = total / widths.reduce((a, b) => a + b, 0);
  return widths.map((w) => w * scale);
}

const TPAD = 7;

function rowHeight(doc, cells, widths, size) {
  const heights = cells.map((c, i) => measureRuns(doc, c || "", widths[i] - TPAD * 2, size));
  return Math.max(...heights) + TPAD * 2;
}

// Dibuja una fila en la posición actual. No decide saltos de página: de eso se
// encarga renderTable, que necesita ver la tabla completa para repetir su
// encabezado.
function drawTableRow(doc, cells, widths, x0, size, fill) {
  const total = widths.reduce((a, b) => a + b, 0);
  const h = rowHeight(doc, cells, widths, size);
  const top = doc.y;

  if (fill) doc.rect(x0, top, total, h).fill(fill);

  let x = x0;
  cells.forEach((c, i) => {
    doc.y = top + TPAD;
    renderRuns(doc, c || "", x + TPAD, widths[i] - TPAD * 2, size, INK);
    x += widths[i];
  });

  doc.y = top + h;
  doc.moveTo(x0, doc.y).lineTo(x0 + total, doc.y).lineWidth(0.5).strokeColor(RULE).stroke();
  doc.fillColor(INK);
}

function renderTable(doc, block, x0, width, size) {
  const widths = colWidths(doc, block, width);
  const header = block.header;

  const drawHeader = (continued) => {
    const cells = continued
      ? header.map((h, i) => (i === 0 ? `${h} _(continúa)_` : h))
      : header;
    drawTableRow(doc, cells, widths, x0, size, BAND);
  };

  // Regla 4: el encabezado nunca se queda solo al pie. Debe caber él y la
  // primera fila; si no, la tabla entera arranca en la página siguiente.
  const headH = rowHeight(doc, header, widths, size);
  const firstH = block.rows.length ? rowHeight(doc, block.rows[0], widths, size) : 0;
  room(doc, headH + firstH);
  drawHeader(false);

  block.rows.forEach((r, idx) => {
    const h = rowHeight(doc, r, widths, size);
    let brk = doc.y + h > limitY(doc);

    // Fila viuda: si ésta es la penúltima y la última ya no cabría debajo,
    // se cortan las dos juntas en lugar de dejar una sola al otro lado.
    if (!brk && idx === block.rows.length - 2) {
      const last = rowHeight(doc, block.rows[idx + 1], widths, size);
      if (doc.y + h + last > limitY(doc)) brk = true;
    }

    if (brk) { doc.addPage(); drawHeader(true); }
    drawTableRow(doc, r, widths, x0, size, idx % 2 === 1 ? "#fafbfc" : null);
  });
}

// Regla 3: viudas y huérfanas. Un párrafo sólo se parte si deja >= 2 líneas
// arriba y se lleva >= 2 abajo; en cualquier otro caso viaja completo.
function placeParagraph(doc, text, x, width, size) {
  const lineH = size * LEAD;
  doc.font("Helvetica").fontSize(size);
  const h = doc.heightOfString(plain(text), { width, lineGap: size * (LEAD - 1) });
  const total = Math.max(1, Math.round(h / lineH));
  const avail = limitY(doc) - doc.y;

  // Un párrafo de una o dos líneas —«Atentamente,», una entrada, un pie de
  // cuadro— no debe quedar solo al pie, separado de lo que introduce: se le
  // exige espacio para sí y para el primer renglón de lo que sigue.
  if (total <= 2) { room(doc, h + lineH); renderRuns(doc, text, x, width, size, INK); return; }

  if (h > avail && !atPageTop(doc)) {
    const fit = Math.floor(avail / lineH);
    if (fit < 2 || total - fit < 2) doc.addPage();
  }
  renderRuns(doc, text, x, width, size, INK);
}

// Cuánto espacio necesita el bloque que sigue a un encabezado para que valga
// la pena dejarlo empezar en esta página. Una tabla necesita su encabezado y
// su primera fila; un párrafo, tres renglones.
function nextNeed(doc, next, width, size) {
  if (!next) return 0;
  if (next.type === "table") {
    const s = Math.max(8.5, size - 1.5);
    const widths = colWidths(doc, next, width);
    return rowHeight(doc, next.header, widths, s) +
           (next.rows.length ? rowHeight(doc, next.rows[0], widths, s) : 0);
  }
  return size * LEAD * 3;
}

// `nested` = estamos dentro de una cita: ahí los encabezados no abren página.
function renderBlocks(doc, blocks, x0, width, nested) {
  const size = nested ? BODY - 0.5 : BODY;

  blocks.forEach((b, bi) => {
    switch (b.type) {
      case "h": {
        const sizes = { 1: 20, 2: 15.5, 3: 12.5, 4: 11.5 };
        const s = sizes[b.level] || 11.5;
        if (b.level <= 2 && !nested) {
          newSection(doc);                      // regla 1: cada sección abre página
        } else {
          // Regla 2 (keep-with-next): el encabezado arrastra consigo el inicio
          // real de su contenido; si no caben juntos, se va entero a la
          // siguiente página en lugar de quedarse solo al pie.
          room(doc, s * 1.9 + nextNeed(doc, blocks[bi + 1], width, size));
        }
        doc.moveDown(atPageTop(doc) ? 0 : b.level <= 2 ? 0.85 : 0.7);
        doc.font("Helvetica-Bold").fontSize(s)
           .fillColor(b.level <= 2 ? ACCENT : INK)
           .text(plain(b.text), x0, doc.y, { width, lineGap: 1 });
        if (b.level <= 2) {
          doc.moveDown(0.28);
          doc.moveTo(x0, doc.y).lineTo(x0 + width, doc.y)
             .lineWidth(b.level === 1 ? 1.4 : 0.6).strokeColor(b.level === 1 ? ACCENT : RULE).stroke();
        }
        doc.moveDown(0.45);
        doc.fillColor(INK);
        break;
      }
      case "p": {
        placeParagraph(doc, b.text, x0, width, size);
        doc.moveDown(0.55);
        break;
      }
      case "li": {
        // Una viñeta corta nunca se parte; una larga se trata como párrafo.
        room(doc, Math.min(size * LEAD * 2, size * 4));
        const marker = b.marker || "•";
        const ind = b.marker ? 20 : 14;
        const top = doc.y;
        doc.font("Helvetica").fontSize(size).fillColor(INK)
           .text(marker, x0, top, { width: ind, lineGap: size * (LEAD - 1) });
        doc.y = top;
        renderRuns(doc, b.text, x0 + ind, width - ind, size, INK);
        doc.moveDown(0.35);
        break;
      }
      case "quote": {
        doc.moveDown(0.35);
        const inner = width - 24;
        // Regla 5: si la cita cabe entera en una página, no se parte.
        const est = b.blocks.reduce((acc, q) => {
          if (q.type !== "p" && q.type !== "li") return acc + size * LEAD * 1.5;
          doc.font("Helvetica").fontSize(size - 0.5);
          return acc + doc.heightOfString(plain(q.text), { width: inner, lineGap: (size - 0.5) * (LEAD - 1) }) + 6;
        }, 18);
        if (est < limitY(doc) - doc.page.margins.top) room(doc, est);

        const top = doc.y;
        doc.y = top + 9;
        renderBlocks(doc, b.blocks, x0 + 18, inner, true);
        const bottom = doc.y + 7;
        doc.save();
        doc.rect(x0, top, 3.5, Math.max(6, bottom - top)).fill(ACCENT);
        doc.restore();
        doc.y = bottom;
        doc.moveDown(0.55);
        break;
      }
      case "table": {
        doc.moveDown(0.35);
        renderTable(doc, b, x0, width, Math.max(8.5, size - 1.5));
        doc.moveDown(0.7);
        break;
      }
      case "hr": {
        // Una regla al inicio de página es basura visual: se suprime.
        if (atPageTop(doc)) break;
        doc.moveDown(0.5);
        if (doc.y + 14 > limitY(doc)) break;
        doc.moveTo(x0, doc.y).lineTo(x0 + width, doc.y).lineWidth(0.6).strokeColor(RULE).stroke();
        doc.moveDown(0.7);
        break;
      }
    }
  });
}

// ---------------------------------------------------------------- portada

function cover(doc, W) {
  doc.rect(0, 0, doc.page.width, 232).fill(ACCENT);
  doc.font("Helvetica-Bold").fontSize(11).fillColor("#a9c8e6")
     .text("FINAL UPGRADE AI", M, 62, { characterSpacing: 2.2 });
  doc.font("Helvetica-Bold").fontSize(31).fillColor("#ffffff")
     .text("Dossier para Inversionistas", M, 94, { width: W, lineGap: 3 });
  doc.font("Helvetica").fontSize(14).fillColor("#d3e3f2")
     .text("Préstamo puente de MXN $300,000 a 90 días", M, 158, { width: W });
  doc.font("Helvetica").fontSize(12).fillColor("#a9c8e6")
     .text("Proyecto Sports World México", M, 180, { width: W });

  doc.font("Helvetica").fontSize(10).fillColor("#7fa8cd")
     .text("Documento confidencial · Agosto de 2026", M, 202, { width: W });

  // La portada es una página completa: el contenido arranca en la siguiente.
  // Así la ficha de la operación cabe entera y no queda una página a medias
  // antes de que la sección 1 abra la suya.
  doc.fillColor(INK);
  doc.addPage();
}

// ---------------------------------------------------------------- main

(function main() {
  let raw = fs.readFileSync(SRC, "utf8");
  raw = raw.replace(/<!--[\s\S]*?-->/g, "");

  const blocks = mdBlocks(raw);
  // El H1 y el H2 de arranque ya viven en la portada.
  while (blocks.length && (blocks[0].type === "h" && blocks[0].level <= 2)) blocks.shift();

  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: M, bottom: M, left: M, right: M },
    bufferPages: true,
    autoFirstPage: true,
  });
  doc.info.Title = "Dossier para Inversionistas — Préstamo puente MXN $300,000 a 90 días";
  doc.info.Author = "Final Upgrade AI";
  doc.info.Subject = "Proyecto Sports World México · Documento confidencial";

  const stream = fs.createWriteStream(OUT);
  doc.pipe(stream);

  const W = doc.page.width - M * 2;
  cover(doc, W);
  renderBlocks(doc, blocks, M, W);

  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(range.start + i);
    const ob = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;         // evita salto de página al escribir el pie
    if (i > 0) {
      doc.font("Helvetica").fontSize(8).fillColor(GRAY)
         .text("Final Upgrade AI · Dossier para Inversionistas · Confidencial",
               M, doc.page.height - 40, { width: W * 0.7, lineBreak: false });
      // La portada no se numera: la página 1 es la primera de contenido.
      doc.font("Helvetica").fontSize(8).fillColor(GRAY)
         .text(`${i} / ${range.count - 1}`,
               M, doc.page.height - 40, { width: W, align: "right", lineBreak: false });
    }
    doc.page.margins.bottom = ob;
  }

  doc.end();
  stream.on("finish", () => console.log(`OK ${path.basename(OUT)} (${range.count} págs)`));
})();
