import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EditorJS from "@editorjs/editorjs";
import EDITOR_JS_TOOLS from "./tools";
import axios from "axios";
import "./Rendered.css";
import updateAuth from "../Actions/updateAuth";
import ConfirmDeletion from "./ConfirmDeletion";

function Rendered(props) {
  let [titulo, setTitle] = useState("Cargando...");
  let [kind, setKind] = useState("");
  let [editorApp, setEditor] = useState(null);
  const isAdminView = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let [displayModal, setModalDisplay] = useState(false);

  useEffect(() => {
    const startupEditor = async () => {
      if (editorApp !== null) {
        editorApp.destroy();
      }
      const path = props.location.pathname;
      const url = `/_${path.slice(1)}`;
      const response = await axios.get(`${url}`);
      const { isAdminView } = response.data;
      dispatch(updateAuth(isAdminView));
      const { title, kind, editorData } = response.data.editor;
      setTitle(`${title}`);
      setKind(`${kind}`);
      setEditor(
        new EditorJS({
          holder: "editorjs",
          tools: EDITOR_JS_TOOLS,
          version: "2.11.10",
          autofocus: true,
          data: editorData,
          readOnly: true,
          minHeight: 0,
          onReady: () => {
            console.log("Read Only Editor.js is ready to work!");
          },
        })
      );
    };
    startupEditor();
  }, [props.location.pathname]);

  const closeModal = () => {
    setModalDisplay(false);
  };

  const deleteHandler = () => {
    setModalDisplay(true);
  };

  const deleteEditor = async () => {
    setModalDisplay(false);
    const url = `/_${props.location.pathname.slice(1)}`;
    const response = await axios.delete(`${url}`);
    console.log("delete response = ", response);
    props.history.push("/estudios");
  };

  const logoutHandler = async () => {
    const response = await axios.post(`/_logout`);
    const { isAdminView } = response.data;
    dispatch(updateAuth(isAdminView));
  };

  return (
    <>
      <div className="Estudio-Show">
        {isAdminView ? (
          <div className="card-body ">
            <Link
              className="card-link btn btn-secondary editor-button"
              to={`${props.location.pathname}/edit`}
            >
              Editar
            </Link>

            {kind === "estudios" || kind === "sermones" ? (
              <button
                onClick={deleteHandler}
                className="btn btn-danger d-inline editor-button"
              >
                Borrar
              </button>
            ) : (
              ""
            )}
            <button
              className="card-link btn btn-primary salir-button"
              onClick={logoutHandler}
            >
              Salir
            </button>
          </div>
        ) : (
          ""
        )}

        <h1 className="mt-0 pt-0 mb-0 render-title">
          <u>{titulo}</u>
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-6 col-12 mt-sm-4 mt-3" id="text-here">
            <div id="editorjs"></div>
          </div>
        </div>

        <div>
          <p id="bottom">************************</p>
        </div>
      </div>
      <ConfirmDeletion
        displayModal={displayModal}
        delete={deleteEditor}
        title={titulo}
        close={closeModal}
        kind={kind}
      />
    </>
  );
}

export default Rendered;
