import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Formulario2() {
  return (
    <section
      id="formulario"
      className="relative w-full overflow-hidden py-20 px-4 bg-gradient-to-b from-[#E6F7EE] via-[#FFFBEA] to-[#E8FFF4]"
    >
      {/* 🌿 Fondo degradado animado sutil */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-[#E6F7EE] via-[#FFFBEA] to-[#E8FFF4] opacity-60"
      ></motion.div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[#2E7D32] mb-4"
        >
          ¿Lista para descubrir la belleza de la selva? 🌴
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#3E4C32] max-w-2xl mx-auto mb-8 text-lg leading-relaxed"
        >
          Explora los paisajes más sorprendentes, conecta con la naturaleza y vive
          una experiencia inolvidable en el corazón de la Amazonía. 🌿💧
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            to="/contacto"
            className="border-2 border-[#2E7D32] text-[#2E7D32] px-8 py-3 rounded-xl font-semibold hover:bg-[#2E7D32] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            🌞 Planifica tu viaje
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Formulario2;


