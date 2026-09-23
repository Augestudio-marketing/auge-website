import { NextResponse } from "next/server";

const GHL_LOCATION_ID = "lGw2I4ZZ82tUMcT9ZvWl";

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

  const apiKey = process.env.contactsghl;
  if (!apiKey) {
    console.error("Falta la variable de entorno contactsghl");
    return NextResponse.json({ error: "Integración no configurada" }, { status: 500 });
  }

  const [firstName, ...resto] = String(nombre).trim().split(" ");
  const lastName = resto.join(" ");

  try {
    const respuesta = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        Version: "v3",
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName: lastName || undefined,
        email,
        phone: whatsapp,
        city: ciudad || undefined,
        source: "Diagnostico Web",
        tags: ["diagnostico-completado"],
        customFields: [
          { key: "nombre_del_negocio", fieldValue: negocio ?? "" },
          { key: "tipo_de_negocio", fieldValue: tipoNegocio ?? "" },
          { key: "nota_diagnostico", fieldValue: nota ?? "" },
          { key: "fuga_principal", fieldValue: fugaPrincipal ?? "" },
          { key: "fuga_secundaria", fieldValue: fugaSecundaria ?? "" },
        ],
      }),
    });

    if (!respuesta.ok) {
      const detalle = await respuesta.text();
      console.error("Error de GHL al crear el contacto:", respuesta.status, detalle);
      return NextResponse.json({ error: "No se pudo crear el contacto" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error de red al llamar a GHL:", error);
    return NextResponse.json({ error: "Error de red" }, { status: 500 });
  }
}
