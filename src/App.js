import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/projects";
import Bio from "./components/Bio/bio";
import Download from "./components/download";
import Footer from "./components/Footer/footer";


const App = () => (
<Router>
  <Navbar />
    <Switch>
      {/* <Route exact path='/projects' component={Projects}/> */}
      {/* <Route exact path='' component={Bio}/> */}
      <Route exact path='/bio' component={Bio}/>
      <Route exact path='/download' component={Download}/>
    </Switch>
    <Footer />
</Router>
  );

export default App;
