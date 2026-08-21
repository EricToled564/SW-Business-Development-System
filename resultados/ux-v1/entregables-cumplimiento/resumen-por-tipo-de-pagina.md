# Rediseño del sitio · Especificación por tipo de página

Documento de referencia para la producción del nuevo sitio de Sports World. Consolida, para cada uno de los once tipos de página, el contenido mínimo obligatorio, los datos que provienen del CRM, el comportamiento del cuestionario, el menú contextual, el marcado estructurado, el enlazado obligatorio y el volumen de material fotográfico requerido.

---

## 1 · Inventario de páginas

El sitio se compone de **148 páginas** distribuidas en once tipos:

| # | Tipo de página | Cantidad | Patrón de dirección |
|---|---|---|---|
| 1 | Inicio | 1 | `/` |
| 2 | Club | 49 | `/clubes/[club]/` |
| 3 | Hub de amenidad | 10 | `/amenidades/[amenidad]/` |
| 4 | Clase premium | 7 | `/clases/signature/[clase]/` |
| 5 | Clase individual | 47 | `/clases/[clase]/` |
| 6 | Hub FitKidz | 1 | `/fitkidz/` |
| 7 | Hub de perfil de usuario | 5 | `/perfiles/[perfil]/` |
| 8 | Hub de bajar de peso | 1 | `/bajar-de-peso/` |
| 9 | Hub de entrenamiento personal | 1 | `/personal-training/` |
| 10 | Membresías | 6 | `/membresias/` y `/membresias/[criterio]/` |
| 11 | Blog | 20 | `/blog/[articulo]/` |

---

## 2 · Elementos presentes en la totalidad del sitio

### 2.1 Encabezado fijo

Permanece anclado en la parte superior en todas las páginas y en todos los estados de navegación. Se integra por cinco elementos, de izquierda a derecha:

| Elemento | Función |
|---|---|
| Logotipo de Sports World | Retorna a la página de inicio |
| **Tu Sports World** | Despliega el panel lateral de navegación |
| **Diseña tu experiencia** | Abre el cuestionario |
| **Pregúntale a BES** | Abre el asistente conversacional |
| **Agenda tu visita** | Botón de conversión, en rojo institucional |

Los elementos segundo, tercero y cuarto constituyen **tres rutas paralelas** de acceso al sitio, con idéntica jerarquía: corresponde a la persona usuaria elegir la que prefiera. El quinto recibe un tratamiento visual diferenciado y **conserva su etiqueta en todos los anchos de pantalla**, sin reducirse nunca a ícono.

En resoluciones menores a 1024 píxeles, el encabezado se distribuye en dos filas: la primera con el logotipo y el botón de conversión; la segunda con las tres rutas de navegación. Por debajo de 480 píxeles, dichas rutas se representan mediante íconos con su etiqueta accesible correspondiente.

### 2.2 Panel lateral «Tu Sports World»

Constituye el **único punto de navegación estructural del sitio**. Reúne los ocho hubs principales:

Clubes · Clases · Amenidades · Perfiles · Bajar de peso · FitKidz · Membresías · Blog

Presenta un ancho de 560 píxeles en escritorio y ocupa la pantalla completa en dispositivos móviles. Incluye un pie con redes sociales y aviso de privacidad. Los tres elementos de acción del encabezado **no se replican** en su interior: cada pieza de navegación reside en un solo lugar.

### 2.3 Asistente conversacional BES

Botón flotante permanente en el ángulo inferior derecho de todas las páginas. Al activarse despliega un panel de conversación **sobre la página vigente**, sin redirigir a otra dirección. Opera por defecto en modo texto, con conmutador a voz. Al abrirse reconoce el tipo de página y sus identificadores, lo que le permite responder consultas específicas sin que la persona usuaria reitere el contexto. Dispone de una dirección de respaldo renderizada en servidor para navegadores sin JavaScript y para los rastreadores de los buscadores.

---

## 3 · Menú contextual

