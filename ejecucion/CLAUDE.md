# Reglas del orquestador (Claude Code · Fable 5) — Ejecución Proyecto A

1. **Fuente de verdad:** `resultados/ux-v1/webapp/docs/`. Ninguna spec, copy o componente puede
   contradecir experience.es.md, technical.es.md, execution.es.md ni el Anexo Dos del contrato.
   Si una instrucción de trabajo contradice esos documentos, detente y señálalo.
2. **Producción por lotes con plantilla aprobada.** Nunca diseñar página por página: primero se
   aprueba la plantilla (gate Pilar, S2), después se generan los lotes (49 fichas, 54 clases, 10 hubs)
   con datos reales del catálogo. Un PR por lote, nunca commits directos a main.
3. **Presupuesto de calidad no negociable** (ver `00-modelo/gates-de-calidad.md`): CWV en verde,
   WCAG 2.2 AA, schema válido, 0 enlaces rotos, Lighthouse ≥ 95. Ningún PR se aprueba en rojo.
4. **Revisión adversarial antes de revisión humana:** todo lote pasa /code-review y el checklist de
   `04-plantillas/checklist-qa.md` ANTES de pedir aprobación al freelancer responsable. El tiempo
   humano es el recurso caro: llega a él solo lo que ya pasó las máquinas.
5. **Cero contenido inventado:** horarios, precios, amenidades y coordenadas salen del catálogo del
   cliente (Anexo Uno). Dato faltante = bloqueo reportado en el tablero de handoffs, no un invento.
6. **Español de México, tono de marca** conforme al brand book; términos técnicos según el
   glosario maestro del proyecto.
