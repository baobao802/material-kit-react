import { createSlice } from '@reduxjs/toolkit';

const baberBooking = localStorage.getItem('BABER-BOOKING')
  ? JSON.parse(localStorage.getItem('BABER-BOOKING'))
  : {};

const initialState = {
  user: baberBooking.user || {}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(
        'BABER-BOOKING',
        JSON.stringify({
          ...baberBooking,
          user: action.payload
        })
      );
    },
    logout: (state) => {
      state.user = null;
      localStorage.setItem(
        'BABER-BOOKING',
        JSON.stringify({
          ...baberBooking,
          user: null
        })
      );
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectRole = (state) => ({
  isShop: state.auth.user.data.is_salo,
  isAdmin: state.auth.user.data.is_superadmin
});
