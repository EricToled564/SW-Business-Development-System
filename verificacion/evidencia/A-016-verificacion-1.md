# A-016 · Primera verificación tras corregir · NO CERRÓ

**Fuente:** NotebookLM, sobre las 49 fuentes ya actualizadas con los documentos publicados.
**Fecha:** 31 de agosto de 2026.
**Resultado:** la corrección estaba incompleta. **El hallazgo sigue abierto.**

## Qué encontró

NotebookLM identificó 14 documentos que afirman quién atiende primero en WhatsApp:
**10 con la regla vigente** («atiende primero "BES"») y **4 que seguían afirmando la
regla anterior**, tres de ellos sin usar el término «human-first» y por eso invisibles
para una búsqueda literal:

| Documento | Lo que seguía diciendo |
|---|---|
| `bds-flujo.es.md` | El árbol de decisión evaluaba primero «¿Hay un operador humano disponible y en horario?» y sólo pasaba a "BES" si la respuesta era no. Se había corregido el título de la sección, no el árbol. |
| `bds-tecnica.es.md` | «Actúa como **respaldo** del operador humano: atiende de inmediato cuando no hay operador disponible o es fuera de horario.» |
| `resumen.es.md` | «leads de campañas atendidos por **operadores humanos** en tiempo real, con **BES** de respaldo 24/7», en la sección de las tres capas. |
| `gastos-operativos.es.md` | «atendidos por "BES" texto **como respaldo** (~60%)». Este documento **no estaba en la lista de doce**: nunca contuvo el término, así que ninguna búsqueda lo alcanzó. |

Al corregirlos, la comprobación automática reforzada encontró un quinto:
`bds-anexo.es.md` describía a "BES" como «respaldo automático 24/7».

## Por qué la corrección anterior falló

Se corrigieron las apariciones del término «human-first». La regla, en cambio, estaba
escrita **también con otras palabras** —«respaldo del operador», «si no hay operador
disponible», un árbol de decisión que pregunta primero por el humano—, y esas
formulaciones sobrevivieron intactas.

R22 vigilaba el término, no la idea. Es exactamente el modo de falla que el hallazgo
A-016 describe, repetido dentro de su propia corrección.

## Qué se hizo

Los cinco documentos quedaron corregidos. **R22 se reforzó** para detectar la regla
descrita sin el término: presentar a "BES" como respaldo del operador, o condicionar
su intervención a que no haya operador disponible. Se probó reintroduciendo la
formulación anterior: la comprobación falla y nombra el documento y la línea.

Al reforzarla apareció un segundo hueco: los asteriscos del markdown rompían el
patrón, de modo que «**respaldo** del operador» no caía. Corregido, y vuelto a probar.

## Consecuencia con dinero de por medio

El supuesto de costos del BDS asumía que "BES" atendía el ~60% de las conversaciones,
porque era el respaldo. Con la regla vigente atiende el 100%. **La cifra no se
sustituyó** —no se inventa un número no acordado—: se dejó anotada en
`gastos-operativos.es.md` como pendiente de recalcular con Sports World antes de
comprometer presupuesto.

## Estado

**A-016 permanece abierto.** Cierra sólo cuando una nueva verificación sobre los
documentos ya publicados devuelva cero documentos con la regla anterior.
