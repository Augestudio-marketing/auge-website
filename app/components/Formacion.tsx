import Image from "next/image";

export default function Formacion() {
  return (
    <section id="formacion" className="relative overflow-hidden px-6 py-32 md:px-10 md:py-44">
      <Image
        src="https://images.unsplash.com/photo-1595475884562-073c30d45670?w=2000&q=80&fm=jpg&fit=crop&auto=format"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone/80" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-widest2 text-cream/60">
          Complemento
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl">
          Auge <span className="italic">Formación</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/70">
          Las herramientas solo funcionan si tu equipo sabe sacarles partido.
          Talleres breves y prácticos para tu personal en atención al cliente,
          venta de productos en cabina y uso diario de WhatsApp y agenda —
          para que el crecimiento se note dentro del salón, no solo en los
          números.
        </p>
      </div>
    </section>
  );
}
