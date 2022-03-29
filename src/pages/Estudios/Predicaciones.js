import React, { Component } from "react";
import EstudioCollection from "./EstudioCollection";
import retrieveCollections from "../../Actions/retrieveCollections";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Spinner from "../../utilities/Spinner/Spinner";

class Predicaciones extends Component {
  state = { predicaciones: null };

  componentDidMount() {
    if (this.props.collections === null || this.props.auth === true) {
      console.log("retrieving collections");
      this.props.retrieveCollections();
    } else {
      this.setState({ predicaciones: this.props.collections.predicaciones });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.collections !== prevProps.collections ||
      this.state.predicaciones === null
    ) {
      this.setState({ predicaciones: this.props.collections.predicaciones });
    }
  }

  render() {
    while (this.props.collections === null) {
      return <Spinner />;
    }
    return (
      <EstudioCollection collection={this.props.collections.predicaciones} />
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
    },
    dispatcher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Predicaciones);
