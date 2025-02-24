import { useState } from 'react'
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div id= "title">

      <Home /> {/* Add Home component here */}
      <About /> {/* Add About component here */}
      <Projects /> {/* Add Projects component here */}
      <Experience /> {/* Add Experience component here */}

      <Education /> {/* Add Education component here */}
      <Contact /> {/* Add Contact component here */}

      </div>
      
    
  )
}

export default App
