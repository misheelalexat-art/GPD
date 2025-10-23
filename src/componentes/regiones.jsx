export default function RegionesDestacadas() {
  const items = [
    {
      id: "costa",
      titulo: "Costa - Playas y Sabores",
      img: "/costap.png",
      texto: "Playas, ceviche y tradiciones marineras. Ideal para surf, sol y gastronomía.",
    },
    {
      id: "sierra",
      titulo: "Sierra - Montañas y Cultura",
      img: "/sierrap.png",
      texto: "Senderos, ruinas y comunidades ancestrales. Trekking, miradores y festividades.",
    },
    {
      id: "selva",
      titulo: "Selva - Naturaleza y Aventura",
      img: "/selvap.png",
      texto: "Ríos, biodiversidad y ecoturismo. Excursiones y observación de fauna.",
    },
  ];

  return (
    <section id="Regiones" className="py-12 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Regiones Destacadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article key={it.id} className="rounded-xl overflow-hidden shadow-lg">
            <div className="h-44 md:h-56 relative">
              <img src={it.img} alt={it.titulo} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <h3 className="absolute left-4 bottom-4 text-white font-bold text-lg">{it.titulo}</h3>
            </div>
            <div className="p-4 bg-white">
              <p className="text-slate-700">{it.texto}</p>
              <a href={`#${it.id}`} className="inline-block mt-3 text-sm font-semibold text-amber-600 hover:underline">
                Ver más →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
