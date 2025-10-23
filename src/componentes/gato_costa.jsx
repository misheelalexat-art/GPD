import { Link } from "react-router-dom";

function Gato() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 shadow-md"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Marca */}
        <div className="flex items-center space-x-2">
          <img
            src="./logo.png"
            alt="Logo Costa del Perú"
            className="w-10 h-10 object-contain"
          />
          <span className="text-pink-700 font-semibold text-lg tracking-wide">
            Costa del Perú
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-pink-800 hover:text-pink-600 transition-colors duration-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/costa"
              className="text-pink-800 font-semibold border-b-2 border-pink-500"
            >
              Costa
            </Link>
          </li>
          <li>
            <Link
              to="/selva"
              className="text-pink-800 hover:text-pink-600 transition-colors duration-200"
            >
              Selva
            </Link>
          </li>
          <li>
            <Link
              to="/sierra"
              className="text-pink-800 hover:text-pink-600 transition-colors duration-200"
            >
              Sierra
            </Link>
          </li>
          <li>
            <Link
              to="/nosotras"
              className="text-pink-800 hover:text-pink-600 transition-colors duration-200"
            >
              Nosotras
            </Link>
          </li>
        </ul>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button className="text-pink-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Gato;
