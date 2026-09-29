import Reveal from "./Reveal";

export default function Problema() {
  return (
    <section className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-burgundy">
            Si tienes un negocio de servicios, probablemente te suena
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Haces de todo.
            <br />Y cada vez tienes menos tiempo.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 space-y-2 text-lg leading-relaxed text-stone/70">
            <p>Atiendes a tus clientas.</p>
            <p>Respondes WhatsApps entre cita y cita.</p>
            <p>Confirmas reservas.</p>
            <p>Intentas acordarte de pedir reseñas.</p>
            <p>Publicas cuando encuentras un hueco.</p>
            <p>
              Y cuando alguien deja de venir, muchas veces ni siquiera
              tienes tiempo de volver a escribirle.
            </p>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-14 font-display text-2xl italic leading-snug text-burgundy sm:text-3xl">
            Tu negocio crece.
            <br />Pero también crece todo lo que depende de ti.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
