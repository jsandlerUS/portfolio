import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Download from "./components/download";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="" component={Home} />
      <Route exact path="/download" component={Download} />
    </Switch>
  </Router>
);

export default App;
