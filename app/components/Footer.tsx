export default function Footer() {
  return (
    <footer className="bg-stone px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="font-display text-sm font-semibold text-cream/50">
          Aesthetic Marketing
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/60">
          <a href="mailto:info@augestudio.es" className="hover:text-cream">
            info@augestudio.es
          </a>
          <a
            href="https://wa.me/34613803022"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            +34 613 80 30 22
          </a>
          <a
            href="https://instagram.com/auge.aesthetic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            @auge.aesthetic
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-cream/35">
          <a href="#" className="hover:text-cream/70">
            Aviso legal
          </a>
          <a href="#" className="hover:text-cream/70">
            Privacidad
          </a>
          <a href="#" className="hover:text-cream/70">
            Cookies
          </a>
        </div>

        <p className="text-xs text-cream/35">© 2026 auge.studio</p>
      </div>
    </footer>
  );
}
