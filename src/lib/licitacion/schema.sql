-- Esquema de la licitación del Equipo 1 · Vercel Postgres.
-- Ejecutar una vez tras crear la base (ver LICITACION-BACKEND.md).

-- Proveedores invitados. El token del enlace único vive aquí (hasheado).
CREATE TABLE IF NOT EXISTS lic_proveedores (
  id            TEXT PRIMARY KEY,           -- id corto legible
  razon_social  TEXT NOT NULL,
  contacto_email TEXT NOT NULL,
  token_hash    TEXT NOT NULL,              -- SHA-256 del token del enlace; el token en claro solo se muestra al crearse
  creado_en     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Propuestas. Una por proveedor (se reemplaza si vuelve a enviar).
CREATE TABLE IF NOT EXISTS lic_propuestas (
  proveedor_id  TEXT PRIMARY KEY REFERENCES lic_proveedores(id) ON DELETE CASCADE,
  razon_social  TEXT NOT NULL,
  datos         JSONB NOT NULL,             -- proveedor, obligatorios, recomendados, declarado, narrativa
  adjuntos      JSONB NOT NULL DEFAULT '[]',-- [{nombre, tipo, size, url}] — url apunta a Vercel Blob
  firma         TEXT NOT NULL,
  enviado_en    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Sesiones del convocante (login por contraseña).
CREATE TABLE IF NOT EXISTS lic_sesiones (
  token_hash    TEXT PRIMARY KEY,           -- SHA-256 del token de sesión (cookie)
  expira_en     TIMESTAMPTZ NOT NULL
);
