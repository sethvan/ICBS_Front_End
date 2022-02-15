import react, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { connect } from "react-redux";
import updateHome from "../../Actions/updateHome";
import { bindActionCreators } from "redux";

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
            <h1>Iglesia Cristiana Bautista Sinaí</h1>
            <p className="lead">
              Bienvenidos a la Iglesia Bautista Sinaí! <br />
              Juan 5:39 <br />
              "Escudriñad las Escrituras; <br />
              porque a vosotros os parece que en ellas tenéis la vida eterna; y
              ellas son las que dan testimonio de mí;"
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

function mapStateToProps(state) {
  // mapStateToProps returns an object, with:
  // property is the local prop name to this component
  // value will be the property in the root reducer... ie, a piece of the store
  return {
    homeData: state.home,
  };
}

// mapDispatchToProps is how we tie our component to the dispatch
// It takes 1 arg: dispatch
function mapDispatchToProps(dispatch) {
  // this function returns, bindActionCreators
  // and we hand bindActionCreators an object:
  // each property will be a local prop
  // each value will be a function that is dispatch when run
  //2nd arg or bindActionCreators is teh dispatch
  return bindActionCreators(
    {
      updateHome: updateHome,
    },
    dispatch
  );
}

// connect takes 2 args, the first one is a function that is going to map
// a piece of redux state to this components props
// 2nd arg to connect: mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Home);
