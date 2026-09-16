"use client";

import { useState, type FormEvent } from "react";

const FORMACION_OPCION = "Formo a otras profesionales";

const QUESTIONS = [
  {
    id: "avatar",
    pregunta: "¿Cuál describe mejor tu momento?",
    opciones: [
      "Voy desbordada",
      "Tengo un salón de uñas",
      "Estoy en Booksy o Treatwell",
      "Acabo de abrir (o estoy a punto)",
      "Llevo años y mi imagen se ha quedado atrás",
      "Quiero crecer: más nivel, más centros",
      FORMACION_OPCION,
    ],
  },
  {
    id: "negocio",
    pregunta: "¿Qué tipo de negocio tienes?",
    opciones: ["Peluquería", "Salón de belleza", "Salón de uñas", "Varios centros"],
  },
  {
    id: "reservas",
    pregunta: "¿Cómo te reservan hoy tus clientas?",
    opciones: ["WhatsApp o llamada", "Booksy o Treatwell", "App propia", "Libreta"],
  },
  {
    id: "whatsapp",
    pregunta: "¿Cuánto tardas en contestar un WhatsApp fuera de horario?",
    opciones: ["Al momento", "Esa noche", "Al día siguiente", "A veces no contesto"],
  },
  {
    id: "resenas",
    pregunta: "¿Pides reseñas a tus clientas después de la visita?",
    opciones: ["Siempre", "A veces", "Nunca"],
  },
  {
    id: "churn",
    pregunta: "¿Haces algo cuando una clienta habitual deja de venir?",
    opciones: ["Sí, la contacto", "Me doy cuenta tarde", "No"],
  },
  {
    id: "imagen",
    pregunta: "¿Cómo describirías tu web e Instagram?",
    opciones: ["Me representan", "Mejorables", "No tengo web", "Los tengo abandonados"],
  },
];

const NIVEL_POR_AVATAR: Record<string, string> = {
  "Voy desbordada": "Auge",
  "Tengo un salón de uñas": "Auge",
  "Estoy en Booksy o Treatwell": "Auge",
  "Acabo de abrir (o estoy a punto)": "Cimiento",
  "Llevo años y mi imagen se ha quedado atrás": "Auge",
  "Quiero crecer: más nivel, más centros": "Cénit",
};

const FUGAS: Record<
  string,
  { titulo: string; severidad: (opcion: string) => number; frase: (opcion: string) => string }
> = {
  reservas: {
    titulo: "Tu salón pierde clientas por cómo reservan hoy.",
    severidad: (o) =>
      ({ Libreta: 3, "Booksy o Treatwell": 2, "WhatsApp o llamada": 1, "App propia": 0 })[o] ?? 0,
    frase: (o) =>
      ({
        Libreta:
          "Dependes del boca a boca y el papel: sin reservas online, pierdes citas por las noches y festivos.",
        "Booksy o Treatwell": "Pagas comisión por clientas que ya deberían ser tuyas.",
        "WhatsApp o llamada":
          "Cada reserva te ocupa tiempo que podrías dedicar a tus clientas.",
        "App propia": "Tus reservas ya están bien encaminadas.",
      })[o] ?? "",
  },
  whatsapp: {
    titulo: "Tu salón pierde clientas en la respuesta.",
    severidad: (o) =>
      ({ "Al momento": 0, "Esa noche": 1, "Al día siguiente": 2, "A veces no contesto": 3 })[o] ?? 0,
    frase: (o) =>
      ({
        "Al momento": "Tu WhatsApp responde rápido — sigue así.",
        "Esa noche": "Contestas, pero muchas ya reservaron en otro sitio antes.",
        "Al día siguiente": "Tardas en contestar el WhatsApp fuera de horario y se nota en tu agenda.",
        "A veces no contesto": "Hay mensajes que se quedan sin respuesta, y con ellos, la clienta.",
      })[o] ?? "",
  },
  resenas: {
    titulo: "Tu salón pierde reputación por las reseñas que no llegan.",
    severidad: (o) => ({ Siempre: 0, "A veces": 1, Nunca: 2 })[o] ?? 0,
    frase: (o) =>
      ({
        Siempre: "Tus reseñas ya se piden de forma constante.",
        "A veces": "Pides reseñas de vez en cuando: se te escapan la mayoría.",
        Nunca: "Tus clientas contentas no dejan rastro: nadie les pide reseña.",
      })[o] ?? "",
  },
  churn: {
    titulo: "Tu salón pierde clientas habituales sin darte cuenta.",
    severidad: (o) => ({ "Sí, la contacto": 0, "Me doy cuenta tarde": 1, No: 2 })[o] ?? 0,
    frase: (o) =>
      ({
        "Sí, la contacto": "Ya cuidas a tus clientas habituales.",
        "Me doy cuenta tarde": "Detectas tarde a las clientas que se están yendo.",
        No: "Cuando una clienta se va, no te enteras hasta que ya es tarde.",
      })[o] ?? "",
  },
  imagen: {
    titulo: "Tu salón pierde clientas antes de que te conozcan.",
    severidad: (o) =>
      ({ "Me representan": 0, Mejorables: 1, "Los tengo abandonados": 2, "No tengo web": 3 })[o] ?? 0,
    frase: (o) =>
      ({
        "Me representan": "Tu imagen digital ya está a tu altura.",
        Mejorables: "Tu imagen digital podría reflejar mejor lo que haces.",
        "Los tengo abandonados": "Tu web e Instagram no muestran el nivel real de tu trabajo.",
        "No tengo web": "Sin web, dejas pasar a quien te busca en Google antes de decidirse.",
      })[o] ?? "",
  },
};

