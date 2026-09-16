import Image from "next/image";

const NAV_LINKS = [
  { href: "#sistema", label: "El sistema" },
  { href: "#metodo", label: "Método" },
  { href: "#momento", label: "Para quién" },
  { href: "#precios", label: "Precios" },
];

export default function Header() {
  return (
    <header className="bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#inicio">
          <Image
            src="/logo-burdeos-wordmark.png"
            alt="AUGE."
            width={1317}
            height={352}
            priority
            className="h-7 w-auto md:h-8"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
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
          href="#diagnostico"
          className="whitespace-nowrap rounded-full bg-burgundy px-4 py-2 text-xs uppercase tracking-widest text-cream transition-opacity hover:opacity-90 sm:px-5 sm:text-sm"
        >
          <span className="sm:hidden">Diagnóstico</span>
          <span className="hidden sm:inline">Diagnóstico gratuito</span>
        </a>
      </div>
    </header>
  );
}
