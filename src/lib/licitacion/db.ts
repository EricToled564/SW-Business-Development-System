// Acceso a datos de la licitación (Vercel Postgres).
import { sql } from '@vercel/postgres';
import { randomToken, sha256 } from './auth';

export interface Adjunto { nombre: string; tipo: string; size: number; url: string }

export interface PropuestaGuardada {
  proveedorId: string;
  razonSocial: string;
  datos: Record<string, unknown>;
  adjuntos: Adjunto[];
  firma: string;
  enviadoEn: string;
}

// Crea un proveedor invitado y devuelve el token en claro del enlace único (una sola vez).
export async function invitarProveedor(
  razonSocial: string,
  contactoEmail: string
): Promise<{ id: string; token: string }> {
  const id = randomToken(4);
  const token = randomToken(24);
  const tokenHash = await sha256(token);
  await sql`
    INSERT INTO lic_proveedores (id, razon_social, contacto_email, token_hash)
    VALUES (${id}, ${razonSocial}, ${contactoEmail}, ${tokenHash})
  `;
  return { id, token };
}

// Inserta o reemplaza la propuesta de un proveedor.
export async function guardarPropuesta(p: PropuestaGuardada): Promise<void> {
  await sql`
    INSERT INTO lic_propuestas (proveedor_id, razon_social, datos, adjuntos, firma)
    VALUES (${p.proveedorId}, ${p.razonSocial}, ${JSON.stringify(p.datos)}, ${JSON.stringify(p.adjuntos)}, ${p.firma})
    ON CONFLICT (proveedor_id) DO UPDATE
      SET razon_social = EXCLUDED.razon_social,
          datos = EXCLUDED.datos,
          adjuntos = EXCLUDED.adjuntos,
          firma = EXCLUDED.firma,
          enviado_en = now()
  `;
}

// Devuelve todas las propuestas (uso del convocante).
export async function listarPropuestas(): Promise<PropuestaGuardada[]> {
  const { rows } = await sql`
    SELECT proveedor_id, razon_social, datos, adjuntos, firma, enviado_en
    FROM lic_propuestas ORDER BY enviado_en ASC
  `;
  return rows.map((r) => ({
    proveedorId: r.proveedor_id as string,
    razonSocial: r.razon_social as string,
    datos: r.datos as Record<string, unknown>,
    adjuntos: (r.adjuntos as Adjunto[]) ?? [],
    firma: r.firma as string,
    enviadoEn: (r.enviado_en as Date).toISOString?.() ?? String(r.enviado_en),
  }));
}
