import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-burgundy-glow relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center md:px-10"
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

        <h1 className="mt-10 max-w-3xl font-display text-4xl font-black lowercase leading-tight tracking-tight text-cream sm:text-5xl md:text-6xl">
          llenamos la agenda de los negocios de belleza y estética.
        </h1>

        <p className="mx-auto mt-8 max-w-xl font-display text-lg font-light leading-relaxed text-cream/70">
          Web, reservas, WhatsApp que responde solo, reseñas, fidelización y
          publicidad. Lo instalamos dentro de tu negocio y lo gestionamos
          cada mes. Tú atiendes; el sistema hace el resto.
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
