import React from 'react'
import "../Styles/Formulario.css"

const Formulario = () => {
    return (
        <div className='contenedor'>
            <div className='formulario'>
                Contacto
                <input type="text" name='name' placeholder='Nombre'></input>
                <input type="text" name="email" placeholder='Email'></input>
                <textarea type="text" placeholder='Tu mensaje'></textarea>
            </div>
        </div>
    )
}

export default Formulario