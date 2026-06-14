# Especificación UX — Experiencia Ideal · Sports World

| Campo | Valor |
| --- | --- |
| Producto | Sitio público sportsworld.com.mx + flujo de conversión «Experiencia Ideal» |
| Idioma del producto | Español de México (es-MX) |
| Alcance | 155 páginas en 12 tipos canónicos + el asistente conversacional BES (widget global) |
| Documentos del paquete | `diagrama-de-flujo.md` · `anexo-clinico.md` · `anexo-contenido-prompts.md` · `anexo-ingenieria-crm.md` · `DESIGN.md` |

> **Cómo leer este documento.** Las secciones siguen el orden estándar de una especificación UX: del porqué (negocio) al qué (arquitectura, flujos, pantallas) y al cómo se verifica (casos límite, accesibilidad, aceptación, métricas). Las referencias cruzadas usan el número de sección (§X.Y); no existe una numeración paralela de reglas. El copy de interfaz citado entre comillas es definitivo y está en es-MX. Este documento gobierna comportamiento, flujos, estados, arquitectura de información y estructura de contenido; cuando hay tensión con otro documento, prevalece el orden de precedencia del `README.md`.

## Índice

- **Resumen ejecutivo**
- **1. Racionalidad del diseño**
- **2. Personas y customer journey**
- **3. Arquitectura de información y SEO**
- **4. Flujos, estados y personalización**
- **5. Motor de resultado**
- **6. Especificación por pantalla y componente**
- **7. Casos límite y estados condicionales**
- **8. Sistema de diseño y redacción**
- **9. Accesibilidad (WCAG 2.2 AA)**
- **10. Privacidad y manejo de datos**
- **11. Criterios de aceptación**
- **12. Métricas y experimentación**
- **13. Handoff y sincronización**
- **Apéndice A — Glosario y referencia de códigos**
- **Apéndice B — Páginas fuera de alcance**
- **Apéndice C — Esquema JSON de la llamada única al modelo**
- **Apéndice D — Brief del Asesor**

---

## Resumen ejecutivo

Sports World es una cadena premium de **49 clubes en 13 estados** (32 en la Zona Metropolitana del Valle de México, 17 repartidos en 11 estados más). El sitio se reconstruye para convertir búsquedas de Google en visitas guiadas al club, con tres metas firmadas:

1. **Duplicar el tráfico orgánico**: de **80,000 a 160,000 visitas/mes en 3 meses**, mediante una arquitectura SEO de hubs temáticos y paginación.
2. **Duplicar (2x) los leads cualificados** que llegan al Asesor.
3. **Reducir el tiempo de primera respuesta** a **menos de 1 minuto, 24/7**, mediante el asistente conversacional BES.

**El sitio corrige tres problemas medibles** del sitio anterior:

| Problema | Solución |
| --- | --- |
| Aparece en menos del 1% de las búsquedas de «gimnasio para bajar de peso» | Hub `/bajar-de-peso/` con contenido de salud (YMYL) y firma médica visible |
| Queda fuera del top 100 para búsquedas como «yoga cerca de mí» | Una página dedicada por clase (51 clases para adultos) + hub FitKidz con 34 actividades infantiles |
| «Gimnasio cerca de mí» aterriza en el inicio, no en el club más cercano | Detección de ubicación y enrutamiento al club más cercano |

**Tres activos que ningún competidor reúne:** 49 clubes en 13 estados · catálogo de **51 clases para adultos + 34 actividades infantiles** · y el activo único: **cada clase clasificada por su contribución exacta a cada objetivo del usuario** (fichas del `anexo-clinico.md`, bajo validación médica).

**La tesis del proyecto:** conocer profundamente al usuario es lo que permite proponerle *la experiencia ideal*.

`CUESTIONARIO → CONOCIMIENTO → EXPERIENCIA IDEAL → LEAD CALIFICADO`

El prospecto llega por una de **cuatro puertas** —inicio, club, clase/amenidad, hub de objetivo— y todas conducen al mismo destino: **«Diseña tu experiencia»**, el cuestionario de **15 preguntas base + 6 condicionales** (Q1–Q19; 15 a 21 visibles según la ruta). Cada puerta carga información implícita y el sistema la usa para acortar el cuestionario (§4.4–4.5).

**El resultado es un documento editorial personalizado, no una lista de precios:** un hook que conecta con la motivación del usuario, tarjetas resumen, una tarjeta **Club Ideal** construida solo con datos verificables, y **tres bloques** —01 Fuerza · 02 Cardio · 03 Clases del catálogo real del club— donde las clases pasan por un **filtro duro de contraindicaciones** antes de cualquier puntuación. Honra la decisión del usuario: si cambia de club, recalcula; si cambia una clase, reordena; nunca bloquea, nunca insiste.

**El cierre de valor es el brief del Asesor** (Apéndice D): cada lead llega al club con cinco preguntas de validación, una ruta de visita de cuatro pasos, una propuesta, tres prioridades de cierre y un guion. El Asesor convierte **sin volver a preguntar nada** de lo que el usuario ya respondió: ese es el valor real para los 49 equipos de venta.

---

## 1. Racionalidad del diseño

El sitio existe para convertir búsquedas de Google en visitas guiadas al club. Esta sección documenta la cadena completa: la meta de negocio, quiénes son los actores, qué comportamiento medible se busca y por qué cada decisión de producto es la que es.

### 1.1 Cadena de razonamiento (Por qué → Quién → Qué → Cómo)

- **Por qué (meta).** Duplicar el tráfico orgánico de **80,000 a 160,000 visitas mensuales en 3 meses**, haciendo el sitio mucho más encontrable en Google mediante SEO aplicado a una nueva estructura de hubs y paginación. Meta secundaria: duplicar los leads cualificados. Meta terciaria: reducir el tiempo de respuesta con el asistente BES (atención inmediata 24/7).
- **Quién (actores).** Primarios: los dos arquetipos del estudio de usuarios (§2.1), **Family Wellbeing Manager** y **Urban Hybrid Executive**. Secundarios: el **Asesor** de ventas que recibe el brief y agenda la visita, y **BES**, que responde y coordina. Fuera de escena: los entrenadores que definen los ejercicios en la primera sesión y el equipo de SEO que gobierna los hubs.
- **Qué (comportamiento medible).** El visitante debe **encontrar** el sitio en Google → **completar** el cuestionario → **dejar** sus datos de contacto → **agendar** la visita guiada. Se mide con tráfico orgánico, tasa de finalización del cuestionario, leads cualificados y tiempo de primera respuesta.
- **Cómo (táctica).** Una arquitectura de **hubs SEO** indexables de alto volumen que alimentan el flujo **Experiencia Ideal**: un cuestionario guiado adaptativo que entrega una recomendación personalizada (Bloque 01 pesas · Bloque 02 cardio · Bloque 03 clases) + captura de contacto + brief para el Asesor.

### 1.2 Justificación de negocio

El motor de crecimiento es **SEO de estructura**, no publicidad pagada. El techo del sitio anterior estaba limitado por su arquitectura de información: pocas páginas indexables apuntando a búsquedas de alto volumen. La nueva estructura crea **hubs temáticos** (bajar de peso, masa muscular, salud cardiovascular, etc.) y **páginas paginadas** de clubes y clases, multiplicando la superficie indexable y la relevancia. Cada hub es a la vez una **puerta de entrada SEO** y el inicio del **embudo de conversión**. Así, el mismo cambio estructural sirve a las tres metas: más tráfico, más leads cualificados y respuesta más rápida.

#### Medidas de éxito

| Medida | Meta |
| --- | --- |
| Visibilidad orgánica en el clúster «bajar de peso» | Top 10 en las consultas objetivo a 90 días |
| Precisión del enrutamiento «gimnasio cerca de mí» | 100% de las sesiones geolocalizadas enrutadas al club abierto más cercano |
| Visibilidad orgánica de las páginas de clase | Top 50 para las 51 clases para adultos a 90 días |
| Core Web Vitals en móvil (p75) | LCP < 2.5 s · INP < 200 ms · CLS < 0.1 |
| Accesibilidad | WCAG 2.2 AA en todas las páginas |

### 1.3 Justificación de decisiones puntuales

| Decisión | Por qué esta y no otra |
| --- | --- |
| **Cuestionario único guiado** (adaptativo, 15–21 preguntas) en vez de un formulario corto | Es una herramienta interactiva de valor: el usuario entrega datos a cambio de una recomendación personalizada, lo que mitiga el rebote de los formularios largos. Riesgo: sigue siendo largo; se mide el abandono por pregunta (§12) y se evalúa el perfilado progresivo si supera el umbral. |
| **Rojo de marca `#E6282A`** reservado a la acción de conversión | Señala acción; nunca se usa en bloques de texto, para no diluir la jerarquía visual. |
| **Tres bloques de color** (azul/verde/gris) | Segmentan cognitivamente los tres componentes del entrenamiento y reducen la carga al separar «qué hago con pesas / cardio / clases». |
| **Captura de contacto después del resultado** | El usuario ya recibió valor (su recomendación); pedir los datos en ese momento maximiza la conversión y la calidad del lead. |
| **Lenguaje accesible, sin jerga** («crecimiento muscular», no «hipertrofia») | El público objetivo no es experto; la jerga aliena y reduce la conversión (ver `anexo-contenido-prompts.md`). |
| **Nombres de subgrupo orientados al objetivo** | El usuario se reconoce en su meta («Bajar de peso»), no en un término técnico de fisiología. |

### 1.4 Audiencia, marca e idioma

El sitio atiende a tres tipos de usuario, en orden de prioridad:

1. **Prospectos de membresía** que investigan un gimnasio, guiados por la intención y a menudo desde búsqueda externa.
2. **Miembros actuales** que realizan tareas de autoservicio (horarios, amenidades, preguntas a BES).
3. **Padres y tomadores de decisión de la familia** que investigan el programa infantil (FitKidz).

La marca del sitio es **fitness premium**. Tres implicaciones:

- Tipografía cuidada, espaciado generoso, fotografía editorial.
- Lenguaje directo y mesurado: sin entusiasmo forzado, sin signos de exclamación, sin mayúsculas de estilo marketing, sin titulares-anzuelo.
- El encuadre familiar aplica **únicamente** en las páginas de FitKidz, cuya submarca es **fitness familiar premium**. En todo lo demás el sitio le habla a un usuario a la vez, no a «la familia».

El sitio se entrega en español de México. Los nombres de botones y etiquetas de interfaz citados entre comillas son definitivos. Los códigos internos de sistema (Q1–Q19, identificadores de ciudad, banderas de bloque) nunca se traducen ni aparecen en el copy visible.

---

## 2. Personas y customer journey

Los arquetipos provienen del estudio de usuarios de Sports World. Aquí se expresan sobre la maquinaria real del sitio: las 155 páginas (§3) capturan sus búsquedas, «Diseña tu experiencia» (Q1–Q19) los convierte en lead cualificado y el brief del Asesor (Apéndice D) es lo que el negocio recibe a cambio.

### 2.1 Personas

**P1 — Family Wellbeing Manager · prioridad 1 · dueña del valor de vida (3x–4x la membresía individual).**
35–50 años · 1–2 hijos de 4 a 12 años. Lo que busca: *que el club le devuelva tiempo* —entrenar mientras los hijos están seguros en FitKidz, sin coordinar tres ubicaciones.

| Etapa | Qué hace | Qué hace el sistema |
| --- | --- | --- |
| **Busca** | «natación para niños», «gimnasio para niños cerca de mí» | Ruteo de búsqueda (§3.7): niños/familia → FitKidz; amenidad + ubicación → hub de amenidad; si la búsqueda trae ubicación, Q15/Q16 quedan inferidas (§4.5) |
| **Aterriza** | Revisa el hub FitKidz o la página del club | Aterrizar en FitKidz pre-llena Q14 = «Yo y mis hijos» (§4.4); aterrizar en una página de club omite Q15/Q16. La invitación «Diseña tu experiencia» espera sin bloquear la lectura |
| **Responde** | Q2 = Mujer → aparece Q12b (embarazo/posparto); Q4 típico = Bajar de peso o Salud cardiovascular; Q14b = Sí. Si marca Bajar de peso: Q17–Q19 + aviso de salud | El motor (§5) usa variantes acuáticas solo si el club tiene alberca (§5.4); en la ruta de peso, el aviso YMYL con firma médica se muestra **antes** del resultado |
| **Recibe** | Su Experiencia Ideal: bloque de pesas + bloque de cardio + clases del catálogo real de su club, ya filtradas por contraindicaciones | Tarjeta **Club Ideal** solo con datos verificables (§5.8); sección FitKidz en su estado correspondiente (§6.17) |
| **Decide** (1–3 semanas) | Vuelve al sitio a re-revisar y enseñárselo a su pareja | El menú cambia a «Volver a tu experiencia ideal» (§6.4); BES responde dudas 24/7 |
| **Visita** | Visita guiada con los hijos | El brief llega marcado con las banderas de familia e hijos; la ruta de visita incluye la logística de los niños y no vuelve a preguntar lo capturado |

**P2 — Urban Hybrid Executive · prioridad 2 · justifica el precio premium.**
28–45 años · profesional híbrido/remoto. Lo que busca: un **tercer espacio** para romper el día, entrenar y bañarse en condiciones premium.

| Etapa | Qué hace | Qué hace el sistema |
| --- | --- | --- |
| **Busca** | «gimnasio con vapor», «gimnasio cerca de mí», «body pump» | §3.7: amenidad + ubicación → hub de amenidad; «cerca de mí» → club más próximo; clase → página de esa clase. Buscar una amenidad no infiere preferencia de entrenamiento (§4.5) |
| **Aterriza** | Revisa el club: fotos reales, horarios, clases, reseñas | La página de club muestra el catálogo real; aterrizar ahí omite Q15/Q16 (§4.4) |
| **Responde** | Q4 = Aumentar masa muscular o Desempeño atlético; a veces Q13 = «Solo, a mi ritmo» | Q13 = Solo → Bloque 03 OFF y el menú renombra «Clases recomendadas» → «Tu rutina individual» (§6.14); Q10 levanta la bandera de «viene de otro gimnasio» |
| **Recibe** | Bloque 01 nombrado por su objetivo + cardio por intervalos, sin jerga | El argumento de infraestructura cita los 49 clubes y las amenidades premium del club resuelto; las clases respetan su horario (§5.3) |
| **Decide** (rápido) | Agenda en el momento | Fase de agenda con confirmación en tiempo real; BES confirma en menos de 1 minuto |
| **Visita** | Tour corto, enfocado | Brief con la bandera de «viene de otro gimnasio»; las prioridades de cierre apuntan a cerrar en la misma visita |

