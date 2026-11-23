# Motivo de inscripción y posicionamiento de Sports World en «bajar de peso»

Investigación abierta por la observación de Eric (23 nov. 2026): Sports World no publicita bajar de peso; es uno de los problemas que identifica el diagnóstico de posicionamiento orgánico. El white paper v1 partía del supuesto contrario («pierde si sigue vendiendo solo bajar de peso») y estaba mal enfocado desde la primera frase.

## A. Lo que establece el depósito sobre Sports World (hechos de la empresa, no dependencia del proyecto web)

| Hecho | Cifra | Fuente en el depósito |
|---|---|---|
| Universo de búsqueda «bajar de peso» en México | 932,300 búsquedas/mes; «la intención de mayor volumen de la industria fitness en México» | `resultados/ux-v1/webapp/docs/auditoria.es.md` §1.1 (Semrush, México, feb.-mar. 2026) |
| Presencia de Sports World en ese universo | 2 de 10,000 palabras clave: **0.02%** | misma fuente, §1.1 y §2.2 |
| Universo atendible (sin médico/farmacéutico) | 8,834 palabras clave, 730,360 búsquedas/mes | misma fuente, §3 |
| Diagnóstico | «El objetivo que no se atiende: bajar de peso»; una «omisión de Sports World» | `arquitectura/fuente/arquitectura.es.md` §2.2.1 y D-103 (líneas 546 y 7783) |
| Lo que dice la fuerza de ventas | Objetivo «estético-físico» (bajar de peso, cambio físico visible, masa muscular) «el más frecuente: "ochenta o noventa por ciento busca un cambio físico"» | `resultados/ux-v1/webapp/docs/entrevistas-campo.es.md` línea 28; `correspondencia/propuesta-reestructura-proceso-ventas.es.md` línea 248 («Bajar de peso — el más frecuente») |

Nota: la auditoría afirma «Perder peso es el objetivo #1 por el que las personas se unen a un gimnasio» (§3) sin citar fuente externa. La cifra de 80-90% es testimonio de campo de asesores de Sports World, no encuesta, e incluye objetivos estéticos y de masa muscular además de bajar de peso.

## B. Fuentes externas sobre el motivo para inscribirse a un gimnasio (consultadas el 23 nov. 2026)

| Fuente | Población y método | Hallazgo | Etiqueta |
|---|---|---|---|
| Eguchi A. et al., JMIR mHealth uHealth 2023, PMC10666009, PMID 37938885 | 28,840 socios de una cadena nacional de gimnasios de Japón que fijaron una meta de peso en la app de la cadena (2014-2019) | «a substantial **92.2%** (n=26,589 individuals) targeted weight loss, while a mere 7.8% … aimed at weight gain» | VERIFIED (pasaje del texto completo indexado). Universo: socios que fijaron meta de peso, no todos los socios |
| Fogel J., Ustoyev S., Journal of Consumer Marketing 2021;38(1):27-38, doi 10.1108/JCM-02-2020-3621 | Revisión de literatura en artículo de mercadotecnia | «The most common motivation for joining a fitness club/gym is to lose weight (Alfawaz et al., 2018; Crossley, 2006)» | SNIPPET-ONLY (la frase se vio en el buscador; la página del artículo solo mostró el resumen). Referencias citadas verificadas en la página: Crossley, Body & Society 2006;12(3):23-50; Alfawaz et al., IJSNEM 2018;28(5):509-514 |
| Alfawaz H.A. et al., IJSNEM 2018, PMID 29140146 | Socios varones de gimnasios, Arabia Saudita | Motivos principales: bajar de peso 35%, ganar músculo 35%, mantenerse en forma 24% | VERIFIED (resumen) |
| Mercado Fitness, «¿Qué quiere el cliente?» México | ~19,000 respuestas, autoselección, respuesta múltiple | Salud 67%, apariencia física 42%, resultados visibles 36%, bajar de peso 32% | VERIFIED (nota 01) |
| Evidens y QuestionPro, «Gym Rat», 2025 | Más de 1,500 personas en México, Colombia y Perú | Motivación para entrar al gimnasio en México: mejorar la salud 26%, perder peso 16% | VERIFIED (página leída; método de pregunta no publicado) |
| HFA 2024, Latinoamérica | Activos urbanos, hasta 3 respuestas | «To lose weight» 20.9% | VERIFIED (nota 01) |
| Gjestvang C. et al., Scand J Med Sci Sports 2020, PMC7497044 | 250 socios nuevos, Oslo, escala EMI-2 | Salud positiva, fuerza/resistencia y movilidad puntúan más alto; control de peso en quinto lugar (3.18/5 al inicio) | VERIFIED |
| Encuesta Nacional de Tendencias Fitness México 2024 (Retos) | Profesionales del fitness | Tendencia n.º 1: «Programas de ejercicio y pérdida de peso» | SNIPPET-ONLY |

## C. Conclusión verificable

1. **Lo que sí se sostiene con fuente:** bajar de peso es la intención de búsqueda de mayor volumen de la industria fitness en México (932,300 búsquedas al mes) y Sports World está ausente de ella (0.02%). En el campo comercial de Sports World es el objetivo más frecuente. En una cadena de gimnasios con 28,840 socios que fijaron meta de peso, 92.2% quería bajar. La literatura de mercadotecnia lo describe como el motivo más común para inscribirse.
2. **Lo que no se encontró:** una encuesta representativa que mida que **más de la mitad** de quienes se inscriben a un gimnasio lo hacen para bajar de peso. Las encuestas de respuesta múltiple lo ubican entre 16% y 43%, por debajo de «salud». La frase defendible es «el objetivo concreto más frecuente», no «la mayoría», salvo que se cite el testimonio de campo (80-90% busca un cambio físico) o los datos de altas del CRM.
3. **Consecuencia para el white paper:** el riesgo no es que Sports World pierda un mercado que hoy vende, sino que el medicamento capture primero la mayor demanda de la industria —la que Sports World nunca ha atendido— y que los socios que llegan con ese objetivo, el más frecuente según su propia fuerza de ventas, encuentren en el fármaco una alternativa. El supuesto de «motivo bajar de peso» del modelo (20.9% a 32%) es conservador frente al testimonio de campo y debe recalibrarse.
