// Medición de Google Ads. Los identificadores no son secretos: se configuran
// en Vercel (Settings -> Environment Variables) y requieren volver a desplegar.
// Si NEXT_PUBLIC_GOOGLE_ADS_ID no está definido, no se carga nada.

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

const ETIQUETAS = {
  diagnostico: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONV_DIAGNOSTICO ?? "",
  whatsapp: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONV_WHATSAPP ?? "",
};

export type Conversion = keyof typeof ETIQUETAS;

export const WHATSAPP_NUMERO = "34613803022";

type Gtag = (...args: unknown[]) => void;

function gtag(): Gtag | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  return typeof g === "function" ? g : null;
}

// Registra una conversión. `alTerminar` se ejecuta siempre, haya medición o no,
// y como mucho tras `esperaMaxima` ms, para no bloquear nunca a quien hace clic.
export function registrarConversion(
  tipo: Conversion,
  alTerminar?: () => void,
  esperaMaxima = 800
) {
  const g = gtag();
  const etiqueta = ETIQUETAS[tipo];

  if (!g || !GOOGLE_ADS_ID || !etiqueta) {
    alTerminar?.();
    return;
  }

  let hecho = false;
  const terminar = () => {
    if (hecho) return;
    hecho = true;
    alTerminar?.();
  };

  g("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${etiqueta}`,
    event_callback: terminar,
  });
  if (alTerminar) window.setTimeout(terminar, esperaMaxima);
}

// Crea la cola de gtag y fija el consentimiento por defecto (todo denegado)
// antes de cargar la librería, para que el orden de los comandos sea correcto.
export function iniciarGtag(consentimientoGuardado: boolean) {
  if (typeof window === "undefined" || !GOOGLE_ADS_ID || gtag()) return;
  const w = window as unknown as { dataLayer: unknown[]; gtag: Gtag };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // gtag.js necesita el objeto `arguments`, no un array.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  if (consentimientoGuardado) actualizarConsentimiento(true);
  w.gtag("js", new Date());
  w.gtag("config", GOOGLE_ADS_ID);
}

export function actualizarConsentimiento(aceptado: boolean) {
  const valor = aceptado ? "granted" : "denied";
  gtag()?.("consent", "update", {
    ad_storage: valor,
    ad_user_data: valor,
    ad_personalization: valor,
    analytics_storage: valor,
  });
}
