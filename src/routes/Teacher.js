import React from "react";
import "../styles/Teacher.css";
import canta from "../assets/mujerProfe2.png";
import guitarra from "../assets/profeMusica.png";
import bajo from "../assets/profeBajo.png";
import bateria from "../assets/profeHombre2.png";
import percusion from "../assets/profeIdioma.png";
import manager from "../assets/profeInformatica.png";

const Teacher = () => {
  const miembros = [
    {
      nombre: "Samuel Tituns",
      imagen: bajo,
      info: "Profesor de Bajo",
      color:'#60f736 ',

    },
    {
      nombre: "Camils Simonet",
      imagen: canta,
      info: "Profesora de Canto",
      color: "lightblue",
    },
    {
      nombre: "Gerardo Bar",
      imagen: guitarra,
      info: "Profesor de Musica",
      color:'#eb4034',

    },
    {
      nombre: "Bit Coingel",
      imagen: bateria,
      info: "Profesor de Marcas Digitales",
      color:'#f7ee36',

    },
    {
      nombre: "Evaristo Sestenby",
      imagen: percusion,
      info: "Profesor de Idiomas",
      color:'#f78036'


    },
    {
      nombre: "Juio Teretzh",
      imagen: manager,
      info: "Analistas de Data Sciences",
      color:'#b736f7',

    },
  ];

  return (
    <div className="conteiner-teacher">
      {miembros.map((miembro, index) => (
        <div key={index} className="miembro" style={{ backgroundColor: miembro.color }}>
          <img
            className="img-teacher"
            src={miembro.imagen}
            alt={miembro.nombre}
          />
          <h3>{miembro.nombre}</h3>
          <p>{miembro.info}</p>
          <button>Saber más</button>
        </div>
      ))}
    </div>
  );
};

export default Teacher;
