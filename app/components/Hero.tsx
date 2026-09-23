export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-marfil px-6 pb-20 pt-16 md:min-h-screen md:px-10 md:pb-24"
    >
      <div className="grain absolute inset-0 opacity-60" aria-hidden />

      <p
        className="animate-fade-in-up relative z-10 font-display text-2xl italic text-burgundy"
        style={{ animationDelay: "0ms" }}
      >
        auge.studio
      </p>

      <h1 className="relative z-10 mt-8 max-w-4xl font-display text-4xl leading-[1.1] tracking-tight text-stone sm:text-6xl md:text-7xl">
        <span className="animate-fade-in-up block" style={{ animationDelay: "150ms" }}>
          Tu negocio merece estar
        </span>
        <span className="animate-fade-in-up block italic text-burgundy" style={{ animationDelay: "320ms" }}>
          a la altura
        </span>
        <span className="animate-fade-in-up block" style={{ animationDelay: "480ms" }}>
          de lo que haces.
        </span>
      </h1>

      <p
        className="animate-fade-in-up relative z-10 mt-8 max-w-lg text-lg leading-relaxed text-stone/70"
        style={{ animationDelay: "650ms" }}
      >
        Construimos tu marca, tu presencia digital y los sistemas que hacen
        que tu negocio funcione sin que tengas que estar pendiente de todo.
      </p>

      <p
        className="animate-fade-in-up relative z-10 mt-5 max-w-lg text-xs uppercase tracking-widest text-stone/45"
        style={{ animationDelay: "780ms" }}
      >
        Branding · Web · Social Media · Reservas · Automatización · Captación
      </p>

      <div
        className="animate-fade-in-up relative z-10 mt-10 flex flex-col items-start gap-4"
        style={{ animationDelay: "900ms" }}
      >
        <a
          href="#diagnostico"
          className="inline-block rounded-full border border-burgundy bg-transparent px-10 py-4 text-sm uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-burgundy hover:text-marfil"
        >
          Quiero conocer AUGE
        </a>
        <p className="text-xs uppercase tracking-widest text-stone/45">
          Diagnóstico gratuito · Sin compromiso
        </p>
      </div>
    </section>
  );
}
