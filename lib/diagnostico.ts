export type Opcion = { texto: string; puntos: number };

export type Pregunta = {
  id: string;
  pregunta: string;
  tipo: "opciones" | "escala" | "abierta";
  opciones?: Opcion[];
};

export const PREGUNTAS: Pregunta[] = [
  {
    id: "reserva",
    pregunta: "Cuando alguien quiere reservar contigo, ¿por dónde te suele llegar ese mensaje?",
    tipo: "opciones",
    opciones: [
      { texto: "Me escribe por Instagram o WhatsApp y se lo gestiono yo.", puntos: 2.5 },
      { texto: "Reserva directamente en Booksy, mi web o mi calendario online.", puntos: 0 },
      { texto: "Depende del día: a veces por redes, a veces me paran por la calle.", puntos: 3 },
      { texto: "Me llama por teléfono.", puntos: 2 },
    ],
  },
  {
    id: "confirmacion",
    pregunta: "La noche antes de una cita, ¿qué suele pasar?",
    tipo: "opciones",
    opciones: [
      { texto: "Le escribo yo un mensaje para asegurarme de que se acuerda.", puntos: 2.5 },
      { texto: "Cruzo los dedos para que no se le olvide.", puntos: 3 },
      { texto: "El recordatorio sale solo, no tengo que pensarlo.", puntos: 0 },
      { texto: "Tengo recordatorios automáticos, pero igual reviso por si acaso.", puntos: 1.5 },
    ],
  },
  {
    id: "reactivacion",
    pregunta: "Piensa en alguien que antes venía cada mes y ya no aparece. ¿Qué pasó?",
    tipo: "opciones",
    opciones: [
      { texto: "En algún momento me acuerdo y le escribo yo.", puntos: 2 },
      { texto: "Sinceramente, ni me había dado cuenta hasta leer esta pregunta.", puntos: 3 },
      { texto: "Algo se activa solo y vuelve a saber de nosotros sin que yo intervenga.", puntos: 0 },
    ],
  },
  {
    id: "resenas",
    pregunta: "Acaba de irse alguien encantada con el resultado. ¿Le llega algo pidiéndole una reseña?",
    tipo: "opciones",
    opciones: [
      { texto: "Se lo pido yo, si me acuerdo antes de que salga por la puerta.", puntos: 2 },
      { texto: "Sí, siempre, sin que tenga que acordarme.", puntos: 0 },
      { texto: "Casi nunca, se me pasa entre una cosa y otra.", puntos: 3 },
    ],
  },
  {
    id: "repetitivas",
    pregunta:
      "Esta semana, ¿cuántas veces has escrito algo como \"sí, tenemos hueco el jueves\" o \"el precio es...\" por WhatsApp o Instagram?",
    tipo: "opciones",
    opciones: [
      { texto: "Un par de veces, lo normal.", puntos: 1.5 },
      { texto: "Constantemente. A veces siento que es casi un segundo trabajo.", puntos: 3 },
      { texto: "Ninguna, eso ya lo resuelve otra cosa por mí.", puntos: 0 },
    ],
  },
  {
    id: "web_reserva",
    pregunta: "Si apagaras el móvil dos horas ahora mismo, ¿alguien podría reservar contigo igualmente?",
    tipo: "opciones",
    opciones: [
      { texto: "Sí, sin ningún problema.", puntos: 0 },
      { texto: "Solo si ya me conoce y sabe que puede dejarme un mensaje para luego.", puntos: 1.5 },
      { texto: "No, tendría que esperar a que yo lo vea.", puntos: 3 },
    ],
  },
  {
    id: "disponibilidad",
    pregunta: "Un día te pones mala y no puedes abrir. ¿Qué pasa con las citas de ese día?",
    tipo: "opciones",
    opciones: [
      { texto: "Tengo que escribir una a una para avisar y reorganizar.", puntos: 2.5 },
      { texto: "Se genera un pequeño lío y alguien se molesta.", puntos: 3 },
      { texto: "Se reorganiza casi solo, o alguien de mi equipo lo resuelve sin mí.", puntos: 0 },
    ],
  },
  {
    id: "herramientas",
    pregunta: "Entre Booksy, Instagram, WhatsApp y la libreta de siempre, ¿cómo llevas el control de todo?",
    tipo: "opciones",
    opciones: [
      { texto: "Cada cosa va por su lado. Alguna vez se me han cruzado dos citas.", puntos: 3 },
      { texto: "Todo está conectado, tengo una vista clara de lo que pasa cada día.", puntos: 0 },
      { texto: "Más o menos, aunque tengo que mirar en varios sitios a la vez.", puntos: 1.5 },
      { texto: "Prefiero no pensarlo demasiado.", puntos: 2 },
    ],
  },
  {
    id: "churn_conocido",
    pregunta: "Si te preguntara ahora mismo cuántas personas han dejado de venir en los últimos 6 meses, ¿sabrías decírmelo?",
    tipo: "opciones",
    opciones: [
      { texto: "Una idea aproximada.", puntos: 1 },
      { texto: "Sí, tengo esa cifra bastante clara.", puntos: 0 },
      { texto: "Ni idea, la verdad.", puntos: 2 },
    ],
  },
  {
    id: "escala_dependencia",
    pregunta: "Si desaparecieras una semana entera, del 1 al 10, ¿cuánto se notaría en tu negocio?",
    tipo: "escala",
  },
  {
    id: "picos_demanda",
    pregunta:
      "Mañana te etiquetan en un vídeo que se hace viral y te llegan 30 mensajes pidiendo cita. ¿Qué es lo primero que sientes?",
    tipo: "opciones",
    opciones: [
      { texto: "Que voy a tener que organizarme un fin de semana entero para no perder nada.", puntos: 1.5 },
      { texto: "Ilusión: lo tengo todo listo para absorber esa demanda.", puntos: 0 },
      { texto: "Agobio. Sé que se me van a escapar mensajes por el camino.", puntos: 3 },
    ],
  },
  {
    id: "dejar_de_hacer",
    pregunta: "Si mañana pudieras dejar de encargarte tú de UNA sola cosa en tu negocio, ¿cuál sería?",
    tipo: "abierta",
  },
];

