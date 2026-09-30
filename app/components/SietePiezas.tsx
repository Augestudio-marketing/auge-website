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
      "Después de una visita, pedimos a tus clientes que compartan su experiencia. En el momento adecuado. Sin que tengas que acordarte.",
  },
  {
    nombre: "Seguimiento",
    gancho: "Quien ya confió en ti no debería perderse.",
    texto:
      "Creamos seguimientos según el ritmo de cada servicio para retomar el contacto cuando tenga sentido.",
  },
  {
    nombre: "Social media y captación",
    gancho: "Que tu marca siga presente incluso cuando tú estás trabajando.",
    texto:
      "Contenido y campañas pensados para construir marca, atraer nuevos clientes y acompañar el crecimiento.",
  },
];

export default function SietePiezas() {
  return (
    <section className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Conoce AUGE
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-stone sm:text-5xl">
              Tu negocio.
              <br />
              <span className="italic text-burgundy">
                Bien hecho por dentro y por fuera.
              </span>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-stone/70">
              En AUGE unimos marca, presencia digital y sistemas para que tu
              negocio no dependa de ti para cada pequeño detalle.
            </p>

            <div className="mt-10 border-t border-stone/15 pt-8">
              <p className="font-display text-2xl leading-snug text-stone">
                Tú sigues haciendo lo que mejor sabes hacer.
                <br />
                <span className="italic text-burgundy">
                  Del resto nos encargamos en AUGE.
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-widest text-burgundy">
            Lo que hacemos
          </p>
          <ol className="mt-6 border-b border-stone/15">
            {SERVICIOS.map((s, i) => (
              <li key={s.nombre} className="border-t border-stone/15 py-8">
                <Reveal>
                  <div className="grid grid-cols-[2.5rem,1fr] gap-x-4 sm:grid-cols-[3.5rem,1fr]">
                    <span className="font-display text-lg italic text-burgundy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-widest text-stone">
                        {s.nombre}
                      </h3>
                      <p className="mt-3 font-display text-xl italic leading-snug text-burgundy sm:text-2xl">
                        {s.gancho}
                      </p>
                      <p className="mt-3 max-w-xl leading-relaxed text-stone/70">
                        {s.texto}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
