import { useState } from 'react'
import '../index.css'

export default function Header() {
    const [navVisible, setNavVisible] = useState(false);

    const handleNavToggle = () => {
        setNavVisible(!navVisible);
        console.log(navVisible);
    };
  

  return (
    <header className="flex"> 
        
        <a href="/#hero"> <h1 data-visible={navVisible}> MADISON SCHOOLEY </h1> </a>
        
        
        <button onClick={handleNavToggle} className="mobile-nav-toggle" aria-expanded="false" aria-controls="navigation"> 
            <span className="sr-only"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#F6723D"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg></span>
        </button>


        {/* note: aria-... is to help accessibility */}
        <nav>

            <ul className="navigation flex" id="navigation" data-visible={navVisible}>
            <li><a href="/#about-me">About</a> </li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li></li>
            </ul>

        </nav>
    </header>
  );
}