Los botones de acción que aparecen **dentro del cuerpo** de cada página —a diferencia de los del encabezado— no son fijos. Se determinan por tres ejes: el estado del cuestionario, el tipo de página y el club resuelto.

### 3.1 Composición según el estado del cuestionario

| Estado | Botones que se presentan |
|---|---|
| **Sin cuestionario** | «Tu Club ideal» (cuando existen más de tres clubes en la ciudad o hay ubicación inferida) · «Diseña tu experiencia» · «Agenda tu visita guiada» · «Artículos o información útil» (si existen artículos etiquetados) · botones propios de la página |
| **Cuestionario completo, dentro del flujo** | Únicamente los botones propios de la página. No se ofrece «Diseña tu experiencia» ni se duplica «Volver a tu experiencia ideal» |
| **Cuestionario completo, fuera del flujo** | «Volver a tu experiencia ideal» · «Artículos o información útil» (si existen) · botones propios de la página |

Se considera que la persona usuaria se encuentra **dentro del flujo** cuando accede a la página mediante un botón de su propio resultado; **fuera del flujo**, cuando llega por búsqueda externa o navegación interna.

### 3.2 Reglas de aplicación general

1. **«Agenda tu visita guiada» se presenta invariablemente**, en toda página y en todo estado. Constituye la acción de conversión del sitio y no admite excepciones.
2. **«Tu Club ideal»** se presenta cuando la página no corresponde a un club y la persona usuaria no navega dentro de su flujo. Al activarse, el sistema solicita la intención geográfica y la ubicación, o bien las presenta previamente cargadas cuando existe ubicación inferida.
3. **«Otros clubes…»** se presenta exclusivamente en páginas de club, y su etiqueta depende del número de clubes en la ciudad:

| Clasificación | Definición | Comportamiento |
|---|---|---|
| Ciudad con un club | Un solo club | El botón no se presenta |
| Ciudad con pocos clubes | Dos o tres clubes | «Otros clubes en tu ciudad» |
| Zona metropolitana | Más de tres clubes (32 en total) | «Otros clubes en el área», con clubes dentro de un radio de 10 kilómetros o próximos a otra ubicación |

4. **«Diseña tu experiencia»** se presenta mientras el cuestionario permanezca incompleto. Al completarse, es **sustituido** por «Volver a tu experiencia ideal».
5. **«Artículos o información útil»** se presenta únicamente cuando existe al menos un artículo del blog con etiqueta coincidente con esa página.
6. En el encabezado residen de manera permanente «Agenda tu visita guiada» y «Pregúntale a BES»; ninguno se duplica en el cuerpo de la página.

---

## 4 · Especificación por tipo de página

### 4.1 · Inicio — 1 página

**Propósito.** Atender las búsquedas de marca y las consultas de ubicación cuando el sistema no logra determinar la ubicación de la persona usuaria.

**Contenido mínimo.** Propuesta de valor de la red; acceso a la búsqueda de clubes; enlaces a los ocho hubs principales; acceso al cuestionario completo.

**Cuestionario.** Quince preguntas base, sin preguntas omitidas. Dieciocho cuando la persona usuaria selecciona el objetivo de bajar de peso. No se efectúa ningún pre-llenado derivado del aterrizaje; únicamente pueden inferirse la ubicación y el objetivo cuando la búsqueda externa los contenía.

**Menú contextual.** «Diseña tu experiencia» · «Agenda tu visita guiada». Con ubicación inferida se agrega «Tu Club ideal». Con cuestionario completo: «Volver a tu experiencia ideal» · «Agenda tu visita guiada».

**Marcado estructurado.** Es el único tipo de página que no requiere ruta de navegación estructurada.

**Material fotográfico: sin requerimiento del banco.** La cobertura visual se resuelve mediante generación asistida por inteligencia artificial y tratamiento tipográfico editorial.

---

### 4.2 · Club — 49 páginas

