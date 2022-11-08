import React from 'react'
import "./Styles/Navbar.css"

const Navbar = ({scrollHeight}) => {

    const toTheTop = () =>{
        window.scrollTo({top:0, left:0, behavior: "smooth"});  {/* behavior: "smooth" es el estilo de transicion */}
    }
    console.log(scrollHeight)

    return (
        <nav className={`navbar ${scrollHeight > 780 ? "scrolling" : null }`}>   {/*si el scroll baja y es mayor 20 cambia estilo "scrolling" si no nada*/}
        
            <div className='navbar-logo' onClick={toTheTop}>
                Manuel Cebreiro
                
            </div>
            
        </nav>
    )
}

export default Navbar