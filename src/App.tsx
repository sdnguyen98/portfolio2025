// App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss"; // Updated from App.css to App.scss
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleHomeLoad = async () => {
    setIsLoading(true);
    // Simulate a delay for loading (e.g., fetching data)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      handleHomeLoad();
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement("img");
      trail.className = "cursor-trail";
      trail.src = "/images/barbie.png";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="title">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? (
                <LoadingScreen />
              ) : (
                <Home />
              )
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/experience"
            element={
              <PageTransition>
                <Experience />
              </PageTransition>
            }
          />
          <Route
            path="/education"
            element={
              <PageTransition>
                <Education />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
