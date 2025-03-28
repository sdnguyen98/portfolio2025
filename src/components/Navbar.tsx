import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav>
      <motion.button
        className="navbar-button"
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ scale: .7 }}
      >
        <IoReorderThreeOutline size={32} />
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.ul
            initial={{ y: 0, scale: 1 }}
            animate={{ y: 50, scale: 1 }}
            exit={{ y: 0}}
            transition={{ duration: 0.2 }}
            className="navbar"
          >
            <li className="navbar-item"><a href="/">Home</a></li>
            <li className="navbar-item"><a href="projects">Projects</a></li>
            <li className="navbar-item"><a href="about">About</a></li>
            <li className="navbar-item"><a href="experience">Experience</a></li>
            <li className="navbar-item"><a href="education">Education</a></li>
            <li className="navbar-item"><a href="contact">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;