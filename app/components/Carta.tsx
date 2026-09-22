import Reveal from "./Reveal";

export default function Carta() {
  return (
    <section className="bg-marfil px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-display text-3xl font-black tracking-tight text-stone sm:text-4xl">
            ¿Por qué creamos auge.studio?
          </h2>
        </Reveal>

        <Reveal delay={100}>
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
            <p>
              La belleza siempre ha sido terreno conocido para mí. Años
              probando salones, pidiendo cita tras cita y viendo de cerca
              lo que separa a un centro que enamora de uno que solo
              cumple. Ese cariño por el sector es el que pongo en cada
              proyecto.
            </p>
            <p>
              Para eso existe auge.studio. Para que tu negocio tenga lo que
              tienen las grandes marcas, sin que tengas que aprender una
              sola herramienta. Entramos dentro y lo hacemos contigo.
            </p>
          </div>

          <p className="font-signature mt-10 text-4xl text-burgundy">
            Miriam
          </p>
        </Reveal>
      </div>
    </section>
  );
}
