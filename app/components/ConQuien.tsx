import Reveal from "./Reveal";

const SECTORES = [
  "Clínicas",
  "Estética",
  "Peluquerías",
  "Nails",
  "Fisio",
  "Psicología",
  "Wellness",
  "Beauty",
];

const WHATSAPP_RECIEN_ABIERTO =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, acabo de abrir mi negocio y quiero saber si AUGE encaja conmigo.");

export default function ConQuien() {
  return (
    <section id="para-quien" className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-burgundy">A / 08 — Para quién</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight text-stone sm:text-4xl md:text-5xl">
            Para negocios que ya tienen algo que cuidar.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-y border-stone/15 py-10">
            {SECTORES.map((s, i) => (
              <span
                key={s}
                className={`font-display font-semibold uppercase tracking-tight text-stone/85 ${
                  i % 3 === 0
                    ? "text-3xl sm:text-4xl"
                    : i % 3 === 1
                      ? "text-2xl text-burgundy sm:text-3xl"
                      : "text-xl text-stone/55 sm:text-2xl"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-10 max-w-xl leading-relaxed text-stone/70">
            AUGE está pensado para negocios que ya tienen clientas, una
            reputación y algo que merece seguir creciendo.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 text-sm text-stone/50">
            ¿Acabas de abrir?{" "}
            <a
              href={WHATSAPP_RECIEN_ABIERTO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy underline underline-offset-2 hover:no-underline"
            >
              Escríbenos y te decimos si encajamos →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
