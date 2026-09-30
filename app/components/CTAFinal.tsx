import Reveal from "./Reveal";

const WHATSAPP_HABLAR =
  "https://wa.me/34613803022?text=" + encodeURIComponent("Hola, quiero conocer AUGE.");

export default function CTAFinal() {
  return (
    <section className="grain bg-burgundy-deep px-6 py-24 text-center text-cream md:px-10 md:py-32">
      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tu negocio ya tiene
            <br />
            lo más importante.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 font-display text-2xl italic text-cream/70 sm:text-3xl">
            Ahora hagamos que se note.
          </p>
          <div className="mx-auto my-12 h-px w-16 bg-cream/25" />
          <p className="mx-auto max-w-md leading-relaxed text-cream/70">
            Empieza por el Diagnóstico AUGE: descubre qué parte de tu negocio
            depende todavía de ti y qué tendría sentido automatizar primero.
          </p>
        </Reveal>

        <Reveal delay={350}>
          <p className="mt-10 text-xs uppercase tracking-widest text-cream/50">
            12 preguntas · 4 minutos · resultado inmediato
          </p>
          <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico"
              className="inline-block rounded-full border border-cream bg-cream px-10 py-4 text-sm uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-transparent hover:text-cream"
            >
              Hacer mi diagnóstico →
            </a>
            <a
              href={WHATSAPP_HABLAR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-4 text-xs uppercase tracking-widest text-cream/75 underline-offset-8 transition-colors hover:text-cream hover:underline"
            >
              Hablar con AUGE →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
