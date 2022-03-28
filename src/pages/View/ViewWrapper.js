import { useEffect, useState } from "react";
import View from "./View";
import NavBar from "../../Boilerplate/NavBar/NavBar";
import Footer from "../../Boilerplate/Footer/Footer";

function ViewWrapper(props) {
  const path = props.location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  if (path === "/") return null;
  const collectionRelatedEndpoints = [
    "estudios",
    "edit",
    "new",
    "devocionales",
    "predicaciones",
  ];

  const getTailEndpoint = /\w*$/;
  const tail = getTailEndpoint.exec(path)[0];
  document.body.style.backgroundColor = collectionRelatedEndpoints.includes(
    tail
  )
    ? "azure"
    : "cornflowerblue";

  return (
    <>
      <div className="d-flex flex-column vh-100 m-0 p-0">
        <NavBar history={props.history} pathname={props.location.pathname} />
        <View />
        <Footer />
      </div>
    </>
  );
}

export default ViewWrapper;
