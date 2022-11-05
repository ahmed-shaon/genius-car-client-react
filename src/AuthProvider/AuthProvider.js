import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        // localStorage.removeItem('user-token');
        return signOut(auth);
    }

    const loginManually = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signin with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    },[])

    const authInfo = {
        user, 
        loading,
        createUser,
        loginManually,
        googleSignin,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;