import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
  title: "AUGE. — Sistema Auge para peluquerías y salones de belleza",
  description:
    "Web a medida, reservas online, WhatsApp que responde solo, reseñas y clientas que vuelven. El sistema que gestiona tu marketing para que tú solo atiendas a tus clientas.",
  openGraph: {
    title: "AUGE. — Sistema Auge para peluquerías y salones de belleza",
    description:
      "Web a medida, reservas online, WhatsApp que responde solo, reseñas y clientas que vuelven.",
    url: "https://augestudio.es",
    siteName: "AUGE. Aesthetic Marketing Studio",
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
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
