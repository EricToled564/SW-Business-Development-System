# Catálogo exhaustivo de cambios — sesión 2026-06-24

Inventario **atómico** (un cambio = un ítem), organizado por documento. Reemplaza la lista agrupada de 10 tareas. Cada ítem es verificable contra el commit indicado. Estado global: **auditoría 0 errores / 0 avisos**.

## webapp/docs/contrato.es.md
1. Anexo Uno C.6 — TTL de cutover reconciliado de "5 min ≥48 h antes" a **5 min ≥24 h antes** (M3). · `d34a278`/`f78f8da`
2. Anexo Dos I.2 — schema ampliado a **HealthClub, LocalBusiness, Course, FAQPage, BreadcrumbList** (M2). · `f78f8da`
3. Cláusula Tercera — forma de pago: eliminado "(porcentajes propuesta a confirmar)"; queda **definitiva** 50% S4 + 50% final (M4). · `f78f8da`
4. Cláusula Primera (intro) — eliminada la **"Nota de redacción"** (método/fuente/cotización/corchetes) (PROH). · `58874ee`
5. Cláusula Segunda — iguala: **Opción A marcada ELEGIDA** ($35,000/$40,600 c/IVA); Opción B "no elegida"; texto de elección (DEC). · `58874ee`
6. Cláusula Primera III — "a elección entre A o B" → **"Opción A elegida por EL CLIENTE"** (DEC). · `58874ee`
7. Anexo Dos Sección III — apertura → "Opción A elegida" (DEC). · `58874ee`
8. Anexo Dos Sección IV — **cobertura unbranded movida a KPIs comprometidos**; eliminada la tabla de objetivos comerciales no garantizados (tráfico, David Lloyd); ROI marcado "ilustrativa; no garantía" (KPI). · `d34a278`
9. Cláusula Primera I — descargo acotado a **posiciones por keyword y volúmenes de tráfico** (no a "resultados de posicionamiento") para no contradecir el KPI de cobertura (KPI). · `d34a278`

## webapp/docs/technical.es.md (Estrategia Técnica)
10. Reescritura **V2.0**: stack con razones, 4 datos+2 escrituras, integraciones, SEO técnico, contenido visual, BES, **sección de migración**, calidad, entornos/seguridad (CAL). · `653b4e3`
11. §3 schema reconciliado a los 5 tipos (M2/CAL). · `653b4e3`
12. §5 BES — **alcance web-only** (eliminado "llamadas telefónicas / red telefónica"); capas ASR/LLM/TTS/orquestación en el sitio; recordatorios WhatsApp (T1). · `f78f8da`
13. §5 — nota **"BES no reside en el servidor; corre en ElevenLabs"** + costos a cargo del cliente (T2). · `3a99ec9`
14. §5 — distinción de **dos latencias** (BES <900 ms vs APIs <500/<800 ms) (B-lat). · `653b4e3`
15. Enlace a `execution §4.3` reapuntado a **Aportaciones · Titularidad Google** (T3). · `4eb6670`
16. Enlace a `execution §5` → **`execution §4`** (servidor) (T3). · `4eb6670`

## webapp/docs/execution.es.md (Plan de Ejecución)
17. **§4 (dependencias de SW) eliminada** y movida a Aportaciones; servidor renumerado a §4 (T3/EST). · `4eb6670`
18. Reescritura **V2.0** de clase mundial: RACI, criterios de salida por semana, hitos/aprobaciones (I.4), KPIs, **registro de riesgos**, gobierno/control de cambios (CAL). · `4eb6670`
19. BES corregido a **web-only** en intro, equipos, cronograma (T1). · `4eb6670`
20. Nota de servidor §4 — **BES no reside en el servidor (ElevenLabs)** (T2). · `3a99ec9`
21. §4 — "picos 5× por hora" → "picos 5×" (B4). · `f78f8da`
22. §6 — **cobertura unbranded añadida a KPIs comprometidos** (KPI). · `d34a278`

## webapp/docs/aportaciones.es.md
23. Integrado el **detalle de aportaciones de sistemas** (antes execution §4.1-4.7), sin duplicar (T3). · `4eb6670`
24. Subsección BES — **WhatsApp Business + escalación**, alcance web-only (T1/T3). · `4eb6670`
25. Enlaces internos a contrato/execution/experience (T3). · `4eb6670`

