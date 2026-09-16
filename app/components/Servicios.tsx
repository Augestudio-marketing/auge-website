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
    <section
      id="servicios"
      className="border-t border-stone/10 bg-stone/[0.03] px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-widest2 text-burgundy">
          Servicios
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-stone sm:text-5xl">
          Tres formas de empezar.
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {PLANES.map((plan) => (
            <div
              key={plan.nombre}
              className={`flex flex-col border px-8 py-10 ${
                plan.destacado
                  ? "border-burgundy bg-cream"
                  : "border-stone/15 bg-cream"
              }`}
            >
              {plan.destacado && (
                <span className="mb-6 w-fit text-xs uppercase tracking-widest text-burgundy">
                  Más popular
                </span>
              )}

              <h3 className="font-serif text-3xl text-stone">{plan.nombre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/60">
                {plan.descripcion}
              </p>

              <div className="mt-8">
                <p className="font-serif text-4xl text-stone">
                  {plan.arranque}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-stone/50">
                  Arranque · luego {plan.mensual}
                </p>
              </div>

              <ul className="mt-10 flex-1 space-y-4 border-t border-stone/10 pt-8">
                {plan.incluye.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-stone/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-10 block w-full py-3 text-center text-sm uppercase tracking-widest transition-colors ${
                  plan.destacado
                    ? "bg-burgundy text-cream hover:opacity-90"
                    : "border border-stone/20 text-stone hover:border-burgundy hover:text-burgundy"
                }`}
              >
                Elegir {plan.nombre}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
