import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

export const Home = () => {
    const { handleLogin } = useContext(AppContext)
    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogin}>Logar</button>
        </>
    )
}