import Header from "./components/Header";
import Hero from "./components/Hero";
import Carrusel from "./components/Carrusel";
import Carta from "./components/Carta";
import SietePiezas from "./components/SietePiezas";
import Cifras from "./components/Cifras";
import PruebaloTu from "./components/PruebaloTu";
import Metodo from "./components/Metodo";
import QuienSomos from "./components/QuienSomos";
import QuizCTA from "./components/QuizCTA";
import ConQuien from "./components/ConQuien";
import Garantia from "./components/Garantia";
import FAQ from "./components/FAQ";
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
        <Carta />
        <SietePiezas />
        <Cifras />
        <PruebaloTu />
        <Metodo />
        <QuienSomos />
        <QuizCTA />
        <ConQuien />
        <Garantia />
        <FAQ />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </main>
  );
}
