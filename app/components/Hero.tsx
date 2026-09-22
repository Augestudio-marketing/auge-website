export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[85vh] flex-col items-center overflow-hidden bg-stone px-6 pb-20 pt-24 text-center md:min-h-screen md:justify-center md:px-10 md:pb-0 md:pt-20"
    >
      <div
        className="animate-float-a absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-burgundy/70 blur-[110px]"
        aria-hidden
      />
      <div
        className="animate-float-b absolute -bottom-40 -right-24 h-[36rem] w-[36rem] rounded-full bg-burgundy/60 blur-[120px]"
        aria-hidden
      />
      <div className="grain absolute inset-0" aria-hidden />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="animate-fade-in-up max-w-3xl font-display text-4xl font-black leading-tight tracking-tight text-cream sm:text-5xl md:text-6xl">
          Llenamos la agenda de tu peluquería, tu salón de uñas o tu centro
          de belleza.
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-8 max-w-xl font-display text-lg font-light leading-relaxed text-cream/70"
          style={{ animationDelay: "100ms" }}
        >
          Creamos tu web, gestionamos tus reservas, contestamos tu WhatsApp
          y pedimos las reseñas por ti. Nosotras lo instalamos y lo
          cuidamos cada mes. Tú solo atiendes a tus clientas.
        </p>

        <a
          href="#diagnostico"
          className="animate-fade-in-up mt-10 inline-block rounded-full bg-cream px-10 py-4 text-sm font-medium uppercase tracking-widest text-stone transition-transform hover:scale-[1.03] hover:opacity-90"
          style={{ animationDelay: "200ms" }}
        >
          Haz tu diagnóstico gratuito
        </a>

        <p
          className="animate-fade-in-up mt-6 font-display text-xs font-light uppercase tracking-widest text-cream/50"
          style={{ animationDelay: "300ms" }}
        >
          12 preguntas · 4 minutos · Tu nota sobre 100 al instante
        </p>
      </div>
    </section>
  );
}
