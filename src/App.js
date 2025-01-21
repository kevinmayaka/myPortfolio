import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

function App() {
    const location = useLocation();
    const canvasRef = useRef(null);

    useEffect(() => {
        // Scroll to specific section on location change
        const sectionId = location.pathname.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const particlesArray = [];
        const colors = ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"];
        const particleCount = 80;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        class Particle {
            constructor(x, y, dx, dy, radius, color) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.radius = radius;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;

                // Bounce particles off the edges
                if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }
                if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }

                this.draw();
            }
        }

        function initParticles() {
            particlesArray.length = 0;
            for (let i = 0; i < particleCount; i++) {
                const radius = Math.random() * 5 + 1;
                const x = Math.random() * (canvas.width - radius * 2) + radius;
                const y = Math.random() * (canvas.height - radius * 2) + radius;
                const dx = Math.random() * 2 - 1;
                const dy = Math.random() * 2 - 1;
                const color = colors[Math.floor(Math.random() * colors.length)];
                particlesArray.push(new Particle(x, y, dx, dy, radius, color));
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((particle) => particle.update());
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);

    return (
        <div className="App">
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap"
                    rel="stylesheet"
                />
                <style>
                    {`
                        body {
                            background-color: #333 !important;
                            color: #fff !important;
                            font-family: 'Poppins', sans-serif !important;
                        }
                    `}
                </style>
            </Helmet>

            <Navbar />
            <canvas ref={canvasRef} className="particles-canvas"></canvas>
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
