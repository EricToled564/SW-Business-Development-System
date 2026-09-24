# Arquitectura de la Experiencia · versión revisada

Reescritura completa del documento **Arquitectura de la Experiencia**, con los 62 cambios del pliego de correcciones aplicados y las decisiones de la revisión incorporadas.

**No sustituye a `resultados/ux-v1/webapp/docs/experience.es.md`.** Ese documento no se ha tocado. Esta carpeta es una versión aparte, en construcción, y queda fuera del alcance de `audit-docs.js` y `consistencia.js`.

## Qué hay aquí

| Archivo | Qué es | Estado |
|---|---|---|
| `00-estructura.es.md` | El índice completo: páginas iniciales, veinte capítulos, seis anexos | Vigente |
| `decisiones.es.md` | Adenda de la bitácora DEC/SW/01, con las decisiones **D-33 a D-110** | Vigente |
| `CEI-01-v1.6.es.html` y `CEI-01-v1.6.pdf` | El cuestionario que rige, versión 1.6 | Vigente |
| `01-vamos-a-crear-el-mejor-sistema.es.md` | Capítulo 1 | Escrito por Eric |
| `02-como-se-pierde-hoy.es.md` | Capítulo 2 | Escrito por Eric |
| `03-el-sitio-como-llega-y-como-se-le-guia.es.md` | Capítulo 3 | Escrito, pendiente de aprobación |
| `04-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | Capítulo 4 | Aprobado |
| `05-el-cuestionario.es.md` | Capítulo 5 | Aprobado |
| `06-quien-puede-recorrer-la-experiencia.es.md` | Capítulo 6 | Aprobado |
| `07-los-objetivos-de-la-persona.es.md` | Capítulo 7 | Aprobado |
| `08-el-recorrido-en-pantalla.es.md` | Capítulo 8 | Escrito, pendiente de aprobación |
| `09-datos-de-contacto-y-consentimiento.es.md` | Capítulo 9 | Escrito, pendiente de aprobación |
| `10-como-se-elige-el-club.es.md` | Capítulo 10 | Escrito, pendiente de aprobación |
| `11-como-se-compone-el-plan.es.md` | Capítulo 11 | Escrito, pendiente de aprobación |
| `12-como-se-eligen-las-clases.es.md` | Capítulo 12 | Escrito, pendiente de aprobación |
| `insumo-entrenamiento-acuatico.es.md` | Los seis programas de entrenamiento aeróbico en alberca, insumo del capítulo 11 | Propuesta, sujeta a validación médica |
| `VERIFICACION.es.md` | Hash de cada archivo, para comprobar que no cambió | Vigente |

Faltan los capítulos **13 al 20** y los anexos **A al F**.

## La numeración

El capítulo del sitio se insertó en la posición 2 —decisión **D-51**— y los que ocupaban las posiciones 2 a 6 corrieron un lugar. `00-estructura.es.md` fija la numeración vigente, y todas las remisiones cruzadas de los capítulos y de la bitácora ya la usan.

## El instrumento

El cuestionario que rige es **CEI-01 versión 1.6**, en esta misma carpeta. Incorpora la ruta reducida y anónima para quien no confirma la mayoría de edad, declara el bloque de precarga P0, exige la alberca con «Ambas» (D-104), hace que la modalidad recomendada se calcule (D-105) y suma **Q17**, el tiempo por sesión, con Q8 reescrito como capacidad (D-112). Las versiones anteriores viven en el historial del repositorio. El cuestionario del Anexo A del Manual del Proceso Comercial es una versión anterior y no se usa.

## Cómo se comprueba que el documento está como se dijo que estaba

Cinco programas, todos en `tools/`. Ninguno corrige nada: reportan y terminan con error si encuentran algo.

```
python3 tools/correcciones.py     cada corrección reportada, una por una
node    tools/registro.js         frases que describen al sistema negando
python3 tools/remisiones.py       remisiones a apartados que no existen
python3 tools/indice.py           el índice 0.3 contra los títulos reales
python3 tools/instrumento.py      CEI-01 contra las reglas de los capítulos
```

**`correcciones.py` es el que responde a «¿cómo sé que lo corregiste?».** Cada corrección reportada queda ahí declarada con la frase exacta que debe aparecer y la que ya no debe aparecer, y el programa las comprueba todas. Con `--lista` las enuncia en español, sin comprobarlas, para leer en un minuto qué es lo que afirma. Comprueba además que cada archivo siga dando el hash que `VERIFICACION.es.md` registra, así que también detecta un cambio posterior que nadie anunció.

Una corrección se declara ahí **en la misma entrega en que se hace**. La que no esté declarada no es comprobable, y hay que leerla a mano: por eso el programa dice cuántas cubre.

Para comprobar a mano que un archivo no cambió:

```
sha256sum *.es.md
```

y se compara contra `VERIFICACION.es.md`. Cada cambio posterior a una aprobación es un commit propio, cuyo mensaje dice qué cambió.
