import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {

  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
