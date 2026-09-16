import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="bg-cream px-6 pb-20 pt-16 md:px-10 md:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-widest2 text-burgundy">
          Sistema Auge · Para peluquerías, salones de belleza y de uñas
        </p>

        <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl md:text-6xl">
          Tu agenda llena. Tu marca a la altura. Y tú, fuera del móvil.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone/70">
          Web a medida, reservas online, WhatsApp que responde solo, reseñas
          y clientas que vuelven. Todo en un único sistema que montamos y
          gestionamos nosotras. Tú solo atiendes a tus clientas.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#diagnostico"
            className="rounded-full bg-burgundy px-10 py-4 text-sm uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
          >
            Haz tu diagnóstico gratuito (3 min)
          </a>
          <a
            href="#sistema"
            className="rounded-full px-10 py-4 text-sm uppercase tracking-widest text-stone/70 transition-colors hover:text-burgundy"
          >
            Ver cómo funciona ↓
          </a>
        </div>

        <p className="mt-6 text-xs uppercase tracking-widest text-stone/45">
          En marcha en 30 días · Menos de 3 horas de tu tiempo · Tu web y tus
          contactos, siempre tuyos
        </p>
      </div>

      <div className="relative mx-auto mt-16 h-[42vh] min-h-[260px] w-full max-w-5xl overflow-hidden rounded-3xl md:h-[55vh]">
        <Image
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=2000&q=80&fm=jpg&fit=crop&auto=format"
          alt="Interior editorial de un salón de belleza"
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
