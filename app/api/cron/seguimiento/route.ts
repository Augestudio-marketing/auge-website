import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { enviarEmailSeguimiento } from "@/lib/email";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Falta configurar SUPABASE_SERVICE_ROLE_KEY para el cron de seguimiento");
    return NextResponse.json({ error: "Integración no configurada" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const hace48h = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();
  const hace24h = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const { data: candidatos, error } = await supabase
    .from("diagnosticos")
    .select("id, email")
    .eq("email2_enviado", false)
    .gte("created_at", hace48h)
    .lte("created_at", hace24h);

  if (error) {
    console.error("Error buscando diagnósticos para el email de seguimiento:", error);
    return NextResponse.json({ error: "No se pudo consultar la base de datos" }, { status: 500 });
  }

  for (const candidato of candidatos ?? []) {
    await enviarEmailSeguimiento(candidato.email);
    await supabase.from("diagnosticos").update({ email2_enviado: true }).eq("id", candidato.id);
  }

  return NextResponse.json({ enviados: candidatos?.length ?? 0 });
}
