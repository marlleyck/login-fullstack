import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

export const FormLogin = () => {
    const { emailLogin, setEmailLogin, passwordLogin, setPasswordLogin } = useContext(AppContext)
    return (
        <>
            <input type="text"
            value={emailLogin}
            onChange={(e: any) => setEmailLogin(e.target.value)} />
            <input type="password"
            value={passwordLogin}
            onChange={(e: any) => setPasswordLogin(e.target.value)} />
        </>
    )
}