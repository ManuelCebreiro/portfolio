import React from 'react'
import "./Styles/Cover.css"
import covervideo from "./Media/covervideo.mp4"

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={covervideo} autoPlay loop muted />
      <h1>Manuel A.Cebreiro Ruiz de Cortázar</h1>
      <p>Developer Full Stack </p>
    </div>
  )
}

export default Cover