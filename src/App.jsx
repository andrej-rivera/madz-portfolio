import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      {/* ==== front page ==== */}
      <div className="column front-page">
        <div className="front-name">MADISON SCHOOLEY</div>
        <div className="front-title">ROCKET SCIENTIST</div>
        <div className="row">
          <button className="front-button front-button-resume"> RESUME</button>
        </div>

        <div className="row">
          <button className="front-button front-button-navbar"> About</button>
          <button className="front-button front-button-navbar"> Projects</button>
          <button className="front-button front-button-navbar"> Blog</button>

        </div>

        <div  className="front-slogan"> IT'S NOT BRAIN SURGERY</div>
      </div>
      
      <div className="header"> hi i'm a header</div>

      {/* ==== about me ==== */}
      <div className="general">

      </div>
    </>
  )
}

export default App
