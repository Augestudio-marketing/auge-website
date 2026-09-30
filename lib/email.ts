const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = "AUGE <hola@augestudio.es>";
const ADMIN_EMAIL = "miriamsou98@gmail.com";

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const VINO = "#7A1F3D";
const TINTA = "#111114";
const GRIS = "#6B6C74";
const GRIS_CLARO = "#F6F7F9";
const BORDE = "#ECECEF";

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
    <div style="font-family: ${FONT}; background:${GRIS_CLARO}; padding: 40px 20px;">
      <div style="max-width: 480px; margin: 0 auto; background:#ffffff; border-radius: 20px; padding: 40px; border: 1px solid ${BORDE};">
        <p style="margin: 0 0 28px; font-size: 18px; line-height: 1;">
          <span style="font-weight: 800; color:${TINTA};">auge</span><span style="font-weight: 400; color:${TINTA};">.studio</span>
        </p>
        <div style="font-size: 15px; line-height: 1.7; color:${TINTA};">
          ${contenido}
        </div>
        ${botones
          .map(
            (b) => `
          <a href="${b.href}" style="display:block; margin-top: 16px; background:${VINO}; color:#ffffff; text-decoration:none; text-align:center; padding: 14px; border-radius: 999px; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; font-weight:600;">
            ${b.texto}
          </a>`
          )
          .join("")}
        <p style="margin: 32px 0 0; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color:#9a9ba3;">
          auge.studio · Aesthetic Marketing
        </p>
      </div>
    </div>
  `;
}

function filaTabla(etiqueta: string, valor: string) {
  return `
    <tr>
      <td style="padding:7px 0; color:${GRIS}; font-size:13px;">${etiqueta}</td>
      <td style="padding:7px 0; text-align:right; font-size:14px; color:${TINTA};">${valor}</td>
    </tr>
  `;
}

export async function enviarEmailDiagnostico(to: string, nombre: string) {
  const contenido = `
    <p style="margin:0 0 6px; font-size:20px; font-weight:600;">Hola${nombre ? `, ${nombre}` : ""}.</p>
    <p style="margin:0 0 16px; color:${GRIS};">Ya tienes tu diagnóstico.</p>
    <p style="margin:0 0 16px;">Hay algo que probablemente ya sabías: tu negocio funciona, pero todavía depende demasiado de ti.</p>
    <p style="margin:0; color:${GRIS};">Y si quieres que lo veamos juntas, puedes reservar una llamada con AUGE.</p>
  `;
  const html = plantillaBase(contenido, [
    { texto: "Ver mi diagnóstico", href: "https://augestudio.es/#diagnostico" },
    { texto: "Reservar llamada", href: "https://app.augestudio.es/reservar" },
  ]);
  await enviarEmail(to, "Tu diagnóstico AUGE está aquí.", html);
}

export async function enviarNotificacionDiagnostico(datos: {
  nombre: string;
  email: string;
  instagramWeb?: string;
  whatsapp?: string;
  nivel: string;
  nota: number;
  dejarDeHacer?: string;
}) {
  const contenido = `
    <p style="margin:0 0 4px; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:${VINO};">Nuevo diagnóstico</p>
    <p style="margin:0 0 20px; font-size:20px; font-weight:600;">${datos.nombre}</p>
    <table style="width:100%; border-collapse:collapse; border-top:1px solid ${BORDE};">
      ${filaTabla("Email", datos.email)}
      ${datos.instagramWeb ? filaTabla("Instagram/web", datos.instagramWeb) : ""}
      ${datos.whatsapp ? filaTabla("Teléfono", datos.whatsapp) : ""}
      ${filaTabla("Nivel", `${datos.nivel} (${datos.nota}/100)`)}
    </table>
    ${
      datos.dejarDeHacer
        ? `<p style="margin:20px 0 0; padding:16px 20px; background:${GRIS_CLARO}; border-radius:12px; font-style:italic; color:${GRIS};">"Le gustaría dejar de hacer: ${datos.dejarDeHacer}"</p>`
        : ""
    }
  `;
  const html = plantillaBase(contenido, []);
  await enviarEmail(ADMIN_EMAIL, `Nuevo diagnóstico: ${datos.nombre}`, html);
}

export async function enviarEmailSeguimiento(to: string) {
  const contenido = `
    <p style="margin:0 0 16px;">¿Qué pasaría si durante una semana no pudieras estar pendiente de WhatsApp, reservas y seguimiento?</p>
    <p style="margin:0 0 16px; color:${GRIS};">Esa pregunta dice mucho más sobre un negocio de lo que parece.</p>
    <p style="margin:0;">Y precisamente por eso creamos AUGE.</p>
  `;
  const html = plantillaBase(contenido, [
    { texto: "Ver mi diagnóstico", href: "https://augestudio.es/#diagnostico" },
  ]);
  await enviarEmail(to, "Una pregunta sobre tu negocio", html);
}
