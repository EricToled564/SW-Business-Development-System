// Genera PDFs legibles (es-MX) con pdfkit desde los .es.md y el HTML localizador.
// Uso: NODE_PATH=/tmp/pdftest/node_modules node build_pdfkit.js
const fs = require("fs");
const PDFDocument = require("pdfkit");

const BASE = require("path").resolve(__dirname, "..");
const SRC = BASE + "/webapp/docs";
const KB = BASE + "/kb";

const DOCS = [
  { src: SRC + "/indice.es.md", kind: "md", title: "Índice de documentos — Mapa y localizador", out: "13-indice-de-documentos.es.pdf" },
  { src: SRC + "/resumen.es.md", kind: "md", title: "Resumen Ejecutivo — Una nueva arquitectura digital", out: "00-resumen-ejecutivo.es.pdf" },
  { src: SRC + "/experience.es.md", kind: "md", title: "UX Architecture Specs — Arquitectura de Experiencia", out: "01-arquitectura-de-experiencia.es.pdf" },
  { src: SRC + "/technical.es.md", kind: "md", title: "Estrategia Técnica", out: "02-estrategia-tecnica.es.pdf" },
  { src: SRC + "/execution.es.md", kind: "md", title: "Plan de Ejecución", out: "03-plan-de-ejecucion.es.pdf" },
  // Los tres documentos contractuales SÍ se generan desde su .md desde agosto de
  // 2026: el Contrato entró en etapa de revisión y sus ocho ajustes (ver
  // PAQUETE-LEGAL.md) deben quedar reflejados en el PDF que se publica. Las
  // versiones anteriores se conservan en /versiones-del-contrato/oficiales/ como
  // registro histórico; el depósito publica el texto vigente.
  { src: SRC + "/contrato.es.md", kind: "md", title: "Contrato de Prestación de Servicios Profesionales y Consultoría", out: "06-contrato.es.pdf" },
  { src: SRC + "/auditoria.es.md", kind: "md", title: "Auditoría inicial del sitio — El Gigante Invisible", out: "07-auditoria-inicial.es.pdf" },
  { src: SRC + "/minuta-2026-06-22.es.md", kind: "md", title: "Minuta — Reunión 22 de junio de 2026", out: "08-minuta-2026-06-22.es.pdf" },
  { src: SRC + "/seguimiento-2026-06-22.es.md", kind: "md", title: "Seguimiento — Reunión 22 de junio de 2026", out: "09-seguimiento-2026-06-22.es.pdf" },
  { src: SRC + "/seguridad.es.md", kind: "md", title: "Seguridad del sistema — Protección de datos personales", out: "10-seguridad-del-sistema.es.pdf" },
  // `estricta`: control tipográfico de viudas y huérfanas. Cambia la paginación,
  // por lo que solo se habilita en este documento; el resto del depósito conserva
  // su salida sin alteración.
  { src: SRC + "/zdr.es.md", kind: "md", title: "Estrategia de Retención Cero (ZDR) — Los datos viven solo en el CRM", out: "33-estrategia-zdr.es.pdf", estricta: true },
  { src: SRC + "/aportaciones.es.md", kind: "md", title: "Status de Entregables Sports World — Sistemas y Marketing", out: "11-status-entregables-sports-world.es.pdf" },
  { src: SRC + "/glosario.es.md", kind: "md", title: "Glosario — Términos técnicos y de negocio", out: "12-glosario.es.pdf" },
  { src: SRC + "/roi.es.md", kind: "md", title: "Calculadora de ROI — Modelo de cohortes con churn", out: "14-calculadora-roi.es.pdf" },
  { src: SRC + "/bds-resumen.es.md", kind: "md", title: "BDS — Resumen Ejecutivo", out: "15-bds-resumen.es.pdf" },
  { src: SRC + "/bds-flujo.es.md", kind: "md", title: "BDS — Flujo de conversión", out: "16-bds-flujo.es.pdf" },
  { src: SRC + "/bds-canales.es.md", kind: "md", title: "BDS — Canales, enrutamiento y SLA", out: "17-bds-canales.es.pdf" },
  { src: SRC + "/bds-tecnica.es.md", kind: "md", title: "BDS — Estrategia Técnica", out: "18-bds-tecnica.es.pdf" },
  { src: SRC + "/bds-medicion.es.md", kind: "md", title: "BDS — Medición y funnel", out: "19-bds-medicion.es.pdf" },
  { src: SRC + "/bds-anexo.es.md", kind: "md", title: "Addendum del Business Development System (Proyecto B)", out: "20-bds-anexo.es.pdf" },
  { src: SRC + "/academia-resumen.es.md", kind: "md", title: "Academia SW — Resumen Ejecutivo", out: "21-academia-resumen.es.pdf" },
  { src: SRC + "/academia-contenido.es.md", kind: "md", title: "Academia SW — Contenido y taxonomía", out: "22-academia-contenido.es.pdf" },
  { src: SRC + "/academia-fases.es.md", kind: "md", title: "Academia SW — Fases del programa", out: "23-academia-fases.es.pdf" },
  { src: SRC + "/academia-tecnica.es.md", kind: "md", title: "Academia SW — Estrategia Técnica", out: "24-academia-tecnica.es.pdf" },
  { src: SRC + "/academia-medicion.es.md", kind: "md", title: "Academia SW — Medición", out: "25-academia-medicion.es.pdf" },
  { src: SRC + "/academia-anexo.es.md", kind: "md", title: "Addendum de la Academia Sports World (Proyecto C)", out: "26-academia-anexo.es.pdf" },
  { src: SRC + "/academia-produccion.es.md", kind: "md", title: "Academia SW — Producción del curso", out: "27-academia-produccion.es.pdf" },
  { src: SRC + "/gastos-operativos.es.md", kind: "md", title: "Gastos Operativos Variables — Tres escenarios", out: "28-gastos-operativos.es.pdf" },
  { src: SRC + "/integracion.es.md", kind: "md", title: "Integración de Datos — CRM, prospecto y funnel", out: "31-integracion-datos.es.pdf" },
  { src: SRC + "/funnel.es.md", kind: "md", title: "Mapa del Funnel — fuentes, accesos y medición", out: "32-mapa-del-funnel.es.pdf" },
  // NOTA: 'voice-agent-knowledge-base.html' quedó obsoleto (contenido previo a las
  // correcciones de esta sesión). Excluido del build; no se sube a la KB.
];

