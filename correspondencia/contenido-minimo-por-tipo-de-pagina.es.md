# Contenido mínimo por tipo de página

### Rediseño del sitio sportsworld.com.mx

**DOCUMENTO MAESTRO DE ESPECIFICACIÓN DE CONTENIDO**

Versión 1.0

Alcance: 148 páginas agrupadas en 11 tipos

Destinatarios: equipos de contenido, diseño y desarrollo

*Documento elaborado a partir del archivo fuente proporcionado para el proyecto.*

# Contenido mínimo por tipo de página

## Rediseño del sitio sportsworld.com.mx

| Documento | Contenido mínimo por tipo de página |
|---|---|
| Proyecto | Rediseño del sitio sportsworld.com.mx |
| Versión | 1.0 |
| Alcance | Las 148 páginas del sitio, agrupadas en once tipos |
| Destinatario | Equipos de contenido, diseño y desarrollo |

## Control de versiones

| Versión | Cambio |
|---|---|
| 1.0 | Documento inicial |

## Fuentes

| Dato | Fuente |
|---|---|
| Inventario de 148 páginas en once tipos | Contrato, Anexo Dos I.1 |
| Contenido, botones y elementos comunes | UX Spec Experiencia Ideal v5.0, junio 2026 |
| Número de imágenes por tipo de página | SW Marketing Readiness Brief, Bloque B, abril 2026 |

# Índice

|  | Sección |
|---|---|
| 1 | Este documento fija qué contenido lleva cada página antes de producirla |
| 2 | Once tipos de página resuelven las 148 del sitio |
| 3 | Tres elementos aparecen en todas las páginas y no se especifican por tipo |
| 3.1 | Encabezado |
| 3.2 | Panel «Tu Sports World» |
| 3.3 | Asistente BES |
| 4 | El avance del cuestionario decide qué botones ve el usuario |
| 4.1 | Botones según el estado del cuestionario |
| 4.2 | Reglas de aparición |
| 5 | Cada tipo de página exige un contenido mínimo distinto |
| 5.1 | Inicio |
| 5.2 | Club |
| 5.3 | Hub de amenidad |
| 5.4 | Clase premium |
| 5.5 | Clase individual |
| 5.6 | Hub FitKidz |
| 5.7 | Hub de perfil |
| 5.8 | Hub de bajar de peso |
| 5.9 | Hub de entrenamiento personal |
| 5.10 | Membresías |
| 5.11 | Blog |

<!--PAGEBREAK-->
# Resumen ejecutivo

**Situación.** El sitio se reconstruye completo: 148 páginas agrupadas en once tipos.

**Complicación.** La producción no puede arrancar sin dos definiciones: qué contenido lleva cada tipo de página y cuántas fotografías hay que pedirle a Sports World.

**Resolución.** Este documento fija ambas, tipo por tipo. Tres puntos concentran la decisión:

- Las páginas de club concentran cerca de seis de cada diez fotografías del proyecto. Son 49 páginas que piden entre seis y ocho imágenes cada una, sobre un total de entre 522 y 636 para todo el sitio.
- Tres elementos aparecen en las 148 páginas y no se especifican por tipo: el encabezado, el panel «Tu Sports World» y el asistente BES.
- Los botones del cuerpo de la página no son fijos. Cambian según el avance del cuestionario, el tipo de página y el club identificado.

---

# 1 · Este documento fija qué contenido lleva cada página antes de producirla

Responde tres preguntas por cada tipo de página:

1. ¿Qué contenido lleva como mínimo?
2. ¿Qué botones muestra?
3. ¿Cuántas imágenes requiere?

No cubre el diseño visual, la arquitectura técnica ni el calendario de producción.

---

# 2 · Once tipos de página resuelven las 148 del sitio

