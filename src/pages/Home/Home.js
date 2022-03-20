import react, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


class Home extends Component {
  render() {
    return (
      <div className="home-body d-flex text-center text-white bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-left mb-0">
                Iglesia Cristiana Bautista Sinaí
              </h3>
              <nav className="nav nav-masthead justify-content-center float-md-right">
                <Link className="nav-link active" aria-current="page" to="#">
                  Inicio
                </Link>
                <Link className="nav-link" to="/quienes_somos">
                  Conocenos
                </Link>
              </nav>
            </div>
          </header>
          <main className="px-3">
            <h1>¡Bienvenidos a la Iglesia Cristiana Bautista Sinaí!</h1>
            <p className="lead">
              "Nosotros lo amamos a él porque él nos amó primero.""
              <br />- 1 Juan 4:19
            </p>
            <Link
              to="/quienes_somos"
              className="btn btn-lg btn-secondary font-weight-bold border-white bg-white"
            >
              Conocenos
            </Link>
          </main>

          <footer className="mt-auto text-white-50">
            <p>&copy; 2022</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
