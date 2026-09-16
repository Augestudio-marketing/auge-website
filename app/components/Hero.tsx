const WHATSAPP_URL =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero saber más sobre AUGE.");

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center md:px-10"
    >
      <p className="mb-8 text-xs uppercase tracking-widest2 text-stone/60">
        Aesthetic Marketing Studio
      </p>

      <h1 className="font-serif text-7xl font-black leading-none tracking-tight text-stone sm:text-8xl md:text-9xl">
        AUGE.
      </h1>

      <p className="mt-10 max-w-2xl text-balance font-serif text-2xl italic leading-relaxed text-stone/80 sm:text-3xl">
        Auge lleva la marca de tu salón al nivel que siempre mereció — sin que
        tengas que tocar una sola herramienta.
      </p>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-14 inline-block bg-burgundy px-10 py-4 text-sm uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
      >
        Hablemos por WhatsApp
      </a>
    </section>
  );
}
