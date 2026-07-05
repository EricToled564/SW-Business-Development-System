# Modelo operativo AI-first
## Humanos que curan, IA que produce

**Principio:** el costo interno se minimiza invirtiendo el ratio tradicional. En una agencia
clásica, 80% del tiempo humano es producción y 20% criterio. Aquí la producción (código, páginas,
variantes de copy, QA repetitivo) la hace Claude Code; el humano pone lo que la IA no puede:
criterio de marca, verdad del negocio, aprobación y responsabilidad ante el cliente.

| Fase | Lo hace Claude Code | Lo hace el humano |
|---|---|---|
| Spec | Redacta la spec desde los docs maestros | La corrige y la firma |
| Diseño | Genera variantes sobre el sistema de diseño | Elige, ajusta el ojo de marca |
| Producción | Código, 148 páginas por lotes, schema, optimización | Muestreo y aprobación por lote |
| QA | Lighthouse, WCAG, enlaces, schema, regresión visual | Revisión de criterio (¿se siente clase mundial?) |
| Integración | Middleware, BES, CMS, pruebas e2e | Validación con sistemas del cliente |

**Reglas de economía:**
- El humano nunca hace lo que una máquina verifica igual o mejor (enlaces, contraste, schema).
- La IA nunca decide lo que compromete al cliente (aprobar un gate, cerrar una spec, publicar).
- Todo retrabajo se ataca en la plantilla, no en las páginas: si una ficha sale mal, se corrige
  el generador y se regenera el lote — nunca se parchan 49 páginas a mano.
