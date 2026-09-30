import type { Metadata } from "next";
import AbrirWhatsapp from "./AbrirWhatsapp";

// Puente para anuncios: registra la conversión y abre WhatsApp.
// Google Ads no admite enlazar directamente a wa.me desde los enlaces de sitio.
export const metadata: Metadata = {
  title: "WhatsApp — auge.studio",
  robots: { index: false, follow: false },
};

export default function WhatsappPage() {
  return <AbrirWhatsapp />;
}
