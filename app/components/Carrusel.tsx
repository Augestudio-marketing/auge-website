const NEGOCIOS = [
  "Clínicas de medicina estética",
  "Centros de estética",
  "Peluquerías",
  "Salones de uñas",
  "Pestañas y cejas",
  "Micropigmentación",
  "Spas y bienestar",
  "Barberías",
];

export default function Carrusel() {
  const items = [...NEGOCIOS, ...NEGOCIOS];

  return (
    <section className="overflow-hidden bg-cream py-16">
      <p className="text-center text-xs uppercase tracking-widest2 text-burgundy">
        Para negocios que viven de su agenda
      </p>

      <div className="mt-10 flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {items.map((negocio, i) => (
            <span
              key={`${negocio}-${i}`}
              className="whitespace-nowrap font-display text-2xl font-light text-stone/40 md:text-3xl"
            >
              {negocio}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
