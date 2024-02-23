import { createSlice } from "@reduxjs/toolkit";
import { IAppTheme } from "./settingsModels";

interface AppSettingsState {
    theme: IAppTheme,
}

const initialState: AppSettingsState = {
    theme: {
        colors: {
            appBgColor: '#3f4d67',
            menuBgColor: '#263247',
            menuShadowColor: 'rgba(3, 25, 41, 0.2)',
            menuItemColor: '#a5b3cd',
            menuActiveColor: '#229dd9',
            menuSeparatorColor: '#54627c'
        },
        sizes: {
            menuWidth: 80,
            menuExpandedWidth: 200,
            menuItemHeight: 60,
            menuGliphSize: 25
        }
    },
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
    }
})

export default settingsSlice.reducer