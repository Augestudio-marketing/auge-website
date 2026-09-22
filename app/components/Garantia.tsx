export default function Garantia() {
  return (
    <section className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-3xl font-black tracking-tight text-stone sm:text-4xl">
          Sin riesgo, sin ataduras.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-marfil px-8 py-10">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Garantía
            </p>
            <p className="mt-4 leading-relaxed text-stone/75">
              Si en 30 días tu sistema no está funcionando, seguimos
              trabajando gratis hasta que lo esté y te regalamos el primer
              mes.
            </p>
          </div>

          <div className="rounded-3xl bg-marfil px-8 py-10">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Tu marca es tuya
            </p>
            <p className="mt-4 leading-relaxed text-stone/75">
              Tu dominio, tu web y tus contactos están a tu nombre desde el
              primer día. Si te vas, te lo llevas todo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
