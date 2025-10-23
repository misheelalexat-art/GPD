export default function Footer_1() {
  return (
    <footer className="py-8 mt-12 animated-gradient text-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div>
            <h4 className="font-bold">Turismo Perú</h4>
            <p className="text-sm text-slate-700 mt-2">Guía de Paisajes y Destinos</p>
          </div>

          <div>
            <h5 className="font-semibold">Explora</h5>
            <ul className="mt-2 text-sm">
              <li><a href="#Costa" className="hover:underline">Costa</a></li>
              <li><a href="#Sierra" className="hover:underline">Sierra</a></li>
              <li><a href="#Selva" className="hover:underline">Selva</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Contacto</h5>
            <p className="text-sm mt-2">info@turismosierra.pe</p>
            <div className="flex gap-3 mt-3">
              <a href="#" aria-label="facebook" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">f</a>
              <a href="#" aria-label="instagram" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">ig</a>
              <a href="#" aria-label="twitter" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">t</a>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-700 text-center mt-6">
          © {new Date().getFullYear()} Turismo Perú — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}


