// Fuente única de precios y contenido de los planes.
// Todo lo que aparece en /planes (resumen, planes, cuota, comparativa) sale de aquí.

export type Precio = {
  habitual: string;
  actual: string;
};

export type Pieza = {
  titulo: string;
  texto: string[];
  destacado?: string[];
  nota?: string;
};

export type Plan = {
  id: "base" | "crecimiento" | "escala";
  nombre: string;
  titular: [string, string];
  resumen: string;
  corto: string;
  descripcion: string;
  setup: Precio;
  cuota: Precio;
  cta: string;
  incluyeIntro?: string;
  incluye: Pieza[];
  idealPara: string;
  cuotaCubre: string;
  etiqueta?: string;
  notaPrecio?: string;
};

export const PAGO_SETUP = "50% al comenzar · 50% al finalizar la implementación";

export const NOTA_PUBLICIDAD =
  "La inversión publicitaria en Meta y Google no está incluida en la cuota mensual. La cuota de AUGE cubre la gestión, optimización y seguimiento de las campañas.";

export const PLANES: Plan[] = [
  {
    id: "base",
    nombre: "Base",
    titular: ["La base para que tu negocio", "funcione mejor."],
    resumen: "Tu marca, tu web y tu agenda conectadas en un mismo sistema.",
    corto: "Tu marca, tu web y tu agenda conectadas en un mismo sistema.",
    descripcion:
      "Todo lo esencial para profesionalizar la presencia digital de tu negocio y facilitar la gestión de tus citas.",
    setup: { habitual: "697 €", actual: "497 €" },
    cuota: { habitual: "129 €", actual: "97 €" },
    cta: "Quiero Base",
    incluye: [
      {
        titulo: "Branding e identidad de marca",
        texto: [
          "Definimos y adaptamos la identidad visual de tu negocio para que tu marca tenga una imagen coherente, reconocible y a la altura de lo que ofreces.",
        ],
      },
      {
        titulo: "Web de marca",
        texto: [
          "Una web diseñada alrededor de tu negocio, tus servicios y la experiencia que quieres ofrecer.",
        ],
      },
      {
        titulo: "Calendario de citas",
        texto: [
          "Tus clientas pueden consultar disponibilidad y reservar online sin depender de que estés disponible para responder.",
        ],
      },
      {
        titulo: "App de citas AUGE",
        texto: [
          "Tu sistema de reservas también está disponible desde la app de citas de AUGE.",
        ],
      },
      {
        titulo: "Recordatorios automáticos",
        texto: [
          "Recordatorios por email para ayudar a reducir olvidos y citas perdidas.",
        ],
      },
      {
        titulo: "Mantenimiento y soporte",
        texto: [
          "Mantenemos el sistema funcionando, atendemos pequeñas necesidades y realizamos ajustes dentro del alcance del plan.",
        ],
      },
    ],
    idealPara:
      "Negocios que quieren tener una presencia digital profesional y una agenda organizada sin seguir gestionando cada reserva manualmente.",
    cuotaCubre: "Mantenimiento · soporte · ajustes",
  },
  {
    id: "crecimiento",
    nombre: "Crecimiento",
    etiqueta: "Más elegido",
    titular: ["No solo organizamos.", "Hacemos que el sistema trabaje."],
    resumen:
      "Todo lo de Base, más automatización, seguimiento y una estrategia de contenido que evoluciona cada mes.",
    corto: "Todo lo de Base, más automatización, seguimiento y contenido cada mes.",
    descripcion:
      "Todo lo de Base, más automatización, seguimiento y una estrategia de contenido que evoluciona cada mes.",
    setup: { habitual: "1.047 €", actual: "847 €" },
    cuota: { habitual: "197 €", actual: "157 €" },
    cta: "Quiero Crecimiento",
    incluyeIntro: "Incluye todo Base y además",
    incluye: [
      {
        titulo: "Reservas automáticas",
        texto: [
          "Automatizamos el proceso alrededor de las reservas para reducir la gestión manual y facilitar que una clienta pueda reservar cuando le venga bien.",
        ],
      },
      {
        titulo: "Respuestas automáticas",
        texto: [
          "Las preguntas habituales pueden tener respuesta sin que tengas que interrumpir constantemente tu día.",
        ],
      },
      {
        titulo: "Sistema de reseñas",
        texto: [
          "Después de una cita, el sistema solicita la reseña en el momento adecuado para facilitar que más clientas compartan su experiencia.",
        ],
      },
      {
        titulo: "Recuperación de clientas",
        texto: [
          "Detectamos clientas que llevan tiempo sin volver y creamos seguimientos para volver a conectar con ellas.",
        ],
      },
      {
        titulo: "Planificación de contenidos",
        texto: [
          "Nos encargamos de planificar qué comunicar en tus redes cada mes. No se trata de publicar por publicar.",
          "Definimos los temas, formatos y contenidos que tienen sentido para tu negocio.",
        ],
      },
      {
        titulo: "Gestión de redes sociales",
        texto: [
          "Tú nos proporcionas el material disponible de tu negocio y nosotras nos encargamos de organizarlo, editarlo, adaptarlo y preparar las publicaciones.",
        ],
      },
      {
        titulo: "Análisis mensual",
        texto: [
          "Analizamos qué contenidos han funcionado, cuáles no y qué aprendizajes podemos aplicar al siguiente mes.",
          "El objetivo es que cada mes tengamos más claridad sobre qué merece la pena comunicar.",
        ],
      },
      {
        titulo: "Mantenimiento, soporte y optimización",
        texto: [
          "Seguimos cuidando el sistema y realizando ajustes y mejoras dentro del alcance del plan.",
        ],
      },
    ],
    idealPara:
      "Negocios que quieren dejar atrás la gestión improvisada y empezar a tener un sistema que cuide sus reservas, sus clientas y su comunicación de forma constante.",
    cuotaCubre:
      "Mantenimiento · soporte · contenido · análisis · automatización · seguimiento",
  },
  {
    id: "escala",
    nombre: "Escala",
    etiqueta: "El sistema completo",
    titular: ["Todo conectado.", "Tú, sin estar pendiente."],
    resumen:
      "El sistema completo de AUGE para gestionar marca, redes, automatización y captación desde un mismo lugar.",
    corto: "El sistema completo: marca, redes, automatización y captación.",
    descripcion:
      "El sistema completo de AUGE para gestionar marca, redes, automatización y captación desde un mismo lugar.",
    setup: { habitual: "1.757 €", actual: "1.557 €" },
    cuota: { habitual: "297 €", actual: "257 €" },
    cta: "Quiero Escala",
    notaPrecio: "Inversión publicitaria no incluida en la cuota.",
    incluyeIntro: "Incluye todo Crecimiento y además",
    incluye: [
      {
        titulo: "Gestión completa de redes",
        texto: [
          "Nos encargamos de la planificación, edición, adaptación y publicación del contenido.",
          "Tu negocio nos proporciona el material y AUGE lo convierte en una estrategia de contenido coherente con la marca.",
        ],
      },
      {
        titulo: "Estrategia de contenidos",
        texto: [
          "No publicamos por llenar el calendario. Analizamos qué está funcionando, qué necesita la marca y qué queremos conseguir con cada etapa de contenido.",
        ],
      },
      {
        titulo: "Meta Ads",
        texto: [
          "Creamos y gestionamos campañas publicitarias en Meta orientadas a captar nuevas oportunidades para el negocio.",
        ],
      },
      {
        titulo: "Google Ads",
        texto: [
          "Gestionamos campañas en Google para aparecer cuando potenciales clientas ya están buscando determinados servicios.",
        ],
        nota: NOTA_PUBLICIDAD,
      },
      {
        titulo: "Agente de WhatsApp",
        texto: [
          "Un agente de WhatsApp responde automáticamente a las preguntas habituales de las clientas, proporciona información sobre servicios y acompaña el proceso de atención y reserva.",
        ],
        destacado: ["Tu WhatsApp sigue atendiendo,", "aunque tú estés trabajando."],
      },
      {
        titulo: "Automatizaciones avanzadas",
        texto: [
          "Conectamos las diferentes partes del sistema para reducir tareas manuales y hacer que la información fluya entre web, agenda, WhatsApp, seguimiento y comunicación.",
        ],
      },
      {
        titulo: "Optimización continua",
        texto: [
          "Revisamos lo que está ocurriendo y utilizamos los datos y el comportamiento del sistema para detectar oportunidades de mejora.",
        ],
      },
    ],
    idealPara:
      "Negocios que quieren delegar no solo la parte técnica, sino también la gestión continua de su presencia digital, contenido, automatización y captación.",
    cuotaCubre: "Gestión · contenido · captación · automatización · análisis · optimización",
  },
];

