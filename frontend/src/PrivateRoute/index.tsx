import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const authenticated = useAppSelector((state) => state.authenticated);

  return (
    <>
      {authenticated.value !== null && authenticated.value ? (
        children
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
