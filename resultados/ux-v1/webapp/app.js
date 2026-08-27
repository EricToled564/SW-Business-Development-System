/* Sports World · Proyecto Digital — bilingual static viewer (no build, no deps) */
(function () {
  "use strict";

  const I18N = {
    es: {
      suite: "Proyecto Digital",
      search: "Buscar en esta sección…",
      onthispage: "En esta página",
      groups: { generales: "El sistema · marco y contrato", proceso: "El proceso comercial · procedimientos normalizados", evidencia: "La evidencia", reuniones: "Reuniones", medicion: "La medición · el funnel completo", proyectoA: "Proyecto A · Rediseño Web — captación y conversión", bds: "Proyecto B · BDS — canales en tiempo real", academia: "Proyecto C · Academia — capacidad humana" },
      loading: "Cargando…",
      error:
        "No se pudo cargar el documento. Sirve esta carpeta por HTTP (por ejemplo, ejecuta «python3 -m http.server» dentro de la carpeta webapp) y vuelve a cargar.",
      nomatch: "Sin coincidencias",
      download: "Descargar PDF",
      pending: "Contenido pendiente",
      auditTitle: "Auditoría inicial del sitio web",
      auditBody:
        "Esta sección presentará la auditoría inicial del sitio web actual de Sports World —rendimiento, SEO, accesibilidad, UX y aspectos técnicos. El contenido se integrará en cuanto se reciban los hallazgos y datos de la auditoría.",
      demoTitle: "Demo del cuestionario inteligente",
      demoBody:
        "El demo del cuestionario inteligente (flujo de experiencia ideal) ya está alineado al 100% con el UX Architecture Specs. Falta el paso de integración: empaquetarlo con React y resolver el proxy del modelo de lenguaje para que corra incrustado aquí.",
      demoLinkLabel: "Liga directa al demo:",
      demoOpen: "Abrir en una pestaña nueva",
      demoMobile: "Versión móvil",
      pageOpen: "Abrir en pestaña nueva",
      pagePrint: "Imprimir o guardar en PDF",
      pageFind: "Buscar en el documento…",
      pageStep: "Ir al paso",
      pageResp: "Responsable",
      pageRespAll: "Todos",
      pageKeys: "Índice de claves",
      pageKeysHint: "Claves citadas en este documento. Haz clic para ir a la primera mención.",
      pageMatches: "de",
      pageNoMatch: "sin coincidencias",
      pageClear: "Limpiar",
      pageCopyLink: "Copiar liga a este paso",
      pageCopied: "Liga copiada",
      pageStepsHint: "pasos",
    },
    en: {
      suite: "Digital Project",
      search: "Search this section…",
      onthispage: "On this page",
      groups: { generales: "The System · Framework & Contract", proceso: "The Commercial Process · Standard Operating Procedures", evidencia: "The Evidence", reuniones: "Meetings", medicion: "Measurement · The Full Funnel", proyectoA: "Project A · Web Redesign — Capture & Conversion", bds: "Project B · BDS — Real-Time Channels", academia: "Project C · Academy — Human Capability" },
      loading: "Loading…",
      error:
        "Could not load the document. Serve this folder over HTTP (e.g. run “python3 -m http.server” inside the webapp folder) and reload.",
      nomatch: "No matches",
      download: "Download PDF",
      pending: "Content pending",
      auditTitle: "Initial website audit",
      auditBody:
        "This section will present the initial audit of Sports World's current website — performance, SEO, accessibility, UX and technical aspects. The content will be integrated as soon as the audit findings and data are received.",
      demoTitle: "Smart questionnaire demo",
      demoBody:
        "The smart questionnaire demo (ideal-experience flow) is now 100% aligned with the UX Architecture Specs. The remaining step is integration: bundling it with React and wiring the language-model proxy so it runs embedded here.",
      demoLinkLabel: "Direct link to the demo:",
      demoOpen: "Open in a new tab",
      demoMobile: "Mobile version",
      pageOpen: "Open in a new tab",
      pagePrint: "Print or save as PDF",
      pageFind: "Search this document…",
      pageStep: "Go to step",
      pageResp: "Responsible",
      pageRespAll: "All",
      pageKeys: "Key index",
      pageKeysHint: "Keys cited in this document. Click to jump to the first mention.",
      pageMatches: "of",
      pageNoMatch: "no matches",
      pageClear: "Clear",
      pageCopyLink: "Copy link to this step",
      pageCopied: "Link copied",
      pageStepsHint: "steps",
    },
  };

  // type: "doc" (markdown + optional pdf) | "placeholder" (audit/demo)
  const DOCS = [
    { id: "indice", type: "doc", group: "generales", red: true, pdf: "13-indice-de-documentos.es.pdf",
      title: { es: "Índice de documentos", en: "Document Index" } },
    { id: "resumen", type: "doc", group: "generales", red: true, pdf: "00-resumen-ejecutivo.es.pdf",
      title: { es: "Resumen Ejecutivo", en: "Executive Summary" } },
    { id: "contrato", type: "doc", group: "generales", red: true, pdf: "06-contrato.es.pdf",
      title: { es: "Contrato", en: "Contract" } },
    { id: "anexo-uno", type: "ref", group: "generales", red: true, ref: "contrato", anchor: "anexo-uno-aportaciones-de-sports-world-requerimientos-a-cargo-del-cliente",
      title: { es: "Anexo Uno · Aportaciones de SW", en: "Annex One · Sports World Contributions" } },
    { id: "anexo-dos", type: "ref", group: "generales", red: true, ref: "contrato", anchor: "anexo-dos-entregables-especficos-de-los-servicios",
      title: { es: "Anexo Dos · Entregables, soporte y operación", en: "Annex Two · Deliverables, support & operations" } },
    { id: "glosario", type: "doc", group: "generales", red: true, pdf: "12-glosario.es.pdf",
      title: { es: "Glosario", en: "Glossary" } },
    { id: "execution", type: "doc", group: "generales", red: true, pdf: "03-plan-de-ejecucion.es.pdf",
      title: { es: "Plan de Ejecución", en: "Execution Plan" } },
    { id: "gastos-operativos", type: "doc", group: "generales", red: true, pdf: "28-gastos-operativos.es.pdf",
      title: { es: "Gastos Operativos Variables", en: "Variable Operating Costs" } },
    { id: "demo", type: "embed", group: "generales", red: true, src: "demo/index.html",
      title: { es: "Demo Cuestionario Inteligente", en: "Smart Questionnaire Demo" } },
    { id: "mpc-01", type: "page", group: "proceso", red: true, src: "proceso/mpc-01.html",
      title: { es: "MPC/SW/01 · Manual del Proceso Comercial", en: "MPC/SW/01 · Commercial Process Manual" } },
    { id: "sop-0101", type: "page", group: "proceso", src: "proceso/sop-0101.html",
      title: { es: "SOP/SW/0101 · Captación por WhatsApp", en: "SOP/SW/0101 · Capture via WhatsApp" } },
    { id: "sop-0102", type: "page", group: "proceso", src: "proceso/sop-0102.html",
      title: { es: "SOP/SW/0102 · Captación por el sitio web", en: "SOP/SW/0102 · Capture via the website" } },
    { id: "sop-0103", type: "page", group: "proceso", src: "proceso/sop-0103.html",
      title: { es: "SOP/SW/0103 · Captación en consola", en: "SOP/SW/0103 · Capture at the advisor console" } },
    { id: "sop-0201", type: "page", group: "proceso", src: "proceso/sop-0201.html",
      title: { es: "SOP/SW/0201 · La Experiencia Guiada", en: "SOP/SW/0201 · The Guided Experience" } },
    { id: "dec-01", type: "page", group: "proceso", src: "proceso/dec-01.html",
      title: { es: "DEC/SW/01 · Bitácora de decisiones", en: "DEC/SW/01 · Decision log" } },
    { id: "experience", type: "doc", group: "proyectoA", pdf: "01-arquitectura-de-experiencia.es.pdf",
      title: { es: "Arquitectura de Experiencia (UX)", en: "Experience Architecture (UX)" } },
    { id: "technical", type: "doc", group: "proyectoA", pdf: "02-estrategia-tecnica.es.pdf",
      title: { es: "Estrategia Técnica", en: "Technical Strategy" } },
    { id: "funnel", type: "doc", group: "medicion", pdf: "32-mapa-del-funnel.es.pdf",
      title: { es: "Mapa del Funnel · fuentes y accesos", en: "Funnel Map · Sources & Access" } },
    { id: "integracion", type: "doc", group: "medicion", pdf: "31-integracion-datos.es.pdf",
      title: { es: "Integración de Datos · CRM y Funnel", en: "Data Integration · CRM & Funnel" } },
    { id: "seguridad", type: "doc", group: "proyectoA", pdf: "10-seguridad-del-sistema.es.pdf",
      title: { es: "Seguridad del sistema", en: "System Security" } },
    { id: "bds-resumen", type: "doc", group: "bds", pdf: "15-bds-resumen.es.pdf",
      title: { es: "BDS · Resumen Ejecutivo", en: "BDS · Executive Summary" } },
    { id: "bds-flujo", type: "doc", group: "bds", pdf: "16-bds-flujo.es.pdf",
      title: { es: "BDS · Flujo de conversión", en: "BDS · Conversion Flow" } },
    { id: "bds-canales", type: "doc", group: "bds", pdf: "17-bds-canales.es.pdf",
      title: { es: "BDS · Canales y enrutamiento", en: "BDS · Channels & Routing" } },
    { id: "bds-tecnica", type: "doc", group: "bds", pdf: "18-bds-tecnica.es.pdf",
      title: { es: "BDS · Estrategia Técnica", en: "BDS · Technical Strategy" } },
    { id: "bds-medicion", type: "doc", group: "bds", pdf: "19-bds-medicion.es.pdf",
      title: { es: "BDS · Medición y funnel", en: "BDS · Measurement & Funnel" } },
    { id: "bds-anexo", type: "doc", group: "bds", pdf: "20-bds-anexo.es.pdf",
      title: { es: "BDS · Addendum contractual", en: "BDS · Contract Addendum" } },
    { id: "academia-resumen", type: "doc", group: "academia", pdf: "21-academia-resumen.es.pdf",
      title: { es: "Academia · Resumen Ejecutivo", en: "Academy · Executive Summary" } },
    { id: "academia-contenido", type: "doc", group: "academia", pdf: "22-academia-contenido.es.pdf",
      title: { es: "Academia · Contenido y taxonomía", en: "Academy · Content & Taxonomy" } },
    { id: "academia-fases", type: "doc", group: "academia", pdf: "23-academia-fases.es.pdf",
      title: { es: "Academia · Fases del programa", en: "Academy · Program Phases" } },
    { id: "academia-produccion", type: "doc", group: "academia", pdf: "27-academia-produccion.es.pdf",
      title: { es: "Academia · Producción del curso", en: "Academy · Course Production" } },
    { id: "academia-tecnica", type: "doc", group: "academia", pdf: "24-academia-tecnica.es.pdf",
      title: { es: "Academia · Estrategia Técnica", en: "Academy · Technical Strategy" } },
    { id: "academia-medicion", type: "doc", group: "academia", pdf: "25-academia-medicion.es.pdf",
      title: { es: "Academia · Medición", en: "Academy · Measurement" } },
    { id: "academia-anexo", type: "doc", group: "academia", pdf: "26-academia-anexo.es.pdf",
      title: { es: "Academia · Addendum contractual", en: "Academy · Contract Addendum" } },
    { id: "aportaciones", type: "doc", group: "proyectoA",
      title: { es: "Status de Entregables Sports World", en: "Sports World Deliverables Status" } },
    { id: "minuta-2026-06-22", type: "doc", group: "reuniones", pdf: "08-minuta-2026-06-22.es.pdf",
      title: { es: "Minuta · 22 jun 2026", en: "Minutes · Jun 22, 2026" } },
    { id: "seguimiento-2026-06-22", type: "doc", group: "reuniones", pdf: "09-seguimiento-2026-06-22.es.pdf",
      title: { es: "Seguimiento · 22 jun 2026", en: "Follow-up · Jun 22, 2026" } },
    { id: "presentacion-sistemas", type: "embed", group: "reuniones", red: true, src: "presentacion/index.html",
      title: { es: "Presentación · Sesión con Sistemas", en: "Deck · IT Review Session" } },
    { id: "auditoria", type: "doc", group: "evidencia", pdf: "07-auditoria-inicial.es.pdf",
      title: { es: "Auditoría inicial del sitio", en: "Initial site audit" } },
    { id: "roi", type: "doc", group: "proyectoA",
      title: { es: "Calculadora de ROI", en: "ROI Calculator" } },
    { id: "workshop-discovery", type: "doc", group: "evidencia",
      title: { es: "Workshop Discovery · Líderes regionales", en: "Discovery Workshop · Regional Leaders" } },
    { id: "entrevistas-campo", type: "doc", group: "evidencia", pdf: "30-reporte-entrevistas.es.pdf",
      title: { es: "Reporte de Entrevistas de Campo", en: "Field Interviews Report" } },
  ];
  const GROUP_ORDER = ["generales", "proceso", "medicion", "evidencia", "reuniones", "proyectoA", "bds", "academia"];

  let lang = "es"; // sección del cliente: solo español (ver index.html)
  let currentDoc = null;
  let embedFit = null; // handler que ajusta la altura del iframe del demo a la ventana realmente visible
  const cache = {};

  const $ = (s) => document.querySelector(s);
  const elDoc = $("#doc"), elToc = $("#toc"), elSidebar = $("#sidebar"), elSearch = $("#search");

  /* ---------- Markdown renderer (headings, lists, tables, code, blockquote) ---------- */
  function escapeHtml(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function inline(raw) {
    let s = escapeHtml(raw);
    const codes = [];
    s = s.replace(/`([^`]+)`/g, (m, c) => { codes.push(c); return "  " + (codes.length - 1) + "  "; });
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, text, href) =>
      href.charAt(0) === "#"
        ? '<a class="xref" href="' + href + '">' + text + "</a>"          // enlace interno (doc/sección)
        : '<a href="' + href + '" target="_blank" rel="noopener">' + text + "</a>");
    s = s.replace(/ (\d+) /g, (m, i) => "<code>" + codes[+i] + "</code>");
    return s;
  }

  function splitRow(line) {
    let s = line.trim();
    if (s.startsWith("|")) s = s.slice(1);
    if (s.endsWith("|")) s = s.slice(0, -1);
    return s.split("|").map((c) => c.trim());
  }
  const isSep = (l) => l != null && /-/.test(l) && /^\s*\|?[\s:|-]+\|?\s*$/.test(l);
  const isBlockStart = (l, next) =>
    l == null || /^\s*$/.test(l) || /^#{1,6}\s/.test(l) || /^```/.test(l) || /^>\s?/.test(l) ||
    /^\s*(---+|\*\*\*+)\s*$/.test(l) || /^\s*([-*]|\d+\.)\s+/.test(l) || (l.indexOf("|") >= 0 && isSep(next));

  function mdToHtml(md) {
    md = md.replace(/\r\n/g, "\n");
    md = md.replace(/<!--[\s\S]*?-->/g, "");  // quita comentarios HTML (p. ej. directivas audit-ignore)
    const lines = md.split("\n");
    const headings = [];
    const used = {};
    function slug(t) {
      let base = t.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 80) || "s";
      let id = base, n = 1; while (used[id]) id = base + "-" + (++n); used[id] = 1; return id;
    }
    let html = "", i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^```/.test(line)) {
        i++; const buf = [];
        while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++; html += "<pre><code>" + escapeHtml(buf.join("\n")) + "</code></pre>"; continue;
      }
      if (/^\s*$/.test(line)) { i++; continue; }
      const h = line.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        const lvl = h[1].length, text = h[2].trim(), id = slug(text);
        if (lvl === 2 || lvl === 3) headings.push({ lvl, text, id });
        html += "<h" + lvl + ' id="' + id + '">' + inline(text) + "</h" + lvl + ">"; i++; continue;
      }
      if (/^\s*(---+|\*\*\*+)\s*$/.test(line)) { html += "<hr/>"; i++; continue; }
      if (/^>\s?/.test(line)) {
        const buf = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, "")); i++; }
        html += "<blockquote>" + inline(buf.join(" ")) + "</blockquote>"; continue;
      }
      if (line.indexOf("|") >= 0 && isSep(lines[i + 1])) {
        const header = splitRow(line); i += 2; const rows = [];
        while (i < lines.length && lines[i].indexOf("|") >= 0 && !/^\s*$/.test(lines[i])) { rows.push(splitRow(lines[i])); i++; }
        let t = "<table><thead><tr>" + header.map((c) => "<th>" + inline(c) + "</th>").join("") + "</tr></thead><tbody>";
        for (const r of rows) t += "<tr>" + r.map((c) => "<td>" + inline(c) + "</td>").join("") + "</tr>";
        html += t + "</tbody></table>"; continue;
      }
      if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
        const ordered = /^\s*\d+\.\s/.test(line); const buf = [];
        while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, "")); i++; }
        const tag = ordered ? "ol" : "ul";
        html += "<" + tag + ">" + buf.map((x) => "<li>" + inline(x) + "</li>").join("") + "</" + tag + ">"; continue;
      }
      const buf = [line]; i++;
      while (i < lines.length && !isBlockStart(lines[i], lines[i + 1])) { buf.push(lines[i]); i++; }
      html += "<p>" + inline(buf.join(" ")) + "</p>";
    }
    return { html, headings };
  }

  /* ---------- UI ---------- */
  function t() { return I18N[lang]; }

  const GROUP_TITLE_RED = ["proceso", "medicion", "proyectoA", "bds", "academia"];

  function renderSidebar() {
    const groups = {};
    DOCS.forEach((d) => { (groups[d.group] = groups[d.group] || []).push(d); });
    let html = "";
    GROUP_ORDER.forEach((g) => {
      if (!groups[g]) return;
      html += '<div class="nav-group"><h4' + (GROUP_TITLE_RED.includes(g) ? ' class="group-title-red"' : "") + ">" + t().groups[g] + "</h4>";
      groups[g].forEach((d) => {
        html += '<a class="nav-item' + (d.red ? " nav-red" : "") + (d.id === currentDoc ? " active" : "") + '" data-doc="' + d.id + '" href="#' + d.id + '">' + d.title[lang] + "</a>";
      });
      html += "</div>";
    });
    elSidebar.innerHTML = html;
  }

  function buildToc(headings) {
    if (!headings.length) { elToc.innerHTML = ""; return; }
    let html = "<h5>" + t().onthispage + "</h5>";
    headings.forEach((h) => {
      html += '<a class="' + (h.lvl === 3 ? "lvl3" : "") + '" href="#' + h.id + '" data-toc="' + h.id + '">' + h.text.replace(/[*`]/g, "") + "</a>";
    });
    elToc.innerHTML = html;
  }

  function renderPlaceholder(doc) {
    const title = doc.kind === "audit" ? t().auditTitle : t().demoTitle;
    const body = doc.kind === "audit" ? t().auditBody : t().demoBody;
    elDoc.innerHTML =
      '<h1>' + doc.title[lang] + '</h1>' +
      '<div class="placeholder"><span class="pending-badge">' + t().pending + '</span>' +
      '<h2 style="border:0;margin-top:.6rem">' + title + '</h2>' +
      '<p>' + body + '</p></div>';
    elToc.innerHTML = "";
    document.title = doc.title[lang] + " · Sports World";
  }

  async function loadDoc(id, push, anchor) {
    const doc = DOCS.find((d) => d.id === id) || DOCS[0];
    currentDoc = doc.id;
    // ocultar el widget de BES sobre el demo (tapa el botón en móvil).
    // Se usa una clase en <html> con regla !important (el widget fija su propio
    // estilo inline en el host, así que display:none directo no basta) y además
    // se oculta el host por si la clase aún no aplica.
    const isEmbed = doc.type === "embed";
    document.documentElement.classList.toggle("demo-active", isEmbed);
    const bes = document.querySelector("elevenlabs-convai");
    if (bes) bes.style.display = isEmbed ? "none" : "";
    // al salir del demo, dejar de ajustar la altura del iframe
    if (!isEmbed && embedFit) { window.removeEventListener("resize", embedFit); embedFit = null; }
    teardownPage();
    renderSidebar();
    elToc.innerHTML = "";

    if (doc.type === "placeholder") {
      renderPlaceholder(doc);
      if (push) history.replaceState(null, "", "#" + doc.id);
      window.scrollTo(0, 0);
      closeSidebar();
      return;
    }

    if (doc.type === "page") {
      renderPage(doc, anchor);
      if (push) history.replaceState(null, "", "#" + doc.id + (anchor ? ":" + anchor : ""));
      document.title = doc.title[lang] + " · Sports World";
      closeSidebar();
      return;
    }

    if (doc.type === "embed") {
      // Liga directa al demo: además del incrustado, se muestra la URL absoluta
      // para poder abrirla, copiarla y compartirla fuera de la app.
      const demoUrl = new URL(doc.src, location.href).href;
      const mobileUrl = new URL("demo/movil.html", location.href).href;
      elDoc.innerHTML =
        '<div class="embed-link">' +
        '<span class="embed-link-label">' + t().demoLinkLabel + '</span>' +
        '<a class="embed-link-url" href="' + demoUrl + '" target="_blank" rel="noopener">' + demoUrl + '</a>' +
        '<span class="embed-link-actions">' +
        '<a class="embed-link-btn" href="' + demoUrl + '" target="_blank" rel="noopener">' + t().demoOpen + ' ↗</a>' +
        '<a class="embed-link-btn" href="' + mobileUrl + '" target="_blank" rel="noopener">' + t().demoMobile + ' ↗</a>' +
        '</span>' +
        '</div>' +
        '<div class="embed-wrap"><iframe class="embed-frame" src="' + doc.src +
        '?v=20260706a" title="' + doc.title[lang] + '"></iframe></div>';
      elToc.innerHTML = "";
      // Fijar la altura del iframe a la ventana REALMENTE visible (window.innerHeight),
      // no a 100vh/100dvh: dentro de un iframe esas unidades son poco fiables en móvil
      // y empujaban el botón del demo fuera de la pantalla. Se reajusta al rotar/redimensionar.
      const wrap = elDoc.querySelector(".embed-wrap");
      if (embedFit) window.removeEventListener("resize", embedFit);
      embedFit = function () {
        const tb = document.querySelector(".topbar");
        const lk = elDoc.querySelector(".embed-link");
        const h = window.innerHeight - (tb ? tb.offsetHeight : 0) - (lk ? lk.offsetHeight + 12 : 0);
        if (wrap) wrap.style.height = h + "px";
      };
      embedFit();
      window.addEventListener("resize", embedFit);
      if (push) history.replaceState(null, "", "#" + doc.id);
      document.title = doc.title[lang] + " · Sports World";
      window.scrollTo(0, 0);
      closeSidebar();
      return;
    }

    elDoc.innerHTML = '<p class="loading">' + t().loading + "</p>";
    const key = doc.id + "." + lang;
    try {
      let md = cache[key];
      if (md == null) {
        let res = await fetch("docs/" + doc.id + "." + lang + ".md", { cache: "no-cache" });
        if (!res.ok && lang !== "es") res = await fetch("docs/" + doc.id + ".es.md", { cache: "no-cache" }); // fallback to ES
        if (!res.ok) throw new Error("HTTP " + res.status);
        md = await res.text(); cache[key] = md;
      }
      const out = mdToHtml(md);
      let header = "";
      if (doc.pdf) {
        header = '<div class="doc-actions"><a class="dl-btn" href="kb/' + doc.pdf + '" download>' +
          '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"/></svg>' +
          t().download + '</a></div>';
      }
      elDoc.innerHTML = header + out.html;
      mountWidgets();
      buildToc(out.headings);
      setupSpy(out.headings);
      applySearch();
      scrollToAnchor(anchor);
      document.title = doc.title[lang] + " · Sports World";
    } catch (e) {
      elDoc.innerHTML = '<p class="error">' + t().error + "</p>";
    }
    if (push) history.replaceState(null, "", "#" + doc.id + (anchor ? ":" + anchor : ""));
    closeSidebar();
  }

  /* desplaza a una sección (anchor = id de encabezado) y la resalta brevemente */
  function scrollToAnchor(anchor) {
    if (!anchor) { window.scrollTo(0, 0); return; }
    const el = document.getElementById(anchor);
    if (!el) { window.scrollTo(0, 0); return; }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("xref-flash");
    setTimeout(() => el.classList.remove("xref-flash"), 1600);
  }

  /* mount interactive widgets embedded in docs via markers (e.g. [[ROI]]) */
  function mountWidgets() {
    elDoc.querySelectorAll("p").forEach((p) => {
      const txt = p.textContent.trim();
      if (txt === "[[ROI]]" && typeof window.mountROICalculator === "function") {
        const div = document.createElement("div");
        p.replaceWith(div);
        window.mountROICalculator(div, lang);
      } else if ((txt === "[[APORTACIONES:sistemas]]" || txt === "[[APORTACIONES:marketing]]") && typeof window.mountAportaciones === "function") {
        const which = txt.indexOf("marketing") >= 0 ? "marketing" : "sistemas";
        const div = document.createElement("div");
        p.replaceWith(div);
        window.mountAportaciones(div, which, lang);
      }
    });
  }

  /* ---------- Páginas del Proceso Comercial (type: "page") ----------------
   * Documentos que se publican con su propia composición —tablas de pasos con
   * código de color, diagramas y cabecera de control— en lugar de markdown.
   * Se muestran en un marco de la misma procedencia, de modo que el visor puede
   * leerlos y montarles encima las funciones de lectura: índice del documento,
   * búsqueda con resaltado, ancla por paso, filtro por responsable, enlaces
   * cruzados entre procedimientos e índice de claves.
   * ---------------------------------------------------------------------- */
  function headOffset() { const tb = document.querySelector(".topbar"); return (tb ? tb.offsetHeight : 56) + 8; }
  const CLAVE_A_DOC = {
    "MPC/SW/01": "mpc-01", "SOP/SW/0101": "sop-0101", "SOP/SW/0102": "sop-0102",
    "SOP/SW/0103": "sop-0103", "SOP/SW/0201": "sop-0201", "DEC/SW/01": "dec-01",
  };
  const RE_CLAVES = /\b(?:MPC\/SW\/01|DEC\/SW\/01|SOP\/SW\/\d{4}|P-\d{2}|E[2-7]|D-\d{2}|(?:CEI|BA|CAM|CAT|EI|AU|MC|PL|CR|RS|PV|AP)-\d{2})\b/g;
  let page = null;   // { fr, doc, hits, at, ro, onScroll }

  function teardownPage() {
    if (!page) return;
    if (page.ro) page.ro.disconnect();
    if (page.onScroll) window.removeEventListener("scroll", page.onScroll);
    if (page.onResize) window.removeEventListener("resize", page.onResize);
    page = null;
    document.documentElement.classList.remove("page-active");
  }

  function renderPage(doc, anchor) {
    document.documentElement.classList.add("page-active");
    const abs = new URL(doc.src, location.href).href;
    elDoc.innerHTML =
      '<div class="page-bar">' +
        '<span class="page-bar-title">' + doc.title[lang] + "</span>" +
        '<span class="page-bar-actions">' +
          '<a class="page-btn" href="' + abs + '" target="_blank" rel="noopener">' + t().pageOpen + " ↗</a>" +
          '<button class="page-btn" id="pgPrint" type="button">' + t().pagePrint + "</button>" +
        "</span>" +
      "</div>" +
      '<div class="page-tools">' +
        '<span class="pt-find">' +
          '<input id="pgFind" type="search" autocomplete="off" placeholder="' + t().pageFind + '">' +
          '<span class="pt-count" id="pgCount"></span>' +
          '<button class="pt-nav" id="pgPrev" type="button" aria-label="anterior">↑</button>' +
          '<button class="pt-nav" id="pgNext" type="button" aria-label="siguiente">↓</button>' +
        "</span>" +
        '<label class="pt-field" id="pgStepWrap"><span>' + t().pageStep + "</span>" +
          '<input id="pgStep" type="number" min="1" inputmode="numeric"></label>' +
        '<label class="pt-field" id="pgRespWrap"><span>' + t().pageResp + "</span>" +
          '<select id="pgResp"></select></label>' +
        '<button class="page-btn" id="pgKeys" type="button">' + t().pageKeys + "</button>" +
      "</div>" +
      '<div class="pg-keys" id="pgKeysPanel" hidden></div>' +
      '<div class="page-wrap"><iframe id="pgFrame" class="page-frame" title="' + doc.title[lang] + '" src="' + doc.src + '"></iframe></div>';

    elToc.innerHTML = "";
    const fr = document.getElementById("pgFrame");
    page = { fr: fr, doc: doc, hits: [], at: -1, ro: null, onScroll: null, onResize: null };
    // El marco se prepara en cuanto su documento está listo, sin esperar al evento
    // "load": ese evento aguarda a subrecursos externos (las tipografías) y en una
    // red lenta dejaría el documento sin índice ni búsqueda durante segundos.
    const ready = function () {
      if (!page || page.ready) return;
      const d = fr.contentDocument;
      if (!d || d.readyState === "loading" || !d.body || !d.body.firstChild) return;
      page.ready = true;
      enhancePage(anchor);
    };
    fr.addEventListener("load", ready);
    const iv = setInterval(function () {
      if (!page || page.ready) { clearInterval(iv); return; }
      ready();
    }, 60);
    setTimeout(function () { clearInterval(iv); }, 15000);
    document.getElementById("pgPrint").addEventListener("click", function () {
      if (page && page.fr.contentWindow) { page.fr.contentWindow.focus(); page.fr.contentWindow.print(); }
    });
    window.scrollTo(0, 0);
  }

  function enhancePage(anchor) {
    if (!page) return;
    const fr = page.fr, d = fr.contentDocument;
    if (!d) return;

    const st = d.createElement("style");
    st.textContent =
      "mark.sw-hit{background:#ffe08a;color:inherit;padding:0 1px;border-radius:2px}" +
      "mark.sw-hit.on{background:#e08c00;color:#fff}" +
      "tr.sw-dim{opacity:.2}" +
      "a.sw-x{color:var(--a);cursor:pointer;text-decoration:underline;text-underline-offset:2px}" +
      "table.pr td.st{cursor:pointer}" +
      "tr.sw-flash td{background:var(--w-bg)!important;transition:background .9s ease-out}";
    d.head.appendChild(st);

    fitPage();
    if ("ResizeObserver" in window) {
      page.ro = new ResizeObserver(fitPage);
      page.ro.observe(d.documentElement);
    }
    page.onResize = fitPage;
    window.addEventListener("resize", page.onResize);

    indexSteps(d);
    crossLink(d);
    buildPageToc(d);
    buildRespFilter(d);
    wirePageEvents(d);
    if (anchor) jumpTo(anchor);
  }

  function fitPage() {
    if (!page) return;
    const d = page.fr.contentDocument;
    if (!d || !d.body) return;
    const h = Math.max(d.body.scrollHeight, d.documentElement.scrollHeight);
    if (page.lastH === h) return;
    page.lastH = h;
    page.fr.style.height = h + "px";
  }

  /* ancla por paso: cada renglón de la tabla de procedimiento queda direccionable */
  function indexSteps(d) {
    let max = 0;
    d.querySelectorAll("table.pr td.st").forEach(function (td) {
      const n = parseInt((td.textContent || "").trim(), 10);
      if (!n) return;
      const tr = td.closest("tr");
      if (tr && !tr.id) tr.id = "paso-" + n;
      td.title = t().pageCopyLink;
      if (n > max) max = n;
    });
    const wrap = document.getElementById("pgStepWrap");
    if (wrap) {
      if (!max) wrap.hidden = true;
      else {
        const inp = document.getElementById("pgStep");
        inp.max = String(max);
        inp.placeholder = "1–" + max;
      }
    }
  }

  /* enlaces cruzados: toda clave de otro procedimiento se vuelve navegable */
  function crossLink(d) {
    const walker = d.createTreeWalker(d.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.indexOf("/SW/") < 0) return NodeFilter.FILTER_REJECT;
        const p = n.parentNode;
        if (!p || p.closest("a,style,script,.hdr")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const targets = [];
    let n;
    while ((n = walker.nextNode())) targets.push(n);
    const self = page.doc.id;
    targets.forEach(function (node) {
      const txt = node.nodeValue;
      const re = /\b(?:MPC\/SW\/01|DEC\/SW\/01|SOP\/SW\/\d{4})\b/g;
      let m, last = 0, frag = null;
      while ((m = re.exec(txt))) {
        const id = CLAVE_A_DOC[m[0]];
        if (!id || id === self) continue;
        frag = frag || d.createDocumentFragment();
        if (m.index > last) frag.appendChild(d.createTextNode(txt.slice(last, m.index)));
        const a = d.createElement("a");
        a.className = "sw-x";
        a.setAttribute("data-go", id);
        a.textContent = m[0];
        frag.appendChild(a);
        last = m.index + m[0].length;
      }
      if (frag) {
        if (last < txt.length) frag.appendChild(d.createTextNode(txt.slice(last)));
        node.parentNode.replaceChild(frag, node);
      }
    });
  }

  /* índice del documento en el riel derecho, con seguimiento de lectura */
  function buildPageToc(d) {
    const hs = Array.prototype.slice.call(d.querySelectorAll("h2.s, h3.ss"));
    if (!hs.length) { elToc.innerHTML = ""; return; }
    let html = "<h5>" + t().onthispage + "</h5>";
    hs.forEach(function (h, i) {
      if (!h.id) h.id = "sec-" + i;
      const lvl3 = h.tagName === "H3";
      let txt = (h.textContent || "").trim();
      if (!lvl3) { const num = h.querySelector(".n"); if (num) txt = num.textContent.trim() + " · " + txt.slice(num.textContent.trim().length).trim(); }
      html += '<a class="' + (lvl3 ? "lvl3" : "") + '" href="#" data-pgsec="' + h.id + '">' + txt + "</a>";
    });
    elToc.innerHTML = html;

    page.onScroll = function () {
      if (!page) return;
      const top = page.fr.getBoundingClientRect().top;
      let act = null;
      for (let i = 0; i < hs.length; i++) {
        if (top + hs[i].offsetTop - headOffset() <= 0) act = hs[i].id; else break;
      }
      const cur = elToc.querySelector("a[data-pgsec].active");
      if (cur) cur.classList.remove("active");
      if (act) { const l = elToc.querySelector('a[data-pgsec="' + act + '"]'); if (l) l.classList.add("active"); }
    };
    window.addEventListener("scroll", page.onScroll, { passive: true });
    page.onScroll();
  }

  /* filtro por responsable sobre la tabla de procedimiento */
  function buildRespFilter(d) {
    const wrap = document.getElementById("pgRespWrap");
    const sel = document.getElementById("pgResp");
    const vals = [];
    d.querySelectorAll("table.pr td.rp").forEach(function (td) {
      const v = (td.textContent || "").trim();
      if (v && vals.indexOf(v) < 0) vals.push(v);
    });
    if (!vals.length) { if (wrap) wrap.hidden = true; return; }
    vals.sort(function (a, b) { return a.localeCompare(b, "es"); });
    sel.innerHTML = '<option value="">' + t().pageRespAll + "</option>" +
      vals.map(function (v) { return '<option value="' + v.replace(/"/g, "&quot;") + '">' + v + "</option>"; }).join("");
  }

  function applyRespFilter(v) {
    const d = page.fr.contentDocument;
    d.querySelectorAll("table.pr tbody tr").forEach(function (tr) {
      if (tr.classList.contains("hito")) return;
      const rp = tr.querySelector("td.rp");
      const hit = !v || (rp && (rp.textContent || "").trim() === v);
      tr.classList.toggle("sw-dim", !hit);
    });
    fitPage();
  }

  /* búsqueda dentro del documento, con resaltado y navegación entre coincidencias */
  function clearHits(d) {
    d.querySelectorAll("mark.sw-hit").forEach(function (m) {
      const p = m.parentNode;
      p.replaceChild(d.createTextNode(m.textContent), m);
      p.normalize();
    });
    page.hits = []; page.at = -1;
    const c = document.getElementById("pgCount"); if (c) c.textContent = "";
  }

  function findInPage(q) {
    const d = page.fr.contentDocument;
    clearHits(d);
    q = (q || "").trim();
    if (q.length < 2) return;
    const needle = q.toLowerCase();
    const walker = d.createTreeWalker(d.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.toLowerCase().indexOf(needle) < 0) return NodeFilter.FILTER_REJECT;
        const p = n.parentNode;
        if (!p || p.closest("style,script")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = []; let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      const txt = node.nodeValue, low = txt.toLowerCase();
      const frag = d.createDocumentFragment();
      let i = 0, k;
      while ((k = low.indexOf(needle, i)) >= 0) {
        if (k > i) frag.appendChild(d.createTextNode(txt.slice(i, k)));
        const mk = d.createElement("mark");
        mk.className = "sw-hit";
        mk.textContent = txt.slice(k, k + q.length);
        frag.appendChild(mk);
        page.hits.push(mk);
        i = k + q.length;
      }
      if (i < txt.length) frag.appendChild(d.createTextNode(txt.slice(i)));
      node.parentNode.replaceChild(frag, node);
    });
    fitPage();
    if (page.hits.length) gotoHit(0); else document.getElementById("pgCount").textContent = t().pageNoMatch;
  }

  function gotoHit(i) {
    if (!page.hits.length) return;
    if (page.at >= 0 && page.hits[page.at]) page.hits[page.at].classList.remove("on");
    page.at = (i + page.hits.length) % page.hits.length;
    const m = page.hits[page.at];
    m.classList.add("on");
    scrollToInPage(m);
    document.getElementById("pgCount").textContent = (page.at + 1) + " " + t().pageMatches + " " + page.hits.length;
  }

  function scrollToInPage(el) {
    const top = page.fr.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(0, top + el.offsetTop - headOffset() - 8), behavior: "smooth" });
  }

  function jumpTo(anchor) {
    const d = page.fr.contentDocument;
    const el = d.getElementById(anchor);
    if (!el) return;
    scrollToInPage(el);
    if (el.tagName === "TR") {
      el.classList.add("sw-flash");
      setTimeout(function () { el.classList.remove("sw-flash"); }, 1400);
    }
  }

  /* índice de claves: qué claves cita el documento y dónde aparecen */
  function togglePageKeys() {
    const panel = document.getElementById("pgKeysPanel");
    if (!panel.hidden) { panel.hidden = true; return; }
    const d = page.fr.contentDocument;
    const txt = d.body.innerText || "";
    const counts = {};
    let m;
    RE_CLAVES.lastIndex = 0;
    while ((m = RE_CLAVES.exec(txt))) counts[m[0]] = (counts[m[0]] || 0) + 1;
    const keys = Object.keys(counts).sort(function (a, b) { return a.localeCompare(b, "es"); });
    if (!keys.length) { panel.innerHTML = "<p>" + t().pageNoMatch + "</p>"; panel.hidden = false; return; }
    panel.innerHTML = "<p class='pg-keys-hint'>" + t().pageKeysHint + "</p>" +
      keys.map(function (k) {
        return '<button type="button" class="pg-key" data-key="' + k + '">' + k +
          '<span class="pg-key-n">' + counts[k] + "</span></button>";
      }).join("");
    panel.hidden = false;
  }

  function wirePageEvents(d) {
    const find = document.getElementById("pgFind");
    let tmr = null;
    find.addEventListener("input", function () {
      clearTimeout(tmr);
      const v = find.value;
      tmr = setTimeout(function () { findInPage(v); }, 220);
    });
    find.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); gotoHit(page.at + (e.shiftKey ? -1 : 1)); }
      if (e.key === "Escape") { find.value = ""; clearHits(page.fr.contentDocument); }
    });
    document.getElementById("pgNext").addEventListener("click", function () { gotoHit(page.at + 1); });
    document.getElementById("pgPrev").addEventListener("click", function () { gotoHit(page.at - 1); });
    document.getElementById("pgResp").addEventListener("change", function (e) { applyRespFilter(e.target.value); });
    document.getElementById("pgStep").addEventListener("input", function (e) {
      const n = parseInt(e.target.value, 10);
      if (n) jumpTo("paso-" + n);
    });
    document.getElementById("pgKeys").addEventListener("click", togglePageKeys);
    document.getElementById("pgKeysPanel").addEventListener("click", function (e) {
      const b = e.target.closest(".pg-key");
      if (!b) return;
      find.value = b.dataset.key;
      findInPage(b.dataset.key);
    });
    // dentro del documento: enlaces cruzados y copia de la liga de un paso
    d.addEventListener("click", function (e) {
      const x = e.target.closest("a.sw-x");
      if (x) { e.preventDefault(); loadDoc(x.dataset.go, true); return; }
      const st = e.target.closest("table.pr td.st");
      if (st) {
        const tr = st.closest("tr");
        if (!tr || !tr.id) return;
        const url = location.href.split("#")[0] + "#" + page.doc.id + ":" + tr.id;
        if (navigator.clipboard) navigator.clipboard.writeText(url).catch(function () {});
        history.replaceState(null, "", "#" + page.doc.id + ":" + tr.id);
        st.setAttribute("title", t().pageCopied);
        setTimeout(function () { st.setAttribute("title", t().pageCopyLink); }, 1600);
      }
    });
  }

  function onTocClick(e) {
    const a = e.target.closest("a[data-pgsec]");
    if (!a || !page) return;
    e.preventDefault();
    jumpTo(a.dataset.pgsec);
  }

  /* scrollspy */
  let spy = null;
  function setupSpy(headings) {
    if (spy) spy.disconnect();
    if (!headings.length || !("IntersectionObserver" in window)) return;
    const map = {};
    spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) map.active = en.target.id; });
      const a = elToc.querySelector('a[data-toc].active'); if (a) a.classList.remove("active");
      if (map.active) { const link = elToc.querySelector('a[data-toc="' + map.active + '"]'); if (link) link.classList.add("active"); }
    }, { rootMargin: "-10% 0px -75% 0px", threshold: 0 });
    headings.forEach((h) => { const el = document.getElementById(h.id); if (el) spy.observe(el); });
  }

  /* search: filter sidebar docs + current TOC */
  function applySearch() {
    const q = (elSearch.value || "").trim().toLowerCase();
    elToc.querySelectorAll("a[data-toc]").forEach((a) => {
      a.style.display = !q || a.textContent.toLowerCase().indexOf(q) >= 0 ? "" : "none";
    });
    elSidebar.querySelectorAll(".nav-item").forEach((a) => {
      a.style.display = !q || a.textContent.toLowerCase().indexOf(q) >= 0 ? "" : "none";
    });
  }

  function setLang(l) {
    if (l === lang) return;
    lang = l; localStorage.setItem("swux.lang", l);
    document.documentElement.lang = l;
    document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === l));
    elSearch.placeholder = t().search;
    $('.brand [data-i18n="suite"]').textContent = t().suite;
    loadDoc(currentDoc, false);
  }

  /* mobile sidebar */
  const backdrop = $("#backdrop");
  function openSidebar() { elSidebar.classList.add("open"); backdrop.hidden = false; }
  function closeSidebar() { elSidebar.classList.remove("open"); backdrop.hidden = true; }

  /* events */
  document.addEventListener("click", (e) => {
    const nav = e.target.closest(".nav-item");
    if (nav) {
      e.preventDefault();
      const nd = DOCS.find((d) => d.id === nav.dataset.doc);
      if (nd && nd.type === "ref") loadDoc(nd.ref, true, nd.anchor); // anexo -> salta a la sección del contrato
      else loadDoc(nav.dataset.doc, true);
      return;
    }
    const xref = e.target.closest("a.xref");
    if (xref) {
      e.preventDefault();
      const raw = (xref.getAttribute("href") || "").replace(/^#/, "");
      const sep = raw.indexOf(":");
      const id = sep >= 0 ? raw.slice(0, sep) : raw;
      const anchor = sep >= 0 ? raw.slice(sep + 1) : "";
      if (DOCS.find((d) => d.id === id) && id !== currentDoc) loadDoc(id, true, anchor); // otro documento
      else scrollToAnchor(anchor || id);                                                 // misma página / ancla suelta
      return;
    }
    const lb = e.target.closest(".lang-btn");
    if (lb) { setLang(lb.dataset.lang); return; }
    if (e.target.id === "menuToggle") { elSidebar.classList.contains("open") ? closeSidebar() : openSidebar(); return; }
    if (e.target.id === "backdrop") closeSidebar();
  });
  elSearch.addEventListener("input", applySearch);
  elToc.addEventListener("click", onTocClick);

  /* ligas profundas: #documento y #documento:ancla (por ejemplo #sop-0201:paso-31)
     pegadas en la barra de direcciones con la aplicación ya abierta */
  window.addEventListener("hashchange", function () {
    const raw = (location.hash || "").replace(/^#/, "");
    const sep = raw.indexOf(":");
    const id = sep >= 0 ? raw.slice(0, sep) : raw;
    const anchor = sep >= 0 ? raw.slice(sep + 1) : "";
    if (!DOCS.find((d) => d.id === id)) return;
    if (id !== currentDoc) { loadDoc(id, false, anchor); return; }
    if (page) jumpTo(anchor); else scrollToAnchor(anchor);
  });

  /* init */
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  elSearch.placeholder = t().search;
  $('.brand [data-i18n="suite"]').textContent = t().suite;
  const rawHash = (location.hash || "").replace(/^#/, "");
  const hSep = rawHash.indexOf(":");
  const startId = hSep >= 0 ? rawHash.slice(0, hSep) : rawHash;
  const startAnchor = hSep >= 0 ? rawHash.slice(hSep + 1) : "";
  loadDoc(DOCS.find((d) => d.id === startId) ? startId : DOCS[0].id, false, startAnchor);
})();
