import { api } from "../../services/api";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const tokenStorage =
    JSON.parse(localStorage.getItem("@login-fullstack:token") || "[]") ?? [];
  if (typeof tokenStorage === "string") {
    const response = await api.get("/auth/user", {
      headers: {
        authorization: `Bearer ${tokenStorage}`,
      },
    });
    return response.data;
  } else {
    return false;
  }
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerUserData: any) => {
    const {
      nameRegister,
      emailRegister,
      passwordRegister,
      confirmPasswordRegister,
    } = registerUserData;

    if (
      nameRegister === "" ||
      emailRegister === "" ||
      passwordRegister === "" ||
      confirmPasswordRegister === ""
    ) {
      alert("Preencha todos os campos!");
    } else {
      const response = await api.post("/auth/register", {
        name: nameRegister,
        email: emailRegister,
        password: passwordRegister,
        confirmPassword: confirmPasswordRegister,
      });

      return response;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginUserData: any) => {
    const { emailLogin, passwordLogin } = loginUserData;

    if (emailLogin === "" || passwordLogin === "") {
      alert("Preencha todos os campos!");
    } else {
      try {
        const { data } = await api.post("/auth/user", {
          email: emailLogin,
          password: passwordLogin,
        });

        const token = data.token;
        localStorage.setItem("@login-fullstack:token", JSON.stringify(token));

        const response = await api.get(`/auth/user`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        return response.data;
      } catch (e: any) {
        alert(`${e.response.data.error}`);
        console.log(e);
      }
    }
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  const result = confirm("Deseja realmente sair?");
  if (result) {
    localStorage.removeItem("@login-fullstack:token");
  }
});