**P3 — Asesor (interno).** No diseña la experiencia: la consume. Recibe el brief (Apéndice D) y su métrica es convertir la visita **sin volver a preguntar ninguna de las 15–21 respuestas**. La consistencia entre los 49 clubes depende de que todos trabajen sobre el mismo brief.

**P4 — BES (asistente conversacional).** Widget global en las 155 páginas (§6.3). Absorbe lo que el sitio deliberadamente no publica como página (cancelaciones, congelamientos, soporte) y confirma citas. Es la palanca de la meta terciaria: primera respuesta en menos de 1 minuto, 24/7.

### 2.2 Customer journey — el embudo que conecta las tres metas

| Fase | Instrumento concreto | Meta que sirve |
| --- | --- | --- |
| **Descubrir** | Las 155 páginas indexables (§3) | 80,000 → 160,000 visitas/mes |
| **Cualificar** | «Diseña tu experiencia» (Q1–Q19) con pre-llenado por aterrizaje e inferencia de búsqueda (§4.4–4.5) | 2x leads cualificados: el lead llega con 15–21 variables, no con un nombre y un teléfono |
| **Convertir** | Resultado (la recomendación es el «pago» por los datos) → captura de contacto → agenda en tiempo real | 2x leads cualificados (calidad y volumen) |
| **Cerrar** | Brief del Asesor (Apéndice D) + BES 24/7 | Primera respuesta en menos de 1 minuto |

Las fases técnicas exactas (welcome · questionnaire · loading · result · contact_capture · schedule · briefing · error) y todas las bifurcaciones están en §4 y §6, y se ilustran en `diagrama-de-flujo.md`.

### 2.3 Hallazgos del estudio de usuarios

| Hallazgo | Dónde se atiende |
| --- | --- |
| Las puertas de entrada revelan intención | Pre-llenado por aterrizaje (§4.4) e inferencia de búsqueda (§4.5); el hub `/bajar-de-peso/` es la puerta de mayor volumen |
| Invitación no bloqueante, persistente | «Diseña tu experiencia» en el header (§6.1) y en el menú contextual mientras el cuestionario esté incompleto (§6.4) |
| La revisión del club específico decide la conversión | Página de club (§6.7) con fotos reales, horarios, clases, reseñas; tarjeta Club Ideal con datos verificables (§5.8) |
| Consistencia del Asesor entre 49 clubes + confirmación rápida | Brief único (Apéndice D) generado en la misma llamada que el reporte; agenda en tiempo real (§6.19) |
| El sitio impacta la **captación**, no la retención post-venta | La retención y el CRM post-venta quedan fuera de alcance; se anotan como dependencia |

---

## 3. Arquitectura de información y SEO

La superficie indexable es la palanca del objetivo de tráfico: 155 páginas en 12 tipos, cada una con propósito de búsqueda propio, datos vivos del club y marcado estructurado.

### 3.1 Inventario de páginas

| # | Tipo de página | Cantidad | Patrón de URL | Salud (YMYL) |
| --- | --- | --- | --- | --- |
| 1 | Inicio | 1 | `/` | No |
| 2 | Club individual | 49 | `/clubes/[club]/` | No |
| 3 | Amenidad | 10 | `/amenidades/[amenidad]/` | No |
| 4 | Clase Premium Les Mills | 7 | `/clases/signature/[clase]/` | No |
| 5 | Clase regular | 44 | `/clases/[clase]/` | No |
| 6 | FitKidz | 1 | `/fitkidz/` | No |
| 7 | Hub de objetivo | 5 | `/perfiles/[objetivo]/` | Solo rehabilitación |
| 8 | Hub Bajar de peso | 1 | `/bajar-de-peso/` | Sí |
| 9 | Personal Training | 1 | `/personal-training/` | No |
| 10 | Membresías | 6 (1 hub + 5 planes) | `/membresias/` y `/membresias/[plan]/` | No |
| 11 | Artículo del Diario | 20 | `/diario/[articulo]/` | Algunos |
| 12 | Entrenamiento individual | 10 (2 padre + 8 subpáginas) | `/entrenamiento-con-pesas-individual/[subgrupo]` · `/entrenamiento-aerobico-individual/[subgrupo]` | No |

Total: 1 + 49 + 10 + 7 + 44 + 1 + 5 + 1 + 1 + 6 + 20 + 10 = **155 páginas**.

**BES** es un widget global flotante presente en cada página (§6.3), no un tipo de página. Expone además una URL de respaldo renderizada en servidor para usuarios sin JavaScript y para enlaces directos. Se entrega como proyecto aparte con su propia especificación; este documento cubre solo sus puntos de integración.

### 3.2 Detalle por tipo de página

- Los **5 hubs de objetivo** (tipo 7) son: Primeros Pasos, Salud y Bienestar, Estética corporal, Ganar Fuerza y Rehabilitación. El hub de Bajar de peso es un tipo aparte (tipo 8) por su clasificación de salud.
- Los **5 planes de membresía** son: UniClub, AllClub, Black Pass, Pink Plan y la Promo de 21 días.
- Los **10 hubs de amenidad** son: alberca, INTENZ (zona de entrenamiento funcional), FitKidz, ring de box, muro de escalada, canchas, sauna y vapor, regaderas y vestidores, cafetería y estacionamiento.
- «FitKidz» aparece como tipo de página (el hub) y como una de las 10 amenidades; la entrada como amenidad es un apuntador que enlaza al hub.
- El hub de FitKidz absorbe las **34 actividades infantiles**, organizadas por rango de edad, disciplina y disponibilidad por club. Las actividades infantiles no tienen páginas individuales.
- **Regla anti-huérfanos:** toda página debe ser alcanzable desde al menos otras dos páginas (§3.6).

> **Hubs de objetivo y objetivos Q4: relación, no equivalencia.** Los hubs de objetivo son páginas de aterrizaje SEO nombradas por intención de búsqueda; no son una copia 1:1 de los seis objetivos Q4. El pre-llenado por aterrizaje (§4.4) es:
>
> | Hub de objetivo | Objetivo Q4 que pre-marca |
> | --- | --- |
> | Bajar de peso (tipo 8) | Bajar de peso |
> | Salud y Bienestar | Mejorar mi salud cardiovascular |
> | Estética corporal | Mejorar mi estética corporal |
> | Ganar Fuerza | Aumentar masa muscular |
> | Rehabilitación | Recuperarme de una lesión o dolor |
> | Primeros Pasos | Ninguno: pre-marca Q9 = Principiante |
>
> El sexto objetivo Q4, **Mejorar mi desempeño atlético**, no tiene hub dedicado: se atiende desde las páginas de entrenamiento individual (§3.3) y es alcanzable desde Ganar Fuerza. Por eso hay 5 hubs de objetivo + 1 hub de peso para 6 objetivos Q4: la correspondencia es intencional.

### 3.3 Entrenamiento individual: taxonomía de subgrupos

Hay dos páginas padre —`entrenamiento-con-pesas-individual` y `entrenamiento-aerobico-individual`— más 8 subpáginas de subgrupo (tipo de página 12). Cada familia mapea seis sub-clases (una por objetivo Q4). Una tercera familia, acuática, se activa cuando Q6 = «En la alberca» o «Ambas» y el club resuelto tiene alberca (§5.4).

Los **nombres visibles del Bloque 01** son los seis nombres oficiales del catálogo, asignados desde el objetivo Q4 primario (§5.1): **Fuerza integral con pesas · Rutina por grupos musculares · Desarrollo muscular progresivo · Potencia y velocidad · Fuerza de mantenimiento · Fuerza guiada en máquinas**. Las prescripciones técnicas, el equipo y las dosis son referencia de protocolo interno y **no se muestran al usuario**; viven en `anexo-clinico.md` §2. Los nombres técnicos de protocolo (Fuerza, Hipertrofia, Potencia, Resistencia muscular, LISS, MICT, HIIT, SIT) viven solo en fichas, en URLs de subpágina y en identificadores de backend. La correspondencia protocolo ↔ nombre visible es la tabla puente de §5.5. El comportamiento de pre-llenado y de resultado de estas páginas se especifica en §6.14.

### 3.4 Datos confirmados del sitio

| Concepto | Valor |
| --- | --- |
| Clubes totales | 49 |
| Estados con clubes | 13 |
| Clubes en la Zona Metropolitana del Valle de México | 32 |
| Clubes fuera de esa zona | 17 (en 11 estados) |
| Clases para adultos | 51 (7 Premium Les Mills + 44 regulares) |
| Actividades infantiles FitKidz | 34 |
| Hubs de objetivo | 5 |
| Hubs de amenidad | 10 |
| Planes de membresía | 5 (más el hub) |
| Artículos iniciales del Diario | 20 |
| Páginas totales en alcance | 155 |

### 3.5 Datos vivos por club

Cada página individual de club (tipo 2) muestra cuatro datos extraídos en vivo de la API del cliente:

- Horarios de operación por día de la semana.
- Teléfono y correo electrónico del club.
- Catálogo de clases: cuáles de las 51 clases para adultos y cuáles actividades FitKidz se ofrecen en este club.
- Horario de clases: por clase, por día, con horas.

Si la API no está disponible, la página recurre al último valor cacheado con éxito, con un aviso visible (§7).

### 3.6 Cross-linking obligatorio entre páginas

Cada página debe enlazar a sus páginas relacionadas. Sin páginas huérfanas.

| Desde | Hacia | Dirección |
| --- | --- | --- |
| Cada página de club | Cada amenidad que ofrece | Bidireccional |
| Cada página de amenidad | Cada club que la ofrece | Bidireccional |
| Cada página de clase | Cada club donde se ofrece | Bidireccional |
| Cada artículo del Diario | Al menos un hub relacionado, y al menos un club si hay relevancia geográfica | Unidireccional (artículo → hub/club) |
| Personal Training | Cada uno de los 5 hubs de objetivo | Bidireccional |

### 3.7 Ruteo de búsqueda externa

Cuando un usuario realiza una consulta en un motor de búsqueda, el sitio lo lleva a la página que mejor la responde:

| Tipo de consulta | Ejemplos | Página de aterrizaje |
| --- | --- | --- |
| Marca pura | sports world, sports world méxico | Inicio |
| Marca + ubicación | sports world polanco, sports world antara | La página de ese club |
| Gimnasio cerca de mí | gimnasio cerca de mí, gimnasio polanco | El club más cercano por geolocalización; si no se detecta la ubicación, Inicio con el flujo de búsqueda de club |
| Amenidad + ubicación | alberca cdmx, estudio de yoga polanco | El hub de la amenidad |
| Clase específica | body pump, spinning, pilates reformer | La página de esa clase |
| Objetivo personal | estética corporal, ganar masa muscular, primeros pasos | El hub del objetivo correspondiente |
| Pérdida de peso | bajar de peso, perder peso gym, GLP-1 ozempic gimnasio | Hub Bajar de peso |
| Rehabilitación | rehabilitación rodilla gym, ejercicio post lesión | Hub de Rehabilitación |
| Niños / familia | gimnasio para niños, actividades familia, FitKidz | FitKidz |
| Personal Training | entrenador personal, personal trainer | Personal Training |
| Precios y membresías | precio sports world, uniclub vs allclub | Hub de membresías |
| Información de fitness | calorías spinning, diferencia body pump vs combat | El artículo del Diario sobre el tema |
| Información operativa / cancelaciones, congelamientos, soporte | horario de un club, soporte de cuenta | Inicio con el widget BES abierto |

### 3.8 Marcado estructurado (schema.org)

| Tipo de página | Tipos schema.org requeridos |
| --- | --- |
| Club | `HealthClub` + `OpeningHoursSpecification` (una por día) + `GeoCoordinates` (verificadas) |
| Clase (premium y regular) | `Course`. Los horarios por club pueden complementarse con `Event` por sesión programada (opcional, decisión de ingeniería). |
| Hub Bajar de peso | `MedicalWebPage` + el revisor médico con credenciales (nombre y cédula profesional) |
| Hubs de objetivo y páginas con FAQs | `FAQPage` |
| Artículos del Diario | `Article` (autor con credenciales cuando aplique) |
| Todas las páginas excepto Inicio | `BreadcrumbList` |

Todo el marcado debe validar en la prueba de resultados enriquecidos de Google antes de publicar.

### 3.9 Convenciones

El sitio se diseña y se construye **mobile-first** como metodología, no como un ajuste responsive de último momento. Cada layout, interacción y regla parte del viewport móvil y mejora progresivamente hacia arriba. El único sistema de breakpoints es el de los tokens (`DESIGN.md`): móvil 360 · tablet 768 · laptop 1024 · desktop 1440. Diseñar para desktop y «hacerlo responsive» después no es conforme.

El sitio usa varios sistemas de identificadores inmutables. Una vez asignado, un código nunca cambia de significado ni se reutiliza; si un elemento se elimina, su código se retira y no se reasigna.

| Sistema de códigos | Formato | Ejemplos | Significado |
| --- | --- | --- | --- |
| Tipo de página | numérico, 1–12 | Tipo 2 = Club individual | Doce tipos canónicos en el alcance de 155 páginas |
| Pregunta | Q + número (+ variante) | Q1, Q4, Q12b, Q17 | Preguntas del cuestionario |
| Clasificación de ciudad | CIUDAD- + etiqueta | CIUDAD-UNO, CIUDAD-POCOS, CIUDAD-ZMVM | Número de clubes en la ciudad del usuario |
| Etiqueta de artículo | minúsculas con guiones | bajar-de-peso, clase-spinning | Etiquetas de contenido para el cross-linking del Diario |

- **Copy de interfaz:** español de México, imperativo de segunda persona familiar para los CTA («Visita un club», no «Visite un club»). Vocabulario de México («checar», «platicar»). Sin calcos del inglés.
- **Códigos internos de sistema:** nunca se traducen ni se muestran al usuario.

Cada matriz por página de §6 tiene tres columnas: **Estado** (combinación de si el usuario completó el cuestionario y si tiene un club identificado), **Cuestionario** (número de preguntas presentadas después del pre-llenado; una pregunta omitida por completo no cuenta, una pre-llenada pero editable sí cuenta) y **Menú contextual** (los botones que aparecen en el cuerpo de la página para ese estado; los botones del header y el widget BES, siempre visibles, no se repiten).

