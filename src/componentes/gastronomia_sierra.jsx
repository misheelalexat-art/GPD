import { motion } from "framer-motion";
import datos from "../data/gastronomia_sierra.json";

function Gastronomia_sierra() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#fff8e1] to-[#f2e3b6]">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-[#7b3f00] tracking-wide drop-shadow-md">
        🍽️ Gastronomía de la Sierra del Perú
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {datos.destinos.map((destino, index) => (
          <motion.div
            key={destino.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#fffaf0] rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 border border-[#d3b896] cursor-pointer"
          >
            <div className="relative group">
              <img
                src={`/${destino.img}`}
                alt={destino.region}
                className="w-full h-56 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h5 className="text-lg sm:text-xl font-semibold mb-3 text-[#7b3f00] text-center">
                {destino.region}
              </h5>

              <ul className="space-y-1 text-[#4a2c00] text-sm sm:text-base">
                {destino.text.split(",").map((plato, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    🍴 {plato.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gastronomia_sierra;
