import { createSlice } from '@reduxjs/toolkit';
import { fetchSwitchMode } from './switchModeActions';

const initialState = {
    isLoading: false,
    showInvoice: true,
    error: '',
};

 const switchModeSlice = createSlice({
    name: 'switchMode',
    initialState,
    reducers: {
        switchMode: (state) => {
            console.log('state switchMode.showInvoice',state.showInvoice)
            state.showInvoice = !state.showInvoice;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSwitchMode.pending, (draft) => {
            draft.isLoading = true;
        })
        builder.addCase(fetchSwitchMode.fulfilled, (draft, action) => {
            console.log('fetchSwitchMode', action.payload)
            draft.switchMode.push(action.payload)
            console.log('draft.switchMode',draft.switchMode)
        })
        builder.addCase(fetchSwitchMode.rejected, (draft, action) => {
            console.log(action.payload)
        })
    }

});


export default switchModeSlice.reducer;

export const { switchMode } = switchModeSlice.actions;
