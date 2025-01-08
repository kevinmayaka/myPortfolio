import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

function App() {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.pathname.substring(1); 
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0); 
        }
    }, [location]);

    return (
        <div className="App">
            <Navbar />
            <div id="/">
                <Home />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="contactme">
                <ContactMe />
            </div>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
