import React from 'react'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from "./Contact"



function App() {
  return (
    <>
    
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
