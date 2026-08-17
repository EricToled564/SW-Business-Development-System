// Almacenamiento de adjuntos en Vercel Blob.
// Cada archivo se sube bajo el prefijo del proveedor, de modo que un proveedor
// nunca puede leer los adjuntos de otro (las URLs no son enumerables).
import { put } from '@vercel/blob';
import type { Adjunto } from './db';

export async function subirAdjunto(
  proveedorId: string,
  nombre: string,
  tipo: string,
  contenido: ArrayBuffer
): Promise<Adjunto> {
  const safe = nombre.replace(/[^a-zA-Z0-9._-]+/g, '-').slice(0, 80);
  const ruta = `licitacion/${proveedorId}/${Date.now()}-${safe}`;
  const blob = await put(ruta, contenido, {
    access: 'public', // acceso por URL no enumerable; para privado real usar tokens firmados
    contentType: tipo || 'application/octet-stream',
  });
  return { nombre, tipo, size: contenido.byteLength, url: blob.url };
}
