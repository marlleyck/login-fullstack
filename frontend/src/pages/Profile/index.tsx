import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

export const Profile = () => {
    const { user } = useContext(AppContext)
    return (
        <>
            <h1>Profile</h1>
            <h2>Olá, {user.name}</h2>
        </>
    )
}