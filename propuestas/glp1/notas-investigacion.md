# Notas de investigación · Propuesta GLP-1 (documento de trabajo, se escribe conforme se investiga)

Fecha de inicio: 18 de noviembre de 2026. Insumo: `Sports_World_GLP1_White_Paper.pdf` (8 págs., octubre 2026), leído completo.

## Bloque 1 · Hallazgos de búsqueda (extractos; pendiente leer la página completa donde se indica)

- **Sports World: 49 clubes** (sportsworld.com.mx y /clubes, consultado 18-nov-2026). Zonas listadas: CDMX Norte, Sur, Centro, Poniente; Aguascalientes, Coahuila, Estado de México, Guanajuato, Jalisco, Nuevo León, Puebla, Querétaro, Sinaloa, Sonora, Veracruz, Yucatán. PENDIENTE: lista club por club.
- **Depósito, `auditoria.es.md:22`:** «gimnasio para perder peso» = 932,300 búsquedas/mes; SW aparece en 2 de 10,000 keywords (0.02%). El producto existe (entrenadores, evaluaciones, nutrición…).
- **Novo Nordisk México:** programa de apoyo a pacientes **«Nuevo Yo»** (nuevoyo.com; área terapéutica Obesidad). Campaña **«Vive Ligero»** (3-mar-2026). Wegovy (semaglutida 2.4 mg) en México desde abril de 2025. Wegovy en tabletas: nota de Expansión (fecha por verificar). PENDIENTE: leer.
- **Eli Lilly:** programa de apoyo a pacientes **«Enlace Lilly»** (latam.lilly.com/enlace). Mounjaro en México: lanzamiento por verificar.
- **Genéricos de semaglutida:** El Economista 6-oct-2026: podrían tardar hasta 2029 en llegar a México pese a expiración de patente del principio activo. PENDIENTE: leer.

## Bloque 2 · Fabricantes, genéricos, regulación (páginas leídas el 18-nov-2026)

- **Genéricos de semaglutida** (El Economista, 6-oct-2026, Daniel del Conde, presidente de Dilameg y CEO de Somar): la patente expira en 2026 (la nota menciona marzo y diciembre «de este año»; fecha exacta NO conciliada), pero una protección de datos clínicos (Novo Nordisk pidió 12 años desde el 3-jul-2019; un tribunal resolvió mínimo 10) impediría el registro de genéricos hasta ~2029. Tratamientos GLP-1: 8,000–9,000 pesos mensuales; con genéricos bajarían 50–70%. Dilameg agrupa a más de 50 laboratorios y distribuidores nacionales. La nota NO nombra laboratorios con genérico en preparación.
  https://www.eleconomista.com.mx/empresas/genericos-semaglutida-bajar-peso-llegar-mexico-2029-dilameg-20261006-837265.html
- **Novo Nordisk México, centro de prensa** (novonordisk.com.mx/center-press.html):
  - 26-feb-2025: lanzamiento de semaglutida 2.4 mg (Wegovy) en México desde abril de 2025.
  - 22-jul-2025: apertura de tienda en línea. 29-jun-2026: tienda en Mercado Libre México.
  - 13-ene-2026: Patricia Field asume la dirección general de Novo Nordisk México.
  - 3-mar-2026: campaña «Vive Ligero» (obesidad como enfermedad crónica tratable con acompañamiento médico).
  - 16-jul-2026: aprobación en México de semaglutida 7.2 mg (Wegovy).
  - 17-ago-2026: aprobación en México de semaglutida oral 25 mg (Wegovy tabletas), primera en América Latina.
  - 15-jul-2026: con «Obesidades», galería fotográfica sin estigma.
  - 24-feb-2025: presencia en el Ciclotón de la CDMX (antecedente de activación con actividad física).
  - 16-jun-2025: convenio con el Instituto Nacional de Nutrición (investigación clínica).
  - NO aparece ninguna alianza con gimnasios o cadenas de fitness.
