
function Footer() {
  return (
    <footer className="bg-[#A67B5B] text-[#FFF9F3] text-center py-6 mt-10 shadow-md border-t-4 border-[#DDB892]">
      <p className="text-sm">
        © 2025{" "}
        <span className="relative inline-block font-semibold text-[#FFF9F3] group">
          <span className="relative z-10 transition duration-300 group-hover:text-[#F9A23B]">
            Turismo Selva del Perú
          </span>
          {/* ✨ Efecto de brillo sutil */}
          <span className="absolute inset-0 overflow-hidden rounded">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F9A23B] to-transparent opacity-0 group-hover:opacity-70 group-hover:animate-shine" />
          </span>
        </span>{" "}
        –{" "}
        <span className="text-[#FFE0B2] font-medium">
          Guía de Paisajes y Destinos
        </span>
      </p>

      {/* 🌟 Animación personalizada del brillo */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shine {
            animation: shine 1.5s linear infinite;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;

