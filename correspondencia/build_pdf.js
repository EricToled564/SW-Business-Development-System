// Generador de PDF para los documentos de `correspondencia/`.
//
// A diferencia del pipeline del depósito (resultados/ux-v1/kb/build_pdfkit.js),
// que pagina de corrido, éste aplica reglas estrictas de composición:
//
//   1. Un párrafo nunca se parte entre dos páginas. El único corte legítimo
//      entre página y página es después de un punto y aparte.
//   2. Una fila de tabla nunca se parte. Si la tabla completa cabe en una
//      página, se mantiene entera; si no cabe, se corta entre filas y el
//      encabezado se repite en la continuación.
//   3. Nunca queda un encabezado huérfano: un título arrastra consigo el
//      arranque del bloque que le sigue.
//   4. No se abre una sección nueva (H1/H2) si queda menos del 15% de la
//      altura útil de la página libre.
//
// El criterio es explícito: es preferible dejar espacio en blanco grande a
// cortar un párrafo o una tabla por la mitad.
//
// Uso:  NODE_PATH=<ruta a node_modules> node correspondencia/build_pdf.js

const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const DIR = __dirname;

const DOCS = [
  {
    src: "propuesta-reestructura-proceso-ventas.es.md",
    out: "Propuesta de reestructura del proceso de ventas.pdf",
    title: "Propuesta de plan de reestructura del proceso de ventas de Sports World",
    footer: "Propuesta de reestructura del proceso de ventas · Sports World",
  },
];

/* ───────────────────────── Composición ───────────────────────── */

const PAGE = "LETTER";
const M = 58;                 // margen
const FOOTER_H = 26;          // franja reservada al pie
const INK = "#1d1d1b";
const MUTED = "#6b6b6b";
const RULE = "#cfd6dd";
const HEAD_BG = "#eef1f4";
const NOTE_BG = "#f4f7fa";
const NOTE_BAR = "#1b3a5c";

const SIZE = { h1: 17, h2: 13.5, h3: 11.5, p: 10, li: 10, note: 9.5, cell: 8.6, cellSm: 8 };
const LEAD = 1.35;            // interlineado relativo
const PAD = 4.5;              // acolchado de celda

/* ── Fuentes: se registran TrueType si están disponibles (cobertura Unicode
   completa: →, ≈, ☐, etc.). Si no, se usan las base-14 de PDF y se sanean los
   caracteres que WinAnsi no admite. ── */

const TTF = "/usr/share/fonts/truetype/liberation/";
const HAS_TTF = fs.existsSync(TTF + "LiberationSans-Regular.ttf");

const F = HAS_TTF
  ? { r: "Body", b: "Body-Bold", i: "Body-It", bi: "Body-BoldIt", m: "Mono", mb: "Mono-Bold" }
  : { r: "Helvetica", b: "Helvetica-Bold", i: "Helvetica-Oblique", bi: "Helvetica-BoldOblique", m: "Courier", mb: "Courier-Bold" };

function registerFonts(doc) {
  if (!HAS_TTF) return;
  doc.registerFont("Body", TTF + "LiberationSans-Regular.ttf");
  doc.registerFont("Body-Bold", TTF + "LiberationSans-Bold.ttf");
  doc.registerFont("Body-It", TTF + "LiberationSans-Italic.ttf");
  doc.registerFont("Body-BoldIt", TTF + "LiberationSans-BoldItalic.ttf");
  doc.registerFont("Mono", TTF + "LiberationMono-Regular.ttf");
  doc.registerFont("Mono-Bold", TTF + "LiberationMono-Bold.ttf");
}

function sanitize(s) {
  if (HAS_TTF) return s;
  return String(s)
    .replace(/≈/g, "~").replace(/→/g, "->").replace(/←/g, "<-")
    .replace(/↗/g, "").replace(/≤/g, "<=").replace(/≥/g, ">=")
    .replace(/☐/g, "[ ]").replace(/×/g, "x");
}

