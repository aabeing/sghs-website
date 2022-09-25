// import React from 'react'
// import GoogleIcon from '@mui/icons-material/Google';
// import { useAuth } from '../../context/authContext';
// import { Button } from '@mui/material';

// import { useEffect } from "react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function Admin() {
  const { auth } = useAuth();
  const [curUser,setcurUser] = useState(null)
  // const user = firebase.auth().currentUser;
  const nav = useNavigate();


  useEffect(() => {
    // console.log('Admin comp mounted');
    const user = auth.currentUser;
    if (user) {
      // console.log("User in admin: ",user);
      setcurUser(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
    } else {
      nav('/adminlogin')
    }

    // if (!loggedInUser) {
    //   nav('/adminlogin')
    // }
  }, [nav])
  if (curUser) {
    return (<>
      ADMINNNN
    </>)
  }
  else {
    return (<>
      Loading...
    </>)
  }

}

export default Admin