function decodeEntities(s) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}

function mdBlocks(md) {
  md = md.replace(/\r\n/g, "\n");
  const L = md.split("\n");
  const out = [];
  const isSep = (l) => l != null && /-/.test(l) && /^\s*\|?[\s:|-]+\|?\s*$/.test(l);
  let i = 0;
  while (i < L.length) {
    let ln = L[i];
    if (/^```/.test(ln)) { i++; const buf = []; while (i < L.length && !/^```/.test(L[i])) { buf.push(L[i]); i++; } i++; out.push({ t: "code", text: buf.join("\n") }); continue; }
    if (!ln.trim()) { i++; continue; }
    let h = ln.match(/^(#{1,6})\s+(.*)$/);
    if (h) { out.push({ t: "h", level: h[1].length, text: h[2].trim() }); i++; continue; }
    if (/^\s*(---+|\*\*\*+)\s*$/.test(ln)) { out.push({ t: "hr" }); i++; continue; }
    if (/^>\s?/.test(ln)) { const buf = []; while (i < L.length && /^>\s?/.test(L[i])) { buf.push(L[i].replace(/^>\s?/, "")); i++; } out.push({ t: "note", text: buf.join(" ") }); continue; }
    if (ln.includes("|") && isSep(L[i + 1])) {
      const cells = (r) => r.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const rows = [cells(ln)]; i += 2;
      while (i < L.length && L[i].includes("|") && L[i].trim()) { rows.push(cells(L[i])); i++; }
      out.push({ t: "table", rows }); continue;
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(ln)) { while (i < L.length && /^\s*([-*]|\d+\.)\s+/.test(L[i])) { out.push({ t: "li", text: L[i].replace(/^\s*([-*]|\d+\.)\s+/, "").trim() }); i++; } continue; }
    const buf = [ln]; i++;
    while (i < L.length && L[i].trim() && !/^(#{1,6}\s|```|>|\s*([-*]|\d+\.)\s)/.test(L[i]) && !/^\s*(---+|\*\*\*+)\s*$/.test(L[i]) && !(L[i].includes("|") && isSep(L[i + 1]))) { buf.push(L[i]); i++; }
    out.push({ t: "p", text: buf.join(" ") });
  }
  return out;
}

function htmlBlocks(htmlStr) {
  const body = (htmlStr.match(/<body>([\s\S]*)<\/body>/) || [, htmlStr])[1];
  const out = [];
  const txt = (s) => decodeEntities(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  const re = /<(h1|h2|h3|p|ul|table|div)([^>]*)>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(body))) {
    const tag = m[1], inner = m[3];
    if (tag === "h1") out.push({ t: "h", level: 1, text: txt(inner) });
    else if (tag === "h2") out.push({ t: "h", level: 2, text: txt(inner) });
    else if (tag === "h3") out.push({ t: "h", level: 3, text: txt(inner) });
    else if (tag === "p") out.push({ t: "p", text: txt(inner) });
    else if (tag === "div") out.push({ t: "note", text: txt(inner) });
    else if (tag === "ul") { const lis = inner.match(/<li>([\s\S]*?)<\/li>/g) || []; lis.forEach((li) => out.push({ t: "li", text: txt(li) })); }
    else if (tag === "table") {
      const rows = (inner.match(/<tr>([\s\S]*?)<\/tr>/g) || []).map((r) => (r.match(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g) || []).map((c) => txt(c)));
      if (rows.length) out.push({ t: "table", rows });
    }
  }
  return out;
}

function inlineRuns(t) {
  // enlaces internos (#doc/#sección) no navegan en PDF -> solo el texto;
  // enlaces externos conservan la URL entre paréntesis.
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, text, href) => href.charAt(0) === "#" ? text : text + " (" + href + ")");
  const runs = []; const re = /(`[^`]+`|\*\*[^*]+\*\*)/g; let last = 0, m;
  while ((m = re.exec(t))) {
    if (m.index > last) runs.push({ text: t.slice(last, m.index).replace(/\*/g, "") });
    const tok = m[0];
    if (tok[0] === "`") runs.push({ text: tok.slice(1, -1), code: true });
    else runs.push({ text: tok.slice(2, -2), bold: true });
    last = re.lastIndex;
  }
  if (last < t.length) runs.push({ text: t.slice(last).replace(/\*/g, "") });
  return runs.length ? runs : [{ text: t }];
}

