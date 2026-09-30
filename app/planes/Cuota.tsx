import Reveal from "../components/Reveal";

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
      </div>
    </section>
  );
}
