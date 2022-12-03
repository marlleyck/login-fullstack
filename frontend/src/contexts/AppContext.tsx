import { createContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type AppContextType = {
    authenticated: boolean;
    handleLogin: () => void;
    user: any;
}

export const AppContext = createContext({} as AppContextType)

export const AppContextProvider = ({children}: {children: JSX.Element}) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState<any>()
    const navigate = useNavigate()

    const handleLogin = async () => {
        const { data } = await axios.post('http://localhost:8080/auth/user', {
            email: 'teste@teste.com',
            password: 'teste'
        })

        const token = data.token

        const response = await axios.get('http://localhost:8080/auth/user/2', {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        setUser(response.data)
        setAuthenticated(true)
        navigate('/profile')

        console.log(user)
    }

    return (
        <AppContext.Provider value={{ authenticated, handleLogin, user }}>
            {children}
        </AppContext.Provider>
    )
}