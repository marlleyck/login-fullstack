import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { AppContextType } from "../@types/AppContextType";

export const AppContext = createContext({} as AppContextType)

export const AppContextProvider = ({children}: {children: JSX.Element}) => {
    const [authenticated, setAuthenticated] = useState(false)

    const [nameRegister, setNameRegister] = useState('')
    const [emailRegister, setEmailRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('')

    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

    const [user, setUser] = useState<any>()
    const navigate = useNavigate()

    const handleRegisterUser = async () => {
        const response = await axios.post('http://localhost:8080/auth/register', {
            name: nameRegister,
            email: emailRegister,
            password: passwordRegister,
            confirmPassword: confirmPasswordRegister
        })

        console.log(response)
    }

    const handleLogin = async () => {
        const { data } = await axios.post('http://localhost:8080/auth/user', {
            email: emailLogin,
            password: passwordLogin
        })

        const token = data.token
        localStorage.setItem('@login-fullstack:token', JSON.stringify(token))

        const response = await axios.get(`http://localhost:8080/auth/user/${data.user_id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        setUser(response.data.user)
        setAuthenticated(true)
        navigate('/profile')

        console.log(response)
    }

    useEffect(() => {

        const fetchUser = async () => {
            const tokenStorage = JSON.parse(localStorage.getItem('@login-fullstack:token') || '[]') ?? []

            if (tokenStorage) {
                const { data } = await axios.get('http://localhost:8080/auth/token', {
                    headers: {
                        authorization: `Bearer ${tokenStorage}`
                    }
                })

                // console.log(responseToken)

                const response = await axios.get(`http://localhost:8080/auth/user/${data.tokenDecoded.id}`, {
                headers: {
                    authorization: `Bearer ${tokenStorage}`
                    }
                })

                setUser(response.data.user)
                setAuthenticated(true)
                navigate('/profile') 
            }
        }

        fetchUser()
    }, [])

    return (
        <AppContext.Provider 
        value={{ authenticated, emailLogin, setEmailLogin, passwordLogin , setPasswordLogin, 
                handleRegisterUser, handleLogin, user, nameRegister, setNameRegister,
                emailRegister, setEmailRegister, passwordRegister, setPasswordRegister,
                confirmPasswordRegister, setConfirmPasswordRegister }}>
            {children}
        </AppContext.Provider>
    )
}