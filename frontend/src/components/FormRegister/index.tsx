import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

export const FormRegister = () => {
    const propsCtx = useContext(AppContext)
    return (
        <>
            <input type="text" placeholder="Nome"
            value={propsCtx.nameRegister}
            onChange={(e: any) => propsCtx.setNameRegister(e.target.value)} />

            <input type="email" placeholder="Email"
            value={propsCtx.emailRegister}
            onChange={(e: any) => propsCtx.setEmailRegister(e.target.value)} />

            <input type="password" placeholder="Senha"
            value={propsCtx.passwordRegister}
            onChange={(e: any) => propsCtx.setPasswordRegister(e.target.value)} />

            <input type="password" placeholder="Confirmar senha"
            value={propsCtx.confirmPasswordRegister}
            onChange={(e: any) => propsCtx.setConfirmPasswordRegister(e.target.value)} />

            <button
            onClick={propsCtx.handleRegisterUser}>Registrar-se</button>
        </>
    )
}