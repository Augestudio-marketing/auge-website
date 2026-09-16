import Header from "./components/Header";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Servicios from "./components/Servicios";
import Formacion from "./components/Formacion";
import Sobre from "./components/Sobre";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-stone">
      <Header />
      <Hero />
      <Problema />
      <Servicios />
      <Formacion />
      <Sobre />
      <Contacto />
      <Footer />
    </main>
  );
}
