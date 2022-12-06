import React from 'react'
import "../Styles/Formulario.css"

const Formulario = ({ ContactoSection }) => {
    return (
        <div className='contenedor' ref={ContactoSection} >
            <h2 className='head-text'>Contacto</h2>
            <div className='formulario'>
                <form className='contenido'
                    action="https://formsubmit.co/cebreirom@gmail.com"
                    method="POST">
                    <input className='inputstyle' type="text" name='name' placeholder='Nombre'></input>
                    <input className='inputstyle' type="text" name="email" placeholder='Email'></input>
                    <textarea className='textareastyle' type="text" placeholder='Tu mensaje' name="message" required></textarea>
                    <button
                        type="submit"
                        className='btnenviar'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Formulario