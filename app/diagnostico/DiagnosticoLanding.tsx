"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { PREGUNTAS, calcularNota, calcularNivel } from "@/lib/diagnostico";

type Paso = "intro" | number | "lead" | "resultado";

const PASOS_PROCESO = [
  {
    n: "1",
    titulo: "Respondes 12 preguntas",
    texto: "Sobre tu día a día real: reservas, WhatsApp, Instagram, lo que ya usas.",
  },
  {
    n: "2",
    titulo: "Recibes tu diagnóstico al instante",
    texto: "Sin esperas, sin llamadas. Un resultado claro sobre dónde estás.",
  },
  {
    n: "3",
    titulo: "Decides si quieres verlo con nosotras",
    texto: "Gratis, 30 minutos, sin compromiso. Solo si te interesa.",
  },
];

export default function DiagnosticoLanding() {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    setAbiertaActual("");
    avanzar(typeof paso === "number" ? paso : 0);
  }

  const nota = calcularNota(respuestas);
  const nivel = calcularNivel(nota);

  function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPaso("resultado");
    window.scrollTo({ top: 0, behavior: "smooth" });

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
    <main className="min-h-screen bg-cream">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 md:px-0">
        <Image src="/logo-negro.webp" alt="auge.studio" width={2000} height={667} priority className="h-7 w-auto" />
        <a
          href="https://wa.me/34613803022?text=Hola%2C%20tengo%20una%20duda%20sobre%20el%20diagn%C3%B3stico."
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest text-stone/50 hover:text-burgundy"
        >
          ¿Dudas? Escríbenos →
        </a>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-24 md:px-0">
        {paso === "intro" && (
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Diagnóstico gratuito · Negocios de belleza y estética
            </p>
            <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-stone sm:text-5xl">
              ¿Cuánto depende
              <br />
              <span className="italic text-burgundy">tu negocio de ti?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-stone/60">
              Entre Booksy, WhatsApp, Instagram y la libreta de siempre, es
              fácil perder de vista cuántas cosas dependen todavía de ti.
              Responde 12 preguntas pensadas para negocios como el tuyo y
              descubre qué parte de tu día a día ya podría funcionar sin que
              tengas que estar encima.
            </p>

            <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone/50">
              {["100% gratis", "4 minutos", "Resultado inmediato", "Sin compromiso"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone/15 bg-white px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPaso(0)}
              className="mt-10 inline-block rounded-full border border-burgundy bg-burgundy px-12 py-4 text-sm uppercase tracking-widest text-cream transition-colors duration-300 hover:bg-transparent hover:text-burgundy"
            >
              Empezar diagnóstico →
            </button>

            <div className="mx-auto mt-20 grid max-w-2xl gap-8 text-left sm:grid-cols-3 sm:gap-6">
              {PASOS_PROCESO.map((p) => (
                <div key={p.n}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-burgundy font-display text-lg italic text-burgundy">
                    {p.n}
                  </span>
                  <p className="mt-3 font-display text-lg text-stone">{p.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone/55">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {preguntaActual && typeof paso === "number" && (
          <div className="rounded-[28px] border border-stone/10 bg-white px-6 py-10 shadow-xl shadow-stone/[0.06] sm:px-12 sm:py-14">
            <p className="text-center text-xs uppercase tracking-widest text-stone/40">
              Pregunta {paso + 1} de {PREGUNTAS.length}
            </p>
            <div className="mx-auto mt-4 h-1 max-w-xs overflow-hidden rounded-full bg-stone/10">
              <div
                className="h-full rounded-full bg-burgundy transition-all"
                style={{ width: `${((paso + 1) / PREGUNTAS.length) * 100}%` }}
              />
            </div>

            <h2 className="mx-auto mt-10 max-w-xl text-center font-display text-2xl italic leading-snug text-stone sm:text-3xl">
              {preguntaActual.pregunta}
            </h2>

            {preguntaActual.tipo === "opciones" && (
              <div className="mx-auto mt-10 max-w-lg space-y-3">
                {preguntaActual.opciones?.map((opcion) => (
                  <button
                    key={opcion.texto}
                    type="button"
                    onClick={() => responderOpciones(preguntaActual.id, opcion.texto)}
                    className="block w-full rounded-2xl border border-stone/12 px-6 py-4 text-left text-stone transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:shadow-md"
                  >
                    {opcion.texto}
                  </button>
                ))}
              </div>
            )}

            {preguntaActual.tipo === "escala" && (
              <div className="mx-auto mt-10 max-w-lg">
                <div className="flex flex-wrap justify-center gap-2">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => responderEscala(preguntaActual.id, n)}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-stone/15 text-stone transition-colors hover:border-burgundy hover:bg-burgundy hover:text-cream"
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-xs uppercase tracking-widest text-stone/40">
                  <span>Ni se enteran</span>
                  <span>Se para todo</span>
                </div>
              </div>
            )}

            {preguntaActual.tipo === "abierta" && (
              <div className="mx-auto mt-10 max-w-lg">
                <textarea
                  value={abiertaActual}
                  onChange={(e) => setAbiertaActual(e.target.value)}
                  rows={3}
                  placeholder="Escribe tu respuesta..."
                  className="w-full rounded-2xl border border-stone/15 bg-transparent px-6 py-4 text-stone outline-none placeholder:text-stone/35 focus:border-burgundy"
                />
                <button
                  type="button"
                  disabled={!abiertaActual.trim()}
                  onClick={() => responderAbierta(preguntaActual.id)}
                  className="mt-4 w-full rounded-full border border-burgundy bg-burgundy py-3.5 text-sm uppercase tracking-widest text-cream transition-colors duration-300 hover:bg-transparent hover:text-burgundy disabled:opacity-40"
                >
                  Continuar →
                </button>
              </div>
            )}

            {paso > 0 && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setPaso(paso - 1)}
                  className="text-xs uppercase tracking-widest text-stone/40 hover:text-burgundy"
                >
                  ← Volver
                </button>
              </div>
            )}
          </div>
        )}

        {paso === "lead" && (
          <div className="mx-auto max-w-md rounded-[28px] border border-stone/10 bg-white px-8 py-12 shadow-xl shadow-stone/[0.06] md:px-12">
            <p className="text-center font-display text-2xl italic text-stone">
              Hemos analizado tus respuestas.
            </p>
            <p className="mt-3 text-center text-sm leading-relaxed text-stone/55">
              Hay varias áreas de tu negocio que podrías dejar de gestionar
              personalmente. ¿Quieres ver tu diagnóstico completo?
            </p>

            <form onSubmit={handleLeadSubmit} className="mt-9 space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/45">Nombre</label>
                <input
                  type="text"
                  required
                  value={lead.nombre}
                  onChange={(e) => setLead({ ...lead, nombre: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/20 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/45">Email</label>
                <input
                  type="email"
                  required
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/20 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/45">Instagram o web</label>
                <input
                  type="text"
                  value={lead.instagramWeb}
                  onChange={(e) => setLead({ ...lead, instagramWeb: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/20 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/45">Teléfono</label>
                <input
                  type="tel"
                  required
                  value={lead.whatsapp}
                  onChange={(e) => setLead({ ...lead, whatsapp: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/20 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>

              <label className="flex items-start gap-3 text-xs leading-relaxed text-stone/55">
                <input
                  type="checkbox"
                  required
                  checked={lead.consentimiento}
                  onChange={(e) => setLead({ ...lead, consentimiento: e.target.checked })}
                  className="mt-0.5"
                />
                Acepto recibir comunicaciones de AUGE sobre mi diagnóstico.
              </label>

              <button
                type="submit"
                className="w-full rounded-full border border-burgundy bg-burgundy py-3.5 text-sm uppercase tracking-widest text-cream transition-colors duration-300 hover:bg-transparent hover:text-burgundy"
              >
                Ver mi resultado →
              </button>
            </form>
          </div>
        )}

        {paso === "resultado" && (
          <div className="mx-auto max-w-lg rounded-[28px] border border-stone/10 bg-white px-8 py-12 shadow-xl shadow-stone/[0.06] md:px-14">
            <p className="text-center text-xs uppercase tracking-widest text-stone/40">
              Tu diagnóstico, {lead.nombre}
            </p>
            <p className="mt-5 text-center text-xs uppercase tracking-widest text-burgundy">
              Nivel {nivel.id}
            </p>
            <p className="mt-2 text-center font-display text-3xl italic text-burgundy sm:text-4xl">
              {nivel.titulo}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-stone/65">{nivel.texto}</p>

            <div className="mt-10 border-t border-stone/12 pt-8 text-center">
              <p className="font-display text-xl italic text-stone">¿Quieres que lo veamos juntas?</p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-stone/55">
                Si quieres, podemos revisar tu resultado contigo y enseñarte
                qué cambiaríamos primero en tu negocio.
              </p>
            </div>

            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-full border border-burgundy bg-burgundy py-3.5 text-center text-sm uppercase tracking-widest text-cream transition-colors duration-300 hover:bg-transparent hover:text-burgundy"
            >
              Reservar diagnóstico AUGE →
            </a>
            <p className="mt-2 text-center text-xs uppercase tracking-widest text-stone/35">
              30 minutos · Gratis · Sin compromiso
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-xs uppercase tracking-widest text-stone/40 hover:text-burgundy"
            >
              Prefiero escribir por WhatsApp
            </a>
          </div>
        )}
      </div>

      <footer className="border-t border-stone/10 py-8 text-center text-xs uppercase tracking-widest text-stone/35">
        © {new Date().getFullYear()} auge.studio · Aesthetic Marketing
      </footer>
    </main>
  );
}
