# Fuentes que se cargan en NotebookLM

Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. No se edita a mano:
se rehace en cada corrida del generador, y la regla **R23** de `tools/consistencia.js` falla
si alguna página no corresponde con lo que debe reproducir o si esta lista no las nombra todas.

**NotebookLM no vuelve a rastrear:** cada fuente queda congelada en el momento en que se carga.
Después de un cambio hay que **volver a cargar** las fuentes afectadas, o la verificación
contestará sobre texto viejo.

## Cómo se cargan

**Los documentos y el código se cargan como texto pegado**, con `add_source` en modo `text`,
desde los archivos de `verificacion/txt/`. Así no hay rastreo de por medio: lo que lee
NotebookLM es carácter por carácter el archivo, y no depende de que una página se publique
ni de cómo la interprete un rastreador. R23 comprueba esa identidad en cada corrida.

**Las páginas HTML se cargan por URL**, en modo `url`: son las 7 del Proceso Comercial y las 3
del sitio. No tienen un archivo de texto detrás —se escribieron directamente como páginas—, así
que extraer su texto lo hace el rastreador de NotebookLM y no nosotros. Convertirlas a mano
sería transcribirlas, que es justo lo que este método evita.

## Los cuadernos

| Cuaderno | Nombre en NotebookLM | Liga |
|---|---|---|
| **1 · Originales** | Sports World Business Dev. Documentation Review Engine | https://notebook.google.com/notebook/c530c174-5f8f-4dd1-84ff-5f9a02938732 |
| **2 · Corregidos** | SW Biz Dev Projected Revised Documentation | https://notebook.google.com/notebook/fa78730e-927b-4d57-8ab1-adcd35c09826 |
| **3 · Verificación por pares** | SW Biz Dev Documentation Review Comparison | https://notebook.google.com/notebook/a660eed3-0e54-4606-82a6-6633e296c126 |

| Cuaderno | Qué se carga | Cuándo | Para qué |
|---|---|---|---|
| **1 · Originales** | los 31 documentos de `original/` + las 7 páginas del Proceso Comercial + las 2 páginas del sitio + el código del cuestionario = **41 fuentes** | **ahora** | Se le pregunta hallazgo por hallazgo, desde el primero. Dice qué hay que cambiar y dónde. |
| **2 · Corregidos** | los 31 documentos `-MOD` de `mod/` + las 7 del Proceso Comercial + las 2 del sitio + el código del cuestionario = **41 fuentes** | **cuando todas las modificaciones estén hechas** | Confirma que los cambios están hechos. |
| **3 · Verificación por pares** | el original y su `-MOD` de cada documento **que haya cambiado**, más el resumen de `cambios.md` | al final | Compara par por par y dice si hubo errores o ediciones no autorizadas al hacer los cambios. |

Las dos versiones **nunca van juntas en una misma página**. Cada una es una fuente independiente,
reproducida mecánicamente de su archivo, y se emparejan por el nombre: `bds-tecnica` con
`bds-tecnica-MOD`. Así la verificación no depende de que quien las transcribió no se equivocara.

El cuaderno 3 lleva sólo los pares que cambiaron: un documento idéntico a su original no tiene nada
que verificar. Hoy serían **0 fuentes** (0 pares).

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

## Cuaderno 2 · Documentos corregidos (31)

Mismo nombre que su original, con el sufijo `-MOD`.

- `academia-anexo-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/academia-anexo-MOD.html
- `academia-contenido-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/academia-contenido-MOD.html
- `academia-fases-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/academia-fases-MOD.html
- `academia-medicion-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/academia-medicion-MOD.html
- `academia-produccion-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/academia-produccion-MOD.html
- `academia-resumen-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/academia-resumen-MOD.html
- `academia-tecnica-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/academia-tecnica-MOD.html
- `aportaciones-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/aportaciones-MOD.html
- `auditoria-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/auditoria-MOD.html
- `bds-anexo-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/bds-anexo-MOD.html
- `bds-canales-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/bds-canales-MOD.html
- `bds-flujo-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/bds-flujo-MOD.html
- `bds-medicion-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/bds-medicion-MOD.html
- `bds-resumen-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/bds-resumen-MOD.html
- `bds-tecnica-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/bds-tecnica-MOD.html
- `contrato-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/contrato-MOD.html
- `entrevistas-campo-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/entrevistas-campo-MOD.html
- `execution-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/execution-MOD.html
- `experience-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/experience-MOD.html
- `funnel-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/funnel-MOD.html
- `gastos-operativos-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/gastos-operativos-MOD.html
- `glosario-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/glosario-MOD.html
- `indice-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/indice-MOD.html
- `integracion-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/integracion-MOD.html
- `minuta-2026-06-22-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/minuta-2026-06-22-MOD.html
- `resumen-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/resumen-MOD.html
- `roi-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/roi-MOD.html
- `seguimiento-2026-06-22-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/seguimiento-2026-06-22-MOD.html
- `seguridad-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/seguridad-MOD.html
- `technical-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/technical-MOD.html
- `workshop-discovery-MOD` — https://erictoled564.github.io/SW-Business-Development-System/mod/workshop-discovery-MOD.html

## Proceso Comercial (7) · cuadernos 1 y 2

No cambiaron desde la base, así que la misma página sirve a los dos cuadernos.

- Manual del Proceso Comercial · MPC/SW/01 — https://erictoled564.github.io/SW-Business-Development-System/proceso/mpc-01.html
- Manual de Ventas · MV/SW/01 — https://erictoled564.github.io/SW-Business-Development-System/proceso/mv-01.html
- Captación por WhatsApp · SOP/SW/0101 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0101.html
- Captación por el sitio web · SOP/SW/0102 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0102.html
- Captación en consola · SOP/SW/0103 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0103.html
- La Experiencia Guiada · SOP/SW/0201 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0201.html
- Contratación y alta · SOP/SW/0301 — https://erictoled564.github.io/SW-Business-Development-System/proceso/sop-0301.html

## Código (1) · cuadernos 1 y 2

Publicado íntegro y sin modificar. Es donde vive el texto exacto de las preguntas del
cuestionario, tal como las ve el prospecto.

- Cuestionario dinámico · código — https://erictoled564.github.io/SW-Business-Development-System/codigo/cuestionario-inteligente.html

## Páginas del sitio (2) · cuadernos 1 y 2

Se cargan tal como están publicadas. Quedan fuera el visor, el redirector de la presentación
y las dos páginas del demo: son armazón, su contenido lo pinta JavaScript y como fuente
entrarían vacías. El contenido del cuestionario del demo está especificado en
`experience.es.md`, que ya es fuente.

- Licitación — https://erictoled564.github.io/SW-Business-Development-System/licitacion/index.html
- Presentación · deck — https://erictoled564.github.io/SW-Business-Development-System/presentacion/deck.html
