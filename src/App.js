import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ViewWrapper from "./pages/View/ViewWrapper";


function App() {
  
  

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/" component={ViewWrapper} />
      </div>
    </Router>
  );
}

export default App;
