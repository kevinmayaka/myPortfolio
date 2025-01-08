import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    const [showNavMenu, setShowNavMenu] = useState(false);
    const [showSocialMenu, setShowSocialMenu] = useState(false);

    // Scroll to the specific section
    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav>
           <div
                className="menu-container"
                onMouseEnter={() => setShowNavMenu(true)}
                onMouseLeave={() => setShowNavMenu(false)}
            >
                <button className="nav-button">Navigation</button>
                {showNavMenu && (
                    <div className="dropdown-menu">
                         <Link to="/" className="dropdown-item">
                            Landing Page
                        </Link>
                        <Link to="./experience" className="dropdown-item">
                            Experience
                        </Link>
                        <Link to="./skills" className="dropdown-item">
                            Skills
                        </Link>
                        <Link to="./contactme" className="dropdown-item">
                            Contact Me
                        </Link>
                    </div>
                )}
            </div>

            {/* Social dropdown */}
            <div
                className="menu-container"
                onMouseEnter={() => setShowSocialMenu(true)}
                onMouseLeave={() => setShowSocialMenu(false)}
            >
                <button className="nav-button">Social</button>
                {showSocialMenu && (
                    <div className="dropdown-menu">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            X
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
