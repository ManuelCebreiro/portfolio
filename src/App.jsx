import { useState, useEffect } from 'react'
import './App.css'
import Cover from "./Cover"
import Navbar from "./Navbar"
import About from "./Components/About"
import Slider from "./Components/Slider"
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contacto from './Components/Contacto'

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
      <Slider/>
      <Projects/>
      <Contacto/>
      <Footer/>

    </div>
  )
}

export default App