export const PUNTOS_MAXIMOS = PREGUNTAS.reduce((sum, p) => {
  if (p.tipo === "escala") return sum + 3;
  if (p.tipo === "abierta") return sum;
  return sum + Math.max(...(p.opciones ?? []).map((o) => o.puntos));
}, 0);

export type Nivel = { id: number; titulo: string; texto: string };

export const NIVELES: Nivel[] = [
  {
    id: 1,
    titulo: "Todo pasa por ti.",
    texto:
      "Tu negocio funciona, pero demasiadas cosas dependen todavía de que estés pendiente. Reservas, mensajes, seguimiento, reseñas... Hay oportunidades para automatizar y conectar procesos.",
  },
  {
    id: 2,
    titulo: "Funciona. Pero podría funcionar solo.",
    texto:
      "Ya tienes herramientas y procesos, pero todavía hay demasiadas piezas desconectadas. El siguiente paso no es añadir más cosas. Es hacer que las que ya tienes trabajen juntas.",
  },
  {
    id: 3,
    titulo: "Tu negocio ya tiene sistema.",
    texto:
      "Tienes una base sólida y una buena estructura. Ahora toca optimizar, conectar y hacer que esa estructura acompañe el crecimiento.",
  },
];

export function calcularNota(respuestas: Record<string, string>) {
  const puntosTotales = PREGUNTAS.reduce((sum, p) => {
    const respuesta = respuestas[p.id];
    if (!respuesta) return sum;
    if (p.tipo === "escala") return sum + (Number(respuesta) / 10) * 3;
    if (p.tipo === "abierta") return sum;
    const opcion = p.opciones?.find((o) => o.texto === respuesta);
    return sum + (opcion?.puntos ?? 0);
  }, 0);

  return PUNTOS_MAXIMOS > 0 ? Math.round(100 - (puntosTotales / PUNTOS_MAXIMOS) * 100) : 100;
}

export function calcularNivel(nota: number): Nivel {
  return nota >= 70 ? NIVELES[2] : nota >= 40 ? NIVELES[1] : NIVELES[0];
}
