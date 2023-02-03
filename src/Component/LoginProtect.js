import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './Auth/AuthContext';


const Protected = ({ children }) => {



    const isLogged = useContext(AuthContext)


    if (isLogged === null) {
        return children //We return children only if isLogged or user is Logged in
    }

    return <Navigate replace to={"/"} />




}

export default Protected