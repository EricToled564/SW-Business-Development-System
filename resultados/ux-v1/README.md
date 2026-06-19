# Experiencia Ideal — UX V1 (sala limpia · única fuente de la verdad)

Esta carpeta contiene la **V1 del UX de Sports World «Experiencia Ideal»**, construida desde cero. A partir de su cierre, es la **única fuente de la verdad** de la lógica de negocio, la navegación y la experiencia del consumidor en el sitio web.

## Principios de la sala limpia

1. **Cero herencia.** Ningún contenido se copia de documentos previos. La verdad de negocio entra solo por el intake validado (`00-intake-reglas-de-negocio.md`).
2. **Sin referencias externas.** No se citan otras versiones, prototipos, demos, auditorías ni research. Si un dato no está confirmado, se marca `[POR DEFINIR]`.
3. **Reglas antes que pantallas.** Primero se blinda la lógica (base de reglas), luego se redacta el spec a partir de ella. Toda afirmación del spec es trazable a una regla con ID.
4. **Idioma:** español de México (es-MX). La arquitectura queda lista para una edición bilingüe posterior.

## Documentos planeados

| Documento | Estado |
| --- | --- |
| `00-intake-reglas-de-negocio.md` | Completo — índice de cobertura de los 10 dominios |
| `01-reglas-de-negocio.md` | **Poblada** — base de reglas trazable (F1 Propuesta SEO + F2 spec v4.2); pendiente resolver REC-01…06 y validación |
| `ux-spec-experiencia-ideal.md` | Pendiente — spec maestro |
| `anexo-clinico.md` · `anexo-contenido.md` · `anexo-ingenieria-crm.md` | Pendientes — anexos |
| `DESIGN.md` | Pendiente — tokens y lineamientos |
| `diagrama-de-flujo.md` | Pendiente — flujos Mermaid |

## Fase actual

**Fase 1 — Captura exhaustiva de lógica y reglas de negocio.** Se responde el intake; lo confirmado se promueve a `01-reglas-de-negocio.md`; lo no confirmado permanece `[POR DEFINIR]` hasta la compuerta de validación (Fase 2).
