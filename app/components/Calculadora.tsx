"use client";

import { useState } from "react";

export default function Calculadora() {
  const [citasSemana, setCitasSemana] = useState("");
  const [citasPerdidas, setCitasPerdidas] = useState("");
  const [precioMedio, setPrecioMedio] = useState("");

  const semana = parseFloat(citasSemana);
  const perdidas = parseFloat(citasPerdidas);
  const precio = parseFloat(precioMedio);

  const valido =
    !isNaN(semana) && !isNaN(perdidas) && !isNaN(precio) && semana > 0 && precio > 0;

  const resultado = valido
    ? Math.round(semana * 4.3 * (perdidas / 10) * precio)
    : null;

  return (
    <section className="bg-marfil px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          ¿Cuánto está dejando de ingresar tu salón?
        </h2>
        <p className="mt-6 text-lg text-stone/70">
          Tres datos. Treinta segundos. Una cifra que quizá no quieras ver.
        </p>

        <div className="mt-14 grid gap-8 text-left sm:grid-cols-3">
          <div>
            <label className="text-xs uppercase tracking-widest text-stone/50">
              Citas a la semana
            </label>
            <input
              type="number"
              min={0}
              inputMode="numeric"
              value={citasSemana}
              onChange={(e) => setCitasSemana(e.target.value)}
              placeholder="Ej. 40"
              className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none placeholder:text-stone/30 focus:border-burgundy"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-stone/50">
              De cada 10, ¿cuántas se olvidan?
            </label>
            <input
              type="number"
              min={0}
              max={10}
              inputMode="numeric"
              value={citasPerdidas}
              onChange={(e) => setCitasPerdidas(e.target.value)}
              placeholder="0–10"
              className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none placeholder:text-stone/30 focus:border-burgundy"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-stone/50">
              Precio medio de un servicio
            </label>
            <input
              type="number"
              min={0}
              inputMode="numeric"
              value={precioMedio}
              onChange={(e) => setPrecioMedio(e.target.value)}
              placeholder="Ej. 35 €"
              className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none placeholder:text-stone/30 focus:border-burgundy"
            />
          </div>
        </div>

        <div className="mt-14 min-h-[140px] rounded-3xl bg-cream px-8 py-10">
          {resultado !== null ? (
            <>
              <p className="font-serif text-2xl leading-snug text-stone sm:text-3xl">
                Tu salón podría estar perdiendo{" "}
                <span className="text-burgundy">
                  {resultado.toLocaleString("es-ES")} €
                </span>{" "}
                al mes solo en citas olvidadas.
              </p>
              <p className="mt-4 text-sm text-stone/60">
                Y eso sin contar los WhatsApps sin contestar ni las clientas
                que no vuelven.
              </p>
              <a
                href="#diagnostico"
                className="mt-8 inline-block rounded-full bg-burgundy px-8 py-3 text-sm uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
              >
                Quiero recuperarlo
              </a>
            </>
          ) : (
            <p className="flex h-full items-center justify-center text-sm text-stone/40">
              Rellena los tres datos para ver tu cifra.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
