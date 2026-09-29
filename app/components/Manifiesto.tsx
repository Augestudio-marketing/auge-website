import Reveal from "./Reveal";

const LINEAS_MENOS = [
  "Menos cosas que recordar.",
  "Menos mensajes pendientes.",
  "Menos herramientas que aprender.",
  "Menos tiempo apagando fuegos.",
];

const LINEAS_MAS = [
  "Más tiempo para tus clientas.",
  "Más claridad.",
  "Más marca.",
  "Más tranquilidad.",
  "Más AUGE.",
];

export default function Manifiesto() {
  return (
    <section className="bg-burgundy px-6 py-24 text-center md:px-10 md:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
            No creemos en hacer más.
            <br />
            <span className="italic">Creemos en hacer mejor.</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-3">
          {LINEAS_MENOS.map((linea, i) => (
            <Reveal key={linea} delay={200 + i * 120}>
              <p className="text-lg text-cream/60">{linea}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          {LINEAS_MAS.map((linea, i) => (
            <Reveal key={linea} delay={200 + LINEAS_MENOS.length * 120 + i * 120}>
              <p className="font-display text-xl italic text-cream sm:text-2xl">
                {linea}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
