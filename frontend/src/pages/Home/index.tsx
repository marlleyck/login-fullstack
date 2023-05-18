import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchUser } from "../../store/fetchActions";
import { authenticatedActions } from "../../store/ducks/authenticated";

import styles from "./styles.module.css";

export const Home = () => {
  const user = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const authenticated = useAppSelector((state) => state.authenticated);

  useEffect(() => {
    const userIsAuthenticated = async () => {
      const response = await dispatch(fetchUser());

      if (
        response.payload.user &&
        typeof response.payload.user.id == "number"
      ) {
        dispatch(authenticatedActions.setValue(true));
      } else if (response.payload === false) {
        dispatch(authenticatedActions.setValue(false));
      }
    };

    userIsAuthenticated();
  }, []);

  const handleGoLogin = () => {
    navigate("/login");
  };

  const handleGoRegister = () => {
    navigate("/register");
  };

  const handleGoProfile = () => {
    navigate("/profile");
  };
  return (
    <div className={styles.container}>
      {authenticated.value !== null && (
        <>
          <h1 className={styles.title}>Home</h1>

          {authenticated.value && (
            <h1 className={styles.subTitle}>Bem vindo (a) {user.name}</h1>
          )}

          <main className={styles.content}>
            {!authenticated.value ? (
              <>
                <button onClick={handleGoLogin}>Ir para tela de login</button>
                <button onClick={handleGoRegister}>Registrar-se</button>
              </>
            ) : (
              <button onClick={handleGoProfile}>Perfil</button>
            )}
          </main>
        </>
      )}
    </div>
  );
};
