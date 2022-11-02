import React from 'react'
import "./Styles/Cover.css"
import covervideo from "./Media/covervideo.mp4"

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={covervideo} autoPlay loop muted />
      <p>I´m</p>
      <h1><span>Manuel A.Cebreiro Ruiz de Cortázar</span></h1>
      <p>Developer Full Stack </p>
    </div>
  )
}

export default Cover