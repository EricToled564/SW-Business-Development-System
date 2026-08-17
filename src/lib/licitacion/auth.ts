// Autenticación de la licitación.
// - Proveedores: enlace único con token. El token viaja en la URL (?t=) o cabecera;
//   se compara por hash contra lic_proveedores.token_hash.
// - Convocante: login por contraseña (LICITACION_ADMIN_PASSWORD), sesión por cookie.
//
// Todo el hashing usa SHA-256 vía Web Crypto (disponible en el runtime de Vercel).

import { sql } from '@vercel/postgres';

export async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function randomToken(bytes = 24): string {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return Array.from(arr).map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Verifica el token de un proveedor. Devuelve su id y razón social, o null.
export async function proveedorPorToken(
  token: string | null
): Promise<{ id: string; razonSocial: string } | null> {
  if (!token) return null;
  const h = await sha256(token);
  const { rows } = await sql`
    SELECT id, razon_social FROM lic_proveedores WHERE token_hash = ${h} LIMIT 1
  `;
  if (rows.length === 0) return null;
  return { id: rows[0].id as string, razonSocial: rows[0].razon_social as string };
}

// Crea una sesión de convocante y devuelve el token en claro (se guarda en cookie).
export async function crearSesion(horas = 12): Promise<string> {
  const token = randomToken(32);
  const h = await sha256(token);
  const expira = new Date(Date.now() + horas * 3600 * 1000).toISOString();
  await sql`INSERT INTO lic_sesiones (token_hash, expira_en) VALUES (${h}, ${expira})`;
  return token;
}

// Valida una sesión de convocante a partir de la cookie.
export async function sesionValida(token: string | null): Promise<boolean> {
  if (!token) return false;
  const h = await sha256(token);
  const { rows } = await sql`
    SELECT 1 FROM lic_sesiones WHERE token_hash = ${h} AND expira_en > now() LIMIT 1
  `;
  return rows.length > 0;
}

export function verificaPassword(intento: string): boolean {
  const real = process.env.LICITACION_ADMIN_PASSWORD;
  return typeof real === 'string' && real.length > 0 && intento === real;
}
