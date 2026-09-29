import Reveal from "./Reveal";

export default function Propiedad() {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-stone sm:text-4xl md:text-5xl">
            Tu marca es tuya.
            <br />
            <span className="italic text-burgundy">Siempre.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-stone/70">
            Tu dominio. Tu web. Tus contactos. Tu contenido. Todo pertenece
            a tu negocio.
          </p>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-stone/70">
            No queremos que dependas de nosotras para ser dueña de lo que
            has construido. Queremos que tengas un sistema que funcione
            porque está bien hecho.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
