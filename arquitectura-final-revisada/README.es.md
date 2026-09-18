# Arquitectura de la Experiencia · versión revisada

Reescritura completa del documento **Arquitectura de la Experiencia**, con los 62 cambios del anexo de correcciones aplicados y las decisiones de la revisión incorporadas.

**No sustituye a `resultados/ux-v1/webapp/docs/experience.es.md`.** Ese documento no se ha tocado. Esta carpeta es una versión aparte, en construcción, y queda fuera del alcance de `audit-docs.js` y `consistencia.js`.

## Qué hay aquí

| Archivo | Qué es | Estado |
|---|---|---|
| `decisiones.es.md` | Adenda de la bitácora DEC/SW/01, con las decisiones D-33 a D-50 | Vigente |
| `01-por-que-existe-la-experiencia-ideal.es.md` | Capítulo 1 | Aprobado |
| `02-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | Capítulo 2 | Aprobado |
| `03-quien-puede-recorrer-la-experiencia.es.md` | Capítulo 3 | Aprobado |
| `04-el-cuestionario.es.md` | Capítulo 4 | Aprobado |
| `05-los-objetivos-de-la-persona.es.md` | Capítulo 5 | Aprobado |
| `VERIFICACION.es.md` | Hash de cada capítulo, para comprobar que no cambió | Vigente |

Faltan los capítulos 6 al 16 y los anexos A al E.

## El instrumento

El cuestionario que rige es **CEI-01 versión 1.1**. El cuestionario del Anexo A del Manual del Proceso Comercial es una versión anterior y no se usa.

## Cómo se verifica que un capítulo no cambió

```
sha256sum *.es.md
```

y se compara contra `VERIFICACION.es.md`. Cada cambio posterior a una aprobación es un commit propio, cuyo mensaje dice qué cambió.
