import { configureStore } from "@reduxjs/toolkit";
import weatherDetailSlice from "./slice/weatherDetail";
import citySearch from "./slice/citySearch";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    weatherReview: weatherDetailSlice,
    citySearchData: citySearch,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
