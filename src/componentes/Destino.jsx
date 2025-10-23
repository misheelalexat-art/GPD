import destinos from "../data/destinos.json";
import { motion } from "framer-motion";

function Destino() {
  const selvaAlta = destinos.selva_alta;
  const selvaBaja = destinos.selva_baja;

  // Variantes de animación para entrada suave
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="destinos"
      className="w-full py-16 px-4 bg-gradient-to-b from-[#E6F7EE] via-[#FFFBEA] to-[#E8FFF4]"
    >
      <div className="container mx-auto">
        {/* --- SELVA ALTA --- */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-bold text-3xl mb-10 text-[#2E7D32]"
        >
          🌄 Destinos de la Selva Alta
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {selvaAlta.map((destino, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#F9FFF9] rounded-2xl shadow-sm overflow-hidden border-t-4 border-[#66BB6A] hover:shadow-lg transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300"
            >
              <motion.img
                src={`./${destino.img}`}
                alt={destino.departamento}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="p-5">
                <h5 className="font-bold text-lg text-[#2E7D32] mb-2">
                  {destino.departamento} – {destino.capital}
                </h5>
                <p className="text-[#3E4C32] text-sm mb-2">
                  {destino.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SELVA BAJA --- */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-bold text-3xl mb-10 text-[#00796B]"
        >
          🌴 Destinos de la Selva Baja
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {selvaBaja.map((destino, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#E9FFF0] rounded-2xl shadow-sm overflow-hidden border-t-4 border-[#4DB6AC] hover:shadow-lg transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300"
            >
              <motion.img
                src={`./${destino.img}`}
                alt={destino.departamento}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="p-5">
                <h5 className="font-bold text-lg text-[#00796B] mb-2">
                  {destino.departamento} – {destino.capital}
                </h5>
                <p className="text-[#3E4C32] text-sm mb-2">
                  {destino.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destino;
