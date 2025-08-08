import React, { useState, useEffect } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const menuSlide = {
    initial: {
      x: "100%",
    },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <nav className="fixed top-0 right-0 z-50">
      <motion.button
        className="fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full"
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ scale: 0.7 }}
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
            className={`fixed top-0 h-screen bg-black/70 backdrop-blur-md flex flex-col justify-center
                        ${isMobile
                ? "left-0 right-0 w-full items-center px-6"
                : "right-0 w-full max-w-sm md:max-w-md items-start pl-16"
              }`}
          >
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/about#Projects" label="Projects" />
            <NavLink href="/media/Steven_Nguyen_Resume.pdf" label="Resume" external={true} />
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="my-8"
    >
      <a
        href={href}
        className="text-4xl md:text-5xl text-white font-normal relative overflow-hidden group hover:text-gray-300 transition-colors"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
      </a>
    </motion.li>
  );
};

export default Navbar;
