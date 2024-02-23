import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settings/settingsSlice";
import menuReducer from "./slices/menuSlice";

export const store = configureStore({
    reducer: {
        appSettings: settingsReducer,
        menu: menuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch