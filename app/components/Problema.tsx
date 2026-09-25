import Reveal from "./Reveal";

const PALABRAS = [
  "Instagram.",
  "WhatsApp.",
  "Reservas.",
  "Confirmaciones.",
  "Reseñas.",
  "Clientas que no vuelven.",
  "Mensajes pendientes.",
  "Web.",
  "Contenido.",
];

export default function Problema() {
  return (
    <section id="problema" className="bg-burgundy px-6 py-20 text-marfil md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-marfil/60">A / 02 — El problema</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Haces bien tu trabajo.
            <br />
            Pero acabas haciéndolo todo.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-x-3 gap-y-2 text-lg leading-relaxed text-marfil/80 sm:text-xl">
          {PALABRAS.map((p, i) => (
            <Reveal key={p} delay={180 + i * 80} className="inline-block">
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 max-w-md leading-relaxed text-marfil/70">
            Tu negocio ha crecido. Y con él, todo lo que depende de ti.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-10 font-display text-2xl font-semibold leading-snug sm:text-3xl">
            No te falta trabajo.
            <br />
            Te sobran cosas que dependen de ti.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