---

## 4. Flujos, estados y personalización

Todas las bifurcaciones, no solo el camino feliz. Fases del sistema: `welcome · questionnaire · loading · result · contact_capture · schedule · briefing · error`. El diagrama de estados completo está en `diagrama-de-flujo.md` §2.

### 4.1 Pipeline de la aplicación

1. **Construcción del cuestionario.** 15 preguntas base + 6 condicionales (§4.3). Disparadores: Q11 si Q10 = «Regreso después de una pausa»; Q12b si Q2 ≠ «Hombre»; Q14b si Q14 incluye hijos; Q17–Q19 si Q4 incluye «Bajar de peso».
2. **Resolución del club.** A partir de Q15 y Q16, o del aterrizaje en una página de club. Determina el catálogo real disponible.
3. **Motor de resultado** (§5): asignación de bloques, filtro duro de contraindicaciones y ranking de clases.
4. **Generación de copy** (§5.7): una sola llamada al modelo produce el copy del cliente y el brief del Asesor; toda la salida pasa por saneamiento y verificación.
5. **Render del resultado** (§6.17), captura de contacto (§6.18), agenda (§6.19) y brief (Apéndice D).

### 4.2 Estado del usuario respecto al cuestionario

Para construir el menú contextual de cada página, el sistema clasifica al usuario en uno de tres estados:

| Estado | Descripción |
| --- | --- |
| Sin cuestionario | No ha completado el cuestionario. |
| Completo, dentro del flujo | Lo completó y llegó a esta página con un botón desde su resultado personalizado. |
| Completo, fuera del flujo | Lo completó antes, pero llegó por otra vía (búsqueda externa, navegación interna). |

Cuando el usuario ha completado el cuestionario siempre tiene un club identificado: Q15 y Q16 forman parte de las 15 preguntas base. Conteo de preguntas visibles por ruta:

| Condición activa | Se añade | Δ |
| --- | --- | :-: |
| Base — siempre visible (Q1–Q10, Q12, Q13, Q14, Q15, Q16) | — | **15** |
| Q10 = «Regreso después de una pausa» | Q11 | +1 |
| Q2 ≠ Hombre (incluye «Prefiero no mencionarlo») | Q12b | +1 |
| Q14 ∈ {«Yo y mis hijos», «La familia completa»} | Q14b | +1 |
| Q4 incluye «Bajar de peso» | Q17, Q18, Q19 | +3 |
| **Mínimo** (sin condicionales) | | **15** |
| **Máximo** (todas activas) | | **21** |

### 4.3 El cuestionario «Diseña tu experiencia» (Q1–Q19)

15 preguntas base siempre visibles (Q1–Q10, Q12, Q13, Q14, Q15, Q16) + seis condicionales: Q11, Q12b, Q14b y los condicionales de la ruta de peso Q17–Q19. Rango visible 15–21 (§4.2). El embarazo no es una opción dentro de Q12: se captura por separado en Q12b. El copy de las preguntas es definitivo; los descriptores de tipo son notas de ingeniería. Todo pre-llenado permanece editable.

| Código | Pregunta | Tipo | Opciones / Campo |
| --- | --- | --- | --- |
| Q1 | ¿Cómo te llamas? | Texto, obligatoria | Texto libre. Placeholder: «Tu nombre completo». |
| Q2 | Género | Única, obligatoria | Hombre · Mujer · Prefiero no mencionarlo |
| Q3 | ¿Qué quieres sentir al salir del club? | Única, obligatoria | Desconectado/a del trabajo y la rutina · Renovado/a y de buen ánimo · Parte de una comunidad saludable · Confiado/a en que mi cuerpo no me va a fallar · Más a gusto conmigo mismo/a (formas femeninas si Q2 = Mujer) |
| Q4 | ¿Qué buscas? | Multiselección, máx. 2, obligatoria | Bajar de peso · Mejorar mi estética corporal y definición muscular · Aumentar masa muscular · Mejorar mi desempeño atlético · Mejorar mi salud cardiovascular · Recuperarme de una lesión o dolor crónico |
| Q5 | ¿Qué ritmo va contigo? | Única, obligatoria | Suave/controlado · Moderado y constante · Intenso, que me rete |
| Q6 | ¿Dónde prefieres entrenar? | Única, obligatoria | En piso / área seca · En la alberca · Ambas · Lo que mi entrenador recomiende |
| Q7 | ¿En qué horario prefieres entrenar? | Multiselección, obligatoria | Temprano (5:00–8:00) · Media mañana (8:00–11:00) · Mediodía (11:00–14:00) · Primera tarde (14:00–17:00) · Tarde (17:00–20:00) · Noche (20:00–22:00) |
| Q8 | ¿Qué días prefieres entrenar? | Multiselección, obligatoria | L · M · X · J · V · S · D |
| Q9 | ¿Cuál es tu nivel de entrenamiento? | Única, obligatoria | Principiante · Intermedio · Avanzado |
| Q10 | ¿Vienes de otro gimnasio? | Única, obligatoria | Sí, vengo de otro gimnasio · Nunca he ido a un gimnasio · Regreso después de una pausa |
| Q11 | ¿Qué tan larga fue la pausa? | Única, condicional (si Q10 = Regreso después de una pausa) | Menos de 3 meses · Entre 3 y 12 meses · Más de un año |
| Q12 | ¿Tienes alguna condición médica? | Multiselección, obligatoria | Ninguna · Lesión o dolor articular/muscular · Condición cardiovascular o de presión · Otra, la comento en el club. Ayuda: «Solo condiciones médicas. El embarazo no es una condición» (se pregunta en Q12b cuando Q2 ≠ Hombre) |
| Q12b | ¿Estás embarazada o en posparto reciente? | Única, condicional (visible salvo si Q2 = Hombre) | Sí, embarazo · Sí, posparto reciente (últimos 6 meses) · No. Con «Prefiero no mencionarlo» se usa fraseo neutro («¿Aplica para ti alguna de estas situaciones?»): la privacidad de género no puede eliminar el screening médico |
| Q13 | ¿Prefieres entrenar solo o acompañado? | Única, obligatoria | Solo/Sola, a mi ritmo · Acompañado/Acompañada, en clases o grupo · Me da igual |
| Q14 | ¿Con quién nos visitas en el club? | Única, obligatoria | Solo/Sola · Con mi amigo/a · Con mi pareja · Yo y mis hijos · La familia completa |
| Q14b | ¿Uno o más de tus hijos tiene menos de 12 años? | Única, condicional (si Q14 = «Yo y mis hijos» o «La familia completa») | Sí · No |
| Q15 | ¿Buscas el gimnasio cerca de tu casa o de tu trabajo? | Única, obligatoria | Cerca de mi casa · Cerca de mi trabajo · Ambos · No me importa |
| Q16 | ¿Dónde queda? | Dos campos, al menos uno obligatorio (OR) | Ayuda: «Llena uno: código postal o colonia». Campo A: Código postal (5 dígitos). Campo B: Colonia (autocompletado SEPOMEX → CP + colonia + estado; texto libre como respaldo, §7). Al menos uno debe estar presente; ambos es aceptable. |

**Concordancia de género (Q3, Q13, Q14).** Si Q2 = Mujer, se renderizan las formas femeninas («Desconectada», «Renovada», «Confiada», «conmigo misma», «Sola», «Acompañada»); en otro caso aplica el masculino por defecto.

#### Condicionales de la ruta de peso (Q17–Q19)

Cuando Q4 incluye «Bajar de peso» se añaden tres preguntas después de Q16. No aparecen para ningún otro objetivo (en particular, «Mejorar mi estética corporal» no las activa). Una vez en esta ruta, **son obligatorias**.

| Código | Pregunta | Tipo | Opciones / Campo |
| --- | --- | --- | --- |
| Q17 | ¿Estás tomando algún tratamiento para bajar de peso? | Multiselección, condicional | GLP-1 (Ozempic, Wegovy, Mounjaro) · Cirugía bariátrica · Acompañamiento nutricional con especialista · Otro tratamiento médico para peso · Ninguno. Ayuda: «Solo tratamientos activos. Las condiciones médicas ya las anotaste antes». |
| Q18 | Tus datos físicos actuales | Numérico, 3 campos, obligatoria | Peso actual kg (30–300) · Estatura cm (120–230) · Cintura cm (40–200). Ayuda: «Esta información permite construir una experiencia segura. Se almacena bajo consentimiento LFPDPPP». |
| Q19 | ¿Cuál es tu objetivo de cambio? | Única, obligatoria | 1 a 3 kilos · 3 a 6 kilos · 6 a 10 kilos · 10 a 15 kilos · Más de 15 kilos · Sin un número específico. Ayuda: «Sin promesas clínicas: los rangos son referencia, no compromiso». |

Antes de renderizar el resultado se muestra un **modal de aviso de salud** que lleva la firma del revisor médico (§10). Aplica únicamente a la ruta de bajar de peso.

#### Q4 admite hasta dos objetivos

Q4 es siempre multiselección con un máximo de dos objetivos, en cualquier combinación, sin excepción. Cuando se eligen dos, el resultado y las recomendaciones de entrenamiento individual usan la **unión deduplicada** de los mapeos de ambos objetivos (§5.1).

### 4.4 Pre-llenado por página de aterrizaje

Cuando el usuario aterriza en una página, el sistema pre-llena las preguntas que puede inferir del aterrizaje. Todo pre-llenado permanece editable.

| Página de aterrizaje | Pre-llenado | Nota |
| --- | --- | --- |
| Inicio | Ninguno desde el aterrizaje | Q4, Q15 o Q16 pueden inferirse de la búsqueda externa (§4.5) |
| Club individual | Q15 y Q16 se omiten por completo | El conteo baja en 2 para esta vía |
| Hub de amenidad | Ninguno | |
| Clase (premium o regular) | Q4 pre-marca el objetivo alineado a la clase | El mapa clase → objetivo es la tabla de fichas del Bloque 03 (`anexo-clinico.md` §1) |
| FitKidz | Q14 pre-marca «Yo y mis hijos» | |
| Hub Primeros Pasos | Q9 pre-marca «Principiante» | |
| Hub Salud y Bienestar | Q4 pre-marca «Mejorar mi salud cardiovascular» | |
| Hub Estética corporal | Q4 pre-marca «Mejorar mi estética corporal» | |
| Hub Ganar Fuerza | Q4 pre-marca «Aumentar masa muscular» | |
| Hub Rehabilitación | Q4 pre-marca «Recuperarme de una lesión o dolor» | |
| Hub Bajar de peso | Q4 pre-marca «Bajar de peso» → activa Q17–Q19 | |
| Personal Training | Q13 pre-marca «Acompañado/Acompañada» | |
| Membresías, Diario | Ninguno | |
| Entrenamiento con pesas individual (y subpáginas) | Q13 pre-marca «Solo, a mi ritmo» (o «Sola» si Q2 = Mujer). Subpáginas pre-marcan Q4: Fuerza → «Aumentar masa muscular»; Hipertrofia → «Mejorar mi estética corporal»; Potencia → «Mejorar mi desempeño atlético»; Resistencia muscular → «Mejorar mi salud cardiovascular» | |
| Entrenamiento aeróbico individual (y subpáginas) | Q13 pre-marca «Solo, a mi ritmo» (o «Sola»). Subpáginas pre-marcan Q4: LISS → sin pre-marca; MICT → «Mejorar mi salud cardiovascular»; HIIT → «Mejorar mi estética corporal»; SIT → «Mejorar mi desempeño atlético» | |

### 4.5 Inferencia desde la búsqueda externa

Cuando el usuario llega desde una búsqueda externa, el sistema solo puede inferir **dos** variables:

- **Objetivo (Q4)** — solo si la búsqueda contenía un objetivo explícito.
- **Ubicación (Q15 y Q16)** — solo si la búsqueda contenía una ubicación específica.

Las siguientes inferencias **no** se hacen:

- Una búsqueda de **clase** no llena el objetivo, porque una misma clase puede servir a varios objetivos. (Aterrizar en una página de clase sí pre-marca Q4 por la vía de §4.4.)
- Una búsqueda de **amenidad** no llena la preferencia de movimiento (Q5 o Q6).
- Aterrizar en el hub Bajar de peso no fuerza las condicionales de peso: Q17–Q19 solo se activan cuando el usuario marca Q4 = Bajar de peso.
- La **navegación interna** no infiere nada: solo cuenta la búsqueda externa que trajo al usuario.

**Excepción.** Cuando el usuario presiona «Tu Club ideal» dentro del sitio y proporciona su ubicación, esta llena Q16. Eso no es inferencia de búsqueda, sino captura directa.

**Precedencia entre inferencias en conflicto.** Cuando una búsqueda combina varios elementos (p. ej. «yoga polanco bajar de peso» = clase + ubicación + objetivo), se aplica una sola precedencia: **Q4 (objetivo) > Q16 (ubicación) > pre-marca de objetivo derivada de clase.** En el ejemplo, el usuario aterriza en el hub Bajar de peso (gana Q4) con Q16 pre-llenado a Polanco; la pre-marca derivada de la clase no se aplica.

### 4.6 Refresco de experiencia obsoleta

A un usuario con cuestionario completo cuyo resultado se generó hace más de 60 días se le muestra un aviso no bloqueante que ofrece refrescar su experiencia («¿Sigue siendo tu objetivo?»). Si no interactúa, su resultado sigue disponible sin cambios. Esto evita que recomendaciones obsoletas sesguen el menú contextual indefinidamente.

---

## 5. Motor de resultado

El motor arma la Experiencia Ideal en el backend antes de invocar al modelo. El modelo no genera, ordena ni filtra clases: solo redacta copy a partir de fichas validadas. El flujo visual completo está en `diagrama-de-flujo.md` §4.

### 5.1 Nombres de bloque por objetivo Q4

El Bloque 01 (Fuerza) y el Bloque 02 (Cardio) se nombran según el objetivo Q4 primario (el primer objetivo seleccionado). Si Q4 tiene dos selecciones, el conjunto recomendado es la **unión deduplicada** de ambas filas.

