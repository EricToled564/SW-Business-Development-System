# Cómo se cargan las fuentes en NotebookLM

Procedimiento para la sesión local de Claude Code, la única que tiene el servidor
de NotebookLM instalado. No es una descripción: es la secuencia exacta, con las
comprobaciones que deciden si se puede continuar o hay que detenerse.

**Regla que gobierna todo lo demás:** si una comprobación falla, **no se sigue**.
Cargar una fuente equivocada no es un error recuperable — NotebookLM no vuelve a
rastrear, así que la fuente queda congelada y contamina toda respuesta posterior
sin que nada lo delate.

---

## Antes de empezar

```
node verificacion/candado-notebooklm.js
cd resultados/ux-v1 && node tools/audit-docs.js && node tools/consistencia.js
```

Las tres tienen que devolver cero. Si alguna falla, el repositorio no está en
estado de cargar nada.

`get_health` tiene que devolver `authenticated: true`. Si no, `setup_auth`.

---

## Cuaderno 1 · Originales

**Cuándo:** ahora. **Qué contiene:** el depósito tal como estaba antes de toda
corrección, más las páginas y el código. **Para qué:** se le pregunta hallazgo por
hallazgo, desde A-001, y dice qué hay que cambiar y dónde.

Son **42 fuentes**. Se cargan en dos modos distintos, y el modo no es opcional:

### a · 32 fuentes como texto pegado — `add_source` con `type: "text"`

Los 31 archivos `verificacion/txt/<id>.txt` y `verificacion/txt/cuestionario-inteligente.txt`.

- El **título** de cada fuente es el nombre del archivo sin extensión: `bds-tecnica`,
  `contrato`, `cuestionario-inteligente`. Sin sufijos, sin adornos. El nombre es lo
  que permite emparejar después con su `-MOD`.
- El **contenido** es el archivo **íntegro**, leído tal cual. No se resume, no se
  recorta, no se “limpia”. Si un archivo no cabe en una sola llamada, **detente y
  dilo** — no lo partas por tu cuenta.

### b · 10 fuentes por URL — `add_source` con `type: "url"`

Las 7 páginas del Proceso Comercial y las 3 del sitio, con las URL exactas de
`fuentes.md`. Se cargan por URL porque se escribieron directamente como páginas y
no tienen archivo de texto detrás: extraer su texto a mano sería transcribirlas, y
la transcripción es justo lo que este método evita.

### Comprobación de cierre

`get_notebook` tiene que reportar **42 fuentes**. Si reporta otra cosa, di cuántas
hay y cuáles faltan; no cargues “las que falten” a ojo ni cargues de más.

---

## Preguntar

Toda pregunta usa `plantilla-pregunta.md`, **sin excepción**. Sin ella NotebookLM
aplica su propio criterio de relevancia y omite menciones: fue lo que dejó fuera
un documento en la verificación de A-016.

Se sustituyen dos valores:

- **`[CONCEPTO]`** — lo que busca el hallazgo.
- **`[N_FUENTES]`** — **42**, o el número que reporte `get_notebook`. Nunca de
  memoria.

La respuesta se guarda **íntegra**, sin resumir, en `verificacion/evidencia/`.

---

## Corregir

Las correcciones se escriben **sólo** en `resultados/ux-v1/docs-mod/<id>-MOD.es.md`.
`webapp/docs/` no se toca durante la revisión.

Después de cada corrección:

```
cd resultados/ux-v1 && node tools/build-fuentes.js
node tools/audit-docs.js && node tools/consistencia.js
```

El generador rehace las páginas, los `.txt` y `verificacion/cambios.md`, que es el
registro de toda diferencia contra el original. Una edición que no aparezca ahí no
ocurrió.

---

## Cuaderno 2 · Corregidos

**Cuándo:** sólo cuando **todas** las modificaciones estén hechas. No antes: una
carga parcial congela documentos a medio corregir y hay que borrarlos y rehacerlos
uno por uno.

Mismas 42 fuentes, pero los 31 documentos son ahora `verificacion/txt/<id>-MOD.txt`,
con título `<id>-MOD`. Las 10 páginas por URL y el código no cambian.

---

## Cuaderno 3 · Verificación por pares

**Cuándo:** al final. **Qué se carga:** por cada documento **que haya cambiado**, sus
dos fuentes —`<id>` y `<id>-MOD`— más `verificacion/cambios.md` como una fuente de
texto adicional. Un documento idéntico a su original no tiene nada que verificar y
no se carga.

Las dos versiones **nunca van juntas en una misma fuente**. Se emparejan por el
nombre. Una fuente que transcribiera las dos haría que la verificación dependiera
de que quien la escribió no se equivocó, que es justamente lo que no puede depender
de nadie.

Lo que se le pide: comparar cada par contra el resumen de cambios y decir si hubo
**errores, omisiones o ediciones no autorizadas** — cambios presentes en el `-MOD`
que no correspondan a ningún hallazgo cerrado.

Cuenta las fuentes antes de cargar: son `2 × (documentos cambiados) + 1`. Si pasa de
50, **detente y dilo**; no elijas por tu cuenta cuáles dejar fuera.
