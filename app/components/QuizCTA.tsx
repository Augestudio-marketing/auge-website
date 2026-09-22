"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const TIPOS_NEGOCIO = [
  "Clínica de medicina estética",
  "Centro de estética",
  "Peluquería",
  "Salón de uñas",
  "Pestañas y cejas",
  "Micropigmentación",
  "Spa o bienestar",
  "Barbería",
  "Otro",
];

const QUESTIONS: {
  id: string;
  pregunta: string;
  opciones: string[];
  dimension?: string;
}[] = [
  { id: "negocio", pregunta: "¿Qué tipo de negocio tienes?", opciones: TIPOS_NEGOCIO },
  {
    id: "equipo",
    pregunta: "¿Cuántas personas trabajáis en el negocio?",
    opciones: ["Solo yo", "2 a 4", "5 a 9", "10 o más"],
  },
  {
    id: "citas",
    pregunta: "¿Cuántas citas tenéis a la semana, aproximadamente?",
    opciones: ["Menos de 20", "Entre 20 y 50", "Entre 50 y 100", "Más de 100"],
  },
  {
    id: "reservas",
    pregunta: "¿Cómo os reservan hoy vuestras clientas?",
    opciones: ["WhatsApp o llamada", "Booksy o Treatwell", "App propia", "Libreta o papel"],
    dimension: "reservas",
  },
  {
    id: "whatsapp",
    pregunta: "¿Cuánto tardáis en contestar un WhatsApp fuera de horario?",
    opciones: ["Al momento", "Esa noche", "Al día siguiente", "A veces no contestamos"],
    dimension: "whatsapp",
  },
  {
    id: "resenas",
    pregunta: "¿Pedís reseñas después de cada visita?",
    opciones: ["Siempre", "A veces", "Nunca"],
    dimension: "resenas",
  },
  {
    id: "churn",
    pregunta: "¿Hacéis algo cuando una clienta habitual deja de venir?",
    opciones: ["Sí, la contactamos", "Nos damos cuenta tarde", "No"],
    dimension: "churn",
  },
  {
    id: "imagen",
    pregunta: "¿Cómo describirías vuestra web e Instagram hoy?",
    opciones: ["Nos representan", "Mejorables", "Los tenemos abandonados", "No tenemos web"],
    dimension: "imagen",
  },
  {
    id: "publicidad",
    pregunta: "¿Hacéis publicidad en Google o Meta?",
    opciones: [
      "Sí, gestionada y con seguimiento",
      "Sí, pero sin seguimiento de resultados",
      "No hacemos publicidad",
    ],
    dimension: "publicidad",
  },
  {
    id: "contenido",
    pregunta: "¿Con qué frecuencia publicáis contenido en redes?",
    opciones: ["Semanal y planificado", "Esporádico", "Casi nunca", "Nunca"],
    dimension: "contenido",
  },
  {
    id: "medicion",
    pregunta: "¿Revisáis vuestros números (facturación, citas perdidas, etc.)?",
    opciones: [
      "Cada mes, con datos claros",
      "De vez en cuando",
      "No los miramos",
      "No sabría decir nuestras cifras",
    ],
    dimension: "medicion",
  },
  {
    id: "preparacion",
    pregunta: "¿Qué tan preparado sientes que está tu negocio para crecer ahora mismo?",
    opciones: ["Muy preparado", "Con dudas", "No lo sé"],
  },
];

const FUGAS: Record<
  string,
  { titulo: string; frase: string; severidad: (o: string) => number; max: number }