/* ───────────────────────── Markdown → bloques ───────────────────────── */

function mdBlocks(md) {
  md = md.replace(/\r\n/g, "\n");
  const L = md.split("\n");
  const out = [];
  const isSep = (l) => l != null && /-/.test(l) && /^\s*\|?[\s:|-]+\|?\s*$/.test(l);
  const cells = (r) => r.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
  let i = 0;
  while (i < L.length) {
    const ln = L[i];
    if (!ln.trim()) { i++; continue; }

    const h = ln.match(/^(#{1,6})\s+(.*)$/);
    if (h) { out.push({ t: "h", level: Math.min(h[1].length, 3), text: h[2].trim() }); i++; continue; }

    if (/^\s*(---+|\*\*\*+)\s*$/.test(ln)) { out.push({ t: "hr" }); i++; continue; }

    if (/^>\s?/.test(ln)) {
      const paras = [];
      let buf = [];
      while (i < L.length && /^>/.test(L[i])) {
        const body = L[i].replace(/^>\s?/, "");
        if (!body.trim()) { if (buf.length) { paras.push(buf.join(" ")); buf = []; } }
        else buf.push(body.trim());
        i++;
      }
      if (buf.length) paras.push(buf.join(" "));
      out.push({ t: "note", paras });
      continue;
    }

    if (ln.includes("|") && isSep(L[i + 1])) {
      const rows = [cells(ln)];
      i += 2;
      while (i < L.length && L[i].includes("|") && L[i].trim()) { rows.push(cells(L[i])); i++; }
      out.push({ t: "table", rows });
      continue;
    }

    const li = ln.match(/^\s*(?:[-*]|(\d+)\.)\s+(.*)$/);
    if (li) {
      const marker = li[1] ? li[1] + "." : "•";
      const buf = [li[2].trim()];
      i++;
      while (i < L.length && L[i].trim() && /^\s{2,}\S/.test(L[i]) && !/^\s*(?:[-*]|\d+\.)\s/.test(L[i])) {
        buf.push(L[i].trim()); i++;
      }
      out.push({ t: "li", marker, text: buf.join(" ") });
      continue;
    }

    const buf = [ln.trim()];
    i++;
    while (
      i < L.length && L[i].trim() &&
      !/^(#{1,6}\s|>|\s*(?:[-*]|\d+\.)\s)/.test(L[i]) &&
      !/^\s*(---+|\*\*\*+)\s*$/.test(L[i]) &&
      !(L[i].includes("|") && isSep(L[i + 1]))
    ) { buf.push(L[i].trim()); i++; }
    out.push({ t: "p", text: buf.join(" ") });
  }
  return out;
}

/* ───────────────────────── Texto con estilos en línea ───────────────────────── */

function inlineRuns(t) {
  t = sanitize(String(t == null ? "" : t));
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, text, href) => (href.charAt(0) === "#" ? text : text + " (" + href + ")"));
  t = t.replace(/<br\s*\/?>/gi, "   ");
  const runs = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(t))) {
    if (m.index > last) runs.push({ text: t.slice(last, m.index) });
    const tok = m[0];
    if (tok.startsWith("**")) runs.push({ text: tok.slice(2, -2), bold: true });
    else if (tok.startsWith("`")) runs.push({ text: tok.slice(1, -1), mono: true });
    else runs.push({ text: tok.slice(1, -1), italic: true });
    last = re.lastIndex;
  }
  if (last < t.length) runs.push({ text: t.slice(last) });
  const clean = runs.filter((r) => r.text !== "");
  return clean.length ? clean : [{ text: t }];
}

function fontFor(run, base) {
  if (run.mono) return run.bold ? F.mb : F.m;
  if (run.bold) return base === F.i ? F.bi : F.b;
  if (run.italic) return base === F.b ? F.bi : F.i;
  return base;
}

