import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GoBackButton } from "../../components/GoBackButton";
import { useAppSelector } from "../../store/hooks";
import { AppDispatch } from "../../store";
import { fetchUser, logoutUser } from "../../store/fetchActions";
import { authenticatedActions } from "../../store/ducks/authenticated";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

export const Profile = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    dispatch(authenticatedActions.setValue(false));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <GoBackButton />
      <h1 className={styles.title}>Profile</h1>

      <main className={styles.content}>
        <h2 className={styles.userName}>{user.name}</h2>
        <button onClick={handleLogout}>Logout</button>
      </main>
    </div>
  );
};
