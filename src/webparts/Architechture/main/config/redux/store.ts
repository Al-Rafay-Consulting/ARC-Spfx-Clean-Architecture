import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../features/module-01/store";
export const store: any = configureStore({
    reducer: {
        // our reducers goes here
       todoReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
