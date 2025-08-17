import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      {/* ==== front page ==== */}
      <hero className="">
        <h1>MADISON SCHOOLEY</h1>
        <h2>ROCKET SCIENTIST</h2>
        <div>
          <button className="button hero-button-resume"> RESUME</button>
        </div>

        <div className="row">
          <button className="hero-button-navbar"> About</button>
          <button className="hero-button-navbar"> Projects</button>
          <button className="hero-button-navbar"> Blog</button>

        </div>

        <h3> IT'S NOT BRAIN SURGERY</h3>
      </hero>
      

      {/* ==== everything else ==== */}
      <main>
        
        {/* ==== navbar header ==== */}
        <header className="row"> 
            <h1> MADISON SCHOOLEY </h1>
            <nav>
              <button>About</button>
              <button>Projects</button>
              <button>Blog</button>

            </nav>

            <button className="resume"> RESUME</button>
        </header>

        {/* ==== about me ==== */}
        <article className="about-me">
          <section className="about-me-text">
            <h1 className="about-me-h1">Hi I'm Madz!</h1>
            <p>
              I am a graduate from San Jose State University with a Bachelor's degree in aerospace engineering.  
            </p>
          </section>
          <section className="about-me-image">
            <img src='images/about-me.jpg'></img>
          </section>
        </article>
        {/* ==== projects ==== */}
        <article className="projects">
          <section>
            <img></img>
            <h2>Hall-Effect Thruster</h2>
          </section>

          <section>
            <img></img>
            <h2>Spartan Space Systems</h2>
          </section>

          <section>
            <img></img>
            <h2>Cheese Rocket</h2>
          </section>
        </article>

        {/* ==== blog ==== */}
        {/* ==== contact me ==== */}

        

      </main>
    </>
  )
}

export default App
