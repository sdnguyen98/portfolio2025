import { useEffect } from "react";
import Scene from "../components/Scene";
import AboutTxt from "../components/AboutTxt";
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
    <div id="homeContainer">
      <AboutTxt />
      <Scene />
    </div>
  );
};

export default Home;
