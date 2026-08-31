# Sports World México · Reglas permanentes del proyecto

Este archivo se carga automáticamente al inicio de **cada sesión**. Lo que está aquí no hay que volver a explicarlo.

## Qué es el proyecto

**No es un sitio web ni un cuestionario: es la reestructuración de la captación y la conversión de Sports World.** La tesis: Sports World tiene la mejor infraestructura de fitness de México y la peor traducción de esa infraestructura a la decisión del cliente. El proyecto no agrega infraestructura — la vuelve legible, y con eso, vendible.

Cinco niveles:

| Nivel | Qué es | Dónde vive |
|---|---|---|
| **El sistema** | Captación y conversión con todos los canales integrados | Proyectos A + B |
| **El producto** | La **experiencia ideal**, con dos destinatarios: el cliente la recibe como su experiencia; el asesor como **brief** de cierre | Proyecto A |
| **La capacidad humana** | La **Academia**: entrena a los 200 asesores en el mismo concepto que el sistema produce | Proyecto C |
| **El instrumento** | El **cuestionario dinámico**: un minuto del prospecto, idéntico en los cuatro canales | Compartido |
| **La prueba** | El **funnel completo**, del clic a la cancelación, operado de forma permanente | A + iguala |

Un mismo concepto atraviesa el sistema de punta a punta: el cliente lo recibe como experiencia, el asesor como brief, la Academia lo entrena como método.

### Qué es el producto (definición fijada por Eric)

**El producto es la Experiencia Ideal: el plan de entrenamiento holístico y específico que demuestra la superioridad técnica de Sports World, entregando un programa conectado con los objetivos de la persona desde el día uno. No vendemos un club ni una membresía: vendemos resultados.**

Toda pieza —manual, cuestionario, procedimiento, capacitación, sitio— se escribe desde ahí. Un catálogo de clases, una lista de amenidades o una tabla de precios no son el producto: son insumos del plan. Si un documento describe el club en vez del plan de la persona, está mal escrito.

## Cómo trabaja Eric (reglas de entrega)

1. **Registro ejecutivo siempre.** Nada de lenguaje coloquial en documentos del depósito.
2. **Cada cambio se entrega con el documento COMPLETO reescrito**, nunca por parches ni fragmentos. Eric arma la versión final a partir de lo que se le entrega; un fragmento le hace perder el hilo.
3. **Verificar antes de afirmar.** No decir que algo está auditado, revisado o corregido sin haberlo leído. Si la cobertura es parcial, decir el porcentaje exacto.
4. **Lenguaje neutro** al referirse a usuarios y prospectos; nunca "él" por defecto.
5. **Cifras verificables, no adjetivos.** "Capacidad razonable" no sirve; hay que dar el número.
6. Publicar conforme se termina cada bloque y avisar solo cuando ya esté en línea; no preguntar por mecánica de PRs.
7. **Nada se corrige ni se produce sin confirmación expresa de Eric.** Analizar, diagnosticar y proponer sí; tocar un documento, un archivo o publicar, solo después de su «go». Rige todo el tiempo.

## Qué NO se toca

- **Los tres documentos contractuales** (`contrato.es.md`, `bds-anexo`, `academia-anexo`): están en **etapa de revisión** y sus markdown son la fuente de verdad. Sus PDFs **sí se regeneran** con `build_pdfkit.js` (el candado se retiró en agosto de 2026). Todo cambio de fondo requiere autorización expresa de Eric y queda documentado en `PAQUETE-LEGAL.md`. Las versiones firmadas anteriores se conservan en `/versiones-del-contrato/oficiales/` y no se tocan.
- **`minuta-2026-06-22.es.md`**: registro histórico. Reescribirlo falsifica lo que se dijo ese día. (`seguimiento-2026-06-22.es.md` sí es un tablero vivo y se actualiza.)

## Decisiones ya fijadas

- **Sincronización con el CRM: corte diario 06:00 (CDMX).** Lo registrado hasta las 05:59 se publica ese día. Sustituye toda lectura "en tiempo real" de precios y clases. Existe sincronización manual inmediata para casos excepcionales (promociones).
- **Llaves de conciliación:** lead → visita → membresía por **nombre + apellido + teléfono + club**; membresía → cancelación por **número de membresía**. Sustituye la llave de código postal del Anexo Uno.
- **Funnel canónico:** `docs/funnel.es.md`. Tres puertas de entrada (sitio, WhatsApp, consola), una espina de conversión, dos ejes transversales. Sustituye las definiciones de `technical` §10, `bds-medicion` e `integracion` §5.
- **Agrupación del depósito:** El sistema · **El proceso comercial (procedimientos normalizados)** · **La medición (funnel + integración)** · La evidencia · **Reuniones** · Proyecto A (captación y conversión) · Proyecto B (canales en tiempo real) · Proyecto C (capacidad humana).
- **Idiomas:** la sección del cliente es **solo español**. El bilingüe corresponde a las secciones de líderes de subproyecto (entregable aparte, aún no construido). **Las versiones en inglés se retiraron en agosto de 2026, por instrucción expresa de Eric, y se vuelven a crear cuando los documentos estén revisados.** Sustituye la regla anterior de no borrarlas.
- **Los planes de membresía vienen del CRM**, no se congelan en la documentación. El contrato fija seis páginas de membresía, sin nombrarlas.

