import Reveal from "../components/Reveal";
import { PLANES } from "./datos";

export default function Cuota() {
  return (
    <section className="grain bg-stone px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-cream/50">
            La cuota mensual
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            AUGE no termina cuando
            <br />
            <span className="italic text-cream/70">el sistema está montado.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-cream/80">
            El setup construye el sistema. La cuota mensual hace que siga
            funcionando, se mantenga actualizado y evolucione contigo.
          </p>
          <p className="mt-4 leading-relaxed text-cream/55">
            Según el plan, la cuota mensual incluye mantenimiento, soporte,
            gestión, análisis, optimización y los servicios recurrentes
            contratados.
          </p>
        </Reveal>

        <div className="mt-16 border-b border-cream/15">
          {PLANES.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}>
              <div className="grid gap-2 border-t border-cream/15 py-7 md:grid-cols-12 md:items-baseline md:gap-8">
                <h3 className="font-display text-2xl md:col-span-3">{plan.nombre}</h3>
                <p className="leading-relaxed text-cream/70 md:col-span-7">
                  {plan.cuotaCubre}
                </p>
                <p className="font-display text-xl text-cream/90 md:col-span-2 md:text-right">
                  {plan.cuota.actual}/mes
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
