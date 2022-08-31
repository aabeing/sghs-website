import { useCallback, useEffect, useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../context/authContext';
// import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { async } from '@firebase/util';

function AdminLogin({ setsecNav, secNav }) {

    const { loginAdmin, loggedInUser, setloggedInUser, auth } = useAuth();
    const [status, setstatus] = useState('');
    const [loading, setloading] = useState(false);
    const [curUserAdmin, setcurUserAdmin] = useState(loggedInUser)
    // const nav = useNavigate();
    const addLogoutNav = useCallback(() => {
        try {
            console.log("CHECK.......")
            if (secNav.indexOf('logout') === -1) {
                setsecNav(['gallery', 'about', 'admissions', 'contact', 'admin', 'logout']);
            }

        } catch (err) {
            console.log("Error ", err)
        }
    },[secNav])
    // const addLogoutNav = () => {
    //     try {
    //         console.log("CHECK.......")
    //         setsecNav(['gallery', 'about', 'admissions', 'contact','admin','logout']);
    //     } catch (err) {
    //         console.log("Error ", err)
    //     }
    // }
    useEffect(() => {
        console.log("loggedInUser: ", loggedInUser)
        if (loggedInUser) {
            // nav('/admin')
            setcurUserAdmin(true);
            addLogoutNav();
        }
    }, [loggedInUser, addLogoutNav])
    const handleLogin = async () => {
        setloading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("LOGINSUCCESS: ", user)
                // nav('/admin');                
                // setcurUser(user);
                setcurUserAdmin(true);
                addLogoutNav();
                setloggedInUser(user);

            }).catch((error) => {
                setcurUserAdmin(false);
                setloading(false);
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("LOGINFAILED")
            });
        // setloading(true);
        // try {
        //     if (loggedInUser) {
        //         setstatus('Already logged in..')
        //     }
        //     else {
        //         await loginAdmin();
        //         setstatus('Log in success...')
        //     }
        //     nav('/admin');
        // }
        // catch {
        //     setloading(false);
        //     console.log("LOGIN ERROR ");
        //     setstatus('Log in failed.. try again')
        // }
    }
    if (curUserAdmin) {
        return (<>
            ADMIN NEW
        </>)
    }
    else {
        return (
            <>
                <LoadingButton
                    onClick={handleLogin}
                    endIcon={<GoogleIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Sign in with Google
                </LoadingButton>
                {status ? <div>status</div> : null}
            </>
        )
    }

}

export default AdminLogin