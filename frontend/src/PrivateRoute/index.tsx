import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}: {children: JSX.Element}) => {
    const { authenticated } = useContext(AppContext)
    {console.log(authenticated)}
    
    return (
        <>
            {
                authenticated !== null && authenticated ? children : <Navigate to='/' />
                
            }
        </>
    )
    
}