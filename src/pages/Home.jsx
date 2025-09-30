import "../App.css";
import Contact from "../components/ContactForm.jsx";
import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <>
      {/* ==== front page ==== */}
      <section className="hero" id="hero">
        <h1>MADISON SCHOOLEY</h1>
        <h2>ROCKET SCIENTIST</h2>
        <div>
          <a href="/resume" className="hero-button-resume">
            RESUME
          </a>
        </div>

        <div className="row">
          <a href="#about-me" className="hero-button-navbar">
            About
          </a>
          <a href="#projects" className="hero-button-navbar">
            Projects
          </a>
          <a href="#contact" className="hero-button-navbar">
            Contact
          </a>
        </div>

        <h3> IT'S NOT BRAIN SURGERY</h3>
      </section>

      {/* ==== everything else ==== */}
      <main>
        {/* ==== navbar header ==== */}
        <Header />

        {/* ==== about me ==== */}
        <article className="about-me" id="about-me">
          <h1 className="about-me-h1">Hi I'm Madz!</h1>
          <section className="about-me-text">
            <p>
              I am a graduate from San Jose State University with a Bachelor’s
              degree in aerospace engineering. I have worked on several projects
              including Spartan Space Systems, Rocketry, and electrical
              propulsion. If you would like to know more about the projects they
              are listed below and if you’re a recruiter my resume is also
              listed above ;). I have always been extremely interested in space
              and the exploration of the unknown, but I am far too much of a
              coward to go to space itself. Which is why I would rather engineer
              the technology to assist with exploration. Although space has
              always interested me I have picked up several hobbies throughout
              the years.
            </p>
            <p>
              I have played both indoor and beach volleyball competitively for
              seven years and most recently picked up a new sport to try. During
              my time in San Jose State university I decided to join the dragon
              boat team, even though I have no upper body strength. Through this
              initial joining I became a social chair and managed the
              fundraising and events within the club. Although my coursework has
              taught me the knowledge I need to perform well in a professional
              setting I have gained important skills through the sports I have
              played.
            </p>
            <p>
              As you can tell from my quick introduction I am a double threat,
              brain and brawn. Even though I am joking I do believe that I have
              become a more well rounded person through my studies as well as my
              hobbies. Anyways, it was nice to meet you and feel free to take a
              look around!
            </p>
          </section>
          <section className="about-me-image">
            <img width="100%" height="100%" src="../images/about-me.jpg"></img>
          </section>
        </article>

        {/* ==== projects ==== */}

        <article className="projects" id="projects">
          <h1 className="title">Here's some of my projects</h1>
          <div className="projects-display">
            {/* project cards */}
            <a href="/hall-thruster" className="project-card">
              <img src="images/ion-thruster2.jpg"></img>
              <h2>Hall-Effect Thruster</h2>
            </a>

            <a href="/space-system" className="project-card">
              <img src="images/spartan-space-systems.png"></img>
              <h2>Spartan Space Systems</h2>
            </a>

            <a href="/rocket" className="project-card">
              <img src="images/cheese.jpg"></img>
              <h2>
                Glorified Lawn Dart <em>"Cheese"</em>
              </h2>
            </a>
          </div>
        </article>

        {/* ==== blog ==== */}
        {/* ==== contact me ==== */}
        <article className="contact" id="contact">
          <h1 className="title">Contact Me</h1>
          <section className="contact-box">
            <div className="contact-box-left">
              <p>Interested in chatting or got a message for me?</p>
              <p>Shoot me a message below! </p>
              <Contact />

              <a
                href="http://www.linkedin.com/in/madison-schooley-532219336"
                className="svg-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <p> LinkedIn </p>
              </a>

              <a href="/resume" className="svg-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -960 960 960"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162m276-102q20-22 36-47.5t26.5-53 16-56.5 5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5" />
                </svg>
                <p> Resume </p>
              </a>
            </div>

            <div className="contact-box-right">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 108 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.5 108L51.5 74L17 54.5L10 57L5.5 60L0 68L1.5 108H86.5Z"
                  fill="white"
                />
                <mask
                  id="path-2-outside-1_214_68"
                  maskUnits="userSpaceOnUse"
                  x="31.2684"
                  y="75.038"
                  width="55"
                  height="34"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="31.2684"
                    y="75.038"
                    width="55"
                    height="34"
                  />
                  <path d="M84.2684 107.103C83.1577 101.904 81.5736 96.6102 78.3157 92.1963C68.3257 78.6615 48.8769 72.6409 33.2081 80.608" />
                </mask>
                <path
                  d="M84.2684 107.103C83.1577 101.904 81.5736 96.6102 78.3157 92.1963C68.3257 78.6615 48.8769 72.6409 33.2081 80.608"
                  fill="white"
                />
                <path
                  d="M85.2464 106.894C85.3618 107.434 85.0175 107.966 84.4774 108.081C83.9373 108.196 83.4059 107.852 83.2905 107.312L84.2684 107.103L85.2464 106.894ZM78.3157 92.1963L77.5111 92.7901L77.5111 92.7901L78.3157 92.1963ZM33.6613 81.4994C33.169 81.7497 32.567 81.5536 32.3167 81.0613C32.0664 80.569 32.2625 79.967 32.7548 79.7166L33.2081 80.608L33.6613 81.4994ZM84.2684 107.103L83.2905 107.312C82.1878 102.151 80.6392 97.0282 77.5111 92.7901L78.3157 92.1963L79.1202 91.6024C82.508 96.1922 84.1276 101.658 85.2464 106.894L84.2684 107.103ZM78.3157 92.1963L77.5111 92.7901C67.7754 79.5998 48.8427 73.7802 33.6613 81.4994L33.2081 80.608L32.7548 79.7166C48.9112 71.5016 68.8761 77.7232 79.1202 91.6024L78.3157 92.1963Z"
                  fill="#212448"
                  mask="url(#path-2-outside-1_214_68)"
                />
                <mask
                  id="path-4-outside-2_214_68"
                  maskUnits="userSpaceOnUse"
                  x="-0.110352"
                  y="63.4921"
                  width="37"
                  height="28"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="-0.110352"
                    y="63.4921"
                    width="37"
                    height="28"
                  />
                  <path d="M35.8896 90.32C35.8309 85.5552 35.4391 80.4926 33.049 76.1837C26.791 64.902 12.8865 61.561 1.15283 67.1396" />
                </mask>
                <path
                  d="M35.8896 90.32C35.8309 85.5552 35.4391 80.4926 33.049 76.1837C26.791 64.902 12.8865 61.561 1.15283 67.1396"
                  fill="white"
                />
                <path
                  d="M36.8896 90.3077C36.8964 90.8599 36.4542 91.3131 35.902 91.3199C35.3497 91.3267 34.8965 90.8845 34.8897 90.3323L35.8896 90.32L36.8896 90.3077ZM33.049 76.1837L32.1745 76.6688L32.1745 76.6688L33.049 76.1837ZM1.58221 68.0427C1.08343 68.2798 0.486844 68.0677 0.249706 67.5689C0.0125684 67.0702 0.224673 66.4736 0.723456 66.2364L1.15283 67.1396L1.58221 68.0427ZM35.8896 90.32L34.8897 90.3323C34.8312 85.5826 34.434 80.7421 32.1745 76.6688L33.049 76.1837L33.9234 75.6986C36.4442 80.243 36.8307 85.5278 36.8896 90.3077L35.8896 90.32ZM33.049 76.1837L32.1745 76.6688C26.2126 65.9208 12.9172 62.6537 1.58221 68.0427L1.15283 67.1396L0.723456 66.2364C12.8558 60.4683 27.3694 63.8832 33.9234 75.6986L33.049 76.1837Z"
                  fill="#212448"
                  mask="url(#path-4-outside-2_214_68)"
                />
                <path
                  d="M52.2427 74.0607C48.4099 58.5581 33.1441 50.3777 16.9644 54.5929C16.6974 54.6627 16.5374 54.9352 16.6069 55.2023C16.6766 55.4695 16.9501 55.6293 17.2173 55.5597C17.3947 55.5135 17.5724 55.47 17.7495 55.4269C33.0743 51.6936 46.7856 58.8769 50.9595 73.1456C51.0708 73.5259 51.1756 73.911 51.272 74.3009C51.3383 74.5689 51.6094 74.7324 51.8774 74.6661C52.1454 74.5998 52.3089 74.3287 52.2427 74.0607Z"
                  fill="white"
                  stroke="#212448"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.5658 87.0269C39.2908 87.0018 39.0479 87.205 39.0228 87.48C38.998 87.7548 39.2001 87.9979 39.475 88.0229C39.6452 88.0385 39.8143 88.055 39.9818 88.0737C51.0909 89.3157 56.0901 96.9403 55.7123 106.863C55.6994 107.201 55.6804 107.541 55.6537 107.883C55.6322 108.158 55.8376 108.399 56.1127 108.42C56.3879 108.442 56.6291 108.237 56.6508 107.961C57.069 102.594 55.8544 97.6351 52.9857 93.8716C50.1112 90.1005 45.6124 87.578 39.5658 87.0269Z"
                  fill="white"
                  stroke="#212448"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M78.2393 44.8254C71.3977 51.9461 65.8673 60.4252 63.1195 70.0291Z"
                  fill="white"
                />
                <path
                  d="M78.2393 44.8254C71.3977 51.9461 65.8673 60.4252 63.1195 70.0291"
                  stroke="#212448"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M72.0374 38.6165C66.0615 48.6014 59.5874 58.1524 51.1141 66.092Z"
                  fill="white"
                />
                <path
                  d="M72.0374 38.6165C66.0615 48.6014 59.5874 58.1524 51.1141 66.092"
                  stroke="#212448"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M89.3822 31.2662C96.6177 21.9198 104.216 12.2418 107.5 1C95.1439 7.50254 87.9711 17.841 80.3533 28.5851"
                  fill="#C53D3A"
                />
                <path
                  d="M89.3822 31.2662C96.6177 21.9198 104.216 12.2418 107.5 1C95.1439 7.50254 87.9711 17.841 80.3533 28.5851"
                  stroke="#212448"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M89.3822 31.2662L86.796 45.8254L67.6794 32.8293L80.6979 28.099"
                  fill="#C53D3A"
                />
                <path
                  d="M89.3822 31.2662L86.796 45.8254L67.6794 32.8293L80.6979 28.099"
                  stroke="#212448"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Insert Img Here */}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
