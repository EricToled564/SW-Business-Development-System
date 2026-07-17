# Experiencia Ideal v5 — paquete fuente de verdad

Este paquete contiene los documentos Markdown que gobiernan la siguiente fase de diseño, ingeniería, contenido, CRM y QA para Sports World — Experiencia Ideal.

## Documentos

| Documento | Rol normativo |
| --- | --- |
| `ux-spec-experiencia-ideal.md` | Fuente principal de comportamiento, flujos, estados, arquitectura de información, edge cases, privacidad, acceptance criteria y métricas. |
| `ux-spec-agente-whatsapp.md` | Especificación del canal WhatsApp conversacional (texto): agente ElevenLabs Chat Mode + servicio Experiencia Ideal reutilizado, máquina de estados, cuestionario Q1–Q19 por texto con % de avance, correos al lead y al club, recordatorios por plantilla 24 h/2 h. Homogenizado con el canal web. |
| `anexo-clinico.md` | Fuente única de datos clínicos, contraindicaciones, fichas por objetivo y mapeos de entrenamiento individual. Requiere validación MD antes de producción YMYL. |
| `anexo-contenido-prompts.md` | Fuente única de voz, tono, prohibiciones del prompt, lint de salida LLM, ejemplos aprobados y fallbacks. |
| `anexo-ingenieria-crm.md` | Decisiones de implementación que caducan, parámetros LLM, saneamiento, defaults de lead scoring y observabilidad CRM. |
| `DESIGN.md` | Tokens, contraste, accesibilidad visual y lineamientos premium para diseño. |

## Jerarquía

1. UX Spec decide comportamiento y contrato funcional.
2. Anexo clínico decide datos clínicos y seguridad YMYL.
3. Anexo de contenido decide copy generado, voz, lint y fallbacks.
4. Anexo ingeniería/CRM decide implementación configurable y ventas.
5. DESIGN decide tokens y restricciones visuales.

El prototipo histórico `sw_experiencia_ideal_demo_v6_FINAL.jsx` no gobierna v5. Puede consultarse como referencia, pero cualquier diferencia se resuelve a favor de este paquete.

## Estado

v5 está consolidada como fuente de verdad documental. Quedan dependencias externas antes de producción: validación médica, datos faltantes del cliente, Figma inspect final, tags editoriales del Journal y calibración de CRM con datos reales.
