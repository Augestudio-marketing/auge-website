const WHATSAPP_URL =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero probar cómo funciona auge.studio.");

export default function PruebaloTu() {
  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-black lowercase tracking-tight text-stone sm:text-4xl">
          no te lo contamos. pruébalo.
        </h2>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-stone/70">
          Escribe ahora a nuestro WhatsApp, a la hora que sea. Así
          responderá el tuyo a tus clientas.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-burgundy px-10 py-4 text-sm font-medium uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
        >
          Escribir al WhatsApp de auge.studio
        </a>
      </div>
    </section>
  );
}
