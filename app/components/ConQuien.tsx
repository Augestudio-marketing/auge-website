import Reveal from "./Reveal";

const WHATSAPP_RECIEN_ABIERTO =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, acabo de abrir mi negocio y quiero saber si auge.studio encaja conmigo.");

export default function ConQuien() {
  return (
    <section className="bg-hueso px-6 py-28 md:px-10 md:py-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-black tracking-tight text-stone sm:text-4xl">
          Trabajamos con negocios que ya tienen clientela.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-stone/70">
          No enseñamos a empezar. Entramos donde ya hay algo que hacer
          crecer, un centro abierto, clientas que confían en tu trabajo y
          una agenda que podría estar mucho más llena. Si te reconoces,
          hablemos.
        </p>

        <a
          href="#diagnostico"
          className="mt-10 inline-block rounded-full bg-burgundy px-10 py-4 text-sm font-medium uppercase tracking-widest text-cream transition-transform hover:scale-[1.03] hover:opacity-90"
        >
          Haz tu diagnóstico
        </a>

        <p className="mt-6 text-sm text-stone/50">
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
