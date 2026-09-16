import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="relative px-6 pb-28 pt-16 md:px-10 md:pb-36">
      <div className="mx-auto max-w-5xl">
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden rounded-3xl md:h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=2000&q=80&fm=jpg&fit=crop&auto=format"
            alt=""
            fill
            sizes="(min-width: 768px) 900px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="grain relative z-10 -mt-16 ml-auto max-w-xl rounded-3xl bg-cream px-8 py-10 md:-mt-24 md:mr-8 md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-widest2 text-burgundy">
            Sobre AUGE
          </p>
          <p className="mt-6 font-serif text-2xl leading-relaxed text-stone md:text-3xl">
            Somos el equipo de marketing que nunca tuviste tiempo de
            contratar. Trabajamos codo a codo con peluquerías, salones y
            centros de uñas que saben que su trabajo es excelente, pero
            necesitan que se note fuera del salón. Nada de jerga técnica ni
            promesas vacías: solo lo que hace falta para que tu agenda no
            pare de sonar.
          </p>
        </div>
      </div>
    </section>
  );
}
