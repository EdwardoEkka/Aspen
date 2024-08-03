import './App.css';
import View from './components/view';
import Home from './components/home';
import Explore from './components/explore';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/view" element={<View/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
