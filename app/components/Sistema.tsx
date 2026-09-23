"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const PIEZAS = [
  {
    nombre: "Marca",
    x: 50,
    y: 10,
    texto: "Una identidad clara que se reconoce en cualquier sitio donde apareces.",
  },
  {
    nombre: "Web",
    x: 78.28,
    y: 21.72,
    texto: "Tu mejor escaparate, siempre abierto y siempre a tu nombre.",
  },
  {
    nombre: "Agenda",
    x: 90,
    y: 50,
    texto: "Tu disponibilidad real, visible para que reserven sin llamarte.",
  },
  {
    nombre: "WhatsApp",
    x: 78.28,
    y: 78.28,
    texto: "Responde las dudas habituales y acompaña a tu clienta hasta la reserva.",
  },
  {
    nombre: "Reseñas",
    x: 50,
    y: 90,
    texto: "La petición llega después de la visita, sin que tengas que acordarte.",
  },
  {
    nombre: "Clientas",
    x: 21.72,
    y: 78.28,
    texto: "Seguimos el ritmo de cada servicio para que las clientas tengan motivos para volver.",
  },
  {
    nombre: "Redes",
    x: 10,
    y: 50,
    texto: "Presencia constante en tus redes, aunque tú estés ocupada en cabina.",
  },
  {
    nombre: "Captación",
    x: 21.72,
    y: 21.72,
    texto: "Campañas que traen clientas nuevas, medidas por lo que de verdad importa.",
  },
];

export default function Sistema() {
  const [active, setActive] = useState<number | null>(null);
  const descripcion =
    active !== null
      ? PIEZAS[active].texto
      : "Pasa el cursor, o toca, sobre cada pieza.";

  return (
    <section className="bg-cream px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Todo conectado.
            <br />
            <span className="italic text-burgundy">Tú, sin estar pendiente.</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-stone/70">
            No necesitas siete proveedores. Necesitas que las piezas hablen
            entre ellas.
          </p>
        </Reveal>
      </div>

      {/* Desktop / tablet: radial diagram */}
      <Reveal delay={160}>
        <div className="mx-auto mt-16 hidden aspect-square w-full max-w-xl sm:block">
          <div className="relative h-full w-full">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              {PIEZAS.map((p, i) => (
                <line
                  key={p.nombre}
                  x1={50}
                  y1={50}
                  x2={p.x}
                  y2={p.y}
                  stroke={active === i ? "#5C1A1B" : "#2B262233"}
                  strokeWidth={active === i ? 0.4 : 0.25}
                  className="transition-all duration-300"
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-stone/30 bg-cream text-center">
              <span className="font-display text-sm italic text-stone">
                Tu negocio
              </span>
            </div>

            {PIEZAS.map((p, i) => (
              <button
                key={p.nombre}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    active === i ? "bg-burgundy" : "bg-stone/40"
                  }`}
                />
                <span
                  className={`whitespace-nowrap text-xs uppercase tracking-widest transition-colors duration-300 ${
                    active === i ? "text-burgundy" : "text-stone/60"
                  }`}
                >
                  {p.nombre}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 hidden max-w-md text-center leading-relaxed text-stone/70 sm:block">
          {descripcion}
        </p>
      </Reveal>

      {/* Mobile: stacked list */}
      <div className="mx-auto mt-14 max-w-md space-y-2 sm:hidden">
        {PIEZAS.map((p, i) => (
          <button
            key={p.nombre}
            type="button"
            onClick={() => setActive(active === i ? null : i)}
            className="block w-full border-b border-stone/15 py-4 text-left"
          >
            <span className="flex items-center justify-between text-sm uppercase tracking-widest text-stone">
              {p.nombre}
              <span className="text-burgundy">{active === i ? "–" : "+"}</span>
            </span>
            {active === i && (
              <span className="mt-2 block text-sm leading-relaxed text-stone/70">
                {p.texto}
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
