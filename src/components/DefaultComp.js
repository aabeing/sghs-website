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
import { useAuth } from '../context/authContext'
import Announcements from './pages/Announcements/Announcements'
// import axios from 'axios'

function DefaultComp() {
  const { auth, setIsAdmin } = useAuth();
  // let adminMenu;
  const [secNav, setsecNav] = useState(['gallery', 'about', 'admissions', 'contact', 'admin'])
  const announceData = useFireDocs('Announcements');
  const initCollectData = useFireDoc('InitCollect', 'InitCollectDoc');
  // console.log("Auth val: ",auth.currentUser)
  if (initCollectData && auth.currentUser) {
    if (initCollectData.adminUid === auth.currentUser.uid) {
      setIsAdmin(true);
    }
  }
  useEffect(() => {
    // console.log('Mounted D');
    if (auth.currentUser) {
      setsecNav(['gallery', 'announcements', 'admin', 'logout'])
    }
    else {
      setsecNav(['gallery', 'announcements', 'admin'])
      // setIsAdmin(false)
    }


  }, [auth.currentUser])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation secNav={secNav} />}>
          <Route index element={<Home announceData={announceData} initCollectData={initCollectData} />} />
          <Route path='home' element={<Home announceData={announceData} initCollectData={initCollectData} />} />
          <Route path='about' element={<About />} />
          <Route path='admissions' element={<Admissions />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='announcements' element={<Announcements announceData={announceData} />} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/logout' element={<AdminLogout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default DefaultComp