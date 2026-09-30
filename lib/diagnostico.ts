export type Area = "dependencia" | "agenda" | "clientas" | "digital";

export type Opcion = { texto: string; puntos: number; area?: Area };

export type Pregunta = {
  id: string;
  pregunta: string;
  tipo: "opciones" | "multiple" | "abierta";
  opciones?: Opcion[];
  placeholder?: string;
};

export const SEPARADOR_MULTIPLE = "|||";
export const OPCION_TODO_PASA_POR_MI = "Realmente, casi todo sigue pasando por mí";

export const PREGUNTAS: Pregunta[] = [
  {
    id: "sensacion",
    pregunta: "Cuando piensas en tu negocio ahora mismo, ¿qué frase se parece más a lo que estás viviendo?",
    tipo: "opciones",
    opciones: [
      { texto: "Está funcionando bien y tengo bastante control.", puntos: 0 },
      { texto: "Funciona, pero siento que estoy pendiente de demasiadas cosas.", puntos: 1 },
      { texto: "Crece, pero cada vez me necesita más.", puntos: 2 },
      { texto: "Estoy todo el día resolviendo cosas y no consigo salir de ahí.", puntos: 3 },
    ],
  },
  {
    id: "siete_dias",
    pregunta: "Si mañana desaparecieras durante 7 días, ¿qué pasaría con tu negocio?",
    tipo: "opciones",
    opciones: [
      { texto: "Prácticamente nada. El equipo y los sistemas seguirían funcionando.", puntos: 0, area: "dependencia" },
      { texto: "Algunas cosas se complicarían, pero podrían resolverlas.", puntos: 1, area: "dependencia" },
      { texto: "Se acumularían mensajes, reservas y decisiones.", puntos: 2, area: "dependencia" },
      { texto: "Muchas cosas se pararían directamente.", puntos: 3, area: "dependencia" },
    ],
  },
  {
    id: "whatsapp_nueva",
    pregunta:
      'Alguien nuevo te escribe: "Hola, ¿cuánto cuesta la manicura y cuándo tienes hueco?" ¿Qué ocurre normalmente?',
    tipo: "opciones",
    opciones: [
      { texto: "Puede consultar precios y reservar sin hablar conmigo.", puntos: 0, area: "agenda" },
      { texto: "Le respondemos con cierta rapidez.", puntos: 1, area: "agenda" },
      { texto: "Tengo que contestar yo cuando puedo.", puntos: 2, area: "agenda" },
      { texto: "A veces pasan horas —o incluso un día— hasta que puedo responder.", puntos: 3, area: "agenda" },
    ],
  },
  {
    id: "recorrido_reserva",
    pregunta: "¿Cómo llega alguien desde que decide reservar contigo hasta que tiene su cita?",
    tipo: "opciones",
    opciones: [
      { texto: "Reserva online y recibe automáticamente toda la información.", puntos: 0, area: "agenda" },
      { texto: "Reserva online, pero después tengo que hacer algunas cosas manualmente.", puntos: 1, area: "agenda" },
      { texto: "Me escribe y yo gestiono la reserva.", puntos: 2, area: "agenda" },
      { texto: "Depende del día: WhatsApp, Instagram, llamadas, agenda física…", puntos: 3, area: "agenda" },
    ],
  },
  {
    id: "tareas_delegables",
    pregunta:
      "¿Qué cosas haces tú que, si te paras a pensarlo, otra persona o un sistema podría hacer por ti? Selecciona todas las que correspondan.",
    tipo: "multiple",
    opciones: [
      { texto: "Responder preguntas repetitivas", puntos: 0.3, area: "agenda" },
      { texto: "Gestionar reservas", puntos: 0.3, area: "agenda" },
      { texto: "Confirmar citas", puntos: 0.3, area: "agenda" },
      { texto: "Recordar citas", puntos: 0.3, area: "agenda" },
      { texto: "Pedir reseñas", puntos: 0.3, area: "clientas" },
      { texto: "Volver a contactar con quienes dejaron de venir", puntos: 0.3, area: "clientas" },
      { texto: "Crear o publicar contenido", puntos: 0.3, area: "digital" },
      { texto: "Responder Instagram", puntos: 0.3, area: "digital" },
      { texto: "Hacer seguimiento de tu clientela", puntos: 0.3, area: "clientas" },
      { texto: OPCION_TODO_PASA_POR_MI, puntos: 3, area: "dependencia" },
    ],
  },
  {
    id: "reactivacion",
    pregunta: "Piensa en alguien que vino varias veces y después dejó de aparecer. ¿Qué ocurre normalmente?",
    tipo: "opciones",
    opciones: [
      { texto: "Tenemos un sistema que detecta cuándo debería volver y le contactamos.", puntos: 0, area: "clientas" },
      { texto: "Lo tenemos controlado de alguna manera, aunque no siempre somos constantes.", puntos: 1, area: "clientas" },
      { texto: "Si nos acordamos, le escribimos.", puntos: 2, area: "clientas" },
      { texto: "Normalmente no hacemos nada. Si quiere volver, ya volverá.", puntos: 3, area: "clientas" },
    ],
  },
  {
    id: "resenas",
    pregunta: "Después de una buena experiencia, ¿qué suele pasar con las reseñas?",
    tipo: "opciones",
    opciones: [
      { texto: "Se solicitan automáticamente en el momento adecuado.", puntos: 0, area: "clientas" },
      { texto: "Las pedimos, pero manualmente.", puntos: 1, area: "clientas" },
      { texto: "Tenemos buena clientela, pero pocas personas dejan reseña.", puntos: 2, area: "clientas" },
      { texto: "Casi nunca las pedimos.", puntos: 3, area: "clientas" },
    ],
  },
  {
    id: "tarea_eliminar",
    pregunta: "Si tuvieras que eliminar una sola tarea de tu día a día para siempre, ¿cuál elegirías?",
    tipo: "opciones",
    opciones: [
      { texto: "Contestar mensajes.", puntos: 1.5, area: "agenda" },
      { texto: "Gestionar reservas y cambios de citas.", puntos: 1.5, area: "agenda" },
      { texto: "Estar pendiente de Instagram y contenido.", puntos: 1.5, area: "digital" },
      { texto: "Perseguir a clientes para reseñas y seguimiento.", puntos: 1.5, area: "clientas" },
      { texto: "Resolver pequeñas cosas que solo puedo resolver yo.", puntos: 2, area: "dependencia" },
      { texto: "Tener que estar pendiente de todo.", puntos: 3, area: "dependencia" },
    ],
  },
  {
    id: "momento_negocio",
    pregunta: "¿En qué momento está ahora mismo tu negocio?",
    tipo: "opciones",
    opciones: [
      { texto: "Estoy empezando y todavía estoy construyendo mi cartera de clientas.", puntos: 0 },
      { texto: "Ya tengo una cartera estable y quiero organizar mejor el negocio.", puntos: 0 },
      { texto: "Tengo una agenda bastante llena y quiero que funcione mejor sin depender tanto de mí.", puntos: 0 },
      { texto: "Tengo equipo o profesionales y quiero profesionalizar y escalar la estructura.", puntos: 0 },
      { texto: "Tengo uno o varios centros y estoy pensando en crecer.", puntos: 0 },
    ],
  },
  {
    id: "coste_invisible",
    pregunta: "¿Qué crees que estás perdiendo hoy por tener tantas cosas dependiendo de ti?",
    tipo: "opciones",
    opciones: [
      { texto: "Tiempo.", puntos: 1.5 },
      { texto: "Oportunidades de conseguir clientes nuevos.", puntos: 1.5, area: "agenda" },
      { texto: "Clientela que podría volver.", puntos: 1.5, area: "clientas" },
      { texto: "Tranquilidad y capacidad para desconectar.", puntos: 1.5, area: "dependencia" },
      { texto: "Posibilidades de hacer crecer el negocio.", puntos: 1.5 },
      { texto: "No estoy segura, pero sé que no quiero seguir así.", puntos: 2 },
    ],
  },
  {
    id: "futuro",
    pregunta: "Imagina que dentro de 6 meses tu negocio sigue exactamente como está hoy. ¿Qué te preocuparía más?",
    tipo: "opciones",
    opciones: [
      { texto: "Seguir siendo imprescindible para todo.", puntos: 2.5, area: "dependencia" },
      { texto: "No tener tiempo para crecer.", puntos: 2, area: "dependencia" },
      { texto: "Seguir perdiendo oportunidades por no poder atenderlas.", puntos: 2, area: "agenda" },
      { texto: "Sentir que trabajo cada vez más, pero no avanzo.", puntos: 2.5, area: "dependencia" },
      { texto: "Nada especialmente. Ahora mismo estoy bastante cómoda así.", puntos: 0 },
    ],
  },
  {
    id: "dejar_de_hacer",
    pregunta: "Si pudieras conseguir que una sola cosa de tu negocio dejara de depender de ti, ¿cuál sería?",
    tipo: "abierta",
    placeholder: "Por ejemplo: que pudieran reservar sin escribirme…",
  },
];