**Propósito.** Responder a las búsquedas de marca con ubicación específica y a las consultas de proximidad. Es el tipo de página que sostiene el indicador de páginas rastreables.

**Contenido mínimo.**

- Denominación comercial y **domicilio completo**
- **Horarios de atención por día de la semana**
- **Teléfono y correo electrónico** del club
- **Amenidades** con que cuenta el club
- **Catálogo de clases del club**: cuáles de las 51 clases para adultos y cuáles de las 34 actividades infantiles se imparten en esa ubicación
- **Programación de clases por clase y por día, con visibilidad de la semana siguiente**
- Coordenadas geográficas verificadas y estado operativo: abierto, cerrado temporalmente o próxima apertura
- Enlaces a los demás clubes del área

**Datos en vivo.** Los cuatro primeros conjuntos —horarios de operación, datos de contacto, catálogo de clases y su programación— se obtienen del CRM. Ante la indisponibilidad del servicio, la página recurre al último valor almacenado en caché y presenta un aviso visible que solicita confirmar por teléfono.

**Cuestionario.** Trece preguntas: el club ya se encuentra identificado, por lo que las dos preguntas de ubicación se omiten en su totalidad. Dieciséis en la ruta de bajar de peso.

**Menú contextual.** «Diseña tu experiencia» · «Agenda tu visita guiada». **No se presenta «Tu Club ideal»**, dado que la persona usuaria ya se encuentra en un club; en su lugar se presenta «Otros clubes…» conforme al tamaño de la ciudad.

**Marcado estructurado.** `HealthClub` y `LocalBusiness`, complementados con la especificación de horarios de apertura —una entrada por día— y las coordenadas geográficas verificadas.

**Enlazado obligatorio.** Vínculo bidireccional con cada amenidad que ofrece y con cada clase que imparte.

**Material fotográfico: de seis a ocho imágenes por club**, equivalentes a un rango de 294 a 392 en total. Deben comprender fachada, recepción y las amenidades específicas de cada ubicación: alberca, salas, muro de escalar, cancha, pádel o ring de box, según corresponda.

---

### 4.3 · Hub de amenidad — 10 páginas

**Propósito.** Captar las búsquedas que combinan amenidad y ubicación, y canalizarlas hacia los clubes que la ofrecen.

**Contenido mínimo.** Descripción de la amenidad; **relación de los clubes que la ofrecen**, con enlace a cada uno; enlaces a las clases relacionadas.

**Cuestionario.** Quince preguntas. El aterrizaje en este tipo de página no genera pre-llenado alguno: la preferencia por una amenidad no determina el estilo de entrenamiento.

**Menú contextual.** «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Enlazado obligatorio.** Vínculo bidireccional con cada club que ofrece la amenidad.

**Material fotográfico: dos imágenes por hub**, veinte en total. Debe entregarse el mejor ejemplo disponible de esa amenidad.

---

### 4.4 · Clase premium — 7 páginas

**Propósito.** Captar las búsquedas por nombre de clase con tratamiento editorial diferenciado. La selección de las siete clases corresponde a Sports World.

**Contenido mínimo.** Descripción de la clase con tratamiento editorial; beneficios; nivel e intensidad; **clubes donde se imparte, con su programación real**.

**Cuestionario.** Quince preguntas, con el objetivo pre-marcado conforme a la disciplina de la clase. La respuesta pre-marcada permanece editable.

**Menú contextual.** «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada». Cuando ya existe un club seleccionado, «Tu Club ideal» no se presenta.

**Marcado estructurado.** `Course`. La programación por club admite complementarse con marcado de evento por sesión.

**Enlazado obligatorio.** Vínculo bidireccional con cada club donde se imparte la clase.

**Material fotográfico: de cinco a seis imágenes por clase**, entre 35 y 42 en total. Deben comprender una imagen principal de tratamiento editorial, imágenes de acción e imágenes de equipamiento.

---

### 4.5 · Clase individual — 47 páginas

