"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import {
  PREGUNTAS,
  INTENCION_OPCIONES,
  SEPARADOR_MULTIPLE,
  OPCION_TODO_PASA_POR_MI,
  calcularNota,
  calcularNivel,
  calcularFugaPrincipal,
} from "@/lib/diagnostico";

type Paso = "intro" | number | "pausa" | "lead" | "resultado";

export default function QuizCTA() {
  const [paso, setPaso] = useState<Paso>("intro");
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [abiertaActual, setAbiertaActual] = useState("");
  const [seleccionMultiple, setSeleccionMultiple] = useState<string[]>([]);
  const [lead, setLead] = useState({
    nombre: "",
    email: "",
    instagram: "",
    web: "",
    whatsapp: "",
    intencion: "",
    consentimiento: false,
  });

  function avanzar(actual: number) {
    if (actual + 1 < PREGUNTAS.length) {
      setPaso(actual + 1);
    } else {
      setPaso("pausa");
    }
  }

  function responderOpciones(id: string, texto: string) {
    setRespuestas({ ...respuestas, [id]: texto });
    avanzar(typeof paso === "number" ? paso : 0);
  }

  function toggleMultiple(texto: string) {
    setSeleccionMultiple((prev) => {
      if (texto === OPCION_TODO_PASA_POR_MI) {
        return prev.includes(texto) ? [] : [texto];
      }
      const sinTodo = prev.filter((t) => t !== OPCION_TODO_PASA_POR_MI);
      return sinTodo.includes(texto) ? sinTodo.filter((t) => t !== texto) : [...sinTodo, texto];
    });
  }

  function confirmarMultiple(id: string) {
    setRespuestas({ ...respuestas, [id]: seleccionMultiple.join(SEPARADOR_MULTIPLE) });
    setSeleccionMultiple([]);
    avanzar(typeof paso === "number" ? paso : 0);
  }

  function responderAbierta(id: string) {
    setRespuestas({ ...respuestas, [id]: abiertaActual });
    setAbiertaActual("");
    avanzar(typeof paso === "number" ? paso : 0);
  }

  const nota = calcularNota(respuestas);
  const nivel = calcularNivel(nota);
  const fuga = calcularFugaPrincipal(respuestas);

  function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPaso("resultado");

    const instagramWeb = [lead.instagram, lead.web].filter(Boolean).join(" · ");

    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: lead.nombre,
        email: lead.email,
        instagramWeb,
        whatsapp: lead.whatsapp,
        nota,
        nivel: nivel.titulo,
        fugaPrincipal: fuga.titulo,
        fugaSecundaria: respuestas.dejar_de_hacer ?? "",
        respuestas: { ...respuestas, intencion_comercial: lead.intencion },
      }),
    }).catch((error) => console.error("Error guardando el diagnóstico", error));
  }

  const resumenWhatsapp = `Hola, soy ${lead.nombre || ""}. Acabo de hacer el diagnóstico de AUGE (${fuga.titulo}) y me gustaría reservar mi sesión.`;
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
              12 preguntas · resultado inmediato
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

            {preguntaActual.tipo === "multiple" && (
              <div className="mt-8">
                <div className="space-y-2">
                  {preguntaActual.opciones?.map((opcion) => {
                    const activa = seleccionMultiple.includes(opcion.texto);
                    return (
                      <button
                        key={opcion.texto}
                        type="button"
                        onClick={() => toggleMultiple(opcion.texto)}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-6 py-3.5 text-left transition-colors ${
                          activa
                            ? "border-cream bg-cream/15 text-cream"
                            : "border-cream/20 text-cream/80 hover:border-cream/50"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                            activa ? "border-cream bg-cream" : "border-cream/40"
                          }`}
                        >
                          {activa && <span className="h-2 w-2 rounded-sm bg-burgundy" />}
                        </span>
                        {opcion.texto}
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  disabled={seleccionMultiple.length === 0}
                  onClick={() => confirmarMultiple(preguntaActual.id)}
                  className="mt-5 w-full rounded-full border border-cream bg-cream py-3 text-sm uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-transparent hover:text-cream disabled:opacity-40"
                >
                  Continuar →
                </button>
              </div>
            )}

            {preguntaActual.tipo === "abierta" && (
              <div className="mt-8">
                <textarea
                  value={abiertaActual}
                  onChange={(e) => setAbiertaActual(e.target.value)}
                  rows={3}
                  placeholder={preguntaActual.placeholder ?? "Escribe tu respuesta..."}
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

        {paso === "pausa" && (
          <Reveal>
            <p className="font-display text-2xl italic text-cream sm:text-3xl">
              Ya tenemos una primera lectura.
            </p>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-cream/70">
              Hemos detectado cómo funciona hoy tu negocio y cuánto depende
              todavía de ti. Ahora vamos a enseñarte dónde está tu principal
              punto de fuga.
            </p>
            <button
              type="button"
              onClick={() => setPaso("lead")}
              className="mt-8 inline-block rounded-full border border-cream bg-cream px-10 py-4 text-sm uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-transparent hover:text-cream"
            >
              Ver mi resultado →
            </button>
          </Reveal>
        )}

        {paso === "lead" && (
          <div className="grain mx-auto max-w-md rounded-3xl bg-cream px-8 py-10 text-left md:px-10">
            <p className="text-center font-display text-2xl italic text-stone">
              Para preparar tu diagnóstico
            </p>
            <p className="mt-3 text-center text-sm leading-relaxed text-stone/60">
              Te enviaremos tu resultado y, si quieres, podrás pedirnos que lo
              revisemos contigo.
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
                  Instagram de tu negocio
                </label>
                <input
                  type="text"
                  value={lead.instagram}
                  onChange={(e) => setLead({ ...lead, instagram: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/50">
                  Web (opcional)
                </label>
                <input
                  type="text"
                  value={lead.web}
                  onChange={(e) => setLead({ ...lead, web: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone/50">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  value={lead.whatsapp}
                  onChange={(e) => setLead({ ...lead, whatsapp: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-stone/50">
                  Si esto tuviera sentido para tu negocio...
                </label>
                <div className="mt-2 space-y-2">
                  {INTENCION_OPCIONES.map((op) => (
                    <label key={op.texto} className="flex items-start gap-2.5 text-sm text-stone/70">
                      <input
                        type="radio"
                        name="intencion"
                        required
                        value={op.texto}
                        checked={lead.intencion === op.texto}
                        onChange={(e) => setLead({ ...lead, intencion: e.target.value })}
                        className="mt-1"
                      />
                      {op.texto}
                    </label>
                  ))}
                </div>
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
            <p className="mt-4 text-center font-display text-3xl italic text-burgundy sm:text-4xl">
              {nivel.titulo}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-stone/70">{nivel.texto}</p>

            <div className="mt-8 rounded-2xl border border-burgundy/15 bg-burgundy/[0.04] p-6">
              <p className="text-xs uppercase tracking-widest text-burgundy/70">
                Tu principal punto de fuga
              </p>
              <p className="mt-2 font-display text-xl text-stone">{fuga.titulo}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone/65">{fuga.texto}</p>
            </div>

            <div className="mt-10 border-t border-stone/15 pt-8 text-center">
              <p className="font-display text-xl italic text-stone">
                ¿Quieres que lo veamos juntas?
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-stone/60">
                Podemos revisar tu resultado y enseñarte qué automatizaríamos
                primero en tu negocio.
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
