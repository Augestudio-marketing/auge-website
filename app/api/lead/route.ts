import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    nombre,
    negocio,
    ciudad,
    email,
    whatsapp,
    tipoNegocio,
    nota,
    fugaPrincipal,
    fugaSecundaria,
  } = body;

  if (!nombre || !email || !whatsapp) {
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
    negocio: negocio ?? null,
    ciudad: ciudad ?? null,
    email,
    whatsapp,
    tipo_negocio: tipoNegocio ?? null,
    nota: nota ?? null,
    fuga_principal: fugaPrincipal ?? null,
    fuga_secundaria: fugaSecundaria ?? null,
  });

  if (error) {
    console.error("Error guardando el diagnóstico en Supabase:", error);
    return NextResponse.json({ error: "No se pudo guardar el diagnóstico" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
