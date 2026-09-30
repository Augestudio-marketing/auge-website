import Reveal from "../components/Reveal";

const PASOS = ["Analizamos", "Diseñamos", "Configuramos", "Conectamos", "Lanzamos"];

export default function Setup() {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest text-burgundy">
            Antes de los planes
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            El setup es donde
            <br />
            <span className="italic text-burgundy">construimos AUGE.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-stone/70">
            El setup es la implementación inicial de todo lo que incluye tu
            plan. Analizamos tu negocio, configuramos las herramientas,
            construimos los elementos incluidos, conectamos los sistemas y
            dejamos todo preparado para funcionar.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ol className="mx-auto mt-14 flex max-w-xs flex-col items-center md:mt-20 md:max-w-none md:flex-row md:items-start md:justify-between">
            {PASOS.map((paso, i) => (
              <li key={paso} className="flex flex-col items-center md:flex-1 md:flex-row md:items-start">
                <div className="flex flex-col items-center text-center">
                  <span className="font-display text-sm italic text-burgundy/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-sm uppercase tracking-widest text-stone md:text-xs lg:text-sm">
                    {paso}
                  </span>
                </div>
                {i < PASOS.length - 1 && (
                  <span
                    aria-hidden
                    className="my-3 font-display text-xl text-burgundy/50 md:mx-auto md:my-0 md:pt-5"
                  >
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-16 max-w-3xl md:mt-24">
            <p className="text-center text-xs uppercase tracking-widest text-stone/55">
              El setup se abona en dos partes
            </p>
            <div className="mt-6 grid grid-cols-2 border-t border-burgundy">
              <div className="border-r border-stone/15 pr-4 pt-6 sm:pr-8">
                <p className="font-display text-5xl leading-none text-burgundy sm:text-6xl">
                  50%
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone/70">
                  Al comenzar.
                </p>
              </div>
              <div className="pl-4 pt-6 sm:pl-8">
                <p className="font-display text-5xl leading-none text-burgundy sm:text-6xl">
                  50%
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone/70">
                  Cuando todo está montado y funcionando.
                </p>
              </div>
            </div>
            <p className="mt-10 text-center text-xs uppercase tracking-widest text-stone/45">
              Sin permanencia en el setup.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
