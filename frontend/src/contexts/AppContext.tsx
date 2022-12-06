import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { AppContextType } from "../@types/AppContextType";
import { UserType } from "../@types/UserType";

export const AppContext = createContext({} as AppContextType)

export const AppContextProvider = ({children}: {children: JSX.Element}) => {
    const [authenticated, setAuthenticated] = useState(false)

    const [nameRegister, setNameRegister] = useState('')
    const [emailRegister, setEmailRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('')

    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

    const [user, setUser] = useState<UserType>()
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

        const response = await axios.get(`http://localhost:8080/auth/user`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        setUser(response.data.user)
        setAuthenticated(true)
        navigate('/profile')

        setEmailLogin('')
        setPasswordLogin('')
    }

    const handleLogout = async () => {
        localStorage.removeItem('@login-fullstack:token')
        setAuthenticated(false)
        navigate('/')
    }

    useEffect(() => {
        const fetchUser = async () => {
            const tokenStorage = JSON.parse(localStorage.getItem('@login-fullstack:token') || '[]') ?? []
            if (typeof tokenStorage === 'string') {
                const response = await axios.get('http://localhost:8080/auth/user', {
                headers: {
                    authorization: `Bearer ${tokenStorage}`
                    }
                })

                setUser(response.data.user)
                setAuthenticated(true)
                // navigate('/profile') 
            }
        }

        fetchUser()
    }, [])

    return (
        <AppContext.Provider 
        value={{ authenticated, emailLogin, setEmailLogin, passwordLogin , setPasswordLogin, 
                handleRegisterUser, handleLogin, user, nameRegister, setNameRegister,
                emailRegister, setEmailRegister, passwordRegister, setPasswordRegister,
                confirmPasswordRegister, setConfirmPasswordRegister, handleLogout }}>
            {children}
        </AppContext.Provider>
    )
}