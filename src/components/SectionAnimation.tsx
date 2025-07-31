import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionAnimation = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger once when the section comes into view
    threshold: 0.7, // Trigger when 20% of the section is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }} // Initially hidden and slightly translated
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh", // Full screen height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "2px solid gray", // Optional border between sections
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionAnimation;
