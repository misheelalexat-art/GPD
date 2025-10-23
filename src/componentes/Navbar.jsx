import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const baseLink = "transition-colors duration-300 hover:text-[#CAEDB8]";
  const activeLink = "text-[#963F2E] font-semibold";

  return (
    <nav className="sticky top-0 z-50 bg-[#A67B5B] text-[#FFF9F3] py-4 shadow-md backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo Turismo Perú"
            className="w-10 h-10 rounded-full border-2 border-[#EDE490]"
          />
          <span className="font-bold text-lg text-[#EDE490]">GPD</span>
        </div>

        {/* Botón Hamburguesa (solo móvil) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#FFF9F3] focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex gap-6">
          {["/", "/costa", "/selva", "/sierra", "/nosotras"].map((path, i) => {
            const labels = ["Inicio", "Costa", "Selva", "Sierra", "Nosotras"];
            const isActive = location.pathname === path;
            return (
              <Link
                key={i}
                to={path}
                className={`${baseLink} ${isActive ? activeLink : ""}`}
              >
                {labels[i]}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#8C6249] text-[#FFF9F3] px-6 pb-4"
          >
            <div className="flex flex-col gap-4 mt-3">
              {["/", "/costa", "/selva", "/sierra", "/nosotras"].map(
                (path, i) => {
                  const labels = [
                    "Inicio",
                    "Costa",
                    "Selva",
                    "Sierra",
                    "Nosotras",
                  ];
                  const isActive = location.pathname === path;
                  return (
                    <Link
                      key={i}
                      to={path}
                      onClick={() => setOpen(false)}
                      className={`block ${baseLink} ${
                        isActive ? activeLink : ""
                      }`}
                    >
                      {labels[i]}
                    </Link>
                  );
                }
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
