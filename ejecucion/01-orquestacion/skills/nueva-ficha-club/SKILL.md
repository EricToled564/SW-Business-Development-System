---
name: nueva-ficha-club
description: Genera la ficha completa de un club Sports World a partir de la plantilla aprobada y los datos del catálogo. Usar cuando se pida crear o regenerar la página de un club.
---

1. Lee la plantilla de ficha aprobada (gate Pilar) y el registro del club en el catálogo
   (nombre, dirección, coordenadas, horarios, amenidades, clases, teléfono).
2. **Si falta un dato del catálogo: DETENTE** y repórtalo como bloqueo en el tablero de handoffs.
   Prohibido inventar horarios, precios o amenidades.
3. Genera la página: hero con nombre y dirección, amenidades con los componentes del sistema de
   diseño, clases del club, mapa y CTA de agendado con el cuestionario; schema LocalBusiness/Gym
   completo con coordenadas y horarios reales.
4. Corre la skill `qa-pagina`. No entregues con ningún check en rojo.
5. Suma la página al PR del lote con su reporte de QA.
