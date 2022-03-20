import "./ConfirmDeletion.css";

function ConfirmDeletion(props) {
  const style = props.displayModal === true ? "block" : "none";
  const inlineStyle = { display: `${style}` };
  const editorType =
    props.kind === "estudios" ? "el devocional" : "la predicacion";
  const displayString = `Confirma que quiere borrar permanente ${editorType} con titulo de "${props.title}"`;

  return (
    <div className="site-modal" style={inlineStyle}>
      <div className="modal-content">
        <div className="col right">
          <span onClick={props.close} className="close">
            &times;
          </span>
        </div>
        <div className="confirm-delete">
          <h3 className=" mb-4">{displayString}</h3>
          <center>
            <button
              onClick={props.delete}
              className="btn btn-danger d-inline editor-button mr-5 mb-1"
            >
              Confirmar
            </button>

            <button
              className="card-link btn btn-primary salir-button mb-1"
              onClick={props.close}
            >
              Regresar
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeletion;
