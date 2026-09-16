const PUNTOS = [
  "El WhatsApp que llegó a las once de la noche y contestaste al día siguiente, cuando ya había reservado en otro sitio.",
  "La cita que nadie confirmó y se quedó en un hueco vacío.",
  "La clienta encantada que nunca dejó su reseña porque nadie se la pidió.",
  "La que venía cada mes, dejó de venir y nadie la echó de menos a tiempo.",
  "Un Instagram que no refleja lo bien que trabajas.",
];

export default function Perdidas() {
  return (
    <section className="bg-marfil px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          No es falta de talento. Es falta de tiempo y de sistemas.
        </h2>

        <p className="mt-8 text-lg text-stone/70">
          Cada semana, tu salón pierde dinero en cosas que nadie ve:
        </p>

        <ul className="mx-auto mt-10 max-w-xl space-y-6 text-left">
          {PUNTOS.map((punto) => (
            <li
              key={punto}
              className="border-b border-stone/10 pb-6 leading-relaxed text-stone/75 last:border-0"
            >
              {punto}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-14 max-w-2xl font-serif text-2xl leading-snug text-stone sm:text-3xl">
          No necesitas aprender otra herramienta. Necesitas dejar de ser tú
          la herramienta.
        </p>
      </div>
    </section>
  );
}
