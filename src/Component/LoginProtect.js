import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LoginProtect = ({ isLogged, children }) => {
    const navigate = useNavigate()

    useEffect(() => {




        if (!isLogged) {

            return children

        }
        else {
            navigate("/dashboard")
        }

    }, [isLogged])

}

export default LoginProtect