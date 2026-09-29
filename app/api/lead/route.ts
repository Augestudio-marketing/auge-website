import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { enviarEmailDiagnostico } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const { nombre, email, instagramWeb, whatsapp, nota, nivel, fugaPrincipal, fugaSecundaria, respuestas } =
    body;

  if (!nombre || !email) {
    return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Faltan las variables de entorno de Supabase");
    return NextResponse.json({ error: "Integración no configurada" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { error } = await supabase.from("diagnosticos").insert({
    nombre,
    email,
    instagram_web: instagramWeb || null,
    whatsapp: whatsapp || "",
    nivel: nivel ?? null,
    nota: nota ?? null,
    fuga_principal: fugaPrincipal ?? null,
    fuga_secundaria: fugaSecundaria ?? null,
    respuestas: respuestas ?? null,
  });

  if (error) {
    console.error("Error guardando el diagnóstico en Supabase:", error);
    return NextResponse.json({ error: "No se pudo guardar el diagnóstico" }, { status: 502 });
  }

  await enviarEmailDiagnostico(email, nombre);

  return NextResponse.json({ ok: true });
}
