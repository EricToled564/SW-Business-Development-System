# Resumen de las correcciones hechas

Archivo **generado** por `resultados/ux-v1/tools/build-fuentes.js`. Es el registro de **toda**
diferencia entre cada documento original (commit `90a1ede`, 28 de agosto de 2026) y su versión `-MOD`,
línea por línea.

Es lo que se le entrega al cuaderno 3 junto con los pares de documentos: NotebookLM compara cada
par contra este resumen y dice si hubo errores u omisiones, o cambios que no estaban autorizados.
Una edición que no aparezca aquí no ocurrió; una que aparezca y no corresponda a un hallazgo
cerrado es una edición no autorizada.

**1 de 38 documentos corregidos**, con 10 cambios en total.

## proceso-mpc-01 → proceso-mpc-01-MOD — 10 cambios

**Original, línea 240 · MOD, línea 240**

```diff
-       <tr><td class="c">SOP/SW/0102</td><td><strong>Captación por el sitio web</strong></td><td>Visita solicitada, brief del asesor y asesor designado</td><td><span class="est pe">Por elaborar</span></td></tr>
-       <tr><td class="c">SOP/SW/0103</td><td><strong>Captación en consola</strong><br><span class="fine">Club y teléfono</span></td><td>Visita solicitada, brief del asesor y asesor designado</td><td><span class="est pe">Por elaborar</span></td></tr>
-       <tr><td class="c">SOP/SW/0201</td><td><strong>La Experiencia Guiada de Sports World</strong></td><td>Propuesta presentada y decisión del prospecto registrada</td><td><span class="est pe">Por elaborar</span></td></tr>
-       <tr><td class="c">SOP/SW/0301</td><td><strong>Contratación y alta de la membresía</strong></td><td>Membresía contratada, socio dado de alta y expediente completo</td><td><span class="est pe">Por elaborar</span></td></tr>
+       <tr><td class="c">SOP/SW/0102</td><td><strong>Captación por el sitio web</strong></td><td>Visita solicitada, brief del asesor y asesor designado</td><td><span class="est ok">Vigente</span></td></tr>
+       <tr><td class="c">SOP/SW/0103</td><td><strong>Captación en consola</strong><br><span class="fine">Club y teléfono</span></td><td>Visita solicitada, brief del asesor y asesor designado</td><td><span class="est ok">Vigente</span></td></tr>
+       <tr><td class="c">SOP/SW/0201</td><td><strong>La Experiencia Guiada de Sports World</strong></td><td>Propuesta presentada y decisión del prospecto registrada</td><td><span class="est ok">Vigente</span></td></tr>
+       <tr><td class="c">SOP/SW/0301</td><td><strong>Contratación y alta de la membresía</strong></td><td>Membresía contratada, socio dado de alta y expediente completo</td><td><span class="est ok">Vigente</span></td></tr>
```

**Original, línea 600 · MOD, línea 600**

