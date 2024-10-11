import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../../features/employee/store";
import todoReducer from "../../features/module-01/store";
export const store: any = configureStore({
  reducer: {
    // our reducers goes here
    todoReducer,
    employeeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
