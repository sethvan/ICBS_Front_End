import axios from 'axios';
import { useSelector } from "react-redux";
import { useState } from 'react';

export default async () => {
  const isAdminView = useSelector((state) => state.auth);
  const [collections, setCollections] = useState(useSelector((state) => state.collections));

  if(collections === null || isAdminView === true) {
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
    setCollections({devocionales, sermones});
  }