```diff
+   <!-- ═══════ 4 bis ═══════ -->
+   <h2 class="s"><span class="n">4 bis</span>Publicación y vigencia de los documentos</h2>
+   <p class="intro">
+     Un documento del proceso puede estar en tres estados, y sólo uno de ellos obliga.
+   </p>
+   <div class="tw"><table>
+     <thead><tr><th style="width:150px">Estado</th><th>Qué significa</th><th style="width:230px">Quién lo ve</th></tr></thead>
+     <tbody>
+       <tr><td><strong>Borrador</strong></td><td>Se está escribiendo o revisando. No obliga a nadie y no se opera con él.</td><td>Sólo quien lo redacta y quien lo revisa.</td></tr>
+       <tr><td><strong>Aprobado, sin vigencia</strong></td><td>Su contenido está cerrado, pero su fecha de entrada en vigor no ha llegado. No obliga todavía.</td><td>Se publica con la fecha visible en la cabecera, y con la leyenda de que aún no rige.</td></tr>
+       <tr><td><strong>Vigente</strong></td><td>Rige la operación desde su fecha de entrada en vigor.</td><td>Publicado. Es el único estado con el que se opera.</td></tr>
+     </tbody>
+   </table></div>
+   <p class="intro">
+     <strong>Un documento no se publica como vigente antes de su fecha de entrada en vigor.</strong> Publicarlo
+     antes obliga a quien lo lee a adivinar si ya aplica, y en un proceso de 49 clubes esa duda se resuelve de 49
+     maneras distintas.
+   </p>
+   <p class="intro">
+     <strong>Un documento con bloques «por definir» puede estar vigente, pero cada bloque abierto tiene que nombrar
+     qué detiene.</strong> No se publica una instrucción de trabajo cuyos huecos el asesor tenga que rellenar con su
+     criterio: o el paso está definido, o está explícitamente detenido y se dice quién lo va a resolver. Los
+     instrumentos pendientes de emisión están en §6.1 bis con esa lectura.
+   </p>
+   <p class="intro">
+     <strong>Una sola versión rige a la vez.</strong> Las anteriores se conservan como antecedente, se marcan como
+     superadas y no se publican junto a la vigente en un lugar donde puedan confundirse con ella. Cuando un
+     documento contractual esté en revisión, la versión firmada anterior sigue siendo la que obliga hasta que la
+     nueva entre en vigor, y así se dice en su cabecera.
+   </p>
+ 
+   <!-- ═══════ 5 bis ═══════ -->
+   <h2 class="s"><span class="n">5 bis</span>Qué documento manda sobre qué</h2>
+   <p class="intro">
+     Varias piezas del proyecto se declaran <em>fundacionales</em>, <em>autoritativas</em> o <em>canónicas</em>. Esa
+     palabra sólo sirve si cada materia tiene <strong>un solo</strong> dueño; si dos documentos se declaran rectores
+     sobre lo mismo, la declaración no resuelve nada y el lector queda peor que sin ella. Esta tabla asigna cada
+     materia a un documento, y ese documento es el único que puede cambiarla.
+   </p>
+   <div class="tw"><table>
+     <thead><tr><th style="width:250px">Materia</th><th style="width:190px">Documento que manda</th><th>Los demás</th></tr></thead>
+     <tbody>
+       <tr><td><strong>El proceso comercial y sus procedimientos</strong><br><span class="fine">Pasos, responsables, instrumentos, estados</span></td><td>MPC/SW/01</td><td>Los SOP desarrollan; no crean pasos ni instrumentos por su cuenta.</td></tr>
+       <tr><td><strong>El cuestionario CEI-01</strong><br><span class="fine">Reactivos, orden, cardinalidad, versión</span></td><td>MPC/SW/01 §6.1</td><td>La arquitectura de experiencia y el Manual de Ventas lo <em>aplican</em> y lo citan por versión; no declaran un número propio de preguntas.</td></tr>
+       <tr><td><strong>La experiencia del prospecto en el sitio</strong><br><span class="fine">Pantallas, fases, reglas de resolución</span></td><td>Arquitectura de la Experiencia</td><td>El MPC define qué produce; no cómo se ve.</td></tr>
+       <tr><td><strong>El funnel y su medición</strong><br><span class="fine">Etapas, llaves de conciliación, indicadores</span></td><td>Mapa del Funnel</td><td>Ningún documento define etapas propias, ni el BDS ni la Academia.</td></tr>
+       <tr><td><strong>La tecnología y las integraciones</strong></td><td>Estrategia Técnica</td><td>Integración de Datos especifica los contratos de datos; no la arquitectura.</td></tr>
+       <tr><td><strong>Los términos del proyecto</strong></td><td>Glosario</td><td>Ningún documento redefine un término del glosario.</td></tr>
+       <tr><td><strong>Las obligaciones entre las partes</strong></td><td>Contrato y sus Anexos</td><td>Ningún documento operativo crea, amplía ni reduce una obligación contractual.</td></tr>
+     </tbody>
+   </table></div>
+   <p class="intro">
+     <strong>Regla de conflicto.</strong> Si un documento contradice al que manda sobre esa materia, gana el que
+     manda y el otro se corrige. Un documento no adquiere autoridad por declararse fundacional.
+   </p>
+ 
```

**Original, línea 604 · MOD, línea 660**

```diff
-     Once documentos atraviesan el proceso. Este apartado establece el contenido y la responsabilidad de cada uno; los procedimientos los citan por clave. Los tres primeros son los instrumentos del sistema; el resto son insumos o registros.
+     <strong>Doce documentos</strong> atraviesan el proceso: tres instrumentos del sistema (§6.1), cinco insumos
+     (§6.2) y cuatro registros (§6.3). Este apartado establece el contenido y la responsabilidad de cada uno; los
+     procedimientos los citan por clave.
```

