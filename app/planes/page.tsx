import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import PlanesHero from "./PlanesHero";
import Setup from "./Setup";
import PlanDetalle from "./PlanDetalle";
import Comparativa from "./Comparativa";
import Cuota from "./Cuota";
import AntesDeElegir from "./AntesDeElegir";
import DiagnosticoCierre from "./DiagnosticoCierre";
import { PLANES } from "./datos";

export const metadata: Metadata = {
  title: "Planes — auge.studio",
  description:
    "Base, Crecimiento y Escala: qué incluye cada plan de AUGE, cuánto cuesta el setup, qué cubre la cuota mensual y cómo elegir el nivel que necesita tu negocio.",
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

      <PlanesHero />
      <Setup />
      {PLANES.map((plan, i) => (
        <PlanDetalle key={plan.id} plan={plan} indice={i} />
      ))}
      <Comparativa />
      <Cuota />
      <AntesDeElegir />
      <DiagnosticoCierre />
      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
