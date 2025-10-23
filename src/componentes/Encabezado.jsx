import { motion } from "framer-motion";

function Encabezado_sierra() {
  return (
    <header
      className="relative flex flex-col justify-center items-center text-center text-white h-[400px] overflow-hidden"
      style={{
        background: "url('selva.jpg') center center/cover no-repeat",
      }}
    >
      {/* Capa de color degradada suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E7D32]/70 via-[#F9A23B]/40 to-[#E8FFF4]/60"></div>

      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-5xl font-extrabold drop-shadow-lg text-[#F9A23B] hover:text-[#FFD966] transition duration-500">
          Selva Peruana
        </h1>
     <p className="text-lg mt-3 text-[#3E4C32] drop-shadow-sm">
  Descubre la magia, cultura y biodiversidad de la Amazonía
</p>

      </motion.div>

      {/* Brillo solar sutil animado */}
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#F9A23B]/10 to-transparent animate-shimmer"></span>

      {/* Estilos para la animación del brillo */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 6s linear infinite;
          }
        `}
      </style>
    </header>
  );
}

export default Encabezado_sierra;
