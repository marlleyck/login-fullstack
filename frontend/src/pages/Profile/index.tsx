import { useContext } from "react"
import { GoBackButton } from "../../components/GoBackButton"
import { AppContext } from "../../contexts/AppContext"

export const Profile = () => {
    const { user, handleLogout } = useContext(AppContext)
    return (
        <>
            <GoBackButton />
            <h1>Profile</h1>
            <h2>Olá, {user?.name}</h2>
            <button
            onClick={handleLogout}>Logout</button>
        </>
    )
}