import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import updateNavBar from "../../Actions/updateNavBar";
import { bindActionCreators } from "redux";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Iglesia Cristiana Bautista Sinai
          </Link>
          <button
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/quienes_somos">
                Conocenos
              </Link>
              <Link className="nav-link" to="/estudios">
                Devocionales
              </Link>
              <Link className="nav-link" to="/reuniones">
                Reuniones
              </Link>
              <Link className="nav-link" to="/proximos_eventos">
                Proximos Eventos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    navBarData: state.navBar,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateNavBar: updateNavBar,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
