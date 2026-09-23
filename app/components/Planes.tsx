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
    gancho: "Todo lo de Base, y clientas que no se te escapan.",
    incluye: [
      "Todo lo del plan Base",
      "Reseñas automáticas",
      "Seguimiento y recuperación de clientas",
    ],
  },
  {
    nombre: "Escala",
    gancho: "Todo lo de Crecimiento, y nuevas clientas entrando cada mes.",
    incluye: [
      "Todo lo del plan Crecimiento",
      "Contenido y redes",
      "Publicidad en Google y Meta",
    ],
  },
];

const WHATSAPP_PLANES =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero saber más sobre los planes de AUGE y la promoción de este mes.");

export default function Planes() {
  return (
    <>
      <section className="bg-marfil px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Planes
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-tight text-stone sm:text-5xl">
              Un sistema que crece
              <br />
              <span className="italic text-burgundy">con tu negocio.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl leading-relaxed text-stone/70">
              Tres formas de trabajar juntas, según lo que tu negocio
              necesite ahora. Sin sorpresas y sin permanencia forzada.
              Empezamos siempre por un diagnóstico para saber qué encaja
              contigo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-burgundy px-6 py-14 text-center md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-cream/60">
            Este mes
          </p>
          <p className="mx-auto mt-3 max-w-lg font-display text-2xl italic text-cream sm:text-3xl">
            Tenemos una promoción especial de lanzamiento.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            Cuéntanoslo en tu diagnóstico o escríbenos por WhatsApp y te
            contamos cómo aplicarla a tu plan.
          </p>
        </Reveal>
      </section>

      <section className="bg-marfil px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          {PLANES.map((plan, i) => (
            <Reveal key={plan.nombre} delay={i * 80}>
              <div className="grid gap-2 border-t border-stone/15 py-12 sm:grid-cols-[auto,1fr] sm:gap-10">
                <span className="font-display text-sm italic text-burgundy sm:pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-3xl text-stone sm:text-4xl">
                    {plan.nombre}
                  </h2>
                  <p className="mt-2 text-lg italic text-burgundy">
                    {plan.gancho}
                  </p>
                  <div className="mt-6 space-y-2">
                    {plan.incluye.map((item) => (
                      <p key={item} className="leading-relaxed text-stone/70">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-stone/15" />

          <Reveal delay={PLANES.length * 80}>
            <p className="mx-auto mt-12 max-w-md text-center text-sm uppercase tracking-widest text-stone/45">
              El precio se ajusta a tu negocio. Lo vemos en tu diagnóstico.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 text-center md:px-10 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl">
            ¿No sabes cuál encaja contigo?
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-stone/70">
            Empieza por el diagnóstico. En 4 minutos sabemos qué necesita
            tu negocio de verdad.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="/#diagnostico"
              className="inline-block rounded-full border border-burgundy bg-burgundy px-10 py-4 text-sm uppercase tracking-widest text-cream transition-colors duration-300 hover:bg-transparent hover:text-burgundy"
            >
              Hacer mi diagnóstico
            </a>
            <a
              href={WHATSAPP_PLANES}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-stone/45 hover:text-burgundy"
            >
              O pregúntanos por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
