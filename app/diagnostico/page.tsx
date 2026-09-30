import type { Metadata } from "next";
import DiagnosticoLanding from "./DiagnosticoLanding";

export const metadata: Metadata = {
  title: "Diagnóstico gratis para tu negocio de belleza o estética — auge.studio",
  description:
    "12 preguntas, 4 minutos. Descubre cuánto depende tu negocio de ti y qué partes de tu día a día ya podrían funcionar solas. Gratis, sin compromiso.",
  openGraph: {
    title: "Diagnóstico gratis para tu negocio de belleza o estética",
    description:
      "12 preguntas, 4 minutos. Descubre cuánto depende tu negocio de ti y qué partes de tu día a día ya podrían funcionar solas.",
    url: "https://augestudio.es/diagnostico",
    siteName: "auge.studio",
    locale: "es_ES",
    type: "website",
  },
};

export default function DiagnosticoPage() {
  return <DiagnosticoLanding />;
}
