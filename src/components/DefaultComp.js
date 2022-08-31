import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import About from './pages/About'
import Home from './pages/Home/Home'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery/Gallery'
import AdminLogin from './pages/AdminLogin'
import AdminLogout from './pages/AdminLogout'
import { useFireDocs, useFireDoc } from '../fireConfig/useFirestore'

function DefaultComp() {
  const [secNav, setsecNav] = useState(['gallery', 'about', 'admissions', 'contact', 'admin'])
  const announceData = useFireDocs('Announcements');
  const initCollectData = useFireDoc('InitCollect', 'InitCollectDoc');
  // console.log("AAME: ", initCollectData, '\nhere ', announceData)
  useEffect(() => {
    console.log('Mounted D')
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation secNav={secNav} setsecNav={setsecNav} />}>
          <Route index element={<Home announceData={announceData} initCollectData={initCollectData} />} />
          <Route path='home' element={<Home announceData={announceData} initCollectData={initCollectData} />} />
          <Route path='about' element={<About />} />
          <Route path='admissions' element={<Admissions />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='/admin' element={<AdminLogin setsecNav={setsecNav} secNav={secNav} />} />
          {/* <Route path='/adminlogin' element={<AdminLogin setsecNav={setsecNav} secNav={secNav}/>} /> */}
          <Route path='/logout' element={<AdminLogout setsecNav={setsecNav} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default DefaultComp