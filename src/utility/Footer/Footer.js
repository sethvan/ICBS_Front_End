import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import updateFooter from "../../Actions/updateFooter";
import { bindActionCreators } from "redux";

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark py-3 mt-auto">
        <div className="container">
          <span className="text-muted">IglesiaBautistaSinai 2021</span>
          <span className="text-muted">|</span>
          <Link to="/creencias" className="text-muted">
            Nuestras Creencias
          </Link>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    footerData: state.footer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateFooter: updateFooter,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
