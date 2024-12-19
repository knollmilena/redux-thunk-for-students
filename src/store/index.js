import { customerReducer } from "./customerReduser";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: customerReducer,
  thunk,
});
