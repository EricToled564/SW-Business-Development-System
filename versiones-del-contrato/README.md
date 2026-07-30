# Versiones del contrato (archivo histórico)

Esta carpeta guarda el **historial de versiones de los documentos contractuales** del proyecto Sports World. Vive en la raíz del repositorio, **fuera de `resultados/ux-v1/webapp/`**, para que **no se publique** en la web app (GitHub Pages).

## Fuente de la verdad vigente

La fuente de la verdad contractual son los **PDFs oficiales entregados por el cliente** en `oficiales/`:

| Documento | Versión vigente | Archivo oficial |
|---|---|---|
| Contrato de Prestación de Servicios Profesionales y Consultoría | **V4.2** | `oficiales/contrato-v4.2-cliente.pdf` |
| Addendum BDS (Proyecto B) | **V1.1** (alineado al Contrato V4.2) | `oficiales/bds-anexo-v1.1-cliente.pdf` |
| Addendum Academia (Proyecto C) | **V1.1** (alineado al Contrato V4.2) | `oficiales/academia-anexo-v1.1-cliente.pdf` |

Estos tres PDFs son también los que sirve la app (`resultados/ux-v1/kb/06-contrato.es.pdf`, `20-bds-anexo.es.pdf`, `26-academia-anexo.es.pdf` y sus copias en `webapp/kb/`). **No se regeneran** con `kb/build_pdfkit.js`: el generador los excluye expresamente para que ningún build futuro los sobrescriba.

> Nota: en la app los tres documentos se muestran **sin número de versión** en el título; el versionado vive únicamente en esta carpeta.

## Registro de cambios oficial (referencia)

- `oficiales/contrato-v4.2-con-notas-de-cambios.pdf` — **copia de trabajo del cliente** del Contrato V4.2 con el **registro de cambios V4.1 → V4.2** (34 cambios documentados con ubicación y hallazgo de origen) y la lista de pendientes previos al envío. Es la referencia oficial de qué cambió entre versiones; **de uso interno, no se publica en la app ni se envía al cliente final**. Verificado: el cuerpo contractual de esta copia es idéntico al de `contrato-v4.2-cliente.pdf` (solo difieren encabezados/pies de página y la sección final de registro de cambios).

## Versiones anteriores (retiradas de la app)

Copias de la última versión previa, tal como estaban en la app antes de la actualización a V4.2/V1.1 (PDF generado + markdown fuente):

- `contrato-v4.1.pdf` / `contrato-v4.1.md` — Contrato V4.1
- `bds-anexo-v1.0.pdf` / `bds-anexo-v1.0.md` — Addendum BDS V1.0
- `academia-anexo-v1.0.pdf` / `academia-anexo-v1.0.md` — Addendum Academia V1.0

## Reglas de mantenimiento

1. Cuando el cliente entregue una nueva versión oficial, guárdala en `oficiales/` con el patrón `<doc>-vX.Y-cliente.pdf`, mueve aquí las copias de la versión saliente (PDF y markdown) **antes** de editar los markdown de la app, y sobrescribe los PDFs servidos en `kb/` y `webapp/kb/`.
2. Los markdown de la app (`resultados/ux-v1/webapp/docs/contrato.es.md`, `bds-anexo.es.md`, `academia-anexo.es.md`) se mantienen fieles al texto sustantivo del PDF oficial vigente.
3. No borrar versiones anteriores: esta carpeta es el registro histórico.
