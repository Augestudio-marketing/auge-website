import Accordion, { type AccordionItem } from "../components/Accordion";
import Reveal from "../components/Reveal";

const PREGUNTAS = [
  {
    q: "¿El setup se paga de una vez?",
    a: "No. El setup se divide en dos pagos: 50% al comenzar y 50% cuando todo está montado y funcionando.",
  },
  {
    q: "¿La cuota mensual empieza desde el primer día?",
    a: "La cuota mensual comienza con la puesta en marcha del sistema y cubre la gestión, mantenimiento y servicios recurrentes incluidos en tu plan.",
  },
  {
    q: "¿La inversión en publicidad está incluida?",
    a: "No. En Escala, la cuota incluye la gestión y optimización de Meta Ads y Google Ads. La inversión publicitaria se establece aparte y se adapta a los objetivos del negocio.",
  },
  {
    q: "¿Tengo que crear yo el contenido?",
    a: "Nos proporcionas el material disponible de tu negocio y nosotras nos encargamos de organizarlo, editarlo, adaptarlo y planificarlo según el plan contratado.",
  },
  {
    q: "¿Puedo cambiar de plan?",
    a: "Sí. El sistema está pensado para evolucionar contigo. Puedes ampliar los servicios cuando tu negocio lo necesite.",
  },
  {
    q: "¿Tengo que contratarlo todo?",
    a: "No. Puedes empezar con el plan que tenga sentido para tu situación actual y evolucionar más adelante.",
  },
];

export default function AntesDeElegir() {
  const items: AccordionItem[] = PREGUNTAS.map((p, i) => ({
    id: `antes-${i}`,
    header: p.q,
    content: <p className="max-w-2xl leading-relaxed text-stone/70">{p.a}</p>,
  }));

  return (
    <section className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center font-display text-3xl leading-tight text-stone sm:text-4xl">
            Antes de elegir.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <Accordion items={items} defaultOpen={null} theme="light" />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 text-center">
            <p className="font-display text-2xl text-stone">
              Tu negocio sigue siendo <span className="italic text-burgundy">tuyo.</span>
            </p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-stone/60">
              Tu dominio, tu web, tus contactos y tu contenido pertenecen a tu
              negocio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
