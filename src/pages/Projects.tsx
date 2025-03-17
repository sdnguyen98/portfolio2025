import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ProjectCard from "../components/ProjectCard"; // Import the ProjectCard component

// Project Data

const Projects = () => {

  return (
    <div className="projects-container">
      <div>
      <h1 className="projects-secTitle">projects</h1>
      <div className="project-description">
        <p>This is a description of the projects</p>
      </div>
      </div>
      <div className="projects-list">
        <div className="project-section">
          <h2 className="projects-title">project1</h2>
        </div>
        <div className="project-section">
          <h2 className="projects-title">project2</h2>
        </div>
        <div className="project-section">
          <h2 className="projects-title">project3</h2>
        </div>
        <div className="project-section">
          <h2 className="projects-title">project4</h2>
        </div>
      </div>
    </div>
  )
};

export default Projects;
