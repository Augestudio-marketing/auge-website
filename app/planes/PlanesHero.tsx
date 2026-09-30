import Reveal from "../components/Reveal";
import { PLANES } from "./datos";

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
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-6 shrink-0 bg-burgundy/40 sm:w-16" />
            <p className="text-[11px] uppercase tracking-widest text-burgundy sm:tracking-widest2">
              Condiciones especiales actuales
            </p>
            <span className="h-px w-6 shrink-0 bg-burgundy/40 sm:w-16" />
          </div>

          <div className="mt-8 grid border-y border-stone/15 md:grid-cols-3 md:border-y-0">
            {PLANES.map((plan, i) => {
              const destacado = plan.id === "crecimiento";
              return (
                <a
                  key={plan.id}
                  href={`#${plan.id}`}
                  className={`group relative flex items-center justify-between gap-6 px-1 py-6 transition-colors md:flex-col md:items-start md:justify-start md:px-8 md:py-10 ${
                    i > 0 ? "border-t border-stone/15 md:border-t-0" : ""
                  } ${
                    destacado
                      ? "-mx-6 bg-burgundy px-6 text-cream md:mx-0 md:px-8"
                      : "hover:bg-cream/60 md:border-y md:border-stone/15"
                  }`}
                >
                  <div className="md:min-h-[7.5rem]">
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
                      <h2 className="font-display text-2xl md:text-3xl">
                        {plan.nombre}
                      </h2>
                      {plan.etiqueta && destacado && (
                        <span className="text-[10px] uppercase tracking-widest text-cream/70">
                          {plan.etiqueta}
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-2 hidden max-w-[16rem] text-sm leading-relaxed md:block ${
                        destacado ? "text-cream/75" : "text-stone/60"
                      }`}
                    >
                      {plan.corto}
                    </p>
                  </div>

                  <div className="shrink-0 text-right md:mt-8 md:text-left">
                    <p
                      className={`text-xs line-through decoration-1 ${
                        destacado ? "text-cream/50" : "text-stone/40"
                      }`}
                    >
                      <span className="sr-only">Precio habitual </span>
                      {plan.setup.habitual}
                    </p>
                    <p className="font-display text-3xl leading-none md:mt-1 md:text-4xl">
                      {plan.setup.actual}
                      <span
                        className={`ml-1 align-middle font-sans text-[11px] uppercase tracking-widest ${
                          destacado ? "text-cream/60" : "text-stone/45"
                        }`}
                      >
                        setup
                      </span>
                    </p>
                    <p
                      className={`mt-2 text-sm ${
                        destacado ? "text-cream/85" : "text-stone/70"
                      }`}
                    >
                      + {plan.cuota.actual}/mes
                    </p>
                  </div>

                  <span
                    className={`hidden text-xs uppercase tracking-widest md:mt-8 md:block ${
                      destacado ? "text-cream/80" : "text-burgundy"
                    }`}
                  >
                    Ver el plan{" "}
                    <span className="inline-block transition-transform group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs uppercase tracking-widest text-stone/45">
            Setup: 50% al comenzar · 50% al finalizar la implementación
          </p>
        </Reveal>
      </div>
    </section>
  );
}
