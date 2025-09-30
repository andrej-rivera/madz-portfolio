import { useState } from "react";
import "../index.css";
import "./Header.css";

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);

  const handleNavToggle = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header className="flex">
      <a href="/#hero">
        {" "}
        <h1 data-visible={navVisible}> MADISON SCHOOLEY </h1>{" "}
      </a>

      <button
        onClick={handleNavToggle}
        className="mobile-nav-toggle"
        aria-expanded="false"
        aria-controls="navigation"
        data-visible={navVisible.toString()}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* note: aria-... is to help accessibility */}
      <nav>
        <ul
          className="navigation flex"
          id="navigation"
          data-visible={navVisible}
        >
          <li onClick={() => setNavVisible(false)}>
            <a href="/#about-me">About</a>
          </li>
          <li onClick={() => setNavVisible(false)}>
            <a href="/#projects">Projects</a>
          </li>
          <li onClick={() => setNavVisible(false)}>
            <a href="/#contact">Contact</a>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
