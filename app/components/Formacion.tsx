const WHATSAPP_URL =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero saber más sobre Auge Formación.");

export default function Formacion() {
  return (
    <section id="formacion" className="bg-hueso px-6 py-20 md:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-widest2 text-burgundy">
          ¿Formas a otras profesionales?
        </p>
        <h2 className="mt-3 font-serif text-2xl text-stone sm:text-3xl">
          Ya eres la referencia en tu especialidad. Falta que puedas
          venderlo mientras duermes.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-stone/60">
          Con Auge Formación montamos la página de venta de tu curso, una
          lista de espera automática por WhatsApp y email, y cada
          lanzamiento por convocatoria. Si ya eres clienta de Sistema Auge,
          empiezas sin cuota de arranque.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm uppercase tracking-widest text-burgundy underline underline-offset-4 hover:no-underline"
        >
          Conocer Auge Formación →
        </a>
      </div>
    </section>
  );
}
