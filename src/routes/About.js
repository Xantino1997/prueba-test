import React from "react";
import { Link } from "react-router-dom"; // Importa el componente Link de React Router
import facebookIcon from "../assets/facebook-icon.png"; // Ruta a la imagen de Facebook
import instagramIcon from "../assets/instagram-icon.png"; // Ruta a la imagen de Instagram
import whatsappIcon from "../assets/whatsapp-icon.png"; // Ruta a la imagen de WhatsApp
import mailIcon from "../assets/mail-icon.png"; // Ruta a la imagen de Mail
import "../styles/About.css"; // Asegúrate de tener tu archivo de estilos About.css

function About() {
  return (
    <div className="conteiner-contacto">
      <div className="about-box">
        <div className="about-info">
          <ul className="redes-sociales">
            <li>
              <a href="#">
                <img className="icono-red" src={facebookIcon} alt="Facebook" />
                <br />
              </a>
              <label className="label-titulo">Facebook</label>
            </li>
            <li>
              <a href="#">
                <img
                  className="icono-red"
                  src={instagramIcon}
                  alt="Instagram"
                />
              </a>
              <br />
              <label className="label-titulo">Instagram</label>
            </li>
            <li>
              <a href="#">
                <img className="icono-red" src={whatsappIcon} alt="WhatsApp" />
              </a>
              <br />
              <label className="label-titulo">WhatsApp</label>
            </li>
            <li>
              <a href="#">
                <img className="icono-red" src={mailIcon} alt="Mail" />
              </a>
              <br />
              <label className="label-titulo">Mail</label>
            </li>
          </ul>
          <h1>Contactanos</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
