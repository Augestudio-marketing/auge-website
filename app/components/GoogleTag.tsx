"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  GOOGLE_ADS_ID,
  actualizarConsentimiento,
  iniciarGtag,
  registrarConversion,
} from "@/lib/analytics";

const CLAVE_CONSENTIMIENTO = "auge-cookies";

function leerConsentimiento(): string | null {
  try {
    return window.localStorage.getItem(CLAVE_CONSENTIMIENTO);
  } catch {
    return null;
  }
}

function guardarConsentimiento(valor: "si" | "no") {
  try {
    window.localStorage.setItem(CLAVE_CONSENTIMIENTO, valor);
  } catch {
    // Sin almacenamiento: el aviso volverá a salir en la próxima visita.
  }
}

// Etiqueta de Google Ads con Consent Mode v2 (todo denegado hasta que se acepta),
// aviso de cookies y medición de cualquier clic a WhatsApp de la web.
export default function GoogleTag() {
  const [mostrarAviso, setMostrarAviso] = useState(false);

  useEffect(() => {
    if (!GOOGLE_ADS_ID) return;

    const guardado = leerConsentimiento();
    iniciarGtag(guardado === "si");
    if (guardado === null) setMostrarAviso(true);

    function alHacerClic(e: MouseEvent) {
      const enlace = (e.target as HTMLElement | null)?.closest?.("a");
      if (enlace?.href.includes("wa.me/") && !enlace.dataset.sinMedir) {
        registrarConversion("whatsapp");
      }
    }
    document.addEventListener("click", alHacerClic, true);
    return () => document.removeEventListener("click", alHacerClic, true);
  }, []);

  if (!GOOGLE_ADS_ID) return null;

  function decidir(aceptado: boolean) {
    guardarConsentimiento(aceptado ? "si" : "no");
    actualizarConsentimiento(aceptado);
    setMostrarAviso(false);
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />

      {mostrarAviso && (
        <div
          role="dialog"
          aria-label="Cookies"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl border border-stone/15 bg-cream px-6 py-5 text-stone sm:bottom-6"
        >
          <p className="text-sm leading-relaxed text-stone/75">
            Usamos cookies para saber qué anuncios nos traen visitas y mejorar
            cómo te encontramos. Solo se activan si aceptas.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => decidir(true)}
              className="rounded-full border border-burgundy bg-burgundy px-6 py-2 text-xs uppercase tracking-widest text-cream transition-colors hover:bg-transparent hover:text-burgundy"
            >
              Aceptar
            </button>
            <button
              type="button"
              onClick={() => decidir(false)}
              className="text-xs uppercase tracking-widest text-stone/60 hover:text-burgundy"
            >
              Rechazar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
