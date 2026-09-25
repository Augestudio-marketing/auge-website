const WHATSAPP_CONOCER =
  "https://wa.me/34613803022?text=" + encodeURIComponent("Hola, quiero conocer AUGE.");

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-marfil px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36"
    >
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.3fr,1fr] md:items-end md:gap-10">
        <div>
          <p
            className="animate-fade-in-up text-xs uppercase tracking-widest text-burgundy"
            style={{ animationDelay: "80ms" }}
          >
            Aesthetic Marketing / A&nbsp;/&nbsp;01
          </p>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-stone sm:text-5xl md:text-6xl">
            <span className="animate-fade-in-up block" style={{ animationDelay: "180ms" }}>
              Tu negocio merece
            </span>
            <span className="animate-fade-in-up block" style={{ animationDelay: "320ms" }}>
              estar a la altura
            </span>
            <span
              className="animate-fade-in-up block text-burgundy"
              style={{ animationDelay: "460ms" }}
            >
              de lo que haces.
            </span>
          </h1>

          <p
            className="animate-fade-in-up mt-8 max-w-md text-lg leading-relaxed text-stone/70"
            style={{ animationDelay: "620ms" }}
          >
            Construimos tu marca, tu presencia digital y los sistemas que
            hacen que tu negocio funcione sin que tengas que estar pendiente
            de todo.
          </p>

          <p
            className="animate-fade-in-up mt-5 max-w-lg text-xs uppercase tracking-widest text-stone/45"
            style={{ animationDelay: "740ms" }}
          >
            Branding · Web · Reservas · WhatsApp · Automatización · Captación
          </p>

          <div
            className="animate-fade-in-up mt-10 flex flex-wrap items-center gap-8"
            style={{ animationDelay: "860ms" }}
          >
            <a
              href={WHATSAPP_CONOCER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-burgundy px-9 py-4 text-xs uppercase tracking-widest text-burgundy transition-colors duration-300 hover:bg-burgundy hover:text-marfil"
            >
              Conoce AUGE →
            </a>
            <a
              href="#problema"
              className="text-xs uppercase tracking-widest text-stone/50 transition-colors hover:text-burgundy"
            >
              Ver cómo funciona ↓
            </a>
          </div>
        </div>

        <div
          className="animate-fade-in-up relative hidden aspect-[4/5] md:block"
          style={{ animationDelay: "400ms" }}
          aria-hidden
        >
          <svg viewBox="0 0 200 250" className="h-full w-full">
            <rect x="0.5" y="0.5" width="199" height="249" fill="none" stroke="#4A3122" strokeOpacity="0.15" />
            <line x1="0.5" y1="80" x2="199.5" y2="80" stroke="#4A3122" strokeOpacity="0.15" />
            <line x1="0.5" y1="170" x2="199.5" y2="170" stroke="#4A3122" strokeOpacity="0.15" />
            <line x1="100" y1="0.5" x2="100" y2="249.5" stroke="#4A3122" strokeOpacity="0.1" />
            <circle cx="100" cy="125" r="34" fill="none" stroke="#5C1B21" strokeWidth="0.8" />
            <text
              x="100"
              y="129"
              textAnchor="middle"
              fontSize="6"
              letterSpacing="0.15em"
              fill="#5C1B21"
              fontFamily="var(--font-display)"
            >
              AUGE
            </text>
            <text x="14" y="30" fontSize="5.5" letterSpacing="0.1em" fill="#4A3122" fillOpacity="0.55">
              MARCA
            </text>
            <text x="150" y="55" fontSize="5.5" letterSpacing="0.1em" fill="#4A3122" fillOpacity="0.55">
              WEB
            </text>
            <text x="14" y="200" fontSize="5.5" letterSpacing="0.1em" fill="#4A3122" fillOpacity="0.55">
              RESERVAS
            </text>
            <text x="146" y="225" fontSize="5.5" letterSpacing="0.1em" fill="#4A3122" fillOpacity="0.55">
              SISTEMA
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
