const TU_PARTE = [
  "Rellenar un formulario con tus servicios, precios y fotos (30 min).",
  "Darnos acceso a Google, Instagram y WhatsApp.",
  "Una llamada de arranque (60 min), en tu salón si estás en la Región de Murcia.",
  "Revisar y aprobar tu web (45 min).",
  "Ver una formación grabada (30 min).",
];

const NUESTRA_PARTE = [
  "Montamos la web, las reservas, el WhatsApp, las reseñas y la fidelización.",
  "Pasamos tus clientas desde la libreta, el Excel o la app que uses.",
  "Creamos y publicamos tu contenido cada mes.",
  "Resolvemos lo técnico, las actualizaciones y las mejoras.",
];

export default function TuParte() {
  return (
    <section className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Menos de 3 horas de tu tiempo. En total.
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone/45">
              Lo que haces tú
            </p>
            <ul className="mt-6 space-y-5">
              {TU_PARTE.map((item) => (
                <li
                  key={item}
                  className="border-b border-stone/10 pb-5 leading-relaxed text-stone/75 last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Lo que hacemos nosotras
            </p>
            <ul className="mt-6 space-y-5">
              {NUESTRA_PARTE.map((item) => (
                <li
                  key={item}
                  className="border-b border-stone/10 pb-5 leading-relaxed text-stone last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-2xl leading-snug text-stone sm:text-3xl">
          Lo único que tienes que hacer cada día es lo que ya haces:
          atender a tus clientas.
        </p>
      </div>
    </section>
  );
}
