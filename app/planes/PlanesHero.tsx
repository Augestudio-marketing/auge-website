import Reveal from "../components/Reveal";
import Etiqueta from "../components/Etiqueta";
import ResumenPlanes from "./ResumenPlanes";

export default function PlanesHero() {
  return (
    <section className="bg-marfil px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-burgundy">
            Planes AUGE
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[2rem] leading-[1.1] text-stone sm:text-6xl md:text-7xl">
            Un sistema que crece
            <br />
            <span className="italic text-burgundy">con tu negocio.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-stone/75">
            Tres formas de llevar tu negocio a otro nivel.
            <br className="hidden sm:block" /> Empieza por lo que realmente
            necesitas.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone/55">
            Todos los planes incluyen un setup inicial y una cuota mensual de
            gestión, mantenimiento y evolución.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-14 md:mt-20">
          <Etiqueta>Condiciones especiales actuales</Etiqueta>
          <ResumenPlanes />
          <p className="mt-8 text-center text-xs uppercase tracking-widest text-stone/45">
            Setup: 50% al comenzar · 50% al finalizar la implementación
          </p>
        </Reveal>
      </div>
    </section>
  );
}
