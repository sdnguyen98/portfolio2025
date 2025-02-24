import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger once when the section comes into view
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, scale: { type: "", visualDuration: 0.4, bounce: 0.5 }}}
    
    
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;