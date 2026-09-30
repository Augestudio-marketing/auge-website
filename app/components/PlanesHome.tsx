import Reveal from "./Reveal";
import Etiqueta from "./Etiqueta";
import ResumenPlanes from "../planes/ResumenPlanes";

export default function PlanesHome() {
  return (
    <section id="planes" className="bg-hueso px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest2 text-burgundy">
            Planes AUGE
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Un sistema que crece
            <br />
            <span className="italic text-burgundy">con tu negocio.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-stone/70">
            Tres niveles. Empieza por lo que realmente necesitas y amplía
            cuando tu negocio lo pida.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <Etiqueta>Condiciones especiales actuales</Etiqueta>
          <ResumenPlanes base="/planes" Titulo="h3" compacto={false} />
          <div className="mt-10 text-center">
            <a
              href="/planes"
              className="inline-block rounded-full border border-burgundy px-9 py-4 text-xs uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-burgundy hover:text-cream"
            >
              Ver qué incluye cada plan →
            </a>
            <p className="mt-4 text-xs uppercase tracking-widest text-stone/45">
              Setup: 50% al comenzar · 50% al finalizar la implementación
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
