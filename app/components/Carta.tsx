import Image from "next/image";

export default function Carta() {
  return (
    <section className="bg-marfil px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[280px_1fr] md:items-start">
        <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-3xl bg-cream md:mx-0">
          <Image
            src="/miriam.webp"
            alt="Miriam, fundadora de auge.studio"
            width={1500}
            height={1500}
            className="h-auto w-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-black tracking-tight text-stone sm:text-4xl">
            ¿Por qué creamos auge.studio?
          </h2>

          <div className="mt-10 space-y-6 leading-relaxed text-stone/75">
            <p>
              Un buen centro no debería quedarse pequeño por falta de
              tiempo. Pero pasa cada día. La dueña contesta WhatsApps entre
              clienta y clienta, confirma citas a las once de la noche y no
              llega a publicar en Instagram. El negocio crece hasta donde
              llegan sus horas, y ahí se queda.
            </p>
            <p>
              Llevo años dirigiendo operaciones y marketing en una academia
              online de más de 6.000 alumnos. Allí vi lo que cambia cuando
              los sistemas trabajan por ti. Menos caos, más tiempo y un
              crecimiento que no depende de estar encima de todo.
            </p>
            <p className="rounded-2xl border border-dashed border-stone/25 bg-cream/60 px-6 py-4 text-sm italic text-stone/50">
              Pendiente: 1–2 frases sobre tu vínculo personal con la
              belleza.
            </p>
            <p>
              Para eso existe auge.studio. Para que tu negocio tenga lo que
              tienen las grandes marcas, sin que tengas que aprender una
              sola herramienta. Entramos dentro y lo hacemos contigo.
            </p>
          </div>

          <p className="font-signature mt-10 text-4xl text-burgundy">Miriam</p>
        </div>
      </div>
    </section>
  );
}
