import { Link } from "react-router-dom";

export default function Navbar_1() {
  return (
    <nav className="sticky top-0 z-50 animated-gradient shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="#" className="flex items-center space-x-3 font-bold text-lg text-slate-800">
          <img src="/jk.png" alt="Logo" className="w-11 h-11 rounded-full border-2 border-white shadow-sm" />
          <span>G.P.D</span>
        </Link>

        <ul className="hidden md:flex space-x-6">
            <li >
              <Link
                to='/'
                className="font-medium text-slate-800 hover:text-slate-900 hover:underline transition-colors duration-200"
              >
                Inicio
              </Link>
            </li>
            <li >
              <Link
                to='/costa'
                className="font-medium text-slate-800 hover:text-slate-900 hover:underline transition-colors duration-200"
              >
                Costa
              </Link>
            </li>
            <li>
              <Link
                to='/selva'
                className="font-medium text-slate-800 hover:text-slate-900 hover:underline transition-colors duration-200"
              >
              selva
              </Link>
            </li>
            <li>
              <Link
                to='sierra'
                className="font-medium text-slate-800 hover:text-slate-900 hover:underline transition-colors duration-200"
              >
               Sierra
              </Link>
            </li>
            <li>
              <Link
                to='/nosotras'
                className="font-medium text-slate-800 hover:text-slate-900 hover:underline transition-colors duration-200"
              >
               Nosotras
              </Link>
            </li>
        </ul>

        <div className="md:hidden">
          <button
            className="text-slate-800 focus:outline-none p-2 rounded-md hover:bg-white/40"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <ul
        id="mobile-menu"
        className="md:hidden hidden px-4 py-3 space-y-2 shadow-inner"
      >
          <li>
            <Link to='/' className="block font-medium text-slate-800 py-1">
              Inicio
            </Link>
          </li>
          <li>
            <Link to='/costa' className="block font-medium text-slate-800 py-1">
             Costa
            </Link>
          </li>
          <li>
            <Link to='/selva' className="block font-medium text-slate-800 py-1">
             Selva
            </Link>
          </li>
          <li>
            <Link to='/sierra' className="block font-medium text-slate-800 py-1">
             Sierra
            </Link>
          </li>
          <li>
            <Link to='/nosotras' className="block font-medium text-slate-800 py-1">
             Nosotras
            </Link>
          </li>
      </ul>
    </nav>
  );
}
