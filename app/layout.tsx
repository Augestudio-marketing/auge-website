import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";

const displaySerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["600"],
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
  title: "auge.studio — llenamos la agenda de los negocios de belleza y estética",
  description:
    "Web, reservas, WhatsApp que responde solo, reseñas, fidelización y publicidad. Lo instalamos dentro de tu negocio y lo gestionamos cada mes.",
  openGraph: {
    title: "auge.studio — llenamos la agenda de los negocios de belleza y estética",
    description:
      "Web, reservas, WhatsApp que responde solo, reseñas, fidelización y publicidad. Lo instalamos dentro de tu negocio y lo gestionamos cada mes.",
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
        className={`${displaySerif.variable} ${inter.variable} ${caveat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
