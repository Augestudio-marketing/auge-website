"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WHATSAPP_NUMERO, registrarConversion } from "@/lib/analytics";

const MENSAJE_POR_DEFECTO = "Hola, he visto AUGE en Google y me gustaría hablar con vosotros.";

function enlaceWhatsapp(): string {
  let texto = MENSAJE_POR_DEFECTO;
  try {
    const propio = new URLSearchParams(window.location.search).get("texto");
    if (propio) texto = propio.slice(0, 300);
  } catch {
    // Sin parámetros: mensaje por defecto.
  }
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

export default function AbrirWhatsapp() {
  const [href, setHref] = useState(
    `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(MENSAJE_POR_DEFECTO)}`
  );

  useEffect(() => {
    const destino = enlaceWhatsapp();
    setHref(destino);
    // Espera a que la etiqueta de Google esté lista antes de medir y redirigir.
    const t = window.setTimeout(() => {
      registrarConversion("whatsapp", () => window.location.replace(destino));
    }, 400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-marfil px-6 text-center text-stone">
      <Image
        src="/logo-burdeos.webp"
        alt="auge.studio"
        width={2000}
        height={667}
        priority
        className="h-10 w-auto"
      />
      <p className="mt-10 font-display text-3xl">
        Abriendo <span className="italic text-burgundy">WhatsApp…</span>
      </p>
      <a
        href={href}
        data-sin-medir="1"
        className="mt-8 inline-block rounded-full border border-burgundy px-8 py-3 text-xs uppercase tracking-widest text-burgundy transition-colors hover:bg-burgundy hover:text-cream"
      >
        Si no se abre, pulsa aquí →
      </a>
    </main>
  );
}
