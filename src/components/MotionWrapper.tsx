import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionWrapper = ({ children, onComplete }: { children: React.ReactNode; onComplete?: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, scale: { type: "", visualDuration: 0.4, bounce: 0.5 }}}
      onAnimationComplete={onComplete} // Triggers after animation finishes
    
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;