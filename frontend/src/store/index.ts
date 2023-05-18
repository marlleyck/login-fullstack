import { configureStore } from "@reduxjs/toolkit";

import { authenticatedReducer } from "./ducks/authenticated";
import { userReducer } from "./ducks/user";

export const store = configureStore({
  reducer: {
    authenticated: authenticatedReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
