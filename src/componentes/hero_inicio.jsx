export default function Hero_inicio() {
  return (
    <section className="relative overflow-hidden">

      <div className="animated-gradient py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 drop-shadow-md">
              Explora las tres regiones del Perú
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              Paisajes, cultura y sabores en Costa, Sierra y Selva. Te traemos rutas, experiencias y recomendaciones para planear tu viaje perfecto.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#Costa"
                className="inline-block px-5 py-3 rounded-full font-semibold shadow-md card-contrast hover:scale-105 transition transform"
              >
                Explorar Costa
              </a>

              <a
                href="#Sierra"
                className="inline-block px-5 py-3 rounded-full font-semibold shadow-md card-contrast hover:scale-105 transition transform"
              >
                Explorar Sierra
              </a>

              <a
                href="#Selva"
                className="inline-block px-5 py-3 rounded-full font-semibold shadow-md card-contrast hover:scale-105 transition transform"
              >
                Explorar Selva
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg shadow-sm card-contrast text-center">
                <h4 className="font-semibold text-slate-800">Playas & Gastronomía</h4>
                <p className="text-sm text-slate-700 mt-1">Sabores marinos y playas para relajarte.</p>
              </div>
              <div className="p-3 rounded-lg shadow-sm card-contrast text-center">
                <h4 className="font-semibold text-slate-800">Rutas de Trekking</h4>
                <p className="text-sm text-slate-700 mt-1">Montañas, comunidades y miradores increíbles.</p>
              </div>
              <div className="p-3 rounded-lg shadow-sm card-contrast text-center">
                <h4 className="font-semibold text-slate-800">Aventura en la Selva</h4>
                <p className="text-sm text-slate-700 mt-1">Ríos, fauna y experiencias eco-turísticas.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center z-10">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
              <img src="/jk.png" alt="Paisajes del Perú" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-slate-800/80 text-white px-3 py-1 rounded-md text-sm">
                Destinos Imperdibles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


