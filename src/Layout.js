import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Chatbot from "./ChatBot"; // Asegúrate de importar correctamente el componente Chatbot
import Formulario from "./Formulario";

function Layout() {
  return (
    <main>
      <Header />
      <br />
      <br />
      <Formulario />
      <br />
      <Outlet />
      <Chatbot /> {/* Agrega el componente Chatbot aquí */}
      <br />
      <br />
      <br />
      <Footer />
    </main>
  );
}

export default Layout;