> = {
  reservas: {
    titulo: "Pierdes clientas por cómo reservan hoy.",
    frase:
      "Sin reservas online claras, dependes del teléfono, del papel o de comisiones por cita.",
    severidad: (o) => ({ "Libreta o papel": 3, "Booksy o Treatwell": 2, "WhatsApp o llamada": 1, "App propia": 0 })[o] ?? 0,
    max: 3,
  },
  whatsapp: {
    titulo: "Pierdes clientas en la respuesta del WhatsApp.",
    frase: "Cada hora sin contestar es una clienta que puede reservar en otro sitio.",
    severidad: (o) => ({ "A veces no contestamos": 3, "Al día siguiente": 2, "Esa noche": 1, "Al momento": 0 })[o] ?? 0,
    max: 3,
  },
  resenas: {
    titulo: "Pierdes reputación por las reseñas que no llegan.",
    frase: "Las clientas contentas no dejan rastro si nadie les pide la reseña.",
    severidad: (o) => ({ Nunca: 2, "A veces": 1, Siempre: 0 })[o] ?? 0,
    max: 2,
  },
  churn: {
    titulo: "Pierdes clientas habituales sin darte cuenta.",
    frase: "Cuando alguien deja de venir y nadie lo nota, esa clienta no vuelve.",
    severidad: (o) => ({ No: 2, "Nos damos cuenta tarde": 1, "Sí, la contactamos": 0 })[o] ?? 0,
    max: 2,
  },
  imagen: {
    titulo: "Pierdes clientas antes de que te conozcan.",
    frase: "Tu web e Instagram son lo primero que ve quien te busca en Google.",
    severidad: (o) => ({ "No tenemos web": 3, "Los tenemos abandonados": 2, Mejorables: 1, "Nos representan": 0 })[o] ?? 0,
    max: 3,
  },
  publicidad: {
    titulo: "Tu publicidad no está dando lo que podría.",
    frase: "Invertir sin medir resultados es la forma más cara de hacer publicidad.",
    severidad: (o) => ({ "Sí, pero sin seguimiento de resultados": 3, "No hacemos publicidad": 1, "Sí, gestionada y con seguimiento": 0 })[o] ?? 0,
    max: 3,
  },
  contenido: {
    titulo: "Tus redes no reflejan el nivel real de tu trabajo.",
    frase: "Un feed abandonado transmite lo contrario de lo que haces cada día en cabina.",
    severidad: (o) => ({ Nunca: 3, "Casi nunca": 2, Esporádico: 1, "Semanal y planificado": 0 })[o] ?? 0,
    max: 3,
  },
  medicion: {
    titulo: "No tienes visibilidad real de tus números.",
    frase: "Sin datos claros, es imposible saber dónde se está yendo el dinero.",
    severidad: (o) =>
      ({ "No sabría decir nuestras cifras": 3, "No los miramos": 2, "De vez en cuando": 1, "Cada mes, con datos claros": 0 })[o] ?? 0,
    max: 3,
  },
};

type Paso = "intro" | number | "lead" | "resultado";

