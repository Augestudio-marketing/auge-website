import Reveal from "./Reveal";

const WHATSAPP_RECIEN_ABIERTO =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, acabo de abrir mi negocio y quiero saber si AUGE encaja conmigo.");

const SEÑALES = ["Una cartera de clientes.", "Una reputación.", "Un equipo.", "Un espacio."];

export default function ConQuien() {
  return (
    <section className="bg-hueso px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest2 text-burgundy">
            Con quién trabajamos
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            AUGE no es para
            <br />
            <span className="italic text-burgundy">todo el mundo.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-stone/70">
            Y está bien. Trabajamos con negocios que ya tienen algo que cuidar.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-12 grid grid-cols-2 border-b border-stone/20 md:grid-cols-4">
            {SEÑALES.map((s, i) => (
              <li
                key={s}
                className={`border-t border-stone/20 px-4 py-6 text-center font-display text-lg italic text-stone md:text-xl ${
                  i % 2 === 1 ? "border-l" : ""
                } ${i === 2 ? "md:border-l" : ""}`}
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mt-10 max-w-xl leading-relaxed text-stone/70">
            Y la sensación de que podrían estar a otro nivel si no tuvieran
            que estar pendientes de todo.
          </p>
          <p className="mx-auto mt-8 max-w-md font-display text-2xl italic text-burgundy">
            Si te suena, probablemente hablemos el mismo idioma.
          </p>
          <p className="mt-8 text-sm text-stone/55">
            ¿Acabas de abrir?{" "}
            <a
              href={WHATSAPP_RECIEN_ABIERTO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy underline underline-offset-4 hover:no-underline"
            >
              Escríbenos y te decimos si encajamos →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
