import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

import styles from './styles.module.css'

export const FormRegister = () => {
    const propsCtx = useContext(AppContext)
    return (
        <form className={styles.container}>
            <h1 className={styles.title}>Registrar-se</h1>
            <main className={styles.content}>
                <div className={styles.contentInputs}>
                    <input
                    className={styles.inputsRegister} 
                    type="text" 
                    placeholder="Nome"
                    value={propsCtx.nameRegister}
                    onChange={(e: any) => propsCtx.setNameRegister(e.target.value)} />

                    <input 
                    className={styles.inputsRegister} 
                    type="email" 
                    placeholder="Email"
                    value={propsCtx.emailRegister}
                    onChange={(e: any) => propsCtx.setEmailRegister(e.target.value)} />

                    <input 
                    className={styles.inputsRegister} 
                    type="password" 
                    placeholder="Senha"
                    value={propsCtx.passwordRegister}
                    onChange={(e: any) => propsCtx.setPasswordRegister(e.target.value)} />

                    <input 
                    className={styles.inputsRegister} 
                    type="password" 
                    placeholder="Confirmar senha"
                    value={propsCtx.confirmPasswordRegister}
                    onChange={(e: any) => propsCtx.setConfirmPasswordRegister(e.target.value)} />
                </div>

                <button
                onClick={propsCtx.handleRegisterUser}>Registrar-se</button>
            </main>
        </form>
    )
}