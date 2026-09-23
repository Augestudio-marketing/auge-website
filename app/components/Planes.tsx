import Reveal from "./Reveal";

const PLANES = [
  {
    nombre: "Base",
    gancho: "Para dejar de perder clientas por lo básico.",
    incluye: [
      "Branding",
      "Web de marca a medida",
      "Reservas online",
      "WhatsApp que responde solo",
    ],
  },
  {
    nombre: "Crecimiento",
    gancho: "Clientas que no se te escapan.",
    incluye: [
      "Todo lo de Base",
      "Reseñas automáticas",
      "Seguimiento y recuperación de clientas",
    ],
  },
  {
    nombre: "Escala",
    gancho: "Nuevas clientas entrando cada mes.",
    incluye: [
      "Todo lo de Crecimiento",
      "Contenido y redes",
      "Publicidad en Google y Meta",
    ],
  },
];

const whatsappPlan = (plan: string) =>
  "https://wa.me/34613803022?text=" +
  encodeURIComponent(`Hola, me interesa el plan ${plan} de AUGE.`);

const WHATSAPP_OFERTA =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, ¿tenéis alguna oferta disponible este mes?");

export default function Planes() {
  return (
    <section className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-burgundy">
            Planes
          </p>
          <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-stone sm:text-5xl">
            Un sistema que crece
            <br />
            <span className="italic text-burgundy">con tu negocio.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone/70">
            Elige según lo que tu negocio necesite ahora.
          </p>
          <a
            href={WHATSAPP_OFERTA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-xs uppercase tracking-widest text-stone/45 hover:text-burgundy"
          >
            ¿Hay alguna oferta disponible este mes? Pregúntanos →
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANES.map((plan, i) => (
            <Reveal key={plan.nombre} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-stone/15 bg-cream px-8 py-10 text-left">
                <h2 className="font-display text-2xl text-stone">
                  {plan.nombre}
                </h2>
                <p className="mt-2 italic text-burgundy">{plan.gancho}</p>

                <div className="mt-6 flex-1 space-y-3">
                  {plan.incluye.map((item) => (
                    <p
                      key={item}
                      className="text-sm leading-relaxed text-stone/70"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <a
                  href={whatsappPlan(plan.nombre)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-full border border-burgundy py-3 text-center text-xs uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-burgundy hover:text-cream"
                >
                  Quiero este plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={PLANES.length * 100}>
          <p className="mt-10 text-xs uppercase tracking-widest text-stone/45">
            El precio se ajusta a tu negocio.{" "}
            <a href="/#diagnostico" className="underline hover:text-burgundy">
              Lo vemos en tu diagnóstico.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