- **Programa «Nuevo Yo»** (pmfarma, 16-feb-2024; nuevoyo.com): apoyo a pacientes de Novo Nordisk; beneficios en la adquisición del medicamento, servicios educacionales y nutricionales, apoyo multidisciplinario con información sobre nutrición, **actividad física** y acompañamiento emocional, seguimiento al tratamiento. No nombra empresas aliadas ni número de pacientes.
- **Eli Lilly:** programa «Enlace Lilly» (latam.lilly.com/enlace): apoyo al apego al tratamiento prescrito. Mounjaro: publicación de una médica menciona lanzamiento oficial un 22 de abril (año por verificar).
- **Regulación de publicidad:** Ley General de Salud, art. 310: «La publicidad dirigida a la población en general sólo se efectuará sobre medicamentos de libre venta y remedios herbolarios…». Los GLP-1 requieren receta → no pueden anunciarse al público general. COFEPRIS-02-001 (permiso) y COFEPRIS-02-002 (aviso, incluye insumos dirigidos a profesionales de la salud).
  https://mexico.justia.com/federales/leyes/ley-general-de-salud/titulo-decimo-tercero/capitulo-unico/
- **Clínicas digitales:** Clivi (clivi.com.mx) se describe como «la clínica digital más grande de México para bajar de peso»; GLP-1 entre 1,500 y 4,500 MXN mensuales (dato propio de Clivi). Choiz (choiz.com.mx) publica contenido de Wegovy. PENDIENTE: verificar modelo de cada una.
- **Software de nutrición (resultados de búsqueda, por verificar origen):** Avena (avena.io), Nutrify (nutrify.io), MiNutriApp, Almendra (almendra.io), Monitor Nutricional. Smart Fit tiene «Smart Nutri» (smartfitnutri.app) — antecedente competitivo.
- **sportsworld.com.mx/clubes** no entrega la lista club por club (contenido dinámico). Buscar en el depósito.

## Bloque 3 · Sports World (activos existentes), benchmarks, hospitales (búsquedas del 18-nov-2026)

- **Lista de los 49 clubes con coordenadas:** `resultados/ux-v1/webapp/demo/app.demo.js:15` (CLUBS_RAW). Coincide con los 49 del sitio.
- **RESTRICCIÓN DE LA FUENTE ÚNICA (Arquitectura de la Experiencia):** líneas 1946, 4828, 8192 y 8589 de `arquitectura/fuente/arquitectura.es.md`: la Experiencia Ideal NO ofrece acompañamiento nutricional, planes alimenticios, dietas ni recomendaciones de nutrición; el modelo no introduce diagnósticos ni prescripciones clínicas. → La capa «Nutrición» del white paper (sección 05, punto 3) NO puede darla Sports World dentro de la Experiencia Ideal: tiene que venir de un aliado externo.
- **Sports World ya mide composición corporal:** blog oficial «Conoce tu cuerpo en profundidad: el poder del Body Test by SECA» (oct-2025; «tu membresía…» — PENDIENTE leer qué incluye). Publicaciones oficiales sobre InBody (Facebook; TikTok de SW Saltillo). PENDIENTE: leer.
- **App Sports World:** registra visitas, clases virtuales, consulta de clases y horarios (X oficial). Reserva de clases en app.sportsworld.com.mx.
- **Benchmarks internacionales:**
  - CNN, 1-mar-2024: Equinox lanzó un «GLP-1 protocol», programa de entrenamiento personal para preservar masa muscular. https://www.cnn.com/2024/03/01/business/ozempic-wegovy-equinox-life-time-gyms/index.html
  - Life Time: clínica MIORA (GLP-1 con supervisión médica; plan mensual desde 599 USD según su página). https://miora.lifetime.life/continuing-care/weightloss.html
  - Inspire360, «GLP-1 Club Intelligence Report 2026 Q2»: 23 clubes y 12 proveedores con acciones concretas a julio de 2026; marco de niveles de integración (1 Programación adaptada: Equinox, Crunch, Orangetheory, 24 Hour Fitness, Virgin Active UK … 6 Clínica dentro del club: Life Time). PENDIENTE leer completo.
- **Hospitales con clínica de obesidad (CDMX):**
  - Centro Médico ABC — Centro de Nutrición y Obesidad (centromedicoabc.com/centro-de-nutricion-obesidad/). PENDIENTE sedes.
  - Hospital Español — Clínica de obesidad y sobrepeso (hespanol.com).
  - Hospital Angeles México — Instituto de Obesidad y Síndrome Metabólico, Agrarismo 208, Escandón (endocrinología, nutrición clínica, cirugía bariátrica, psicología, rehabilitación física).
  - Médica Sur — Centro Integral de Cirugía Bariátrica.
  - Públicos (no objetivo comercial): INCMNSZ Clínica de Obesidad; Hospital Gea González.

