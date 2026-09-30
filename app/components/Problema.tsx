import Reveal from "./Reveal";

const TAREAS = [
  "Atiendes a tus clientes.",
  "Respondes WhatsApps entre cita y cita.",
  "Confirmas reservas.",
  "Intentas acordarte de pedir reseñas.",
  "Publicas cuando encuentras un hueco.",
  "Y cuando alguien deja de venir, muchas veces ni siquiera tienes tiempo de volver a escribirle.",
];

export default function Problema() {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Si tienes un negocio de servicios, probablemente te suena
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-stone sm:text-5xl">
              Haces de todo.
              <br />
              <span className="italic text-burgundy">
                Y cada vez tienes menos tiempo.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ol className="border-b border-stone/15">
            {TAREAS.map((tarea, i) => (
              <li key={tarea} className="border-t border-stone/15 py-6">
                <Reveal>
                  <div className="grid grid-cols-[2.5rem,1fr] gap-x-4 sm:grid-cols-[3.5rem,1fr]">
                    <span className="font-display text-lg italic text-burgundy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-xl text-lg leading-relaxed text-stone/75">
                      {tarea}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal>
            <p className="mt-12 text-xs uppercase tracking-widest text-burgundy">
              El resultado
            </p>
            <p className="mt-4 max-w-xl text-balance font-display text-2xl leading-snug text-stone sm:text-3xl">
              Tu negocio crece.
              <br />
              <span className="italic text-burgundy">
                Pero también crece todo lo que depende de ti.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
