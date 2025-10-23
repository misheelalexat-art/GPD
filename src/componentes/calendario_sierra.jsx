import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Calendario_sierra() {
  const events = {
    "1-6": "Bajada de Reyes - Ayacucho (6 de enero)",
    "2-2": "Virgen de la Candelaria - Puno (2 de febrero)",
    "3-19": "Fiesta de San José - Cajamarca (19 de marzo)",
    "4-24": "Fiesta de San Jorge - Apurímac (24 de abril)",
    "5-3": "Fiesta de las Cruces - Huancavelica (3 de mayo)",
    "6-24": "Inti Raymi - Cusco (24 de junio)",
    "7-15": "Virgen del Carmen - Paucartambo, Cusco (15 de julio)",
    "7-28": "Fiestas Patrias - Todo el Perú (28 de julio)",
    "8-15": "Virgen de la Asunción - Huancavelica (15 de agosto)",
    "9-14": "Señor de Huanca - Cusco (14 de septiembre)",
    "10-4": "San Francisco de Asís - Huánuco (4 de octubre)",
    "11-1": "Todos los Santos - Sierra del Perú (1 de noviembre)",
    "12-8": "Inmaculada Concepción - Ayacucho (8 de diciembre)",
    "12-25": "Navidad Andina - Toda la Sierra (25 de diciembre)",
  };

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-4 text-center rounded-lg cursor-pointer shadow-sm transition-all duration-300
            ${isEvent
              ? "bg-[#7b3f00] text-white font-bold hover:bg-[#5c2e00]"
              : "bg-[#eef3bc] hover:bg-[#d4e157] text-gray-800"
            }`}
          onClick={() =>
            setSelectedEvent(
              isEvent
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
    <section className="py-10 bg-gradient-to-b from-[#fffceb] to-[#f0e6b0]">
      <div className="max-w-3xl mx-auto px-4">

   
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-2xl sm:text-3xl font-bold mb-6 text-[#7b3f00] tracking-wide"
        >
          Calendario de Festividades
        </motion.h2>

   
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prevMonth}
            className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors duration-300"
          >
            &lt;
          </button>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">
            {months[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={nextMonth}
            className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors duration-300"
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
          className="mt-6 text-center text-lg sm:text-xl font-bold text-gray-800 min-h-[2.5rem] px-2"
        >
          {selectedEvent}
        </motion.div>
      </div>
    </section>
  );
}

export default Calendario_sierra;


