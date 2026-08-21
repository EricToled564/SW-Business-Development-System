# Rediseño web — resumen por tipo de página

Contenido mínimo de cada tipo de página e imágenes que lleva.

## Inventario

| # | Tipo de página | Cantidad | URL |
|---|---|---|---|
| 1 | Home | 1 | `/` |
| 2 | Club | 49 | `/clubes/[club]/` |
| 3 | Hub de amenidad | 10 | `/amenidades/[amenidad]/` |
| 4 | Clase premium | 7 | `/clases/signature/[clase]/` |
| 5 | Clase individual | 47 | `/clases/[clase]/` |
| 6 | Hub FitKidz | 1 | `/fitkidz/` |
| 7 | Hub de perfil de usuario | 5 | `/perfiles/[perfil]/` |
| 8 | Hub bajar de peso (YMYL) | 1 | `/bajar-de-peso/` |
| 9 | Hub personal training | 1 | `/personal-training/` |
| 10 | Membresías | 6 | `/membresias/` y `/membresias/[plan]/` |
| 11 | Blog SEO | 20 | `/blog/[articulo]/` |

---

## Elementos globales — presentes en las 148 páginas

**Header fijo**, anclado arriba en todas las páginas, con cinco elementos de izquierda a derecha:

1. **Logo de Sports World** — regresa a la página de inicio.
2. **«Tu Sports World»** — abre el panel lateral de navegación.
3. **«Diseña tu experiencia»** — abre el cuestionario.
4. **«Pregúntale a BES»** — abre el widget del asistente.
5. **«Agenda tu visita»** — botón rojo, la única acción de conversión.

Los elementos 2, 3 y 4 son **tres rutas paralelas** por el sitio, con la misma jerarquía: el usuario elige la que prefiera. El 5 recibe tratamiento visual distinto y **nunca se reduce a ícono**, en ningún ancho de pantalla.

**En móvil** (menos de 1024 px) el header se parte en dos filas: fila 1 con el logo y «Agenda tu visita»; fila 2 con las tres rutas. Por debajo de 480 px, las tres rutas quedan como íconos con `aria-label`.

**Panel lateral «Tu Sports World»** — el único punto de navegación estructural del sitio. Reúne los **8 hubs principales**:

Clubes · Clases · Amenidades · Perfiles · Bajar de peso · FitKidz · Membresías · Diario

Mide 560 px en desktop y es pantalla completa en móvil. Incluye pie con redes sociales y aviso de privacidad. Los tres elementos de acción del header **no se duplican** dentro del panel: cada pieza de navegación vive en un solo lugar.

**Widget de BES** — botón flotante en la esquina inferior derecha de todas las páginas, que abre un panel de chat sobre la página actual (no navega a otra URL). Por defecto opera en texto, con un toggle a voz. Al abrirse conoce el tipo de página y sus identificadores, para responder sin que el usuario repita el contexto. Tiene URL de respaldo renderizada en servidor para usuarios sin JavaScript e indexadores.

---

## Menú contextual (dinámico) — aplica a todas las páginas

Los botones de acción dentro del cuerpo de cada página no son fijos: cambian según **tres ejes** — el estado del cuestionario, el tipo de página y el club resuelto.

**Estado del cuestionario:**

| Estado | Botones del menú contextual |
|---|---|
| **Sin cuestionario** | «Tu Club ideal» (si hay más de 3 clubes en la ciudad o ubicación inferida) · «Diseña tu experiencia» · «Agenda tu visita guiada» · «Artículos o información útil» (si hay artículos etiquetados) · botones propios de la página |
| **Completo, dentro del flujo** (llegó desde su resultado) | Botones propios de la página. No se ofrece «Diseña tu experiencia» ni se duplica «Volver a tu experiencia ideal» |
| **Completo, fuera del flujo** (llegó por búsqueda o navegación) | «Volver a tu experiencia ideal» · «Artículos o información útil» (si hay) · botones propios de la página |

