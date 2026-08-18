# Licitación del Equipo 1 — backend con SSR bilingüe

Sección de licitación construida **dentro de la app Next.js** del repositorio (SSR real, bilingüe es/en), con backend serverless en Vercel, almacenamiento en **Vercel Postgres + Vercel Blob** y acceso por **enlace único por proveedor + login del convocante**.

Es independiente del depósito documental del cliente: no aparece en `app.js` ni en los documentos de Sports World, y las tools `audit-docs`/`consistencia` no la procesan.

## Rutas

| Ruta | Qué es | Render |
|---|---|---|
| `/es/licitacion` · `/en/licitacion` | Brief del proyecto (bilingüe) | SSG por idioma |
| `/[lang]/licitacion/postular?t=TOKEN` | Envío de propuesta del proveedor | SSR dinámico |
| `/[lang]/licitacion/evaluar` | Comparación y ganador (convocante) | SSR dinámico |
| `POST /api/licitacion/login` | Login del convocante → cookie de sesión | Serverless |
| `POST /api/licitacion/invite` | Crea proveedor y devuelve su enlace único (solo convocante) | Serverless |
| `POST /api/licitacion/submit?t=TOKEN` | Guarda la propuesta y sube adjuntos a Blob | Serverless |
| `GET /api/licitacion/proposals` | Lista de propuestas (solo convocante) | Serverless |

## Estado de verificación

- `npx tsc --noEmit` → **0 errores**.
- `npm run build` → **compila**; `/es/licitacion` y `/en/licitacion` se generan, las demás rutas quedan como funciones dinámicas.
- **No probado en vivo**: requiere el despliegue en Vercel con Postgres, Blob y los secretos de abajo. La conexión a base de datos y el almacenamiento no se ejercitan en el build.

## Puesta en producción (en tu cuenta de Vercel)

1. **Proyecto en Vercel** apuntando a este repositorio (framework Next.js, detectado solo).
2. **Vercel Postgres** — en el panel del proyecto, pestaña Storage → Create → Postgres. Se inyectan solas las variables `POSTGRES_URL`, etc. Luego ejecuta el esquema una vez:
   ```
   psql "$POSTGRES_URL" -f src/lib/licitacion/schema.sql
   ```
3. **Vercel Blob** — Storage → Create → Blob. Inyecta `BLOB_READ_WRITE_TOKEN`.
4. **Variable de entorno** — Settings → Environment Variables:
   - `LICITACION_ADMIN_PASSWORD` = la contraseña del convocante.
5. **Desplegar** — push a la rama que Vercel observe, o `vercel --prod`.

## Cómo se opera

1. El convocante entra a `/es/licitacion/evaluar`, se autentica con su contraseña.
2. Para invitar a un proveedor: en la vista `/evaluar`, el bloque **Invitar a un proveedor** pide razón social y correo y genera el **enlace único** `…/licitacion/postular?t=TOKEN`, con botón para copiarlo. Se lo envías a ese proveedor. (Internamente llama a `POST /api/licitacion/invite`.)
3. El proveedor abre su enlace, llena la propuesta y adjunta archivos. El servidor la guarda **bajo su token**: ningún otro proveedor puede verla ni enumerarla.
4. El convocante carga las propuestas en `/evaluar`, ajusta la calidad cualitativa (portafolio UX y profundidad técnica) y el sistema **descalifica las incompletas, puntúa contra la rúbrica y propone un ganador**.

## Aislamiento y seguridad

- **Proveedor ↔ proveedor:** cada propuesta se escribe y se lee solo con el token del enlace único; no hay endpoint que liste propuestas sin la sesión del convocante.
- **Adjuntos:** se suben a Blob bajo el prefijo `licitacion/<proveedorId>/…`, con URL no enumerable. Para privacidad estricta (URL firmada de un solo uso) se cambia `access` de `public` a un esquema con token firmado.
- **Convocante:** contraseña por variable de entorno, sesión por cookie `httpOnly`/`secure` con expiración.

## Diferencia con el portal estático

En `resultados/ux-v1/webapp/licitacion/` quedó una versión **estática** de este mismo portal (sin backend), útil como respaldo o para compartir por GitHub Pages sin desplegar Vercel. Esta versión Next.js la sustituye cuando el backend esté en línea; ambas comparten la misma rúbrica (`src/lib/licitacion/scoring.ts`).

## Idioma

Bilingüe **es/en** vía el sistema `[lang]` del proyecto. Todo el contenido vive en `src/app/[lang]/licitacion/content.ts`, en paralelo para los dos idiomas.
