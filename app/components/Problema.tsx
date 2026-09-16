const PUNTOS = [
  {
    numero: "01",
    titulo: "Agenda automatizada",
    texto:
      "Tu agenda se llena sola. Recordatorios, confirmaciones y huecos cubiertos sin que tengas que estar pendiente del teléfono entre clienta y clienta.",
  },
  {
    numero: "02",
    titulo: "WhatsApp con IA",
    texto:
      "Respondemos por ti al instante, aunque estés con las manos ocupadas. Tus clientas reciben atención inmediata, tú recuperas el tiempo.",
  },
  {
    numero: "03",
    titulo: "Redes que traen clientas",
    texto:
      "Nada de publicar por publicar. Contenido y campañas pensadas para convertir seguidoras en reservas reales, mes tras mes.",
  },
];

export default function Problema() {
  return (
    <section className="bg-stone px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-widest2 text-cream/50">
          Lo que resolvemos
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl">
          Para que tú vuelvas a centrarte en tu oficio.
        </h2>

        <div className="mt-16 divide-y divide-cream/10 border-t border-cream/10">
          {PUNTOS.map((punto) => (
            <div
              key={punto.numero}
              className="grid gap-4 py-10 md:grid-cols-[auto_1fr_1.2fr] md:items-center md:gap-12"
            >
              <span className="font-serif text-6xl text-cream/20 md:text-7xl">
                {punto.numero}
              </span>
              <h3 className="font-serif text-3xl text-cream">
                {punto.titulo}
              </h3>
              <p className="leading-relaxed text-cream/60">{punto.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
