import React, { Component } from "react";
import EstudioCollection from "./EstudioCollection";
import retrieveCollections from "../../Actions/retrieveCollections";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Spinner from "../../utilities/Spinner/Spinner";

class Sermones extends Component {
  state = { sermones: null };

  componentDidMount() {
    if (this.props.collections === null || this.props.auth === true) {
      console.log("retrieving collections");
      this.props.retrieveCollections();
    } else {
      this.setState({ sermones: this.props.collections.sermones });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.collections !== prevProps.collections ||
      this.state.sermones === null
    ) {
      this.setState({ sermones: this.props.collections.sermones });
    }
  }

  render() {
    while (this.props.collections === null) {
      return <Spinner />;
    }
    return <EstudioCollection collection={this.props.collections.sermones} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Sermones);
