import { UserType } from "./UserType";
export type AppContextType = {
    authenticated: boolean | null;
    nameRegister: string;
    setNameRegister: (newState: string) => void;
    emailRegister: string;
    setEmailRegister: (newState: string) => void;
    passwordRegister: string;
    setPasswordRegister: (newState: string) => void;
    confirmPasswordRegister: string;
    setConfirmPasswordRegister: (newState: string) => void;
    emailLogin: string;
    setEmailLogin: (newState: string) => void;
    passwordLogin: string;
    setPasswordLogin: (newState: string) => void;
    handleRegisterUser: () => void;
    handleLogin: () => void;
    handleLogout: () => void;
    user: UserType | undefined;
}