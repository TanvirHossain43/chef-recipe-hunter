import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup ,GithubAuthProvider} from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProviders = ({ children }) => {
    const googleProvider = new GoogleAuthProvider() 
    const gitProvider =new GithubAuthProvider()

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // google sign in
     const googleSignIn = () =>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
     }

    //  github login

    const gitLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,gitProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('state has changed', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        googleSignIn,
        gitLogIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;