# Las ocho preguntas

Los 88 hallazgos repartidos en ocho tandas. El reparto lo hace un programa y suma 88; 
no es una agrupación escrita a mano.

| Pregunta | Tema | Hallazgos | Críticas |
|---|---|---|---|
| **P1** | Gobierno documental, fuentes rectoras y control de versiones | 15 | 4 |
| **P2** | Canales, enrutamiento, handoff e identidad de BES | 13 | 7 |
| **P3** | Datos de salud y su consentimiento | 10 | 7 |
| **P4** | Privacidad: encargados, retención, ARCO y proveedores | 10 | 7 |
| **P5** | Agenda, visita, excepciones y no-show | 19 | 8 |
| **P6** | CRM, modelo de datos, eventos y medición | 14 | 6 |
| **P7** | Seguridad, trazabilidad e incidentes | 5 | 4 |
| **P8** | Comercial: precio, promesas, contratación y pago | 2 | 1 |

**Total: 88.**

## P1 · Gobierno documental, fuentes rectoras y control de versiones

**15 hallazgos:** A-001, A-002, A-003, A-004, A-005, A-006, A-007, A-008, A-009, A-013, A-020, A-027, A-055, A-066, A-072

- **A-001** (media, operación) · Gobierno documental — Documentos de uso interno están publicados antes de su fecha de vigencia.
- **A-002** (alta, inconsistencia) · MPC §1.2–1.3 — El registro maestro marca SOP 0102, 0103, 0201 y 0301 como ‘Por elaborar’ aunque ya están publicados.
- **A-003** (media, contradicción) · MPC §1.3, §9 — El proceso dice ‘cinco procedimientos’, pero su mapa enumera siete códigos y varios pendientes.
- **A-004** (baja, inconsistencia) · MPC §6 — El MPC anuncia once documentos de control, pero enumera doce elementos.
- **A-005** (crítica, hueco lógico) · Instrumentos controlados — No existen como archivos controlados los instrumentos que los SOP exigen para operar.
- **A-006** (crítica, ownership) · Fuentes rectoras — Hay varias piezas que se autodeclaran fuente única o canónica con contenido incompatible.
- **A-007** (alta, operación) · Manual MV/SW/01 — El manual comercial v5.1 ya está publicado aunque el proceso todavía contiene contradicciones y bloques ‘Por definir’.
- **A-008** (alta, dato) · QA / CI — Los controles automáticos reportan cero hallazgos porque no validan las contradicciones semánticas del proceso.
- **A-009** (alta, ownership) · Contrato / anexos — El contrato operativo visible está en revisión mientras una versión anterior archivada aparece como oficial.
- **A-013** (alta, duplicidad) · Referidos — Referidos está simultáneamente pendiente en SOP 0104 y embebido en SOP 0103, sin programa controlado.
- **A-020** (crítica, contradicción) · CEI-01 — El cuestionario no tiene una versión ni cardinalidad únicas.
- **A-027** (alta, inconsistencia) · BA-01 — El brief no tiene estructura canónica.
- **A-055** (alta, inconsistencia) · Momento de escritura CRM — WhatsApp/consola crean registro sin cita antes de agendar; web autónoma solo escribe al agendar.
- **A-066** (crítica, operación) · Contrato / pago — El flujo cobra antes de que el contrato esté firmado.
- **A-072** (alta, privacidad) · Marco legal — El MPC cita una ley de ‘Sujetos Obligados’, inaplicable como título al responsable privado.

## P2 · Canales, enrutamiento, handoff e identidad de BES

**13 hallazgos:** A-010, A-011, A-012, A-014, A-015, A-016, A-017, A-018, A-019, A-028, A-054, A-069, A-080

