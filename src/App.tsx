import { useState } from 'react'
import './App.css'
import About from "./pages/aboutPage";
import Experience from "./pages/Experience";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div id= "title">

      
      <About /> {/* Add About component here */}

      </div>
      
    </>
  )
}

export default App
