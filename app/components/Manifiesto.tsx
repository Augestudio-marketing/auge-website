import Reveal from "./Reveal";

const LINEAS_MENOS = [
  "Menos cosas que recordar.",
  "Menos mensajes pendientes.",
  "Menos herramientas que aprender.",
  "Menos tiempo apagando fuegos.",
];

const LINEAS_MAS = [
  "Más tiempo para tus clientes.",
  "Más claridad.",
  "Más marca.",
  "Más tranquilidad.",
];

export default function Manifiesto() {
  return (
    <section className="grain bg-stone px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-cream/50">
            Cómo trabajamos
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            No creemos en hacer más.
            <br />
            <span className="italic text-cream/70">Creemos en hacer mejor.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-cream/45">Menos</p>
            <ul className="mt-4 border-b border-cream/15">
              {LINEAS_MENOS.map((linea) => (
                <li
                  key={linea}
                  className="border-t border-cream/15 py-5 text-lg text-cream/60"
                >
                  {linea}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xs uppercase tracking-widest text-cream/45">Más</p>
            <ul className="mt-4 border-b border-cream/15">
              {LINEAS_MAS.map((linea) => (
                <li
                  key={linea}
                  className="border-t border-cream/15 py-4 font-display text-xl italic text-cream sm:text-2xl"
                >
                  {linea}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <p className="mt-16 text-center font-display text-3xl italic text-cream sm:text-4xl">
            Más AUGE.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
