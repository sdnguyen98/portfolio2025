import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ProjectCard from "../components/ProjectCard"; // Import the ProjectCard component

// Project Data
const projectInfo = [
  { id: 1, title: "Project A", description: "React + Vite App", image: "https://placecats.com/300/200" },
  { id: 2, title: "Project B", description: "Full-Stack Web App", image: "https://placecats.com/300/200" },
  { id: 3, title: "Project C", description: "Machine Learning Model", image: "https://placecats.com/300/200" },
  { id: 4, title: "Project D", description: "E-commerce Platform", image: "https://placecats.com/300/200" },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Scroll-triggered animation for the h1 element
  const xTransform = useTransform(scrollYProgress, [0, 0.2], ["0vw", "-30vw"]); // Move left as you scroll
  const opacityTransform = useTransform(scrollYProgress, [0.8, 1], [1, 0]); // Fade out as you scroll past 80%

  return (
    <div>
      {/* Use motion.div to animate the project title */}
      <motion.div
        id="projectTitle"
        style={{
          fontSize: "30px",
          position: "sticky",
          top: "0",
          zIndex: "10",
          x: xTransform, // Bind the x-axis transform
          opacity: opacityTransform, // Bind the opacity transform
        }}
      >
        <h1>Projects</h1>
      </motion.div>
      
      {/* Project Cards */}
      <div ref={ref} style={{ minHeight: "500vh", position: "relative" }}>
        <div style={{ position: "sticky", top: "10vh", height: "80vh", display: "flex", justifyContent: "flex-start" }}>
          {projectInfo.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress} // Pass the scroll progress to ProjectCard
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