// Comparativa: nivel mínimo en el que aparece cada pieza (0 Base, 1 Crecimiento, 2 Escala).
export const COMPARATIVA: { pieza: string; desde: 0 | 1 | 2 }[] = [
  { pieza: "Branding e identidad", desde: 0 },
  { pieza: "Web de marca", desde: 0 },
  { pieza: "Calendario de citas", desde: 0 },
  { pieza: "App de citas AUGE", desde: 0 },
  { pieza: "Recordatorios", desde: 0 },
  { pieza: "Mantenimiento y soporte", desde: 0 },
  { pieza: "Optimización continua", desde: 0 },
  { pieza: "Reservas automáticas", desde: 1 },
  { pieza: "Respuestas automáticas", desde: 1 },
  { pieza: "Sistema de reseñas", desde: 1 },
  { pieza: "Recuperación de clientas", desde: 1 },
  { pieza: "Planificación de contenido", desde: 1 },
  { pieza: "Gestión de redes", desde: 1 },
  { pieza: "Análisis mensual", desde: 1 },
  { pieza: "Gestión completa de redes y publicación", desde: 2 },
  { pieza: "Estrategia de contenidos", desde: 2 },
  { pieza: "Meta Ads", desde: 2 },
  { pieza: "Google Ads", desde: 2 },
  { pieza: "Agente de WhatsApp", desde: 2 },
  { pieza: "Automatizaciones avanzadas", desde: 2 },
];

export const whatsappPlan = (plan: string) =>
  "https://wa.me/34613803022?text=" +
  encodeURIComponent(`Hola, me interesa el plan ${plan} de AUGE.`);

export const WHATSAPP_HABLAR =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero hablar con AUGE sobre qué plan encaja con mi negocio.");
