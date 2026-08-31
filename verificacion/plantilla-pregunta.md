# Plantilla de pregunta para NotebookLM

Toda pregunta de verificación se formula con esta plantilla, sin excepción. No es
una preferencia de estilo: sin ella, NotebookLM aplica un filtro de relevancia
propio y omite las menciones que juzga secundarias.

**Comprobado el 31 de agosto de 2026.** Preguntado sin plantilla por la regla de
enrutamiento en WhatsApp, omitió `indice.es.md`. Al preguntársele por ese
documento en concreto, respondió correctamente: tenía la fuente y conocía su
contenido; lo que falló fue la enumeración, no la lectura.

La plantilla la propuso el propio NotebookLM al explicar por qué había omitido
ese documento.

---

## Plantilla

> **[ROL DE AUDITORÍA Y BARRIDO LITERAL]** Actúas como un auditor de datos riguroso
> cuya prioridad absoluta es la exhaustividad literal, no la síntesis, ni la
> brevedad, ni la elegancia conversacional. Prefiero una respuesta masiva, larga y
> redundante a una sola omisión.
>
> **1. Barrido lineal.** Revisa secuencialmente las 49 fuentes del proyecto, de la 1
> a la 49. Si el concepto o palabra **[CONCEPTO]** aparece en una fuente, esa fuente
> DEBE incluirse en el reporte final. No juzgues si la mención es «de paso»,
> «secundaria» o «redundante».
>
> **2. Cero exclusiones.** Está estrictamente prohibido resumir, agrupar documentos
> similares en un solo punto o priorizar por relevancia. Cada documento donde
> aparezca el término debe tener su propio apartado individual, con su nombre de
> archivo exacto.
>
> **3. Transcripción.** Para cada documento identificado: nombre exacto del archivo;
> la frase o párrafo exacto donde aparece la mención, entre comillas; y el contexto
> preciso —si es una tabla, un anexo, un procedimiento o una minuta.
>
> **4. Recuento con puerta de calidad.** Antes de responder, cuenta cuántos
> documentos cumplen el criterio y abre la respuesta con: «Tras revisar las 49
> fuentes una por una, he identificado exactamente [N] documentos que contienen
> [CONCEPTO]. Aquí está el desglose de los [N] documentos sin omitir ninguno.» Si el
> recuento no coincide con la lista, detente y vuelve a escanear.

---

## Por qué funciona

**El rol.** Pasar de «asistente servicial» a «auditor de datos» hace que priorice
la precisión de inventario sobre la fluidez de la respuesta.

**La relevancia definida de forma literal.** Decirle que no juzgue si una mención
es importante desactiva el filtro que le hizo omitir el índice.

**El conteo por delante.** Obligarlo a declarar el número al inicio lo fuerza a
recorrer la lista completa antes de empezar a redactar.

---

## Cómo se usa en el ciclo de corrección

La misma pregunta se hace **dos veces**, con el mismo texto: antes de corregir y
después de publicar la corrección. Las dos respuestas se guardan íntegras en
`evidencia/`, y el candado exige ambas antes de dar un hallazgo por cerrado.

Entre una y otra debe **refrescarse la fuente en el cuaderno**: NotebookLM no lee
los documentos en vivo. Cargadas como URL del sitio publicado, basta con
actualizarlas; cargadas como archivo, hay que volver a subirlas.
