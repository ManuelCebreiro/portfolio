import React from 'react'
import "../Styles/Slider.css"
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



const Slider = () => {
  return (
      <div className='skill-container'>
          <h2 className='head-text mb-5'>Front-end</h2>
          <div class="d-flex flex-wrap justify-content-center">
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoJs} alt="icono-js"></img>
                  </div>
                  <p className='mt-2'>JavaScript</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyleCss' src={iconoCss} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>Css</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoHtml} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>HTML</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoPython} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>Python</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoReact} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>React</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoGit} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>Git</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoBoostrap} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>Bootstrap</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoJest} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>Jest</p>
              </div>
          </div>

          <h2 className='head-text mb-5'>Back-end</h2>
          <div class="d-flex flex-wrap justify-content-center">
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoFlask} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>Flask</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoSql} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>SQL</p>
              </div>
              <div className='textoiconos'>
                  <div className='backIconSkill'>
                      <img className='iconStyle' src={iconoNode} alt="icono-js" ></img>
                  </div>
                  <p className='mt-2'>Node</p>
              </div>


          </div>
      </div>

  )
}

export default Slider