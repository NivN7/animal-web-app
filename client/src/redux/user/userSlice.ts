import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserStateInterface {
  currentUser: Record<string, any>;
  error: string;
  loading: boolean;
}

const initialState: UserStateInterface = {
  currentUser: {},
  error: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action: PayloadAction<Record<string, any>>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = "";
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
