import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAppColors } from "./settingsModels";

interface AppSettingsState {
    theme: IAppColors;
}

const initialState: AppSettingsState = {
    theme: {
        appBgColor: '#3f4d67'
    }
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
    }
})

export default settingsSlice.reducer