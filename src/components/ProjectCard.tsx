import { motion } from "framer-motion";
import { useTransform } from "framer-motion";

// Individual Project Card
const ProjectCard = ({ project, index, scrollYProgress }) => {
  // Calculate individual start and end points for scroll-based animations
  const startOffset = index * 0.2;
  const endOffset = startOffset + 0.2;

  // Apply transforms (scale, x, y, opacity)
  const scale = useTransform(scrollYProgress, [startOffset, endOffset], [1, 0.6]);
  const xTransform = useTransform(scrollYProgress, [startOffset, endOffset], ["50vw", `${index * 15}vw`]); // Move right horizontally
  const yTransform = useTransform(scrollYProgress, [startOffset, endOffset], ["0vh", "30vh"]); // Stay on the same vertical level
  const opacity = useTransform(scrollYProgress, [startOffset - 0.1, startOffset], [0, 1]);

  return (
    <motion.div
      key={project.id}
      style={{
        width: "400px",
        height: "500px",
        backgroundColor: "#222",
        borderRadius: "10px",
        color: "white",
        textAlign: "center",
        padding: "20px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        position: "absolute",
        top: "0",
        x: xTransform,
        y: yTransform,
        scale: scale,
        opacity: opacity,
      }}
    >
      <img src={project.image} alt={project.title} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }} />
      <h3 style={{ marginTop: "15px" }}>{project.title}</h3>
      <p>{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;
