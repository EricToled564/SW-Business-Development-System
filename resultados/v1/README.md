# Experiencia Ideal — Sports World · Paquete de especificación (v1)

Este paquete define, de principio a fin, la experiencia digital del sitio público **sportsworld.com.mx** y su flujo de conversión **«Experiencia Ideal»**. Es el contrato de trabajo entre Producto, Diseño, Ingeniería, Contenido, CRM, QA y validación clínica.

**Principio rector:** si una regla, flujo, dato o criterio no está descrito en este paquete, no forma parte del alcance aprobado.

## Documentos

| Documento | Qué decide |
| --- | --- |
| `ux-spec-experiencia-ideal.md` | Contrato principal: objetivos, arquitectura de información, cuestionario, motor de personalización, especificación por pantalla, estados, casos límite, accesibilidad, privacidad, criterios de aceptación y métricas. |
| `diagrama-de-flujo.md` | Diagramas de flujo de extremo a extremo: recorrido del usuario, máquina de estados, lógica adaptativa del cuestionario, motor de resultado y enrutamiento del lead. |
| `anexo-clinico.md` | Datos clínicos: matriz de contraindicaciones, fichas por objetivo, prescripciones y subgrupos de entrenamiento individual. Requiere validación de un médico del deporte antes de producción (contenido YMYL). |
| `anexo-contenido-prompts.md` | Voz de marca, prohibiciones del prompt, verificación (lint) de la salida del LLM, ejemplos aprobados y textos de respaldo (fallbacks). |
| `anexo-ingenieria-crm.md` | Parámetros configurables de implementación, saneamiento de salida y reglas de calificación y enrutamiento de leads. |
| `DESIGN.md` | Tokens de diseño, contraste, accesibilidad visual y lineamientos de estilo premium. |

## Orden de precedencia entre documentos

Si dos documentos entran en tensión, se resuelve en este orden:

1. **`ux-spec-experiencia-ideal.md`** — comportamiento, flujos, estados, arquitectura de información y estructura de contenido.
2. **`anexo-clinico.md`** — seguridad YMYL, datos clínicos, contraindicaciones y mapeos de entrenamiento.
3. **`anexo-contenido-prompts.md`** — copy generado, voz, verificación de salida y fallbacks.
4. **`anexo-ingenieria-crm.md`** — parámetros configurables, saneamiento, calificación y enrutamiento de leads.
5. **`DESIGN.md`** — tokens, contraste, accesibilidad visual y criterios de calidad premium.

## Convenciones del paquete

- **Idioma del producto:** español de México (es-MX). El copy de interfaz citado entre comillas es definitivo. La prosa de la especificación también está en español.
- **Referencias cruzadas:** por número de sección (§X.Y). No se usa una numeración paralela de reglas.
- **Códigos del cuestionario:** Q1–Q19 (con condicionales Q11, Q12b, Q14b, Q17–Q19) son identificadores internos; nunca aparecen en el copy visible.

## Insumos pendientes antes de producción

Estos puntos los provee el cliente o un tercero y bloquean el cierre a producción:

1. **Validación médica (YMYL):** un médico del deporte debe firmar la matriz de contraindicaciones y las prescripciones del `anexo-clinico.md`.
2. **Datos faltantes del cliente:** disponibilidad por club de las clases sin programación, nombres de actividades FitKidz por club, y fuentes de datos de amenidades (ver §13.1 del UX Spec).
3. **Enlace de handoff visual** (inspección de diseño) antes del congelamiento de build.
4. **Etiquetas editoriales** del Diario para el enlazado interno.
5. **Calibración del CRM** (pesos de calificación de leads) con datos reales a 30/60/90 días.