type Paso = "intro" | number | "lead" | "resultado";

export default function QuizCTA() {
  const [paso, setPaso] = useState<Paso>("intro");
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [lead, setLead] = useState({
    nombre: "",
    salon: "",
    ciudad: "",
    email: "",
    whatsapp: "",
    consentimiento: false,
  });

  const esFormadora = respuestas.avatar === FORMACION_OPCION;

  function responder(id: string, opcion: string) {
    const nuevas = { ...respuestas, [id]: opcion };
    setRespuestas(nuevas);

    if (id === "avatar" && opcion === FORMACION_OPCION) {
      setPaso("lead");
      return;
    }

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

  const topFugas = Object.entries(FUGAS)
    .map(([id, f]) => {
      const opcion = respuestas[id];
      return opcion
        ? { id, severidad: f.severidad(opcion), frase: f.frase(opcion), titulo: f.titulo }
        : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .sort((a, b) => b.severidad - a.severidad);

  const nivelRecomendado = NIVEL_POR_AVATAR[respuestas.avatar] ?? "Auge";

  const resumenWhatsapp = esFormadora
    ? `Hola, soy ${lead.nombre || ""} y quiero saber más sobre Auge Formación.`
    : `Hola, soy ${lead.nombre || ""} de ${lead.salon || "mi salón"} (${lead.ciudad || ""}). Acabo de hacer el diagnóstico de AUGE y me gustaría reservar mi llamada.`;

  const whatsappHref =
    "https://wa.me/34613803022?text=" + encodeURIComponent(resumenWhatsapp);

  return (
    <section id="diagnostico" className="bg-burgundy px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        {paso === "intro" && (
          <>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl">
              Descubre en 3 minutos dónde está perdiendo clientas tu salón.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              Responde 7 preguntas y recibe tu diagnóstico personalizado al
              momento. Si quieres, después lo vemos juntas en una llamada de
              30 minutos, sin compromiso.
            </p>
            <button
              type="button"
              onClick={() => setPaso(0)}
              className="mt-10 inline-block rounded-full bg-cream px-10 py-4 text-sm uppercase tracking-widest text-stone transition-opacity hover:opacity-90"
            >
              Empezar mi diagnóstico
            </button>
            <p className="mt-6 text-xs uppercase tracking-widest text-cream/50">
              Gratis · 3 minutos · Resultado al instante
            </p>
          </>
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

            <h3 className="mt-10 text-center font-serif text-2xl text-cream sm:text-3xl">
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
            <p className="text-center font-serif text-2xl text-stone">
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

              {!esFormadora && (
                <>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-stone/50">
                      Nombre del salón
                    </label>
                    <input
                      type="text"
                      required
                      value={lead.salon}
                      onChange={(e) => setLead({ ...lead, salon: e.target.value })}
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
                </>
              )}

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
                  onChange={(e) =>
                    setLead({ ...lead, consentimiento: e.target.checked })
                  }
                  className="mt-0.5"
                />
                Acepto recibir comunicaciones de AUGE sobre mi diagnóstico.
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
            {esFormadora ? (
              <>
                <p className="text-xs uppercase tracking-widest text-burgundy">
                  Tu momento
                </p>
                <h3 className="mt-3 font-serif text-3xl text-stone">
                  Auge Formación es para ti.
                </h3>
                <p className="mt-4 leading-relaxed text-stone/70">
                  Montamos la página de venta de tu curso, una lista de
                  espera automática por WhatsApp y email, y cada
                  lanzamiento por convocatoria.
                </p>
              </>
            ) : (
              <>
                <p className="text-xs uppercase tracking-widest text-burgundy">
                  Tu diagnóstico, {lead.nombre}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-stone">
                  {topFugas[0]?.titulo ?? "Tu salón tiene margen para crecer."}
                </h3>

                <ul className="mt-6 space-y-4">
                  {topFugas.slice(0, 3).map((f) => (
                    <li key={f.id} className="text-sm leading-relaxed text-stone/75">
                      — {f.frase}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-stone/60">
                  <span className="uppercase tracking-widest text-stone/45">
                    Nivel recomendado:{" "}
                  </span>
                  {nivelRecomendado}
                </p>
              </>
            )}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-full bg-burgundy py-3 text-center text-sm uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
            >
              {esFormadora ? "Escribir por WhatsApp" : "Reservar mi llamada de diagnóstico"}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
