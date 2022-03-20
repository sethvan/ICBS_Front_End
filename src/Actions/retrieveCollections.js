import axios from "axios";
import { Link } from "react-router-dom";

export default async () => {
  const response = await axios.get("/_estudios");
  const editors = response.data.editors;
  const _devocionales = editors.filter((editor) => editor.kind === "estudios");
  const _sermones = editors.filter((editor) => editor.kind === "sermones");
  const devocionales = {
    title: "Devocionales",
    subtitle: "Devocionales",
    items: _devocionales.map((editor, i) => {
      const url = `/estudios/${editor._id}`;
      return (
        <li key={i} className="devocional-li">
          <Link to={url}>{editor.title}</Link>
        </li>
      );
    }),
  };
  const sermones = {
    title: "Predicaciones",
    subtitle: "Predicaciones",
    items: _sermones.map((editor, i) => {
      const url = `/estudios/${editor._id}`;
      return (
        <li key={i} className="sermon-li">
          <Link to={url}>{editor.title}</Link>
        </li>
      );
    }),
  };
  const collections = {
    devocionales,
    sermones,
    isAdminView: response.data.isAdminView,
  };

  return {
    type: "retrieveCollections",
    payload: collections,
  };
};
