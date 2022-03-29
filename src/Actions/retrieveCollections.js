import axios from "axios";
import { Link } from "react-router-dom";

export default async () => {
  const response = await axios.get("/_estudios");
  const editors = response.data.editors;
  const _devocionales = editors.filter((editor) => editor.kind === "estudios");
  const _sermones = editors.filter((editor) => editor.kind === "sermones");
  const ultimoSermon = `/estudios/${_sermones[0]._id}`;
  console.log("ultimoSermon", ultimoSermon);
  const _predicaciones = editors.filter(
    (editor) => editor.kind === "predicaciones"
  );

  const predicaciones = {
    title: "Predicaciones Escritos",
    subtitle: "Lee predicaciones escritos",
    items: _predicaciones.map((editor, i) => {
      const url = `/estudios/${editor._id}`;
      return (
        <li key={i} className="devocional-li">
          <Link to={url}>{editor.title}</Link>
        </li>
      );
    }),
  };

  const devocionales = {
    title: "Devocionales",
    subtitle: "Lee devocionales",
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
    title: "Predicaciones en Video",
    subtitle: "Ver videos de predicaciones",
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
    predicaciones,
    ultimoSermon,
    isAdminView: response.data.isAdminView,
  };

  return {
    type: "retrieveCollections",
    payload: collections,
  };
};