<!--CAPTION:Exhibit 1 · Clubes, clases individuales y FitKidz concentran el grueso del material fotográfico-->
| Tipo de página | Páginas | Dirección | Imágenes |
|---|---|---|---|
| Inicio | 1 | / | 10 |
| Club | 49 | /clubes/[club]/ | 294–392 |
| Hub de amenidad | 10 | /amenidades/[amenidad]/ | 20 |
| Clase premium | 7 | /clases/signature/[clase]/ | 35–42 |
| Clase individual | 47 | /clases/[clase]/ | 94 |
| Hub FitKidz | 1 | /fitkidz/ | 34–40 |
| Hub de perfil | 5 | /perfiles/[perfil]/ | 20 |
| Hub de bajar de peso | 1 | /bajar-de-peso/ | 10–12 |
| Hub de entrenamiento personal | 1 | /personal-training/ | 5–6 |
| Membresías | 6 | /membresias/ | Ninguna |
| Blog | 20 | /blog/[articulo]/ | Ninguna |
| Total | 148 |  | 522–636 |

*Fuente: inventario de páginas del Contrato, Anexo Dos I.1; desglose de imágenes del SW Marketing Readiness Brief, Bloque B, abril 2026. El brief cubre 44 clases individuales; las tres modalidades de entrenamiento individual suman seis imágenes más.*

---

# 3 · Tres elementos aparecen en todas las páginas y no se especifican por tipo

## 3.1 Encabezado

El encabezado acompaña al usuario en todas las páginas y lleva cinco elementos.

<!--CAPTION:Exhibit 2 · El encabezado ofrece tres rutas paralelas y una sola acción de conversión-->
| Elemento | Qué hace |
|---|---|
| Logotipo | Regresa al inicio |
| Tu Sports World | Abre el panel de navegación |
| Diseña tu experiencia | Abre el cuestionario |
| Pregúntale a BES | Abre el asistente |
| Agenda tu visita | Lleva al agendado |

*Fuente: UX Spec Experiencia Ideal v5.0, §5.1.*

Los tres elementos de en medio son rutas paralelas: el usuario elige la que prefiera y ninguna tiene prioridad sobre las otras.

«Agenda tu visita» es la acción de conversión del sitio y siempre está disponible, sin importar el dispositivo.

## 3.2 Panel «Tu Sports World»

Es el único punto de navegación estructural del sitio. Agrupa los ocho hubs:

Clubes · Clases · Amenidades · Perfiles · Bajar de peso · FitKidz · Membresías · Blog

Lleva un pie con redes sociales y aviso de privacidad.

Los tres botones de acción del encabezado no aparecen dentro del panel. Cada elemento de navegación vive en un solo lugar.

## 3.3 Asistente BES

BES está disponible en todas las páginas. Al abrirlo, el usuario conversa sin salir de la página en la que está.

Arranca en modo texto y tiene un conmutador a voz. Reconoce en qué página está el usuario, así que responde sin que el usuario repita el contexto.

---

# 4 · El avance del cuestionario decide qué botones ve el usuario

Tres factores determinan los botones del cuerpo de la página: el avance del cuestionario, el tipo de página y el club identificado.

## 4.1 Botones según el estado del cuestionario

<!--CAPTION:Exhibit 3 · Contestar el cuestionario sustituye el botón de entrada por el de regreso-->
| Estado del usuario | Botones |
|---|---|
| No ha contestado el cuestionario | «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada» · «Artículos o información útil» · botones propios de la página |
| Ya lo contestó y navega dentro de su experiencia | Solo los botones propios de la página |
| Ya lo contestó pero llegó por otra vía | «Volver a tu experiencia ideal» · «Artículos o información útil» · botones propios de la página |

*Fuente: UX Spec Experiencia Ideal v5.0, §5.4.*

## 4.2 Reglas de aparición

«Agenda tu visita guiada» aparece siempre. En toda página y en todo estado. Es la acción de conversión del sitio.

«Tu Club ideal» aparece cuando la página no es de club. Al tocarlo, el sitio pregunta la zona; si ya la infirió de la búsqueda, la muestra prellenada.

«Otros clubes…» aparece solo en páginas de club. Su texto depende de cuántos clubes hay en la ciudad.