## Bloque 4 · Páginas leídas (18-nov-2026)

- **RESTRICCIÓN 2 DE LA FUENTE ÚNICA** (`arquitectura.es.md`, Reglas de aplicación del cuestionario, ~línea 8191): «No se solicitan ni infieren diagnósticos, lesiones, tratamientos, medicamentos, cirugías, peso, estatura, medidas corporales ni ningún otro dato clínico». Línea 1684: Q17–Q19 formaban la rama de bajar de peso (tratamientos activos, peso, estatura, cintura, meta) y «esa rama no vuelve». → El cuestionario NO puede preguntar si la persona usa GLP-1. El white paper (05, punto 1: «contexto terapéutico declarado por el usuario») choca con esto en el canal digital.
- **Fuente única, apartado 3.5.4:** la página Bajar de peso y los artículos de nutrición, rehabilitación y suplementación llevan firma de especialista con cédula visible, aviso de salud y, en Bajar de peso, video institucional de 45–60 s. Tipo de página 08, 1 página, `/bajar-de-peso/`. Seis objetivos del cuestionario: Bajar de peso · Estética corporal y definición muscular · Aumentar masa muscular · Desempeño atlético · Capacidad cardiovascular · Moverse mejor con más agilidad. 75.2% de adultos con sobrepeso u obesidad; 932,300 búsquedas/mes.
- **Body Test by SECA** (blog oficial SW, 28-oct-2025): bioimpedancia (BIA); masa muscular total y segmentada, % de grasa y distribución, agua corporal, tasa metabólica basal. «Todas las membresías Sports World incluyen un análisis SECA gratuito cada mes». Se interpreta con un coach certificado.
  https://www.sportsworld.com.mx/blog/articulo/conoce-tu-cuerpo-en-profundidad-el-poder-del-body-test-by-seca/categoria/belleza
- **Inspire360, GLP-1 Club Intelligence Report 2026 Q2** (fuente secundaria, proveedor del sector; cifras de terceros no verificadas en origen):
  - 6 niveles de integración: 1 Programación adaptada (Equinox, Crunch, Orangetheory, 24 Hour Fitness, Virgin Active UK) · 2 Referencia a telesalud (Planet Fitness + Ro; NYSC + Thrive) · 3 Telesalud marca blanca (UFC GYM + NexGen MD; F45 + Dr. B) · 4 Programa conjunto (Prime Meridian Health) · 5 Referencia con clínica local (franquiciatarios de Anytime Fitness) · 6 Clínica en el club (Life Time Miora, Monarch, Love.Life).
  - 23 clubes y 12 proveedores a julio de 2026.
  - PwC Reino Unido (2,300+ adultos): 27% de usuarios actuales o anteriores de GLP-1 aumentó su gasto en fitness (5% lo redujo); de quienes gastan más: 41% se inscribió a un gimnasio o clases, 20% giró a fuerza, 16% contrató entrenador personal.
  - PwC EE. UU. (3,089 consumidores): adopción en 21% de hogares (9% en enero 2025); 36% aumentó cardio, 21% fuerza; clases grupales bajo presión; 85% dice que las empresas no atienden sus necesidades.
  - Planet Fitness (Q4 2025): ~50% de usuarios de GLP-1 considera una membresía.
  - Tendencia: «Longevity is the destination; GLP-1 was the on-ramp».
- **Centro Médico ABC, Centro de Nutrición y Obesidad:** equipo multidisciplinario con 16 años de experiencia: nutrición, **medicina del deporte**, endocrinología, cirugía bariátrica, psicología, medicina interna. No menciona aliados de ejercicio. Sedes no indicadas en la página (Facebook del ABC: «abre sus puertas en el sur y en el norte de la CDMX» — por verificar).
- **Clivi** (dato propio, blog 28-may-2026, modificado 19-oct-2026): telemedicina; endocrinólogos y nutriólogos certificados; laboratorios incluidos; plan nutricional; prescripción; medicamento a domicilio; «Body Scan» y «Nutriscan»; «más de 15,000 pacientes atendidos»; 1,500–4,500 MXN mensuales. **No declara ejercicio ni fuerza como parte del programa** → hueco que SW puede llenar.
- **Lilly México:** tirzepatida aprobada por COFEPRIS para diabetes tipo 2 (comunicado 24-nov-2024). Indicación de obesidad en México: POR VERIFICAR. Profeco y COFEPRIS alertaron por comercialización ilegal de productos con tirzepatida (gob.mx/profeco, 2026).

