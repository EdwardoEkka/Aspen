import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/navbar';
import Home from './components/home';
import Explore from './components/explore';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Home/> */}
      <Explore/>
    </div>
  );
}

export default App;
