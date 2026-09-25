import Reveal from "./Reveal";

const SERVICIOS = [
  {
    nombre: "Branding",
    texto:
      "Tu negocio tiene una forma de hacer las cosas. La convertimos en una marca que se reconoce.",
  },
  {
    nombre: "Web",
    texto:
      "Una web diseñada para explicar, transmitir y convertir sin parecer una más.",
  },
  {
    nombre: "Reservas",
    texto:
      "Que tus clientas puedan reservar cuando quieran. Sin mensajes de ida y vuelta.",
  },
  {
    nombre: "WhatsApp",
    texto:
      "Respuestas, información y seguimiento sin que tengas que estar pendiente todo el día.",
  },
  {
    nombre: "Automatizaciones",
    texto: "Lo repetitivo puede hacerse solo.",
  },
  {
    nombre: "Reseñas",
    texto:
      "Después de una buena experiencia, pedir que la cuenten debería suceder solo.",
  },
  {
    nombre: "Clientas",
    texto:
      "Las clientas que ya confiaron en ti no deberían desaparecer sin más.",
  },
  {
    nombre: "Captación",
    texto:
      "Nuevas oportunidades para seguir haciendo crecer lo que ya has construido.",
  },
];

export default function SietePiezas() {
  return (
    <section id="servicios" className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-burgundy">A / 05 — Qué hacemos</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-stone sm:text-4xl md:text-5xl">
            Todo lo que tu negocio necesita para funcionar mejor.
          </h2>
        </Reveal>

        <div className="mt-16">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.nombre} delay={i * 60}>
              <div className="grid gap-2 border-t border-stone/15 py-8 sm:grid-cols-[auto,1fr] sm:items-baseline sm:gap-10">
                <span className="text-sm text-burgundy sm:pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grid gap-1 sm:grid-cols-[220px,1fr] sm:items-baseline sm:gap-10">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-stone">
                    {s.nombre}
                  </h3>
                  <p className="max-w-xl leading-relaxed text-stone/65">
                    {s.texto}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-stone/15" />
        </div>
      </div>
    </section>
  );
}
