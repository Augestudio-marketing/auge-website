const FASES = [
  {
    letra: "A",
    nombre: "Análisis",
    cuando: "Semana 1",
    hacemos:
      "Diagnóstico de cómo recibes reservas, dónde se pierden clientas y cómo te ve Google. Medimos tu punto de partida.",
    consigues: "Un plan claro para tu salón.",
  },
  {
    letra: "U",
    nombre: "Universo de marca",
    cuando: "Semanas 1–3",
    hacemos:
      "Web a medida con dirección creativa editorial, Perfil de Google optimizado, estilo y tono de tu contenido.",
    consigues: "Una presencia a la altura de tu trabajo.",
  },
  {
    letra: "G",
    nombre: "Gestión automática",
    cuando: "Semanas 3–4",
    hacemos:
      "Reservas, WhatsApp, recordatorios, reseñas y fidelización. Migramos tus clientas y te formamos.",
    consigues: "Un sistema que funciona sin ti.",
  },
  {
    letra: "E",
    nombre: "Expansión",
    cuando: "Desde el mes 2",
    hacemos:
      "Contenido, revisión de datos y mejoras cada mes. En Cénit, además, Ads.",
    consigues: "Agenda más llena, mes a mes.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-hueso px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Un método con cuatro fases. Sabes en todo momento qué hacemos y
          por qué.
        </h2>

        <div className="mt-16 space-y-6">
          {FASES.map((fase) => (
            <div
              key={fase.letra}
              className="grid gap-6 rounded-3xl bg-cream px-8 py-8 md:grid-cols-[auto_1.3fr_1fr] md:items-start md:gap-10 md:px-10"
            >
              <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1">
                <span className="font-serif text-5xl text-burgundy">
                  {fase.letra}
                </span>
                <span className="font-serif text-xl text-stone">
                  {fase.nombre}
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone/45">
                  {fase.cuando}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone/70">
                  {fase.hacemos}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone/45">
                  Qué consigues
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {fase.consigues}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center leading-relaxed text-stone/70">
          Cada mes comparamos tus resultados con tu punto de partida y te
          proponemos 2 o 3 ajustes concretos.
        </p>
      </div>
    </section>
  );
}
