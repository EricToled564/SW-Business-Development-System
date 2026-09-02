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

Son **42 fuentes**, y **todas se cargan con `add_source` en modo `url`**, tomando las
ligas de `fuentes.md` tal cual:

| Sección de `fuentes.md` | Cuántas | Ruta |
|---|---|---|
| Cuaderno 1 · Documentos originales | 31 | `/original/` |
| Código | 1 | `/codigo/` |
| Proceso Comercial | 7 | `/proceso/` |
| Páginas del sitio | 3 | `/licitacion/`, `/presentacion/`, `/demo-manual/` |

**No se lee el contenido de ningún archivo. Sólo se pasa la URL.**

### Por qué URL y no texto pegado

`add_source` también acepta `type: "text"`, y a primera vista pegar el texto parece
más fiable — no hay rastreo de por medio. **No lo uses.** El contenido pegado tiene
que pasar por el contexto del modelo: son 1.4 MB entre los 63 archivos, y sólo el
del cuestionario son 212,002 caracteres. Cargarlo así es lento, caro y falla antes
de terminar. Se intentó el 2 de septiembre de 2026 y no llegó a cargar una sola
fuente.

La fiabilidad que buscaba el texto pegado ya está resuelta por otro lado: **R23
comprueba en cada corrida que cada página publicada reproduce su archivo carácter
por carácter**, y las 42 se verificaron en vivo respondiendo 200. La página es tan
exacta como el `.txt`, y su carga no cuesta nada.

Los archivos de `verificacion/txt/` se conservan: son el artefacto auditable que
R23 compara, y el respaldo si alguna página fallara. Dejan de ser el vehículo de
carga, no el registro.

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

Mismas 42 fuentes y el mismo modo `url`, pero los 31 documentos se toman de la
sección «Cuaderno 2 · Documentos corregidos» de `fuentes.md` (`/mod/<id>-MOD.html`).
Las 7 del Proceso Comercial, las 3 del sitio y el código no cambian.

---

## Cuaderno 3 · Verificación por pares

**Cuándo:** al final. **Qué se carga:** por cada documento **que haya cambiado**, sus
dos fuentes por URL —`/original/<id>.html` y `/mod/<id>-MOD.html`— más el resumen
`verificacion/cambios.md`. Un documento idéntico a su original no tiene nada que
verificar y no se carga.

El resumen es la única fuente que sí va como texto pegado (`type: "text"`, título
`cambios`): no está publicado como página, y es pequeño.

Las dos versiones **nunca van juntas en una misma fuente**. Se emparejan por el
nombre. Una fuente que transcribiera las dos haría que la verificación dependiera
de que quien la escribió no se equivocó, que es justamente lo que no puede depender
de nadie.

Lo que se le pide: comparar cada par contra el resumen de cambios y decir si hubo
**errores, omisiones o ediciones no autorizadas** — cambios presentes en el `-MOD`
que no correspondan a ningún hallazgo cerrado.

Cuenta las fuentes antes de cargar: son `2 × (documentos cambiados) + 1`. Si pasa de
50, **detente y dilo**; no elijas por tu cuenta cuáles dejar fuera.
