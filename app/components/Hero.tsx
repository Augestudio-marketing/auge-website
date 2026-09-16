import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero saber más sobre AUGE.");

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center md:px-10"
    >
      <Image
        src="/logo-burdeos-full.png"
        alt="AUGE. Aesthetic Marketing Studio"
        width={1317}
        height={434}
        priority
        className="h-auto w-full max-w-md sm:max-w-xl md:max-w-2xl"
      />

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
