import { useState, useEffect } from 'react'
import Cover from "./Cover"
import Navbar from "./Navbar"
import About from "./Components/About"
import './App.css'

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = ()=>{
    const position = window.scrollY;
    setScrollHeight(position);
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[scrollHeight])

  return (
    <div className="App">
      <Navbar scrollHeight={scrollHeight}/>
      <Cover/>
      <About/>

    </div>
  )
}

export default App
