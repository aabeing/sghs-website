// import React from 'react'
// import GoogleIcon from '@mui/icons-material/Google';
// import { useAuth } from '../../context/authContext';
// import { Button } from '@mui/material';

// import { useEffect } from "react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function Admin() {
  const { loggedInUser, auth } = useAuth();
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
  }, [nav,loggedInUser])
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

  // const { loginAdmin, loggedInUser, logoutAdmin } = useAuth();
  // const [user, setuser] = useState(loggedInUser)
  // if (user) {
  //   return (
  //     <>Admin dashboard
  //       <Button onClick={() => logoutAdmin()} variant="contained" startIcon={<GoogleIcon color='success' />} >
  //         Log Out {console.log("CU:",loggedInUser)}
  //       </Button>
  //     </>
  //   )
  // }
  // else {
  //   return (
  //     <>
  //       <Button onClick={() => loginAdmin()} variant="contained" startIcon={<GoogleIcon color='success' />} >
  //         Sign in with Google {console.log("CU:",loggedInUser)}
  //       </Button>
  //     </>
  //   )
  // }

}

export default Admin