| Objetivo Q4 | Bloque 01 — nombre visible | Bloque 02 — máquina · duración |
| --- | --- | --- |
| Bajar de peso | Fuerza integral con pesas | Cardio continuo moderado · caminadora/bici/elíptica · 35–45 min |
| Mejorar mi estética corporal y definición muscular | Rutina por grupos musculares | Cardio moderado con intervalos · caminadora/bici/elíptica · 25–35 min |
| Aumentar masa muscular | Desarrollo muscular progresivo | Cardio ligero de mantenimiento · caminadora suave/bici · 15–25 min |
| Mejorar mi desempeño atlético | Potencia y velocidad | Intervalos intensos 4×4 · bici/remo/caminadora · 30–40 min |
| Mejorar mi salud cardiovascular | Fuerza de mantenimiento | Base aeróbica 80/20 · caminadora/bici/elíptica/remo · 35–45 min |
| Recuperarme de una lesión o dolor crónico | Fuerza guiada en máquinas | Recuperación activa de bajo impacto · bici reclinada/elíptica/caminadora muy suave · 15–25 min |

Las prescripciones técnicas que sustentan cada nombre viven en `anexo-clinico.md` §2 y §3.

### 5.2 Filtro duro de contraindicaciones (YMYL)

Antes de construir el Bloque 03 (clases), el motor aplica el **filtro duro de contraindicaciones**. Las clases contraindicadas **nunca aparecen** y **nunca se nombran** en el copy: la página no revela lo que se removió. El filtro mapea respuestas a cinco claves de condición:

| Clave | Condición | Disparador |
| --- | --- | --- |
| `l` (lesión) | Lesión o dolor articular/muscular | Q12 incluye «Lesión o dolor articular/muscular» |
| `c` (cardiovascular) | Condición cardiovascular o de presión | Q12 incluye «Condición cardiovascular o de presión» |
| `e` (embarazo) | Embarazo | Q12b = «Sí, embarazo» |
| `p` (posparto) | Posparto reciente (< 6 meses) | Q12b = «Sí, posparto reciente (últimos 6 meses)» |
| `b` (bariátrica) | Cirugía bariátrica | Q17 incluye «Cirugía bariátrica» |

La exclusión es dura y ocurre **antes** del ranking (§5.3, paso 4). **Los datos** —la matriz de 51 clases por contraindicación y las fichas de perfil por objetivo— viven en `anexo-clinico.md` §1 como única fuente, bajo validación médica obligatoria.

**Casos con mensaje informativo (no filtran clases):**

- **GLP-1** (Ozempic, Wegovy, Mounjaro): no se filtra ninguna clase. La recomendación es **priorizar fuerza** para preservar masa muscular durante el tratamiento. Se muestra un mensaje suave: «Durante tu tratamiento con GLP-1, priorizar clases de fuerza preserva tu masa muscular mientras bajas grasa. Tu Asesor lo confirma en la visita guiada».
- **«Otra, la comento en el club» (Q12) u «Otro tratamiento médico para peso» (Q17):** respuestas abiertas que disparan un mensaje de revisión por el Asesor: «Mencionaste una condición o tratamiento médico. Tu selección de clases grupales ya excluye las clases contraindicadas, y tu Asesor ajusta los protocolos de pesas y cardio individual en la visita guiada según tu criterio clínico».

### 5.3 Ranking de clases (Bloque 03)

Cuando el Bloque 03 está activo, la selección de clases se ejecuta en el backend en este orden. Este es el único algoritmo de ranking con autoridad:

1. **Conjunto de candidatas:** el catálogo completo del Club Ideal del usuario, resuelto a partir de Q15 y Q16.
2. **Filtro de entorno (Q6):** «En la alberca» conserva solo clases acuáticas; «En piso / área seca» conserva solo clases en seco; «Ambas» y «Lo que mi entrenador recomiende» conservan todas (§5.4).
3. **Filtro de nivel (Q9):** la clase debe incluir el nivel del usuario.
4. **Filtro duro de contraindicaciones** (§5.2): elimina las clases contraindicadas.
5. **Puntuación por objetivo y desempates:** coincidencia con Q4 (prioridad +3, apto +1; **cualquier «no apto» frente a cualquier objetivo Q4 descarta la clase**), coincidencia con Q3 (+2), coincidencia con Q5 (+1), solapamiento de horario Q7 (completo +1, parcial +0.5). Orden descendente con desempate alfabético.
6. **Partición:** top 2 + «también encajan» (3 a 5) + resto.

El modelo recibe las clases del top 2 y de «también encajan» con sus fichas completas; selecciona uno o dos beneficios por clase y la razón de coincidencia, y redacta un conector personal (≤15 palabras) que cita literalmente una respuesta del cuestionario (§5.7). El modelo no genera ningún contenido factual en este bloque.

### 5.4 Entorno acuático (Q6)

El entorno de los bloques individuales depende de Q6 y de si el club resuelto tiene alberca. **Q6 nunca suprime el Bloque 01 por sí solo.**

- **Q6 = «En la alberca»** → si el club tiene alberca, los bloques 01 y 02 usan sus **variantes acuáticas** (`anexo-clinico.md` §3); si no tiene alberca, ambos renderizan variantes en seco con la nota: «Tu club más cercano no tiene alberca; te armamos la experiencia en piso y te marcamos el club con alberca más cercano».
- **Q6 = «Ambas»** → Bloque 01 en seco; Bloque 02 en seco con alternativa acuática si el club tiene alberca. El sistema puede combinar seco y agua.
- **Q6 = «Lo que mi entrenador recomiende»** → bloques en seco; el entrenador decide piso o alberca en la primera sesión.
- **Q6 = «En piso / área seca»** → bloques en seco.

Cuando dos sub-clases acuáticas sirven el mismo objetivo, el desempate es determinista (Q9 nivel y Q5 ritmo); el detalle está en `anexo-clinico.md` §3.

### 5.5 Tabla puente — protocolo técnico ↔ nombre visible

El usuario nunca ve los nombres técnicos de protocolo. Esta tabla traduce cada protocolo (cuya ficha vive en `anexo-clinico.md` §2) al nombre visible del bloque:

| Protocolo técnico | Nombre visible (Bloque 01) | Nombre visible (Bloque 02) |
| --- | --- | --- |
| Fuerza | Fuerza integral con pesas / Fuerza de mantenimiento (según Q4) | — |
| Hipertrofia | Rutina por grupos musculares / Desarrollo muscular progresivo (según Q4) | — |
| Potencia | Potencia y velocidad | — |
| Resistencia muscular | Fuerza guiada en máquinas | — |
| LISS | — | Cardio ligero de mantenimiento / Recuperación activa de bajo impacto |
| MICT | — | Cardio continuo moderado / Base aeróbica 80/20 |
| HIIT | — | Cardio moderado con intervalos / Intervalos intensos 4×4 |
| SIT | — | Componente de Intervalos intensos 4×4 (fase de sprint) |

### 5.6 Estructura de los tres bloques y banderas de supresión

Cada usuario que completa el cuestionario recibe una experiencia combinada de tres bloques, en este orden: **01 Pesas individual · 02 Cardio individual · 03 Clases recomendadas.** Cada bloque está activo por defecto y solo se apaga ante una condición de supresión explícita. El sistema es auditable: cualquier revisor puede predecir qué bloques ve el usuario leyendo sus respuestas.

- **Bloque 01 (Pesas).** Q6 nunca lo suprime: con «En la alberca» y club con alberca, muestra su variante acuática; sin alberca, la variante en seco con la nota correspondiente (§5.4). El único disparador de supresión es que Q12 contenga una condición marcada como contraindicación absoluta del subgrupo. En otro caso, activo.
- **Bloque 02 (Cardio).** Una condición cardiovascular no estabilizada (Q12) sin autorización médica lo restringe a solo cardio suave o lo apaga. En otro caso, activo.
- **Bloque 03 (Clases).** Q13 = «Solo/Sola, a mi ritmo» lo apaga; el menú renombra «Clases recomendadas» → «Tu rutina individual» (§6.14). En otro caso, activo, con selección por §5.3.

El motor devuelve las banderas `block_1_on`, `block_2_on` y `block_3_on`; el frontend renderiza solo los bloques cuya bandera es verdadera. Si las tres quedaran apagadas, el sistema lanza un error controlado y dirige al usuario a un Asesor humano (§7).

### 5.7 Generación de copy (una sola llamada)

Una sola llamada al modelo produce **tanto** el copy del cliente **como** el contenido del brief del Asesor. No hay llamadas separadas. Los parámetros del modelo viven en `anexo-ingenieria-crm.md`; el esquema JSON exacto está en el Apéndice C; la voz, las prohibiciones, la verificación (lint) y los fallbacks viven en `anexo-contenido-prompts.md`.

**Zonas de generación y límites de palabras.**

| Zona (clave de schema) | Destino | Límite |
| --- | --- | --- |
| `hook` | Cliente — conecta con Q3 | ≤ 30 palabras |
| `plan_argument` | Cliente — argumento principal, nombra los 3 bloques, cierra en personalización; nunca usa la palabra «plan» en el texto visible | ≤ 45 palabras |
| `intent_line` | Cliente — línea de intención de la tarjeta Club Ideal, combina Q13 y Q14 | ≤ 18 palabras |
| `infrastructure_argument` | Cliente — argumento de infraestructura, cita los 49 clubes y el club específico | ≤ 55 palabras |
| `class_1_connector` / `class_2_connector` | Cliente — conector personal por clase; empieza con «Porque mencionaste que…»; se omiten si no hay Bloque 03 | ≤ 15 palabras c/u |
| `validation_questions` | Brief — exactamente 5 | ≤ 18 palabras c/u |
| `visit_route` | Brief — exactamente 4 pasos (título + descripción) | ≤ 18 palabras la descripción |
| `proposal` | Brief — `main` + `complement` | ≤ 35 / ≤ 30 palabras |
| `closing_priorities` | Brief — exactamente 3 | ≤ 12 palabras c/u |
| `closing_script` | Brief — primera persona del Asesor al lead | ≤ 60 palabras |

**Saneamiento y verificación.** Tras parsear el JSON, un saneamiento recursivo elimina cualquier código `Qn` que el modelo haya filtrado; luego corre la verificación de salida (palabra «plan» visible, jerga, claims clínicos, hechos no soportados, límites de palabras, forma del JSON). Si un campo falla, se reemplaza por su fallback aprobado y se registra el motivo; si la forma JSON falla, se renderizan todos los campos con fallback. La página de resultado nunca se bloquea por una salida inválida del modelo: degrada con elegancia.

### 5.8 Tarjeta Club Ideal — resolución de datos

La tarjeta Club Ideal se renderiza entre el encabezado y los tres bloques (§6.17). **Todo su contenido factual es verificable desde el backend** (catálogo + API de geocodificación). El modelo no genera hechos; solo redacta la línea de intención.

Contenido:

1. **Nombre del club**, resuelto a partir del catálogo usando Q16 frente a las coordenadas del club: gana el más cercano, salvo que Q15 = «No me importa», donde aplica la ciudad o el respaldo más cercano.
2. **Distancia**, estimación en coche en minutos desde Q16 hasta el club, mostrada como «A N minutos de tu colonia/CP».
3. **Dirección**, textual del catálogo.
4. **Línea de intención**, generada por el modelo, que combina Q13 y Q14 en ≤18 palabras (plantillas en `anexo-contenido-prompts.md`).
5. **Lista de características**, exactamente cuatro viñetas verificables: las dos clases top del Bloque 03 con la nota «en tus horarios disponibles» cuando el solapamiento de Q7 es completo, el área de pesas, la alberca si existe y una amenidad adicional relevante para el objetivo Q4.
6. **Enlace de acción** «Ver otros clubes cerca de ti» (§6.7).

**Degradación elegante:** si alguno de los contenidos 1 a 4 no puede resolverse (fallo de geocodificación, Q16 faltante, hueco en el catálogo), se omite ese elemento. Nunca se inventa.

---

## 6. Especificación por pantalla y componente

Cada subsección sigue el mismo orden: propósito · comportamiento · contenido · estados. Las matrices «estado del usuario → preguntas visibles → menú contextual» definen el comportamiento exacto por tipo de página.

### 6.1 Header global

El header está fijo en la parte superior de las 155 páginas y concentra las tres rutas paralelas del sitio (Tu Sports World · Diseña tu experiencia · Pregúntale a BES) más la única acción de conversión («Agenda tu visita»).

**Estructura desktop.** Cinco elementos, de izquierda a derecha:

- **Logo de Sports World** — regresa al inicio.
- **Tu Sports World** — abre el panel lateral con los 8 hubs (§6.2).
- **Diseña tu experiencia** — abre el cuestionario.
- **Pregúntale a BES** — abre el widget de BES (§6.3).
- **Agenda tu visita** — botón pill rojo que lleva al flujo de agenda.

Los elementos 2, 3 y 4 son tres rutas paralelas de la misma jerarquía. El elemento 5 es la única acción de conversión y recibe tratamiento visual distinto.

**Estructura móvil.** En pantallas de menos de 1024 px, dos filas apiladas: **fila 1** (56 px) logo + «Agenda tu visita»; **fila 2** (44 px) Tu Sports World · Diseña tu experiencia · Pregúntale a BES. Las etiquetas se acortan según el ancho:

| Ancho | Etiquetas |
| --- | --- |
| ≥ 1024 px | Texto completo |
| 768–1023 px | Texto completo; si no cabe, «Tu Sports World · Diseña tu experiencia · BES» |
| 480–767 px | Ícono + texto; la franja puede hacer scroll horizontal antes que truncar |
| < 480 px | Solo íconos con `aria-label`; «Agenda tu visita» conserva su texto en la fila 1 |

El botón «Agenda tu visita» **nunca** se reduce a ícono: es la acción primaria y conserva su etiqueta en todos los anchos.

**CTA del header.** Botón pill con fondo rojo de marca y texto blanco, anclado a la derecha en todas las páginas y estados. Es la única excepción a la regla de «cada cosa vive en un solo lugar», por ser la acción de conversión primaria. Si el usuario no ha completado el cuestionario, este se presenta como paso prerrequisito antes de confirmar la cita.

**Comportamiento al hacer scroll.** El header permanece anclado; su altura no cambia. Fondo casi sólido con transparencia y desenfoque sutiles (opacidad 0.85, desenfoque 8 px) para una sensación premium, sin cambios al hacer scroll.

### 6.2 Panel lateral «Tu Sports World»

