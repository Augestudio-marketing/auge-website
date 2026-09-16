import Accordion, { type AccordionItem } from "./Accordion";

const WHATSAPP_URL = "https://wa.me/34613803022?text=";

function whatsapp(mensaje: string) {
  return WHATSAPP_URL + encodeURIComponent(mensaje);
}

const MOMENTOS: {
  id: string;
  frase: string;
  titular: string;
  texto: string;
  cambios: string[];
  nivel: string;
  cta: string;
  nota?: { titulo: string; texto: string };
}[] = [
  {
    id: "desbordada",
    frase: "Voy desbordada",
    titular: "Deja de ser tú la que lo sostiene todo.",
    texto: "Llevas el WhatsApp, la agenda, las redes y la caja. Cuando llegas a casa, no queda energía para «hacer marketing». Sistema Auge confirma, recuerda, responde y pide reseñas por ti. Tú vuelves a lo que se te da bien.",
    cambios: [
      "Tu WhatsApp responde aunque estés con una clienta en el sillón.",
      "Las citas se confirman y se recuerdan solas.",
      "Tu Instagram se publica cada mes sin que tengas que pensarlo.",
    ],
    nivel: "Auge. Si prefieres empezar por la base, Cimiento.",
    cta: "Quiero quitarme peso de encima",
  },
  {
    id: "unas",
    frase: "Tengo un salón de uñas",
    titular: "Tu trabajo ya es de nivel influencer. Que tu sistema de reservas también lo sea.",
    texto: "Tus clientas te descubren en Instagram y TikTok, y después todo pasa por mensajes cruzados. Lo ordenamos: reservas desde tu web y tu bio, respuestas al momento por WhatsApp y avisos al ritmo de tu servicio. Tu estética no se toca: apruebas cada publicación antes de que salga.",
    cambios: [
      "Un enlace de reserva que funciona solo, sin idas y venidas.",
      "Aviso para el relleno a las tres semanas, sin que tú lo apuntes.",
      "Una web tan cuidada como tus diseños.",
    ],
    nivel: "Auge.",
    cta: "Ordenar mi agenda",
  },
  {
    id: "booksy",
    frase: "Estoy en Booksy o Treatwell",
    titular: "Deja de pagar por clientas que nunca fueron tuyas.",
    texto: "Si mañana dejas la plataforma, ¿cuántas clientas se quedan contigo? Con Sistema Auge, las reservas entran por tu web y tu Google, sin comisión por cita, y los datos de tus clientas son tuyos. No hace falta irse de golpe: la plataforma puede seguir como escaparate mientras convertimos a esas clientas en habituales tuyas.",
    cambios: [
      "Cero comisión por reserva.",
      "Tu base de clientas, en tus manos y exportable cuando quieras.",
      "Una transición gradual, sin perder reservas por el camino.",
    ],
    nivel: "Auge.",
    cta: "Recuperar mis clientas",
  },
  {
    id: "abrir",
    frase: "Acabo de abrir (o estoy a punto)",
    titular: "Empieza como si llevaras diez años, no como si acabaras de abrir.",
    texto: "Estás eligiendo local, nombre y cómo presentarte. Es el mejor momento para hacerlo bien una sola vez, en lugar de montar algo barato y rehacerlo en un año. Te dejamos la web, las reservas y las reseñas funcionando desde el primer día.",
    cambios: [
      "Imagen profesional desde la apertura.",
      "Reservas online desde tu primera clienta.",
      "Reseñas desde la primera semana, que es cuando más las necesitas.",
    ],
    nivel: "Cimiento. Cuando crezcas, subes de nivel pagando solo la diferencia.",
    cta: "Abrir con buen pie",
  },
  {
    id: "atras",
    frase: "Llevo años y mi imagen se ha quedado atrás",
    titular: "Tu trabajo lleva años ganándose la confianza. Que Google lo refleje.",
    texto: "Tus clientas de siempre ya te conocen. Las nuevas te buscan en Google antes de entrar, y ahí es donde hoy se deciden. Ponemos tu imagen al día sin que tengas que entender de tecnología: lo montamos todo, te lo explicamos en media hora y seguimos a tu lado cada mes.",
    cambios: [
      "Reseñas recientes que cuentan lo que tus clientas ya saben.",
      "Reservas online para las más jóvenes; las de siempre pueden seguir llamando.",
      "Una sola persona a la que escribir si tienes cualquier duda.",
    ],
    nivel: "Auge.",
    cta: "Poner mi salón al día",
    nota: {
      titulo: "¿Eres la hija o el hijo que quiere modernizar el salón familiar?",
      texto: "Te damos un resumen claro para presentarlo en casa: qué cambia, cuánto cuesta y qué garantía tiene. Y si queréis, hacemos la llamada de diagnóstico con toda la familia.",
    },
  },
  {
    id: "crecer",
    frase: "Quiero crecer: más nivel, más centros",
    titular: "Tu salón ya es referente. Que se note en cada pantalla.",
    texto: "Has construido algo sólido y buscas el siguiente paso: un segundo centro, más visibilidad o una imagen a la altura de tus precios. Cénit suma al sistema completo la gestión de Google y Meta Ads, dirección de contenido y fotografía, y una sesión estratégica al mes.",
    cambios: [
      "Publicidad medida en lo que importa: coste por reserva.",
      "Dirección creativa editorial, sin plantillas.",
      "Varios centros en un solo sistema (cada centro adicional, +50% de la mensualidad).",
    ],
    nivel: "Cénit.",
    cta: "Hablar de crecimiento",
  },
];

export default function Selector() {
  const items: AccordionItem[] = MOMENTOS.map((m) => ({
    id: m.id,
    header: `«${m.frase}»`,
    content: (
      <div>
        <p className="font-serif text-2xl text-stone">{m.titular}</p>
        <p className="mt-4 leading-relaxed text-stone/70">{m.texto}</p>

        <p className="mt-6 text-xs uppercase tracking-widest text-stone/45">
          Lo que más te va a cambiar
        </p>
        <ul className="mt-3 space-y-2">
          {m.cambios.map((c) => (
            <li key={c} className="leading-relaxed text-stone/75">
              — {c}
            </li>
          ))}
        </ul>

        {m.nota && (
          <div className="mt-6 rounded-2xl border border-burgundy/20 bg-burgundy/5 px-6 py-5">
            <p className="font-serif text-lg text-stone">{m.nota.titulo}</p>
            <p className="mt-2 text-sm leading-relaxed text-stone/70">
              {m.nota.texto}
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-stone/60">
          <span className="uppercase tracking-widest text-stone/45">
            Nivel recomendado:{" "}
          </span>
          {m.nivel}
        </p>

        <a
          href={whatsapp(`Hola, soy dueña de un salón y me identifico con "${m.frase}". Quiero saber más sobre AUGE.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-burgundy px-8 py-3 text-sm uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
        >
          {m.cta}
        </a>
      </div>
    ),
  }));

  return (
    <section id="momento" className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
            Cada salón está en un momento distinto. ¿Cuál es el tuyo?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-stone/70">
            Elige el que más se parezca a ti y te contamos qué cambiaría en
            tu día a día.
          </p>
        </div>

        <div className="mt-14">
          <Accordion items={items} defaultOpen={0} theme="light" />
        </div>
      </div>
    </section>
  );
}
