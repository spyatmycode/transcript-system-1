import React from 'react';
import { Navigate } from 'react-router-dom'
import Login from './Login';


const Protected = ({ isLogged, children }) => {

    if (isLogged === false) {

        return <Navigate to={'/login'} />//If user is NOT Logged then we navigate them to the Login page always


    }


    return children //We return children only if isLogged or user is Logged in


}

export default Protected