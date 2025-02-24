import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";


const Home = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <MotionWrapper onComplete={() => setShowDescription(true)
      
    }>
      <div>
        <a href="https://www.linkedin.com/in/stevenduynguyen/" target="_blank">
          <img src="/images/templogo.png" className="temp logo" alt="temp logo" />
        </a>
      </div>
      <h1>Steven Nguyen</h1>
      </MotionWrapper>

    
  );
};

export default Home;