Es el único punto de navegación estructural del sitio: un panel lateral con los 8 hubs principales. Los tres elementos de acción del header no se duplican dentro de él.

**Contenido.** Al pasar el cursor (desktop) o tocar (móvil) «Tu Sports World», un panel se desliza desde la derecha con: Clubes · Clases · Amenidades · Perfiles (hubs de objetivo) · Bajar de peso · FitKidz · Membresías · Diario. Mide 560 px en desktop y es pantalla completa en móvil. Incluye un pie con redes sociales y aviso de privacidad.

**Comportamiento.** Desktop: abre en hover con 200 ms de retardo, cierra al salir el cursor con 300 ms de gracia. Móvil: abre al tocar, cierra al tocar fuera o un elemento. Animación: entra en 320 ms, sale en 240 ms. Telón de fondo con desenfoque 12 px + overlay negro al 40%. Cierre manual con «X» arriba a la izquierda. Teclado: `Esc` cierra; `Tab` cicla el foco solo dentro del panel (focus trap).

### 6.3 BES — asistente conversacional global

BES es el asistente conversacional del sitio: un widget flotante presente en las 155 páginas que responde preguntas operativas (horarios, precios, clases, membresías), agenda visitas y conoce el contexto de la página donde se abre.

**Widget global.** Botón flotante anclado abajo a la derecha en todas las páginas y breakpoints, que no se desplaza con el scroll. El panel de chat se desliza sobre la página actual (no navega a otra URL): pantalla completa en móvil, panel lateral de 420 px en desktop. Modo por defecto: texto; un toggle cambia a voz. El elemento «Pregúntale a BES» del header es un punto de entrada redundante. Existe una **URL de respaldo** renderizada en servidor para usuarios sin JavaScript, enlaces compartidos e indexadores (§6.15). Al abrirse, BES conoce el tipo de página actual y sus identificadores, para responder sin que el usuario repita el contexto.

**Lo que BES no hace.** No ejecuta cancelaciones, congelamientos, cambios de plan ni reembolsos: captura la solicitud, valida identidad de forma básica, abre un ticket en el CRM y ofrece conectar con un Asesor humano. No responde preguntas profundas de salud: redirige al hub correspondiente, que lleva la firma del revisor médico. No promete resultados.

**Alcance de WhatsApp.** Solo recordatorios de visita: cuando un usuario agenda, BES programa dos mensajes de plantilla (24 h y 2 h antes). El número se captura con opt-in explícito; sin opt-in, el recordatorio recurre al correo. BES no usa WhatsApp para ventas ni cambios de cuenta.

### 6.4 Menú contextual (recomendaciones, no menús)

El usuario no ve menús: ve recomendaciones. El menú contextual es el conjunto de botones de acción dentro del cuerpo de cada página, y cambia en función de tres ejes: el estado del cuestionario (§4.2), la página por la que llega y el club resuelto.

**Botones permanentes y específicos.** Hay botones permanentes (sujetos a condiciones globales) y botones específicos de página.

- **«Agenda tu visita guiada» — siempre presente.** Aparece en toda página y en todo estado. Es la contraparte en el cuerpo del botón del header.
- **«Tu Club ideal».** Aparece cuando el usuario está en una página que no es de club individual y no está dentro de su flujo de experiencia. Al presionarlo: si no hay ubicación inferida, presenta Q15 y Q16; si la hay, los presenta pre-llenados para confirmar o cambiar. Capturada la ubicación, aplica las reglas geográficas.
- **«Otros clubes…».** Solo en páginas de club individual. Su etiqueta y comportamiento dependen del tamaño de la ciudad:

| Tipo de ciudad | Definición |
| --- | --- |
| CIUDAD-UNO | 1 club en la ciudad |
| CIUDAD-POCOS | 2 o 3 clubes |
| CIUDAD-ZMVM | Más de 3 clubes (Zona Metropolitana del Valle de México, 32 clubes) |

| Tipo de ciudad | Estado | Etiqueta | Acción |
| --- | --- | --- | --- |
| CIUDAD-UNO | Cualquiera | (no aparece) | — |
| CIUDAD-POCOS | Club identificado | Otros clubes en tu ciudad | Muestra los otros 1 o 2 clubes |
| CIUDAD-ZMVM | Club identificado | Otros clubes en el área | (1) clubes a 10 km del actual; (2) clubes cerca de otra ubicación (pregunta casa/trabajo/escuela/otro → ciudad/colonia/CP) |
| CIUDAD-ZMVM | Sin club ni ubicación inferida | Tu Club ideal | Presenta Q15 y Q16 |

- **«Diseña tu experiencia» / «Volver a tu experiencia ideal».** Mientras el cuestionario esté incompleto, aparece «Diseña tu experiencia». Una vez completo, deja de aparecer en el cuerpo (permanece en el header) y, cuando el usuario llega fuera de su flujo, se ofrece «Volver a tu experiencia ideal».
- **«Artículos o información útil».** Aparece cuando existe al menos un artículo del Diario con etiqueta que coincide con la página (§6.12). Si no hay, no aparece.

**Resumen de botones por estado del cuestionario:**

| Estado | Botones del menú contextual |
| --- | --- |
| Sin cuestionario | «Tu Club ideal» (si aplica el eje del club) · «Diseña tu experiencia» · «Agenda tu visita guiada» · «Artículos o información útil» (si hay) · botones propios de la página |
| Completo, dentro del flujo | Botones propios de la página. No se ofrece «Diseña tu experiencia» ni se duplica «Volver a tu experiencia ideal» |
| Completo, fuera del flujo | «Volver a tu experiencia ideal» · «Artículos o información útil» (si hay) · botones propios de la página |

«Agenda tu visita guiada» (conversión) y «Pregúntale a BES» están siempre en el header y no se duplican en el cuerpo.

### 6.5 Hub temático SEO

- **Propósito:** captar tráfico orgánico de alta intención y enrutarlo a «Diseña tu experiencia». En `/bajar-de-peso/`, el aterrizaje pre-marca Q4 = Bajar de peso, lo que activa Q17–Q19 y el aviso de salud antes del resultado.
- **Contenido SEO mínimo por hub:** H1 con la keyword principal; 600–900 palabras de texto útil; FAQ con `FAQPage`; enlaces internos a clubes y clases relacionadas; CTA «Diseña tu experiencia».
- **Metadatos:** `<title>` ≤ 60 caracteres, meta descripción ≤ 155 caracteres, canonical, Open Graph, `lang="es-MX"`.
- **Paginación:** listados de clubes/clases con `rel=next/prev` y URLs limpias (p. ej. `/clubes/cdmx/pagina-2`), evitando contenido duplicado con canonical.
- **Solo `/bajar-de-peso/`:** slot para el video institucional de 45–60 s con carga diferida (`poster` + lazy); nunca autoplay con audio.
- **Imágenes:** AVIF/WebP con `srcset` responsivo.
- **Requisito no funcional:** LCP < 2.5 s · CLS < 0.1 · INP < 200 ms (Core Web Vitals; afectan el ranking).

### 6.6 Home — matriz de comportamiento

| Estado | Cuestionario | Menú contextual |
| --- | --- | --- |
| Sin cuestionario · sin ubicación · marca pura | 15 (18 si bajar de peso) | Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · sin ubicación · con objetivo | 15, Q4 pre-llenada y editable | Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · con ubicación inferida | 15, Q15/Q16 pre-llenadas y editables | Tu Club ideal · Diseña tu experiencia · Agenda tu visita guiada |
| Cuestionario completo (siempre fuera del flujo en Home) | Ya completo | Volver a tu experiencia ideal · Agenda tu visita guiada |

### 6.7 Página individual de club

Al aterrizar, el club ya está identificado, por lo que Q15 y Q16 se omiten (13 preguntas base; 16 si bajar de peso). El tamaño de la ciudad cambia los botones «Tu Club ideal» / «Otros clubes».

| Estado | Cuestionario | Menú contextual |
| --- | --- | --- |
| Sin cuestionario · ciudad con 1 club | 13 (16 si bajar de peso) | Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · ciudad con ≤ 3 clubes | 13 (16 si bajar de peso) | Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · ciudad con > 3 clubes | 13 (16 si bajar de peso) | Tu Club ideal · Diseña tu experiencia · Agenda tu visita guiada |
| Completo, dentro del flujo | Ya completo | Volver a tu experiencia ideal · Agenda tu visita guiada |
| Completo, fuera del flujo · ciudad con ≤ 3 clubes | Ya completo | Volver a tu experiencia ideal · Agenda tu visita guiada |
| Completo, fuera del flujo · ciudad con > 3 clubes | Ya completo | Volver a tu experiencia ideal · Otros clubes en el área · Agenda tu visita guiada |

**Otros clubes del área y reevaluación de clases.** La acción «Ver otros clubes cerca de ti» de la tarjeta Club Ideal abre un panel con los clubes dentro de un radio configurable (15 km por defecto) respecto a Q16, ordenados por distancia en coche. Cada entrada muestra nombre, distancia en minutos, dirección y un resumen de amenidades distintivas.

Cuando el usuario elige otro club: (1) la tarjeta Club Ideal se actualiza; (2) el Bloque 03 se reevalúa con el catálogo del nuevo club (se reejecuta §5.3 y se reinvoca al modelo solo para las nuevas clases top); (3) los bloques 01 y 02 no se reevalúan, porque no dependen del club; (4) el cambio persiste en la sesión y en el CRM con una bandera de anulación manual. Si el catálogo del nuevo club no produce un conjunto viable para el Bloque 03, se muestra una advertencia suave (§7) y el usuario puede aceptar las alternativas o volver al club anterior.

### 6.8 Páginas de clase

51 páginas de clase (7 premium en `/clases/signature/` y 44 regulares en `/clases/`). Cada una muestra la descripción, los clubes que la ofrecen con horarios reales, y pre-marca el objetivo Q4 alineado a la clase. Comportamiento idéntico para premium y regular:

| Estado | Cuestionario | Menú contextual |
| --- | --- | --- |
| Sin cuestionario · sin club · sin ubicación | 15, Q4 pre-llenada y editable (18 si bajar de peso) | Tu Club ideal · Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · sin club · con ubicación | 15, Q4/Q15/Q16 pre-llenadas y editables | Tu Club ideal · Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · con club | 15, Q4 pre-llenada y editable | Diseña tu experiencia · Agenda tu visita guiada |
| Completo, dentro / fuera del flujo | Ya completo | Volver a tu experiencia ideal · Agenda tu visita guiada |

### 6.9 Hubs de objetivo

Aplica a los 5 hubs (Primeros Pasos, Salud y Bienestar, Estética corporal, Ganar Fuerza, Rehabilitación). El aterrizaje pre-marca Q4 con el objetivo del hub. El aviso de salud solo se muestra en la ruta de bajar de peso, no en Rehabilitación.

| Estado | Cuestionario | Menú contextual |
| --- | --- | --- |
| Sin cuestionario · sin club · sin ubicación | 15, Q4 pre-llenada y editable | Artículos o información útil (si hay) · Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · sin club · con ubicación | 15, Q4/Q15/Q16 pre-llenadas y editables | Artículos o información útil (si hay) · Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · con club | 15, Q4 pre-llenada y editable | Diseña tu experiencia · Agenda tu visita guiada |
| Completo, dentro / fuera del flujo | Ya completo | Volver a tu experiencia ideal · Agenda tu visita guiada |

**Hub Bajar de peso.** El aterrizaje pre-marca Q4 = Bajar de peso, lo que activa Q17–Q19; el conteo es siempre 18. Un aviso de salud aparece antes del resultado. Esta página siempre tiene artículos etiquetados, por lo que «Artículos o información útil» siempre aparece.

### 6.10 FitKidz

FitKidz es el hub del programa infantil: absorbe las 34 actividades (organizadas por edad, disciplina y disponibilidad por club; sin páginas individuales) y pre-llena Q14 = «Yo y mis hijos» al iniciar el cuestionario desde aquí.

**Botón específico** «Clases FitKidz disponibles»: aparece una vez que el usuario tiene un club identificado y muestra las clases FitKidz de ese club con horarios. No aparece sin club identificado, porque cada club ofrece un subconjunto distinto.

**Clubes propuestos.** Cuando el sistema propone hasta 3 clubes (reglas geográficas de §6.4), cada uno se presenta con tres botones: «Ver el club», «Agenda tu visita guiada» (con ese club preseleccionado) y «Clases FitKidz disponibles para tu familia».

### 6.11 Personal Training

El aterrizaje pre-marca Q13 = Acompañado/Acompañada.

| Estado | Cuestionario | Menú contextual |
| --- | --- | --- |
| Sin cuestionario · sin club · sin ubicación | 15, Q13 pre-llenada y editable (18 si bajar de peso) | Artículos o información útil (si hay) · Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · sin club · con ubicación | 15, Q13/Q15/Q16 pre-llenadas y editables | Artículos o información útil (si hay) · Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · con club | 15, Q13 pre-llenada y editable | Diseña tu experiencia · Agenda tu visita guiada |
| Completo, dentro / fuera del flujo | Ya completo | Volver a tu experiencia ideal · Agenda tu visita guiada |

### 6.12 Diario

El aterrizaje en un artículo no infiere variables del cuestionario.

| Estado | Cuestionario | Menú contextual |
| --- | --- | --- |
| Sin cuestionario · sin ubicación | 15 (18 si bajar de peso) | Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · con ubicación | 15, Q15/Q16 pre-llenadas | Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · con club | 15 | Diseña tu experiencia · Agenda tu visita guiada |
| Completo, dentro / fuera del flujo | Ya completo | Volver a tu experiencia ideal · Agenda tu visita guiada |

**Etiquetas de artículos.** Cada artículo lleva una o más etiquetas (minúsculas con guiones) que lo asocian con páginas de clase, hubs y clubes para el cross-linking (§3.6). La lista canónica de etiquetas la define el equipo editorial antes de producción (§13.1).

### 6.13 Membresías

Las 6 páginas de membresía (1 hub + 5 planes) muestran de cada plan: descripción, qué incluye, qué no incluye, precio, letra chica y un comparativo. **No incluyen checkout transaccional.** La ruta de conversión es «Agenda tu visita guiada»; la venta ocurre en persona en el club o por teléfono con el call center.

