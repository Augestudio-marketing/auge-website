import Reveal from "./Reveal";

export default function Giro() {
  return (
    <section className="grain bg-burgundy-deep px-6 py-24 text-center md:px-10 md:py-32">
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <p className="font-display text-2xl italic text-cream/60 sm:text-3xl">
            No te falta trabajo.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
            Te sobran cosas
            <br />
            <span className="italic">que dependen de ti.</span>
          </p>
        </Reveal>

        <Reveal delay={550}>
          <div className="mx-auto my-10 h-px w-16 bg-cream/25" />
          <p className="text-xs uppercase tracking-widest2 text-cream/55">
            Y eso se puede cambiar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
