const FILAS = [
  {
    habitual: "Una web de plantilla que se parece a todas",
    auge: "Web diseñada y programada a medida para tu salón",
  },
  {
    habitual: "Una app de citas que no habla con nada",
    auge: "Reservas conectadas con WhatsApp, reseñas y fidelización",
  },
  {
    habitual: "Un bot de WhatsApp genérico",
    auge: "WhatsApp que responde con el tono de tu salón",
  },
  {
    habitual: "Una community manager por su lado",
    auge: "Contenido alineado con tu marca y tus campañas",
  },
  {
    habitual: "Tú coordinando a todos",
    auge: "Una sola interlocutora por WhatsApp",
  },
  {
    habitual: "Marketplaces que cobran por cada cita",
    auge: "Sin comisión por reserva. Las clientas son tuyas",
  },
];

export default function Comparativa() {
  return (
    <section className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Lo normal es acabar con cuatro proveedores. Tú mereces una
          partner.
        </h2>

        <div className="mt-16 overflow-hidden rounded-3xl ring-1 ring-stone/10">
          <div className="grid grid-cols-2 bg-stone/5 px-6 py-4 sm:px-10">
            <p className="text-xs uppercase tracking-widest text-stone/50">
              Lo habitual
            </p>
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Con Sistema Auge
            </p>
          </div>
          <div className="divide-y divide-stone/10">
            {FILAS.map((fila) => (
              <div
                key={fila.habitual}
                className="grid grid-cols-2 gap-4 px-6 py-6 sm:px-10"
              >
                <p className="text-sm leading-relaxed text-stone/50 line-through decoration-stone/30">
                  {fila.habitual}
                </p>
                <p className="text-sm font-medium leading-relaxed text-stone">
                  {fila.auge}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-2xl leading-snug text-stone sm:text-3xl">
          No somos la opción más barata. Somos la que deja de costarte
          dinero en citas perdidas y clientas que no vuelven.
        </p>
      </div>
    </section>
  );
}
