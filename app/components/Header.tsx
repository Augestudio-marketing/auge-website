"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-cream/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-sm shadow-stone/10" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/">
          <Image
            src="/logo-burdeos.webp"
            alt="auge.studio"
            width={2000}
            height={667}
            priority
            className="h-9 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="/#metodo"
            className="text-sm text-stone/70 transition-colors hover:text-burgundy"
          >
            Método
          </a>
          <a
            href="/planes"
            className="text-sm text-stone/70 transition-colors hover:text-burgundy"
          >
            Planes
          </a>
        </nav>

        <a
          href="/#diagnostico"
          className="whitespace-nowrap rounded-full border border-burgundy bg-burgundy px-4 py-2 text-xs text-cream transition-colors duration-300 hover:bg-transparent hover:text-burgundy sm:px-5 sm:text-sm"
        >
          <span className="sm:hidden">Diagnóstico</span>
          <span className="hidden sm:inline">Haz tu diagnóstico</span>
        </a>
      </div>
    </header>
  );
}
