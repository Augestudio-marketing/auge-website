import Reveal from "./Reveal";

export default function Miriam() {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Quién hay detrás
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-stone sm:text-5xl">
              Detrás de AUGE hay una persona que también ha estado
              <span className="italic text-burgundy"> en medio de todo.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <div className="space-y-6 border-t border-stone/15 pt-8 text-lg leading-relaxed text-stone/75">
              <p>
                Llevo años dirigiendo operaciones y marketing en un negocio
                digital con más de 6.000 alumnos. Y sé lo que ocurre cuando
                todo depende de ti.
              </p>
              <p>
                Los mensajes. Las ventas. Los procesos. El equipo. Los
                clientes. Las pequeñas cosas que parecen insignificantes hasta
                que se acumulan.
              </p>
              <p>
                También sé lo que cambia cuando empiezas a construir sistemas
                alrededor de un negocio. Más orden. Más tiempo. Más capacidad
                para crecer.
              </p>
              <p className="font-display text-2xl leading-snug text-stone">
                De ahí nace AUGE.{" "}
                <span className="italic text-burgundy">
                  Para llevar esa forma de trabajar a negocios que han
                  construido algo que merece crecer.
                </span>
              </p>
            </div>

            <p className="mt-10 border-t border-stone/15 pt-6 text-xs uppercase tracking-widest text-stone/45">
              Founder · AUGE
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
