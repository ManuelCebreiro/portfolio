import React from 'react'
import "../Styles/Contacto.css"

const Contacto = () => {
    return (
        <div className='contacto-container'>
            <h2 className='head-text mb-5 t'>Descargar CV</h2>
            <div className='text-center'>


                <a href='/ManuelCebreiro.pdf' className='btn '>
                    Descargar CV &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                        <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                    </svg>
                </a>
            </div>


        </div>

    )
}

export default Contacto