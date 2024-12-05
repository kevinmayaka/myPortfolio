import logo from "./logo.svg";
import { Helmet } from 'react-helmet';
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar"
import Experience from "./Experience";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{ style: 'background-color : #333' }} />
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
