import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Calendario_costa() {
  const events = {
    "1-20": "Festival de la Marinera – Trujillo, La Libertad (Enero)",
    "2-15": "Carnavales de Catacaos – Piura (Febrero)",
    "3-19": "Semana de San José – Lambayeque (Marzo)",
    "4-23": "Festival del Pescador – Chimbote, Áncash (Abril)",
    "5-1": "Fiesta de San Isidro Labrador – Lima y Huaral (Mayo)",
    "6-24": "San Juan – Tumbes (Junio)",
    "7-28": "Fiestas Patrias – Todo el Perú (Julio)",
    "8-15": "Festival de la Vendimia – Ica (Agosto)",
    "9-4": "Festival del Cebiche – Lima (Septiembre)",
    "10-8": "Homenaje a Miguel Grau – Callao (Octubre)",
    "11-25":
      "Festival Gastronómico del Camarón – Arequipa y Moquegua (Noviembre)",
    "12-8": "Inmaculada Concepción – Tacna (Diciembre)",
  };

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedEvent, setSelectedEvent] = useState("");

  function renderCalendar(month, year) {
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const start = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < start; i++) {
      days.push(<div key={`empty-${i}`} className="bg-transparent"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const key = `${month + 1}-${day}`;
      const isEvent = events[key];

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`p-4 text-center rounded-lg cursor-pointer shadow-sm transition-all duration-300
            ${
              isEvent
                ? "bg-[#ff7b7b] text-white font-bold hover:bg-[#e05b5b]"
                : "bg-[#fff4e3] hover:bg-[#ffe0b3] text-gray-800"
            }`}
          onClick={() =>
            setSelectedEvent(
              events[key]
                ? `🎉 ${events[key]}`
                : `📅 No hay festividades el ${day} de ${months[month]}`
            )
          }
        >
          {day}
        </motion.div>
      );
    }

    return days;
  }

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <section
      className="py-10 bg-gradient-to-b from-[#fffceb] to-[#ffe4b5]"
      data-aos="zoom-in-up"
    >
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold mb-6 text-[#ff7b7b]"
        >
          Calendario de Festividades de la Costa Peruana
        </motion.h2>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prevMonth}
            className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors"
          >
            &lt;
          </button>
          <h3 className="text-xl font-semibold text-gray-700">
            {months[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={nextMonth}
            className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors"
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 max-w-[700px] mx-auto mb-2 text-sm sm:text-base">
          {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d) => (
            <div key={d} className="text-center font-semibold text-gray-600">
              {d}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentMonth}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-7 gap-2 max-w-[700px] mx-auto"
          >
            {renderCalendar(currentMonth, currentYear)}
          </motion.div>
        </AnimatePresence>

        <motion.div
          key={selectedEvent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-lg sm:text-xl font-bold text-gray-800 min-h-[2.5rem] px-2 text-center"
        >
          {selectedEvent}
        </motion.div>
      </div>
    </section>
  );
}

export default Calendario_costa;
