# RESEARCH: Marco legal mexicano y referencias de mercado para la contrapropuesta al contrato marcado por Sports World

Fecha: 9 de septiembre de 2026 · Para: Eric Toledano (LSSM / Final Upgrade AI) · Alimenta: dictamen del contrato marcado, secciones 3, 9 y 10.

## Fase 1 — Pre-flight

```
TEMA DE RESEARCH: Términos de mercado y marco legal mexicano vigente para la contrapropuesta: (1) topes de responsabilidad, (2) penas y créditos por SLA, (3) fuerza mayor con dependencia de plataformas de terceros, (4) componentes preexistentes y cesión de PI, (5) aceptación tácita y pago, (6) vigencia y texto exacto de las leyes citadas en el dictamen.
PROPÓSITO DOWNSTREAM: sustentar con fuentes verificables la contrapropuesta a Sports World y corregir citas legales desactualizadas antes de enviarla.
MÍNIMOS: queries 5+ · fetches 7+ intentos, 4+ exitosos · fuentes profesionales 4+ · queries anti-pattern 2+ · quotes 8+ de 4+ fuentes.
```

## Fase 2 — Log de tool calls

| # | Tool | Argumento | Resultado |
|---|---|---|---|
| 1 | web_search | "limitation of liability cap IT services agreement 12 months fees market standard technology contracts 2025" (ángulo A) | 6 resultados; útil: Legal Evolution (datos TermScout) |
| 2 | web_search | "SLA service credits penalties uncapped common mistakes sole remedy service provider" (ángulo B, anti-pattern) | 8 resultados; útiles: KWM, Bird & Bird SLALOM |
| 3 | web_search | "Model Services Contract gov.uk guidance service credits liability cap Crown Commercial Service" (ángulo C, estándar público) | 7 resultados; útiles: gov.uk, Pinsent Masons |
| 4 | web_search | "nueva Ley Federal de Protección de Datos Personales en Posesión de los Particulares 2025 vulneraciones de seguridad notificación encargado artículo" (ángulo D, cambio regulatorio) | 7 resultados; útiles: diputados.gob.mx, Garrigues |
| 5 | web_search | "pena convencional artículo 1843 Código Civil Federal no puede exceder obligación principal jurisprudencia reducción" (ángulo D) | 9 resultados; útiles: SCJN, vLex, UNAM |
| 6 | web_search | "SaaS agreement force majeure clause third-party providers cloud outage exclusion dispute" (ángulo E) | 8 resultados; útil: ABA Business Law Today |
| 7 | web_search | "deemed acceptance clause software development agreement pitfalls acceptance testing payment milestones vendor risk" (ángulo B, anti-pattern) | 9 resultados; útil: SEC EDGAR (contrato real) |
| 8 | web_search | "Chambers practice guide Mexico technology outsourcing 2025 limitation of liability intellectual property background IP" (ángulo E, México) | Sin capítulo México accesible |
| 9 | web_search | "Ley Monetaria de los Estados Unidos Mexicanos artículo 8 …" | PDF oficial localizado (LMEUM.pdf) |
| 10 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/CCF.pdf | PDF binario descargado; texto extraído localmente (370 págs., última reforma DOF 14-11-2025) |
| 11 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/LFDA.pdf | Descargado; extraído (87 págs., última reforma DOF 14-05-2026) |
| 12 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf | Descargado; extraído (291 págs., última reforma DOF 14-11-2025) |
| 13 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf | Descargado; extraído (24 págs., nueva ley DOF 20-03-2025, última reforma DOF 14-11-2025) |
| 14 | web_fetch | aws.amazon.com/compute/sla/ | ✅ citas verbatim |
| 15 | web_fetch | anthropic.com/legal/commercial-terms | ✅ citas verbatim (vigentes desde 17-06-2025) |
| 16 | web_fetch | gov.uk … model-services-contract-guidance-for-buyers-html | Solo página índice; remite al PDF |
| 17 | web_fetch | kwm.com … should-service-credits-be-the-sole-remedy… | ❌ redirección a landing |
| 18 | web_fetch | twobirds.com … slalom … service-credits | ❌ HTTP 402 |
| 19 | web_fetch | legalevolution.org/2022/08/what-is-market-for-limitation-of-vendor-liability… | ✅ citas verbatim (289 contratos negociados, TermScout) |
| 20 | web_fetch | garrigues.com … mexico-nueva-ley-federal-proteccion-datos… | ✅ 2 citas (fecha y autoridad) |
| 21 | web_fetch | sjf2.scjn.gob.mx/detalle/tesis/392697 | ❌ HTTP 403 |
| 22 | web_fetch | businesslawtoday.org/2021/11/saas-agreements-key-contractual-provisions/ | ✅ citas verbatim (Classen, 2-11-2021) |
| 23 | web_fetch | sec.gov … dex1044.htm (Software Development Agreement e-TRX / Hogg Robinson, 2004) | ✅ cláusula de aceptación tácita verbatim |
| 24 | web_fetch | practiceguides.chambers.com … technology-outsourcing-2025/mexico | ❌ guía retirada |
| 25 | web_fetch | gov.uk/government/publications/guidance-on-the-model-services-contract | ✅ URL del PDF (v2.2A, actualizado 1-09-2025) |
| 26 | web_fetch | pinsentmasons.com … how-uk-governments-new-model-services-contract-will-work | ✅ citas verbatim (27-05-2014) |
| 27 | web_fetch | revistas.unam.mx … rfdm/article/view/61700 | ❌ HTTP 403 |
| 28 | web_fetch | whatsapp.com/legal/business-solution-terms | Sin cláusulas de responsabilidad; remite a business-terms |
| 29 | web_fetch | mexico.justia.com … ley-monetaria… | ❌ HTTP 403 |
| 30 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/LMEUM.pdf | Descargado; extraído (40 págs., últimas reformas DOF 19-01-2026) |
| 31 | web_fetch | assets.publishing.service.gov.uk … Buyer_Guidance_-_MSC_v2.2A_2025.pdf | Descargado; extraído (132 págs., Crown copyright, septiembre de 2025) |
| 32 | web_fetch | whatsapp.com/legal/business-terms/ | ✅ citas verbatim (última actualización 16-02-2024) |
| 33 | web_fetch | scjn.gob.mx … ADR-5839-2017-180503.pdf | Descargado; extraído (14 págs., fragmento público del proyecto de sentencia) |
| 34 | web_fetch | vlex.com.mx/tags/pena-convencional-707702 | ✅ rubros de tesis (2025) |