<!--CAPTION:Exhibit 4 · La densidad de clubes en la ciudad decide qué ofrece el botón-->
| Clubes en la ciudad | Texto del botón | Qué muestra |
|---|---|---|
| Uno | No aparece | — |
| Dos o tres | «Otros clubes en tu ciudad» | Los otros clubes de la ciudad |
| Más de tres | «Otros clubes en el área» | Clubes a 10 km, o cerca de otra zona que indique el usuario |

*Fuente: UX Spec Experiencia Ideal v5.0, §5.4.*

«Diseña tu experiencia» dura hasta que el usuario contesta el cuestionario. Después lo sustituye «Volver a tu experiencia ideal».

«Artículos o información útil» aparece si hay artículos del blog etiquetados para esa página. Si no los hay, el botón no aparece.

---

# 5 · Cada tipo de página exige un contenido mínimo distinto

## 5.1 Inicio

1 página · /

Contenido mínimo

- Propuesta de valor de la red
- Buscador de clubes
- Enlaces a los ocho hubs
- Acceso al cuestionario

Menú contextual. «Diseña tu experiencia» · «Agenda tu visita guiada». Si el sitio infirió la zona del usuario, agrega «Tu Club ideal».

Imágenes: 10, más 1 video.

---

## 5.2 Club

49 páginas · /clubes/[club]/

Concentra cerca de seis de cada diez fotografías del proyecto.

Contenido mínimo

- Nombre y dirección completa
- Horarios de atención, día por día
- Teléfono y correo del club
- Amenidades del club
- Clases que se imparten ahí: cuáles de las 51 para adultos y cuáles de las 34 infantiles
- Horarios de cada clase, día por día, con la semana siguiente a la vista
- Ubicación en mapa
- Estado del club: abierto, cerrado temporalmente o próxima apertura
- Enlaces a los otros clubes del área

El CRM entrega los horarios de atención, los datos de contacto, el catálogo de clases y sus horarios. Si el CRM no responde, la página muestra el último dato guardado y avisa al usuario que confirme por teléfono.

Menú contextual. «Diseña tu experiencia» · «Agenda tu visita guiada» · «Otros clubes…». No lleva «Tu Club ideal»: el usuario ya está en un club.

Imágenes: 6 a 8 por club. Fachada, recepción y las amenidades propias del club: alberca, salas, muro de escalar, cancha, pádel o ring de box.

---

## 5.3 Hub de amenidad

10 páginas · /amenidades/[amenidad]/

Convierte una búsqueda de amenidad en una lista de clubes.

Contenido mínimo

- Descripción de la amenidad
- Lista de los clubes que la tienen, con enlace a cada uno
- Enlaces a las clases relacionadas

Menú contextual. «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

Imágenes: 2 por hub. El mejor ejemplo disponible de esa amenidad.

---

## 5.4 Clase premium

7 páginas · /clases/signature/[clase]/

Sports World elige cuáles son las siete.

Contenido mínimo

- Descripción de la clase, con tratamiento editorial
- Beneficios
- Nivel e intensidad
- Clubes donde se imparte, con sus horarios reales

Menú contextual. «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

Imágenes: 5 a 6 por clase. Una imagen principal editorial, tomas de acción y equipamiento.

---

## 5.5 Clase individual

47 páginas · /clases/[clase]/

Suma 44 clases grupales y tres modalidades de entrenamiento individual: pesas, aeróbico y acuático.

Contenido mínimo

- Descripción de la clase
- Beneficios
- Nivel e intensidad
- Clubes donde se imparte, con sus horarios reales

Menú contextual. El mismo de la clase premium. En las tres modalidades individuales, el bloque de clases recomendadas se llama «Tu rutina individual».

Imágenes: 2 por clase. Una de acción y una de ambiente o equipamiento.

---

## 5.6 Hub FitKidz

1 página · /fitkidz/

Absorbe las 34 actividades infantiles, que no tienen página propia.

