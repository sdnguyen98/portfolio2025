     
import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";
import AnimatedSection from "../components/SectionAnimation";

const About = () => {
    return (
        <AnimatedSection>
        <div>
            <h1>About</h1>
            <p>
            A passionate computer science graduate from Oregon State University<br />
            with a strong background in web development and business requirements analysis.
          </p>     
        </div>
        </AnimatedSection>
        

    );
};

export default About;