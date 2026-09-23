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
    <section id="metodo" className="bg-hueso px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Cuatro fases.
          </h2>
        </Reveal>

        <div className="mt-16">
          {FASES.map((fase, i) => (
            <Reveal key={fase.letra} delay={i * 100}>
              <div className="grid grid-cols-[auto,1fr] items-start gap-6 border-t border-stone/15 py-10 sm:gap-10">
                <span className="font-display text-6xl italic leading-none text-burgundy sm:text-8xl">
                  {fase.letra}
                </span>
                <div className="pt-2 sm:pt-4">
                  <h3 className="font-display text-2xl text-stone sm:text-3xl">
                    {fase.nombre}
                  </h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-stone/65">
                    {fase.texto}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-stone/15" />
        </div>
      </div>
    </section>
  );
}
