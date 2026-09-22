import Image from "next/image";

const NAV_LINKS = [
  { href: "#metodo", label: "Método" },
  { href: "#quien-esta-detras", label: "Quién está detrás" },
];

export default function Header() {
  return (
    <header className="bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#inicio">
          <Image
            src="/logo-burdeos.webp"
            alt="auge.studio"
            width={2000}
            height={667}
            priority
            className="h-6 w-auto md:h-7"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone/70 transition-colors hover:text-burgundy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#diagnostico"
          className="whitespace-nowrap rounded-full bg-burgundy px-4 py-2 text-xs font-medium text-cream transition-opacity hover:opacity-90 sm:px-5 sm:text-sm"
        >
          <span className="sm:hidden">Diagnóstico</span>
          <span className="hidden sm:inline">Haz tu diagnóstico</span>
        </a>
      </div>
    </header>
  );
}
