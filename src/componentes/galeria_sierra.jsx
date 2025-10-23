import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Galeria_sierra() {
  const imagenes = [
    "sierra.jpg",
    "apurimac.jpg",
    "ayacucho.jpg",
    "cajamarca.jpg",
    "cusco.jpg",
    "huancavelica.jpg",
    "huanuco.jpg",
    "junin.jpg",
    "puno.jpg",
  ];

  const [indice, setIndice] = useState(0);

  const prevImagen = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  const nextImagen = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  useEffect(() => {
    const interval = setInterval(() => nextImagen(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-[#fffaf0] to-[#f9e8c9]">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 text-[#7b3f00] tracking-wide drop-shadow-md">
         Sierra del Perú
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={prevImagen}
          className="bg-[#7b3f00] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#5c2e00] transition-colors duration-300 shadow-md"
        >
          ⟨
        </button>

        <div className="relative w-[320px] h-[200px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[350px] overflow-hidden rounded-lg shadow-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={indice}
              src={imagenes[indice]}
              alt="Galería Sierra"
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
              transition={{ duration: 0.6 }}
              className="object-cover w-full h-full"
            />
          </AnimatePresence>
        </div>

        <button
          onClick={nextImagen}
          className="bg-[#7b3f00] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#5c2e00] transition-colors duration-300 shadow-md"
        >
          ⟩
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {imagenes.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === indice ? "bg-[#7b3f00] scale-125" : "bg-[#d3b896]"
            }`}
            onClick={() => setIndice(i)}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Galeria_sierra;

