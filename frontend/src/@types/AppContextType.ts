export type AppContextType = {
    authenticated: boolean;
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
    user: any;
}