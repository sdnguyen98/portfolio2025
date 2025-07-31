// App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  return (
    <div id="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={isLoading ? <LoadingScreen /> : <Home />} />
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
      </Router>
    </div>
  );
};

export default App;
