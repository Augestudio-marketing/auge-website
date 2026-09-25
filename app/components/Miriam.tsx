import Reveal from "./Reveal";

export default function Miriam() {
  return (
    <section id="sobre-auge" className="bg-arena px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-burgundy">A / 09 — Detrás de AUGE</p>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 leading-relaxed text-stone/75">
            AUGE nace después de años trabajando en operaciones, marketing y
            crecimiento digital. De ver qué ocurre cuando un negocio crece y
            todo empieza a depender de una sola persona. Y de querer
            construir algo diferente: un sistema que haga que el negocio
            funcione mejor sin exigirle más a quien lo ha construido.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 border-t border-stone/20 pt-6">
            <p className="text-xs uppercase tracking-widest text-stone/50">
              Founder · auge.studio
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
