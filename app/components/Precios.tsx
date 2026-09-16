const FEATURES = [
  { label: "Web de marca a medida", planes: [true, true, true] },
  { label: "Reservas online", planes: [true, true, true] },
  { label: "WhatsApp: confirmaciones y recordatorios", planes: [true, true, true] },
  { label: "Petición automática de reseñas", planes: [true, true, true] },
  { label: "WhatsApp que responde dudas con tu tono", planes: [false, true, true] },
  { label: "Campañas para recuperar clientas", planes: [false, true, true] },
  { label: "Redes sociales (8–12 publicaciones y stories al mes)", planes: [false, true, true] },
  { label: "Google y Meta Ads (inversión aparte)", planes: [false, false, true] },
  { label: "Dirección de contenido y fotografía", planes: [false, false, true] },
];

const PLANES = [
  {
    nombre: "Cimiento",
    destacado: false,
    paraQuien: "Salones que empiezan a digitalizarse",
    arranque: "600 €",
    mensual: "90 €/mes",
    revision: "Trimestral, 30 min",
    soporte: "Menos de 24 h laborables",
    cta: "Empezar por la base",
  },
  {
    nombre: "Auge",
    destacado: true,
    paraQuien: "La mayoría de salones",
    arranque: "900 €",
    mensual: "180 €/mes",
    revision: "Mensual, 30 min",
    soporte: "Menos de 24 h laborables",
    cta: "Quiero Sistema Auge",
  },
  {
    nombre: "Cénit",
    destacado: false,
    paraQuien: "Salones que quieren liderar su zona",
    arranque: "1.500 €",
    mensual: "350 €/mes",
    revision: "Estratégica mensual, 60 min",
    soporte: "Prioritario, menos de 4 h",
    cta: "Hablar de Cénit",
  },
];

export default function Precios() {
  return (
    <section id="precios" className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-widest2 text-burgundy">
          Precios
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Tres niveles. Un mismo cuidado.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-stone/70">
          Cuota de arranque para construirlo todo y una mensualidad para
          gestionarlo y mejorarlo. Sin comisión por cita.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PLANES.map((plan, i) => (
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
                    Recomendado
                  </span>
                ) : (
                  <span className="mb-6 block h-[26px]" />
                )}

                <h3 className="font-serif text-3xl">{plan.nombre}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    plan.destacado ? "text-cream/75" : "text-stone/60"
                  }`}
                >
                  {plan.paraQuien}
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
                  className={`flex-1 space-y-3 border-t pt-8 ${
                    plan.destacado ? "border-cream/15" : "border-stone/10"
                  }`}
                >
                  {FEATURES.map((f) => (
                    <li
                      key={f.label}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        f.planes[i]
                          ? plan.destacado
                            ? "text-cream/90"
                            : "text-stone/80"
                          : plan.destacado
                            ? "text-cream/30"
                            : "text-stone/30"
                      }`}
                    >
                      <span>{f.planes[i] ? "✓" : "–"}</span>
                      <span>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-8 space-y-1 border-t pt-6 text-xs uppercase tracking-widest ${
                    plan.destacado
                      ? "border-cream/15 text-cream/60"
                      : "border-stone/10 text-stone/50"
                  }`}
                >
                  <p>Revisión: {plan.revision}</p>
                  <p>Soporte: {plan.soporte}</p>
                </div>

                <a
                  href="#diagnostico"
                  className={`mt-8 block w-full rounded-full py-3 text-center text-sm uppercase tracking-widest transition-opacity hover:opacity-80 ${
                    plan.destacado
                      ? "bg-cream text-stone"
                      : "bg-stone text-cream"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-hueso px-8 py-8 text-center md:px-14">
          <p className="font-serif text-xl text-stone md:text-2xl">
            5 plazas fundadoras con un 30% de descuento en la cuota de
            arranque, a cambio de tu testimonio y permiso para compartir tus
            resultados.
          </p>
          <p className="mt-2 text-sm uppercase tracking-widest text-burgundy">
            Quedan 5
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-stone/45">
          Compromiso mínimo de 3 meses desde el lanzamiento; después, mes a
          mes con 30 días de preaviso. En Auge y Cénit, la cuota de arranque
          puede pagarse en 3 plazos sin intereses. ¿Tienes más de un centro?
          Cada centro adicional suma el 50% de la mensualidad.
        </p>
      </div>
    </section>
  );
}
