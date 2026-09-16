export default function QuienSomos() {
  return (
    <section className="bg-marfil px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[300px_1fr] md:items-start">
        <div className="mx-auto flex aspect-[4/5] w-full max-w-[280px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-stone/20 bg-cream text-center">
          <span className="font-serif text-5xl text-stone/25">M</span>
          <p className="mt-3 px-6 text-xs uppercase tracking-widest text-stone/35">
            Foto de Miriam — pendiente
          </p>
        </div>

        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
            Trato cada salón como si fuera mío.
          </h2>

          <p className="mt-8 leading-relaxed text-stone/75">
            Soy Miriam, fundadora de AUGE. Llevo años dirigiendo operaciones
            y marketing en una academia online que ha crecido hasta más de
            6.000 alumnos. Allí aprendí lo que cambia en un negocio cuando
            los sistemas trabajan por ti: menos caos, más tiempo y un
            crecimiento que no depende de estar encima de todo.
          </p>

          <p className="mt-4 rounded-2xl border border-dashed border-stone/25 bg-cream/60 px-6 py-4 text-sm italic leading-relaxed text-stone/50">
            Pendiente: 2–3 frases sobre tu vínculo personal con el mundo de
            la belleza.
          </p>

          <p className="mt-4 leading-relaxed text-stone/75">
            Las dueñas de salón hacen un trabajo precioso, pero muchas
            pierden clientas por un WhatsApp sin contestar o unas redes que
            no reflejan su nivel. No es falta de talento: es falta de
            tiempo y de sistemas. Creé AUGE para darles lo que tienen las
            grandes marcas, con el cuidado de un proyecto propio.
          </p>

          <p className="mt-8 font-serif text-lg text-stone">
            Miriam · Fundadora y directora de AUGE.
          </p>
        </div>
      </div>
    </section>
  );
}
