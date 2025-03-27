import { useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import AnimatedBackground from "./components/animatedBackground";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null); // Track hovered project

  // Project data
  const projectDescriptions: { [key: string]: string } = {
    project1: "Lead a team of developers to create the new engineering website for Oregon State University",
    project2: "The fast, easy and free tool for making digital scrapbooking layouts",
    project3: "Application that quizzes you on your knowledge of any Spotify playlist",
    project4: "Need to make reservation at Oregon State University Gym",
    project5: "Want to get the .CSV of your Age of Empire 2 Analytics",
  };

  const projectImages: { [key: string]: string } = {
    project1: "../images/osu.gif",
    project2: "https://placecats.com/300/200",
    project3: "https://placecats.com/300/200",
    project4: "../images/benny.gif",
    project5: "../images/villager.gif",
  };

  // Project names
  const projectNames: { [key: string]: string } = {
    project1: "Oregon State University College of Engineering",
    project2: "Scrapbook Maker",
    project3: "Spotify Quiz",
    project4: "Gym Reservation",
    project5: "Age of Empires Analytics Scrapper",
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
