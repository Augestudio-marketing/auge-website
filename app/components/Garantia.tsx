export default function Garantia() {
  return (
    <section className="bg-hueso px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Sin riesgo y sin ataduras.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-cream px-8 py-10">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Garantía de puesta en marcha
            </p>
            <p className="mt-4 leading-relaxed text-stone/75">
              Si en 30 días desde la firma tu web, tus reservas, tu WhatsApp
              y tus reseñas no están funcionando, seguimos trabajando gratis
              hasta que lo estén y te regalamos el primer mes.
            </p>
            <p className="mt-4 text-xs text-stone/45">
              Condiciones: entregar el formulario y los accesos en los
              primeros 5 días.
            </p>
          </div>

          <div className="rounded-3xl bg-cream px-8 py-10">
            <p className="text-xs uppercase tracking-widest text-burgundy">
              Tu marca es tuya, siempre
            </p>
            <p className="mt-4 leading-relaxed text-stone/75">
              Tu dominio está a tu nombre desde el primer día. Si algún día
              te vas, te llevas tu web, tus contactos y todo tu contenido,
              con 30 días de acompañamiento. Y si vuelves en los 6 meses
              siguientes, no pagas de nuevo el arranque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
