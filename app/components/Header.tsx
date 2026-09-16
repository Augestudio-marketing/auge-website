import Image from "next/image";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#inicio">
          <Image
            src="/logo-crema-wordmark.png"
            alt="AUGE."
            width={2135}
            height={537}
            priority
            className="h-7 w-auto md:h-8"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-cream/70 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-cream/40 px-5 py-2 text-sm uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-stone"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
