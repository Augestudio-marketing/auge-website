import CountUp from "./CountUp";
import Reveal from "./Reveal";

const CIFRAS = [
  { value: 30, suffix: " días", texto: "para tener tu sistema en marcha" },
  { value: 3, prefix: "< ", suffix: " h", texto: "de tu tiempo en todo el arranque" },
  { value: 24, suffix: " h", texto: "tu WhatsApp responde a cualquier hora" },
  { value: 0, suffix: " €", texto: "de comisión por cita" },
];

export default function Cifras() {
  return (
    <section className="bg-burgundy px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {CIFRAS.map((c, i) => (
            <Reveal key={c.texto} delay={i * 100} className="text-center">
              <p className="font-display text-4xl font-black text-cream md:text-5xl">
                <CountUp to={c.value} prefix={c.prefix} suffix={c.suffix} />
              </p>
              <p className="mt-3 font-display text-sm font-light leading-snug text-cream/65">
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
