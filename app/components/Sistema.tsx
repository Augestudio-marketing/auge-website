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
    texto: "Tu mejor escaparate, abierto siempre.",
  },
  {
    nombre: "Agenda",
    x: 90,
    y: 50,
    texto: "Reservas que no dependen de un mensaje.",
  },
  {
    nombre: "WhatsApp",
    x: 78.28,
    y: 78.28,
    texto: "Información y seguimiento sin estar pendiente.",
  },
  {
    nombre: "Reseñas",
    x: 50,
    y: 90,
    texto: "Que una buena experiencia no se quede solo entre tú y tu clienta.",
  },
  {
    nombre: "Clientas",
    x: 21.72,
    y: 78.28,
    texto: "Recuperar oportunidades que ya existen.",
  },
  {
    nombre: "Redes",
    x: 10,
    y: 50,
    texto: "Presencia constante, aunque tú estés ocupada en cabina.",
  },
  {
    nombre: "Captación",
    x: 21.72,
    y: 21.72,
    texto: "Seguir haciendo crecer el negocio.",
  },
];

export default function Sistema() {
  const [active, setActive] = useState<number | null>(null);
  const descripcion =
    active !== null
      ? PIEZAS[active].texto
      : "Pasa el cursor, o toca, sobre cada pieza.";

  return (
    <section id="sistema" className="bg-burgundy-deep px-6 py-20 text-marfil md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-marfil/60">A / 04 — The AUGE System</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Todo conectado.
          </h2>
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
                  stroke={active === i ? "#F3ECE2" : "#F3ECE233"}
                  strokeWidth={active === i ? 0.4 : 0.25}
                  className="transition-all duration-300"
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-marfil/30 bg-burgundy-deep text-center">
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-marfil">
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
                    active === i ? "bg-marfil" : "bg-marfil/40"
                  }`}
                />
                <span
                  className={`whitespace-nowrap text-xs uppercase tracking-widest transition-colors duration-300 ${
                    active === i ? "text-marfil" : "text-marfil/60"
                  }`}
                >
                  {p.nombre}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 hidden max-w-md text-center leading-relaxed text-marfil/70 sm:block">
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
            className="block w-full border-b border-marfil/15 py-4 text-left"
          >
            <span className="flex items-center justify-between text-sm uppercase tracking-widest text-marfil">
              {p.nombre}
              <span className="text-marfil/60">{active === i ? "–" : "+"}</span>
            </span>
            {active === i && (
              <span className="mt-2 block text-sm leading-relaxed text-marfil/70">
                {p.texto}
              </span>
            )}
          </button>
        ))}
      </div>

      <Reveal delay={220}>
        <p className="mx-auto mt-16 max-w-md text-center leading-relaxed text-marfil/60">
          No necesitas siete herramientas que funcionan por separado.
          Necesitas que las piezas hablen entre ellas.
        </p>
      </Reveal>
    </section>
  );
}
