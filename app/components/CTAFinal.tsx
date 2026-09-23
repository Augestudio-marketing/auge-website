import Reveal from "./Reveal";

export default function CTAFinal() {
  return (
    <section className="bg-burgundy px-6 py-32 text-center md:px-10 md:py-44">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-display text-xl italic text-cream/60">
            auge.studio
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-8 font-display text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
            Tu negocio ya tiene
            <br />
            lo más importante.
          </h2>
        </Reveal>

        <Reveal delay={350}>
          <p className="mt-8 font-display text-2xl italic text-cream/80 sm:text-3xl">
            Ahora hagamos que se note.
          </p>
        </Reveal>

        <Reveal delay={550}>
          <a
            href="#diagnostico"
            className="mt-12 inline-block rounded-full border border-cream bg-cream px-10 py-4 text-sm uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-transparent hover:text-cream"
          >
            Quiero conocer AUGE
          </a>
          <p className="mt-5 text-xs uppercase tracking-widest text-cream/45">
            Diagnóstico gratuito · Sin compromiso
          </p>
        </Reveal>
      </div>
    </section>
  );
}
