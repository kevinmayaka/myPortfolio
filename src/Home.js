import React, { useRef } from "react";
import './Home.css'

export default function Home() {
    const contactMeRef = useRef(null);

    const handleDownloadCV = () => {
        window.location.href = "https://drive.google.com/file/d/1LhbtEuYpOCr0UmkPBh0u4FWvvShx0ROV/view?usp=sharing";
    };
    const handleContactMe = () => {
        contactMeRef.currect.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="homepage">
            <div className="first-part">
                <p className="intro">Hello. I am Kevin, a passionate software engineer</p>
                <div className="carousel-container">
                    <p className=" carousel-text">React.js, Vue.js, Python, Flask developer</p>
                </div>
            </div>
            <div className="buttons-section">
                <button
                    className="Download-button"
                    onClick={handleDownloadCV}>Download CV</button>
                <button
                    className="ContactMe-button"
                    onClick={handleContactMe}>Contact Me</button>
            </div>
        </div>
    );
}
