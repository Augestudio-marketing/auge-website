import Reveal from "./Reveal";

export default function Presentacion() {
  return (
    <section id="estudio" className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-burgundy">A / 03 — auge.studio</p>
        </Reveal>

        <div className="mt-6 grid gap-12 md:grid-cols-[1fr,1fr] md:gap-16">
          <Reveal delay={80}>
            <h2 className="font-display text-3xl font-semibold leading-tight text-stone sm:text-4xl md:text-5xl">
              Una marca. Un sistema.
              <br />
              Todo conectado.
            </h2>
          </Reveal>

          <div>
            <Reveal delay={160}>
              <p className="leading-relaxed text-stone/70">
                AUGE nace para negocios que ya han construido algo valioso y
                necesitan que todo lo que hay alrededor esté a la altura.
                Diseñamos tu marca, construimos tu presencia digital y
                conectamos los sistemas que hacen que tu negocio siga
                funcionando cuando tú estás atendiendo a una clienta.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="relative mt-10 pl-8">
                <svg
                  className="absolute left-0 top-1 h-full w-4"
                  viewBox="0 0 10 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <line x1="1" y1="0" x2="1" y2="100" stroke="#5C1B21" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
                <p className="font-display text-xl font-semibold leading-snug text-burgundy sm:text-2xl">
                  Tú sigues haciendo lo que mejor sabes hacer. Nosotras
                  hacemos que el resto funcione.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