## webapp/docs/deliverables.es.md (Entregables)
26. §3 — soporte: **voz 24/7 + humano en horario hábil** (no "humano 24/7") (A3). · `f78f8da`
27. §3 — **IVA de igualas** ($40,600/$63,800) y **cupo Opción B** (M6). · `f78f8da`
28. §3/§6 — **Opción A elegida**; B "no elegida" (DEC). · `58874ee`
29. Item BES — **web-only** + recordatorios + reporte por correo (T1). · `f78f8da`
30. Referencia colgante "Plan de Ejecución §4.3" → **Aportaciones** (T3). · `f78f8da`

## webapp/docs/experience.es.md
31. §4.6 matriz de contraindicaciones — **51 clases grupales = 54 − 3 modalidades PT** (aclarado) (M1). · `f78f8da`
32. §2.2 — tipo de **Q19** corregido a "rango en opciones de selección única" (M7). · `f78f8da`

## webapp/docs/site.es.md (Mapa del Sitio)
33. Nivel 05 — aclaración **44 grupales + 3 PT = 47; con 7 premium = 54** (M1). · `f78f8da`

## webapp/docs/auditoria.es.md
34. Tabla §5 — **TOTAL recalculado desde las filas**: KWs 6,912→**6,900**, Vol 4,822,500→**5,819,760**; 31.1% preservado (A4). · `f78f8da`
35. Universo 6,912→**6,900** + nota "(suma de la columna KWs)" (A4). · `f78f8da`
36. Fila 16 cobertura — 2,148/6,912 → **2,148/6,900** (A4). · `f78f8da`

## webapp/docs/resumen.es.md
37. BES — **web-only** (eliminado "voz (llamada)") + recordatorios + reporte por correo (T1). · `f78f8da`
38. Tabla de clases — nomenclatura **"premium (Les Mills)"** (B1). · `f78f8da`
39. 6,912→**6,900** (×2: línea de auditoría y tabla de cobertura) (A4). · `f78f8da`

## webapp/docs/glosario.es.md
40. Definición de **BES** — alcance web-only + recordatorios (T1). · `f78f8da`
41. Nueva entrada **"latencia (conversacional vs SLA de API)"** (B8). · `f78f8da`
42. (Sesión previa) +13 términos técnicos (CFDI, CI/CD, color, ERP, HSTS, HTTP/HTTPS, ROI, SSL/TLS, UUID). · `83e81c5`

## webapp/docs/indice.es.md
43. Localizador — **enlaces directos doc+sección** (verificados) (T19). · `426a5f8`
44. Fila BES del localizador — **"web; voz/texto, recordatorios WhatsApp"** (T1). · `f78f8da`

## webapp/docs/seguimiento-2026-06-22.es.md
45. Línea 55 — eliminado lenguaje **"fuente de la verdad / cede en autoridad"**; queda "8 semanas y 148 páginas confirmados" (PROH/T16). · `58874ee`

## Espejos en inglés
46. **technical.en.md** — reescrito al estado V2.0 (BES web-only, no-servidor, migración, schema 5) (T18). · `58874ee`
47. **execution.en.md** — reescrito (sin §4, BES web-only/no-servidor, V2.0) + §6 cobertura unbranded (T18/KPI). · `58874ee`/`d34a278`
48. **deliverables.en.md** — reescrito (soporte voz 24/7+humano hábil, Opción A elegida, IVA, cupo B) (T18/DEC). · `58874ee`

## Tooling / app
49. **tools/audit-docs.js** — auditor por código (6 checks) + check **"enlaces"** + supresión inline + figuras canónicas (TOOL). · `83e81c5`/`426a5f8`/`f78f8da`
50. **app.js** — wire de docs + strip de comentarios HTML + **manejo de enlaces internos** (xref) + scroll/flash (TOOL/T19). · `6595dd2`/`83e81c5`/`426a5f8`
51. **styles.css** — estilo `.xref` + offset + resaltado (T19). · `426a5f8`
52. **kb/build_pdfkit.js** — PDF índice, strip comentarios, marcador APORTACIONES, enlaces internos como texto (TOOL). · varios
53. **.github/workflows/audit-docs.yml** — gate de CI de la auditoría (TOOL). · `83e81c5`
54. **tools/reconciliacion-2026-06-24.md** — inventario de contradicciones con evidencia (QA). · `653e015`
55. **tools/matriz-trazabilidad-2026-06-24.md** — tareas + correlaciones (QA). · `917b61c`
56. **PDFs (00–13)** — reconstruidos y sincronizados a webapp/kb en cada bloque (TOOL).

---

**Total: 56 cambios atómicos** en 14 documentos + 5 archivos de herramienta/app, en 9 commits de esta sesión. La trazabilidad por hecho y las correlaciones cruzadas están en `tools/matriz-trazabilidad-2026-06-24.md`; los hallazgos con evidencia en `tools/reconciliacion-2026-06-24.md`.
