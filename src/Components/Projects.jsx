import React, { useState, useEffect } from 'react'
import "../Styles/Projects.css"
import StarWarsImg from "../Media/starwars.png"
import SporterImg from "../Media/Sporter.png"
import GestionPacientesImg from "../Media/Gestionpacientes.png"
import VeterinarioImg from "../Media/Veterinario.png"
import ControlGastosImg from "../Media/controlgastos.png"
import CotizadorCrypto from "../Media/CotizadorCriptomonedas.png"
import iconoJs from "../Media/javascript.png"
import iconoCss from "../Media/css.png"
import iconoHtml from "../Media/html.png"
import iconoPython from "../Media/python.png"
import iconoReact from "../Media/react.png"
import iconoGit from "../Media/git.png"
import iconoBoostrap from "../Media/bootstrap.png"
import iconoNode from "../Media/node.png"
import iconoFlask from "../Media/flask.png"
import iconoSql from "../Media/SQLAlchemy.png"
import iconoJest from "../Media/jest.png"



const Projects = ({ ProyectosSection }) => {
    const [data, setData] = useState([
        {
            id: 0,
            image: StarWarsImg,
            title: "Blog de Star Wars",
            descripcion: "Proyecto realizado con API SWAPI. Del cual obtengo y manejo los datos, con opción a guardar y eliminar elementos favoritos",
            github: "https://github.com/ManuelCebreiro/starwars",
            demo: "",
            inf: false,
            tecnologias: [iconoJs, iconoCss, iconoHtml, iconoReact, iconoBoostrap],
            descripciondetallada: "En este proyecto he utilizado bootstrap para aplicar estilos, y react para las funcionalidades. Consiste en utilizar los datos de la API SWAPI para extrar toda la información requerida y utilzarla en la aplicación web."
        },
        {
            id: 1,
            image: SporterImg,
            title: "Sporter, aplicación web de encuentros deportivos",
            descripcion: "Consite en una aplicación web que con una manera sencilla y eficaz permite crear y encontrar eventos deportivos.",
            github: "https://github.com/ManuelCebreiro/SporterTeam",
            demo: "https://sporterteam.herokuapp.com/",
            inf: false,
            tecnologias: [iconoJs, iconoCss, iconoHtml, iconoReact, iconoBoostrap],
            descripciondetallada: "En este proyecto he utilizado bootstrap para aplicar estilos, y react para las funcionalidades. Consiste en utilizar los datos de la API SWAPI para extrar toda la información requerida y utilzarla en la aplicación web."
        },
        {
            id: 2,
            image: GestionPacientesImg,
            title: "Gestión de pacientes, clínica veterinaria",
            descripcion: "Proyecto realizado para el control de pacientes. Crear, eliminar o editar fichas de pacientes existentes.",
            github: "https://github.com/ManuelCebreiro/citas_veterinario_react",
            demo: "",
            inf: false,
            tecnologias: [iconoJs, iconoCss, iconoHtml, iconoReact, iconoBoostrap],
            descripciondetallada: "En este proyecto he utilizado bootstrap para aplicar estilos, y react para las funcionalidades. Consiste en utilizar los datos de la API SWAPI para extrar toda la información requerida y utilzarla en la aplicación web."
        },
        {
            id: 3,
            image: VeterinarioImg,
            title: "Primer proyecto individual, explorando funcionalidades.",
            descripcion: "Primer proyecto, donde exploré el funcionamiento de React. Permite crear informes de pacientes de una clinica veterinaria.",
            github: "https://github.com/ManuelCebreiro/veterinario",
            demo: "https://veterinario.vercel.app/",
            inf: false,
            tecnologias: [iconoJs, iconoCss, iconoHtml, iconoReact, iconoBoostrap],
            descripciondetallada: "En este proyecto he utilizado bootstrap para aplicar estilos, y react para las funcionalidades. Consiste en utilizar los datos de la API SWAPI para extrar toda la información requerida y utilzarla en la aplicación web."
        },
        {
            id: 4,
            image: ControlGastosImg,
            title: "Proyecto de control de gastos",
            descripcion: "Control de gastos, reacciona a medida que aumenta los gastos, y refleja en una gráfica.",
            github: "https://github.com/ManuelCebreiro/control_gastos",
            demo: "https://dulcet-bienenstitch-654ab3.netlify.app/",
            inf: false,
            tecnologias: [iconoJs, iconoCss, iconoHtml, iconoReact, iconoBoostrap],
            descripciondetallada: "En este proyecto he utilizado bootstrap para aplicar estilos, y react para las funcionalidades. Consiste en utilizar los datos de la API SWAPI para extrar toda la información requerida y utilzarla en la aplicación web."
        }, {
            id: 5,
            image: CotizadorCrypto,
            title: "Cotizador de CryptoMonedas",
            descripcion: "Cotizador de cryptomonedas conectando a una API",
            github: "https://github.com/ManuelCebreiro/cotizador_crypto",
            demo: "https://joyful-concha-8e6d59.netlify.app/",
            inf: false,
            tecnologias: [iconoJs, iconoCss, iconoHtml, iconoReact, iconoBoostrap],
            descripciondetallada: "En este proyecto he utilizado bootstrap para aplicar estilos, y react para las funcionalidades. Consiste en utilizar los datos de la API SWAPI para extrar toda la información requerida y utilzarla en la aplicación web."
        }
    ])

    const [info, setInfo] = useState(false);

    const modificar = async (proyecto) => {
        // data[index].inf = !data[index].inf;
        proyecto.inf = !proyecto.inf
        const dataActualizada = data.map(proyect => proyect.id === proyecto.id ? proyecto : proyect)
        setData(dataActualizada)
    }

    // const arrayTecnologias = async (proyecto) => {
    //     const datatecnologias = data.map(proyecto => proyect.id === proyecto.id ? proyecto.descripciondetallada : proyect)
    //     setData(datatecnologias)
    // }
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    };

    return (
        <section className='projects-container' ref={ProyectosSection}>
            <h2 className='head-text mb-5'>Mis proyectos</h2>
            <div class="d-flex flex-wrap justify-content-center">
                {data.map((proyecto, index) => {
                    const { id, image, title, github, demo, descripcion, inf, descripciondetallada, tecnologias } = proyecto
                    const idgenerate = generarId()
                    // console.log(data[index].inf)
                    return (
                        <>
                            {inf
                                ?
                                <article key={idgenerate} className='portfolio-item-info'>
                                    <h5 className='px-3 py-3 text-center'><strong>{title}</strong></h5>
                                    <p className='px-3 pb-3'>{descripciondetallada}</p>
                                    <p>Tecnologías</p>
                                    <div className='portfolio-item-cta'>
                                        <div className='iconLike'>
                                            {tecnologias.map((img) => {
                                                const idgenerate = generarId()
                                                return (
                                                    <img key={idgenerate} className='iconStyle' src={img} alt="iconotecnologias" />
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            style={{ border: 'none' }}
                                            onClick={() => {
                                                modificar(proyecto)
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                                                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                                            </svg>
                                        </button>

                                    </div>

                                </article>
                                :
                                <article key={idgenerate + 1} className='portfolio-item'>
                                    <img className="portfolio-img" src={image} alt={title} />
                                    <h5 className='px-3 py-3 text-center'><strong>{title}</strong></h5>
                                    <p className='px-3 pb-3'>{descripcion}</p>
                                    <div className='portfolio-item-cta'>
                                        <a href={github} className='btn '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>&nbsp;
                                            GitHub</a>
                                        <a href={demo} className='btn '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                            </svg> &nbsp;
                                            Demo</a>
                                        <div className='iconLike'>
                                            <button
                                                style={{ border: 'none' }}
                                                onClick={() => {
                                                    modificar(proyecto)
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-info-square-fill" viewBox="0 0 16 16">
                                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                </article>
                            }



                        </>
                    )
                })
                }

            </div>




        </section>
    )
}

export default Projects




