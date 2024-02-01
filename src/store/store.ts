import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todoReducer from "./slices/todoSlice";
//! todoReducer - это то же самое что TodoSlice.reducer

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
