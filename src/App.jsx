import { useState } from 'react'
import './App.css'

function App() {

  const [navVisible, setNavVisible] = useState(false);

  const handleNavToggle = () => {
    setNavVisible(!navVisible);
    console.log(navVisible);
  };

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
          <a href="#about-me" className="hero-button-navbar"> About</a>
          <a href="#projects" className="hero-button-navbar"> Projects</a>
          <a href="#contact"  className="hero-button-navbar"> Contact</a>

        </div>

        <h3> IT'S NOT BRAIN SURGERY</h3>
      </hero>
      


      {/* ==== everything else ==== */}
      <main>
        

        {/* ==== navbar header ==== */}
        <header className="flex"> 
            
            <h1 data-visible={navVisible}> MADISON SCHOOLEY </h1>
            
            
            <button onClick={handleNavToggle} className="mobile-nav-toggle" aria-expanded="false" aria-controls="navigation"> 
              <span className="sr-only"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#F6723D"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg></span>
            </button>


            {/* note: aria-... is to help accessibility */}
            <nav>

              <ul className="navigation flex" id="navigation" data-visible={navVisible}>
                <li><a>About</a> </li>
                <li><a>Projects</a></li>
                <li><a>Blog</a></li>
                <li></li>
              </ul>

            </nav>
{/* <a className="resume"> RESUME</a> */}
        </header>

        {/* ==== about me ==== */}
        <article className="about-me" id="about-me">
          <section className="about-me-text">
            <h1 className="about-me-h1">Hi I'm Madz!</h1>
            <p>
              I am a graduate from San Jose State University with a Bachelor's degree in Aerospace Engineering.  
            </p>
          </section>
          <section className="about-me-image">
            <img src='images/about-me.jpg'></img>
          </section>
        </article>
        
        {/* ==== projects ==== */}

        <article className="projects" id="projects">
          <h1 className='title'>Here's some of my projects</h1>
          <div className="projects-display">

            {/* project cards */}
            <section class="project-card">
              <img src="images/ion-thruster2.jpg"></img>
              <h2>Hall-Effect Thruster</h2>
            </section>

            <section class="project-card">
              <img src="images/spartan-space-systems.png"></img>
              <h2>Spartan Space Systems</h2>
            </section>

            <section class="project-card">
              <img src="images/cheese.jpg"></img>
              <h2>Glorified Lawn Dart <em>"Cheese"</em></h2>
            </section>

          </div>
        </article>

        {/* ==== blog ==== */}
        {/* ==== contact me ==== */}
        <article className="contact" id ="contact">
          <h1 className='title'>Contact Me</h1>
          <section className="contact-box">
            <h1>I'm an item</h1>
            <h2>I'm another item</h2>
            <h3>I'm a third item</h3>

          </section>

        </article>

        

      </main>
    </>
  )
}

export default App