**Reglas transversales:**
- **«Agenda tu visita guiada» aparece siempre**, en toda página y todo estado. Es la acción de conversión.
- **«Tu Club ideal»** aparece cuando la página **no** es de club y el usuario no está dentro de su flujo. Al presionarlo, el sistema pide Q15 y Q16 (o las presenta pre-llenadas si hay ubicación inferida).
- **«Otros clubes…»** solo aparece en páginas de club, y depende del tamaño de la ciudad: **CIUDAD-UNO** (1 club) no muestra botón · **CIUDAD-POCOS** (2–3) muestra «Otros clubes en tu ciudad» · **CIUDAD-ZMVM** (más de 3) muestra «Otros clubes en el área», con clubes en radio de 10 km o cerca de otra ubicación.
- **«Diseña tu experiencia»** aparece mientras el cuestionario esté incompleto; al completarlo lo **reemplaza** «Volver a tu experiencia ideal».
- **«Artículos o información útil»** aparece solo si existe al menos un artículo del blog con etiqueta que coincida con esa página.
- En el **header** están siempre «Agenda tu visita guiada» y «Pregúntale a BES»; no se duplican en el cuerpo.

---

## 1 · Home — 1 página

**Contenido mínimo:** propuesta de valor de la red; buscador/acceso a clubes; enlaces a los hubs principales; cuestionario completo de 15 preguntas base (18 en el path de bajar de peso).

**Menú contextual:** «Diseña tu experiencia» · «Agenda tu visita guiada». Con ubicación inferida se suma «Tu Club ideal». Con cuestionario completo: «Volver a tu experiencia ideal» · «Agenda tu visita guiada».

**Imágenes:** 0 del banco fotográfico — se cubre con generación por IA y diseño editorial.

## 2 · Página de club — 49 páginas

**Contenido mínimo:**
- Nombre comercial y **dirección completa**
- **Horarios de atención por día de la semana** (dato vivo del CRM)
- **Teléfono y correo** del club
- **Amenidades** que ofrece ese club
- **Catálogo de clases del club**: cuáles de las 51 clases para adultos y cuáles actividades FitKidz se imparten ahí
- **Horario de clases por clase y por día, con visibilidad de la semana siguiente** (dato vivo del CRM)
- Coordenadas / ubicación en mapa y estado operativo (abierto / temporalmente cerrado / próximamente)
- Enlaces a otros clubes del área, a las clases y a las amenidades del club
- Cuestionario con el club ya identificado (13 preguntas; Q15 y Q16 se omiten)
- Schema `HealthClub` + `LocalBusiness`

**Menú contextual:** «Diseña tu experiencia» · «Agenda tu visita guiada». **No** aparece «Tu Club ideal» (el usuario ya está en un club); en su lugar aparece **«Otros clubes…»** según el tamaño de la ciudad. Con cuestionario completo y más de 3 clubes en la ciudad: «Volver a tu experiencia ideal» · «Otros clubes en el área» · «Agenda tu visita guiada».

**Imágenes: 6–8 por club** (294–392 en total) — fachada, recepción y las amenidades específicas del club (alberca, salas, muro de escalar, cancha, pádel, ring de box).

## 3 · Hub de amenidad — 10 páginas

**Contenido mínimo:** descripción de la amenidad; **listado de los clubes que la ofrecen** con enlace a cada uno; enlaces a clases relacionadas.

**Menú contextual:** «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Imágenes: 2 por hub** (20 en total) — el mejor ejemplo disponible de esa amenidad.

## 4 · Clase premium — 7 páginas

**Contenido mínimo:** descripción de la clase con tratamiento editorial; beneficios; nivel e intensidad; **clubes que la imparten con sus horarios reales**; pre-marcado del objetivo Q4 alineado a la clase; schema `Course`.

**Menú contextual:** «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada». Con club ya seleccionado, «Tu Club ideal» no aparece.

**Imágenes: 5–6 por clase** (35–42 en total) — hero editorial + acción + equipamiento.

## 5 · Clase individual — 47 páginas

44 clases grupales + 3 modalidades de entrenamiento individual (`/clases/pesas-individual/`, `/clases/aerobico-individual/`, `/clases/acuaticos-individual/`).

