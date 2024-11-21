import React from "react";
import "./Skills.css";

export default function Skills() {
    // Skills data with remote URLs
    const skills = [
        {
            name: "React.js",
            image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Vue.js",
            image: "https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Python",
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Flask",
            image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Version Control",
            image: "https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "PostgreSQL",
            image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
    ];

    return (
        <div className="skills-container">
            <h2 className="skills-header">My Development Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="skill-image"
                        />
                        <h3 className="skill-name">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
