# Fuentes que se cargan en NotebookLM

Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. No se edita a mano:
se rehace en cada corrida del generador, y la regla **R23** de `tools/consistencia.js` falla
si alguna página no corresponde con su documento o si esta lista no las nombra todas.

**NotebookLM no vuelve a rastrear:** cada fuente queda congelada en el momento en que se
carga. Después de publicar un cambio hay que **volver a cargar** las fuentes afectadas, o la
verificación contestará sobre texto viejo. Por eso se carga **después** de publicar, nunca antes.

## Los tres cuadernos

| Cuaderno | Nombre en NotebookLM | Liga |
|---|---|---|
| **1 · Originales** | Sports World Business Dev. Documentation Review Engine | https://notebook.google.com/notebook/c530c174-5f8f-4dd1-84ff-5f9a02938732 |
| **2 · Corregidos** | SW Biz Dev Projected Revised Documentation | https://notebook.google.com/notebook/fa78730e-927b-4d57-8ab1-adcd35c09826 |
| **3 · Verificación final** | pendiente de crear | — |

| Cuaderno | Qué se carga | Para qué |
|---|---|---|
| **1 · Originales** | 31 páginas de `original/` + 7 del Proceso Comercial | Dice **dónde hay que hacer los cambios**. Es el depósito tal como lo leyó la auditoría. |
| **2 · Corregidos** | 31 páginas de `fuentes/` + 7 del Proceso Comercial | Al cerrar todos los paquetes: confirma que **los cambios están hechos**. |
| **3 · Verificación final** | 31 páginas de `comparacion/` | Confirma que se hicieron **sólo** los cambios: sin omisiones y sin ediciones no autorizadas. |

Las páginas del Proceso Comercial no cambiaron desde la base, así que sirven a los cuadernos 1 y 2
sin necesidad de dos versiones.

El cuaderno 3 lleva una sola página por documento —con las dos versiones y su diferencia dentro—
en lugar de las dos por separado. Correlacionar dos fuentes distintas es lo que NotebookLM hace
mal; leer una página que ya trae la comparación hecha es lo que hace bien. Y de paso cabe en el
límite de fuentes.

## Cuaderno 1 · Documentos originales (31)

Estado del depósito en el commit `90a1ede` (28 de agosto de 2026), anterior a toda corrección.

- `academia-anexo` — https://erictoled564.github.io/SW-Business-Development-System/original/academia-anexo.html
- `academia-contenido` — https://erictoled564.github.io/SW-Business-Development-System/original/academia-contenido.html
- `academia-fases` — https://erictoled564.github.io/SW-Business-Development-System/original/academia-fases.html
- `academia-medicion` — https://erictoled564.github.io/SW-Business-Development-System/original/academia-medicion.html
- `academia-produccion` — https://erictoled564.github.io/SW-Business-Development-System/original/academia-produccion.html
- `academia-resumen` — https://erictoled564.github.io/SW-Business-Development-System/original/academia-resumen.html
- `academia-tecnica` — https://erictoled564.github.io/SW-Business-Development-System/original/academia-tecnica.html
- `aportaciones` — https://erictoled564.github.io/SW-Business-Development-System/original/aportaciones.html
- `auditoria` — https://erictoled564.github.io/SW-Business-Development-System/original/auditoria.html
- `bds-anexo` — https://erictoled564.github.io/SW-Business-Development-System/original/bds-anexo.html
- `bds-canales` — https://erictoled564.github.io/SW-Business-Development-System/original/bds-canales.html
- `bds-flujo` — https://erictoled564.github.io/SW-Business-Development-System/original/bds-flujo.html
- `bds-medicion` — https://erictoled564.github.io/SW-Business-Development-System/original/bds-medicion.html
- `bds-resumen` — https://erictoled564.github.io/SW-Business-Development-System/original/bds-resumen.html
- `bds-tecnica` — https://erictoled564.github.io/SW-Business-Development-System/original/bds-tecnica.html
- `contrato` — https://erictoled564.github.io/SW-Business-Development-System/original/contrato.html
- `entrevistas-campo` — https://erictoled564.github.io/SW-Business-Development-System/original/entrevistas-campo.html
- `execution` — https://erictoled564.github.io/SW-Business-Development-System/original/execution.html
- `experience` — https://erictoled564.github.io/SW-Business-Development-System/original/experience.html
- `funnel` — https://erictoled564.github.io/SW-Business-Development-System/original/funnel.html
- `gastos-operativos` — https://erictoled564.github.io/SW-Business-Development-System/original/gastos-operativos.html
- `glosario` — https://erictoled564.github.io/SW-Business-Development-System/original/glosario.html
- `indice` — https://erictoled564.github.io/SW-Business-Development-System/original/indice.html
- `integracion` — https://erictoled564.github.io/SW-Business-Development-System/original/integracion.html
- `minuta-2026-06-22` — https://erictoled564.github.io/SW-Business-Development-System/original/minuta-2026-06-22.html
- `resumen` — https://erictoled564.github.io/SW-Business-Development-System/original/resumen.html
- `roi` — https://erictoled564.github.io/SW-Business-Development-System/original/roi.html
- `seguimiento-2026-06-22` — https://erictoled564.github.io/SW-Business-Development-System/original/seguimiento-2026-06-22.html
- `seguridad` — https://erictoled564.github.io/SW-Business-Development-System/original/seguridad.html
- `technical` — https://erictoled564.github.io/SW-Business-Development-System/original/technical.html
- `workshop-discovery` — https://erictoled564.github.io/SW-Business-Development-System/original/workshop-discovery.html

## Cuaderno 2 · Documentos vigentes (31)

- `academia-anexo` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/academia-anexo.html
- `academia-contenido` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/academia-contenido.html
- `academia-fases` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/academia-fases.html
- `academia-medicion` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/academia-medicion.html
- `academia-produccion` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/academia-produccion.html
- `academia-resumen` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/academia-resumen.html
- `academia-tecnica` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/academia-tecnica.html
- `aportaciones` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/aportaciones.html
- `auditoria` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/auditoria.html
- `bds-anexo` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/bds-anexo.html
- `bds-canales` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/bds-canales.html
- `bds-flujo` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/bds-flujo.html
- `bds-medicion` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/bds-medicion.html
- `bds-resumen` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/bds-resumen.html
- `bds-tecnica` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/bds-tecnica.html
- `contrato` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/contrato.html
- `entrevistas-campo` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/entrevistas-campo.html
- `execution` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/execution.html
- `experience` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/experience.html
- `funnel` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/funnel.html
- `gastos-operativos` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/gastos-operativos.html
- `glosario` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/glosario.html
- `indice` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/indice.html
- `integracion` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/integracion.html
- `minuta-2026-06-22` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/minuta-2026-06-22.html
- `resumen` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/resumen.html
- `roi` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/roi.html
- `seguimiento-2026-06-22` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/seguimiento-2026-06-22.html
- `seguridad` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/seguridad.html
- `technical` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/technical.html
- `workshop-discovery` — https://erictoled564.github.io/SW-Business-Development-System/fuentes/workshop-discovery.html

## Cuaderno 3 · Comparación original contra vigente (31)

- `academia-anexo` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/academia-anexo.html
- `academia-contenido` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/academia-contenido.html
- `academia-fases` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/academia-fases.html
- `academia-medicion` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/academia-medicion.html
- `academia-produccion` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/academia-produccion.html
- `academia-resumen` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/academia-resumen.html
- `academia-tecnica` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/academia-tecnica.html
- `aportaciones` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/aportaciones.html
- `auditoria` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/auditoria.html
- `bds-anexo` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/bds-anexo.html
- `bds-canales` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/bds-canales.html
- `bds-flujo` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/bds-flujo.html
- `bds-medicion` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/bds-medicion.html
- `bds-resumen` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/bds-resumen.html
- `bds-tecnica` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/bds-tecnica.html
- `contrato` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/contrato.html
- `entrevistas-campo` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/entrevistas-campo.html
- `execution` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/execution.html
- `experience` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/experience.html
- `funnel` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/funnel.html
- `gastos-operativos` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/gastos-operativos.html
- `glosario` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/glosario.html
- `indice` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/indice.html
- `integracion` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/integracion.html
- `minuta-2026-06-22` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/minuta-2026-06-22.html
- `resumen` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/resumen.html
- `roi` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/roi.html
- `seguimiento-2026-06-22` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/seguimiento-2026-06-22.html
- `seguridad` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/seguridad.html
- `technical` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/technical.html
- `workshop-discovery` — https://erictoled564.github.io/SW-Business-Development-System/comparacion/workshop-discovery.html

## Proceso Comercial (7) · cuadernos 1 y 2

- Manual del Proceso Comercial · MPC/SW/01 — https://erictoled564.github.io/SW-Business-Development-System/proceso/mpc-01.html
- Manual de Ventas · MV/SW/01 — https://erictoled564.github.io/SW-Business-Development-System/proceso/mv-01.html
- Captación por WhatsApp · SOP/SW/0101 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0101.html
- Captación por el sitio web · SOP/SW/0102 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0102.html
- Captación en consola · SOP/SW/0103 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0103.html
- La Experiencia Guiada · SOP/SW/0201 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0201.html
- Contratación y alta · SOP/SW/0301 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0301.html
