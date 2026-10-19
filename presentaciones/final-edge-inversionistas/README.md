# Final Edge AI — presentación para inversionistas

Presentación HTML de una sola página, 13 slides, navegable con teclado, ratón o gestos táctiles. No requiere servidor ni compilación: se abre `index.html` en cualquier navegador.

## Cómo se usa

| Acción | Cómo |
|---|---|
| Avanzar / retroceder | `→` `←`, barra espaciadora, o los botones inferiores |
| Ir al inicio o al final | `Inicio` / `Fin` |
| Exportar a PDF | Tecla `P`, o Imprimir → Guardar como PDF (una página por slide, 1280 × 800) |
| Enlazar a un slide | Sufijo en la URL, por ejemplo `index.html#11` |

## Los dos retratos de Eric

El slide 11 busca dos archivos que **no vienen incluidos**:

```
assets/eric-01.jpg    retrato vertical (recomendado 1200 × 1270 o superior)
assets/eric-02.jpg    retrato cuadrado (recomendado 1200 × 1200)
```

Basta con copiar las dos fotografías profesionales con esos nombres exactos y recargar; no hay que tocar el HTML. Mientras los archivos no existan, cada marco muestra la ruta que espera, sobre el patrón de marca. **No se usa ninguna imagen sustituta**: el retrato incrustado en el PDF del CV quedó descartado por instrucción expresa.

Las fotografías se muestran en monocromo por CSS para no chocar con la paleta de marca, y recuperan color al pasar el cursor. Si prefieres otro encuadre, el punto de recorte está en `.pf img { object-position: 50% 22% }`.

## Marca

La paleta y la tipografía se leyeron directamente del sitio publicado de Final Edge AI (`https://web-page-final-edge-redesign.vercel.app/`), no se aproximaron a ojo:

| Token | Valor | Uso |
|---|---|---|
| `--void-deep` | `#08080A` | Fondo del documento |
| `--bg` / `--panel` / `--card` | `#0E0E12` / `#0B0B0E` / `#0A0A0C` | Superficies |
| `--fg` / `--fg-2` / `--fg-muted` / `--fg-faint` | `#F4F4F2` / `#C6C6CC` / `#A0A0A8` / `#7E7E88` | Escala de texto |
| `--accent` / `--accent-active` | `#1E80F0` / `#1668C2` | Acento de interfaz |
| `--phase-eval` / `--phase-cap` / `--phase-exe` | `#F4920C` / `#15D9D9` / `#E15CDB` | Zonas del motor |
| `--hairline` | `#1A1A1E` | Filetes y rejillas |
| Tipografías | Geist · Geist Mono | Lectura · interfaz |

Los lockups del logo son los SVG con contornos del paquete de marca (`final-edge-codex-package`), sin alterar color ni proporción. La Final Wheel se dibuja con la geometría literal de `assets/wheel/final-wheel.json`: seis sectores de 60°, orden horario desde las 12, radios 150 y 62.

## Procedencia del contenido

Cada slide lleva al pie la fuente de sus afirmaciones, y el slide 13 concentra lo que todavía no está sostenido.

- **Sitio publicado de Final Edge AI** — posicionamiento, línea competitiva, tesis, seis servicios, tres zonas, entregables reales y todas las cifras de producto.
- **`copy.es-MX.json` y `messaging-rules.md`** del paquete de marca — copy aprobado y política de evidencia.
- **CV de Eric Toledano, versión en inglés 2024** — trayectoria, cifras de carrera, idiomas, formación y datos de contacto del slide 11.
- **Instrucción directa de Eric Toledano (02-09-2026)** — fundación en 2021 y centros de operación en Singapur y Ciudad de México.

### Discrepancias registradas, no resueltas

1. **Fecha de fundación.** Eric indica 2021 para Final Edge AI; el CV registra Final Upgrade desde 2020. El deck usa 2021 como se instruyó y deja la nota en el slide 13.
2. **Taxonomía de servicios.** El paquete `final-edge-codex-package` nombra los servicios `scan·edge`, `space·edge`, `air·edge`, `flow·edge`, `frame·edge`, `creative·edge`. El sitio publicado usa `strategy`, `intelligence`, `readiness`, `flow`, `systems`, `creative`, con contenido distinto, no solo nombres distintos. El deck sigue al sitio publicado por ser lo que un inversionista puede verificar hoy.
3. **Cifras sin fuente primaria.** Ocho cifras publicadas en el sitio carecen de fuente citada. Están listadas en el slide 13 conforme a la regla de evidencia de la marca.
4. **Datos financieros de la firma.** El documento no contiene ingresos, crecimiento, número de clientes, tamaño de equipo ni monto buscado, porque no se entregaron. Es el vacío más relevante para una conversación de inversión.
