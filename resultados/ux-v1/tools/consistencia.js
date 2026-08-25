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

/* ─────────── R18 · Retención cero (ZDR) de los proveedores de IA ─────────── */
// La estrategia de retención cero es la fuente del régimen: debe existir, fijar
// sus invariantes (convenio de retención cero del modelo, voz únicamente por
// API, vida máxima de 72 horas de la cola de reintento, regla de selección) y
// los documentos que describen a los proveedores deben remitir a ella.
regla("R18 · retención cero de proveedores", (falla) => {
  marcar("zdr.es.md");
  const z = texto["zdr.es.md"] || "";
  if (!z) { falla("zdr.es.md", 0, "no existe la estrategia de retención cero (ZDR)"); return; }
  if (!/convenio de retención cero/i.test(z))
    falla("zdr.es.md", 0, "no fija el convenio de retención cero con el proveedor del modelo");
  if (!/únicamente (a través de|por|mediante) su API/i.test(z))
    falla("zdr.es.md", 0, "no fija el acceso a la plataforma de voz únicamente por API");
  if (!/(vida|tiempo de vida) máxim[ao] de 72 horas/i.test(z))
    falla("zdr.es.md", 0, "no fija la vida máxima de 72 horas de la cola de reintento");
  if (!/no se selecciona/i.test(z))
    falla("zdr.es.md", 0, "no fija la regla de selección vinculante para componentes de IA");
  // Nadie describe la operación de la voz por la interfaz web del proveedor.
  porLinea((f, n, l) => {
    if (/playground|interfaz web (de|del proveedor de) (la )?voz|interfaz web de ElevenLabs/i.test(l) &&
        !/queda fuera|se excluye|no se usa|únicamente por (su )?API/i.test(l))
      falla(f, n, "describe acceso a la plataforma de voz fuera de su API; rige el acceso únicamente por API (ZDR)");
  });
  // La cola de reintento no vuelve a quedar sin cifra.
  porLinea((f, n, l) => {
    if (/cola temporal|cola de reintento/i.test(l) && /tiempo de vida limitado/i.test(l) && !/72 horas/.test(l))
      falla(f, n, "cola de reintento con vida «limitada» sin cifra; rige el máximo de 72 horas");
  });
  // Quien describe el régimen de los proveedores remite a la estrategia.
  for (const f of ["seguridad.es.md", "technical.es.md"]) {
    marcar(f);
    if (!/\(#zdr(?::[a-z0-9-]*)?\)/.test(texto[f] || ""))
      falla(f, 0, "no remite a la estrategia de retención cero (#zdr)");
  }
});

/* ─────────── R19 · Correo saliente dentro de la infraestructura del cliente ─────────── */
// El correo al club transporta el perfil completo del cuestionario: es la mayor
// carga de datos personales del sistema. Su vía de salida no puede quedar sin
// especificar ni resolverse con un proveedor externo que retenga el mensaje.
regla("R19 · correo saliente", (falla) => {
  marcar("zdr.es.md");
  const z = texto["zdr.es.md"] || "";
  if (!/infraestructura de correo de Sports World/i.test(z))
    falla("zdr.es.md", 0, "no fija que el correo saliente resida en la infraestructura de Sports World");
  if (!/relay corporativo/i.test(z))
    falla("zdr.es.md", 0, "no fija el relay corporativo como vía de envío");
  if (!/quedan excluidos/i.test(z))
    falla("zdr.es.md", 0, "no excluye a los proveedores externos de correo transaccional");
  // Ningún documento propone un proveedor externo de correo como vía de envío.
  const PROVEEDOR = /sendgrid|mailgun|postmark|sparkpost|mandrill|amazon ses|mailchimp|brevo/i;
  porLinea((f, n, l) => {
    if (PROVEEDOR.test(l) && !/quedan excluidos|se excluye|no se usa|fuera del régimen/i.test(l))
      falla(f, n, "propone un proveedor externo de correo transaccional; el envío sale del servicio de correo de Sports World");
  });
  // Nadie puede describir el envío desde infraestructura del prestador.
  porLinea((f, n, l) => {
    if (/(correo|mensaje).{0,60}(desde|por).{0,40}(servidor|infraestructura).{0,30}EL PRESTADOR/i.test(l))
      falla(f, n, "describe envío de correo desde infraestructura de EL PRESTADOR");
  });
});

/* ─────────── R20 · Base de conocimiento de BES ─────────── */
// La KB no es dato personal sino secreto comercial del cliente. Su régimen tiene
// tres invariantes: no contiene datos personales, no se carga como corpus
// permanente en plataformas de terceros, y sólo admite información que pueda
// comunicarse a un prospecto.
regla("R20 · base de conocimiento", (falla) => {
  // Las invariantes viven en los DOS documentos que describen el régimen de la
  // KB. Exigirlas en ambos impide que una copia se relaje respecto de la otra.
  const INVARIANTES = [
    [/no se carga como corpus permanente/i, "no fija que la KB no se cargue como corpus permanente en plataformas de terceros"],
    [/puede ser comunicado por el agente a un cliente durante una conversación/i, "no fija la premisa de que todo lo que entra a la KB es revelable"],
    [/no debe existir en la base de conocimiento/i, "no enumera las categorías que no deben existir en la KB"],
    [/[Nn]ombres y datos de contacto del personal/, "categoría prohibida ausente: nombres y contactos del personal"],
    [/[Ii]nformación financiera interna/, "categoría prohibida ausente: información financiera interna"],
    [/[Mm]árgenes y resultados por club/, "categoría prohibida ausente: márgenes y resultados por club"],
    [/[Dd]atos de socios actuales/, "categoría prohibida ausente: datos de socios actuales"],
    [/verifique y autorice de forma expresa/i, "no fija la autorización expresa de Sports World para el contenido de la KB"],
    [/La regla es absoluta y no admite excepción operativa/i, "no declara absoluta la regla de contenido de la KB"],
  ];
  for (const f of ["seguridad.es.md", "zdr.es.md"]) {
    marcar(f);
    const t = texto[f] || "";
    if (!t) { falla(f, 0, "documento ausente: no puede sostener el régimen de la KB"); continue; }
    for (const [re_, msg] of INVARIANTES) if (!re_.test(t)) falla(f, 0, msg);
  }
  const s = texto["seguridad.es.md"] || "";
  // Nadie puede declarar que la KB contiene datos personales.
  porLinea((f, n, l) => {
    if (/base(s)? de conocimiento/i.test(l) && /datos personales/i.test(l) && !/no contien|sin datos personales|no incluye/i.test(l))
      falla(f, n, "atribuye datos personales a la base de conocimiento; la KB es información operativa del cliente");
  });
});

/* ─────────── Reporte ─────────── */
const totalLineas = archivos.reduce((a, f) => a + texto[f].split("\n").length, 0);
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
