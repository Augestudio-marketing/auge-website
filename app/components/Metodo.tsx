import Reveal from "./Reveal";

const FASES = [
  {
    letra: "A",
    nombre: "Análisis",
    texto: "Primero entendemos tu negocio. Dónde pierdes tiempo. Dónde se escapan oportunidades. Qué necesita mejorar.",
  },
  {
    letra: "U",
    nombre: "Universo de marca",
    texto: "Construimos una identidad que se parezca a ti. Marca, web y comunicación bajo una misma dirección.",
  },
  {
    letra: "G",
    nombre: "Gestión automática",
    texto: "Hacemos que lo repetitivo deje de ocupar espacio en tu cabeza. Reservas. WhatsApp. Recordatorios. Reseñas. Seguimiento.",
  },
  {
    letra: "E",
    nombre: "Expansión",
    texto: "No desaparecemos después de entregar. Observamos. Medimos. Mejoramos. Porque tu negocio cambia. Y el sistema también.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-hueso px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest2 text-burgundy">
            El método
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Cuatro fases.
            <br />
            <span className="italic text-burgundy">Un mismo sistema.</span>
          </h2>
        </Reveal>

        <ol className="mt-16 grid border-b border-stone/20 md:mt-20 md:grid-cols-4 md:border-b-0">
          {FASES.map((fase, i) => (
            <li
              key={fase.letra}
              className={`border-t border-stone/20 py-8 md:border-b md:px-8 md:py-10 ${
                i > 0 ? "md:border-l" : ""
              }`}
            >
              <Reveal delay={i * 100}>
                <div className="grid grid-cols-[4rem,1fr] gap-x-4 md:block">
                  <span className="font-display text-6xl italic leading-none text-burgundy md:text-7xl">
                    {fase.letra}
                  </span>
                  <div className="md:mt-8">
                    <h3 className="text-sm font-medium uppercase tracking-widest text-stone">
                      {fase.nombre}
                    </h3>
                    <p className="mt-3 leading-relaxed text-stone/70">
                      {fase.texto}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
