import Image from "next/image";

const ENLACES = [
  { href: "#sistema", label: "El sistema" },
  { href: "#metodo", label: "Método" },
  { href: "#precios", label: "Precios" },
  { href: "#formacion", label: "Auge Formación" },
  { href: "#diagnostico", label: "Diagnóstico gratuito" },
];

export default function Footer() {
  return (
    <footer className="bg-stone px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-crema-wordmark.png"
              alt="AUGE. Aesthetic Marketing Studio"
              width={2135}
              height={537}
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Marca, agenda y fidelización para salones de belleza.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/40">
              Contacto
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>
                <a href="mailto:info@augestudio.es" className="hover:text-cream">
                  info@augestudio.es
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/34613803022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  +34 613 80 30 22 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/auge.aesthetic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  @auge.aesthetic
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-cream/40">
              Lunes a viernes, de 10:00 a 18:00
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/40">
              Enlaces
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {ENLACES.map((enlace) => (
                <li key={enlace.href}>
                  <a href={enlace.href} className="hover:text-cream">
                    {enlace.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-cream/40 sm:justify-start">
            <a href="#" className="hover:text-cream/70">
              Aviso legal
            </a>
            <a href="#" className="hover:text-cream/70">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-cream/70">
              Política de cookies
            </a>
          </div>
          <p className="text-xs text-cream/40">
            © 2026 AUGE Aesthetic Marketing Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
