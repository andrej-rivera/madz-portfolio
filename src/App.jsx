import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      {/* ==== front page ==== */}
      <header className="">
        <h1>MADISON SCHOOLEY</h1>
        <h2>ROCKET SCIENTIST</h2>
        <div>
          <button className="button header-button-resume"> RESUME</button>
        </div>

        <div className="row">
          <button className="header-button-navbar"> About</button>
          <button className="header-button-navbar"> Projects</button>
          <button className="header-button-navbar"> Blog</button>

        </div>

        <h3> IT'S NOT BRAIN SURGERY</h3>
      </header>
      

      {/* ==== everything else ==== */}
      <main>
        
        {/* ==== navbar ==== */}
        <nav className="row"> 
            <h1> MADISON SCHOOLEY </h1>
            <navbar>
              <button className="navbar-button">About</button>
              <button className="navbar-button">Projects</button>
              <button className="navbar-button">Blog</button>

            </navbar>

            <button className="navbar-button-resume"> RESUME</button>
        </nav>

        {/* ==== about me ==== */}
        <div className="about-me">
          <div className="">
            <h1 className="about-me-h1">Hi I'm Madz!</h1>
            <p>
              I am a graduate from San Jose State University with a Bachelor's degree in aerospace engineering.  
            </p>
          </div>
          {/* <img src="/images/about-me.jpg" width="640" alt="Profile" className="about-me-image"/> */}
        </div>

        {/* ==== projects ==== */}
        {/* ==== blog ==== */}
        {/* ==== contact me ==== */}

        

      </main>
    </>
  )
}

export default App
