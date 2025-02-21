import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://www.linkedin.com/in/stevenduynguyen/" target="_blank">
          <img src="/images/templogo.png" className="temp logo" alt="temp logo" />
        </a>
      </div>
      <div id= "title">
      <h1>Steven Nguyen</h1>
      <h2>Software Engineer</h2>
      </div>
      <p>A passionate computer science graduate from Oregon State University<br></br> with a strong background in web development and business requirements analysis. </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