export default function QuizCTA() {
  const [paso, setPaso] = useState<Paso>("intro");
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [lead, setLead] = useState({
    nombre: "",
    negocio: "",
    ciudad: "",
    email: "",
    whatsapp: "",
    consentimiento: false,
  });

  function responder(id: string, opcion: string) {
    setRespuestas({ ...respuestas, [id]: opcion });
    const actual = typeof paso === "number" ? paso : 0;
    if (actual + 1 < QUESTIONS.length) {
      setPaso(actual + 1);
    } else {
      setPaso("lead");
    }
  }

  function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPaso("resultado");
  }

  const evaluadas = Object.entries(FUGAS).map(([id, f]) => {
    const opcion = respuestas[id];
    return {
      id,
      titulo: f.titulo,
      frase: f.frase,
      severidad: opcion ? f.severidad(opcion) : 0,
      max: f.max,
    };
  });

  const totalSeveridad = evaluadas.reduce((sum, e) => sum + e.severidad, 0);
  const totalMax = evaluadas.reduce((sum, e) => sum + e.max, 0);
  const nota = totalMax > 0 ? Math.round(100 - (totalSeveridad / totalMax) * 100) : 100;

  const topFugas = [...evaluadas]
    .filter((e) => e.severidad > 0)
    .sort((a, b) => b.severidad / b.max - a.severidad / a.max)
    .slice(0, 2);

  const resumenWhatsapp = `Hola, soy ${lead.nombre || ""} de ${lead.negocio || "mi negocio"} (${lead.ciudad || ""}). Acabo de hacer el diagnóstico de auge.studio (nota: ${nota}/100) y me gustaría reservar mi sesión.`;
  const whatsappHref = "https://wa.me/34613803022?text=" + encodeURIComponent(resumenWhatsapp);

  return (
    <section id="diagnostico" className="bg-burgundy px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        {paso === "intro" && (
          <Reveal>
            <h2 className="font-display text-3xl font-black tracking-tight text-cream sm:text-4xl">
              Un plan de crecimiento hecho para tu negocio.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/70">
              Doce preguntas sobre tu negocio. Recibes tu nota sobre 100 y
              las dos fugas por las que hoy pierdes más clientas. Después,
              en una sesión conmigo, convertimos eso en tu plan de los
              próximos 90 días. Es tuyo aunque no llegues a contratarnos.
            </p>

            <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-3xl bg-cream/10 text-left">
              {[
                ["Tu nota sobre 100", "En pantalla, al terminar"],
                ["Tus 2 fugas principales", "En pantalla y por email"],
                ["Tu plan de 90 días", "En una sesión de 30 minutos, gratis"],
              ].map(([que, cuando]) => (
                <div
                  key={que}
                  className="flex items-center justify-between gap-4 border-b border-cream/10 px-6 py-4 text-sm last:border-0"
                >
                  <span className="text-cream">{que}</span>
                  <span className="text-right text-cream/55">{cuando}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPaso(0)}
              className="mt-10 inline-block rounded-full bg-cream px-10 py-4 text-sm font-medium uppercase tracking-widest text-stone transition-opacity hover:opacity-90"
            >
              Empezar mi diagnóstico
            </button>
          </Reveal>
        )}

        {typeof paso === "number" && (
          <div className="text-left">
            <p className="text-center text-xs uppercase tracking-widest text-cream/50">
              Pregunta {paso + 1} de {QUESTIONS.length}
            </p>
            <div className="mx-auto mt-4 h-1 max-w-xs overflow-hidden rounded-full bg-cream/15">
              <div
                className="h-full rounded-full bg-cream transition-all"
                style={{ width: `${((paso + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            <h3 className="mt-10 text-center font-display text-2xl font-semibold text-cream sm:text-3xl">
              {QUESTIONS[paso].pregunta}
            </h3>

            <div className="mt-8 space-y-3">
              {QUESTIONS[paso].opciones.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  onClick={() => responder(QUESTIONS[paso].id, opcion)}
                  className="block w-full rounded-2xl border border-cream/20 px-6 py-4 text-left text-cream transition-colors hover:border-cream hover:bg-cream/10"
                >
                  {opcion}
                </button>
              ))}
            </div>

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
            <p className="text-center font-display text-2xl font-semibold text-stone">
              Ya casi está.
            </p>
            <p className="mt-2 text-center text-sm text-stone/60">
              Déjanos tus datos para enviarte tu diagnóstico.
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
                  Nombre del negocio
                </label>
                <input
                  type="text"
                  required
                  value={lead.negocio}
                  onChange={(e) => setLead({ ...lead, negocio: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/50">
                  Ciudad
                </label>
                <input
                  type="text"
                  required
                  value={lead.ciudad}
                  onChange={(e) => setLead({ ...lead, ciudad: e.target.value })}
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
                  WhatsApp
                </label>
                <input
                  type="tel"
                  required
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
                Acepto recibir comunicaciones de auge.studio sobre mi
                diagnóstico.
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-stone py-3 text-sm uppercase tracking-widest text-cream transition-opacity hover:opacity-85"
              >
                Ver mi diagnóstico
              </button>
            </form>
          </div>
        )}

        {paso === "resultado" && (
          <div className="grain mx-auto max-w-lg rounded-3xl bg-cream px-8 py-10 text-left md:px-12">
            <p className="text-center text-xs uppercase tracking-widest text-stone/45">
              Tu diagnóstico, {lead.nombre}
            </p>
            <p className="mt-4 text-center font-display text-6xl font-black text-burgundy">
              {nota}
              <span className="text-2xl text-stone/40">/100</span>
            </p>

            <div className="mt-8 space-y-5">
              {topFugas.length > 0 ? (
                topFugas.map((f) => (
                  <div key={f.id}>
                    <p className="font-display text-lg font-semibold text-stone">
                      {f.titulo}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-stone/70">
                      {f.frase}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm leading-relaxed text-stone/70">
                  Tu negocio ya tiene buenos cimientos. Hablemos de cómo
                  llevarlo más lejos.
                </p>
              )}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-full bg-burgundy py-3 text-center text-sm uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
            >
              Reservar mi sesión de 30 minutos
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
