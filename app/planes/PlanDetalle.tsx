import Reveal from "../components/Reveal";
import { PAGO_SETUP, whatsappPlan, type Plan } from "./datos";

type Tema = {
  fondo: string;
  texto: string;
  suave: string;
  tenue: string;
  acento: string;
  linea: string;
  boton: string;
  nota: string;
};

const TEMAS: Record<Plan["id"], Tema> = {
  base: {
    fondo: "bg-marfil",
    texto: "text-stone",
    suave: "text-stone/70",
    tenue: "text-stone/45",
    acento: "text-burgundy",
    linea: "border-stone/15",
    boton:
      "border-burgundy text-burgundy hover:bg-burgundy hover:text-cream",
    nota: "border-stone/20 text-stone/70",
  },
  crecimiento: {
    fondo: "bg-burgundy grain",
    texto: "text-cream",
    suave: "text-cream/75",
    tenue: "text-cream/50",
    acento: "text-cream",
    linea: "border-cream/20",
    boton:
      "border-cream bg-cream text-burgundy hover:bg-transparent hover:text-cream",
    nota: "border-cream/25 text-cream/75",
  },
  escala: {
    fondo: "bg-hueso",
    texto: "text-stone",
    suave: "text-stone/70",
    tenue: "text-stone/45",
    acento: "text-burgundy",
    linea: "border-stone/20",
    boton:
      "border-stone bg-stone text-cream hover:bg-transparent hover:text-stone",
    nota: "border-burgundy/30 text-stone/75",
  },
};

function Cta({ plan, t, className = "" }: { plan: Plan; t: Tema; className?: string }) {
  return (
    <a
      href={whatsappPlan(plan.nombre)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border px-9 py-4 text-xs uppercase tracking-widest transition-colors duration-300 ${t.boton} ${className}`}
    >
      {plan.cta} →
    </a>
  );
}

function BloquePrecio({ plan, t }: { plan: Plan; t: Tema }) {
  return (
    <div className={`mt-10 border-t pt-8 ${t.linea}`}>
      <p
        className={`inline-block border px-3 py-1 text-[10px] uppercase tracking-widest2 ${t.nota}`}
      >
        Condiciones especiales
      </p>

      <div className="mt-6">
        <p className={`text-xs uppercase tracking-widest ${t.tenue}`}>
          Setup · precio habitual{" "}
          <s className="decoration-1">{plan.setup.habitual}</s>
        </p>
        <p className={`mt-2 font-display text-6xl leading-none ${t.texto}`}>
          {plan.setup.actual}
        </p>
        <p className={`mt-3 text-xs leading-relaxed ${t.suave}`}>{PAGO_SETUP}</p>
      </div>

      <div className="mt-6">
        <p className={`font-display text-3xl leading-none ${t.texto}`}>
          + {plan.cuota.actual}
          <span className={`font-sans text-base ${t.suave}`}>/mes</span>
        </p>
        <p className={`mt-2 text-xs ${t.tenue}`}>
          Precio habitual <s className="decoration-1">{plan.cuota.habitual}/mes</s>
        </p>
      </div>

      {plan.notaPrecio && (
        <p className={`mt-5 text-xs ${t.suave}`}>{plan.notaPrecio}</p>
      )}
    </div>
  );
}

export default function PlanDetalle({ plan, indice }: { plan: Plan; indice: number }) {
  const t = TEMAS[plan.id];

  return (
    <section
      id={plan.id}
      aria-labelledby={`plan-${plan.id}`}
      className={`${t.fondo} px-6 py-20 md:px-10 md:py-28`}
    >
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Columna fija: nombre, titular y precio */}
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className={`text-xs uppercase tracking-widest ${t.tenue}`}>
                Plan {String(indice + 1).padStart(2, "0")}
              </span>
              {plan.etiqueta && (
                <span
                  className={`border-l pl-4 text-xs uppercase tracking-widest ${t.linea} ${t.acento}`}
                >
                  {plan.etiqueta}
                </span>
              )}
            </div>

            <h2
              id={`plan-${plan.id}`}
              className={`mt-4 font-display text-6xl leading-none sm:text-7xl ${t.texto}`}
            >
              {plan.nombre}
            </h2>

            <p className={`mt-6 font-display text-2xl leading-snug sm:text-3xl ${t.texto}`}>
              {plan.titular[0]}
              <br />
              <span className={`italic ${t.acento}`}>{plan.titular[1]}</span>
            </p>

            <p className={`mt-5 max-w-sm leading-relaxed ${t.suave}`}>
              {plan.resumen}
            </p>

            <BloquePrecio plan={plan} t={t} />

            <Cta plan={plan} t={t} className="mt-10 hidden lg:inline-block" />
          </Reveal>
        </div>

        {/* Columna de contenido: qué incluye */}
        <div className="lg:col-span-7">
          {plan.descripcion !== plan.resumen && (
            <Reveal>
              <p className={`max-w-xl text-lg leading-relaxed ${t.suave}`}>
                {plan.descripcion}
              </p>
            </Reveal>
          )}

          <Reveal delay={100}>
            <p
              className={`text-xs uppercase tracking-widest ${t.acento} ${
                plan.descripcion !== plan.resumen ? "mt-12" : ""
              }`}
            >
              {plan.incluyeIntro ?? "Incluye"}
            </p>
          </Reveal>

          <ol className={`mt-6 border-b ${t.linea}`}>
            {plan.incluye.map((pieza, i) => (
              <li key={pieza.titulo} className={`border-t py-7 ${t.linea}`}>
                <Reveal>
                  <div className="grid grid-cols-[2.5rem,1fr] gap-x-4 sm:grid-cols-[3.5rem,1fr]">
                    <span className={`font-display text-lg italic ${t.acento}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className={`text-sm font-medium uppercase tracking-widest ${t.texto}`}>
                        {pieza.titulo}
                      </h3>
                      {pieza.texto.map((parrafo) => (
                        <p
                          key={parrafo}
                          className={`mt-3 max-w-xl leading-relaxed ${t.suave}`}
                        >
                          {parrafo}
                        </p>
                      ))}
                      {pieza.destacado && (
                        <p className={`mt-5 font-display text-2xl italic leading-snug ${t.acento}`}>
                          {pieza.destacado[0]}
                          <br />
                          {pieza.destacado[1]}
                        </p>
                      )}
                      {pieza.nota && (
                        <p
                          className={`mt-5 max-w-xl border-l-2 border-burgundy/60 pl-4 text-sm leading-relaxed ${t.suave}`}
                        >
                          <span className={`font-medium ${t.texto}`}>Importante.</span>{" "}
                          {pieza.nota}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal>
            <div className="mt-12">
              <p className={`text-xs uppercase tracking-widest ${t.acento}`}>
                Ideal para
              </p>
              <p className={`mt-4 max-w-xl font-display text-2xl leading-snug ${t.texto}`}>
                {plan.idealPara}
              </p>
            </div>
            <Cta plan={plan} t={t} className="mt-10 lg:hidden" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
