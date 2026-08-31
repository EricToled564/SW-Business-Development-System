# Verificación con NotebookLM

Esta carpeta existe para que ninguna corrección del proyecto dependa de la palabra
de quien la hace. Cada hallazgo de la auditoría se cierra con la respuesta de
NotebookLM que lo sustenta, y el candado rechaza cualquier corrección sin ella.

## Qué hay aquí

**`hallazgos.csv`** — los 88 hallazgos de la auditoría de la Etapa 1, con el estado
de cada uno. Se puede abrir en Excel o en Numbers.

| Columna | Qué contiene |
|---|---|
| `id` | El número del hallazgo, de A-001 a A-088 |
| `seccion` | Dónde vive el problema |
| `hallazgo` | Qué está mal, con las palabras de la auditoría |
| `tipo` y `severidad` | Su clasificación de origen |
| `estado` | `abierto`, `corregido`, `congelado` o `no-aplica` |
| `evidencia_antes` | El archivo con la respuesta de NotebookLM antes de corregir |
| `evidencia_despues` | El archivo con su respuesta después de corregir |

**`evidencia/`** — las respuestas de NotebookLM, guardadas íntegras y sin resumir.
Están en español y se leen sin conocimiento técnico.

**`candado-notebooklm.js`** — la comprobación.

## Cómo se cierra un hallazgo

1. Se le pregunta a NotebookLM qué dicen los documentos sobre ese punto.
2. Su respuesta se guarda completa en `evidencia/`, sin resumirla ni editarla.
3. Se corrige únicamente lo que esa respuesta sustenta.
4. Se le vuelve a preguntar lo mismo. Su nueva respuesta debe decir que el
   problema ya no aparece, y también se guarda.
5. Sólo entonces el hallazgo pasa a `corregido` en el registro.

El orden importa: **primero NotebookLM dice qué hay, después se corrige.** Nunca al revés.

## Qué impide el candado

Correr `node verificacion/candado-notebooklm.js` revisa el registro y falla si
algún hallazgo está marcado como corregido sin sus dos respuestas de NotebookLM,
o si alguna de ellas es demasiado corta para ser una respuesta real.

Mientras falle, no se publica. No es una promesa de quien corrige: es una
comprobación que se ejecuta sola y da siempre el mismo resultado.

## Cómo comprobarlo sin leer nada técnico

Abre `hallazgos.csv`, elige cualquier renglón marcado como corregido, y busca sus
dos archivos en `evidencia/`. Ahí está, en español, lo que NotebookLM contestó
antes y después. Si quieres confirmarlo por tu cuenta, hazle la misma pregunta
en NotebookLM y compara.
