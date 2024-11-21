import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar"
import Experience from "./Experience";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Skills />
    
    </div>
  );
}

export default App;