Comprende 44 clases grupales y tres modalidades de entrenamiento individual: `/clases/pesas-individual/`, `/clases/aerobico-individual/` y `/clases/acuaticos-individual/`.

**Propósito.** Captar las búsquedas por nombre de clase. Corresponde al problema documentado de ausencia del sitio en los primeros cien resultados para consultas de disciplina.

**Contenido mínimo.** Descripción de la clase; beneficios; nivel e intensidad; **clubes donde se imparte, con su programación real**.

**Cuestionario.** Quince preguntas, con el objetivo pre-marcado conforme a la disciplina. En las tres modalidades individuales se pre-marca adicionalmente la preferencia de entrenamiento en solitario y el subgrupo correspondiente al objetivo.

**Menú contextual.** Idéntico al de la clase premium. En las modalidades individuales, el bloque que ordinariamente correspondería a clases recomendadas se denomina **«Tu rutina individual»**.

**Marcado estructurado.** `Course`.

**Enlazado obligatorio.** Vínculo bidireccional con cada club donde se imparte.

**Material fotográfico: dos imágenes por clase**, 94 en total. Una de acción y una de ambiente o equipamiento. El banco solicitado a Sports World cubre las 44 clases grupales, equivalentes a 88 imágenes; las tres modalidades individuales requieren seis adicionales.

---

### 4.6 · Hub FitKidz — 1 página

**Propósito.** Atender las búsquedas de programa infantil y familiar. Es el único tipo de página donde aplica el encuadre familiar de la marca; en el resto del sitio la comunicación se dirige a una sola persona.

**Contenido mínimo.** Las **34 actividades infantiles**, organizadas por rango de edad, tipo de disciplina y disponibilidad por club. Dichas actividades **no cuentan con página propia**: residen en su totalidad dentro de este hub.

**Cuestionario.** Quince preguntas, con la composición de la visita pre-llenada como asistencia con hijos, lo que activa la pregunta condicional sobre la edad de los menores.

**Menú contextual.** Además de los botones generales, dos propios de esta página:

- **«Clases FitKidz disponibles»**, que se presenta únicamente cuando existe un club identificado y despliega las actividades de ese club con sus horarios. Sin club identificado no se presenta, en razón de que cada ubicación ofrece un subconjunto distinto de las 34 actividades y exhibirlas todas induciría a error.
- **Clubes propuestos**, hasta tres conforme a las reglas geográficas, cada uno con tres acciones: «Ver el club», «Agenda tu visita guiada» y «Clases FitKidz disponibles para tu familia».

**Material fotográfico: de 34 a 40 imágenes.** Deben comprender recepción, espacio general y cada una de las actividades infantiles.

---

### 4.7 · Hub de perfil de usuario — 5 páginas

Primeros pasos · Salud y bienestar · Estética corporal · Ganar fuerza · Rehabilitación.

**Propósito.** Captar tráfico orgánico de alta intención por objetivo y canalizarlo al cuestionario.

**Contenido mínimo.** Encabezado principal con la palabra clave; entre 600 y 900 palabras de contenido de utilidad; sección de preguntas frecuentes; enlaces internos a clubes y clases relacionadas.

**Cuestionario.** Quince preguntas, con el objetivo pre-marcado conforme al perfil. El hub de primeros pasos pre-marca el nivel de principiante en lugar del objetivo.

**Menú contextual.** «Artículos o información útil» · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Marcado estructurado.** `FAQPage` para la sección de preguntas frecuentes.

**Enlazado obligatorio.** Vínculo bidireccional con la página de entrenamiento personal.

**Contenido sensible.** El hub de **rehabilitación** se clasifica como contenido de impacto en la salud y queda sujeto a los requisitos del apartado 5.3.

**Material fotográfico: cuatro imágenes por hub**, veinte en total, ilustrativas del objetivo de cada perfil.

---

### 4.8 · Hub de bajar de peso — 1 página

