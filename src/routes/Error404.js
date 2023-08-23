import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import ErrorImage from "../assets/ErrorGato404.png"; // Asegúrate de tener la ruta correcta
import '../styles/Error404.css'
function Error404() {
  return (
    <div className="error-container">
      <h1 className="text-error">Error 404</h1>
      <p className="text-error-parrafo">La página que estás buscando no se encuentra.</p>
      <img className="text-error-img" src={ErrorImage} alt="Error 404" />
      <Link to="/" className="btn-error">Volver a Inicio</Link> {/* Utiliza Link para redirigir al inicio */}
    </div>
  );
}

export default Error404;
