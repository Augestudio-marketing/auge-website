import type { Metadata } from "next";
import Header from "../components/Header";
import Planes from "../components/Planes";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Planes — auge.studio",
  description:
    "Tres formas de trabajar con AUGE según lo que tu negocio necesite ahora. Promoción especial este mes.",
};

export default function PlanesPage() {
  return (
    <main className="min-h-screen bg-cream text-stone">
      <div aria-hidden className="invisible">
        <Header />
      </div>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header />
      </div>

      <Planes />
      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
