import useInput from "../hooks/useInput";
import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";

function Contacto() {
  const nombre = useInput("");
  const edad = useInput("");
  const email = useInput("");
  const destino = useInput("");
  const mensaje = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${nombre.value}, tu mensaje ha sido enviado ✉️`);
    nombre.reset();
    edad.reset();
    email.reset();
    destino.reset();
    mensaje.reset();
  };


  const decorativos = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 20 + Math.random() * 25,
    duration: 25 + Math.random() * 6,
    delay: Math.random() * 5,
    rotate: Math.random() * 360,
    tipo:
      Math.random() > 0.5
        ? "https://cdn-icons-png.flaticon.com/512/765/765610.png"
        : "https://cdn-icons-png.flaticon.com/512/414/414927.png",
  }));

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-[#D9F4FF] via-[#FFD6D6] to-[#C9E4C5]">
   
      {decorativos.map((d) => (
        <motion.img
          key={d.id}
          src={d.tipo}
          alt="decorativo"
          className="absolute opacity-70"
          style={{
            top: "-50px",
            left: `${d.left}%`,
            width: `${d.size}px`,
          }}
          initial={{ y: -100, rotate: d.rotate }}
          animate={{
            y: ["-10%", "120%"],
            rotate: [d.rotate, d.rotate + 180, d.rotate + 360],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            delay: d.delay,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 max-w-md mx-auto px-4">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold mb-8 text-[#4A2C18] tracking-wide drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🌺 Planifica tu viaje a la selva
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#FFF9F3] p-6 rounded-2xl shadow-lg border border-[#CBBBA0]"
          id="formulario"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
   
          {[
            { id: "nombre", label: "Nombre", type: "text", input: nombre },
            { id: "edad", label: "Edad", type: "number", input: edad },
            { id: "email", label: "Correo electrónico", type: "email", input: email },
          ].map(({ id, label, type, input }) => (
            <div key={id} className="mb-5">
              <label htmlFor={id} className="block mb-2 font-semibold text-[#4A2C18]">
                {label}
              </label>
              <input
                type={type}
                id={id}
                {...input.bind}
                required
                className="w-full px-4 py-2 border border-[#CBBBA0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] bg-[#FFF]"
              />
            </div>
          ))}

    
          <div className="mb-5">
            <label htmlFor="destino" className="block mb-2 font-semibold text-[#4A2C18]">
              Destino favorito
            </label>
            <select
              id="destino"
              {...destino.bind}
              required
              className="w-full px-4 py-2 border border-[#CBBBA0] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            >
              <option value="" disabled>Selecciona</option>
              {[
                "Cusco", "Puno", "Junín", "Ayacucho",
                "Huancavelica", "Apurímac", "Cajamarca",
                "Pasco", "Huánuco"
              ].map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>

 
          <div className="mb-6">
            <label htmlFor="mensaje" className="block mb-2 font-semibold text-[#4A2C18]">
              Comentarios
            </label>
            <textarea
              id="mensaje"
              rows="4"
              {...mensaje.bind}
              required
              className="w-full px-4 py-2 border border-[#CBBBA0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] bg-[#FFF]"
            ></textarea>
          </div>

    
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8B5E3C] via-[#4E8B69] to-[#71C9CE] hover:brightness-110 text-white font-semibold py-3 rounded-md shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar ✉️
          </motion.button>
        </motion.form>

   
        <div className="mt-10 text-center">
          <h3 className="text-[#4A2C18] font-semibold mb-3">
            También puedes encontrarnos en:
          </h3>
          <div className="flex justify-center gap-6 text-[#4A2C18]">
            <a href="mailto:info@selvaperuana.com" className="hover:text-[#8B5E3C] transition">
              <Mail size={28} />
            </a>
            <a href="tel:+51987654321" className="hover:text-[#8B5E3C] transition">
              <Phone size={28} />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-[#4E8B69] transition">
              <Facebook size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-[#71C9CE] transition">
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
