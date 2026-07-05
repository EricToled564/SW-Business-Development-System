# Gates y presupuestos de calidad
## "Clase mundial" definido en números, no en adjetivos

**Presupuesto de calidad por página (bloqueante en cada PR):**

| Métrica | Umbral | Verificación automática |
|---|---|---|
| Lighthouse Performance / SEO / Best Practices / A11y | ≥ 95 cada uno | CI en cada PR |
| Core Web Vitals | LCP < 2.5 s · INP < 200 ms · CLS < 0.1 (móvil) | CI + CrUX post-lanzamiento |
| Accesibilidad | WCAG 2.2 AA sin violaciones (axe) | CI en cada PR |
| Schema JSON-LD | Válido en Rich Results Test | CI en cada PR |
| Enlaces y assets | 0 rotos, imágenes AVIF/WebP con srcset | CI en cada PR |
| Copy | Aprobado por el editor SEO (muestreo ≥ 20% por lote) | Checklist humano |

**Gates del calendario (los del Plan de Ejecución §3 — el freelancer responsable firma):**
S2 Pilar (home + 1 ficha + 1 hub aprobados) → S3–S4 50% → S5–S6 Completitud → S7 Visto bueno → S8 Lanzamiento.

**Ritual "mejor página de fitness de México":** cada gate incluye una comparación lado a lado
contra 3 referentes (Smart Fit MX, un premium internacional tipo Equinox/Third Space y el mejor
sitio local que encontremos ese mes) en 4 dimensiones: velocidad medida, búsqueda local,
experiencia móvil de agendado y riqueza de contenido por club. Si no ganamos en al menos 3 de 4,
el gate no cierra — se documenta la brecha y se ataca en la semana siguiente.
