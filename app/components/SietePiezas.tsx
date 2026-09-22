import Reveal from "./Reveal";

const PIEZAS = [
  {
    titulo: "Web de marca a medida.",
    texto: "Diseñada y programada desde cero para tu centro. Nada de plantillas.",
  },
  {
    titulo: "Reservas online.",
    texto: "Tus clientas reservan a cualquier hora, sin llamar ni esperar respuesta.",
  },
  {
    titulo: "WhatsApp que responde solo.",
    texto: "Resuelve dudas sobre servicios, precios y horarios con el tono de tu marca.",
  },
  {
    titulo: "Reseñas automáticas.",
    texto: "Cada visita termina con una petición de reseña en el momento justo.",
  },
  {
    titulo: "Clientas que vuelven.",
    texto: "Mensajes de recuperación ajustados al ritmo de cada tratamiento.",
  },
  {
    titulo: "Contenido y redes.",
    texto: "Publicaciones y stories cada mes, alineadas con tu marca y tus campañas.",
  },
  {
    titulo: "Publicidad.",
    texto: "Campañas en Google y Meta medidas por lo que importa de verdad, el coste por reserva.",
  },
];

export default function SietePiezas() {
  return (
    <section className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-black tracking-tight text-stone sm:text-4xl">
            Todo lo que tu negocio necesita para crecer. Instalado dentro.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PIEZAS.map((pieza, i) => (
            <Reveal key={pieza.titulo} delay={(i % 3) * 80}>
              <div className="group border-t border-stone/15 pt-6 transition-colors hover:border-burgundy/40">
                <span className="font-display text-sm font-light text-burgundy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-stone transition-transform group-hover:translate-x-1">
                  {pieza.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/65">
                  {pieza.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-16 max-w-2xl text-center font-display text-xl font-light leading-snug text-stone sm:text-2xl">
            Por separado, son cuatro proveedores que no se hablan. Con
            nosotras, un solo sistema y una sola interlocutora.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