## Bloque 5 · Marco legal, evidencia clínica, nutrición, Medix (18-nov-2026)

- **Datos personales (LFPDPPP vigente desde 2025):** el estado de salud es dato personal sensible; su tratamiento exige consentimiento expreso y por escrito (firma autógrafa o electrónica; art. 8 según resumen de CIAL D&B; texto en diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf). Autoridad: Secretaría Anticorrupción y Buen Gobierno (el INAI se extinguió). → Registrar «usa GLP-1» en el CRM sería tratar un dato sensible.
- **Evidencia clínica:** consenso conjunto ACLM/ASN/OMA/TOS, «Nutritional priorities to support GLP-1 therapy for obesity» (Mozaffarian et al., Am J Clin Nutr 2025;122(1):344-367; PMID 40450457; 30-may-2025). Ocho prioridades; la 6: ingesta proteica adecuada y **entrenamiento de fuerza para preservar masa magra**; examen inicial con fuerza muscular, función y **composición corporal**. GLP-1 reducen 5–18% del peso en ensayos. «La mayoría de quienes reciben GLP-1 no recibe asesoría nutricional ni apoyo conductual adecuados».
  - ACLM (J. Saluja): ~25% del peso perdido, y hasta 40% en algunos casos, puede ser masa magra; recomienda fuerza 2–3 veces por semana y ≥150 min de actividad aeróbica moderada semanal.
  - Consenso posterior: Sievenpiper et al., Obes Pillars 2025;17:100228 (PMID 41502845).