- **A-010** (crítica, canal) · Modelo de canales — No existe una taxonomía única: unos documentos hablan de tres canales, otros de cuatro, y el proceso mezcla canal, origen, interfaz y actor.
- **A-011** (crítica, canal) · BES Website — BES Website no está preservado como canal separado del flujo web autónomo.
- **A-012** (crítica, canal) · Convenios empresariales — El canal de Convenios Empresariales no tiene recorrido E2E ni procedimiento operativo.
- **A-014** (crítica, canal) · WhatsApp — La voz por WhatsApp está expresamente excluida, aunque es requisito del modelo objetivo.
- **A-015** (crítica, consentimiento) · WhatsApp voz — No hay consentimiento, aviso sonoro, límites de audio, tratamiento de transcripción ni excepciones de voz.
- **A-016** (crítica, contradicción) · BDS / SOP 0101 — El enrutamiento se contradice: BDS es human-first; el SOP 0101 es BES-first.
- **A-017** (alta, experiencia) · Identidad BES — El nombre BES identifica asistentes con propósitos incompatibles: documentación interna, demo informativa y agente comercial.
- **A-018** (alta, handoff) · Handoff digital — Los umbrales de rebote y escalación a humano quedan ‘por definir’.
- **A-019** (alta, handoff) · Handoff BES → humano — No existe contrato de contexto transferido ni acuse del operador.
- **A-028** (alta, experiencia) · Web autónoma — Cerrar o recargar el navegador borra todo y obliga a preguntar de nuevo.
- **A-054** (alta, canal) · Cambio de canal — No hay regla de merge ni atribución cuando una persona cambia de web a WhatsApp, teléfono o walk-in.
- **A-069** (alta, contradicción) · Momento de referidos — El manual prohíbe pedir referido antes del sí y luego permite pedirlo al no cierre; los SOP repiten ambos momentos.
- **A-080** (crítica, seguridad) · WhatsApp media — No se define dónde se descarga, transcribe, cifra y elimina una nota de voz de WhatsApp.

## P3 · Datos de salud y su consentimiento

**10 hallazgos:** A-021, A-022, A-023, A-053, A-063, A-068, A-070, A-073, A-074, A-084

- **A-021** (crítica, contradicción) · CEI / salud — El proceso prohíbe salud en captación digital, pero la arquitectura UX la pregunta y usa.
- **A-022** (crítica, consentimiento) · Experience / consentimiento — La experiencia digital procesa datos sensibles antes de mostrar el consentimiento/contacto.
- **A-023** (crítica, privacidad) · Visita / datos de salud — El primer cruce de salud se guarda en el Brief comercial, contra la segregación declarada.
- **A-053** (crítica, consentimiento) · CRM / consentimiento — El contrato de datos no conserva alcance, versión del aviso, método, evidencia y timestamp de consentimiento.
- **A-063** (crítica, contradicción) · Rol clínico — El manual excluye intervención clínica, pero el SOP hace que el asesor aplique cuestionario y matriz de contraindicaciones.
- **A-068** (crítica, ownership) · Segundo cruce de salud — El segundo cruce está duplicado y su dueño, documento, almacenamiento y efecto siguen ‘Por definir’.
- **A-070** (alta, consentimiento) · Seguimiento / marketing — Seguimiento, reactivación e invitación de acompañante no tienen propósito/consentimiento y supresión unificados.
- **A-073** (alta, consentimiento) · Consentimiento electrónico — El MPC trata el consentimiento electrónico de salud como jurídicamente imposible por duración del flujo.
- **A-074** (crítica, consentimiento) · Aviso y consentimiento — AP-01, AU-01 y guiones aprobados no existen como artefactos controlados ni se ubican siempre antes de la recolección.
- **A-084** (alta, consentimiento) · Menores — El flujo de captación no detecta ni gobierna prospectos menores hasta el alta.

## P4 · Privacidad: encargados, retención, ARCO y proveedores

**10 hallazgos:** A-026, A-033, A-058, A-075, A-076, A-077, A-078, A-079, A-083, A-088

