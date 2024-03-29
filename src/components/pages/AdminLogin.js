import { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../context/authContext';
// import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Container, Typography } from '@mui/material';
// import { async } from '@firebase/util';

function AdminLogin({ adminUid }) {

    const { loggedInUser, setloggedInUser, auth, isAdmin } = useAuth();
    const [loading, setloading] = useState(false);
    // const [curUserAdmin, setcurUserAdmin] = useState(loggedInUser)
    // useEffect(() => {
    //     if (loggedInUser) {
    //         setcurUserAdmin(true);
    //     }
    // }, [loggedInUser])
    const handleLogin = async () => {
        setloading(true);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // console.log("TEST login ", adminUid, user.uid)
                if (adminUid === user.uid) {
                    // console.log("LOGINSUCCESS: ", user)
                    // nav('/admin');                
                    // setcurUser(user);
                    // setcurUserAdmin(true);
                    // addLogoutNav();
                    setloggedInUser(user);
                    // console.log("TTT ", isAdmin)
                }
                else {
                    // setcurUserAdmin(false);
                    throw new Error("Not Admin")
                }
            }).catch((error) => {
                // setcurUserAdmin(false);
                setloading(false);

                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;

                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                alert("LOGINFAILED")
                // console.log("LOGINFAILED")
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
    if (isAdmin) {
        return (
            <Container sx={{ m: 8 }}>
                Successfully Logged in as admin...
            </Container>
        )
    }
    else {
        return (
            <Container sx={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LoadingButton
                    size='large'
                    onClick={handleLogin}
                    endIcon={<GoogleIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                // sx={{m:'auto'}}
                >
                    Sign in with Google
                </LoadingButton>
                <Typography textAlign='center' variant='body1' paddingLeft={2} color='warning.main'>Supported only for Chrome Desktop and please ensure you are in incognito mode for increased security</Typography>

                {/* {status ? <div>status</div> : null} */}
            </Container>
        )
    }

}

export default AdminLogin