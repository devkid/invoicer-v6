import { createSlice } from '@reduxjs/toolkit';

export const stringArraySlice = createSlice({
    name: 'stringArray',
    initialState: {
        strings: []
    },
    reducers: {
        addString: (state, {payload}) => {
            state.strings.push(payload);
        },
        removeString: (state, {payload}) => {
            state.strings = state.strings.filter(({id}) => id !== payload);
        }
    }
})

export const { addString, removeString } = stringArraySlice.actions;

export const stringArrayReducer = stringArraySlice.reducer;