- **A-026** (alta, privacidad) · BA-01 — El brief interno se muestra o entrega al prospecto en la arquitectura UX.
- **A-033** (alta, privacidad) · Copy privacidad — La frase ‘No los compartimos con terceros’ es engañosa frente al uso de encargados tecnológicos.
- **A-058** (crítica, privacidad) · Retención / derechos — No hay calendario de retención, bloqueo, eliminación ni propagación de ARCO a CRM, funnel, correo, colas y proveedores.
- **A-075** (crítica, privacidad) · Encargados — No hay inventario operativo de encargados/subencargados, DPA, región, transferencia y configuración por sistema.
- **A-076** (crítica, privacidad) · Anthropic — No está especificado ni verificado ZDR real para la organización, endpoints y modelos usados.
- **A-077** (crítica, seguridad) · Anthropic — No hay guardrails que impidan funciones no elegibles para ZDR.
- **A-078** (crítica, privacidad) · ElevenLabs — La configuración de privacidad de voz no está definida; por defecto puede conservar conversación y audio.
- **A-079** (alta, hueco lógico) · ElevenLabs — El flujo no contempla que retención 0 sea eliminación programada ni cómo recuperar el resultado sin conservar conversación.
- **A-083** (crítica, privacidad) · Verdad persistente — La arquitectura no garantiza que Sports World sea la única verdad persistente.
- **A-088** (crítica, ownership) · Arquitectura de proveedores — Los roles objetivo ‘Sports World conserva; Anthropic razona; ElevenLabs habla’ no están impuestos por interfaces y permisos.

## P5 · Agenda, visita, excepciones y no-show

**19 hallazgos:** A-029, A-034, A-035, A-036, A-037, A-038, A-039, A-040, A-041, A-042, A-043, A-044, A-046, A-047, A-048, A-059, A-061, A-064, A-067

- **A-029** (alta, experiencia) · Visita paso 20 — El asesor vuelve a confirmar uno por uno datos ya capturados.
- **A-034** (media, experiencia) · Promesa de duración — ‘Un minuto’/‘1.5 minutos’ no está sustentado para 17–21 preguntas más avisos y ramificaciones.
- **A-035** (media, experiencia) · Asignación de asesor — La preferencia por asesor del mismo género no tiene regla para identidad no binaria, negativa o disponibilidad.
- **A-036** (crítica, estado faltante) · Agenda / E4 — E4 se llama ‘visita agendada’ al confirmar escritura CRM, no disponibilidad ni aceptación del club.
- **A-037** (crítica, hueco lógico) · Agenda — Solo se valida horario de atención; no capacidad, cupo, asesor o restricciones del club.
- **A-038** (alta, contradicción) · Confirmación al prospecto — Algunos textos confirman ‘quedó agendada’ antes del acuse del club.
- **A-039** (crítica, estado faltante) · Visita — No existe una máquina de estados completa de la visita.
- **A-040** (crítica, excepción) · No-show — No hay procedimiento ejecutable para no-show aunque se reconoce como dolor operativo.
- **A-041** (alta, hueco lógico) · Cancelación / reprogramación — No hay ruta cross-channel para cancelar o reprogramar y reconciliar recordatorios.
- **A-042** (media, excepción) · Recordatorios — Los recordatorios 24 h y 2 h no contemplan citas creadas con menos anticipación.
- **A-043** (alta, ownership) · Acuse del club — El SLA de acuse no tiene escalación ni propietario cuando el club incumple.
- **A-044** (crítica, seguridad) · Handoff por correo — El brief y datos completos se envían por correo al club, incluso como fallback del CRM.
- **A-046** (alta, excepción) · Visita / capacidad — No hay excepción completa para ausencia de entrenador, clase, locker, accesibilidad o área crítica.
- **A-047** (crítica, seguridad) · Visita / seguridad física — No existe flujo de emergencia, lesión o incidente durante cuestionario, valoración o tour.
- **A-048** (alta, contradicción) · Visita sin plan — P-01 exige cuestionario/brief, pero el tour estándar puede continuar sin plan disponible.
- **A-059** (alta, excepción) · Catálogo diario — No existe máximo de antigüedad ni cierre seguro cuando falla la sincronización de las 06:00.
- **A-061** (crítica, excepción) · Colas / fallos — Las colas cifradas no tienen TTL numérico, DLQ, owner, runbook ni reconciliación.
- **A-064** (alta, experiencia) · Promesas de resultado — El entrenador debe explicar cómo y ‘en qué plazo’ se logrará el resultado sin marco de evidencia.
- **A-067** (crítica, excepción) · Alta postpago — Si el CRM falla después del pago, no hay rollback, compensación, SLA ni comunicación completa.

