import { PLANES } from "./datos";

// Resumen de los tres planes: se usa en el inicio de /planes y en la home.
// `base` vacío enlaza a las secciones de la misma página; "/planes" desde fuera.
export default function ResumenPlanes({
  base = "",
  Titulo = "h2",
  compacto = true,
}: {
  base?: string;
  Titulo?: "h2" | "h3";
  // En móvil, `compacto` muestra solo nombre y precio; si no, añade descripción y enlace.
  compacto?: boolean;
}) {
  return (
    <div className="mt-8 grid border-y border-stone/15 md:grid-cols-3 md:border-y-0">
      {PLANES.map((plan, i) => {
        const destacado = plan.id === "crecimiento";
        return (
          <a
            key={plan.id}
            href={`${base}#${plan.id}`}
            className={`group relative flex items-center justify-between gap-6 px-1 py-6 ${compacto ? "" : "flex-wrap gap-y-4"} transition-colors md:flex-col md:items-start md:justify-start md:px-8 md:py-10 ${
              i > 0 ? "border-t border-stone/15 md:border-t-0" : ""
            } ${
              destacado
                ? "-mx-6 bg-burgundy px-6 text-cream md:mx-0 md:px-8"
                : "hover:bg-cream/60 md:border-y md:border-stone/15"
            }`}
          >
            <div className="md:min-h-[7.5rem]">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
                <Titulo className="font-display text-2xl md:text-3xl">
                  {plan.nombre}
                </Titulo>
                {plan.etiqueta && destacado && (
                  <span className="text-[10px] uppercase tracking-widest text-cream/70">
                    {plan.etiqueta}
                  </span>
                )}
              </div>
              <p
                className={`mt-2 hidden max-w-[16rem] text-sm leading-relaxed md:block ${
                  destacado ? "text-cream/75" : "text-stone/60"
                }`}
              >
                {plan.corto}
              </p>
            </div>

            <div className="shrink-0 text-right md:mt-8 md:text-left">
              <p
                className={`text-xs line-through decoration-1 ${
                  destacado ? "text-cream/50" : "text-stone/40"
                }`}
              >
                <span className="sr-only">Precio habitual </span>
                {plan.setup.habitual}
              </p>
              <p className="font-display text-3xl leading-none md:mt-1 md:text-4xl">
                {plan.setup.actual}
                <span
                  className={`ml-1 align-middle font-sans text-[11px] uppercase tracking-widest ${
                    destacado ? "text-cream/60" : "text-stone/45"
                  }`}
                >
                  setup
                </span>
              </p>
              <p className={`mt-2 text-sm ${destacado ? "text-cream/85" : "text-stone/70"}`}>
                + {plan.cuota.actual}/mes
              </p>
            </div>

            {!compacto && (
              <div className="w-full md:hidden">
                <p
                  className={`text-sm leading-relaxed ${
                    destacado ? "text-cream/75" : "text-stone/65"
                  }`}
                >
                  {plan.corto}
                </p>
                <p
                  className={`mt-4 text-xs uppercase tracking-widest ${
                    destacado ? "text-cream/85" : "text-burgundy"
                  }`}
                >
                  Ver el plan {base ? "→" : "↓"}
                </p>
              </div>
            )}

            <span
              className={`hidden text-xs uppercase tracking-widest md:mt-8 md:block ${
                destacado ? "text-cream/80" : "text-burgundy"
              }`}
            >
              Ver el plan{" "}
              <span
                className={`inline-block transition-transform ${
                  base ? "group-hover:translate-x-0.5" : "group-hover:translate-y-0.5"
                }`}
              >
                {base ? "→" : "↓"}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
