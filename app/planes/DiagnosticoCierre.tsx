import Reveal from "../components/Reveal";
import { WHATSAPP_HABLAR } from "./datos";

export default function DiagnosticoCierre() {
  return (
    <section className="grain bg-burgundy-deep px-6 py-24 text-center text-cream md:px-10 md:py-32">
      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <p className="font-display text-xl italic leading-snug text-cream/60 sm:text-2xl">
            No te falta trabajo.
            <br />
            Te sobran cosas que dependen de ti.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto my-12 h-px w-16 bg-cream/25" />
          <p className="text-xs uppercase tracking-widest2 text-cream/55">
            Diagnóstico AUGE
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            ¿No sabes qué plan
            <br />
            <span className="italic">necesitas?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/85">
            No tienes por qué decidirlo sin ayuda.
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/65">
            Haz nuestro Diagnóstico AUGE y descubre qué parte de tu negocio
            depende todavía de ti, dónde estás perdiendo tiempo u oportunidades
            y qué tendría sentido automatizar primero.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-10 text-xs uppercase tracking-widest text-cream/50">
            12 preguntas · resultado inmediato
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

        <Reveal delay={400}>
          <p className="mt-20 font-display text-lg italic text-cream/45">
            Tu negocio merece estar a la altura de lo que haces.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
