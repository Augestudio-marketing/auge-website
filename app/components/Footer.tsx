const WHATSAPP_CONTACTO =
  "https://wa.me/34613803022?text=" + encodeURIComponent("Hola, quiero conocer AUGE.");

const NAV = [
  { label: "Estudio", href: "/#estudio" },
  { label: "Sistema", href: "/#sistema" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Método", href: "/#metodo" },
  { label: "Diagnóstico", href: "/#diagnostico" },
];

export default function Footer() {
  return (
    <footer className="bg-chocolate px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-marfil">auge.studio</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-marfil/45">
            Aesthetic Marketing
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-marfil/60">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-marfil">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-marfil/60">
          <a
            href={WHATSAPP_CONTACTO}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-marfil"
          >
            Contacto
          </a>
          <a
            href="https://instagram.com/augestudio.es"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-marfil"
          >
            @augestudio.es
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-marfil/35">
          <a href="#" className="hover:text-marfil/70">
            Aviso legal
          </a>
          <a href="#" className="hover:text-marfil/70">
            Privacidad
          </a>
          <a href="#" className="hover:text-marfil/70">
            Cookies
          </a>
        </div>

        <p className="text-xs text-marfil/35">© 2026 auge.studio</p>
      </div>
    </footer>
  );
}
