import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './Auth/AuthContext';


const Protected = ({ children }) => {

    const navigate = useNavigate()

    const isLogged = useContext(AuthContext)


    if (isLogged !== null || true) {
        return children //We return children only if isLogged or user is Logged in
    }

    return <Navigate replace to={"/login"} />
}

export default Protected