import Reveal from "./Reveal";

export default function Garantia() {
  return (
    <section className="bg-marfil px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl">
            Nos tomamos en serio
            <br />
            <span className="italic text-burgundy">lo que construimos contigo.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-8 leading-relaxed text-stone/70">
            Si en 30 días tu sistema no está funcionando, seguimos
            trabajando gratis hasta que lo esté y te regalamos el primer
            mes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
