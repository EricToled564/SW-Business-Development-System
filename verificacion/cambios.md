# Resumen de las correcciones hechas

Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. Es el registro de **toda**
diferencia entre cada documento original (commit `90a1ede`, 28 de agosto de 2026) y su versión `-MOD`,
línea por línea.

Es lo que se le entrega al cuaderno 3 junto con los pares de documentos: NotebookLM compara cada
par contra este resumen y dice si hubo errores u omisiones, o cambios que no estaban autorizados.
Una edición que no aparezca aquí no ocurrió; una que aparezca y no corresponda a un hallazgo
cerrado es una edición no autorizada.

**1 de 31 documentos corregidos**, con 7 cambios en total.

## experience → experience-MOD — 7 cambios

**Original, línea 139 · MOD, línea 139**

```diff
- | Q2  | Género              | single-select   | Concordancia gramatical de todo el copy con género (opciones de Q3, opciones de Q13, tarjetas de resumen). También habilita Q12b. |
+ | Q2  | Género              | single-select   | Concordancia gramatical de todo el copy con género (opciones de Q3, opciones de Q13, tarjetas de resumen). |
```

**Original, línea 141 · MOD, línea 141**

```diff
- | Q4  | Objetivos           | multi-select (máx 2) | Selecciona el subgrupo del Bloque 01, el subgrupo del Bloque 02, los pesos de ranking de clases del Bloque 03 y el arco narrativo de la experiencia ideal. La primera selección (`Q4[0]`) es el *objetivo principal* y dirige todas las resoluciones de elección única. La segunda selección es un *objetivo secundario* usado solo para diversificar el ranking de clases. También habilita Q17, Q18, Q19. |
+ | Q4  | Objetivos           | multi-select (máx 2) | Selecciona el subgrupo del Bloque 01, el subgrupo del Bloque 02, los pesos de ranking de clases del Bloque 03 y el arco narrativo de la experiencia ideal. La primera selección (`Q4[0]`) es el *objetivo principal* y dirige todas las resoluciones de elección única. La segunda selección es un *objetivo secundario* usado solo para diversificar el ranking de clases. |
```

**Original, línea 148 · MOD, línea 148**

```diff
- | Q12 | Condiciones médicas | multi-select    | Filtra de forma estricta el catálogo de clases mediante la matriz de contraindicaciones. (Ver §4.8.)                                          |
+ | Q12 | Programas de interés | multi-select   | **Preferencia, no condición de salud.** Pregunta qué tipos de programa le interesa que su experiencia incluya —bajo impacto, prenatal o posparto, acompañamiento nutricional, movilidad guiada—. Pondera el ranking de clases y se lleva al brief como interés declarado. **No filtra el catálogo ni activa ninguna matriz clínica** (ver §4.8). |
```

**Original, línea 154 · MOD, línea 154**

```diff
- **Preguntas condicionales (6)** — se preguntan solo si una respuesta específica aguas arriba las dispara:
+ **Preguntas condicionales (2)** — se preguntan solo si una respuesta específica aguas arriba las dispara:
```

**Original, línea 159 · MOD, línea 159**

```diff
- | Q12b | `Q2 !== "Hombre"` (es decir, "Mujer" o "Prefiero no mencionarlo")                             | Estado de embarazo y posparto. Filtra de forma estricta clases con impacto, trabajo abdominal o posicionamiento supino. Se pregunta a todos excepto a quienes seleccionaron "Hombre", de modo que una persona embarazada o en posparto que prefirió no declarar su género igual es evaluada; para "Prefiero no mencionarlo" la pregunta se muestra con un encuadre neutro (p. ej., "¿Aplica para ti embarazo o posparto reciente?"). |
```

**Original, línea 161 · MOD, línea 160**

```diff
- | Q17  | `Q4 includes "Bajar de peso"`                                                                 | Tratamientos activos de pérdida de peso (GLP-1, cirugía bariátrica, acompañamiento nutricional, otro, ninguno). Determina la regla de prioridad GLP-1, el filtro estricto bariátrico y el mensaje abierto de revisión por el asesor. |
- | Q18  | `Q4 includes "Bajar de peso"`                                                                 | Datos físicos actuales (peso, estatura, cintura). Capturados para el brief del asesor; no usados por el resolver. |
- | Q19  | `Q4 includes "Bajar de peso"`                                                                 | Meta de cambio de peso (rango, en opciones de selección única). Capturada para el brief del asesor; no usada por el resolver. |
```

**Original, línea 165 · MOD, línea 161**

```diff
+ **Lo que el cuestionario digital no pregunta, y por qué.** No hay preguntas de condición médica, embarazo, posparto, tratamiento activo, peso, estatura ni cintura. No es una omisión: el artículo 2, fracción VI de la LFPDPPP clasifica el estado de salud presente o futuro como **dato sensible**, y el artículo 8 exige para él **consentimiento expreso y por escrito**. Ese consentimiento no puede obtenerse con la calidad que la ley exige en una conversación de un minuto, así que la regla del Proceso Comercial —**[MPC/SW/01 §8.4](#mpc-01)**— es que por medios electrónicos no se recaba información de salud, en ninguno de los cuatro canales.
+ 
+ Lo que sí pregunta Q12 son **intereses de programa**: si a la persona le interesa que su experiencia incluya trabajo de bajo impacto, programas prenatales o de posparto, acompañamiento nutricional o movilidad guiada. Un interés declarado no es un diagnóstico ni un estado de salud, y por eso puede recabarse con consentimiento tácito, con el aviso a la vista antes del primer reactivo.
+ 
+ La información de salud se recaba **en persona**, en la visita guiada, con la autorización **AU-01** firmada. Es ahí donde corre el cuestionario de salud y la matriz de contraindicaciones (**[SOP/SW/0201](#sop-0201)**).
+ 
```

## Documentos todavía sin corregir

- `academia-anexo-MOD`
- `academia-contenido-MOD`
- `academia-fases-MOD`
- `academia-medicion-MOD`
- `academia-produccion-MOD`
- `academia-resumen-MOD`
- `academia-tecnica-MOD`
- `aportaciones-MOD`
- `auditoria-MOD`
- `bds-anexo-MOD`
- `bds-canales-MOD`
- `bds-flujo-MOD`
- `bds-medicion-MOD`
- `bds-resumen-MOD`
- `bds-tecnica-MOD`
- `contrato-MOD`
- `entrevistas-campo-MOD`
- `execution-MOD`
- `funnel-MOD`
- `gastos-operativos-MOD`
- `glosario-MOD`
- `indice-MOD`
- `integracion-MOD`
- `minuta-2026-06-22-MOD`
- `resumen-MOD`
- `roi-MOD`
- `seguimiento-2026-06-22-MOD`
- `seguridad-MOD`
- `technical-MOD`
- `workshop-discovery-MOD`
