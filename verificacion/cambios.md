# Resumen de las correcciones hechas

Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. Es el registro de **toda**
diferencia entre cada documento original (commit `90a1ede`, 28 de agosto de 2026) y su versión `-MOD`,
línea por línea.

Es lo que se le entrega al cuaderno 3 junto con los pares de documentos: NotebookLM compara cada
par contra este resumen y dice si hubo errores u omisiones, o cambios que no estaban autorizados.
Una edición que no aparezca aquí no ocurrió; una que aparezca y no corresponda a un hallazgo
cerrado es una edición no autorizada.

**1 de 31 documentos corregidos**, con 12 cambios en total.

## experience → experience-MOD — 12 cambios

**Original, línea 90 · MOD, línea 90**

```diff
- 7. **`briefing`** — Fase terminal. Muestra dos páginas separadas visualmente: la página 1 es la confirmación de la cita (pensada para que el prospecto tome una captura de pantalla y la recuerde), la página 2 es el brief del asesor (pensado para que el asesor de ventas de Sports World lo lea antes de la visita). El prospecto puede reiniciar el cuestionario o regresar a `schedule` para modificar la cita.
+ 7. **`briefing`** — Fase terminal. **El prospecto ve una sola página: la confirmación de su cita**, pensada para que tome una captura de pantalla y la recuerde. El brief del asesor **no se le muestra**: se genera en el servidor y se envía por correo al club, para que el asesor lo lea antes de la visita. Son dos destinatarios distintos y dos entregas distintas. El prospecto puede reiniciar el cuestionario o regresar a `schedule` para modificar la cita.
```

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

**Original, línea 561 · MOD, línea 563**

```diff
- **Aviso de privacidad en la pantalla:** "Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros." Este texto no es legalmente vinculante por sí mismo —el aviso de privacidad integral se referencia en otra parte del sitio— pero es el primer momento de consentimiento del prospecto.
+ **Aviso de privacidad en la pantalla:** "Tus datos se usan únicamente para coordinar tu visita guiada. Los tratan Sports World y sus proveedores tecnológicos, que no pueden usarlos para ningún otro fin. Consulta el aviso de privacidad integral." El enlace lleva al aviso integral de Sports World.
```

**Original, línea 563 · MOD, línea 565**

```diff
+ La frase anterior —"No los compartimos con terceros"— **se retira por engañosa**. Los datos sí se remiten a encargados del tratamiento: el proveedor del modelo de lenguaje que redacta la experiencia y el brief, el proveedor de voz, la API de WhatsApp Business y el CRM de Sports World. Remitir datos a un encargado no es una transferencia en el sentido de la LFPDPPP, y por eso es lícito sin consentimiento adicional; pero decirle al prospecto que no se comparten con nadie es afirmar algo que no ocurre. El texto corregido nombra la figura sin tecnicismos y remite al aviso integral, que es donde el encargado se identifica.
+ 
+ Este texto no es legalmente vinculante por sí mismo —el aviso integral se referencia en otra parte del sitio— pero es el primer momento de consentimiento del prospecto, y por eso no puede decir menos de lo que es cierto.
+ 
```

**Original, línea 588 · MOD, línea 594**

```diff
- **División de página del brief del asesor:**
- - **Página 1:** banner de confirmación para el prospecto, encabezado del brief (nombre completo + nivel + chips + fecha), §1 Perfil del lead (8 campos), §2 Logística y contacto (club + ubicación + acompañantes + teléfono + email).
+ **División de página del brief del asesor.** El brief es un documento **interno**: se envía por correo al club y **no se renderiza en la sesión del prospecto** en ningún momento. Su banner de confirmación es para el asesor, no para el cliente —el cliente ya vio la suya en la pantalla de resultado—.
+ - **Página 1:** encabezado del brief (nombre completo + nivel + chips + fecha), §1 Perfil del lead (8 campos), §2 Logística y contacto (club + ubicación + acompañantes + teléfono + email).
```

**Original, línea 592 · MOD, línea 598**

```diff
+ El pie **USO INTERNO** sólo es cierto si el documento nunca llega al prospecto. Mostrarlo en su pantalla —como hacía la versión anterior de este documento— le entregaba el guion de cierre, las prioridades de venta y las banderas que el asesor usa para conducir la conversación.
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
