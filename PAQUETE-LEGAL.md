# Paquete para Legal · Ajustes al Contrato, al Anexo Uno y al Anexo Dos

**Estado: aplicados al texto del Contrato.** El Contrato se encuentra en etapa de revisión, por lo que los ajustes se incorporaron directamente a `contrato.es.md` en el depósito. Este documento deja constancia de **qué cambió, dónde y por qué**, para la revisión de Legal y para la conversación con EL CLIENTE.

Son **nueve ajustes**: los siete derivados de la auditoría más uno detectado al someter el propio Contrato a las reglas de verificación automática. **El PDF que publica el depósito ya los refleja** (V4.3, agosto 2026); la versión anterior se conserva en `/versiones-del-contrato/oficiales/` como registro histórico.

Siete de los ocho **reducen, precisan o corrigen** lo que se le pide a Sports World. **Uno solo agrega un requerimiento verdaderamente nuevo** —el dato de cancelación—, y otro agrega dos campos a un dato ya pactado; ambos son indispensables para cerrar el funnel de resultados que el propio Contrato compromete. Ninguno modifica la contraprestación, los plazos ni los KPIs.

---

## 1 · Frecuencia de sincronización con el CRM

**Dónde:** Anexo Uno, nota de *Frecuencia de actualización*, y Cláusula Tercera.

**Dice hoy:** *"En tiempo real se consultan los precios y las clases por club (horarios y fechas). Una vez al día se sincronizan el estatus del club, los horarios de atención y las amenidades."*

**Debe decir:** todo el catálogo se sincroniza **una vez al día, con corte a las 06:00 (hora de la Ciudad de México)**. Lo registrado en el CRM hasta las 05:59 se publica ese mismo día a partir de las 06:00. Se conserva una **sincronización manual inmediata** para casos excepcionales, como el lanzamiento de una promoción.

**Por qué conviene a EL CLIENTE:** reduce la carga sobre el CRM de un flujo continuo a **una consulta programada al día**, y elimina la exigencia de latencia en tiempo real sobre los puntos de acceso de lectura. El SLA del API deja de ser crítico salvo en la creación del prospecto.

## 2 · Llave de conciliación del funnel

**Dónde:** Anexo Uno, nota de *Vía alternativa para el dato de membresías nuevas*.

**Dice hoy:** *"La conciliación se realiza por nombre y apellido, con el código postal como dato de verificación."*

**Debe decir:** la conciliación se realiza por **nombre, apellido, teléfono y club**; la vinculación de la cancelación con la membresía se realiza por **número de membresía**.

**Por qué:** el código postal no identifica de forma confiable a una persona —varias personas del mismo domicilio comparten CP— y no está disponible en todos los canales de captación. El teléfono sí, y en el canal de WhatsApp queda validado por el propio canal.

## 3 · Número de membresía y teléfono en el registro de membresía nueva

**Dónde:** Anexo Uno, catálogo de datos y nota de *Vía alternativa*.

**Debe agregarse:** el registro de membresía nueva —tanto por API como por la entrega periódica alternativa— debe incluir el **número de membresía** y el **teléfono** del nuevo socio.

**Por qué es indispensable:** sin el número de membresía, una cancelación no puede vincularse con el prospecto que la originó. Sin el teléfono, la compra no puede vincularse con el lead. **El Contrato ya compromete la etapa de "nueva membresía" del funnel (Anexo Dos, Sección IV); sin estos dos campos esa etapa no se puede medir.**

## 4 · Dato de cancelación de membresía

**Dónde:** Anexo Uno, catálogo de datos. **No existe hoy en ninguna forma.**

**Debe agregarse:** acceso al dato de **cancelación de membresía** —número de membresía, fecha de cancelación y, cuando el CRM lo registre, el motivo—, por API o por entrega periódica bajo el mismo régimen que las membresías nuevas.

**Por qué:** es el único requerimiento verdaderamente nuevo de este paquete, y habilita el **análisis de retención**: qué segmento cancela, por objetivo, club y canal de origen. Sin él, el sistema mide hasta la compra y queda ciego a lo que ocurre después.

## 5 · Etapas del funnel

**Dónde:** Anexo Dos, descripción del funnel de conversión y del tablero.

**Dice hoy:** cuatro etapas — *tráfico → visita guiada agendada → visita guiada proporcionada → nueva membresía*.

**Opción recomendada:** **conservar las cuatro etapas como compromiso contractual** y hacer constar que el tablero las presenta como titular, con etapas adicionales de medición operativa —clic al canal de WhatsApp, cuestionario iniciado, cuestionario completado y cancelación de membresía— que **no amplían el alcance ni los KPIs comprometidos**.

**Por qué:** no conviene convertir en obligación contractual etapas cuyo dato depende de accesos de terceros. Las cuatro comprometidas se mantienen; el resto es instrumentación.

## 6 · Especificación del servidor (Bloque F.6)

**Dónde:** Anexo Uno, Bloque F, punto F.6.

**Dice hoy:** *"Capacidad y ancho de banda razonables para el tráfico esperado del sitio."*

**Debe decir:** una remisión expresa a la especificación del **Plan de Ejecución §4**, que fija la configuración recomendada (8 vCPU, 16 GB de memoria, 80 GB de almacenamiento NVMe, 100 Mbps sostenidos, 1 TB de transferencia mensual y un ambiente de staging de 2 vCPU / 4 GB / 40 GB) y el **mínimo viable** de 4 vCPU y 8 GB sujeto a la pregeneración de imágenes en el proceso de construcción.

