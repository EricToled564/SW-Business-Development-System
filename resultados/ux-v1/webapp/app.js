/* Sports World · Proyecto Digital — bilingual static viewer (no build, no deps) */
(function () {
  "use strict";

  const I18N = {
    es: {
      suite: "Proyecto Digital",
      search: "Buscar en esta sección…",
      onthispage: "En esta página",
      groups: { generales: "Documentos Generales", proyectoA: "Rediseño Web (Proyecto A)", bds: "Business Development System (Proyecto B)", academia: "Academia Sports World (Proyecto C)" },
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
    },
    en: {
      suite: "Digital Project",
      search: "Search this section…",
      onthispage: "On this page",
      groups: { generales: "General Documents", proyectoA: "Web Redesign (Project A)", bds: "Business Development System (Project B)", academia: "Sports World Academy (Project C)" },
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
    { id: "experience", type: "doc", group: "proyectoA", pdf: "01-arquitectura-de-experiencia.es.pdf",
      title: { es: "Arquitectura de Experiencia (UX)", en: "Experience Architecture (UX)" } },
    { id: "technical", type: "doc", group: "proyectoA", pdf: "02-estrategia-tecnica.es.pdf",
      title: { es: "Estrategia Técnica", en: "Technical Strategy" } },
    { id: "seguridad", type: "doc", group: "proyectoA", pdf: "10-seguridad-del-sitio.es.pdf",
      title: { es: "Seguridad del sitio", en: "Site Security" } },
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
    { id: "minuta-2026-06-22", type: "doc", group: "proyectoA", pdf: "08-minuta-2026-06-22.es.pdf",
      title: { es: "Minuta · 22 jun 2026", en: "Minutes · Jun 22, 2026" } },
    { id: "seguimiento-2026-06-22", type: "doc", group: "proyectoA", pdf: "09-seguimiento-2026-06-22.es.pdf",
      title: { es: "Seguimiento · 22 jun 2026", en: "Follow-up · Jun 22, 2026" } },
    { id: "auditoria", type: "doc", group: "proyectoA", pdf: "07-auditoria-inicial.es.pdf",
      title: { es: "Auditoría inicial del sitio", en: "Initial site audit" } },
    { id: "roi", type: "doc", group: "proyectoA",
      title: { es: "Calculadora de ROI", en: "ROI Calculator" } },
  ];
  const GROUP_ORDER = ["generales", "proyectoA", "bds", "academia"];

  let lang = localStorage.getItem("swux.lang") || ((navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es");
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

  const GROUP_TITLE_RED = ["proyectoA", "bds", "academia"];

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
    renderSidebar();
    elToc.innerHTML = "";

    if (doc.type === "placeholder") {
      renderPlaceholder(doc);
      if (push) history.replaceState(null, "", "#" + doc.id);
      window.scrollTo(0, 0);
      closeSidebar();
      return;
    }

    if (doc.type === "embed") {
      elDoc.innerHTML = '<div class="embed-wrap"><iframe class="embed-frame" src="' + doc.src +
        '?v=20260624g" title="' + doc.title[lang] + '"></iframe></div>';
      elToc.innerHTML = "";
      // Fijar la altura del iframe a la ventana REALMENTE visible (window.innerHeight),
      // no a 100vh/100dvh: dentro de un iframe esas unidades son poco fiables en móvil
      // y empujaban el botón del demo fuera de la pantalla. Se reajusta al rotar/redimensionar.
      const wrap = elDoc.querySelector(".embed-wrap");
      if (embedFit) window.removeEventListener("resize", embedFit);
      embedFit = function () {
        const tb = document.querySelector(".topbar");
        const h = window.innerHeight - (tb ? tb.offsetHeight : 0);
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
