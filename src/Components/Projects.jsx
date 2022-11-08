import React from 'react'
import "../Styles/Projects.css"
import StarWarsImg from "../Media/starwars.png"
import SporterImg from "../Media/Sporter.png"
import GestionPacientesImg from "../Media/Gestionpacientes.png"
import VeterinarioImg from "../Media/Veterinario.png"
import ControlGastosImg from "../Media/controlgastos.png"



const data = [
    {
        id: 1,
        image: StarWarsImg,
        title: "Blog de Star Wars",
        descripcion: "Proyecto realizado con API SWAPI. Del cual obtengo y manejo los datos, con opción a guardar y eliminar elementos favoritos",
        github: "https://github.com/ManuelCebreiro/starwars",
        demo: ""
    },
    {
        id: 2,
        image: SporterImg,
        title: "Sporter, aplicación web de encuentros deportivos",
        descripcion: "Consite en una aplicación web que con una manera sencilla y eficaz permite crear y encontrar eventos deportivos.",
        github: "https://github.com/ManuelCebreiro/SporterTeam",
        demo: "https://sporterteam.herokuapp.com/"
    },
    {
        id: 3,
        image: GestionPacientesImg,
        title: "Gestión de pacientes, clínica veterinaria",
        descripcion: "Proyecto realizado para el control de pacientes. Crear, eliminar o editar fichas de pacientes existentes.",
        github: "https://github.com/ManuelCebreiro/citas_veterinario_react",
        demo: ""
    },
    {
        id: 4,
        image: VeterinarioImg,
        title: "Primer proyecto individual, explorando funcionalidades.",
        descripcion: "Primer proyecto, donde exploré el funcionamiento de React. Permite crear informes de pacientes de una clinica veterinaria.",
        github: "https://github.com/ManuelCebreiro/veterinario",
        demo: "https://veterinario.vercel.app/"
    },
    {
        id: 5,
        image: ControlGastosImg,
        title: "Proyecto de control de gastos",
        descripcion: "Control de gastos, reacciona a medida que aumenta los gastos, y refleja en una gráfica.",
        github: "https://github.com/ManuelCebreiro/control_gastos",
        demo: "https://dulcet-bienenstitch-654ab3.netlify.app/"
    }
]




const Projects = () => {
    return (
        <section className='projects-container'>
            <h2 className='head-text mb-5'>Mis proyectos</h2>
            <div class="d-flex flex-wrap justify-content-center">
                {
                    data.map(({ id, image, title, github, demo, descripcion }) => {
                        return (

                            // <div className='portfolio-container'>
                            <article className='portfolio-item'>
                                {/* <div className='portfolio-item-img'> */}
                                <img className="portfolio-img" src={image} alt={title} />
                                {/* </div> */}
                                <h5 className='px-3 py-3 text-center'><strong>{title}</strong></h5>
                                <p className='px-3 pb-3'>{descripcion}</p>
                                <div className='portfolio-item-cta'>
                                    <a href={github} className='btn '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>&nbsp;
                                        Git hub</a>
                                    <a href={demo} className='btn '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg> &nbsp;
                                        Demo</a>
                                    {/* <a href={demo} class="btn mr-2">Live demo</a> */}
                                </div>

                            </article>

                            // </div>

                            // <div class="card "className='portfolio-item'>
                            //     <img class="card-img-top" src={image} alt="Card image cap"/>
                            //         <div class="card-body">
                            //             <h5 class="card-title">{title}</h5>
                            //             <p class="card-text">explicacion breve que me la puedo saltar</p>
                            //             <a href={github} className='btn btn-white' >Git hub</a>
                            //             <a href={demo} className='btn btn-primary'>Live demo</a>
                            //         </div>
                            // </div>

                        )
                    })
                }

            </div>




        </section>
    )
}

export default Projects