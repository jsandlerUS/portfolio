import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Download from "./components/download";
// import Example from "./components/Home/useSpeech";


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/portfolio" element={<Home/>} />
      <Route exact path="/download" element={<Download/>} />
    </Routes>
  </Router>
);

export default App;
