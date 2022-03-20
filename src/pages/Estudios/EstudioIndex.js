import React, { Component } from "react";
import Spinner from "../../utilities/Spinner/Spinner";
import EstudioCard from "./EstudioCard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import retrieveCollections from "../../Actions/retrieveCollections";
import updateAuth from "../../Actions/updateAuth";

class EstudioIndex extends Component {
  state = {
    devocionales: null,
    sermones: null,
    isAdminView: false,
  };

  componentDidMount() {
    if (this.props.collections === null || this.props.auth === true) {
      console.log("retrieving collections");
      this.props.retrieveCollections();
    } else {
      this.setState({
        devocionales: this.props.collections.devocionales,
        sermones: this.props.collections.sermones,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.collections !== prevProps.collections ||
      this.state.devocionales === null
    ) {
      console.log("setting state in editorIndex");
      this.setState({
        devocionales: this.props.collections.devocionales,
        sermones: this.props.collections.sermones,
        isAdminView: this.props.collections.isAdminView,
      });
      this.props.updateAuth(this.props.collections.isAdminView);
    }
  }

  displayCollection = (collection) => {
    this.props.history.push(`/estudios/${collection.title.toLowerCase()}`);
  };

  render() {
    if (this.state.devocionales === null) {
      return <Spinner />;
    }

    return (
      <div className="row d-flex">
        <div className=" col-xl-5 col-lg-6 col-12 mx-auto mt-0 mb-auto">
          {this.state.isAdminView === true ? (
            <>
              <button
                onClick={() => {
                  this.props.history.push("/estudios/new");
                }}
                className="btn btn-success mb-3 d-block"
              >
                Crear Nuevo Devocional
              </button>
              <EstudioCard
                collection={this.state.devocionales}
                displayCollection={this.displayCollection}
              />
            </>
          ) : (
            <EstudioCard
              collection={this.state.devocionales}
              displayCollection={this.displayCollection}
            />
          )}
        </div>

        <div className="col-xl-5 col-lg-6 col-12 mx-auto mt-0 mb-auto">
          {this.state.isAdminView === true ? (
            <>
              <button
                onClick={() => {
                  this.props.history.push("/sermones/new");
                }}
                className="btn btn-success mb-3 d-block"
              >
                Crear Nueva Predicacion
              </button>
              <EstudioCard
                collection={this.state.sermones}
                displayCollection={this.displayCollection}
              />
            </>
          ) : (
            <EstudioCard
              collection={this.state.sermones}
              displayCollection={this.displayCollection}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    collections: state.collections,
  };
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      retrieveCollections,
      updateAuth,
    },
    dispatcher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EstudioIndex);
