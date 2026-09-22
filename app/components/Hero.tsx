import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-burgundy px-6 pt-28 text-center md:px-10"
    >
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/logo-crema-new.webp"
          alt="auge.studio"
          width={2000}
          height={667}
          priority
          className="h-auto w-full max-w-[220px] sm:max-w-xs md:max-w-sm"
        />

        <h1 className="mt-10 max-w-3xl font-display text-4xl font-black leading-tight tracking-tight text-cream sm:text-5xl md:text-6xl">
          Llenamos la agenda de tu peluquería, tu salón de uñas o tu centro
          de belleza.
        </h1>

        <p className="mx-auto mt-8 max-w-xl font-display text-lg font-light leading-relaxed text-cream/70">
          Creamos tu web, gestionamos tus reservas, contestamos tu WhatsApp
          y pedimos las reseñas por ti. Nosotras lo instalamos y lo
          cuidamos cada mes. Tú solo atiendes a tus clientas.
        </p>

        <a
          href="#diagnostico"
          className="mt-10 inline-block rounded-full bg-cream px-10 py-4 text-sm font-medium uppercase tracking-widest text-stone transition-opacity hover:opacity-90"
        >
          Haz tu diagnóstico gratuito
        </a>

        <p className="mt-6 font-display text-xs font-light uppercase tracking-widest text-cream/50">
          12 preguntas · 4 minutos · Tu nota sobre 100 al instante
        </p>
      </div>
    </section>
  );
}
