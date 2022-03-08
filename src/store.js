import { configureStore } from '@reduxjs/toolkit';
import authReducer from './sections/authentication/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
