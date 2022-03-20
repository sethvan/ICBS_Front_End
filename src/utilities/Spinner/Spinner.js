import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Spinner.css";

library.add(faSpinner);

function Spinner(props) {
  return (
    <div className="spinner-wrapper">
      <FontAwesomeIcon icon="spinner" size="6x" spin />
    </div>
  );
}

export default Spinner;
