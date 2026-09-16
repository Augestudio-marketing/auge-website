import Accordion, { type AccordionItem } from "./Accordion";

const PREGUNTAS = [
  {
    q: "No sé nada de tecnología. ¿Voy a poder con esto?",
    a: "No tienes que poder con nada. Lo montamos nosotras y te lo explicamos en una formación de 30 minutos, grabada para que la veas cuando quieras. Desde el móvil ves tu agenda y tus mensajes. Para todo lo demás, nos escribes por WhatsApp.",
  },
  {
    q: "Tengo a mis clientas en una libreta, un Excel u otra app.",
    a: "Perfecto. Las pasamos nosotras al sistema, estén donde estén. Está incluido.",
  },
  {
    q: "Estoy en Booksy o Treatwell. ¿Tengo que dejarlo?",
    a: "No, al menos al principio. Puede seguir como escaparate mientras tu web y tu Google empiezan a traerte reservas directas. Tú decides cuándo y si te vas.",
  },
  {
    q: "¿El WhatsApp va a contestar cosas raras a mis clientas?",
    a: "Lo entrenamos con tus servicios, tus precios, tus horarios y tu forma de hablar, y lo revisamos contigo antes de activarlo. Si hay algo que no sabe resolver, te lo pasa a ti.",
  },
  {
    q: "¿Vais a publicar en mis redes sin que yo lo vea?",
    a: "No. Cada mes te enviamos el contenido para que lo apruebes. Si en 48 horas no nos dices nada, se publica tal cual.",
  },
  {
    q: "¿Y si me quiero ir?",
    a: "Tras los 3 primeros meses, te das de baja con 30 días de preaviso. Te llevas tu dominio, tu web, tus contactos y tu contenido. Y si vuelves antes de 6 meses, no pagas el arranque otra vez.",
  },
  {
    q: "¿Y si no funciona?",
    a: "Si en 30 días el sistema no está en marcha, seguimos trabajando gratis hasta que lo esté y te regalamos el primer mes.",
  },
  {
    q: "Es más caro que una web normal.",
    a: "Lo es, porque no es una web: es web, reservas, WhatsApp, reseñas, fidelización y gestión mensual en un solo sistema. Compáralo con lo que cuestan cuatro proveedores por separado y con lo que pierdes cada mes en citas olvidadas. En Auge y Cénit puedes pagar el arranque en 3 plazos sin intereses.",
  },
  {
    q: "Tengo más de un salón.",
    a: "Todos tus centros funcionan dentro del mismo sistema, cada uno con su agenda y su equipo. Cada centro adicional suma el 50% de la mensualidad de tu nivel.",
  },
  {
    q: "¿Trabajáis fuera de Murcia?",
    a: "Sí, en toda España y en remoto. Si tu salón está en la Región de Murcia, la llamada de arranque puede ser en persona.",
  },
  {
    q: "¿Es para mí si acabo de abrir?",
    a: "Es el mejor momento. Empiezas con Cimiento y, cuando crezcas, subes de nivel pagando solo la diferencia del arranque.",
  },
];

export default function FAQ() {
  const items: AccordionItem[] = PREGUNTAS.map((p, i) => ({
    id: `faq-${i}`,
    header: p.q,
    content: <p className="leading-relaxed text-stone/70">{p.a}</p>,
  }));

  return (
    <section className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Lo que suelen preguntarnos.
        </h2>

        <div className="mt-14">
          <Accordion items={items} defaultOpen={null} theme="light" />
        </div>
      </div>
    </section>
  );
}
