import { useState, useRef } from "react";
import "../../App.css";
import "./ProjectPage.css";
import Header from "../../components/Header.jsx";
import ContactForm from "../../components/ContactForm.jsx";

export default function HallThruster({ project }) {
  const [modalToggle, setmodalToggle] = useState("false");
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const insertContent = project.content.map((paragraph, key) => (
    <p className="project__text">{paragraph}</p>
  ));

  const insertImages = project.images.map((src, index) => {
    if (project.images.length > 1) {
      return (
        <li className="project__imageitem">
          <img
            onClick={() => {
              setMainImageIndex(index);
            }}
            src={src}
            className="project__image"
            selected={index === mainImageIndex ? "true" : "false"}
          />
        </li>
      );
    } else {
      return <></>;
    }
  });

  return (
    <>
      <main>
        <Header />
        <div
          onClick={() => setmodalToggle("false")}
          className="project__modal"
          toggle={modalToggle}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMainImageIndex(mainImageIndex - 1);
            }}
            className="project__button project__button--left"
            hidden={mainImageIndex === 0}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                transform="matrix(-1 0 0 1 100 0)"
                fill="#D9D9D9"
              />
              <path
                d="M21.2004 51.7353C20.242 50.7414 20.2708 49.1588 21.2647 48.2004L37.4612 32.5823C38.4551 31.6239 40.0377 31.6527 40.9961 32.6466C41.9545 33.6405 41.9257 35.2232 40.9318 36.1816L26.5349 50.0643L40.4177 64.4612C41.3761 65.4551 41.3473 67.0377 40.3534 67.9961C39.3595 68.9545 37.7768 68.9257 36.8184 67.9318L21.2004 51.7353ZM78 51L77.9546 53.4996L22.9546 52.4996L23 50L23.0454 47.5004L78.0454 48.5004L78 51Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="project__image--modal">
            <img
              src={project.images[mainImageIndex]}
              alt=""
              className="project__image"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMainImageIndex(mainImageIndex + 1);
            }}
            className="project__button project__button--right"
            hidden={mainImageIndex === project.images.length - 1}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#D9D9D9" />
              <path
                d="M78.7996 51.7353C79.758 50.7414 79.7292 49.1588 78.7353 48.2004L62.5388 32.5823C61.5449 31.6239 59.9623 31.6527 59.0039 32.6466C58.0455 33.6405 58.0743 35.2232 59.0682 36.1816L73.4651 50.0643L59.5823 64.4612C58.6239 65.4551 58.6527 67.0377 59.6466 67.9961C60.6405 68.9545 62.2232 68.9257 63.1816 67.9318L78.7996 51.7353ZM22 51L22.0454 53.4996L77.0454 52.4996L77 50L76.9546 47.5004L21.9546 48.5004L22 51Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <article className="project container">
          <h1 className="project__title">{project.title}</h1>
          {/* for project picture highlights */}
          <div className="project__gallery">
            <div className="project__highlight">
              <img
                onClick={() => setmodalToggle("true")}
                src={project.images[mainImageIndex]}
                className="project__image project__image--main"
              />
            </div>

            <ul className="project__imagelist project__container">
              {insertImages}
            </ul>
          </div>

          <a href={project.redirect} className="project__link">
            Read Our Report
          </a>
          <section className="project__content project__container">
            {insertContent}
          </section>
        </article>
      </main>
    </>
  );
}
