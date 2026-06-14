# Anexo de ingeniería y CRM — Experiencia Ideal

> Decisiones de implementación que caducan (modelo, parámetros) y lógica de ventas sin comportamiento de UI. El UX Spec referencia este anexo.

## R12 — Parámetros de la llamada LLM (caducan; ingeniería)
- Modelo (prototipo de referencia): Claude Sonnet (`claude-sonnet-4-20250514`). `max_tokens`: 2000. Una sola llamada que devuelve copy del cliente + brief del asesor.
- El **esquema JSON** (claves exactas) permanece en el spec (Apéndice H) como contrato de interfaz.
- Estos parámetros son configurables y caducan. Ingeniería debe tratarlos como valores de lanzamiento, no como decisión permanente de producto. Cambiar modelo, temperatura o `max_tokens` no puede cambiar el schema, los límites de palabras, las reglas YMYL ni el lint obligatorio definido en `anexo-contenido-prompts.md`.

## R13 — Saneamiento (implementación; el requisito vive en el spec)
Requisito del spec: ningún código Qn llega al usuario. Implementación de referencia (prototipo): `stripQCodes` con regex sobre "(Qn)", " en Qn", " para Qn", " según Qn", "Qn" + colapso de espacios; `sanitize()` recursivo sobre strings/arrays/objetos del JSON parseado.

Después de `sanitize()`, ingeniería debe ejecutar el lint de salida definido en `anexo-contenido-prompts.md`: vocabulario prohibido, palabra "plan" en campos visibles, límites de palabras, forma JSON, claims clínicos, facts no soportados y Q-codes remanentes. Si un campo falla lint, se reemplaza por el fallback aprobado de ese anexo y se registra el motivo para QA/observabilidad.

## R14 — Lead scoring y enrutamiento (CRM/ventas; defaults v5 configurables)

Los pesos siguientes son **defaults de lanzamiento** para priorización comercial. No son verdad estadística ni promesa de desempeño. Deben calibrarse con datos reales a los 30/60/90 días: tasa de contacto, show rate, conversión a membresía, tiempo de respuesta y calidad reportada por asesores.



| Señal (respuesta) | Puntos | 
|---|---|
| Completa contacto + agenda | +40 |
| Q4 = Bajar de peso / Masa muscular (alta intención) | +20 |
| Q10 = Viene de otro gimnasio | +15 |
| Q19 objetivo de cambio definido | +10 |
| Q9 = Avanzado / Intermedio | +5 |
| Solo curioseó, sin agenda | +0 |

| Puntaje | Enrutamiento |
|---|---|
| ≥ 60 | **Lead caliente → asesor + agente de voz al instante** |
| 30–59 | Agenda estándar + recordatorio |
| < 30 | Nurturing por correo / retargeting |

**Override determinista (agenda completada).** Todo lead que completó contacto **y** agendó visita se enruta **siempre como caliente** (asesor + agente de voz al instante), sin importar su puntaje. Agendar es la acción de mayor valor del embudo; el puntaje sirve para priorizar a los leads que **aún no** agendaron. Por eso "Completa contacto + agenda" (+40) no necesita alcanzar el umbral de 60 por sí solo: el override lo coloca en caliente directamente, y los demás pesos solo ordenan a los no-agendados entre las colas de 30–59 y <30.

### R14.1 Observabilidad mínima

CRM debe guardar, como campos separados, el puntaje total, las señales que sumaron puntos, el club resuelto, el origen de entrada, los flags críticos del brief y si el lead agendó visita. No guardar únicamente una nota textual: ventas necesita leerla, pero producto necesita medirla.

### R14.2 Reglas de seguridad

El score nunca debe reducir la atención de leads con banderas clínicas, embarazo/posparto, bariátrica, GLP-1 o lesión. Esas banderas cambian el tipo de asesoría requerida, no el derecho a respuesta. El asesor recibe el brief con flags; el sistema no usa el score para negar seguimiento.
