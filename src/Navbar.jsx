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
            <div className='estilonavbar'>
                <div className='navbar-logo-right me-3'
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