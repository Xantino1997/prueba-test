import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import edutecaForm from "./assets/eduteca.png"
import Swal from "sweetalert2"; // Importa SweetAlert2
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./Formulario.css"; // Añade tus estilos aquí

function Formulario() {
  const [showModal, setShowModal] = useState(false);
  const [isModalActive, setIsModalActive] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false); // Estado para controlar si se aceptaron los términos

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLoginSuccess = (response) => {
    console.log("Inicio de sesión exitoso con Google", response);
    // Agregar lógica de inscripción aquí

    // Mostrar un SweetAlert2 para el login exitoso
    Swal.fire({
      icon: "success",
      title: "¡Login exitoso!",
      text: "Has iniciado sesión exitosamente.",
    });
  };

  const handleLoginFailure = (error) => {
    console.log("Error en el inicio de sesión con Google", error);
  };

  const handleDismiss = () => {
    setIsModalActive(false);
    // Guardar en localStorage o en una cookie que se ha desactivado el modal por un día
    localStorage.setItem("modalDismissed", "true");
  };

  const canShowModal =
    showModal && isModalActive && !localStorage.getItem("modalDismissed");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log("Formulario enviado");
  };

  return (
    <div>
      {canShowModal && (
        <div className="modal">
          <div className="modal-content">
            <img className="form-eduteca" src={edutecaForm}/>
            <h2>Bienvenido</h2>
            <p>Registrate</p> o<p> inicia sesión para tomar un curso</p>
            <GoogleLogin
              clientId="TU_CLIENT_ID_DE_GOOGLE"
              buttonText="Iniciar sesión con Google"
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
            />
            <br/>
            <button onClick={handleDismiss}>Más tarde</button>
            <div className="terminos-div">
              <label>
                <input
                  type="radio"
                  name="acceptTerms"
                  value="accepted"
                  checked={isAccepted}
                  onChange={() => setIsAccepted(!isAccepted)}
                  required
                />
                Acepto los términos y condiciones
              </label>
              <Link to="/terminos" className="terminos">
                Leer términos y condiciones
              </Link>
            </div>
            {/* Botón "Registrarte" habilitado solo si se aceptan los términos */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="registro-btn"
              disabled={!isAccepted}
            >
              Registrarte
            </button>
          </div>
        </div>
      )}
      <div className="content"></div>
    </div>
  );
}

export default Formulario;
