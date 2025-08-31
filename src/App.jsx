import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import NoPage from './pages/NoPage.jsx'
import HallThruster from './pages/projects/HallThruster.jsx'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path="/hall-thruster" element={<HallThruster/>} />
          <Route path="/*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
