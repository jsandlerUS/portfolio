import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Download from "./components/Reusable/download";


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/portfolio" element={<Home/>} />
      <Route exact path="/download" element={<Download/>} />
    </Routes>
  </Router>
);

export default App;
