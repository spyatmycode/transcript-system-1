import { auth } from "../../firebase/firebaseConfig";
import AuthContext from "./AuthContext";
import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    return (

        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}


