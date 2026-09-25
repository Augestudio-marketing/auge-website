import Reveal from "./Reveal";

const FASES = [
  {
    letra: "A",
    nombre: "Analizamos",
    texto: "Entendemos dónde está tu negocio y qué está frenándolo.",
  },
  {
    letra: "U",
    nombre: "Unificamos",
    texto: "Construimos una marca y una experiencia digital coherentes.",
  },
  {
    letra: "G",
    nombre: "Gestionamos",
    texto: "Conectamos herramientas, reservas, comunicación y automatizaciones.",
  },
  {
    letra: "E",
    nombre: "Evolucionamos",
    texto: "Medimos, mejoramos y seguimos construyendo.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-burgundy px-6 py-20 text-marfil md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-marfil/60">A / 07 — Cómo trabajamos</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            No instalamos herramientas.
            <br />
            Construimos sistemas.
          </h2>
        </Reveal>

        <div className="mt-16">
          {FASES.map((fase, i) => (
            <Reveal key={fase.letra} delay={i * 100}>
              <div className="grid grid-cols-[auto,1fr] items-start gap-6 border-t border-marfil/15 py-10 sm:gap-10">
                <span className="font-display text-6xl font-semibold leading-none text-marfil/25 sm:text-8xl">
                  {fase.letra}
                </span>
                <div className="pt-2 sm:pt-4">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
                    {fase.nombre}
                  </h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-marfil/70">
                    {fase.texto}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-marfil/15" />
        </div>
      </div>
    </section>
  );
}
