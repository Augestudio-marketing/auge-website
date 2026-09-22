export default function QuienSomos() {
  return (
    <section id="quien-esta-detras" className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[300px_1fr] md:items-center">
        <div className="mx-auto flex aspect-[4/5] w-full max-w-[280px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-stone/20 bg-marfil text-center">
          <span className="font-display text-5xl text-stone/25">M</span>
          <p className="mt-3 px-6 text-xs uppercase tracking-widest text-stone/35">
            Foto de Miriam en un centro real — pendiente
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl font-black lowercase tracking-tight text-stone sm:text-4xl">
            pocas manos. muy cuidadas.
          </h2>

          <p className="mt-8 leading-relaxed text-stone/75">
            auge.studio lo dirige Miriam, fundadora y directora creativa,
            con una red de fotógrafas y creadoras de contenido para cada
            proyecto. Trabajamos con pocos negocios a la vez, a propósito:
            cada uno se trata como si fuera nuestro.
          </p>
        </div>
      </div>
    </section>
  );
}
