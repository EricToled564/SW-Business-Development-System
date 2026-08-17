// Login del convocante. POST { password } → cookie de sesión.
import { NextResponse } from 'next/server';
import { verificaPassword, crearSesion } from '@/lib/licitacion/auth';

export const dynamic = 'force-dynamic';

export async function POST(req: Request): Promise<Response> {
  let body: { password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'cuerpo inválido' }, { status: 400 });
  }
  if (!verificaPassword(body.password ?? '')) {
    return NextResponse.json({ ok: false, error: 'contraseña incorrecta' }, { status: 401 });
  }
  const token = await crearSesion(12);
  const res = NextResponse.json({ ok: true });
  res.cookies.set('lic_sesion', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 12 * 3600,
  });
  return res;
}
