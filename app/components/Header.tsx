const WHATSAPP_URL =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, quiero saber más sobre AUGE.");

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#formacion", label: "Formación" },
  { href: "#sobre", label: "Nosotras" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone/10 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#inicio" className="font-serif text-2xl font-black tracking-tight text-stone">
          AUGE.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-stone/70 transition-colors hover:text-burgundy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-burgundy px-5 py-2 text-sm uppercase tracking-widest text-burgundy transition-colors hover:bg-burgundy hover:text-cream"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
