import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation'
import About from './pages/About'
import Home from './pages/Home'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import { getFireDocsRT, getFireInitDoc } from '../dbConfig/firestore';
import Admin from './pages/Admin'

function DefaultComp() {
  const [announceData, setannounceData] = useState([]);
  const [initCollectData,setinitCollectData] = useState({WelcomeMessage:[]});
  const [isLoad,setisLoad] = useState(true);
  useEffect(() => {

    const unsubGetFireDocsRT =  getFireDocsRT('Announcements', (querySnapshot) => {
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
    return(() =>{
      console.log('unmounted');
      unsubGetFireDocsRT();
      unsubGetFireInitDoc();
    })
  }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home announceData={announceData} initCollectData={initCollectData} isLoad={isLoad}/>} />
        <Route path='home' element={<Home announceData={announceData} initCollectData={initCollectData} isLoad={isLoad}/>} />
        <Route path='about' element={<About/>} />
        <Route path='admissions' element={<Admissions/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='/admin' element={<Admin/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default DefaultComp