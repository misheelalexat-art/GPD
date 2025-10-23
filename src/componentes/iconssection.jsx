export default function IconsSection() {
  const regiones = [
    { nombre: "Costa", color: "bg-amber-200", svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 12c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round"/></svg>
      ), texto: "Playas y gastronomía" },
    { nombre: "Sierra", color: "bg-green-200", svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M2 20h20L12 4 2 20z" stroke="#065f46" strokeWidth="1.5" strokeLinecap="round"/></svg>
      ), texto: "Montañas y senderos" },
    { nombre: "Selva", color: "bg-sky-200", svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M5 12h14" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round"/></svg>
      ), texto: "Ríos y biodiversidad" },
  ];

  return (
    <section className="py-10 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {regiones.map((r) => (
          <div key={r.nombre} className={`p-5 rounded-xl shadow-md ${r.color} flex flex-col items-center text-center hover:shadow-xl transition`}>
            <div className="p-3 rounded-full bg-white/80 mb-3">{r.svg}</div>
            <h4 className="font-semibold text-slate-800">{r.nombre}</h4>
            <p className="text-sm text-slate-700 mt-2">{r.texto}</p>
            <a className="mt-3 text-amber-600 font-medium" href={`#${r.nombre}`}>Explorar →</a>
          </div>
        ))}
      </div>
    </section>
  );
}




