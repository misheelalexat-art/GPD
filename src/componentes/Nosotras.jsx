function Nosotras() {
  return (
    <>
      {/* Contenido principal */}
      <div id="nosotras" className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#9AA98C]">
          Conociendo un poco de nosotras 🍃
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              nombre: "Milagros Becerra",
              descripcion:
                "Hola, soy Milagros Becerra, una de las creadoras de esta página. Tengo 16 años y actualmente curso el 5to año de secundaria. Me apasiona compartir información sobre el turismo en el Perú para que más personas puedan conocer y disfrutar de ello. Mi objetivo es ofrecer contenido útil, confiable y atractivo para todos los visitantes.",
            },
            {
              nombre: "Alexa Tapullima",
              descripcion:
                "Hola, soy Alexa Tapullima, tengo 16 años y curso el 5to de secundaria. Soy una chica curiosa y soñadora, me gusta aprender cosas nuevas y compartirlas con los demás. En mis ratos libres disfruto leer, escuchar música y ver F1, además de explorar temas que me inspiran como el diseño y la moda. Esta página la hemos creado en grupo con el objetivo de ofrecer un espacio con contenido interesante, confiable y fácil de disfrutar.",
            },
            {
              nombre: "Ariana Díaz",
              descripcion:
                "Hola, soy Ariana Díaz, tengo 15 años y curso el 3er año de secundaria. Soy una persona perseverante, dedicada y empática. Me gusta trabajar en equipo y también disfruto mucho de las artes, como pintar, dibujar, cantar y tocar el violín. En mis tiempos libres me encanta leer, aprender cosas nuevas y seguir explorando mis intereses en matemáticas, creatividad y organización.",
            },
            {
              nombre: "Briyith Temoche",
              descripcion:
                "Hola, soy Briyith Temoche, una de las creadoras de esta página. Tengo 15 años y curso el 4to grado de secundaria. Me gusta todo lo que tenga que ver con diseño. Mi objetivo en esta página es poder mostrar contenido donde las personas que lo visiten puedan tener confianza y divertirse en una más de las aventuras.",
            },
            {
              nombre: "Yesly Inga",
              descripcion:
                "Hola, soy Yesly Inga. Tengo 16 años y estoy en 5to de secundaria. Me gusta todo lo relacionado con los paisajes y ayudar a las personas a disfrutar sus viajes. Quiero que conozcan y aprendan de las culturas de cada lugar. Esta página busca ser una guía que motive, acompañe y ayude a tomar buenas decisiones.",
            },
          ].map((persona, index) => (
            <div
              key={index}
              className="bg-[#FFE3B3] border-l-8 border-[#C64632] rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-[#C64632] mb-2">
                {persona.nombre}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {persona.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Formulario */}
        <div className="bg-gradient-to-r from-[#B2E3B6] to-[#A8E3E8] mt-10 p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#1B6B57]">
            Deja tu comentario 📝
          </h2>
          <form>
            <div className="mb-4 text-left">
              <label
                htmlFor="nombre"
                className="block mb-2 font-semibold text-[#155E63]"
              >
                Tu nombre
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Escribe tu nombre"
                required
                className="w-full px-4 py-2 rounded border-none focus:ring-2 focus:ring-[#67B99A] text-gray-800"
              />
            </div>

            <div className="mb-4 text-left">
              <label className="block mb-2 font-semibold text-[#155E63]">
                Calificación
              </label>
              <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="comentario"
                className="block mb-2 font-semibold text-[#155E63]"
              >
                Comentario
              </label>
              <textarea
                id="comentario"
                rows="3"
                placeholder="Escribe tu opinión..."
                required
                className="w-full px-4 py-2 rounded border-none focus:ring-2 focus:ring-[#67B99A] text-gray-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#67B99A] hover:bg-[#5AA68C] text-white px-6 py-2 rounded-lg transition font-semibold shadow-md"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Nosotras;

