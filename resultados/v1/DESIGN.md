---
meta:
  product: "Sports World — Experiencia Ideal"
  lang: "es-MX"
tokens:
  color:
    brand:
      primary: "#E6282A"      # rojo de marca — SOLO fondos de botón/acento, NUNCA texto pequeño (no pasa AA)
      primaryText: "#C81E20"  # variante oscura para TEXTO en rojo (~5.5:1 sobre blanco, AA)
    text:
      ink: "#1D1D1B"
      muted: "#6B6B68"
      disabled: "#A8A8A6"
    border:
      default: "#E5E5E3"
    surface:
      base: "#F5F5F4"
      white: "#FFFFFF"
    block:
      strength: "#EEF5FF"     # Bloque 01 — pesas
      cardio: "#EDF8F1"       # Bloque 02 — cardio
      classes: "#F3F4F6"      # Bloque 03 — clases
    cta:
      bannerBg: "#FFF4F4"
      bannerBorder: "#F3B9BC"
    safety:
      bg: "#FFF6E7"           # sección YMYL de seguridad
  type:
    fontFamily: "'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    heading: { family: "Montserrat", weight: 900, lineHeight: 1.2 }
    body: { family: "Montserrat", weight: 400, lineHeight: 1.5 }
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 40 }
  radius: { sm: 4, md: 8, lg: 16 }
  breakpoints: { mobile: 360, tablet: 768, laptop: 1024, desktop: 1440 }
contrast:
  min_ratio_aa: 4.5
  min_ratio_aa_large: 3.0
  flagged:
    - pair: "brand.primary (#E6282A) sobre surface.white (#FFFFFF)"
      ratio: 4.47
      rule: "FALLA texto normal (<4.5). Solo válido en texto >=18.66px bold o >=24px, o como fondo."
    - pair: "brand.primary sobre surface.base (#F5F5F4)"
      ratio: 4.09
      rule: "FALLA. No usar rojo de texto sobre superficie base."
    - pair: "brand.primary sobre text.ink (#1D1D1B)"
      ratio: 3.78
      rule: "FALLA. Usar blanco o variante clara, no rojo."
    - pair: "white sobre brand.primary (#E6282A)"
      ratio: 4.47
      rule: "FALLA a 15px regular. El texto del botón debe ser >=18.66px bold."
    - pair: "brand.primaryText (#C81E20) sobre white"
      ratio: 5.5
      rule: "PASA AA. Es la variante a usar para CUALQUIER texto en rojo."
---

# Sistema de diseño — Experiencia Ideal

Este documento define los **tokens** (fuente única de color, tipografía, espaciado y contraste), las **reglas de accesibilidad visual**, los **lineamientos de estilo premium** y las **reglas para agentes de IA** que generan interfaz. El bloque YAML de arriba es la versión legible por máquina; el cuerpo lo explica en prosa.

## Filosofía de diseño

El **primario** (`#E6282A`, rojo Sports World) es el color de **acción y conversión**. Úsalo solo como **fondo** de CTA, con texto blanco ≥18.66px en negrita. **Nunca** lo uses para texto pequeño: su contraste real es **4.47:1 sobre blanco**, **4.09:1 sobre la superficie base** y **3.78:1 sobre la tinta** — los tres **fallan** WCAG AA para texto normal. Para cualquier **texto** en rojo usa la variante oscura **`#C81E20`** (~5.5:1, AA).

La **tinta** (`#1D1D1B`) es el texto principal; el **muted** (`#6B6B68`) es para texto secundario y ayudas. El sistema es **claro y sobrio**: superficies casi blancas, mucho aire, y el rojo como única señal de «haz clic aquí».

Los **tres bloques de color** traducen una idea: el entrenamiento tiene tres componentes, y cada uno tiene su propio espacio mental.
- `block.strength` azul → pesas (Bloque 01).
- `block.cardio` verde → cardio (Bloque 02).
- `block.classes` gris → clases (Bloque 03).

Son fondos suaves; el texto encima siempre es tinta `#1D1D1B`.

El **ámbar de seguridad** (`#FFF6E7`) marca la sección sensible (condiciones médicas, embarazo, tratamientos). Siempre acompañado de ícono «!» y texto: la información de seguridad **no se comunica solo con color**.

## Alcance: qué define este documento y qué decide el equipo de diseño

Este documento **no impone el diseño gráfico**. La creación de las opciones visuales —layouts a alta fidelidad, sistema de componentes, retícula, tratamiento fotográfico, iconografía, micro-interacciones— es **entregable del equipo de desarrollo/diseño**, construido a partir de los activos de marca del cliente.

| El UX Spec **sí** define (vinculante) | El equipo de diseño **decide** (crea las opciones) |
| --- | --- |
| Comportamiento, flujos, estados y contenido de cada pantalla | La composición visual concreta de cada pantalla |
| **Tokens** que son restricciones reales: color de marca y los **mínimos de contraste WCAG 2.2 AA** | Escala tipográfica fina, jerarquía visual, densidad, retícula y espaciado dentro de los tokens |
| Estructura de información (p. ej. resultado = 3 bloques + Club Ideal + sección de seguridad) | Cómo se ven esos bloques: tarjetas, listas, acordeones, etc. |
| El **copy** verbatim y la voz de marca | Composición, fotografía e ilustración |
| Los **lineamientos de estilo premium** (abajo) como vara de aprobación | Las propuestas que cumplen esos lineamientos |

