import { motion } from "framer-motion";
import datos from "../data/destinos_sierra.json";

function Destinos_sierra() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-100 via-yellow-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10 text-orange-800 drop-shadow-md tracking-wide">
          🌄 Destinos Destacados de la Sierra
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {datos.destinos.map((destino, index) => (
            <motion.div
              key={destino.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-amber-300 hover:border-orange-500 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 20px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="relative group">
                <img
                  src={`/${destino.imagen}`}
                  alt={destino.titulo}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                <h3 className="absolute bottom-3 left-4 text-white font-bold text-xl drop-shadow-lg">
                  {destino.titulo}
                </h3>
              </div>

              <div className="p-5">
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  {destino.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinos_sierra;