| Estado | Cuestionario | Menú contextual |
| --- | --- | --- |
| Sin cuestionario · sin ubicación | 15 (18 si bajar de peso) | Tu Club ideal · Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · con ubicación | 15, Q15/Q16 pre-llenadas | Tu Club ideal · Diseña tu experiencia · Agenda tu visita guiada |
| Sin cuestionario · con club | 15 | Diseña tu experiencia · Agenda tu visita guiada |
| Completo, dentro / fuera del flujo | Ya completo | Volver a tu experiencia ideal · Agenda tu visita guiada |

### 6.14 Páginas de entrenamiento individual

Dos experiencias de nivel superior (`entrenamiento-con-pesas-individual` y `entrenamiento-aerobico-individual`), cada una con seis subgrupos (uno por objetivo Q4, con los nombres oficiales de §5.1). Al aterrizar, Q13 se pre-marca «Solo, a mi ritmo» («Sola» si Q2 = Mujer) y Q4 se pre-marca según la subpágina (§4.4).

Cuando Q13 = «Solo/Sola, a mi ritmo» en la respuesta final, el resultado **no recomienda clases grupales**: recomienda los subgrupos de pesas y aeróbico que correspondan a Q4 (§5.1). Si Q4 tiene dos selecciones, el conjunto es la unión deduplicada. El catálogo de clases se suprime y el menú muestra «Tu rutina individual» en lugar de «Clases recomendadas».

| Estado | Cuestionario | Menú contextual |
| --- | --- | --- |
| Sin cuestionario | 15, Q13 pre-marcada Solo/Sola y Q4 pre-marcada según la subpágina, ambas editables (18 si bajar de peso) | Diseña tu experiencia · Agenda tu visita guiada |
| Completo, dentro / fuera del flujo | Ya completo | Volver a tu experiencia ideal · Tu rutina individual · Agenda tu visita guiada |

**Nota de coherencia aterrizaje → resultado.** El pre-llenado es editable; el resultado se deriva del Q4 final, por lo que puede diferir de la subpágina visitada. Es un comportamiento intencional.

### 6.15 BES vía URL de respaldo

Normalmente se llega a BES por el widget global (§6.3). La URL `/bes` existe como respaldo para usuarios sin JavaScript y como destino enlazable; se renderiza en servidor con la misma interfaz de chat en layout no flotante.

| Estado | Comportamiento |
| --- | --- |
| Sin cuestionario | Responde preguntas. Si detecta intención de personalización, ofrece abrir el cuestionario. Siempre disponible: «Hablar con un asesor humano». |
| Completo, dentro del flujo | Responde manteniendo el contexto de la experiencia. «Volver a tu experiencia ideal» siempre visible. |
| Completo, fuera del flujo | Responde libremente. «Volver a tu experiencia ideal» siempre visible. |

### 6.16 Cuestionario «Diseña tu experiencia» (pantalla)

- **Propósito:** cualificar, personalizar y recolectar los datos del lead.
- **Estructura:** un paso por pantalla, barra de progreso, botón «Continuar» deshabilitado hasta responder. El contenido normativo de las preguntas está en §4.3.
- **Estados interactivos:** opción `default / hover / focus-visible / selected / disabled`; botón `default / hover / active / disabled / loading`.
- **Validación inline (en tiempo real):** Q1 nombre ≥ 2 caracteres; Q7 horarios y Q8 días ≥ 1 selección; Q16 CP **o** colonia (al menos uno; CP = 5 dígitos numéricos).
- **Contenido:** español de México, voz activa, sin jerga; concordancia de género si Q2 = Mujer.
- **Requisito no funcional:** transición entre preguntas < 100 ms; estado persistido en cliente para no perder respuestas al recargar, solo tras aceptar el aviso de privacidad (§7, §10).

### 6.17 Resultado — la página Experiencia Ideal

- **Propósito:** entregar la recomendación personalizada (el «valor» a cambio de los datos). Se llega solo tras completar el cuestionario.
- **Estructura de contenido (vinculante), en este orden:**
  1. **Encabezado** con el hook (deriva de Q3) y el argumento principal que nombra los tres bloques.
  2. **Tarjetas resumen:** objetivo (Q4), nivel (Q9), horario (Q8 + Q7), con quién entrena (Q14).
  3. **Banner CTA** con «Agendar visita guiada».
  4. **Tarjeta Club Ideal** (§5.8).
  5. **Tres bloques:** 01 pesas · 02 cardio · 03 clases (los que tengan su bandera activa, §5.6).
  6. **Sección de seguridad** (cuando aplica) con ícono «!» y copy contextual.
  7. **Nota legal** al pie.
- **Tratamiento visual:** *cómo* se ven esos elementos —tarjetas, listas o acordeones; espaciado, retícula, jerarquía— es entregable del equipo de diseño, dentro de los tokens y los lineamientos de estilo premium (`DESIGN.md`). Este documento fija *qué* aparece y *qué* dice.

**Bloque 01 (pesas).** Muestra uno de los seis nombres visibles según Q4 (§5.1). Nunca lista equipo en el copy; la razón termina con «Tu entrenador define los ejercicios y el peso en la primera sesión» (o una variante aprobada).

**Bloque 02 (cardio).** No usa nombres técnicos. Muestra una máquina recomendada, una duración, el momento relativo a la sesión de pesas y una razón en lenguaje llano:

| Objetivo Q4 | Máquina | Duración · intensidad · cuándo |
| --- | --- | --- |
| Bajar de peso | Caminadora, bicicleta o elíptica | 35–45 min · ritmo conversacional · después de pesas o en día separado |
| Estética corporal | Caminadora, bicicleta o elíptica | 25–35 min · ritmo conversacional + 1 día con intervalos cortos al máximo · después de pesas |
| Aumentar masa muscular | Caminadora suave o bicicleta | 15–25 min · ritmo muy ligero · día separado o calentamiento corto |
| Desempeño atlético | Bicicleta, remo o caminadora | 30–40 min · ritmo conversacional + intervalos cortos al máximo con recuperación activa · día separado de la fuerza explosiva |
| Salud cardiovascular | Caminadora, bicicleta, elíptica o remo | 35–45 min · ritmo conversacional 3–4 días + 1 día de intervalos · sesión principal |
| Recuperación de lesión | Bicicleta reclinada, elíptica o caminadora muy suave | 15–25 min · ritmo muy ligero · antes de pesas como activación |

La lista de máquinas es recomendación, no restricción; el usuario puede sustituir por una equivalente del club. La instrucción de momento es relativa al objetivo Q4 primario; con dos objetivos, se usa la guía más restrictiva (prioridad de recuperación: lesión > masa muscular > desempeño > estética > bajar de peso > cardiovascular). Las clases grupales de alta intensidad (GRIT, TRAINT BOOST, ALPHA TRAINER, STRONG NATION, POWER JUMP) van exclusivamente al Bloque 03, nunca al 02.

**Bloque 03 (clases).** Presenta: (1) dos tarjetas top, cada una con nombre de clase, razón de coincidencia (textual de la ficha), uno o dos beneficios (textuales), conector personal (≤15 palabras) y dos acciones apiladas: «Cambiar mis clases» y «Ver todas las del club»; (2) un desplegable «Otras clases que también encajan» (3 a 5); (3) un panel de catálogo completo del club, alfabético, con filtros de texto y de objetivo.

«Cambiar mis clases» abre un panel que muestra primero «también encajan», luego el catálogo más amplio. Al seleccionar, se reemplaza solo la tarjeta afectada y se reinvoca al modelo solo para esa clase; la otra tarjeta no se regenera. El reemplazo persiste en la sesión y en el CRM. Restricciones: el usuario no puede elegir una clase fuera del catálogo del club; si elige una fuera de la compatibilidad con Q4, la tarjeta muestra una nota suave —«Esta clase no es la mejor opción para tu objetivo de [objetivo], pero está disponible en tu club»—; «Reiniciar cuestionario» permanece siempre disponible.

**Sección de seguridad — copy contextual (verbatim es-MX):**

| Condición | Copy |
| --- | --- |
| GLP-1 + otra condición médica | Tu experiencia incluye prioridad en clases de fuerza para preservar tu masa muscular durante tu tratamiento. Las clases con impacto o restricciones específicas ya están filtradas. Tu Asesor confirma el detalle en la visita guiada. |
| Solo GLP-1 | Durante tu tratamiento con GLP-1, priorizamos clases de fuerza para preservar tu masa muscular mientras bajas grasa. Tu Asesor confirma el detalle clínico en la visita guiada. |
| Otra condición médica (sin GLP-1) | Con base en lo que compartiste, esta recomendación prioriza opciones controladas y evita actividades contraindicadas. Las clases con impacto o restricciones específicas ya están filtradas. Informa al personal del club sobre cualquier indicación de tu profesional de salud. |
| Sin condición médica (por defecto) | Con base en lo que compartiste, esta recomendación se ajusta a tu nivel y disponibilidad. Si tienes alguna indicación médica antes de comenzar, coméntala con tu Asesor en la visita guiada. |

Línea legal fija debajo del copy: «Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica».

**Sección FitKidz — tres estados de render.** La disponibilidad de FitKidz por club es una bandera booleana, separada del catálogo de clases infantiles. 40 de los 49 clubes ofrecen FitKidz.

- **Estado A** (30 clubes con FitKidz y clases infantiles nombradas): sección con chips de clases y «Conoce FitKidz →».
- **Estado B** (10 clubes con FitKidz pero sin nombres de clase cargados): sección con texto genérico «Este club ofrece FitKidz. Tu Asesor te compartirá el detalle de actividades y horarios disponibles para tus hijos en tu visita guiada», sin chips.
- **Estado C** (9 clubes sin FitKidz): sección que indica «Este club no ofrece FitKidz. Otros clubes cerca de ti sí lo tienen — revisa la lista de otros clubes».

Cuando Q14 incluye hijos y Q14b = «Sí», el resolver trata FitKidz como amenidad requerida y elige del universo de 40 clubes con la bandera. Los nombres de clase faltantes de los clubes en Estado B son un dato pendiente del cliente (§13.1).

**Nota al pie:** «Recomendación generada con base en tus respuestas. · Sports World · Tu experiencia, a tu medida».

**Requisito no funcional:** si la salida del modelo es inválida, la página renderiza con fallbacks seguros (§5.7), sin pantalla en blanco.

**Matriz de la página de resultado:**

| Bloque | Por defecto | Condición de supresión | Bandera |
| --- | --- | --- | --- |
| 01 Pesas individual | Activo (variante seca o acuática según Q6 + alberca, §5.4) | Solo: Q12 contiene una contraindicación absoluta del subgrupo | `block_1_on` |
| 02 Cardio individual | Activo | Q12 cardiovascular no estabilizada sin autorización médica (restringir a cardio suave, o apagar) | `block_2_on` |
| 03 Clases recomendadas | Activo | Q13 = Solo/Sola, a mi ritmo | `block_3_on` |

Si las tres banderas son falsas, el sistema lanza un error controlado y renderiza la tarjeta de traspaso a un Asesor humano (§7).

### 6.18 Captura de contacto

- **Propósito:** convertir el interés en lead contactable. Aparece **entre** el resultado y la agenda; no se puede agendar sin completarla. No es una pregunta del cuestionario y queda fuera del conteo Q1–Q19.
- **Encabezado (verbatim):** eyebrow «Antes de agendar»; H2 «{Nombre}, necesitamos un par de datos para confirmar tu visita»; ayuda «Tu Asesor te contactará para coordinar el horario y enviarte los detalles del club».
- **Campos, validación y errores (verbatim):**

| Campo | Etiqueta | Placeholder | Validación | Error inline |
| --- | --- | --- | --- | --- |
| Apellido | Apellido | Tu apellido | `trim().length ≥ 2` | Ingresa tu apellido (mínimo 2 letras) |
| Celular | Número de celular | 10 dígitos · ejemplo: 5512345678 | exactamente 10 dígitos | Ingresa un número de 10 dígitos |
| Correo | Correo electrónico | tu@correo.com | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | Ingresa un correo electrónico válido |

- **Privacidad (verbatim):** «Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros».
- **Botón «Continuar»:** rojo cuando los tres campos son válidos; gris deshabilitado en otro caso. El error del correo aparece mientras el usuario escribe, no al enviar.
- **Navegación:** «← Volver» regresa al resultado; al continuar, el trío se guarda y el flujo avanza a la agenda. El botón de regreso desde la agenda vuelve aquí, no al resultado. El brief del Asesor compone el nombre completo como {Q1} {Apellido} y expone celular y correo como canales de contacto para el CRM.

### 6.19 Agenda y brief del Asesor

- **Agenda:** selección de día y hora con confirmación en tiempo real (API del cliente); «Volver» regresa a la captura de contacto.
- **Brief:** tras confirmar la cita se genera el brief del Asesor (Apéndice D), con banderas de seguridad. Cinco de sus secciones provienen de la misma llamada al modelo que produjo el copy del cliente (§5.7).

### 6.20 Comportamiento responsive por pantalla

El sitio es mobile-first: la columna «Celular» es la base; «Tablet» y «Desktop» son mejoras progresivas. Breakpoints únicos (tokens `DESIGN.md`): móvil 360 · tablet 768 · laptop 1024 · desktop 1440. Contenedor de contenido: 100% en celular (padding 16 px), centrado con máximo 1200 px desde laptop (padding 24 px). Esta tabla fija el reflow; la composición visual fina la resuelve el equipo de diseño dentro de estos tokens.

| Pantalla / componente | Celular (< 768 px) | Tablet (768–1023 px) | Desktop (≥ 1024 px) |
| --- | --- | --- | --- |
| **Header** | 2 filas (logo + «Agenda tu visita»; franja con íconos) | 2 filas, etiquetas abreviadas | 1 fila, 5 elementos con texto completo |
| **Panel «Tu Sports World»** | Pantalla completa, abre al tocar, cierre con «X» | Pantalla completa o panel ancho | Panel 560 px, abre en hover |
| **BES** | Botón flotante; panel de chat a pantalla completa | Panel completo o lateral | Botón flotante; panel lateral 420 px |
| **Hub SEO / páginas de contenido** | 1 columna; hero apilado; listados en tarjetas a 1 columna; CTA «Diseña tu experiencia» fijo al pie | 2 columnas en listados; hero a 1 columna | Grid de 12 col., contenedor 1200 px; listados 2–3 col.; CTA en el flujo del hero |
| **Cuestionario** | Ancho completo; 1 pregunta visible; opciones apiladas (objetivo táctil ≥ 44 px); barra de progreso fija arriba; «Continuar» fijo al pie | Tarjeta centrada ~600 px; opciones en 1–2 col. | Tarjeta centrada ~720 px; opciones en 2 col. cuando son cortas |
| **Resultado** | 1 columna; 4 tarjetas resumen en grid 2×2; Club Ideal apilada; 3 bloques apilados; sección de seguridad debajo; banner CTA fijo al pie | Tarjetas resumen 2×2 o 4-up; bloques en 1–2 col. | Tarjetas resumen 4-up; 3 bloques en grid de 3 columnas; CTA en el flujo |
| **Captura de contacto** | Campos a ancho completo, apilados; «Continuar» fijo al pie | Formulario centrado ~480 px | Formulario centrado ~480 px |
| **Agenda** | Selector de día/hora a ancho completo; 1 columna | Calendario/horarios en 2 col. | Calendario + horarios lado a lado |

