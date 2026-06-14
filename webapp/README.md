# Experiencia Ideal — Visor de documentación (web app)

Aplicación web estática que organiza, de forma navegable, todo el paquete **GENESIS v1** de la Experiencia Ideal de Sports World. Sirve para que los equipos de Producto, Diseño, Ingeniería, Contenido y QA consulten la especificación.

Idioma actual: **español (es-MX)**, igual que el paquete v1. La arquitectura es **bilingüe-ready**: la estructura de datos y el conmutador ES/EN están listos; solo falta poblar las traducciones (ver «Agregar inglés» abajo).

## Qué incluye

- **Todo el paquete v1** de `resultados/v1/`: el UX Spec, el diagrama de flujo, los tres anexos (clínico, contenido/prompts, ingeniería/CRM) y el sistema de diseño.
- **Temario lateral** generado desde los encabezados, filtrable por documento (Experiencia · Design · Anexos).
- **Buscador** instantáneo sobre títulos y cuerpo.
- **Diagramas de flujo** renderizados con Mermaid.
- **Navegación anterior/siguiente** y enlaces directos por `#hash`.
- Responsive (menú colapsable en móvil) y accesible (skip-link, foco visible, roles ARIA).

## Cómo correrla

Es estática; necesita un servidor HTTP simple (por el `fetch` de `content.json`):

```bash
cd webapp
python3 -m http.server 8080
# abrir http://localhost:8080
```

O desplegar la carpeta `webapp/` en cualquier hosting estático. El sitio se publica automáticamente en GitHub Pages al hacer push de `webapp/**` (ver `.github/workflows/deploy-pages.yml`).

## Arquitectura

| Archivo | Rol |
|---|---|
| `index.html` | Shell: topbar, temario lateral, área de contenido. |
| `styles.css` | Estilos con los tokens de marca (`#E6282A`, etc.). |
| `app.js` | Lógica: temario, render Markdown (marked.js), Mermaid, idioma, búsqueda, filtro, pager. |
| `content.json` | **Datos generados.** Todas las secciones con `title`/`body` en `{es, en}`. No se edita a mano. |
| `build_content.py` | Genera `content.json` directamente desde `resultados/v1/`. |

## Regenerar el contenido

Cuando cambie cualquier documento de `resultados/v1/`:

```bash
cd webapp
python3 build_content.py   # reescribe content.json
```

El script parte los `.md` en secciones por encabezado (nivel 1 y 2), respeta los bloques de código (incluido Mermaid) y trata el front matter YAML de `DESIGN.md` como una sección de tokens.

## Agregar inglés (bilingüe)

La app ya es bilingüe-ready. Para activar el inglés:

1. Crea `webapp/_trans_en.json` con una lista de objetos `{"id", "title", "body"}`, donde `id` es el de cada sección en `content.json`.
2. Ejecuta `python3 build_content.py`. Las secciones con traducción se mostrarán en inglés al usar el conmutador EN; las que falten caen a español con una marca de «original».