## Jerarquía normativa

Este documento gobierna tokens, contraste, accesibilidad visual y lineamientos premium. No gobierna comportamiento, flujos, reglas clínicas, CRM ni prompts. Si hay tensión entre documentos:

- `ux-spec-experiencia-ideal.md` decide comportamiento, estados, arquitectura de información y estructura de contenido.
- `DESIGN.md` decide restricciones visuales, tokens y criterios de calidad premium.
- Cualquier composición final de alta fidelidad debe cumplir este archivo y el UX Spec; si no cumple ambos, no está lista para handoff.

## Lineamientos de estilo premium (la vara de aprobación)

El estilo objetivo es **«fitness premium»**: confianza, claridad y aire — más cerca de una revista editorial o de una marca de hospitalidad de lujo que de un gimnasio de catálogo. Las propuestas de diseño se aprueban contra estos diez puntos:

1. **Editorial, no catálogo.** El resultado es un *documento personalizado*, no una lista de precios. Jerarquía clara, una idea por sección y mucho espacio en blanco que comunica calma y exclusividad. El vacío es premium.
2. **La fotografía manda.** Imágenes reales, humanas y aspiracionales (luz cuidada, instalaciones reales del club). Nunca stock genérico ni saturado. AVIF/WebP, responsivas. La foto vende el «tercer espacio»; el texto lo confirma.
3. **El rojo es un bisturí, no un marcador.** `#E6282A` se reserva para la **acción de conversión** (un CTA dominante por vista). Su escasez es lo que lo hace premium.
4. **Tipografía con confianza.** Montserrat: títulos en 900 con peso y contraste alto; cuerpo en 400 con interlineado generoso (1.5). Jerarquía por **tamaño y peso**, no por colores.
5. **Superficies tranquilas, un solo acento.** Fondos casi blancos, tinta `#1D1D1B`, bordes sutiles. Un acento (el rojo) y nada más compitiendo.
6. **Señales de confianza visibles.** Lo premium también es *prueba*: fotos reales del club, horarios reales, reseñas, amenidades y la firma médica con cédula en contenido YMYL. El diseño les da peso visual, no los esconde.
7. **Movimiento con propósito.** Micro-interacciones sutiles, nunca decorativas. Respetar `prefers-reduced-motion`.
8. **La accesibilidad ES parte de lo premium.** WCAG 2.2 AA es el piso: contraste, foco visible, objetivos táctiles ≥44px, «no solo color». Un producto premium no excluye a nadie.
9. **Consistencia en 49 clubes y 155 páginas.** El sistema de plantillas garantiza que cada club se sienta del mismo nivel. La dispersión visual se lee como descuido.
10. **Densidad correcta por dispositivo.** Mobile-first (breakpoints 360/768/1024/1440): en móvil, una columna respirada; al crecer, se gana aire y composición, no se amontona.

## Reglas para agentes de IA que generan interfaz

- Antes de generar UI, valida cada par texto/fondo contra `contrast.min_ratio_aa` (4.5:1) o `min_ratio_aa_large` (3:1 para ≥24px o ≥18.66px en negrita). Si un par incumple, **interrumpe** y reporta en JSON `{ "violacion": "<token> sobre <token>", "ratio": <n> }`.
- El **acento rojo** se reserva para la conversión. No lo uses en texto.
- Respeta la escala `space` (múltiplos de 4) y `radius`; no inventes valores intermedios.
- Idioma fijo `es-MX`; aplica concordancia de género cuando Q2 = Mujer; si Q2 = «Prefiero no mencionarlo», usa el masculino por defecto.
- **Prohibida la jerga técnica** en copy de cara al usuario (ver `anexo-contenido-prompts.md`). Usa lenguaje accesible: «crecimiento muscular», «ritmo conversacional», «intervalos al máximo».
- **Restricciones YMYL:** con condición médica, embarazo o tratamiento, no diagnostiques ni prescribas intensidades; remite a la validación del Asesor.

## Dónde vive cada pieza (sin duplicación)

Cada contenido tiene una sola copia autoritativa; duplicarlo entre documentos genera divergencia.

| Contenido | Vive en |
| --- | --- |
| Tokens, contraste y lineamientos premium | `DESIGN.md` (este archivo) |
| Comportamiento, flujos, estados, casos límite | `ux-spec-experiencia-ideal.md` |
| Estructura de contenido de la página de resultado | `ux-spec-experiencia-ideal.md` §6.17 |
| Voz de marca, prohibiciones del prompt, lint y fallbacks | `anexo-contenido-prompts.md` |
| Matriz de contraindicaciones, fichas y subgrupos | `anexo-clinico.md` |
| Parámetros del modelo, saneamiento y calificación de leads | `anexo-ingenieria-crm.md` |
