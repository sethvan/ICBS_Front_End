import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import updateAuth from "../../Actions/updateAuth";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      isAdminView: false,
      returnToString: "",
      password: "",
      wrongPassword: false,
    };
  }

  componentDidUpdate() {
    this.isLoggedIn();
  }

  handleChange = (e) => {
    this.setState({ password: `${e.target.value}` });
  };

  isLoggedIn = () => {
    if (this.state.isAdminView) {
      this.props.history.push(`${this.props.redirect}`);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/_login", { password: this.state.password });
    let pushToString;
    console.log("RES = ", res);
    if (res.data.isAdminView === true) {
      this.props.updateAuth(res.data.isAdminView);
      this.setState({ isAdminView: true });
    } else {
      document.querySelector("#password-input").value = "";
      this.setState({ wrongPassword: true });
    }
  };

  render() {
    return (
      <>
        <center>
          {this.state.wrongPassword ? (
            <h2 className="clave-incorrecto">Esa Clave No Coincide</h2>
          ) : (
            ""
          )}

          <div className="clave mb-3">
            <label className="form-label clave-label">Clave</label>
            <input
              id="password-input"
              type="password"
              name="password"
              className="clave-input"
              onChange={this.handleChange}
            />
          </div>

          <button onClick={this.handleSubmit} className="btn btn-success">
            Entrar
          </button>
        </center>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    redirect: state.redirect,
  };
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      updateAuth,
    },
    dispatcher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
