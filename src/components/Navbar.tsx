import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import { menuSlide } from './anim';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav>
      <motion.button
        className="navbar-button"
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ scale: .7 }}
      >
        {isVisible ? <IoCloseOutline size={32} /> : <IoReorderThreeOutline size={32} />}
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.ul
          variants={menuSlide}
          initial="initial" 
          animate="enter" 
          exit="exit"
          className="navbar"
          >
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/about#Projects" className="nav-link">Projects</a>
          <a href="media/resume.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;