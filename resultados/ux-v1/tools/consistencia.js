#!/usr/bin/env node
/**
 * Verificador de consistencia del depósito · Sports World
 *
 * Codifica como reglas automáticas TODAS las invariantes detectadas en las
 * auditorías manuales, para que la consistencia deje de depender de que alguien
 * vuelva a leer 4,000 líneas. Se ejecuta en CI y en local:
 *
 *     node tools/consistencia.js
 *
 * Cada regla nueva que se descubra se agrega aquí, no a una lista de pendientes.
 */
const fs = require("fs");
const path = require("path");

const DOCS = path.resolve(__dirname, "../webapp/docs");
const WEBAPP = path.resolve(__dirname, "../webapp");
const KB = path.resolve(__dirname, "../webapp/kb");
const DECK = path.join(WEBAPP, "presentacion/deck.html");

// Documentos que NO se corrigen editorialmente (legales e históricos)
const INTOCABLES = new Set([
  "minuta-2026-06-22.es.md",
]);

const archivos = fs.readdirSync(DOCS).filter((f) => f.endsWith(".es.md"));
const texto = {};
archivos.forEach((f) => (texto[f] = fs.readFileSync(path.join(DOCS, f), "utf8")));
const deck = fs.existsSync(DECK) ? fs.readFileSync(DECK, "utf8") : "";
const app = fs.readFileSync(path.join(WEBAPP, "app.js"), "utf8");

const fallas = [];
const reglas = [];
// Cobertura: qué regla examinó qué archivo. Es la prueba cuantitativa de la
// verificación — no una afirmación, un registro que el propio programa produce.
const cobertura = {};
let reglaActual = null;
function marcar(f) {
  (cobertura[reglaActual] || (cobertura[reglaActual] = new Set())).add(f);
}
function regla(nombre, fn) {
  const antes = fallas.length;
  reglaActual = nombre;
  cobertura[nombre] = new Set();
  fn((doc, linea, msg) => fallas.push({ regla: nombre, doc, linea, msg }));
  reglas.push({ nombre, fallas: fallas.length - antes });
}
/** Recorre cada línea de cada documento editable. */
function porLinea(fn, incluirIntocables = false) {
  for (const f of archivos) {
    if (!incluirIntocables && INTOCABLES.has(f)) continue;
    marcar(f);
    texto[f].split("\n").forEach((l, i) => fn(f, i + 1, l));
  }
}

/* ─────────── R1 · Frecuencia de sincronización: corte 06:00 ─────────── */
regla("R1 · sincronización en tiempo real", (falla) => {
  // "tiempo real" es legítimo para: la escritura del lead, el enrutamiento del BDS,
  // el nombre de la capa B, el ASR, el tablero y la calculadora.
  const permitido = /escritura|lead|enrutamiento|operador|BDS|canales en tiempo real|capa de canales|primer contacto|reconocimiento de voz|ASR|conversacional|dashboard|tablero|totales|forzar todo|[Ss]ustituye (la|toda) lectura|speed|engagement|atender en tiempo real|captación multicanal|instantánea/i;
  porLinea((f, n, l) => {
    if (!/tiempo real/i.test(l)) return;
    if (permitido.test(l)) return;
    if (/precio|tarifa|clase|catálogo|amenidad|estatus del club|horario/i.test(l))
      falla(f, n, "lectura de catálogo declarada en tiempo real; rige el corte diario 06:00");
  });
});

