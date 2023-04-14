import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";


function App() {
  return (
    <div>
    <Router>
    <Routes>
         <Route exact path="/" Component={Home}/>
         <Route path="/movies" Component={Movies}/>
         <Route path="/series" Component={Series}/>
       </Routes>
    </Router>
    
    </div>

  );
}

export default App;
