import Reveal from "./Reveal";

const SERVICIOS = [
  {
    nombre: "Branding",
    gancho: "Que tu negocio se vea como lo que es.",
    texto:
      "Creamos una identidad propia, cuidada y reconocible. No para parecer más grande. Para reflejar de verdad el nivel que ya tienes.",
  },
  {
    nombre: "Web",
    gancho: "Tu mejor escaparate, abierto siempre.",
    texto:
      "Una web diseñada alrededor de tu negocio, tus servicios y la experiencia que quieres ofrecer. No una plantilla. Tu marca, llevada a digital.",
  },
  {
    nombre: "Reservas",
    gancho: "Menos mensajes. Más reservas que se hacen solas.",
    texto:
      "Tu agenda disponible cuando tú estás trabajando, descansando o simplemente desconectando.",
  },
  {
    nombre: "WhatsApp",
    gancho: "Tu WhatsApp también puede descansar.",
    texto:
      "Respuestas, dudas habituales, confirmaciones y recordatorios. Con el tono de tu marca. Sin que tengas que estar pendiente.",
  },
  {
    nombre: "Reseñas",
    gancho: "El trabajo que haces merece que se cuente.",
    texto:
      "Después de una visita, pedimos a tus clientas que compartan su experiencia. En el momento adecuado. Sin que tengas que acordarte.",
  },
  {
    nombre: "Clientas",
    gancho: "Una clienta que ya confió en ti no debería perderse.",
    texto:
      "Creamos seguimientos según el ritmo de cada servicio para volver a conectar con ella cuando tenga sentido.",
  },
  {
    nombre: "Social media + Captación",
    gancho: "Que tu marca siga presente incluso cuando tú estás trabajando.",
    texto:
      "Contenido y campañas pensados para construir marca, atraer nuevas clientas y acompañar el crecimiento.",
  },
];

export default function SietePiezas() {
  return (
    <section className="bg-marfil px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Tu negocio.
            <br />
            <span className="italic text-burgundy">
              Bien hecho por dentro y por fuera.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.nombre} delay={i * 60}>
              <div className="grid gap-2 border-t border-stone/15 py-10 sm:grid-cols-[auto,1fr] sm:gap-10">
                <span className="font-display text-sm italic text-burgundy sm:pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-stone sm:text-3xl">
                    {s.nombre}
                  </h3>
                  <p className="mt-2 text-lg italic text-burgundy">
                    {s.gancho}
                  </p>
                  <p className="mt-3 max-w-xl leading-relaxed text-stone/65">
                    {s.texto}
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
