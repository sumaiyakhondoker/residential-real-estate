import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    
    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        } 
    },[])

    const authInfo = {
        user,
        registerUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}