const CIFRAS = [
  { cifra: "30 días", texto: "para tener tu sistema en marcha" },
  { cifra: "< 3 h", texto: "de tu tiempo en todo el arranque" },
  { cifra: "24 h", texto: "tu WhatsApp responde a cualquier hora" },
  { cifra: "0 €", texto: "de comisión por cita" },
];

export default function Cifras() {
  return (
    <section className="bg-burgundy px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {CIFRAS.map((c) => (
            <div key={c.cifra} className="text-center">
              <p className="font-display text-4xl font-black text-cream md:text-5xl">
                {c.cifra}
              </p>
              <p className="mt-3 font-display text-sm font-light leading-snug text-cream/65">
                {c.texto}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-xl text-center text-xs uppercase tracking-widest text-cream/45">
          No son cifras de resultados. Son compromisos, y los firmamos por
          escrito.
        </p>
      </div>
    </section>
  );
}
