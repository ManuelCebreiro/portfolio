import React from 'react'
import "../Styles/About.css"
import fotoperfil from "../Media/fotoperfil.png"

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-description'>
                <h3>
                    Aquí contaré algo breve sobre mi
                </h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis natus laboriosam enim voluptatem quisquam laudantium, sint accusantium vitae minima itaque error velit vel veniam ab nulla earum adipisci reprehenderit sapiente?</p>
                </div>
                <div className='about-img'>
                    <img src={fotoperfil} alt='fotoperfil' />
                </div>
        </div>
    )
}

export default About