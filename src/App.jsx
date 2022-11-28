import { useState, useEffect, useRef } from 'react'
import './App.css'
import Cover from "./Cover"
import Navbar from "./Navbar"
import About from "./Components/About"
import Slider from "./Components/Slider"
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contacto from './Components/Contacto'
import Formulario from './Components/Formulario'

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = ()=>{
    const position = window.scrollY;
    setScrollHeight(position);
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[scrollHeight])

  const ContactoSection = useRef(null);
  const ProyectosSection = useRef(null);
  const AboutSection = useRef(null);


  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <Navbar 
      scrollHeight={scrollHeight}
      ContactoSection={ContactoSection}
      ProyectosSection={ProyectosSection}
      AboutSection={AboutSection}
      scrollDown={scrollDown}
      />
      <Cover/>
      <About
      AboutSection={AboutSection}
      />
      <Slider/>
      <Projects
      ProyectosSection={ProyectosSection}
      />
      <Contacto
      ContactoSection={ContactoSection}
      />
      <Formulario/>
      <Footer/>

    </div>
  )
}

export default App
