import React from 'react'
import "../Styles/Formulario.css"
import swal from 'sweetalert'

const Formulario = ({ ContactoSection }) => {

    const mostrarAlerta = () => {
        swal({
            title: "Email enviado con éxito",
            text: "Te contestaré lo antes posible, gracias",
            icon: "success",
            timer: "3000"
        })
    }

    return (
        <div className='contenedor' ref={ContactoSection} >
            <h2 className='head-text'>Contacto</h2>
            <div className='formulario'>
                <div className='contenido'
                    action="https://formsubmit.co/cebreirom@gmail.com"
                    method="POST">
                    <input className='inputstyle' type="text" name='name' placeholder='Nombre'></input>
                    <input className='inputstyle' type="text" name="email" placeholder='Email'></input>
                    <textarea className='textareastyle' type="text" placeholder='Tu mensaje' name="message" required></textarea>
                    <button
                        onClick={() => mostrarAlerta()}
                        type="submit"
                        className='btnenviar'>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Formulario