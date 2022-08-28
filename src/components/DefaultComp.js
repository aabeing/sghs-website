import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import About from './pages/About'
import Home from './pages/Home'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import { getFireDocsRT, getFireInitDoc } from '../fireConfig/firestore';
// import Admin from './pages/Admin'
// import { useAuth } from '../context/authContext'
import AdminLogin from './pages/AdminLogin'
import AdminLogout from './pages/AdminLogout'

function DefaultComp() {
  const [announceData, setannounceData] = useState([]);
  const [initCollectData, setinitCollectData] = useState({ WelcomeMessage: [] });
  // const [isLoad, setisLoad] = useState(true);
  // const [priNav,setpriNav] = useState(['home', 'about', 'admissions', 'contact']);
  const [secNav,setsecNav] = useState(['gallery', 'about', 'admissions', 'contact','admin'])

  useEffect(() => {
    try {
      const unsubGetFireDocsRT = getFireDocsRT('Announcements', (querySnapshot) => {
        const out = [];
        querySnapshot.forEach((doc) => {
          out.push(doc.data());
        });
        setannounceData(out);
        // console.log("Current out in CA: ", out);
      });
      const unsubGetFireInitDoc = getFireInitDoc('InitCollect', 'InitCollectDoc', (doc) => {
        console.log("Current data: ", doc.data());
        setinitCollectData(doc.data());
      });
      // if(announceData.length && initCollectData.WelcomeImageUrl){
      //   setisLoad(false);
      //   console.log('loading completed')
      // }
      return (() => {
        console.log('unmounted');
        unsubGetFireDocsRT();
        unsubGetFireInitDoc();
      })
    }
    catch(err){
      console.log("Some error")
      throw err;
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation secNav={secNav} setsecNav={setsecNav}/>}>
          <Route index element={<Home announceData={announceData} initCollectData={initCollectData} />} />
          <Route path='home' element={<Home announceData={announceData} initCollectData={initCollectData} />} />
          <Route path='about' element={<About />} />
          <Route path='admissions' element={<Admissions />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='/admin' element={<AdminLogin setsecNav={setsecNav} secNav={secNav}/>} />
          {/* <Route path='/adminlogin' element={<AdminLogin setsecNav={setsecNav} secNav={secNav}/>} /> */}
          <Route path='/logout' element={<AdminLogout setsecNav={setsecNav}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default DefaultComp