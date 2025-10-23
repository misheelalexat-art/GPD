import fechas from "../data/fechas.json";
import { motion } from "framer-motion";

function Fechas() {
  // Variantes de animación para scroll reveal
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
      id="fechas"
      className="w-full py-16 px-4 bg-gradient-to-b from-[#E6F7EE] via-[#FFFBEA] to-[#E8FFF4]"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#2E7D32] mb-12"
        >
          🌴 Festividades de la Selva Peruana
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {fechas.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#F9FFF9] border-2 border-[#A8E6CF] rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300 p-6"
            >
              <h3 className="text-xl font-bold text-[#2E7D32] mb-2">
                {f.departamento}
              </h3>

              <p className="text-sm text-[#4E5D3E] mb-3">
                <span className="font-semibold text-[#558B2F]">Capital:</span>{" "}
                {f.capital}
              </p>

              <p className="text-[#3E4C32] mb-4">{f.descripcion}</p>

              <h4 className="text-[#F9A23B] font-semibold mb-2">
                🎉 Festividades principales:
              </h4>

              <ul className="list-disc list-inside text-[#3B2E2E] space-y-1">
                {f.festividades.map((fest, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {fest}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fechas;
