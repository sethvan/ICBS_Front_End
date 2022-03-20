import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import EstudioIndex from "./EstudioIndex";
import EditorPage from "../../Editor/EditorPage";
import Rendered from "../../Editor/Rendered";
import Devocionales from "./Devocionales";
import retrieveCollections from "../../Actions/retrieveCollections";

function EstudioRoutes() {
  return (
    <div className="EstudioRoutes">
      <Switch>
        <Route exact path="/estudios/" component={EstudioIndex} />
        <Route exact path="/estudios/devocionales" component={Devocionales} />
        <Route exact path="/estudios/new" component={EditorPage} />
        <Route exact path="/estudios/:id" component={Rendered} />
        <Route exact path="/estudios/:id/edit" component={EditorPage} />
      </Switch>
    </div>
  );
}

export default EstudioRoutes;
