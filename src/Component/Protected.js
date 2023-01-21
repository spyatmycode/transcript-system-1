import React from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({ isLogged, children }) => {

    const navigate = useNavigate()


    console.log(isLogged);
    if (isLogged) {
        return children
    }
    else {
        navigate("/login")

    }

}

export default Protected
