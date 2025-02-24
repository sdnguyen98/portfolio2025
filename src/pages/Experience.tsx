
import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";
import AnimatedSection from "../components/SectionAnimation";

const Experience = () => {
    return (
        <AnimatedSection>
        <div>      
        <h1>Experience</h1>
        <div className= "workExp">
        <h2> Freelance Software Engineer</h2>
            <div className= "posDescr">          
            <ul>
            <li> Performed solution evaluation for project and non-project work, identifying technology solutions, such as software, cloud, and subscriptions/services, by researching industry products, peer implementations, enterprise standards, and agency architecture to ensure that solutions are appropriate, available, secure, and sustainable.</li>
            <li> Performed needed assessments and developed detailed requirements for technology solutions to inform procurement and project planning processes.</li>
            </ul>
                </div>
        <div className= "workExp">
        <h2> Web Developer Lead, Oregon State University College of Engineering</h2>
            <div className= "posDescr">          
            <ul>
            <li> Met with internal clients to solve issues and concerns about the website. Utilizing Drupal 9 CMS and working with JavaScript, HTML, and CSS.</li>
            <li> Led a team of 6 employees focused primarily on building the new engineering website for Oregon State University.</li>
            <li> Managed and maintained a comprehensive database of issue tickets, addressing requests from stakeholders</li>
            <li> Created and prepared documents such as reports, the Web Support Assistant desk manual, job aids, and system instructions for user training.</li>
            <li> Experienced in configuring Commercial Off-the-Shelf products</li>
            <li> Utilized Scrum methodology in the development process of new projects</li>
            <li> Took part in the hiring and training process of new employees.</li>
            <li> Provided technology expertise to different departments of the College of Engineering.</li>
            <li>  Diagnoses and troubleshoots technical and business process problems to quickly resolve problems or to coordinate resolution with the IT Service Desk.</li>
            <li> Performed solution evaluation for project and non-project work, identifying technology solutions, such as software, cloud, and subscriptions/services, by researching industry products, peer implementations, enterprise standards, and agency architecture to ensure that solutions are appropriate, available, secure, and sustainable.</li>
            <li> Performed needed assessments and developed detailed requirements for technology solutions to inform procurement and project planning processes.</li>
            </ul>
                </div>
            </div>
            <div className= "workExp">
        <h2> Web Support Assistant Lead, Oregon State University</h2>
            <div className= "posDescr">          
            <ul>
            <li> Performed solution evaluation for project and non-project work, identifying technology solutions, such as software, cloud, and subscriptions/services, by researching industry products, peer implementations, enterprise standards, and agency architecture to ensure that solutions are appropriate, available, secure, and sustainable.</li>
            <li> Performed needed assessments and developed detailed requirements for technology solutions to inform procurement and project planning processes.</li>
            </ul>
                </div>
            </div>

            </div>
        </div>
        </AnimatedSection>
        

    );
};

export default Experience;