import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "../../utility/NavBar/NavBar";
import Footer from "../../utility/Footer/Footer";
import QuienesSomos from "../QuienesSomos/QuienesSomos";
import Reuniones from "../Reuniones/Reuniones";
import Creencias from "../Creencias/Creencias";
import ProximosEventos from "../ProximosEventos/ProximosEventos";

class View extends Component {
  render() {
    if (this.props.location.pathname === "/") return null;

    return (
      <>
        <NavBar />
        <div className="d-flex flex-column vh-100 m-0 p-0">
          <div className="container mt-5">
            <Route exact path="/creencias" component={Creencias} />
            <Route exact path="/quienes_somos" component={QuienesSomos} />
            <Route exact path="/reuniones" component={Reuniones} />
            <Route exact path="/proximos_eventos" component={ProximosEventos} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default View;
