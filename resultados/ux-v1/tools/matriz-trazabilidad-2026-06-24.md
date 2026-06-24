# Matriz de trazabilidad — documentación Sports World · 2026-06-24

Catálogo único de (A) todas las tareas de esta sesión clasificadas, (B) las correlaciones de **referencias cruzadas** entre documentos, y (C) la trazabilidad de cada **hecho canónico** a los documentos que lo contienen. Generada en parte por código (grafo de enlaces y matriz de hechos por `grep` determinista). Estado del corpus: **auditoría 0 errores / 0 avisos**.

---

## A · Tareas, clasificadas

Tipos: **ALC** (corrección de alcance) · **REC** (fix de reconciliación) · **EST** (estructural) · **CAL** (mejora de calidad/clase mundial) · **PROH** (texto prohibido / meta) · **DEC** (decisión del cliente) · **TOOL** (herramienta).

| ID | Tarea | Tipo | Sev. | Estado | Documentos afectados |
|---|---|---|---|---|---|
| T1 | BES = solo canal web + 2 recordatorios WhatsApp (no telefonía / no WhatsApp conversacional) | ALC | ALTA | ✅ | technical, resumen, deliverables(es/en), glosario, indice, execution, aportaciones |
| T2 | BES no reside en el servidor del sitio (corre en ElevenLabs y proveedores) | ALC | ALTA | ✅ | execution, technical |
| T3 | Mover §4 (dependencias de SW) del Plan de Ejecución a Aportaciones, sin duplicar | EST | — | ✅ | execution, aportaciones, technical (enlaces), deliverables (ref) |
| T4 | Plan de Ejecución V2.0 (RACI, criterios de salida, hitos, KPIs, riesgos, gobierno) | CAL | — | ✅ | execution |
| T5 | Estrategia Técnica V2.0 (migración, integraciones, alineación al Anexo) | CAL | — | ✅ | technical |
| T6 (A3) | Soporte = primer respondiente voz 24/7 + humano en horario hábil (no "humano 24/7") | REC | ALTA | ✅ | deliverables(es/en) |
| T7 (A4) | Tabla de auditoría recalculada desde las filas (6,912→6,900; 4,822,500→5,819,760; 31.1% preservado) | REC | ALTA | ✅ | auditoria, resumen |
| T8 (M1) | Clases para adultos unificadas a 54 (= 51 grupales + 3 modalidades PT) | REC | MEDIA | ✅ | experience, site, resumen |
| T9 (M2) | Schema del contrato + LocalBusiness y BreadcrumbList (5 tipos) | REC | MEDIA | ✅ | contrato |
| T10 (M3) | TTL de migración unificado a 24 h (C.6 vs I.3) | REC | MEDIA | ✅ | contrato |
| T11 (M4) | Forma de pago definitiva (quitado "propuesta a confirmar") | REC | MEDIA | ✅ | contrato |
| T12 (M6) | Entregables: IVA de igualas ($40,600/$63,800) + cupo Opción B | REC | MEDIA | ✅ | deliverables(es/en) |
| T13 (M7) | Tipo de Q19 (rango en opciones de selección única) | REC | MEDIA | ✅ | experience |
| T14 (B8) | Entrada de glosario "latencia" (conversacional vs SLA de API) | REC | BAJA | ✅ | glosario |
| T15 | Eliminar "Nota de redacción" (método/fuente/cotización/corchetes) | PROH | ALTA | ✅ | contrato |
| T16 | Quitar lenguaje "fuente de la verdad / cede en autoridad" | PROH | MEDIA | ✅ | seguimiento |
| T17 | Opción A de iguala marcada como ELEGIDA ($35,000/mes); B "no elegida" | DEC | — | ✅ | contrato, deliverables(es/en) |
| T18 | Espejos en inglés alineados al estado actual | EST | — | ✅ | technical.en, execution.en, deliverables.en |
| T19 | Localizador del índice con enlaces directos doc+sección | CAL | — | ✅ | indice, app.js, styles.css |
| T20 | Auditor por código + check de enlaces internos | TOOL | — | ✅ | tools/audit-docs.js, workflow CI |

**Pendientes conocidos (BAJA, documentados, sin acción por diseño):** conteos FitKidz 30/10 (dato operativo, dependencia abierta §5.4 de experience); `[[ROI]]` en el contrato (intencional: calculadora en la app, nota en el PDF); valor D=$24,000 del ROI vive en el widget (`roi/roi-calculator.js`), no como literal en los .md.

