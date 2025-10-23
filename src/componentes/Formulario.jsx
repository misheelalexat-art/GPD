import { useState } from "react";
import useInput from "../hooks/useInput";

function Formulario() {
  const nombre = useInput("");
  const ciudad = useInput("");
  const mensaje = useInput("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.value && ciudad.value && mensaje.value) {
      setEnviado(true);
      nombre.reset();
      ciudad.reset();
      mensaje.reset();
      setTimeout(() => setEnviado(false), 4000);
    }
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 border-t-4 border-green-700">
        <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
          🌿 ¿Visitaste la selva? ¡Cuéntanos tu experiencia!
        </h3>

        {enviado && (
          <p className="text-green-700 bg-green-100 border border-green-300 rounded-lg p-3 text-center mb-4">
            🌟 ¡Gracias por compartir tu testimonio, viajero/a!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-green-800 font-semibold mb-1">
              Nombre
            </label>
            <input
              type="text"
              {...nombre.bind}
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Ejemplo: Ana López"
              required
            />
          </div>

          <div>
            <label className="block text-green-800 font-semibold mb-1">
              Ciudad
            </label>
            <input
              type="text"
              {...ciudad.bind}
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Ejemplo: Tarapoto, Lima..."
              required
            />
          </div>

          <div>
            <label className="block text-green-800 font-semibold mb-1">
              Tu experiencia
            </label>
            <textarea
              {...mensaje.bind}
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="4"
              placeholder="Comparte cómo fue tu viaje..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Enviar testimonio
          </button>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
