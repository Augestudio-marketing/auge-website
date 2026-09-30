import Etiqueta from "./Etiqueta";

const NEGOCIOS = [
  "Clínicas",
  "Estética",
  "Peluquerías",
  "Nails",
  "Fisioterapia",
  "Psicología",
  "Bienestar",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-marfil px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24"
    >
      <div className="grain absolute inset-0 opacity-60" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p
          className="animate-fade-in-up text-xs uppercase tracking-widest2 text-burgundy"
          style={{ animationDelay: "100ms" }}
        >
          Marca · Sistemas · Captación
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-balance font-display text-[2.25rem] leading-[1.08] text-stone sm:text-6xl md:text-7xl">
          <span className="animate-fade-in-up block" style={{ animationDelay: "200ms" }}>
            Tu negocio merece estar
          </span>
          <span
            className="animate-fade-in-up block italic text-burgundy"
            style={{ animationDelay: "350ms" }}
          >
            a la altura de lo que haces.
          </span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone/75"
          style={{ animationDelay: "500ms" }}
        >
          Construimos tu marca, tu presencia digital y los sistemas que hacen
          que tu negocio funcione sin que tengas que estar pendiente de todo.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          style={{ animationDelay: "650ms" }}
        >
          <a
            href="/diagnostico"
            className="inline-block rounded-full border border-burgundy bg-burgundy px-10 py-4 text-sm uppercase tracking-widest text-cream transition-colors duration-300 hover:bg-transparent hover:text-burgundy"
          >
            Hacer mi diagnóstico →
          </a>
          <a
            href="/planes"
            className="inline-block px-4 py-4 text-xs uppercase tracking-widest text-burgundy underline-offset-8 hover:underline"
          >
            Ver los planes →
          </a>
        </div>
        <p
          className="animate-fade-in-up mt-3 text-xs uppercase tracking-widest text-stone/45"
          style={{ animationDelay: "750ms" }}
        >
          12 preguntas · resultado inmediato
        </p>

        <div
          className="animate-fade-in-up mt-16 md:mt-24"
          style={{ animationDelay: "900ms" }}
        >
          <Etiqueta>Para negocios que viven de su agenda</Etiqueta>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 border-y border-stone/15 py-6 md:gap-x-10">
            {NEGOCIOS.map((negocio) => (
              <li
                key={negocio}
                className="font-display text-xl italic text-stone/60 md:text-2xl"
              >
                {negocio}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
