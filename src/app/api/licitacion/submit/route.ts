// Envío de propuesta por un proveedor. POST multipart/form-data con:
//   - campo "propuesta": JSON con proveedor, obligatorios, recomendados, declarado, narrativa, firma
//   - archivos adjuntos (0..n)
// Autenticación: token del enlace único en ?t= o cabecera x-lic-token.
// El proveedor solo puede escribir su propia propuesta; nunca lee las de otros.
import { NextResponse } from 'next/server';
import { proveedorPorToken } from '@/lib/licitacion/auth';
import { guardarPropuesta, type Adjunto } from '@/lib/licitacion/db';
import { subirAdjunto } from '@/lib/licitacion/blob';

export const dynamic = 'force-dynamic';

export async function POST(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const token = url.searchParams.get('t') ?? req.headers.get('x-lic-token');
  const prov = await proveedorPorToken(token);
  if (!prov) return NextResponse.json({ ok: false, error: 'enlace inválido o vencido' }, { status: 401 });

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'formato inválido' }, { status: 400 });
  }

  const crudo = form.get('propuesta');
  if (typeof crudo !== 'string') {
    return NextResponse.json({ ok: false, error: 'falta la propuesta' }, { status: 400 });
  }
  let datos: Record<string, unknown> & { firma?: string; razonSocial?: string };
  try {
    datos = JSON.parse(crudo);
  } catch {
    return NextResponse.json({ ok: false, error: 'propuesta ilegible' }, { status: 400 });
  }

  const adjuntos: Adjunto[] = [];
  for (const entry of form.getAll('archivos')) {
    if (entry instanceof File && entry.size > 0) {
      const buf = await entry.arrayBuffer();
      adjuntos.push(await subirAdjunto(prov.id, entry.name, entry.type, buf));
    }
  }

  await guardarPropuesta({
    proveedorId: prov.id,
    razonSocial: prov.razonSocial,
    datos,
    adjuntos,
    firma: typeof datos.firma === 'string' ? datos.firma : '',
    enviadoEn: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, folio: prov.id, adjuntos: adjuntos.length });
}
