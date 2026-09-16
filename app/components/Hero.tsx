import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero saber más sobre AUGE.");

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center md:px-10"
    >
      <Image
        src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=2000&q=80&fm=jpg&fit=crop&auto=format"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone via-stone/70 to-burgundy/40" />
      <div className="absolute inset-0 bg-burgundy/30 mix-blend-multiply" />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/logo-crema-full.png"
          alt="AUGE. Aesthetic Marketing Studio"
          width={2135}
          height={631}
          priority
          className="h-auto w-full max-w-xs sm:max-w-md md:max-w-xl"
        />

        <p className="mt-10 max-w-2xl text-balance font-serif text-3xl leading-relaxed text-cream sm:text-4xl md:text-5xl">
          Auge lleva la marca de tu salón{" "}
          <span className="italic text-cream/90">al nivel que siempre mereció</span> — sin
          que tengas que tocar una sola herramienta.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-block rounded-full bg-cream px-10 py-4 text-sm uppercase tracking-widest text-stone transition-opacity hover:opacity-90"
        >
          Hablemos por WhatsApp
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-cream/60" />
    </section>
  );
}
