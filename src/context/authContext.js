import { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut, browserSessionPersistence, setPersistence, inMemoryPersistence } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';y
import { auth } from '../fireConfig/firebaseInit';
import axios from 'axios';

const AuthContext = createContext()
export function useAuth() {
    return useContext(AuthContext)
}


// const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
    .then(() => {
        console.log("Auth initialized")
    })
    .catch((error) => {
        const err = new Error();
        err.errorCode = error.code;
        err.errorMessage = error.message;
        // throw err;
        alert(err);
        console.log("AUTH failed: ", err);
    });

export function AuthProvider({ children }) {

    const [loggedInUser, setloggedInUser] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
    // async function loginAdmin() {
    // await signInWithRedirect(auth, provider);
    // const auth = getAuth();
    // await setPersistence(auth, inMemoryPersistence)
    //     .then(() => {
    //         signInWithRedirect(auth, provider);
    //     })
    //     .catch((error) => {
    //         const err = new Error();
    //         err.errorCode = error.code;
    //         err.errorMessage = error.message;
    //         throw err;
    //     });
    // }
    async function logoutAdmin() {
        await signOut(auth);
        // setloggedInUser('');
        window.open('https://accounts.google.com/Logout', "_blank");
        // window.location.replace('https://accounts.google.com/Logout', '_blank')
        // try {
        //     const resp = await axios.get("https://accounts.google.com/Logout");
        //     console.log(resp);
        // } catch (err) {
        //     // Handle Error Here
        //     console.error(err);
        //     alert(err)
        // }
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setloggedInUser(user);
            } else {
                // User is signed out
                // console.log("Signed out log")
                setloggedInUser('');
                setIsAdmin(false);
            }
        });
        return (() => {
            // console.log("Unsubscribing from onauthstatechanged");
            unsub();
        });
    }, [])

    const value = {
        loggedInUser,
        logoutAdmin,
        setloggedInUser,
        auth,
        isAdmin, setIsAdmin,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

