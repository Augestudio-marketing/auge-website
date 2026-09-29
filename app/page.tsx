import Header from "./components/Header";
import Hero from "./components/Hero";
import Carrusel from "./components/Carrusel";
import Problema from "./components/Problema";
import Giro from "./components/Giro";
import Presentacion from "./components/Presentacion";
import Sistema from "./components/Sistema";
import SietePiezas from "./components/SietePiezas";
import Manifiesto from "./components/Manifiesto";
import Metodo from "./components/Metodo";
import Miriam from "./components/Miriam";
import QuizCTA from "./components/QuizCTA";
import ConQuien from "./components/ConQuien";
import Propiedad from "./components/Propiedad";
import Garantia from "./components/Garantia";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-stone">
      <div aria-hidden className="invisible">
        <Header />
      </div>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header />
      </div>

      <div>
        <Hero />
        <Carrusel />
        <Problema />
        <Giro />
        <Presentacion />
        <Sistema />
        <SietePiezas />
        <Manifiesto />
        <Metodo />
        <Miriam />
        <ConQuien />
        <QuizCTA />
        <Propiedad />
        <Garantia />
        <FAQ />
        <CTAFinal />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </main>
  );
}