**Propósito.** Corregir la ausencia del sitio en las búsquedas de mayor volumen de la categoría. Por sí solo concentra un potencial relevante del objetivo de duplicar el tráfico orgánico.

**Contenido mínimo.** El correspondiente a un hub de perfil, con las siguientes adiciones:

- **Firma profesional visible**, con nombre y cédula profesional del médico designado por Sports World
- **Aviso de salud** previo a la presentación de recomendaciones
- Espacio para el **video institucional de 45 a 60 segundos**, de carga diferida y sin reproducción automática con audio

**Cuestionario.** Dieciocho preguntas de manera invariable: el aterrizaje pre-marca el objetivo, lo que activa las tres preguntas condicionales sobre tratamientos, datos físicos y objetivo de cambio.

**Menú contextual.** «Artículos o información útil», que **se presenta siempre** por existir de manera permanente artículos etiquetados · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Marcado estructurado.** `MedicalWebPage`, con los datos del revisor médico y su cédula profesional.

**Contenido sensible.** Sujeto en su totalidad a los requisitos del apartado 5.3.

**Material fotográfico: de 10 a 12 imágenes**, correspondientes a las principales clases y ejercicios recomendados, áreas de alimentación y ambiente saludable. Se suma un video institucional.

---

### 4.9 · Hub de entrenamiento personal — 1 página

**Propósito.** Captar las búsquedas de entrenamiento personalizado. Constituye asimismo la alternativa que el sistema propone cuando el catálogo de clases del club resuelto no permite conformar una recomendación viable.

**Contenido mínimo.** Descripción del servicio; modalidades de entrenamiento individual; vinculación con los cinco perfiles de usuario; clubes donde se ofrece. **No se contemplan perfiles individuales de entrenadores.**

**Cuestionario.** Quince preguntas, con la modalidad de acompañamiento pre-marcada.

**Menú contextual.** «Artículos o información útil» · «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Enlazado obligatorio.** Vínculo bidireccional con cada uno de los cinco hubs de perfil.

**Material fotográfico: de cinco a seis imágenes**, correspondientes a las principales áreas destinadas a entrenamiento personal.

---

### 4.10 · Membresías — 6 páginas

Un hub y cinco páginas organizadas por criterio estable de decisión.

**Propósito.** Atender las búsquedas de precio y comparación de planes.

**Contenido mínimo por plan.** Descripción; **alcance incluido y alcance excluido**; **precio**; condiciones aplicables; comparativo entre planes; promociones vigentes.

**Origen de la información comercial.** Los planes, sus denominaciones, precios, descuentos y promociones **se obtienen automáticamente del CRM y no se capturan ni editan en el gestor de contenidos**. Las direcciones no incorporan la denominación comercial de los planes, en razón de que ésta cambia con la operación y su incorporación quebrantaría el posicionamiento conseguido en cada modificación.

**Ausencia de operación transaccional.** El sitio **no comercializa membresías en línea**. La ruta de conversión es «Agenda tu visita guiada»; la venta se perfecciona de manera presencial en el club o por vía telefónica.

**Cuestionario.** Quince preguntas. El aterrizaje no permite inferir variable alguna.

**Menú contextual.** «Tu Club ideal» · «Diseña tu experiencia» · «Agenda tu visita guiada».

**Material fotográfico: sin requerimiento del banco.** Se resuelve mediante tratamiento tipográfico editorial.

---

### 4.11 · Blog — 20 páginas

**Propósito.** Captar las búsquedas informativas de la categoría y alimentar el enlazado interno del sitio.

**Contenido mínimo.** Artículo con contenido único; **etiquetas temáticas** —en minúsculas y separadas por guiones— que lo asocian con clases, hubs y clubes; enlaces internos.

**Función estructural.** Las etiquetas de los artículos alimentan el botón «Artículos o información útil» del menú contextual de las páginas con las que coinciden. Un artículo sin etiquetas no se presenta en ninguna página.

**Cuestionario.** Quince preguntas. El aterrizaje no permite inferir variable alguna.