---

## B · Correlaciones: grafo de referencias cruzadas (enlaces internos)

Aristas **doc origen → doc destino (nº de enlaces)**, extraídas por código de los enlaces `#doc:sección`:

| Origen | Destinos (nº) |
|---|---|
| indice | contrato (13), technical (3), aportaciones (2), auditoria (2), deliverables (2), execution (2), experience (2), glosario (2), seguridad (2), site (2), demo (1), minuta (1), resumen (1), seguimiento (1) |
| technical | contrato (3), experience (2), site (2), aportaciones (1), auditoria (1), deliverables (1), execution (1), seguridad (1) |
| execution | aportaciones (3), contrato (2), technical (2), site (1) |
| aportaciones | contrato (1), execution (1), experience (1) |

**Documentos más referenciados (grado de entrada):** contrato **19** · aportaciones 6 · experience 5 · site 5 · technical 5 · execution 4 · auditoria 3 · deliverables 3 · seguridad 3 · glosario 2 · resumen/minuta/seguimiento/demo 1.

Lectura: el **contrato** es el centro de autoridad (todos apuntan a él); el **índice** es el hub de navegación (apunta a todos). No hay referencias a documentos inexistentes (verificado por el check "enlaces" del auditor).

---

## C · Correlaciones: trazabilidad de hechos canónicos

● = el hecho aparece en el documento · · = no aparece. Columnas: aport, audit, contr, deliv, execu, exper, glosa, indic, minut, resum, segui, segur, site, techn.

| Hecho canónico | aport | audit | contr | deliv | execu | exper | glosa | indic | minut | resum | segui | segur | site | techn |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Plazo 8 semanas | · | · | ● | ● | ● | · | · | ● | · | ● | ● | · | · | ● |
| 148 páginas | · | · | ● | ● | ● | · | · | ● | · | ● | ● | · | ● | ● |
| BES canal web | ● | · | ● | ● | ● | · | ● | · | · | ● | · | · | · | ● |
| 2 recordatorios WhatsApp | ● | · | ● | ● | ● | · | ● | · | · | ● | · | · | · | ● |
| Precio $81,000 | · | · | ● | · | · | · | · | · | · | · | ● | · | · | · |
| Iguala A $35,000 | · | · | ● | ● | · | · | · | · | · | · | ● | · | · | · |
| Stand-by $350 | · | ● | ● | · | ● | · | · | · | · | · | ● | · | · | · |
| Bolsa 8 horas | · | · | ● | ● | ● | · | · | ● | · | · | ● | · | · | ● |
| Schema (HealthClub…) | · | · | ● | · | · | · | · | · | · | · | · | · | · | ● |
| 136 enlaces rotos | · | · | ● | · | ● | · | · | · | · | ● | ● | · | · | ● |
| Cobertura 31.1% | · | ● | ● | · | · | · | · | · | · | ● | · | · | · | ● |
| TTL 24 h | · | · | ● | · | ● | · | · | · | · | · | ● | · | · | · |
| Node.js 20.9 | · | · | · | · | ● | · | · | · | · | · | · | · | · | ● |
| Estabilización 2-4 sem | · | · | ● | ● | ● | · | · | · | · | ● | · | · | · | ● |
| SLA APIs <500/<800 | · | · | ● | · | ● | · | ● | · | ● | · | ● | · | · | ● |
| Latencia BES <900 | · | · | · | · | · | · | ● | · | · | ● | ● | · | · | ● |

Cada hecho aparece de forma **consistente** donde corresponde (verificado: el check "fuente-verdad" del auditor no detecta contradicciones). La columna por documento confirma que no hay un hecho canónico contradicho en ningún lado.

---

## Cómo se mantiene esta matriz
- **Referencias cruzadas (B):** el auditor (`tools/audit-docs.js`, check "enlaces") falla si algún enlace `#doc:sección` apunta a un anchor inexistente.
- **Hechos canónicos (C):** el check "fuente-verdad" marca contradicciones contra la lista canónica; la regeneración de esta tabla es `grep` determinista.
- **Reconciliación semántica:** ver `tools/reconciliacion-2026-06-24.md` (inventario de contradicciones con evidencia).
