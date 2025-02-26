import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Project Data
const projectInfo = [
  { id: 1, title: "Project A", description: "React + Vite App", image: "/images/project1.jpg" },
  { id: 2, title: "Project B", description: "React + Vite App", image: "/images/project2.jpg" },
  { id: 3, title: "Project C", description: "React + Vite App", image: "/images/project3.jpg" },
  { id: 4, title: "Project D", description: "React + Vite App", image: "/images/project4.jpg" },
  { id: 5, title: "Project E", description: "React + Vite App", image: "/images/project5.jpg" },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Ensures animation covers full viewport range
  });

  // Control opacity: Only fade at the start and end of the section
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]); 

  return (
    <motion.div ref={ref} style={{ minHeight: "200vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "80px", paddingTop: "100px", opacity }}>
      {projectInfo.map((project) => (
        <div
          key={project.id}
          style={{
            width: "350px",
            height: "450px",
            backgroundColor: "#222",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <img src={project.image} alt={project.title} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }} />
          <h3 style={{ marginTop: "15px" }}>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
