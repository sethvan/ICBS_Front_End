import React, { Component } from "react";

class Reuniones extends Component {
  render() {
    const adoracion1 =
      "https://live.staticflickr.com/65535/51870767483_dd12ba647a_b.jpg";
    return (
      <div className="container-sm-fluid d-sm-flex row">
        <div className="d-inline-block col-lg-6 col-md-12">
          <h1>Domingos:</h1>
          <h4>10:00 am - 10:40 am Acciones de Gracias y Adoracion.</h4>
          <h4>10:40 am - 11:20 am Predicacion.</h4>
          <h4>10:00 am - 11:20 am Escuela Dominical para Niños.</h4>
          <br />
          <h1>Martes:</h1>
          <h4>5:00 pm - 6:00 pm Reunion de Mujeres.</h4>
          <br />
          <h1>Jueves:</h1>
          <h4>5:00 pm - 6:00 pm Culto de Oracion.</h4>
          <br />
          <h1>Sabados:</h1>
          <h4>6:00 pm - 7:30 pm Reunion de Hombres.</h4>
        </div>
        <img
          className="img-fluid align-self-md-start align-self-end col-lg-6 col-md-12"
          style={{ maxWidth: "100%", height: "auto" }}
          src={adoracion1}
        />
      </div>
    );
  }
}

export default Reuniones;
