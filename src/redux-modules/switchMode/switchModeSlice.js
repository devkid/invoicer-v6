import { createSlice } from '@reduxjs/toolkit';

export const switchModeSlice = createSlice({
    name: 'switchMode',
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

export const modus = switchModeSlice.reducer;