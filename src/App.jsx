import './App.css';
import {Navbar} from "./components/Navbar"
import Products from "./components/Home"


function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <br/>
      <Products/>
    </div>
  );
}

export default App;
