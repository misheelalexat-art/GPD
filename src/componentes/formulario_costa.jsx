import React, { useState } from "react";
import "./Formulario_costa.css";

export default function Formulario_costa() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [respuesta, setRespuesta] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = formData;

    if (nombre.length < 3) {
      setRespuesta("❌ El nombre debe tener al menos 3 caracteres.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setRespuesta("❌ Ingresa un correo electrónico válido.");
    } else if (mensaje.length < 10) {
      setRespuesta("❌ El mensaje debe tener al menos 10 caracteres.");
    } else {
      setRespuesta("✅ ¡Formulario enviado con éxito!");
      setFormData({ nombre: "", email: "", mensaje: "" });
    }
  };

  return (
    <section
      className="formulario-section"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="container">
        <form
          id="formulario"
          className="formulario animar"
          onSubmit={handleSubmit}
        >
          <h2 className="titulo-formulario">📝 Planifica tu viaje</h2>

          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">tu comentario</label>
            <textarea
              id="mensaje"
              rows="3"
              value={formData.mensaje}
              onChange={handleChange}
              required
              minLength="10"
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar">
            Enviar
          </button>

          <div id="respuesta" className="respuesta">
            {respuesta}
          </div>
        </form>
      </div>
    </section>
  );
}
