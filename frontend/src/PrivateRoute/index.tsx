import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}: {children: JSX.Element}) => {
    const { authenticated } = useContext(AppContext)
    return (
        <>
            {
                authenticated !== null && authenticated ? children : <Navigate to='/' />
                
            }
        </>
    )
    
}