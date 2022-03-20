import React, { Component } from "react";
import EstudioCollection from "./EstudioCollection";
import retrieveCollections from "../../Actions/retrieveCollections";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Spinner from "../../utilities/Spinner/Spinner";

class Devocionales extends Component {
  state = { devocionales: null };

  componentDidMount() {
    if (this.props.collections === null || this.props.auth === true) {
      console.log("retrieving collections");
      this.props.retrieveCollections();
    } else {
      this.setState({ devocionales: this.props.collections.devocionales });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.collections !== prevProps.collections ||
      this.state.devocionales === null
    ) {
      this.setState({ devocionales: this.props.collections.devocionales });
    }
  }

  render() {
    while (this.props.collections === null) {
      return <Spinner />;
    }
    return (
      <EstudioCollection collection={this.props.collections.devocionales} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Devocionales);
