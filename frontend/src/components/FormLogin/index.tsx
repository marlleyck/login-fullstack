import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { authenticatedActions } from "../../store/ducks/authenticated";

import styles from "./styles.module.css";
import { loginUser } from "../../store/fetchActions";

export const FormLogin = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await dispatch(loginUser({ emailLogin, passwordLogin }));
    dispatch(authenticatedActions.setValue(true));

    navigate("/profile");
    setEmailLogin("");
    setPasswordLogin("");
  };

  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.content}>
        <div className={styles.contentInputs}>
          <input
            className={styles.inputsLogin}
            placeholder="Email"
            type="text"
            value={emailLogin}
            onChange={(e: any) => setEmailLogin(e.target.value)}
          />
          <input
            className={styles.inputsLogin}
            placeholder="Senha"
            type="password"
            value={passwordLogin}
            onChange={(e: any) => setPasswordLogin(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Logar
        </button>
      </div>
    </form>
  );
};
