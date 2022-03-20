import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  componentDidUpdate() {
    const path = this.props.pathname;
    const navbarEndpoints = [
      "/",
      "/quienes_somos",
      "/estudios",
      "/reuniones",
      "/eventos",
    ];
    const hamburger = document.querySelector("#hamburger");
    if (navbarEndpoints.includes(path) && this.props.history.action !== "POP") {
      hamburger.click();
    }
  }

  render() {
    return (
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Iglesia Cristiana Bautista Sinaí
          </Link>
          <button
            id="hamburger"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/quienes_somos">
                Conocenos
              </Link>
              <Link className="nav-link" to="/estudios">
                Enseñanzas
              </Link>
              <Link className="nav-link" to="/reuniones">
                Reuniones
              </Link>
              <Link className="nav-link" to="/eventos">
                Eventos y Anuncios
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
