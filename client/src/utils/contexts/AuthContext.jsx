import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

import { auth } from '../firebase'

const firebaseAuth = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const logOut = () => {
        return signOut(auth);
    }
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
        });
        return() =>{
            unsubscribe()
        };
    }, [])

    return <firebaseAuth.Provider value={{
        user,
        logOut,
        googleSignIn
    }} >
        {children}
    </firebaseAuth.Provider>
}

export const useAuthContext = () => {
   return useContext(firebaseAuth)
}

export default AuthProvider