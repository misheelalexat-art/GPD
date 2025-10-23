import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Calendario() {
  const events = {
    "1-6": "Fiesta de Reyes – Tarapoto, San Martín (Enero)",
    "2-20": "Carnavales Amazónicos – Moyobamba, San Martín (Febrero)",
    "3-19": "Festival del Cacao – Tocache, San Martín (Marzo)",
    "4-24": "Festival del Plátano – Pucallpa, Ucayali (Abril)",
    "5-15": "Fiesta Patronal San Isidro Labrador – Loreto (Mayo)",
    "6-24": "Fiesta de San Juan – Toda la Amazonía Peruana (Junio)",
    "7-16": "Fiesta de la Virgen del Carmen – Bagua, Amazonas (Julio)",
    "8-5": "Festival de la Biodiversidad – Puerto Maldonado, Madre de Dios (Agosto)",
    "9-8": "Fiesta de la Natividad de la Virgen – Lamas, San Martín (Septiembre)",
    "10-12": "Festival de las Culturas Amazónicas – Iquitos, Loreto (Octubre)",
    "11-10": "Festival del Aguaje – Contamana, Ucayali (Noviembre)",
    "12-25": "Navidad Amazónica – Diversas comunidades de la selva (Diciembre)",
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
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`p-4 text-center rounded-lg cursor-pointer shadow-sm transition-all duration-300
            ${
              isEvent
                ? "bg-[#3bb273] text-white font-bold hover:bg-[#2c8b58]"
                : "bg-[#F9FFF9] hover:bg-[#E0F8E3] text-gray-800"
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
      id="calendario"
      className="w-full py-16 px-4 bg-gradient-to-b from-[#E6F7EE] via-[#FFFBEA] to-[#E8FFF4]"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold mb-8 text-[#2E7D32]"
        >
          📅 Calendario de Festividades de la Selva Peruana
        </motion.h2>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prevMonth}
            className="px-3 py-1 border border-[#A8E6CF] rounded hover:bg-[#A8E6CF]/30 transition-colors"
          >
            &lt;
          </button>
          <h3 className="text-xl font-semibold text-[#3E4C32]">
            {months[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={nextMonth}
            className="px-3 py-1 border border-[#A8E6CF] rounded hover:bg-[#A8E6CF]/30 transition-colors"
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-sm sm:text-base mb-2 text-[#3E4C32] font-semibold text-center">
          {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentMonth}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-7 gap-2 mb-6"
          >
            {renderCalendar(currentMonth, currentYear)}
          </motion.div>
        </AnimatePresence>

 
        <motion.div
          key={selectedEvent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-lg sm:text-xl font-bold text-[#2E7D32] min-h-[2.5rem] px-2 text-center"
        >
          {selectedEvent}
        </motion.div>
      </div>
    </section>
  );
}

export default Calendario;
