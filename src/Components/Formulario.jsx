import React from 'react'
import "../Styles/Formulario.css"

const Formulario = ({ContactoSection}) => {
    return (
        <div className='contenedor' ref={ContactoSection} >
            <h2 className='head-text'>Contacto</h2>
            <div className='formulario'>
                <div className='contenido'>
                <input className='inputstyle' type="text" name='name' placeholder='Nombre'></input>
                <input className='inputstyle' type="text" name="email" placeholder='Email'></input>
                <textarea className='textareastyle' type="text" placeholder='Tu mensaje'></textarea>
                <button className='btnenviar'>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Formulario