const M = 60, INK = "#1d1d1b", GRAY = "#9a9a9a";

// Mide un párrafo con el MISMO motor de composición que lo va a dibujar, sobre
// un documento de prueba idéntico que nunca se escribe a disco. Estimar el
// ancho a mano no reproduce el corte de línea de pdfkit y deja derrames de una
// sola línea; esto sí, porque es la misma máquina.
function medirParrafo(runs, w, isLi, y0, anclaje) {
  const p = new PDFDocument({ size: "LETTER", margins: { top: M, bottom: M, left: M, right: M }, autoFirstPage: true });
  let desbordes = 0;
  p.on("pageAdded", () => { desbordes++; });
  p.x = M; p.y = y0;
  if (isLi) p.font("Helvetica").fontSize(10.5).text("•  ", M, y0, { width: w, continued: true });
  runs.forEach((r, idx) => {
    p.font(r.code ? "Courier" : r.bold ? "Helvetica-Bold" : "Helvetica").fontSize(r.code ? 9.5 : 10.5)
      .text(r.text, isLi || idx > 0 ? undefined : M, isLi || idx > 0 ? undefined : y0, { width: w, continued: true });
  });
  p.font("Helvetica-Oblique").fontSize(7).text(anclaje, { width: w, continued: false });
  return { desbordes, yFinal: p.y };
}

