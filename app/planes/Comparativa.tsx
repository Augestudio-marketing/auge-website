import { Fragment } from "react";
import Reveal from "../components/Reveal";
import { COMPARATIVA, PLANES } from "./datos";

const GRUPOS_MOVIL = [
  { titulo: "En los tres planes", desde: 0 },
  { titulo: "Desde Crecimiento", desde: 1 },
  { titulo: "Solo en Escala", desde: 2 },
] as const;

function Incluido() {
  return (
    <>
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-burgundy" />
      <span className="sr-only">Incluido</span>
    </>
  );
}

function NoIncluido() {
  return (
    <>
      <span aria-hidden className="text-stone/25">—</span>
      <span className="sr-only">No incluido</span>
    </>
  );
}

export default function Comparativa() {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Todo lo que incluye
            <br />
            <span className="italic text-burgundy">cada plan.</span>
          </h2>
        </Reveal>

        {/* Escritorio: tabla tipográfica */}
        <Reveal delay={100} className="mt-16 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-stone">
                <th scope="col" className="pb-5 font-normal">
                  <span className="sr-only">Pieza</span>
                </th>
                {PLANES.map((plan) => (
                  <th
                    key={plan.id}
                    scope="col"
                    className={`w-40 pb-5 pt-6 text-center align-bottom font-normal ${
                      plan.id === "crecimiento" ? "bg-burgundy/[0.05]" : ""
                    }`}
                  >
                    <span className="block font-display text-2xl text-stone">
                      {plan.nombre}
                    </span>
                    <span className="mt-1 block text-xs text-stone/55">
                      {plan.setup.actual} + {plan.cuota.actual}/mes
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARATIVA.map((fila, i) => {
                const inicioTramo = i === 0 || COMPARATIVA[i - 1].desde !== fila.desde;
                return (
                  <Fragment key={fila.pieza}>
                    {inicioTramo && (
                      <tr>
                        <th
                          scope="colgroup"
                          colSpan={4}
                          className="pb-2 pt-8 text-[10px] font-normal uppercase tracking-widest2 text-burgundy"
                        >
                          {GRUPOS_MOVIL[fila.desde].titulo}
                        </th>
                      </tr>
                    )}
                    <tr className="border-b border-stone/10">
                      <th
                        scope="row"
                        className="py-3.5 pr-6 text-sm font-normal text-stone/80"
                      >
                        {fila.pieza}
                      </th>
                      {PLANES.map((plan, nivel) => (
                        <td
                          key={plan.id}
                          className={`py-3.5 text-center ${
                            plan.id === "crecimiento" ? "bg-burgundy/[0.05]" : ""
                          }`}
                        >
                          {nivel >= fila.desde ? <Incluido /> : <NoIncluido />}
                        </td>
                      ))}
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
          <p className="mt-6 text-right text-xs text-stone/45">
            Meta Ads y Google Ads: la inversión publicitaria no está incluida en
            la cuota.
          </p>
        </Reveal>

        {/* Móvil: bloques acumulativos, sin sacrificar legibilidad */}
        <div className="mt-14 space-y-12 md:hidden">
          {GRUPOS_MOVIL.map((grupo) => {
            const planes = PLANES.slice(grupo.desde).map((p) => p.nombre);
            return (
              <Reveal key={grupo.titulo}>
                <div className="flex items-baseline justify-between gap-4 border-b border-stone pb-3">
                  <h3 className="font-display text-2xl text-stone">{grupo.titulo}</h3>
                  <p className="text-right text-[10px] uppercase tracking-widest text-burgundy">
                    {planes.join(" · ")}
                  </p>
                </div>
                <ul>
                  {COMPARATIVA.filter((f) => f.desde === grupo.desde).map((fila) => (
                    <li
                      key={fila.pieza}
                      className="flex items-center gap-3 border-b border-stone/10 py-3 text-sm text-stone/80"
                    >
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                      {fila.pieza}
                    </li>
                  ))}
                </ul>
                {grupo.desde === 2 && (
                  <p className="mt-4 text-xs leading-relaxed text-stone/55">
                    La inversión publicitaria en Meta y Google no está incluida
                    en la cuota.
                  </p>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
