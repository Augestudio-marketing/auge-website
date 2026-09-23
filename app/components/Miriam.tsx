import Reveal from "./Reveal";

export default function Miriam() {
  return (
    <section className="bg-cream px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Detrás de AUGE hay una persona que también ha estado
            <span className="italic text-burgundy"> en medio de todo.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 leading-relaxed text-stone/75">
            <p>
              Soy Miriam. Llevo años dirigiendo operaciones y marketing en
              un negocio digital con más de 6.000 alumnos. Y sé lo que
              ocurre cuando todo depende de ti.
            </p>
            <p>
              Los mensajes. Las ventas. Los procesos. El equipo. Los
              clientes. Las pequeñas cosas que parecen insignificantes
              hasta que se acumulan.
            </p>
            <p>
              También sé lo que cambia cuando empiezas a construir
              sistemas alrededor de un negocio. Más orden. Más tiempo. Más
              capacidad para crecer.
            </p>
            <p>
              De ahí nace auge.studio. Para llevar esa forma de trabajar a
              negocios que han construido algo que merece crecer.
            </p>
          </div>

          <p className="font-signature mt-10 text-4xl text-burgundy">
            Miriam
          </p>
          <p className="text-xs uppercase tracking-widest text-stone/45">
            Founder · auge.studio
          </p>
        </Reveal>
      </div>
    </section>
  );
}
