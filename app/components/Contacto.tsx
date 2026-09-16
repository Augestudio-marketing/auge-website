"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_URL =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero saber más sobre AUGE.");

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [negocio, setNegocio] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section
      id="contacto"
      className="bg-burgundy-glow relative overflow-hidden px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-widest2 text-cream/60">
          Contacto
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl">
          Empecemos por una conversación.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/70">
          Cuéntanos sobre tu salón y te respondemos con una propuesta a
          medida. Sin compromiso.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-cream px-10 py-4 text-sm uppercase tracking-widest text-stone transition-opacity hover:opacity-90"
        >
          Escríbenos por WhatsApp
        </a>

        <div className="grain mx-auto mt-20 max-w-md rounded-3xl bg-cream px-8 py-10 text-left md:px-10">
          <p className="mb-8 text-center text-xs uppercase tracking-widest text-stone/50">
            O déjanos tus datos
          </p>

          {enviado ? (
            <p className="text-center font-serif text-2xl italic text-stone">
              Gracias, {nombre || "un placer"}. Te contactaremos muy pronto.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="text-xs uppercase tracking-widest text-stone/50"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-widest text-stone/50"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>

              <div>
                <label
                  htmlFor="negocio"
                  className="text-xs uppercase tracking-widest text-stone/50"
                >
                  Nombre del negocio
                </label>
                <input
                  id="negocio"
                  type="text"
                  required
                  value={negocio}
                  onChange={(e) => setNegocio(e.target.value)}
                  className="mt-2 w-full border-0 border-b border-stone/25 bg-transparent py-2 text-stone outline-none focus:border-burgundy"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-stone py-3 text-sm uppercase tracking-widest text-cream transition-opacity hover:opacity-85"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
