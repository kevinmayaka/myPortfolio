import React from "react";
import "./Experience.css"

export default function Experience() {
    return (
        <div className="experience-container">
            <h2 className="section-header">Experience</h2>
            <div className="experience-body">
                <div className="experience-section">
                    <h3>Young Pride Enterprises</h3>
                    <h4>Technician/ Jan 2022 - Dec 2023 </h4>
                    <p>As a software developer and networking intern,
                        my responsibilities included designing, coding, and testing software solutions
                        to meet user needs and performance requirements.
                        I collaborated with team members to troubleshoot bugs, optimize code,
                        and maintain documentation. On the networking side, I assisted with monitoring network performance, troubleshooting connectivity issues, and configuring hardware.
                        I also supported the implementation of security measures to protect data and network integrity, ensuring smooth communication between devices and systems.</p>
                </div>
                <div className="experience-section">
                    <h3>Impact Water</h3>
                    <h4>Field agent/ Jun 2020 - Sept 2021</h4>
                    <p>I collected data on children's access to clean water in remote areas of Murang'a County,
                        Kenya. Additionally, I provided training to school administrators on preventing
                        foodborne illnesses by using purified water, utilizing purification tablets supplied by the company.</p>
                </div>
            </div>
        </div>
    );
}