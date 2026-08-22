# Carpeta de inversión — CONFIDENCIAL, NO ES PARTE DEL DEPÓSITO DEL CLIENTE

Documentos de financiamiento de **Final Upgrade AI**. Tratan de la caja de la agencia,
no del proyecto que se le entrega a Sports World.

> ## No publicar en el sitio del cliente
>
> El sitio de GitHub Pages se arma desde `resultados/ux-v1/webapp/` (ver
> `.github/workflows/deploy-ux-webapp.yml`). Esta carpeta queda fuera de esa ruta **a
> propósito**: contiene los términos de un préstamo y los costos internos de producción.
> No mover estos archivos a `webapp/docs/`, no registrarlos en `app.js` ni en
> `indice.es.md`, y no incluirlos en `kb/build_pdfkit.js`.

## Contenido

| Archivo | Qué es |
|---|---|
| `dossier-inversionistas.es.md` | Fuente de verdad del dossier. Préstamo puente de MXN $300,000 a 90 días con rendimiento del 10%, para dos prestamistas de $150,000 cada uno |
| `Dossier-Inversionistas-Sports-World.pdf` | El entregable. Es lo que se le manda a cada destinatario |
| `build-dossier-pdf.js` | Pipeline propio de PDF (pdfkit), separado del del cliente |

## Cómo regenerar el PDF

Igual que el pipeline de casa: nunca a mano.

```bash
npm install pdfkit          # o NODE_PATH a un node_modules que ya lo tenga
node inversion/build-dossier-pdf.js
```

El script aplica las **reglas de paginación** del documento:

1. Cada sección de primer nivel (`##`) abre página.
2. Ningún encabezado queda al pie: arrastra consigo el inicio real de su contenido
   —para una tabla, su encabezado y su primera fila.
3. Sin viudas ni huérfanas: un párrafo se parte sólo si deja dos líneas de un lado y
   se lleva dos del otro.
4. Las tablas repiten encabezado al continuar, marcado «(continúa)», nunca dejan el
   encabezado solo al pie y nunca dejan una fila sola al otro lado.
5. Las citas destacadas no se parten si caben completas en una página.

Las fuentes base de PDF son WinAnsi: un emoji o una flecha no sólo no se dibujan,
**se comen el carácter vecino**. El script los sustituye antes de componer (`sanitize`),
pero conviene no meterlos en el markdown.

## Estado de los supuestos

Tres cifras del dossier son estimaciones internas y están marcadas como tales en su
Anexo B: las tarifas por hora del equipo freelance (el repositorio no guarda montos de
contratación), las horas de dedicación por rol y el costo de las herramientas de IA.
Todo lo demás sale del Contrato publicado, de la auditoría o de fuentes públicas.

**El contrato con Sports World no está firmado** (V4.3, en revisión de Legal). El dossier
lo declara y condiciona el desembolso a esa firma. Si eso cambia, hay que actualizar la
sección 4, el Anexo B y los Avisos importantes.