Totales: 9 queries (2 anti-pattern) · 25 intentos de fetch · 16 con contenido verbatim utilizable · fuentes profesionales en las categorías explícitas del skill: 6 textos oficiales de gobierno (CCF, LFDA, CCom, LFPDPPP, Ley Monetaria, guía MSC de gov.uk), 1 archivo público de la SEC, 1 documento judicial de la SCJN, 3 documentos oficiales de proveedores (AWS, Anthropic, Meta/WhatsApp) y 1 publicación de colegio de abogados (ABA).

## Fase 3 — Quote extraction table

Citas verbatim del cuerpo de cada fuente. En los PDF oficiales la extracción automática inserta espacios espurios dentro de algunas palabras; las citas se transcriben con el espaciado normal del texto impreso y son verificables abriendo el PDF. Fecha de "última reforma" según el encabezado de cada PDF.

| Q# | Fuente (URL) | Cita verbatim |
|---|---|---|
| Q1 | https://www.diputados.gob.mx/LeyesBiblio/pdf/CCF.pdf (DOF 14-11-2025), art. 1843 | "Artículo 1843.- La cláusula penal no puede exceder ni en valor ni en cuantía a la obligación principal." |
| Q2 | CCF, art. 1847 | "No podrá hacerse efectiva la pena cuando el obligado a ella no haya podido cumplir el contrato por hecho del acreedor, caso fortuito o fuerza insuperable." |
| Q3 | CCF, art. 2111 | "Nadie está obligado al caso fortuito sino cuando ha dado causa contribuido a él, cuando ha aceptado expresamente esa responsabilidad, o cuando la ley se la impone." |
| Q4 | CCF, art. 2110 | "Los daños y perjuicios deben ser consecuencia inmediata y directa de la falta de cumplimiento de la obligación, ya sea que se hayan causado o que necesariamente deban causarse." |
| Q5 | CCF, art. 1949 | "La facultad de resolver las obligaciones se entiende implícita en las recíprocas, para el caso de que uno de los obligados no cumpliere lo que le incumbe." |
| Q6 | CCF, art. 1840 | "Pueden los contratantes estipular cierta prestación como pena para el caso de que la obligación no se cumpla o no se cumpla de la manera convenida." |
| Q7 | https://www.diputados.gob.mx/LeyesBiblio/pdf/LFDA.pdf (DOF 14-05-2026), art. 83 | "la persona física o moral que comisione la producción de una obra o que la produzca con la colaboración remunerada de otras, gozará de la titularidad de los derechos patrimoniales" |
| Q8 | LFDA, art. 103, segundo párrafo | "el plazo de la cesión de derechos en materia de programas de computación no está sujeto a limitación alguna" |
| Q9 | LFDA, art. 33 | "A falta de estipulación expresa, toda transmisión de derechos patrimoniales se considera por el término de 5 años." |
| Q10 | LFDA, art. 30 | "Los actos, convenios y contratos por los cuales se transmitan derechos patrimoniales y las licencias de uso deberán celebrarse, invariablemente, por escrito, de lo contrario serán nulos de pleno derecho." |
| Q11 | https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf (DOF 14-11-2025), art. 362 | "deberán satisfacer, desde el día siguiente al del vencimiento, el interés pactado para este caso, o en su defecto el seis por ciento anual" |
| Q12 | https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf, encabezado | "Nueva Ley publicada en el Diario Oficial de la Federación el 20 de marzo de 2025" |
| Q13 | LFPDPPP 2025, art. 19 | "que afecten de forma significativa los derechos patrimoniales o morales de las personas titulares le serán informadas de forma inmediata por el responsable" |
| Q14 | LFPDPPP 2025, definiciones, fracción XII | "Persona encargada: Persona física o jurídica que sola o conjuntamente con otras trate datos personales por cuenta del responsable" |
| Q15 | LFPDPPP 2025, art. 18 | "medidas de seguridad administrativas, técnicas y físicas que permitan proteger los datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado" |
| Q16 | https://www.diputados.gob.mx/LeyesBiblio/pdf/LMEUM.pdf (DOF 19-01-2026), art. 8 | "se solventarán entregando el equivalente en moneda nacional, al tipo de cambio que rija en el lugar y fecha en que se haga el pago" |
| Q17 | https://aws.amazon.com/compute/sla/ | "this SLA sets forth your sole and exclusive remedies, and AWS' sole and exclusive obligations, for any unavailability, non-performance, or other failure by us to provide Amazon EC2." |
| Q18 | AWS EC2 SLA | "caused by factors outside of our reasonable control, including any force majeure event or Internet access or related problems beyond the demarcation point of Amazon EC2" |
| Q19 | https://www.anthropic.com/legal/commercial-terms (vigentes 17-06-2025) | "Neither party will be liable for failure or delay in performance to the extent caused by circumstances beyond its reasonable control." |
| Q20 | Anthropic Commercial Terms | "is limited to Fees paid by Customer for the Services in the previous 12 months." |
| Q21 | https://www.whatsapp.com/legal/business-terms/ (16-02-2024) | "WE DO NOT WARRANT THAT OUR BUSINESS SERVICES OR ANY OTHER SERVICES WILL BE OPERATIONAL, ERROR FREE, SECURE, OR SAFE" |
| Q22 | WhatsApp Business Terms | "WE RESERVE THE RIGHT TO DISCONTINUE SOME OR ALL OF OUR BUSINESS SERVICES, IN OUR SOLE DISCRETION, INCLUDING CERTAIN FEATURES" |
| Q23 | https://www.legalevolution.org/2022/08/what-is-market-for-limitation-of-vendor-liability-a-look-at-the-data-322/ (Bill Mooz, 289 contratos negociados, TermScout) | "In the largest number of cases (39%), the parties agreed to a cap of 12 months' fees" |
| Q24 | Legal Evolution | "the following exclusions occur in over 40% of negotiated agreements: indemnification, confidentiality, death or personal injury, and fraud or willful misconduct" |
| Q25 | Legal Evolution | "secondary caps now appear in over 6% of vendor forms and over 32% of negotiated agreements" |
| Q26 | https://assets.publishing.service.gov.uk/media/68af2474960e2d135b4c8eb2/Buyer_Guidance_-_MSC_v2.2A_2025.pdf (tabla de topes) [TABLA] | "Per rolling 12-month period Service Credit Cap (a pre-agreed percentage of the estimated or actual Service Charges)" |
| Q27 | MSC Guidance v2.2(A) [TABLA] | "150% of the preceding year's Charges (calculated before Deductions are considered)" … "wilful breach of a fundamental term of the contract or wilful repudiatory breach of the Contract, in which case, it is 200%" |
| Q28 | https://www.pinsentmasons.com/out-law/analysis/how-uk-governments-new-model-services-contract-will-work (27-05-2014) | "Liability for service failures caused in any rolling 12 months is capped at the 'service credit cap', to be calculated as a percentage of the relevant charges." |
| Q29 | https://businesslawtoday.org/2021/11/saas-agreements-key-contractual-provisions/ (Classen, ABA, 2-11-2021) | "Almost all cloud providers insist on a waiver of any special incident or consequential damages and seek to limit the cloud provider's liability to any service level credits." |
| Q30 | ABA Business Law Today | "Common exclusions to the limitation of liability include intellectual property infringement, gross negligence, willful misconduct and some indemnification obligations." |
| Q31 | ABA Business Law Today | "SLAs almost never cover failover guarantees or contingencies that address issues beyond the cloud provider's control" |
| Q32 | https://www.sec.gov/Archives/edgar/data/1103025/000119312505126600/dex1044.htm (e-TRX / Hogg Robinson, 2004) | "(being not less than 30 days from receipt by HR), the Design Specifications shall be deemed to have been accepted by HR" |
| Q33 | https://www.garrigues.com/es_ES/noticia/mexico-nueva-ley-federal-proteccion-datos-personales-posesion-particulares-introduce (27-03-2025) | "La Secretaría de Anticorrupción y Buen Gobierno es designada como nueva autoridad en materia de protección de datos personales para particulares, reemplazando al INAI." |
| Q34 | https://www.scjn.gob.mx/sites/default/files/listas/documento_dos/2018-05/ADR-5839-2017-180503.pdf (Primera Sala, fragmento público del proyecto, párr. 58) | "El precepto transcrito prevé que la cláusula penal no puede rebasar el monto de la obligación principal y se establece como sanción para aquel que viola el pacto asumido" |
| Q35 | https://vlex.com.mx/tags/pena-convencional-707702 (rubro de tesis I.3o.C.96 C (11a.), 11-04-2025) | "PENA CONVENCIONAL. EL ARTÍCULO 1840 DEL CÓDIGO CIVIL PARA EL DISTRITO FEDERAL, APLICABLE PARA LA CIUDAD DE MÉXICO QUE LA PREVÉ, NO INFRINGE LA PROHIBICIÓN DE 'EXPLOTACIÓN DEL HOMBRE POR EL HOMBRE', PORQUE SE ACOTA CONFORME AL DIVERSO 1843" |
| S1 | Snippet de búsqueda (ContractKen, glosario) [SNIPPET-ONLY] | "The median testing window in enterprise software implementations is 20 business days, with 15 business days being most common" |
| S2 | Snippet de búsqueda (tesis sobre art. 1843, sin acceso al texto) [SNIPPET-ONLY] | "se refiere a cada obligación concreta por cuyo posible incumplimiento se pacta la pena convencional" |

