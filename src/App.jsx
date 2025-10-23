import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Encabezado from "./componentes/Encabezado";
import Destino from "./componentes/Destino";
import Gastronomia from "./componentes/Gastronomia";
import Fechas from "./componentes/Fechas";
import Testimonio from "./componentes/Testimonio";
import Formulario from "./componentes/Formulario";
import Formulario2 from "./componentes/Formulario2";
import Contacto from "./componentes/Contacto";
import Nosotras from "./componentes/Nosotras";
import Footer from "./componentes/Footer";
import Boton from "./componentes/Boton";
import Calendario from "./componentes/calendario";
import Hero_inicio from "./componentes/hero_inicio";
import Navbar_1 from "./componentes/navbar_1";
import Footer_1 from "./componentes/Footer_1";
import RegionesDestacadas from "./componentes/regiones";
import IconsSection from "./componentes/iconssection";
import Quote from "./componentes/quote";
import Wave from "./componentes/wave";
import Banner_sierra from "./componentes/banner_sierra";
import Destinos_sierra from "./componentes/destinos_sierra";
import Fechas_sierra from "./componentes/fechas_sierra";
import Calendario_sierra from "./componentes/calendario_sierra";
import Galeria_sierra from "./componentes/galeria_sierra";
import Gastronomia_sierra from "./componentes/gastronomia_sierra";
import Formulario_sierra from "./componentes/formulario_sierra";
import Footer_sierra from "./componentes/footer_sierra";
import Boton_sierra from "./componentes/boton_sierra";

import Gato from "./componentes/gato_costa";
import Titulo from "./componentes/titulo_costa";
import Formulario_costa from "./componentes/formulario_costa";
import Footer_costa from "./componentes/footer_costa";
import Departamentos from "./componentes/departamentos";
import ScrollToTopButton from "./componentes/ScrollToTopButton";
import Calendario_costa from "./componentes/calendario_costa";



function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Navbar_1 />
              <Hero_inicio />
              <RegionesDestacadas />
              <IconsSection />
              <Quote />
              <Wave />
              <Footer_1 />
            </>
          }
        />


        <Route
          path="/sierra"
          element={
            <>
              <Banner_sierra />
              <Destinos_sierra />
              <Fechas_sierra />
              <Calendario_sierra />
              <Galeria_sierra />
              <Gastronomia_sierra />
              <Formulario_sierra />
              <Footer_sierra />
              <Boton_sierra />
            </>
          }
        />


        <Route
          path="/selva"
          element={
            <>
              <Navbar />
              <Encabezado />
              <Destino />
              <Gastronomia />
              <Fechas />
              <Calendario />
              <Testimonio />
              <Formulario />
              <Formulario2 />
              <Boton />
              <Footer />
            </>
          }
        />

        <Route
          path="/costa"
          element={
            <>
              <Gato />
              <Titulo />
              <Departamentos />
              <Calendario_costa/>
              <Formulario_costa />
              <ScrollToTopButton />
              <Footer_costa />
            </>
          }
        />


        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotras" element={
          <>
          <Navbar />
          <Nosotras />
          <Footer/>
          </>
          
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
