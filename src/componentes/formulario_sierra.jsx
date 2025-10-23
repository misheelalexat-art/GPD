import { motion } from "framer-motion";
import "./Formulario_sierra.css";

function Formulario_sierra() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#f4e3a4] to-[#dbca91]">
      <div className="max-w-md mx-auto px-4">

        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold mb-8 text-[#7b3f00] tracking-wide drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🧭 Planifica tu viaje
        </motion.h2>

        <motion.form
          className="bg-[#feffea] p-6 rounded-xl shadow-lg border border-[#d3b896]"
          id="formulario"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {["nombre", "edad", "email"].map((campo, i) => (
            <div key={i} className="mb-5">
              <label
                htmlFor={campo}
                className="block mb-2 font-semibold text-[#7b3f00]"
              >
                {campo === "nombre"
                  ? "Nombre"
                  : campo === "edad"
                  ? "Edad"
                  : "Correo electrónico"}
              </label>
              <input
                type={campo === "edad" ? "number" : campo === "email" ? "email" : "text"}
                id={campo}
                required
                className="w-full px-4 py-2 border border-[#d3b896] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3f00] transition-colors duration-300"
              />
            </div>
          ))}

          <div className="mb-5">
            <label
              htmlFor="destino"
              className="block mb-2 font-semibold text-[#7b3f00]"
            >
              Destino favorito
            </label>
            <select
              id="destino"
              required
              className="w-full px-4 py-2 border border-[#d3b896] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#7b3f00] transition-colors duration-300"
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona
              </option>
              {[
                "Cusco",
                "Puno",
                "Junín",
                "Ayacucho",
                "Huancavelica",
                "Apurímac",
                "Cajamarca",
                "Pasco",
                "Huánuco",
              ].map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="mensaje"
              className="block mb-2 font-semibold text-[#7b3f00]"
            >
              Comentarios
            </label>
            <textarea
              id="mensaje"
              rows="4"
              required
              className="w-full px-4 py-2 border border-[#d3b896] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3f00] transition-colors duration-300"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#7b3f00] hover:bg-[#5c2e00] text-white font-semibold py-3 rounded-md transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar ✉️
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Formulario_sierra;
