import { motion } from "framer-motion";

function Footer_sierra() {
  return (
    <motion.footer
      className="bg-[#7b3f00] text-[#fff8e1] text-center py-6 sm:py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="mb-0 text-sm sm:text-base font-medium drop-shadow-md">
        © 2025 Turismo Sierra del Perú — Guía de Paisajes y Destinos 🌄
      </p>
    </motion.footer>
  );
}

export default Footer_sierra;