function build(doc, blocks, estricta) {
  const cW = doc.page.width - M * 2;
  let pageNo = 1; doc.on("pageAdded", () => { pageNo++; });
  let sec = "—", pn = 0;
  const room = (h) => { if (doc.y + h > doc.page.height - M) doc.addPage(); };

  // Altura del primer trozo indivisible de un bloque, para decidir si vale la
  // pena empezarlo al pie de una página: en una tabla, su encabezado más la
  // primera fila; en una lista, sus dos primeras líneas.
  const primerTrozo = (b) => {
    if (!b) return 0;
    if (b.t === "table") {
      const cols = b.rows[0].length, colW = cW / cols, pad = 4;
      let alto = 0;
      for (let ri = 0; ri < Math.min(2, b.rows.length); ri++) {
        doc.font(ri === 0 ? "Helvetica-Bold" : "Helvetica").fontSize(9);
        let hh = 0;
        for (const c of b.rows[ri]) hh = Math.max(hh, doc.heightOfString(c || " ", { width: colW - 2 * pad }));
        alto += hh + 2 * pad;
      }
      doc.font("Helvetica").fontSize(10.5);
      return alto;
    }
    if (b.t === "li") return 2 * doc.currentLineHeight(true);
    return 0;
  };

  for (let bi = 0; bi < blocks.length; bi++) {
    const b = blocks[bi];
    if (b.t === "hr") { doc.moveDown(0.3); continue; }
    if (b.t === "h") {
      const num = (b.text.match(/^(\d+(?:\.\d+)?)/) || [])[1]; if (num) sec = num;
      const size = b.level === 1 ? 19 : b.level === 2 ? 14.5 : 12;
      // Con tipografía estricta, un encabezado nunca queda solo al pie: se le
      // exige espacio para sí mismo y para las primeras líneas que encabeza.
      doc.moveDown(b.level === 1 ? 0.2 : 0.6); room(size * 1.6 + (estricta ? 48 : 0));
      doc.font("Helvetica-Bold").fontSize(size).fillColor(INK).text(b.text, { width: cW });
      doc.moveDown(0.25);
      continue;
    }
    if (b.t === "code") {
      doc.font("Courier").fontSize(8.5);
      const h = doc.heightOfString(b.text, { width: cW - 12 }) + 10;
      room(h); const y0 = doc.y;
      doc.save().rect(M, y0, cW, h).fill("#f3f4f6").restore();
      doc.fillColor("#222").font("Courier").fontSize(8.5).text(b.text, M + 6, y0 + 5, { width: cW - 12 });
      doc.y = y0 + h; doc.x = M; doc.moveDown(0.4);
      continue;
    }
    if (b.t === "note") {
      // La caja se compone en un solo bloque de cursiva —encadenar tramos con
      // tipografías distintas descuadraba la altura y encimaba los renglones—.
      // Los marcadores de énfasis del markdown se retiran para que no se
      // impriman literales; el énfasis lo da la cursiva de toda la caja.
      const nTexto = inlineRuns(b.text).map((r) => r.text).join("");
      doc.font("Helvetica-Oblique").fontSize(9.5);
      const h = doc.heightOfString(nTexto, { width: cW - 16 }) + 10;
      room(h); const y0 = doc.y;
      doc.save().rect(M, y0, cW, h).fill("#fff6e7").restore();
      doc.fillColor(INK).font("Helvetica-Oblique").fontSize(9.5).text(nTexto, M + 8, y0 + 5, { width: cW - 16 });
      doc.y = y0 + h; doc.x = M; doc.moveDown(0.4);
      continue;
    }
    if (b.t === "table") {
      const cols = b.rows[0].length, colW = cW / cols, pad = 4;
      for (let ri = 0; ri < b.rows.length; ri++) {
        const head = ri === 0;
        doc.font(head ? "Helvetica-Bold" : "Helvetica").fontSize(9);
        let hh = 0;
        for (const c of b.rows[ri]) hh = Math.max(hh, doc.heightOfString(c || " ", { width: colW - 2 * pad }));
        hh += 2 * pad;
        // Con tipografía estricta, el encabezado de una tabla no se queda solo
        // al pie: se le exige espacio para sí mismo y su primera fila de datos.
        let need = hh;
        if (estricta && head && b.rows.length > 1) {
          doc.font("Helvetica").fontSize(9);
          let h1 = 0;
          for (const c of b.rows[1]) h1 = Math.max(h1, doc.heightOfString(c || " ", { width: colW - 2 * pad }));
          need += h1 + 2 * pad;
          doc.font("Helvetica-Bold").fontSize(9);
        }
        room(need); const y0 = doc.y;
        if (head) doc.save().rect(M, y0, cW, hh).fill("#eef0f2").restore();
        doc.fillColor(INK).font(head ? "Helvetica-Bold" : "Helvetica").fontSize(9);
        for (let ci = 0; ci < b.rows[ri].length; ci++) doc.text(b.rows[ri][ci] || "", M + ci * colW + pad, y0 + pad, { width: colW - 2 * pad });
        doc.lineWidth(0.5).strokeColor("#cccccc").rect(M, y0, cW, hh).stroke();
        for (let ci = 1; ci < cols; ci++) doc.moveTo(M + ci * colW, y0).lineTo(M + ci * colW, y0 + hh).stroke();
        doc.y = y0 + hh; doc.x = M;
      }
      doc.moveDown(0.5);
      continue;
    }
    // p / li
    const isLi = b.t === "li";
    const indent = isLi ? 14 : 0;
    doc.font("Helvetica").fontSize(10.5).fillColor(INK);
    const x = M + indent, w = cW - indent;
    const runs = inlineRuns(b.text);
    if (estricta) {
      // Control de viudas y huérfanas, medido con el motor real (medirParrafo).
      // Si el párrafo se parte, se exigen 2 líneas al pie y 3 al arrastre: la
      // última del arrastre puede ser el anclaje, de modo que siempre quedan
      // 2 líneas de texto real. Si no se cumple, el párrafo pasa entero.
      const LH = doc.currentLineHeight(true);
      const { desbordes, yFinal } = medirParrafo(runs, w, isLi, doc.y, "  [§00.0 ¶000 p.00]");
      const alPie = doc.page.height - M - doc.y;
      const arrastre = desbordes ? yFinal - M : 0;
      let saltar = desbordes && (alPie < 2 * LH || arrastre < 3 * LH);
      // Mantener con lo que sigue: una línea de entrada —la que anuncia una tabla
      // o una lista— no se queda sola al pie mientras su contenido pasa a la
      // página siguiente. Si el bloque anunciado no alcanza a empezar aquí, el
      // párrafo se va con él.
      if (!saltar && !desbordes) {
        const necesita = primerTrozo(blocks[bi + 1]);
        if (necesita && yFinal + LH * 0.32 + necesita > doc.page.height - M) saltar = true;
      }
      if (saltar) doc.addPage();
    } else {
      room(16);
    }
    const start = pageNo; pn++;
    const anchor = `  [§${sec} ¶${pn} p.${start}]`;
    if (isLi) { doc.font("Helvetica").fontSize(10.5).fillColor(INK).text("•  ", x, doc.y, { width: w, continued: true }); }
    runs.forEach((r, idx) => {
      const f = r.code ? "Courier" : r.bold ? "Helvetica-Bold" : "Helvetica";
      doc.font(f).fontSize(r.code ? 9.5 : 10.5).fillColor(INK).text(r.text, isLi || idx > 0 ? undefined : x, isLi || idx > 0 ? undefined : doc.y, { width: w, continued: true });
    });
    doc.font("Helvetica-Oblique").fontSize(7).fillColor(GRAY).text(anchor, { width: w, continued: false });
    doc.fillColor(INK); doc.moveDown(0.32);
  }
}

