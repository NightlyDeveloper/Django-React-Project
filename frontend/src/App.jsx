import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Create from './components/Create.jsx'
import Navbar from './components/Navbar.jsx'
 
function App() {

  return (
    <>
      <div className="App">
        <Navbar content={
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        } />
      </div>
    </>
  )
}

export default App
