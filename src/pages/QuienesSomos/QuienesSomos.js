import React, { Component } from "react";
import "./QuienesSomos.css";

class QuienesSomos extends Component {
  render() {
    const adoracion1 =
      "https://live.staticflickr.com/65535/51870767483_dd12ba647a_b.jpg";
    const congregacion1 =
      "https://live.staticflickr.com/65535/51881685652_70bf8b666f_b.jpg";
    const recienPintada =
      "https://live.staticflickr.com/65535/51882735203_845239d118_c.jpg";

    const url =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.9683466269694!2d-105.28917898467606!3d21.548092975220918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8420b8ead4510ea3%3A0x78bc6220f9c622fa!2sMiguel%20Alem%C3%A1n%204%2C%20Benito%20Ju%C3%A1rez%2C%2063742%20San%20Blas%2C%20Nay.!5e0!3m2!1ses!2smx!4v1644364342383!5m2!1ses!2smx";
    return (
      <>
        <div className="d-flex flex-column vh-100 m-0 p-0">
          <div className="container mt-5">
            <h1 style={{ textAlign: "center" }}>
              Dios bendiga tú vida. Gracias por visitarnos.
            </h1>
            <p className="conocenos-contenido mb-0">
              Somos la Iglesia Cristiana Bautista Sinaí.
            </p>
            <p className="conocenos-contenido">
              Ubicada en la calle Miguel Alemán #7, colonia Benito Juárez, San
              Blas. Nayarit, México.
            </p>

            <iframe
              src={url}
              width="100%"
              height="auto"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p className="conocenos-contenido">
              Nuestra fundación ocurrió el 3 de diciembre de 2009 y hasta la
              fecha nos reunimos para glorificar a Dios y llevar la buena
              noticia de salvación a las personas.
            </p>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-4 col-12">
                  <img
                    className="img-fluid"
                    src={adoracion1}
                    alt="culto en iglesia"
                  />
                </div>
                <div className="col-sm-4 col-12">
                  <img
                    className="img-fluid"
                    src={recienPintada}
                    alt="iglesia de frente"
                  />
                </div>
                <div className="col-sm-4 col-12">
                  <img
                    className="img-fluid"
                    src={congregacion1}
                    alt="culto en iglesia"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default QuienesSomos;
