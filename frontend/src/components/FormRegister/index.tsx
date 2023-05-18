import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/fetchActions";
import { AppDispatch } from "../../store";

import styles from "./styles.module.css";

export const FormRegister = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [nameRegister, setNameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPasswordRegister, setConfirmPasswordRegister] = useState("");

  const navigate = useNavigate();

  const handleRegisterUser = async () => {
    await dispatch(
      registerUser({
        nameRegister,
        emailRegister,
        passwordRegister,
        confirmPasswordRegister,
      })
    );

    navigate("/login");

    setNameRegister("");
    setEmailRegister("");
    setPasswordRegister("");
    setConfirmPasswordRegister("");
  };

  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Registrar-se</h1>
      <main className={styles.content}>
        <div className={styles.contentInputs}>
          <input
            className={styles.inputsRegister}
            type="text"
            placeholder="Nome"
            value={nameRegister}
            onChange={(e: any) => setNameRegister(e.target.value)}
          />

          <input
            className={styles.inputsRegister}
            type="email"
            placeholder="Email"
            value={emailRegister}
            onChange={(e: any) => setEmailRegister(e.target.value)}
          />

          <input
            className={styles.inputsRegister}
            type="password"
            placeholder="Senha"
            value={passwordRegister}
            onChange={(e: any) => setPasswordRegister(e.target.value)}
          />

          <input
            className={styles.inputsRegister}
            type="password"
            placeholder="Confirmar senha"
            value={confirmPasswordRegister}
            onChange={(e: any) => setConfirmPasswordRegister(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleRegisterUser}>
          Registrar-se
        </button>
      </main>
    </form>
  );
};