function make(d) {
  let raw = fs.readFileSync(d.src, "utf8");
  raw = raw.replace(/<!--[\s\S]*?-->/g, "");  // quita comentarios HTML (p. ej. directivas audit-ignore)
  // Interactive-only markers render as a static note in the PDF.
  raw = raw.replace(/\[\[ROI\]\]/g, "_(Calculadora de ROI interactiva — disponible en el web app, sección «Calculadora de ROI».)_");
  raw = raw.replace(/\[\[APORTACIONES:[^\]]+\]\]/g, "_(Tablero de aportaciones con semáforo de estatus — disponible en el web app, sección «Status de Entregables Sports World».)_");
  const blocks = d.kind === "md" ? mdBlocks(raw) : htmlBlocks(raw);
  const doc = new PDFDocument({ size: "LETTER", margins: { top: M, bottom: M, left: M, right: M }, bufferPages: true, autoFirstPage: true });
  doc.info.Title = d.title; doc.info.Author = "Final Upgrade AI"; doc.info.Subject = "Documentación UX Sports World (es-MX) — KB para agente de voz";
  const stream = fs.createWriteStream(KB + "/" + d.out);
  doc.pipe(stream);
  build(doc, blocks, !!d.estricta);
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(range.start + i);
    const ob = doc.page.margins.bottom; doc.page.margins.bottom = 0; // avoid auto page-break when writing in footer area
    doc.font("Helvetica-Oblique").fontSize(8).fillColor(GRAY)
      .text(`${d.title}  ·  pág. ${i + 1} de ${range.count}`, M, doc.page.height - 42, { width: doc.page.width - M * 2, align: "left", lineBreak: false });
    doc.page.margins.bottom = ob;
  }
  doc.end();
  return new Promise((res) => stream.on("finish", () => { console.log("OK", d.out, "(" + range.count + " págs)"); res(); }));
}

(async () => { for (const d of DOCS) await make(d); })();
