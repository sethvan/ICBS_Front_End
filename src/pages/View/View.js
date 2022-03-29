import { Route, Switch } from "react-router-dom";
import QuienesSomos from "../QuienesSomos/QuienesSomos";
import Reuniones from "../Reuniones/Reuniones";
import EstudioRoutes from "../Estudios/EstudioRoutes";
import EditorPage from "../../Editor/EditorPage";
import Rendered from "../../Editor/Rendered";
import Admin from "../Admin/Admin";
import NotFound from "./NotFound";

function View() {
  return (
    <>
      <div className="container mt-sm-5 mt-4 mb-sm-3 mb-0">
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/quienes_somos" component={QuienesSomos} />
          <Route exact path="/reuniones" component={Reuniones} />
          <Route exact path="/creencias/edit" component={EditorPage} />
          <Route exact path="/creencias" component={Rendered} />
          <Route exact path="/eventos/edit" component={EditorPage} />
          <Route exact path="/eventos" component={Rendered} />
          <Route exact path="/sermones/new" component={EditorPage} />
          <Route exact path="/predicaciones/new" component={EditorPage} />
          <Route path="/estudios" component={EstudioRoutes} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default View;