Contenido mínimo

- Las 34 actividades infantiles, organizadas por edad, por disciplina y por club
- Los clubes que ofrecen FitKidz

Menú contextual. Los botones generales más dos propios:

- «Clases FitKidz disponibles». Aparece solo si el usuario ya tiene club identificado, y muestra las actividades de ese club con sus horarios. Sin club identificado no aparece: cada club ofrece un subconjunto distinto de las 34 actividades, y mostrarlas todas confundiría al usuario.
- Clubes propuestos, hasta tres, cada uno con tres acciones: «Ver el club», «Agenda tu visita guiada» y «Clases FitKidz disponibles para tu familia».

Imágenes: 34 a 40. Recepción, espacio general y cada una de las actividades infantiles.

---

## 5.7 Hub de perfil

5 páginas · /perfiles/[perfil]/

Rehabilitación exige firma profesional; los otros cuatro perfiles no.

Primeros pasos · Salud y bienestar · Estética corporal · Ganar fuerza · Rehabilitación.

Contenido mínimo

- Título con la palabra clave del perfil
- 600 a 900 palabras de contenido útil
- Preguntas frecuentes
- Enlaces a los clubes y las clases relacionadas
- Artículos del blog relacionados

El hub de Rehabilitación lleva además la firma del especialista, con cédula profesional a la vista, y un aviso de salud.

Menú contextual. «Artículos o información útil» · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

Imágenes: 4 por hub. Ilustran el objetivo de cada perfil.

---

## 5.8 Hub de bajar de peso

1 página · /bajar-de-peso/

Es la única página con video institucional.

Contenido mínimo

- Título con la palabra clave
- 600 a 900 palabras de contenido útil
- Preguntas frecuentes
- Firma del médico que designe Sports World, con su cédula profesional a la vista
- Aviso de salud antes de mostrar cualquier recomendación
- Video institucional de 45 a 60 segundos
- Artículos del blog relacionados
- Enlaces a los clubes y las clases relacionadas

El sitio no promete resultados en kilos ni en plazos.

Menú contextual. «Artículos o información útil», que aquí aparece siempre porque esta página siempre tiene artículos etiquetados · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

Imágenes: 10 a 12, más 1 video. Las principales clases y ejercicios para bajar de peso, cafeterías y ambiente saludable.

---

## 5.9 Hub de entrenamiento personal

1 página · /personal-training/

No lleva página por entrenador.

Contenido mínimo

- Descripción del servicio
- Modalidades de entrenamiento individual
- Enlaces a los cinco hubs de perfil
- Clubes donde se ofrece

Menú contextual. «Artículos o información útil» · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

Imágenes: 5 a 6. Las principales áreas de entrenamiento personal.

---

## 5.10 Membresías

6 páginas · /membresias/

Muestra precios del CRM, pero no vende en línea.

Contenido mínimo, por plan

- Descripción
- Qué incluye y qué no incluye
- Precio
- Letra chica
- Comparativo entre planes
- Promociones vigentes

Un hub y cinco páginas por criterio de decisión.

El CRM entrega los planes, los precios, los descuentos y las promociones. El gestor de contenidos no los edita.

El usuario agenda una visita guiada y la venta se cierra en el club o por teléfono.

Menú contextual. «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

Imágenes: ninguna.

---

## 5.11 Blog

20 páginas · /blog/[articulo]/

Sus etiquetas alimentan el menú de las demás páginas.

Contenido mínimo

- Artículo con contenido propio
- Etiquetas temáticas que lo ligan con clases, hubs y clubes
- Enlaces internos

Las etiquetas alimentan el botón «Artículos o información útil» de las páginas con las que coinciden. Un artículo sin etiquetas no aparece en ninguna página.

Los artículos de nutrición, rehabilitación y suplementación llevan firma del especialista con cédula profesional a la vista y aviso de salud.

Menú contextual. «Diseña tu experiencia» · «Agenda tu visita guiada».

Imágenes: ninguna.