**Contenido mínimo:** descripción de la clase; beneficios; nivel e intensidad; **clubes que la imparten con sus horarios reales**; pre-marcado del objetivo Q4; schema `Course`. En las tres modalidades individuales, además: pre-marcado de Q13 = «Solo, a mi ritmo» y el subgrupo de entrenamiento que corresponde al objetivo Q4.

**Menú contextual:** igual que la clase premium. En las modalidades individuales, donde normalmente iría «Clases recomendadas» aparece **«Tu rutina individual»**.

**Imágenes: 2 por clase** (94 en total) — 1 de acción + 1 de ambiente/equipamiento.

## 6 · Hub FitKidz — 1 página

**Contenido mínimo:** las **34 actividades infantiles** organizadas por rango de edad, tipo de disciplina y disponibilidad por club (no tienen página propia); pre-llenado de Q14 = «Yo y mis hijos».

**Menú contextual:** además de los botones generales, dos propios de la página:
- **«Clases FitKidz disponibles»** — aparece solo cuando el usuario tiene club identificado, y muestra las clases FitKidz de ese club con sus horarios. Sin club identificado no aparece, porque cada club ofrece un subconjunto distinto de las 34 actividades.
- **Clubes propuestos** (hasta 3, según las reglas geográficas), cada uno con tres acciones: «Ver el club» · «Agenda tu visita guiada» · «Clases FitKidz disponibles para tu familia».

**Imágenes: 34–40** — recepción, espacio general y cada una de las clases infantiles.

## 7 · Hub de perfil de usuario — 5 páginas

Primeros pasos · Salud y bienestar · Estética corporal · Ganar fuerza · Rehabilitación.

**Contenido mínimo:** H1 con la keyword principal; 600–900 palabras de contenido útil; FAQ con schema `FAQPage`; enlaces internos a clubes y clases relacionadas; Q4 pre-marcado según el perfil.

**Menú contextual:** «Artículos o información útil» (si hay artículos etiquetados) · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Imágenes: 4 por hub** (20 en total) — ilustrativas del objetivo del perfil.

## 8 · Hub bajar de peso (YMYL) — 1 página

**Contenido mínimo:** todo lo del hub de perfil, más: **firma del médico designado por Sports World con cédula vigente visible**; aviso de salud (modal YMYL antes del resultado); activación de las preguntas condicionales Q17–Q19 (el cuestionario siempre son 18 preguntas); **slot para el video institucional de 45–60 s** (carga diferida, sin autoplay con audio).

**Menú contextual:** «Artículos o información útil» **siempre aparece** — esta página siempre tiene artículos etiquetados «bajar-de-peso» · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Imágenes: 10–12** — principales clases y ejercicios recomendados para perder peso, cafeterías, ambiente saludable. Más 1 video institucional.

## 9 · Hub personal training — 1 página

**Contenido mínimo:** descripción del servicio; modalidades de entrenamiento individual; conexión con los cinco perfiles de usuario; clubes que lo ofrecen; pre-marcado de Q13 = Acompañado/Acompañada.

**Menú contextual:** «Artículos o información útil» (si hay) · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Imágenes: 5–6** — principales áreas de personal training.

## 10 · Membresías — 6 páginas

1 hub + 5 páginas por criterio de decisión.

**Contenido mínimo por plan:** descripción; **qué incluye y qué no incluye**; **precio** (extraído automáticamente del CRM, no editable en el CMS); letra chica; comparativo entre planes; promociones vigentes. **Sin checkout en línea**.

**Menú contextual:** «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada» — la conversión pasa por agendar la visita, no por el sitio. El aterrizaje en membresías no permite inferir variables del cuestionario.

**Imágenes: 0** — diseño tipográfico editorial.

## 11 · Blog SEO — 20 páginas

**Contenido mínimo:** artículo optimizado con contenido único; **etiquetas temáticas** (minúsculas con guiones) que lo asocian a clases, hubs y clubes y alimentan el botón «Artículos o información útil» de esas páginas; enlaces internos; schema donde aplique.

**Menú contextual:** «Diseña tu experiencia» · «Agenda tu visita guiada». El aterrizaje en un artículo no permite inferir variables del cuestionario.

**Imágenes: 0 del banco** — diseño tipográfico editorial.
