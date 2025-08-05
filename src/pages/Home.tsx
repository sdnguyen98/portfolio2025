import { useEffect } from "react";
import Scene from "../components/Scene";
import LandingPageTxt from "../components/LandingPageTxt";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    // Add a class to the body element
    document.body.classList.add("no-scroll");

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <motion.div
      id="homeContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <LandingPageTxt />
      <Scene />
    </motion.div>
  );
};

export default Home;
