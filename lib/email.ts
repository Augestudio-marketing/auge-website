const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = "AUGE <hola@augestudio.es>";

async function enviarEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY no configurada; no se envía email a", to);
    return;
  }

  try {
    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: FROM, to, subject, html }),
    });

    if (!respuesta.ok) {
      console.error("Resend devolvió un error:", respuesta.status, await respuesta.text());
    }
  } catch (error) {
    console.error("Error enviando email con Resend:", error);
  }
}

function plantillaBase(contenido: string, botones: { texto: string; href: string }[]) {
  return `
    <div style="font-family: Georgia, serif; background:#F5F0E8; padding: 40px 20px;">
      <div style="max-width: 480px; margin: 0 auto; background:#ffffff; border-radius: 16px; padding: 40px;">
        <p style="font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color:#5C1A1B; margin: 0 0 24px;">
          auge.studio
        </p>
        <div style="font-size: 15px; line-height: 1.7; color:#2B2622;">
          ${contenido}
        </div>
        ${botones
          .map(
            (b) => `
          <a href="${b.href}" style="display:block; margin-top: 20px; background:#5C1A1B; color:#F5F0E8; text-decoration:none; text-align:center; padding: 14px; border-radius: 999px; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">
            ${b.texto}
          </a>`
          )
          .join("")}
      </div>
    </div>
  `;
}

export async function enviarEmailDiagnostico(to: string, nombre: string) {
  const contenido = `
    <p>Hola, ${nombre || ""}.</p>
    <p>Ya tienes tu diagnóstico.</p>
    <p>Hay algo que probablemente ya sabías: tu negocio funciona, pero todavía depende demasiado de ti.</p>
    <p>Y si quieres que lo veamos juntas, puedes reservar una llamada con AUGE.</p>
  `;
  const html = plantillaBase(contenido, [
    { texto: "Ver mi diagnóstico", href: "https://augestudio.es/#diagnostico" },
    { texto: "Reservar llamada", href: "https://app.augestudio.es/reservar" },
  ]);
  await enviarEmail(to, "Tu diagnóstico AUGE está aquí.", html);
}

export async function enviarEmailSeguimiento(to: string) {
  const contenido = `
    <p>¿Qué pasaría si durante una semana no pudieras estar pendiente de WhatsApp, reservas y seguimiento?</p>
    <p>Esa pregunta dice mucho más sobre un negocio de lo que parece.</p>
    <p>Y precisamente por eso creamos AUGE.</p>
  `;
  const html = plantillaBase(contenido, [
    { texto: "Ver mi diagnóstico", href: "https://augestudio.es/#diagnostico" },
  ]);
  await enviarEmail(to, "Una pregunta sobre tu negocio", html);
}
