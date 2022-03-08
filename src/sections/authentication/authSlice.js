import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.user = true;
    },
    logout: (state) => {
      state.user = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
