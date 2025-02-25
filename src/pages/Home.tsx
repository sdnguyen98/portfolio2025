import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";


const Home = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <MotionWrapper onComplete={() => setShowDescription(true)
      
    }>
      <div id="homeContainer">
        <a href="https://www.linkedin.com/in/stevenduynguyen/" target="_blank">
          <img src="/images/templogo.png" className="temp logo" alt="temp logo" />
        </a>
      <div id= "nameTag" >
      <h1 style= {{margin: "0px"}} >Steven Nguyen</h1>
      </div>
      </div>
      </MotionWrapper>

    
  );
};

export default Home;