**Reglas transversales:**
- En celular, los CTA primarios («Agenda tu visita guiada» / «Continuar») van fijos al pie para quedar a un toque; en desktop viven en el flujo.
- Todo lo que en desktop abre con hover, abre con tap en celular y tablet.
- Objetivos táctiles ≥ 44×44 px en celular y tablet (§9).
- Imágenes responsivas (AVIF/WebP con `srcset`) sirviendo el tamaño correcto por breakpoint para cumplir LCP en celular.
- Los Core Web Vitals se miden en celular: es el viewport que gobierna el ranking.

---

## 7. Casos límite y estados condicionales

| Condición | Disparador | Comportamiento | Mensaje |
| --- | --- | --- | --- |
| Sin clases válidas | Todas las clases contraindicadas | El Bloque 03 muestra Personal Training como alternativa | «Tu Asesor define el detalle en la visita.» |
| Queda 1 clase viable | Los filtros dejan 1 clase | Tarjeta única + Personal Training como segundo slot | «Esta clase encaja contigo; tu Asesor complementa el resto en la visita.» |
| Error de servidor / espera del modelo | 5xx o latencia alta | Render con fallback seguro + reintento | «No pudimos generar tu experiencia. Reintentar.» |
| Salida del modelo inválida | El parseo falla | Render de secciones fijas; campos generados vacíos | — (silencioso) |
| Texto muy largo | Nombre o club extensos | Ajuste de línea + recorte con elipsis en chips | — |
| Fase de carga | Siempre | Skeleton inmediato; mensaje «Estamos armando tu experiencia…» a ~5 s; reintento a ~15 s | «Esto está tomando más de lo normal. Reintentar.» |
| Error de red en captura/agenda | Falla el envío | Datos retenidos en cliente; botón «Reintentar»; tras 2 fallos, ofrece WhatsApp/BES | «No pudimos enviar tus datos. Reintentar.» |
| Sin club cerca | CP/zona sin club | Muestra otros clubes + nota de distancia | «El club más cercano está a {distancia}.» |
| Condición de salud | Q12/Q12b/Q17 | Filtro duro + mensaje de seguridad | Copy contextual (§6.17) |
| FitKidz sin nombres de clase | Estado B | Sección genérica, sin chips | «Tu Asesor te compartirá las actividades para tus hijos.» |
| Abandono del cuestionario | Cierra antes de terminar | Se registra la última pregunta vista | — (evento analítico) |

**Detalle de casos seleccionados:**

- **Geolocalización denegada o no disponible.** El sistema no insiste. El usuario aterriza en Inicio con el flujo «Tu Club ideal» abierto en captura manual (Q15 + Q16); un aviso no intrusivo ofrece ingresar la ubicación o explorar la lista de clubes.
- **Búsqueda infiere una ubicación sin club** (p. ej. «gimnasio en una ciudad sin club). El usuario aterriza en Inicio con un aviso neutro y dos alternativas: capturar su CP o explorar la lista completa. El sistema no auto-selecciona un club lejano.
- **SEPOMEX no disponible.** Q16 recurre a texto libre con validación más laxa; el sistema normaliza después del lado del servidor.
- **Errores de validación de formularios.** Inline debajo del campo, en es-MX; ningún error impide editar otros campos; al enviar con errores, la página se desplaza al primero y le da foco.
- **Abandono a medio flujo.** El estado parcial se conserva en cliente **solo** tras aceptar el aviso de privacidad (§10); al regresar, el cuestionario ofrece retomar desde la última pregunta. Sin aceptación, no se conserva nada.
- **Aviso de salud rechazado.** El usuario recibe una experiencia genérica no clínica (nombra los tres bloques sin intensidades ni contenido médico; el Asesor valida en la visita), con una explicación de que las recomendaciones personalizadas requieren aceptar el aviso. No se capturan datos adicionales.
- **BES recibe una pregunta fuera de alcance.** Redirige al hub correspondiente u ofrece «Hablar con un asesor humano». Nunca inventa.
- **API de catálogo o reservas no disponible.** Los datos vivos por club recurren al último valor cacheado, con aviso visible que pide confirmar por teléfono. «Agenda tu visita guiada» sigue operativo en modo degradado: captura el lead y contacta de vuelta dentro de un día hábil.
- **JavaScript desactivado o navegador antiguo.** El contenido renderizado en servidor es legible; el panel se vuelve una lista estática de enlaces; el cuestionario y BES muestran un aviso y dirigen a «Agenda tu visita guiada», que funciona en servidor. La URL de respaldo de BES ofrece una interfaz de chat renderizada en servidor.
- **Conexión lenta o ahorro de datos.** Los videos del hero usan imagen poster; el primer renderizado significativo es texto e imagen, no video bloqueante; la animación respeta `prefers-reduced-motion`.
- **Listas vacías de amenidades o clubes.** El estado vacío no es silencioso: ofrece (a) el club más cercano con esa amenidad sin importar la ciudad y (b) la amenidad más cercana a la ciudad del usuario.
- **Preferencia acuática sin alberca en el club.** El Bloque 01 no se suprime; el Bloque 02 se presenta en piso con la nota correspondiente y el panel de otros clubes destaca el club con alberca más cercano (§5.4). Nunca se renderiza una experiencia acuática para un club sin alberca.
- **Q12 suprime los bloques 01 y 02 a la vez.** Si el Bloque 03 sigue activo, se renderiza solo ese, con una nota que recomienda autorización médica antes de pesas o cardio. Si también está apagado, aplica el caso de los tres bloques suprimidos.
- **Cambio de club sin Bloque 03 viable.** Advertencia suave —«En este club no programamos [clases] en tus horarios. Aquí están las clases que sí encajan»— con alternativas; el usuario las acepta o vuelve al club anterior. Los bloques 01 y 02 no se reevalúan.
- **Los tres bloques suprimidos.** El sistema no renderiza una experiencia vacía: lanza un error controlado y muestra una tarjeta de traspaso a un Asesor humano que invita a agendar. Las respuestas del cuestionario se conservan y se adjuntan al lead.

---

## 8. Sistema de diseño y redacción

> **Alcance.** Esta sección define **restricciones** (tokens de marca + mínimos de accesibilidad) y remite a los **lineamientos de estilo premium**, no al diseño gráfico final. La creación de las opciones visuales (layouts a alta fidelidad, componentes, retícula, fotografía, micro-interacciones) es entregable del equipo de diseño. La fuente única de tokens, contraste y lineamientos premium es `DESIGN.md`.

**Tokens (resumen; la fuente es `DESIGN.md`):**

| Rol | Token | Valor |
| --- | --- | --- |
| Acción / marca | `color.brand.primary` | `#E6282A` |
| Texto en rojo (variante AA) | `color.brand.primaryText` | `#C81E20` |
| Tinta (texto) | `color.text.ink` | `#1D1D1B` |
| Texto secundario | `color.text.muted` | `#6B6B68` |
| Borde | `color.border.default` | `#E5E5E3` |
| Superficie | `color.surface.base` | `#F5F5F4` |
| Bloque 01 (pesas) | `color.block.strength` | `#EEF5FF` |
| Bloque 02 (cardio) | `color.block.cardio` | `#EDF8F1` |
| Bloque 03 (clases) | `color.block.classes` | `#F3F4F6` |
| Banner CTA | `color.cta.bannerBg` / `bannerBorder` | `#FFF4F4` / `#F3B9BC` |
| Seguridad | `color.safety.bg` | `#FFF6E7` |

El rojo `#E6282A` se reserva como **fondo** de la acción de conversión, con texto blanco ≥ 18.66 px en negrita; nunca como texto pequeño (no pasa AA). Para texto en rojo se usa `#C81E20`. El detalle de contraste está en `DESIGN.md`.

**Componentes reutilizados:** tarjeta de bloque, tarjeta resumen, chip/pill, banner CTA, sección de seguridad, campo con validación inline, barra de progreso.

**Reglas editoriales para todo el copy:**

- Sin signos de exclamación, ni en los CTA.
- Sin mayúsculas sostenidas de estilo marketing. Las mayúsculas solo en logotipos, siglas (BES, GLP-1) o la inicial de nombres propios.
- Sin emojis.
- Sin anglicismos cuando existe la palabra en español: membresía (no *membership*), asesor (no *coach* ni *advisor*). «Coach» solo dentro de nombres propios de clases del catálogo.
- Concordancia de género: cuando Q2 = Mujer, todo el copy dirigido a la usuaria usa formas femeninas.

La voz de marca completa, el vocabulario aprobado y prohibido, la verificación de salida y los fallbacks viven en `anexo-contenido-prompts.md`.

---

## 9. Accesibilidad (WCAG 2.2 AA)

> Estándar del proyecto: **WCAG 2.2 AA** con verificación automatizada bloqueante. Sports World opera en México; el marco aplicable es WCAG 2.2 AA más el riesgo legal local.

**Perceptible.**
- **Contraste:** cada token de texto sobre su fondo ≥ 4.5:1 (normal) / 3:1 (grande). El rojo `#E6282A` falla AA para texto normal; para texto en rojo se usa `#C81E20` (~5.5:1); el blanco sobre rojo solo pasa a ≥ 18.66 px en negrita (detalle en `DESIGN.md`).
- **No solo color:** el estado «seleccionado» usa borde + check; la sección de seguridad usa ícono «!» + texto.
- **Alt text:** toda imagen de hub/club lleva `alt` descriptivo.

**Operable.**
- Orden de tabulación lógico (progreso → opciones → Continuar) con foco visible (anillo de 2 px).
- Ningún control depende solo de gesto; la multiselección es operable por teclado (Espacio/Enter).
- Objetivos táctiles ≥ 44×44 px en móvil.
- Ninguna interacción depende solo del hover.

**Comprensible.**
- `lang="es-MX"` declarado. Mensajes de error en voz activa y específicos.
- Concordancia de género consistente.

**Robusto.**
- Cambios dinámicos anunciados con `aria-live="polite"` (confirmación de cita, errores de validación); `role="alert"` en errores de envío.
- Marcado semántico: landmarks de HTML, `<fieldset>/<legend>` por pregunta, `<label>` por campo, etiquetas ARIA en botones de solo ícono.
- `prefers-reduced-motion` respetado en todas las animaciones.

---

## 10. Privacidad y manejo de datos

El sitio captura datos personales en cuatro momentos: cuestionario, captura de contacto, reserva de visita y conversación con BES. El cumplimiento de la **LFPDPPP** (Ley Federal de Protección de Datos Personales en Posesión de los Particulares) es obligatorio.

- En cada punto de captura, el usuario ve el aviso de privacidad y da consentimiento explícito antes de almacenar cualquier dato. Los datos se almacenan en el sistema del cliente.
- **Datos de salud** (peso, estatura, condiciones médicas, medicamentos) requieren consentimiento adicional específico. **Momento de UI:** ese consentimiento se captura como checkbox obligatorio en la pantalla de Q12, **antes** de que el usuario pueda responder Q12/Q12b/Q17/Q18. El aviso de salud previo al resultado es adicional, no sustituto. Q12, Q12b y Q17 son datos sensibles: alimentan el filtro duro (§5.2) y se usan solo para excluir clases contraindicadas y preparar el brief, nunca para diagnosticar.
- **Datos de contacto** (apellido, celular, correo) se usan únicamente para coordinar la visita guiada y no se comparten con terceros, en consistencia con el aviso en pantalla. Se transfieren al CRM bajo la misma base de consentimiento que las respuestas del cuestionario.
- El consentimiento para recordatorios por WhatsApp (§6.3) se captura por separado, con opt-in explícito.
- El usuario puede solicitar la eliminación de sus datos en cualquier momento, dentro de los plazos de la regulación aplicable.

### Contenido YMYL

Se clasifican como YMYL: el hub Bajar de peso, el hub de Rehabilitación y los artículos del Diario sobre nutrición, rehabilitación y suplementación. A todas estas páginas les aplica:

- **Firma profesional visible** — nombre y cédula profesional del médico, nutriólogo o fisioterapeuta que respalda el contenido.
- **Aviso de salud** — antes de mostrar recomendaciones, el usuario ve un aviso de que la información es orientativa y no sustituye una consulta médica.
- **Sin promesas numéricas** — el sitio nunca dice «vas a bajar X kilos en Y semanas». Las recomendaciones se presentan por fases, sin prometer un resultado específico.

---

## 11. Criterios de aceptación

- [ ] Cada hub renderiza H1 con keyword, FAQ con datos estructurados, canonical y metadatos válidos.
- [ ] Core Web Vitals en verde en móvil (LCP < 2.5 s, CLS < 0.1, INP < 200 ms).
- [ ] El cuestionario avanza una pregunta por pantalla; Q11/Q12b/Q14b/Q17–Q19 aparecen solo con su condición.
- [ ] No se puede llegar a la agenda sin los tres datos de contacto válidos.
- [ ] El Bloque 03 nunca muestra una clase contraindicada según Q12/Q12b/Q17.
- [ ] Si la salida del modelo falla, la página de resultado renderiza con fallback (sin pantalla en blanco).
- [ ] Todos los textos de error son inline, en voz activa y específicos.
- [ ] El contraste de todos los pares texto/fondo cumple AA, validado por linter.
- [ ] Los cambios dinámicos se anuncian a lectores de pantalla (`aria-live`).
- [ ] `lang="es-MX"` declarado en todas las páginas.

---

## 12. Métricas y experimentación

El éxito se mide contra las tres metas: tráfico orgánico, leads cualificados y tiempo de primera respuesta.

