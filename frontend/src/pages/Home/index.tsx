import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../contexts/AppContext"

import styles from './styles.module.css'

export const Home = () => {
    const { authenticated } = useContext(AppContext)
    const navigate = useNavigate()

    const handleGoLogin = () => {
        navigate('/login')
    }

    const handleGoRegister = () => {
        navigate('/register')
    }

    const handleGoProfile = () => {
        navigate('/profile')
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Home</h1>
            <div className={styles.content}>
                {
                    !authenticated ?
                    <>
                        <button
                        onClick={handleGoLogin}>Ir para tela de login</button>
                        <button
                        onClick={handleGoRegister}>Registrar-se</button>
                    </>
                    : <button
                      onClick={handleGoProfile}>Perfil</button>
                }
                
            </div>
        </div>
    )
}