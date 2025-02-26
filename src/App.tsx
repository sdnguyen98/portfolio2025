// App.tsx
import { useState, useEffect } from "react";
import "./App.css";
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

  return (
    <div id="title">
      <div>
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
    </div>
  );
};

export default App;
