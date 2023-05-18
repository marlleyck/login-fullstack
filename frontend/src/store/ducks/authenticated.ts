import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  value: boolean | null;
}

const initialState: InitialState = {
  value: null,
};

const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const authenticatedReducer = authenticatedSlice.reducer;
export const authenticatedActions = authenticatedSlice.actions;
