import { useState } from 'react'
import Cover from "./Cover"
import Navbar from "./Navbar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Cover/>

    </div>
  )
}

export default App