## Fase 4 — Síntesis con etiquetas epistémicas

1. **[QUOTED] (Q20, Q23, Q25)** El tope de 12 meses de honorarios que propone el dictamen es el punto de mercado: es el resultado más frecuente en contratos negociados (39 %) y es el tope que Anthropic aplica en sus propios términos comerciales. Los topes secundarios para datos y confidencialidad aparecen en el 32 % de los contratos negociados: ofrecer un subtope de dos veces para esas materias es una posición defendible; nueve excepciones ilimitadas no lo son.
2. **[QUOTED] (Q24, Q30)** Las excepciones habituales al tope son indemnización de PI, confidencialidad, muerte o lesiones, fraude o dolo, y culpa grave. Ninguna fuente respalda excluir del tope las violaciones «intencionales o no» ni «cualquier indemnización» como pide Sports World.
3. **[QUOTED] (Q26, Q27, Q28)** Incluso el contrato modelo del gobierno británico (v2.2A, septiembre de 2025) limita la responsabilidad del proveedor al 150 % de los cargos anuales, 200 % solo por abandono o dolo, y somete los créditos por SLA a un tope preacordado por periodo móvil de 12 meses. Es un referente público, no de proveedor, para justificar el tope conjunto del 10 % de la iguala.
4. **[QUOTED] (Q17, Q18, Q29, Q31)** La estructura estándar de SLA es crédito como remedio único, con exclusión de causas fuera del control razonable del proveedor; los SLA no cubren contingencias fuera de ese control. La contrapropuesta debe fijar la pena como remedio único y excluir la infraestructura del cliente, las plataformas de terceros y la fuerza mayor.
5. **[QUOTED] (Q1, Q34, Q35)** El artículo 1843 del CCF limita la pena al valor de la obligación principal y la SCJN y una tesis de 2025 lo usan como criterio de razonabilidad. **[DERIVED] (Q1, S2)** Para penas por SLA, la obligación principal relevante es la iguala mensual; una tabla por evento y sin tope puede exceder ese límite en un mes con varias incidencias, de modo que el tope contractual evita la reducción judicial y el litigio. (S2 solo consta como snippet.)
6. **[QUOTED] (Q2, Q6)** El 1847 impide cobrar la pena cuando el incumplimiento proviene del acreedor o de caso fortuito, y el 1840 hace de la pena el remedio único por ese incumplimiento: el Contrato debe recogerlo expresamente para que una caída del servidor de Sports World no dispare la pena.
7. **[QUOTED] (Q3, Q19, Q21, Q22)** El 2111 solo obliga al caso fortuito a quien acepta expresamente ese riesgo: la Vigésima Primera marcada es esa aceptación. Meta no garantiza que sus servicios funcionen y se reserva discontinuarlos; Anthropic se excusa por causas fuera de su control razonable. **[DERIVED] (Q19, Q21, Q22)** LSSM no puede otorgar a Sports World garantías de disponibilidad que sus proveedores no le otorgan a LSSM: argumento de respaldo para la cláusula recíproca.
8. **[QUOTED] (Q4)** El 2110 exige que los daños sean consecuencia inmediata y directa del incumplimiento; la exclusión de daños indirectos y lucro cesante de la Vigésima es coherente con la ley y debe conservarse.
9. **[QUOTED] (Q7, Q8, Q9, Q10)** El 83 de la LFDA atribuye la titularidad de la obra por encargo a quien la comisiona salvo pacto en contrario; el 103 exime al software del límite temporal de la cesión; para contenido, imágenes y plantillas rige el 33 (5 años a falta de pacto) y el 30 (por escrito, onerosa y temporal). Corrección al dictamen: la cesión del código no requiere plazo, pero la de contenidos sí debe pactarse con plazo expreso.
10. **[QUOTED] (Q12, Q13, Q14, Q15, Q33)** La LFPDPPP vigente es la publicada el 20 de marzo de 2025: el artículo 19 obliga al responsable a informar «de forma inmediata» al titular las vulneraciones significativas; el 18 fija las medidas de seguridad; la ley define a la «persona encargada»; la autoridad es la Secretaría Anticorrupción y Buen Gobierno. Corrección al dictamen: la cita al «artículo 20» y al «Reglamento arts. 49–52» corresponde a la ley abrogada de 2010.
11. **[QUOTED] (Q11)** El interés moratorio legal mercantil es 6 % anual y el convencional es libre: 1 % o 1.5 % mensual es válido; la discusión es comercial, no legal.
12. **[QUOTED] (Q16)** Las obligaciones en moneda extranjera se solventan en pesos al tipo de cambio del día de pago; como el CFDI se emite en pesos y el 17.80 es un mecanismo de precio, no hay conflicto, siempre que la obligación quede expresada en pesos.
13. **[QUOTED] (Q32) + [SNIPPET-ONLY] (S1)** La aceptación tácita es una cláusula habitual: 30 días en un contrato real de desarrollo (SEC, 2004); las ventanas de prueba típicas rondan 15 a 20 días hábiles según un snippet no verificado. Los 10 días hábiles con aceptación tácita que pide el dictamen están dentro de ese rango.
14. **[QUOTED] (Q5)** La rescisión implícita del 1949 respalda tanto el «rescindir de pleno derecho» que conserva el cliente como el derecho de LSSM a rescindir por impago.
15. **[ABSENT]** Benchmarks específicos de topes de responsabilidad en contratos de TI en México: el capítulo México de Chambers Technology & Outsourcing 2025 no está disponible. Hipótesis sin evidencia; retraída. Recomiendo pedir el capítulo a un despacho suscrito o consultar a un abogado local.
16. **[ABSENT]** Vigencia del Reglamento de 2011 bajo la nueva LFPDPPP: la ley define «Reglamento» y remite a él, pero no localicé un transitorio que mantenga el de 2011. Sin evidencia; retraído. Verificar con abogado.

