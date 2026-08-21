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

## 1 · Home — 1 página

**Contenido mínimo:** propuesta de valor de la red; acceso al cuestionario («Diseña tu experiencia»); «Agenda tu visita guiada»; buscador/acceso a clubes; enlaces a hubs de amenidad, perfil y membresías; widget de BES.

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

**Imágenes: 6–8 por club** (294–392 en total) — fachada, recepción y las amenidades específicas del club (alberca, salas, muro de escalar, cancha, pádel, ring de box).

## 3 · Hub de amenidad — 10 páginas

**Contenido mínimo:** descripción de la amenidad; **listado de los clubes que la ofrecen** con enlace a cada uno; enlaces a clases relacionadas; CTA al cuestionario.

**Imágenes: 2 por hub** (20 en total) — el mejor ejemplo disponible de esa amenidad.

## 4 · Clase premium — 7 páginas

**Contenido mínimo:** descripción de la clase con tratamiento editorial; beneficios; nivel e intensidad; **clubes que la imparten con sus horarios reales**; pre-marcado del objetivo Q4 alineado a la clase; schema `Course`.

**Imágenes: 5–6 por clase** (35–42 en total) — hero editorial + acción + equipamiento.

## 5 · Clase individual — 47 páginas

44 clases grupales + 3 modalidades de entrenamiento individual (`/clases/pesas-individual/`, `/clases/aerobico-individual/`, `/clases/acuaticos-individual/`).

**Contenido mínimo:** descripción de la clase; beneficios; nivel e intensidad; **clubes que la imparten con sus horarios reales**; pre-marcado del objetivo Q4; schema `Course`. En las tres modalidades individuales, además: pre-marcado de Q13 = «Solo, a mi ritmo» y el subgrupo de entrenamiento que corresponde al objetivo Q4.

**Imágenes: 2 por clase** (94 en total) — 1 de acción + 1 de ambiente/equipamiento.

## 6 · Hub FitKidz — 1 página

**Contenido mínimo:** las **34 actividades infantiles** organizadas por rango de edad, tipo de disciplina y disponibilidad por club (no tienen página propia); clubes propuestos con sus tres acciones (ver el club, agendar visita, ver clases FitKidz del club); botón «Clases FitKidz disponibles» con horarios cuando hay club identificado; pre-llenado de Q14 = «Yo y mis hijos».

**Imágenes: 34–40** — recepción, espacio general y cada una de las clases infantiles.

## 7 · Hub de perfil de usuario — 5 páginas

Primeros pasos · Salud y bienestar · Estética corporal · Ganar fuerza · Rehabilitación.

**Contenido mínimo:** H1 con la keyword principal; 600–900 palabras de contenido útil; FAQ con schema `FAQPage`; enlaces internos a clubes y clases relacionadas; artículos del blog relacionados; CTA «Diseña tu experiencia» con Q4 pre-marcado según el perfil.

**Imágenes: 4 por hub** (20 en total) — ilustrativas del objetivo del perfil.

## 8 · Hub bajar de peso (YMYL) — 1 página

**Contenido mínimo:** todo lo del hub de perfil, más: **firma del médico designado por Sports World con cédula vigente visible**; aviso de salud (modal YMYL antes del resultado); artículos del blog etiquetados; activación de las preguntas condicionales Q17–Q19; **slot para el video institucional de 45–60 s** (carga diferida, sin autoplay con audio).

**Imágenes: 10–12** — principales clases y ejercicios recomendados para perder peso, cafeterías, ambiente saludable. Más 1 video institucional.

## 9 · Hub personal training — 1 página

**Contenido mínimo:** descripción del servicio; modalidades de entrenamiento individual; conexión con los cinco perfiles de usuario; clubes que lo ofrecen; pre-marcado de Q13 = Acompañado/Acompañada; CTA al cuestionario.

**Imágenes: 5–6** — principales áreas de personal training.

## 10 · Membresías — 6 páginas

1 hub + 5 páginas por criterio de decisión.

**Contenido mínimo por plan:** descripción; **qué incluye y qué no incluye**; **precio** (extraído automáticamente del CRM, no editable en el CMS); letra chica; comparativo entre planes; promociones vigentes. **Sin checkout en línea**: la conversión es «Agenda tu visita guiada».

**Imágenes: 0** — diseño tipográfico editorial.

## 11 · Blog SEO — 20 páginas

**Contenido mínimo:** artículo optimizado con contenido único; etiquetas temáticas que enlazan con clases, hubs y clubes; enlaces internos; CTA al cuestionario; schema donde aplique.

**Imágenes: 0 del banco** — diseño tipográfico editorial.

---

## Totales de imágenes del banco fotográfico

| Componente | Páginas | Fotos por página | Subtotal |
|---|---|---|---|
| Home | 1 | 0 | 0 |
| Páginas de club | 49 | 6–8 | 294–392 |
| Hubs de amenidades | 10 | 2 | 20 |
| Clases premium | 7 | 5–6 | 35–42 |
| Clases individuales | 47 | 2 | 94 |
| Hub FitKidz | 1 | 34–40 | 34–40 |
| Hubs de perfil de usuario | 5 | 4 | 20 |
| Hub bajar de peso (YMYL) | 1 | 10–12 | 10–12 |
| Hub personal training | 1 | 5–6 | 5–6 |
| Páginas de membresía | 6 | 0 | 0 |
| Blog SEO | 20 | 0 | 0 |
| **Total** | | | **512–626** |

Donde el banco no cubra una página, se completa con generación por IA.

El banco pedido a Marketing cubre 44 clases individuales (88 fotos); las 3 modalidades de entrenamiento individual suman 6 fotos más.
