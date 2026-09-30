import Reveal from "./Reveal";

export default function Confianza() {
  return (
    <section className="bg-marfil px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-5xl border-y border-stone/15 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full py-12 md:pr-12">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Propiedad
            </p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl">
              Tu marca es tuya.
              <br />
              <span className="italic text-burgundy">Siempre.</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-stone/75">
              Tu dominio. Tu web. Tus contactos. Tu contenido. Todo pertenece a
              tu negocio.
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-stone/65">
              No queremos que dependas de AUGE para que lo que has construido
              siga siendo tuyo. Queremos que tengas un sistema que funcione
              porque está bien hecho.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="h-full">
          <div className="h-full border-t border-stone/15 py-12 md:border-l md:border-t-0 md:pl-12">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Compromiso
            </p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-stone sm:text-4xl">
              Nos tomamos en serio
              <br />
              <span className="italic text-burgundy">
                lo que construimos contigo.
              </span>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-stone/75">
              Si en 30 días tu sistema no está funcionando, seguimos trabajando
              gratis hasta que lo esté y te regalamos el primer mes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
