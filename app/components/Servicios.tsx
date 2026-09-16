const PLANES = [
  {
    nombre: "Cimiento",
    destacado: false,
    arranque: "450€",
    mensual: "150€ / mes",
    descripcion: "Las bases para que tu salón exista de verdad en digital.",
    incluye: [
      "Web de reservas optimizada",
      "Configuración de Google Perfil de Negocio",
      "Plantillas de contenido mensuales",
      "Reporte mensual de resultados",
    ],
  },
  {
    nombre: "Auge",
    destacado: true,
    arranque: "750€",
    mensual: "290€ / mes",
    descripcion: "El plan que hace crecer tu agenda de forma constante.",
    incluye: [
      "Todo lo incluido en Cimiento",
      "Agenda automatizada con recordatorios",
      "WhatsApp con IA, atención 24/7",
      "Gestión de Instagram y TikTok",
      "Campaña de captación mensual",
    ],
  },
  {
    nombre: "Cénit",
    destacado: false,
    arranque: "1.200€",
    mensual: "490€ / mes",
    descripcion: "Para salones que quieren liderar su zona.",
    incluye: [
      "Todo lo incluido en Auge",
      "Estrategia de fidelización y referidos",
      "Producción de contenido en salón",
      "Publicidad gestionada en Meta Ads",
      "Sesión estratégica mensual 1:1",
    ],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-widest2 text-burgundy">
          Servicios
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Tres formas de empezar.
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {PLANES.map((plan) => (
            <div
              key={plan.nombre}
              className={`flex flex-col overflow-hidden rounded-3xl ${
                plan.destacado
                  ? "bg-burgundy text-cream md:-my-6 md:shadow-2xl md:shadow-burgundy/30"
                  : "bg-white/60 text-stone ring-1 ring-stone/10"
              }`}
            >
              <div
                className={`px-8 pb-8 pt-10 ${
                  plan.destacado
                    ? "bg-gradient-to-br from-burgundy via-burgundy to-[#3a1012]"
                    : ""
                }`}
              >
                {plan.destacado ? (
                  <span className="mb-6 inline-block w-fit rounded-full bg-cream/15 px-4 py-1 text-xs uppercase tracking-widest text-cream">
                    Más popular
                  </span>
                ) : (
                  <span className="mb-6 block h-[26px]" />
                )}

                <h3 className="font-serif text-3xl">{plan.nombre}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    plan.destacado ? "text-cream/75" : "text-stone/60"
                  }`}
                >
                  {plan.descripcion}
                </p>

                <div className="mt-8">
                  <p className="font-serif text-4xl">{plan.arranque}</p>
                  <p
                    className={`mt-1 text-xs uppercase tracking-widest ${
                      plan.destacado ? "text-cream/60" : "text-stone/50"
                    }`}
                  >
                    Arranque · luego {plan.mensual}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-8 pb-10">
                <ul
                  className={`flex-1 space-y-4 border-t pt-8 ${
                    plan.destacado ? "border-cream/15" : "border-stone/10"
                  }`}
                >
                  {plan.incluye.map((item) => (
                    <li
                      key={item}
                      className={`text-sm leading-relaxed ${
                        plan.destacado ? "text-cream/85" : "text-stone/75"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`mt-10 block w-full rounded-full py-3 text-center text-sm uppercase tracking-widest transition-opacity hover:opacity-80 ${
                    plan.destacado
                      ? "bg-cream text-stone"
                      : "bg-stone text-cream"
                  }`}
                >
                  Elegir {plan.nombre}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
