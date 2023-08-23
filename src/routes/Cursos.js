import React, { useState } from "react";
import "../styles/Cursos.css"; // Asegúrate de tener tu archivo de estilos Eventos.css
import web from "../assets/contactanos.png";
import android from "../assets/descarga.png";
import marketing from "../assets/certificado2.png";
import maquina from "../assets/maquina.png";
import soldador from "../assets/soldador.png";

function Cursos() {
  const [eventos, setEventos] = useState([
    {
      id: 1,
      imagen: web,
      curso: "Prescencia en la web",
      fecha: "Fecha 20-11-23",
      entradas: "A confirmar",
      likes: 0,
      meEncanta: 0,
    },
    {
      id: 2,
      imagen: android,
      curso: "Desarrollo de app android",
      fecha: "Fecha 2",
      entradas: "Entradas 2",
      likes: 0,
      meEncanta: 0,
    },
    {
      id: 3,
      imagen: marketing,
      curso: "Tecnicatura en leads",
      fecha: "Fecha 3",
      entradas: "Entradas 3",
      likes: 0,
      meEncanta: 0,
    },
    {
      id: 4 ,
      imagen: maquina,
      curso: "Costura",
      fecha: "Fecha 4 ",
      entradas: "Entradas 4 ",
      likes: 0,
      meEncanta: 0,
    },
    {
      id: 5,
      imagen: soldador,
      curso: "soldador",
      fecha: "Fecha 5",
      entradas: "Entradas 5",
      likes: 0,
      meEncanta: 0,
    },
    // Agrega más eventos aquí
  ]);

  const handleLike = (id) => {
    setEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === id ? { ...evento, likes: evento.likes + 1 } : evento
      )
    );
  };

  const handleMeEncanta = (id) => {
    setEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === id
          ? { ...evento, meEncanta: evento.meEncanta + 1 }
          : evento
      )
    );
  };

  return (
    <div className="conteiner-eventos">
      {eventos.map((evento) => (
        <div key={evento.id} className="evento">
          <div className="imagen-contenedor">
            <img
              src={evento.imagen}
              alt={`Evento ${evento.id}`}
              className="evento-imagen"
            />
            <div className="overlay">
              <button className="boton-mas">Ver mas</button>
              <button className="boton-mas">Inscribirte</button>
            </div>
            <div className="like-encanta">
              <div className="icono-like">
                <span role="img" aria-label="Like">
                  👍 {evento.likes}
                </span>
              </div>
              <div className="icono-me-encanta">
                <span role="img" aria-label="Me Encanta">
                  ❤️ {evento.meEncanta}
                </span>
              </div>
            </div>
          </div>
          <div className="evento-footer">
            <div className="evento-info">
              <p>Curso: {evento.curso}</p>
              <p>Fecha: {evento.fecha}</p>
              <p>Entradas: {evento.entradas}</p>
            </div>
            <div className="evento-acciones">
              <button
                className="like-button"
                onClick={() => handleLike(evento.id)}
              >
                Like
              </button>
              <button
                className="me-encanta-button"
                onClick={() => handleMeEncanta(evento.id)}
              >
                Me Encanta
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cursos;
