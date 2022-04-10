import { createSlice } from '@reduxjs/toolkit';

const baberBooking = localStorage.getItem('BABER-BOOKING')
  ? JSON.parse(localStorage.getItem('BABER-BOOKING'))
  : null;

const initialState = {
  user: baberBooking && baberBooking.user
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
          user: action.payload
        })
      );
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
