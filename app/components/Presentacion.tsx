import Reveal from "./Reveal";

const PUNTOS = [
  "Diseñamos tu identidad.",
  "Creamos tu web.",
  "Organizamos tus reservas.",
  "Hacemos que WhatsApp responda.",
  "Automatizamos recordatorios y reseñas.",
  "Ayudamos a recuperar clientas.",
  "Y cuidamos tus redes.",
];

export default function Presentacion() {
  return (
    <section className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-burgundy">
            Conoce AUGE
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Todo lo que tu negocio necesita para crecer.
            <br />
            <span className="italic text-burgundy">
              Sin que tú tengas que estar pendiente de todo.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-10 leading-relaxed text-stone/70">
            En AUGE unimos marca, presencia digital y sistemas para
            que tu negocio no dependa de ti para cada pequeño detalle.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-8 space-y-2 text-lg leading-relaxed text-stone/80">
            {PUNTOS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-14 font-display text-2xl italic leading-snug text-stone sm:text-3xl">
            Tú sigues haciendo lo que mejor sabes hacer.
            <br />
            Nosotras hacemos que el resto funcione.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
