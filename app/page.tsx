import Header from "./components/Header";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Giro from "./components/Giro";
import SietePiezas from "./components/SietePiezas";
import Sistema from "./components/Sistema";
import Manifiesto from "./components/Manifiesto";
import Miriam from "./components/Miriam";
import QuizCTA from "./components/QuizCTA";
import Confianza from "./components/Confianza";
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
        <Problema />
        <Giro />
        <SietePiezas />
        <Sistema />
        <Manifiesto />
        <Miriam />
        <QuizCTA />
        <Confianza />
        <FAQ />
        <CTAFinal />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </main>
  );
}
