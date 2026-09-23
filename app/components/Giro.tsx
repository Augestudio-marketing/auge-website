import Reveal from "./Reveal";

export default function Giro() {
  return (
    <section className="bg-burgundy-deep px-6 py-24 text-center md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-display text-2xl text-cream/70 sm:text-3xl">
            No te falta trabajo.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-4 font-display text-4xl italic leading-tight text-cream sm:text-5xl md:text-6xl">
            Te sobran cosas que dependen de ti.
          </p>
        </Reveal>

        <Reveal delay={700}>
          <p className="mt-10 text-sm uppercase tracking-widest text-cream/50">
            Y eso se puede cambiar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