### 12.1 KPIs

| Métrica | Punto de partida | Meta (3 meses) | Tipo |
| --- | --- | --- | --- |
| Tráfico orgánico mensual | 80,000 visitas | 160,000 (2x) | Principal |
| Leads cualificados / mes | por confirmar con analítica | 2x | Secundario |
| Tiempo de primera respuesta | por confirmar con analítica | < 1 min, 24/7 | Secundario |
| Tasa de finalización del cuestionario | por confirmar con analítica | ≥ 55% (objetivo) | Diagnóstico |
| Tasa de agenda (visita guiada) | por confirmar con analítica | ≥ 20% (objetivo) | Conversión |

Las cifras por confirmar se reemplazan con datos reales de analítica antes del lanzamiento.

### 12.2 Calificación y enrutamiento de leads

Los pesos, umbrales y reglas de calificación viven en `anexo-ingenieria-crm.md`; no definen comportamiento de interfaz.

### 12.3 Perfilado progresivo (recomendación)

El cuestionario único es un riesgo de abandono. Se instrumenta el drop-off por pregunta; si la finalización cae por debajo del umbral acordado, se divide en dos etapas: (1) mínimo viable (nombre + objetivo + zona) para dar una recomendación preliminar, y (2) el detalle antes de agendar.

### 12.4 A/B testing

No priorizado por ahora. Cuando se active, se marcan como variables el titular del hub, el copy del CTA y la imagen del hero. Estos componentes se construyen desde ya como slots intercambiables para no rehacer.

---

## 13. Handoff y sincronización

- **Fuentes de verdad:** este documento (comportamiento y racionalidad), `DESIGN.md` (tokens y lineamientos premium) y los anexos clínico, de contenido e ingeniería/CRM. El handoff visual (inspección de diseño) se enlaza antes del congelamiento de build.
- **Activos:** iconos vectoriales (SVG) exportables; logotipo de Sports World.
- **Mitigación de divergencia visual:** tokens centralizados en `DESIGN.md` y un sistema de componentes consistente entre las 49 plantillas de club y las 155 páginas.

### 13.1 Insumos pendientes antes de producción

Los provee el cliente o un tercero y bloquean el cierre a producción; ninguno se resuelve internamente.

| Tema | Insumo pendiente |
| --- | --- |
| Validación médica (bloqueante) | Un médico del deporte debe firmar la matriz de contraindicaciones y las prescripciones de `anexo-clinico.md` (contenido YMYL). |
| Disponibilidad de clases por club | Programación real de clases que hoy figuran en el catálogo sin asignación por club (incluidas las acuáticas distintas de AQUA ZUMBA); o documentarlas como «en catálogo, sin programación actual». |
| Consistencia de la matriz acuática | Resolver las inconsistencias entre la bandera de alberca por club y la programación de clases acuáticas. |
| Catálogo extendido | Decidir si se incorporan, con ficha y contraindicaciones, las actividades fuera del catálogo canónico de 51, o se excluyen. |
| FitKidz | Completar los nombres de las 34 actividades infantiles por club, en particular los 10 clubes en Estado B (§6.17). |
| Fuentes de datos de amenidades | Origen de datos de los hubs de amenidad sin fuente confirmada (sauna y vapor, regaderas y vestidores, cafetería, estacionamiento). |
| Etiquetas del Diario | Lista canónica de etiquetas editoriales para el cross-linking (§6.12). |
| Calibración del CRM | Pesos de calificación de leads validados con datos reales a 30/60/90 días (`anexo-ingenieria-crm.md`). |
| Handoff visual | Enlace de inspección de diseño antes del congelamiento de build. |

---

## Apéndice A — Glosario y referencia de códigos

**Glosario (términos clave).**

| Término | Significado |
| --- | --- |
| Agenda tu visita guiada | La acción de conversión principal del sitio (también la versión del header). |
| BES | El asistente conversacional del sitio. Nombre visible: «Pregúntale a BES — tu asistente Sports World». Widget flotante global con `/bes` como URL de respaldo. |
| Club Ideal | El club identificado como el más adecuado para el usuario (por elección explícita, inferencia de búsqueda o Q15/Q16). |
| Cédula profesional | Número de cédula profesional mexicana; visible en las páginas YMYL para el revisor (§10). |
| Diseña tu experiencia | El cuestionario de 15 preguntas base (18 con los condicionales de peso) que captura la información del usuario. |
| Experiencia Ideal | El entregable personalizado de tres bloques. El sitio nunca lo llama «plan». |
| FitKidz | El programa infantil con 34 actividades por edad y disciplina. No todos los clubes lo tienen. |
| GLP-1 | Familia de medicamentos para diabetes y pérdida de peso (Ozempic, Wegovy, Mounjaro). Información sensible. |
| Hub | Página de nivel superior que agrega contenido relacionado (membresías, FitKidz, amenidades, objetivos). |
| LFPDPPP | Ley Federal de Protección de Datos Personales en Posesión de los Particulares. |
| Mobile-first | Metodología obligatoria (§3.9): se diseña desde el viewport móvil hacia arriba. |
| SEPOMEX | Servicio postal de México; su autocompletado mapea CP → colonia, ciudad y estado. |
| YMYL | Contenido que puede afectar la salud o las finanzas del usuario (terminología de calidad de búsqueda). El hub Bajar de peso, Rehabilitación y algunos artículos del Diario son YMYL. |
| CIUDAD-UNO / CIUDAD-POCOS / CIUDAD-ZMVM | Ciudad con 1 club / 2–3 clubes / más de 3 (Zona Metropolitana del Valle de México, 32 clubes). |

**Referencia de códigos.**

- **Tipos de página:** 1 a 12 (§3.1). BES es un widget global.
- **Preguntas:** Q1 (nombre), Q2 (género), Q3 (emoción), Q4 (objetivo, multiselección máx. 2), Q5 (ritmo), Q6 (entorno), Q7 (horario), Q8 (días), Q9 (nivel), Q10 (historial de gimnasio), Q11 (duración de la pausa), Q12 (condición médica), Q12b (embarazo/posparto), Q13 (acompañamiento propio), Q14 (acompañamiento en la visita), Q14b (hijos menores de 12), Q15 (intención geográfica), Q16 (ubicación, OR de CP/colonia), Q17 (tratamiento de peso), Q18 (datos físicos), Q19 (objetivo de cambio).
- **Banderas de bloque:** `block_1_on`, `block_2_on`, `block_3_on` (booleanas, §5.6).
- **Claves de contraindicación:** `l` (lesión), `c` (cardiovascular), `e` (embarazo), `p` (posparto), `b` (bariátrica), desde Q12/Q12b/Q17 (§5.2).
- **Identificadores de subgrupo individual:** `pesas-fuerza`, `pesas-hipertrofia`, `pesas-potencia`, `pesas-resistencia-muscular`; `aero-liss`, `aero-mict`, `aero-hiit`, `aero-sit` (§3.3).
- **Slots de tarjeta de clase:** `top_2`, `tambien_encajan`, `resto`, más los slots por tarjeta generados por el modelo (beneficios, razón de coincidencia, conector personal).
- **Campos de captura de contacto:** apellido, celular (10 dígitos), correo (§6.18).
- **Fases del flujo:** `welcome`, `questionnaire`, `loading`, `result`, `contact_capture`, `schedule`, `briefing`, `error`.
- **Principio de inmutabilidad:** ningún código se reasigna; los eliminados se retiran de forma permanente.

---

## Apéndice B — Páginas fuera de alcance

Las siguientes páginas no existen en el sitio y están explícitamente fuera de alcance:

- **Centro de ayuda con artículos de soporte.** Las FAQs operativas (cancelar, congelar, cambiar de club) las maneja BES; los artículos de ejercicio o nutrición viven en el Diario.
- **Una página por actividad de FitKidz.** Las 34 actividades viven dentro del hub, organizadas por edad, disciplina y disponibilidad por club.
- **Una página por entrenador.** Personal Training tiene una sola página, sin perfiles individuales.
- **Estudios boutique como entidad separada.** No existen como submarca en el sitio.
- **Checkout de membresías en línea.** El sitio no vende membresías de forma transaccional; la conversión es vía «Agenda tu visita guiada» (§6.13).

---

## Apéndice C — Esquema JSON de la llamada única al modelo

Una sola llamada se dispara al completar el cuestionario y devuelve **tanto** el copy del cliente **como** el contenido del brief del Asesor. La misma llamada rellena todas las claves. Los parámetros del modelo viven en `anexo-ingenieria-crm.md`; las prohibiciones y la verificación, en `anexo-contenido-prompts.md`.

```json
{
  "hook": "máx 30 palabras, 1-2 frases, conecta con Q3",
  "plan_argument": "máx 45 palabras, por qué la combinación encaja, cierra en personalización (sin la palabra 'plan' en texto visible)",
  "intent_line": "máx 18 palabras, combina Q13 y Q14",
  "infrastructure_argument": "máx 55 palabras, red de 49 clubes + club específico",
  "class_1_connector": "máx 15 palabras, empieza con 'Porque mencionaste que' — se omite si no hay clases",
  "class_2_connector": "máx 15 palabras, distinto del 1 — se omite si no hay clases",
  "validation_questions": ["exactamente 5 cadenas, máx 18 palabras c/u"],
  "visit_route": [{"title": "string", "description": "máx 18 palabras"}, "... (exactamente 4 objetos)"],
  "proposal": {"main": "máx 35 palabras", "complement": "máx 30 palabras"},
  "closing_priorities": ["exactamente 3 cadenas, máx 12 palabras c/u"],
  "closing_script": "máx 60 palabras, primera persona del Asesor al lead"
}
```

**Contexto adaptativo.** Antes de componer el prompt, el backend construye banderas a partir de las respuestas (condición médica, embarazo, posparto, GLP-1, bariátrica, familia, hijos, individual, principiante, viene de otro gimnasio, regreso de pausa, preferencia acuática). Cuando hay condición médica, el prompt agrega un bloque que enumera las condiciones declaradas, con el recordatorio explícito de que las clases contraindicadas ya están filtradas y de que el Asesor ajusta el protocolo individual con criterio clínico.

**Saneamiento y fallback.** Tras parsear, un saneamiento recursivo elimina cualquier código `Qn` filtrado; si el JSON es inválido u omite claves, la página de resultado y el brief renderizan con fallbacks seguros (§5.7). La página de cara al usuario siempre renderiza sus secciones fijas sin fallar.

---

## Apéndice D — Brief del Asesor

El brief se renderiza tras confirmar la cita (fase `briefing`). Sigue una arquitectura fija de **10 secciones**; cinco las genera la misma llamada al modelo (§5.7) y el resto se compone a partir de las respuestas, el club resuelto y la cita.

| Sección | Contenido | Origen |
| --- | --- | --- |
| Banner del cliente | «Visita confirmada» + «{Nombre}, te esperamos en {club}» + día · hora · dirección | Compuesto |
| Encabezado del brief | «Brief de visita guiada · confidencial» + «{Nombre completo} · Nivel {Q9}» + chips (Q2, visita con hijos, preferencia de entorno) + fecha | Compuesto |
| §1 Perfil del lead | Objetivo (Q4) · Motivación (Q3) · Experiencia deseada (Q6 + Q13) · Disponibilidad (Q8 + Q7) · Historial (Q10 + Q11) · Ritmo (Q5) · Formato (Q13) · Salud (Q12 + Q12b + Q17). Nota: «Validar nivel e intensidad antes de recomendar una actividad». | Compuesto |
| §2 Logística de la cita | Club + ubicación (distancia) + acompañantes | Compuesto |
| §3 Qué validar | 5 preguntas | Generado por el modelo |
| §4 Ruta recomendada | 4 pasos (título + 1 línea) | Generado por el modelo |
| §5 Propuesta | Oferta principal + complemento | Generado por el modelo |
| §6 Prioridades de cierre | 3 viñetas | Generado por el modelo |
| §7 Notas y banderas | Lista de banderas + línea «Experiencia ideal calculada» | Compuesto |
| Guion de cierre | Primera persona del Asesor | Generado por el modelo |
| Registro del Asesor / pie | Campos para que el Asesor complete + «Uso interno · Datos declarados por el lead; validar antes de formular recomendaciones» | Compuesto |

**Banderas (lógica):**

| Bandera | Disparador | Severidad | Copy |
| --- | --- | --- | --- |
| Familia con hijos | Q14 con hijos y Q14b = Sí | aviso | Familia con hijos menores de 12 → ofrecer demostración de FitKidz en la visita. |
| Principiante | Q9 = Principiante | aviso | Nivel principiante. Tour del club antes de cualquier sesión. |
| Pausa | Q10 = Regreso después de una pausa | aviso | Reactivación tras pausa. Recomendar primera sesión conservadora. |
| Embarazo | Q12b = Sí, embarazo | aviso | Embarazada. Clases con impacto ya filtradas. Validar trimestre y autorización médica. |
| Posparto | Q12b = Sí, posparto reciente | aviso | Posparto reciente. Clases con impacto ya filtradas. Validar evolución con criterio clínico. |
| Bariátrica | Q17 = Cirugía bariátrica | aviso | Cirugía bariátrica. Clases de alto impacto y carga pesada ya filtradas. Validar tiempo post-operatorio. |
| GLP-1 | Q17 = GLP-1 | info | En tratamiento GLP-1. Priorizar fuerza para preservar masa muscular. |
| Condiciones específicas | Q12 con condiciones | aviso | Condiciones declaradas: {lista}. Validar autorización médica si aplica. |
| Nota de alberca | El motor devolvió la nota de no-alberca | aviso | El texto de la nota. |
| Formato individual | Q13 = Solo/Sola, a mi ritmo | info | Lead busca formato individual. No presionar venta de pack de clases grupales. |
| Experiencia calculada | siempre | info | Experiencia ideal: Bloque 01 — {subgrupo} · Bloque 02 — {máquina, duración} · Bloque 03 — {top 2 o Personal Training}. |

La severidad gobierna el estilo: «aviso» en rojo, «info» en gris. El copy de los campos generados sigue la voz de marca y los fallbacks de `anexo-contenido-prompts.md`.

---

Este documento es la única fuente de verdad del comportamiento del sitio público de Sports World. Está escrito para diseño, ingeniería, contenido/SEO y los responsables de aprobación del cliente. Si un comportamiento no está descrito aquí, no forma parte del alcance aprobado.
