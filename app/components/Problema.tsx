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
    <section className="border-t border-stone/10 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-xl font-serif text-4xl leading-tight text-stone sm:text-5xl">
          Lo que resolvemos, para que tú vuelvas a centrarte en tu oficio.
        </h2>

        <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-10">
          {PUNTOS.map((punto) => (
            <div key={punto.numero}>
              <span className="font-serif text-sm text-burgundy">
                {punto.numero}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-stone">
                {punto.titulo}
              </h3>
              <p className="mt-4 leading-relaxed text-stone/70">
                {punto.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
