// App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import "./global.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleHomeLoad = async () => {
    // Simulate a delay for loading (e.g., fetching data)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      handleHomeLoad();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div id="app-container">
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          {isLoading && window.location.pathname === "/" ? (
            <LoadingScreen key="loading" />
          ) : (
            <Routes key="routes">
              <Route path="/" element={<Home />} />
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
                path="*"
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                }
              />
            </Routes>
          )}
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;
