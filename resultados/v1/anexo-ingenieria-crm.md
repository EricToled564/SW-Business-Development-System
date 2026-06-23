# Anexo de ingeniería y CRM — Experiencia Ideal · Sports World

Este anexo reúne las decisiones de implementación que **caducan** (parámetros del modelo de lenguaje, saneamiento de salida) y la **lógica comercial** del lead, sin definir comportamiento de interfaz. El UX Spec referencia este anexo; los requisitos de producto viven allí, aquí vive su realización técnica.

## 1. Parámetros de la llamada al modelo de lenguaje

La Experiencia Ideal se genera con **una sola llamada** a un modelo de lenguaje, que devuelve en un único JSON el copy visible para el cliente y el brief interno del Asesor.

- **Modelo, temperatura, `max_tokens` y tiempo de espera** son parámetros de configuración. Ingeniería los fija al lanzar y los puede ajustar después; no son decisiones permanentes de producto.
- Cambiar cualquiera de estos parámetros **no puede** alterar el esquema JSON de salida, los límites de palabras, las reglas de seguridad YMYL ni la verificación (lint) obligatoria definida en `anexo-contenido-prompts.md`.
- El **esquema JSON** —las claves exactas del objeto de salida— es el contrato de interfaz entre el modelo y el front-end. Vive en el UX Spec (Apéndice C) y es de cumplimiento estricto.
- Como referencia operativa de partida: `max_tokens` ≈ 2000 es suficiente para el copy del cliente más el brief del Asesor; ajustar según mediciones reales de truncamiento.

## 2. Saneamiento de la salida

**Requisito (definido en el UX Spec):** ningún código del cuestionario (`Q1`–`Q19`) puede llegar al usuario.

Realización: tras parsear el JSON, se aplica una función de saneamiento recursiva sobre todas las cadenas —incluidas las anidadas en arreglos y objetos— que elimina cualquier referencia a códigos `Qn` y sus variantes en texto ("(Qn)", "según Qn", "para Qn", "en Qn") y colapsa los espacios sobrantes.

Después del saneamiento, ingeniería ejecuta la **verificación (lint) de salida** definida en `anexo-contenido-prompts.md`: vocabulario prohibido, la palabra "plan" en campos visibles, claims clínicos, hechos no soportados, límites de palabras, forma del JSON y códigos `Qn` remanentes. Si un campo falla, se reemplaza por el **fallback aprobado** de ese anexo y se registra el motivo para QA y observabilidad.

## 3. Calificación y enrutamiento del lead

Los pesos siguientes son **valores de partida** para priorización comercial; no son verdad estadística ni promesa de desempeño. Deben **calibrarse con datos reales a 30 / 60 / 90 días**: tasa de contacto, show rate, conversión a membresía, tiempo de respuesta y calidad reportada por los Asesores.

| Señal (respuesta del usuario) | Puntos |
| --- | :-: |
| Completa contacto y agenda visita | +40 |
| Q4 = Bajar de peso o Aumentar masa muscular (alta intención) | +20 |
| Q10 = Viene de otro gimnasio | +15 |
| Q19 = objetivo de cambio definido | +10 |
| Q9 = Avanzado o Intermedio | +5 |
| Solo exploró, sin agendar | +0 |

| Puntaje total | Enrutamiento |
| --- | --- |
| ≥ 60 | **Lead caliente → Asesor + agente de voz al instante** |
| 30–59 | Agenda estándar + recordatorio |
| < 30 | Nurturing por correo / retargeting |

### 3.1 Prioridad de la agenda (regla determinista)

Todo lead que **completó contacto y agendó visita** se enruta **siempre como caliente** (Asesor + agente de voz al instante), sin importar su puntaje. Agendar es la acción de mayor valor del embudo; el puntaje sirve para ordenar a quienes **aún no** agendaron. Por eso la señal "Completa contacto y agenda" no necesita alcanzar el umbral de 60 por sí sola: la regla de prioridad la coloca en caliente de forma directa, y los demás pesos solo ordenan a los no-agendados entre las colas de 30–59 y <30.

### 3.2 Observabilidad mínima

El CRM debe guardar como **campos separados** —no como una sola nota de texto— al menos: el puntaje total, las señales que sumaron puntos, el club resuelto, el origen de entrada, las banderas clínicas del brief y si el lead agendó visita. Ventas necesita leer la nota; Producto necesita medir los campos.

### 3.3 Reglas de seguridad

El puntaje **nunca** reduce la atención de leads con banderas clínicas —embarazo o posparto, cirugía bariátrica, tratamiento con GLP-1, lesión—. Esas banderas cambian el **tipo de asesoría** requerida, no el derecho a una respuesta. El Asesor recibe el brief con las banderas; el sistema no usa el puntaje para negar seguimiento.