## Fase 5 — Forbidden patterns scan

☐ Ejecutado · sin detecciones. No hay autoridades sin URL, no hay paráfrasis presentadas como cita, no hay cifras sin fuente; los dos snippets están marcados [SNIPPET-ONLY] y las dos hipótesis sin evidencia están retraídas.

## Fase 6 — Audit checklist

☑ 9 queries ejecutadas (visible en log) · ☑ 25 intentos de fetch · ☑ 16 fetches con contenido verbatim · ☑ 12 fuentes profesionales en las categorías explícitas del skill · ☑ 2 queries anti-pattern (#2 y #7) · ☑ cada claim con Q# · ☑ cada claim etiquetado · ☑ ninguna paráfrasis presentada como cita · ☑ ninguna autoridad sin URL · ☑ scan ejecutado · ☑ sección de limitaciones presente.


## Segunda ronda (9 de septiembre de 2026, tarde)

| # | Tool | Argumento | Resultado |
|---|---|---|---|
| 35 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf | Descargado; extraído (457 págs., última reforma DOF 14-05-2026): arts. 12, 13, 14, 15 |
| 36 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf | Descargado; extraído (313 págs., DOF 01-04-2024): art. 27 fr. V |
| 37 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf | Descargado; extraído (128 págs., DOF 12-11-2021): arts. 1-A y 5 fr. II |
| 38 | web_fetch | diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf | Descargado; extraído (377 págs., DOF 09-04-2026): art. 15-D |
| 39 | web_fetch | dof.gob.mx/indicadores.php | ✅ «DOLAR 16.9202» al 09/09/2026 (www.dof.gob.mx devolvió 503) |
| 40 | web_fetch | banxico.org.mx SIE cuadro CF102 | ✅ FIX 16.8947, 09/09/2026 (la página tipcamb no mostró cifras) |
| 41 | web_fetch | bj.scjn.gob.mx/doc/tesis/392697 | ❌ HTTP 403 |
| 42 | web_fetch | linkedin.com/in/karla-sofia-ortiz-reyna-a6bb7693/ | ❌ HTTP 999 (bloqueo de LinkedIn) |
| 43 | web_fetch | sportsworld.com.mx/informe-anual/2016/sostenibilidad.php | ✅ citas sobre el Código de Ética |
| 44 | web_fetch | contractken.com/glossary/acceptance-testing-clause | ✅ cifras con atribución a Gartner 2023 y Thomson Reuters Practical Law 2024 |
| 45–50 | web_search | nuevo Reglamento LFPDPPP; tesis «obligación principal»; Karla Sofía Ortiz Reyna; María Fernanda Uriostegui; Notario 106 Mendoza Powell; Código de Ética Sports World; FIX 9-sep-2026 | Reglamento nuevo: no localizado. Tesis: I.4o.C. J/61, registro 392697 (metadatos). Karla: título de LinkedIn «GRUPO SPORTS WORLD». Uriostegui: sin resultados. Notaría 106: tres directorios. Código de Ética: existe, sin política de proveedores localizada. FIX: 16.9237 según prensa |

| Q# | Fuente | Cita verbatim |
|---|---|---|
| Q36 | LFT art. 12 (DOF 14-05-2026) | "Queda prohibida la subcontratación de personal, entendiéndose esta cuando una persona física o moral proporciona o pone a disposición trabajadores propios en beneficio de otra." |
| Q37 | LFT art. 13 | "Se permite la subcontratación de servicios especializados o de ejecución de obras especializadas que no formen parte del objeto social ni de la actividad económica preponderante de la beneficiaria" |
| Q38 | LFT art. 15 | "Las personas físicas o morales que proporcionen los servicios de subcontratación, deberán contar con registro ante la Secretaría del Trabajo y Previsión Social." |
| Q39 | CFF art. 15-D (DOF 09-04-2026) | "Tampoco se darán efectos fiscales de deducción o acreditamiento a los servicios en los que se proporcione o ponga personal a disposición del contratante" |
| Q40 | LISR art. 27 fr. V (DOF 01-04-2024) | "el contratante deberá verificar cuando se efectúe el pago de la contraprestación por el servicio recibido, que el contratista cuente con el registro a que se refiere el artículo 15 de la Ley Federal del Trabajo" |
| Q41 | LIVA art. 5 fr. II (DOF 12-11-2021) | "deberá obtener del contratista copia de la declaración del impuesto al valor agregado y del acuse de recibo del pago correspondiente al periodo en que el contratante efectuó el pago" |
| Q42 | LIVA art. 1-A fr. II a) | "Reciban servicios personales independientes, o usen o gocen temporalmente bienes, prestados u otorgados por personas físicas, respectivamente." |
| Q43 | DOF, indicadores, 09/09/2026 | "DOLAR 16.9202" |
| Q44 | Banco de México, SIE cuadro CF102, 09/09/2026 | "16.8947" (FIX, tipo de cambio para solventar obligaciones denominadas en dólares) |
| Q45 | LFPDPPP 2025, transitorio Décimo Segundo | "deberá expedir las adecuaciones correspondientes a los reglamentos y demás disposiciones aplicables, incluida la emisión del Reglamento Interior de Transparencia para el Pueblo, dentro de los noventa días naturales" |
| Q46 | ContractKen, glosario (atribuido a Thomson Reuters Practical Law, 2024) | "Deemed acceptance clauses appear in roughly 74 percent of vendor-drafted technology agreements and 48 percent of customer-drafted agreements" |
| Q47 | Sports World, informe anual 2016, sostenibilidad | "obsequios, información confidencial y privacidad de datos personales" |