## P6 · CRM, modelo de datos, eventos y medición

**14 hallazgos:** A-024, A-025, A-030, A-031, A-032, A-045, A-049, A-050, A-051, A-052, A-056, A-057, A-060, A-087

- **A-024** (alta, contradicción) · Geografía — El MPC dice que no se recolecta código postal/domicilio, pero el cuestionario y los agentes lo solicitan.
- **A-025** (crítica, dato) · Motor de recomendación — Se derivan reglas de salud y tratamientos sin marcar origen ni revisión humana.
- **A-030** (crítica, dato) · Modelo de datos — No se distingue dato declarado, derivado y recomendado.
- **A-031** (alta, dato) · IA / trazabilidad — No se registra modelo, prompt, versión de KB o regla que produjo EI/Brief.
- **A-032** (media, estado faltante) · Fallback LLM — El fallback determinista produce un resultado más corto sin estado operativo visible.
- **A-045** (alta, ownership) · Catálogo / operación — Horarios, correos, roster y disponibilidad necesarios para operar no tienen dueño de calidad ni SLA de actualización completo.
- **A-049** (crítica, CRM) · CRM / idempotencia — La idempotencia por session_uuid no evita duplicados entre sesiones, dispositivos o canales.
- **A-050** (alta, dato) · Conciliación E4–E7 — La llave nombre+apellido+teléfono+club es frágil y cambia con correcciones o visitas a otro club.
- **A-051** (crítica, estado faltante) · CRM / estados — El modelo CRM no contiene estados comerciales y operativos suficientes.
- **A-052** (crítica, CRM) · CRM / origen — El enum de origen omite BES web, corporate, referido, walk-in y teléfono.
- **A-056** (media, contradicción) · Evento E3 — E3 depende de ‘respuesta del modelo’, aunque el sistema tiene fallback determinista.
- **A-057** (crítica, contradicción) · Evento E6 — E6 tiene tres definiciones incompatibles: aceptación de plan, membresía contratada y alta/activación CRM.
- **A-060** (alta, dato) · Dashboard — Se promete vista en tiempo real mientras varias fuentes actualizan diario o periódicamente.
- **A-087** (alta, dato) · Volumen / costos — El modelo de costos usa 80k–160k visitas y 30% de voz, distinto del supuesto operativo objetivo de ~160k/mes y ~20% de voz.

## P7 · Seguridad, trazabilidad e incidentes

**5 hallazgos:** A-071, A-081, A-082, A-085, A-086

- **A-071** (crítica, seguridad) · Pagos — Proveedor de pago, tokenización, alcance PCI, reconciliación y disputas no están definidos.
- **A-081** (crítica, seguridad) · Incidentes — La obligación de notificar ‘de inmediato’ no está convertida en plan de respuesta.
- **A-082** (crítica, seguridad) · Control de acceso — No existe matriz de roles y permisos para CRM, brief, salud, consola, colas, correo y dashboard.
- **A-085** (alta, seguridad) · Logs / correo — La promesa de logs sin PII no cubre errores, payloads de webhook, herramientas LLM, correo y observabilidad de terceros.
- **A-086** (crítica, ownership) · Ownership E2E — No existe RACI único para cada estado, excepción y handoff.

## P8 · Comercial: precio, promesas, contratación y pago

**2 hallazgos:** A-062, A-065

- **A-062** (alta, contradicción) · MV / precio — La excepción ‘solo quiero precio/tengo prisa’ permite tres preguntas y precio, contra P-01 y el CEI íntegro.
- **A-065** (crítica, contradicción) · Oferta P-08 — La condición ofrecida ‘vincula a la empresa’, pero manual y alta solo reconocen condiciones vigentes.
