---
name: qa-pagina
description: Verifica que una página cumpla el presupuesto de calidad del proyecto (Lighthouse, WCAG, schema, enlaces, imágenes). Usar antes de agregar cualquier página a un PR.
---

Corre y reporta, en este orden (todo debe quedar en verde):
1. Lighthouse (móvil): Performance, SEO, Best Practices y Accessibility ≥ 95.
2. axe-core: 0 violaciones WCAG 2.2 AA.
3. Schema JSON-LD válido (estructura y campos obligatorios del tipo correspondiente).
4. Enlaces internos y assets: 0 rotos; imágenes en AVIF/WebP con srcset y lazy-loading.
5. Textos contra el glosario del proyecto (términos técnicos correctos, es-MX).
Reporta el resultado como tabla al final del PR. Si algo queda en rojo tras 2 intentos de
corrección, márcalo como bloqueo — no lo escondas.
