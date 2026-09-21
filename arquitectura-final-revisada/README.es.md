# Arquitectura de la Experiencia · versión revisada

Reescritura completa del documento **Arquitectura de la Experiencia**, con los 62 cambios del pliego de correcciones aplicados y las decisiones de la revisión incorporadas.

**No sustituye a `resultados/ux-v1/webapp/docs/experience.es.md`.** Ese documento no se ha tocado. Esta carpeta es una versión aparte, en construcción, y queda fuera del alcance de `audit-docs.js` y `consistencia.js`.

## Qué hay aquí

| Archivo | Qué es | Estado |
|---|---|---|
| `00-estructura.es.md` | El índice completo: páginas iniciales, dieciséis capítulos, seis anexos | Vigente |
| `decisiones.es.md` | Adenda de la bitácora DEC/SW/01, con las decisiones **D-33 a D-88** | Vigente |
| `CEI-01-v1.3.es.html` y `CEI-01-v1.3.pdf` | El cuestionario que rige, versión 1.3 | Vigente |
| `01-vamos-a-crear-el-mejor-sistema.es.md` | Capítulo 1 | Escrito por Eric |
| `02-como-se-pierde-hoy.es.md` | Capítulo 2 | Escrito por Eric |
| `03-el-sitio-como-llega-y-como-se-le-guia.es.md` | Capítulo 3 | Escrito, pendiente de aprobación |
| `04-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | Capítulo 4 | Aprobado |
| `05-el-cuestionario.es.md` | Capítulo 5 | Aprobado |
| `06-quien-puede-recorrer-la-experiencia.es.md` | Capítulo 6 | Aprobado |
| `07-los-objetivos-de-la-persona.es.md` | Capítulo 7 | Aprobado |
| `08-el-recorrido-en-pantalla.es.md` | Capítulo 8 | Escrito, pendiente de aprobación |
| `09-datos-de-contacto-y-consentimiento.es.md` | Capítulo 9 | Escrito, pendiente de aprobación |
| `insumo-entrenamiento-acuatico.es.md` | Los seis programas de entrenamiento aeróbico en alberca, insumo del capítulo 11 | Propuesta, sujeta a validación médica |
| `VERIFICACION.es.md` | Hash de cada archivo, para comprobar que no cambió | Vigente |

Faltan los capítulos **8 al 16** y los anexos **A al F**.

## La numeración

El capítulo del sitio se insertó en la posición 2 —decisión **D-51**— y los que ocupaban las posiciones 2 a 6 corrieron un lugar. `00-estructura.es.md` fija la numeración vigente, y todas las remisiones cruzadas de los capítulos y de la bitácora ya la usan.

## El instrumento

El cuestionario que rige es **CEI-01 versión 1.3**, en esta misma carpeta. Declara el bloque de precarga P0 y exige la alberca también con la opción «Ambas» de Q6 (D-104). Las versiones anteriores viven en el historial del repositorio. El cuestionario del Anexo A del Manual del Proceso Comercial es una versión anterior y no se usa.

## Cómo se verifica que un archivo no cambió

```
sha256sum *.es.md
```

y se compara contra `VERIFICACION.es.md`. Cada cambio posterior a una aprobación es un commit propio, cuyo mensaje dice qué cambió.
