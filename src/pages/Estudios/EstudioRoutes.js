import { Route, Switch } from "react-router-dom";
import EstudioIndex from "./EstudioIndex";
import EditorPage from "../../Editor/EditorPage";
import Rendered from "../../Editor/Rendered";
import Devocionales from "./Devocionales";
import Sermones from "./Sermones";
import Predicaciones from "./Predicaciones";

function EstudioRoutes() {
  return (
    <div className="EstudioRoutes">
      <Switch>
        <Route exact path="/estudios/" component={EstudioIndex} />
        <Route exact path="/estudios/devocionales" component={Devocionales} />
        <Route exact path="/estudios/predicaciones" component={Predicaciones} />
        <Route exact path="/estudios/sermones" component={Sermones} />
        <Route exact path="/estudios/new" component={EditorPage} />
        <Route exact path="/estudios/:id" component={Rendered} />
        <Route exact path="/estudios/:id/edit" component={EditorPage} />
      </Switch>
    </div>
  );
}

export default EstudioRoutes;
