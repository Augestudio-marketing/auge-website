"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

type Opcion = { texto: string; puntos: number };

type Pregunta = {
  id: string;
  pregunta: string;
  tipo: "opciones" | "escala" | "abierta";
  opciones?: Opcion[];
};

const PREGUNTAS: Pregunta[] = [
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

const PUNTOS_MAXIMOS = PREGUNTAS.reduce((sum, p) => {
  if (p.tipo === "escala") return sum + 3;
  if (p.tipo === "abierta") return sum;
  return sum + Math.max(...(p.opciones ?? []).map((o) => o.puntos));
}, 0);

const NIVELES = [
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

type Paso = "intro" | number | "lead" | "resultado";

export default function QuizCTA() {
  const [paso, setPaso] = useState<Paso>("intro");
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [abiertaActual, setAbiertaActual] = useState("");
  const [lead, setLead] = useState({
    nombre: "",
    email: "",
    instagramWeb: "",
    whatsapp: "",
    consentimiento: false,
  });

  function avanzar(actual: number) {
    if (actual + 1 < PREGUNTAS.length) {
      setPaso(actual + 1);
    } else {
      setPaso("lead");
    }
  }

  function responderOpciones(id: string, texto: string) {
    setRespuestas({ ...respuestas, [id]: texto });
    avanzar(typeof paso === "number" ? paso : 0);
  }

  function responderEscala(id: string, valor: number) {
    setRespuestas({ ...respuestas, [id]: String(valor) });
    avanzar(typeof paso === "number" ? paso : 0);
  }

  function responderAbierta(id: string) {
    setRespuestas({ ...respuestas, [id]: abiertaActual });
    avanzar(typeof paso === "number" ? paso : 0);
  }

  const puntosTotales = PREGUNTAS.reduce((sum, p) => {
    const respuesta = respuestas[p.id];
    if (!respuesta) return sum;
    if (p.tipo === "escala") return sum + (Number(respuesta) / 10) * 3;
    if (p.tipo === "abierta") return sum;
    const opcion = p.opciones?.find((o) => o.texto === respuesta);
    return sum + (opcion?.puntos ?? 0);
  }, 0);

  const nota =
    PUNTOS_MAXIMOS > 0 ? Math.round(100 - (puntosTotales / PUNTOS_MAXIMOS) * 100) : 100;

  const nivel = nota >= 70 ? NIVELES[2] : nota >= 40 ? NIVELES[1] : NIVELES[0];

  function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPaso("resultado");

    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: lead.nombre,
        email: lead.email,
        instagramWeb: lead.instagramWeb,
        whatsapp: lead.whatsapp,
        nota,
        nivel: nivel.titulo,
        fugaPrincipal: nivel.titulo,
        fugaSecundaria: respuestas.dejar_de_hacer ?? "",
        respuestas,
      }),
    }).catch((error) => console.error("Error guardando el diagnóstico", error));
  }

  const resumenWhatsapp = `Hola, soy ${lead.nombre || ""}. Acabo de hacer el diagnóstico de AUGE (nivel: ${nivel.titulo}) y me gustaría reservar mi sesión.`;
  const whatsappHref = "https://wa.me/34613803022?text=" + encodeURIComponent(resumenWhatsapp);

  const bookingHref =
    "https://app.augestudio.es/reservar?" +
    new URLSearchParams({
      nombre: lead.nombre,
      email: lead.email,
      whatsapp: lead.whatsapp,
    }).toString();

  const preguntaActual = typeof paso === "number" ? PREGUNTAS[paso] : null;

  return (
    <section id="diagnostico" className="bg-burgundy px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        {paso === "intro" && (
          <Reveal>
            <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
              ¿Cuánto depende
              <br />
              <span className="italic">tu negocio de ti?</span>
            </h2>
            <p className="mx-auto mt-4 text-sm uppercase tracking-widest text-cream/50">
              Descúbrelo en 4 minutos.
            </p>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/70">
              Entre Booksy, WhatsApp, Instagram y la libreta de siempre, es
              fácil perder de vista cuántas cosas dependen todavía de ti.
              Responde 12 preguntas pensadas para negocios como el tuyo y
              descubre qué parte de tu día a día ya podría funcionar sin que
              tengas que estar encima.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-cream/45">
              12 preguntas · 4 minutos · resultado inmediato
            </p>

            <button
              type="button"
              onClick={() => setPaso(0)}
              className="mt-10 inline-block rounded-full border border-cream bg-cream px-10 py-4 text-sm uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-transparent hover:text-cream"
            >
              Empezar diagnóstico →
            </button>
          </Reveal>
        )}

        {preguntaActual && typeof paso === "number" && (
          <div className="text-left">
            <p className="text-center text-xs uppercase tracking-widest text-cream/50">
              Pregunta {paso + 1} de {PREGUNTAS.length}
            </p>
            <div className="mx-auto mt-4 h-1 max-w-xs overflow-hidden rounded-full bg-cream/15">
              <div
                className="h-full rounded-full bg-cream transition-all"
                style={{ width: `${((paso + 1) / PREGUNTAS.length) * 100}%` }}
              />
            </div>

            <h3 className="mt-10 text-center font-display text-2xl italic text-cream sm:text-3xl">
              {preguntaActual.pregunta}
            </h3>

            {preguntaActual.tipo === "opciones" && (
              <div className="mt-8 space-y-3">
                {preguntaActual.opciones?.map((opcion) => (
                  <button
                    key={opcion.texto}
                    type="button"
                    onClick={() => responderOpciones(preguntaActual.id, opcion.texto)}
                    className="block w-full rounded-2xl border border-cream/20 px-6 py-4 text-left text-cream transition-colors hover:border-cream hover:bg-cream/10"
                  >
                    {opcion.texto}
                  </button>
                ))}
              </div>
            )}

            {preguntaActual.tipo === "escala" && (
              <div className="mt-8">
                <div className="flex flex-wrap justify-center gap-2">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => responderEscala(preguntaActual.id, n)}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-cream hover:bg-cream/10"
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-xs uppercase tracking-widest text-cream/40">
                  <span>Ni se enteran</span>
                  <span>Se para todo</span>
                </div>
              </div>
            )}

            {preguntaActual.tipo === "abierta" && (
              <div className="mt-8">
                <textarea
                  value={abiertaActual}
                  onChange={(e) => setAbiertaActual(e.target.value)}
                  rows={3}
                  placeholder="Escribe tu respuesta..."
                  className="w-full rounded-2xl border border-cream/20 bg-transparent px-6 py-4 text-cream outline-none placeholder:text-cream/40 focus:border-cream"
                />
                <button
                  type="button"
                  disabled={!abiertaActual.trim()}
                  onClick={() => responderAbierta(preguntaActual.id)}
                  className="mt-4 w-full rounded-full border border-cream bg-cream py-3 text-sm uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-transparent hover:text-cream disabled:opacity-40"
                >
                  Continuar →
                </button>
              </div>
            )}

            {paso > 0 && (
              <button
                type="button"
                onClick={() => setPaso(paso - 1)}
                className="mt-6 text-xs uppercase tracking-widest text-cream/50 hover:text-cream"
              >
                ← Volver
              </button>
            )}
          </div>
        )}

        {paso === "lead" && (
          <div className="grain mx-auto max-w-md rounded-3xl bg-cream px-8 py-10 text-left md:px-10">
            <p className="text-center font-display text-2xl italic text-stone">
              Hemos analizado tus respuestas.
            </p>
            <p className="mt-3 text-center text-sm leading-relaxed text-stone/60">
              Hay varias áreas de tu negocio que podrías dejar de gestionar
              personalmente. ¿Quieres ver tu diagnóstico completo?
            </p>

            <form onSubmit={handleLeadSubmit} className="mt-8 space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/50">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={lead.nombre}
                  onChange={(e) => setLead({ ...lead, nombre: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/50">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/50">
                  Instagram o web
                </label>
                <input
                  type="text"
                  value={lead.instagramWeb}
                  onChange={(e) => setLead({ ...lead, instagramWeb: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/50">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  value={lead.whatsapp}
                  onChange={(e) => setLead({ ...lead, whatsapp: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>

              <label className="flex items-start gap-3 text-xs leading-relaxed text-stone/60">
                <input
                  type="checkbox"
                  required
                  checked={lead.consentimiento}
                  onChange={(e) => setLead({ ...lead, consentimiento: e.target.checked })}
                  className="mt-0.5"
                />
                Acepto recibir comunicaciones de AUGE sobre mi
                diagnóstico.
              </label>

              <button
                type="submit"
                className="w-full rounded-full border border-stone bg-stone py-3 text-sm uppercase tracking-widest text-cream transition-colors duration-300 hover:bg-transparent hover:text-stone"
              >
                Ver mi resultado →
              </button>
            </form>
          </div>
        )}

        {paso === "resultado" && (
          <div className="grain mx-auto max-w-lg rounded-3xl bg-cream px-8 py-10 text-left md:px-12">
            <p className="text-center text-xs uppercase tracking-widest text-stone/45">
              Tu diagnóstico, {lead.nombre}
            </p>
            <p className="mt-4 text-center text-xs uppercase tracking-widest text-burgundy">
              Nivel {nivel.id}
            </p>
            <p className="mt-2 text-center font-display text-3xl italic text-burgundy sm:text-4xl">
              {nivel.titulo}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-stone/70">{nivel.texto}</p>

            <div className="mt-10 border-t border-stone/15 pt-8 text-center">
              <p className="font-display text-xl italic text-stone">
                ¿Quieres que lo veamos juntas?
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-stone/60">
                Si quieres, podemos revisar tu resultado contigo y enseñarte
                qué cambiaríamos primero en tu negocio.
              </p>
            </div>

            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-full border border-burgundy bg-burgundy py-3 text-center text-sm uppercase tracking-widest text-cream transition-colors duration-300 hover:bg-transparent hover:text-burgundy"
            >
              Reservar diagnóstico AUGE →
            </a>
            <p className="mt-2 text-center text-xs uppercase tracking-widest text-stone/40">
              30 minutos · Gratis · Sin compromiso
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-xs uppercase tracking-widest text-stone/45 hover:text-burgundy"
            >
              Prefiero escribir por WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
