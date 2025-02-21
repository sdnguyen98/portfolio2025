import { useState } from 'react'
import './App.css'
import About from "./pages/aboutPage";
import Test from "./pages/testPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div id= "title">

      
      <About /> {/* Add About component here */}

      </div>
      <Test /> {/* Add Test component here */}
    </>
  )
}

export default App