- **Software de nutrición:** Avena Health (avena.io): software para nutriólogos; trabaja con el SMAE (Sistema Mexicano de Alimentos Equivalentes); +30,000 recetas mexicanas y latinoamericanas; app para pacientes; desde 299 MXN/mes. El Economista (20-jun-2023): ~20,000 profesionales usuarios. Origen de la empresa: POR VERIFICAR (opera en Latinoamérica). Otros: Nutrify, Almendra, MiNutriApp, Nutrimind, Monitor Nutricional — origen por verificar.
- **Medix:** «laboratorio mexicano», se describe como líder en tratamiento de sobrepeso y obesidad; adquirió Slim Center; hace jornadas de consulta gratuita con test de composición corporal (Tanita) junto con hospitales públicos (Hospital Juárez de México). Sin GLP-1 propio verificado.
- **Geocodificador público (Nominatim/OSM) responde:** Hospital Angeles Lomas = 19.39497, -99.28205 (Jesús del Monte, Huixquilucan). SW Espacio Interlomas = 19.39519, -99.28922 (Av. Jesús del Monte #37).

## CORRECCIÓN DE ALCANCE (instrucción de Eric, 18-nov-2026)

Este es un **proyecto nuevo, independiente del sitio web y del cuestionario**. Las restricciones 1 y 2 anotadas arriba (reglas de CEI-01 y de la Experiencia Ideal) **NO gobiernan esta propuesta** y no se usan como marco. Se conserva únicamente el punto legal general: el estado de salud es dato personal sensible (LFPDPPP) y su tratamiento exige consentimiento expreso y por escrito.

## PRECISIÓN DE PÚBLICO (Eric, 18-nov-2026)

El proyecto es para **quien ya usa** estos medicamentos y para **quien está pensando en usarlos**. Dos segmentos: (A) en tratamiento, (B) en consideración. El recorrido del white paper (durante la pérdida → cerca del peso objetivo → mantenimiento) gana una fase previa: «antes de empezar».

## Bloque 6 · Lilly y sociedades médicas (18-nov-2026)

- **Tirzepatida (Lilly):** aprobada por COFEPRIS para diabetes tipo 2 (comunicado de Lilly, 24-nov-2024). Autorizada en México para control del peso; disponible desde junio de 2025 (comunicado de Lilly de México reproducido por enFarma, 19-may-2025; vocero: Santiago Posada, VP de Asuntos Médicos de Lilly Latinoamérica).
- **Orforglipron (Lilly, oral):** autorizado por COFEPRIS en julio de 2026 con la marca Foundayz para obesidad, sobrepeso con comorbilidades y diabetes tipo 2 — FUENTE SECUNDARIA (seleah.mx, que cita Excélsior 23-jul-2026 y Milenio); no leído en fuente primaria.
- **Sociedad Mexicana de Obesidad, A.C. (SMO):** asociación civil sin fines de lucro, afiliada a la World Obesity Federation; educación médica continua (smobesidad.com.mx). El International Congress on Obesity 2026 se celebró en CDMX, 15–17 de julio, en colaboración con la SMO (icocongress.com).
- **Choiz** (choiz.com.mx): consulta médica en línea, plan de dosificación y monitoreo, evaluación nutricional (dato propio).
- **Sports World, Reporte Anual 2018:** menciona «nutriólogo certificado como Wellness coach» con servicio de nutrición — dato de 2018, vigencia actual NO verificada.
- **PENDIENTE:** cercanía hospital–club (consulta por radio a OpenStreetMap falló por conexión rechazada); origen e integración de las apps de nutrición.

## Bloque 7 · Nutrición (18-nov-2026)

- **Avena Health** (avena.io/nosotros): software para nutriólogos; cofundadores Javier Álvarez (director) y Rubén Sandoval (tecnología). App para pacientes que los conecta con especialistas. País sede, API, integraciones y planes para empresas o gimnasios: **no declarados en su página** → preguntar directamente. Trabaja con el SMAE y recetas mexicanas (página de México).
- **Fitia** (fitia.app): app de consumo con IA; calorías y macros, registro de comidas por foto, planes para bajar de peso, ganar músculo o mantener composición corporal. Disponible en Google Play México. Programa para empresas o gimnasios: no verificado.
- **Smart Fit «Smart Nutri»:** existe como plan de nutrición por app en Perú (smartfitnutri.com.pe) y hay publicación de Smart Fit México que remite a smartfitnutri.app. Contenido y precio en México: no verificados. Antecedente: un competidor de bajo costo ya resolvió nutrición por app con un tercero o desarrollo propio (no verificado cuál).
- **Clivi** incluye «Nutriscan» (conteo diario de calorías) y «Body Scan» dentro de su propio programa.

## NUEVO REQUISITO (Eric, 18-nov-2026)

Agregar **al principio** una estimación del volumen de membresías que Sports World podría perder si el uso de estos medicamentos se expande sin que la empresa tenga una respuesta. Datos a buscar: socios activos de SW (BMV), proporción de altas motivadas por bajar de peso, evidencia de cancelación entre usuarios de GLP-1, distribución NSE (AMAI).

## Bloque 8 · Hospitales geocodificados (OpenStreetMap/Nominatim, 18-nov-2026)

Resultados en el scratchpad (`geo.json`, `geo2.json`). Hallados: Angeles Lomas, ABC Santa Fe, ABC Observatorio, Español, Angeles Pedregal, Angeles Mocel, Angeles Metropolitano, Angeles Acoxpa, Angeles Lindavista, Angeles Santa Mónica, Angeles Clínica Londres, Médica Sur, San Ángel Inn Universidad, San Ángel Inn Patriotismo, Star Médica Lomas Verdes, Hospital Ciudad Satélite, Star Médica Centro (Roma), Dalinde, Zambrano Hellion, San José (Monterrey), Christus Muguerza (Obispado), Angeles Valle Oriente, Doctors Hospital, Angeles Puebla, Hospital Puebla, Angeles Centro Sur (Querétaro), Star Médica Querétaro, H+ Querétaro, Angeles León, Aranda de la Parra, Star Médica Aguascalientes, MAC Aguascalientes Norte, Christus Muguerza Saltillo, Angeles Torreón, Angeles Culiacán, CIMA Hermosillo, San José Hermosillo, Star Médica Veracruz, Español de Veracruz, Star Médica Mérida, Faro del Mayab.
NO hallados o resultado erróneo (se excluyen): Angeles México (devolvió Pedregal), Angeles Universidad, Puerta de Hierro Sur, MAC Puebla, Moscati, Centro Médico de Toluca (devolvió otro lugar), Florence, MAC Periférico Sur, San Ángel Inn Sur, Christus Muguerza Cumbres.

## Bloque 9 · Datos para la estimación de exposición (18-nov-2026)

- **Grupo Sports World, Reporte 3T26** (sportsworld.com.mx/uploads/es/documents/reports_quarterly/gsw_reporte_3T26.pdf, 19 págs.):
  - Clientes Activos Totales: **97,046** (−7.1% vs 3T25). Incluye clientes activos, virtuales, planes de salud corporativos, invitados promocionales y SW San Pedro Garza García. 1T26: 96,616.
  - Deserción bruta promedio: **5.7%** en 3T26 (5.4% en 3T25); **6.1%** acumulado 2026. Deserción neta promedio: 3.3% en 3T26; 4.1% acumulado (definición de «neta» no leída).
  - Ingresos totales 3T26: $580.925 M (+3.5%); 9M26: $1,745.823 M (+8.6%).
  - Cuotas de mantenimiento y membresías 3T26: **$453.217 M** (+3.7%); 9M26: $1,362.154 M.
  - Ingresos deportivos y otros 3T26: $99.453 M (−2.5%); 9M26: $285.527 M.
  - Aforo promedio mensual 3T26: 855,057; visitas mensuales por cliente: 9.2.
  - EBITDA 3T26 sin IFRS 16: $98.467 M, margen 17.0%.
  - Estrategia declarada: rentabilizar la base, eliminar clientes de menor ingreso, atender clientes «high-end»; HYROX en 6 clubes. Directora general: Gabriela Vieira do Prado. No reporta nutrición, wellness ni alianzas.
- **William Blair, 18-may-2026** (Sharon Zackfia; encuesta 2026 a 300 usuarios de GLP-1, EE. UU.): la membresía de gimnasio entre usuarios subió a 34.5% tras iniciar tratamiento; 72% reporta ejercitarse más (60% en 2024); mayor alza en 18–24 años y hogares de menos de 100,000 USD. Permanencia en el medicamento: 46% a 6 meses, 32% a 12 meses. Conclusión: el uso de GLP-1 podría aumentar, no reducir, la demanda de fitness. Cautela: no se sabe si el ejercicio persiste al dejar el tratamiento.
  https://www.williamblair.com/Insights/GLP1s-and-Fitness-Clubs-The-Structural-Case-for-a-Larger-Market
- **ClubIntel para IHRSA Foundation y ABC Fitness, «The Next Fitness Consumer»** (11-ago-2021): metas del consumidor: estar activo 46%, bienestar mental 35%, **bajar de peso 32%** (tercera). Muestra y países no indicados en la nota; no es dato de México ni de Sports World.
- **AMAI/INEGI** (presentación INEGI 2026): hogares A/B 8.5% y C+ 13.1% en 2024 (7.3% y 12.0% en 2022). CDMX 2022: A/B 11%, C+ 16%. Estado de México: A/B 6%, C+ 10%. Querétaro: A/B 11%, C+ 15%.
- **Gallup/KFF 2026 (EE. UU.):** ~11–13% de adultos toma actualmente un GLP-1 (extractos de búsqueda; no leídos completos).

## Bloque 10 · Modelo de exposición y cierre (18-nov-2026)

- Cálculo en el scratchpad (`modelo.js`): bajas brutas/año 66,379–71,038 (punto medio 68,709); ingreso de membresía por cliente/mes $1,557; deportivos $342; permanencia 16.4 meses; ingreso por alta $25,520; baja interanual implícita 7,417.
- Escenarios (w, a, s): bajo 20/5/10 → 69 altas/año y 157 acumuladas 2027–29 ($4.0 M); base 32/10/25 → 550 y 1,256 ($32.1 M); alto 45/20/50 → 3,092 y 7,067 ($180.4 M). Un punto de altas = 687 clientes = $17.5 M.
- Penetración derivada entre adultos A/B y C+ con sobrepeso u obesidad: 3.2–3.8% en 2026; 8.3–9.7% en 2029.
- Hospitales: 42 válidos; 36 clubes con alguno a ≤3 km; 40 a ≤5 km; marca Angeles a ≤3 km de 20 clubes.
- Búsqueda de programas GLP-1 en cadenas de gimnasios de México: sin resultados. Smart Fit México anuncia «Smart Fit Coach» (entrenamiento + nutrición).
- Documento final: `propuestas/glp1/propuesta-glp1-implementacion.es.md`.
