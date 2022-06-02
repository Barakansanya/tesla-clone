import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from '../features/counter/counterSlice';
import carReducer from '../features/counter/car/carSlice'

export const store = configureStore({
  reducer: {
    //  counter: counterReducer,
    car:carReducer
  },
});
