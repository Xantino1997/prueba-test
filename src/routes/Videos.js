import React from "react";
import "../styles/Videos.css";
import videoWoman from "../assets/woman-video.mp4";

function Videos() {
  const discs = [];
  for (let i = 1; i <= 9; i++) {
    discs.push(
      <div className="disc" key={i}>
        <video
          className="video-background"
          src={videoWoman}
          loop
          autoPlay
          muted
          style={{ animation: `playVideo 2s linear infinite` }}
        />
        <h4>Videos {i}</h4>
        <label className="titulo-disco">Titulo</label>
      </div>
    );
  }

  const numRows = Math.ceil(discs.length / 3); // Calcular la cantidad de filas necesarias

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(
      <div className="row" key={i}>
        {discs.slice(i * 3, (i + 1) * 3)}
      </div>
    );
  }

  return <div className="container-disco">{rows}</div>;
}

export default Videos;
