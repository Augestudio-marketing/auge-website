const NEGOCIOS = [
  "Clínicas",
  "Estética",
  "Peluquerías",
  "Nails",
  "Fisio",
  "Psicología",
  "Bienestar",
  "Beauty",
];

export default function Carrusel() {
  const items = [...NEGOCIOS, ...NEGOCIOS];

  return (
    <section className="overflow-hidden bg-burgundy py-14">
      <p className="text-center text-xs uppercase tracking-widest2 text-cream/60">
        Para negocios que viven de su agenda
      </p>

      <div className="mt-8 flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {items.map((negocio, i) => (
            <span
              key={`${negocio}-${i}`}
              className="whitespace-nowrap font-display text-2xl italic text-cream/50 md:text-3xl"
            >
              {negocio}
              <span className="ml-10 not-italic text-cream/25">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
