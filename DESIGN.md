---
# Tokens legibles por máquina (M2M) — derivados de ux-spec-sports-world.md §9
# Cambiar un valor aquí es la fuente única de verdad; propaga a CSS y otras salidas.
tokens:
  color:
    brand:
      ink: "#1D1D1B"      # Pantone Black C — titulares y texto
      red: "#E6282A"      # Pantone 485C — SOLO acento y conversión
      white: "#FFFFFF"    # Pantone Bright White — superficie base
    gray: { 1: "#F5F5F4", 2: "#E5E5E3", 3: "#A8A8A6", 4: "#6B6B68" }
    block: { pesas: "#EEF5FF", cardio: "#EDF8F1", clases: "#F3F4F6" }
    feedback: { safety_amber: "#FFF6E7", cta_row: "#FFF4F4" }
  type:
    family: "Montserrat"
    headline: { weight: 900, lineHeight: 1.05 }
    kicker:   { weight: 700 }
    body:     { weight: 400, lineHeight: 1.5 }
  radius: { sm: 4, card: 6, pill: 9999 }
  space:  { xs: 4, sm: 8, md: 16, lg: 24, xl: 40 }
  layout:
    header_mobile_row1: 56
    header_mobile_row2: 44
    drawer_desktop: 560
    bes_panel_desktop: 420
    page_max: 1080
    tap_target_min: 44      # px (Apple HIG); 48dp Material
  breakpoint: { mobile: 375, tablet: 768, desktop: 1280 }
  motion:
    drawer_in: 320          # ms
    drawer_out: 240
    hover_open_delay: 200
    hover_close_grace: 300
contrast:
  min_ratio_aa: 4.5
  min_ratio_large: 3
lang: "es-MX"
compliance: ["WCAG 2.2 AA", "LFPDPPP", "YMYL"]
---

# Filosofía de diseño — Sports World

Marca **Premium fitness**. La sub-marca **FitKidz** es *Premium family fitness*; el encuadre familiar aplica solo en páginas FitKidz.

- **`brand.ink` (#1D1D1B)** es la tinta de titulares y cuerpo: austeridad premium, lenguaje medido.
- **`brand.red` (#E6282A)** señala **interactividad y conversión**. Úsalo solo en la CTA pill (*Agenda tu visita*), acentos y barras superiores. **Nunca** en bloques de texto.
- **`brand.white`** es la superficie base; la Club Ideal card invierte a fondo oscuro (`brand.ink`).
- **Montserrat**: 900 titulares, 600–700 kickers/tags, 400–500 cuerpo.

## Reglas para agentes (incluido el generador de copy de BES y la llamada única de LLM)

1. **Contraste:** nunca combines dos tokens cuyo contraste sea < 4.5:1 (texto normal) o < 3:1 (texto grande / UI). Si ocurre, **aborta y reporta en JSON**.
2. **Conversión:** `brand.red` se reserva para acciones de conversión; no lo uses como color de texto largo.
3. **Voz (copy):** sin signos de exclamación, sin emoji, sin anglicismos (usa *membresía*, *asesor*, *agenda*), sin titulares anzuelo. Segunda persona (tú). Verbos concretos. Párrafos ≤ 60 palabras.
4. **Prohibido en copy generado:** la palabra "plan" literal en hooks; códigos `Q1`–`Q19`; jerga técnica (hipertrofia, HIIT, VO2max, RPE, 1RM, déficit calórico…). Usa lenguaje accesible.
5. **YMYL:** ante condición médica, embarazo/posparto o tratamiento (Q12/Q12b/Q17): no diagnostiques, no prescribas intensidades, no afirmes que el lead "puede hacer todo". Siempre remite a que el Advisor valida con criterio clínico en la visita guiada.
6. **Hechos:** el LLM no genera, ordena ni filtra clases ni datos de club; solo selecciona IDs validados y produce conectores ≤ 15 palabras citando una respuesta del cuestionario.
7. **Accesibilidad:** declara `lang="es-MX"`; targets táctiles ≥ 44px; focus visible; cambios dinámicos con `aria-live`; ninguna interacción depende solo de hover.

## Tokens semánticos por componente

| Rol semántico | Token | Nota |
|---|---|---|
| Acción de conversión (CTA pill) | `color.brand.red` + `radius.pill` | Única acción tratada como prioritaria |
| Superficie de tarjeta | `color.brand.white` / Club Ideal: `color.brand.ink` | |
| Bloque 01 Pesas | `color.block.pesas` | Azul claro |
| Bloque 02 Cardio | `color.block.cardio` | Verde claro |
| Bloque 03 Clases | `color.block.clases` | Gris |
| Aviso de seguridad YMYL | `color.feedback.safety_amber` | Acompañado de ícono + texto, nunca solo color |
| Panel BES (desktop) | `layout.bes_panel_desktop` (420px) | Mobile: pantalla completa |
| Drawer (desktop) | `layout.drawer_desktop` (560px) | Mobile: pantalla completa |

> Documento canónico y completo: `ux-spec-sports-world.md`. Este `DESIGN.md` es su capa legible por máquinas.
