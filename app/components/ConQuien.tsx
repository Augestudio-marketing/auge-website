import Reveal from "./Reveal";

const WHATSAPP_RECIEN_ABIERTO =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, acabo de abrir mi negocio y quiero saber si AUGE encaja conmigo.");

export default function ConQuien() {
  return (
    <section className="bg-hueso px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
          AUGE no es para todo el mundo.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-stone/70">
          Y está bien. Trabajamos con negocios que ya tienen algo que
          cuidar. Una cartera de clientas. Una reputación. Un equipo. Un
          espacio. Y la sensación de que podrían estar a otro nivel si no
          tuvieran que estar pendientes de todo.
        </p>

        <p className="mx-auto mt-8 max-w-md font-display text-xl italic text-burgundy">
          Si te suena, probablemente hablemos el mismo idioma.
        </p>

        <p className="mt-8 text-sm text-stone/50">
          ¿Acabas de abrir?{" "}
          <a
            href={WHATSAPP_RECIEN_ABIERTO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-burgundy underline underline-offset-2 hover:no-underline"
          >
            Escríbenos y te decimos si encajamos →
          </a>
        </p>
      </Reveal>
    </section>
  );
}
