import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://augestudio.es"),
  title: "auge.studio — Aesthetic Marketing",
  description:
    "Tu negocio merece estar a la altura de lo que haces. Branding, web, reservas, WhatsApp y automatización conectados en un mismo sistema.",
  openGraph: {
    title: "auge.studio — Aesthetic Marketing",
    description:
      "Tu negocio merece estar a la altura de lo que haces. Branding, web, reservas, WhatsApp y automatización conectados en un mismo sistema.",
    url: "https://augestudio.es",
    siteName: "auge.studio",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
