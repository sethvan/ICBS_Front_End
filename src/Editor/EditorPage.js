import React, { Component } from "react";
import EditorJS from "@editorjs/editorjs";
import EDITOR_JS_TOOLS from "./tools";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import updateAuth from "../Actions/updateAuth";
import updateRedirect from "../Actions/updateRedirect";

class EditorPage extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      editorData: {},
      kind: "estudios",
      editorReady: false,
      reqType: "post",
      reqUrl: "",
      pushToString: "",
    };
    this.editorApp = {};
  }

  startApp = () => {
    this.editorApp = new EditorJS({
      holder: "editorjs",
      tools: EDITOR_JS_TOOLS,
      version: "2.11.10",
      autofocus: true,
      data: this.state.editorData,
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
    });
    this.setState({ editorReady: true });
  };

  async componentDidMount() {
    if (!this.props.auth) {
      this.props.updateRedirect(this.props.location.pathname);
      this.props.history.push("/admin");
      return null;
    }

    let getUrl;
    const path = this.props.location.pathname;
    console.log("Path = ", path);
    if (`${path.slice(-3)}` === "new") {
      this.setState({
        reqUrl: `/_estudios`,
        kind: `${path.slice(1, -4)}`,
      });
      this.startApp();
    } else {
      await this.setState({ kind: `${path.slice(1, -5)}`, reqType: "put" });
      getUrl = `/_${this.state.kind}`;
      this.setState({ reqUrl: getUrl, pushToString: `/${this.state.kind}` });

      const response = await axios.get(`${getUrl}`);
      console.log("Get response = ", response);

      if (!response.data.editor) {
        this.setState({ reqType: "post" });
        this.startApp();
      } else {
        const { title, editorData, kind } = response.data.editor;
        this.setState({ title, editorData, kind });
        console.log("Title = ", this.state.title);
        this.startApp();
      }
    }
  }

  changeHandler = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSave = async (e) => {
    let axResponse;
    const resp = await this.editorApp.save();
    this.setState({ editorData: resp });
    const body = {
      editor: {
        title: this.state.title,
        editorData: this.state.editorData,
        kind: this.state.kind,
      },
    };

    if (this.state.reqType === "post") {
      axResponse = await axios.post(`${this.state.reqUrl}`, body);
    } else {
      axResponse = await axios.put(`${this.state.reqUrl}`, body);
    }
    if (this.state.reqUrl === `/_estudios`) {
      this.setState({ pushToString: `/estudios/${axResponse.data.id}` });
    }
    this.props.history.push(`${this.state.pushToString}`);
  };

  handleReturn = () => {
    this.props.history.goBack();
  };

  logoutHandler = async () => {
    const response = await axios.post(`/_logout`);
    const { isAdminView } = response.data;
    this.props.updateAuth(isAdminView);
    this.props.history.push(`${this.state.pushToString}`);
  };

  render() {
    if (!this.state.editorReady) {
      return (
        <center>
          <h1>Cargando Editor...</h1>
        </center>
      );
    }

    return (
      <>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="editor-buttons">
              <button
                onClick={this.handleSave}
                className="d-inline btn btn-success editor-button"
              >
                Guardar
              </button>
              <button
                onClick={this.handleReturn}
                className="d-inline btn btn-danger editor-button"
              >
                Regresar
              </button>
              <button
                className="d-inline btn btn-primary editor-button salir-button"
                onClick={this.logoutHandler}
              >
                Salir
              </button>
            </div>
            <form noValidate className="validated-form">
              <input
                onChange={this.changeHandler}
                className="form-control title-input"
                placeholder="Titulo Aqui"
                value={this.state.title}
                required
              />
              <div className="editor-div" id="editorjs"></div>
            </form>
          </div>
        </div>
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
      updateRedirect,
    },
    dispatcher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
