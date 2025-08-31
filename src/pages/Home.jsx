import '../App.css'
import Contact from '../components/ContactForm'
import Header from '../components/header'

export default function Home() {
    return (
        <>
            {/* ==== front page ==== */}
            <hero className="" id="hero">
                <h1>MADISON SCHOOLEY</h1>
                <h2>ROCKET SCIENTIST</h2>
                <div>
                    <a href="/resume" className="hero-button-resume"> RESUME</a>
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
                <Header />

                {/* ==== about me ==== */}
                <article className="about-me" id="about-me">
                    <section className="about-me-text">
                    <h1 className="about-me-h1">Hi I'm Madz!</h1>
                    <p>
                        I am a graduate from San Jose State University with a Bachelor's degree in Aerospace Engineering.  
                    </p>
                    </section>
                    <section className="about-me-image">
                    <img src='../images/about-me.jpg'></img>
                    </section>
                </article>
                
                {/* ==== projects ==== */}

                <article className="projects" id="projects">
                    <h1 className='title'>Here's some of my projects</h1>
                    <div className="projects-display">

                    {/* project cards */}
                    <a href='/hall-thruster' class="project-card">
                        <img src="images/ion-thruster2.jpg"></img>
                        <h2>Hall-Effect Thruster</h2>
                    </a>

                    <a class="project-card">
                        <img src="images/spartan-space-systems.png"></img>
                        <h2>Spartan Space Systems</h2>
                    </a>

                    <a class="project-card">
                        <img src="images/cheese.jpg"></img>
                        <h2>Glorified Lawn Dart <em>"Cheese"</em></h2>
                    </a>

                    </div>
                </article>

                {/* ==== blog ==== */}
                {/* ==== contact me ==== */}
                <article className="contact" id ="contact">
                    <h1 className='title'>Contact Me</h1>
                    <section className="contact-box">
                    <div className='contact-box-left'>
                        <p>Interested in chatting or got a message for me?</p>
                        <p>Shoot me a message below! </p> 
                        <Contact />

                        <a href="http://www.linkedin.com/in/madison-schooley-532219336" className='svg-button'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                        <p> LinkedIn </p> 
                        </a>  

                        <a href="/resume" className='svg-button'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162m276-102q20-22 36-47.5t26.5-53 16-56.5 5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5"/></svg>
                        <p> Resume </p> 
                        </a>  


                    </div>

                    <div className='contact-box-right'>
                        <p>hi</p>
                        {/* Insert Img Here */}
                    </div>


                    </section>

                </article>
            </main>
        </>
    )
}