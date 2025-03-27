// App.tsx
import { useState, useEffect } from "react";
import "./App.css";
import AnimatedBackground from "./components/animatedBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar"; // Import Navbar

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement("img");
      trail.className = "cursor-trail";
      trail.src = "/images/barbie.png"; // Replace with the path to your SVG
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 500); // Match the animation duration
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="title">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {showNavbar && <Navbar />}
          <Home />
          <Projects />
          <About />
          <Experience />
          <Education />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
