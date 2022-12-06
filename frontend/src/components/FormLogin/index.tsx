import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

import styles from './styles.module.css'

export const FormLogin = () => {
    const { emailLogin, setEmailLogin, passwordLogin, setPasswordLogin, handleLogin } = useContext(AppContext)
    return (
            <>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.content}>
                    <div className={styles.contentInputs}>
                        <input
                        className={styles.inputsLogin}
                        placeholder="Email"
                        type="text"
                        value={emailLogin}
                        onChange={(e: any) => setEmailLogin(e.target.value)} />
                        <input
                        className={styles.inputsLogin}
                        placeholder="Senha"
                        type="password"
                        value={passwordLogin}
                        onChange={(e: any) => setPasswordLogin(e.target.value)} />
                    </div>
                    <button onClick={handleLogin}>Logar</button>
                </div>
            </>
    )
}