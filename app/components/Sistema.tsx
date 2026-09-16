const PASOS = [
  {
    numero: "1",
    titulo: "Te encuentra.",
    texto: "En Google o Instagram ve un salón que se ve impecable.",
  },
  {
    numero: "2",
    titulo: "Reserva.",
    texto: "Desde tu web, a cualquier hora, sin llamar ni esperar respuesta.",
  },
  {
    numero: "3",
    titulo: "Pregunta.",
    texto: "Tu WhatsApp le responde al momento sobre servicios, precios y horarios, con el tono de tu salón.",
  },
  {
    numero: "4",
    titulo: "Confirma y no se olvida.",
    texto: "Recibe su confirmación y su recordatorio sin que tú escribas nada.",
  },
  {
    numero: "5",
    titulo: "Deja su reseña.",
    texto: "Al terminar la visita, el sistema se la pide en el momento justo.",
  },
  {
    numero: "6",
    titulo: "Vuelve.",
    texto: "Si pasan semanas sin reservar, recibe un mensaje para volver, ajustado a su tratamiento: no es lo mismo unas uñas que un color.",
  },
];

export default function Sistema() {
  return (
    <section id="sistema" className="bg-burgundy px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl">
          Un sistema, no una lista de servicios.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
          Web, reservas, WhatsApp, reseñas y fidelización conectados entre
          sí. Así es la vida de una clienta en tu salón con Sistema Auge:
        </p>

        <div className="mt-16 divide-y divide-cream/15 border-t border-cream/15">
          {PASOS.map((paso) => (
            <div
              key={paso.numero}
              className="grid gap-4 py-8 md:grid-cols-[auto_1fr_1.4fr] md:items-center md:gap-12"
            >
              <span className="font-serif text-5xl text-cream/25 md:text-6xl">
                {paso.numero}
              </span>
              <h3 className="font-serif text-2xl text-cream">{paso.titulo}</h3>
              <p className="leading-relaxed text-cream/65">{paso.texto}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-2xl leading-snug text-cream sm:text-3xl">
          Tú no haces nada de esto. Lo hace el sistema, todos los días.
        </p>
      </div>
    </section>
  );
}
