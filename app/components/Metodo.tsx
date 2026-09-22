import Reveal from "./Reveal";

const FASES = [
  {
    letra: "A",
    nombre: "Análisis.",
    texto: "Medimos dónde se pierden tus clientas hoy.",
  },
  {
    letra: "U",
    nombre: "Universo de marca.",
    texto: "Tu web y tu imagen, a la altura de tu trabajo.",
  },
  {
    letra: "G",
    nombre: "Gestión automática.",
    texto: "Reservas, WhatsApp, reseñas y fidelización funcionando solas.",
  },
  {
    letra: "E",
    nombre: "Expansión.",
    texto: "Cada mes, datos, contenido y mejoras.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-hueso px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-black tracking-tight text-stone sm:text-4xl">
            Cuatro fases. Sabes siempre qué hacemos y por qué.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {FASES.map((fase, i) => (
            <Reveal key={fase.letra} delay={i * 100}>
              <div className="rounded-3xl bg-cream px-8 py-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone/10">
                <span className="font-display text-4xl font-black text-burgundy">
                  {fase.letra}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-stone">
                  {fase.nombre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/65">
                  {fase.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
