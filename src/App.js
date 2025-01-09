import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

function App() {
    const options = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1
          },
          size: {
            value: { min: 1, max: 8 }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        }
    };
    
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    
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
            {/* <Helmet bodyAttributes={{ style: "background-color : #333" }} /> */}
            <Helmet>
    <link
    href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap')"
    rel="stylesheet"
  />
  {/* Set global styles */}
  <style>
    {`
      body {
        background-color: #333;
        color: #fff;
        font-family: 'Poppins', sans-serif;
      }
    `}
  </style>
</Helmet>

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
            <div className="particles-background">
              <Particles options={options} init={particlesInit} />
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
