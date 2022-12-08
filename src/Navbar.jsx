import React from 'react'
import "./Styles/Navbar.css"

const Navbar = ({ scrollHeight, scrollDown, ContactoSection, ProyectosSection, AboutSection }) => {

    // const toTheTop = () => {
    //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); {/* behavior: "smooth" es el estilo de transicion */ }
    // }

    // console.log(scrollHeight)

    return (
        <nav className={`navbar ${scrollHeight > 780
            ? "scrolling"
            : scrollHeight < 100
                ? "scrolling2"
                : null} `} >   {/*si el scroll baja y es mayor 20 cambia estilo "scrolling" si no nada*/}

            <div className='navbar-logo'
                onClick={() => {
                    scrollDown(AboutSection);
                }}>
                Manuel Cebreiro
            </div>
            <input type="checkbox" id="check"></input>
            <label for="check" className='checkBtn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </label>
            <div className='estilonavbar'>
                <div className='navbar-logo-right'
                    onClick={() => {
                        scrollDown(ProyectosSection);
                    }}>
                    Proyectos
                </div>
                <div className='navbar-logo-right'
                    onClick={() => {
                        scrollDown(ContactoSection);
                    }}>
                    Contacto
                </div>
            </div>




        </nav>
    )
}

export default Navbar