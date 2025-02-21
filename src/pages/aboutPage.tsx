import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";


const About = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <MotionWrapper onComplete={() => setShowDescription(true)}>
      <div>
        <a href="https://www.linkedin.com/in/stevenduynguyen/" target="_blank">
          <img src="/images/templogo.png" className="temp logo" alt="temp logo" />
        </a>
      </div>
      <h1>Steven Nguyen</h1>

      {/* Smooth fade-in animation for #descript */}
      {showDescription && (
        <motion.div
          id="descript"
          initial={{ opacity: 0, scale: 0.7 }} 
          animate={{ opacity: 1, scale: 1 }}  // becomes visible
          transition={{ duration: 0.8 }} // Animation duration
        >
          <h2>Software Engineer</h2>
          <p>
            A passionate computer science graduate from Oregon State University<br />
            with a strong background in web development and business requirements analysis.
          </p>
        </motion.div>
      )}
    </MotionWrapper>
  );
};

export default About;
