import React from 'react'
import "../Styles/About.css"
import fotoperfil from "../Media/fotoperfil.png"

const About = () => {
    return (
        <div className='about-container'>
            {/* <div className='about-description'> */}
            <div className='row'>
                <div className='col-lg-6 estilocss'>
                    <h3 className='mb-5'>
                        Bienvenido a mi portfolio personal
                    </h3>
                    <p>Soy Manuel Cebreiro. Hace 10 años tuve mi primer encuentro con este mundo de la programación, y de manera autodidacta, aprendí 
                        <strong><i> HTML</i></strong> y <strong><i>CSS</i></strong> por circunstancias de la vida lo dejé apartado, hasta este año 2022, que
                        decidí dejar mi vida profesional actual para dar un cambio radical y dedicarme 100% a la programación. Cursando el bootcamp de <a href='https://4geeksacademy.com/es/inicio'>4GeeksAcademy</a>, he logrado encaminarme en la dirección que tanto soñaba. 
                        <br/><br/>La mejor decisión de mi vida.</p>
                </div>
                <div className='col-lg-6 d-flex justify-content-center;
'>
                    {/* </div>
                <div className='about-img'> */}
                    <img className='about-img' src={fotoperfil} alt='fotoperfil' />
                </div>
            </div>
        </div>
    )
}

export default About