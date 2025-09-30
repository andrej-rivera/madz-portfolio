import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.jsx";
import Resume from "./pages/Resume.jsx";
import NoPage from "./pages/NoPage.jsx";
import ProjectPage from "./pages/projects/ProjectPage.jsx";
import projectData from "./pages/projects/Projects.json";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/hall-thruster"
            element={<ProjectPage project={projectData.project1} />}
          />
          <Route
            path="/space-system"
            element={<ProjectPage project={projectData.project2} />}
          />
          <Route
            path="/rocket"
            element={<ProjectPage project={projectData.project3} />}
          />

          <Route path="/*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