**Original, línea 611 · MOD, línea 669**

```diff
-       <tr><td class="c">CEI-01</td><td><strong>Cuestionario de Experiencia Ideal</strong></td><td><strong>19 reactivos —16 base y 3 condicionales—, un minuto de participación.</strong> Idéntico en todos los canales, sin variantes por plaza ni por club. Identidad y trato · objetivo emocional · objetivo funcional · ritmo y modalidad · preferencias de entrenamiento · disponibilidad · nivel e historial · acompañamiento · interés en programas familiares · ancla geográfica</td><td>Dirección Comercial<br><span class="fine">Anexo A</span></td></tr>
+       <tr><td class="c">CEI-01</td><td><strong>Cuestionario de Experiencia Ideal</strong><br><span class="fine">Versión vigente: CEI-01 v1.0</span></td><td><strong>19 reactivos —16 base y 3 condicionales—, un minuto de participación.</strong> Ésta es la cardinalidad única del instrumento: ningún documento ni canal declara un número distinto, y una variante con otro número de reactivos no es «una versión corta» sino otro instrumento, que necesita su propia clave. Idéntico en todos los canales, sin variantes por plaza ni por club. Identidad y trato · objetivo emocional · objetivo funcional · ritmo y modalidad · preferencias de entrenamiento · disponibilidad · nivel e historial · acompañamiento · interés en programas familiares · ancla geográfica</td><td>Dirección Comercial<br><span class="fine">Anexo A</span></td></tr>
```

**Original, línea 613 · MOD, línea 671**

```diff
-       <tr><td class="c">BA-01</td><td><strong>Brief del asesor</strong><br><span class="fine">Uso interno</span></td><td>Perfil del prospecto · logística y contacto · qué confirmar antes de proponer · ruta recomendada del recorrido en cuatro pasos · propuesta principal y complemento · tres prioridades de cierre · notas y señales de atención · espacio de registro del asesor</td><td>Dirección Comercial<br><span class="fine">Anexo B</span></td></tr>
+       <tr><td class="c">BA-01</td><td><strong>Brief del asesor</strong><br><span class="fine">Uso interno · Versión vigente: BA-01 v1.0</span></td><td><strong>Estructura canónica, en este orden y sin secciones opcionales:</strong> §1 Perfil del prospecto · §2 Logística y contacto · §3 Qué confirmar antes de proponer · §4 Ruta recomendada del recorrido, en cuatro pasos · §5 Propuesta principal y complemento · §6 Tres prioridades de cierre · §7 Notas y señales de atención · §8 Registro del asesor. Todo brief lleva las ocho secciones, en ese orden, cualquiera que sea el canal que aplicó el cuestionario; una sección sin contenido se imprime vacía y no se omite, para que el asesor sepa que no hay dato y no que se perdió. <strong>Es de uso interno y no se le muestra al prospecto en ningún canal.</strong></td><td>Dirección Comercial<br><span class="fine">Anexo B</span></td></tr>
```

**Original, línea 617 · MOD, línea 675**