Claims nuevos: **[QUOTED] (Q36–Q41)** el régimen de REPSE y deducibilidad depende de que el contratista ponga personal a disposición del beneficiario; **[DERIVED]** LSSM no lo hace, por lo que no requiere registro; aplicación a confirmar por abogado. **[QUOTED] (Q42)** sin retención de IVA entre personas morales. **[QUOTED] (Q43, Q44)** el 17.80 contractual está 5.4 % por encima del FIX del 9 de septiembre de 2026. **[QUOTED] (Q45)** sin reglamento nuevo localizado; el transitorio ordenó adecuaciones en 90 días. **[SNIPPET-ONLY]** tesis I.4o.C. J/61 y FIX 16.9237 de prensa.

## Limitaciones del research

- Bloqueos: SJF de la SCJN (403), Bird & Bird (402), UNAM (403), Justia (403), KWM (redirección), Chambers México (guía retirada). La tesis sobre «obligación principal = cada obligación concreta» consta solo como snippet (S2).
- Las citas de los PDF oficiales provienen de extracción automática; la herramienta inserta espacios espurios que se normalizaron. Verificación: abrir el PDF y buscar la frase.
- Q26 y Q27 son celdas de una tabla, no oraciones; Q23 a Q25 provienen de un análisis de datos de un tercero (TermScout) publicado en Legal Evolution, no de un paper revisado por pares.
- Q34 proviene del fragmento público de un proyecto de sentencia, no del engrose definitivo, y tanto Q34 como Q35 se refieren al artículo 1843 del Código Civil para el Distrito Federal, cuyo texto es idéntico al del Código Civil Federal citado en el dictamen.
- Las fuentes de mercado son anglosajonas; el derecho aplicable es mexicano. Los datos de mercado sirven como referencia de negociación, no como norma.

## Sugerencia de próximo paso

Aplicar las correcciones 9 y 10 al dictamen y a la contrapropuesta; incluir en la contrapropuesta la cita textual del 1847 y del 2111 en las cláusulas Séptima y Vigésima Primera, y sustituir «encargado» por «persona encargada» con referencia a la LFPDPPP publicada el 20 de marzo de 2025.
