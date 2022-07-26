import { createSlice } from '@reduxjs/toolkit';

export const switchModeSlice = createSlice({
    name: 'switchModeSlice',
    initialState: {
        showInvoice: true
    },
    reducers: {
        switchMode: (state) => {
            state.showInvoice = !state.showInvoice;
        },
    }
});

export const { switchMode } = switchModeSlice.actions;

export default switchModeSlice.reducer;