```diff
+   <h3 class="ss">6.1 bis · Instrumentos pendientes de emisión</h3>
+   <p class="intro">
+     Los procedimientos exigen tres instrumentos que <strong>todavía no existen como archivo controlado</strong>.
+     Figuran aquí, con clave, propietario y efecto, y no en una nota al margen: un instrumento que un procedimiento
+     exige para operar es parte del sistema documental aunque falte, y su ausencia tiene que ser visible en el
+     mismo lugar donde se buscan los demás.
+   </p>
+   <div class="tw"><table>
+     <thead><tr><th style="width:76px">Clave</th><th style="width:172px">Documento</th><th>Qué detiene mientras no exista</th><th style="width:128px">Propietario</th></tr></thead>
+     <tbody>
+       <tr><td class="c">AU-01</td><td><strong>Autorización de tratamiento de datos de salud</strong><br><span class="fine">Estado: por emitir</span></td><td>Sin ella no se aplica el cuestionario de salud ni se corre la matriz de contraindicaciones en la visita (SOP/SW/0201). El paso queda detenido por diseño, no por omisión.</td><td>Asuntos Legales</td></tr>
+       <tr><td class="c">CR-01</td><td><strong>Constancia de autorización de referido</strong><br><span class="fine">Estado: por emitir</span></td><td>Sin ella no se realiza ninguna llamada saliente a un prospecto referido (SOP/SW/0103, paso 5).</td><td>Asuntos Legales</td></tr>
+       <tr><td class="c">GT-01</td><td><strong>Guion del aviso leído</strong><br><span class="fine">Atención telefónica · Estado: por emitir</span></td><td>Sin él la atención telefónica no puede desplegar el aviso antes de la primera pregunta, y no se recaba dato alguno por ese canal.</td><td>Asuntos Legales</td></tr>
+     </tbody>
+   </table></div>
+   <p class="intro">
+     <strong>Un cuarto punto no es un instrumento sino una decisión pendiente:</strong> el segundo cruce contra la
+     información de salud, posterior a la valoración física, no tiene dueño, documento ni destino definidos
+     (SOP/SW/0201). Mientras no se determinen, ese paso opera como indicador y no produce registro.
+   </p>
+ 
```

**Original, línea 763 · MOD, línea 842**

```diff
-     Rige la <strong>Ley Federal de Protección de Datos Personales en Posesión de Sujetos Obligados</strong>
-     publicada en el Diario Oficial de la Federación el <strong>20 de marzo de 2025</strong>, vigente desde el día
-     siguiente, que abrogó la ley de 2010. La autoridad en la materia es la <strong>Secretaría Anticorrupción y
-     Buen Gobierno</strong>. Toda referencia de este manual a artículos corresponde a ese ordenamiento.
+     Rige la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>, su
+     Reglamento y los Lineamientos del Aviso de Privacidad. Sports World es una sociedad privada y trata los datos
+     de sus prospectos y socios como <strong>responsable</strong> en términos de esa ley; toda referencia de este
+     manual a artículos corresponde a ese ordenamiento.
```

**Original, línea 768 · MOD, línea 847**

```diff
+   <p class="intro">
+     <strong>No rige la Ley Federal de Protección de Datos Personales en Posesión de Sujetos Obligados</strong>,
+     publicada el 20 de marzo de 2025. Esa ley aplica a los sujetos obligados —autoridades, partidos, sindicatos y
+     fideicomisos públicos—, y Sports World no lo es. Citarla como título de tratamiento atribuía a la operación un
+     régimen y una autoridad que no le corresponden.
+   </p>
```

**Original, línea 888 · MOD, línea 973**

```diff
-     Cinco procedimientos cubren el proceso de punta a punta. Cada uno es autónomo: quien opera un canal no
-     necesita leer los otros. Este apartado establece qué resuelve cada uno, dónde empieza, dónde termina y con
-     qué se conecta.
+     <strong>Cinco procedimientos vigentes</strong> cubren el proceso de punta a punta: tres de captación
+     —SOP/SW/0101, 0102 y 0103—, la Experiencia Guiada —SOP/SW/0201— y la contratación —SOP/SW/0301—. Cada uno es
+     autónomo: quien opera un canal no necesita leer los otros. Este apartado establece qué resuelve cada uno,
+     dónde empieza, dónde termina y con qué se conecta.
```

**Original, línea 892 · MOD, línea 978**

```diff
+   <p class="intro">
+     El registro maestro (§1.2) enumera además <strong>dos claves reservadas y todavía no vigentes</strong>
+     —SOP/SW/0104, referido, y SOP/SW/0105, convenio corporativo—. No son procedimientos del proceso mientras no
+     se resuelva si constituyen procedimientos propios o si ingresan por consola con una marca de origen distinta;
+     hasta entonces, referido y convenio operan bajo SOP/SW/0103. Siete claves y cinco procedimientos no son una
+     contradicción sólo si se dice cuáles rigen: son las cinco vigentes.
+   </p>
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
- `experience-MOD`
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
- `proceso-mv-01-MOD`
- `proceso-sop-0101-MOD`
- `proceso-sop-0102-MOD`
- `proceso-sop-0103-MOD`
- `proceso-sop-0201-MOD`
- `proceso-sop-0301-MOD`