function drawRuns(doc, runs, x, y, w, size, base) {
  const last = runs.length - 1;
  runs.forEach((r, idx) => {
    doc.font(fontFor(r, base || F.r)).fontSize(r.mono ? size - 0.5 : size).fillColor(INK);
    const opts = { width: w, lineGap: size * (LEAD - 1), continued: idx !== last };
    if (idx === 0) doc.text(r.text, x, y, opts);
    else doc.text(r.text, opts);
  });
}

/* ───────────────────────── Tablas ───────────────────────── */

function columnWidths(rows, total) {
  const cols = rows[0].length;
  const weight = new Array(cols).fill(0);
  for (const r of rows) {
    for (let c = 0; c < cols; c++) {
      const len = String(r[c] || "").replace(/[*`]/g, "").length;
      weight[c] += Math.sqrt(Math.max(len, 1));
    }
  }
  const sum = weight.reduce((a, b) => a + b, 0) || cols;
  const minW = Math.max(48, total * 0.07);
  let w = weight.map((v) => Math.max(minW, (v / sum) * total));
  const over = w.reduce((a, b) => a + b, 0) / total;
  if (over !== 1) w = w.map((v) => v / over);
  return w;
}

// Altura de una fila: el máximo de sus celdas, medido con la variante negrita
// (la más ancha) para no subestimar nunca el número de renglones.
function rowHeight(doc, cells, widths, size) {
  let hh = 0;
  for (let c = 0; c < cells.length; c++) {
    const plain = inlineRuns(cells[c]).map((r) => r.text).join("");
    doc.font(F.b).fontSize(size);
    hh = Math.max(hh, doc.heightOfString(plain || " ", { width: widths[c] - 2 * PAD, lineGap: size * (LEAD - 1) }));
  }
  return hh + 2 * PAD;
}

function drawTableRow(doc, cells, widths, x0, y0, size, head, hh) {
  const tw = widths.reduce((a, b) => a + b, 0);
  if (head) doc.save().rect(x0, y0, tw, hh).fill(HEAD_BG).restore();
  let cx = x0;
  for (let c = 0; c < cells.length; c++) {
    drawRuns(doc, inlineRuns(cells[c]), cx + PAD, y0 + PAD, widths[c] - 2 * PAD, size, head ? F.b : F.r);
    cx += widths[c];
  }
  doc.lineWidth(0.5).strokeColor(RULE).rect(x0, y0, tw, hh).stroke();
  cx = x0;
  for (let c = 0; c < widths.length - 1; c++) { cx += widths[c]; doc.moveTo(cx, y0).lineTo(cx, y0 + hh).stroke(); }
  doc.x = x0; doc.y = y0 + hh;
  return hh;
}

/* ───────────────────────── Render de bloques ───────────────────────── */

function drawBlock(doc, b, x, w, ctx, atTop) {
  const y = doc.y;
  switch (b.t) {
    case "h": {
      const size = b.level === 1 ? SIZE.h1 : b.level === 2 ? SIZE.h2 : SIZE.h3;
      const before = atTop ? 0 : (b.level === 1 ? 10 : b.level === 2 ? 12 : 8);
      doc.y = y + before;
      doc.font(F.b).fontSize(size).fillColor(b.level === 1 ? NOTE_BAR : INK)
        .text(sanitize(b.text), x, doc.y, { width: w, lineGap: size * 0.18 });
      if (b.level === 1) {
        const ry = doc.y + 4;
        doc.lineWidth(0.9).strokeColor(NOTE_BAR).moveTo(x, ry).lineTo(x + w, ry).stroke();
        doc.y = ry + 2;
      }
      doc.y += b.level === 1 ? 8 : 5;
      break;
    }
    case "hr": {
      doc.y = y + 6;
      doc.lineWidth(0.5).strokeColor(RULE).moveTo(x, doc.y).lineTo(x + w, doc.y).stroke();
      doc.y += 8;
      break;
    }
    case "note": {
      const pad = 9, barW = 3;
      const inner = w - pad * 2 - barW;
      const y0 = y + 2;
      const hContent = ctx.mc2.run((d, mx, my) => {
        let yy = my;
        b.paras.forEach((p, idx) => {
          d.y = yy;
          drawRuns(d, inlineRuns(p), mx, d.y, inner, SIZE.note, F.r);
          yy = d.y + (idx === b.paras.length - 1 ? 0 : SIZE.note * 0.6);
        });
        d.y = yy;
      });
      const boxH = hContent + pad * 2;
      doc.save().rect(x, y0, w, boxH).fill(NOTE_BG).restore();
      doc.save().rect(x, y0, barW, boxH).fill(NOTE_BAR).restore();
      let yy = y0 + pad;
      b.paras.forEach((p, idx) => {
        doc.y = yy;
        drawRuns(doc, inlineRuns(p), x + barW + pad, doc.y, inner, SIZE.note, F.r);
        yy = doc.y + (idx === b.paras.length - 1 ? 0 : SIZE.note * 0.6);
      });
      doc.y = y0 + boxH + 8;
      break;
    }
    case "li": {
      const ind = 15;
      doc.font(F.r).fontSize(SIZE.li).fillColor(INK).text(b.marker, x, y, { width: ind, lineGap: SIZE.li * (LEAD - 1) });
      const yMark = doc.y;
      doc.y = y;
      drawRuns(doc, inlineRuns(b.text), x + ind, y, w - ind, SIZE.li, F.r);
      doc.y = Math.max(doc.y, yMark) + 3.5;
      break;
    }
    case "p": {
      drawRuns(doc, inlineRuns(b.text), x, y, w, SIZE.p, F.r);
      doc.y += 6.5;
      break;
    }
    default:
      break;
  }
  doc.x = x;
}

/* ───────────────────────── Contexto de medición ───────────────────────── */

class Measure {
  constructor(width) { this.width = width; this.reset(); }
  reset() {
    this.doc = new PDFDocument({ size: [this.width + M * 2, 30000], margins: { top: 0, bottom: 0, left: M, right: M } });
    registerFonts(this.doc);
    this.doc.y = 0;
  }
  run(fn) {
    if (this.doc.y > 26000) this.reset();
    const y0 = this.doc.y + 5;
    this.doc.y = y0;
    fn(this.doc, M, y0, this.width);
    const h = Math.max(0, this.doc.y - y0);
    this.doc.y = y0 + h;
    return h;
  }
}

/* ───────────────────────── Paginación ───────────────────────── */

function build(doc, blocks, ctx) {
  const x = M;
  const w = doc.page.width - M * 2;
  const top = M;
  const bottom = doc.page.height - M - FOOTER_H;
  const usable = bottom - top;
  const mc = ctx.mc;

  const free = () => bottom - doc.y;
  const newPage = () => { doc.addPage(); doc.x = x; doc.y = top; };
  const atTop = () => doc.y <= top + 0.5;

  // Geometría de cada bloque, medida una sola vez.
  // Las tablas guardan además su altura mínima: la que alcanzan reduciendo el
  // cuerpo de letra hasta el piso permitido. Se usa para decidir si una sección
  // puede arrancar en la página en curso en lugar de dejarla medio vacía.
  const SHRINK = 0.84;   // piso de reducción del cuerpo de la tabla
  const measureTable = (rows, widths, size) => {
    const rh = rows.map((r) => rowHeight(mc.doc, r, widths, size));
    return { size, rh, total: rh.reduce((a, c) => a + c, 0) };
  };
  const fitTable = (rows, widths, size, maxH) => {
    const floor = size * SHRINK;
    for (let s = size; s >= floor - 1e-6; s -= 0.2) {
      const m = measureTable(rows, widths, s);
      if (m.total <= maxH) return m;
    }
    return null;
  };

  const G = blocks.map((b) => {
    if (b.t === "table") {
      const size = b.rows[0].length >= 5 ? SIZE.cellSm : SIZE.cell;
      const widths = columnWidths(b.rows, w);
      const m = measureTable(b.rows, widths, size);
      const min = measureTable(b.rows, widths, size * SHRINK);
      return { size, widths, rh: m.rh, total: m.total, minTotal: min.total };
    }
    return { h: mc.run((d, mx) => { drawBlock(d, b, mx, w, ctx, false); }) };
  });

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const g = G[i];

    /* ── Reglas 3 y 4: encabezados ──
       El título forma un "bloque solidario" con lo que abre: los encabezados
       encadenados, los párrafos de entrada y —si la hay— la primera tabla de la
       sección. Si ese conjunto cabe completo en una página, se exige que quepa
       aquí; si no, no se abre la sección en esta página. Así ningún título
       queda colgando al pie con su tabla en la página siguiente. */
    if (b.t === "h") {
      // El título arrastra los encabezados encadenados y el bloque siguiente
      // COMPLETO —un párrafo no se parte, así que o cabe entero o baja con el
      // título—. De una tabla basta con su encabezado y dos filas: de ahí en
      // adelante el corte entre filas es legítimo y exigirla entera solo
      // produciría media página en blanco.
      let need = 0, j = i;
      while (j < blocks.length && blocks[j].t === "h") { need += G[j].h; j++; }
      if (j < blocks.length) {
        const gn = G[j];
        need += blocks[j].t === "table"
          ? Math.min(gn.minTotal, gn.rh[0] + (gn.rh[1] || 0) + (gn.rh[2] || 0)) + 9
          : gn.h;
      }
      const group = need;
      const minFree = b.level <= 2 ? usable * 0.15 : 0;
      if (process.env.PDF_DEBUG && !atTop() && free() < Math.max(need, minFree)) {
        console.log(`  corte antes de «${b.text.slice(0, 46)}» · libre ${free().toFixed(0)} · exige ${Math.max(need, minFree).toFixed(0)} (grupo ${group.toFixed(0)})`);
      }
      if (!atTop() && free() < Math.max(need, minFree)) newPage();
      drawBlock(doc, b, x, w, ctx, atTop());
      continue;
    }

    /* ── Separadores: nunca abren página ── */
    if (b.t === "hr") {
      if (free() < 44 || atTop()) continue;
      drawBlock(doc, b, x, w, ctx, false);
      continue;
    }

    /* ── Regla 2: tablas ──
       Una fila jamás se parte. La tabla se mantiene entera siempre que quepa
       en lo que resta de página. Si no cabe, hay dos salidas: bajarla completa
       —cuando lo que queda de página es poco y no se desperdicia nada— o
       cortarla ENTRE FILAS, repitiendo el encabezado, cuando dejarla entera
       obligaría a tirar buena parte de una página. Ningún fragmento queda con
       menos de dos filas de contenido. */
    if (b.t === "table") {
      let { size, widths, rh, total } = g;
      const n = b.rows.length;

      // Si no cabe entera por poco, se reduce el cuerpo de letra lo necesario
      // (hasta el piso permitido) para subirla a esta página en vez de dejar
      // media página en blanco.
      if (total + 9 > free() && g.minTotal + 9 <= free()) {
        const m = fitTable(b.rows, widths, g.size, free() - 9);
        if (m) { size = m.size; rh = m.rh; total = m.total; }
      }
      const minRows = 2;
      const minFrag = rh[0] + rh[1] + (rh[2] || 0);   // encabezado + dos filas

      const drawRun = (from, to, y) => {
        let yy = y;
        yy += drawTableRow(doc, b.rows[0], widths, x, yy, size, true, rh[0]);
        for (let ri = from; ri <= to; ri++) yy += drawTableRow(doc, b.rows[ri], widths, x, yy, size, false, rh[ri]);
        return yy;
      };

      const cabeEntera = total + 9 <= free();
      const desperdicio = free() - 9;      // lo que se tiraría si se baja completa

      if (cabeEntera) {
        let y = doc.y;
        for (let ri = 0; ri < n; ri++) y += drawTableRow(doc, b.rows[ri], widths, x, y, size, ri === 0, rh[ri]);
        doc.y = y + 9; doc.x = x;
      } else if (total <= usable && desperdicio < Math.max(minFrag, usable * 0.22)) {
        // Poco espacio útil abajo: baja completa, sin cortar nada.
        newPage();
        let y = doc.y;
        for (let ri = 0; ri < n; ri++) y += drawTableRow(doc, b.rows[ri], widths, x, y, size, ri === 0, rh[ri]);
        doc.y = y + 9; doc.x = x;
      } else {
        // Corte entre filas, con encabezado repetido.
        const cortes = [];               // índice de la primera fila de cada fragmento
        let ri = 1;
        let avail = free() - rh[0];
        cortes.push(1);
        while (ri < n) {
          if (rh[ri] <= avail) { avail -= rh[ri]; ri++; }
          else { cortes.push(ri); avail = usable - rh[0]; }
        }
        // Ningún fragmento con menos de `minRows` filas: se adelanta el corte.
        for (let k = cortes.length - 1; k > 0; k--) {
          const fin = k === cortes.length - 1 ? n : cortes[k + 1];
          if (fin - cortes[k] < minRows) cortes[k] = Math.max(cortes[k - 1] + minRows, fin - minRows);
        }
        for (let k = 0; k < cortes.length; k++) {
          const from = cortes[k];
          const to = (k === cortes.length - 1 ? n : cortes[k + 1]) - 1;
          if (k > 0) newPage();
          doc.y = drawRun(from, to, doc.y);
        }
        doc.y += 9; doc.x = x;
      }
      continue;
    }

    /* ── Regla 1: párrafos, notas y viñetas nunca se parten ── */
    if (g.h > free() && !atTop()) {
      if (g.h <= usable) newPage();
      else if (free() < usable * 0.3) newPage();  // más largo que una página entera
    }
    drawBlock(doc, b, x, w, ctx, false);
  }
}

/* ───────────────────────── Salida ───────────────────────── */

function make(d) {
  const raw = fs.readFileSync(path.join(DIR, d.src), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const blocks = mdBlocks(raw);

  const doc = new PDFDocument({
    size: PAGE,
    margins: { top: M, bottom: M + FOOTER_H, left: M, right: M },
    bufferPages: true,
    autoFirstPage: true,
  });
  registerFonts(doc);
  doc.info.Title = d.title;
  doc.info.Author = "Final Upgrade AI";
  doc.info.Subject = "Sports World México — propuesta comercial";

  const stream = fs.createWriteStream(path.join(DIR, d.out));
  doc.pipe(stream);

  const w = doc.page.width - M * 2;
  const ctx = { mc: new Measure(w), mc2: new Measure(w) };
  doc.y = M;
  build(doc, blocks, ctx);

  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(range.start + i);
    const ob = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;
    const yy = doc.page.height - M - 10;
    doc.lineWidth(0.5).strokeColor(RULE).moveTo(M, yy - 8).lineTo(doc.page.width - M, yy - 8).stroke();
    doc.font(F.r).fontSize(7.8).fillColor(MUTED)
      .text(d.footer, M, yy, { width: w * 0.7, align: "left", lineBreak: false });
    doc.font(F.r).fontSize(7.8).fillColor(MUTED)
      .text(`${i + 1} / ${range.count}`, M + w * 0.7, yy, { width: w * 0.3, align: "right", lineBreak: false });
    doc.page.margins.bottom = ob;
  }

  doc.end();
  return new Promise((res) => stream.on("finish", () => { console.log("OK · " + d.out + " (" + range.count + " págs)"); res(); }));
}

(async () => { for (const d of DOCS) await make(d); })();