/* ─────────── R2 · Una sola definición de funnel ─────────── */
// La versión anterior de esta regla buscaba una frase exacta y por eso dejó pasar
// cadenas de etapas escritas con otras palabras. Ahora detecta la FORMA: cualquier
// cadena de etapas encadenadas con flechas fuera del documento canónico.
/** ¿La sección «##» que contiene esta línea remite al Mapa del Funnel? */
function seccionRemite(f, n) {
  const L = texto[f].split("\n");
  let ini = 0;
  for (let i = n - 1; i >= 0; i--) if (/^## /.test(L[i])) { ini = i; break; }
  let fin = L.length;
  for (let i = n; i < L.length; i++) if (/^## /.test(L[i])) { fin = i; break; }
  return /\(#funnel(?::[a-z0-9-]*)?\)/.test(L.slice(ini, fin).join("\n"));
}

regla("R2 · definiciones de funnel", (falla) => {
  const ETAPA = /(lead|contacto|cuestionario|visita|membres[ií]a|cita|asistencia|cierre|tr[aá]fico|cancelaci[oó]n|agenda)/gi;
  // Líneas donde las flechas no describen un funnel: metas de KPI, fórmulas de ROI,
  // prosa de arquitectura. Se identifican porque no nombran dos etapas distintas
  // o porque el destino de la flecha es una cifra.
  const noEsFunnel = /→\s*0\b|enlaces rotos|backslash|sin H1|%|tasa de|A × B × C|experiencia ideal → una escritura/i;
  porLinea((f, n, l) => {
    if (f === "funnel.es.md") return;
    if ((l.match(/→/g) || []).length < 2) return;
    if (noEsFunnel.test(l)) return;
    // Las etapas tienen que estar JUNTO a las flechas, no en cualquier parte de una
    // línea larga: así una cadena de enrutamiento no se confunde con un funnel.
    const cerca = (l.match(/.{0,70}→.{0,70}/g) || []).join(" ");
    const etapas = new Set((cerca.match(ETAPA) || []).map((x) => x.toLowerCase()));
    if (etapas.size < 2) return;
    if (seccionRemite(f, n)) return; // la sección que la contiene remite al canónico
    if (/\*Mapa del Funnel\*/.test(l)) return; // el contrato lo cita por nombre, no por liga
    falla(f, n, "enumera etapas de funnel y su sección no remite al canónico (#funnel)");
  });
  porLinea((f, n, l) => {
    if (f === "funnel.es.md") return;
    if (/cuatro etapas del funnel/i.test(l) && !/contractual|Contrato|titular/i.test(l))
      falla(f, n, "funnel de cuatro etapas sin acotarlo como compromiso contractual");
    if (/funnel del BDS|funnel propio del|su propio funnel/i.test(l) && !/no define/i.test(l))
      falla(f, n, "atribuye un funnel propio a una capa; la espina de conversión es única");
  });
});

/* ─────────── R16 · Toda mención sustantiva liga al canónico ─────────── */
// Si un documento habla del funnel, tiene que decir dónde está definido.
regla("R16 · liga al funnel canónico", (falla) => {
  for (const f of archivos) {
    if (INTOCABLES.has(f) || f === "funnel.es.md") continue;
    marcar(f);
    const menciones = (texto[f].match(/funnel/gi) || []).length;
    if (!menciones) continue;
    if (/\(#funnel(?::[a-z0-9-]*)?\)|\*Mapa del Funnel\*/.test(texto[f])) continue; // liga, o cita por nombre en el contrato
    falla(f, 0, `menciona el funnel ${menciones} ${menciones === 1 ? "vez" : "veces"} y no liga al documento canónico (#funnel)`);
  }
});

/* ─────────── R3 · Llave de conciliación ─────────── */
regla("R3 · llave de conciliación", (falla) => {
  porLinea((f, n, l) => {
    if (!/código postal/i.test(l)) return;
    // Solo se exime el código postal como DATO DE ENTRADA geográfica (Q16), nunca como llave.
    if (/Q16|colonia|5 dígitos|geolocalizaci|por cercanía/i.test(l)) return;
    if (/concilia|verificaci|cruce/i.test(l))
      falla(f, n, "código postal como llave de conciliación; rige teléfono + club");
  });
});

/* ─────────── R17 · Registro de cliente en documentos del depósito ─────────── */
/* Los documentos los lee Sports World. No deben narrar el proceso interno de
   elaboración —auditorías propias, versiones anteriores, pendientes de Legal—
   ni citar rutas, ramas o herramientas del repositorio. */
regla("R17 · registro de cliente", (falla) => {
  const PROHIBIDO = [
    [/materia de Legal/i, "remite a Legal un asunto ya resuelto en el Contrato"],
    [/falta pedir|hueco[s]? de acceso|no est[áa]n? cubiert[ao]s? por el Anexo/i, "declara un pendiente que ya está pactado"],
    [/pr[óo]xima revisi[óo]n del Anexo|se reflejar[áa] en la pr[óo]xima/i, "difiere a una revisión futura un ajuste ya incorporado"],
    [/requiere ajuste del Anexo|no previsto hoy en el Anexo|a[úu]n no previsto en el Anexo/i, "marca como no pactado un dato que ya consta en el Anexo Uno"],
    [/el error de las definiciones anteriores|antes dec[íi]a|versi[óo]n anterior de este documento/i, "narra una versión anterior del propio documento"],
    [/la auditor[íi]a de la documentaci[óo]n|correcci[óo]n editorial/i, "expone el proceso interno de elaboración"],
    [/build_pdfkit|consistencia\.js|audit-docs|\/versiones-del-contrato|rama de trabajo|claude\/new-session/i, "cita herramientas o rutas del repositorio"],
    [/\bV4\.2\b/, "cita una versión vencida del Contrato"],
  ];
  porLinea((f, n, l) => {
    if (f === "minuta-2026-06-22.es.md" || f === "auditoria.es.md") return; // registro histórico y diagnóstico del cliente
    for (const [re_, motivo] of PROHIBIDO) if (re_.test(l)) falla(f, n, motivo);
  });
});

/* ─────────── R4 · Una sola especificación de servidor ─────────── */
regla("R4 · especificación de servidor", (falla) => {
  const con = archivos.filter((f) => !INTOCABLES.has(f) && (marcar(f), /\d+\s*vCPU/i.test(texto[f])));
  if (con.length > 1)
    falla(con.join(", "), 0, `${con.length} documentos especifican el servidor; debe ser solo execution.es.md`);
  if (con.length === 1 && con[0] !== "execution.es.md")
    falla(con[0], 0, "la especificación del servidor debe vivir en execution.es.md");
});

/* ─────────── R5 · Nombres comerciales de plan congelados ─────────── */
regla("R5 · nombres de plan congelados", (falla) => {
  porLinea((f, n, l) => {
    if (/\/membresias\/(uniclub|allclub|black-pass|pink-plan|promo-21)/i.test(l))
      falla(f, n, "URL con nombre comercial de plan; los planes vienen del CRM");
  });
});

/* ─────────── R6 · Residuos del marco anterior ─────────── */
regla("R6 · marco anterior", (falla) => {
  const patrones = [
    [/un cuestionario y una experiencia ideal/i, "marco anterior: el proyecto es un sistema de ventas de tres capas"],
    [/eje de todo el proyecto/i, "marco anterior"],
    [/esta página —la \*?experiencia ideal/i, "reduce el producto del sistema a una página"],
    [/El canal donde nace y se implementa el cuestionario/i, "el Proyecto A es una capa, no un canal"],
  ];
  porLinea((f, n, l) => patrones.forEach(([re, msg]) => re.test(l) && falla(f, n, msg)));
});

/* ─────────── R7 · Referencias al nombre anterior de un documento ─────────── */
regla("R7 · nombres de documento desactualizados", (falla) => {
  porLinea((f, n, l) => {
    if (/Seguridad del sitio/i.test(l)) falla(f, n, "el documento se llama «Seguridad del sistema»");
  });
  marcar("presentacion/deck.html");
  if (/Seguridad del sitio/i.test(deck)) fallas.push({ regla: "R7 · nombres de documento desactualizados", doc: "deck.html", linea: 0, msg: "el documento se llama «Seguridad del sistema»" });
});

/* ─────────── R8 · Accesos que no se solicitan ─────────── */
regla("R8 · accesos no solicitados", (falla) => {
  porLinea((f, n, l) => {
    if (/consulta de miembro/i.test(l) && !/no se solicita|no se pide/i.test(l))
      falla(f, n, "solicita el punto de acceso de consulta de socios, que integracion §2 excluye");
  });
  marcar("presentacion/deck.html");
  if (/[Cc]onsulta de miembro/.test(deck))
    fallas.push({ regla: "R8 · accesos no solicitados", doc: "deck.html", linea: 0, msg: "solicita consulta de socios, excluida por integracion §2" });
});

/* ─────────── R9 · La evidencia cubre las tres capas ─────────── */
regla("R9 · evidencia y tres capas", (falla) => {
  porLinea((f, n, l) => {
    if (/(cómo )?los Proyectos A y B resuelven|significa para los Proyectos A y B/i.test(l))
      falla(f, n, "omite el Proyecto C (capacidad humana)");
  });
});

/* ─────────── R10 · Consistencia de cifras clave ─────────── */
// Solo se verifican los enunciados que se refieren al total canónico. Las cifras
// que cuentan otra cosa —las 100 páginas rastreadas por Semrush, los 13 clubes
// visitados en campo, los 30 clubes con FitKidz documentado— son legítimas y no
// se comparan contra el total.
regla("R10 · cifras clave", (falla) => {
  const conceptos = [
    {
      nombre: "clubes de la red",
      validos: ["49"],
      patrones: [/\blos (\d+) clubes\b/gi, /\bcuenta con (\d+) clubes\b/gi, /\b(\d+) clubes premium\b/gi,
        /\bred de (\d+) clubes\b/gi, /\b(\d+) clubes en todo el país\b/gi, /\b(\d+) fichas de Google Business\b/gi,
        /\b(\d+) de \d+ páginas de club\b/gi, /\ben los (\d+) clubes\b/gi],
      excluir: null,
    },
    {
      nombre: "páginas del sitio",
      validos: ["148"],
      // (?! de club) — las 49 páginas de club son un subconjunto legítimo de las 148
      patrones: [/\blas (\d+) páginas\b(?! de club)/gi, /\bde (\d+) páginas\b(?! de club)/gi, /\b(\d+) páginas \(build\)/gi,
        /\b(\d+) páginas publicadas\b/gi, /\badicional a las (\d+)\b/gi, /\*\*(\d+) páginas\*\*/g],
      excluir: /Semrush|Site Audit|rastreadas|auditadas/i, // el crawl de 100 páginas del sitio actual
    },
    {
      nombre: "asesores de la red",
      validos: ["200", "157"],
      patrones: [/\b(\d{3}) asesores\b/gi],
      excluir: null,
    },
  ];
  for (const c of conceptos) {
    for (const f of archivos) {
      if (INTOCABLES.has(f)) continue;
      marcar(f);
      texto[f].split("\n").forEach((linea, i) => {
        if (c.excluir && c.excluir.test(linea)) return;
        for (const re of c.patrones) {
          const r = new RegExp(re.source, re.flags);
          let m;
          while ((m = r.exec(linea)))
            if (!c.validos.includes(m[1]))
              falla(f, i + 1, `${c.nombre}: "${m[0].trim()}" difiere del valor canónico (${c.validos.join(" o ")})`);
        }
      });
    }
  }
});

/* ─────────── R11 · Glosario completo ─────────── */
regla("R11 · glosario", (falla) => {
  marcar("glosario.es.md");
  const g = texto["glosario.es.md"] || "";
  ["experiencia ideal", "cuestionario dinámico", "sistema de ventas", "las tres capas", "corte diario 06:00", "brief del asesor", "funnel"]
    .forEach((t) => {
      if (!new RegExp(`^\\|\\s*\\*\\*${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "im").test(g))
        falla("glosario.es.md", 0, `término central sin definir: «${t}»`);
    });
  const entradaFunnel = (g.match(/^\|\s*\*\*funnel[^\n]*/im) || [""])[0];
  if (entradaFunnel && !/\(#funnel\)/.test(entradaFunnel))
    falla("glosario.es.md", 0, "la entrada «funnel» no remite al documento canónico (#funnel)");
});

/* ─────────── R12 · Registro completo: doc, PDF e índice ─────────── */
regla("R12 · registro de documentos", (falla) => {
  marcar("app.js");
  marcar("indice.es.md");
  const idx = texto["indice.es.md"] || "";
  const re = /\{ id: "([a-z0-9-]+)", type: "doc"[^}]*?(?:pdf: "([^"]+)")?[^}]*\}/g;
  let m;
  while ((m = re.exec(app))) {
    const [, id, pdf] = m;
    marcar(`${id}.es.md`);
    if (!fs.existsSync(path.join(DOCS, `${id}.es.md`))) falla(id, 0, "registrado en app.js pero sin archivo .es.md");
    if (pdf && !fs.existsSync(path.join(KB, pdf))) falla(id, 0, `sin PDF en webapp/kb: ${pdf}`);
    if (!idx.includes(`#${id}`)) falla(id, 0, "sin entrada en el índice");
  }
});

/* ─────────── R13 · Sección del cliente en un solo idioma ─────────── */
regla("R13 · idioma de la sección del cliente", (falla) => {
  marcar("index.html");
  const html = fs.readFileSync(path.join(WEBAPP, "index.html"), "utf8");
  if (/data-lang="en"/.test(html))
    falla("index.html", 0, "selector de idioma visible: la sección del cliente es solo español");
});

/* ─────────── R14 · Numeración de secciones correlativa ─────────── */
regla("R14 · numeración de secciones", (falla) => {
  for (const f of archivos) {
    if (INTOCABLES.has(f)) continue;
    marcar(f);
    const nums = [...texto[f].matchAll(/^## (\d+)[a-z]? ·/gm)].map((m) => ({ n: +m[1], raw: m[0] }));
    const irregular = [...texto[f].matchAll(/^## (\d+)([a-z]) ·/gm)];
    irregular.forEach((m) => falla(f, texto[f].slice(0, m.index).split("\n").length, `sección con numeración irregular: «${m[0].trim()}»`));
    for (let i = 1; i < nums.length; i++)
      if (nums[i].n !== nums[i - 1].n + 1 && nums[i].n !== nums[i - 1].n)
        falla(f, 0, `salto en la numeración de secciones: ${nums[i - 1].n} → ${nums[i].n}`);
  }
});

/* ─────────── R15 · Línea base de los KPIs comprometidos ─────────── */
// La línea base vive en el Contrato · Anexo Dos, Sección IV. Cualquier documento
// que la cite debe usar exactamente esas cifras.
regla("R15 · línea base de KPIs", (falla) => {
  const kpis = [
    [/(\d+(?:\.\d)?)%\s*(?:→|a|al)\s*55[–-]65%/gi, ["31.1"], "punto de partida de la cobertura unbranded"],
    [/cobertura (?:de keywords )?unbranded[^.|\n]{0,40}?(\d+\.\d)%/gi, ["31.1"], "cobertura unbranded de línea base"],
    [/(\d+) enlaces (?:internos )?rotos/gi, ["136", "116"], "enlaces rotos (136 totales = 116 internos + 20 backslash)"],
    [/(\d+) URLs con backslash/gi, ["20"], "URLs con backslash"],
    [/[Pp]áginas sin H1 \|\s*(\d+)/g, ["11"], "páginas sin H1"],
    [/(\d+) de 49 páginas de club/gi, ["0", "49"], "páginas de club crawleables"],
  ];
  for (const [re, validos, nombre] of kpis)
    for (const f of archivos) {
      if (INTOCABLES.has(f)) continue;
      marcar(f);
      texto[f].split("\n").forEach((linea, i) => {
        const r = new RegExp(re.source, re.flags);
        let m;
        while ((m = r.exec(linea)))
          if (!validos.includes(m[1]))
            falla(f, i + 1, `${nombre}: "${m[0].trim()}" difiere de la línea base (${validos.join(" o ")})`);
      });
    }
});

/* ─────────── R18 · Páginas del Proceso Comercial ─────────── */
// Los procedimientos del Proceso Comercial se publican con composición propia
// (type: "page"), no como markdown. La invariante es la misma que para el resto
// del depósito: lo registrado en app.js existe en disco y está en el índice.
regla("R18 · páginas del Proceso Comercial", (falla) => {
  marcar("app.js");
  marcar("indice.es.md");
  const idx = texto["indice.es.md"] || "";
  const re = /\{ id: "([a-z0-9-]+)", type: "page"[^}]*?src: "([^"]+)"/g;
  let m, n = 0;
  while ((m = re.exec(app))) {
    const [, id, src] = m;
    n++;
    if (!fs.existsSync(path.join(WEBAPP, src))) falla(id, 0, `registrado en app.js pero sin archivo en webapp/${src}`);
    if (!idx.includes(`#${id}`)) falla(id, 0, "sin entrada en el índice");
  }
  if (!n) falla("app.js", 0, "no hay páginas del Proceso Comercial registradas");
  if (!/const GROUP_ORDER = \[[^\]]*"proceso"/.test(app))
    falla("app.js", 0, "el grupo «proceso» no está en GROUP_ORDER");
});

/* ─────────── R19 · Sello de versión en los recursos del visor ─────────── */
// Sin sello, el navegador de quien ya visitó el sitio conserva el app.js anterior
// durante diez minutos y los documentos nuevos no existen para él: toda liga cae
// al índice. Cada cambio del visor tiene que llevar sello nuevo.
regla("R19 · sello de versión del visor", (falla) => {
  marcar("index.html");
  const html = fs.readFileSync(path.join(WEBAPP, "index.html"), "utf8");
  for (const rec of ["app.js", "styles.css"]) {
    const re = new RegExp(`(?:src|href)="${rec.replace(".", "\\.")}(\\?v=\\d{12})?"`);
    const m = html.match(re);
    if (!m) falla("index.html", 0, `no referencia ${rec}`);
    else if (!m[1]) falla("index.html", 0, `${rec} sin sello de versión (?v=AAAAMMDDhhmm)`);
  }
});

/* ─────────── R20 · Cobertura del Manual de Ventas sobre los procedimientos ─────────── */
// El manual enseña la conducta que los procedimientos exigen. Si un paso a cargo
// del asesor no está enseñado en ningún apartado, el asesor lo va a improvisar.
// Esta regla lo verifica paso por paso: no es una promesa de cobertura, es la
// cobertura calculada contra las tablas de pasos de cada procedimiento.
regla("R20 · el Manual de Ventas cubre todo paso a cargo del asesor", (falla) => {
  const PROC = path.join(WEBAPP, "proceso");
  const MV = path.join(PROC, "mv-01.html");
  if (!fs.existsSync(MV)) return falla("proceso/mv-01.html", 0, "no existe el Manual de Ventas");
  marcar("proceso/mv-01.html");
  const mv = fs.readFileSync(MV, "utf8");
  const anexo = mv.slice(mv.indexOf('<div class="anexo">'));
  if (!anexo) return falla("proceso/mv-01.html", 0, "el manual no trae anexo de correspondencia");

  // 1 · Rangos declarados como cubiertos, por procedimiento.
  const cubierto = {};
  const reFila = /<tr><td>(SOP\/SW\/\d+)<\/td><td class="c">([^<]+)<\/td>[\s\S]*?<td>([^<]*)<\/td><\/tr>/g;
  for (let m; (m = reFila.exec(anexo)); ) {
    const [, clave, rango, apartado] = m;
    if (!/\d/.test(apartado)) falla("proceso/mv-01.html", 0, `${clave} ${rango} sin apartado del manual`);
    const nums = (rango.match(/\d+/g) || []).map(Number);
    const lista = /\ba\b/.test(rango) && nums.length === 2
      ? Array.from({ length: nums[1] - nums[0] + 1 }, (_, i) => nums[0] + i)
      : nums;
    (cubierto[clave] || (cubierto[clave] = new Set())).forEach(() => {});
    lista.forEach((n) => (cubierto[clave] || (cubierto[clave] = new Set())).add(n));
  }

  // 2 · Pasos declarados fuera del manual por no ejecutarlos el asesor.
  const excluido = {};
  const reExcl = /(SOP\/SW\/\d+)\s+pasos\s+([\d,\sy]+)/g;
  const parrafo = anexo.replace(/<[^>]+>/g, " ");
  for (let m; (m = reExcl.exec(parrafo)); )
    excluido[m[1]] = new Set((m[2].match(/\d+/g) || []).map(Number));

  // 3 · Pasos declarados pendientes de definición.
  const pendiente = {};
  const rePend = /pasos?\s+(\d+)\s+de\s+(SOP\/SW\/\d+)\s+y\s+(\d+)\s+de\s+(SOP\/SW\/\d+)/.exec(parrafo);
  if (rePend) {
    (pendiente[rePend[2]] || (pendiente[rePend[2]] = new Set())).add(+rePend[1]);
    (pendiente[rePend[4]] || (pendiente[rePend[4]] = new Set())).add(+rePend[3]);
  }

  // 4 · Los pasos reales de cada procedimiento, con su responsable.
  const ARCHIVO = {
      "SOP/SW/0101": "sop-0101.html",
      "SOP/SW/0102": "sop-0102.html",
      "SOP/SW/0103": "sop-0103.html",
      "SOP/SW/0201": "sop-0201.html",
      "SOP/SW/0301": "sop-0301.html",
    };
  for (const [clave, archivo] of Object.entries(ARCHIVO)) {
    const ruta = path.join(PROC, archivo);
    if (!fs.existsSync(ruta)) { falla(`proceso/${archivo}`, 0, "no existe"); continue; }
    marcar(`proceso/${archivo}`);
    const html = fs.readFileSync(ruta, "utf8");
    // Sólo la tabla de pasos del procedimiento (table.pr). Las demás tablas del
    // documento —insumos, glosario, control— también empiezan con un número.
    const ini = html.indexOf('<table class="pr"');
    const tabla = ini === -1 ? "" : html.slice(ini, html.indexOf("</table>", ini));
    if (!tabla) { falla(`proceso/${archivo}`, 0, "no se encontró la tabla de pasos (table.pr)"); continue; }
    const pasos = [];
    const filas = tabla.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || [];
    for (const fila of filas) {
      const celdas = (fila.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g) || [])
        .map((c) => c.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
      if (celdas.length < 3) continue;
      if (!/^\d+$/.test(celdas[0])) continue;
      pasos.push({ n: +celdas[0], resp: celdas[celdas.length - 1] });
    }
    if (pasos.length < 30) { falla(`proceso/${archivo}`, 0, `sólo se leyeron ${pasos.length} pasos`); continue; }

    const cub = cubierto[clave] || new Set();
    const exc = excluido[clave] || new Set();
    const pen = pendiente[clave] || new Set();
    for (const p of pasos) {
      const delAsesor = /asesor/i.test(p.resp);
      if (delAsesor && !cub.has(p.n) && !pen.has(p.n))
        falla("proceso/mv-01.html", 0, `${clave} paso ${p.n} (${p.resp}) no está enseñado en ningún apartado del manual`);
      if (delAsesor && exc.has(p.n))
        falla("proceso/mv-01.html", 0, `${clave} paso ${p.n} se declara fuera del manual pero lo ejecuta el asesor`);
      if (exc.has(p.n) && cub.has(p.n))
        falla("proceso/mv-01.html", 0, `${clave} paso ${p.n} aparece cubierto y excluido a la vez`);
    }
    for (const n of exc) if (!pasos.some((p) => p.n === n))
      falla("proceso/mv-01.html", 0, `${clave} paso ${n} se declara excluido pero no existe en el procedimiento`);
  }

  // 5 · Cada apartado citado en el anexo tiene que existir en el manual, y cada
  // subsección N.M tiene que vivir dentro del apartado N. Sin esto, renumerar el
  // manual deja el anexo apuntando a otro lado y la regla lo daría por bueno.
  const apartados = new Set(
    [...mv.matchAll(/<h2 class="s"[^>]*><span class="n">(\d+)<\/span>/g)].map((m) => m[1])
  );
  const subsecciones = new Set(
    [...mv.matchAll(/<h3 class="ss"[^>]*>\s*(\d+\.\d+)/g)].map((m) => m[1])
  );
  const reDestino = /<tr><td>(SOP\/SW\/\d+)<\/td><td class="c">([^<]+)<\/td>[\s\S]*?<td>([^<]*)<\/td><\/tr>/g;
  for (let m; (m = reDestino.exec(anexo)); ) {
    const [, clave, rango, destino] = m;
    for (const ap of destino.match(/(?<![.\d])\d\d(?![.\d])/g) || [])
      if (!apartados.has(ap))
        falla("proceso/mv-01.html", 0, `el anexo manda ${clave} ${rango} al apartado ${ap}, que no existe en el manual`);
    for (const sub of destino.match(/\d+\.\d+/g) || []) {
      if (!subsecciones.has(sub))
        falla("proceso/mv-01.html", 0, `el anexo cita la subsección ${sub}, que no existe en el manual`);
      const ap = destino.match(/(?<![.\d])\d\d(?![.\d])/);
      if (ap && String(Number(ap[0])) !== sub.split(".")[0])
        falla("proceso/mv-01.html", 0, `la subsección ${sub} no corresponde al apartado ${ap[0]}`);
    }
  }

  // 6 · Ninguna referencia del cuerpo puede apuntar a un apartado inexistente.
  const cuerpo = mv.slice(0, mv.indexOf('<div class="anexo">'));
  for (const m of cuerpo.matchAll(/apartados?\s+(\d\d)(?:\s*y\s*(\d\d))?/gi))
    for (const ap of [m[1], m[2]].filter(Boolean))
      if (!apartados.has(ap))
        falla("proceso/mv-01.html", 0, `el cuerpo remite al apartado ${ap}, que no existe`);
});

/* ─────────── Reporte ─────────── */
const totalLineas = archivos.reduce((a, f) => a + texto[f].split("\n").length, 0);
/* ─────────── R22 · en WhatsApp atiende "BES" primero ─────────── */
regla("R22 · enrutamiento de WhatsApp", (falla) => {
  // Decisión vigente: toda conversación de WhatsApp la inicia BES, en todo
  // horario. El operador humano entra por escalamiento —a petición del usuario,
  // por excepción o por política aprobada—, nunca como punto de partida.
  // El término «human-first» describía la regla contraria (hallazgo A-016).
  porLinea((f, i, linea) => {
    if (/human[-\s]first/i.test(linea))
      falla(f, i, "«human-first» describe la regla anterior: en WhatsApp atiende «BES» primero");
    if (/primero\s+(a\s+)?(un|una)\s+(operador|persona|asesor)|(operador|persona)[^.]{0,20}\(primero\)|atiende\s+primero\s+(un|una)\s+(operador|persona)/i.test(linea))
      falla(f, i, "afirma que atiende primero una persona: en WhatsApp atiende «BES» primero");

    // La regla anterior también se escribía sin el término: describiendo a BES
    // como respaldo del operador, o condicionando su intervención a que no
    // hubiera operador disponible. Eso es lo que R22 no veía y NotebookLM sí
    // (verificación de A-016, 31 de agosto de 2026).
    // El markdown mete asteriscos y guiones bajos entre las palabras, así que
    // el patrón los tolera: «**respaldo** del operador» debe caer igual que
    // «respaldo del operador».
    const plano = linea.replace(/[*_`]/g, "");
    if (/"?BES"?[^.]{0,60}\b(como\s+)?respaldo\b[^.]{0,40}\b(operador|humano|persona)\b|\b(respaldo|apoyo)\s+del\s+(operador|humano)/i.test(plano))
      falla(f, i, "presenta a «BES» como respaldo del operador: es la atención inicial, no el respaldo");
    if (/(¿?\s*hay\s+(un\s+)?operador\s+(humano\s+)?disponible|si\s+no\s+hay\s+(operador|humano)|cuando\s+no\s+hay\s+operador\s+disponible|todos\s+los\s+operadores\s+est[aá]n\s+ocupados)/i.test(plano))
      falla(f, i, "condiciona la atención a que haya operador disponible: en WhatsApp «BES» atiende siempre");
  });
  for (const archivo of ["mpc-01.html", "sop-0101.html"]) {
    const ruta = path.join(WEBAPP, "proceso", archivo);
    if (!fs.existsSync(ruta)) continue;
    marcar(`proceso/${archivo}`);
    if (/human[-\s]first/i.test(fs.readFileSync(ruta, "utf8")))
      falla(`proceso/${archivo}`, 0, "«human-first» describe la regla anterior");
  }
});

/* ─────────── R21 · DEC/SW/01 es interno y no se publica ─────────── */
regla("R21 · el registro de cambios del proceso no se publica", (falla) => {
  const DEC = path.join(WEBAPP, "proceso", "dec-01.html");
  if (!fs.existsSync(DEC)) {
    falla("dec-01.html", 0, "falta el registro de cambios del Proceso Comercial");
    return;
  }
  // Decisión de Eric: DEC/SW/01 es el registro de cambios y el cliente no lo ve.
  // Vive en proceso/ con la misma composición que los SOP, pero fuera del app.
  if (/"dec-01"/.test(app))
    falla("app.js", 0, "dec-01 registrado en el app: el registro de cambios es interno y no se publica");
  if ((texto["indice.es.md"] || "").includes("#dec-01"))
    falla("indice.es.md", 0, "dec-01 listado en el índice: el registro de cambios es interno y no se publica");
});

/* ─────────── R23 · las páginas para lectura automatizada van al día ─────────── */
// `fuentes/*.html` es la superficie que NotebookLM ingiere, y NotebookLM no
// vuelve a rastrear: lo que lee es la foto del día en que se cargó la fuente.
// Si el generador se queda atrás, la verificación externa contesta sobre texto
// viejo y un hallazgo ya corregido vuelve a darse por abierto — por un
// artefacto, no por el documento. Ocurrió con A-016: cinco páginas seguían
// publicando la regla anterior de enrutamiento. Esta regla lo impide sola.
regla("R23 · las páginas de fuentes reflejan los documentos", (falla) => {
  const { execSync } = require("child_process");
  const RAIZ = path.resolve(__dirname, "../../..");
  const UX = path.resolve(__dirname, "..");
  const DOCS_MOD = path.join(UX, "docs-mod");
  // La base de la auditoría. Vive también en build-fuentes.js; aquí se repite a
  // propósito, para que mover una y no la otra sea un hallazgo y no un silencio.
  const BASE = "90a1ede";
  const escapar = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const cuerpo = (pagina) => {
    const m = pagina.match(/<pre>([\s\S]*?)<\/pre>/);
    return m ? m[1] : null;
  };

  const generador = fs.readFileSync(path.join(__dirname, "build-fuentes.js"), "utf8");
  if (!new RegExp(`const BASE = "${BASE}"`).test(generador))
    falla("tools/build-fuentes.js", 0, `la base de la auditoría no es ${BASE}: mover la línea de partida vuelve inauditable lo comparado hasta aquí`);

  // Las dos versiones nunca van juntas en una página: la verificación final se
  // hace por pares de fuentes independientes, no por una transcripción.
  if (fs.existsSync(path.join(WEBAPP, "comparacion")))
    falla("comparacion/", 0, "sobrevive la carpeta de páginas que mezclaban las dos versiones: se verifica por pares, no por transcripción");
  if (fs.existsSync(path.join(WEBAPP, "fuentes")))
    falla("fuentes/", 0, "sobrevive la carpeta anterior de fuentes: los grupos son original/ y mod/");

  for (const dir of ["original", "mod"]) {
    if (!fs.existsSync(path.join(WEBAPP, dir))) {
      falla(`${dir}/`, 0, "falta la carpeta de páginas para NotebookLM (node tools/build-fuentes.js)");
      return;
    }
  }

  const sobran = {
    original: new Set(fs.readdirSync(path.join(WEBAPP, "original")).filter((f) => f.endsWith(".html"))),
    mod: new Set(fs.readdirSync(path.join(WEBAPP, "mod")).filter((f) => f.endsWith(".html"))),
  };

  for (const f of archivos) {
    marcar(f);
    const id = f.replace(/\.es\.md$/, "");

    // 1 · El grupo sin cambios reproduce el documento en la base, carácter por
    // carácter. Si alguien lo edita —o si alguien mueve la base— falla aquí.
    let original = null;
    try {
      original = execSync(`git show ${BASE}:resultados/ux-v1/webapp/docs/${f}`, {
        encoding: "utf8", cwd: RAIZ, stdio: ["ignore", "pipe", "pipe"], maxBuffer: 32 * 1024 * 1024,
      });
    } catch {
      falla(f, 0, `no se pudo leer la versión de la base ${BASE} (¿historial incompleto? el clon de CI necesita fetch-depth: 0)`);
      continue;
    }
    const org = path.join(WEBAPP, "original", `${id}.html`);
    if (!fs.existsSync(org)) {
      falla(f, 0, `no tiene página original en original/${id}.html (node tools/build-fuentes.js)`);
    } else {
      sobran.original.delete(`${id}.html`);
      if (cuerpo(fs.readFileSync(org, "utf8")) !== escapar(original))
        falla(f, 0, `original/${id}.html no reproduce el documento en la base ${BASE}: el grupo sin cambios fue alterado`);
    }

    // 2 · La versión de trabajo. Su página reproduce el archivo -MOD tal cual.
    const rutaMod = path.join(DOCS_MOD, `${id}-MOD.es.md`);
    if (!fs.existsSync(rutaMod)) {
      falla(f, 0, `no tiene versión de trabajo en docs-mod/${id}-MOD.es.md (node tools/build-fuentes.js)`);
      continue;
    }
    const mod = fs.readFileSync(rutaMod, "utf8");
    const pMod = path.join(WEBAPP, "mod", `${id}-MOD.html`);
    if (!fs.existsSync(pMod)) {
      falla(f, 0, `no tiene página corregida en mod/${id}-MOD.html (node tools/build-fuentes.js)`);
    } else {
      sobran.mod.delete(`${id}-MOD.html`);
      if (cuerpo(fs.readFileSync(pMod, "utf8")) !== escapar(mod))
        falla(f, 0, `mod/${id}-MOD.html no coincide con docs-mod/${id}-MOD.es.md: la página está desactualizada (node tools/build-fuentes.js)`);
    }
  }

  // Un documento borrado no puede sobrevivir como página publicada: NotebookLM
  // seguiría citándolo como si existiera.
  for (const [dir, restantes] of Object.entries(sobran))
    for (const huerfana of restantes)
      falla(`${dir}/${huerfana}`, 0, "página publicada sin documento que la respalde (node tools/build-fuentes.js)");
  for (const suelto of fs.readdirSync(DOCS_MOD).filter((f) => f.endsWith(".es.md")))
    if (!archivos.includes(suelto.replace(/-MOD\.es\.md$/, ".es.md")))
      falla(`docs-mod/${suelto}`, 0, "versión de trabajo sin documento que la respalde");

  // Y las listas que quedan en verificacion/ tienen que nombrarlas todas: una
  // fuente que no está en la lista es una fuente que nadie carga.
  const LISTA = path.join(RAIZ, "verificacion/fuentes.md");
  if (!fs.existsSync(path.join(RAIZ, "verificacion/cambios.md")))
    falla("verificacion/cambios.md", 0, "falta el resumen de correcciones contra la base (node tools/build-fuentes.js)");
  if (!fs.existsSync(LISTA)) {
    falla("verificacion/fuentes.md", 0, "falta la lista de fuentes para NotebookLM (node tools/build-fuentes.js)");
    return;
  }
  const lista = fs.readFileSync(LISTA, "utf8");
  for (const f of archivos) {
    const id = f.replace(/\.es\.md$/, "");
    if (!lista.includes(`/original/${id}.html`))
      falla("verificacion/fuentes.md", 0, `no lista original/${id}.html (node tools/build-fuentes.js)`);
    if (!lista.includes(`/mod/${id}-MOD.html`))
      falla("verificacion/fuentes.md", 0, `no lista mod/${id}-MOD.html (node tools/build-fuentes.js)`);
  }
  const PROCESO = path.join(WEBAPP, "proceso");
  for (const p of fs.readdirSync(PROCESO).filter((f) => f.endsWith(".html") && f !== "dec-01.html")) {
    if (!lista.includes(`/proceso/${p}`))
      falla("verificacion/fuentes.md", 0, `no lista la página del Proceso Comercial ${p} (node tools/build-fuentes.js)`);
  }
  // DEC/SW/01 es interno (R21): no puede aparecer como fuente cargable.
  if (/\/proceso\/dec-01\.html/.test(lista))
    falla("verificacion/fuentes.md", 0, "lista dec-01 como fuente: el registro de cambios es interno");

  // Las páginas del sitio con contenido propio también son fuentes: si una deja
  // de listarse, deja de auditarse.
  const WEB = ["licitacion/index.html", "presentacion/deck.html"];
  for (const w of WEB) {
    if (!fs.existsSync(path.join(WEBAPP, w)))
      falla(`webapp/${w}`, 0, "página del sitio listada como fuente pero no existe");
    else if (!lista.includes(`/${w}`))
      falla("verificacion/fuentes.md", 0, `no lista la página del sitio ${w} (node tools/build-fuentes.js)`);
  }

  // La plantilla de preguntas no puede fijar cuántas fuentes tiene el cuaderno:
  // ese número cambia y un número viejo rompe la puerta de calidad que obliga a
  // NotebookLM a recorrer la lista completa. Traía «49», de un cuaderno que ya no
  // existe. Va como marcador y se sustituye al preguntar, con el dato de fuentes.md.
  const PLANTILLA = path.join(RAIZ, "verificacion/plantilla-pregunta.md");
  if (!fs.existsSync(PLANTILLA)) {
    falla("verificacion/plantilla-pregunta.md", 0, "falta la plantilla obligatoria de preguntas");
  } else {
    const t = fs.readFileSync(PLANTILLA, "utf8");
    const bloque = t.split("\n").filter((l) => l.startsWith(">")).join("\n");
    if (!/\[N_FUENTES\]/.test(bloque))
      falla("verificacion/plantilla-pregunta.md", 0, "la plantilla no usa el marcador [N_FUENTES]");
    const fijo = bloque.match(/las\s+(\d+)\s+fuentes/i);
    if (fijo)
      falla("verificacion/plantilla-pregunta.md", 0, `la plantilla fija «${fijo[1]} fuentes»: el número se sustituye al preguntar, con el dato de fuentes.md`);
  }

  // El código publicado como fuente tiene que reproducir el archivo carácter por
  // carácter: si se recorta o se resume, deja de servir para auditar el texto
  // exacto de las preguntas.
  const CODIGO = [["demo/cuestionario-inteligente.jsx", "cuestionario-inteligente.html"]];
  for (const [rel, salida] of CODIGO) {
    const fuente = path.join(WEBAPP, rel);
    const publicada = path.join(WEBAPP, "codigo", salida);
    if (!fs.existsSync(fuente)) {
      falla(`webapp/${rel}`, 0, "código listado como fuente pero el archivo no existe");
    } else if (!fs.existsSync(publicada)) {
      falla(`codigo/${salida}`, 0, `no está publicado el código de ${rel} (node tools/build-fuentes.js)`);
    } else {
      if (cuerpo(fs.readFileSync(publicada, "utf8")) !== escapar(fs.readFileSync(fuente, "utf8")))
        falla(`codigo/${salida}`, 0, `no reproduce ${rel} carácter por carácter (node tools/build-fuentes.js)`);
      if (!lista.includes(`/codigo/${salida}`))
        falla("verificacion/fuentes.md", 0, `no lista codigo/${salida} (node tools/build-fuentes.js)`);
    }
  }

  // Los .txt son lo que se pega en NotebookLM. Tienen que ser el archivo tal cual:
  // si difieren, la verificación externa contesta sobre un texto que no existe.
  const TXT = path.join(RAIZ, "verificacion/txt");
  if (!fs.existsSync(TXT)) {
    falla("verificacion/txt/", 0, "falta la carpeta de textos para cargar en NotebookLM (node tools/build-fuentes.js)");
  } else {
    const sobranTxt = new Set(fs.readdirSync(TXT).filter((f) => f.endsWith(".txt")));
    for (const f of archivos) {
      const id = f.replace(/\.es\.md$/, "");
      let original = null;
      try {
        original = execSync(`git show ${BASE}:resultados/ux-v1/webapp/docs/${f}`, {
          encoding: "utf8", cwd: RAIZ, stdio: ["ignore", "pipe", "pipe"], maxBuffer: 32 * 1024 * 1024,
        });
      } catch { continue; }
      const rutaMod = path.join(DOCS_MOD, `${id}-MOD.es.md`);
      for (const [nombre, esperado] of [
        [`${id}.txt`, original],
        [`${id}-MOD.txt`, fs.existsSync(rutaMod) ? fs.readFileSync(rutaMod, "utf8") : null],
      ]) {
        if (esperado === null) continue;
        const ruta = path.join(TXT, nombre);
        if (!fs.existsSync(ruta)) {
          falla(`verificacion/txt/${nombre}`, 0, "falta el texto para cargar en NotebookLM (node tools/build-fuentes.js)");
          continue;
        }
        sobranTxt.delete(nombre);
        if (fs.readFileSync(ruta, "utf8") !== esperado)
          falla(`verificacion/txt/${nombre}`, 0, "no reproduce su archivo carácter por carácter (node tools/build-fuentes.js)");
      }
    }
    const txtCodigo = "cuestionario-inteligente.txt";
    const fuenteCodigo = path.join(WEBAPP, "demo/cuestionario-inteligente.jsx");
    if (fs.existsSync(fuenteCodigo)) {
      const ruta = path.join(TXT, txtCodigo);
      if (!fs.existsSync(ruta)) falla(`verificacion/txt/${txtCodigo}`, 0, "falta el texto del código (node tools/build-fuentes.js)");
      else {
        sobranTxt.delete(txtCodigo);
        if (fs.readFileSync(ruta, "utf8") !== fs.readFileSync(fuenteCodigo, "utf8"))
          falla(`verificacion/txt/${txtCodigo}`, 0, "no reproduce el código carácter por carácter (node tools/build-fuentes.js)");
      }
    }
    // Las 10 páginas HTML también van como texto: NotebookLM no extrae el suyo
    // cuando se cargan por URL. Se comprobó dos veces, y llegó a afirmar que AP-01
    // y AU-01 no existían en ninguna fuente cuando el MPC los define.
    const generadorTxt = fs.readFileSync(path.join(__dirname, "build-fuentes.js"), "utf8");
    if (!/function textoDeHtml/.test(generadorTxt))
      falla("tools/build-fuentes.js", 0, "falta el extractor de texto de las páginas HTML");
    const PROC = path.join(WEBAPP, "proceso");
    const paginas = [
      ...fs.readdirSync(PROC).filter((f) => f.endsWith(".html") && f !== "dec-01.html").sort()
        .map((f) => [path.join(PROC, f), "proceso-" + f.replace(/\.html$/, "") + ".txt"]),
      ["licitacion/index.html", "sitio-licitacion-index.txt"],
      ["presentacion/deck.html", "sitio-presentacion-deck.txt"],
    ];
    for (const [origen, salida] of paginas) {
      const ruta = path.join(TXT, salida);
      if (!fs.existsSync(ruta)) {
        falla("verificacion/txt/" + salida, 0, "falta el texto de la página (node tools/build-fuentes.js)");
        continue;
      }
      sobranTxt.delete(salida);
      const t = fs.readFileSync(ruta, "utf8");
      // Una página cuyo texto no llega a 500 caracteres es armazón: su contenido lo
      // pinta JavaScript y como fuente entraría vacía. Fue el caso de demo-manual,
      // 31 KB de HTML y 37 caracteres de texto.
      if (t.length < 500)
        falla("verificacion/txt/" + salida, 0, "sólo tiene " + t.length + " caracteres: la extracción no recuperó texto; esa página es armazón y no sirve como fuente");
    }

    for (const suelto of sobranTxt)
      falla(`verificacion/txt/${suelto}`, 0, "texto sin archivo que lo respalde (node tools/build-fuentes.js)");
  }

  // El cuaderno tiene un límite de 50 fuentes. Pasarlo no es un detalle: obliga
  // a dejar documentos fuera, y un documento fuera es un hallazgo que no se ve.
  const proceso = fs.readdirSync(PROCESO).filter((f) => f.endsWith(".html") && f !== "dec-01.html").length;
  const total = archivos.length + proceso + WEB.length + CODIGO.length;
  if (total > 50)
    falla("verificacion/fuentes.md", 0, `cada cuaderno cargaría ${total} fuentes y el límite es 50`);
});


/* ─────────── R24 · toda corrección queda registrada y cuadra ─────────── */
// «No hubo ediciones no autorizadas» no puede ser una afirmación: tiene que ser
// una comprobación. Cada documento con diferencias contra su original debe estar
// registrado en verificacion/correcciones.md, citar hallazgos que existan, y
// declarar el mismo número de cambios que contó el generador. Un cambio de más
// —o uno que nadie reclama— rompe la corrida aquí, sin esperar al cuaderno 3.
regla("R24 · toda corrección está registrada y cuadra", (falla) => {
  const RAIZ = path.resolve(__dirname, "../../..");
  const CAMBIOS = path.join(RAIZ, "verificacion/cambios.md");
  const REGISTRO = path.join(RAIZ, "verificacion/correcciones.md");
  const HALLAZGOS = path.join(RAIZ, "verificacion/hallazgos.csv");

  for (const [ruta, nombre] of [[CAMBIOS, "cambios.md"], [REGISTRO, "correcciones.md"], [HALLAZGOS, "hallazgos.csv"]]) {
    if (!fs.existsSync(ruta)) {
      falla(`verificacion/${nombre}`, 0, "falta; sin él no puede comprobarse qué se corrigió");
      return;
    }
  }

  // Lo que el generador contó: documento -> número de cambios.
  const contados = {};
  for (const m of fs.readFileSync(CAMBIOS, "utf8").matchAll(/^## (\S+) → \S+ — (\d+) cambios?$/gm))
    contados[m[1]] = Number(m[2]);

  // Lo que declara el registro, en su tabla de índice.
  const registro = fs.readFileSync(REGISTRO, "utf8");
  const declarados = {};
  for (const m of registro.matchAll(/^\|\s*([a-z0-9-]+)\s*\|\s*([^|]+?)\s*\|\s*(\d+)\s*\|$/gm))
    declarados[m[1]] = { hallazgos: m[2].split(/\s*,\s*/).filter(Boolean), cambios: Number(m[3]) };

  const validos = new Set(
    fs.readFileSync(HALLAZGOS, "utf8").split("\n").slice(1).map((l) => l.split(",")[0]).filter(Boolean)
  );

  for (const [doc, n] of Object.entries(contados)) {
    const d = declarados[doc];
    if (!d) {
      falla("verificacion/correcciones.md", 0, `${doc} tiene ${n} ${n === 1 ? "cambio" : "cambios"} y no está registrado: toda corrección se explica antes de publicarse`);
      continue;
    }
    if (d.cambios !== n)
      falla("verificacion/correcciones.md", 0, `${doc}: el registro declara ${d.cambios} ${d.cambios === 1 ? "cambio" : "cambios"} y el generador contó ${n}`);
    if (!d.hallazgos.length)
      falla("verificacion/correcciones.md", 0, `${doc}: no cita ningún hallazgo que autorice la corrección`);
    for (const h of d.hallazgos)
      if (!validos.has(h))
        falla("verificacion/correcciones.md", 0, `${doc}: cita el hallazgo ${h}, que no existe en hallazgos.csv`);
  }

  // Y al revés: un documento registrado que no tiene cambios es un registro falso.
  for (const doc of Object.keys(declarados))
    if (!(doc in contados))
      falla("verificacion/correcciones.md", 0, `${doc} está registrado como corregido y no tiene ninguna diferencia contra su original`);
});

console.log(`\nVerificador de consistencia · ${archivos.length} documentos · ${totalLineas.toLocaleString("es-MX")} líneas · ${reglas.length} reglas\n`);
reglas.forEach((r) => console.log(`  ${r.fallas === 0 ? "\x1b[32m✓\x1b[0m" : "\x1b[31m✗\x1b[0m"} ${r.nombre}${r.fallas ? `  (${r.fallas})` : ""}`));
if (fallas.length) {
  console.log("\n\x1b[31mHallazgos:\x1b[0m");
  fallas.forEach((f) => console.log(`  ${f.doc}${f.linea ? ":" + f.linea : ""} — ${f.msg}`));
}
console.log(`\n${fallas.length ? "\x1b[31m" : "\x1b[32m"}${fallas.length} hallazgos\x1b[0m`);

/* ─────────── Prueba de cobertura ─────────── */
// Se escribe un reporte con qué regla examinó qué archivo. La cobertura no se
// afirma: la registra el propio programa mientras corre.
const porArchivo = {};
for (const [r, set] of Object.entries(cobertura))
  for (const f of set) (porArchivo[f] || (porArchivo[f] = [])).push(r.split(" ·")[0]);

const filas = Object.keys(porArchivo).sort().map((f) => {
  const lineas = texto[f] ? texto[f].split("\n").length : null;
  const rs = porArchivo[f].sort((a, b) => +a.slice(1) - +b.slice(1));
  const h = fallas.filter((x) => x.doc === f).length;
  return { f, lineas, rs, h, intocable: INTOCABLES.has(f) };
});

const sinCubrir = archivos.filter((f) => !porArchivo[f]);


const md = [
  "# Reporte de consistencia del depósito",
  "",
  `**${archivos.length} documentos · ${totalLineas.toLocaleString("es-MX")} líneas · ${reglas.length} reglas · ${fallas.length} hallazgos**`,
  "",
  "Este reporte lo genera `tools/consistencia.js` al ejecutarse. La columna «reglas",
  "aplicadas» no es una declaración: es el registro de qué verificación tocó qué",
  "archivo durante esta corrida.",
  "",
  "## Cobertura por documento",
  "",
  "| Documento | Líneas | Reglas aplicadas | Hallazgos |",
  "|---|---:|---|---:|",
  ...filas.map((r) => `| ${r.f}${r.intocable ? " *(intocable)*" : ""} | ${r.lineas ?? "—"} | ${r.rs.join(", ")} (${r.rs.length}) | ${r.h} |`),
  "",
  "## Cobertura por regla",
  "",
  "| Regla | Archivos examinados | Hallazgos |",
  "|---|---:|---:|",
  ...reglas.map((r) => `| ${r.nombre} | ${cobertura[r.nombre].size} | ${r.fallas} |`),
  "",
];
if (sinCubrir.length) {
  md.push("## Documentos sin ninguna regla aplicada", "", ...sinCubrir.map((f) => `- ${f}`), "");
}
if (fallas.length) {
  md.push("## Hallazgos", "", "| Regla | Documento | Línea | Detalle |", "|---|---|---:|---|",
    ...fallas.map((f) => `| ${f.regla} | ${f.doc} | ${f.linea || "—"} | ${f.msg} |`), "");
}
fs.writeFileSync(path.join(__dirname, "consistencia-report.md"), md.join("\n"));
console.log(`Reporte de cobertura: tools/consistencia-report.md`);
if (sinCubrir.length) console.log(`\x1b[33m${sinCubrir.length} documentos sin regla aplicada\x1b[0m`);
console.log("");
process.exit(fallas.length ? 1 : 0);
