import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation'
import About from './pages/About'
import Home from './pages/Home'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
function DefaultComp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='admissions' element={<Admissions/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='gallery' element={<Gallery/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default DefaultComp