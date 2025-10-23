export default function Quote() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto relative rounded-xl overflow-hidden shadow-lg">
        <img src="/quote-bg.jpg" alt="fondo cita" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative p-8 bg-amber-100">
          <blockquote className="italic text-lg text-slate-800">
            “El Perú es un país donde cada paisaje cuenta una historia única.”
          </blockquote>
          <p className="mt-3 text-sm text-slate-600">— Guía de viajes G.P.D</p>
        </div>
      </div>
    </section>
  );
}

