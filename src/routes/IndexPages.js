import React, { useState, useEffect } from "react";
import "../styles/IndexPages.css";
import profe from "../assets/ErrorGato404.png";
import profeMujer from "../assets/mujerProfe2.png";
import certificacion from "../assets/certificado2.png";
import { Link } from "react-router-dom";

function IndexPages() {
  const images = [
    { src: profe, title: "Cursos", description: "Descripción de Cursos" },
    { src: profeMujer, title: "Asesores", description: "Descripción de Asesores" },
    { src: certificacion, title: "Certificaciones", description: "Descripción de Certificaciones" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="carousel-index">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item-index ${index === currentImageIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <div className="carousel-content">
              <h5 className="carousel-content-description">{image.description}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="right-div">
        <div className="sub-div red">
          <h1>Videos e Imgenes</h1>
          <p>Echale un vistazo</p>
          <Link to="/videos" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div blue">
          <h1>Marketing Digital</h1>
          <p>Llega a tus clientes</p>
          <Link to="/marketing" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div green">
          <h1>Proximos Cursos</h1>
          <p>Fechas de nuevos cursos</p>
          <Link to="/cursos" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div yellow">
          <h1>Contactanos por Redes</h1>
          <p>Escribinos</p>
          <Link to="/contactanos" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div orange">
          <h1>Desarrollo Web</h1>
          <p>Adentrate al futuro</p>
          <Link to="/diseño" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div purple">
          <h1>Profesores y Mentores</h1>
          <p>Conoce a los mejores</p>
          <Link to="/teacher" className="btn-div">
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndexPages;
