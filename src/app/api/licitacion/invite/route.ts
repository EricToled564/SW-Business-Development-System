// Invitar a un proveedor. POST { razonSocial, contactoEmail } → { id, enlace }.
// Solo el convocante autenticado. El enlace único se muestra una sola vez.
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sesionValida } from '@/lib/licitacion/auth';
import { invitarProveedor } from '@/lib/licitacion/db';

export const dynamic = 'force-dynamic';

export async function POST(req: Request): Promise<Response> {
  const cookieStore = await cookies();
  const ok = await sesionValida(cookieStore.get('lic_sesion')?.value ?? null);
  if (!ok) return NextResponse.json({ ok: false, error: 'no autorizado' }, { status: 401 });

  let body: { razonSocial?: string; contactoEmail?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'cuerpo inválido' }, { status: 400 });
  }
  if (!body.razonSocial || !body.contactoEmail) {
    return NextResponse.json({ ok: false, error: 'faltan datos' }, { status: 400 });
  }

  const { id, token } = await invitarProveedor(body.razonSocial, body.contactoEmail);
  const origin = new URL(req.url).origin;
  const enlace = `${origin}/es/licitacion/postular?t=${token}`;
  return NextResponse.json({ ok: true, id, enlace });
}
