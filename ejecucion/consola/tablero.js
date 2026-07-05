// Tablero de entregables del Proyecto A — editar aquí (fuente de la verdad del plan).
// deps = ids que deben estar ENTREGADOS antes; semana = fin comprometido (desde kickoff).
window.KICKOFF_DEFAULT = "2026-07-14";
window.TABLERO = [
 {id:"anexo-uno", n:"Checklist Anexo Uno firmado (aportaciones cliente)", rol:"Cliente", sem:1, deps:[], inputs:["resultados/ux-v1/webapp/docs/aportaciones.es.md"]},
 {id:"setup", n:"Repo + CI + presupuesto de calidad activo", rol:"Tech Lead", sem:1, deps:[], inputs:["ejecucion/00-modelo/gates-de-calidad.md"]},
 {id:"kb", n:"Knowledge base extraída (catálogo clubes/clases)", rol:"Tech Lead", sem:1, deps:["anexo-uno"], inputs:[]},
 {id:"visual", n:"Sistema visual + plantillas v1", rol:"Diseño", sem:1, deps:[], inputs:["ejecucion/04-plantillas/spec-de-pagina.md"]},
 {id:"keywords", n:"Estrategia de keywords por tipo de página", rol:"SEO", sem:2, deps:[], inputs:[]},
 {id:"pilar", n:"GATE PILAR: home + 1 ficha + 1 hub aprobados", rol:"Diseño", sem:2, deps:["visual","kb","keywords","setup"], inputs:[]},
 {id:"api-crm", n:"Credenciales y API CRM productivas", rol:"Cliente", sem:2, deps:["anexo-uno"], inputs:[]},
 {id:"middleware", n:"Middleware CRM (escritura idempotente)", rol:"Integraciones", sem:3, deps:["api-crm"], inputs:[]},
 {id:"fichas", n:"Lote 49 fichas de club", rol:"Tech Lead", sem:4, deps:["pilar"], inputs:[]},
 {id:"hubs", n:"Hubs + perfiles + membresías", rol:"Tech Lead", sem:4, deps:["pilar"], inputs:[]},
 {id:"gate50", n:"GATE 50%: fichas+hubs aprobados, captura leads viva", rol:"QA", sem:4, deps:["fichas","hubs","middleware"], inputs:[]},
 {id:"clases", n:"Lote 54 páginas de clase + blog", rol:"SEO", sem:5, deps:["gate50"], inputs:[]},
 {id:"bes", n:"BES web con cobertura total", rol:"Integraciones", sem:6, deps:["middleware","kb"], inputs:[]},
 {id:"consola", n:"Consola interna (asesores/walk-ins)", rol:"Integraciones", sem:6, deps:["middleware"], inputs:[]},
 {id:"completitud", n:"GATE COMPLETITUD: 148 páginas + flujo completo", rol:"Tech Lead", sem:6, deps:["clases","bes","consola"], inputs:[]},
 {id:"qa-final", n:"QA final: WCAG, CWV, schema, 301", rol:"QA", sem:7, deps:["completitud"], inputs:["ejecucion/04-plantillas/checklist-qa.md"]},
 {id:"vobo", n:"GATE VISTO BUENO (firma dura QA)", rol:"QA", sem:7, deps:["qa-final"], inputs:[]},
 {id:"golive", n:"GO-LIVE + redirects + training", rol:"Tech Lead", sem:8, deps:["vobo"], inputs:[]}
];
