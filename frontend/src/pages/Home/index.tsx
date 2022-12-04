import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()

    const handleGoLogin = () => {
        navigate('/login')
    }

    const handleGoRegister = () => {
        navigate('/register')
    }
    return (
        <>
            <h1>Home</h1>
            <button
            onClick={handleGoLogin}>Ir para tela de login</button>
            <button
            onClick={handleGoRegister}>Registrar-se</button>
        </>
    )
}