export const PUNTOS_MAXIMOS = PREGUNTAS.reduce((sum, p) => {
  if (p.tipo === "abierta") return sum;
  const puntos = (p.opciones ?? []).map((o) => o.puntos);
  if (p.tipo === "multiple") return sum + puntos.reduce((a, b) => a + b, 0);
  return sum + Math.max(0, ...puntos);
}, 0);

export type Nivel = { id: number; titulo: string; texto: string };

export const NIVELES: Nivel[] = [
  {
    id: 1,
    titulo: "Tu negocio depende demasiado de ti.",
    texto:
      "No porque esté mal organizado. De hecho, probablemente has conseguido que funcione precisamente porque estás encima de todo. El problema es otro: has construido un negocio que funciona contigo dentro. Hoy todavía hay demasiadas cosas que pasan por ti, y mientras tú lo sostienes todo, hay una parte de tu negocio que no puede crecer contigo.",
  },
  {
    id: 2,
    titulo: "Funciona. Pero todavía depende demasiado de ti.",
    texto:
      "Ya tienes cosas resueltas, y se nota. Pero conviven con procesos que siguen pasando por tus manos porque nunca ha habido tiempo de organizarlos de otra forma. El siguiente paso no es trabajar más. Es quitarte de en medio en los sitios correctos.",
  },
  {
    id: 3,
    titulo: "Tu negocio ya tiene una base sólida.",
    texto:
      "Gran parte de tu día a día ya funciona sin que tengas que sostenerlo tú personalmente. Ahora el reto es distinto: conectar y pulir lo que ya tienes para que acompañe el crecimiento, en vez de frenarlo.",
  },
];

