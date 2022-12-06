import { useContext } from "react"
import { GoBackButton } from "../../components/GoBackButton"
import { AppContext } from "../../contexts/AppContext"

import styles from './styles.module.css'

export const Profile = () => {
    const { user, handleLogout } = useContext(AppContext)
    return (
        <div className={styles.container}>
            <GoBackButton />
            <h1 className={styles.title}>Profile</h1>

            <main className={styles.content}>
                <h2 className={styles.userName}>{user?.name}</h2>
                <button
                onClick={handleLogout}>Logout</button>
            </main>
        </div>
    )
}