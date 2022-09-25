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
import TimeTable from './pages/TimeTable'
import Staff from './pages/Staff'
import Downloads from './pages/Downloads'
import BlogRedirect from './pages/BlogRedirect'
import { useMemo } from 'react'
import Results from './pages/Results/Results'
// import axios from 'axios'

function DefaultComp() {
  const { auth, setIsAdmin } = useAuth();
  const secNavItemsDefault = useMemo(() => ['gallery', 'announcements', 'timetable', 'staff', 'downloads', 'admin'], [])
  // let adminMenu;
  const [secNav, setsecNav] = useState(secNavItemsDefault)
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
      setsecNav([...secNavItemsDefault, 'logout'])
    }
    else {
      setsecNav([...secNavItemsDefault])
      // setIsAdmin(false)
    }


  }, [auth.currentUser, secNavItemsDefault])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation secNav={secNav} />}>
          <Route index element={<Home announceData={announceData} initCollectData={initCollectData} />} />
          <Route path='home' element={<Home announceData={announceData} initCollectData={initCollectData} />} />
          <Route path='about' element={<About />} />
          <Route path='admissions' element={<Admissions />} />
          <Route path='timetable' element={<TimeTable />} />
          <Route path='staff' element={<Staff />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='announcements' element={<Announcements announceData={announceData} />} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/logout' element={<AdminLogout />} />
          <Route path='downloads' element={<Downloads />} />
          <Route path='results' element={<Results />} />
          {/* <Route path='/bloge' element={() => {
            window.location.replace = 'https://example.com/1234';
            return null;
          }} /> */}
          <Route path='blog' element={<BlogRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default DefaultComp