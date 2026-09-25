import Header from "./components/Header";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Presentacion from "./components/Presentacion";
import Sistema from "./components/Sistema";
import SietePiezas from "./components/SietePiezas";
import Partners from "./components/Partners";
import Metodo from "./components/Metodo";
import ConQuien from "./components/ConQuien";
import Miriam from "./components/Miriam";
import QuizCTA from "./components/QuizCTA";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-marfil text-stone">
      <div aria-hidden className="invisible">
        <Header />
      </div>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header />
      </div>

      <div>
        <Hero />
        <Problema />
        <Presentacion />
        <Sistema />
        <SietePiezas />
        <Partners />
        <Metodo />
        <ConQuien />
        <Miriam />
        <QuizCTA />
        <CTAFinal />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </main>
  );
}
