import Reveal from "./Reveal";

const PIEZAS = [
  { nombre: "Estrategia", x: 50, y: 12 },
  { nombre: "Design", x: 85, y: 32 },
  { nombre: "Web", x: 92, y: 68 },
  { nombre: "Social", x: 68, y: 92 },
  { nombre: "Ads", x: 32, y: 92 },
  { nombre: "Automatización", x: 8, y: 68 },
  { nombre: "Content", x: 15, y: 32 },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-arena px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-burgundy">A / 06 — AUGE + Partners</p>
        </Reveal>

        <div className="mt-6 grid gap-12 md:grid-cols-[1fr,1fr] md:items-center md:gap-16">
          <div>
            <Reveal delay={80}>
              <h2 className="font-display text-3xl font-semibold leading-tight text-stone sm:text-4xl md:text-5xl">
                No lo hacemos todo.
                <br />
                Hacemos que todo funcione.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-md leading-relaxed text-stone/70">
                AUGE reúne estrategia, diseño, tecnología y especialistas
                alrededor de cada negocio. Cuando un proyecto necesita una
                especialidad concreta, incorporamos a la persona adecuada y
                trabajamos bajo una misma dirección.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-4 max-w-md font-display text-lg font-semibold text-burgundy">
                El cliente tiene una experiencia unificada. AUGE mantiene la
                visión.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden>
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                {PIEZAS.map((p) => (
                  <line
                    key={p.nombre}
                    x1={50}
                    y1={50}
                    x2={p.x}
                    y2={p.y}
                    stroke="#5C1B21"
                    strokeOpacity="0.35"
                    strokeWidth="0.3"
                  />
                ))}
              </svg>
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-burgundy bg-arena text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-burgundy">
                  AUGE
                </span>
              </div>
              {PIEZAS.map((p) => (
                <span
                  key={p.nombre}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest text-stone/70"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  {p.nombre}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
