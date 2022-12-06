import { FormLogin } from "../../components/FormLogin"
import { GoBackButton } from "../../components/GoBackButton"

import styles from './styles.module.css'

export const Login = () => {
    
    return (
        <div className={styles.container}>
            <GoBackButton />
            <FormLogin />
        </div>
    )
}