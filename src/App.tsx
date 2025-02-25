import { useState, useEffect } from 'react'
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loading screen after 2 seconds
    }, 2000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);
  

  return (
    
      <div id= "title">
      <div>
        {/* Show loading screen while loading is true */}
        {loading ? <LoadingScreen /> : <Home />}
      </div>
 
      <About /> {/* Add About component here */}
      <Projects /> {/* Add Projects component here */}
      <Experience /> {/* Add Experience component here */}

      <Education /> {/* Add Education component here */}
      <Contact /> {/* Add Contact component here */}

      </div>
      
    
  )
}

export default App