**Por qué:** *"razonable"* no es auditable ni aprovisionable — nadie puede comprar un servidor con esa instrucción, y ante una falla en un pico de campaña ninguna de las Partes tendría un criterio objetivo para determinar si la infraestructura era suficiente. La remisión mantiene el número en un solo lugar y evita duplicarlo en el Contrato.

## 7 · Nombre del documento de seguridad (referencia cruzada)

**Dónde:** Cláusula Décima Octava, apartado II (Minimización y no retención).

**Dice hoy:** *"...conforme a lo descrito en la sección* Seguridad del sitio *del proyecto."*

**Debe decir:** *"...conforme a lo descrito en la sección* Seguridad del sistema *del proyecto."*

**Por qué:** el documento se renombró a **Seguridad del sistema** porque su alcance dejó de ser el sitio y pasó a cubrir los cuatro canales de captación. La referencia del Contrato apunta a un nombre que ya no existe en el depósito. Es un ajuste de referencia cruzada, sin efecto sustantivo alguno sobre la obligación pactada.

---

## 8 · Punto de acceso de consulta de socios (Anexo Uno, D.1)

**Dónde:** Anexo Uno, Bloque D, punto D.1; y las menciones en A.1 y B.5.

**Decía:** *"Punto de acceso de consulta de miembro por teléfono o correo (devuelve datos básicos del socio…)."*

**Dice ahora:** D.1 queda como **exclusión expresa** —*"No se solicita. El proyecto no requiere un punto de acceso de consulta de socios"*— conservando la numeración para no romper las referencias cruzadas del Contrato y sus Anexos. Se retiró también la mención en A.1 (documentación del API) y B.5 (SLAs), y el SLA de D.5 pasó a referirse a D.2 y D.3.

**Por qué:** los datos de socios actuales no se leen en la operación de captación; "BES" atiende únicamente la entrada digital. El depósito ya lo declaraba así; el Contrato seguía pidiendo el acceso. **Reduce lo que se le exige a Sistemas de Sports World** sin afectar ninguna funcionalidad comprometida.

---

## 9 · Regla de enrutamiento en WhatsApp (Cláusula Cuarta)

**Dónde:** Cláusula Cuarta, incisos (iii) y (v).

**Decía:** *"«BES» sobre WhatsApp (solo texto) como respaldo automático 24/7, con escalación a operador humano"* y *"capa de enrutamiento en tiempo real (human-first → «BES» de respaldo → escalación)"*.

**Dice ahora:** *"«BES» sobre WhatsApp (solo texto) como atención inicial 24/7 de toda conversación entrante, con escalación a operador humano"* y *"capa de enrutamiento en tiempo real (atiende «BES» → escalación a operador humano a petición expresa del usuario o por política de escalamiento aprobada por EL CLIENTE → devolución de llamada agendada fuera del horario de operadores)"*.

**Por qué:** el Contrato describía la regla contraria a la que rige la operación. El procedimiento del canal (SOP/SW/0101) y el proceso maestro (MPC/SW/01) ya establecían que el asistente atiende la totalidad de las conversaciones entrantes y que *"la intervención de una persona es una escalación, no el punto de partida"*. La contradicción estaba documentada como hallazgo **A-016** de la auditoría, y alcanzaba a doce documentos del depósito, el Contrato entre ellos. Se corrigieron los doce y la invariante quedó sostenida por la regla **R22** de la verificación automática.

**Efecto:** ninguno sobre la contraprestación, los plazos ni los KPIs. **Reduce** la exigencia operativa sobre Sports World: no obliga a mantener operadores en línea para el primer contacto, porque el primer contacto lo cubre "BES" en todo horario.

---

## Resumen para la conversación con Legal

| # | Ajuste | Efecto para EL CLIENTE |
|---|---|---|
| 1 | Sincronización diaria con corte 06:00 | **Reduce** la exigencia sobre el CRM |
| 2 | Llave de conciliación por teléfono y club | Precisa, sin costo adicional |
| 3 | Número de membresía y teléfono en membresía nueva | Dos campos más en un dato ya pactado |
| 4 | Dato de cancelación | **Requerimiento nuevo** — habilita el análisis de retención |
| 5 | Etapas del funnel | Sin cambio al compromiso; se aclara el alcance |
| 6 | Especificación del servidor en F.6 | Convierte una frase inauditable en una cifra verificable |
| 7 | Nombre del documento de seguridad | Referencia cruzada; sin efecto sustantivo |
| 8 | Consulta de socios (D.1) como exclusión expresa | **Reduce** un acceso que Sistemas ya no debe preparar |
| 9 | Enrutamiento de WhatsApp: atiende «BES» primero | **Reduce** la exigencia de operadores en línea para el primer contacto |

Los nueve están **incorporados al texto** de `contrato.es.md` y se presentan como un **único bloque de revisión al Contrato, al Anexo Uno y al Anexo Dos**, sin efecto sobre la contraprestación, los plazos ni los KPIs comprometidos.

**Publicación.** El PDF del depósito (`06-contrato.es.pdf`) se regenera desde el markdown con el pipeline de casa y **ya refleja los ocho ajustes**: se publica como **V4.3, agosto de 2026, 39 páginas**. La copia anterior se conserva sin alteración en `/versiones-del-contrato/oficiales/contrato-v4.2-cliente.pdf` como registro histórico. Los dos addenda siguen el mismo régimen; el **Addendum del BDS** incorporó además un ajuste propio, descrito abajo.
