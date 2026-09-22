import CountUp from "./CountUp";
import Reveal from "./Reveal";

const CIFRAS = [
  {
    label: "Puesta en marcha",
    value: 30,
    suffix: " días",
    texto: "para tener tu sistema funcionando",
  },
  {
    label: "Tu dedicación",
    value: 3,
    suffix: " h",
    texto: "como máximo, de tu tiempo en el arranque",
  },
  {
    label: "Disponibilidad",
    value: 24,
    suffix: " h",
    texto: "tu WhatsApp responde a cualquier hora",
  },
  {
    label: "Comisiones",
    value: 0,
    suffix: " €",
    texto: "por cada cita que reserves",
  },
];

export default function Cifras() {
  return (
    <section className="bg-burgundy px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-widest text-cream/50">
            Nuestros compromisos contigo
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-4">
          {CIFRAS.map((c, i) => (
            <Reveal key={c.label} delay={i * 100} className="text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-cream/45">
                {c.label}
              </p>
              <p className="mt-3 font-display text-4xl font-black text-cream md:text-5xl">
                <CountUp to={c.value} suffix={c.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug text-cream/65">
                {c.texto}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-xl text-center text-xs uppercase tracking-widest text-cream/45">
          No son cifras de resultados. Son compromisos, y los firmamos por
          escrito.
        </p>
      </div>
    </section>
  );
}