export const FUGAS: Record<Area, { titulo: string; texto: string }> = {
  dependencia: {
    titulo: "Dependencia operativa",
    texto:
      "Hay demasiadas decisiones pequeñas que solo puedes tomar tú. Y mientras eso siga así, cualquier crecimiento significa más carga para ti, no menos.",
  },
  agenda: {
    titulo: "Agenda y reservas",
    texto:
      "Tu negocio ya tiene clientela y actividad. El siguiente paso no parece ser conseguir más. Parece ser que reservar, confirmar y recordar citas deje de pasar por ti cada vez.",
  },
  clientas: {
    titulo: "Relación con tu clientela",
    texto:
      "Hay clientela que ya confió en ti y que se está perdiendo por el camino: sin seguimiento, sin reseñas, sin un motivo para volver. Ese hilo se puede recuperar sin que tengas que acordarte tú cada vez.",
  },
  digital: {
    titulo: "Presencia digital",
    texto:
      "Entre Instagram, contenido y responder mensajes, tu presencia online te ocupa más tiempo del que debería sin devolverte lo que inviertes en ella.",
  },
};

export const INTENCION_OPCIONES = [
  { texto: "Solo quiero entender qué podría mejorar.", valor: "curiosidad" },
  { texto: "Estoy buscando soluciones y quiero comparar opciones.", valor: "investigacion" },
  { texto: "Quiero solucionarlo cuanto antes.", valor: "alta" },
  { texto: "Si encuentro algo que tenga sentido para mi negocio, estoy preparada para invertir.", valor: "alta" },
];

function opcionesSeleccionadas(respuesta: string) {
  return respuesta.split(SEPARADOR_MULTIPLE).filter(Boolean);
}

export function calcularNota(respuestas: Record<string, string>) {
  const puntosTotales = PREGUNTAS.reduce((sum, p) => {
    const respuesta = respuestas[p.id];
    if (!respuesta || p.tipo === "abierta") return sum;
    if (p.tipo === "multiple") {
      const seleccionadas = opcionesSeleccionadas(respuesta);
      const puntos = (p.opciones ?? [])
        .filter((o) => seleccionadas.includes(o.texto))
        .reduce((s, o) => s + o.puntos, 0);
      return sum + puntos;
    }
    const opcion = p.opciones?.find((o) => o.texto === respuesta);
    return sum + (opcion?.puntos ?? 0);
  }, 0);

  return PUNTOS_MAXIMOS > 0 ? Math.round(100 - (puntosTotales / PUNTOS_MAXIMOS) * 100) : 100;
}

export function calcularNivel(nota: number): Nivel {
  return nota >= 70 ? NIVELES[2] : nota >= 40 ? NIVELES[1] : NIVELES[0];
}

export function calcularAreas(respuestas: Record<string, string>): Record<Area, number> {
  const areas: Record<Area, number> = { dependencia: 0, agenda: 0, clientas: 0, digital: 0 };

  for (const p of PREGUNTAS) {
    const respuesta = respuestas[p.id];
    if (!respuesta || !p.opciones) continue;

    if (p.tipo === "multiple") {
      const seleccionadas = opcionesSeleccionadas(respuesta);
      for (const o of p.opciones) {
        if (o.area && seleccionadas.includes(o.texto)) areas[o.area] += o.puntos;
      }
    } else {
      const opcion = p.opciones.find((o) => o.texto === respuesta);
      if (opcion?.area) areas[opcion.area] += opcion.puntos;
    }
  }

  return areas;
}

export function calcularFugaPrincipal(respuestas: Record<string, string>) {
  const areas = calcularAreas(respuestas);
  const [areaTop] = (Object.entries(areas) as [Area, number][]).sort((a, b) => b[1] - a[1])[0];
  return { area: areaTop, ...FUGAS[areaTop] };
}
