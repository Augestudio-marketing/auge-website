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
    pregunta: "Cuando una clienta quiere reservar, ¿qué suele hacer?",
    tipo: "opciones",
    opciones: [
      { texto: "Reserva directamente online.", puntos: 0 },
      { texto: "Me escribe por WhatsApp.", puntos: 2 },
      { texto: "Me llama.", puntos: 2 },
      { texto: "Depende del servicio.", puntos: 1 },
    ],
  },
  {
    id: "confirmacion",
    pregunta: "¿Quién confirma las citas?",
    tipo: "opciones",
    opciones: [
      { texto: "Se confirma automáticamente.", puntos: 0 },
      { texto: "Lo hago yo o mi equipo, manualmente.", puntos: 3 },
      { texto: "Algunas sí y otras no.", puntos: 1.5 },
    ],
  },
  {
    id: "reactivacion",
    pregunta: "Si una clienta no viene desde hace 6 meses...",
    tipo: "opciones",
    opciones: [
      { texto: "Tenemos un sistema que la vuelve a contactar.", puntos: 0 },
      { texto: "Lo hacemos cuando nos acordamos.", puntos: 2 },
      { texto: "No hacemos seguimiento.", puntos: 3 },
    ],
  },
  {
    id: "resenas",
    pregunta: "Después de una cita, ¿cómo pides una reseña?",
    tipo: "opciones",
    opciones: [
      { texto: "Automáticamente.", puntos: 0 },
      { texto: "Se lo pedimos nosotras.", puntos: 1.5 },
      { texto: "Cuando nos acordamos.", puntos: 2.5 },
      { texto: "No la pedimos.", puntos: 3 },
    ],
  },
  {
    id: "repetitivas",
    pregunta: "¿Cuánto tiempo pasas respondiendo preguntas que se repiten?",
    tipo: "opciones",
    opciones: [
      { texto: "Casi nada.", puntos: 0 },
      { texto: "Un rato cada día.", puntos: 1.5 },
      { texto: "Demasiado.", puntos: 3 },
    ],
  },
  {
    id: "web_reserva",
    pregunta: "¿Tu web permite reservar sin hablar contigo?",
    tipo: "opciones",
    opciones: [
      { texto: "Sí.", puntos: 0 },
      { texto: "Parcialmente.", puntos: 1.5 },
      { texto: "No.", puntos: 3 },
    ],
  },
  {
    id: "disponibilidad",
    pregunta: "¿Qué ocurre cuando tú no estás disponible?",
    tipo: "opciones",
    opciones: [
      { texto: "El negocio sigue funcionando prácticamente igual.", puntos: 0 },
      { texto: "Algunas cosas se paran.", puntos: 1.5 },
      { texto: "Se para bastante.", puntos: 3 },
    ],
  },
  {
    id: "herramientas",
    pregunta: "¿Tus herramientas están conectadas entre sí?",
    tipo: "opciones",
    opciones: [
      { texto: "Sí.", puntos: 0 },
      { texto: "Algunas.", puntos: 1.5 },
      { texto: "Cada cosa va por su lado.", puntos: 3 },
      { texto: "No sé.", puntos: 2 },
    ],
  },
  {
    id: "churn_conocido",
    pregunta: "¿Sabes cuántas clientas dejaron de venir durante los últimos 6 meses?",
    tipo: "opciones",
    opciones: [
      { texto: "Sí.", puntos: 0 },
      { texto: "Aproximadamente.", puntos: 1 },
      { texto: "No.", puntos: 2 },
    ],
  },
  {
    id: "escala_dependencia",
    pregunta: "¿Cuánto depende de ti el día a día? (1 = nada, 10 = todo)",
    tipo: "escala",
  },
  {
    id: "picos_demanda",
    pregunta: "Si mañana entraran 20 clientas nuevas...",
    tipo: "opciones",
    opciones: [
      { texto: "Estamos preparadas.", puntos: 0 },
      { texto: "Tendríamos que organizarnos.", puntos: 1.5 },
      { texto: "Sería bastante caótico.", puntos: 3 },
    ],
  },
  {
    id: "dejar_de_hacer",
    pregunta: "¿Qué es lo que más te gustaría dejar de hacer personalmente?",
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
              Tu negocio puede estar funcionando perfectamente y, aun así,
              depender demasiado de ti. Responde 12 preguntas y descubre qué
              partes de tu negocio siguen pasando por tus manos.
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
                  <span>Nada</span>
                  <span>Todo</span>
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
