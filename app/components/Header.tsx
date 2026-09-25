"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WHATSAPP_CONOCER =
  "https://wa.me/34613803022?text=" + encodeURIComponent("Hola, quiero conocer AUGE.");

const NAV = [
  { label: "Estudio", href: "/#estudio" },
  { label: "Sistema", href: "/#sistema" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Método", href: "/#metodo" },
  { label: "Diagnóstico", href: "/#diagnostico" },
  { label: "Planes", href: "/planes" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`bg-marfil/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-sm shadow-stone/10" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" onClick={() => setOpen(false)}>
          <Image
            src="/logo-burdeos.webp"
            alt="auge.studio"
            width={2000}
            height={667}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest text-stone/60 transition-colors hover:text-burgundy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_CONOCER}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden whitespace-nowrap border-b border-burgundy pb-0.5 text-xs uppercase tracking-widest text-burgundy transition-colors duration-300 hover:border-stone hover:text-stone lg:inline-block"
        >
          Conoce AUGE →
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-stone transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-stone transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-marfil transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-t border-stone/10 py-4 text-sm uppercase tracking-widest text-stone/70 first:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_CONOCER}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block border-b border-burgundy pb-0.5 text-sm uppercase tracking-widest text-burgundy"
          >
            Conoce AUGE →
          </a>
        </nav>
      </div>
    </header>
  );
}
