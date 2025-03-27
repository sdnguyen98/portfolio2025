import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";
import AnimatedSection from "../components/SectionAnimation";

const About = () => {
    return (
        
        <AnimatedSection>
            <div className="about-container">
                <h1 className="about-title">About</h1>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            A passionate computer science graduate from Oregon State University<br />
                            with a strong background in web development and business requirements analysis.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://placecats.com/400/500" alt="Placeholder Image" />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;