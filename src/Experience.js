import React from "react";
import "./Experience.css"

export default function Experience() {
    return (
        <div className="experience-container">
            <h2 className="section-header">Experience</h2>
            <section className="experience-section">
                <h3>Young Pride Enterprises</h3>
                <p>Technician/ Jan 2022 - Dec 2023 </p>
                <p>As a software developer and networking intern,
                    my responsibilities included designing, coding, and testing software solutions
                    to meet user needs and performance requirements.
                    I collaborated with team members to troubleshoot bugs, optimize code,
                    and maintain documentation. On the networking side, I assisted with monitoring network performance, troubleshooting connectivity issues, and configuring hardware.
                    I also supported the implementation of security measures to protect data and network integrity, ensuring smooth communication between devices and systems.</p>
            </section>
            <section className="experience-section">
                <h3>Impact Water</h3>
                <p>Field agent/ Jun 2020 - Sept 2021</p>
                <p>I collected data on children's access to clean water in remote areas of Murang'a County,
                    Kenya. Additionally, I provided training to school administrators on preventing
                    foodborne illnesses by using purified water, utilizing purification tablets supplied by the company.</p>
            </section>
        </div>
    );
}