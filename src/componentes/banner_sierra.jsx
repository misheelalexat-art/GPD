import { Link } from "react-router-dom";
import "./banner_sierra.css";

function Banner_sierra() {
  return (
    <nav className="navbar text-white shadow sticky top-0 z-50 bg-[#d78f1f]">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">

       
        <Link to="/" className="text-xl sm:text-2xl font-semibold tracking-wide">
          Sierra del Perú
        </Link>

        
        <button
          className="inline-flex items-center p-2 text-white rounded-md md:hidden hover:text-yellow-200 hover:bg-[#b76e12] focus:outline-none focus:ring-2 focus:ring-yellow-300"
          type="button"
          onClick={() => {
            const menu = document.getElementById("menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

   
        <div className="w-full md:flex md:w-auto hidden" id="menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded transition-colors duration-300" 
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/costa"
                  className="block py-2 px-3 rounded transition-colors duration-300" 
                >
                Costa
                </Link>
              </li>

              <li>
                <Link
                  to="/selva"
                  className="block py-2 px-3 rounded transition-colors duration-300" 
                >
               Selva
                </Link>
              </li>

              <li>
                <Link
                  to="/sierra"
                  className="block py-2 px-3 rounded transition-colors duration-300" 
                >
               Sierra
                </Link>
              </li>

               <li>
                <Link
                  to="/nosotras"
                  className="block py-2 px-3 rounded transition-colors duration-300" 
                >
               Nosotras
                </Link>
              </li>


              
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Banner_sierra;
