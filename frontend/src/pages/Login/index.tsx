import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

import { FormLogin } from "../../components/FormLogin"

export const Login = () => {
    const { handleLogin } = useContext(AppContext)
    
    return (
        <>
            <h1>Login</h1>
            <FormLogin />
            <button onClick={handleLogin}>Logar</button>
        </>
    )
}