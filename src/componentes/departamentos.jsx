import React from "react";
import "./departamentos.css";

function Departamentos() {
  return (
    <section
      className="departamentos"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row">
          {/* Tumbes */}

          <div className="col">
            <div className="card animar" data-aos="zoom-in">
              <img src="public\c1t.jpg" alt="Manglares de Tumbes" />
              <div className="card-body">
                <h5>Tumbes – Manglares de Tumbes</h5>
                <p>
                  <strong>Ubicación:</strong> Santuario Nacional Los Manglares
                  de Tumbes, Zarumilla.
                </p>
                <p>
                  <strong>Costo entrada:</strong> S/ 10 adultos, S/ 3 niños.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Junio a noviembre.
                </p>
                <p>
                  <strong>Consejo:</strong> Llevar repelente, binoculares y
                  protector solar.
                </p>
              </div>
            </div>
          </div>

          {/* Piura */}
          <div className="col">
            <div className="card animar">
              <img src="public\c2p.jpg" alt="Playa de Máncora" />
              {/*<img src="../img/c2p.jpg" alt="Playa de Máncora" />*/}
              <div className="card-body">
                <h5>Piura – Playa de Máncora</h5>
                <p>
                  <strong>Ubicación:</strong> Distrito de Máncora, Talara,
                  Piura.
                </p>
                <p>
                  <strong>Costo entrada:</strong> Acceso libre.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Diciembre a marzo (playa y
                  sol).
                </p>
                <p>
                  <strong>Consejo:</strong> Ideal para surf, disfrutar ceviches
                  y vida nocturna.
                </p>
              </div>
            </div>
          </div>

          {/* Lambayeque */}
          <div className="col">
            <div className="card animar">
              <img src="public\c3l.jpg" alt="Complejo Arqueológico de Túcume" />
              <div className="card-body">
                <h5>Lambayeque – Túcume</h5>
                <p>
                  <strong>Ubicación:</strong> 33 km al norte de Chiclayo.
                </p>
                <p>
                  <strong>Costo entrada:</strong> S/ 10 general, S/ 4
                  estudiantes.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Mayo a septiembre.
                </p>
                <p>
                  <strong>Consejo:</strong> Contratar guía para conocer la
                  cosmovisión ancestral.
                </p>
              </div>
            </div>
          </div>

          {/* La Libertad */}
          <div className="col">
            <div className="card animar">
              <img src="public\c4l.jpg" alt="Chan Chan" />
              <div className="card-body">
                <h5>La Libertad – Chan Chan</h5>
                <p>
                  <strong>Ubicación:</strong> A 5 km de Trujillo.
                </p>
                <p>
                  <strong>Costo entrada:</strong> S/ 11 adultos, S/ 1
                  estudiantes.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Abril a diciembre.
                </p>
                <p>
                  <strong>Consejo:</strong> Llevar gorra y agua, clima muy
                  soleado.
                </p>
              </div>
            </div>
          </div>

          {/* Áncash */}
          <div className="col">
            <div className="card animar">
              <img src="public\c5a.jpg" alt="Playa Tuquillo" />
              <div className="card-body">
                <h5>Áncash – Playa de Tuquillo</h5>
                <p>
                  <strong>Ubicación:</strong> A 7 km de Huarmey.
                </p>
                <p>
                  <strong>Costo entrada:</strong> Acceso libre.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Enero a marzo.
                </p>
                <p>
                  <strong>Consejo:</strong> Llevar sombrilla, poca sombra
                  natural.
                </p>
              </div>
            </div>
          </div>

          {/* Lima */}
          <div className="col">
            <div className="card animar">
              <img src="public\c6l.png" alt="Circuito Mágico del Agua" />
              <div className="card-body">
                <h5>Lima – Circuito Mágico del Agua</h5>
                <p>
                  <strong>Ubicación:</strong> Parque de la Reserva, Cercado de
                  Lima.
                </p>
                <p>
                  <strong>Costo entrada:</strong> S/ 4 general.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Todo el año, mejor de noche.
                </p>
                <p>
                  <strong>Consejo:</strong> Llevar ropa ligera, hay zonas donde
                  puedes mojarte.
                </p>
              </div>
            </div>
          </div>

          {/* Ica */}
          <div className="col">
            <div className="card animar">
              <img src="public\c7h.jpg" alt="Huacachina" />
              <div className="card-body">
                <h5>Ica – Huacachina</h5>
                <p>
                  <strong>Ubicación:</strong> 5 km al oeste de la ciudad de Ica.
                </p>
                <p>
                  <strong>Costo entrada:</strong> Acceso libre. Paseos en
                  buggies desde S/ 35.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Marzo a noviembre.
                </p>
                <p>
                  <strong>Consejo:</strong> No olvides gafas de sol, arena muy
                  intensa con el viento.
                </p>
              </div>
            </div>
          </div>

          {/* Arequipa */}
          <div className="col">
            <div className="card animar">
              <img src="public\c8a.jpg" alt="Valle de Majes" />
              <div className="card-body">
                <h5>Arequipa – Valle de Majes</h5>
                <p>
                  <strong>Ubicación:</strong> Provincia de Castilla, Arequipa.
                </p>
                <p>
                  <strong>Costo entrada:</strong> Acceso libre.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Abril a noviembre.
                </p>
                <p>
                  <strong>Consejo:</strong> Probar camarones frescos y vinos de
                  la zona.
                </p>
              </div>
            </div>
          </div>

          {/* Moquegua */}
          <div className="col">
            <div className="card animar">
              <img src="public\c9m.jpg" alt="Plaza de Armas Moquegua" />
              <div className="card-body">
                <h5>Moquegua – Plaza de Armas</h5>
                <p>
                  <strong>Ubicación:</strong> Centro histórico de Moquegua.
                </p>
                <p>
                  <strong>Costo entrada:</strong> Acceso libre.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Todo el año.
                </p>
                <p>
                  <strong>Consejo:</strong> Visitar bodegas locales de pisco y
                  vino.
                </p>
              </div>
            </div>
          </div>

          {/* Tacna */}
          <div className="col">
            <div className="card animar">
              <img src="public\c10t.jpg" alt="Petroglifos de Miculla" />
              <div className="card-body">
                <h5>Tacna – Petroglifos de Miculla</h5>
                <p>
                  <strong>Ubicación:</strong> 22 km de la ciudad de Tacna.
                </p>
                <p>
                  <strong>Costo entrada:</strong> S/ 5 adultos, S/ 2
                  estudiantes.
                </p>
                <p>
                  <strong>Mejor temporada:</strong> Abril a noviembre.
                </p>
                <p>
                  <strong>Consejo:</strong> Llevar bloqueador y agua, caminata a
                  pleno sol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Departamentos;
