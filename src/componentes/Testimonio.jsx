import { motion } from "framer-motion";

function Testimonio() {
  const testimonios = [
    {
      texto:
        "Viajar a la selva fue una de las mejores experiencias de mi vida. Disfruté del contacto con la naturaleza y la amabilidad de la gente. 🌿",
      autor: "— Sofía Ramírez, Lima",
    },
    {
      texto:
        "La gastronomía amazónica me sorprendió muchísimo, especialmente el juane y el tacacho con cecina. ¡Volvería solo por la comida! 🍽️",
      autor: "— Diego Paredes, Cusco",
    },
    {
      texto:
        "Recomiendo visitar la selva en junio durante la Fiesta de San Juan. La cultura, las danzas y la alegría son inolvidables. 🎉",
      autor: "— Mariana Torres, Arequipa",
    },
  ];

  return (
    <section
      id="testimonios"
      className="w-full py-16 px-4 bg-gradient-to-b from-[#E6F7EE] via-[#FFFBEA] to-[#E8FFF4]"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-[#2E7D32]"
        >
          💬 Testimonios de Viajeros
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="bg-[#F9FFF9] border-2 border-[#A8E6CF] text-[#3E4C32] shadow-md rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              <p className="italic text-base mb-4 leading-relaxed">{t.texto}</p>
              <h4 className="font-semibold text-[#F9A23B]">{t.autor}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonio;