**Menú contextual.** «Diseña tu experiencia» · «Agenda tu visita guiada».

**Marcado estructurado.** `Article`, con los datos del autor y sus credenciales cuando corresponda.

**Enlazado obligatorio.** Cada artículo enlaza cuando menos a un hub relacionado y, cuando exista pertinencia geográfica, a un club.

**Contenido sensible.** Los artículos sobre nutrición, rehabilitación y suplementación se clasifican como contenido de impacto en la salud y quedan sujetos a los requisitos del apartado 5.3.

**Material fotográfico: sin requerimiento del banco.** Se resuelve mediante tratamiento tipográfico editorial.

---

## 5 · Requisitos aplicables a la totalidad del sitio

### 5.1 Marcado estructurado

Todas las páginas, con excepción de la de inicio, incorporan la ruta de navegación estructurada. La totalidad del marcado debe validarse en la herramienta de resultados enriquecidos de Google antes de su publicación.

### 5.2 Desempeño y accesibilidad

| Requisito | Umbral |
|---|---|
| Carga del elemento principal | Inferior a 2.5 segundos |
| Respuesta a la interacción | Inferior a 200 milisegundos |
| Estabilidad visual | Inferior a 0.1 |
| Accesibilidad | WCAG 2.2 nivel AA en la totalidad de las páginas |
| Contraste | 4.5:1 en texto de cuerpo; 3:1 en texto de gran tamaño y componentes |
| Áreas táctiles | 44 × 44 píxeles como mínimo en dispositivos móviles |

Las métricas de desempeño se evalúan en dispositivo móvil, por tratarse del contexto que determina el posicionamiento. Toda imagen de hub o de club incorpora texto alternativo descriptivo. Ninguna interacción depende exclusivamente del desplazamiento del cursor.

### 5.3 Contenido de impacto en la salud

Se clasifican bajo este régimen el hub de bajar de peso, el hub de rehabilitación y los artículos del blog sobre nutrición, rehabilitación y suplementación. A todos ellos les resultan aplicables tres requisitos:

1. **Firma profesional visible**, con nombre y cédula profesional del especialista que respalda el contenido.
2. **Aviso de salud** previo a la presentación de recomendaciones, en el sentido de que la información posee carácter orientativo y no sustituye la consulta médica.
3. **Ausencia de promesas numéricas.** El sitio no formula compromisos de resultado en magnitud ni en plazo.

### 5.4 Comportamiento adaptativo

El sitio se concibe y se construye desde el dispositivo móvil, con mejoras progresivas hacia resoluciones mayores. Los hubs y las páginas de contenido se presentan en una columna en dispositivo móvil, con la imagen principal apilada sobre el texto, los listados en tarjetas de una columna y el llamado a la acción fijo al pie. En tablet los listados se distribuyen en dos columnas; en escritorio, en dos o tres, dentro de un contenedor de 1,200 píxeles.

### 5.5 Protección de datos personales

La captura de datos personales se sujeta a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. En cada punto de captura se presenta el aviso de privacidad y se recaba el consentimiento expreso con anterioridad al almacenamiento de cualquier dato. Los datos de salud requieren consentimiento adicional y específico, recabado con antelación a la formulación de las preguntas correspondientes. La información se almacena en los sistemas de Sports World.

---

## 6 · Páginas expresamente excluidas del alcance

Con el objeto de evitar interpretaciones divergentes, se hace constar que las siguientes páginas no forman parte del sitio:

- Centro de ayuda con agrupación de artículos. Las consultas operativas —cancelación, congelamiento y cambio de club— las atiende el asistente conversacional; el contenido sobre ejercicio y nutrición reside en el blog.
- Página individual por cada actividad de FitKidz. Las 34 actividades residen dentro de su hub.
- Página por cada entrenador. El entrenamiento personal cuenta con una sola página.
- Estudios boutique como entidad independiente. No se contemplan como submarca.
- Operación transaccional de membresías.
