import { useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import AnimatedBackground from "./components/animatedBackground";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null); // Track hovered project

  // Project data
  const projectDescriptions: { [key: string]: string } = {
    project1: "The fast, easy and free tool for making digital scrapbooking layouts",
    project2: "Application that quizzes you on your knowledge of any Spotify playlist",
    project3: "Need to make reservation at Oregon State University Gym",
    project4: "Want to get the .CSV of your Age of Empire 2 Analytics",
  };

  const projectImages: { [key: string]: string } = {
    project1: "https://placecats.com/300/200",
    project2: "https://placecats.com/300/200",
    project3: "https://placecats.com/300/200",
    project4: "https://placecats.com/300/200",
  };

  // Project names
  const projectNames: { [key: string]: string } = {
    project1: "Scrapbook Maker",
    project2: "Spotify Quiz",
    project3: "Gym Reservation",
    project4: "Age of Empires Analytics Scrapper",
  };


  return (
    <div className="projects-container">
      <div>
        <h1 className="projects-secTitle">Projects</h1>
        <div className="project-description">
          <p>
            {selectedProject
              ? projectDescriptions[selectedProject]
              : "Select a project to learn more."}
          </p>
        </div>
      </div>
      <div className="projects-list">
        {Object.keys(projectNames).map((projectKey) => (
          <div
            key={projectKey}
            className="project-section"
            onClick={() => setSelectedProject(projectKey)}
            onMouseEnter={() => setHoveredProject(projectKey)} // Set hovered project
            onMouseLeave={() => setHoveredProject(null)} // Clear hovered project
          >
            <h2 className="projects-title">{projectNames[projectKey]}</h2>
            {hoveredProject === projectKey && ( // Show image only when hovered
              <motion.img
                src={projectImages[projectKey]}
                alt={projectNames[projectKey]}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="project-image" // Add a class instead of inline styles
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
