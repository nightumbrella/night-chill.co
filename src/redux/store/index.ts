import { configureStore } from "@reduxjs/toolkit";
import backgroundSlice from "../slices/background-slice";

const store = configureStore({
  reducer: {
    background: backgroundSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
