import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IMenuState {
    activeMenuItemID: number;
}

const initialState: IMenuState = {
    activeMenuItemID: 0
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setActiveMenuItesID: (state, action: PayloadAction<number>) => {
            state.activeMenuItemID = action.payload;
        }
    }
});

export const { setActiveMenuItesID } = menuSlice.actions;
export default menuSlice.reducer;

