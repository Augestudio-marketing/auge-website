import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Perdidas from "./components/Perdidas";
import Selector from "./components/Selector";
import Sistema from "./components/Sistema";
import Calculadora from "./components/Calculadora";
import Comparativa from "./components/Comparativa";
import Metodo from "./components/Metodo";
import TuParte from "./components/TuParte";
import Precios from "./components/Precios";
import Garantia from "./components/Garantia";
import QuienSomos from "./components/QuienSomos";
import FAQ from "./components/FAQ";
import Formacion from "./components/Formacion";
import QuizCTA from "./components/QuizCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-stone">
      <div className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar />
        <Header />
      </div>

      <div className="pt-[104px] md:pt-[112px]">
        <Hero />
        <Perdidas />
        <Selector />
        <Sistema />
        <Calculadora />
        <Comparativa />
        <Metodo />
        <TuParte />
        <Precios />
        <Garantia />
        <QuienSomos />
        <FAQ />
        <Formacion />
        <QuizCTA />
        <Footer />
      </div>
    </main>
  );
}
