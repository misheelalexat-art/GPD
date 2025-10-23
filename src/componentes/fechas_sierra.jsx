import "./fechas_sierra.css";
import { motion } from "framer-motion";

function Fechas_sierra() {
  const lugares = [
    { nombre: "Cusco", fecha: "🌞 Mayo - Septiembre", desc: "Clima seco, ideal para Machu Picchu y el Valle Sagrado." },
    { nombre: "Puno", fecha: "🎭 Febrero", desc: "Fiesta de la Candelaria, Patrimonio Cultural de la Humanidad." },
    { nombre: "Ayacucho", fecha: "🌸 Marzo - Abril", desc: "Semana Santa, famosa por sus procesiones y celebraciones." },
    { nombre: "Junín", fecha: "🌱 Julio - Agosto", desc: "Fiestas patrias y paisajes andinos en su mejor época." },
    { nombre: "Huancavelica", fecha: "🌞 Mayo - Septiembre", desc: "Buen clima para explorar sus paisajes y aguas termales." },
    { nombre: "Cajamarca", fecha: "🎉 Febrero - Marzo", desc: "Carnaval de Cajamarca, el más famoso del Perú." },
    { nombre: "Apurímac", fecha: "☀️ Junio", desc: "Festividad del Inti Raymi y buen clima para trekking." },
    { nombre: "Pasco", fecha: "🌤 Mayo - Agosto", desc: "Clima seco para visitar la selva alta y la sierra central." },
    { nombre: "Huánuco", fecha: "🌺 Agosto", desc: "Fiesta de San Juan Bautista y clima agradable para excursiones." },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-[#fff8dc] to-[#f4e3a4]">
      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold mb-12 text-[#7b3f00] tracking-wide drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📅 Fechas recomendadas para visitar la Sierra del Perú
        </motion.h2>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lugares.map((lugar, index) => (
            <motion.div
              key={index}
              className="bg-[#eef3bc] rounded-xl shadow-md p-6 border border-[#d6c97b] hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h5 className="text-lg sm:text-xl font-bold mb-2 text-[#7b3f00] text-center">
                {lugar.nombre}
              </h5>
              <p className="text-[#4a2c00] font-semibold mb-2 text-center">
                {lugar.fecha}
              </p>
              <p className="text-[#3b2a0f] opacity-90 text-sm sm:text-base text-center leading-relaxed">
                {lugar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fechas_sierra;
