import Accordion, { type AccordionItem } from "./Accordion";
import Reveal from "./Reveal";

const PREGUNTAS = [
  {
    q: "¿Y si no entiendo nada de tecnología?",
    a: "No necesitas entenderla. Nos encargamos de la parte técnica. Tú solo necesitas saber cómo quieres que funcione tu negocio.",
  },
  {
    q: "¿Tengo que cambiar mi sistema de reservas?",
    a: "No necesariamente. Primero vemos cómo trabajas y qué tiene sentido para ti.",
  },
  {
    q: "¿Trabajáis con cualquier negocio?",
    a: "Trabajamos principalmente con negocios de servicios que dependen de una agenda: belleza, estética, clínicas, fisioterapia, psicología, bienestar y negocios similares.",
  },
  {
    q: "¿La web y el dominio son míos?",
    a: "Sí. Tu marca es tuya desde el primer día.",
  },
  {
    q: "¿Tengo que contratarlo todo?",
    a: "No. Analizamos tu situación y construimos lo que realmente necesitas.",
  },
  {
    q: "¿Trabajáis fuera de Murcia?",
    a: "Sí. Trabajamos online con negocios de toda España.",
  },
];

export default function FAQ() {
  const items: AccordionItem[] = PREGUNTAS.map((p, i) => ({
    id: `faq-${i}`,
    header: p.q,
    content: <p className="leading-relaxed text-stone/70">{p.a}</p>,
  }));

  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-burgundy">
            Preguntas
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl">
            Lo que suelen preguntarnos.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <Accordion items={items} defaultOpen={null} theme="light" />
        </Reveal>
      </div>
    </section>
  );
}
