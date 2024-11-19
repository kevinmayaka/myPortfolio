import React, { useRef } from "react";

export default function Home() {
    const contactMeRef = useRef(null);

    const handleDownloadCV = () => {
        window.location.href = "https://drive.google.com/file/d/1LhbtEuYpOCr0UmkPBh0u4FWvvShx0ROV/view?usp=sharing";
    };
    const handleContactMe = () => {
        contactMeRef.currect.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section>
                <p>Hello. I am Kevin, a passionate software engineer</p>
                <p>React.js, Vue.js, Flask developer</p>
            </section>
            <section>
                <button onClick={handleDownloadCV}>Download CV</button>
                <button onClick={handleContactMe}>Contact Me</button>
            </section>
        </>
    );
}