## Cómo se publica

- Fuente de verdad: `resultados/ux-v1/webapp/docs/*.es.md`.
- **Excepción: el Proceso Comercial.** Sus documentos —`MPC/SW/01`, `SOP/SW/0101`, `SOP/SW/0102`, `SOP/SW/0103`, `SOP/SW/0201` y `SOP/SW/0301`— viven en `resultados/ux-v1/webapp/proceso/*.html` como páginas con composición propia (cabecera de control, tablas de pasos con código de color, diagrama de flujo). Se registran en `app.js` con `type: "page"` y `src`, y en `indice.es.md` como cualquier otro documento. **`DEC/SW/01` es la excepción de la excepción:** vive en la misma carpeta y con la misma composición, pero **es interno y no se registra ni en `app.js` ni en `indice.es.md`** — es el registro de cambios del proceso y el cliente no tiene por qué verlo. Lo sostiene la regla R21 de `consistencia.js`; no es un documento huérfano. **No pasan por `build_pdfkit.js`**: el PDF se obtiene desde la propia página, con el botón de impresión. El visor les monta encima las funciones de lectura —índice, búsqueda con resaltado, ancla por paso (`#sop-0201:paso-31`), filtro por responsable, enlaces cruzados e índice de claves—; ese código vive en `app.js` y las páginas se mantienen legibles por separado.
- Registro de cada documento en `resultados/ux-v1/webapp/app.js` (id, grupo, PDF) y en `indice.es.md`.
- PDFs con el pipeline de casa: `resultados/ux-v1/kb/build_pdfkit.js` (pdfkit). Nunca a mano.
- Verificación obligatoria antes de publicar, desde `resultados/ux-v1`, las dos:
  - `node tools/audit-docs.js` — archivos, referencias, enlaces, fuente de verdad, trazabilidad, marcadores, glosario.
  - `node tools/consistencia.js` — las invariantes del proyecto (corte 06:00, funnel canónico, llave de conciliación, especificación única de servidor, cifras clave, línea base de KPIs). Deja el reporte de cobertura en `tools/consistencia-report.md`. Ambas corren en CI y fallan la corrida ante cualquier hallazgo.
- **Cada invariante nueva se agrega como regla en `consistencia.js`, no a una lista de pendientes.** Una contradicción corregida sin regla que la sostenga vuelve a aparecer.
- Un commit por documento, con su nombre en el mensaje, para que cualquier cambio sea reversible por separado.
- Rama de trabajo: `claude/new-session-1apjew`. Publicado en https://erictoled564.github.io/SW-Business-Development-System/

## Estado de las contradicciones

**Cerradas: las nueve de la auditoría, más las que surgieron al someter el Contrato a las reglas.** Ya no se llevan en lista: cada una tiene una regla que la sostiene en `tools/consistencia.js` (20 reglas, 0 hallazgos, corre en CI). Si algo vuelve a aparecer, lo detecta el programa, no la memoria.

Los tres puntos que estaban anclados en el Contrato —frecuencia de sincronización, etapas del funnel y llave de conciliación— **quedaron incorporados al texto** en agosto de 2026, con autorización expresa de Eric por encontrarse el Contrato en etapa de revisión. Ver `PAQUETE-LEGAL.md` para el detalle de los ocho ajustes.

Los PDFs del depósito ya reflejan el texto vigente: el Contrato como V4.3 (39 págs) y los dos addenda regenerados. **No queda ningún pendiente abierto.**

## Activos que ya existen (no reconstruir)

- `experience:28-64` y `academia-contenido:8-30` — taxonomía completa de objetivos **emocionales (Q3)** y **funcionales (Q4)**, con validación contra benchmarks de industria.
- `academia-contenido:45-55` — las cinco dimensiones de decisión: comodidad y aforo, amenidades, ubicación y red multiclub, precio, estatus.
- `experience:14` — la tesis del proyecto, ya redactada casi textualmente.
- `auditoria:22` — *"El producto existe —entrenadores, alberca, vapor, sauna—; para Google, no."*
