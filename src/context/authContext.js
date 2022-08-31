import { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut, browserSessionPersistence, setPersistence, inMemoryPersistence } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';y
import {auth} from '../fireConfig/firebaseInit';

const AuthContext = createContext()
export function useAuth() {
    return useContext(AuthContext)
}


// const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
    .then(() => {
        console.log("AUth init")
    })
    .catch((error) => {
        const err = new Error();
        err.errorCode = error.code;
        err.errorMessage = error.message;
        // throw err;
        console.log("AUTH failed: ", err);
    });

export function AuthProvider({ children }) {

    const [loggedInUser, setloggedInUser] = useState();
    async function loginAdmin() {
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
    }
    async function logoutAdmin() {
        await signOut(auth);
        // setloggedInUser('');
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("TEST: ", user.uid);
                setloggedInUser(user);
            } else {
                // User is signed out
                console.log("Signed out log")
                setloggedInUser('');
            }
        });
        return (() => {
            console.log("Unsubscribing from onauthstatechanged");
            unsub();
        });
    }, [])

    const value = {
        loggedInUser,
        loginAdmin,
        logoutAdmin,
        setloggedInUser,
        auth,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

