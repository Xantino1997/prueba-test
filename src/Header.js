import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./Header.css"; // Importa tus estilos aquí
import logo from "./assets/eduteca.png";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Simula el estado de inicio de sesión

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión (limpiar el estado, etc.)
    setLoggedIn(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
      <img className="logo-img" src={logo} alt="EDUTECA" />

        <div className="logo">
        </div>
        <div className="menu-icon" onClick={handleMenuToggle}>
          {menuOpen ? "Cerrar" : "Menú"}
        </div>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/diseño">Diseño</Link>
            </li>
            <li>
              <Link to="/marketing">marketing</Link>
            </li>
            <li>
              <Link to="/contactanos">Contactanos</Link>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/teacher">Teacher</Link>
            </li>
            {!loggedIn ? (
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/crear-eventos">Crear Eventos</Link>
                </li>
                <li>
                  <Link to="/anunciar-cursos">Anunciar Cursos</Link>
                </li>
                <li>
                  <Link to="/subir-file">Subir File</Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Cerrar Sesión
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
