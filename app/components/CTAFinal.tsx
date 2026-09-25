import Reveal from "./Reveal";

const WHATSAPP_CONOCER =
  "https://wa.me/34613803022?text=" + encodeURIComponent("Hola, quiero conocer AUGE.");

export default function CTAFinal() {
  return (
    <section className="bg-marfil px-6 py-24 text-center md:px-10 md:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold leading-tight text-stone sm:text-5xl md:text-6xl">
            Tu negocio ya tiene lo más importante.
            <br />
            Ahora hagamos que se note.
          </h2>
        </Reveal>

        <Reveal delay={250}>
          <a
            href={WHATSAPP_CONOCER}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-full border border-burgundy bg-burgundy px-10 py-4 text-sm uppercase tracking-widest text-marfil transition-colors duration-300 hover:bg-transparent hover:text-burgundy"
          >
            Conoce AUGE →
          </a>
        </Reveal>

        <Reveal delay={350}>
          <p className="mt-8 text-xs uppercase tracking-widest text-stone/45">
            Todo conectado. Tú, sin estar pendiente.
          </p>
          <p className="mt-2 text-xs uppercase tracking-widest text-stone/30">
            auge.studio / Aesthetic Marketing
          </p>
        </Reveal>
      </div>
    </section>
  );
}
