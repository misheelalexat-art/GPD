import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import departamentos from "../data/gastronomia.json";

function Gastronomia() {
  const [abierto, setAbierto] = useState(null);

  return (
    <section
      id="gastronomia"
      className="w-full py-16 px-4 bg-gradient-to-b from-[#E6F7EE] via-[#FFFBEA] to-[#E8FFF4]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-10">
          🍽️ Gastronomía de la Selva por Departamentos
        </h2>

        <div className="space-y-6">
          {departamentos.map((dep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl shadow-md overflow-hidden border-t-4 border-[#66BB6A] bg-[#F9FFF9] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <button
                onClick={() => setAbierto(abierto === index ? null : index)}
                className="w-full text-left bg-[#388E3C] text-white px-6 py-4 font-semibold flex justify-between items-center hover:bg-[#4CAF50] transition"
              >
                <span>
                  {dep.departamento} —{" "}
                  <span className="italic text-[#C8E6C9]">{dep.capital}</span>
                </span>
                <motion.span
                  animate={{ rotate: abierto === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {abierto === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="bg-gradient-to-r from-[#D7F8E3] to-[#E9FFF0] px-6 py-5 text-[#2E3D1F]"
                  >
                    <h3 className="font-semibold text-[#1B5E20] mb-2">
                      Platos típicos:
                    </h3>
                    <ul className="list-disc ml-5 space-y-1 text-[#33691E]">
                      {dep.platos_tipicos.map((plato, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {plato}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gastronomia;



