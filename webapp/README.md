# Sports World — Experiencia Ideal · Dev Docs (web app)

Aplicación web estática y **bilingüe (ES/EN)** que organiza, de forma exhaustiva y navegable, toda la documentación de la **Experiencia Ideal** para los equipos de desarrollo.

## Qué incluye

- **Todo el contenido** de los dos documentos fuente:
  - `resultados/ux-spec-experiencia-ideal.md` (experiencia, flujo, reglas, edge cases, apéndices).
  - `resultados/DESIGN.md` (tokens, voz de marca, arquitectura visual, plantilla HTML).
- **Temario / menú lateral** generado desde los encabezados (jerárquico, filtrable por documento).
- **Buscador** instantáneo sobre títulos y cuerpo.
- **Toggle de idioma ES / EN**: cada sección se muestra en español o inglés.
- **Navegación anterior/siguiente** y enlaces directos por `#hash`.
- Responsive (móvil con menú colapsable) y accesible (skip-link, focus, roles ARIA).

## Cómo correrla

Es estática; necesita un servidor HTTP simple (por el `fetch` de `content.json`):

```bash
cd webapp
python3 -m http.server 8080
# abrir http://localhost:8080
```

O desplegar la carpeta `webapp/` en cualquier hosting estático (GitHub Pages, Netlify, S3).

## Arquitectura

| Archivo | Rol |
|---|---|
| `index.html` | Shell: topbar, sidebar/temario, área de contenido. |
| `styles.css` | Estilos con tokens de marca (`#E6282A`, etc.). |
| `app.js` | Lógica: TOC, render Markdown (marked.js CDN), idioma, búsqueda, filtro, pager. |
| `content.json` | **Datos**: todas las secciones con `title`/`body` en `{es, en}`. |
| `build_content.py` | Regenera `content.json` desde las fuentes + traducciones. |

## Regenerar el contenido

Si cambian los documentos fuente:

1. Re-parsea las fuentes a `_sections_raw.json` (script de extracción).
2. Traduce los lotes faltantes (`_batch_*.json` → `_trans_*.json`).
3. Ejecuta `python3 build_content.py` para reconstruir `content.json`.

> Nota: el texto verbatim de la interfaz (microcopy en español, ejemplos de hooks, vocabulario aprobado/prohibido) se conserva en su idioma original aunque se cambie el toggle, porque es copy de producción.
