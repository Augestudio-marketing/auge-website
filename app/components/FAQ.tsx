import Accordion, { type AccordionItem } from "./Accordion";

const PREGUNTAS = [
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de tu negocio y de lo que necesite, por eso empezamos con el diagnóstico. Como referencia, los proyectos parten de 600 € de arranque y 90 € al mes.",
  },
  {
    q: "No sé nada de tecnología.",
    a: "No tienes que saber. Lo montamos todo y te lo explicamos en 30 minutos. Para lo demás, nos escribes por WhatsApp.",
  },
  {
    q: "Tengo una clínica de medicina estética. ¿También es para mí?",
    a: "Sí. Adaptamos los mensajes, la web y la publicidad a las normas de publicidad sanitaria de tu comunidad.",
  },
  {
    q: "¿Y si me quiero ir?",
    a: "Tras los 3 primeros meses, te das de baja con 30 días de preaviso y te llevas tu web, tu dominio y tus contactos.",
  },
  {
    q: "¿Trabajáis fuera de Murcia?",
    a: "Sí, en toda España. En la Región de Murcia, la primera reunión puede ser en tu centro.",
  },
];

export default function FAQ() {
  const items: AccordionItem[] = PREGUNTAS.map((p, i) => ({
    id: `faq-${i}`,
    header: p.q,
    content: <p className="leading-relaxed text-stone/70">{p.a}</p>,
  }));

  return (
    <section className="bg-marfil px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-black tracking-tight text-stone sm:text-4xl">
          Lo que suelen preguntarnos.
        </h2>

        <div className="mt-14">
          <Accordion items={items} defaultOpen={null} theme="light" />
        </div>
      </div>
    </section>
  );
}
